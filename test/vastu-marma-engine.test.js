const test = require('node:test');
const assert = require('node:assert/strict');
const M = require('../vastu-marma-engine.js');
const p = (x,y) => ({x,y});
const close = (actual,expected,tolerance=1e-8) => assert.ok(Math.abs(actual-expected)<=tolerance,`${actual} != ${expected}`);
const rectangle = (width,height) => [p(0,0),p(width,0),p(width,height),p(0,height)];

test('45 x 36 rectangle creates an exact 81-pada frame and nine calculated Marmas',()=>{
    const result=M.calculateMarmaAnalysis(rectangle(45,36),0,304.8);
    assert.equal(result.grid.cells.length,81);close(result.grid.padaWidth,5);close(result.grid.padaHeight,4);
    close(result.referenceCenter.worldX,22.5);close(result.referenceCenter.worldY,18);
    assert.equal(result.vanshaLines.length,6);assert.equal(result.marmaPoints.length,9);
    result.principalDiagonals.forEach(line=>close((line.start.worldX+line.end.worldX)/2,result.referenceCenter.worldX));
});

test('45 x 45 square has symmetric stable intersections',()=>{
    const result=M.calculateMarmaAnalysis(rectangle(45,45),0,1);
    close(result.grid.padaWidth,5);close(result.grid.padaHeight,5);
    assert.ok(result.marmaPoints.some(point=>Math.abs(point.normalizedX-.5)<1e-8&&Math.abs(point.normalizedY-.5)<1e-8));
    result.marmaPoints.forEach(point=>{assert.ok(point.normalizedX>=0&&point.normalizedX<=1);assert.ok(point.normalizedY>=0&&point.normalizedY<=1);});
});

test('L-shaped cut does not distort the reference grid or pull outside Marmas inward',()=>{
    const shape=[p(0,0),p(45,0),p(45,18),p(18,18),p(18,36),p(0,36)];
    const result=M.calculateMarmaAnalysis(shape,0,1);
    close(result.grid.padaWidth,5);close(result.grid.padaHeight,4);
    const outside=result.marmaPoints.filter(point=>point.buildingStatus===M.BoundaryStatus.OUTSIDE_BUILDING);
    assert.ok(outside.length>0);outside.forEach(point=>assert.equal(M.classifyPoint({x:point.worldX,y:point.worldY},shape),M.BoundaryStatus.OUTSIDE_BUILDING));
    assert.ok(result.vanshaLines.some(line=>line.segments.some(segment=>segment.status===M.SegmentStatus.OUTSIDE)));
});

test('cross-shaped plan retains a rectangular reference and straight split lines',()=>{
    const shape=[p(15,0),p(30,0),p(30,12),p(45,12),p(45,24),p(30,24),p(30,36),p(15,36),p(15,24),p(0,24),p(0,12),p(15,12)];
    const result=M.calculateMarmaAnalysis(shape,0,1);
    close(result.grid.padaWidth,5);close(result.grid.padaHeight,4);
    result.vanshaLines.forEach(line=>line.segments.forEach(segment=>close((segment.end.worldY-segment.start.worldY)*(line.end.worldX-line.start.worldX),(segment.end.worldX-segment.start.worldX)*(line.end.worldY-line.start.worldY),1e-7)));
});

test('rotating plan and calibrated North together preserves normalized geometry',()=>{
    const base=rectangle(45,36),expected=M.calculateMarmaAnalysis(base,0,1).marmaPoints.map(point=>[point.normalizedX,point.normalizedY]);
    [15,45,90,137,270].forEach(angle=>{const radians=angle*Math.PI/180,rotated=base.map(point=>p(point.x*Math.cos(radians)-point.y*Math.sin(radians),point.x*Math.sin(radians)+point.y*Math.cos(radians)));const actual=M.calculateMarmaAnalysis(rotated,angle,1).marmaPoints;actual.forEach((point,index)=>{close(point.normalizedX,expected[index][0]);close(point.normalizedY,expected[index][1]);});});
});

test('zoom and screen transforms cannot alter engine normalized points',()=>{
    const expected=M.calculateMarmaAnalysis(rectangle(45,36),0,1).marmaPoints.map(point=>[point.normalizedX,point.normalizedY]);
    [0.5,1,2,5].forEach(zoom=>{const result=M.calculateMarmaAnalysis(rectangle(45,36),0,1,{zoom});assert.deepEqual(result.marmaPoints.map(point=>[point.normalizedX,point.normalizedY]),expected);});
});

test('Marma IDs are deterministic North-aligned rows independent of render inputs',()=>{
    const result=M.calculateMarmaAnalysis(rectangle(45,36),0,1);
    assert.deepEqual(result.marmaPoints.map(point=>point.id),['M1','M2','M3','M4','M5','M6','M7','M8','M9']);
    for(let row=0;row<3;row+=1){
        const points=result.marmaPoints.slice(row*3,row*3+3);
        assert.ok(points[0].normalizedX<points[1].normalizedX&&points[1].normalizedX<points[2].normalizedX);
        if(row)assert.ok(result.marmaPoints[(row-1)*3].normalizedY>points[0].normalizedY);
    }
    const expected=new Map(result.marmaPoints.map(point=>[point.intersectionKey,{id:point.id,x:point.normalizedX,y:point.normalizedY}]));
    [15,90,270].forEach(angle=>{
        const radians=angle*Math.PI/180,rotated=rectangle(45,36).map(point=>p(point.x*Math.cos(radians)-point.y*Math.sin(radians),point.x*Math.sin(radians)+point.y*Math.cos(radians)));
        M.calculateMarmaAnalysis(rotated,angle,1,{zoom:4,panX:900,screenWidth:320}).marmaPoints.forEach(point=>{
            const stable=expected.get(point.intersectionKey);assert.equal(point.id,stable.id);close(point.normalizedX,stable.x);close(point.normalizedY,stable.y);
        });
    });
});

test('Vansha debug IDs have one authoritative stable mapping',()=>{
    assert.deepEqual(M.VANSHA_DEBUG_LABELS,{SHIKHI_TO_PITRA:'V1',ADITI_TO_SUGRIV:'V2',JAYANT_TO_BHRINGRAJ:'V3',ROGA_TO_ANILA:'V4',MUKHYA_TO_BRISHA:'V5',SHOSHA_TO_VITATHA:'V6'});
    M.calculateMarmaAnalysis(rectangle(45,36),0,1).vanshaLines.forEach(line=>assert.equal(line.debugId,M.VANSHA_DEBUG_LABELS[line.id]));
});

test('versioned Devta anchors contain the twelve reviewed provisional coordinates',()=>{
    assert.equal(M.VASTU_MARMA_RULES.version,'81-pada-v2-provisional-devta-anchors');
    assert.deepEqual(M.DEVTA_PADA_LAYOUT,{
        SHIKHI:{row:0,column:8},PITRA:{row:8,column:0},ADITI:{row:0,column:6},SUGRIV:{row:6,column:0},
        JAYANT:{row:2,column:8},BHRINGRAJ:{row:8,column:2},ROGA:{row:0,column:0},ANILA:{row:8,column:8},
        MUKHYA:{row:0,column:2},BRISHA:{row:6,column:8},SHOSHA:{row:2,column:0},VITATHA:{row:8,column:6}
    });
    assert.deepEqual(M.getPadaCenter(0,0),{x:1/18,y:17/18});
});

test('grid boundaries and six parallel Vanshas retain floating-point geometry',()=>{
    const result=M.calculateMarmaAnalysis(rectangle(10,7),0,1);
    assert.equal(result.grid.cells.length,81);assert.equal(result.grid.verticalBoundaries.length,10);assert.equal(result.grid.horizontalBoundaries.length,10);
    close(result.grid.verticalBoundaries[1],10/9);close(result.grid.horizontalBoundaries[1],-7+7/9);
    assert.equal(result.neSwVanshas.length,3);assert.equal(result.nwSeVanshas.length,3);
    [result.neSwVanshas,result.nwSeVanshas].forEach(family=>family.slice(1).forEach(line=>assert.ok(M.directionsParallel(family[0],line))));
    result.vanshaLines.forEach(line=>{assert.ok(line.startDevta&&line.endDevta);assert.ok(line.startAnchor&&line.endAnchor);assert.ok(line.infiniteLineDefinition);assert.ok(line.directionGroup);});
});

test('nine unique intersections include exactly one explicitly classified CENTER',()=>{
    const points=M.calculateMarmaAnalysis(rectangle(45,36),0,1).marmaPoints;
    assert.equal(new Set(points.map(point=>`${point.normalizedX.toFixed(10)},${point.normalizedY.toFixed(10)}`)).size,9);
    const centers=points.filter(point=>Math.abs(point.normalizedX-.5)<M.EPSILON&&Math.abs(point.normalizedY-.5)<M.EPSILON);
    assert.equal(centers.length,1);assert.equal(centers[0].direction,'CENTER');assert.equal(centers[0].directionSector,'CENTER');
    points.forEach(point=>{assert.equal(point.localX,point.localPoint.x);assert.equal(point.worldX,point.worldPoint.x);assert.ok(['INSIDE','OUTSIDE','ON_BOUNDARY'].includes(point.boundaryStatus));assert.ok(Number.isFinite(point.nearestWallDistance));});
});

test('rectangle aspect, L footprint, and render-only options cannot move normalized Marmas',()=>{
    const normalized=shape=>M.calculateMarmaAnalysis(shape,0,1).marmaPoints.map(point=>[point.intersectionKey,point.normalizedX,point.normalizedY]);
    const assertNormalizedClose=(actual,expected)=>actual.forEach((point,index)=>{assert.equal(point[0],expected[index][0]);close(point[1],expected[index][1]);close(point[2],expected[index][2]);});
    const expected=normalized(rectangle(45,36));
    assertNormalizedClose(normalized(rectangle(90,20)),expected);
    const lShape=[p(0,0),p(45,0),p(45,18),p(18,18),p(18,36),p(0,36)];
    assertNormalizedClose(normalized(lShape),expected);
    [{zoom:.25,panX:90,canvasSize:300,screenDensity:3,exportScale:8},{zoom:9,panX:-400,canvasSize:4000,screenDensity:1}].forEach(options=>assertNormalizedClose(M.calculateMarmaAnalysis(rectangle(45,36),0,1,options).marmaPoints.map(point=>[point.intersectionKey,point.normalizedX,point.normalizedY]),expected));
});

test('cross footprint never snaps Marmas and asymmetric centroid remains independent',()=>{
    const crossShape=[p(15,0),p(30,0),p(30,12),p(45,12),p(45,24),p(30,24),p(30,36),p(15,36),p(15,24),p(0,24),p(0,12),p(15,12)];
    const full=M.calculateMarmaAnalysis(rectangle(45,36),0,1),cross=M.calculateMarmaAnalysis(crossShape,0,1);
    assert.deepEqual(cross.marmaPoints.map(point=>[point.normalizedX,point.normalizedY]),full.marmaPoints.map(point=>[point.normalizedX,point.normalizedY]));
    const asymmetric=M.calculateMarmaAnalysis([p(0,0),p(40,0),p(40,10),p(10,10),p(10,30),p(0,30)],0,1);
    assert.notDeepEqual(asymmetric.polygonCentroid,asymmetric.referenceFrameCenter);
    close(asymmetric.brahmasthanCenter.x,asymmetric.referenceFrameCenter.x);close(asymmetric.brahmasthanCenter.y,asymmetric.referenceFrameCenter.y);
    assert.deepEqual(asymmetric.brahmasthanCell,{row:4,column:4});assert.deepEqual(asymmetric.cuts,[]);assert.deepEqual(asymmetric.extensions,[]);
});

test('invalid polygons and missing required calibration return readable errors',()=>{
    assert.throws(()=>M.calculateMarmaAnalysis([p(0,0),p(1,1)],0,1),/three unique/);
    assert.throws(()=>M.calculateMarmaAnalysis([p(0,0),p(10,10),p(0,10),p(10,0)],0,1),/area|cross/);
    assert.throws(()=>M.calculateMarmaAnalysis([p(0,0),p(10,0),p(5,0),p(10,10),p(0,10)],0,1),/cross/);
    assert.throws(()=>M.calculateMarmaAnalysis(rectangle(10,10),NaN,1),/North angle/);
    assert.throws(()=>M.calculateMarmaAnalysis(rectangle(10,10),0,null,{requireScale:true}),/Calibrate/);
});
