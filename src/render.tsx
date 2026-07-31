/**
 * Render Cove / Aria Elements templates to HTML, plain text, and design JSON.
 *
 *   npm run build
 *   npm run build:cove
 */

import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { ReactElement } from 'react';
import {
  renderToHtml,
  renderToHtmlParts,
  renderToPlainText,
  renderToJson,
} from '@unlayer/react-elements';
import { FinBriefEmail } from './templates/fin-brief-email';
import { FinResolutionReport } from './templates/fin-resolution-report';
import { InviteBoldEditorial } from './templates/cove/invite-bold-editorial';
import { InviteMinimalPrestige } from './templates/cove/invite-minimal-prestige';
import { InviteNarrativeLuxe } from './templates/cove/invite-narrative-luxe';
import { InvoiceUsagePdf } from './templates/cove/invoice-usage-pdf';
import { InvoiceMinimalistTabular } from './templates/cove/invoice-minimalist-tabular';
import { InvoiceDenseProfessional } from './templates/cove/invoice-dense-professional';
import { InvoiceModernPublisher } from './templates/cove/invoice-modern-publisher';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'output');
const assetsDir = join(outDir, 'assets');
const mediaDir = join(__dirname, 'assets', 'media');
const mediaAssets = [
  'aria-integration.png',
  'aria-preview-rail.png',
  'verified-seal.png',
];

function write(name: string, contents: string) {
  writeFileSync(join(outDir, name), contents, 'utf8');
  console.log(`  ✓ ${name} (${contents.length.toLocaleString()} chars)`);
}

function wrapEmail(title: string, head: string, body: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,400;0,500;0,700;1,300;1,400&display=swap" rel="stylesheet" />
${head}
</head>
${body}
</html>
`;
}

function email(filename: string, title: string, tree: ReactElement) {
  const { head, body } = renderToHtmlParts(tree);
  write(`${filename}.html`, wrapEmail(title, head, body));
  write(`${filename}.txt`, renderToPlainText(tree));
  write(`${filename}.json`, JSON.stringify(renderToJson(tree), null, 2));
}

function document(filename: string, tree: ReactElement) {
  write(`${filename}.html`, renderToHtml(tree));
  write(`${filename}.json`, JSON.stringify(renderToJson(tree), null, 2));
}

mkdirSync(assetsDir, { recursive: true });
for (const file of mediaAssets) {
  copyFileSync(join(mediaDir, file), join(assetsDir, file));
}

const target = process.argv[2] ?? 'all';
console.log(`\nRendering → ${outDir}\n`);

if (target === 'all' || target === 'brief') {
  email('fin-brief-email', 'Aria Brief — Weekly AI Support Digest', <FinBriefEmail />);
  document('fin-resolution-report', <FinResolutionReport />);
}

if (target === 'all' || target === 'cove' || target === 'invite') {
  email(
    'invite-bold-editorial',
    'Cove — Aria Preview (Bold Editorial)',
    <InviteBoldEditorial />,
  );
  email(
    'invite-minimal-prestige',
    "Cove — You're Invited (Minimal Prestige)",
    <InviteMinimalPrestige />,
  );
  email(
    'invite-narrative-luxe',
    'Cove — A Conversation with Aria (Narrative Luxe)',
    <InviteNarrativeLuxe />,
  );
}

if (target === 'all' || target === 'cove' || target === 'invoice') {
  document('invoice-usage-pdf', <InvoiceUsagePdf />);
  document('invoice-minimalist-tabular', <InvoiceMinimalistTabular />);
  document('invoice-dense-professional', <InvoiceDenseProfessional />);
  document('invoice-modern-publisher', <InvoiceModernPublisher />);
}

console.log('\nDone. Open output/*.html to preview.\n');
