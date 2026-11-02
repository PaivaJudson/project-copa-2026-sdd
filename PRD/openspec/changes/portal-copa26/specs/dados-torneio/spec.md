# Spec Delta

## Purpose

Manter no banco local os dados oficiais da Copa do Mundo 2026 (grupos, seleções, elencos, estádios, jogos e ranking FIFA), carregados exclusivamente dos arquivos da pasta `fontes`, para servir de base a todas as consultas e simulações do portal.

## ADDED Requirements

### Requirement: Carga inicial a partir das fontes oficiais
Na inicialização, o sistema SHALL popular o banco com os dados dos arquivos oficiais da pasta `fontes` quando eles ainda não estiverem carregados. Nenhum dado do torneio SHALL ser inventado ou obtido de outra origem.

#### Scenario: Banco vazio
- **WHEN** a aplicação inicia com o banco recém-criado
- **THEN** grupos, seleções, jogadores, estádios, jogos e ranking FIFA são gravados a partir dos arquivos da pasta `fontes`

#### Scenario: Resumo da carga no log
- **WHEN** a carga dos dados oficiais é concluída
- **THEN** o log da aplicação registra a quantidade gravada de grupos, seleções, jogadores, estádios, jogos e posições do ranking

#### Scenario: Carga idempotente
- **WHEN** a aplicação é reiniciada com os dados oficiais já carregados
- **THEN** nenhum registro oficial é duplicado e as simulações existentes permanecem intactas

#### Scenario: Arquivo oficial ausente ou inválido
- **WHEN** um arquivo oficial obrigatório não existe ou uma linha não pode ser interpretada
- **THEN** a inicialização falha com mensagem que identifica o arquivo e a linha, e nenhum dado parcial da carga é gravado

### Requirement: Grupos e seleções
O sistema SHALL armazenar os 12 grupos (A a L), cada um com exatamente 4 seleções, totalizando 48 seleções conforme `copa2026_grupos.txt`. Cada seleção SHALL ter nome, grupo, pote (1 a 4, pela posição na linha do grupo), indicação de cabeça de chave, técnico e código FIFA de três letras.

#### Scenario: Composição dos grupos
- **WHEN** a carga é concluída
- **THEN** existem 12 grupos com 4 seleções cada, e o grupo C contém Brasil (pote 1, cabeça de chave), Marrocos, Haiti e Escócia

#### Scenario: Técnico da seleção
- **WHEN** a seleção Brasil é consultada
- **THEN** seu técnico é "Carlo Ancelotti", conforme `copa2026_pais_tecnicos.txt`

#### Scenario: Código para bandeira
- **WHEN** a seleção México é consultada
- **THEN** seu código FIFA é "MEX", permitindo montar a URL pública da bandeira sem chamar nenhuma API na carga

### Requirement: Identificação única de seleções entre arquivos
O sistema SHALL reconhecer como a mesma seleção as variações de nome usadas nos diferentes arquivos oficiais e SHALL usar o nome de `copa2026_grupos.txt` como nome canônico. Um nome que não corresponda a nenhuma das 48 seleções SHALL fazer a carga falhar, exceto no ranking FIFA.

#### Scenario: Nomes alternativos
- **WHEN** um arquivo se refere a "República da Coreia", "Tchéquia", "EUA", "Países Baixos" ou "Côte d'Ivoire"
- **THEN** o registro é associado, respectivamente, a Coreia do Sul, República Tcheca, Estados Unidos, Holanda e Costa do Marfim

#### Scenario: Nome desconhecido em jogo
- **WHEN** um jogo referencia uma seleção que não pertence às 48 participantes
- **THEN** a carga falha indicando o nome não reconhecido

### Requirement: Elencos das seleções
O sistema SHALL armazenar os jogadores de cada seleção conforme `copa2026_selecoes_jogadores.txt`, com nome, idade, posição e quantidade de gols, vinculados à seleção correspondente.

#### Scenario: Elenco carregado
- **WHEN** o elenco da Argélia é consultado
- **THEN** ele contém "Riyad Mahrez", com 35 anos, posição Atacante e 38 gols

#### Scenario: Todas as seleções com elenco
- **WHEN** a carga é concluída
- **THEN** cada uma das 48 seleções possui ao menos um jogador

### Requirement: Estádios
O sistema SHALL armazenar os 16 estádios com cidade, país e capacidade conforme `copa2026_cidades_sede_estadios.txt`.

#### Scenario: Estádios carregados
- **WHEN** a carga é concluída
- **THEN** existem 16 estádios, entre eles o Estádio Azteca, na Cidade do México, México, com capacidade de 87.523

### Requirement: Jogos do torneio
O sistema SHALL armazenar todos os jogos descritos nos arquivos de jogos de cada fase, cada um com fase, número de ordem na fase, data e hora conforme a fonte, estádio e, na fase de grupos, o grupo. Os horários das fontes SHALL ser interpretados como horário de Brasília (UTC-03:00). Os jogos SHALL ser carregados sem placar.

#### Scenario: Fase de grupos
- **WHEN** a carga é concluída
- **THEN** existem 72 jogos da fase de grupos, 6 por grupo, e o primeiro jogo é México x África do Sul em 11/06/2026 às 16:00, no Estádio Azteca, pelo grupo A

#### Scenario: Horário de Brasília
- **WHEN** o jogo México x África do Sul é consultado com fuso explícito
- **THEN** seu início é 2026-06-11T16:00-03:00 (19:00 UTC)

#### Scenario: Total de jogos
- **WHEN** a carga é concluída
- **THEN** a quantidade de jogos por fase é 72 (grupos), 16 (segunda fase), 8 (oitavas), 4 (quartas), 2 (semifinais), 1 (3º lugar) e 1 (final)

#### Scenario: Confronto ainda não definido
- **WHEN** um jogo de mata-mata tem na fonte um participante como "Venc. Oitavas 1"
- **THEN** o jogo é armazenado sem seleção nessa posição e com a descrição textual da vaga ("Venc. Oitavas 1")

#### Scenario: Confronto definido no mata-mata
- **WHEN** um jogo da segunda fase cita seleções na fonte, como "Brasil x Japão"
- **THEN** o jogo é armazenado vinculado a essas duas seleções

### Requirement: Ranking FIFA
O sistema SHALL armazenar todas as posições de `copa2026_ranking_fifa.txt` com posição, nome da seleção e pontos, vinculando à seleção participante quando houver correspondência. Posições de seleções que não participam da Copa SHALL ser mantidas sem vínculo.

#### Scenario: Seleção participante no ranking
- **WHEN** o ranking da Argentina é consultado
- **THEN** a posição é 1, os pontos são 1877.72 e o registro está vinculado à seleção Argentina

#### Scenario: Seleção não participante
- **WHEN** a carga encontra "Itália" no ranking
- **THEN** a posição 12 é armazenada sem vínculo com nenhuma seleção participante

#### Scenario: Participante fora do ranking
- **WHEN** uma seleção participante não consta em `copa2026_ranking_fifa.txt`
- **THEN** a seleção é carregada normalmente e fica sem posição no ranking
