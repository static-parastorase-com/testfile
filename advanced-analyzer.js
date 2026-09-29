(function () {
    'use strict';
    const $=(selector,root=document)=>root.querySelector(selector);
    const $$=(selector,root=document)=>Array.from(root.querySelectorAll(selector));
    const escapeHtml=value=>{const node=document.createElement('span');node.textContent=String(value??'');return node.innerHTML;};
    const PATTERNS=[
        {type:'IMAGE',title:'Image',page:'Calibrated Floor Plan',description:'Original calibrated plan with the actual marked boundary and dimensions.'},
        {type:'STANDARD',title:'Standard',page:'Standard Vastu Direction Analysis',description:'North-aligned standard directional compass overlay.'},
        {type:'ZONE_16',title:'16 Zone',page:'16-Zone Vastu Analysis',description:'Sixteen-direction zone pattern, labels and reference center.'},
        {type:'BOUNDARY_FILL',title:'Boundary Fill',page:'Boundary Direction Analysis',description:'Direction sectors extended to the selected floor boundary.'},
        {type:'DEVATAS',title:'Devatas',page:'Vastu Devata Reference',description:'Devata reference overlay using the current center and North.'},
        {type:'MARMA_POINTS',title:'Marma Points',page:'Marma / Marmasthan Analysis',description:'North-aligned 81-pada Marma and Vansha reference geometry.'}
    ];
    const defaultSettings={selectedPatterns:PATTERNS.map(item=>item.type),includeProjectSummary:true,includeMeasurements:true,includeConsultantFindings:true,includeRecommendations:true,includeRemedies:true,includeAutoSummary:true,reportType:'PROFESSIONAL'};
    let model={settings:{...defaultSettings},findings:[],summary:'',clientName:'',consultantName:'',projectName:'My Vastu Project',propertyType:'Residence',facing:'North',reportDate:new Date().toISOString().slice(0,10)};
    let project=null,saveTimer=null,previewMode=false;

    class ReportRepository {
        constructor(){this.db=null;}
        async open(){if(!('indexedDB'in window))return;this.db=await new Promise((resolve,reject)=>{const request=indexedDB.open('vastu-pro-reports',1);request.onupgradeneeded=()=>request.result.createObjectStore('reports');request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error);});}
        async load(id){if(!this.db)return JSON.parse(localStorage.getItem(`vastu-report-${id}`)||'null');return new Promise(resolve=>{const tx=this.db.transaction('reports','readonly');const request=tx.objectStore('reports').get(id);request.onsuccess=()=>resolve(request.result||null);request.onerror=()=>resolve(null);});}
        async save(id,value){if(!this.db){localStorage.setItem(`vastu-report-${id}`,JSON.stringify(value));return;}return new Promise(resolve=>{const tx=this.db.transaction('reports','readwrite');tx.objectStore('reports').put(value,id);tx.oncomplete=resolve;});}
    }
    const repository=new ReportRepository();
    window.VastuReportProject = {
        getData(){ collectFields(); return JSON.parse(JSON.stringify(model)); },
        async restoreData(data){
            if(!data||typeof data!=='object')return;
            model={...model,...data,settings:{...defaultSettings,...data.settings},findings:Array.isArray(data.findings)?data.findings:[]};
            clearTimeout(saveTimer);await repository.save('current-plan',model);project=analysis();renderAll();
        }
    };
    class TemplateReportNarrativeService { async generateNarrative(input){return {summary:buildAutoSummary(input.project,input.selectedPatterns,input.findings,input.meta)};} }
    window.TemplateReportNarrativeService=TemplateReportNarrativeService;

    function analysis(){return window.VastuPlanAnalysis?.getCurrentProject?.()||{};}
    function dimensions(){const area=Number(project?.measurements?.areaMm2||0),perimeter=Number(project?.measurements?.perimeterMm||0);return {sqFt:area/92903.04,sqM:area/1e6,perimeterFt:perimeter/304.8};}
    function facingFromAngle(angle){return ['South','East','North','West'][Math.round((((Number(angle)||0)%360)+360)%360/90)%4];}
    function availability(type){if(!project?.planFileUri)return false;if(type==='IMAGE')return true;if(!project?.centroid||!project?.outerBoundary?.isClosed)return false;if(type==='MARMA_POINTS')return Boolean(project.marmaAnalysis);return true;}
    function reportRenderOptions(){return {showEditorControls:false,showDebug:false,showMeasurementHandles:false,showBoundary:true,showDimensions:model.settings.includeMeasurements,showCenter:true};}
    function renderPatternForReport(type){return window.VastuPlanAnalysis?.renderPatternForReport?.(type,reportRenderOptions())||{markup:'<div class="pattern-placeholder"><i class="fas fa-draw-polygon"></i><span>Complete Plan Analysis to create this preview.</span></div>'};}
    window.renderPatternForReport=renderPatternForReport;

    function buildAutoSummary(current,selected,findings,meta=model){
        const d=dimensions(),available=selected.map(type=>PATTERNS.find(item=>item.type===type)?.title).filter(Boolean);
        const facts=[];facts.push(`This report is based on ${current?.calibration?.scaleMmPerPixel?'a calibrated':'the current'} ${String(meta.propertyType||'property').toLowerCase()} floor plan${d.sqFt?` with an analyzed area of ${d.sqFt.toLocaleString(undefined,{maximumFractionDigits:2})} sq ft`:''}.`);
        if(Number.isFinite(Number(current?.northAngle)))facts.push(`The plan is aligned using a North orientation of ${Number(current.northAngle).toFixed(1)}°.`);
        facts.push(`The report includes ${available.length?available.join(', '):'no pattern views'}${available.length?' overlays.':'.'}`);
        if(selected.includes('MARMA_POINTS')&&current?.marmaAnalysis)facts.push('The Marma layer uses the configured North-aligned 81-pada reference geometry.');
        const included=findings.filter(item=>item.includeInReport),counts=included.reduce((out,item)=>(out[item.category]=(out[item.category]||0)+1,out),{});
        facts.push(included.length?`The consultant recorded ${included.length} finding${included.length===1?'':'s'}: ${Object.entries(counts).map(([key,value])=>`${value} ${key.toLowerCase().replaceAll('_',' ')}${value===1?'':' items'}`).join(', ')}.`:'No consultant findings were added for this project.');
        return facts.join('\n\n');
    }
    window.buildAutoSummary=buildAutoSummary;

    function validate(){const issues=[];if(!project?.planFileUri)issues.push('Upload a plan image before generating the report.');if(!project?.calibration?.scaleMmPerPixel)issues.push('Complete measurement calibration before generating the report.');if(!project?.outerBoundary?.isClosed)issues.push('Complete the actual marked boundary before generating the report.');if(!project?.centroid)issues.push('Create a valid reference center in Plan Analysis.');if(!Number.isFinite(Number(project?.northAngle)))issues.push('Set North direction before generating Vastu pattern reports.');if(!model.settings.selectedPatterns.length)issues.push('Select at least one pattern view.');return issues;}
    function renderMetrics(){const d=dimensions(),ready=PATTERNS.filter(item=>availability(item.type)).length;$('#analyzerSummary').innerHTML=`<article class="metric-card"><small>PROPERTY AREA</small><strong>${d.sqFt?d.sqFt.toLocaleString(undefined,{maximumFractionDigits:2}):'—'} <em>sq ft</em></strong><span>${d.sqM?`${d.sqM.toFixed(2)} sq m`:'Awaiting calibration'}</span></article><article class="metric-card"><small>FACING</small><strong>${escapeHtml(model.facing)}</strong><span>current orientation</span></article><article class="metric-card"><small>NORTH ANGLE</small><strong>${Number(project?.northAngle||0).toFixed(1)}°</strong><span>analysis reference</span></article><article class="metric-card"><small>PATTERNS READY</small><strong>${ready} / 6</strong><span>current geometry</span></article>`;}
    function renderGeometrySummary(){const d=dimensions(),vertices=project?.outerBoundary?.vertices?.length||0;$('#projectGeometry').innerHTML=`<span class="eyebrow">PROJECT / CALCULATION SUMMARY</span><h3>Project Geometry</h3><div class="geometry-grid"><div><small>Area</small><strong>${d.sqFt?`${d.sqFt.toLocaleString(undefined,{maximumFractionDigits:2})} sq ft`:'Not calibrated'}</strong></div><div><small>Area Metric</small><strong>${d.sqM?`${d.sqM.toFixed(2)} sq m`:'—'}</strong></div><div><small>Perimeter</small><strong>${d.perimeterFt?`${d.perimeterFt.toFixed(2)} ft`:'—'}</strong></div><div><small>Vertices</small><strong>${vertices}</strong></div><div><small>Scale</small><strong>${project?.calibration?.scaleMmPerPixel?'Calibrated':'Required'}</strong></div><div><small>North</small><strong>${Number(project?.northAngle||0).toFixed(1)}°</strong></div><div><small>Vastu Reference Boundary</small><strong>${project?.outerBoundary?.isClosed?'Ready':'Required'}</strong></div><div><small>Reference Center</small><strong>${project?.centroid?'Ready':'Required'}</strong></div><div><small>Pattern Geometry</small><strong>${project?.centroid?'Ready':'Required'}</strong></div></div>`;}
    function renderPatterns(){const root=$('#patternSelector');root.innerHTML=PATTERNS.map(item=>{const ready=availability(item.type),selected=model.settings.selectedPatterns.includes(item.type)&&ready,snapshot=ready?renderPatternForReport(item.type):null;return `<label class="pattern-card ${selected?'selected':''} ${ready?'':'disabled'}"><span class="pattern-thumb">${snapshot?.markup||'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>'}</span><span class="pattern-card-copy"><input type="checkbox" data-pattern="${item.type}" ${selected?'checked':''} ${ready?'':'disabled'}><strong>${item.title}</strong><small>${ready?item.description:'Unavailable until its Plan Analysis geometry is ready.'}</small></span></label>`;}).join('');}
    function renderFindingEditor(finding=null){const root=$('#findingEditor');if(!finding){root.innerHTML='';return;}root.innerHTML=`<form class="finding-form" data-id="${finding.id}"><div class="finding-form-head"><h4>${finding._new?'Add Finding':'Edit Finding'}</h4><button type="button" data-cancel-finding aria-label="Close"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg></button></div><label>Finding Title<input name="title" required value="${escapeHtml(finding.title)}"></label><label>Attach To<select name="targetType">${['GENERAL','PATTERN','ZONE','BOUNDARY','DEVATA','MARMA','BRAHMASTHAN'].map(value=>`<option ${finding.targetType===value?'selected':''}>${value}</option>`).join('')}</select></label><label>Target <small>optional stable ID</small><input name="targetId" value="${escapeHtml(finding.targetId||'')}" placeholder="e.g. M4, ADITI, NE"></label><label>Category<select name="category">${['POSITIVE','ACCEPTABLE','ATTENTION','DOSHA','MAJOR_DOSHA','NOTE'].map(value=>`<option ${finding.category===value?'selected':''}>${value.replaceAll('_',' ')}</option>`).join('')}</select></label><label class="wide">Observation<textarea name="observation" required rows="3">${escapeHtml(finding.observation)}</textarea></label><label class="wide">Explanation<textarea name="explanation" rows="2">${escapeHtml(finding.explanation||'')}</textarea></label><label>Recommendation<textarea name="recommendation" rows="3">${escapeHtml(finding.recommendation||'')}</textarea></label><label>Remedy<textarea name="remedy" rows="3">${escapeHtml(finding.remedy||'')}</textarea></label><label class="finding-include"><input name="includeInReport" type="checkbox" ${finding.includeInReport?'checked':''}> Include in report</label><div class="finding-actions"><button type="button" data-cancel-finding>Cancel</button><button class="report-primary" type="submit">Save Finding</button></div></form>`;}
    function renderFindings(){const root=$('#findingsList');root.innerHTML=model.findings.length?model.findings.map(item=>`<article class="finding-row"><span class="finding-category ${item.category.toLowerCase()}">${item.category.replaceAll('_',' ')}</span><div><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.targetType)}${item.targetId?` · ${escapeHtml(item.targetId)}`:''}</small><p>${escapeHtml(item.observation)}</p></div><div><button type="button" data-edit-finding="${item.id}" aria-label="Edit"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg></button><button type="button" data-delete-finding="${item.id}" aria-label="Delete"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg></button></div></article>`).join(''):'<div class="report-empty"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:#b38635;margin-bottom:8px"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /></svg><p>No consultant findings were added for this project.</p><span>Pattern pages and the factual summary can still be generated.</span></div>';}
    function linkedFindings(type){return model.findings.filter(item=>item.includeInReport&&(item.targetType==='PATTERN'&&item.targetId===type||({ZONE:'ZONE_16',BOUNDARY:'BOUNDARY_FILL',DEVATA:'DEVATAS',MARMA:'MARMA_POINTS'}[item.targetType]===type)));}
    function renderPreview(){
        const selected=PATTERNS.filter(item=>model.settings.selectedPatterns.includes(item.type)&&availability(item.type));
        const findings=model.findings.filter(item=>item.includeInReport),recommendations=findings.filter(item=>item.recommendation),remedies=findings.filter(item=>item.remedy);
        let page=1;const pages=[];
        pages.push(`<article class="report-page report-cover"><span>VASTU ANALYSIS REPORT</span><h2>${escapeHtml(model.projectName)}</h2><p>${escapeHtml(model.propertyType)} · ${escapeHtml(model.facing)} Facing</p><dl><dt>Client</dt><dd>${escapeHtml(model.clientName||'—')}</dd><dt>Consultant</dt><dd>${escapeHtml(model.consultantName||'—')}</dd><dt>Report date</dt><dd>${escapeHtml(model.reportDate)}</dd></dl><small>Page ${page++}</small></article>`);
        selected.forEach(item=>{const linked=linkedFindings(item.type),snapshot=renderPatternForReport(item.type);const linkedHtml=linked.length?`<h4>Consultant Findings</h4>${linked.map(f=>`<div class="preview-finding"><b>${escapeHtml(f.targetId||f.title)} — ${f.category.replaceAll('_',' ')}</b><p>${escapeHtml(f.observation)}</p></div>`).join('')}`:'';pages.push(`<article class="report-page"><span>PATTERN VIEW</span><h2>${item.page}</h2><div class="report-pattern-image">${snapshot.markup}</div><p>${item.description}</p>${linkedHtml}<small>Page ${page++}</small></article>`);});
        const findingsHtml=findings.length?findings.map(f=>`<div class="preview-finding"><b>${escapeHtml(f.title)} — ${f.category.replaceAll('_',' ')}</b><p>${escapeHtml(f.observation)}</p></div>`).join(''):'<p>No consultant findings were added for this project.</p>';
        const recommendationHtml=recommendations.length?recommendations.map(f=>`<p>• ${escapeHtml(f.recommendation)}</p>`).join(''):'<p>No consultant recommendations added yet.</p>';
        const remedyHtml=remedies.length?`<h3>Remedies</h3>${remedies.map(f=>`<p>• ${escapeHtml(f.remedy)}</p>`).join('')}`:'';
        pages.push(`<article class="report-page report-summary-page"><span>CONSULTANT REPORT</span><h2>Findings, Recommendations &amp; Remedies</h2>${findingsHtml}<h3>Consultant Recommendations</h3>${recommendationHtml}${remedyHtml}<h3>Overall Summary</h3><p class="preserve-lines">${escapeHtml(model.summary||buildAutoSummary(project,model.settings.selectedPatterns,model.findings))}</p><small>Page ${page++}</small></article>`);
        $('#reportPreview').innerHTML=pages.join('');
    }
    function renderValidation(){const issues=validate();$('#reportValidation').innerHTML=issues.length?`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-top:2px"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg><div>${issues.map(item=>`<p>${item}</p>`).join('')}</div>`:'';$('#reportValidation').classList.toggle('visible',Boolean(issues.length));return issues;}
    function renderAll(){project=analysis();if(project?.northAngle!=null)model.facing=facingFromAngle(project.northAngle);renderMetrics();renderGeometrySummary();renderPatterns();renderFindings();renderValidation();renderPreview();syncFields();}
    function syncFields(){if(!model.consultantName && window.panditDetails?.name)model.consultantName=window.panditDetails.name;[['projectName','projectName'],['clientName','clientName'],['consultantName','consultantName'],['propertyType','propertyType'],['projectFacing','facing'],['reportDate','reportDate'],['reportType',null],['overallSummary','summary']].forEach(([id,key])=>{const el=$(`#${id}`);if(el){const val=key?model[key]:model.settings.reportType;el.value=val;if(el.tagName==='SELECT'){Array.from(el.options).forEach(opt=>{if(opt.value===val||opt.text===val)opt.setAttribute('selected','selected');else opt.removeAttribute('selected');});}}});}
    function scheduleSave(){const status=$('#localSaveStatus');if(status)status.innerHTML='<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px;vertical-align:middle"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> Saving locally…';clearTimeout(saveTimer);saveTimer=setTimeout(async()=>{await repository.save('current-plan',model);if(status)status.innerHTML='<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px;vertical-align:middle"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> Saved locally ✓';},900);}
    function collectFields(){model.projectName=$('#projectName').value;model.clientName=$('#clientName').value;model.consultantName=$('#consultantName').value;model.propertyType=$('#propertyType').value;model.facing=$('#projectFacing').value;model.reportDate=$('#reportDate').value;model.settings.reportType=$('#reportType').value;model.summary=$('#overallSummary').value;scheduleSave();}
    async function openAnalyzer(){
        project=analysis();
        const saved=await repository.load('current-plan');
        if(saved)model={...model,...saved,settings:{...defaultSettings,...saved.settings}};
        renderAll();
        const langSelect = $('#reportLanguageSelect');
        if (langSelect) {
            const curLang = (typeof window !== "undefined" && window.getCurrentAppLanguage?.()) || localStorage.getItem('vastuUiLanguage') || 'en';
            langSelect.value = curLang;
        }
        $('#analyzerOverlay').classList.add('open');
        $('#analyzerOverlay').setAttribute('aria-hidden','false');
        document.body.classList.add('report-builder-mode');
        // Update nav active state
        document.querySelectorAll('.nav-item').forEach(el=>el.classList.remove('nav-item--active'));
        document.querySelector('[data-workspace-action="report"]')?.classList.add('nav-item--active');
    }
    function closeAnalyzer(){
        $('#analyzerOverlay').classList.remove('open');
        $('#analyzerOverlay').setAttribute('aria-hidden','true');
        document.body.classList.remove('report-builder-mode');
        // Update nav active state
        document.querySelectorAll('.nav-item').forEach(el=>el.classList.remove('nav-item--active'));
        document.querySelector('[data-workspace-action="plan"]')?.classList.add('nav-item--active');
    }
    async function generateFullVastuReport(projectId,settings){model.settings={...model.settings,...settings};project=analysis();const errors=validate();if(errors.length)throw new Error(errors[0]);const patterns=model.settings.selectedPatterns.map(type=>({type,...renderPatternForReport(type)}));const narrative=await new TemplateReportNarrativeService().generateNarrative({project,selectedPatterns:model.settings.selectedPatterns,findings:model.findings,meta:model});model.summary=model.summary||narrative.summary;renderPreview();scheduleSave();return {projectId,settings:model.settings,patterns,findings:model.findings,narrative,createdAt:Date.now()};}
    window.generateFullVastuReport=generateFullVastuReport;
    function reportBoundaryViewport(){
        const sourceWidth = Number(project?.imageSize?.width) || Number(project?.planImageWidth) || 1200;
        const sourceHeight = Number(project?.imageSize?.height) || Number(project?.planImageHeight) || 800;
        const vertices = project?.outerBoundary?.vertices;
        if (!Array.isArray(vertices) || vertices.length < 3) {
            return { viewBox: `0 0 ${sourceWidth} ${sourceHeight}`, width: sourceWidth, height: sourceHeight };
        }
        const rotation = project?.planRotation || 0;
        const c = project?.centroid || { x: sourceWidth / 2, y: sourceHeight / 2 };
        const rawPoints = vertices.map(point => ({ x: Number(point.x), y: Number(point.y) })).filter(p => Number.isFinite(p.x) && Number.isFinite(p.y));
        if (rawPoints.length < 3) {
            return { viewBox: `0 0 ${sourceWidth} ${sourceHeight}`, width: sourceWidth, height: sourceHeight };
        }

        let points = rawPoints;
        if (rotation !== 0) {
            const rad = rotation * Math.PI / 180;
            const cos = Math.cos(rad);
            const sin = Math.sin(rad);
            points = rawPoints.map(p => {
                const dx = p.x - c.x;
                const dy = p.y - c.y;
                return {
                    x: c.x + dx * cos - dy * sin,
                    y: c.y + dx * sin + dy * cos
                };
            });
        }

        const minX = Math.min(...points.map(p => p.x)), maxX = Math.max(...points.map(p => p.x));
        const minY = Math.min(...points.map(p => p.y)), maxY = Math.max(...points.map(p => p.y));
        const boundaryWidth = maxX - minX, boundaryHeight = maxY - minY;
        if (boundaryWidth <= 0 || boundaryHeight <= 0) {
            return { viewBox: `0 0 ${sourceWidth} ${sourceHeight}`, width: sourceWidth, height: sourceHeight };
        }

        // If boundary covers a major portion of the plan, use the full plan so framing matches live edit preview exactly.
        const widthCoverage = boundaryWidth / sourceWidth;
        const heightCoverage = boundaryHeight / sourceHeight;
        if (widthCoverage > 0.55 || heightCoverage > 0.55) {
            return { viewBox: `0 0 ${sourceWidth} ${sourceHeight}`, width: sourceWidth, height: sourceHeight };
        }

        // Otherwise provide generous padding (25% of dimension, min 40px) so the plan is not zoomed into a tight cropped box
        const padX = Math.max(40, boundaryWidth * 0.25);
        const padY = Math.max(40, boundaryHeight * 0.25);
        const x = Math.max(0, Math.min(minX - padX, sourceWidth - boundaryWidth - padX * 2));
        const y = Math.max(0, Math.min(minY - padY, sourceHeight - boundaryHeight - padY * 2));
        const width = Math.min(sourceWidth - x, boundaryWidth + padX * 2);
        const height = Math.min(sourceHeight - y, boundaryHeight + padY * 2);
        return { viewBox: `${x} ${y} ${width} ${height}`, width, height };
    }
    async function captureReportPattern(element){
        if(!element)throw new Error('The selected plan canvas is unavailable.');
        // Match the export surface to the marked plan with comfortable framing matching live preview
        const viewport=reportBoundaryViewport();
        const exportLongEdge=1400,viewportRatio=viewport?viewport.width/viewport.height:1;
        const exportWidth=Math.round(viewportRatio>=1?exportLongEdge:exportLongEdge*viewportRatio);
        const exportHeight=Math.round(viewportRatio>=1?exportLongEdge/viewportRatio:exportLongEdge);
        const qualityScale=2;
        const captureElement=element.cloneNode(true);
        captureElement.style.position='fixed';
        captureElement.style.left='-100000px';
        captureElement.style.top='0';
        captureElement.style.width=`${exportWidth}px`;
        captureElement.style.height=`${exportHeight}px`;
        captureElement.style.maxWidth='none';
        captureElement.style.margin='0';
        const svg=captureElement.querySelector('svg');
        if(svg&&viewport){
            svg.setAttribute('viewBox',viewport.viewBox);
            svg.setAttribute('width',String(exportWidth));
            svg.setAttribute('height',String(exportHeight));
            svg.setAttribute('preserveAspectRatio','xMidYMid meet');
        }
        document.body.appendChild(captureElement);
        const canvas=await html2canvas(captureElement,{scale:qualityScale,width:exportWidth,height:exportHeight,windowWidth:exportWidth,windowHeight:exportHeight,backgroundColor:'#ffffff',useCORS:true,allowTaint:false,logging:false,imageTimeout:12000,removeContainer:true}).finally(()=>captureElement.remove());
        if(!canvas.width||!canvas.height)throw new Error('The plan canvas could not be captured.');
        const data=canvas.toDataURL('image/png');
        const dimensions={width:canvas.width,height:canvas.height};
        canvas.width=1;canvas.height=1;
        return {data,...dimensions};
    }
    async function generatePdf(){
        // Read the form one final time before rendering/exporting. This also makes
        // the downloaded document and the locally persisted report use the exact
        // same client and project details, even when the user clicks immediately
        // after editing a field.
        collectFields();
        try{await generateFullVastuReport('current-plan',model.settings);}catch(error){renderValidation();$('#reportValidation').scrollIntoView({behavior:'smooth'});return;}
        // PDF and Print are separate report actions. Never fall back to the
        // browser print dialog from the PDF button: the shared PDF error UI
        // already explains when the download library is unavailable.
        if(!window.jspdf?.jsPDF){
            const alerts=getCurrentSpeechStrings?.().alerts||{};
            showAlertPopup?.(
                alerts.pdfLibraryMissing||'PDF generation library not loaded. Please try again.',
                alerts.pdfUnavailableTitle||'PDF unavailable'
            );
            return;
        }
        const button=$('#generatePdf'),original=button.innerHTML;
        button.disabled=true;button.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="fa-spin" style="margin-right:4px;vertical-align:middle"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg> Preparing PDF...';
        window.setPdfProgress?.(true,'Exporting plan canvas');await window.waitForPdfProgressPaint?.();
        try{
            await document.fonts?.ready;
            const {jsPDF}=window.jspdf;
            const selected=PATTERNS.filter(item=>model.settings.selectedPatterns.includes(item.type)&&availability(item.type));
            const patternElements=$$('.report-pattern-image',$('#reportPreview'));
            const pdf=new jsPDF({orientation:'portrait',unit:'mm',format:'a4',compress:true});
            const margin=16,pageWidth=pdf.internal.pageSize.getWidth(),pageHeight=pdf.internal.pageSize.getHeight();
            const contentWidth=pageWidth-margin*2,bottom=pageHeight-18;
            let y=margin;
            const addPage=()=>{pdf.addPage('a4','portrait');y=margin;};
            const ensureSpace=height=>{if(y+height>bottom)addPage();};
            const writeText=(text,{size=9,style='normal',color=[55,65,60],gap=2.5,indent=0}={})=>{
                const value=String(text??'').trim();
                if(!value)return;
                pdf.setFont('helvetica',style);pdf.setFontSize(size);pdf.setTextColor(...color);
                const lines=pdf.splitTextToSize(value,contentWidth-indent);
                const lineHeight=size*.38;
                for(const line of lines){ensureSpace(lineHeight);pdf.text(line,margin+indent,y);y+=lineHeight;}
                y+=gap;
            };
            const writeHeading=(text,level=2)=>writeText(text,{size:level===1?18:level===2?13:10.5,style:'bold',color:[35,68,56],gap:level===1?5:3});
            const writeLabel=(label,value)=>writeText(`${label}: ${value||'—'}`,{size:9,style:'normal',gap:1.5});

            // Cover page: use native PDF text so names and report metadata remain
            // selectable, searchable, and accessible instead of becoming pixels.
            y=70;
            writeText('VASTU ANALYSIS REPORT',{size:9.5,style:'bold',color:[162,120,43],gap:6});
            writeHeading(model.projectName,1);
            writeText(`${model.propertyType} · ${model.facing} Facing`,{size:10.5,gap:10});
            writeLabel('Client',model.clientName);
            writeLabel('Consultant',model.consultantName || window.panditDetails?.name || '');
            writeLabel('Report date',model.reportDate);
            writeLabel('Report type',model.settings.reportType);

            for(let index=0;index<selected.length;index+=1){
                addPage();
                const item=selected[index];
                writeText('PATTERN VIEW · ' + item.page,{size:8.5,style:'bold',color:[162,120,43],gap:2});
                if(item.description){
                    writeText(item.description,{size:8,color:[75,85,80],gap:3});
                }
                const shot=await captureReportPattern(patternElements[index]);
                
                // Pattern image fills the full available page area
                const planMargin = 8;
                const availableWidth = pageWidth - planMargin * 2; // 194mm width on A4
                const availableHeight = (pageHeight - 14) - y; // full remaining height down to bottom margin
                const ratio = Math.min(availableWidth / shot.width, availableHeight / shot.height);
                const width = shot.width * ratio, height = shot.height * ratio;
                const imgX = (pageWidth - width) / 2;
                const imgY = y + (availableHeight - height) / 2;

                // Subtle architectural boundary frame
                pdf.setDrawColor(218, 224, 220);
                pdf.setLineWidth(0.3);
                pdf.rect(imgX - 0.5, imgY - 0.5, width + 1, height + 1);

                pdf.addImage(shot.data,'PNG',imgX,imgY,width,height,undefined,'FAST');
                
                const linked=linkedFindings(item.type);
                if(linked.length){
                    addPage();
                    writeText('PATTERN FINDINGS · ' + item.page,{size:8.5,style:'bold',color:[162,120,43],gap:2});
                    writeHeading('Consultant Findings & Observations',3);
                    linked.forEach(finding=>{
                        writeText(`${finding.targetId||finding.title} — ${finding.category.replaceAll('_',' ')}`,{size:8.5,style:'bold',gap:1});
                        writeText(finding.observation,{size:8,indent:3,gap:2});
                        if(finding.explanation)writeText(`Explanation: ${finding.explanation}`,{size:8,indent:3,gap:1.5});
                        if(finding.recommendation)writeText(`Recommendation: ${finding.recommendation}`,{size:8,indent:3,gap:1.5});
                    });
                }
            }

            addPage();
            writeText('CONSULTANT REPORT',{size:8.5,style:'bold',color:[162,120,43],gap:2});
            writeHeading('Findings, Recommendations & Remedies',2);
            const findings=model.findings.filter(item=>item.includeInReport);
            if(!findings.length)writeText('No consultant findings were added for this project.', {size: 8.5});
            findings.forEach(finding=>{
                writeText(`${finding.title} — ${finding.category.replaceAll('_',' ')}`,{size: 9, style:'bold',gap:1});
                writeText(finding.observation,{size: 8.5, indent:3, gap: 1.5});
                if(finding.explanation)writeText(`Explanation: ${finding.explanation}`,{size: 8, indent:3, gap: 1.5});
            });
            writeHeading('Consultant Recommendations',3);
            const recommendations=findings.filter(item=>item.recommendation);
            if(!recommendations.length)writeText('No consultant recommendations added yet.', {size: 8.5});
            recommendations.forEach((finding,index)=>writeText(`${index+1}. ${finding.recommendation}`,{size: 8.5, indent:3, gap: 1.5}));
            const remedies=findings.filter(item=>item.remedy);
            if(remedies.length){
                writeHeading('Remedies',3);
                remedies.forEach((finding,index)=>writeText(`${index+1}. ${finding.remedy}`,{size: 8.5, indent:3, gap: 1.5}));
            }
            writeHeading('Overall Summary',3);
            writeText(model.summary||buildAutoSummary(project,model.settings.selectedPatterns,model.findings), {size: 8.5, gap: 3});

            // COMPREHENSIVE ARCHITECTURAL VASTU GUIDE FOR ALL ELEMENTS (PDF EXCLUSIVE)
            // Automatically localized for user selected language: English (en), Kannada (kn), Hindi (hi), Tamil (ta), Telugu (te), Malayalam (ml)
            const activeLang = (typeof window !== "undefined" && window.getCurrentAppLanguage?.())
                || (function() {
                    try { return localStorage.getItem("vastuUiLanguage"); } catch(e) { return null; }
                })()
                || (typeof currentLanguage !== "undefined" ? currentLanguage : "en");

            const guide = (typeof window !== "undefined" && window.getVastuElementsGuide)
                ? window.getVastuElementsGuide(activeLang)
                : null;

            if (guide && Array.isArray(guide.categories)) {
                addPage();
                const isIndic = ["hi", "kn", "ta", "te", "ml"].includes(activeLang);

                if (isIndic && window.renderIndicVastuHeading && window.renderIndicVastuText) {
                    const topBadge = window.renderIndicVastuHeading(guide.title, contentWidth, 1, 2.5);
                    ensureSpace(topBadge.heightMm + 2);
                    pdf.addImage(topBadge.dataUrl, "PNG", margin, y, contentWidth, topBadge.heightMm, undefined, "FAST");
                    y += topBadge.heightMm + 2.5;

                    const heading = window.renderIndicVastuHeading(guide.heading, contentWidth, 2, 2.5);
                    ensureSpace(heading.heightMm + 2.5);
                    pdf.addImage(heading.dataUrl, "PNG", margin, y, contentWidth, heading.heightMm, undefined, "FAST");
                    y += heading.heightMm + 2.5;

                    const desc = window.renderIndicVastuText(guide.description, contentWidth, { size: 8, color: [75, 85, 80] }, 2.5);
                    ensureSpace(desc.heightMm + 4);
                    pdf.addImage(desc.dataUrl, "PNG", margin, y, contentWidth, desc.heightMm, undefined, "FAST");
                    y += desc.heightMm + 4;
                } else {
                    writeText(guide.title, { size: 8.5, style: "bold", color: [162, 120, 43], gap: 2 });
                    writeHeading(guide.heading, 2);
                    writeText(guide.description, { size: 8, color: [75, 85, 80], gap: 4 });
                }

                guide.categories.forEach((section) => {
                    ensureSpace(18);
                    if (isIndic && window.renderIndicVastuHeading) {
                        const secHeading = window.renderIndicVastuHeading(section.category, contentWidth, 3, 2.5);
                        ensureSpace(secHeading.heightMm + 2.5);
                        pdf.addImage(secHeading.dataUrl, "PNG", margin, y, contentWidth, secHeading.heightMm, undefined, "FAST");
                        y += secHeading.heightMm + 2.5;
                    } else {
                        writeHeading(section.category, 3);
                    }

                    section.items.forEach(item => {
                        if (isIndic && window.renderIndicVastuCard) {
                            const card = window.renderIndicVastuCard(item, guide.idealLabel || "Ideal:", contentWidth, 2.5);
                            ensureSpace(card.heightMm + 2.2);
                            pdf.addImage(card.dataUrl, "PNG", margin, y, contentWidth, card.heightMm, undefined, "FAST");
                            y += card.heightMm + 2.2;
                        } else {
                            const ruleLines = pdf.splitTextToSize(item.rules, contentWidth - 7);
                            const boxHeight = 7.5 + ruleLines.length * 3.4;
                            ensureSpace(boxHeight + 2);

                            pdf.setDrawColor(226, 232, 228);
                            pdf.setLineWidth(0.2);
                            pdf.setFillColor(252, 253, 251);
                            pdf.roundedRect(margin, y, contentWidth, boxHeight, 1.2, 1.2, "FD");

                            pdf.setFont("helvetica", "bold");
                            pdf.setFontSize(8.5);
                            pdf.setTextColor(35, 68, 56);
                            pdf.text(item.name, margin + 3, y + 4.2);

                            pdf.setFont("helvetica", "bold");
                            pdf.setFontSize(7.5);
                            pdf.setTextColor(162, 120, 43);
                            pdf.text(guide.idealLabel ? guide.idealLabel + " " + item.zone : "Ideal: " + item.zone, margin + contentWidth - 3, y + 4.2, { align: "right" });

                            pdf.setFont("helvetica", "normal");
                            pdf.setFontSize(7.5);
                            pdf.setTextColor(65, 75, 70);
                            let lineY = y + 8;
                            for (const line of ruleLines) {
                                pdf.text(line, margin + 3, lineY);
                                lineY += 3.4;
                            }

                            y += boxHeight + 2.5;
                        }
                    });
                    y += 2;
                });
            }

            const pageCount=pdf.getNumberOfPages();
            for(let pageNumber=1;pageNumber<=pageCount;pageNumber+=1){
                pdf.setPage(pageNumber);pdf.setFont('helvetica','normal');pdf.setFontSize(7.5);pdf.setTextColor(130,135,132);
                pdf.text(`Page ${pageNumber} of ${pageCount}`,pageWidth-margin,pageHeight-8,{align:'right'});
            }
            clearTimeout(saveTimer);
            await repository.save('current-plan',model);
            const status=$('#localSaveStatus');
            if(status)status.innerHTML='<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px;vertical-align:middle"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> Saved locally ✓';
            pdf.save(`${model.projectName.replace(/[^a-z0-9]+/gi,'-')||'Vastu'}-Plan-Report.pdf`);

            const androidStatus = document.getElementById('androidSaveStatus');
            if (androidStatus) {
                androidStatus.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px;vertical-align:middle;color:#2e7d32"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg> PDF Report Saved in <b>Downloads/Apzok Vastu</b>';
                androidStatus.style.display = 'block';
                androidStatus.style.padding = '15px';
                androidStatus.style.margin = '15px 28px';
                androidStatus.style.borderRadius = '8px';
                androidStatus.style.background = '#e8f5e9';
                androidStatus.style.color = '#2e7d32';
                androidStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // Hide after 5 seconds
                setTimeout(() => {
                    androidStatus.style.display = 'none';
                }, 5000);
            }
        }catch(error){console.error('Professional PDF generation failed:',error);window.alert(`Unable to generate PDF: ${error.message}`);}
        finally{window.setPdfProgress?.(false);button.disabled=false;button.innerHTML=original;}
    }

    document.addEventListener('DOMContentLoaded',async()=>{await repository.open().catch(()=>{});
        // Swipe to close logic for Report Slider (75% screen width threshold)
        let touchStartX = 0;
        const drawer = document.querySelector('.analyzer-drawer');
        if (drawer) {
            drawer.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });
            drawer.addEventListener('touchend', (e) => {
                const touchEndX = e.changedTouches[0].screenX;
                const diffX = touchEndX - touchStartX;
                if (diffX > window.innerWidth * 0.75) {
                    closeAnalyzer();
                }
            }, { passive: true });
        }
        window.addEventListener('vastu:language-changed',event=>{const langSelect=$('#reportLanguageSelect');if(langSelect&&event.detail?.language)langSelect.value=event.detail.language;});
        $('#advancedAnalyzerBtn')?.addEventListener('click',openAnalyzer);$$('[data-workspace-action]').forEach(button=>button.addEventListener('click',()=>{if(button.dataset.workspaceAction==='report')openAnalyzer();}));$('#closeAnalyzerBtn').addEventListener('click',closeAnalyzer);$('#backToPlanBtn').addEventListener('click',closeAnalyzer);$('#analyzerOverlay').addEventListener('click',event=>{if(event.target.id==='analyzerOverlay')closeAnalyzer();});$('#printAnalysisBtn').addEventListener('click',()=>window.print());$('#reportLanguageSelect')?.addEventListener('change',event=>{if(typeof setLanguage==='function')setLanguage(event.target.value);});$('#generatePdf').addEventListener('click',generatePdf);$('#runAdvancedAnalysis').addEventListener('click',async()=>{collectFields();try{await generateFullVastuReport('current-plan',model.settings);$('#reportPreview').scrollIntoView({behavior:'smooth'});}catch(error){renderValidation();}});['previewAnalysis','footerPreview'].forEach(id=>$(`#${id}`).addEventListener('click',()=>{$('#reportPreview').scrollIntoView({behavior:'smooth'});}));$('#refreshAnalysis').addEventListener('click',()=>{project=analysis();renderAll();});$('#selectAllPatterns').addEventListener('click',()=>{model.settings.selectedPatterns=PATTERNS.filter(item=>availability(item.type)).map(item=>item.type);renderPatterns();renderPreview();scheduleSave();});$('#clearAllPatterns').addEventListener('click',()=>{model.settings.selectedPatterns=[];renderPatterns();renderPreview();renderValidation();scheduleSave();});$('#patternSelector').addEventListener('change',event=>{const type=event.target.dataset.pattern;if(!type)return;model.settings.selectedPatterns=event.target.checked?[...new Set([...model.settings.selectedPatterns,type])]:model.settings.selectedPatterns.filter(item=>item!==type);renderPatterns();renderPreview();renderValidation();scheduleSave();});$('#addFinding').addEventListener('click',()=>renderFindingEditor({id:crypto.randomUUID?.()||String(Date.now()),targetType:'GENERAL',title:'',category:'NOTE',observation:'',includeInReport:true,createdAt:Date.now(),updatedAt:Date.now(),_new:true}));$('#findingEditor').addEventListener('click',event=>{if(event.target.closest('[data-cancel-finding]'))renderFindingEditor();});$('#findingEditor').addEventListener('submit',event=>{event.preventDefault();const data=new FormData(event.target),existing=model.findings.find(item=>item.id===event.target.dataset.id),now=Date.now(),finding={id:event.target.dataset.id,targetType:data.get('targetType'),targetId:data.get('targetId')||undefined,title:data.get('title'),category:String(data.get('category')).replaceAll(' ','_'),observation:data.get('observation'),explanation:data.get('explanation'),recommendation:data.get('recommendation'),remedy:data.get('remedy'),includeInReport:data.get('includeInReport')==='on',createdAt:existing?.createdAt||now,updatedAt:now};model.findings=existing?model.findings.map(item=>item.id===finding.id?finding:item):[...model.findings,finding];renderFindingEditor();renderFindings();renderPreview();scheduleSave();});$('#findingsList').addEventListener('click',event=>{const edit=event.target.closest('[data-edit-finding]'),remove=event.target.closest('[data-delete-finding]');if(edit)renderFindingEditor(model.findings.find(item=>item.id===edit.dataset.editFinding));if(remove){model.findings=model.findings.filter(item=>item.id!==remove.dataset.deleteFinding);renderFindings();renderPreview();scheduleSave();}});$('#autoDraft').addEventListener('click',()=>{$('#overallSummary').value=model.summary=buildAutoSummary(project,model.settings.selectedPatterns,model.findings);renderPreview();scheduleSave();});$('#polishAi').addEventListener('click',async()=>{const result=await new TemplateReportNarrativeService().generateNarrative({project,selectedPatterns:model.settings.selectedPatterns,findings:model.findings,meta:model});$('#overallSummary').value=model.summary=result.summary;renderPreview();scheduleSave();});$('.analyzer-project').addEventListener('input',collectFields);$('#overallSummary').addEventListener('input',()=>{model.summary=$('#overallSummary').value;renderPreview();scheduleSave();});document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!$('#findingEditor form'))closeAnalyzer();});});
}());