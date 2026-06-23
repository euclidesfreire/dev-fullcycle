import { markdownFiles, read, rel, writeOutput } from './utils.js';

const documents = markdownFiles().map((file) => {
  const content = read(file);
  const title = content.match(/^#\s+(.+)$/m)?.[1] || rel(file);
  const body = content.replace(/```[\s\S]*?```/g, ' ').replace(/[#>*_`\-[\]]/g, ' ').replace(/\s+/g, ' ').trim();
  return { title, path: rel(file), text: body.slice(0, 4000) };
});

writeOutput('search-index.json', `${JSON.stringify({ generatedAt: new Date().toISOString(), documents }, null, 2)}\n`);
console.log(`Índice de busca gerado em dist/search-index.json com ${documents.length} documento(s).`);
