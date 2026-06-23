# Content Status

Este documento é a fonte de verdade global para o estado editorial da coleção. Status declarados dentro de capítulos são metadados locais e nunca substituem este controle. Nenhum capítulo está aprovado nesta tarefa; o Capítulo 01 possui conteúdo real e foi rebaixado para reconciliação editorial.

## Estados permitidos

- `planned`: planejado, ainda sem conteúdo editorial reconciliado.
- `draft`: escrita inicial em andamento.
- `rewriting`: conteúdo existente precisa ser reestruturado, reconciliado ou aprofundado.
- `technical-review`: revisão técnica aguardando ou em execução.
- `depth-audit`: auditoria de profundidade geral aguardando ou em execução.
- `topic-depth-review`: auditoria por perfis temáticos aguardando ou em execução.
- `visual-review`: revisão de diagramas, mapas, figuras e clareza visual.
- `lab-review`: revisão de laboratórios, exercícios práticos e artefatos.
- `project-integration-review`: revisão de conexão com projeto final.
- `reference-benchmark-review`: comparação com benchmark de livro técnico e especialização.
- `final-gate`: decisão final pendente do Final Quality Gate.
- `approved`: aprovado globalmente após todas as evidências.
- `needs-human-review`: requer decisão humana por conflito, risco ou escopo ambíguo.

## Regras globais de consistência

1. Nenhum capítulo pode ter `approved` no próprio arquivo se este `CONTENT_STATUS.md` não confirmar `approved`.
2. Nenhum capítulo pode pular diretamente de `planned` para `approved`; a trilha mínima passa por escrita/revisão, auditoria de profundidade, benchmark, laboratório, integração de projeto e final gate.
3. Todo capítulo precisa registrar próxima etapa.
4. Todo capítulo precisa registrar nível de profundidade esperado.
5. Todo capítulo precisa registrar perfis temáticos aplicáveis.
6. Todo capítulo precisa registrar benchmark aplicável.
7. Todo capítulo precisa registrar evidência de domínio esperada.
8. Texto longo não é evidência de qualidade; aprovação exige rubrica, laboratório, benchmark e evidência verificável.

## Livro 1 — Fundamentos de Computação e Engenharia de Software

| Capítulo | Arquivo | Status | Depth Level | Topic Profiles | Benchmark | Required Labs | Evidence of Mastery | Próxima etapa |
|---|---|---|---|---|---|---|---|---|
| 01. O que é computação | `books/livro-01-fundamentos-computacao-engenharia-software/chapters/01-o-que-e-computacao.md` | `rewriting` | `foundation` | computational-thinking; representation; state; abstraction | Computer Science Distilled; Code; Structure and Interpretation of Computer Programs | Diário de decisões sobre representação, estado e invariantes | Mapa conceitual + diário técnico + análise de um fluxo entrada-processamento-saída | Reconciliar status local, blueprint, rubrica e reescrita orientada por benchmark |
| 02. Hardware, software e camadas de abstração | `books/livro-01-fundamentos-computacao-engenharia-software/chapters/02-hardware-software.md` | `planned` | `foundation` | hardware; software; abstraction-layers; runtime | Computer Systems: A Programmer’s Perspective | Laboratório de rastreamento de uma operação por camadas | Diagrama de camadas e relatório de custos ocultos | Criar blueprint antes da escrita |
| 03. Sistemas operacionais | `books/livro-01-fundamentos-computacao-engenharia-software/chapters/03-sistemas-operacionais.md` | `planned` | `professional` | operating-systems; processes; filesystems; permissions | Operating Systems: Three Easy Pieces | Laboratório de processos, arquivos, permissões e chamadas ao sistema | Relatório explicando recursos gerenciados pelo SO | Criar blueprint antes da escrita |
| 04. Processos, threads e concorrência | `books/livro-01-fundamentos-computacao-engenharia-software/chapters/04-processos-threads-concorrencia.md` | `planned` | `specialist` | concurrency; synchronization; race-conditions; scheduling | The Art of Multiprocessor Programming; OSTEP | Laboratório de corrida, lock e fila concorrente | Correção de bug concorrente com teste reproduzível | Criar blueprint antes da escrita |
| 05. Memória | `books/livro-01-fundamentos-computacao-engenharia-software/chapters/05-memoria.md` | `planned` | `specialist` | memory; stack-heap; pointers; garbage-collection; locality | Computer Systems: A Programmer’s Perspective | Laboratório de alocação, vazamento simulado e localidade | Análise de memória com trade-offs de runtime | Criar blueprint antes da escrita |
| 06. Redes de computadores | `books/livro-01-fundamentos-computacao-engenharia-software/chapters/06-redes.md` | `planned` | `professional` | networking; tcp-ip; dns; tls; latency | Computer Networking: A Top-Down Approach | Laboratório de DNS, TCP, TLS e latência | Diagnóstico de comunicação com diagrama de rede | Criar blueprint antes da escrita |
| 07. Internet como sistema distribuído | `books/livro-01-fundamentos-computacao-engenharia-software/chapters/07-internet.md` | `planned` | `professional` | distributed-systems; internet; failure; consistency | Designing Data-Intensive Applications | Laboratório de falhas parciais e retries | ADR sobre tolerância a falhas em fluxo Web | Criar blueprint antes da escrita |
| 08. HTTP e APIs Web | `books/livro-01-fundamentos-computacao-engenharia-software/chapters/08-http-apis-web.md` | `planned` | `professional` | http; api-contracts; rest; caching; security | HTTP: The Definitive Guide; RESTful Web APIs | Laboratório de contrato HTTP com erros e cache | Contrato de API e coleção de testes | Criar blueprint antes da escrita |
| 09. Programação | `books/livro-01-fundamentos-computacao-engenharia-software/chapters/09-programacao.md` | `planned` | `foundation` | programming; control-flow; functions; decomposition | Think Like a Programmer; SICP | Laboratório de algoritmo pequeno com testes | Pseudocódigo, implementação e explicação de invariantes | Criar blueprint antes da escrita |
| 10. Tipos, contratos e modelagem | `books/livro-01-fundamentos-computacao-engenharia-software/chapters/10-tipos-contratos.md` | `planned` | `professional` | types; contracts; domain-modeling; validation | Domain Modeling Made Functional | Laboratório de modelagem de tipos para domínio | Modelo de domínio com regras e validações | Criar blueprint antes da escrita |
| 11. Estruturas de dados | `books/livro-01-fundamentos-computacao-engenharia-software/chapters/11-estruturas-dados.md` | `planned` | `professional` | data-structures; complexity; collections | Algorithms; CLRS | Laboratório comparando lista, mapa, fila e árvore | Escolha justificada de estrutura por cenário | Criar blueprint antes da escrita |
| 12. Algoritmos e complexidade | `books/livro-01-fundamentos-computacao-engenharia-software/chapters/12-algoritmos-complexidade.md` | `planned` | `specialist` | algorithms; complexity; scalability; optimization | Algorithms; Algorithm Design Manual | Laboratório de medição empírica de complexidade | Relatório de análise Big-O e benchmark simples | Criar blueprint antes da escrita |
| 13. Git e controle de versão | `books/livro-01-fundamentos-computacao-engenharia-software/chapters/13-git-controle-versao.md` | `planned` | `professional` | git; branching; collaboration; review | Pro Git | Laboratório de branching, conflito e revisão | Histórico Git limpo com PR simulado | Criar blueprint antes da escrita |
| 14. Engenharia de software | `books/livro-01-fundamentos-computacao-engenharia-software/chapters/14-engenharia-software.md` | `planned` | `professional` | software-engineering; lifecycle; quality; maintainability | Software Engineering at Google | Laboratório de análise de mudança em sistema existente | Plano de evolução com riscos e qualidade | Criar blueprint antes da escrita |
| 15. Requisitos e modelagem de domínio | `books/livro-01-fundamentos-computacao-engenharia-software/chapters/15-requisitos-modelagem.md` | `planned` | `professional` | requirements; domain-modeling; ubiquitous-language | Domain-Driven Design; User Story Mapping | Laboratório de discovery e modelo de domínio | Backlog, modelo de domínio e critérios de aceite | Criar blueprint antes da escrita |
| 16. Clean Code pragmático | `books/livro-01-fundamentos-computacao-engenharia-software/chapters/16-clean-code.md` | `planned` | `professional` | clean-code; readability; refactoring; maintainability | Refactoring; Clean Code | Laboratório de refatoração orientada por testes | Antes/depois com justificativa e testes | Criar blueprint antes da escrita |
| 17. SOLID e design orientado a mudanças | `books/livro-01-fundamentos-computacao-engenharia-software/chapters/17-solid-design.md` | `planned` | `professional` | solid; design-principles; coupling; cohesion | Agile Software Development, Principles, Patterns, and Practices | Laboratório de redesign contra mudança provável | ADR de design e testes de regressão | Criar blueprint antes da escrita |
| 18. Arquitetura de software | `books/livro-01-fundamentos-computacao-engenharia-software/chapters/18-arquitetura-software.md` | `planned` | `specialist` | software-architecture; boundaries; modularity; trade-offs | Software Architecture: The Hard Parts; Fundamentals of Software Architecture | Laboratório de decomposição modular | Diagrama C4 + ADR arquitetural | Criar blueprint antes da escrita |
| 19. Testes e qualidade de software | `books/livro-01-fundamentos-computacao-engenharia-software/chapters/19-testes-qualidade.md` | `planned` | `professional` | testing; quality; test-strategy; automation | xUnit Test Patterns; Growing Object-Oriented Software Guided by Tests | Laboratório de pirâmide de testes em feature pequena | Plano de testes e suíte mínima | Criar blueprint antes da escrita |
| 20. Segurança por design | `books/livro-01-fundamentos-computacao-engenharia-software/chapters/20-seguranca-design.md` | `planned` | `specialist` | secure-by-design; threat-modeling; auth; least-privilege | Secure by Design; Web Application Security | Laboratório de threat model e mitigação | Threat model + checklist de controles | Criar blueprint antes da escrita |
| 21. Observabilidade | `books/livro-01-fundamentos-computacao-engenharia-software/chapters/21-observabilidade.md` | `planned` | `professional` | observability; logs; metrics; traces; sli-slo | Observability Engineering | Laboratório de logs, métricas e rastreamento | Plano de observabilidade com SLI/SLO | Criar blueprint antes da escrita |
| 22. Manutenção e evolução | `books/livro-01-fundamentos-computacao-engenharia-software/chapters/22-manutencao-evolucao.md` | `planned` | `professional` | maintenance; evolution; technical-debt; migration | Working Effectively with Legacy Code | Laboratório de mudança em código legado | Plano de migração incremental com riscos | Criar blueprint antes da escrita |
| 23. Pensamento de arquiteto | `books/livro-01-fundamentos-computacao-engenharia-software/chapters/23-pensamento-arquiteto.md` | `planned` | `specialist` | architectural-thinking; decision-making; trade-offs; governance | Fundamentals of Software Architecture; Software Architecture: The Hard Parts | Laboratório de decisão arquitetural sob restrições | ADR comparativo com consequências | Criar blueprint antes da escrita |
| 24. Projeto final integrador do Livro 1 | `books/livro-01-fundamentos-computacao-engenharia-software/chapters/24-projeto-final-integrador.md` | `planned` | `specialist` | capstone; integration; quality-gate; delivery | Capstone project rubrics; Software Engineering at Google | Laboratório integrador do sistema mínimo | Repositório/protótipo documentado com validações | Criar blueprint antes da escrita |

## Regra para demais livros

Os demais livros permanecem em `planned` até receberem matriz equivalente com depth level, perfis temáticos, benchmark, laboratórios e evidência de domínio. Qualquer capítulo com conteúdo pré-existente deve ser movido para `rewriting` ou `needs-human-review`, nunca tratado como `planned` de forma automática.
