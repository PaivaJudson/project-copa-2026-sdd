# Spec Delta

## Purpose

Define a base executável do PortalCopa26: a aplicação web que hospeda todas as capacidades do portal, prepara o banco local na inicialização e expõe os dados do torneio somente por meio de serviços.

## ADDED Requirements

### Requirement: Aplicação web inicializável
O sistema SHALL ser uma aplicação web única que inicia localmente sem dependências externas além do runtime, servindo uma página inicial com layout comum e navegação para as capacidades do portal.

#### Scenario: Primeira execução
- **WHEN** a aplicação é iniciada em uma máquina sem banco de dados existente
- **THEN** a aplicação inicia sem erros e a página inicial responde com sucesso (HTTP 200)

#### Scenario: Navegação para capacidades futuras
- **WHEN** o usuário acessa a navegação principal
- **THEN** existem entradas para Home, Jogos, Grupos, Seleções, Ranking e Simulador, e cada rota responde com uma página placeholder que indica que a funcionalidade ainda não foi implementada

### Requirement: Banco de dados local criado e atualizado na inicialização
O sistema SHALL armazenar seus dados em um único arquivo de banco local, cujo caminho vem da configuração e, quando relativo, é resolvido a partir da pasta da aplicação e não do diretório de execução. O sistema SHALL aplicar automaticamente as atualizações de esquema pendentes ao iniciar.

#### Scenario: Banco inexistente
- **WHEN** a aplicação inicia e o arquivo de banco configurado não existe
- **THEN** o arquivo é criado com o esquema completo antes da primeira requisição ser atendida

#### Scenario: Banco independe do diretório de execução
- **WHEN** a aplicação é iniciada uma vez a partir da raiz do repositório e outra a partir da pasta do projeto
- **THEN** as duas execuções usam o mesmo arquivo de banco, em `App_Data/copa2026.db` dentro da pasta do projeto, e não é criado nenhum outro arquivo de banco

#### Scenario: Banco existente com esquema atual
- **WHEN** a aplicação inicia e o banco já está no esquema mais recente
- **THEN** nenhum dado existente é apagado ou alterado pela inicialização

### Requirement: Acesso a dados somente por serviços
As páginas e componentes de interface SHALL obter e gravar dados exclusivamente por meio de serviços registrados por injeção de dependência, sem acessar o contexto de banco diretamente.

#### Scenario: Página consome dados
- **WHEN** uma página precisa de dados do torneio ou de simulações
- **THEN** ela os obtém por um serviço injetado da sua capacidade, e nenhum componente de interface referencia o contexto de banco

### Requirement: Recursos visuais base disponíveis
O sistema SHALL disponibilizar Bootstrap 5 em todas as páginas e SHALL disponibilizar a biblioteca de gráficos como recurso estático local, sem depender de CDN em tempo de execução.

#### Scenario: Biblioteca de gráficos servida localmente
- **WHEN** o navegador solicita o script da biblioteca de gráficos pelo caminho estático da aplicação
- **THEN** a aplicação responde com o arquivo, mesmo sem acesso à internet
