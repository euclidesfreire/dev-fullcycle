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

# Descoberta dinâmica de profundidade temática

Antes de escrever, reescrever ou aprovar qualquer capítulo, os agentes devem executar uma análise temática do conteúdo.

Essa análise deve responder:

1. Quais temas técnicos aparecem no capítulo?
2. Quais temas são centrais?
3. Quais temas são apenas apoio?
4. Quais perfis de profundidade se aplicam?
5. O capítulo declara seus perfis temáticos?
6. O nível esperado está correto?
7. O conteúdo cumpre o nível esperado?
8. Existe algum tema profundo sem perfil?
9. Existe risco de superficialidade temática?

A lista de perfis em `topic-depth-profiles/` é expansível.

Nenhum agente deve assumir que apenas os perfis já existentes importam.

Se surgir novo tema profundo, o agente deve criar, sugerir ou registrar o perfil correspondente.

# Benchmark de referência e especialização

Este projeto não busca apenas produzir capítulos completos. Ele busca produzir uma coleção técnica capaz de formar competência especialista.

Antes de aprovar qualquer livro ou capítulo avançado, os agentes devem verificar:

1. Quais benchmarks de referência se aplicam?
2. Quais perfis de especialização se aplicam?
3. O capítulo tem profundidade comparável a um capítulo de livro técnico robusto?
4. O capítulo inclui laboratórios práticos?
5. O capítulo inclui estudo de caso de produção, quando aplicável?
6. O capítulo desenvolve competência demonstrável?
7. O capítulo contribui para o projeto final?
8. O capítulo tem avaliação de domínio?
9. O conteúdo prepara para aplicar, diagnosticar, proteger, otimizar e operar?

## Agentes adicionais de benchmark, especialização e domínio

Além da cadeia editorial principal, os seguintes agentes devem ser acionados quando houver capítulo avançado, tema profundo, livro completo, laboratório, estudo de caso, capstone ou avaliação de competência:

1. `reference-benchmark-agent.md`
2. `specialization-outcome-agent.md`
3. `lab-designer-agent.md`
4. `production-case-study-agent.md`
5. `capstone-evaluator-agent.md`
6. `mastery-assessment-agent.md`

Esses agentes não substituem revisão técnica, auditoria de profundidade, revisão de código, integração e quality gate. Eles acrescentam uma régua de livro de referência, especialização, prática progressiva, produção e avaliação demonstrável.
