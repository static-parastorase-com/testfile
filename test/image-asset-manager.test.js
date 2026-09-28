const test = require('node:test');
const assert = require('node:assert/strict');

test('tracks object URLs and releases each one only once', () => {
    const created = [];
    const revoked = [];
    global.URL = {
        createObjectURL(blob) { created.push(blob); return `blob:test-${created.length}`; },
        revokeObjectURL(url) { revoked.push(url); }
    };
    delete require.cache[require.resolve('../image-asset-manager.js')];
    const manager = require('../image-asset-manager.js');
    const first = manager.create({ name: 'large-plan.png' });
    const second = manager.create({ name: 'second-plan.jpg' });

    assert.equal(first, 'blob:test-1');
    assert.equal(second, 'blob:test-2');
    assert.equal(manager.release(first), true);
    assert.equal(manager.release(first), false);
    manager.releaseAll();
    assert.deepEqual(revoked, ['blob:test-1', 'blob:test-2']);
});

test('creates an object URL from a canvas Blob without a base64 copy', async () => {
    global.URL = {
        createObjectURL() { return 'blob:canvas'; },
        revokeObjectURL() {}
    };
    delete require.cache[require.resolve('../image-asset-manager.js')];
    const manager = require('../image-asset-manager.js');
    const blob = { type: 'image/jpeg' };
    const canvas = { toBlob(callback, type, quality) {
        assert.equal(type, 'image/jpeg');
        assert.equal(quality, 0.8);
        callback(blob);
    } };

    assert.equal(await manager.fromCanvas(canvas, 'image/jpeg', 0.8), 'blob:canvas');
});

test('keeps object URLs while a page is persisted and releases them on navigation', () => {
    const revoked = [];
    let pagehide;
    global.URL = {
        createObjectURL() { return 'blob:plan'; },
        revokeObjectURL(url) { revoked.push(url); }
    };
    global.addEventListener = (type, listener) => {
        if (type === 'pagehide') pagehide = listener;
    };
    delete require.cache[require.resolve('../image-asset-manager.js')];
    const manager = require('../image-asset-manager.js');
    manager.create({ name: 'plan.png' });

    pagehide({ persisted: true });
    assert.deepEqual(revoked, []);
    pagehide({ persisted: false });
    assert.deepEqual(revoked, ['blob:plan']);
    delete global.addEventListener;
});
