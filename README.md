# Dev Fullcycle Editorial Factory

Este repositório foi estruturado como uma fábrica editorial automatizada para produzir uma formação técnica completa, em formato de coleção de livros, sobre IA, Cybersegurança e Desenvolvimento Full Stack moderno.

## Documentos centrais

- `AGENTS.md`: regras gerais, fluxo de agentes e critérios inegociáveis.
- `EDITORIAL_MANIFESTO.md`: visão editorial e princípios da coleção.
- `QUALITY_CHECKLIST.md`: critérios mínimos para aprovação de capítulos.
- `CURRICULUM_MAP.md`: mapa macro da formação.
- `CONTENT_STATUS.md`: estados permitidos e regra de aprovação.

## Agentes internos

Os agentes ficam em `agents/` e trabalham em cadeia:

1. Editorial Director Agent
2. Curriculum Architect Agent
3. Chapter Writer Agent
4. Technical Reviewer Agent
5. Depth Auditor Agent
6. Code Example Reviewer Agent
7. Site Integrator Agent
8. Final Quality Gate Agent

## Fluxo de uso

### 1. Planejar livro

Use o `Curriculum Architect Agent` para definir ordem dos capítulos, dependências, competências e conexão com o projeto final. O plano deve respeitar `CURRICULUM_MAP.md` e não deve marcar nenhum capítulo como completo.

### 2. Gerar capítulo

Use o `Chapter Writer Agent` para escrever um capítulo seguindo o template obrigatório definido em `AGENTS.md`: objetivos, contexto, problema real, conceito principal, intuição, explicação profunda, funcionamento interno, exemplos, implementação prática, segurança, performance, testes, limitações, trade-offs, erros comuns, checklist, exercícios, desafio, revisão e conexão com o projeto final.

### 3. Revisar capítulo

Envie o rascunho ao `Technical Reviewer Agent`, ao `Depth Auditor Agent` e, quando houver código, ao `Code Example Reviewer Agent`. Qualquer reprovação bloqueia a aprovação final.

### 4. Validar capítulo

Execute as validações automatizadas:

```bash
npm run validate:placeholders
npm run validate:links
npm run validate:depth
npm run validate
```

A validação de profundidade verifica se capítulos em pastas de conteúdo possuem as seções obrigatórias e sinais mínimos de densidade em seções críticas.

### 5. Integrar no site

Use o `Site Integrator Agent` para atualizar navegação, links, cards, busca, progresso e layout. Depois gere os artefatos auxiliares:

```bash
npm run generate:status
npm run generate:search
```

### 6. Aprovar capítulo

Use o `Final Quality Gate Agent` somente após revisão técnica, auditoria de profundidade, revisão de código, integração e scripts passarem. O status `approved` só pode ser usado quando todos os critérios de `QUALITY_CHECKLIST.md` forem atendidos.

## Scripts disponíveis

- `npm run validate:depth`: audita estrutura e profundidade mínima dos capítulos.
- `npm run validate:placeholders`: bloqueia marcadores de rascunho e lacunas editoriais.
- `npm run validate:links`: detecta links relativos quebrados em Markdown.
- `npm run generate:status`: gera `dist/content-status-report.json`.
- `npm run generate:search`: gera `dist/search-index.json`.
- `npm run validate`: executa placeholders, links e profundidade.
