import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const topicTerms = {
  Docker: ['docker', 'container', 'containers', 'image', 'dockerfile'],
  Redis: ['redis', 'cache', 'pub/sub', 'stream'],
  'Spring Boot': ['spring', 'spring boot', 'bean', 'actuator'],
  LLM: ['llm', 'token', 'embedding', 'prompt', 'transformer'],
  RAG: ['rag', 'vector', 'retrieval', 'embedding'],
  'OAuth2/OIDC': ['oauth', 'oidc', 'openid connect', 'jwt'],
  Kubernetes: ['kubernetes', 'pod', 'deployment'],
  PostgreSQL: ['postgresql', 'postgres', 'index', 'transaction'],
  Observabilidade: ['observability', 'observabilidade', 'log', 'metric', 'métrica', 'trace', 'opentelemetry'],
  'Mensageria e Filas': ['kafka', 'rabbitmq', 'queue', 'fila', 'broker', 'mensageria'],
  React: ['react', 'component', 'hook', 'next.js', 'server components'],
  'Node.js': ['node', 'node.js', 'event loop'],
  Java: ['java', 'jvm', 'hibernate', 'jpa'],
  Cybersecurity: ['security', 'segurança', 'threat', 'vulnerability', 'vulnerabilidade', 'fido2', 'webauthn', 'prompt injection'],
  'Arquitetura de Software': ['arquitetura', 'hexagonal', 'ddd', 'solid', 'clean architecture'],
  Testes: ['test', 'teste', 'testcontainers', 'qualidade'],
  'Design de APIs': ['api', 'http', 'rest', 'graphql', 'contrato'],
  DevOps: ['ci/cd', 'pipeline', 'deploy', 'devops'],
};

const profileByTopic = {
  Docker: 'docker.depth.md', Redis: 'redis.depth.md', 'Spring Boot': 'spring-boot.depth.md', LLM: 'llm.depth.md', RAG: 'rag.depth.md',
  'OAuth2/OIDC': 'oauth2-oidc.depth.md', Kubernetes: 'kubernetes.depth.md', PostgreSQL: 'postgresql.depth.md', Observabilidade: 'observability.depth.md',
  'Mensageria e Filas': 'messaging-queues.depth.md', React: 'react.depth.md', 'Node.js': 'nodejs.depth.md', Java: 'java.depth.md', Cybersecurity: 'cybersecurity.depth.md',
  'Arquitetura de Software': 'software-architecture.depth.md', Testes: 'testing.depth.md', 'Design de APIs': 'api-design.depth.md', DevOps: 'devops.depth.md'
};

function walk(dir, pred, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name === 'node_modules' || ent.name === '.git') continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, pred, out);
    else if (pred(p)) out.push(p);
  }
  return out;
}

const files = [
  path.join(root, 'CURRICULUM_MAP.md'),
  ...walk(path.join(root, 'books'), p => /\/chapters\/.*\.md$/.test(p)),
  ...walk(path.join(root, 'projects'), p => /\.(md|js|ts|tsx|jsx|java|json|yml|yaml|sql|dockerfile|Dockerfile)$/i.test(p)),
].filter(fs.existsSync);

const hits = new Map();
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8').toLowerCase();
  for (const [topic, terms] of Object.entries(topicTerms)) {
    const count = terms.reduce((n, t) => n + (text.match(new RegExp(`\\b${t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi')) || []).length, 0);
    if (count) {
      if (!hits.has(topic)) hits.set(topic, []);
      hits.get(topic).push({ file: path.relative(root, file), count });
    }
  }
}

const profileDir = path.join(root, 'topic-depth-profiles');
const profiles = fs.existsSync(profileDir) ? fs.readdirSync(profileDir).filter(f => f.endsWith('.depth.md')) : [];
const profileSet = new Set(profiles);
const rows = [...hits.entries()].sort().map(([topic, places]) => {
  const total = places.reduce((n, p) => n + p.count, 0);
  const role = total >= 20 ? 'core/specialist' : total >= 6 ? 'applied/core' : 'mention/supporting';
  const level = total >= 20 ? 'specialist' : total >= 6 ? 'professional' : 'foundation';
  const profile = profileByTopic[topic] || '';
  const own = profile && profileSet.has(profile) ? 'Sim' : 'Talvez';
  const status = profile && profileSet.has(profile) ? 'criado' : 'pendente';
  const where = places.slice(0, 5).map(p => `${p.file} (${p.count})`).join('<br>');
  return `| ${topic} | ${profile ? '`' + profile + '`' : '—'} | ${where} | ${role} | ${level} | ${own} | ${status} |`;
});

const report = `# Relatório de Descoberta Temática\n\n> Gerado por \`npm run discover:topics\` a partir do conteúdo real em \`CURRICULUM_MAP.md\`, \`books/**/chapters/*.md\`, \`projects/**\` e perfis existentes. O mapa de palavras-chave é configurável e serve como triagem inicial, não como limite editorial.\n\n## 1. Temas identificados no currículo\n\nVer tabela consolidada; as ocorrências vindas de \`CURRICULUM_MAP.md\` indicam planejamento curricular.\n\n## 2. Temas identificados nos capítulos existentes\n\nVer tabela consolidada; caminhos em \`books/**/chapters/*.md\` indicam conteúdo real já escrito.\n\n## 3. Temas identificados nos projetos\n\nVer tabela consolidada; caminhos em \`projects/**\` indicam uso aplicado ou operacional.\n\n## Tabela consolidada\n\n| Tema | Perfil | Onde aparece | Papel provável | Nível esperado | Precisa perfil próprio? | Status |\n| ---- | ------ | ------------ | -------------- | -------------- | ----------------------- | ------ |\n${rows.join('\n')}\n\n## 4. Temas que já possuem perfil\n\n${profiles.map(p => `- \`${p}\``).join('\n')}\n\n## 5. Temas que ainda precisam de perfil\n\n- Registrar novos perfis quando a análise humana ou agentes detectarem FIDO2/WebAuthn, Testcontainers, Hibernate/JPA, Next.js, OpenTelemetry específico, bancos vetoriais, prompt injection, cache distribuído, arquitetura hexagonal, DDD ou threat modeling como centrais e não suficientemente cobertos por perfil amplo.\n\n## 6. Temas que aparecem apenas como menção\n\nTemas com papel provável \`mention/supporting\` devem ser explicados apenas na profundidade necessária ao capítulo.\n\n## 7. Temas que são centrais\n\nTemas com papel provável \`core/specialist\` exigem perfil aplicado e auditoria temática.\n\n## 8. Temas que merecem capítulo especialista próprio\n\nPriorizar temas recorrentes com nível \`specialist\` e riscos próprios de segurança, performance, testes ou operação.\n\n## 9. Recomendações de novos perfis\n\nCriar perfis quando um tema aparecer como central em capítulo/projeto e não for adequadamente coberto por perfil amplo.\n\n## 10. Riscos de superficialidade por tema\n\nRisco alto quando o capítulo usa tema central sem declarar perfil, sem funcionamento interno, sem segurança, sem performance, sem testes ou sem observabilidade aplicável.\n`;
fs.writeFileSync(path.join(root, 'TOPIC_DISCOVERY_REPORT.md'), report);
console.log(`Relatório gerado: TOPIC_DISCOVERY_REPORT.md com ${hits.size} temas prováveis.`);
