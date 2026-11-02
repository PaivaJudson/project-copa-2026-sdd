# PortalCopa26 — código-fonte

Blazor Web App (.NET 10, Interactive Server) com EF Core + SQLite.

```text
src/
├── PortalCopa26.slnx
├── .config/dotnet-tools.json   # dotnet-ef (manifesto local)
├── PortalCopa26/               # aplicação
└── PortalCopa26.Tests/         # testes xUnit
```

## Executar

A partir de `PRD/` (ou de qualquer outra pasta, porque o content root é sempre `src/PortalCopa26`):

```bash
dotnet run --project src/PortalCopa26
```

Na primeira execução, a aplicação cria o banco, aplica as migrations e carrega os dados oficiais. O console mostra:

```text
Seed concluído: 12 grupos, 48 seleções, 1238 jogadores, 16 estádios, 104 jogos, 98 posições no ranking
```

Nas execuções seguintes, a mensagem é `Seed ignorado: dados oficiais já carregados`.

## Testes

```bash
dotnet test src/PortalCopa26.slnx
```

## Banco de dados

- Arquivo: `src/PortalCopa26/App_Data/copa2026.db`, configurado em `ConnectionStrings:PortalCopa26` no `appsettings.json`. Um caminho relativo é resolvido a partir da pasta do projeto, não do diretório de execução. Numa publicação, o banco fica em `App_Data/` dentro da pasta publicada.
- `App_Data/` é ignorada pelo git.
- Para recriar o banco com os dados oficiais, apague `src/PortalCopa26/App_Data/` e execute de novo. As simulações gravadas são perdidas.

## Migrations

O `dotnet-ef` é instalado pelo manifesto local; nada é instalado globalmente. Execute os comandos em `src/`:

```bash
cd src
dotnet tool restore
dotnet tool run dotnet-ef migrations add <NomeDaMigration> --project PortalCopa26 -o Data/Migrations
dotnet tool run dotnet-ef migrations script --project PortalCopa26
```

As migrations são aplicadas automaticamente quando a aplicação inicia.

## Dados oficiais

`PortalCopa26/Data/Fontes/` é uma **cópia** dos arquivos de `../prototipo/fontes` (relativo a `PRD/`), que são a fonte oficial dos dados da Copa. Se uma fonte mudar, copie o arquivo de novo e recrie o banco: a carga roda só quando o banco ainda não tem dados oficiais.

Arquivos lidos pela carga (`Data/Seed/FontesOficiais.cs`): grupos, técnicos, elencos, cidades-sede/estádios, ranking FIFA, jogos da primeira fase e os seis arquivos de mata-mata (segunda fase, oitavas, quartas, semifinais, 3º lugar e final).

Os horários dos jogos estão em horário de Brasília (UTC-03:00). Use `Jogo.InicioUtc` para comparar com o instante atual.
