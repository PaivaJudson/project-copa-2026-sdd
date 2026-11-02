# PRD - PortalCopa26

## # 1. Visão Geral

O PortalCopa26 é uma aplicação web voltada para fãs da Copa do Mundo FIFA 2026.

O objetivo é fornecer informações organizadas sobre jogos, grupos, seleções, classificação e ranking FIFA, além de permitir a simulação dos resultados da competição.

A primeira versão será implementada como um protótipo HTML/CSS/JavaScript e posteriormente evoluída para uma aplicação Blazor Web App utilizando .NET 10, EF Core e SQLite.

## # 2. Objetivos
O sistema deve permitir que o usuário:
- Consultar os jogos da Copa do Mundo 2026
- Visualizar grupos e classificação
- Consultar informações das seleções
- Consultar os elencos das seleções
- Visualizar o ranking FIFA
- Simular resultados dos jogos
- Simular a classificação dos grupos

## # 3. Público-Alvo
- Fãs de futebol
- Acompanhantes da Copa do Mundo
- Usuários interessados em estatísticas e simulações

## # 4. Navegação Principal
A aplicação deverá possuir as seguintes páginas:

### Home
Landing page principal.

### Jogos
Exibe todos os jogos da Copa ordenados por data.

### Grupos
Exibe os grupos e a classificação.

### Equipes
Exibe as seleções participantes.

### Ranking
Exibe o ranking FIFA.

### Simulador
Permite simular os resultados dos jogos.

## # 5. Página Home
A Home deverá conter:

### Hero Section
- Logo da Copa
- Nome do portal
- Países-sede

### Países-Sede
Exibir:
- Canadá
- Estados Unidos
- México

### Próximos Jogos
Exibir os próximos jogos da competição.

## # 6. Página Jogos
Exibir:
- Data do jogo
- Hora
- Seleção mandante
- Seleção visitante
- Grupo
- Estádio

Recursos:
- Ordenação por data
- Agrupamento por dia

Link:
- Ver grupos

## # 7. Página Grupos
Exibir os grupos da competição.
Cada grupo deverá apresentar:
- Posição
- Seleção
- Jogos
- Vitórias
- Empates
- Derrotas
- Gols marcados
- Saldo de gols
- Pontos

## # 8. Página Equipes
Exibir todas as seleções participantes.
Ao selecionar uma equipe, exibir:
- Bandeira
- Nome
- Grupo
- Elenco

Cada jogador deverá apresentar:
- Nome
- Posição
- Idade
- Gols marcados
- Participações em Copas

## # 9. Página Ranking
Exibir o ranking FIFA.
Informações:
- Posição
- Seleção
- Pontuação

## # 10. Página Simulador
Permitir:
- Informar placares
- Simular resultados
- Recalcular classificação

O simulador deverá atualizar:
- Pontuação
- Saldo de gols
- Classificação do grupo

## # 11. Fonte dos Dados
Os dados iniciais serão carregados através de Seed a partir da pasta `\fontes` do projeto.

Dados iniciais previstos:
- Seleções
- Fases
- Estádios
- País/Técnicos
- Grupos
- Jogadores
- Jogos
- Ranking FIFA
- Regras terceiro colocado
- Seleções/Jogadores

As bandeiras poderão ser obtidas através da API pública da FIFA.

Exemplo:
`https://api.fifa.com/api/v3/picture/flags-sq-4/MEX`

O logo da FIFA poderá ser obtido da API da FIFA.

Exemplo:
`https://api.fifa.com/api/v3/picture/tournaments-sq-4/285023`

## # 12. Estrutura do Protótipo
### Estrutura do Protótipo
O protótipo deverá utilizar uma arquitetura simples baseada em HTML, CSS e JavaScript.

A estrutura esperada é:

```text
prototipo/
│
├── css/
│   └── site.css          # Estilos globais da aplicação
│
├── js/
│   └── site.js           # Dados da Copa e funções Javascript
│
├── docs/
│   └── PRD.md            # Documento de requisitos do projeto
│
└── fontes/               # Fonte da verdade do projeto
|    ├── copa2026_grupos.txt
|    ├── copa2026_jogos.txt
|    ├── copa2026_fases.txt
|    ├── copa2026_estadios.txt
|    ├── copa2026_cabecas-chave.txt
|    ├── copa2026_cidades_sede_estadios.txt
|    ├── copa2026_pais_tecnicos.txt
|    ├── copa2026_ranking_fifa.txt
|    ├── copa2026_regras_negocio.txt
|    ├── Copa2026_Regra_Terceiros_Colocados.txt
|    └── copa2026_selecoes_jogadores.txt
├── index.html            # Landing Page
├── jogos.html            # Lista de Jogos
├── grupos.html           # Classificação dos grupos
├── equipes.html          # Seleções participantes
├── ranking.html          # Ranking FIFA
└── simulador.html        # Simulação da fase de grupos

Requisitos:

    Criar apenas um arquivo CSS compartilhado (css/site.css).
    Criar apenas um arquivo Javascript compartilhado (js/site.js).
    Todas as páginas HTML deverão reutilizar esses arquivos.
    Cada página deverá conter apenas o HTML específico daquela funcionalidade.
    O layout deverá ser consistente entre todas as páginas.

# 13. Fora do Escopo

Não fazem parte da primeira versão:

    Área administrativa
    Cadastro de usuários
    Login
    Autenticação
    Integração com APIs esportivas
    Atualização automática dos resultados

---

## 14. Evoluções Futuras

Possíveis melhorias:

* Àrea administrativa simplificada
* Atualização manual de resultados
* Integração com APIs esportivas
* Bolão
* Compartilhamento de simulações
* Estatíticas avançadas
 