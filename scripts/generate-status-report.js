import { markdownFiles, read, rel, isChapterFile, writeOutput } from './utils.js';

const chapters = markdownFiles().filter(isChapterFile).map((file) => {
  const content = read(file);
  const status = content.match(/^status:\s*(.+)$/im)?.[1]?.trim() || 'untracked';
  return { file: rel(file), status };
});

const report = {
  generatedAt: new Date().toISOString(),
  totalChapters: chapters.length,
  chapters
};

writeOutput('content-status-report.json', `${JSON.stringify(report, null, 2)}\n`);
console.log(`Relatório gerado em dist/content-status-report.json com ${chapters.length} capítulo(s).`);
