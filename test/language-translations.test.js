const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const languageFiles = ['hindi', 'kannada', 'tamil', 'telugu', 'malayalam'];

function loadTranslations(language) {
    const source = fs.readFileSync(path.join(__dirname, `../${language}-translations.js`), 'utf8');
    const window = {};
    vm.runInNewContext(source, { window });
    return window[`${language}Translations`];
}

test('every translated toolbar provides a dedicated advanced analysis label', () => {
    languageFiles.forEach((language) => {
        const translations = loadTranslations(language);
        assert.equal(typeof translations.languageStrings.labels.advancedAnalysis, 'string', language);
        assert.ok(translations.languageStrings.labels.advancedAnalysis.trim().length > 0, language);
    });
});

test('every translated toolbar provides labels for every persistent tool', () => {
    const toolLabels = [
        'uploadButton', 'addName', 'scan', 'advancedScan', 'advancedAnalysis',
        'validate', 'zoomIn', 'zoomOut', 'resetZoom', 'fullscreen', 'guideToggle'
    ];
    languageFiles.forEach((language) => {
        const labels = loadTranslations(language).languageStrings.labels;
        toolLabels.forEach((label) => {
            assert.equal(typeof labels[label], 'string', `${language}.${label}`);
            assert.ok(labels[label].trim().length > 0, `${language}.${label}`);
        });
    });
});

test('language refresh updates visible and accessible tool labels', () => {
    const source = fs.readFileSync(path.join(__dirname, '../script.js'), 'utf8');
    assert.match(source, /\[uploadButton, labels\.uploadButton\]/);
    assert.match(source, /localizedToolbarLabels\.forEach/);
    ['zoomInBtn', 'zoomOutBtn', 'zoomResetBtn', 'fullscreenToggle', 'guideToggle'].forEach((id) => {
        assert.match(source, new RegExp(`${id}: labels\\.`), id);
    });
    assert.match(source, /tool\.setAttribute\('aria-label', name\)/);
});

test('language refresh updates the advanced analyzer button', () => {
    const source = fs.readFileSync(path.join(__dirname, '../script.js'), 'utf8');
    assert.match(source, /getElementById\('advancedAnalyzerBtn'\)/);
    assert.match(source, /\[advancedAnalyzerBtn, labels\.advancedAnalysis/);
});