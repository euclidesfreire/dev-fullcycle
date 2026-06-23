# Planejamento por agentes — Livro 1

Livro: **Fundamentos de Computação e Engenharia de Software**

## 1. Curriculum Architect — proposta inicial

A estrutura do livro deve formar uma base completa antes de Full Stack, IA e Cybersegurança. A progressão proposta é: fundamentos de computação, sistemas, redes e internet, programação e algoritmos, ferramentas de engenharia, práticas profissionais, arquitetura, operação e pensamento de arquiteto.

### Estrutura inicial proposta

1. O que é computação
2. Hardware, software e representação da informação
3. Sistemas operacionais
4. Processos, threads e concorrência
5. Memória e armazenamento
6. Redes de computadores
7. Internet e Web
8. HTTP e APIs
9. Fundamentos de programação
10. Tipos, dados e abstrações
11. Estruturas de dados
12. Algoritmos e complexidade
13. Git e colaboração
14. Engenharia de software
15. Requisitos e modelagem
16. Clean Code
17. SOLID e design orientado a objetos
18. Arquitetura de software
19. Testes
20. Segurança por design
21. Observabilidade
22. Manutenção e evolução
23. Pensamento de arquiteto

## 2. Editorial Director — revisão

A proposta cobre os temas obrigatórios, mas precisa evitar capítulos excessivamente amplos. A revisão editorial recomenda:

- Separar fundamentos de computação de representação de dados, para não misturar visão histórica, modelo de máquina e codificação.
- Tratar sistemas operacionais em dois capítulos: responsabilidades do SO e execução concorrente.
- Dar um capítulo específico para memória porque o tema é base para performance, segurança e confiabilidade.
- Separar redes, internet, Web e HTTP para deixar claro o encadeamento de camadas.
- Incluir um capítulo de modelagem e decomposição antes de estruturas de dados e algoritmos.
- Tratar engenharia de software como disciplina antes de requisitos, código e arquitetura.
- Fazer segurança, observabilidade e manutenção aparecerem como preocupações transversais, não apêndices.
- Encerrar com pensamento de arquiteto conectando trade-offs, contexto, restrições e evolução.

## 3. Depth Auditor — lacunas encontradas

A auditoria de profundidade identificou lacunas que precisam ser corrigidas na estrutura final:

- Falta explicitar binário, codificação, Unicode, números, precisão e serialização.
- Falta mencionar boot, kernel, chamadas de sistema, permissões e sistema de arquivos.
- Processos e threads precisam incluir escalonamento, sincronização, deadlock, race condition e modelos de concorrência.
- Memória precisa cobrir stack, heap, cache, memória virtual, garbage collection e vazamentos.
- Redes precisam ir além de definições: latência, throughput, DNS, TCP, UDP, TLS, NAT e roteamento.
- HTTP precisa incluir métodos, status, headers, cache, cookies, autenticação, idempotência, REST e contratos de API.
- Programação precisa incluir controle de fluxo, funções, escopo, modularidade, erros e depuração.
- Tipos precisam cobrir sistemas estáticos/dinâmicos, nulidade, mutabilidade, genéricos e contratos.
- Estruturas e algoritmos precisam conectar complexidade a escolhas reais de engenharia.
- Git precisa incluir modelo mental de DAG, branches, merge, rebase, conflitos e revisão.
- Engenharia de software precisa cobrir ciclo de vida, qualidade, dívida técnica, documentação e colaboração.
- Requisitos precisam incluir requisitos não funcionais, domínio, stakeholders, critérios de aceite e rastreabilidade.
- Clean Code e SOLID precisam ser tratados com limites, trade-offs e exemplos de uso incorreto.
- Arquitetura precisa incluir modularidade, acoplamento, coesão, camadas, eventos, monólitos, microsserviços e decisões arquiteturais.
- Testes precisam incluir pirâmide, unitários, integração, contrato, ponta a ponta, TDD e testabilidade.
- Segurança por design precisa incluir threat modeling, CIA, autenticação, autorização, validação, secrets, menor privilégio e supply chain.
- Observabilidade precisa incluir logs, métricas, traces, SLOs, alertas e debugging em produção.
- Manutenção precisa incluir refatoração, migrações, compatibilidade, versionamento e evolução incremental.

## 4. Correções aplicadas na estrutura final

A estrutura final expande o livro para 28 capítulos, preservando a progressão didática e adicionando capítulos específicos para representação da informação, decomposição de problemas, APIs, qualidade de software e decisões arquiteturais. Os arquivos Markdown dos capítulos foram criados somente como planejamento, sem desenvolvimento completo do conteúdo.
