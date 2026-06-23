import { readdirSync, readFileSync, statSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, extname, relative, resolve } from 'node:path';

export const ROOT = resolve(new URL('..', import.meta.url).pathname);
export const OUT_DIR = join(ROOT, 'dist');
export const IGNORED_DIRS = new Set(['.git', 'node_modules', 'dist', 'build', '.next', 'coverage']);
export const TEXT_EXTENSIONS = new Set(['.md', '.mdx', '.html', '.css', '.js', '.ts', '.tsx', '.jsx', '.json']);

export function walk(dir = ROOT) {
  const entries = [];
  for (const name of readdirSync(dir)) {
    if (IGNORED_DIRS.has(name)) continue;
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) entries.push(...walk(full));
    else entries.push(full);
  }
  return entries;
}

export function textFiles() {
  return walk().filter((file) => TEXT_EXTENSIONS.has(extname(file)));
}

export function read(file) {
  return readFileSync(file, 'utf8');
}

export function rel(file) {
  return relative(ROOT, file).replaceAll('\\\\', '/');
}

export function ensureOutDir() {
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });
}

export function writeOutput(name, data) {
  ensureOutDir();
  writeFileSync(join(OUT_DIR, name), data, 'utf8');
}

export function fail(messages) {
  if (messages.length === 0) return;
  console.error(messages.map((m) => `- ${m}`).join('\n'));
  process.exit(1);
}

export function markdownFiles() {
  return walk().filter((file) => ['.md', '.mdx'].includes(extname(file)));
}

export function isChapterFile(file) {
  const r = rel(file);
  if (r.startsWith('agents/')) return false;
  return /(^|\/)chapters?\//i.test(r);
}

export const requiredSections = [
  'Objetivos', 'Contexto', 'Problema real', 'Conceito principal', 'Intuição',
  'Explicação profunda', 'Funcionamento interno', 'Exemplo simples',
  'Exemplo profissional', 'Implementação prática', 'Segurança', 'Performance',
  'Testes', 'Limitações', 'Trade-offs', 'Erros comuns', 'Checklist',
  'Exercícios', 'Desafio', 'Revisão', 'Conexão com projeto final'
];
