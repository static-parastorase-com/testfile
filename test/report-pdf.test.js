const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, '../advanced-analyzer.js'), 'utf8');

test('PDF pattern capture crops the source image to the marked boundary on every device', () => {
    assert.doesNotMatch(source, /function reportBoundaryViewport\(\)[\s\S]{0,100}matchMedia/);
    assert.match(source, /outerBoundary\?\.vertices/);
    assert.match(source, /svg\.setAttribute\('viewBox',viewport\.viewBox\)/);
    assert.match(source, /document\.body\.appendChild\(captureElement\)/);
});

test('PDF capture surface follows the marked plan aspect ratio instead of the device screen', () => {
    assert.match(source, /return \{viewBox:`\$\{x\} \$\{y\} \$\{width\} \$\{height\}`,width,height\}/);
    assert.match(source, /exportLongEdge=1400,viewportRatio=viewport\?viewport\.width\/viewport\.height:1/);
    assert.match(source, /width:exportWidth,height:exportHeight,windowWidth:exportWidth,windowHeight:exportHeight/);
    assert.doesNotMatch(source, /devicePixelRatio/);
    assert.match(source, /captureElement\.style\.width=`\$\{exportWidth\}px`/);
    assert.match(source, /svg\.setAttribute\('width',String\(exportWidth\)\)/);
    assert.match(source, /svg\.setAttribute\('height',String\(exportHeight\)\)/);
});

test('PDF capture applies the crop before html2canvas renders the staging node', () => {
    const viewBoxPosition=source.indexOf("svg.setAttribute('viewBox',viewport.viewBox)");
    const appendPosition=source.indexOf('document.body.appendChild(captureElement)');
    const capturePosition=source.indexOf('html2canvas(captureElement');
    assert.ok(viewBoxPosition>0);
    assert.ok(viewBoxPosition<appendPosition);
    assert.ok(appendPosition<capturePosition);
    assert.doesNotMatch(source, /onclone:clonedDocument/);
    assert.match(source, /\.finally\(\(\)=>captureElement\.remove\(\)\)/);
});

test('PDF patterns use the complete remaining printable page without stretching', () => {
    assert.match(source, /availableImageHeight=bottom-y/);
    assert.match(source, /Math\.min\(contentWidth\/shot\.width,availableImageHeight\/shot\.height\)/);
    assert.doesNotMatch(source, /maxImageHeight=150/);
});

test('report footer PDF action downloads through the PDF generator without opening print', () => {
    assert.match(source, /\$\('#generatePdf'\)\.addEventListener\('click',generatePdf\)/);
    assert.match(source, /pdf\.save\(`/);
    assert.doesNotMatch(source, /if\(!window\.jspdf\?\.jsPDF\)\{window\.print\(\);return;\}/);
    assert.match(source, /showAlertPopup\?\.\(/);
    assert.match(source, /\$\('#printAnalysisBtn'\)\.addEventListener\('click',\(\)=>window\.print\(\)\)/);
});