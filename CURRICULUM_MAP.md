# Curriculum Map

Este mapa define a progressão da coleção. Ele não substitui `CONTENT_STATUS.md`; ele descreve intenção pedagógica, competências, laboratórios e critérios de conclusão antes da escrita.

## Livro 1 — Fundamentos de Computação e Engenharia de Software

Objetivo: formar base técnica rigorosa para compreender sistemas computacionais, programar com clareza, raciocinar sobre arquitetura, qualidade, segurança, observabilidade e preparar o projeto final integrador.

Pré-requisitos gerais: nenhum conhecimento formal obrigatório; alfabetização digital, leitura técnica e disposição para praticar com terminal, editor, Git e pequenos programas.

### Matriz de competências específicas por capítulo

#### 01. O que é computação

- **Arquivo:** `books/livro-01-fundamentos-computacao-engenharia-software/chapters/01-o-que-e-computacao.md`
- **Objetivo específico:** desenvolver domínio aplicável sobre o que é computação para decisões técnicas no projeto final.
- **Pré-requisitos:** Nenhum; entrada do livro.
- **Competências básicas:** definir vocabulário essencial, reconhecer componentes e explicar o problema em linguagem clara.
- **Competências profissionais:** aplicar o tema em cenário real, justificar decisões, criar testes ou critérios de validação e documentar trade-offs.
- **Competências especialistas:** diagnosticar falhas, antecipar riscos de segurança/performance/operabilidade e comparar alternativas sob restrições.
- **Tipo de capítulo:** `foundation-chapter`
- **Depth level:** `foundation`
- **Topic profiles:** computational-thinking; representation; state; abstraction
- **Benchmark aplicável:** Computer Science Distilled; Code; Structure and Interpretation of Computer Programs
- **Laboratório obrigatório:** Diário de decisões sobre representação, estado e invariantes
- **Evidência de domínio:** Mapa conceitual + diário técnico + análise de um fluxo entrada-processamento-saída
- **Conexão com projeto final:** adiciona artefato, decisão ou competência ao sistema mínimo versionado, testável, seguro por design e observável do Livro 1.
- **Critério de conclusão:** blueprint aprovado, rubrica com nota mínima do nível, laboratório revisado, evidência de domínio entregue, benchmark registrado e status global consistente.

#### 02. Hardware, software e camadas de abstração

- **Arquivo:** `books/livro-01-fundamentos-computacao-engenharia-software/chapters/02-hardware-software.md`
- **Objetivo específico:** desenvolver domínio aplicável sobre hardware, software e camadas de abstração para decisões técnicas no projeto final.
- **Pré-requisitos:** Capítulos 01–01.
- **Competências básicas:** definir vocabulário essencial, reconhecer componentes e explicar o problema em linguagem clara.
- **Competências profissionais:** aplicar o tema em cenário real, justificar decisões, criar testes ou critérios de validação e documentar trade-offs.
- **Competências especialistas:** diagnosticar falhas, antecipar riscos de segurança/performance/operabilidade e comparar alternativas sob restrições.
- **Tipo de capítulo:** `foundation-chapter`
- **Depth level:** `foundation`
- **Topic profiles:** hardware; software; abstraction-layers; runtime
- **Benchmark aplicável:** Computer Systems: A Programmer’s Perspective
- **Laboratório obrigatório:** Laboratório de rastreamento de uma operação por camadas
- **Evidência de domínio:** Diagrama de camadas e relatório de custos ocultos
- **Conexão com projeto final:** adiciona artefato, decisão ou competência ao sistema mínimo versionado, testável, seguro por design e observável do Livro 1.
- **Critério de conclusão:** blueprint aprovado, rubrica com nota mínima do nível, laboratório revisado, evidência de domínio entregue, benchmark registrado e status global consistente.

#### 03. Sistemas operacionais

- **Arquivo:** `books/livro-01-fundamentos-computacao-engenharia-software/chapters/03-sistemas-operacionais.md`
- **Objetivo específico:** desenvolver domínio aplicável sobre sistemas operacionais para decisões técnicas no projeto final.
- **Pré-requisitos:** Capítulos 01–02.
- **Competências básicas:** definir vocabulário essencial, reconhecer componentes e explicar o problema em linguagem clara.
- **Competências profissionais:** aplicar o tema em cenário real, justificar decisões, criar testes ou critérios de validação e documentar trade-offs.
- **Competências especialistas:** diagnosticar falhas, antecipar riscos de segurança/performance/operabilidade e comparar alternativas sob restrições.
- **Tipo de capítulo:** `technology-chapter`
- **Depth level:** `professional`
- **Topic profiles:** operating-systems; processes; filesystems; permissions
- **Benchmark aplicável:** Operating Systems: Three Easy Pieces
- **Laboratório obrigatório:** Laboratório de processos, arquivos, permissões e chamadas ao sistema
- **Evidência de domínio:** Relatório explicando recursos gerenciados pelo SO
- **Conexão com projeto final:** adiciona artefato, decisão ou competência ao sistema mínimo versionado, testável, seguro por design e observável do Livro 1.
- **Critério de conclusão:** blueprint aprovado, rubrica com nota mínima do nível, laboratório revisado, evidência de domínio entregue, benchmark registrado e status global consistente.

#### 04. Processos, threads e concorrência

- **Arquivo:** `books/livro-01-fundamentos-computacao-engenharia-software/chapters/04-processos-threads-concorrencia.md`
- **Objetivo específico:** desenvolver domínio aplicável sobre processos, threads e concorrência para decisões técnicas no projeto final.
- **Pré-requisitos:** Capítulos 01–03.
- **Competências básicas:** definir vocabulário essencial, reconhecer componentes e explicar o problema em linguagem clara.
- **Competências profissionais:** aplicar o tema em cenário real, justificar decisões, criar testes ou critérios de validação e documentar trade-offs.
- **Competências especialistas:** diagnosticar falhas, antecipar riscos de segurança/performance/operabilidade e comparar alternativas sob restrições.
- **Tipo de capítulo:** `deep-dive-chapter`
- **Depth level:** `specialist`
- **Topic profiles:** concurrency; synchronization; race-conditions; scheduling
- **Benchmark aplicável:** The Art of Multiprocessor Programming; OSTEP
- **Laboratório obrigatório:** Laboratório de corrida, lock e fila concorrente
- **Evidência de domínio:** Correção de bug concorrente com teste reproduzível
- **Conexão com projeto final:** adiciona artefato, decisão ou competência ao sistema mínimo versionado, testável, seguro por design e observável do Livro 1.
- **Critério de conclusão:** blueprint aprovado, rubrica com nota mínima do nível, laboratório revisado, evidência de domínio entregue, benchmark registrado e status global consistente.

#### 05. Memória

- **Arquivo:** `books/livro-01-fundamentos-computacao-engenharia-software/chapters/05-memoria.md`
- **Objetivo específico:** desenvolver domínio aplicável sobre memória para decisões técnicas no projeto final.
- **Pré-requisitos:** Capítulos 01–04.
- **Competências básicas:** definir vocabulário essencial, reconhecer componentes e explicar o problema em linguagem clara.
- **Competências profissionais:** aplicar o tema em cenário real, justificar decisões, criar testes ou critérios de validação e documentar trade-offs.
- **Competências especialistas:** diagnosticar falhas, antecipar riscos de segurança/performance/operabilidade e comparar alternativas sob restrições.
- **Tipo de capítulo:** `deep-dive-chapter`
- **Depth level:** `specialist`
- **Topic profiles:** memory; stack-heap; pointers; garbage-collection; locality
- **Benchmark aplicável:** Computer Systems: A Programmer’s Perspective
- **Laboratório obrigatório:** Laboratório de alocação, vazamento simulado e localidade
- **Evidência de domínio:** Análise de memória com trade-offs de runtime
- **Conexão com projeto final:** adiciona artefato, decisão ou competência ao sistema mínimo versionado, testável, seguro por design e observável do Livro 1.
- **Critério de conclusão:** blueprint aprovado, rubrica com nota mínima do nível, laboratório revisado, evidência de domínio entregue, benchmark registrado e status global consistente.

#### 06. Redes de computadores

- **Arquivo:** `books/livro-01-fundamentos-computacao-engenharia-software/chapters/06-redes.md`
- **Objetivo específico:** desenvolver domínio aplicável sobre redes de computadores para decisões técnicas no projeto final.
- **Pré-requisitos:** Capítulos 01–05.
- **Competências básicas:** definir vocabulário essencial, reconhecer componentes e explicar o problema em linguagem clara.
- **Competências profissionais:** aplicar o tema em cenário real, justificar decisões, criar testes ou critérios de validação e documentar trade-offs.
- **Competências especialistas:** diagnosticar falhas, antecipar riscos de segurança/performance/operabilidade e comparar alternativas sob restrições.
- **Tipo de capítulo:** `technology-chapter`
- **Depth level:** `professional`
- **Topic profiles:** networking; tcp-ip; dns; tls; latency
- **Benchmark aplicável:** Computer Networking: A Top-Down Approach
- **Laboratório obrigatório:** Laboratório de DNS, TCP, TLS e latência
- **Evidência de domínio:** Diagnóstico de comunicação com diagrama de rede
- **Conexão com projeto final:** adiciona artefato, decisão ou competência ao sistema mínimo versionado, testável, seguro por design e observável do Livro 1.
- **Critério de conclusão:** blueprint aprovado, rubrica com nota mínima do nível, laboratório revisado, evidência de domínio entregue, benchmark registrado e status global consistente.

#### 07. Internet como sistema distribuído

- **Arquivo:** `books/livro-01-fundamentos-computacao-engenharia-software/chapters/07-internet.md`
- **Objetivo específico:** desenvolver domínio aplicável sobre internet como sistema distribuído para decisões técnicas no projeto final.
- **Pré-requisitos:** Capítulos 01–06.
- **Competências básicas:** definir vocabulário essencial, reconhecer componentes e explicar o problema em linguagem clara.
- **Competências profissionais:** aplicar o tema em cenário real, justificar decisões, criar testes ou critérios de validação e documentar trade-offs.
- **Competências especialistas:** diagnosticar falhas, antecipar riscos de segurança/performance/operabilidade e comparar alternativas sob restrições.
- **Tipo de capítulo:** `architecture-chapter`
- **Depth level:** `professional`
- **Topic profiles:** distributed-systems; internet; failure; consistency
- **Benchmark aplicável:** Designing Data-Intensive Applications
- **Laboratório obrigatório:** Laboratório de falhas parciais e retries
- **Evidência de domínio:** ADR sobre tolerância a falhas em fluxo Web
- **Conexão com projeto final:** adiciona artefato, decisão ou competência ao sistema mínimo versionado, testável, seguro por design e observável do Livro 1.
- **Critério de conclusão:** blueprint aprovado, rubrica com nota mínima do nível, laboratório revisado, evidência de domínio entregue, benchmark registrado e status global consistente.

#### 08. HTTP e APIs Web

- **Arquivo:** `books/livro-01-fundamentos-computacao-engenharia-software/chapters/08-http-apis-web.md`
- **Objetivo específico:** desenvolver domínio aplicável sobre http e apis web para decisões técnicas no projeto final.
- **Pré-requisitos:** Capítulos 01–07.
- **Competências básicas:** definir vocabulário essencial, reconhecer componentes e explicar o problema em linguagem clara.
- **Competências profissionais:** aplicar o tema em cenário real, justificar decisões, criar testes ou critérios de validação e documentar trade-offs.
- **Competências especialistas:** diagnosticar falhas, antecipar riscos de segurança/performance/operabilidade e comparar alternativas sob restrições.
- **Tipo de capítulo:** `technology-chapter`
- **Depth level:** `professional`
- **Topic profiles:** http; api-contracts; rest; caching; security
- **Benchmark aplicável:** HTTP: The Definitive Guide; RESTful Web APIs
- **Laboratório obrigatório:** Laboratório de contrato HTTP com erros e cache
- **Evidência de domínio:** Contrato de API e coleção de testes
- **Conexão com projeto final:** adiciona artefato, decisão ou competência ao sistema mínimo versionado, testável, seguro por design e observável do Livro 1.
- **Critério de conclusão:** blueprint aprovado, rubrica com nota mínima do nível, laboratório revisado, evidência de domínio entregue, benchmark registrado e status global consistente.

#### 09. Programação

- **Arquivo:** `books/livro-01-fundamentos-computacao-engenharia-software/chapters/09-programacao.md`
- **Objetivo específico:** desenvolver domínio aplicável sobre programação para decisões técnicas no projeto final.
- **Pré-requisitos:** Capítulos 01–08.
- **Competências básicas:** definir vocabulário essencial, reconhecer componentes e explicar o problema em linguagem clara.
- **Competências profissionais:** aplicar o tema em cenário real, justificar decisões, criar testes ou critérios de validação e documentar trade-offs.
- **Competências especialistas:** diagnosticar falhas, antecipar riscos de segurança/performance/operabilidade e comparar alternativas sob restrições.
- **Tipo de capítulo:** `foundation-chapter`
- **Depth level:** `foundation`
- **Topic profiles:** programming; control-flow; functions; decomposition
- **Benchmark aplicável:** Think Like a Programmer; SICP
- **Laboratório obrigatório:** Laboratório de algoritmo pequeno com testes
- **Evidência de domínio:** Pseudocódigo, implementação e explicação de invariantes
- **Conexão com projeto final:** adiciona artefato, decisão ou competência ao sistema mínimo versionado, testável, seguro por design e observável do Livro 1.
- **Critério de conclusão:** blueprint aprovado, rubrica com nota mínima do nível, laboratório revisado, evidência de domínio entregue, benchmark registrado e status global consistente.

#### 10. Tipos, contratos e modelagem

- **Arquivo:** `books/livro-01-fundamentos-computacao-engenharia-software/chapters/10-tipos-contratos.md`
- **Objetivo específico:** desenvolver domínio aplicável sobre tipos, contratos e modelagem para decisões técnicas no projeto final.
- **Pré-requisitos:** Capítulos 01–09.
- **Competências básicas:** definir vocabulário essencial, reconhecer componentes e explicar o problema em linguagem clara.
- **Competências profissionais:** aplicar o tema em cenário real, justificar decisões, criar testes ou critérios de validação e documentar trade-offs.
- **Competências especialistas:** diagnosticar falhas, antecipar riscos de segurança/performance/operabilidade e comparar alternativas sob restrições.
- **Tipo de capítulo:** `conceptual-chapter`
- **Depth level:** `professional`
- **Topic profiles:** types; contracts; domain-modeling; validation
- **Benchmark aplicável:** Domain Modeling Made Functional
- **Laboratório obrigatório:** Laboratório de modelagem de tipos para domínio
- **Evidência de domínio:** Modelo de domínio com regras e validações
- **Conexão com projeto final:** adiciona artefato, decisão ou competência ao sistema mínimo versionado, testável, seguro por design e observável do Livro 1.
- **Critério de conclusão:** blueprint aprovado, rubrica com nota mínima do nível, laboratório revisado, evidência de domínio entregue, benchmark registrado e status global consistente.

#### 11. Estruturas de dados

- **Arquivo:** `books/livro-01-fundamentos-computacao-engenharia-software/chapters/11-estruturas-dados.md`
- **Objetivo específico:** desenvolver domínio aplicável sobre estruturas de dados para decisões técnicas no projeto final.
- **Pré-requisitos:** Capítulos 01–10.
- **Competências básicas:** definir vocabulário essencial, reconhecer componentes e explicar o problema em linguagem clara.
- **Competências profissionais:** aplicar o tema em cenário real, justificar decisões, criar testes ou critérios de validação e documentar trade-offs.
- **Competências especialistas:** diagnosticar falhas, antecipar riscos de segurança/performance/operabilidade e comparar alternativas sob restrições.
- **Tipo de capítulo:** `technology-chapter`
- **Depth level:** `professional`
- **Topic profiles:** data-structures; complexity; collections
- **Benchmark aplicável:** Algorithms; CLRS
- **Laboratório obrigatório:** Laboratório comparando lista, mapa, fila e árvore
- **Evidência de domínio:** Escolha justificada de estrutura por cenário
- **Conexão com projeto final:** adiciona artefato, decisão ou competência ao sistema mínimo versionado, testável, seguro por design e observável do Livro 1.
- **Critério de conclusão:** blueprint aprovado, rubrica com nota mínima do nível, laboratório revisado, evidência de domínio entregue, benchmark registrado e status global consistente.

#### 12. Algoritmos e complexidade

- **Arquivo:** `books/livro-01-fundamentos-computacao-engenharia-software/chapters/12-algoritmos-complexidade.md`
- **Objetivo específico:** desenvolver domínio aplicável sobre algoritmos e complexidade para decisões técnicas no projeto final.
- **Pré-requisitos:** Capítulos 01–11.
- **Competências básicas:** definir vocabulário essencial, reconhecer componentes e explicar o problema em linguagem clara.
- **Competências profissionais:** aplicar o tema em cenário real, justificar decisões, criar testes ou critérios de validação e documentar trade-offs.
- **Competências especialistas:** diagnosticar falhas, antecipar riscos de segurança/performance/operabilidade e comparar alternativas sob restrições.
- **Tipo de capítulo:** `deep-dive-chapter`
- **Depth level:** `specialist`
- **Topic profiles:** algorithms; complexity; scalability; optimization
- **Benchmark aplicável:** Algorithms; Algorithm Design Manual
- **Laboratório obrigatório:** Laboratório de medição empírica de complexidade
- **Evidência de domínio:** Relatório de análise Big-O e benchmark simples
- **Conexão com projeto final:** adiciona artefato, decisão ou competência ao sistema mínimo versionado, testável, seguro por design e observável do Livro 1.
- **Critério de conclusão:** blueprint aprovado, rubrica com nota mínima do nível, laboratório revisado, evidência de domínio entregue, benchmark registrado e status global consistente.

#### 13. Git e controle de versão

- **Arquivo:** `books/livro-01-fundamentos-computacao-engenharia-software/chapters/13-git-controle-versao.md`
- **Objetivo específico:** desenvolver domínio aplicável sobre git e controle de versão para decisões técnicas no projeto final.
- **Pré-requisitos:** Capítulos 01–12.
- **Competências básicas:** definir vocabulário essencial, reconhecer componentes e explicar o problema em linguagem clara.
- **Competências profissionais:** aplicar o tema em cenário real, justificar decisões, criar testes ou critérios de validação e documentar trade-offs.
- **Competências especialistas:** diagnosticar falhas, antecipar riscos de segurança/performance/operabilidade e comparar alternativas sob restrições.
- **Tipo de capítulo:** `technology-chapter`
- **Depth level:** `professional`
- **Topic profiles:** git; branching; collaboration; review
- **Benchmark aplicável:** Pro Git
- **Laboratório obrigatório:** Laboratório de branching, conflito e revisão
- **Evidência de domínio:** Histórico Git limpo com PR simulado
- **Conexão com projeto final:** adiciona artefato, decisão ou competência ao sistema mínimo versionado, testável, seguro por design e observável do Livro 1.
- **Critério de conclusão:** blueprint aprovado, rubrica com nota mínima do nível, laboratório revisado, evidência de domínio entregue, benchmark registrado e status global consistente.

#### 14. Engenharia de software

- **Arquivo:** `books/livro-01-fundamentos-computacao-engenharia-software/chapters/14-engenharia-software.md`
- **Objetivo específico:** desenvolver domínio aplicável sobre engenharia de software para decisões técnicas no projeto final.
- **Pré-requisitos:** Capítulos 01–13.
- **Competências básicas:** definir vocabulário essencial, reconhecer componentes e explicar o problema em linguagem clara.
- **Competências profissionais:** aplicar o tema em cenário real, justificar decisões, criar testes ou critérios de validação e documentar trade-offs.
- **Competências especialistas:** diagnosticar falhas, antecipar riscos de segurança/performance/operabilidade e comparar alternativas sob restrições.
- **Tipo de capítulo:** `conceptual-chapter`
- **Depth level:** `professional`
- **Topic profiles:** software-engineering; lifecycle; quality; maintainability
- **Benchmark aplicável:** Software Engineering at Google
- **Laboratório obrigatório:** Laboratório de análise de mudança em sistema existente
- **Evidência de domínio:** Plano de evolução com riscos e qualidade
- **Conexão com projeto final:** adiciona artefato, decisão ou competência ao sistema mínimo versionado, testável, seguro por design e observável do Livro 1.
- **Critério de conclusão:** blueprint aprovado, rubrica com nota mínima do nível, laboratório revisado, evidência de domínio entregue, benchmark registrado e status global consistente.

#### 15. Requisitos e modelagem de domínio

- **Arquivo:** `books/livro-01-fundamentos-computacao-engenharia-software/chapters/15-requisitos-modelagem.md`
- **Objetivo específico:** desenvolver domínio aplicável sobre requisitos e modelagem de domínio para decisões técnicas no projeto final.
- **Pré-requisitos:** Capítulos 01–14.
- **Competências básicas:** definir vocabulário essencial, reconhecer componentes e explicar o problema em linguagem clara.
- **Competências profissionais:** aplicar o tema em cenário real, justificar decisões, criar testes ou critérios de validação e documentar trade-offs.
- **Competências especialistas:** diagnosticar falhas, antecipar riscos de segurança/performance/operabilidade e comparar alternativas sob restrições.
- **Tipo de capítulo:** `architecture-chapter`
- **Depth level:** `professional`
- **Topic profiles:** requirements; domain-modeling; ubiquitous-language
- **Benchmark aplicável:** Domain-Driven Design; User Story Mapping
- **Laboratório obrigatório:** Laboratório de discovery e modelo de domínio
- **Evidência de domínio:** Backlog, modelo de domínio e critérios de aceite
- **Conexão com projeto final:** adiciona artefato, decisão ou competência ao sistema mínimo versionado, testável, seguro por design e observável do Livro 1.
- **Critério de conclusão:** blueprint aprovado, rubrica com nota mínima do nível, laboratório revisado, evidência de domínio entregue, benchmark registrado e status global consistente.

#### 16. Clean Code pragmático

- **Arquivo:** `books/livro-01-fundamentos-computacao-engenharia-software/chapters/16-clean-code.md`
- **Objetivo específico:** desenvolver domínio aplicável sobre clean code pragmático para decisões técnicas no projeto final.
- **Pré-requisitos:** Capítulos 01–15.
- **Competências básicas:** definir vocabulário essencial, reconhecer componentes e explicar o problema em linguagem clara.
- **Competências profissionais:** aplicar o tema em cenário real, justificar decisões, criar testes ou critérios de validação e documentar trade-offs.
- **Competências especialistas:** diagnosticar falhas, antecipar riscos de segurança/performance/operabilidade e comparar alternativas sob restrições.
- **Tipo de capítulo:** `technology-chapter`
- **Depth level:** `professional`
- **Topic profiles:** clean-code; readability; refactoring; maintainability
- **Benchmark aplicável:** Refactoring; Clean Code
- **Laboratório obrigatório:** Laboratório de refatoração orientada por testes
- **Evidência de domínio:** Antes/depois com justificativa e testes
- **Conexão com projeto final:** adiciona artefato, decisão ou competência ao sistema mínimo versionado, testável, seguro por design e observável do Livro 1.
- **Critério de conclusão:** blueprint aprovado, rubrica com nota mínima do nível, laboratório revisado, evidência de domínio entregue, benchmark registrado e status global consistente.

#### 17. SOLID e design orientado a mudanças

- **Arquivo:** `books/livro-01-fundamentos-computacao-engenharia-software/chapters/17-solid-design.md`
- **Objetivo específico:** desenvolver domínio aplicável sobre solid e design orientado a mudanças para decisões técnicas no projeto final.
- **Pré-requisitos:** Capítulos 01–16.
- **Competências básicas:** definir vocabulário essencial, reconhecer componentes e explicar o problema em linguagem clara.
- **Competências profissionais:** aplicar o tema em cenário real, justificar decisões, criar testes ou critérios de validação e documentar trade-offs.
- **Competências especialistas:** diagnosticar falhas, antecipar riscos de segurança/performance/operabilidade e comparar alternativas sob restrições.
- **Tipo de capítulo:** `architecture-chapter`
- **Depth level:** `professional`
- **Topic profiles:** solid; design-principles; coupling; cohesion
- **Benchmark aplicável:** Agile Software Development, Principles, Patterns, and Practices
- **Laboratório obrigatório:** Laboratório de redesign contra mudança provável
- **Evidência de domínio:** ADR de design e testes de regressão
- **Conexão com projeto final:** adiciona artefato, decisão ou competência ao sistema mínimo versionado, testável, seguro por design e observável do Livro 1.
- **Critério de conclusão:** blueprint aprovado, rubrica com nota mínima do nível, laboratório revisado, evidência de domínio entregue, benchmark registrado e status global consistente.

#### 18. Arquitetura de software

- **Arquivo:** `books/livro-01-fundamentos-computacao-engenharia-software/chapters/18-arquitetura-software.md`
- **Objetivo específico:** desenvolver domínio aplicável sobre arquitetura de software para decisões técnicas no projeto final.
- **Pré-requisitos:** Capítulos 01–17.
- **Competências básicas:** definir vocabulário essencial, reconhecer componentes e explicar o problema em linguagem clara.
- **Competências profissionais:** aplicar o tema em cenário real, justificar decisões, criar testes ou critérios de validação e documentar trade-offs.
- **Competências especialistas:** diagnosticar falhas, antecipar riscos de segurança/performance/operabilidade e comparar alternativas sob restrições.
- **Tipo de capítulo:** `architecture-chapter`
- **Depth level:** `specialist`
- **Topic profiles:** software-architecture; boundaries; modularity; trade-offs
- **Benchmark aplicável:** Software Architecture: The Hard Parts; Fundamentals of Software Architecture
- **Laboratório obrigatório:** Laboratório de decomposição modular
- **Evidência de domínio:** Diagrama C4 + ADR arquitetural
- **Conexão com projeto final:** adiciona artefato, decisão ou competência ao sistema mínimo versionado, testável, seguro por design e observável do Livro 1.
- **Critério de conclusão:** blueprint aprovado, rubrica com nota mínima do nível, laboratório revisado, evidência de domínio entregue, benchmark registrado e status global consistente.

#### 19. Testes e qualidade de software

- **Arquivo:** `books/livro-01-fundamentos-computacao-engenharia-software/chapters/19-testes-qualidade.md`
- **Objetivo específico:** desenvolver domínio aplicável sobre testes e qualidade de software para decisões técnicas no projeto final.
- **Pré-requisitos:** Capítulos 01–18.
- **Competências básicas:** definir vocabulário essencial, reconhecer componentes e explicar o problema em linguagem clara.
- **Competências profissionais:** aplicar o tema em cenário real, justificar decisões, criar testes ou critérios de validação e documentar trade-offs.
- **Competências especialistas:** diagnosticar falhas, antecipar riscos de segurança/performance/operabilidade e comparar alternativas sob restrições.
- **Tipo de capítulo:** `technology-chapter`
- **Depth level:** `professional`
- **Topic profiles:** testing; quality; test-strategy; automation
- **Benchmark aplicável:** xUnit Test Patterns; Growing Object-Oriented Software Guided by Tests
- **Laboratório obrigatório:** Laboratório de pirâmide de testes em feature pequena
- **Evidência de domínio:** Plano de testes e suíte mínima
- **Conexão com projeto final:** adiciona artefato, decisão ou competência ao sistema mínimo versionado, testável, seguro por design e observável do Livro 1.
- **Critério de conclusão:** blueprint aprovado, rubrica com nota mínima do nível, laboratório revisado, evidência de domínio entregue, benchmark registrado e status global consistente.

#### 20. Segurança por design

- **Arquivo:** `books/livro-01-fundamentos-computacao-engenharia-software/chapters/20-seguranca-design.md`
- **Objetivo específico:** desenvolver domínio aplicável sobre segurança por design para decisões técnicas no projeto final.
- **Pré-requisitos:** Capítulos 01–19.
- **Competências básicas:** definir vocabulário essencial, reconhecer componentes e explicar o problema em linguagem clara.
- **Competências profissionais:** aplicar o tema em cenário real, justificar decisões, criar testes ou critérios de validação e documentar trade-offs.
- **Competências especialistas:** diagnosticar falhas, antecipar riscos de segurança/performance/operabilidade e comparar alternativas sob restrições.
- **Tipo de capítulo:** `security-chapter`
- **Depth level:** `specialist`
- **Topic profiles:** secure-by-design; threat-modeling; auth; least-privilege
- **Benchmark aplicável:** Secure by Design; Web Application Security
- **Laboratório obrigatório:** Laboratório de threat model e mitigação
- **Evidência de domínio:** Threat model + checklist de controles
- **Conexão com projeto final:** adiciona artefato, decisão ou competência ao sistema mínimo versionado, testável, seguro por design e observável do Livro 1.
- **Critério de conclusão:** blueprint aprovado, rubrica com nota mínima do nível, laboratório revisado, evidência de domínio entregue, benchmark registrado e status global consistente.

#### 21. Observabilidade

- **Arquivo:** `books/livro-01-fundamentos-computacao-engenharia-software/chapters/21-observabilidade.md`
- **Objetivo específico:** desenvolver domínio aplicável sobre observabilidade para decisões técnicas no projeto final.
- **Pré-requisitos:** Capítulos 01–20.
- **Competências básicas:** definir vocabulário essencial, reconhecer componentes e explicar o problema em linguagem clara.
- **Competências profissionais:** aplicar o tema em cenário real, justificar decisões, criar testes ou critérios de validação e documentar trade-offs.
- **Competências especialistas:** diagnosticar falhas, antecipar riscos de segurança/performance/operabilidade e comparar alternativas sob restrições.
- **Tipo de capítulo:** `devops-chapter`
- **Depth level:** `professional`
- **Topic profiles:** observability; logs; metrics; traces; sli-slo
- **Benchmark aplicável:** Observability Engineering
- **Laboratório obrigatório:** Laboratório de logs, métricas e rastreamento
- **Evidência de domínio:** Plano de observabilidade com SLI/SLO
- **Conexão com projeto final:** adiciona artefato, decisão ou competência ao sistema mínimo versionado, testável, seguro por design e observável do Livro 1.
- **Critério de conclusão:** blueprint aprovado, rubrica com nota mínima do nível, laboratório revisado, evidência de domínio entregue, benchmark registrado e status global consistente.

#### 22. Manutenção e evolução

- **Arquivo:** `books/livro-01-fundamentos-computacao-engenharia-software/chapters/22-manutencao-evolucao.md`
- **Objetivo específico:** desenvolver domínio aplicável sobre manutenção e evolução para decisões técnicas no projeto final.
- **Pré-requisitos:** Capítulos 01–21.
- **Competências básicas:** definir vocabulário essencial, reconhecer componentes e explicar o problema em linguagem clara.
- **Competências profissionais:** aplicar o tema em cenário real, justificar decisões, criar testes ou critérios de validação e documentar trade-offs.
- **Competências especialistas:** diagnosticar falhas, antecipar riscos de segurança/performance/operabilidade e comparar alternativas sob restrições.
- **Tipo de capítulo:** `architecture-chapter`
- **Depth level:** `professional`
- **Topic profiles:** maintenance; evolution; technical-debt; migration
- **Benchmark aplicável:** Working Effectively with Legacy Code
- **Laboratório obrigatório:** Laboratório de mudança em código legado
- **Evidência de domínio:** Plano de migração incremental com riscos
- **Conexão com projeto final:** adiciona artefato, decisão ou competência ao sistema mínimo versionado, testável, seguro por design e observável do Livro 1.
- **Critério de conclusão:** blueprint aprovado, rubrica com nota mínima do nível, laboratório revisado, evidência de domínio entregue, benchmark registrado e status global consistente.

#### 23. Pensamento de arquiteto

- **Arquivo:** `books/livro-01-fundamentos-computacao-engenharia-software/chapters/23-pensamento-arquiteto.md`
- **Objetivo específico:** desenvolver domínio aplicável sobre pensamento de arquiteto para decisões técnicas no projeto final.
- **Pré-requisitos:** Capítulos 01–22.
- **Competências básicas:** definir vocabulário essencial, reconhecer componentes e explicar o problema em linguagem clara.
- **Competências profissionais:** aplicar o tema em cenário real, justificar decisões, criar testes ou critérios de validação e documentar trade-offs.
- **Competências especialistas:** diagnosticar falhas, antecipar riscos de segurança/performance/operabilidade e comparar alternativas sob restrições.
- **Tipo de capítulo:** `architecture-chapter`
- **Depth level:** `specialist`
- **Topic profiles:** architectural-thinking; decision-making; trade-offs; governance
- **Benchmark aplicável:** Fundamentals of Software Architecture; Software Architecture: The Hard Parts
- **Laboratório obrigatório:** Laboratório de decisão arquitetural sob restrições
- **Evidência de domínio:** ADR comparativo com consequências
- **Conexão com projeto final:** adiciona artefato, decisão ou competência ao sistema mínimo versionado, testável, seguro por design e observável do Livro 1.
- **Critério de conclusão:** blueprint aprovado, rubrica com nota mínima do nível, laboratório revisado, evidência de domínio entregue, benchmark registrado e status global consistente.

#### 24. Projeto final integrador do Livro 1

- **Arquivo:** `books/livro-01-fundamentos-computacao-engenharia-software/chapters/24-projeto-final-integrador.md`
- **Objetivo específico:** desenvolver domínio aplicável sobre projeto final integrador do livro 1 para decisões técnicas no projeto final.
- **Pré-requisitos:** Capítulos 01–23.
- **Competências básicas:** definir vocabulário essencial, reconhecer componentes e explicar o problema em linguagem clara.
- **Competências profissionais:** aplicar o tema em cenário real, justificar decisões, criar testes ou critérios de validação e documentar trade-offs.
- **Competências especialistas:** diagnosticar falhas, antecipar riscos de segurança/performance/operabilidade e comparar alternativas sob restrições.
- **Tipo de capítulo:** `project-chapter`
- **Depth level:** `specialist`
- **Topic profiles:** capstone; integration; quality-gate; delivery
- **Benchmark aplicável:** Capstone project rubrics; Software Engineering at Google
- **Laboratório obrigatório:** Laboratório integrador do sistema mínimo
- **Evidência de domínio:** Repositório/protótipo documentado com validações
- **Conexão com projeto final:** adiciona artefato, decisão ou competência ao sistema mínimo versionado, testável, seguro por design e observável do Livro 1.
- **Critério de conclusão:** blueprint aprovado, rubrica com nota mínima do nível, laboratório revisado, evidência de domínio entregue, benchmark registrado e status global consistente.

### Projeto final do Livro 1

Ao longo dos capítulos, o leitor prepara um sistema mínimo, versionado, testável, seguro por design e observável. O objetivo não é competir com os projetos das trilhas Full Stack, IA ou Cybersegurança, mas criar base mental e técnica para entendê-los com rigor.

## Demais livros

Os demais livros devem receber matriz equivalente antes da escrita ou reescrita de capítulos. Até lá, valem os documentos de controle editorial, a política de aprovação, o blueprint obrigatório e a Definition of Done por tipo de capítulo.
