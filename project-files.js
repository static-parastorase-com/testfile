(function () {
    'use strict';
    const VERSION = 1;
    const $ = id => document.getElementById(id);
    const status = (message, error = false) => { const node=$('projectFileStatus'); if(node){node.textContent=message;node.style.color=error?'#a5362c':'';} };

    let currentProjectId = null;
    let selectedProjectId = null;
    let projectsCache = [];

    // Listen for native project data
    window.addEventListener('nativeProjectsLoaded', (event) => {
        projectsCache = event.detail;
        renderProjectList(projectsCache);
    });

    const setPreparing = active => {
        const panel=$('projectFilePreparing'),button=$('saveProjectButton');
        if(panel)panel.hidden=!active;
        if(button){button.disabled=active;button.setAttribute('aria-busy',String(active));}
    };
    const nextPaint = () => new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
    const safeName = value => (String(value || 'vastu-project').replace(/\.apzok$/i, '').replace(/[^a-z0-9 _-]+/gi, '').trim() || 'vastu-project');

    const closeSetupPopup = () => {
        const overlay=$('setupLanguageOverlay');
        if(overlay)overlay.hidden=true;
        document.querySelector('[data-workspace-action="setup"]')?.setAttribute('aria-expanded','false');
    };

    function resultData() {
        return Array.from(document.querySelectorAll('#validationResults .validation-result')).map(node => ({
            className: node.className, messageHtml: node.dataset.messageHtml || node.innerHTML,
            message: node.dataset.message || node.textContent.trim(), remedies: node.dataset.remedies || '',
            roomName: node.dataset.roomName || '', direction: node.dataset.direction || ''
        }));
    }

    function restoreResults(items) {
        const root=$('validationResults'); if(!root || !Array.isArray(items))return;
        root.innerHTML=''; items.forEach(item=>{const node=document.createElement('div');node.className=item.className||'validation-result';node.innerHTML=item.messageHtml||item.message||'';
            ['message','remedies','roomName','direction'].forEach(key=>{if(item[key])node.dataset[key]=item[key];});root.appendChild(node);});
        if(items.length){const popup=$('validationPopup');if(popup)popup.style.display='block';}
    }

    async function canvasPlanUri(project) {
        const uri=project?.planFileUri||''; if(!uri.startsWith('blob:'))return uri;
        try {
            const response = await fetch(uri);
            const blob = await response.blob();
            return await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            });
        } catch (e) { return uri; }
    }

    async function saveCurrentProjectToNative() {
        try {
            const plan=window.VastuPlanAnalysis?.getCurrentProject?.()||{};
            const name = $('projectFileName')?.value || plan.projectName || 'Untitled Project';
            const id = currentProjectId || 'proj_' + Date.now();
            currentProjectId = id;

            const planFileUri = await canvasPlanUri(plan);
            const payload = {
                format: 'APZOK_PROJECT',
                version: VERSION,
                plan: { ...plan, planFileUri },
                workspace: window.VastuWorkspaceProject?.getData?.() || null,
                report: window.VastuReportProject?.getData?.() || null,
                completedResults: resultData()
            };

            if (window.Android && window.Android.saveProject) {
                window.Android.saveProject(id, safeName(name), plan.propertyType || 'Residence', JSON.stringify(payload));
                return true;
            }
            return false;
        } catch (e) {
            console.error('Save to Native failed', e);
            return false;
        }
    }

    async function saveProject() {
        setPreparing(true);status('Saving project…');
        try {
            await nextPaint();
            await saveCurrentProjectToNative();

            const plan=window.VastuPlanAnalysis?.getCurrentProject?.()||{};
            const planFileUri = await canvasPlanUri(plan);
            const payload={format:'APZOK_PROJECT',version:VERSION,savedAt:new Date().toISOString(),plan:{...plan, planFileUri},workspace:window.VastuWorkspaceProject?.getData?.()||null,report:window.VastuReportProject?.getData?.()||null,completedResults:resultData()};
            const blob=new Blob([JSON.stringify(payload)],{type:'application/json'}),url=URL.createObjectURL(blob),link=document.createElement('a');
            link.href=url;link.download=`${safeName($('projectFileName')?.value)}.apzok`;document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);

            status(`Saved locally and downloaded.`);
            if (window.Android && window.Android.getProjects) window.Android.getProjects();
        } catch(error) { console.error(error);status(`Could not save project: ${error.message}`,true); }
        finally { setPreparing(false); }
    }

    async function loadProjectData(payload, name = "") {
        try {
            if(!payload || payload.format!=='APZOK_PROJECT'||payload.version>VERSION||!payload.plan)throw new Error('This is not a supported .apzok project.');
            await window.VastuPlanAnalysis?.restoreProject?.(payload.plan);
            window.VastuWorkspaceProject?.restoreData?.(payload.workspace);
            await window.VastuReportProject?.restoreData?.(payload.report);
            restoreResults(payload.completedResults);
            const house=$('housePlan');if(house&&payload.plan.planFileUri){house.src=payload.plan.planFileUri;house.style.display='block';$('planEmptyState')?.classList.add('hidden');}
            if($('projectFileName'))$('projectFileName').value=safeName(name || payload.plan.projectName);

            $('projectListOverlay')?.classList.add('hidden');
            document.body.classList.add('project-load-animation');
            window.dispatchEvent(new CustomEvent('vastu:open-workspace-controls',{detail:{target:'#proWorkflowPanel'}}));
            setTimeout(()=>document.body.classList.remove('project-load-animation'),1000);
            window.dispatchEvent(new CustomEvent('vastu:project-loaded',{detail:payload}));
        } catch(error) { console.error(error); alert(`Could not load project: ${error.message}`); }
    }

    function renderProjectList(projects) {
        const container = $('projectItems');
        const fab = $('createNewProjectBtn');
        if (!container) return;

        if (!projects || projects.length === 0) {
            container.innerHTML = `<div class="project-list-empty"><i class="fas fa-folder-open"></i><p>No projects saved yet. Create a new one to begin!</p></div>`;
            if (fab) fab.classList.add('fab-animated-glow');
            return;
        }

        if (fab) fab.classList.remove('fab-animated-glow');

        container.innerHTML = projects.map(p => `
            <div class="project-card" data-id="${p.id}">
                <div class="project-card-header">
                    <h3 class="project-card-title" style="margin: 0; font-size: 16px;">${escapeHtml(p.name)}</h3>
                    <button class="btn-delete-icon" onclick="event.stopPropagation(); window.ProjectManager.deleteProject('${p.id}')" title="Delete" style="padding: 4px; font-size: 14px;">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
                <div class="project-card-meta" style="margin-bottom: 4px;">
                    <span style="font-size: 11px;">${new Date(p.lastModified).toLocaleDateString()}</span>
                    <span style="font-size: 11px;">${p.propertyType || ''}</span>
                </div>
                <button class="btn-open" onclick="window.ProjectManager.openSpecificProject('${p.id}')" style="padding: 8px; font-size: 12px; width: 100%;">
                    <i class="fas fa-folder-open"></i> Open Project
                </button>
            </div>
        `).join('');
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    window.ProjectManager = {
        async openSpecificProject(id) {
            const project = projectsCache.find(p => p.id === id);
            if (project) {
                currentProjectId = id;
                await loadProjectData(project.payload, project.name);
            }
        },
        async deleteProject(id) {
            if (confirm('Are you sure you want to delete this project?')) {
                if (window.Android && window.Android.deleteProject) {
                    window.Android.deleteProject(id);
                    setTimeout(() => { if (window.Android.getProjects) window.Android.getProjects(); }, 150);
                }
                if (currentProjectId === id) currentProjectId = null;
            }
        }
    };

    function bindProjectFileControls(){
        if (window.Android && window.Android.getProjects) {
            window.Android.getProjects();
        }

        $('goToProjectListBtn')?.addEventListener('click', () => {
            if (window.Android && window.Android.getProjects) window.Android.getProjects();
            $('projectListOverlay')?.classList.remove('hidden');
            closeSetupPopup();
        });

        $('createNewProjectBtn')?.addEventListener('click', () => {
            currentProjectId = null;
            selectedProjectId = null;
            $('projectListOverlay')?.classList.add('hidden');
            const house = $('housePlan');
            if (house && house.src && house.src.length > 50) {
                 window.location.reload();
            }
        });

        $('saveProjectButton')?.addEventListener('click',saveProject);

        $('loadProjectButton')?.addEventListener('keydown',event=>{
            if(event.key==='Enter'||event.key===' '){event.preventDefault();$('projectFileInput')?.click();}
        });

        $('projectFileInput')?.addEventListener('change',event=>{const file=event.target.files?.[0];if(file) {
            file.text().then(text => {
                try {
                    const payload = JSON.parse(text);
                    const id = 'proj_' + Date.now();
                    if (window.Android && window.Android.saveProject) {
                        window.Android.saveProject(id, safeName(file.name), payload.plan?.propertyType || 'Residence', text);
                        loadProjectData(payload, file.name);
                    }
                } catch(e) { alert("Invalid .apzok file"); }
            });
        }
        event.target.value='';});
    }

    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bindProjectFileControls,{once:true});
    else bindProjectFileControls();
}());
