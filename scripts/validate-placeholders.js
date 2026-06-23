import { textFiles, read, rel, fail } from './utils.js';

const placeholderPatterns = [
  /\bTODO\b/,
  /\bFIXME\b/,
  /\bTBD\b/,
  /\bWIP\b/,
  /lorem ipsum/i,
  /conte[uú]do pendente/i,
  /em constru[cç][aã]o/i,
  /\[\[.*?\]\]/
];

const errors = [];
for (const file of textFiles()) {
  if (rel(file).startsWith('scripts/')) continue;
  const content = read(file);
  const lines = content.split(/\r?\n/);
  lines.forEach((line, index) => {
    if (placeholderPatterns.some((pattern) => pattern.test(line))) {
      errors.push(`${rel(file)}:${index + 1} contém possível placeholder: ${line.trim()}`);
    }
  });
}

fail(errors);
console.log('Validação de placeholders concluída sem pendências.');
