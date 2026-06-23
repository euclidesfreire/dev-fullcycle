# ADR-0001 — Política de memória para ingestão de documentos

- **Status:** draft
- **Data:** 2026-06-23
- **Contexto:** a plataforma SaaS processará uploads, extração de texto, chunking e indexação para IA. O fluxo pode consumir memória excessiva se carregar arquivos inteiros, duplicar buffers ou enfileirar payloads completos.

## Decisão

1. Uploads devem usar streaming para armazenamento temporário.
2. Limites de tamanho serão definidos por plano do tenant antes de consumir o corpo completo.
3. Filas devem transportar identificadores de chunks, nunca payloads grandes.
4. Caches locais exigem TTL, tamanho máximo e métricas de hit/miss.
5. Heap dumps serão tratados como artefatos sensíveis, com acesso restrito e retenção curta.
6. O serviço deve expor métricas de RSS, heap usado, duração de GC, bytes de upload, tamanho de fila e falhas por limite.

## Consequências

- Reduz pico de memória por requisição.
- Aumenta complexidade do fluxo de ingestão.
- Exige testes de carga e runbook de OOM.
- Melhora isolamento por tenant e previsibilidade operacional.

## Evidências esperadas

- Teste de upload acima do limite.
- Teste de regressão de heap em ingestões repetidas.
- Dashboard com métricas de memória.
- Runbook de resposta a OOM.
