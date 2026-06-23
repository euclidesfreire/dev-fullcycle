# Relatório de Expansão da Matriz Curricular

## 1. O que foi expandido

Foi expandido o `CURRICULUM_MAP.md` para manter a formação em 7 livros e incluir matriz detalhada para os Livros 2 a 7, com campos operacionais por capítulo: objetivo, tipo, profundidade, competências, tópicos obrigatórios, funcionamento interno, exemplos, diagramas, laboratório, estudo de caso, segurança, performance, testes, observabilidade, troubleshooting, trade-offs, perfis, benchmarks, roadmap, evidência, artefato do projeto final, critérios, risco e próxima etapa.

Também foram criados:

* `CHAPTER_GENERATION_MATRIX.md` com consulta operacional por capítulo.
* `CONTENT_GENERATION_BATCH_PLAN.md` com ordem de geração em lotes.
* `CURRICULUM_RESTRUCTURE_PROPOSAL.md` com recomendação separada, sem migração física.
* Atualização de `CONTENT_STATUS.md` para Livros 2 a 7 em `planned`.

## 2. Livros processados

* Livro 2 — Desenvolvimento Full Stack Moderno.
* Livro 3 — Backend Profissional com Java Spring Boot e Node.js.
* Livro 4 — Frontend Profissional com React e TypeScript.
* Livro 5 — Bancos de Dados, Sistemas Distribuídos, Cloud e DevOps.
* Livro 6 — Inteligência Artificial Aplicada para Desenvolvedores.
* Livro 7 — Cybersegurança para Devs, Arquitetos e Sistemas em Produção.

## 3. Quantidade de capítulos mapeados

* Livro 1: 24 capítulos referenciados na matriz operacional existente.
* Livro 2: 10 capítulos detalhados.
* Livro 3: 11 capítulos detalhados.
* Livro 4: 11 capítulos detalhados.
* Livro 5: 13 capítulos detalhados.
* Livro 6: 11 capítulos detalhados.
* Livro 7: 12 capítulos detalhados.
* Total Livros 2 a 7: 68 capítulos planejados.
* Total operacional Livros 1 a 7: 92 capítulos referenciados.

## 4. Quantidade de capítulos por depth level

Contagem para Livros 2 a 7:

* `professional`: 6.
* `advanced`: 9.
* `specialist`: 37.
* `deep-dive`: 16.

## 5. Capítulos que deveriam ser `deep-dive`

* Livro 5: índices/EXPLAIN, transações/locks, mensageria, outbox/consistência, Docker supply chain, Kubernetes, CI/CD/Terraform/cloud.
* Livro 6: RAG ingestão/vector databases, retrieval/reranking/grounding, agents, guardrails/prompt injection.
* Livro 7: OWASP Top 10, OWASP API Security, SAST/DAST/SCA/SBOM, container/cloud/network security, AI Security.

## 6. Lacunas encontradas

* O mapa anterior descrevia uma estrutura de 10 livros, mas a tarefa atual exige manter 7 livros.
* Livro 3 está denso por combinar Spring Boot e Node.js.
* Livro 5 está muito denso por combinar bancos, distribuídos, Docker, Kubernetes, cloud, DevOps, SRE e FinOps.
* Next.js moderno precisa ser tratado como central no Livro 4; a matriz registrou capítulos específicos para App Router, Server Components, Server Actions, SSR, SSG, ISR, streaming e BFF.
* Alguns perfis temáticos finos ainda podem ser criados futuramente: Next.js/RSC, Testcontainers, Hibernate/JPA, OpenTelemetry específico, threat modeling e FIDO2/WebAuthn.

## 7. Sugestões de reestruturação

A sugestão foi registrada em `CURRICULUM_RESTRUCTURE_PROPOSAL.md`: manter 7 livros por enquanto, mas avaliar migração futura para 10 livros separando Java, Node.js, Dados, DevOps/Cloud/SRE, IA, Cybersegurança e Capstone.

## 8. Riscos se gerar conteúdo antes de corrigir a matriz

* Produzir capítulos longos, mas genéricos.
* Ensinar frameworks sem funcionamento interno.
* Omitir laboratórios, evidência de domínio e critérios de aceite.
* Misturar conteúdo conceitual, projeto e produção sem sequência pedagógica.
* Aprovar indevidamente capítulos sem benchmark, auditoria e rubrica.
* Criar exemplos inseguros, especialmente em auth, uploads, IA e cyber.

## 9. Próximo passo recomendado

Revisão humana da matriz e aprovação do escopo por livro. Depois, criar blueprints capítulo a capítulo, respeitando o plano de lotes, sem gerar mais de dois capítulos conceituais por lote e sem agrupar capítulos `specialist`/`deep-dive`.

## 10. Scripts e validações

A execução deve ser registrada conforme resultado real após as alterações. Scripts existentes no `package.json` no momento da expansão:

* `npm run validate`
* `npm run validate:links`
* `npm run validate:placeholders`
* `npm run generate:status`
* `npm run generate:search`
* `npm run discover:topics`

## 11. Resultado das validações executadas

* `npm run validate`: passou; incluiu placeholders, links e auditoria estrutural de profundidade. A auditoria estrutural avaliou 24 arquivos de capítulos existentes.
* `npm run validate:links`: passou sem links relativos quebrados.
* `npm run validate:placeholders`: passou sem pendências.
* `npm run generate:status`: passou e gerou `dist/content-status-report.json` com 24 capítulos, refletindo que o script atual considera apenas capítulos físicos existentes do Livro 1.
* `npm run generate:search`: passou e gerou `dist/search-index.json` com 108 documentos.
* `npm run discover:topics`: passou e atualizou `TOPIC_DISCOVERY_REPORT.md` com 18 temas prováveis.

## 12. Observação sobre scripts

Nenhum script solicitado estava ausente no `package.json`. A saída do npm exibiu o aviso `Unknown env config "http-proxy"`, mas os comandos concluíram com sucesso.
