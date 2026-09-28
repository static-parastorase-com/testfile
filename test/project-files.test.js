const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');

test('project actions live in the Setup popup instead of workspace controls', () => {
  const html = read('index.html');
  const setupStart = html.indexOf('id="setupLanguageOverlay"');
  const projectStart = html.indexOf('id="projectFileTitle"');
  const setupEnd = html.indexOf('id="analyzerOverlay"');
  assert.ok(projectStart > setupStart && projectStart < setupEnd);
  assert.equal(html.slice(html.indexOf('<aside class="settings-panel"'), setupStart).includes('id="projectFileTitle"'), false);
  assert.match(html, /id="loadProjectButton" for="projectFileInput"/);
});

test('loaded completed projects resume at ready analysis and reveal pattern options', () => {
  const analyzer = read('professional-analyzer.js');
  const files = read('project-files.js');
  assert.match(analyzer, /currentWorkflowStep='READY_FOR_ANALYSIS'/);
  assert.match(analyzer, /boundaryState='CLOSED'/);
  assert.match(files, /vastu:open-workspace-controls/);
  assert.match(files, /target:'#proWorkflowPanel'/);
});

test('successfully loading a project closes the Setup popup', () => {
  const files = read('project-files.js');
  assert.match(files, /const closeSetupPopup = \(\) =>/);
  assert.match(files, /overlay\.hidden=true/);
  assert.match(files, /setAttribute\('aria-expanded','false'\)/);
  assert.match(files, /status\(`Loaded \$\{file\.name\}[\s\S]+closeSetupPopup\(\)/);
});

test('project save retains the original plan URI and load animation', () => {
  const files = read('project-files.js');
  assert.match(files, /project\?\.planFileUri/);
  assert.doesNotMatch(files, /toDataURL\('image\/png'\)/);
  assert.match(files, /project-load-animation/);
});

test('load picker binding works before or after DOMContentLoaded', () => {
  const files = read('project-files.js');
  assert.match(files, /document\.readyState==='loading'/);
  assert.match(files, /bindProjectFileControls\(\)/);
  assert.match(files, /projectFileInput/);
});

test('save immediately displays preparation progress', () => {
  const html = read('index.html');
  const files = read('project-files.js');
  assert.match(html, /id="projectFilePreparing"[^>]+hidden/);
  assert.match(files, /setPreparing\(true\)/);
  assert.match(files, /await nextPaint\(\)/);
  assert.match(files, /finally \{ setPreparing\(false\); \}/);
});
