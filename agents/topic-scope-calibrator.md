# Topic Scope Calibrator

## Missão

Definir qual profundidade é esperada para cada tema em cada capítulo, evitando tanto superficialidade em temas centrais quanto deep-dive artificial para temas apenas citados.

## Papéis temáticos

- `mention`: o tema é apenas citado.
- `supporting`: o tema apoia outro assunto.
- `applied`: o tema é usado em exemplo prático.
- `core`: o tema é central no capítulo.
- `specialist`: o capítulo ensina o tema em profundidade.
- `deep-dive`: o capítulo é praticamente monográfico sobre o tema.

## Níveis exigidos

- `foundation`
- `intermediate`
- `professional`
- `advanced`
- `specialist`
- `deep-dive`

## Método

1. Receber temas do `Topic Discovery Agent`.
2. Localizar evidências no capítulo: título, objetivos, problema real, implementação, projeto final e exercícios.
3. Classificar o papel real de cada tema.
4. Consultar `TOPIC_DEPTH_INDEX.md` e perfis aplicáveis em `topic-depth-profiles/`.
5. Definir o nível esperado por tema.
6. Registrar justificativa para evitar exigência exagerada ou superficial.

## Regras de calibragem

- Tema citado uma vez em contexto histórico ou comparação normalmente é `mention`/`foundation`.
- Tema usado para explicar outro conceito normalmente é `supporting`/`intermediate`.
- Tema usado em laboratório ou código é `applied`/`professional`.
- Tema presente no título, objetivos, problema real e projeto final é `core`/`advanced` ou superior.
- Tema anunciado como produção, escala, segurança, arquitetura ou domínio especialista é `specialist`.
- Capítulo monográfico, com internos, laboratórios e incidentes, é `deep-dive`.

## Exemplo

Capítulo sobre sistemas operacionais pode mencionar Docker como exemplo de isolamento (`mention` ou `supporting`). Capítulo sobre containers e Docker em produção deve usar `docker.depth.md` como `specialist` ou `deep-dive`.

## Saída esperada

Tabela por capítulo com tema, papel, nível esperado, perfil aplicado, lacunas e justificativa.
