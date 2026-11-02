# Spec Delta

## Purpose

Guardar de forma durável as simulações criadas pelo usuário e os placares simulados de cada jogo, separados dos dados oficiais, para que o futuro Simulador possa retomá-las mesmo após o encerramento da aplicação.

## ADDED Requirements

### Requirement: Registro de simulações
O sistema SHALL permitir gravar simulações identificadas por um nome obrigatório, registrando a data de criação e a data da última alteração.

#### Scenario: Criar simulação
- **WHEN** uma simulação chamada "Meu palpite" é gravada
- **THEN** ela recebe um identificador único, a data de criação e a data de última alteração iguais ao momento da gravação

#### Scenario: Nome ausente
- **WHEN** se tenta gravar uma simulação com nome vazio ou só com espaços
- **THEN** a gravação é rejeitada e nada é persistido

### Requirement: Placares simulados por jogo
O sistema SHALL armazenar, para cada simulação, no máximo um placar simulado por jogo oficial, com gols do mandante e do visitante inteiros e não negativos. Placares simulados SHALL NOT alterar os dados oficiais dos jogos.

#### Scenario: Gravar placar
- **WHEN** a simulação recebe o placar 2 x 1 para o jogo México x África do Sul
- **THEN** o placar fica associado à simulação e ao jogo, a data de última alteração da simulação é atualizada e o jogo oficial continua sem placar

#### Scenario: Alterar placar existente
- **WHEN** um novo placar é gravado para um jogo que já tem placar na mesma simulação
- **THEN** o placar anterior é substituído, sem criar um segundo registro para o mesmo jogo

#### Scenario: Placar inválido
- **WHEN** se tenta gravar um placar com gols negativos ou para um jogo inexistente
- **THEN** a gravação é rejeitada e nada é persistido

#### Scenario: Simulações independentes
- **WHEN** duas simulações têm placares diferentes para o mesmo jogo
- **THEN** cada simulação mantém o próprio placar

### Requirement: Durabilidade das simulações
As simulações e seus placares SHALL permanecer disponíveis após a aplicação ser encerrada e iniciada novamente, inclusive quando a carga dos dados oficiais for executada outra vez.

#### Scenario: Reinício da aplicação
- **WHEN** a aplicação é encerrada e iniciada novamente
- **THEN** todas as simulações gravadas e seus placares continuam disponíveis sem alteração

### Requirement: Exclusão de simulação
O sistema SHALL permitir excluir uma simulação, removendo junto todos os seus placares simulados.

#### Scenario: Excluir simulação
- **WHEN** uma simulação com placares é excluída
- **THEN** a simulação e todos os seus placares deixam de existir, e as demais simulações não são afetadas
