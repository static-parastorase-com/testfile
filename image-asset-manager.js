(function (root, factory) {
    const api = factory(root);
    if (typeof module === 'object' && module.exports) module.exports = api;
    if (root) root.ImageAssetManager = api;
}(typeof globalThis !== 'undefined' ? globalThis : this, function (root) {
    'use strict';

    const managedUrls = new Set();

    function create(fileOrBlob) {
        if (!fileOrBlob) throw new TypeError('An image Blob or File is required.');
        const url = root.URL.createObjectURL(fileOrBlob);
        managedUrls.add(url);
        return url;
    }

    function fromCanvas(canvas, type = 'image/jpeg', quality = 0.92) {
        return new Promise((resolve, reject) => {
            canvas.toBlob((blob) => {
                if (!blob) {
                    reject(new Error('The image could not be prepared.'));
                    return;
                }
                resolve(create(blob));
            }, type, quality);
        });
    }

    function release(url) {
        if (!managedUrls.delete(url)) return false;
        root.URL.revokeObjectURL(url);
        return true;
    }

    function releaseAll() {
        [...managedUrls].forEach(release);
    }

    function compressImageFile(file, maxDimension = 2048, quality = 0.88) {
        if (!file) throw new TypeError('A File or Blob is required.');
        return new Promise((resolve, reject) => {
            const img = new Image();
            const url = root.URL.createObjectURL(file);
            img.onload = () => {
                root.URL.revokeObjectURL(url);
                try {
                    let width = img.naturalWidth;
                    let height = img.naturalHeight;

                    // If file is already small (e.g. < 200KB) and fits within maxDimension,
                    // we keep the original file bytes to preserve quality absolutely lossless.
                    if (file.size && file.size < 200 * 1024 && width <= maxDimension && height <= maxDimension) {
                        const originalUrl = create(file);
                        const resultUrl = new String(originalUrl);
                        resultUrl.mimeType = file.type;
                        resolve(resultUrl);
                        return;
                    }

                    if (width > maxDimension || height > maxDimension) {
                        const scale = maxDimension / Math.max(width, height);
                        width = Math.round(width * scale);
                        height = Math.round(height * scale);
                    }
                    const canvas = document.createElement('canvas');
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');

                    // Enable high-quality image smoothing to prevent any jaggedness
                    ctx.imageSmoothingEnabled = true;
                    ctx.imageSmoothingQuality = 'high';

                    ctx.drawImage(img, 0, 0, width, height);

                    // Dynamic detection of WebP support for high-efficiency, crisp drawings
                    const isWebPSupported = (() => {
                        try {
                            const elem = document.createElement('canvas');
                            if (elem.getContext && elem.getContext('2d')) {
                                return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
                            }
                        } catch (e) {}
                        return false;
                    })();

                    const mimeType = isWebPSupported ? 'image/webp' : 'image/jpeg';
                    const compressionQuality = isWebPSupported ? 0.85 : 0.85;

                    canvas.toBlob((blob) => {
                        if (!blob) {
                            reject(new Error('Image compression failed.'));
                            return;
                        }
                        const compressedUrl = create(blob);
                        const resultUrl = new String(compressedUrl);
                        resultUrl.mimeType = mimeType;
                        resolve(resultUrl);
                    }, mimeType, compressionQuality);
                } catch (e) {
                    reject(e);
                }
            };
            img.onerror = () => {
                root.URL.revokeObjectURL(url);
                reject(new Error('Failed to load image for compression.'));
            };
            img.src = url;
        });
    }

    // Removing pagehide listener on Android WebViews as it triggers when the app goes to
    // background, causing the floor plan blob URLs to be prematurely revoked and hidden.
    // Web browsers/WebViews automatically garbage collect Object/Blob URLs when the document is unloaded.

    return { create, fromCanvas, release, releaseAll, compressImageFile };
}));
