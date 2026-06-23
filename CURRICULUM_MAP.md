# Curriculum Map

Este mapa define a arquitetura curricular especialista da coleção. Ele não substitui `CONTENT_STATUS.md`; ele descreve intenção pedagógica, benchmarks, progressão, laboratórios, avaliações, evidências de domínio e conexão com o projeto final antes da escrita dos capítulos.

A coleção foi reestruturada de um mapa inicial centrado em capítulos para uma formação de 10 livros, com profundidade comparável a livros técnicos robustos, cobertura comparada com roadmaps modernos, prática estilo Full Cycle e avaliação por evidência. Nenhum capítulo é considerado escrito ou aprovado por este mapa; cada capítulo continua dependente de blueprint aprovado, rubrica, validação, revisão técnica, auditoria de profundidade, benchmark, laboratório, evidência de domínio e final quality gate.

## Princípios de arquitetura curricular

- **Progressão:** fundamentos computacionais, produto web, backends especialistas, frontend moderno, dados distribuídos, operação em produção, IA em produção, segurança ofensiva/defensiva e capstone integrado.
- **Profundidade:** cada livro separa conceitos, funcionamento interno, prática profissional, diagnóstico, segurança, performance, observabilidade e trade-offs.
- **Benchmark sem cópia:** livros, roadmaps e especializações são usados somente como régua de cobertura, maturidade e rigor; não devem ser reproduzidos estrutural ou textualmente.
- **Evidência verificável:** cada capítulo e livro precisa produzir artefato revisável: código, ADR, diagrama, threat model, teste, relatório de troubleshooting, análise de performance, plano de observabilidade, experimento de IA ou entrega de produto.
- **Projeto final como fio condutor:** todos os livros evoluem a `Plataforma SaaS Inteligente e Segura de Gestão de Conhecimento, Atendimentos e Automação Técnica`.
- **Regra de aprovação:** este mapa planeja; aprovação continua governada por `CONTENT_STATUS.md`, `APPROVAL_POLICY.md`, `QUALITY_CHECKLIST.md`, `DEFINITION_OF_DONE.md` e `CONTENT_BLUEPRINT.md`.

# Matriz de benchmarks de referência

| Domínio | Livros de referência como benchmark de profundidade | Roadmaps roadmap.sh como benchmark de cobertura | Cursos/especializações como benchmark de prática | Profundidade esperada | Laboratório obrigatório | Evidência de domínio |
|---|---|---|---|---|---|---|
| Fundamentos de computação e sistemas | Computer Systems: A Programmer's Perspective; Operating Systems: Three Easy Pieces; Computer Networking: A Top-Down Approach | Computer Science; Linux; Backend | CS50; MIT 6.828/6.S081; Linux Foundation intro labs | Especialista em modelos mentais, SO, memória, redes e Linux prático | processos, permissões, shell, memória, TCP/DNS/TLS e diagnóstico com ferramentas Linux | relatório de troubleshooting + diagrama de camadas + scripts reproduzíveis |
| Engenharia de software | Software Engineering at Google; Code Complete; The Pragmatic Programmer; Working Effectively with Legacy Code | Software Architect; Code Review; Full Stack | Software Design and Architecture; clean code/refactoring workshops | Profissional avançado com manutenção, qualidade e evolução | refatoração orientada por testes em módulo legado | PR revisado, suíte de regressão e plano de evolução |
| Algoritmos e estruturas de dados | Algorithms; Introduction to Algorithms; The Algorithm Design Manual | Data Structures & Algorithms; LeetCode; Computer Science | Stanford Algorithms; Princeton Algorithms | Profissional com deep-dives em complexidade e escolhas por cenário | benchmark empírico de estruturas e algoritmos sob carga | análise Big-O + medição + justificativa de escolha |
| Programação e linguagens | Structure and Interpretation of Computer Programs; Crafting Interpreters; Effective Java; Effective TypeScript | Java; TypeScript; JavaScript; Node.js | Programming Languages; Java/TypeScript professional tracks | Especialista nos runtimes usados no projeto | implementar parser simples, tipos, erros e testes | mini-runtime ou biblioteca com testes e explicação de trade-offs |
| Git e colaboração | Pro Git; Software Engineering at Google | Git and GitHub; Code Review | GitHub flow/team collaboration labs | Profissional em histórico, revisão, branching e recuperação | conflito, rebase, cherry-pick, bisect e PR review | histórico limpo + relatório de investigação com git bisect |
| DDD e modelagem de domínio | Domain-Driven Design; Implementing Domain-Driven Design; Domain Modeling Made Functional | Software Architect; API Design; Backend | EventStorming/DDD workshops; arquitetura hexagonal prática | Especialista em DDD estratégico e tático | discovery, context map, aggregate design e bounded contexts | modelo de domínio, context map, ADR e testes de invariantes |
| Arquitetura de software | Fundamentals of Software Architecture; Software Architecture: The Hard Parts; Building Evolutionary Architectures; Patterns of Enterprise Application Architecture | Software Architect; Design and Architecture; System Design | Software Architecture specialization; distributed systems design labs | Especialista em decisões, trade-offs e evolução | decomposição modular, arquitetura evolutiva e ADR comparativo | diagrama C4, fitness functions e decisão arquitetural defendida |
| Full Stack e produto web | Designing Web APIs; Web Development with Node and Express; Refactoring UI como benchmark visual; Inspired como benchmark de produto | Full Stack; Frontend; Backend; API Design | Full stack capstone; product engineering labs | Profissional orientado a produto real | aplicação navegável com autenticação, CRUD, testes e deploy local | produto web funcional + backlog + critérios de aceite |
| Backend Java Spring Boot | Spring in Action; Spring Boot in Action; Java Concurrency in Practice; Effective Java | Java; Spring Boot; Backend; API Design | Spring professional/API microservices labs | Especialista em Spring, JVM, APIs, segurança, dados e operação | API Spring Boot com JPA, transações, segurança, testes e observabilidade | serviço Java em produção local com relatório de diagnóstico |
| Backend Node.js TypeScript | Node.js Design Patterns; Distributed Systems with Node.js; Effective TypeScript | Node.js; TypeScript; Backend; API Design | Node.js backend specialization; async workers labs | Especialista em runtime, event loop, streams, workers e integrações | worker assíncrono com filas, streams, retries, idempotência e métricas | serviço Node.js resiliente com testes e traces |
| Frontend React/Next.js TypeScript | React docs como benchmark técnico; Learning React; Effective TypeScript; Designing Data-Intensive Applications para estado/cache | Frontend; React; Next.js; TypeScript | frontend professional projects; accessibility/performance labs | Especialista em renderização, App Router, Server Components, UX, acessibilidade e performance | app Next.js com SSR/RSC, cache, auth, formulários, testes e web vitals | frontend auditável com Lighthouse, testes e relatório de UX/performance |
| Bancos relacionais e PostgreSQL | PostgreSQL: Up and Running; Database Internals; Designing Data-Intensive Applications; SQL Performance Explained | PostgreSQL; SQL; Backend | database performance labs | Especialista em modelagem, índices, transações, locking, backup e tuning | schema SaaS, índices, EXPLAIN, transações concorrentes, backup/restore | relatório de tuning + migrações + plano de recuperação |
| Redis, cache e estruturas em memória | Redis in Action; Designing Data-Intensive Applications | Redis; Backend; System Design | caching/performance labs | Profissional avançado com operação em produção | cache-aside, TTL, locks, rate limiting, streams e falhas | política de cache com testes de consistência e performance |
| Sistemas distribuídos | Designing Data-Intensive Applications; Distributed Systems; Site Reliability Engineering | System Design; Backend; Software Architect | distributed systems labs; cloud-native microservices projects | Especialista em falhas, consistência, consenso, resiliência e evolução | simular falhas parciais, retries, timeouts, outbox e sagas | ADR de consistência + testes de resiliência |
| Mensageria, streaming e eventos | Enterprise Integration Patterns; Kafka: The Definitive Guide; Designing Event-Driven Systems | Backend; System Design; DevOps | event-driven microservices labs | Especialista em eventos, filas, streaming, contratos e operação | Kafka/RabbitMQ, DLQ, outbox, idempotência, schema evolution e replay | pipeline de eventos com contratos, métricas e runbook |
| Docker e containers | Docker Deep Dive; Container Security; Kubernetes in Action | Docker; DevOps; Linux | Docker production labs | Especialista em build, imagem, runtime, rede, storage e segurança | Dockerfile, multi-stage, Compose, healthcheck, non-root, scan e registry | imagem otimizada e segura + relatório de troubleshooting |
| Kubernetes e orquestração | Kubernetes in Action; Kubernetes Patterns; Production Kubernetes | Kubernetes; DevOps; Cloud Native | CKA/CKAD-style labs; Kubernetes production workshops | Especialista em workloads, networking, storage, segurança, observabilidade e operação | deployment, service, ingress, config, secrets, probes, autoscaling e incidentes | manifests/Helm + runbook + análise de falha |
| DevOps, CI/CD e IaC | Accelerate; Continuous Delivery; Infrastructure as Code | DevOps; Terraform; GitHub Actions; DevSecOps | DevOps professional capstone; Terraform labs | Especialista em entrega contínua, ambientes, IaC e rollback | pipeline com testes, build, scan, deploy, rollback e Terraform | pipeline auditável + módulos IaC + evidência de entrega |
| Cloud e SRE | Site Reliability Engineering; The Site Reliability Workbook; Cloud Native DevOps with Kubernetes | DevOps; AWS; Kubernetes; MLOps | cloud/SRE incident labs | Especialista em confiabilidade, SLI/SLO, capacidade, incidentes e custo | provisionar ambiente cloud, SLO, erro budget e simulação de incidente | postmortem, SLOs e plano de capacidade/custo |
| Observabilidade | Observability Engineering; Distributed Systems Observability | DevOps; Backend; Kubernetes | OpenTelemetry/Grafana labs | Especialista em logs, métricas, traces, profiling e diagnóstico | instrumentar serviços com OpenTelemetry, dashboards, alertas e tracing distribuído | plano de observabilidade + dashboard + investigação de incidente |
| IA e Machine Learning | Hands-On Machine Learning; Pattern Recognition and Machine Learning; Designing Machine Learning Systems | AI and Data Scientist; Machine Learning; AI Engineer | ML specialization; ML production labs | Profissional avançado com fundamentos, avaliação e ciclo de ML | dataset, feature engineering, treino, validação, erro, bias e deploy simples | experimento reprodutível + relatório de métricas e limites |
| LLM Engineering | Build a Large Language Model; Natural Language Processing with Transformers; Designing Machine Learning Systems | AI Engineer; Prompt Engineering; AI Agents | LLM application engineering labs | Especialista em tokens, contexto, prompting, tool use, custo e avaliação | app LLM com prompts versionados, function calling, fallback e métricas | relatório de qualidade/custo/latência + suíte de evals |
| RAG Engineering | AI Engineering; Designing Machine Learning Systems; referências técnicas de retrieval e IR | AI Engineer; AI Agents; Vector/AI topics relacionados | RAG production labs | Especialista em ingestão, chunking, embeddings, retrieval, reranking, avaliação e segurança | pipeline RAG com ingestão, vector store, reranking, eval, prompt injection e custo | benchmark RAG com dataset, métricas e threat model |
| Agents Engineering | AI Agents in Action; padrões modernos de tool use e workflows agentic | AI Agents; AI Engineer; Prompt Engineering | agents capstone labs | Especialista em planejamento, ferramentas, memória, orquestração, guardrails e falhas | agente com tools, permissões, human-in-the-loop, limites e auditoria | execução rastreável com logs, evals e controles de segurança |
| LLMOps e avaliação | Designing Machine Learning Systems; Machine Learning Design Patterns; SRE | MLOps; AI Engineer; DevOps | MLOps/LLMOps production labs | Especialista em observabilidade, evals, regressão, custo, governança e rollout | avaliação contínua, prompt/model registry, canary, drift e incidentes | pipeline de LLMOps com scorecards e runbook |
| Cybersegurança | Web Application Security; Security Engineering; The Web Application Hacker's Handbook | Cyber Security; DevSecOps; AI Red Teaming | practical security labs; CTF defensivo/ofensivo controlado | Profissional avançado ofensivo/defensivo ético | laboratório isolado de enumeração, exploração controlada e mitigação | relatório de vulnerabilidade + correção + reteste |
| AppSec e API Security | Web Application Security; API Security in Action; Secure by Design | API Design; Backend; DevSecOps; Cyber Security | OWASP Top 10/API Top 10 labs | Especialista em ameaças web/API, auth, abuso, validação e testes | explorar e corrigir OWASP Top 10 e OWASP API Security em app próprio | threat model + testes de segurança + PR de correção |
| CloudSec | Container Security; Cloud Security and Privacy; AWS security best practices | AWS; DevSecOps; Kubernetes; Terraform | cloud security labs | Especialista em IAM, rede, segredos, logging, postura e resposta | hardening cloud, least privilege, secrets, security groups e audit logs | baseline CloudSec + evidência de redução de risco |
| DevSecOps | Secure by Design; Container Security; Software Supply Chain Security | DevSecOps; Docker; Kubernetes; Terraform | supply-chain security labs | Especialista em pipeline seguro, SBOM, assinaturas, scans e policy-as-code | SAST, SCA, image scan, SBOM, assinatura, policy gate e secrets scanning | pipeline DevSecOps com relatório de achados e exceções justificadas |
| AI Security | Adversarial Machine Learning; OWASP LLM Top 10; AI red teaming references | AI Red Teaming; AI Engineer; AI Agents | AI red team/blue team labs | Especialista em prompt injection, data leakage, tool abuse, model risk e guardrails | ataque/defesa em RAG e agentes com documentos maliciosos e tools restritas | relatório AI threat model + evals adversariais + mitigação |

# Estrutura editorial reorganizada em 10 livros

A estrutura de 7 livros foi expandida para 10 livros porque Java, Node.js, frontend moderno, dados distribuídos, DevOps/cloud/SRE, IA aplicada e Cybersegurança exigem trilhas próprias para alcançar nível especialista sem comprimir deep-dives, laboratórios e avaliação de domínio.

## Livro 1 — Fundamentos de Computação, Sistemas e Engenharia

- **Objetivo:** formar base rigorosa em computação, Linux, redes, memória, algoritmos, Git, engenharia, testes, segurança por design, observabilidade inicial e pensamento arquitetural.
- **Papel na formação:** criar linguagem técnica comum para todos os livros posteriores e impedir aprendizagem superficial de frameworks.
- **Pré-requisitos:** alfabetização digital, capacidade de usar editor, terminal e leitura técnica básica.
- **Benchmarks de referência:** Computer Systems: A Programmer's Perspective; Operating Systems: Three Easy Pieces; Computer Networking: A Top-Down Approach; Algorithms; Software Engineering at Google; Pro Git.
- **Roadmaps relacionados:** Computer Science; Linux; Git and GitHub; Data Structures & Algorithms; Backend; Software Architect.
- **Perfil de especialização:** engenheiro que entende custo computacional, SO, redes, qualidade, colaboração e decisões técnicas.
- **Competências básicas:** explicar representação, estado, instruções, processos, arquivos, HTTP, Git, testes e modelos de domínio simples.
- **Competências profissionais:** diagnosticar problemas de ambiente Linux, rede e memória; escolher estruturas de dados; versionar colaboração; escrever testes; documentar ADRs.
- **Competências especialistas:** relacionar memória, concorrência, segurança e performance; analisar complexidade; construir threat model inicial; justificar decisões arquiteturais sob restrições.
- **Partes do livro:** computação e sistemas; Linux e redes; programação e algoritmos; engenharia e qualidade; arquitetura inicial; projeto integrador.
- **Capítulos planejados:** computação; hardware/software; Linux essencial; SO; processos/threads; memória; redes; HTTP/APIs; programação; tipos/contratos; estruturas de dados; algoritmos; Git; engenharia de software; requisitos; clean code; SOLID; testes; segurança por design; observabilidade; manutenção; arquitetura; projeto integrador.
- **Deep-dives necessários:** Linux para engenheiros, memória/GC/cache, concorrência, redes TCP/DNS/TLS, algoritmos e complexidade, threat modeling, observabilidade inicial.
- **Laboratórios obrigatórios:** lab guiado de shell/Linux; lab profissional de API mínima com testes; troubleshooting de processo/porta/permissão; segurança com permissões e threat model; performance de algoritmo/memória; observabilidade com logs/métricas simples; desafio integrador do sistema mínimo.
- **Estudos de caso:** incidente causado por configuração de ambiente; bug de concorrência; endpoint lento por estrutura de dados inadequada; falha de autenticação por modelagem ruim.
- **Avaliação de domínio:** prova conceitual; exercício aplicado de diagnóstico Linux/rede; revisão de código; estudo de caso; diagnóstico de incidente; decisão arquitetural; entrega de projeto; rubrica baseada em evidências.
- **Projeto prático:** base do SaaS com repositório, modelo conceitual, CLI ou API mínima, testes, ADRs, threat model inicial e observabilidade básica.
- **Evidências de domínio:** scripts, diagramas, testes, ADRs, relatório de troubleshooting, análise de performance e checklist de segurança.
- **Conexão com projeto final integrado:** define domínio inicial, práticas de colaboração, qualidade e decisões computacionais que serão usadas por todos os serviços.
- **Critérios de conclusão:** todos os capítulos com blueprint, laboratório, evidência revisada, validações, rubrica mínima e status global consistente.

### Matriz de capítulos do Livro 1

| Capítulo | Competências específicas por capítulo | Tipo | Depth | Deep-dive/Lab/Evidência |
|---|---|---|---|---|
| 01. O que é computação | explicar informação, estado, algoritmo e abstração; rastrear entrada-processamento-saída; identificar invariantes em problema real | foundation-chapter | foundation | mapa conceitual e diário técnico |
| 02. Hardware, software e abstrações | relacionar CPU, memória, disco, rede, SO e runtime; explicar custo de cada camada; desenhar fluxo de execução | foundation-chapter | foundation | diagrama de camadas |
| 03. Linux essencial para engenharia | usar shell, permissões, processos, pipes, systemd básico e ferramentas de diagnóstico; automatizar tarefas com scripts | technology-chapter | professional | lab Linux guiado e script reproduzível |
| 04. Sistemas operacionais | explicar processos, syscalls, filesystem, scheduling e isolamento; diagnosticar processo travado, arquivo bloqueado e erro de permissão | technology-chapter | professional | relatório de diagnóstico SO |
| 05. Processos, threads e concorrência | explicar threads, locks, race conditions e deadlocks; reproduzir bug concorrente; corrigir com teste | deep-dive-chapter | specialist | correção de race com teste |
| 06. Memória | explicar stack, heap, memória virtual, GC, cache e localidade; diagnosticar vazamento; relacionar memória com performance e segurança | deep-dive-chapter | specialist | análise de consumo de memória |
| 07. Redes de computadores | explicar TCP/IP, DNS, TLS, portas, latência e perda; usar curl, dig, ss e traceroute; diagnosticar falha de comunicação | technology-chapter | professional | relatório de troubleshooting de rede |
| 08. HTTP e APIs Web | modelar recursos, status, headers, cache, idempotência e erros; definir contrato; testar API | technology-chapter | professional | contrato HTTP e coleção de testes |
| 09. Programação | decompor problema, escrever funções puras quando útil, tratar erro e criar testes; explicar invariantes | foundation-chapter | foundation | pseudocódigo + implementação testada |
| 10. Tipos, contratos e modelagem | transformar regra de negócio em tipos, validações e contratos; evitar estados inválidos; documentar limites | conceptual-chapter | professional | modelo de domínio inicial |
| 11. Estruturas de dados | escolher listas, mapas, sets, filas, árvores e heaps por custo e semântica; medir impacto | technology-chapter | professional | benchmark comparativo |
| 12. Algoritmos e complexidade | calcular Big-O, medir crescimento, reconhecer gargalos e otimizar com critério | deep-dive-chapter | specialist | relatório Big-O + benchmark |
| 13. Git e colaboração | criar branches, resolver conflitos, rebase, bisect, tags e PRs; revisar código com critérios | technology-chapter | professional | PR simulado e bisect |
| 14. Engenharia de software | planejar mudança, reduzir risco, escrever critérios de aceite, manter qualidade e documentação | conceptual-chapter | professional | plano de evolução |
| 15. Requisitos e modelagem de domínio | conduzir discovery, linguagem ubíqua, casos de uso, eventos e critérios de aceite | conceptual-chapter | professional | backlog + modelo de domínio |
| 16. Clean Code pragmático | melhorar nomes, funções, módulos e testes sem dogmatismo; refatorar mantendo comportamento | technology-chapter | professional | antes/depois com testes |
| 17. SOLID e design para mudança | aplicar coesão, acoplamento, interfaces e inversão de dependência a mudanças reais | conceptual-chapter | professional | ADR de design |
| 18. Testes e qualidade | desenhar pirâmide de testes, unit/integration/contract/e2e; criar suite mínima confiável | technology-chapter | professional | estratégia e suíte de testes |
| 19. Segurança por design | identificar ativos, ameaças, abuso, controles, privilégio mínimo e validação de entrada | security-chapter | specialist | threat model inicial |
| 20. Observabilidade inicial | definir logs estruturados, métricas, traces, SLI/SLO e sinais úteis | technology-chapter | professional | plano de observabilidade |
| 21. Manutenção e evolução | diagnosticar dívida técnica, planejar migração incremental e proteger comportamento | architecture-chapter | professional | plano de migração |
| 22. Pensamento de arquiteto | comparar alternativas, forças, trade-offs, riscos e consequências; escrever ADR defensável | architecture-chapter | specialist | ADR comparativo |
| 23. Projeto integrador do Livro 1 | entregar base versionada, testada, documentada, segura por design e observável | project-chapter | specialist | repositório/protótipo avaliado |

## Livro 2 — Desenvolvimento Full Stack e Produto Web Profissional

- **Objetivo:** transformar fundamentos em produto web navegável, usável e testável, com fluxo completo de discovery, UX, API, autenticação, frontend/backend simples e deploy local.
- **Papel na formação:** criar visão ponta a ponta antes da especialização por stack.
- **Pré-requisitos:** Livro 1.
- **Benchmarks de referência:** Designing Web APIs; The Design of Everyday Things; Inspired; Refactoring UI como benchmark visual; Web Application Security.
- **Roadmaps relacionados:** Full Stack; Frontend; Backend; API Design; Git and GitHub.
- **Perfil de especialização:** product engineer capaz de entregar fatias verticais com qualidade.
- **Competências básicas:** criar páginas, formulários, endpoints, validações e fluxo de navegação.
- **Competências profissionais:** integrar frontend/backend, autenticação, testes e deploy; medir UX e erros.
- **Competências especialistas:** priorizar escopo, reduzir risco de produto, desenhar API evolutiva e operar uma entrega end-to-end.
- **Partes do livro:** produto e discovery; UX/UI; APIs; integração; qualidade; entrega.
- **Capítulos planejados:** visão de produto SaaS; personas e jornadas; HTML/CSS/JS moderno; TypeScript para produto; design system mínimo; API REST; auth básica; formulários e validação; testes full stack; deploy local; telemetria de produto; projeto full stack.
- **Deep-dives necessários:** API design, autenticação/session/JWT, acessibilidade, validação ponta a ponta, testes e deploy local.
- **Laboratórios obrigatórios:** lab guiado de tela + API; lab profissional de feature vertical; troubleshooting de CORS/auth/validação; segurança de sessão e CSRF/XSS; performance de carregamento; observabilidade de erros; desafio integrador navegável.
- **Estudos de caso:** falha de validação entre frontend e backend; fluxo de onboarding confuso; quebra de contrato de API.
- **Avaliação de domínio:** prova conceitual de produto/API; exercício aplicado de feature; revisão de código; estudo de caso UX/API; diagnóstico de bug full stack; decisão arquitetural de fronteira; entrega de produto; rubrica.
- **Projeto prático:** primeira versão navegável da plataforma SaaS com gestão de conhecimento, usuários e atendimentos.
- **Evidências de domínio:** backlog, protótipo navegável, contratos API, testes, relatório de UX/performance, ADRs.
- **Conexão com projeto final integrado:** estabelece a experiência principal e os fluxos que serão endurecidos nos livros seguintes.
- **Critérios de conclusão:** produto navegável com critérios de aceite, testes, documentação, revisão de segurança e evidência de operação local.

## Livro 3 — Backend Java Spring Boot Especialista

- **Objetivo:** construir backend Java robusto para domínios críticos, APIs, transações, segurança, observabilidade e operação.
- **Papel na formação:** formar especialista em Spring Boot para serviços centrais do SaaS.
- **Pré-requisitos:** Livros 1 e 2.
- **Benchmarks de referência:** Effective Java; Java Concurrency in Practice; Spring in Action; Spring Boot in Action; Secure by Design.
- **Roadmaps relacionados:** Java; Spring Boot; Backend; API Design; PostgreSQL.
- **Perfil de especialização:** backend engineer Java capaz de projetar, implementar, diagnosticar e operar serviços Spring.
- **Competências básicas:** Java moderno, Maven/Gradle, Spring MVC, validação, DTOs e testes.
- **Competências profissionais:** JPA, transações, migrations, segurança, observabilidade, integração e deploy containerizado.
- **Competências especialistas:** JVM, GC, concorrência, Spring internals, auto-configuration, OAuth2/OIDC, N+1, profile, lifecycle de beans e troubleshooting de produção.
- **Partes do livro:** Java/JVM; Spring Core; APIs; dados; segurança; operação; projeto.
- **Capítulos planejados:** Java moderno; JVM e GC; Maven/Gradle; Spring Core IoC/DI; Spring Boot internals; REST e erro padronizado; Bean Validation; JPA/Hibernate; transações; migrations; Spring Security; OAuth2/OIDC; testes; observabilidade; performance; troubleshooting; projeto Java.
- **Deep-dives necessários:** Java e JVM; Spring Core e Spring Boot internals; Spring Security e OAuth2/OIDC; JPA/Hibernate e transações; observabilidade Spring.
- **Laboratórios obrigatórios:** API com validação e erro padronizado; serviço profissional com JPA e migrations; troubleshooting N+1/profile/bean/transação; segurança OAuth2/OIDC; performance com pool/queries/GC; OpenTelemetry/Micrometer; desafio de serviço central de conhecimento.
- **Estudos de caso:** falha N+1 em endpoint crítico; deadlock transacional; incidente por profile errado; vulnerabilidade por autorização ausente.
- **Avaliação de domínio:** prova Spring/JVM; exercício aplicado de API; revisão de código; estudo de caso transacional; diagnóstico de incidente; decisão arquitetural de camadas; entrega de serviço; rubrica.
- **Projeto prático:** backend Spring Boot para conhecimento, atendimentos, permissões e auditoria.
- **Evidências de domínio:** serviço executável, testes, ADRs, traces, relatório de performance, runbook.
- **Conexão com projeto final integrado:** implementa o core transacional e seguro da plataforma.
- **Critérios de conclusão:** serviço Java com cobertura, segurança, observabilidade, documentação operacional e diagnóstico reproduzível.

## Livro 4 — Backend Node.js TypeScript Especialista

- **Objetivo:** formar backend Node.js para workers, integrações, streaming, automação e serviços de IA.
- **Papel na formação:** complementar o core Java com serviços assíncronos e integrações modernas.
- **Pré-requisitos:** Livros 1, 2 e noções do Livro 3 recomendadas.
- **Benchmarks de referência:** Node.js Design Patterns; Distributed Systems with Node.js; Effective TypeScript; Designing Data-Intensive Applications.
- **Roadmaps relacionados:** Node.js; TypeScript; Backend; API Design; AI Engineer.
- **Perfil de especialização:** backend engineer TypeScript focado em runtime, concorrência assíncrona e integrações resilientes.
- **Competências básicas:** TypeScript, módulos, HTTP, validação, testes e configuração.
- **Competências profissionais:** filas, workers, streams, retries, idempotência, contratos e observabilidade.
- **Competências especialistas:** event loop, libuv, backpressure, memory leaks, profiling, workers threads, segurança de supply chain e integração com LLMs.
- **Partes do livro:** TypeScript; runtime Node.js; APIs/workers; integração; IA; operação.
- **Capítulos planejados:** TypeScript avançado; Node runtime; event loop; streams/backpressure; APIs Node; workers e filas; integração externa; retries/idempotência; testes; segurança; performance/profiling; observabilidade; serviço de automação IA; projeto Node.
- **Deep-dives necessários:** Node.js runtime, event loop e streams; TypeScript avançado; filas e workers; profiling e memory leaks; segurança de dependências.
- **Laboratórios obrigatórios:** API Node guiada; worker profissional com fila; troubleshooting de event loop bloqueado; segurança contra SSRF/secrets/deps vulneráveis; performance com profiling; observabilidade com traces; desafio de automação técnica.
- **Estudos de caso:** fila duplicando mensagens; stream sem backpressure; incidente por pacote comprometido; timeout em integração externa.
- **Avaliação de domínio:** prova runtime/TS; exercício de worker; revisão de código; estudo de caso de integração; diagnóstico de incidente; decisão arquitetural Java vs Node; entrega de serviço; rubrica.
- **Projeto prático:** serviços Node para workers, automações, integrações externas e pipelines de IA.
- **Evidências de domínio:** workers idempotentes, testes, métricas, traces, relatório de profiling e SBOM.
- **Conexão com projeto final integrado:** habilita automações assíncronas e ponte operacional com IA.
- **Critérios de conclusão:** serviço Node resiliente, seguro, observável e testado sob falhas.

## Livro 5 — Frontend React, Next.js e TypeScript Especialista

- **Objetivo:** construir frontend moderno, acessível, performático e seguro com React, Next.js App Router, Server Components e TypeScript.
- **Papel na formação:** especializar a experiência de usuário e integração com backends/IA.
- **Pré-requisitos:** Livros 1 e 2; TypeScript básico.
- **Benchmarks de referência:** React docs; Learning React; Effective TypeScript; Web Performance in Action; Inclusive Design Patterns.
- **Roadmaps relacionados:** Frontend; React; Next.js; TypeScript; Full Stack.
- **Perfil de especialização:** frontend engineer capaz de projetar UI profissional, renderização moderna, estado, cache, acessibilidade, testes e performance.
- **Competências básicas:** componentes, props, estado, rotas, forms, fetch e CSS.
- **Competências profissionais:** design system, validação, autenticação, cache, testes, acessibilidade e integração API.
- **Competências especialistas:** React rendering, hooks, memoização, Suspense, App Router, Server Components, streaming, SEO, web vitals e segurança frontend.
- **Partes do livro:** React; TypeScript UI; Next.js; estado/cache; qualidade; performance; projeto.
- **Capítulos planejados:** React mental model; hooks; composição; TypeScript UI; forms; estado; data fetching/cache; Next.js App Router; Server Components; auth no frontend; design system; acessibilidade; testes; performance; observabilidade frontend; projeto Next.js.
- **Deep-dives necessários:** React rendering, hooks e performance; Next.js App Router e Server Components; cache; acessibilidade; segurança frontend.
- **Laboratórios obrigatórios:** tela guiada; feature profissional com Server Components; troubleshooting hydration/cache; segurança XSS/session; performance Lighthouse/Web Vitals; observabilidade frontend; desafio de dashboard SaaS.
- **Estudos de caso:** hydration mismatch; renderização excessiva; falha de acessibilidade; vazamento de token no cliente.
- **Avaliação de domínio:** prova React/Next; exercício aplicado; revisão de código; estudo de caso UX/performance; diagnóstico de incidente frontend; decisão de renderização; entrega de frontend; rubrica.
- **Projeto prático:** frontend profissional da plataforma com dashboard, gestão de conhecimento, atendimento, IA assistida e admin.
- **Evidências de domínio:** app Next.js, testes, Lighthouse, axe/a11y, relatório de renderização e ADR de cache/render.
- **Conexão com projeto final integrado:** entrega interface final do SaaS e experiência de uso da IA.
- **Critérios de conclusão:** frontend acessível, testado, performático, seguro e integrado.

## Livro 6 — Dados, Bancos e Sistemas Distribuídos

- **Objetivo:** formar domínio especialista em PostgreSQL, Redis, mensageria, consistência, eventos, resiliência e sistemas distribuídos.
- **Papel na formação:** sustentar dados confiáveis, performance e integração entre serviços.
- **Pré-requisitos:** Livros 1 a 4 recomendados.
- **Benchmarks de referência:** Designing Data-Intensive Applications; Database Internals; SQL Performance Explained; Redis in Action; Kafka: The Definitive Guide; Enterprise Integration Patterns.
- **Roadmaps relacionados:** PostgreSQL; SQL; Redis; Backend; System Design; Data Engineer.
- **Perfil de especialização:** engineer capaz de modelar, otimizar, diagnosticar e operar dados distribuídos.
- **Competências básicas:** SQL, modelagem relacional, transações, cache, filas e eventos.
- **Competências profissionais:** índices, locks, isolation, migrations, backups, Redis, Kafka/RabbitMQ, outbox e idempotência.
- **Competências especialistas:** PostgreSQL internals, MVCC, replicação, consistência, ordering, exactly-once como trade-off, sagas e recuperação de incidentes.
- **Partes do livro:** PostgreSQL; Redis; mensageria; distribuídos; resiliência; projeto.
- **Capítulos planejados:** modelagem relacional; SQL avançado; PostgreSQL internals; índices/EXPLAIN; transações/MVCC/locks; backup/restore; Redis; cache patterns; filas; Kafka/RabbitMQ; eventos e contratos; outbox/sagas; consistência; resiliência; projeto de dados.
- **Deep-dives necessários:** PostgreSQL internals, índices e transações; Redis em produção; Kafka/RabbitMQ e mensageria; sistemas distribuídos; consistência e resiliência.
- **Laboratórios obrigatórios:** schema guiado; tuning profissional com EXPLAIN; troubleshooting deadlock/lock/índice; segurança de dados e backup; performance SQL/cache; observabilidade de banco/fila; desafio de consistência com eventos.
- **Estudos de caso:** incidente por query sem índice; perda de mensagem; cache stale; rollback parcial em saga.
- **Avaliação de domínio:** prova de dados/distribuídos; exercício SQL/eventos; revisão de schema/código; estudo de caso; diagnóstico de incidente; decisão CAP/consistência; entrega de pipeline; rubrica.
- **Projeto prático:** camada de dados do SaaS com PostgreSQL, Redis, mensageria, outbox, auditoria e recuperação.
- **Evidências de domínio:** migrações, plano de índices, relatório EXPLAIN, pipeline de eventos, testes de resiliência e runbook.
- **Conexão com projeto final integrado:** garante integridade, velocidade e resiliência das informações do SaaS.
- **Critérios de conclusão:** dados modelados, testados, observáveis, recuperáveis e resilientes a falhas parciais.

## Livro 7 — DevOps, Cloud, Docker, Kubernetes e SRE

- **Objetivo:** levar a plataforma para produção com containers, CI/CD, IaC, Kubernetes, cloud, observabilidade, SRE, incidentes e custos.
- **Papel na formação:** transformar software em serviço operável e confiável.
- **Pré-requisitos:** Livros 1 a 6.
- **Benchmarks de referência:** Docker Deep Dive; Kubernetes in Action; Production Kubernetes; Accelerate; Continuous Delivery; Infrastructure as Code; Site Reliability Engineering; Observability Engineering.
- **Roadmaps relacionados:** DevOps; Docker; Kubernetes; Terraform; AWS; Linux; MLOps.
- **Perfil de especialização:** platform/devops/SRE engineer capaz de automatizar, operar, diagnosticar e evoluir ambientes.
- **Competências básicas:** Dockerfile, Compose, CI, ambientes, variáveis, deploy e logs.
- **Competências profissionais:** multi-stage, registry, Kubernetes, Helm, Terraform, pipelines, rollback, secrets, monitoração e alertas.
- **Competências especialistas:** Docker internals, segurança container, Kubernetes production, OpenTelemetry, SLOs, incident command, capacity planning e FinOps.
- **Partes do livro:** containers; pipelines; IaC/cloud; Kubernetes; observabilidade; SRE; projeto.
- **Capítulos planejados:** Docker fundamentos; Docker internals; Compose; image security; CI/CD; IaC Terraform; cloud networking/IAM; Kubernetes workloads; networking/storage; Helm/GitOps; secrets; OpenTelemetry; dashboards/alertas; SRE/SLO; incidentes; custos; projeto produção.
- **Deep-dives necessários:** Docker internals e produção; Kubernetes em produção; OpenTelemetry e observabilidade; SRE e incidentes; CI/CD e IaC; cloud networking/IAM.
- **Laboratórios obrigatórios:** Dockerfile básico; multi-stage; reduzir imagem; Compose; volumes/networks; healthcheck; non-root; troubleshooting container reiniciando; scan; registry; pipeline; Kubernetes deploy; OpenTelemetry; incidente SRE; desafio de produção.
- **Estudos de caso:** deploy quebrado; pod em CrashLoopBackOff; vazamento de segredo; alerta ruidoso; indisponibilidade por capacidade.
- **Avaliação de domínio:** prova DevOps/SRE; exercício IaC; revisão de pipeline/manifests; estudo de caso; diagnóstico de incidente; decisão arquitetural de deploy; entrega em ambiente; rubrica.
- **Projeto prático:** ambiente cloud/Kubernetes da plataforma com CI/CD, observabilidade, SLOs, rollback e runbooks.
- **Evidências de domínio:** Dockerfiles, manifests/Helm, Terraform, pipelines, dashboards, alertas, postmortem e plano de custo.
- **Conexão com projeto final integrado:** coloca o SaaS em condição de produção operável.
- **Critérios de conclusão:** deploy reproduzível, seguro, observável, com rollback e simulação de incidente concluída.

## Livro 8 — IA, ML, LLMs, RAG e Agentes em Produção

- **Objetivo:** separar fundamentos de ML, LLM Engineering, RAG Engineering, Agents Engineering e LLMOps, formando capacidade de criar IA útil, avaliada, segura e operável.
- **Papel na formação:** adicionar inteligência ao SaaS sem ignorar qualidade, custo, segurança e governança.
- **Pré-requisitos:** Livros 1, 2, 4, 6 e 7 recomendados.
- **Benchmarks de referência:** Hands-On Machine Learning; Designing Machine Learning Systems; Natural Language Processing with Transformers; AI Engineering; Build a Large Language Model; Machine Learning Design Patterns.
- **Roadmaps relacionados:** AI Engineer; AI and Data Scientist; Machine Learning; AI Agents; MLOps; Prompt Engineering.
- **Perfil de especialização:** AI engineer capaz de construir, avaliar, proteger e operar aplicações com ML/LLMs/RAG/agentes.
- **Competências básicas:** dados, métricas, prompts, embeddings, APIs LLM e avaliação simples.
- **Competências profissionais:** pipelines RAG, function calling, ferramentas, agentes, custos, latência, observabilidade e governança.
- **Competências especialistas:** LLM internals para engenheiros, retrieval avançado, reranking, evals, LLMOps, safety, guardrails, red teaming e incidentes de IA.
- **Partes do livro:** ML; LLM Engineering; RAG; agentes; LLMOps; projeto.
- **Capítulos planejados:** fundamentos de ML; avaliação ML; LLM internals para engenheiros; prompt engineering profissional; tool/function calling; embeddings; ingestão/chunking; vector stores; retrieval/reranking; RAG avançado; RAG security; agents architecture; agents seguros; LLMOps/evals; custo/latência; governança; projeto IA.
- **Deep-dives necessários:** LLM internals para engenheiros; RAG avançado; agentes de IA seguros; LLMOps e avaliação; prompt injection em documentos.
- **Laboratórios obrigatórios:** dataset/treino simples; app LLM guiado; RAG profissional com ingestão/chunking/embeddings/vector store/reranking/eval; troubleshooting hallucination/latência/custo; segurança com prompt injection via documento; performance/caching; observabilidade de tokens/evals; desafio de agente seguro.
- **Estudos de caso:** RAG responde com documento malicioso; agente executa ação indevida; custo explode por prompt/contexto; regressão de qualidade após troca de modelo.
- **Avaliação de domínio:** prova ML/LLM/RAG; exercício aplicado; revisão de pipeline; estudo de caso; diagnóstico de incidente IA; decisão arquitetural modelo vs RAG vs agente; entrega de feature IA; rubrica.
- **Projeto prático:** assistente inteligente da plataforma com RAG, agentes controlados, avaliação contínua, governança, custo e observabilidade.
- **Evidências de domínio:** datasets de avaliação, prompts versionados, pipeline RAG, evals, traces, threat model AI, relatório de custo/latência.
- **Conexão com projeto final integrado:** adiciona gestão inteligente de conhecimento, atendimento assistido e automação técnica segura.
- **Critérios de conclusão:** IA útil, medida, segura, operável, com regressão monitorada e limites documentados.

## Livro 9 — Cybersegurança, AppSec, CloudSec e AI Security

- **Objetivo:** aprofundar segurança ofensiva/defensiva ética em AppSec, API Security, CloudSec, DevSecOps, supply chain e AI Security.
- **Papel na formação:** endurecer todo o SaaS e formar capacidade de threat modeling, teste, mitigação e resposta.
- **Pré-requisitos:** Livros 1 a 8; todos os labs ofensivos devem ocorrer em ambiente próprio e isolado.
- **Benchmarks de referência:** Security Engineering; Web Application Security; API Security in Action; Secure by Design; Container Security; Software Supply Chain Security; Adversarial Machine Learning; OWASP Top 10; OWASP API Security Top 10; OWASP LLM Top 10.
- **Roadmaps relacionados:** Cyber Security; DevSecOps; API Design; AI Red Teaming; Docker; Kubernetes; AWS.
- **Perfil de especialização:** security-minded engineer capaz de atacar eticamente, defender, automatizar controles e validar mitigação.
- **Competências básicas:** ativos, ameaças, vulnerabilidades, autenticação, autorização, criptografia aplicada e logging de segurança.
- **Competências profissionais:** OWASP, API abuse, secrets, IAM, containers, pipelines, SBOM, scans, políticas e resposta a incidente.
- **Competências especialistas:** threat modeling avançado, CloudSec, supply chain, Kubernetes security, AI/LLM red teaming, guardrails e adversarial testing.
- **Partes do livro:** fundamentos security; AppSec/API; CloudSec; DevSecOps/supply chain; AI Security; projeto hardening.
- **Capítulos planejados:** threat modeling; segurança web; OWASP Top 10; OWASP API Security; auth avançada; criptografia aplicada; secrets; logging/auditoria; container/Kubernetes security; CloudSec/IAM; DevSecOps; supply chain; AI Security; OWASP LLM Top 10; AI red/blue team; resposta a incidentes; projeto hardening.
- **Deep-dives necessários:** OWASP Top 10; OWASP API Security; OWASP LLM Top 10; threat modeling; cloud security; supply chain security; AI Security.
- **Laboratórios obrigatórios:** lab guiado de threat model; lab profissional de exploração/correção OWASP em app próprio; troubleshooting de auth/IAM; segurança CloudSec; performance de controles; observabilidade/auditoria de segurança; desafio integrador de ataque/defesa; AI prompt injection/tool abuse defense.
- **Estudos de caso:** IDOR em API; SSRF em integração; segredo vazado em pipeline; permissões cloud excessivas; prompt injection em RAG; supply chain comprometida.
- **Avaliação de domínio:** prova security; exercício aplicado; revisão de código seguro; estudo de caso; diagnóstico de incidente; decisão arquitetural de controle; entrega de hardening; rubrica.
- **Projeto prático:** hardening completo da plataforma com threat model, correções, pipeline DevSecOps, CloudSec baseline e AI Security evals.
- **Evidências de domínio:** threat models, relatórios de vulnerabilidade, PRs de correção, scans, SBOM, policies, audit logs, retestes e postmortem.
- **Conexão com projeto final integrado:** transforma a plataforma em sistema defendível, auditável e resiliente a abusos.
- **Critérios de conclusão:** vulnerabilidades críticas mitigadas, controles testados, pipeline seguro e evidência de reteste.

## Livro 10 — Projeto Final Integrado e Portfólio Profissional

- **Objetivo:** consolidar todo o percurso em capstone profissional, documentação, operação, apresentação técnica e portfólio.
- **Papel na formação:** provar competência demonstrável para aplicar, diagnosticar, proteger, otimizar e operar sistema real.
- **Pré-requisitos:** Livros 1 a 9.
- **Benchmarks de referência:** rubricas de capstone de engenharia de software; Software Engineering at Google; Site Reliability Workbook; Secure by Design; Designing Machine Learning Systems.
- **Roadmaps relacionados:** Full Stack; Backend; Frontend; DevOps; AI Engineer; AI Agents; Cyber Security; Software Architect.
- **Perfil de especialização:** engenheiro full cycle com portfólio técnico robusto e defesa arquitetural.
- **Competências básicas:** organizar entrega, documentação e demonstração.
- **Competências profissionais:** integrar serviços, frontend, dados, IA, segurança, CI/CD e observabilidade.
- **Competências especialistas:** defender trade-offs, responder incidentes simulados, demonstrar evidências, planejar evolução e comunicar para públicos técnicos.
- **Partes do livro:** integração; quality gates; incident game day; documentação; defesa; portfólio.
- **Capítulos planejados:** escopo final; arquitetura consolidada; integração end-to-end; hardening final; load/performance test; observability review; AI eval review; incident game day; documentação; portfólio; apresentação executiva/técnica; banca final.
- **Deep-dives necessários:** arquitetura integrada, readiness review, game day, portfolio engineering, comunicação técnica.
- **Laboratórios obrigatórios:** lab guiado de integração; lab profissional de release; troubleshooting end-to-end; segurança final; performance/load; observabilidade/game day; desafio capstone.
- **Estudos de caso:** decisão de evolução de arquitetura; incidente multi-serviço; regressão de IA; auditoria de segurança pré-release.
- **Avaliação de domínio:** prova oral/conceitual; exercício aplicado; revisão de código; estudo de caso; diagnóstico de incidente; decisão arquitetural; entrega de projeto; rubrica final.
- **Projeto prático:** `Plataforma SaaS Inteligente e Segura de Gestão de Conhecimento, Atendimentos e Automação Técnica` em estado demonstrável.
- **Evidências de domínio:** repositórios, documentação, diagramas, ADRs, testes, pipelines, dashboards, threat models, evals, runbooks, postmortems e apresentação gravável.
- **Conexão com projeto final integrado:** é a consolidação final.
- **Critérios de conclusão:** banca técnica aprovada, todos os quality gates atendidos, documentação e portfólio prontos para revisão humana.

# Deep-dives obrigatórios transversais

Os deep-dives abaixo devem virar capítulos, blocos explícitos ou laboratórios avaliados nos livros indicados:

| Deep-dive | Livro principal | Evidência mínima |
|---|---:|---|
| Java e JVM | 3 | relatório GC/JVM + benchmark |
| Spring Core e Spring Boot internals | 3 | diagnóstico de beans/auto-configuration |
| Spring Security e OAuth2/OIDC | 3 | fluxo seguro com testes de autorização |
| Node.js runtime, event loop e streams | 4 | profiling + backpressure corrigido |
| React rendering, hooks e performance | 5 | análise de renderização e Web Vitals |
| Next.js App Router e Server Components | 5 | ADR de renderização e cache |
| PostgreSQL internals, índices e transações | 6 | EXPLAIN + lock/MVCC lab |
| Redis em produção | 6 | política de cache + falhas simuladas |
| Kafka/RabbitMQ e mensageria | 6 | outbox, DLQ, replay e idempotência |
| Docker internals e produção | 7 | imagem segura otimizada e troubleshooting |
| Kubernetes em produção | 7 | manifests/Helm, probes, autoscaling e incident lab |
| OpenTelemetry e observabilidade | 7 | traces distribuídos e dashboards |
| SRE e incidentes | 7 | SLO, postmortem e game day |
| LLM internals para engenheiros | 8 | relatório tokens/contexto/custo/limites |
| RAG avançado | 8 | pipeline RAG avaliado com reranking |
| Agentes de IA seguros | 8 | agent tool policy + eval adversarial |
| OWASP Top 10 | 9 | exploração controlada, correção e reteste |
| OWASP API Security | 9 | testes de abuso, authz e rate limiting |
| OWASP LLM Top 10 | 9 | AI red team/blue team report |
| Threat modeling | 1 e 9 | modelo STRIDE/abuse cases + mitigação |
| Cloud security | 9 | baseline IAM/rede/secrets/logging |
| Supply chain security | 9 | SBOM, assinatura, SCA e policy gate |

# Laboratórios concretos por livro

| Livro | Lab guiado | Lab profissional | Lab de troubleshooting | Lab de segurança | Lab de performance | Lab de observabilidade | Desafio integrador |
|---:|---|---|---|---|---|---|---|
| 1 | shell, Git, HTTP e testes mínimos | API/CLI mínima com domínio e testes | processo travado, porta ocupada, permissão, DNS | threat model e privilégio mínimo | algoritmo e memória medidos | logs/métricas simples | sistema mínimo versionado |
| 2 | tela + endpoint + formulário | feature vertical de produto | CORS, sessão, contrato e validação | XSS/CSRF/session hardening | carregamento e bundle básico | erros frontend/backend | produto full stack navegável |
| 3 | API Spring com validação | serviço JPA/transações/security | N+1, bean, profile, deadlock | OAuth2/OIDC e autorização | pool, query e GC | Micrometer/OpenTelemetry | core Java do SaaS |
| 4 | API Node TypeScript | worker com fila e integração | event loop bloqueado e retry storm | SSRF, secrets, dependências | profiling, streams e backpressure | traces de worker | automação assíncrona |
| 5 | componentes e rotas | dashboard Next.js com RSC | hydration mismatch e cache | XSS/token/session | Lighthouse/Web Vitals | frontend error tracking | frontend final do SaaS |
| 6 | schema PostgreSQL | tuning SQL + eventos | lock, deadlock, mensagem perdida | backup, roles e dados sensíveis | índices, cache e throughput | banco/fila dashboards | consistência distribuída |
| 7 | Dockerfile e Compose | CI/CD + Kubernetes + IaC | CrashLoopBackOff, deploy quebrado | image scan, non-root, secrets | autoscaling/capacity | OpenTelemetry + alertas | produção em cloud/K8s |
| 8 | app LLM simples | RAG com evals e agente | hallucination, latência e custo | prompt injection/tool abuse | cache, batching e contexto | tokens, evals e traces | IA segura em produção |
| 9 | threat model | exploração/correção OWASP | auth/IAM/policy bug | CloudSec, DevSecOps e AI Security | custo/latência dos controles | SIEM/logs/auditoria | ataque/defesa completo |
| 10 | integração end-to-end | release candidata | incidente multi-serviço | hardening final | load test | game day observável | capstone e portfólio |

# Avaliações de domínio por livro

Cada livro deve conter, no mínimo, a seguinte avaliação de domínio:

| Livro | Prova conceitual | Exercício aplicado | Revisão de código | Estudo de caso | Diagnóstico de incidente | Decisão arquitetural | Entrega de projeto | Rubrica |
|---:|---|---|---|---|---|---|---|---|
| 1 | sistemas, algoritmos, engenharia | script/API mínima | legibilidade/testes | bug de ambiente | Linux/rede/memória | ADR inicial | base do SaaS | fundamentos e evidências |
| 2 | produto, API, UX | feature vertical | full stack PR | contrato quebrado | CORS/auth/UX | fronteira frontend/backend | produto navegável | produto profissional |
| 3 | JVM/Spring | endpoint transacional | service/repository/security | N+1/deadlock | profile/bean/transação | camadas e transação | core Spring | backend Java especialista |
| 4 | Node runtime/TS | worker resiliente | async code | integração instável | event loop/fila | Java vs Node/service boundary | serviço Node | backend Node especialista |
| 5 | React/Next | tela complexa | componentes/hooks | performance/a11y | hydration/cache | SSR/CSR/RSC/cache | frontend Next | frontend especialista |
| 6 | dados/distribuídos | query/event pipeline | schema/consumer | perda de mensagem | lock/deadlock/cache | consistência/eventos | dados resilientes | data systems |
| 7 | DevOps/SRE | pipeline/IaC | manifests/pipeline | outage deploy | CrashLoop/alerta | deploy topology | produção operável | SRE/DevOps |
| 8 | ML/LLM/RAG | pipeline IA | prompts/tools/code | regressão IA | hallucination/custo | RAG vs fine-tuning vs agente | IA produtiva | AI engineering |
| 9 | security | correção vulnerabilidade | secure code | abuso realista | incidente security | controle e ameaça | hardening | security specialist |
| 10 | defesa oral | integração final | revisão global | evolução futura | game day | arquitetura final | capstone | banca final |

# Projeto final integrado

Nome: `Plataforma SaaS Inteligente e Segura de Gestão de Conhecimento, Atendimentos e Automação Técnica`.

## Evolução por livro

- **Livro 1:** fundamentos, modelagem, Git, testes, decisões computacionais, ADR inicial, threat model inicial e base versionada.
- **Livro 2:** produto full stack navegável com jornadas, telas, API simples, autenticação básica e critérios de aceite.
- **Livro 3:** backend Spring Boot robusto para core transacional, permissões, auditoria, observabilidade e testes.
- **Livro 4:** backend Node.js para workers, integrações externas, automações, filas e serviços de IA.
- **Livro 5:** frontend React/Next.js profissional com App Router, Server Components, acessibilidade, performance e dashboards.
- **Livro 6:** PostgreSQL, Redis, filas, eventos, consistência, outbox, resiliência, backup e recuperação.
- **Livro 7:** Docker, Kubernetes, CI/CD, cloud, IaC, SRE, observabilidade, incidentes, rollback e custos.
- **Livro 8:** IA com RAG, agentes, avaliação, governança, segurança, custos, latência e LLMOps.
- **Livro 9:** hardening de segurança, threat model completo, AppSec, API Security, CloudSec, DevSecOps, supply chain e AI Security.
- **Livro 10:** capstone, documentação, portfólio, apresentação técnica, game day, banca e plano de evolução.

## Arquitetura alvo do projeto final

- Frontend Next.js para portal, dashboard, gestão de conhecimento, atendimento, administração e experiências assistidas por IA.
- Backend Spring Boot para core transacional, domínio, autorização, auditoria e APIs críticas.
- Backend Node.js TypeScript para workers, integrações, automações, streaming de IA e tarefas assíncronas.
- PostgreSQL como sistema transacional; Redis para cache, rate limiting e coordenação controlada; Kafka/RabbitMQ para eventos e filas.
- RAG com ingestão, chunking, embeddings, vector store, reranking, avaliação e proteção contra prompt injection.
- Agentes com ferramentas restritas, human-in-the-loop, logs de auditoria e políticas explícitas.
- Docker, Kubernetes, CI/CD, IaC, observabilidade OpenTelemetry, SLOs, runbooks, incident response e controles DevSecOps.
- Segurança por design com threat models, OWASP, API Security, CloudSec, AI Security, supply chain e retestes.

# Cobertura comparada com roadmap.sh

Roadmaps usados como benchmark externo: Frontend, Backend, Full Stack, DevOps, AI Engineer, AI and Data Scientist, Machine Learning e AI Agents. Roadmaps adicionais usados como apoio: Linux, Git and GitHub, Java, Spring Boot, Node.js, TypeScript, React, Next.js, PostgreSQL, Redis, Docker, Kubernetes, Terraform, AWS, Cyber Security, DevSecOps, AI Red Teaming, MLOps, Software Architect e Data Structures & Algorithms.

| Roadmap | Tópicos cobertos | Parcialmente cobertos | Ausentes planejados | Onde entram no currículo | Ação curricular |
|---|---|---|---|---|---|
| Frontend Roadmap | HTML, CSS, JS/TS, React, forms, auth client, testes, acessibilidade, performance | design system avançado, browser internals profundo | mobile nativo e frameworks alternativos | Livros 2 e 5 | Next.js, React rendering e performance viram deep-dive; mobile fica fora do escopo principal |
| Backend Roadmap | HTTP, APIs, auth, caching, SQL, filas, segurança, testes, CI/CD, containers | GraphQL e gRPC | linguagens não usadas no projeto | Livros 1, 2, 3, 4, 6, 7 e 9 | Java/Spring e Node viram livros separados; GraphQL/gRPC podem virar apêndice futuro |
| Full Stack Roadmap | frontend, backend, banco, auth, deploy, testes, produto, Git | mobile/PWA avançado | frameworks alternativos | Livros 1 a 7 e 10 | coberto por projeto progressivo e capstone |
| DevOps Roadmap | Linux, Git, containers, CI/CD, Kubernetes, IaC, cloud, observabilidade, SRE | service mesh avançado, multi-cloud | administração profunda de data center | Livros 1 e 7 | Docker/K8s/OpenTelemetry/SRE viram deep-dives; service mesh fica como tópico parcial |
| AI Engineer Roadmap | Python/ML conceitual, LLM APIs, prompting, RAG, agents, evals, deployment | fine-tuning profundo e model training em larga escala | pesquisa de modelos foundation | Livro 8 | ML, LLM, RAG, Agents e LLMOps separados; fine-tuning fica parcial |
| AI and Data Scientist Roadmap | dados, estatística aplicada, ML, avaliação, experimentos | visualização e BI profundo | estatística matemática avançada | Livro 8, apoio no Livro 6 | fundamentos de ML cobertos; data science profunda fica limitada ao necessário para AI engineering |
| Machine Learning Roadmap | supervised/unsupervised basics, avaliação, features, overfitting, deployment | deep learning profundo | matemática avançada e treino distribuído | Livro 8 | ML é fundamento aplicado, não trilha acadêmica completa; lacunas registradas para expansão |
| AI Agents Roadmap | LLMs, tools, planning, memory, workflows, evals, guardrails, observability | multi-agent research e autonomia aberta | agentes autônomos sem supervisão | Livro 8 e segurança no Livro 9 | agentes seguros viram deep-dive e lab; autonomia irrestrita não será ensinada como padrão |

## Lacunas transformadas em capítulos, laboratórios ou deep-dives

- **Linux forte:** adicionado ao Livro 1 e usado novamente em Docker/Kubernetes/SRE.
- **DDD estratégico/tático:** distribuído entre Livro 1, Livro 3 e projeto final, com context map, aggregates, invariantes e ADRs.
- **Next.js moderno:** Livro 5 com App Router, Server Components, cache, streaming e performance.
- **Backend Java e Node separados:** Livros 3 e 4 independentes.
- **Dados, distribuídos, cloud e DevOps separados:** Livro 6 para dados/distribuídos; Livro 7 para DevOps/cloud/SRE.
- **IA separada por competências:** Livro 8 distingue ML, LLM Engineering, RAG Engineering, Agents Engineering e LLMOps.
- **Cyber ampliado:** Livro 9 cobre AppSec, API Security, CloudSec, DevSecOps, supply chain, AI Security e labs ataque/defesa.
- **Roadmap.sh coverage:** tópicos centrais cobertos por livros; tópicos auxiliares viram deep-dives ou apêndices futuros; tópicos fora do escopo ficam explicitamente marcados.

# Regras para escrita futura de capítulos

Antes de escrever ou reescrever qualquer capítulo deste mapa, o agente deve:

1. Preencher `CONTENT_BLUEPRINT.md` para o capítulo.
2. Executar análise temática dinâmica e declarar perfis existentes ou novos.
3. Confirmar benchmark aplicável sem copiar conteúdo protegido.
4. Definir laboratório, estudo de caso, avaliação e evidência de domínio.
5. Conectar a entrega ao projeto final integrado.
6. Garantir seções obrigatórias do template editorial.
7. Planejar validação com `npm run validate`, `npm run generate:status` e `npm run generate:search` antes de qualquer aprovação final.
8. Manter status global consistente com `CONTENT_STATUS.md`.

# Revisão humana recomendada antes da escrita

- Validar a seleção final de livros de referência por domínio e remover qualquer referência que a equipe editorial não queira usar como benchmark.
- Confirmar se GraphQL, gRPC, service mesh, mobile/PWA avançado, fine-tuning profundo e data science estatística devem virar capítulos, apêndices ou permanecer fora do escopo.
- Revisar carga total de capítulos por livro para balancear extensão, cadência editorial e viabilidade de produção.
- Validar stack alvo do projeto final: cloud específica, broker preferencial, vector store, provedor LLM, ferramenta CI/CD, observabilidade e IaC.
- Aprovar rubricas específicas por livro antes da escrita.
- Atualizar `CONTENT_STATUS.md` depois que a equipe aprovar esta arquitetura curricular.
