import { existsSync } from 'node:fs';
import { dirname, join, normalize } from 'node:path';
import { markdownFiles, read, rel, fail } from './utils.js';

const errors = [];
const markdownLink = /\[[^\]]+\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;

for (const file of markdownFiles()) {
  const content = read(file);
  for (const match of content.matchAll(markdownLink)) {
    const target = match[1];
    if (/^(https?:|mailto:|#)/i.test(target)) continue;
    const [pathOnly] = target.split('#');
    if (!pathOnly) continue;
    const resolved = normalize(join(dirname(file), decodeURIComponent(pathOnly)));
    if (!existsSync(resolved)) errors.push(`${rel(file)} contém link relativo quebrado: ${target}`);
  }
}

fail(errors);
console.log('Validação de links concluída sem links relativos quebrados.');
