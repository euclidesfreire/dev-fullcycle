import { markdownFiles, read, rel, isChapterFile, requiredSections, fail } from './utils.js';

const errors = [];
const chapterFiles = markdownFiles().filter(isChapterFile);

for (const file of chapterFiles) {
  const content = read(file);
  for (const section of requiredSections) {
    const heading = new RegExp(`^#{2,4}\\s+${section}\\s*$`, 'imu');
    if (!heading.test(content)) errors.push(`${rel(file)} não contém a seção obrigatória "${section}".`);
  }

  const weakSignals = [
    ['Explicação profunda', 600],
    ['Funcionamento interno', 500],
    ['Exemplo profissional', 350],
    ['Segurança', 300],
    ['Performance', 300],
    ['Trade-offs', 250]
  ];

  for (const [section, minChars] of weakSignals) {
    const pattern = new RegExp(`^#{2,4}\\s+${section}\\s*$([\\s\\S]*?)(?=^#{2,4}\\s+|$)`, 'imu');
    const match = content.match(pattern);
    if (match && match[1].trim().length < minChars) {
      errors.push(`${rel(file)} possui seção "${section}" curta demais para auditoria de profundidade (${match[1].trim().length}/${minChars} caracteres).`);
    }
  }
}

if (chapterFiles.length === 0) console.log('Nenhum capítulo encontrado para auditoria de profundidade.');
fail(errors);
console.log(`Auditoria estrutural de profundidade concluída: ${chapterFiles.length} arquivo(s) avaliado(s).`);
