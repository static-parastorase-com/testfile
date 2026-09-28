const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const fixtures = {
    square: '30,462 570,462 570,30 30,30',
    rectangle: '30,462 570,462 570,30 30,30',
    'l-shape': '30,462 570,462 570,246 246,246 246,30 30,30',
    'cross-shape': '210,462 390,462 390,318 570,318 570,174 390,174 390,30 210,30 210,174 30,174 30,318 210,318'
};

test('Marma debug renderings contain their finite floor-plan outlines', () => {
    Object.entries(fixtures).forEach(([name, points]) => {
        const source = fs.readFileSync(
            path.join(__dirname, `../docs/marma-debug-${name}.svg`),
            'utf8'
        );

        assert.doesNotMatch(source, /\b(?:NaN|Infinity)\b/, name);
        assert.match(source, new RegExp(`<polygon class="floor" points="${points}"/>`), name);
    });
});
