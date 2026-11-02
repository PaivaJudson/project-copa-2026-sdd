# Design

## Context

- `src/` está vazio; o SDK .NET 10 (10.0.403) está instalado. Motivação em proposal.md (Why).
- Os arquivos oficiais estão em `../prototipo/fontes` (relativo a esta raiz), e não em `./fontes`, como diz o `CLAUDE.md`. Os documentos `./docs/RegrasCopa2026.md` e `./docs/EstruturaDados.md` citados pelo `CLAUDE.md` não existem; as referências de domínio disponíveis são `../prototipo/docs/PRD.md` e `copa2026_regras_negocio.txt`.
- Os arquivos oficiais são texto livre e usam formatos diferentes: tabelas com TAB, tabelas Markdown, `Nome|Idade|Posição|Gols` sob `# Seleção`, e blocos de jogos com várias linhas.
- Os nomes das seleções variam entre os arquivos (ex.: "República da Coreia"/"Coreia do Sul", "Tchéquia"/"República Tcheca", "EUA", "Países Baixos"/"Holanda", "Côte d'Ivoire", "República Islâmica do Irã", "República Democrática do Congo"/"RD Congo", "Bósnia"). Os estádios aparecem pelo nome no arquivo de sedes, mas pela cidade nos arquivos de jogos ("Estádio de Santa Clara", "Azteca", "Seattle Field", "Nova Jersey").
- Os arquivos não trazem códigos FIFA. O protótipo validado (`../prototipo/js/site.js`) já tem o código de três letras de cada uma das 48 seleções.
- Contagens observadas nos arquivos: 48 seleções, 12 grupos, 16 estádios, 1.238 jogadores (posições: Goleiro, Defensor, Meio-campista, Atacante), 98 posições no ranking, 104 jogos (72 + 16 + 8 + 4 + 2 + 1 + 1).

## Goals / Non-Goals

**Goals:**
- Um modelo de domínio sem dependência de EF, para que `Models` possa virar uma camada de domínio depois sem reescrita.
- Uma carga de dados determinística, transacional e testável sem subir a aplicação.
- Um único ponto de registro de DI que as próximas changes estendem.

**Non-Goals:**
- Calcular ou persistir classificações de grupo. O `CLAUDE.md` prevê guardar "classificações geradas a partir das simulações"; isso fica para a change do Simulador, que vai definir o algoritmo de desempate (RN-01) e decidir se a classificação é guardada ou calculada a cada vez.
- Serviços de leitura de Jogos, Grupos, Seleções, Ranking e Landing Page; cada change de página cria o seu.
- Fair play/cartões, prorrogação e pênaltis no modelo de jogo. Ficam para quando o Simulador de mata-mata precisar deles.
- Atualização da carga quando os arquivos oficiais mudam depois da primeira execução.

## Decisions

### D1 — Estrutura da solução
```text
src/
  PortalCopa26.slnx
  .config/dotnet-tools.json         # manifesto local com dotnet-ef
  PortalCopa26/                     # Blazor Web App (dotnet new blazor --interactivity Server --all-interactive)
    Components/Layout/              # MainLayout, NavMenu
    Components/Pages/{LandingPage,Jogos,Grupos,Selecoes,Ranking,Simulador}/
    Components/Shared/              # componentes reutilizáveis (vazio por enquanto)
    Models/                         # entidades POCO + enums
    Data/PortalCopa26DbContext.cs
    Data/Configurations/            # IEntityTypeConfiguration<T> por entidade
    Data/Migrations/
    Data/Seed/                      # SeedData, parsers, catálogos de nomes
    Data/Fontes/                    # cópia dos .txt oficiais (CopyToOutputDirectory)
    App_Data/copa2026.db            # gerado na execução; ignorado pelo git
    Services/Simulador/             # ISimuladorService, SimuladorService
    Services/ServiceCollectionExtensions.cs
    wwwroot/lib/chartjs/chart.umd.min.js
  PortalCopa26.Tests/               # xUnit
```
Usamos interatividade Server global porque o Simulador vai precisar de estado interativo e a aplicação é local, sem requisitos de escala. Alternativa considerada: Auto/WebAssembly, que exigiria um segundo projeto client e API HTTP para os dados; isso contraria o projeto único. A Home fica em `Components/Pages/LandingPage/Home.razor` com rota `/`.

### D2 — Modelo de dados
As entidades ficam em `Models`, sem atributos de EF; todo o mapeamento vai em `Data/Configurations` (Fluent API).

| Entidade | Campos principais | Restrições |
|---|---|---|
| `Grupo` | Id, Letra (`char`) | Letra única |
| `Selecao` | Id, Nome, CodigoFifa, GrupoId, Pote (1–4), CabecaDeChave, Tecnico | Nome único, CodigoFifa único |
| `Jogador` | Id, SelecaoId, Nome, Idade, Posicao (`PosicaoJogador`), Gols | FK Selecao (cascade) |
| `Estadio` | Id, Nome, Cidade, Pais, Capacidade | Nome único |
| `Jogo` | Id, Fase (`FaseTorneio`), NumeroNaFase, DataHora, EstadioId, GrupoId?, MandanteId?, VisitanteId?, VagaMandante?, VagaVisitante?, GolsMandante?, GolsVisitante? | (Fase, NumeroNaFase) único; índices em DataHora e GrupoId; FKs Restrict |
| `RankingFifa` | Id, Posicao, NomeSelecao, Pontos (`double`), SelecaoId? | Posicao única; SelecaoId único quando presente |
| `Simulacao` | Id, Nome, CriadaEm, AtualizadaEm | Nome obrigatório (máx. 100) |
| `SimulacaoJogo` | Id, SimulacaoId, JogoId, GolsMandante, GolsVisitante | (SimulacaoId, JogoId) único; cascade a partir de Simulacao; Restrict para Jogo; CHECK gols ≥ 0 |

- `FaseTorneio` é um enum (Grupos, SegundaFase, Oitavas, Quartas, Semifinal, TerceiroLugar, Final) armazenado como inteiro, e não uma tabela: as fases são fixas, e nenhuma fonte traz atributos de fase além do que o código já sabe. `PosicaoJogador` segue a mesma regra, com valores tirados do arquivo de elencos.
- `Estadio` não está na lista do pedido, mas é necessário: a spec exige estádio por jogo, com cidade e capacidade. A alternativa de guardar o estádio como texto dentro de `Jogo` duplicaria dados e impediria consultas por sede.
- `Pontos` usa `double` porque o provider SQLite do EF não ordena nem compara `decimal` no servidor, e o ranking vai ser ordenado e plotado.
- `DataHora` é `DateTime` com a data e a hora exatamente como estão na fonte (ano 2026 para os arquivos que trazem só dia/mês), e esse valor está em **horário de Brasília (UTC-03:00)**. A convenção vem do protótipo validado, que monta as datas com `-03:00` (`dataHoraJogo` em `../prototipo/js/site.js`).
  - Uma constante única `Models/FusoTorneio.Offset = -03:00` e uma propriedade não mapeada `Jogo.InicioUtc`, que devolve um `DateTimeOffset`, fazem a conversão quando for preciso comparar com o instante atual (próximos jogos, countdown).
  - Alternativa descartada: guardar `DateTimeOffset`. O provider SQLite do EF não traduz ordenação nem comparação de `DateTimeOffset` para SQL, e ordenar por data é a consulta mais comum. Como o fuso é fixo (o Brasil não tem horário de verão desde 2019), um `DateTime` em horário de Brasília com offset conhecido não perde informação.
- As colunas de placar oficial em `Jogo` ficam nulas nesta change. Elas existem para não exigir migration quando os resultados entrarem.

### D3 — DbContext e inicialização
- `AddDbContextFactory<PortalCopa26DbContext>(o => o.UseSqlite(connectionString))` com `ConnectionStrings:PortalCopa26 = "Data Source=App_Data/copa2026.db"` em `appsettings.json`. A factory foi escolhida porque, no Blazor Server, um circuito vive muito tempo e um DbContext scoped seria compartilhado entre operações concorrentes; cada método de serviço abre e descarta o próprio contexto.
- Local do banco: o content root do ASP.NET Core é o diretório de execução, então `Data Source` relativo criaria bancos diferentes conforme o lugar de onde se roda `dotnet run`. Duas medidas evitam isso:
  1. O csproj define `<RunWorkingDirectory>$(MSBuildProjectDirectory)</RunWorkingDirectory>`, para que `dotnet run --project src/PortalCopa26` sempre use `src/PortalCopa26` como content root.
  2. `AddPortalCopa26` lê a connection string com `SqliteConnectionStringBuilder`. Se o `DataSource` for relativo, ele é combinado com `IHostEnvironment.ContentRootPath`, e a pasta `App_Data` é criada se não existir.

  Alternativa descartada: `AppContext.BaseDirectory`, que colocaria o banco em `bin/` e misturaria os dados do usuário com artefatos de build.
- O esquema é versionado por migrations (`dotnet ef migrations add Inicial`). O `dotnet-ef` fica num manifesto local (`src/.config/dotnet-tools.json`, criado com `dotnet new tool-manifest` e restaurado com `dotnet tool restore`), com versão fixa e versionado junto do código, sem instalação global no perfil do usuário. Antes de `app.Run()`, um `DatabaseInitializer` executa `MigrateAsync()` e em seguida `SeedData.ExecutarAsync()`. Alternativa descartada: `EnsureCreated`, que não permite evoluir o esquema depois.

### D4 — Carga dos dados oficiais (SeedData)
- Os `.txt` oficiais são copiados para `Data/Fontes/` e publicados com `CopyToOutputDirectory=PreserveNewest`. O caminho é lido de `Seed:FontesPath` (padrão relativo `Data/Fontes`) e resolvido a partir de `AppContext.BaseDirectory`. Alternativa descartada: apontar para `../prototipo/fontes`, que acopla a execução à estrutura do repositório e quebra na publicação. `ddd_ajustes_refinamentos1.txt` não é copiado porque não pertence ao domínio.
- Cada arquivo tem um parser próprio e puro (`string[] linhas → registros`), testável sem banco. Arquivos usados: grupos, pais_tecnicos, selecoes_jogadores, cidades_sede_estadios, ranking_fifa, jogos_primeira_fase, Jogos_Segunda_fase, jogos_oitavas, jogos_quartas, jogos_semifinal, jogo_terceiro_lugar e jogo_final. `copa2026_cabecas-chave.txt` (que não traz o grupo L) e `copa2026_estadios.txt` são redundantes com grupos e sedes; o pote e a cabeça de chave saem da coluna do arquivo de grupos.
- `SelecaoCatalogo` mapeia o nome canônico (de `copa2026_grupos.txt`) para o código FIFA (copiado do protótipo) e para a lista de aliases. `EstadioCatalogo` mapeia cada variação de cidade ou apelido para o estádio. Na carga de jogos, elencos e técnicos, um nome sem correspondência gera exceção com arquivo e linha. No ranking, o nome sem correspondência é gravado sem vínculo.
- Idempotência: se já existe algum `Grupo`, a carga não faz nada. Todo o resto roda em uma única transação, então uma falha não grava dados parciais.
- Ao final, `SeedData` registra via `ILogger` uma linha com as contagens (por exemplo, `Seed concluído: 12 grupos, 48 seleções, 1238 jogadores, 16 estádios, 104 jogos, 98 posições no ranking`). Quando a carga é pulada, registra `Seed ignorado: dados oficiais já carregados`. Assim a primeira execução pode ser conferida pelo console, sem ferramenta externa de SQLite.
- Alternativa descartada: `HasData` nas migrations, que colocaria cerca de 1.500 linhas literais em migrations e obrigaria a gerar uma nova migration a cada correção das fontes.

### D5 — Serviços e DI
- `Services/ServiceCollectionExtensions.AddPortalCopa26(IServiceCollection, IConfiguration)` registra a factory, o `DatabaseInitializer`, o `SeedData` e `ISimuladorService`. As próximas changes acrescentam seus serviços aqui. `Program.cs` só chama esse método.
- `ISimuladorService` (nesta change, apenas persistência): `CriarAsync(nome)`, `ObterAsync(id)`, `ListarAsync()`, `SalvarPlacarAsync(simulacaoId, jogoId, golsMandante, golsVisitante)` (upsert que também atualiza `AtualizadaEm`), `ExcluirAsync(id)`. As validações da spec são feitas no serviço (`ArgumentException`/`InvalidOperationException`), e o CHECK no banco funciona como segunda barreira.
- Os serviços recebem `TimeProvider` para que as datas sejam testáveis.

### D6 — Recursos de interface
- Bootstrap 5 vem do template. Chart.js 4.4.x (`chart.umd.min.js`) é copiado para `wwwroot/lib/chartjs/` e não é referenciado por nenhuma página ainda. O wrapper JSInterop reutilizável fica para a change do Ranking.
- As páginas placeholder usam um único componente `Components/Shared/EmConstrucao.razor`, para não repetir markup.

### D7 — Testes
- `PortalCopa26.Tests` (xUnit) referencia o projeto web. Os parsers são testados com trechos dos arquivos reais. A carga completa e o `SimuladorService` são testados com SQLite em memória (`DataSource=:memory:` com conexão aberta), usando os arquivos reais de `Data/Fontes` para conferir as contagens e os exemplos das specs.

## Risks / Trade-offs

- [Aliases incompletos fazem a carga falhar na primeira execução] → Falhar é intencional (nada de dados inventados); o teste de carga completa com os arquivos reais pega isso antes da execução.
- [Fontes diferentes de `../prototipo/fontes` sem que ninguém perceba] → A pasta `Data/Fontes` vira a cópia oficial dentro da aplicação; o README do projeto deve dizer que a origem é `../prototipo/fontes`.
- [Contagem de jogos diferente do documentado: o `CLAUDE.md` e `copa2026_fases.txt` dizem 102, mas a soma da própria tabela de fases e os arquivos de jogos dão 104] → A carga segue os arquivos de jogos (104), e a spec define as contagens por fase. Se 102 estiver certo, a correção é nas fontes.
- [Contagem de fases: o `CLAUDE.md` fala em 6, mas `copa2026_fases.txt` lista 7 linhas, porque 3º lugar e Final são fases separadas] → O enum tem 7 valores, iguais à tabela de fases.
- [Os jogos da segunda fase já trazem seleções definidas, o que antecipa resultados da fase de grupos] → A carga grava exatamente o que está na fonte. O Simulador vai poder recalcular esses confrontos sem alterar os dados oficiais.
- [Comparar `DataHora` (horário de Brasília) direto com `DateTime.Now` do servidor dá erro se o servidor estiver em outro fuso] → As comparações com o instante atual usam `Jogo.InicioUtc` contra `TimeProvider.GetUtcNow()`, nunca o relógio local.
- [O banco SQLite poderia ir parar no git] → `App_Data/`, `*.db` e `*.db-*` entram no `.gitignore`.
- [Quem executa o binário publicado fora da pasta de publicação perde o banco anterior] → Em publicação, o content root é a pasta publicada; o README registra que o banco fica em `App_Data/` dentro dela.
- [O `CLAUDE.md` contradiz os arquivos reais e induz erro nas próximas changes] → Esta change corrige o `CLAUDE.md` (tarefa 7.3) só nos pontos de fato: caminho das fontes, contagens, arquivos oficiais e documentos complementares. As decisões arquiteturais não mudam.

## Migration Plan

Greenfield: não há dados nem implantação anteriores. Para reverter, basta apagar `src/PortalCopa26/App_Data/copa2026.db`; a próxima inicialização recria o banco e recarrega os dados.

## Open Questions

- A capacidade do BMO Field aparece como "30.000*" sem explicar o asterisco. A carga grava 30.000.
