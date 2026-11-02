# Proposal

## Why

O PortalCopa26 já tem um protótipo HTML validado (`../prototipo`) e decisões arquiteturais registradas no `CLAUDE.md`, mas ainda não existe aplicação. Todas as capacidades futuras (Landing Page, Jogos, Grupos, Seleções, Ranking FIFA, Simulador) dependem de uma base comum: o host Blazor, o banco SQLite com o modelo do torneio já populado a partir das fontes oficiais e a persistência das simulações. Esta change cria essa fundação para que as próximas changes tratem apenas da funcionalidade de cada página.

## What Changes

- Criar a solução `PortalCopa26` (`src/PortalCopa26.slnx`) com um único projeto Blazor Web App em .NET 10 (`src/PortalCopa26/`), renderização Interactive Server e Bootstrap 5.
- Criar a estrutura de pastas definida no `CLAUDE.md` (`Components/Pages/<Capacidade>`, `Models`, `Services`, `Data`), com os componentes de página das capacidades criados apenas como placeholders de navegação.
- Configurar EF Core com o provider SQLite, connection string em `appsettings.json` e migrations versionadas. O arquivo do banco fica em `src/PortalCopa26/App_Data/copa2026.db`, qualquer que seja o diretório de onde a aplicação é executada.
- Criar o `PortalCopa26DbContext` e as entidades `Grupo`, `Selecao`, `Jogador`, `Jogo`, `RankingFifa`, `Simulacao` e `SimulacaoJogo`, além de uma entidade de apoio `Estadio`, necessária para representar os estádios dos jogos.
- Copiar os arquivos oficiais de `../prototipo/fontes` para dentro do projeto e criar o `SeedData`, que lê esses arquivos e popula o banco de forma idempotente ao iniciar a aplicação.
- Registrar no contêiner de DI nativo o DbContext (via factory, adequado ao Blazor Server), o seed e o serviço de persistência de simulações, num ponto único de registro que as próximas changes estendem com os serviços de cada capacidade.
- Criar um projeto de testes para validar a carga dos dados oficiais e a persistência das simulações.
- Atualizar o `CLAUDE.md` para refletir as fontes reais: a localização `../prototipo/fontes`, os 104 jogos, as 7 fases, a lista completa de arquivos oficiais usados e os documentos complementares que não existem.
- Deixar Chart.js disponível como asset estático para o futuro gráfico do Ranking FIFA, sem implementar nenhum gráfico agora.

## Capabilities

### New Capabilities
- `fundacao-aplicacao`: host Blazor Web App, estrutura do projeto, configuração, inicialização do banco e registro de serviços que as demais capacidades utilizam.
- `dados-torneio`: modelo persistido do torneio (grupos, seleções, jogadores, estádios, jogos e ranking FIFA) e sua carga a partir dos arquivos oficiais da pasta `fontes`.
- `persistencia-simulacoes`: armazenamento durável das simulações do usuário e dos placares simulados de cada jogo.

### Modified Capabilities
- Nenhuma (não há specs existentes em `openspec/specs/`).

## Impact

- **Código novo**: tudo em `src/` (hoje vazio): `src/PortalCopa26/` e `src/PortalCopa26.Tests/`. Nenhum código existente é alterado.
- **Documentação**: o `CLAUDE.md` na raiz é corrigido (seções Referências, Dados Oficiais e Documentação Complementar), sem mudar as decisões arquiteturais.
- **Dependências**: SDK .NET 10; pacotes `Microsoft.EntityFrameworkCore.Sqlite` e `Microsoft.EntityFrameworkCore.Design`; ferramenta `dotnet-ef` declarada num manifesto local (`src/.config/dotnet-tools.json`) e restaurada com `dotnet tool restore`, sem instalação global; Bootstrap 5 (já incluso no template) e Chart.js como arquivo estático em `wwwroot/lib`.
- **Dados**: os arquivos de `../prototipo/fontes` passam a ser copiados para `src/PortalCopa26/Data/Fontes/`; os arquivos não relacionados ao torneio (`ddd_ajustes_refinamentos1.txt`) não são copiados.
- **Banco**: cria `src/PortalCopa26/App_Data/copa2026.db`; a pasta `App_Data/` é ignorada pelo git.
- **Fora do escopo**: implementação das páginas Landing Page, Jogos, Grupos, Seleções, Ranking FIFA e Simulador; cálculo de classificação; integração com APIs externas (as bandeiras usam apenas URLs públicas da FIFA, montadas a partir do código da seleção); área administrativa; autenticação.
