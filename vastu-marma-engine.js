(function (root, factory) {
    const api = factory();
    if (typeof module === 'object' && module.exports) module.exports = api;
    root.VastuMarmaEngine = api;
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
    'use strict';

    const EPSILON = 1e-9;
    const BoundaryStatus = Object.freeze({ INSIDE_BUILDING:'INSIDE_BUILDING', OUTSIDE_BUILDING:'OUTSIDE_BUILDING', ON_BOUNDARY:'ON_BOUNDARY', IN_CUT_AREA:'IN_CUT_AREA', IN_EXTENSION:'IN_EXTENSION' });
    const SegmentStatus = Object.freeze({ INSIDE:'INSIDE', OUTSIDE:'OUTSIDE', ON_WALL:'ON_WALL' });
    const VANSHA_DEBUG_LABELS = Object.freeze({
        SHIKHI_TO_PITRA:'V1', ADITI_TO_SUGRIV:'V2', JAYANT_TO_BHRINGRAJ:'V3',
        ROGA_TO_ANILA:'V4', MUKHYA_TO_BRISHA:'V5', SHOSHA_TO_VITATHA:'V6'
    });

    // The Devta anchor layout is explicitly versioned and remains provisional
    // pending final Vastu domain/textual-tradition review. Do not silently change
    // anchor coordinates: a future change requires a new mapping version and
    // corresponding regression fixtures.
    const DEVTA_PADA_LAYOUT = Object.freeze({
        SHIKHI:{row:0,column:8}, PITRA:{row:8,column:0}, ADITI:{row:0,column:6}, SUGRIV:{row:6,column:0},
        JAYANT:{row:2,column:8}, BHRINGRAJ:{row:8,column:2}, ROGA:{row:0,column:0}, ANILA:{row:8,column:8},
        MUKHYA:{row:0,column:2}, BRISHA:{row:6,column:8}, SHOSHA:{row:2,column:0}, VITATHA:{row:8,column:6}
    });
    const VASTU_MARMA_RULES = Object.freeze({
        version:'81-pada-v2-provisional-devta-anchors', mandalaRows:9, mandalaColumns:9,
        anchorStrategy:'PADA_CENTER', marmaSize:Object.freeze({mode:'PADA_RATIO',ratio:1/8}),
        vanshas:Object.freeze([
            Object.freeze({id:'SHIKHI_TO_PITRA',group:'NE_SW',from:'SHIKHI',to:'PITRA'}),
            Object.freeze({id:'ADITI_TO_SUGRIV',group:'NE_SW',from:'ADITI',to:'SUGRIV'}),
            Object.freeze({id:'JAYANT_TO_BHRINGRAJ',group:'NE_SW',from:'JAYANT',to:'BHRINGRAJ'}),
            Object.freeze({id:'ROGA_TO_ANILA',group:'NW_SE',from:'ROGA',to:'ANILA'}),
            Object.freeze({id:'MUKHYA_TO_BRISHA',group:'NW_SE',from:'MUKHYA',to:'BRISHA'}),
            Object.freeze({id:'SHOSHA_TO_VITATHA',group:'NW_SE',from:'SHOSHA',to:'VITATHA'})
        ])
    });

    function cleanPolygon(points) {
        if (!Array.isArray(points)) throw new TypeError('Floor boundary must be an array of points.');
        const clean=[];
        points.forEach((point,index)=>{
            if (!Number.isFinite(point?.x)||!Number.isFinite(point?.y)) throw new TypeError(`Floor boundary point ${index+1} must contain finite x/y coordinates.`);
            if (!clean.length || Math.hypot(point.x-clean.at(-1).x,point.y-clean.at(-1).y)>EPSILON) clean.push({x:point.x,y:point.y});
        });
        if (clean.length>1 && Math.hypot(clean[0].x-clean.at(-1).x,clean[0].y-clean.at(-1).y)<=EPSILON) clean.pop();
        if (clean.length<3) throw new RangeError('Mark at least three unique floor-boundary points.');
        return clean;
    }
    function cross(a,b,c) { return (b.x-a.x)*(c.y-a.y)-(b.y-a.y)*(c.x-a.x); }
    function onSegment(point,a,b) { return Math.abs(cross(a,b,point))<=EPSILON && point.x>=Math.min(a.x,b.x)-EPSILON&&point.x<=Math.max(a.x,b.x)+EPSILON&&point.y>=Math.min(a.y,b.y)-EPSILON&&point.y<=Math.max(a.y,b.y)+EPSILON; }
    function signedArea(points) { return points.reduce((sum,p,i)=>sum+p.x*points[(i+1)%points.length].y-points[(i+1)%points.length].x*p.y,0)/2; }
    function lineIntersection(a,b,c,d,segmentsOnly=false) {
        const r={x:b.x-a.x,y:b.y-a.y},s={x:d.x-c.x,y:d.y-c.y},den=r.x*s.y-r.y*s.x;
        if (Math.abs(den)<=EPSILON) return null;
        const q={x:c.x-a.x,y:c.y-a.y},t=(q.x*s.y-q.y*s.x)/den,u=(q.x*r.y-q.y*r.x)/den;
        if (segmentsOnly&&(t<-EPSILON||t>1+EPSILON||u<-EPSILON||u>1+EPSILON)) return null;
        return {x:a.x+t*r.x,y:a.y+t*r.y,t,u};
    }
    function segmentsIntersect(a,b,c,d) {
        const abC=cross(a,b,c),abD=cross(a,b,d),cdA=cross(c,d,a),cdB=cross(c,d,b);
        if(((abC>EPSILON&&abD<-EPSILON)||(abC<-EPSILON&&abD>EPSILON))&&((cdA>EPSILON&&cdB<-EPSILON)||(cdA<-EPSILON&&cdB>EPSILON)))return true;
        return (Math.abs(abC)<=EPSILON&&onSegment(c,a,b))||(Math.abs(abD)<=EPSILON&&onSegment(d,a,b))||(Math.abs(cdA)<=EPSILON&&onSegment(a,c,d))||(Math.abs(cdB)<=EPSILON&&onSegment(b,c,d));
    }
    function selfIntersects(points) { for(let i=0;i<points.length;i+=1)for(let j=i+1;j<points.length;j+=1){const ni=(i+1)%points.length,nj=(j+1)%points.length;if(i===j||ni===j||nj===i)continue;if(segmentsIntersect(points[i],points[ni],points[j],points[nj]))return true;}return false; }
    function classifyPoint(point,polygon) {
        for(let i=0;i<polygon.length;i+=1)if(onSegment(point,polygon[i],polygon[(i+1)%polygon.length]))return BoundaryStatus.ON_BOUNDARY;
        let inside=false; for(let i=0,j=polygon.length-1;i<polygon.length;j=i,i+=1){const a=polygon[i],b=polygon[j];if(((a.y>point.y)!==(b.y>point.y))&&point.x<(b.x-a.x)*(point.y-a.y)/(b.y-a.y)+a.x)inside=!inside;}
        return inside?BoundaryStatus.INSIDE_BUILDING:BoundaryStatus.OUTSIDE_BUILDING;
    }
    function centroid(points) { const area=signedArea(points);let x=0,y=0;points.forEach((p,i)=>{const n=points[(i+1)%points.length],v=p.x*n.y-n.x*p.y;x+=(p.x+n.x)*v;y+=(p.y+n.y)*v;});return {x:x/(6*area),y:y/(6*area)}; }
    function distanceToWalls(point,polygon) { return Math.min(...polygon.map((a,i)=>{const b=polygon[(i+1)%polygon.length],dx=b.x-a.x,dy=b.y-a.y,l2=dx*dx+dy*dy,t=l2<=EPSILON?0:Math.max(0,Math.min(1,((point.x-a.x)*dx+(point.y-a.y)*dy)/l2));return Math.hypot(point.x-(a.x+t*dx),point.y-(a.y+t*dy));})); }
    function coordinateTransformer(northAngleDegrees) {
        if (!Number.isFinite(northAngleDegrees)) throw new TypeError('A calibrated North angle is required.');
        const angle=northAngleDegrees*Math.PI/180,east={x:Math.cos(angle),y:Math.sin(angle)},north={x:Math.sin(angle),y:-Math.cos(angle)};
        return { worldToVastu:p=>({x:p.x*east.x+p.y*east.y,y:p.x*north.x+p.y*north.y}), vastuToWorld:p=>({x:p.x*east.x+p.y*north.x,y:p.x*east.y+p.y*north.y}) };
    }
    function getPadaCenter(row,column,bounds={minX:0,maxY:1,width:1,height:1}) {
        if(!Number.isInteger(row)||!Number.isInteger(column)||row<0||row>8||column<0||column>8)throw new RangeError('Pada row and column must be integers from 0 through 8.');
        // Semantic rows run North to South, while local +Y runs North.
        return {x:bounds.minX+bounds.width*(column+.5)/9,y:bounds.maxY-bounds.height*(row+.5)/9};
    }
    function anchor(pada,bounds) { return getPadaCenter(pada.row,pada.column,bounds); }
    function clipInfiniteLine(a,b,bounds) {
        const edges=[[{x:bounds.minX,y:bounds.minY},{x:bounds.maxX,y:bounds.minY}],[{x:bounds.maxX,y:bounds.minY},{x:bounds.maxX,y:bounds.maxY}],[{x:bounds.maxX,y:bounds.maxY},{x:bounds.minX,y:bounds.maxY}],[{x:bounds.minX,y:bounds.maxY},{x:bounds.minX,y:bounds.minY}]];
        const hits=[];edges.forEach(([c,d])=>{const hit=lineIntersection(a,b,c,d);if(hit&&hit.u>=-EPSILON&&hit.u<=1+EPSILON&&!hits.some(p=>Math.hypot(p.x-hit.x,p.y-hit.y)<=EPSILON))hits.push(hit);});
        hits.sort((x,y)=>x.t-y.t);return hits.length>=2?[{x:hits[0].x,y:hits[0].y},{x:hits.at(-1).x,y:hits.at(-1).y}]:null;
    }
    function splitByPolygon(start,end,polygon) {
        const cuts=[0,1]; polygon.forEach((a,i)=>{const hit=lineIntersection(start,end,a,polygon[(i+1)%polygon.length],true);if(hit)cuts.push(Math.max(0,Math.min(1,hit.t)));});
        cuts.sort((a,b)=>a-b);const unique=cuts.filter((t,i)=>i===0||Math.abs(t-cuts[i-1])>EPSILON),dx=end.x-start.x,dy=end.y-start.y;
        return unique.slice(0,-1).map((t,i)=>{const next=unique[i+1],a={x:start.x+dx*t,y:start.y+dy*t},b={x:start.x+dx*next,y:start.y+dy*next},mid={x:(a.x+b.x)/2,y:(a.y+b.y)/2};let status=classifyPoint(mid,polygon);status=status===BoundaryStatus.ON_BOUNDARY?SegmentStatus.ON_WALL:status===BoundaryStatus.INSIDE_BUILDING?SegmentStatus.INSIDE:SegmentStatus.OUTSIDE;return {start:a,end:b,status,boundaryStatus:status===SegmentStatus.ON_WALL?'ON_BOUNDARY':status};});
    }
    function directionSector(u,v) {
        if(Math.abs(u-.5)<=EPSILON&&Math.abs(v-.5)<=EPSILON)return 'CENTER';
        const angle=(Math.atan2(u-.5,v-.5)*180/Math.PI+360)%360;
        return ['N','NE','E','SE','S','SW','W','NW'][Math.round(angle/45)%8];
    }
    function directionsParallel(a,b) {
        const adx=a.anchorTo.x-a.anchorFrom.x,ady=a.anchorTo.y-a.anchorFrom.y;
        const bdx=b.anchorTo.x-b.anchorFrom.x,bdy=b.anchorTo.y-b.anchorFrom.y;
        return Math.abs(adx*bdy-ady*bdx)<=EPSILON*Math.max(1,Math.hypot(adx,ady)*Math.hypot(bdx,bdy));
    }

    function calculateMarmaAnalysis(actualFloorPolygon,northAngleDegrees,scale,options={}) {
        const worldPolygon=cleanPolygon(actualFloorPolygon);
        if(Math.abs(signedArea(worldPolygon))<=EPSILON)throw new RangeError('Floor boundary area is zero or too small.');
        if(selfIntersects(worldPolygon))throw new RangeError('Floor boundary cannot cross itself.');
        if(options.requireScale&&(!Number.isFinite(scale)||scale<=0))throw new RangeError('Calibrate the plan scale before Marma analysis.');
        const transform=coordinateTransformer(northAngleDegrees),polygon=worldPolygon.map(transform.worldToVastu);
        const xs=polygon.map(p=>p.x),ys=polygon.map(p=>p.y),bounds={minX:Math.min(...xs),maxX:Math.max(...xs),minY:Math.min(...ys),maxY:Math.max(...ys)};
        bounds.width=bounds.maxX-bounds.minX;bounds.height=bounds.maxY-bounds.minY;if(bounds.width<=EPSILON||bounds.height<=EPSILON)throw new RangeError('Vastu reference boundary has zero width or height.');
        const localToPoint=p=>{const world=transform.vastuToWorld(p);return {...p,worldX:world.x,worldY:world.y};};
        const referenceCenterLocal={x:(bounds.minX+bounds.maxX)/2,y:(bounds.minY+bounds.maxY)/2};
        const xCoordinates=Array.from({length:10},(_,i)=>bounds.minX+bounds.width*i/9),yCoordinates=Array.from({length:10},(_,i)=>bounds.minY+bounds.height*i/9);
        const cells=Array.from({length:81},(_,i)=>{const row=Math.floor(i/9),column=i%9;return {row,column,normalizedX:column/9,normalizedY:1-(row+1)/9,width:bounds.width/9,height:bounds.height/9};});
        const normalize=p=>({normalizedX:(p.x-bounds.minX)/bounds.width,normalizedY:(p.y-bounds.minY)/bounds.height});
        const lines=VASTU_MARMA_RULES.vanshas.map(rule=>{const from=anchor(DEVTA_PADA_LAYOUT[rule.from],bounds),to=anchor(DEVTA_PADA_LAYOUT[rule.to],bounds),clipped=clipInfiniteLine(from,to,bounds);if(!clipped)throw new RangeError(`Degenerate Vansha ${rule.id}.`);return {...rule,startDevta:rule.from,endDevta:rule.to,directionGroup:rule.group,debugId:VANSHA_DEBUG_LABELS[rule.id],startAnchor:{...localToPoint(from),...normalize(from)},endAnchor:{...localToPoint(to),...normalize(to)},anchorFrom:{...localToPoint(from),...normalize(from)},anchorTo:{...localToPoint(to),...normalize(to)},infiniteLineDefinition:{point:localToPoint(from),direction:{x:to.x-from.x,y:to.y-from.y}},start:localToPoint(clipped[0]),end:localToPoint(clipped[1]),segments:splitByPolygon(clipped[0],clipped[1],polygon).map(s=>({start:localToPoint(s.start),end:localToPoint(s.end),status:s.status,boundaryStatus:s.boundaryStatus}))};});
        const groupA=lines.filter(l=>l.group==='NE_SW'),groupB=lines.filter(l=>l.group==='NW_SE'),marmaPoints=[];
        [groupA,groupB].forEach(family=>{for(let i=1;i<family.length;i+=1)if(!directionsParallel(family[0],family[i]))throw new RangeError(`Configured ${family[0].group} Vanshas are not parallel.`);});
        groupA.forEach(lineA=>groupB.forEach(lineB=>{const hit=lineIntersection(lineA.anchorFrom,lineA.anchorTo,lineB.anchorFrom,lineB.anchorTo);if(!hit)throw new RangeError(`Cross-family Vanshas ${lineA.id} and ${lineB.id} do not intersect.`);const u=(hit.x-bounds.minX)/bounds.width,v=(hit.y-bounds.minY)/bounds.height,status=classifyPoint(hit,polygon),boundaryStatus=status===BoundaryStatus.INSIDE_BUILDING?'INSIDE':status===BoundaryStatus.OUTSIDE_BUILDING?'OUTSIDE':'ON_BOUNDARY',world=transform.vastuToWorld(hit),wallDistance=distanceToWalls(hit,polygon),direction=directionSector(u,v);marmaPoints.push({id:null,intersectionKey:`${lineA.id}__${lineB.id}`,type:'MAHA_MARMA',x:hit.x,y:hit.y,localX:hit.x,localY:hit.y,localPoint:{x:hit.x,y:hit.y},worldX:world.x,worldY:world.y,worldPoint:world,normalizedX:u,normalizedY:v,normalizedPoint:{x:u,y:v},sourceLineA:lineA.id,sourceLineB:lineB.id,sourceVanshaAId:lineA.id,sourceVanshaBId:lineB.id,buildingStatus:status,boundaryStatus,nearestWallDistance:wallDistance,distanceToNearestWall:wallDistance*(Number.isFinite(scale)?scale:1),direction,directionSector:direction});}));
        // IDs are assigned in the North-aligned Vastu frame, never in renderer or
        // screen order. North/high-Y rows run first, then west/low-X to east.
        marmaPoints.sort((a,b)=>Math.abs(b.normalizedY-a.normalizedY)>EPSILON?b.normalizedY-a.normalizedY:a.normalizedX-b.normalizedX);
        // The nine primary intersections form three visual ranks even where
        // non-parallel Vanshas make members of a rank differ slightly in Y.
        // Rank by Northing first, then order each deterministic rank west-east.
        for(let row=0;row<marmaPoints.length;row+=3)marmaPoints.splice(row,3,...marmaPoints.slice(row,row+3).sort((a,b)=>a.normalizedX-b.normalizedX));
        marmaPoints.forEach((point,index)=>{point.id=`M${index+1}`;});
        const boundaryLocal=[{x:bounds.minX,y:bounds.minY},{x:bounds.maxX,y:bounds.minY},{x:bounds.maxX,y:bounds.maxY},{x:bounds.minX,y:bounds.maxY}];
        const brahmasthanLocal=[{x:xCoordinates[4],y:yCoordinates[4]},{x:xCoordinates[5],y:yCoordinates[4]},{x:xCoordinates[5],y:yCoordinates[5]},{x:xCoordinates[4],y:yCoordinates[5]}];
        const polygonCentroid=centroid(worldPolygon),referenceFrameCenter=localToPoint(referenceCenterLocal),brahmasthan=brahmasthanLocal.map(localToPoint),brahmasthanCenter=localToPoint(getPadaCenter(4,4,bounds));
        // Brahmasthan is the central pada of the reference frame, not the floor
        // polygon centroid; these intentionally diverge for asymmetric plans.
        // TODO(domain): cuts/extensions remain empty until an independent detector
        // exists. OUTSIDE geometry alone must never imply either condition.
        return {rulesVersion:VASTU_MARMA_RULES.version,actualFloorPolygon:worldPolygon,actualPolygonCentroid:polygonCentroid,polygonCentroid,referenceBoundary:boundaryLocal.map(localToPoint),referenceCenter:referenceFrameCenter,referenceFrameCenter,grid:{rows:9,columns:9,padaWidth:bounds.width/9,padaHeight:bounds.height/9,xCoordinates,yCoordinates,verticalBoundaries:xCoordinates,horizontalBoundaries:yCoordinates,cells},principalDiagonals:[{id:'NE_TO_SW',start:localToPoint({x:bounds.maxX,y:bounds.maxY}),end:localToPoint({x:bounds.minX,y:bounds.minY})},{id:'NW_TO_SE',start:localToPoint({x:bounds.minX,y:bounds.maxY}),end:localToPoint({x:bounds.maxX,y:bounds.minY})}],vanshaLines:lines,neSwVanshas:groupA,nwSeVanshas:groupB,marmaPoints,brahmasthan,brahmasthanCell:{row:4,column:4},brahmasthanCenter,brahmasthanResult:{cell:{row:4,column:4},center:brahmasthanCenter,polygonCentroid,referenceFrameCenter},cuts:[],extensions:[],marmaRadius:Math.min(bounds.width/9,bounds.height/9)*VASTU_MARMA_RULES.marmaSize.ratio,northAngleDegrees,scale:scale??null};
    }
    return Object.freeze({EPSILON,BoundaryStatus,SegmentStatus,VANSHA_DEBUG_LABELS,DEVTA_PADA_LAYOUT,VASTU_MARMA_RULES,NE_SW_VANSHAS:Object.freeze(VASTU_MARMA_RULES.vanshas.filter(v=>v.group==='NE_SW')),NW_SE_VANSHAS:Object.freeze(VASTU_MARMA_RULES.vanshas.filter(v=>v.group==='NW_SE')),coordinateTransformer,getPadaCenter,classifyPoint,directionsParallel,calculateMarmaAnalysis});
}));
