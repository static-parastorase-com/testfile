import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const cssFiles = [
  'style.css',
  'professional-analyzer.css'
];

const jsFiles = [
  'scripts/jspdf.umd.min.js',
  'scripts/html2canvas.min.js',
  'scripts/tesseract.min.js',
  'scripts/pdf.min.js',
  'vastu-placement-data.js',
  'vastu-remedies.js',
  'kannada-vastu-remedies.js',
  'telugu-vastu-remedies.js',
  'hindi-vastu-remedies.js',
  'tamil-vastu-remedies.js',
  'malyalam-vastu-remedies.js',
  'hindi-translations.js',
  'kannada-translations.js',
  'tamil-translations.js',
  'telugu-translations.js',
  'malayalam-translations.js',
  'image-asset-manager.js',
  'script.js',
  'advanced-analyzer.js',
  'professional-analyzer-geometry.js',
  'vastu-marma-engine.js',
  'professional-analyzer.js',
  'language-onboarding.js'
];

let combinedCss = '';
for (const file of cssFiles) {
  const filePath = path.join(root, file);
  combinedCss += `/* --- ${file} --- */\n` + fs.readFileSync(filePath, 'utf8') + '\n\n';
}

combinedCss += `
/* --- inline critical styles --- */
body, body.workspace-loading {
  opacity: 1 !important;
  visibility: visible !important;
}
.workspace-loading::before {
  display: none !important;
}
`;

const cssInjector = `/**
 * Vastu Pro - Unified Application Bundle (All JS & CSS)
 * Auto-injected styles
 */
(function() {
  const css = ${JSON.stringify(combinedCss)};
  function injectStyles() {
    if (document.getElementById('app-bundle-styles')) return;
    const style = document.createElement('style');
    style.id = 'app-bundle-styles';
    style.textContent = css;
    const target = document.head || document.documentElement;
    if (target) {
      if (target.firstChild) {
        target.insertBefore(style, target.firstChild);
      } else {
        target.appendChild(style);
      }
    }
  }
  if (document.head || document.documentElement) {
    injectStyles();
  } else {
    document.addEventListener('DOMContentLoaded', injectStyles);
  }
})();
`;

let bundleJs = cssInjector + '\n;\n';

for (const file of jsFiles) {
  const filePath = path.join(root, file);
  bundleJs += `\n;\n/* --- File: ${file} --- */\n` + fs.readFileSync(filePath, 'utf8') + '\n;\n';
}

const outputPath = path.join(root, 'bundle.js');
fs.writeFileSync(outputPath, bundleJs, 'utf8');
console.log(`Bundle generated successfully at ${outputPath} (${(bundleJs.length / 1024 / 1024).toFixed(2)} MB)`);
