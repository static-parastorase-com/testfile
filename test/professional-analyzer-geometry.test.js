const test = require('node:test');
const assert = require('node:assert/strict');
const G = require('../professional-analyzer-geometry.js');
const p = (x, y, id = `${x},${y}`) => ({ id, x, y });
const close = (actual, expected, tolerance = 1e-8) => assert.ok(Math.abs(actual - expected) <= tolerance, `${actual} != ${expected}`);

test('distance and calibration retain double precision', () => {
    assert.equal(G.distancePx(p(0, 0), p(3, 4)), 5);
    close(G.calibrate(p(0, 0), p(3, 4), 10, 'feet').scaleMmPerPixel, 609.6);
});
test('point projection identifies a position between boundary vertices', () => {
    assert.deepEqual(G.projectPointToSegment(p(4,3),p(0,0),p(10,0)),{x:4,y:0,position:.4,distance:3});
    assert.deepEqual(G.projectPointToSegment(p(-5,2),p(0,0),p(10,0)),{x:0,y:0,position:0,distance:Math.hypot(5,2)});
});
test('square area and centroid', () => {
    const square = [p(0,0),p(100,0),p(100,100),p(0,100)];
    assert.equal(G.polygonAreaPx2(square), 10000);
    assert.deepEqual(G.polygonCentroid(square), { x:50,y:50,calculationMethod:'POLYGON_CENTROID' });
});
test('rectangle and clockwise polygons produce correct centroid and area', () => {
    const rectangle=[p(0,0),p(200,0),p(200,100),p(0,100)];
    assert.deepEqual(G.polygonCentroid(rectangle),{x:100,y:50,calculationMethod:'POLYGON_CENTROID'});
    assert.equal(G.polygonAreaPx2([...rectangle].reverse()),20000);
    assert.deepEqual(G.polygonCentroid([...rectangle].reverse()),{x:100,y:50,calculationMethod:'POLYGON_CENTROID'});
});
test('concave polygon uses area weighted centroid', () => {
    const shape=[p(0,0),p(4,0),p(4,1),p(1,1),p(1,4),p(0,4)];
    const centroid=G.polygonCentroid(shape); close(G.polygonAreaPx2(shape),7); close(centroid.x,19/14); close(centroid.y,19/14);
});
test('point in polygon treats an edge as inside', () => {
    const square=[p(0,0),p(10,0),p(10,10),p(0,10)];
    assert.equal(G.pointInPolygon(p(5,5),square),true); assert.equal(G.pointInPolygon(p(20,5),square),false); assert.equal(G.pointInPolygon(p(0,5),square),true);
});
test('self intersecting bow-tie is detected', () => assert.equal(G.hasSelfIntersection([p(0,0),p(10,10),p(0,10),p(10,0)]),true));
test('perimeter conversion and edges', () => {
    const triangle=[p(0,0,'a'),p(3,0,'b'),p(3,4,'c')]; close(G.perimeterMm(triangle,2),24);
    assert.deepEqual(G.boundaryEdges(triangle,2,true).map(e=>e.realLengthMm),[6,8,10]);
});
test('centered compass diameter reaches the nearest boundary at 100 percent',()=>{
    const rectangle=[p(0,0),p(300,0),p(300,200),p(0,200)];
    assert.equal(G.centeredBoundaryDiameter(p(150,100),rectangle),200);
    assert.equal(G.centeredBoundaryDiameter(p(150,50),rectangle),100);
});
test('coordinate transform round trips plan coordinates',()=>{const t=G.createTransform({zoom:2.5,panX:30,panY:-8});const source=p(12.5,44.75);const result=t.screenToPlan(t.planToScreen(source));close(result.x,source.x);close(result.y,source.y);});
test('ray intersection reaches the marked boundary in every direction',()=>{
    const square=[p(0,0),p(100,0),p(100,100),p(0,100)];
    const center=p(50,50);
    close(G.rayPolygonIntersectionDistance(center,{x:0,y:-1},square),50);
    close(G.rayPolygonIntersectionDistance(center,{x:Math.SQRT1_2,y:-Math.SQRT1_2},square),50*Math.SQRT2);
});
test('Devata pattern follows selected direction clockwise',()=>{
    assert.equal(G.devataPatternRotation(180),180); // North
    assert.equal(G.devataPatternRotation(90),90);  // East
    assert.equal(G.devataPatternRotation(0),0);     // South
    assert.equal(G.devataPatternRotation(270),270); // West
});
