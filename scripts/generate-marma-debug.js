#!/usr/bin/env node
'use strict';

const fs=require('node:fs');
const path=require('node:path');
const M=require('../vastu-marma-engine.js');
const p=(x,y)=>({x,y});
const fixtures={
    square:[p(0,0),p(45,0),p(45,36),p(0,36)],
    rectangle:[p(0,0),p(45,0),p(45,36),p(0,36)],
    'l-shape':[p(0,0),p(45,0),p(45,18),p(18,18),p(18,36),p(0,36)],
    'cross-shape':[p(15,0),p(30,0),p(30,12),p(45,12),p(45,24),p(30,24),p(30,36),p(15,36),p(15,24),p(0,24),p(0,12),p(15,12)]
};
const number=value=>Number(value.toFixed(6));

for(const [name,floor] of Object.entries(fixtures)){
    const analysis=M.calculateMarmaAnalysis(floor,0,1);
    const xs=floor.map(point=>point.x),ys=floor.map(point=>point.y),minX=Math.min(...xs),maxX=Math.max(...xs),minY=Math.min(...ys),maxY=Math.max(...ys);
    const screen=point=>({x:number(30+(point.worldX-minX)/(maxX-minX)*540),y:number(462-(point.worldY-minY)/(maxY-minY)*432)});
    const points=items=>items.map(item=>{const q=screen(item);return `${q.x},${q.y}`;}).join(' ');
    const lines=[];
    analysis.grid.verticalBoundaries.forEach(x=>{const a=screen({worldX:x,worldY:minY}),b=screen({worldX:x,worldY:maxY});lines.push(`<line class="grid" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"/>`);});
    analysis.grid.horizontalBoundaries.forEach(y=>{const a=screen({worldX:minX,worldY:y}),b=screen({worldX:maxX,worldY:y});lines.push(`<line class="grid" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"/>`);});
    analysis.vanshaLines.forEach(line=>line.segments.forEach(segment=>{const a=screen(segment.start),b=screen(segment.end);lines.push(`<line class="${segment.status.toLowerCase()}" data-vansha="${line.id}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"/>`);}));
    analysis.marmaPoints.forEach(point=>{const q=screen(point),outside=point.boundaryStatus==='OUTSIDE'?' out':'';lines.push(`<circle class="point${outside}" cx="${q.x}" cy="${q.y}" r="5"><title>${point.intersectionKey}: ${point.boundaryStatus}; ${point.direction} (${point.normalizedX.toFixed(4)}, ${point.normalizedY.toFixed(4)})</title></circle>`);});
    const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="520" viewBox="0 0 600 520"><style>rect{fill:#f7f8f5}.floor{fill:#e9ece8;stroke:#263b32;stroke-width:3}.ref{fill:none;stroke:#2876a8;stroke-width:2;stroke-dasharray:8 4}.grid{stroke:#70aaca;stroke-width:1}.brahma{fill:#f6be3755;stroke:#b77c1f}.inside,.outside,.on_wall{stroke:#c29849;stroke-width:2}.outside{stroke-dasharray:7 5;opacity:.5}.point{fill:#c92d35;stroke:white;stroke-width:2}.point.out{fill:white;stroke:#c92d35}text{font:700 18px sans-serif;fill:#31443b}</style><rect width="600" height="520"/><text x="30" y="22">Marma debug — ${name}</text><polygon class="floor" points="${points(floor.map(point=>({worldX:point.x,worldY:point.y}))) }"/><polygon class="ref" points="${points(analysis.referenceBoundary)}"/>${lines.slice(0,20).join('')}<polygon class="brahma" points="${points(analysis.brahmasthan)}"/>${lines.slice(20).join('')}</svg>`;
    fs.writeFileSync(path.join(__dirname,`../docs/marma-debug-${name}.svg`),svg);
}
