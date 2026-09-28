const test = require('node:test');
const assert = require('node:assert/strict');
const { getPlacementImpact } = require('../vastu-placement-data');

test('returns room-specific concerns for a misplaced kitchen', () => {
    const concerns = getPlacementImpact('Modular Kitchen', 'Southwest');
    assert.match(concerns.join(' '), /disagreements|irritability/);
    assert.match(concerns.join(' '), /stability/);
});

test('uses the most specific bedroom profile', () => {
    const concerns = getPlacementImpact('Children Bedroom', 'Northeast');
    assert.match(concerns.join(' '), /children/);
    assert.doesNotMatch(concerns.join(' '), /relationships/);
});

test('provides a safe fallback for recognized spaces without a profile', () => {
    assert.deepEqual(getPlacementImpact('Music Room', 'South'), [
        'imbalance in the activities associated with this space'
    ]);
});
