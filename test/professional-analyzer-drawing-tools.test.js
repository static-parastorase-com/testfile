const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, '../professional-analyzer.js'), 'utf8');
const styles = fs.readFileSync(path.join(__dirname, '../professional-analyzer.css'), 'utf8');
const appStyles = fs.readFileSync(path.join(__dirname, '../style.css'), 'utf8');

test('drawing tools toggle off when their selected button is pressed again', () => {
    assert.match(source, /toggle-pen'\)setDrawingTool\(drawingTool==='pen'\?null:'pen'\)/);
    assert.match(source, /toggle-eraser'\)setDrawingTool\(drawingTool==='eraser'\?null:'eraser'\)/);
});

test('clicking away from the plan and drawing controls stops the active tool', () => {
    assert.match(
        source,
        /drawingTool&&!event\.target\.closest\('#proCanvasWrap, \.pro-draw-tools'\)\) setDrawingTool\(null\)/
    );
});

test('drawing tool selection is exposed to assistive technology', () => {
    assert.match(source, /button\.setAttribute\('aria-pressed',String\(selected\)\)/);
});

test('mobile toolbar keeps every tool in a smoothly scrollable horizontal row', () => {
    assert.match(styles, /\.pro-toolbar\{[\s\S]*?overflow-x:auto;[\s\S]*?scroll-behavior:smooth;[\s\S]*?touch-action:pan-x;/);
    assert.match(styles, /\.pro-toolbar-tools\{\s*margin-left:0;/);
    assert.match(styles, /\.pro-toolbar button\{\s*flex-shrink:0;/);
    assert.match(
        styles,
        /\.pro-toolbar>button,[\s\S]*?\.pro-toolbar \.pro-icon-button,[\s\S]*?\.pro-toolbar-tools \.guide-toggle,[\s\S]*?\.pro-toolbar-tools \.compass-view-toggle\{[\s\S]*?width:36px;[\s\S]*?height:36px;[\s\S]*?min-height:36px;/
    );
    assert.match(styles, /\.pro-toolbar \.pro-pen-button span\{display:none\}/);
});

test('compass and guide toolbar controls use the same square shape as other tools', () => {
    assert.match(
        styles,
        /\.pro-toolbar-tools \.guide-toggle,\.pro-toolbar-tools \.compass-view-toggle\{[^}]*border-radius:6px;/
    );
});

test('swiping the mobile toolbar does not activate the touched tool', () => {
    assert.doesNotMatch(source, /addEventListener\('touchstart', touchHandler/);
    assert.match(source, /Math\.hypot\([\s\S]*?\)>8/);
    assert.match(source, /element\.addEventListener\('touchend', touchEndHandler/);
});

test('mobile analyzer sections reserve space instead of overlapping', () => {
    assert.match(styles, /\.pro-toolbar\{flex:0 0 auto;min-height:56px;gap:8px\}/);
    assert.match(styles, /\.pro-main,\.pro-canvas-column,\.pro-canvas-wrap\{min-width:0;min-height:0\}/);
    assert.match(styles, /\.pro-empty\{justify-content:center;gap:9px;padding:24px 20px\}/);
});

test('tilt prompt is contained by the canvas and stays compact at the top on mobile', () => {
    assert.match(appStyles, /\.pro-tilt-popup \{[\s\S]*?position: absolute;[\s\S]*?inset: 0;[\s\S]*?place-items: center;/);
    assert.match(appStyles, /\.pro-tilt-popup\[hidden\] \{\s*display: none;/);
    assert.match(appStyles, /\.pro-tilt-card \.pro-dialog-actions \{[\s\S]*?gap: 10px;/);
    assert.match(appStyles, /place-items: start center;[\s\S]*?width: min\(250px, 100%\);/);
    assert.match(appStyles, /\.pro-tilt-input-wrap input \{[\s\S]*?height: 34px;[\s\S]*?font-size: 16px;/);
    assert.match(appStyles, /\.pro-tilt-card \.pro-dialog-actions button \{[\s\S]*?min-height: 34px;/);
});

test('setting the scale opens boundary instructions before boundary marking', () => {
    assert.match(
        source,
        /function applyCalibration[\s\S]*?state\.currentWorkflowStep='MARK_BOUNDARY'[\s\S]*?showGuide\('boundary'\)/
    );
    assert.match(
        source,
        /function acceptGuide[\s\S]*?kind==='boundary'[\s\S]*?state\.currentWorkflowStep='MARK_BOUNDARY'/
    );
});

test('workspace control cards keep numbered badges separate from their titles', () => {
    assert.match(appStyles, /\.control-part__title > span:first-child \{[\s\S]*?flex: 0 0 22px;/);
    assert.match(appStyles, /\.control-part__title > span:last-child \{[\s\S]*?width: auto;[\s\S]*?background: transparent;/);
    assert.match(appStyles, /\.workspace-menu__content \{ display: flex; flex-direction: column; gap: 12px; padding: 12px;/);
    assert.match(appStyles, /\.workspace-menu \.settings-panel--menu \{ display: flex; flex-direction: column; gap: 12px; \}/);
});

test('switching to the Devatas pattern updates the picker without rebuilding the menu', () => {
    assert.match(source, /function updatePatternPicker\(\)[\s\S]*?classList\.toggle\('active'/);
    assert.match(source, /action === 'compass-view'[\s\S]*?updatePatternPicker\(\); renderGeometry\(\)/);
    assert.doesNotMatch(source, /action === 'compass-view'[\s\S]*?renderSide\(\); renderGeometry\(\)/);
});

test('Devatas resizing keeps the active handle mounted for a flicker-free preview', () => {
    assert.match(source, /function updateDevatasResizePreview\(\)/);
    assert.match(source, /\.pro-devatas-resize-layer'\);if\(layer\)layer\.style\.transform=/);
    assert.doesNotMatch(source, /overlay\.innerHTML = renderDevatas/);
    assert.doesNotMatch(source, /if\(wasResizing\) \{ renderGeometry\(\); \}/);
    assert.match(source, /devatas\.dataset\.width=width;devatas\.dataset\.height=height/);
});

test('Devatas resize controls are larger and use the rendered pattern rotation', () => {
    assert.match(source, /pro-devatas-handle[^`]+r="10"/);
    assert.match(source, /pro-devatas-center" r="7"/);
    assert.equal((source.match(/G\.normalizeAngle\(state\.northAngle\+90\)/g) || []).length, 2);
    assert.match(styles, /\.pro-devatas-pattern,\.pro-devatas-frame\{opacity:\.68\}/);
});

test('Devatas handles provide a larger non-scaling touch target', () => {
    assert.match(source, /pro-devatas-handle-hit pro-devatas-handle--\$\{axis\}/);
    assert.match(source, /closest\?\.\('\.pro-devatas-handle,\.pro-devatas-handle-hit'\)/);
    assert.match(styles, /\.pro-devatas-handle-hit\{cursor:nwse-resize;fill:transparent;stroke:transparent;stroke-width:32;pointer-events:all;vector-effect:non-scaling-stroke\}/);
});

test('repeated Devatas resizes scale from a stable base without jumping', () => {
    assert.match(source, /data-base-width="\$\{patternWidth\}" data-base-height="\$\{patternHeight\}"/);
    assert.match(source, /const baseWidth=Number\(devatas\.dataset\.baseWidth\)/);
    assert.match(source, /`scale\(\$\{width\/baseWidth\},\$\{height\/baseHeight\}\)`/);
});

test('Devatas drag preview uses one composited visual update per pointer move', () => {
    assert.match(source, /class="pro-devatas-resize-layer"/);
    assert.doesNotMatch(source, /querySelectorAll\('\.pro-devatas-handle'\)\.forEach/);
    assert.doesNotMatch(source, /frame\.setAttribute/);
    assert.match(styles, /\.pro-devatas-resize-layer\{transform-box:fill-box;transform-origin:center;will-change:transform\}/);
});

test('opacity and size sliders do not rebuild Devatas or boundary geometry', () => {
    assert.match(source, /pro-pattern-overlay'\)\?\.setAttribute\('opacity',state\.patternOpacityPercent\/100\)/);
    assert.match(source, /if\(compassView==='devatas'\)\{[\s\S]*?updateDevatasResizePreview\(\);devatasResize=null;/);
    assert.match(source, /else if\(compassView!==\'boundary\'\)renderGeometry\(\)/);
});