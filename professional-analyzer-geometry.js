(function (root, factory) {
    const api = factory();
    if (typeof module === 'object' && module.exports) module.exports = api;
    root.ProfessionalAnalyzerGeometry = api;
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
    'use strict';

    const EPSILON = 1e-9;
    const MM_PER_UNIT = Object.freeze({ mm: 1, cm: 10, meter: 1000, inch: 25.4, feet: 304.8 });

    function requireFinite(value, label) {
        if (!Number.isFinite(value)) throw new TypeError(`${label} must be a finite number.`);
    }

    function distancePx(a, b) {
        return Math.hypot(b.x - a.x, b.y - a.y);
    }

    function projectPointToSegment(point, start, end) {
        const dx = end.x - start.x; const dy = end.y - start.y;
        const lengthSquared = dx * dx + dy * dy;
        const position = lengthSquared ? Math.min(1, Math.max(0, ((point.x - start.x) * dx + (point.y - start.y) * dy) / lengthSquared)) : 0;
        const projected = { x: start.x + dx * position, y: start.y + dy * position };
        return { ...projected, position, distance: distancePx(point, projected) };
    }

    function toMillimetres(value, unit) {
        requireFinite(value, 'Distance');
        if (value <= 0) throw new RangeError('Distance must be greater than zero.');
        if (!MM_PER_UNIT[unit]) throw new RangeError('Unsupported measurement unit.');
        return value * MM_PER_UNIT[unit];
    }

    function calibrate(pointA, pointB, enteredDistance, enteredUnit, calibratedAt = Date.now()) {
        const pixelDistance = distancePx(pointA, pointB);
        if (pixelDistance < 1) throw new RangeError('Calibration points are too close. Mark two distinct points.');
        const realDistanceMm = toMillimetres(enteredDistance, enteredUnit);
        return { pointA, pointB, pixelDistance, enteredDistance, enteredUnit, realDistanceMm,
            scaleMmPerPixel: realDistanceMm / pixelDistance, calibratedAt };
    }

    function distanceMm(a, b, scaleMmPerPixel) {
        requireFinite(scaleMmPerPixel, 'Scale');
        if (scaleMmPerPixel <= 0) throw new RangeError('Scale must be greater than zero.');
        return distancePx(a, b) * scaleMmPerPixel;
    }

    function polygonSignedAreaPx2(points) {
        if (points.length < 3) return 0;
        let crossSum = 0;
        for (let i = 0; i < points.length; i += 1) {
            const next = points[(i + 1) % points.length];
            crossSum += points[i].x * next.y - next.x * points[i].y;
        }
        return crossSum / 2;
    }

    function polygonAreaPx2(points) { return Math.abs(polygonSignedAreaPx2(points)); }

    function polygonAreaMm2(points, scaleMmPerPixel) {
        requireFinite(scaleMmPerPixel, 'Scale');
        return polygonAreaPx2(points) * scaleMmPerPixel * scaleMmPerPixel;
    }

    function polygonCentroid(points) {
        const signedArea = polygonSignedAreaPx2(points);
        if (points.length < 3 || Math.abs(signedArea) < EPSILON) {
            throw new RangeError('A centroid requires at least three non-collinear points.');
        }
        let xSum = 0;
        let ySum = 0;
        for (let i = 0; i < points.length; i += 1) {
            const current = points[i];
            const next = points[(i + 1) % points.length];
            const cross = current.x * next.y - next.x * current.y;
            xSum += (current.x + next.x) * cross;
            ySum += (current.y + next.y) * cross;
        }
        return { x: xSum / (6 * signedArea), y: ySum / (6 * signedArea), calculationMethod: 'POLYGON_CENTROID' };
    }

    function perimeterMm(points, scaleMmPerPixel, closed = true) {
        if (points.length < 2) return 0;
        let pixels = 0;
        const edgeCount = closed ? points.length : points.length - 1;
        for (let i = 0; i < edgeCount; i += 1) pixels += distancePx(points[i], points[(i + 1) % points.length]);
        return pixels * scaleMmPerPixel;
    }

    // Points on an edge are considered inside, which is convenient for selection and validation.
    function pointInPolygon(point, polygon) {
        let inside = false;
        for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i, i += 1) {
            const a = polygon[j]; const b = polygon[i];
            const cross = (point.y - a.y) * (b.x - a.x) - (point.x - a.x) * (b.y - a.y);
            const onEdge = Math.abs(cross) < EPSILON && point.x >= Math.min(a.x, b.x) - EPSILON &&
                point.x <= Math.max(a.x, b.x) + EPSILON && point.y >= Math.min(a.y, b.y) - EPSILON &&
                point.y <= Math.max(a.y, b.y) + EPSILON;
            if (onEdge) return true;
            const crosses = ((b.y > point.y) !== (a.y > point.y)) &&
                point.x < ((a.x - b.x) * (point.y - b.y)) / (a.y - b.y) + b.x;
            if (crosses) inside = !inside;
        }
        return inside;
    }

    function orientation(a, b, c) {
        const value = (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y);
        return Math.abs(value) < EPSILON ? 0 : (value > 0 ? 1 : 2);
    }

    function onSegment(a, b, c) {
        return b.x <= Math.max(a.x, c.x) + EPSILON && b.x >= Math.min(a.x, c.x) - EPSILON &&
            b.y <= Math.max(a.y, c.y) + EPSILON && b.y >= Math.min(a.y, c.y) - EPSILON;
    }

    function segmentsIntersect(p1, q1, p2, q2) {
        const o1 = orientation(p1, q1, p2); const o2 = orientation(p1, q1, q2);
        const o3 = orientation(p2, q2, p1); const o4 = orientation(p2, q2, q1);
        if (o1 !== o2 && o3 !== o4) return true;
        return (o1 === 0 && onSegment(p1, p2, q1)) || (o2 === 0 && onSegment(p1, q2, q1)) ||
            (o3 === 0 && onSegment(p2, p1, q2)) || (o4 === 0 && onSegment(p2, q1, q2));
    }

    function hasSelfIntersection(points) {
        const n = points.length;
        if (n < 4) return false;
        for (let i = 0; i < n; i += 1) {
            const iNext = (i + 1) % n;
            for (let j = i + 1; j < n; j += 1) {
                const jNext = (j + 1) % n;
                if (i === j || iNext === j || jNext === i) continue;
                if (segmentsIntersect(points[i], points[iNext], points[j], points[jNext])) return true;
            }
        }
        return false;
    }

    function boundaryEdges(points, scaleMmPerPixel, closed) {
        const count = closed ? points.length : Math.max(0, points.length - 1);
        return Array.from({ length: count }, (_, i) => {
            const start = points[i]; const end = points[(i + 1) % points.length];
            const pixelLength = distancePx(start, end);
            return { startVertexId: start.id, endVertexId: end.id, pixelLength, realLengthMm: pixelLength * scaleMmPerPixel };
        });
    }

    function centeredBoundaryDiameter(center, points) {
        if (!center || points.length < 2) return 0;
        let nearestDistance = Infinity;
        points.forEach((start, index) => {
            const end = points[(index + 1) % points.length];
            nearestDistance = Math.min(nearestDistance, projectPointToSegment(center, start, end).distance);
        });
        return Number.isFinite(nearestDistance) ? nearestDistance * 2 : 0;
    }

    function normalizeAngle(value) { return ((Number(value) % 360) + 360) % 360; }

    // Devatas share the same source orientation as the other compass patterns:
    // rotate the pattern by the selected on-canvas North angle.
    function devataPatternRotation(northAngle) { return normalizeAngle(northAngle); }

    function rayPolygonIntersectionDistance(origin, vector, points) {
        let distance = 0;
        points.forEach((start, index) => {
            const end = points[(index + 1) % points.length];
            const edge = { x: end.x - start.x, y: end.y - start.y };
            const denominator = vector.x * edge.y - vector.y * edge.x;
            if (Math.abs(denominator) < EPSILON) return;
            const offset = { x: start.x - origin.x, y: start.y - origin.y };
            const rayDistance = (offset.x * edge.y - offset.y * edge.x) / denominator;
            const edgePosition = (offset.x * vector.y - offset.y * vector.x) / denominator;
            if (rayDistance >= 0 && edgePosition >= 0 && edgePosition <= 1) {
                distance = Math.max(distance, rayDistance);
            }
        });
        return distance;
    }

    function createTransform({ zoom = 1, panX = 0, panY = 0, rotation = 0, origin = { x: 0, y: 0 } } = {}) {
        if (!(zoom > 0)) throw new RangeError('Zoom must be greater than zero.');
        const rad = rotation * Math.PI / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);

        return {
            planToScreen: (p) => {
                const dx = (p.x - origin.x) * zoom;
                const dy = (p.y - origin.y) * zoom;
                return {
                    x: origin.x * zoom + panX + (dx * cos - dy * sin),
                    y: origin.y * zoom + panY + (dx * sin + dy * cos)
                };
            },
            screenToPlan: (p) => {
                const lx = (p.x - panX) / zoom - origin.x;
                const ly = (p.y - panY) / zoom - origin.y;
                return {
                    x: origin.x + (lx * cos + ly * sin),
                    y: origin.y + (-lx * sin + ly * cos)
                };
            }
        };
    }

    function formatLength(mm, unit = 'feetInches') {
        if (unit === 'mm') return `${mm.toFixed(1)} mm`;
        if (unit === 'cm') return `${(mm / 10).toFixed(2)} cm`;
        if (unit === 'meter') return `${(mm / 1000).toFixed(3)} m`;
        if (unit === 'feet') return `${(mm / 304.8).toFixed(2)} ft`;
        let totalInches = Math.round((mm / 25.4) * 8) / 8;
        let feet = Math.floor(totalInches / 12); let inches = totalInches - feet * 12;
        if (inches >= 12) { feet += 1; inches = 0; }
        const shown = Number.isInteger(inches) ? inches.toFixed(0) : inches.toFixed(3).replace(/0+$/, '');
        return `${feet} ft ${shown} in`;
    }

    function formatArea(mm2, unit = 'sqFt') {
        const conversions = { sqFt: [92903.04, 'sq ft'], sqMeter: [1000000, 'sq m'], sqYard: [836127.36, 'sq yd'] };
        const selected = conversions[unit] || conversions.sqFt;
        return `${(mm2 / selected[0]).toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })} ${selected[1]}`;
    }

    return Object.freeze({ EPSILON, MM_PER_UNIT, distancePx, projectPointToSegment, distanceMm, toMillimetres, calibrate,
        polygonSignedAreaPx2, polygonAreaPx2, polygonAreaMm2, polygonCentroid, perimeterMm,
        pointInPolygon, hasSelfIntersection, boundaryEdges, centeredBoundaryDiameter, normalizeAngle, devataPatternRotation, rayPolygonIntersectionDistance,
        createTransform, formatLength, formatArea });
}));
