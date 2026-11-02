# Tasks

## 1. Solução e projeto base

- [x] 1.1 Criar `src/PortalCopa26.slnx`, o projeto `src/PortalCopa26` (`dotnet new blazor --interactivity Server --all-interactive`, net10.0) e o projeto `src/PortalCopa26.Tests` (xUnit, referenciando o web); verificar com `dotnet build src/PortalCopa26.slnx` sem erros
- [x] 1.2 Criar as pastas `Components/Pages/{LandingPage,Jogos,Grupos,Selecoes,Ranking,Simulador}`, `Components/Shared`, `Models`, `Services`, `Data/{Configurations,Seed,Fontes}`, movendo a Home do template para `Components/Pages/LandingPage/Home.razor` (rota `/`) e removendo as páginas de exemplo Counter e Weather; verificar que o build continua limpo
- [x] 1.3 Adicionar `.gitignore` em `src/` com `bin/`, `obj/`, `App_Data/`, `*.db`, `*.db-shm` e `*.db-wal`; verificar com `git status` que nenhum artefato de build ou banco aparece
- [x] 1.4 Adicionar `<RunWorkingDirectory>$(MSBuildProjectDirectory)</RunWorkingDirectory>` ao `PortalCopa26.csproj`; verificar que `dotnet run --project src/PortalCopa26`, executado a partir de `PRD/`, informa `Content root path` igual a `src/PortalCopa26`

## 2. Layout, navegação e recursos estáticos

- [x] 2.1 Criar `Components/Shared/EmConstrucao.razor` e as páginas placeholder Jogos (`/jogos`), Grupos (`/grupos`), Seleções (`/selecoes`), Ranking (`/ranking`) e Simulador (`/simulador`), cada uma em sua pasta; verificar que cada rota abre no navegador com o aviso de funcionalidade não implementada
- [x] 2.2 Ajustar `NavMenu.razor` com as entradas Home, Jogos, Grupos, Seleções, Ranking e Simulador; verificar a navegação entre todas as rotas
- [x] 2.3 Copiar Chart.js 4.4.x (`chart.umd.min.js`) para `wwwroot/lib/chartjs/`; verificar com a aplicação rodando que `GET /lib/chartjs/chart.umd.min.js` responde 200

## 3. Modelo de dados e DbContext

- [x] 3.1 Adicionar os pacotes `Microsoft.EntityFrameworkCore.Sqlite` e `Microsoft.EntityFrameworkCore.Design` (10.x); criar o manifesto local em `src/` (`dotnet new tool-manifest` e `dotnet tool install dotnet-ef --version 10.*`, sem `--global`); verificar que existe `src/.config/dotnet-tools.json` e que `dotnet tool run dotnet-ef --version`, executado em `src/`, responde 10.x
- [x] 3.2 Criar em `Models` os enums `FaseTorneio` (7 valores) e `PosicaoJogador` (Goleiro, Defensor, MeioCampista, Atacante) e as entidades POCO `Grupo`, `Selecao`, `Jogador`, `Estadio`, `Jogo`, `RankingFifa`, `Simulacao` e `SimulacaoJogo`, conforme a tabela D2 do design; verificar que `Models` não referencia nenhum namespace do EF
- [x] 3.3 Criar `Data/PortalCopa26DbContext.cs` e uma `IEntityTypeConfiguration<T>` por entidade em `Data/Configurations` (índices únicos, FKs Restrict/Cascade, CHECK de gols ≥ 0, tamanho do nome da simulação), aplicadas por `ApplyConfigurationsFromAssembly`; verificar com teste em SQLite em memória que `EnsureCreated` gera o esquema e que inserir um `SimulacaoJogo` duplicado para o mesmo jogo falha
- [x] 3.4 Gerar a migration `Inicial` em `Data/Migrations` (em `src/`: `dotnet tool run dotnet-ef migrations add Inicial --project PortalCopa26 -o Data/Migrations`); verificar que `dotnet tool run dotnet-ef migrations script --project PortalCopa26` gera todas as 8 tabelas

## 4. Carga dos dados oficiais

- [x] 4.1 Copiar para `Data/Fontes/` os arquivos oficiais de `../prototipo/fontes` usados pela carga (design D4) e marcá-los com `CopyToOutputDirectory=PreserveNewest`; verificar que aparecem em `bin/.../Data/Fontes` após o build
- [x] 4.2 Criar `Data/Seed/SelecaoCatalogo` (48 nomes canônicos, códigos FIFA tirados de `../prototipo/js/site.js` e aliases dos arquivos) e `Data/Seed/EstadioCatalogo` (16 estádios e as variações de cidade e apelido usadas nos jogos); verificar com testes que todo nome de seleção e de sede que aparece nos arquivos de grupos, técnicos, elencos e jogos é resolvido
- [x] 4.3 Implementar os parsers de grupos, técnicos, elencos, estádios e ranking; verificar com testes os exemplos da spec `dados-torneio` (grupo C, técnico do Brasil, Riyad Mahrez, Estádio Azteca 87.523, Argentina 1ª com 1877.72, Itália 12ª sem vínculo) e a mensagem de erro com arquivo e linha para uma linha inválida
- [x] 4.4 Implementar os parsers dos jogos da fase de grupos e do mata-mata (vagas do tipo "Venc. Oitavas 1" e seleções definidas na segunda fase); criar `Models/FusoTorneio` e `Jogo.InicioUtc` (design D2); verificar com testes o primeiro jogo (México x África do Sul, 11/06/2026 16:00 em horário de Brasília, `InicioUtc` = 2026-06-11T19:00Z, Azteca, grupo A), as contagens 72/16/8/4/2/1/1 e "Brasil x Japão" vinculado na segunda fase
- [x] 4.5 Implementar `Data/Seed/SeedData.ExecutarAsync` (pula se já há grupos, tudo em uma transação, com log das contagens ou de "Seed ignorado", conforme design D4) usando o caminho de `Seed:FontesPath`; verificar com teste em SQLite em memória sobre os arquivos reais: 12 grupos × 4, 48 seleções com elenco, 16 estádios, 104 jogos, 98 posições no ranking; uma segunda execução não duplica nada e registra "Seed ignorado"; um arquivo ausente deixa o banco vazio; e o log de conclusão traz as contagens (teste com um `ILogger` de captura)

## 5. Inicialização e injeção de dependência

- [x] 5.1 Criar `Data/DatabaseInitializer` (`MigrateAsync` e depois o seed) e `Services/ServiceCollectionExtensions.AddPortalCopa26`, que registra `AddDbContextFactory` com SQLite, o seed, o initializer e `TimeProvider.System`. O `DataSource` relativo é resolvido contra `ContentRootPath`, e `App_Data/` é criada se não existir (design D3). Adicionar `ConnectionStrings:PortalCopa26 = "Data Source=App_Data/copa2026.db"` e `Seed:FontesPath` ao `appsettings.json`. Verificar que `Program.cs` só chama `AddPortalCopa26` e executa o initializer antes de `app.Run()`, e verificar com teste unitário que um `DataSource` relativo vira um caminho absoluto sob o content root informado
- [x] 5.2 Verificar a primeira execução: apagar `src/PortalCopa26/App_Data/`, rodar `dotnet run --project src/PortalCopa26` a partir de `PRD/` e confirmar HTTP 200 em `/`, a linha `Seed concluído: 12 grupos, 48 seleções, 1238 jogadores, 16 estádios, 104 jogos, 98 posições no ranking` no console e a criação de `src/PortalCopa26/App_Data/copa2026.db`. Rodar de novo, agora de dentro de `src/PortalCopa26`, e confirmar `Seed ignorado` e que não surgiu nenhum outro `.db` no repositório (`git status --ignored` ou busca por `*.db`)

## 6. Persistência de simulações

- [x] 6.1 Criar `Services/Simulador/ISimuladorService` e `SimuladorService` (CriarAsync, ObterAsync, ListarAsync, SalvarPlacarAsync com upsert e atualização de `AtualizadaEm`, ExcluirAsync) usando `IDbContextFactory` e `TimeProvider`, e registrá-los em `AddPortalCopa26`; verificar com testes em SQLite em memória cada cenário da spec `persistencia-simulacoes` (nome vazio, gols negativos, jogo inexistente, substituição de placar, simulações independentes, exclusão em cascata, jogo oficial continua sem placar)
- [x] 6.2 Verificar a durabilidade: com um banco em arquivo temporário, gravar uma simulação, descartar os contextos, executar de novo o initializer (migrate e seed) e confirmar por teste que a simulação e seus placares continuam iguais

## 7. Verificação final

- [x] 7.1 Rodar `dotnet test src/PortalCopa26.slnx` com todos os testes passando e confirmar com grep que nenhum `.razor` em `Components/` injeta `PortalCopa26DbContext` ou `IDbContextFactory`
- [x] 7.2 Criar `src/README.md` com: como executar, `dotnet tool restore` antes das migrations, como gerar migrations via `dotnet tool run dotnet-ef`, onde fica o banco (`App_Data/copa2026.db`) e o aviso de que `Data/Fontes` é cópia de `../prototipo/fontes`; verificar que os comandos documentados rodam como estão escritos
- [x] 7.3 Atualizar o `CLAUDE.md` da raiz só nos pontos de fato, sem mudar as decisões arquiteturais:
  - fontes em `../prototipo/fontes`, com a cópia de execução em `src/PortalCopa26/Data/Fontes`;
  - lista completa dos 12 arquivos oficiais usados pela carga;
  - 104 jogos no total e 7 fases;
  - 16 estádios e 1.238 jogadores;
  - horários dos jogos em horário de Brasília (UTC-03:00);
  - `./docs/RegrasCopa2026.md` e `./docs/EstruturaDados.md` substituídos por `../prototipo/docs/PRD.md` e `copa2026_regras_negocio.txt`, que são as referências que existem.

  Verificar que cada caminho citado no `CLAUDE.md` existe e que os números batem com o log da tarefa 5.2

## Workflow follow-up

- Revisar a change e arquivá-la com `/opsx:archive` quando a implementação estiver concluída.
