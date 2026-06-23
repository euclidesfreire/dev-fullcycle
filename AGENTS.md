# AGENTS.md — Fábrica Editorial Automatizada

Este repositório é uma fábrica editorial para produzir uma formação técnica completa, em formato de coleção de livros, sobre IA, Cybersegurança e Desenvolvimento Full Stack moderno.

## Documentos obrigatórios

Qualquer agente, humano ou automação deve ler, respeitar e manter consistência com:

- `EDITORIAL_MANIFESTO.md`
- `QUALITY_CHECKLIST.md`
- `CURRICULUM_MAP.md`
- `CONTENT_STATUS.md`

Nenhuma decisão editorial, técnica ou de integração pode contrariar esses documentos.

## Regra inegociável de completude

Nenhum conteúdo pode ser marcado como completo apenas porque foi escrito. Um capítulo só pode avançar para `approved` quando:

1. Segue o template editorial obrigatório.
2. Vai do básico ao especialista.
3. Tem explicação conceitual profunda.
4. Tem exemplo simples.
5. Tem exemplo profissional.
6. Tem aplicação em sistema real.
7. Tem seção de segurança.
8. Tem seção de performance.
9. Tem seção de testes.
10. Tem limitações e trade-offs.
11. Tem erros comuns.
12. Tem exercícios.
13. Tem desafio prático.
14. Tem conexão com o projeto final.
15. Passa nos scripts de validação.
16. Passa pela auditoria de profundidade.

## Agentes internos

Os agentes vivem em `agents/` e devem ser usados em cadeia:

1. `editorial-director.md`
2. `curriculum-architect.md`
3. `chapter-writer.md`
4. `technical-reviewer.md`
5. `depth-auditor.md`
6. `code-example-reviewer.md`
7. `site-integrator.md`
8. `final-quality-gate.md`

## Template editorial obrigatório para capítulos

Todo capítulo deve conter, no mínimo, estas seções:

- Objetivos
- Contexto
- Problema real
- Conceito principal
- Intuição
- Explicação profunda
- Funcionamento interno
- Exemplo simples
- Exemplo profissional
- Implementação prática
- Segurança
- Performance
- Testes
- Limitações
- Trade-offs
- Erros comuns
- Checklist
- Exercícios
- Desafio
- Revisão
- Conexão com projeto final

## Validações obrigatórias

Antes de qualquer aprovação final, executar:

```bash
npm run validate
npm run generate:status
npm run generate:search
```

## Padrões editoriais

- Escrever em português técnico claro.
- Evitar conteúdo genérico, superficial ou promocional.
- Explicar causas, consequências, riscos e trade-offs.
- Usar exemplos que representem sistemas reais.
- Não ensinar antipadrões como solução recomendada.
- Separar claramente rascunho, revisão, auditoria, integração e aprovação.
