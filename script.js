 
// Main Code
// Global variables
let currentRotation = 0;
let currentScale = 1;
let currentX = 0;
let currentY = 0;
let isAddingAnnotation = false;
const SUPPORTED_UI_LANGUAGES = ['en', 'hi', 'kn', 'ta', 'te', 'ml'];
const savedUiLanguage = (() => {
    try { return window.localStorage.getItem('vastuUiLanguage'); } catch (_) { return null; }
})();
let currentLanguage = SUPPORTED_UI_LANGUAGES.includes(savedUiLanguage) ? savedUiLanguage : 'en';
window.getCurrentAppLanguage = function() { return currentLanguage; };
let annotations = [];
let isDragging = false;
let dragStartX, dragStartY;
let imageElement = document.getElementById('housePlan');
let container = document.getElementById('planContainer');
let annotationContainer = document.getElementById('annotationContainer');
let activeAnnotation = null;
let isFullscreen = false;
let currentlyEditedAnnotation = null;
let selectedFile = null;
let scanResultTimeout = null;
let manualScanAuthorized = false;
let compassSizePercent = 100;
let hindiFontLoadPromise = null;
let hindiFontDataPromise = null;
// Keep the spoken guide opt-in so loading the app never starts audio unexpectedly.
let isGuideMuted = true;
let kannadaSpeechFallbackActive = false;
let lastKnownKannadaVoiceSupport = null;
let browserNoticeHideTimeout = null;
let browserNoticeFadeTimeout = null;
let currentCompassRotation = 0;
let isPdfGenerationInProgress = false;

// Present plan tools and configuration in one right-hand settings bar.
document.addEventListener('DOMContentLoaded', () => {
    initializeWorkspaceMenu();
    document.body.classList.remove('workspace-loading');

    document.querySelectorAll('.setting-group input[type="range"]').forEach((range) => {
        const output = range.closest('.setting-group')?.querySelector('output');
        if (!output) return;
        const suffix = range.getAttribute('aria-label') === 'Compass angle' ? '°' : '%';
        range.addEventListener('input', () => { output.textContent = `${range.value}${suffix}`; });
    });

    const compassSizeRange = document.getElementById('compassSizeRange');
    if (compassSizeRange) {
        compassSizePercent = Number(compassSizeRange.value);
        compassSizeRange.addEventListener('input', () => {
            compassSizePercent = Number(compassSizeRange.value);
            updateCompassCircleSize();
        });
    }

    const compassAngleRange = document.getElementById('compassAngleRange');
    if (compassAngleRange) {
        compassAngleRange.addEventListener('input', () => {
            setCompassRotation(Number(compassAngleRange.value));
        });
    }

    document.querySelectorAll('[data-angle-step]').forEach((button) => {
        button.addEventListener('click', () => {
            const nextAngle = currentCompassRotation + Number(button.dataset.angleStep || 0);
            setCompassRotation(nextAngle, { syncControl: true });
        });
    });

    document.getElementById('resetCompassAngle')?.addEventListener('click', () => {
        setCompassRotation(0, { syncControl: true });
    });
});

function initializeWorkspaceMenu() {
    const menu = document.getElementById('workspaceMenu');
    const menuContent = document.getElementById('workspaceMenuContent');
    const menuButton = document.getElementById('workspaceMenuButton');
    const primaryActions = document.querySelector('.primary-actions');
    const settingsPanel = document.querySelector('.settings-panel');

    if (!menu || !menuContent || !menuButton || !primaryActions || !settingsPanel) return;

    settingsPanel.querySelector('.settings-title')?.remove();
    settingsPanel.classList.add('settings-panel--menu');
    settingsPanel.id = 'workspaceSettings';

    menuContent.appendChild(settingsPanel);

    const toolsSection = document.createElement('section');
    toolsSection.className = 'workspace-menu__section';
    toolsSection.id = 'workspacePlanTools';
    toolsSection.innerHTML = '<h2><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg><span data-ui="continuePlanTools">Continue with plan tools</span></h2><p class="workspace-menu__hint" data-ui="planToolsHint">Upload or scan the same plan, add room names, and run the Vastu check without leaving settings.</p>';
    toolsSection.appendChild(primaryActions);
    menuContent.appendChild(toolsSection);

    const uploadButton = document.getElementById('uploadButton');
    const mobileUploadSection = document.createElement('section');
    mobileUploadSection.className = 'workspace-menu__section workspace-menu__upload';
    mobileUploadSection.setAttribute('aria-label', 'Upload house plan');
    menuContent.prepend(mobileUploadSection);
    const mobileMenuQuery = window.matchMedia('(max-width: 600px)');
    const placeUploadAction = (event) => {
        const isMobile = event.matches;
        if (!uploadButton) return;

        if (isMobile) {
            mobileUploadSection.appendChild(uploadButton);
        } else {
            primaryActions.prepend(uploadButton);
        }
        mobileUploadSection.hidden = !isMobile;
    };
    placeUploadAction(mobileMenuQuery);
    mobileMenuQuery.addEventListener('change', placeUploadAction);

    const setMenuOpen = (isOpen) => {
        menu.hidden = !isOpen;
        menu.setAttribute('aria-hidden', String(!isOpen));
        menuButton.setAttribute('aria-expanded', String(isOpen));
        document.body.classList.toggle('workspace-menu-open', isOpen);
        // Notify canvas-size listeners after switching between the full-width and
        // split workspace so the compass remains centered in its own pane.
        window.dispatchEvent(new Event('resize'));
    };

    window.addEventListener('vastu:open-workspace-controls', (event) => {
        setMenuOpen(true);
        const target = event.detail?.target && document.querySelector(event.detail.target);
        requestAnimationFrame(() => target?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    });

    // Controls are opt-in: keep the compass workspace unobstructed until the
    // user explicitly opens the menu.
    setMenuOpen(false);

    menuButton.addEventListener('click', (event) => {
        event.stopPropagation();
        const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
        setMenuOpen(willOpen);
        if (willOpen) menuContent.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape' || menu.hidden) return;
        setMenuOpen(false);
        menuButton.focus();
    });

    document.getElementById('sidebarContinueBtn')?.addEventListener('click', () => {
        toolsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        toolsSection.querySelector('button, [tabindex], a[href]')?.focus({ preventScroll: true });
    });

    const setupButton = document.querySelector('[data-workspace-action="setup"]');
    const setupOverlay = document.getElementById('setupLanguageOverlay');
    const closeSetup = () => {
        if (!setupOverlay) return;
        setupOverlay.hidden = true;
        setupButton?.setAttribute('aria-expanded', 'false');
    };
    setupButton?.setAttribute('aria-controls', 'setupLanguageOverlay');
    setupButton?.setAttribute('aria-expanded', 'false');
    setupButton?.addEventListener('click', () => {
        if (!setupOverlay) return;
        setupOverlay.hidden = false;
        setupButton.setAttribute('aria-expanded', 'true');
        setupOverlay.querySelector('.language-option')?.focus();
    });
    document.getElementById('closeSetupLanguage')?.addEventListener('click', closeSetup);
    setupOverlay?.addEventListener('click', (event) => {
        if (event.target === setupOverlay) closeSetup();
    });
    setupOverlay?.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeSetup();
            setupButton?.focus();
        }
    });
}

// Text for the persistent workspace chrome. Dialog-specific translations remain
// in the per-language translation files; this map covers every item visible in
// navigation, setup, the empty plan and Plan Settings.
const workspaceUiTranslations = {
    en: ['Setup','Plan Analysis','Report','Controls','WORKSPACE MENU','Always available','Begin your Vastu analysis','Upload a clear floor plan, align North, then scan or add room names.','Upload floor plan','Compass','ORIENTATION','Set North Direction','Align the compass with your floor plan.','Compass angle','Reset','Compass size','Display','Analysis layers','Select all','Sub Vastu zones','Energy grid','Room names','Overlay opacity','Continue to Plan Tools','Your plan is processed securely in your browser.','SETUP','Change language','Continue with plan tools','Upload or scan the same plan, add room names, and run the Vastu check without leaving settings.'],
    hi: ['सेटअप','प्लान विश्लेषण','रिपोर्ट','कंट्रोल','वर्कस्पेस मेनू','हमेशा उपलब्ध','अपना वास्तु विश्लेषण शुरू करें','स्पष्ट फ़्लोर प्लान अपलोड करें, उत्तर दिशा मिलाएँ, फिर स्कैन करें या कमरों के नाम जोड़ें।','फ़्लोर प्लान अपलोड करें','कंपास','दिशा निर्धारण','उत्तर दिशा सेट करें','कंपास को अपने फ़्लोर प्लान के साथ मिलाएँ।','कंपास कोण','रीसेट','कंपास आकार','डिस्प्ले','विश्लेषण परतें','सभी चुनें','उप-वास्तु क्षेत्र','ऊर्जा ग्रिड','कमरों के नाम','ओवरले अपारदर्शिता','प्लान टूल्स पर जाएँ','आपका प्लान आपके ब्राउज़र में सुरक्षित रूप से प्रोसेस होता है।','सेटअप','भाषा बदलें','प्लान टूल्स के साथ जारी रखें','सेटिंग छोड़े बिना प्लान अपलोड या स्कैन करें, कमरों के नाम जोड़ें और वास्तु जाँच चलाएँ।'],
    kn: ['ಸೆಟಪ್','ಪ್ಲಾನ್ ವಿಶ್ಲೇಷಣೆ','ವರದಿ','ನಿಯಂತ್ರಣಗಳು','ವರ್ಕ್‌ಸ್ಪೇಸ್ ಮೆನು','ಯಾವಾಗಲೂ ಲಭ್ಯ','ನಿಮ್ಮ ವಾಸ್ತು ವಿಶ್ಲೇಷಣೆ ಪ್ರಾರಂಭಿಸಿ','ಸ್ಪಷ್ಟ ಫ್ಲೋರ್ ಪ್ಲಾನ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ, ಉತ್ತರವನ್ನು ಹೊಂದಿಸಿ, ನಂತರ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಅಥವಾ ಕೊಠಡಿ ಹೆಸರು ಸೇರಿಸಿ.','ಫ್ಲೋರ್ ಪ್ಲಾನ್ ಅಪ್‌ಲೋಡ್','ದಿಕ್ಸೂಚಿ','ದಿಕ್ಕು ಹೊಂದಾಣಿಕೆ','ಉತ್ತರ ದಿಕ್ಕು ಹೊಂದಿಸಿ','ದಿಕ್ಸೂಚಿಯನ್ನು ನಿಮ್ಮ ಫ್ಲೋರ್ ಪ್ಲಾನ್‌ಗೆ ಹೊಂದಿಸಿ.','ದಿಕ್ಸೂಚಿ ಕೋನ','ಮರುಹೊಂದಿಸಿ','ದಿಕ್ಸೂಚಿ ಗಾತ್ರ','ಪ್ರದರ್ಶನ','ವಿಶ್ಲೇಷಣಾ ಪದರಗಳು','ಎಲ್ಲ ಆಯ್ಕೆ','ಉಪ ವಾಸ್ತು ವಲಯಗಳು','ಶಕ್ತಿ ಜಾಲ','ಕೊಠಡಿ ಹೆಸರುಗಳು','ಓವರ್‌ಲೇ ಅಪಾರದರ್ಶಕತೆ','ಪ್ಲಾನ್ ಪರಿಕರಗಳಿಗೆ ಮುಂದುವರಿಯಿರಿ','ನಿಮ್ಮ ಪ್ಲಾನ್ ಅನ್ನು ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಸುರಕ್ಷಿತವಾಗಿ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುತ್ತದೆ.','ಸೆಟಪ್','ಭಾಷೆ ಬದಲಿಸಿ','ಪ್ಲಾನ್ ಪರಿಕರಗಳೊಂದಿಗೆ ಮುಂದುವರಿಯಿರಿ','ಸೆಟ್ಟಿಂಗ್‌ಗಳಿಂದ ಹೊರಹೋಗದೆ ಪ್ಲಾನ್ ಅಪ್‌ಲೋಡ್ ಅಥವಾ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ, ಹೆಸರು ಸೇರಿಸಿ ಮತ್ತು ವಾಸ್ತು ಪರಿಶೀಲಿಸಿ.'],
    ta: ['அமைப்பு','திட்டப் பகுப்பாய்வு','அறிக்கை','கட்டுப்பாடுகள்','பணியிட மெனு','எப்போதும் கிடைக்கும்','உங்கள் வாஸ்து பகுப்பாய்வைத் தொடங்குங்கள்','தெளிவான தளத் திட்டத்தைப் பதிவேற்றி, வடக்கைச் சீரமைத்து, பின்னர் ஸ்கேன் செய்யவும் அல்லது அறைப் பெயர்களைச் சேர்க்கவும்.','தளத் திட்டத்தைப் பதிவேற்று','திசைகாட்டி','திசை அமைப்பு','வடக்கு திசையை அமைக்கவும்','திசைகாட்டியை உங்கள் தளத் திட்டத்துடன் சீரமைக்கவும்.','திசைகாட்டி கோணம்','மீட்டமை','திசைகாட்டி அளவு','காட்சி','பகுப்பாய்வு அடுக்குகள்','அனைத்தையும் தேர்ந்தெடு','துணை வாஸ்து மண்டலங்கள்','ஆற்றல் கட்டம்','அறைப் பெயர்கள்','மேலடுக்கு ஒளிபுகாமை','திட்டக் கருவிகளுக்குத் தொடரவும்','உங்கள் திட்டம் உலாவியில் பாதுகாப்பாகச் செயலாக்கப்படுகிறது.','அமைப்பு','மொழியை மாற்றவும்','திட்டக் கருவிகளுடன் தொடரவும்','அமைப்புகளை விட்டு வெளியேறாமல் திட்டத்தைப் பதிவேற்றவும் அல்லது ஸ்கேன் செய்யவும், அறைப் பெயர்களைச் சேர்த்து வாஸ்துவைச் சரிபார்க்கவும்.'],
    te: ['సెటప్','ప్లాన్ విశ్లేషణ','నివేదిక','నియంత్రణలు','వర్క్‌స్పేస్ మెను','ఎల్లప్పుడూ అందుబాటులో','మీ వాస్తు విశ్లేషణను ప్రారంభించండి','స్పష్టమైన ఫ్లోర్ ప్లాన్‌ను అప్‌లోడ్ చేసి, ఉత్తరాన్ని అమర్చి, ఆపై స్కాన్ చేయండి లేదా గది పేర్లు జోడించండి.','ఫ్లోర్ ప్లాన్ అప్‌లోడ్','దిక్సూచి','దిశ అమరిక','ఉత్తర దిశను సెట్ చేయండి','దిక్సూచిని మీ ఫ్లోర్ ప్లాన్‌తో అమర్చండి.','దిక్సూచి కోణం','రీసెట్','దిక్సూచి పరిమాణం','ప్రదర్శన','విశ్లేషణ పొరలు','అన్నీ ఎంచుకోండి','ఉప వాస్తు జోన్లు','శక్తి గ్రిడ్','గది పేర్లు','ఓవర్‌లే అస్పష్టత','ప్లాన్ సాధనాలకు కొనసాగండి','మీ ప్లాన్ బ్రౌజర్‌లో సురక్షితంగా ప్రాసెస్ చేయబడుతుంది.','సెటప్','భాష మార్చండి','ప్లాన్ సాధనాలతో కొనసాగండి','సెట్టింగ్‌లను వదలకుండా ప్లాన్‌ను అప్‌లోడ్ లేదా స్కాన్ చేసి, గది పేర్లు జోడించి వాస్తు తనిఖీ చేయండి.'],
    ml: ['സജ്ജീകരണം','പ്ലാൻ വിശകലനം','റിപ്പോർട്ട്','നിയന്ത്രണങ്ങൾ','വർക്ക്‌സ്‌പേസ് മെനു','എപ്പോഴും ലഭ്യം','നിങ്ങളുടെ വാസ്തു വിശകലനം ആരംഭിക്കുക','വ്യക്തമായ ഫ്ലോർ പ്ലാൻ അപ്‌ലോഡ് ചെയ്ത് വടക്ക് ക്രമീകരിക്കുക, തുടർന്ന് സ്കാൻ ചെയ്യുകയോ മുറികളുടെ പേരുകൾ ചേർക്കുകയോ ചെയ്യുക.','ഫ്ലോർ പ്ലാൻ അപ്‌ലോഡ്','കോമ്പസ്','ദിശ ക്രമീകരണം','വടക്ക് ദിശ സജ്ജമാക്കുക','കോമ്പസ് നിങ്ങളുടെ ഫ്ലോർ പ്ലാനുമായി ക്രമീകരിക്കുക.','കോമ്പസ് കോൺ','പുനഃസജ്ജമാക്കുക','കോമ്പസ് വലുപ്പം','പ്രദർശനം','വിശകലന പാളികൾ','എല്ലാം തിരഞ്ഞെടുക്കുക','ഉപ വാസ്തു മേഖലകൾ','ഊർജ ഗ്രിഡ്','മുറികളുടെ പേരുകൾ','ഓവർലേ അതാര്യത','പ്ലാൻ ഉപകരണങ്ങളിലേക്ക് തുടരുക','നിങ്ങളുടെ പ്ലാൻ ബ്രൗസറിൽ സുരക്ഷിതമായി പ്രോസസ്സ് ചെയ്യുന്നു.','സജ്ജീകരണം','ഭാഷ മാറ്റുക','പ്ലാൻ ഉപകരണങ്ങളുമായി തുടരുക','ക്രമീകരണങ്ങൾ വിടാതെ പ്ലാൻ അപ്‌ലോഡ് അല്ലെങ്കിൽ സ്കാൻ ചെയ്ത് മുറിപ്പേരുകൾ ചേർത്ത് വാസ്തു പരിശോധിക്കുക.']
};

const workspaceUiKeys = ['setup','planAnalysis','report','controls','workspaceMenu','alwaysAvailable','emptyTitle','emptyHint','uploadFloorPlan','compass','orientation','setNorth','alignCompass','compassAngle','reset','compassSize','display','analysisLayers','selectAll','subZones','energyGrid','roomNames','overlayOpacity','continuePlanToolsButton','privacy','setupEyebrow','changeLanguage','continuePlanTools','planToolsHint'];
Object.keys(workspaceUiTranslations).forEach((lang) => {
    workspaceUiTranslations[lang] = Object.fromEntries(workspaceUiKeys.map((key, index) => [key, workspaceUiTranslations[lang][index]]));
});

function isKannadaSpeechFallbackActive(lang = currentLanguage) {
    return lang === 'kn' && kannadaSpeechFallbackActive;
}

function addPressListener(element, handler) {
    if (!element || typeof handler !== 'function') return;

    let lastTouchTime = 0;

    const touchHandler = (event) => {
        lastTouchTime = Date.now();
        if (event.target && event.target.closest('a[href]')) {
            // Allow native navigation for links
            return;
        }
        event.preventDefault();
        handler(event);
    };

    const clickHandler = (event) => {
        if (Date.now() - lastTouchTime < 400) return;
        handler(event);
    };

    element.addEventListener('click', clickHandler);
    element.addEventListener('touchstart', touchHandler, { passive: false });
}

const HINDI_FONT_FAMILY = 'Noto Sans Devanagari';
const HINDI_FONT_URL = 'https://cdn.jsdelivr.net/gh/googlefonts/noto-fonts@main/hinted/ttf/NotoSansDevanagari/NotoSansDevanagari-Regular.ttf';
const MULTILINGUAL_CANVAS_LANGUAGES = new Set(['hi', 'kn', 'ta', 'te', 'ml']);
const compassDirections = [
    'North',
    'Northeast',
    'East',
    'Southeast',
    'South',
    'Southwest',
    'West',
    'Northwest'
];

const GUIDE_ICON_URLS = {
    active: 'https://static.wixstatic.com/shapes/602ad4_5d0c8c4201374df7b731b67a7bb298a3.svg',
    disabled: 'https://static.wixstatic.com/shapes/602ad4_078d783cf1824b19804985300cffefc1.svg'
};

const compassDirectionTokens = new Set([
    'north', 'south', 'east', 'west',
    'northeast', 'northwest', 'southeast', 'southwest',
    'n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw'
]);

const hindiTranslations = window.hindiTranslations || {};
const kannadaTranslations = window.kannadaTranslations || {};
const tamilTranslations = window.tamilTranslations || {};
const teluguTranslations = window.teluguTranslations || {};
const malayalamTranslations = window.malayalamTranslations || {};

const directionTranslations = {
    en: {
        north: 'North',
        east: 'East',
        west: 'West',
        south: 'South',
        northeast: 'Northeast',
        northwest: 'Northwest',
        southeast: 'Southeast',
        southwest: 'Southwest',
        center: 'Center',
        varies: 'Varies',
        'as needed': 'As needed',
        'keep empty': 'Keep empty',
        'east should be lower': 'East should be lower'
    },
    hi: hindiTranslations.directionLabels || {},
    kn: kannadaTranslations.directionLabels || {},
    ta: tamilTranslations.directionLabels || {},
    te: teluguTranslations.directionLabels || {},
    ml: malayalamTranslations.directionLabels || {}
};

const translations = {
    en: {
        speechLang: 'en-US',
        labels: {
            uploadButton: 'Upload',
            addName: 'Add Name',
            addNameShort: 'T',
            scan: 'Scan Text',
            scanShort: 'Scan',
            advancedScan: 'Advanced Scan',
            advancedAnalysis: 'Advanced',
            validate: 'Check Vastu',
            validateShort: 'Check',
            uploadPopupTitle: 'Upload House Plan',
            selectImageLabel: 'Select Image:',
            northDirectionLabel: 'Property Facing:',
            floorFeatureLabel: 'This floor has a kitchen and a Main door',
            floorFeatureDropdownLabel: 'Select Yes or No:',
            cancel: 'Cancel',
            uploadConfirm: 'Start',
            pdfToImageButton: 'Convert PDF to Image',
            pdfPopupTitle: 'Pdf to Image',
            pdfUploadLabel: 'Upload PDF:',
            pdfConvertButton: 'Convert Image',
            pdfCloseButton: 'Close',
            pdfPageLabel: 'Page',
            pdfDownloadLabel: 'Download',
            zoomIn: 'Zoom in',
            zoomOut: 'Zoom out',
            resetZoom: 'Reset zoom',
            fullscreen: 'Fullscreen',
            guideToggle: 'Toggle spoken guide',
            addRoomTitle: 'Add Room Name',
            addRoomPlaceholder: 'Enter room name (e.g., Kitchen, Bedroom)',
            add: 'Add',
            editRoomTitle: 'Edit Room Name',
            editRoomPlaceholder: 'Edit room name',
            save: 'Save',
            manualAnnotationTitle: 'Add Room Names Manually',
            manualAnnotationBody: "We couldn't confidently identify all room names. Would you like to add them manually? Existing detected labels will stay in place.",
            manualAnnotationConfirm: 'Add Room Names',
            manualAnnotationCancel: 'Maybe Later',
            validationTitle: 'Vastu Validation Results',
            close: 'Close',
            downloadPdf: 'Download PDF',
            scanningTitle: 'Scanning Text...',
            ocrStatus: 'Initializing OCR engine...',
            ocrAlertTitle: '2D Plan Scan Preparation',
            ocrAlertBody: 'Before starting scan, please ensure:<br><br>1. The plan image is set to full size<br>2. The image is enlarged and fits with the container<br>3. All text is clearly visible and readable<br><br>This will ensure the best Vastu results.',
            ocrAlertCancel: 'Cancel',
            ocrAlertScan: 'Scan Now',
            messageTitle: 'Notice',
            messageDismiss: 'OK',
            generalVastuTips: 'General Vastu Tips',
            disclaimerTitle: 'Disclaimer:'
        },
        options: {
            north: 'North',
            east: 'East',
            west: 'West',
            south: 'South',
            yes: 'Yes',
            no: 'No'
        },
        messages: {
            uploadInstruction: [
                'Upload your house plan. Make sure to upload only one floor image; do not upload multiple Floor plan images.',
                'Next, select your plan facing: North, East, West, or South.',
                '- If the floor plan has a kitchen and main door, select Yes; otherwise select No.',
                'Finally, press the Upload button.'
            ].join(' '),
            scanStatus: 'Your plan is scanning, please wait.',
            noTextDetected: 'In your house plan, no text was detected. Please manually add the room names and place them according to the directions.',
            scanCompletionReminder: 'Check that the names of the rooms are adjusted properly. If not, add the missing names manually or remove any incorrect ones manually. Also, ensure that the names of the rooms are placed outside the circle to provide accurate results. Additionally, select the text using your mouse pointer, or on mobile, use your finger to drag and move in the correct direction, then release to align the text.',
            controlButtonsGuide: 'Controls: Zoom in to enlarge the plan, Zoom out to see a wider view, use the direction arrows to move the plan, and Reset to return everything to default. Highlight the buttons to have this guide spoken aloud.',
            floorHasKitchen: 'This floor has a kitchen and a Main door.',
            floorIsDuplex: 'This is a duplex house with continuous floors.',
            noRemedies: 'No remedies available for this item.',
            alerts: {
                uploadRequiredTitle: 'Upload required',
                selectFileFirst: 'Please select a file first',
                selectPdfFirst: 'Please select a PDF file first',
                invalidFileTitle: 'Invalid file',
                invalidImageFile: 'Please upload an image file (JPEG, PNG)',
                invalidPdfFile: 'Please upload a PDF file',
                readErrorTitle: 'Read error',
                readError: 'Error reading file. Please try again.',
                annotationInvalidTitle: 'Invalid annotation',
                annotationNoNumbers: 'Annotations cannot contain numbers. Please enter a valid room name.',
                uploadPlanFirst: 'Please upload a house plan first',
                pdfUnavailableTitle: 'PDF unavailable',
                pdfLibraryMissing: 'PDF generation library not loaded. Please try again.',
                pdfConversionLibraryMissing: 'PDF conversion library not loaded. Please try again.',
                pdfErrorTitle: 'PDF error',
                pdfErrorPrefix: 'Error generating PDF: '
            },
            pdfDisclaimerLines: [
                '1. This report is generated automatically and should be used for reference only.',
                '2. For accurate Vastu analysis, please consult a qualified Vastu expert.',
                '3. The suggestions provided are general remedies and may not suit every situation.',
                '4. The accuracy of room directions depends on proper north alignment of your plan.',
                '5. Results are based on standard Vastu principles and may vary case by case.'
            ]
        }
    },
    hi: hindiTranslations.languageStrings || {},
    kn: kannadaTranslations.languageStrings || {},
    ta: tamilTranslations.languageStrings || {},
    te: teluguTranslations.languageStrings || {},
    ml: malayalamTranslations.languageStrings || {}
};

const languageOptionLabels = {
    en: 'English',
    hi: hindiTranslations.languageOptionLabel || 'Hindi',
    kn: kannadaTranslations.languageOptionLabel || 'Kannada',
    ta: tamilTranslations.languageOptionLabel || 'Tamil',
    te: teluguTranslations.languageOptionLabel || 'Telugu',
    ml: malayalamTranslations.languageOptionLabel || 'Malayalam'
};

function getDirectionLabel(direction, lang = currentLanguage) {
    if (!direction) return '';
    const key = direction.toString().trim().toLowerCase();
    const languageMap = directionTranslations[lang] || {};
    return languageMap[key] || directionTranslations.en[key] || direction;
}

const validationMessages = {
    en: {
        noRecognizedRooms: 'No recognized room names found. Please use standard room names like Kitchen, Bedroom, etc.',
        generalLocation: (name, direction) => `${name} is located in the <span class="correct-value">${direction}</span>`,
        correctPlacement: (name, direction, ideal) => `${name} is properly located in the <span class="correct-value">${direction}</span> (ideal is ${ideal})`,
        incorrectPlacement: (name, direction, ideal) => `${name} is in the <span class="incorrect-value">${direction}</span>. Should be in <span class="correct-value">${ideal}</span> for proper Vastu.`,
        noResults: 'No results found. Please add the room name and check again.',
        centerOpen: '✅ Center (Brahmasthan) is open and blank as per Vastu. This is ideal.',
        centerOccupied: '⚠️ Center (Brahmasthan) should be kept open and blank as per Vastu – do not place rooms or elements here.',
        guestBedroom: 'Guest Bedroom is properly located in the <span class="correct-value">South-East</span>'
    },
    hi: hindiTranslations.validationMessages || {},
    kn: kannadaTranslations.validationMessages || {},
    ta: tamilTranslations.validationMessages || {},
    te: teluguTranslations.validationMessages || {},
    ml: malayalamTranslations.validationMessages || {}
};

function getValidationMessages(lang = currentLanguage) {
    return validationMessages[lang] || validationMessages.en;
}

function getCurrentStrings(lang = currentLanguage) {
    return translations[lang] || translations.en;
}

function getCurrentSpeechStrings(lang = currentLanguage) {
    return getCurrentStrings(lang);
}

const defaultSpeechStrings = {
    summary: (correctCount, issuesCount) => `Vastu check complete. ${correctCount} items look good and ${issuesCount} need attention.`,
    attentionPrefix: 'Need attention: ',
    correctPrefix: 'Correct: ',
    reminderInstruction: 'Download the PDF file for Vastu reminders, and click on the incorrect Vastu to listen.',
    nextWord: 'next'
};

function getSpeechStrings(lang = currentLanguage) {
    const speechMaps = {
        hi: hindiTranslations.speech || {},
        kn: kannadaTranslations.speech || {},
        te: teluguTranslations.speech || {},
        ta: tamilTranslations.speech || {},
        ml: malayalamTranslations.speech || {}
    };

    const overrides = speechMaps[lang] || {};

    return {
        summary: typeof overrides.summary === 'function' ? overrides.summary : defaultSpeechStrings.summary,
        attentionPrefix: overrides.attentionPrefix || defaultSpeechStrings.attentionPrefix,
        correctPrefix: overrides.correctPrefix || defaultSpeechStrings.correctPrefix,
        reminderInstruction: overrides.reminderInstruction || defaultSpeechStrings.reminderInstruction,
        nextWord: overrides.nextWord || defaultSpeechStrings.nextWord
    };
}

function getLocalizedVastuRemedies(roomName, direction, lang = currentLanguage) {
    const localizedRemedyFns = {
        hi: window.getHindiVastuRemedies,
        kn: window.getKannadaVastuRemedies,
        te: window.getTeluguVastuRemedies,
        ta: window.getTamilVastuRemedies,
        ml: window.getMalayalamVastuRemedies
    };

    const remedyFn = localizedRemedyFns[lang] || window.getVastuRemedies;
    return typeof remedyFn === 'function' ? remedyFn(roomName, direction) : [];
}

function getLocalizedGeneralVastuRemedies(lang = currentLanguage) {
    const localizedGeneralRemedies = {
        hi: window.hindiGeneralVastuRemedies,
        kn: window.kannadageneralVastuRemedies,
        te: window.telugugeneralVastuRemedies,
        ta: window.tamilGeneralVastuRemedies,
        ml: window.malayalamGeneralVastuRemedies
    };

    const localizedRemedies = localizedGeneralRemedies[lang];
    if (Array.isArray(localizedRemedies)) {
        return localizedRemedies;
    }

    return Array.isArray(window.generalVastuRemedies) ? window.generalVastuRemedies : [];
}

const vastuDirectionDefaults = {
    'North (N)': [
        'Study Room',
        'Home Office',
        'Library',
        'Living Lounge',
        'Family Living',
        'Balcony'
    ],
    'North-East (NE)': [
        'Pooja Room',
        'Meditation Room',
        'Prayer / Reading Room',
        'Study Room',
        'Open Sit-out'
    ],
    'East (E)': [
        'Living Room',
        'Family Living',
        'Study Room',
        'Home Office',
        'Balcony'
    ],
    'South-East (SE)': [
        'Guest Bedroom',
        'Children Bedroom',
        'Study Room',
        'Home Office',
        'Gym',
        'Hobby Room'
    ],
    'South (S)': [
        'Bedroom',
        'Store Room',
        'Staircase',
        'Utility Room',
        'Wardrobe Room'
    ],
    'South-West (SW)': [
        'Master Bedroom',
        'Parents Bedroom',
        'Bedroom',
        'Dressing Room',
        'Walk-in Wardrobe',
        'Store Room'
    ],
    'West (W)': [
        'Children Bedroom',
        'Bedroom',
        'Study Room',
        'Home Office',
        'Toilet / Bathroom'
    ],
    'North-West (NW)': [
        'Guest Bedroom',
        'Children Bedroom',
        'Servant Room',
        'Toilet / Bathroom',
        'Laundry Room'
    ],
    'Center (Brahmasthan)': [
        'Family Lounge',
        'Stair Lobby',
        'Passage',
        'Home Theatre'
    ]
};

let activeSpeechUtterance = null;
let lastUploadGuideLanguage = null;
let controlGuideSpokenLanguages = new Set();
let speechSegmentTimeout = null;
let activeSpeechCategory = null;

window.languageGuideController = {
    isMuted: () => isGuideMuted,
    stop: stopSpeech
};

function updateGuideToggleUi() {
    const toggle = document.getElementById('guideToggle');
    const icon = document.getElementById('guideToggleIcon');

    if (!toggle || !icon) return;

    icon.src = isGuideMuted ? GUIDE_ICON_URLS.disabled : GUIDE_ICON_URLS.active;
    toggle.setAttribute('aria-pressed', String(!isGuideMuted));
    toggle.setAttribute('title', isGuideMuted ? 'Enable guide voice' : 'Disable guide voice');
}

function setGuideMuted(muted) {
    isGuideMuted = Boolean(muted);
    updateGuideToggleUi();

    if (isGuideMuted) {
        stopLanguageGuideSpeech();
        stopSpeech();
    }
}

function toggleGuideMuted() {
    setGuideMuted(!isGuideMuted);
}

function initializeGuideToggle() {
    updateGuideToggleUi();
}

function initializeCompassViewToggle() {
    const toggle = document.getElementById('compassViewToggle');
    const overlay = document.querySelector('.compass-overlay');
    if (!toggle || !overlay) return;

    const label = toggle.querySelector('span');

    const views = ['image', 'standard', '16-zone'];
    const nextViewLabels = {
        image: 'Standard compass',
        standard: '16 Zone',
        '16-zone': 'Image compass'
    };

    const setCompassView = (view) => {
        const selectedView = views.includes(view) ? view : 'image';
        overlay.classList.toggle('compass-overlay--image', selectedView === 'image');
        overlay.classList.toggle('compass-overlay--16-zone', selectedView === '16-zone');
        overlay.dataset.compassView = selectedView;
        const nextLabel = nextViewLabels[selectedView];
        toggle.setAttribute('aria-label', `Show ${nextLabel}`);
        toggle.setAttribute('title', `Show ${nextLabel}`);
        if (label) label.textContent = nextLabel;
        window.dispatchEvent(new CustomEvent('vastu:compass-view-changed', {
            detail: { view: selectedView, showImageCompass: selectedView === 'image' }
        }));
    };

    initializeSixteenZoneCompass();
    setCompassView(overlay.classList.contains('compass-overlay--image') ? 'image' : 'standard');
    toggle.addEventListener('click', () => {
        const currentIndex = views.indexOf(overlay.dataset.compassView);
        setCompassView(views[(currentIndex + 1) % views.length]);
    });
}

function initializeSixteenZoneCompass() {
    const compass = document.getElementById('sixteenZoneCompass');
    if (!compass || compass.childElementCount) return;

    const zones = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const colors = ['#58b89f', '#7acdb2', '#fade5b', '#f1d266', '#71c4e5', '#f4a965', '#ee7c4d', '#e36752', '#dc5b66', '#bf6384', '#916ab8', '#7570bb', '#5989cf', '#55a0be', '#64ae89', '#53a691'];
    const point = (radius, angle) => {
        const radians = (angle - 90) * Math.PI / 180;
        return `${50 + radius * Math.cos(radians)},${50 + radius * Math.sin(radians)}`;
    };

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('role', 'group');
    svg.setAttribute('aria-label', '16 Vastu direction zones');

    zones.forEach((name, index) => {
        const centerAngle = index * 22.5;
        const group = document.createElementNS(svg.namespaceURI, 'g');
        group.classList.add('sixteen-zone');
        group.dataset.zone = name;
        group.setAttribute('role', 'button');
        group.setAttribute('tabindex', '0');
        group.setAttribute('aria-label', `${name} zone`);
        group.setAttribute('aria-pressed', 'false');

        const sector = document.createElementNS(svg.namespaceURI, 'path');
        sector.setAttribute('d', `M 50,50 L ${point(49, centerAngle - 11.25)} A 49,49 0 0,1 ${point(49, centerAngle + 11.25)} Z`);
        sector.style.setProperty('--zone-color', colors[index]);
        const text = document.createElementNS(svg.namespaceURI, 'text');
        const [x, y] = point(39, centerAngle).split(',');
        text.setAttribute('x', x);
        text.setAttribute('y', y);
        text.textContent = name;
        group.append(sector, text);

        const selectZone = () => {
            svg.querySelectorAll('.sixteen-zone').forEach(zone => {
                const isSelected = zone === group;
                zone.classList.toggle('is-selected', isSelected);
                zone.setAttribute('aria-pressed', String(isSelected));
            });
        };
        group.addEventListener('click', selectZone);
        group.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                selectZone();
            }
        });
        svg.appendChild(group);
    });

    compass.appendChild(svg);
}

function shouldAllowSpeech() {
    const controller = window.languageGuideController;

    if (controller?.isMuted && controller.isMuted()) {
        return false;
    }

    return true;
}

function updateCompassCircleSize() {
    const overlay = document.querySelector('.compass-overlay');
    const circle = overlay ? overlay.querySelector('.compass-circle') : null;
    const rangeWheel = overlay ? overlay.querySelector('.compass-range-wheel') : null;

    if (!overlay || !circle || !rangeWheel) return;

    const { width, height } = overlay.getBoundingClientRect();
    let fittedWidth = width;
    let fittedHeight = height;

    // Match the compass to the visible, object-fit: contain plan rather than
    // to empty letterbox space around a wide or tall uploaded image.
    if (imageElement?.naturalWidth && imageElement?.naturalHeight && width > 0 && height > 0) {
        const normalizedRotation = ((currentRotation % 360) + 360) % 360;
        const swapsSides = normalizedRotation === 90 || normalizedRotation === 270;
        const planWidth = swapsSides ? imageElement.naturalHeight : imageElement.naturalWidth;
        const planHeight = swapsSides ? imageElement.naturalWidth : imageElement.naturalHeight;
        const fitScale = Math.min(width / planWidth, height / planHeight);
        fittedWidth = planWidth * fitScale;
        fittedHeight = planHeight * fitScale;
    }

    // At 100% the circle reaches the nearest edge of the visible plan. Larger
    // values intentionally cross that boundary; 300% spans three times the
    // fitted diameter on both desktop and mobile.
    const calculatedSize = Math.min(fittedWidth, fittedHeight);
    const sizeScale = Math.min(300, Math.max(25, compassSizePercent)) / 100;
    const targetSize = calculatedSize * sizeScale;

    circle.style.width = `${targetSize}px`;
    circle.style.height = `${targetSize}px`;
    circle.style.borderRadius = '50%';
    rangeWheel.style.width = `${targetSize}px`;
    rangeWheel.style.height = `${targetSize}px`;
    rangeWheel.style.borderRadius = '50%';
    overlay.style.setProperty('--compass-size', `${targetSize}px`);
    overlay.style.setProperty('--compass-radius', `${targetSize / 2}px`);
    const directionSample = overlay.querySelector('.direction');
    const isMobile = window.matchMedia('(max-width: 900px)').matches;
    if (directionSample && isMobile) {
        const directionStyles = window.getComputedStyle(directionSample);
        const labelSize = parseFloat(directionStyles.width) || 0;
        if (labelSize > 0) {
            const margin = Math.max(6, labelSize * 0.12);
            const offset = Math.max(0, (targetSize / 2) - (labelSize / 2) - margin);
            overlay.style.setProperty('--compass-offset', `${offset}px`);
            overlay.style.setProperty('--compass-diagonal-offset', `${offset * 0.7071}px`);
        }
    } else {
        overlay.style.removeProperty('--compass-offset');
        overlay.style.removeProperty('--compass-diagonal-offset');
    }
}

const compassRotationByDirection = {
    north: 0,
    east: 270,
    south: 180,
    west: 90
};

// Turn the uploaded drawing so the selected north side is at the top before
// the user starts measuring it. Keep this separate from the compass artwork's
// rotation because that image has its own intrinsic orientation.
const planRotationByDirection = {
    north: 0,
    east: 0,
    south: 0,
    west: 0
};

function getPlanRotation(direction) {
    return planRotationByDirection[String(direction || 'north').toLowerCase()] ?? 0;
}

function updateCompassRotation(direction) {
    const normalizedDirection = String(direction || 'north').toLowerCase();
    const rotation = compassRotationByDirection[normalizedDirection] ?? 0;

    setCompassRotation(rotation, { syncControl: true });
}

function setCompassRotation(rotation, options = {}) {
    const rotator = document.querySelector('.compass-rotator');
    const normalizedRotation = ((Number(rotation) % 360) + 360) % 360;

    currentCompassRotation = normalizedRotation;

    // Keep the orientation controls in sync with the direction chosen in the
    // upload dialog. This prevents the settings panel from continuing to show
    // 0° after (for example) a west-facing plan has rotated the compass.
    const angle = Math.round(normalizedRotation);
    const angleRange = document.getElementById('compassAngleRange');
    const angleOutput = angleRange?.closest('.setting-group')?.querySelector('output');
    if (angleRange && options.syncControl) angleRange.value = String(angle);
    if (angleOutput) angleOutput.textContent = `${angle}°`;

    if (!rotator) return;
    rotator.style.setProperty('--compass-rotation', `${normalizedRotation}deg`);
    rotator.style.setProperty('--compass-label-rotation', `${-normalizedRotation}deg`);
    updateAllAnnotationDirections();
}


function triggerCompassSpin(onComplete, options = {}) {
    const rotator = document.querySelector('.compass-rotator');
    if (!rotator) {
        if (typeof onComplete === 'function') onComplete();
        return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        if (typeof onComplete === 'function') onComplete();
        return;
    }

    if (options.durationMs) {
        rotator.style.setProperty('--compass-spin-duration', `${options.durationMs}ms`);
    } else {
        rotator.style.removeProperty('--compass-spin-duration');
    }

    const handleAnimationEnd = () => {
        rotator.classList.remove('is-spinning');
        if (typeof onComplete === 'function') onComplete();
    };

    rotator.classList.remove('is-spinning');
    void rotator.offsetWidth;
    rotator.addEventListener('animationend', handleAnimationEnd, { once: true });
    rotator.classList.add('is-spinning');
}

function ensureCompassDirectionNotes() {
    const overlay = document.querySelector('.compass-overlay');
    if (!overlay) return;

    compassDirections.forEach(direction => {
        const existingNote = overlay.querySelector(`.compass-note[data-direction="${direction}"]`);
        if (existingNote) return;

        const note = document.createElement('div');
        note.className = `compass-note ${direction.toLowerCase()}`;
        note.dataset.direction = direction;
        overlay.appendChild(note);
    });

    updateCompassDirectionNotes();
}

function updateCompassDirectionNotes() {
    const overlay = document.querySelector('.compass-overlay');
    if (!overlay) return;

    compassDirections.forEach(direction => {
        const noteEl = overlay.querySelector(`.compass-note[data-direction="${direction}"]`);
        if (!noteEl) return;
        // The compass overlay should no longer mirror nearby annotation text.
        // Keep the note elements hidden so that only the user-placed annotation
        // labels remain visible on the plan.
        noteEl.textContent = '';
        noteEl.style.display = 'none';
    });
}

// Room names database
const combinedRoomNames = [
    // Living Areas
    'living room', 'drawing room', 'dining room', 'family lounge', 'reception area',
    'multipurpose room', 'foyer', 'entrance lobby', 'passage', 'corridor',
    'common area', 'guest lounge', 'sabha hall', 'den', 'living hall',
    'baithak', 'sitting room', 'hall', 'bhajan kaksh', 'entertainment lounge',
    'tv room', 'recreation room', 'family room', 'media room', 'cinema room',
    'home theater', 'game room', 'billiards room', 'indoor games', 'waiting room',
    'pratiksha kaksh', 'entertainment room', 'reception', 'guest area',

    // Bedrooms
    'master bedroom', 'guest bedroom', 'children bedroom', 'parents bedroom',
    'twin bedroom', 'boys room', 'girls room', 'nursery', 'elders room',
    'bed room', 'bedroom', 'shayya kaksh', 'sutra kaksh', 'main bedroom',
    'bal kaksh', 'kids room', 'atithi kaksh', 'visitor room', 'infant room',
    'baby room', 'shishu kaksh', 'servant room', 'domestic help room',
    'naukar room', 'sevak kaksh', 'paying guest room',

    // Kitchen & Dining
    'kitchen', 'rasoi', 'bawarchi khana', 'cooking area', 'modular kitchen',
    'dry kitchen', 'wet kitchen', 'dining room', 'eating area', 'food area',
    'dining hall', 'pantry', 'store', 'provision room', 'ration storage',
    'utility area', 'service area', 'laundry room', 'washing area',
    'dhobi ghat', 'clothes washing', 'bbq area', 'outdoor kitchen',
    'rasoi bahar', 'barbecue area',

    // Bathrooms & Utility
    'bathroom', 'toilet', 'bath room', 'washroom', 'shower', 'sauna',
    'steam room', 'snana griha', 'shauchalay', 'powder room',
    'guest toilet', 'common bathroom', 'sadharan shauchalay', 'jacuzzi',
    'hot tub', 'spa', 'whirlpool', 'utility room', 'service room',

    // Prayer & Meditation
    'pooja room', 'puja room', 'temple', 'mandir', 'puja ghar',
    'worship room', 'prayer room', 'devagriha', 'poojalaya',
    'meditation room', 'dhyan kaksh', 'yoga room', 'meditation hall',
    'yogashala', 'kunda', 'sacred fire', 'hawan kund', 'yagya sthal',

    // Study & Work
    'study room', 'library', 'reading room', 'path kaksh', 'office',
    'home office', 'gyan kaksh', 'reading nook', 'pustakalay',
    'work from home', 'corner office', 'karyalay', 'art studio',
    'craft room', 'hobby room', 'kala kaksh', 'music room',
    'dance room', 'sangeet kaksh', 'nritya kaksh',

    // Storage & Closets
    'store room', 'storage', 'godown', 'bhandara griha', 'storage area',
    'wardrobe', 'almirah', 'cupboard', 'storage cabinet', 'dresser',
    'walk-in closet', 'dressing area', 'dressing room', 'kapda ghar',
    'walk in closet', 'Walk-in Wardrobe',

    // Outdoor Areas
    'balcony', 'veranda', 'porch', 'baramda', 'sitout', 'open area',
    'terrace', 'roof', 'chhat', 'upar ka chhat', 'garden', 'lawn',
    'bagicha', 'green area', 'plants area', 'patio', 'deck',
    'outdoor seating', 'bahari baithak', 'gazebo', 'pergola',
    'shade structure', 'chhaya griha', 'swimming pool', 'pool',
    'talarav', 'swimming area', 'fire pit', 'bonfire area',
    'agni kund', 'campfire area', 'sun room', 'solarium',
    'sun porch', 'surya kaksh',

    // Structural Elements
    'staircase', 'seedhiyan', 'stairs', 'stairway', 'steps', 'elevator', 'lift',
    'columns', 'pillars', 'beams', 'structural support', 'stambh',
    'load bearing wall', 'structural wall', 'support wall',
    'bhojya deewar', 'partition wall', 'divider', 'separation wall',
    'vibhajak deewar', 'archway', 'open arch', 'decorative arch',
    'mehraab', 'chowk', 'courtyard', 'angan', 'inner courtyard',
    'jali', 'lattice', 'decorative screen', 'jaali work',
    'vedika', 'platform', 'raised area', 'uchch sthan',

    // Entry & Circulation
    'main door', 'entrance', 'main entrance', 'pradhan dwar',
    'entry door', 'mukhya dwar', 'mud room', 'entryway', 'foyer',
    'entrance lobby', 'pravesh kaksh', 'French doors', 'sliding doors',
    'patio doors', 'dwar patti', 'passage', 'corridor', 'hallway',

    // Service Areas
    'garage', 'car parking', 'vehicle shed', 'gaadi ghar',
    'basement', 'tala griha', 'underground room', 'meter room',
    'utility closet', 'service closet', 'seva kaksh',
    'electrical panel', 'fuse box', 'circuit breaker', 'bijli board',
    'plumbing chase', 'pipe space', 'water lines area', 'nali sthan',
    'HVAC room', 'ac plant room', 'heating cooling', 'tapun shital',
    'server room', 'network closet', 'smart home hub', 'tantra kaksh',
    'charging station', 'electronics area', 'gadget zone',
    'home automation', 'control panel', 'smart control',

    // Vastu Specific
    'brahmasthan', 'center', 'central area', 'madhya sthan',
    'vastu tips', 'remedies', 'corrections', 'upay',
    'pyramid placement', 'crystal area', 'yantra sthan',
    'salt bowl', 'negative energy', 'remedy area',
    'water source', 'well', 'borewell', 'water tank', 'jal strot',
    'septic tank', 'soak pit', 'waste disposal', 'mal nikal',
    'compound wall', 'boundary wall', 'chardiwar', 'fence',
    'electric meter', 'meter room', 'bijli meter',
    'inverter', 'generator', 'power backup', 'ups room',
    'overhead tank', 'water tank', 'sinchai tank', 'pani ka tank',
    'fireplace', 'heater', 'agni sthan', 'heating area',
    'cash locker', 'safe', 'money storage', 'dhan rakha',
    'Kuber Yantra',

    // Special Purpose
    'panic room', 'safe room', 'security room', 'suraksha kaksh',
    'green house', 'plant room', 'nursery garden', 'paudha griha',
    'wine cellar', 'bar', 'wine storage', 'madira griha',
    'play room', 'kids play area', 'children activity room', 'khel kaksh',
    'gym', 'exercise room', 'workout area', 'fitness room', 'vyayam kaksh',
    'skylight', 'roof window', 'natural light', 'chhat roshni',
    'bay window', 'projected window', 'jharokha', 'window seat'
];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Ensure elements exist before setting up event listeners
    if (!imageElement) imageElement = document.getElementById('housePlan');
    if (!container) container = document.getElementById('planContainer');
    if (!annotationContainer) annotationContainer = document.getElementById('annotationContainer');

    createStars();
    setupEventListeners();
    setupDragAndDrop();
    initializeGuideToggle();
    initializeCompassViewToggle();

    relocateToolbarForViewport();

    applyLanguageText(currentLanguage);

    updateCompassCircleSize();
    ensureCompassDirectionNotes();

    // Debounced resize listener for stability during zoom
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            relocateToolbarForViewport();
            updateCompassCircleSize();
        }, 150);
    });

    maybeShowBrowserNotice();
});

// Create stars background
    function createStars() {
        const starsContainer = document.querySelector('.stars');
        const starCount = isMobileDevice() ? 50 : 150;
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.width = `${Math.random() * 3}px`;
            star.style.height = star.style.width;
            star.style.animationDelay = `${Math.random() * 5}s`;
            starsContainer.appendChild(star);
        }
    }
    document.addEventListener('DOMContentLoaded', createStars);

// Mobile device detection
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function isTvDevice() {
    return /smart[-\s]?tv|appletv|hbbtv|netcast|viera|aquos|dtv|googletv|web0s|tizen/i.test(navigator.userAgent);
}

function isDesktopOrTv() {
    return isTvDevice() || !isMobileDevice();
}

function isEdgeBrowser() {
    return /\bEdg(e|A|IOS)?\//i.test(navigator.userAgent) || navigator.userAgent.includes('Edge');
}

function isSupportedDesktopBrowser() {
    const ua = navigator.userAgent;
    const isFirefox = /Firefox/i.test(ua);
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
    const isChromium = /Chrome/i.test(ua) && !/OPR|Vivaldi|Brave|YaBrowser/i.test(ua);

    return !isEdgeBrowser() && (isChromium || isFirefox || isSafari);
}

function maybeShowBrowserNotice(lang = currentLanguage) {
    const notice = document.getElementById('browserNotice');
    if (!notice) return;

    if (browserNoticeHideTimeout) {
        clearTimeout(browserNoticeHideTimeout);
        browserNoticeHideTimeout = null;
    }

    if (browserNoticeFadeTimeout) {
        clearTimeout(browserNoticeFadeTimeout);
        browserNoticeFadeTimeout = null;
    }

    if (!isDesktopOrTv() || !isSupportedDesktopBrowser() || lang === 'en' || lang === 'hi') {
        notice.classList.remove('browser-notice--visible', 'browser-notice--fade');
        return;
    }

    notice.textContent = 'Your language may not be supported. Use Microsoft Edge for the best experience.';
    notice.classList.remove('browser-notice--fade');
    notice.classList.add('browser-notice--visible');

    browserNoticeHideTimeout = setTimeout(() => {
        notice.classList.add('browser-notice--fade');
        browserNoticeFadeTimeout = setTimeout(() => {
            notice.classList.remove('browser-notice--visible', 'browser-notice--fade');
            browserNoticeFadeTimeout = null;
        }, 500);
    }, 9000);
}

function relocateToolbarForViewport() {
    const toolbar = document.getElementById('controlToolbar');
    const desktopSlot = document.getElementById('toolbarDesktopSlot');
    const mobileSlot = document.getElementById('toolbarMobileSlot');
    const planContainer = document.getElementById('planContainer');

    if (!toolbar || !desktopSlot || !mobileSlot || !planContainer) return;
    if (toolbar.closest('#workspaceMenu')) {
        planContainer.classList.remove('plan-has-mobile-toolbar');
        return;
    }

    const prefersMobileLayout = window.matchMedia('(max-width: 768px)').matches;

    if (prefersMobileLayout) {
        if (toolbar.parentElement !== mobileSlot) {
            mobileSlot.appendChild(toolbar);
        }
        planContainer.classList.add('plan-has-mobile-toolbar');
    } else {
        if (toolbar.parentElement !== desktopSlot) {
            desktopSlot.appendChild(toolbar);
        }
        planContainer.classList.remove('plan-has-mobile-toolbar');
    }
}

// Set up event listeners
function setupEventListeners() {
    configurePdfJsWorker();

    const uploadBtn = document.getElementById('uploadButton');
    const emptyUploadBtn = document.getElementById('emptyUploadBtn');
    const pdfToImageUploadBtn = document.getElementById('pdfToImageUploadButton');
    const confirmUploadBtn = document.getElementById('confirmUploadBtn');
    const cancelUploadBtn = document.getElementById('cancelUploadBtn');
    const addAnnotationBtn = document.getElementById('addAnnotationBtn');
    const scanBtn = document.getElementById('scanBtn');
    const validateBtn = document.getElementById('validateBtn');
    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomOutBtn = document.getElementById('zoomOutBtn');
    const zoomResetBtn = document.getElementById('zoomResetBtn');
    const fullscreenToggle = document.getElementById('fullscreenToggle');

    if (uploadBtn) {
        uploadBtn.addEventListener('click', (e) => { e.preventDefault(); showUploadPopup(); });
        addPressListener(uploadBtn, showUploadPopup);
    }
    if (emptyUploadBtn) {
        emptyUploadBtn.addEventListener('click', (e) => { e.preventDefault(); showUploadPopup(); });
        addPressListener(emptyUploadBtn, showUploadPopup);
    }
    addPressListener(pdfToImageUploadBtn, showPdfToImagePopup);
    addPressListener(confirmUploadBtn, handleFileUpload);
    addPressListener(cancelUploadBtn, closePopup);
    addPressListener(addAnnotationBtn, startAddAnnotation);
    addPressListener(scanBtn, showOCRAlert);
    addPressListener(validateBtn, validateVastu);
    addPressListener(zoomInBtn, () => zoomImage(1.2));
    addPressListener(zoomOutBtn, () => zoomImage(0.8));
    addPressListener(zoomResetBtn, () => resetZoom());
    addPressListener(fullscreenToggle, toggleFullscreen);

    document.addEventListener('click', function(e) {
        if (!('speechSynthesis' in window)) return;

        const button = e.target.closest('button');
        if (!button) return;

        if (button.id === 'uploadButton' || button.id === 'pdfToImageUploadButton') return;

        const controlButtonIds = new Set([
            'rotateLeftBtn',
            'rotateRightBtn',
            'zoomInBtn',
            'zoomOutBtn',
            'resetZoomBtn',
            'moveLeftBtn',
            'moveRightBtn',
            'moveUpBtn',
            'moveDownBtn',
            'resetBtn'
        ]);

        if (activeSpeechCategory === 'controlGuide' && controlButtonIds.has(button.id)) {
            return;
        }

        stopLanguageGuideSpeech();
        stopSpeech();
    }, true);

    // File selection handler
    document.getElementById('fileInput').addEventListener('change', function(e) {
        selectedFile = e.target.files[0] || null;
    });

    const northDirectionSelect = document.getElementById('northDirection');
    if (northDirectionSelect) {
        updateCompassRotation(northDirectionSelect.value);
        northDirectionSelect.addEventListener('change', (event) => {
            updateCompassRotation(event.target.value);
            triggerCompassSpin(null, { durationMs: 2200 });
        });
    }

    document.getElementById('floorFeatureSelect')?.addEventListener('change', updateFloorFeatureInfo);

    // Additional buttons
    document.getElementById('pdfToImageBtn')?.addEventListener('click', showPdfToImagePopup);
    document.getElementById('convertPdfBtn')?.addEventListener('click', convertPdfToImages);
    document.getElementById('closePdfPopupBtn')?.addEventListener('click', closePdfToImagePopup);

    // Annotation buttons
    document.getElementById('annotationForm').addEventListener('submit', addAnnotation);
    document.getElementById('cancelButton').addEventListener('click', cancelAnnotation);
    document.getElementById('saveEditButton').addEventListener('click', saveEditedAnnotation);
    document.getElementById('cancelEditButton').addEventListener('click', cancelEditAnnotation);

    // Manual annotation prompt buttons
    addPressListener(document.getElementById('manualAnnotationConfirm'), confirmManualAnnotationPrompt);
    addPressListener(document.getElementById('manualAnnotationCancel'), closeManualAnnotationPrompt);

    // OCR scan controls
    addPressListener(document.getElementById('confirmScanBtn'), function() {
        manualScanAuthorized = true;
        startOCRScan();
    });
    addPressListener(document.getElementById('cancelScanBtn'), closeOCRAlert);

    const advancedOcrBtn = document.getElementById('advancedOcrBtn');
    if (advancedOcrBtn) {
        addPressListener(advancedOcrBtn, startAdvancedOCRScan);
    }

    // Validation button controls
    addPressListener(document.getElementById('closeButton'), closeValidationPopup);
    addPressListener(document.getElementById('downloadPdfButton'), generatePdfReport);

    addPressListener(document.getElementById('guideToggle'), toggleGuideMuted);

    // Language choices in the Setup popup
    document.querySelectorAll('.language-option').forEach(option => {
        addPressListener(option, changeLanguage);
    });

    // Close popups when clicking outside
    document.getElementById('popupOverlay').style.display = 'none';
    document.getElementById('popupOverlay').addEventListener('click', function(e) {
        if (e.target === this) closePopup();
    });
    document.getElementById('pdfPopupOverlay')?.addEventListener('click', function(e) {
        if (e.target === this) closePdfToImagePopup();
    });
    document.getElementById('ocrAlertPopup').addEventListener('click', function(e) {
        if (e.target === this) closeOCRAlert();
    });
    document.getElementById('validationPopup').addEventListener('click', function(e) {
        if (e.target === this) closeValidationPopup();
    });
    document.getElementById('messagePopupOverlay')?.addEventListener('click', function(e) {
        if (e.target === this) closeAlertPopup();
    });
    document.getElementById('messagePopupClose')?.addEventListener('click', closeAlertPopup);
    document.getElementById('messagePopupDismiss')?.addEventListener('click', closeAlertPopup);

    // Image load event
    if (imageElement) {
        imageElement.addEventListener('load', function() {
            if (container) container.classList.add('glow');
            resetZoom();
        });
    }

    // Keyboard shortcuts (only for non-mobile)
    if (!isMobileDevice()) {
        document.addEventListener('keydown', handleKeyboardShortcuts);
    }

    document.addEventListener('click', handleGlobalDropdownClose);
}

// Set up drag and drop for the image
function setupDragAndDrop() {
    if (!container) return;

    // Only enable image dragging for non-mobile devices
    if (!isMobileDevice()) {
        container.addEventListener('mousedown', startDrag);
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', endDrag);
    }

    // Always enable touch for annotations
    container.addEventListener('touchstart', handleTouchStart, {passive: false});
    document.addEventListener('touchend', endDrag);
}

// Handle touch events
function handleTouchStart(e) {
    if (e.touches.length > 1) return; // Allow native multi-touch (zoom/pan)

    const annotation = e.target.closest('.annotation');

    // Do not cancel ordinary touches in the plan workspace. Cancelling the
    // container's touchstart also suppresses the synthetic click on mobile,
    // which made the empty-state upload and compass/guide buttons appear
    // unresponsive. Native controls should keep their normal tap behaviour,
    // and blank canvas touches should remain available for vertical scrolling.
    if (!annotation) {
        return;
    }

    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousedown', {
        clientX: touch.clientX,
        clientY: touch.clientY,
        bubbles: true
    });
    annotation.dispatchEvent(mouseEvent);
    e.preventDefault();
}

function handleTouchMove(e) {
    if (!activeAnnotation) {
        e.preventDefault();
        return;
    }

    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousemove', {
        clientX: touch.clientX,
        clientY: touch.clientY,
        bubbles: true
    });
    document.dispatchEvent(mouseEvent);
    e.preventDefault();
}

// Image dragging functions (desktop only)
function startDrag(e) {
    e.preventDefault();
    if (isAddingAnnotation) return;

    isDragging = true;
    dragStartX = e.clientX - currentX;
    dragStartY = e.clientY - currentY;
    if (imageElement) imageElement.classList.add('house-plan--dragging');
    if (container) container.style.cursor = 'grabbing';
}

function drag(e) {
    e.preventDefault();
    if (!isDragging) return;

    currentX = e.clientX - dragStartX;
    currentY = e.clientY - dragStartY;
    updateImageTransform();
}

function endDrag() {
    isDragging = false;
    if (imageElement) imageElement.classList.remove('house-plan--dragging');
    if (container) container.style.cursor = 'grab';
}

// Handle keyboard shortcuts
function handleKeyboardShortcuts(e) {
    if (e.target.tagName === 'INPUT') return;

    switch(e.key) {
        case '+':
        case '=':
            zoomImage(1.1);
            break;
        case '-':
            zoomImage(0.9);
            break;
        case 'ArrowLeft':
            moveImage(-20, 0);
            break;
        case 'ArrowRight':
            moveImage(20, 0);
            break;
        case 'ArrowUp':
            moveImage(0, -20);
            break;
        case 'ArrowDown':
            moveImage(0, 20);
            break;
        case 'r':
            resetZoom();
            break;
        case 'Escape':
            if (isAddingAnnotation) cancelAnnotation();
            closePopup();
            closeValidationPopup();
            closeOCRAlert();
            break;
    }
}

// Image transformation functions
function rotateImage(degrees) {
    currentRotation += degrees;
    updateImageTransform();
}

function zoomImage(factor) {
    if (window.VastuPlanAnalysis && document.body.classList.contains('plan-analysis-mode')) {
        if (factor > 1) window.VastuPlanAnalysis.zoomIn();
        else window.VastuPlanAnalysis.zoomOut();
        return;
    }
    currentScale *= factor;
    updateImageTransform();
}

function resetZoom() {
    if (window.VastuPlanAnalysis && document.body.classList.contains('plan-analysis-mode')) {
        window.VastuPlanAnalysis.resetZoom();
        return;
    }
    if (!imageElement || !container) return;

    const containerRect = container.getBoundingClientRect();
    const normalizedRotation = ((currentRotation % 360) + 360) % 360;
    const swapsSides = normalizedRotation === 90 || normalizedRotation === 270;
    const displayedWidth = swapsSides ? imageElement.naturalHeight : imageElement.naturalWidth;
    const displayedHeight = swapsSides ? imageElement.naturalWidth : imageElement.naturalHeight;
    const imgRatio = displayedWidth / displayedHeight;
    const containerRatio = containerRect.width / containerRect.height;

    currentScale = imgRatio > containerRatio ?
        containerRect.width / displayedWidth :
        containerRect.height / displayedHeight;

    currentX = 0;
    currentY = 0;
    updateImageTransform();
}

function moveImage(dx, dy) {
    currentX += dx;
    currentY += dy;
    updateImageTransform();
}

function updateImageTransform() {
    const transform = `translate(${currentX}px, ${currentY}px) rotate(${currentRotation}deg) scale(${currentScale})`;
    if (imageElement) {
        imageElement.style.transform = transform;
    }
    const annotations = document.getElementById('annotationContainer');
    if (annotations) {
        annotations.style.transform = transform;
        annotations.style.transformOrigin = '0 0'; // Adjust if needed
    }
}

function configurePdfJsWorker() {
    if (window.pdfjsLib && !window.pdfjsLib.GlobalWorkerOptions.workerSrc) {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc =
            'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    }
}

// Upload functions
function showUploadPopup() {
    const popup = document.getElementById('popupOverlay');
    if (popup) {
        popup.style.display = 'flex';
        popup.style.pointerEvents = 'auto'; // allow interaction
        popup.classList.add('active');
        popup.removeAttribute('aria-hidden');
    }

    const fileInput = document.getElementById('fileInput');
    if (fileInput) fileInput.value = '';

    const directionSelect = document.getElementById('northDirection');
    if (directionSelect) {
        directionSelect.value = 'north';
        if (typeof updateCompassRotation === 'function') {
            updateCompassRotation(directionSelect.value);
        }
    }

    const floorFeatureSelect = document.getElementById('floorFeatureSelect');
    if (floorFeatureSelect) {
        floorFeatureSelect.value = 'yes';
    }

    if (typeof updateFloorFeatureInfo === 'function') {
        updateFloorFeatureInfo();
    }

    selectedFile = null;

    stopLanguageGuideSpeech();
    speakUploadInstructions();
}
window.showUploadPopup = showUploadPopup;
window.closePopup = closePopup;

function showPdfToImagePopup() {
    const uploadPopup = document.getElementById('popupOverlay');
    if (uploadPopup) {
        uploadPopup.style.display = 'none';
    }

    const popup = document.getElementById('pdfPopupOverlay');
    if (popup) {
        popup.style.display = 'flex';
        popup.style.pointerEvents = 'auto';
    }

    const pdfInput = document.getElementById('pdfFileInput');
    if (pdfInput) {
        pdfInput.value = '';
    }
}

function closePdfToImagePopup() {
    const popup = document.getElementById('pdfPopupOverlay');
    if (popup) {
        popup.style.display = 'none';
    }

    const pdfInput = document.getElementById('pdfFileInput');
    if (pdfInput) {
        pdfInput.value = '';
    }

    const previewList = document.getElementById('pdfPreviewList');
    if (previewList) {
        previewList.innerHTML = '';
    }
}

function downloadPdfPreviewImage(pageData) {
    const downloadLink = document.createElement('a');
    downloadLink.href = pageData.dataUrl;
    downloadLink.download = pageData.fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();
}

function renderPdfPreviewList(previewList, pages, labels) {
    previewList.innerHTML = '';
    pages.forEach(pageData => {
        const item = document.createElement('div');
        item.className = 'pdf-preview-item';

        const image = document.createElement('img');
        image.className = 'pdf-preview-image';
        image.src = pageData.dataUrl;
        image.alt = `${labels.pdfPageLabel || translations.en.labels.pdfPageLabel} ${pageData.pageNum}`;

        const meta = document.createElement('div');
        meta.className = 'pdf-preview-meta';

        const label = document.createElement('div');
        label.textContent = `${labels.pdfPageLabel || translations.en.labels.pdfPageLabel} ${pageData.pageNum}`;

        const actions = document.createElement('div');
        actions.className = 'pdf-preview-actions';

        const downloadButton = document.createElement('button');
        downloadButton.type = 'button';
        downloadButton.className = 'pdf-download-btn';
        downloadButton.title = labels.pdfDownloadLabel || translations.en.labels.pdfDownloadLabel;
        downloadButton.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>';
        downloadButton.addEventListener('click', () => downloadPdfPreviewImage(pageData));
        actions.appendChild(downloadButton);

        meta.appendChild(label);
        meta.appendChild(actions);

        item.appendChild(image);
        item.appendChild(meta);

        previewList.appendChild(item);
    });
}

async function convertPdfToImages() {
    const pdfInput = document.getElementById('pdfFileInput');
    const previewList = document.getElementById('pdfPreviewList');
    const strings = getCurrentStrings();
    const fallbackAlerts = translations.en.messages.alerts;
    const alerts = strings.messages?.alerts || fallbackAlerts;
    const fallbackLabels = translations.en.labels;
    const labels = strings.labels || fallbackLabels;
    const pdfFile = pdfInput?.files?.[0];

    if (!pdfFile) {
        showAlertPopup(
            alerts.selectPdfFirst || fallbackAlerts.selectPdfFirst,
            alerts.uploadRequiredTitle || fallbackAlerts.uploadRequiredTitle
        );
        return;
    }

    if (pdfFile.type !== 'application/pdf') {
        showAlertPopup(
            alerts.invalidPdfFile || fallbackAlerts.invalidPdfFile,
            alerts.invalidFileTitle || fallbackAlerts.invalidFileTitle
        );
        return;
    }

    if (!window.pdfjsLib) {
        showAlertPopup(
            alerts.pdfConversionLibraryMissing || fallbackAlerts.pdfConversionLibraryMissing,
            alerts.pdfUnavailableTitle || fallbackAlerts.pdfUnavailableTitle
        );
        return;
    }

    configurePdfJsWorker();

    const convertButton = document.getElementById('convertPdfBtn');
    if (convertButton) convertButton.disabled = true;

    if (previewList) {
        previewList.innerHTML = '';
    }

    try {
        const pdfData = await pdfFile.arrayBuffer();
        const pdfDoc = await window.pdfjsLib.getDocument({ data: pdfData }).promise;
        const baseName = pdfFile.name.replace(/\.pdf$/i, '') || 'pdf-page';
        const pages = [];

        for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum += 1) {
            const page = await pdfDoc.getPage(pageNum);
            const viewport = page.getViewport({ scale: 1.6 });
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = viewport.width;
            canvas.height = viewport.height;

            await page.render({ canvasContext: context, viewport }).promise;

            const dataUrl = canvas.toDataURL('image/png');
            pages.push({
                pageNum,
                dataUrl,
                fileName: `${baseName}-page-${pageNum}.png`
            });
        }

        if (previewList) {
            renderPdfPreviewList(previewList, pages, labels);
        }
    } catch (error) {
        showAlertPopup(
            `${alerts.pdfErrorPrefix || fallbackAlerts.pdfErrorPrefix}${error.message}`,
            alerts.pdfErrorTitle || fallbackAlerts.pdfErrorTitle
        );
    } finally {
        if (convertButton) convertButton.disabled = false;
    }
}

function updateFloorFeatureInfo() {
    const selection = document.getElementById('floorFeatureSelect');
    const question = document.getElementById('floorFeatureQuestion');
    const list = document.getElementById('vastuRoomList');
    const strings = getCurrentStrings();

    if (!selection || !question || !list) return;

    list.innerHTML = '';

    if (selection.value === 'yes') {
        question.textContent = strings.messages.floorHasKitchen;
    } else {
        question.textContent = strings.messages.floorIsDuplex;
    }

    list.style.display = 'none';
}

function stopSpeech() {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    activeSpeechUtterance = null;
    activeSpeechCategory = null;

    if (speechSegmentTimeout) {
        clearTimeout(speechSegmentTimeout);
        speechSegmentTimeout = null;
    }
}

function stopLanguageGuideSpeech() {
    if (window.languageGuideController?.stop) {
        window.languageGuideController.stop();
    }
}

function getSupportedSpeechLanguage(preferredLang) {
    if (!preferredLang || !('speechSynthesis' in window)) return null;

    const normalized = preferredLang.toLowerCase();
    const availableVoices = window.speechSynthesis.getVoices() || [];

    if (availableVoices.length === 0) return preferredLang;

    const matchesPreferredLang = availableVoices.some(({ lang }) =>
        (lang || '').toLowerCase().startsWith(normalized)
    );

    if (matchesPreferredLang) return preferredLang;

    if (normalized.startsWith('kn')) return 'en-IN';

    return 'en-US';
}

function updateSpeechSupportForLanguage(lang) {
    const strings = getCurrentStrings(lang);
    const languageCode = getSupportedSpeechLanguage(strings.speechLang);
    const isUnsupportedKannada = lang === 'kn' && (!languageCode || !languageCode.toLowerCase().startsWith('kn'));

    if (lang === 'kn') {
        lastKnownKannadaVoiceSupport = !isUnsupportedKannada;
    }

    kannadaSpeechFallbackActive = isUnsupportedKannada;

    return { languageCode, isUnsupportedKannada };
}

function refreshKannadaSpeechSupport() {
    if (currentLanguage !== 'kn' || !('speechSynthesis' in window)) return;

    const previousSupport = lastKnownKannadaVoiceSupport;
    const { isUnsupportedKannada } = updateSpeechSupportForLanguage('kn');

    if (previousSupport !== null && previousSupport !== !isUnsupportedKannada) {
        stopSpeech();
    }
}

function speakMessage(message, { onStart, onEnd, onError } = {}) {
    if (!('speechSynthesis' in window)) return false;
    if (!shouldAllowSpeech()) return false;

    refreshKannadaSpeechSupport();

    stopLanguageGuideSpeech();
    stopSpeech();

    const utterance = new SpeechSynthesisUtterance(message);
    const strings = getCurrentSpeechStrings();
    utterance.lang = strings.speechLang;
    if (typeof onStart === 'function') {
        utterance.onstart = onStart;
    }
    if (typeof onEnd === 'function') {
        utterance.onend = onEnd;
    }
    if (typeof onError === 'function') {
        utterance.onerror = onError;
    }
    activeSpeechUtterance = utterance;
    window.speechSynthesis.speak(utterance);

    return true;
}

function speakSegmentsWithPause(segments, pauseMs = 0) {
    if (!Array.isArray(segments) || segments.length === 0) return;
    if (!('speechSynthesis' in window)) return false;
    if (!shouldAllowSpeech()) return false;

    refreshKannadaSpeechSupport();

    stopLanguageGuideSpeech();
    stopSpeech();

    let index = 0;

    const speakNext = () => {
        if (index >= segments.length) {
            speechSegmentTimeout = null;
            return;
        }

        const utterance = new SpeechSynthesisUtterance(segments[index]);
        const strings = getCurrentSpeechStrings();
        utterance.lang = strings.speechLang;
        activeSpeechUtterance = utterance;

        utterance.onend = () => {
            activeSpeechUtterance = null;
            index += 1;

            if (index < segments.length) {
                speechSegmentTimeout = setTimeout(speakNext, pauseMs);
            } else {
                speechSegmentTimeout = null;
            }
        };

        utterance.onerror = () => {
            speechSegmentTimeout = null;
        };

        window.speechSynthesis.speak(utterance);
    };

    speakNext();

    return true;
}

function extractSpeechTextFromHtml(html) {
    if (typeof html !== 'string') return '';

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || '';

    return text.replace(/\s+/g, ' ').trim();
}

function speakUploadInstructions() {
    const strings = getCurrentSpeechStrings();

    if (lastUploadGuideLanguage === currentLanguage) return;

    if (speakMessage(strings.messages.uploadInstruction)) {
        lastUploadGuideLanguage = currentLanguage;
    }
}

function speakScanStatus() {
    speakMessage(getCurrentSpeechStrings().messages.scanStatus);
}

function speakNoTextDetected() {
    const strings = getCurrentSpeechStrings();
    speakMessage(`${strings.messages.noTextDetected} ${strings.messages.scanCompletionReminder}`);
}

function speakScanCompletionReminder() {
    speakMessage(getCurrentSpeechStrings().messages.scanCompletionReminder);
}

function showControlButtonsGuide() {
    if (controlGuideSpokenLanguages.has(currentLanguage)) return;

    const strings = getCurrentSpeechStrings();
    const markGuideInactive = () => {
        if (activeSpeechCategory === 'controlGuide') {
            activeSpeechCategory = null;
        }
    };

    speakMessage(strings.messages.controlButtonsGuide, {
        onStart: () => {
            controlGuideSpokenLanguages.add(currentLanguage);
            activeSpeechCategory = 'controlGuide';
        },
        onEnd: markGuideInactive,
        onError: markGuideInactive
    });
}

function speakValidationOutcome(results) {
    const providedResults = Array.isArray(results) ? results.filter(Boolean) : [];
    const renderedResults = Array.from(document.querySelectorAll('.validation-result'));

    const speechLang = currentLanguage;
    const localizedSpeech = getSpeechStrings(speechLang);

    if (providedResults.length === 0 && renderedResults.length === 0) return;

    const countSource = providedResults.length > 0 ? providedResults : renderedResults;
    const correctCount = countSource.filter(item => {
        if (item?.correct !== undefined) {
            return Boolean(item.correct);
        }
        if (item?.classList) {
            return item.classList.contains('correct');
        }
        return false;
    }).length;
    const issuesCount = countSource.length - correctCount;

    const reminderInstruction = localizedSpeech.reminderInstruction;
    const attentionPrefix = localizedSpeech.attentionPrefix;
    const correctPrefix = localizedSpeech.correctPrefix;

    const normalizedResults = countSource.map(item => {
        if (item?.message) {
            return {
                text: extractSpeechTextFromHtml(item.message),
                correct: Boolean(item.correct)
            };
        }

        if (item?.innerHTML) {
            return {
                text: extractSpeechTextFromHtml(item.innerHTML),
                correct: item.classList.contains('correct')
            };
        }

        return null;
    }).filter(result => result && result.text);

    if (normalizedResults.length === 0) return;

    const summary = localizedSpeech.summary(correctCount, issuesCount);
    const speechSegments = [reminderInstruction, summary].filter(Boolean);

    normalizedResults.forEach(({ text, correct }) => {
        const prefix = correct ? correctPrefix : attentionPrefix;
        speechSegments.push(`${prefix}${text}`);
    });

    speakSegmentsWithPause(speechSegments, 1000);
}

function speakRemedies(remedies) {
    if (!Array.isArray(remedies) || remedies.length === 0) {
        speakMessage(getCurrentSpeechStrings().messages.noRemedies);
        return;
    }

    const speechSegments = [];

    remedies.forEach((remedy, index) => {
        if (remedy.title) {
            speechSegments.push(remedy.title);
        }

        if (Array.isArray(remedy.suggestions)) {
            remedy.suggestions.forEach(suggestion => {
                if (suggestion) {
                    speechSegments.push(suggestion);
                }
            });
        }

        if (index < remedies.length - 1) {
            speechSegments.push(getNextWord());
        }
    });

    speakSegmentsWithPause(speechSegments, 500);
}

function getNextWord(lang = currentLanguage) {
    if (isKannadaSpeechFallbackActive(lang)) {
        return defaultSpeechStrings.nextWord;
    }

    const localizedSpeech = getSpeechStrings(lang);
    return localizedSpeech.nextWord || defaultSpeechStrings.nextWord;
}

function showAlertPopup(message, title = null) {
    const strings = getCurrentStrings();
    const resolvedTitle = title || strings.labels.messageTitle;
    const overlay = document.getElementById('messagePopupOverlay');
    const titleEl = document.getElementById('messagePopupTitle');
    const bodyEl = document.getElementById('messagePopupBody');

    if (!overlay || !titleEl || !bodyEl) return;

    titleEl.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px;vertical-align:middle"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg> ${resolvedTitle}`;
    bodyEl.textContent = message;

    overlay.style.display = 'flex';
}

function closeAlertPopup() {
    const overlay = document.getElementById('messagePopupOverlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
}

function closePopup() {
    const popup = document.getElementById('popupOverlay');
    if (popup) {
        popup.style.display = 'none';
        popup.classList.remove('active');
        popup.style.pointerEvents = 'none'; // add this line just in case!
    }
}

function handleFileUpload() {
    const alerts = getCurrentStrings().messages.alerts;
    if (!selectedFile) {
        showAlertPopup(alerts.selectFileFirst, alerts.uploadRequiredTitle);
        return;
    }

    const fileExt = selectedFile.name ? selectedFile.name.split('.').pop().toLowerCase() : '';
    const isSupportedImage = selectedFile.type.match('image.*') || ['jpg', 'jpeg', 'png', 'webp', 'bmp', 'gif', 'svg', 'heic', 'heif'].includes(fileExt);
    if (!isSupportedImage) {
        showAlertPopup(alerts.invalidImageFile, alerts.invalidFileTitle);
        return;
    }

    const confirmUploadBtn = document.getElementById('confirmUploadBtn');
    const cancelUploadBtn = document.getElementById('cancelUploadBtn');
    const fileInput = document.getElementById('fileInput');
    const pdfToImageBtn = document.getElementById('pdfToImageBtn');
    const northDirection = document.getElementById('northDirection');
    const floorFeatureSelect = document.getElementById('floorFeatureSelect');

    function setUploadingState(isLoading) {
        if (confirmUploadBtn) {
            confirmUploadBtn.disabled = isLoading;
            if (isLoading) {
                confirmUploadBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="fa-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>';
            } else {
                confirmUploadBtn.textContent = getCurrentStrings().labels.uploadConfirm;
            }
        }
        if (cancelUploadBtn) cancelUploadBtn.disabled = isLoading;
        if (fileInput) fileInput.disabled = isLoading;
        if (pdfToImageBtn) pdfToImageBtn.disabled = isLoading;
        if (northDirection) northDirection.disabled = isLoading;
        if (floorFeatureSelect) floorFeatureSelect.disabled = isLoading;
    }

    setUploadingState(true);

    const direction = document.getElementById('northDirection').value;
    const rotation = getPlanRotation(direction);
    const file = selectedFile;

    window.ImageAssetManager.compressImageFile(file)
        .then(sourceUrl => {
            if (imageElement) {
                if (container) container.classList.remove('glow');
                clearAnnotations();

                imageElement.onload = function() {
                    currentRotation = rotation;
                    resetZoom();
                    updateCompassCircleSize();
                    updateCompassRotation(direction);
                    setUploadingState(false);
                    // Always hide and deactivate the popup overlay after upload
                    closePopup(); // make sure this hides the overlay and disables pointer events
                    window.dispatchEvent(new CustomEvent('vastu:plan-uploaded', {
                        detail: {
                            sourceUrl,
                            mimeType: sourceUrl.mimeType || 'image/jpeg',
                            direction,
                            rotation,
                            compassSizePercent
                        }
                    }));
                    triggerCompassSpin(null, { durationMs: 2400 });
                };
                imageElement.onerror = function() {
                    setUploadingState(false);
                    window.ImageAssetManager.release(sourceUrl);
                    showAlertPopup(alerts.readError, alerts.readErrorTitle);
                };
                imageElement.src = sourceUrl;
            } else {
                setUploadingState(false);
                window.ImageAssetManager.release(sourceUrl);
            }
        })
        .catch(error => {
            setUploadingState(false);
            console.error('Error compressing file', error);
            showAlertPopup(alerts.readError, alerts.readErrorTitle);
        });
}

// Annotation functions
function startAddAnnotation() {
    isAddingAnnotation = true;
    const form = document.getElementById('annotationForm');
    if (form) form.style.display = 'block';

    const input = document.getElementById('annotationText');
    if (input) input.focus();
}

function addAnnotation(event) {
    event?.preventDefault();
    const input = document.getElementById('annotationText');
    if (!input) return;

    const text = input.value.trim();
    if (!text) return;

    const containerRect = container ? container.getBoundingClientRect() : {width: 0, height: 0};
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;

    // Never leave a newly added label hidden by a previous layer preference.
    // The user can drag the label from this clearly visible initial position.
    container?.classList.remove('hide-rooms');
    const annotation = createAnnotation(text, centerX, centerY);
    if (!annotation) return;

    // createAnnotation receives the label's top-left position. Center the
    // rendered label after its real dimensions (including the Vastu badge)
    // are known, rather than placing its left edge at the compass center.
    const annotationData = annotations.find(item => item.element === annotation);
    if (annotationData) {
        const x = Math.max(10, centerX - (annotation.offsetWidth / 2));
        const y = Math.max(10, centerY - (annotation.offsetHeight / 2));
        annotationData.x = x;
        annotationData.y = y;
        annotation.style.left = `${x}px`;
        annotation.style.top = `${y}px`;
        updateAnnotationDirection(annotationData);
    }

    cancelAnnotation();
}

function createAnnotation(text, x, y, options = {}) {
    if (/\d/.test(text)) return null;
    if (!annotationContainer) return null;

    const annotation = document.createElement('div');
    annotation.className = `annotation${options.roomNameOnly ? ' annotation--room-name-only' : ''}`;

    const label = document.createElement('span');
    label.className = 'annotation-label';
    annotation.appendChild(label);

    const containerRect = container ? container.getBoundingClientRect() : {width: 0, height: 0};
    const maxX = containerRect.width - 100;
    const maxY = containerRect.height - 50;
    x = Math.max(10, Math.min(x, maxX));
    y = Math.max(10, Math.min(y, maxY));

    annotation.style.left = `${x}px`;
    annotation.style.top = `${y}px`;

    // Create close button
    const closeBtn = document.createElement('div');
    closeBtn.className = 'annotation-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        annotation.remove();
        annotations = annotations.filter(a => a.element !== annotation);
        updateCompassDirectionNotes();
    });

    // Add touch event for mobile
    closeBtn.addEventListener('touchstart', function(e) {
        e.stopPropagation();
        e.preventDefault();
        annotation.remove();
        annotations = annotations.filter(a => a.element !== annotation);
        updateCompassDirectionNotes();
    }, {passive: false});

    annotation.appendChild(closeBtn);

    // Create edit button
    const editBtn = document.createElement('div');
    editBtn.className = 'annotation-edit';
    editBtn.innerHTML = '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg>';
    editBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        startEditAnnotation(annotation);
    });

    // Add touch event for mobile
    editBtn.addEventListener('touchstart', function(e) {
        e.stopPropagation();
        e.preventDefault();
        startEditAnnotation(annotation);
    }, {passive: false});

    annotation.appendChild(editBtn);

    // Make draggable with different threshold for mobile
    annotation.addEventListener('mousedown', startAnnotationDrag);
    annotation.addEventListener('touchstart', function(e) {
        // Only start drag if not clicking on buttons
        const target = e.target;
        if (!target.classList.contains('annotation-close') &&
            !target.classList.contains('annotation-edit') &&
            !target.closest('.annotation-close') &&
            !target.closest('.annotation-edit')) {
            startAnnotationDrag(e);
        }
    }, {passive: false});

    annotationContainer.appendChild(annotation);

    if (options.centered) {
        x = Math.max(10, Math.min(x - (annotation.offsetWidth / 2), containerRect.width - annotation.offsetWidth - 10));
        y = Math.max(10, Math.min(y - (annotation.offsetHeight / 2), containerRect.height - annotation.offsetHeight - 10));
        annotation.style.left = `${x}px`;
        annotation.style.top = `${y}px`;
    }

    // Store annotation data
    const annotationData = {
        text: text,
        x: x,
        y: y,
        element: annotation,
        closeBtn: closeBtn,
        editBtn: editBtn,
        label: label,
        roomNameOnly: Boolean(options.roomNameOnly),
        direction: options.direction || ''
    };
    annotations.push(annotationData);

    updateAnnotationDirection(annotationData);

    return annotation;
}

function computeDirectionFromCoordinates(x, y, width = 0, height = 0) {
    const bounds = getCompassReferenceBounds();
    if (!bounds || !bounds.width || !bounds.height) return '';

    const centerX = x + (width / 2);
    const centerY = y + (height / 2);
    const relX = (centerX - bounds.left) / bounds.width;
    const relY = (centerY - bounds.top) / bounds.height;

    return getDirectionFromPosition(relX, relY, currentCompassRotation);
}

function updateAnnotationLabel(annotationData) {
    if (!annotationData || !annotationData.label) return;
    annotationData.label.textContent = annotationData.text;

    if (annotationData.roomNameOnly) {
        annotationData.element.querySelector('.annotation-vastu-status')?.remove();
        return;
    }

    let status = annotationData.element.querySelector('.annotation-vastu-status');
    if (!status) {
        status = document.createElement('small');
        status.className = 'annotation-vastu-status';
        annotationData.element.appendChild(status);
    }

    const mapping = findRoomDirectionMapping(annotationData.text);
    const direction = annotationData.direction || 'Outside compass';
    const isCorrect = Boolean(mapping && mapping.directions.includes(annotationData.direction));
    status.className = `annotation-vastu-status ${mapping ? (isCorrect ? 'is-correct' : 'is-review') : 'is-unknown'}`;
    status.textContent = `${getDirectionLabel(annotationData.direction) || direction} • ${mapping ? (isCorrect ? 'Vastu aligned' : 'Check Vastu') : 'Room not recognized'}`;
}

function updateAnnotationDirection(annotationData) {
    if (!annotationData || !annotationData.element) return;

    const elementWidth = annotationData.element.offsetWidth || 0;
    const elementHeight = annotationData.element.offsetHeight || 0;
    annotationData.direction = computeDirectionFromCoordinates(
        annotationData.x,
        annotationData.y,
        elementWidth,
        elementHeight
    );

    updateAnnotationLabel(annotationData);
    updateCompassDirectionNotes();
}

function updateAllAnnotationDirections() {
    annotations.forEach(annotation => {
        updateAnnotationDirection(annotation);
    });
}

function startEditAnnotation(annotationElement) {
    if (!annotationElement) return;

    const annotation = annotations.find(a => a.element === annotationElement);
    if (!annotation) return;

    currentlyEditedAnnotation = annotation;
    const editInput = document.getElementById('editAnnotationText');
    if (editInput) editInput.value = annotation.text;

    const editForm = document.getElementById('editAnnotationForm');
    if (editForm) editForm.style.display = 'block';
}

function saveEditedAnnotation() {
    if (!currentlyEditedAnnotation) return;

    const editInput = document.getElementById('editAnnotationText');
    if (!editInput) return;

    const newText = editInput.value.trim();
    if (!newText) return;

    if (/\d/.test(newText)) {
        const alerts = getCurrentStrings().messages.alerts;
        showAlertPopup(alerts.annotationNoNumbers, alerts.annotationInvalidTitle);
        return;
    }

    currentlyEditedAnnotation.text = newText;
    updateAnnotationLabel(currentlyEditedAnnotation);
    updateCompassDirectionNotes();

    cancelEditAnnotation();
}

function cancelEditAnnotation() {
    currentlyEditedAnnotation = null;
    const editForm = document.getElementById('editAnnotationForm');
    if (editForm) editForm.style.display = 'none';

    const editInput = document.getElementById('editAnnotationText');
    if (editInput) editInput.value = '';
}

function startAnnotationDrag(e) {
    e.preventDefault();
    e.stopPropagation();

    // Check if we're touching a button (mobile)
    const target = e.target;
    if (target.classList.contains('annotation-close') ||
        target.classList.contains('annotation-edit') ||
        target.closest('.annotation-close') ||
        target.closest('.annotation-edit')) {
        return;
    }

    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);

    activeAnnotation = e.target.closest('.annotation');
    if (!activeAnnotation) return;
    activeAnnotation.classList.add('annotation--dragging');

    const rect = activeAnnotation.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const offsetY = clientY - rect.top;

    function moveAnnotation(e) {
        if (!activeAnnotation) return;
        if (e.cancelable) e.preventDefault();

        const moveX = e.clientX || (e.touches && e.touches[0].clientX);
        const moveY = e.clientY || (e.touches && e.touches[0].clientY);

        if (typeof moveX === 'undefined' || typeof moveY === 'undefined') return;

        const containerRect = container ? container.getBoundingClientRect() : {left: 0, top: 0, width: 0, height: 0};
        let x = moveX - containerRect.left - offsetX;
        let y = moveY - containerRect.top - offsetY;

        const margin = 10;
        const maxX = containerRect.width - activeAnnotation.offsetWidth - margin;
        const maxY = containerRect.height - activeAnnotation.offsetHeight - margin;

        x = Math.max(margin, Math.min(x, maxX));
        y = Math.max(margin, Math.min(y, maxY));

        activeAnnotation.style.left = `${x}px`;
        activeAnnotation.style.top = `${y}px`;

        const annotation = annotations.find(a => a.element === activeAnnotation);
        if (annotation) {
            annotation.x = x;
            annotation.y = y;
        }
    }

    function stopAnnotationDrag() {
        const draggedAnnotation = activeAnnotation;
        document.removeEventListener('mousemove', moveAnnotation);
        document.removeEventListener('touchmove', moveAnnotation);
        document.removeEventListener('mouseup', stopAnnotationDrag);
        document.removeEventListener('touchend', stopAnnotationDrag);
        activeAnnotation = null;
        draggedAnnotation?.classList.remove('annotation--dragging');
        const annotation = annotations.find(a => a.element === draggedAnnotation);
        if (annotation) updateAnnotationDirection(annotation);
    }

    document.addEventListener('mousemove', moveAnnotation);
    document.addEventListener('touchmove', moveAnnotation, {passive: false});
    document.addEventListener('mouseup', stopAnnotationDrag);
    document.addEventListener('touchend', stopAnnotationDrag);
}

function cancelAnnotation() {
    isAddingAnnotation = false;
    const form = document.getElementById('annotationForm');
    if (form) form.style.display = 'none';

    const input = document.getElementById('annotationText');
    if (input) input.value = '';
}

function clearAnnotations() {
    if (annotationContainer) {
        annotationContainer.innerHTML = '';
        annotations = [];
    }

    updateCompassDirectionNotes();
}

function clearScanResult() {
    const result = document.getElementById('scanResult');
    if (!result) return;

    result.classList.remove('visible', 'success', 'warning', 'error');
    result.textContent = '';

    if (scanResultTimeout) {
        clearTimeout(scanResultTimeout);
        scanResultTimeout = null;
    }
}

function showScanResult(message, type = 'info', duration = 4500) {
    const result = document.getElementById('scanResult');
    if (!result) return;

    clearScanResult();

    if (type && ['success', 'warning', 'error'].includes(type)) {
        result.classList.add(type);
    }

    result.textContent = message;
    result.classList.add('visible');

    scanResultTimeout = setTimeout(() => {
        result.classList.remove('visible', 'success', 'warning', 'error');
        scanResultTimeout = null;
    }, duration);
}


function showOCRAlert() {
    if (!imageElement || !imageElement.src) {
        const alerts = getCurrentStrings().messages.alerts;
        showAlertPopup(alerts.uploadPlanFirst, alerts.uploadRequiredTitle);
        return;
    }

    const alertPopup = document.getElementById('ocrAlertPopup');
    if (alertPopup) {
        alertPopup.style.display = 'block';
    }
}

function closeOCRAlert() {
    const alertPopup = document.getElementById('ocrAlertPopup');
    if (alertPopup) alertPopup.style.display = 'none';
}

async function startOCRScan() {
    // Never allow uploads, animations, or other code paths to start OCR. The
    // authorization is granted only by the Scan Now click handler above and is
    // consumed immediately so one click can start only one scan.
    if (!manualScanAuthorized) return;
    manualScanAuthorized = false;

    if (!imageElement || !imageElement.src) {
        const alerts = getCurrentStrings().messages.alerts;
        showAlertPopup(alerts.uploadPlanFirst, alerts.uploadRequiredTitle);
        showScanResult(alerts.uploadPlanFirst, 'warning');
        return;
    }

    clearScanResult();

    speakScanStatus();

    // A scan starts from the confirmation shown after the user clicks Scan.
    const alertPopup = document.getElementById('ocrAlertPopup');
    if (alertPopup && alertPopup.style.display === 'block') {
        closeOCRAlert();
    }

    let annotationCount = 0;

    const restoreCompass = freezeCompassSize();

    const progress = document.getElementById('ocrProgress');
    const progressFill = document.getElementById('progressFill');
    const status = document.getElementById('ocrStatus');

    if (progress) progress.style.display = 'flex';
    if (progressFill) progressFill.style.width = '0%';
    if (status) status.textContent = 'Enhancing image for scan...';

    try {
        const preprocessedSrc = await preprocessImageForOcr(imageElement);
        annotationCount = await performOcrWorkflow(
            preprocessedSrc,
            {
                // Sparse text mode works better for labels distributed among walls.
                tessedit_pageseg_mode: 11,
                preserve_interword_spaces: true,
                tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-/., ',
                user_defined_dpi: 450
            },
            'Running OCR...'
        );
    } catch (err) {
        console.error('Preprocessing failed:', err);
        annotationCount = await performOcrWorkflow(
            imageElement && imageElement.src ? {
                src: imageElement.src,
                width: imageElement.naturalWidth || 1,
                height: imageElement.naturalHeight || 1
            } : '',
            {
                tessedit_pageseg_mode: 11,
                preserve_interword_spaces: true,
                tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-/., ',
                user_defined_dpi: 400
            },
            'Running OCR...'
        );
    } finally {
        restoreCompass();
        if (annotationCount > 0) {
            showScanResult(`Scan complete: ${annotationCount} labels detected.`, 'success');
            speakScanCompletionReminder();
        } else {
            speakNoTextDetected();
            showScanResult('No text detected. You can add room names manually.', 'warning');
        }
    }
}

function freezeCompassSize() {
    const circle = document.querySelector('.compass-circle');
    const lines = Array.from(document.querySelectorAll('.compass-line'));

    const circleStyles = circle ? window.getComputedStyle(circle) : null;
    const storedCircle = circleStyles ? {
        width: circleStyles.width,
        height: circleStyles.height,
        borderWidth: circleStyles.borderWidth
    } : null;

    const storedLines = lines.map(line => {
        const lineStyles = window.getComputedStyle(line);
        return {
            element: line,
            width: lineStyles.width,
            height: lineStyles.height,
            transform: lineStyles.transform,
            backgroundColor: lineStyles.backgroundColor
        };
    });

    if (circle && storedCircle) {
        circle.style.width = storedCircle.width;
        circle.style.height = storedCircle.height;
        circle.style.borderWidth = storedCircle.borderWidth;
    }

    storedLines.forEach(line => {
        if (!line.element) return;
        line.element.style.width = line.width;
        line.element.style.height = line.height;
        line.element.style.transform = line.transform;
        line.element.style.backgroundColor = line.backgroundColor;
    });

    return () => {
        if (circle && storedCircle) {
            circle.style.width = storedCircle.width;
            circle.style.height = storedCircle.height;
            circle.style.borderWidth = storedCircle.borderWidth;
        }

        storedLines.forEach(line => {
            if (!line.element) return;
            line.element.style.width = line.width;
            line.element.style.height = line.height;
            line.element.style.transform = line.transform;
            line.element.style.backgroundColor = line.backgroundColor;
        });
    };
}

function preprocessImageForOcr(img) {
    return new Promise((resolve, reject) => {
        if (!img) {
            reject(new Error('No image to preprocess'));
            return;
        }

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            reject(new Error('Unable to create canvas context'));
            return;
        }

        // OCR needs source pixels, not a temporary CSS zoom. Upscale small plans
        // while retaining enough detail for the small type normally used in plans.
        const longestSide = Math.max(img.naturalWidth, img.naturalHeight, 1);
        const scaleFactor = Math.min(3, Math.max(1, 2400 / longestSide));
        canvas.width = Math.round(img.naturalWidth * scaleFactor);
        canvas.height = Math.round(img.naturalHeight * scaleFactor);

        ctx.filter = 'grayscale(1) contrast(1.25) brightness(1.08)';
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            const luminance = (data[i] * 0.299) + (data[i + 1] * 0.587) + (data[i + 2] * 0.114);
            // Preserve anti-aliased character edges but clear pale plan shading.
            const boosted = luminance > 218 ? 255 : Math.max(0, (luminance - 18) * 1.12);
            data[i] = data[i + 1] = data[i + 2] = Math.min(255, boosted);
        }

        ctx.putImageData(imageData, 0, 0);
        resolve({
            src: canvas.toDataURL('image/png'),
            width: canvas.width,
            height: canvas.height
        });
    });
}

function performOcrWorkflow(imageSource, ocrConfig, initialStatus = 'Starting OCR...') {
    const progress = document.getElementById('ocrProgress');
    const progressFill = document.getElementById('progressFill');
    const status = document.getElementById('ocrStatus');

    if (progress) progress.style.display = 'flex';
    if (progressFill) progressFill.style.width = '0%';
    if (status) status.textContent = initialStatus;

    const source = typeof imageSource === 'string'
        ? {
            src: imageSource,
            width: imageElement?.naturalWidth || 0,
            height: imageElement?.naturalHeight || 0
        }
        : imageSource;

    const containerRect = container ? container.getBoundingClientRect() : {left: 0, top: 0, width: 0, height: 0};
    const imgRect = imageElement ? imageElement.getBoundingClientRect() : {left: 0, top: 0, width: 0, height: 0};

    const fallbackWidth = Math.max(source?.width || 0, imgRect.width || 0, 1);
    const fallbackHeight = Math.max(source?.height || 0, imgRect.height || 0, 1);

    const ocrWidth = source?.width && source.width > 1 ? source.width : fallbackWidth;
    const ocrHeight = source?.height && source.height > 1 ? source.height : fallbackHeight;
    const offsetX = imgRect.left - containerRect.left;
    const offsetY = imgRect.top - containerRect.top;

    return Tesseract.recognize(
        source?.src || imageSource,
        'eng',
        {
            logger: m => {
                if (progressFill && m.status === 'recognizing text') {
                    progressFill.style.width = `${Math.round(m.progress * 100)}%`;
                }
                if (status) {
                    status.textContent = m.status === 'recognizing text' ? `Processing: ${Math.round(m.progress * 100)}%` : m.status;
                }
            },
            ...ocrConfig
        }
    ).then(({ data: { words } }) => {
        const detectedCount = processAllTextWithSmartFiltering(
            words,
            {
                offsetX,
                offsetY,
                imgWidth: imgRect.width,
                imgHeight: imgRect.height,
                ocrWidth,
                ocrHeight
            }
        );

        if (!detectedCount) {
            showManualAnnotationPrompt();
        }

        return detectedCount;
    }).catch(err => {
        console.error('OCR Error:', err);
        if (status) status.textContent = 'Error during text recognition';
        setTimeout(() => {
            showManualAnnotationPrompt();
        }, 2000);
        return 0;
    }).finally(() => {
        if (progress) progress.style.display = 'none';
    });
}

function processAllTextWithSmartFiltering(words, positionData) {
    clearAnnotations();

    if (!positionData) {
        showManualAnnotationPrompt();
        return 0;
    }

    const { offsetX, offsetY, imgWidth, imgHeight, ocrWidth, ocrHeight } = positionData;

    if (!words || !Array.isArray(words)) {
        showManualAnnotationPrompt();
        return 0;
    }

    const potentialRooms = words.filter(word => {
        if (!word || !word.text) return false;
        const text = word.text.trim();
        return (
            text.length >= 2 &&
            text.length <= 25 &&
            word.confidence > 60 &&
            !/^[\d\s.,-]+$/.test(text)
        );
    });

    if (potentialRooms.length === 0) {
        showManualAnnotationPrompt();
        return 0;
    }

    const wordGroups = groupWordsByProximity(potentialRooms);
    const recognizedAnnotations = [];

    wordGroups.forEach(group => {
        if (!group || group.length === 0) return;

        // A line may also contain a room dimension. Only emit a contiguous OCR
        // phrase that exactly equals a known room name; never invent a nearest
        // or partial room name for unrelated plan text.
        const exactRoom = findExactRoomPhrase(group);

        if (exactRoom) {
            recognizedAnnotations.push({
                text: formatRoomName(exactRoom.name),
                bbox: combineBoundingBoxes(exactRoom.words)
            });
        }
    });

    let createdCount = 0;

    recognizedAnnotations.forEach(item => {
        if (!item || !item.bbox) return;

        const normalizedX = ((item.bbox.x0 + item.bbox.x1) / 2) / Math.max(ocrWidth, 1);
        const normalizedY = ((item.bbox.y0 + item.bbox.y1) / 2) / Math.max(ocrHeight, 1);

        const x = offsetX + (normalizedX * imgWidth);
        const y = offsetY + (normalizedY * imgHeight);

        if (x >= 0 && y >= 0) {
            const annotation = createAnnotation(item.text, x, y, { roomNameOnly: true, centered: true });
            if (annotation) {
                createdCount++;

            }
        }
    });

    if (!createdCount) {
        showManualAnnotationPrompt();
    }

    return createdCount;
}

function groupWordsByProximity(words) {
    if (!words || !Array.isArray(words)) return [];

    const groups = [];
    let currentGroup = [];

    words.sort((a, b) => {
        const lineA = `${a.block_num || 0}:${a.par_num || 0}:${a.line_num || 0}`;
        const lineB = `${b.block_num || 0}:${b.par_num || 0}:${b.line_num || 0}`;
        if (lineA !== lineB) return (a.bbox?.y0 || 0) - (b.bbox?.y0 || 0);
        return (a.bbox?.x0 || 0) - (b.bbox?.x0 || 0);
    });

    words.forEach((word, i) => {
        if (!word || !word.bbox) return;

        if (currentGroup.length === 0) {
            currentGroup.push(word);
        } else {
            const lastWord = currentGroup[currentGroup.length - 1];
            if (!lastWord || !lastWord.bbox) return;

            const xDist = word.bbox.x0 - lastWord.bbox.x1;
            const yDist = Math.abs(((word.bbox.y0 + word.bbox.y1) / 2) - ((lastWord.bbox.y0 + lastWord.bbox.y1) / 2));
            const wordHeight = Math.max(word.bbox.y1 - word.bbox.y0, lastWord.bbox.y1 - lastWord.bbox.y0, 1);
            const sameTesseractLine = word.line_num && lastWord.line_num &&
                word.line_num === lastWord.line_num && word.par_num === lastWord.par_num && word.block_num === lastWord.block_num;

            if ((sameTesseractLine || yDist < wordHeight * 0.65) && xDist < wordHeight * 4) {
                currentGroup.push(word);
            } else {
                groups.push(currentGroup);
                currentGroup = [word];
            }
        }
    });

    if (currentGroup.length > 0) {
        groups.push(currentGroup);
    }

    return groups;
}

function normalizeOcrRoomText(text) {
    return String(text || '')
        .toLowerCase()
        .replace(/[|]/g, 'l')
        .replace(/[^a-z\s-]/g, ' ')
        .replace(/[-\s]+/g, ' ')
        .trim();
}

function findExactRoomPhrase(words) {
    if (!Array.isArray(words) || !words.length) return null;

    const knownRooms = new Map(combinedRoomNames.map(name => [normalizeOcrRoomText(name), name]));
    let best = null;

    for (let start = 0; start < words.length; start++) {
        for (let end = start + 1; end <= words.length; end++) {
            const normalized = normalizeOcrRoomText(words.slice(start, end).map(word => word.text).join(' '));
            const name = knownRooms.get(normalized);
            if (name && (!best || normalized.length > best.normalized.length)) {
                best = { name, normalized, words: words.slice(start, end) };
            }
        }
    }

    return best;
}

function combineBoundingBoxes(words) {
    if (!words || words.length === 0) return {x0: 0, y0: 0, x1: 0, y1: 0};

    return {
        x0: Math.min(...words.map(w => w.bbox ? w.bbox.x0 : 0)),
        y0: Math.min(...words.map(w => w.bbox ? w.bbox.y0 : 0)),
        x1: Math.max(...words.map(w => w.bbox ? w.bbox.x1 : 0)),
        y1: Math.max(...words.map(w => w.bbox ? w.bbox.y1 : 0))
    };
}

function formatRoomName(name) {
    if (!name) return '';
    return name.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function showManualAnnotationPrompt() {
    const overlay = document.getElementById('manualAnnotationOverlay');
    if (overlay) {
        overlay.style.display = 'flex';
    } else {
        startAddAnnotation();
    }
}

function closeManualAnnotationPrompt() {
    const overlay = document.getElementById('manualAnnotationOverlay');
    if (overlay) overlay.style.display = 'none';
}

function confirmManualAnnotationPrompt() {
    closeManualAnnotationPrompt();
    startAddAnnotation();
}

// Vastu validation functions
function validateVastu() {
    const validateLabel = getCurrentSpeechStrings().labels?.validate || getCurrentStrings().labels?.validate;
    if (validateLabel) {
        speakMessage(validateLabel);
    }

    if (!imageElement || !imageElement.src) {
        const alerts = getCurrentStrings().messages.alerts;
        showAlertPopup(alerts.uploadPlanFirst, alerts.uploadRequiredTitle);
        return;
    }

    const roomPositions = annotations.map(annotation => {
        return {
            name: annotation.text,
            direction: computeDirectionFromCoordinates(
                annotation.x,
                annotation.y,
                annotation.element?.offsetWidth || 0,
                annotation.element?.offsetHeight || 0
            )
        };
    });

    const results = generateVastuResults(roomPositions);
    displayValidationResults(results);
}

function getDirectionFromPosition(x, y, rotationDegrees = 0) {
    if (x >= 0.33 && x <= 0.66 && y >= 0.33 && y <= 0.66) {
        return 'Center';
    }

    const dx = x - 0.5;
    const dy = y - 0.5;
    // Right = 0, Down = 90 mapping
    const angle = (Math.atan2(dy, dx) * (180 / Math.PI) + 360) % 360;
    const normalizedRotation = ((rotationDegrees % 360) + 360) % 360;
    const adjustedAngle = (angle - normalizedRotation + 360) % 360;

    const directionRanges = [
        { label: 'North', start: 337.5, end: 22.5 },
        { label: 'Northeast', start: 22.5, end: 67.5 },
        { label: 'East', start: 67.5, end: 112.5 },
        { label: 'Southeast', start: 112.5, end: 157.5 },
        { label: 'South', start: 157.5, end: 202.5 },
        { label: 'Southwest', start: 202.5, end: 247.5 },
        { label: 'West', start: 247.5, end: 292.5 },
        { label: 'Northwest', start: 292.5, end: 337.5 }
    ];

    const inRange = (value, start, end) => {
        if (start <= end) {
            return value >= start && value < end;
        }
        return value >= start || value < end;
    };

    const match = directionRanges.find(range => inRange(adjustedAngle, range.start, range.end));
    return match ? match.label : '';
}

function getCompassReferenceBounds() {
    const containerRect = container ? container.getBoundingClientRect() : null;
    if (!containerRect || !containerRect.width || !containerRect.height) return null;

    const circle = document.querySelector('.compass-circle');
    if (!circle) {
        return {
            left: 0,
            top: 0,
            width: containerRect.width,
            height: containerRect.height
        };
    }

    const circleRect = circle.getBoundingClientRect();
    return {
        left: circleRect.left - containerRect.left,
        top: circleRect.top - containerRect.top,
        width: circleRect.width,
        height: circleRect.height
    };
}


// 1. Place this mapping near the top (outside the function, for reuse)
const roomDirectionMap = [
  { keywords: ['pooja room', 'puja room', 'temple', 'mandir', 'puja ghar', 'worship room', 'prayer room', 'devagriha', 'poojalaya'], directions: ['North', 'Northeast', 'East'] },
  { keywords: ['kitchen', 'rasoi', 'bawarchi khana', 'cooking area', 'modular kitchen', 'dry kitchen', 'wet kitchen'], directions: ['Southeast', 'Northwest'] },
  { keywords: ['master bedroom', 'parents bedroom', 'shayya kaksh', 'sutra kaksh', 'main bedroom', 'elders room'], directions: ['Southwest', 'South', 'West'] },
  { keywords: ['living room', 'drawing room', 'baithak', 'sitting room', 'reception', 'guest lounge', 'hall'], directions: ['North', 'East', 'Northeast'] },
  { keywords: ['bathroom', 'toilet', 'bath room', 'washroom', 'shower', 'sauna', 'steam room', 'snana griha', 'shauchalay'], directions: ['Northwest', 'West', 'Southeast'] },
  { keywords: ['dining room', 'bhajan kaksh', 'eating area', 'food area', 'dining hall'], directions: ['West', 'Northwest', 'East'] },
  { keywords: ['study room', 'library', 'reading room', 'path kaksh', 'office', 'home office', 'gyan kaksh'], directions: ['North', 'Northeast', 'East'] },
  { keywords: ['children bedroom', 'kids room', 'bal kaksh', 'boys room', 'girls room'], directions: ['West', 'Northwest'] },
  { keywords: ['guest bedroom', 'atithi kaksh', 'visitor room'], directions: ['Northwest', 'West'] },
  { keywords: ['meditation room', 'dhyan kaksh', 'yoga room', 'meditation hall', 'yogashala'], directions: ['North', 'East', 'Northeast'] },
  { keywords: ['store room', 'storage', 'godown', 'bhandara griha', 'storage area'], directions: ['Northwest', 'West', 'South'] },
  { keywords: ['staircase', 'seedhiyan', 'stairs', 'stairway', 'steps', 'elevator', 'lift'], directions: ['Northwest', 'Southeast', 'West', 'South'] },
  { keywords: ['main door', 'entrance', 'main entrance', 'pradhan dwar', 'entry door', 'mukhya dwar'], directions: ['North', 'East', 'Northeast'] },
  { keywords: ['balcony', 'veranda', 'porch', 'baramda', 'sitout', 'open area'], directions: ['North', 'East', 'Northeast'] },
  { keywords: ['garage', 'car parking', 'vehicle shed', 'gaadi ghar'], directions: ['Northwest', 'West'] },
  { keywords: ['servant room', 'domestic help room', 'naukar room', 'sevak kaksh'], directions: ['Northwest', 'Southeast'] },
  { keywords: ['laundry room', 'washing area', 'dhobi ghat', 'clothes washing'], directions: ['Northwest', 'East'] },
  { keywords: ['pantry', 'store', 'provision room', 'ration storage'], directions: ['South', 'Southwest'] },
  { keywords: ['family room', 'tv room', 'entertainment room', 'recreation room'], directions: ['West', 'Northwest'] },
  { keywords: ['basement', 'tala griha', 'underground room'], directions: ['North', 'East', 'Northeast'] },
  { keywords: ['terrace', 'roof', 'chhat', 'upar ka chhat'], directions: ['North', 'East'] },
  { keywords: ['garden', 'lawn', 'bagicha', 'green area', 'plants area'], directions: ['North', 'East', 'Northeast'] },
  { keywords: ['water source', 'well', 'borewell', 'water tank', 'jal strot'], directions: ['North', 'East', 'Northeast'] },
  { keywords: ['septic tank', 'soak pit', 'waste disposal', 'mal nikal'], directions: ['Northwest', 'West'] },
  { keywords: ['compound wall', 'boundary wall', 'chardiwar', 'fence'], directions: ['North', 'East should be lower'] },
  { keywords: ['electric meter', 'meter room', 'bijli meter'], directions: ['East', 'Southeast'] },
  { keywords: ['inverter', 'generator', 'power backup', 'ups room'], directions: ['Southeast', 'Northwest'] },
  { keywords: ['overhead tank', 'water tank', 'sinchai tank', 'pani ka tank'], directions: ['West', 'Southwest'] },
  { keywords: ['fireplace', 'heater', 'agni sthan', 'heating area'], directions: ['Southeast'] },
  { keywords: ['cash locker', 'safe', 'money storage', 'dhan rakha'], directions: ['North', 'Northeast'] },
    { keywords: ['wardrobe', 'almirah', 'cupboard', 'storage cabinet', 'dresser'], directions: ['South', 'West', 'Southwest'] },
  { keywords: ['utility area', 'utility room', 'service area', 'service room'], directions: ['Northwest', 'Southeast'] },
  { keywords: ['jacuzzi', 'hot tub', 'spa', 'whirlpool'], directions: ['North', 'East', 'Northeast'] },
  { keywords: ['home theater', 'media room', 'cinema room', 'entertainment lounge'], directions: ['West', 'Northwest'] },
  { keywords: ['gym', 'exercise room', 'workout area', 'fitness room', 'vyayam kaksh'], directions: ['East', 'Southeast'] },
  { keywords: ['play room', 'kids play area', 'children activity room', 'khel kaksh'], directions: ['West', 'Northwest'] },
  { keywords: ['nursery', 'infant room', 'baby room', 'shishu kaksh'], directions: ['West', 'Northwest'] },
  { keywords: ['walk-in closet', 'dressing area', 'dressing room', 'kapda ghar'], directions: ['South', 'West', 'Southwest'] },
  { keywords: ['powder room', 'guest toilet', 'common bathroom', 'sadharan shauchalay'], directions: ['Northwest', 'West'] },
  { keywords: ['mud room', 'entryway', 'foyer', 'entrance lobby', 'pravesh kaksh'], directions: ['North', 'East', 'Northeast'] },
  { keywords: ['sun room', 'solarium', 'sun porch', 'surya kaksh'], directions: ['North', 'East', 'Northeast'] },
  { keywords: ['wine cellar', 'bar', 'wine storage', 'madira griha'], directions: ['South', 'Southwest'] },
  { keywords: ['art studio', 'craft room', 'hobby room', 'kala kaksh'], directions: ['North', 'Northeast'] },
  { keywords: ['music room', 'dance room', 'sangeet kaksh', 'nritya kaksh'], directions: ['North', 'Northeast'] },
  { keywords: ['game room', 'billiards room', 'indoor games', 'antar griha khel'], directions: ['West', 'Northwest'] },
  { keywords: ['library', 'study', 'reading nook', 'pustakalay'], directions: ['North', 'Northeast', 'East'] },
  { keywords: ['office', 'work from home', 'corner office', 'karyalay'], directions: ['North', 'Northeast', 'East'] },
  { keywords: ['waiting room', 'reception area', 'pratiksha kaksh'], directions: ['North', 'East'] },
  { keywords: ['panic room', 'safe room', 'security room', 'suraksha kaksh'], directions: ['Southwest'] },
  { keywords: ['green house', 'plant room', 'nursery garden', 'paudha griha'], directions: ['North', 'East'] },

  // Structural elements:
  { keywords: ['columns', 'pillars', 'beams', 'structural support', 'stambh'], directions: ['South', 'West', 'Southwest'] },
  { keywords: ['load bearing wall', 'structural wall', 'support wall', 'bhojya deewar'], directions: ['South', 'West'] },
  { keywords: ['partition wall', 'divider', 'separation wall', 'vibhajak deewar'], directions: ['As needed'] },

  // Outdoor areas:
  { keywords: ['swimming pool', 'pool', 'talarav', 'swimming area'], directions: ['North', 'East', 'Northeast'] },
  { keywords: ['patio', 'deck', 'outdoor seating', 'bahari baithak'], directions: ['North', 'East'] },
  { keywords: ['gazebo', 'pergola', 'shade structure', 'chhaya griha'], directions: ['North', 'East'] },
  { keywords: ['barbecue area', 'bbq', 'outdoor kitchen', 'rasoi bahar'], directions: ['Southeast'] },
  { keywords: ['fire pit', 'bonfire area', 'agni kund', 'campfire area'], directions: ['Southeast'] },

  // Service areas:
  { keywords: ['meter room', 'utility closet', 'service closet', 'seva kaksh'], directions: ['Southeast', 'Northwest'] },
  { keywords: ['electrical panel', 'fuse box', 'circuit breaker', 'bijli board'], directions: ['East', 'Southeast'] },
  { keywords: ['plumbing chase', 'pipe space', 'water lines area', 'nali sthan'], directions: ['Northwest'] },
  { keywords: ['HVAC room', 'ac plant room', 'heating cooling', 'tapun shital'], directions: ['Southeast', 'Northwest'] },

  // Vastu specific terms:
  { keywords: ['brahmasthan', 'center', 'central area', 'madhya sthan'], directions: ['Keep empty'] },
  { keywords: ['vastu tips', 'remedies', 'corrections', 'upay'], directions: ['Varies'] },
  { keywords: ['pyramid placement', 'crystal area', 'yantra sthan'], directions: ['Northeast'] },
  { keywords: ['salt bowl', 'negative energy', 'remedy area'], directions: ['Northwest'] },

  // Architectural features:
  { keywords: ['skylight', 'roof window', 'natural light', 'chhat roshni'], directions: ['North', 'East'] },
  { keywords: ['bay window', 'projected window', 'jharokha', 'window seat'], directions: ['North', 'East'] },
  { keywords: ['French doors', 'sliding doors', 'patio doors', 'dwar patti'], directions: ['North', 'East'] },
  { keywords: ['archway', 'open arch', 'decorative arch', 'mehraab'], directions: ['North', 'East'] },

  // Indian traditional terms:
  { keywords: ['chowk', 'courtyard', 'angan', 'inner courtyard'], directions: ['Center', 'North'] },
  { keywords: ['jali', 'lattice', 'decorative screen', 'jaali work'], directions: ['North', 'East'] },
  { keywords: ['vedika', 'platform', 'raised area', 'uchch sthan'], directions: ['Southwest'] },
  { keywords: ['kunda', 'sacred fire', 'hawan kund', 'yagya sthal'], directions: ['Northeast'] },

  // Modern smart home features:
  { keywords: ['server room', 'network closet', 'smart home hub', 'tantra kaksh'], directions: ['Southeast', 'Northwest'] },
  { keywords: ['charging station', 'electronics area', 'gadget zone'], directions: ['Southeast'] },
  { keywords: ['home automation', 'control panel', 'smart control'], directions: ['Southeast'] }
];

function getDirectionsForRoom(roomName) {
  if (!roomName) return [];
  const name = roomName.trim().toLowerCase();
  const allDirections = [];

  for (const mapping of roomDirectionMap) {
    for (const keyword of mapping.keywords) {
      if (name.includes(keyword.toLowerCase()) || keyword.toLowerCase().includes(name)) {
        // Add all directions from this mapping
        allDirections.push(...mapping.directions);
      }
    }
  }

  // Remove duplicates and return
  return [...new Set(allDirections)];
}

function findRoomDirectionMapping(roomName) {
  const name = String(roomName || '').trim().toLowerCase();
  if (!name) return null;

  const matches = roomDirectionMap.flatMap(mapping => mapping.keywords
    .map(keyword => ({ mapping, keyword: String(keyword).trim().toLowerCase() }))
    .filter(item => item.keyword && (name === item.keyword || name.includes(item.keyword)))
  );

  // Prefer the most specific phrase (for example, "master bedroom" before
  // "bedroom") so the displayed badge and detailed check always agree.
  matches.sort((a, b) => b.keyword.length - a.keyword.length);
  return matches[0]?.mapping || null;
}


// Replace your generateVastuResults function with this:
function generateVastuResults(rooms) {
  const results = [];
  if (!rooms || !Array.isArray(rooms)) return results;

  const validationText = getValidationMessages();

    const recognizedRooms = rooms.filter(room => {
        if (!room || !room.name) return false;
        const roomName = room.name.toLowerCase();
        return combinedRoomNames.some(name =>
          roomName.includes(name.toLowerCase()) ||
      name.toLowerCase().includes(roomName)
    );
  });

  if (recognizedRooms.length === 0) {
    results.push({
      correct: false,
      message: validationText.noRecognizedRooms
    });
  }

    recognizedRooms.forEach(room => {
        if (!room || !room.name || !room.direction) return;

        const roomName = room.name.toLowerCase();
        const direction = room.direction;
        const displayDirection = getDirectionLabel(direction);
        const remedies = getLocalizedVastuRemedies(roomName, direction);

    const roomMapping = findRoomDirectionMapping(roomName);
    const allowedDirections = roomMapping?.directions || [];

    if (allowedDirections.length === 0) {
      results.push({
        correct: true,
        message: validationText.generalLocation(room.name, displayDirection)
      });
    } else {
      const displayAllowedDirections = allowedDirections.map(dir => getDirectionLabel(dir));
      const correct = allowedDirections.includes(direction);
      const idealStr = displayAllowedDirections.length === 1
        ? displayAllowedDirections[0]
        : displayAllowedDirections.join(', ');
      results.push({
        correct,
        message: correct
          ? validationText.correctPlacement(room.name, displayDirection, idealStr)
          : validationText.incorrectPlacement(room.name, displayDirection, idealStr),
        remedies: correct ? null : remedies,
        concerns: correct ? null : (window.VastuPlacementData?.getPlacementImpact(room.name, direction) || []),
        roomName: room.name,
        direction
      });
    }
  });

    const presentDirections = new Set(
      rooms
        .filter(room => room && room.direction)
        .map(room => room.direction)
    );

    if (presentDirections.size === 0) {
      return [{
        correct: false,
        message: validationText.noResults
      }];
    }

    const centerOccupied = rooms.some(room => room && room.direction === "Center");
    const centerMessage = centerOccupied
      ? (validationText.centerOccupied || '⚠️ Center (Brahmasthan) should be kept open and blank as per Vastu – do not place rooms or elements here.')
      : (validationText.centerOpen || '✅ Center (Brahmasthan) is open and blank as per Vastu. This is ideal.');

    results.unshift({
      correct: !centerOccupied,
      message: centerMessage,
      concerns: centerOccupied
        ? (window.VastuPlacementData?.getPlacementImpact('Brahmasthan', 'Center') || ['restricted movement and a heavy or unsettled central area'])
        : null
    });

    return results;
  }



function displayValidationResults(results) {
    const resultsContainer = document.getElementById('validationResults');
    if (!resultsContainer) return;

    if (!resultsContainer.dataset.remedyListenerAttached) {
        resultsContainer.addEventListener('click', (event) => {
            const target = event.target.closest('.validation-result.incorrect');
            if (!target) return;

            try {
                const validationResults = Array.from(resultsContainer.querySelectorAll('.validation-result'));
                validationResults.forEach(result => result.classList.remove('selected-result'));
                target.classList.add('selected-result');

                const remedies = getRemediesForResult(target);

                speakRemedies(remedies);
            } catch (error) {
                console.error('Error parsing remedies:', error);
                speakRemedies([]);
            }
        });
        resultsContainer.dataset.remedyListenerAttached = 'true';
    }

    resultsContainer.innerHTML = '';

    const validationText = getValidationMessages();

    const floorFeatureSelect = document.getElementById('floorFeatureSelect');
    if (floorFeatureSelect && floorFeatureSelect.value === 'no') {
        results.unshift({
            correct: true,
            message: validationText.guestBedroom
        });
    }



    // Original Vastu validation results display
    results.forEach(result => {
        if (!result) return;

        const div = document.createElement('div');
        div.className = `validation-result ${result.correct ? 'correct' : 'incorrect'}`;
        div.innerHTML = result.message;
        if (!result.correct && Array.isArray(result.concerns) && result.concerns.length) {
            const concernBlock = document.createElement('div');
            concernBlock.className = 'vastu-concerns';
            const heading = document.createElement('strong');
            heading.textContent = 'Possible concerns linked in traditional Vastu:';
            const list = document.createElement('ul');
            result.concerns.forEach(concern => {
                const item = document.createElement('li');
                item.textContent = concern;
                list.appendChild(item);
            });
            const note = document.createElement('small');
            note.textContent = 'These are traditional associations, not a diagnosis or a guaranteed outcome.';
            concernBlock.append(heading, list, note);
            div.appendChild(concernBlock);
        }
        // Store export-friendly versions for PDF generation (keep text and HTML)
        const plainMessage = div.textContent.replace(/\s+/g, ' ').trim();
        div.dataset.message = plainMessage;
        div.dataset.messageHtml = div.innerHTML;

        if (!result.correct) {
            const remedies = Array.isArray(result.remedies) ? result.remedies : [];
            div.dataset.remedies = JSON.stringify(remedies);
            if (result.roomName) {
                div.dataset.roomName = result.roomName;
            }
            if (result.direction) {
                div.dataset.direction = result.direction;
            }
        }

        resultsContainer.appendChild(div);
    });

    const popup = document.getElementById('validationPopup');
    if (popup) popup.style.display = 'block';

    speakValidationOutcome(results);

    highlightFirstIncorrectResult(resultsContainer);
}

function highlightFirstIncorrectResult(resultsContainer) {
    if (!resultsContainer) return;

    const incorrectResults = Array.from(resultsContainer.querySelectorAll('.validation-result.incorrect'));
    if (incorrectResults.length === 0) return;

    const resultWithDetails = incorrectResults.find(result => result.dataset.roomName && result.dataset.direction);
    const target = resultWithDetails || incorrectResults[0];

    incorrectResults.forEach(result => result.classList.remove('selected-result'));
    target.classList.add('selected-result');

    const remedies = getRemediesForResult(target);

    speakRemedies(remedies);
}

function getRemediesForResult(target) {
    if (!target) return [];

    let remedies = [];

    if (target.dataset.roomName && target.dataset.direction) {
        remedies = getLocalizedVastuRemedies(target.dataset.roomName, target.dataset.direction);
    }

    if ((!Array.isArray(remedies) || remedies.length === 0) && target.dataset.remedies) {
        try {
            remedies = JSON.parse(target.dataset.remedies) || [];
        } catch (error) {
            console.error('Error parsing remedies:', error);
            remedies = [];
        }
    }

    if (!Array.isArray(remedies)) return [];

    return remedies;
}

function closeValidationPopup() {
    const popup = document.getElementById('validationPopup');
    if (popup) popup.style.display = 'none';
}

// PDF font helpers for multilingual support
const PX_PER_MM = 96 / 25.4;
const MM_PER_POINT = 25.4 / 72;

function getPdfLineHeight(fontSize = 10) {
    // Use a 1.25 line-height multiplier to match the visual height of the font
    // while keeping spacing consistent across PDF and canvas renderings.
    return fontSize * MM_PER_POINT * 1.25;
}

function ensureHindiFontLoaded() {
    if (!hindiFontLoadPromise) {
        if (window.FontFace && document.fonts) {
            const devanagariFace = new FontFace(HINDI_FONT_FAMILY, `url(${HINDI_FONT_URL})`, {
                weight: '400',
                style: 'normal'
            });

            hindiFontLoadPromise = devanagariFace
                .load()
                .then((loadedFace) => {
                    document.fonts.add(loadedFace);
                    return document.fonts.load(`16px "${HINDI_FONT_FAMILY}"`);
                })
                .catch((err) => {
                    console.warn('Hindi font failed to load, falling back to defaults.', err);
                    return Promise.resolve();
                });
        } else {
            hindiFontLoadPromise = Promise.resolve();
        }
    }

    return hindiFontLoadPromise;
}

function bufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);

    for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
    }

    return btoa(binary);
}

function getHindiFontData() {
    if (!hindiFontDataPromise) {
        hindiFontDataPromise = fetch(HINDI_FONT_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch Hindi font');
                }
                return response.arrayBuffer();
            })
            .then(bufferToBase64)
            .catch((error) => {
                console.warn('Unable to load Hindi font for PDF embedding.', error);
                return null;
            });
    }

    return hindiFontDataPromise;
}

async function ensureHindiPdfFont(pdf) {
    if (pdf.__hindiFontReady) {
        return true;
    }

    const fontData = await getHindiFontData();

    if (!fontData) {
        pdf.__hindiFontReady = false;
        return false;
    }

    pdf.addFileToVFS('NotoSansDevanagari-Regular.ttf', fontData);
    pdf.addFont('NotoSansDevanagari-Regular.ttf', HINDI_FONT_FAMILY, 'normal');
    pdf.__hindiFontReady = true;
    return true;
}

function renderTextToCanvas(lines, widthMm, fontSize, color, fontFamily) {
    const canvas = document.createElement('canvas');
    const widthPx = Math.max(1, Math.ceil(widthMm * PX_PER_MM));
    const lineHeightMm = getPdfLineHeight(fontSize);
    const lineHeightPx = Math.ceil(lineHeightMm * PX_PER_MM);
    const pxFontSize = fontSize * (96 / 72); // Convert PDF font size (pt) to px for canvas
    const paddingPx = Math.ceil(pxFontSize * 0.25); // Extra room to avoid top cropping
    const resolvedFontFamily = fontFamily || '"Noto Sans", "Poppins", "Arial Unicode MS", Arial, sans-serif';

    canvas.width = widthPx;
    canvas.height = Math.max(lineHeightPx * lines.length + paddingPx * 2, lineHeightPx + paddingPx * 2);

    const context = canvas.getContext('2d');
    context.font = `${pxFontSize}px ${resolvedFontFamily}`;
    context.fillStyle = `rgb(${color.join(',')})`;
    context.textBaseline = 'top';
    context.direction = 'ltr';

    lines.forEach((line, idx) => {
        context.fillText(line, 0, paddingPx + idx * lineHeightPx);
    });

    return {
        dataUrl: canvas.toDataURL('image/png'),
        heightMm: canvas.height / PX_PER_MM
    };
}

function extractPlainTextFromHtml(htmlContent) {
    if (!htmlContent) return '';
    const temp = document.createElement('div');
    temp.innerHTML = htmlContent;
    return temp.textContent.replace(/\s+/g, ' ').trim();
}

function drawLocalizedText(pdf, text, x, y, options = {}) {
    const {
        maxWidth,
        fontSize = 10,
        color = [0, 0, 0],
        fontName = 'helvetica',
        fontStyle = 'normal'
    } = options;

    const useCanvasText = MULTILINGUAL_CANVAS_LANGUAGES.has(currentLanguage);
    const lines = Array.isArray(text)
        ? text
        : (maxWidth ? pdf.splitTextToSize(text, maxWidth) : [text]);

    // Use canvas rendering for Indic scripts to avoid missing glyphs when the embedded
    // PDF fonts lack coverage. This rasterizes text with browser fonts, keeping
    // Kannada, Tamil, Telugu, Malayalam, and Hindi characters intact.
    if (useCanvasText) {
        const widthMm = maxWidth || (pdf.internal.pageSize.getWidth() - x);
        const canvasFontStack = `"${HINDI_FONT_FAMILY}", "Noto Sans Kannada", "Noto Sans Tamil", "Noto Sans Telugu", "Noto Sans Malayalam", "Noto Sans", "Poppins", "Arial Unicode MS", Arial, sans-serif`;
        const { dataUrl, heightMm } = renderTextToCanvas(lines, widthMm, fontSize, color, canvasFontStack);
        pdf.addImage(dataUrl, 'PNG', x, y, widthMm, heightMm);
        return heightMm;
    }

    const usePdfHindiFont = currentLanguage === 'hi' && pdf.__hindiFontReady;
    const resolvedFontName = usePdfHindiFont ? HINDI_FONT_FAMILY : fontName;
    const resolvedFontStyle = currentLanguage === 'hi' ? 'normal' : fontStyle;

    pdf.setFont(resolvedFontName, resolvedFontStyle);
    pdf.setFontSize(fontSize);
    pdf.setTextColor(...color);
    pdf.text(lines, x, y);
    return lines.length * getPdfLineHeight(fontSize);
}

// PDF Generation - Fixed Version
function setPdfProgress(isActive, title = 'Preparing your PDF') {
    const overlay = document.getElementById('pdfProgressOverlay');
    const titleElement = document.getElementById('pdfProgressTitle');
    if (!overlay) return;
    if (titleElement) titleElement.textContent = title;
    overlay.classList.toggle('is-active', isActive);
    overlay.setAttribute('aria-hidden', String(!isActive));
}

function waitForPdfProgressPaint() {
    return new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
}

function withTimeout(promise, timeoutMs, message) {
    let timeoutId;
    const timeout = new Promise((_, reject) => {
        timeoutId = setTimeout(() => reject(new Error(message)), timeoutMs);
    });
    return Promise.race([promise, timeout]).finally(() => clearTimeout(timeoutId));
}

function waitForImageToLoad(image, timeoutMs = 10000) {
    if (!image) return Promise.reject(new Error('Plan image is unavailable'));
    if (image.complete && image.naturalWidth > 0) return Promise.resolve();

    return withTimeout(new Promise((resolve, reject) => {
        image.addEventListener('load', resolve, { once: true });
        image.addEventListener('error', () => reject(new Error('Plan image failed to load')), { once: true });
    }), timeoutMs, 'Plan image took too long to load');
}

function getPdfCaptureScale(element) {
    const rect = element.getBoundingClientRect();
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const desiredScale = Math.max(2, pixelRatio * 1.5);
    // Mobile browsers commonly terminate a tab when a canvas allocation is too
    // large. Cap the capture at 16 MP while preserving a minimum useful scale.
    const maxPixels = 16000000;
    const pixelLimitedScale = Math.sqrt(maxPixels / Math.max(1, rect.width * rect.height));
    return Math.max(1, Math.min(3, desiredScale, pixelLimitedScale));
}

function addPdfPageNumbering(pdf) {
    const pageCount = pdf.getNumberOfPages();
    for (let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1) {
        pdf.setPage(pageNumber);
        pdf.setDrawColor(225, 225, 225);
        pdf.line(15, 286, 195, 286);
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(8);
        pdf.setTextColor(115, 115, 115);
        pdf.text(`Vastu Validation Report  |  Page ${pageNumber} of ${pageCount}`, 105, 291, { align: 'center' });
    }
}

window.setPdfProgress = setPdfProgress;
window.waitForPdfProgressPaint = waitForPdfProgressPaint;

async function generatePdfReport() {
    const jsPDF = window.jspdf?.jsPDF;
    const strings = getCurrentStrings();
    const messages = strings.messages || {};
    const alerts = messages.alerts || {};
    const { labels } = strings;
    if (!jsPDF) {
        console.error('jsPDF library not loaded');
        showAlertPopup(alerts.pdfLibraryMissing, alerts.pdfUnavailableTitle);
        return;
    }

    if (isPdfGenerationInProgress) return;

    if (!imageElement || !imageElement.src || imageElement.src === '') {
        showAlertPopup(alerts.uploadPlanFirst, alerts.uploadRequiredTitle);
        return;
    }

    isPdfGenerationInProgress = true;
    const downloadBtn = document.getElementById('downloadPdfButton');
    const originalText = downloadBtn ? downloadBtn.innerHTML : '';
    if (downloadBtn) {
        downloadBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="fa-spin" style="margin-right:4px"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg> Generating PDF...';
        downloadBtn.disabled = true;
    }
    setPdfProgress(true);
    await waitForPdfProgressPaint();

    try {
        await waitForImageToLoad(imageElement);
        if (document.fonts?.ready) {
            await withTimeout(document.fonts.ready, 5000, 'Fonts took too long to load').catch(() => {});
        }
        if (currentLanguage === 'hi') {
            await ensureHindiFontLoaded();
        }

        const downloadSpeech = getCurrentSpeechStrings().labels?.downloadPdf || labels?.downloadPdf;
        if (downloadSpeech) {
            speakMessage(downloadSpeech);
        }

        const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4', compress: true });
        if (currentLanguage === 'hi') {
            await ensureHindiPdfFont(pdf);
        }
        const margin = 15;
        const pdfWidth = pdf.internal.pageSize.getWidth() - margin * 2;
        let yPosition = 20;

        // Add header
        const reportTitle = labels.validationTitle || 'Vastu Validation Results';
        drawLocalizedText(pdf, reportTitle, margin, yPosition, {
            fontSize: 16,
            color: [110, 120, 133]
        });
        drawLocalizedText(pdf, 'https://www.apzok.com/online-2d-plan-vastu-check', margin, yPosition + 7, {
            fontSize: 9.5,
            color: [102, 102, 102]
        });
        yPosition += 20;

        // Capture the entire container with annotations and compass
        const imgData = await captureContainerAsImage();
        if (!imgData) {
            throw new Error('Failed to capture image');
        }

        // Add the captured image to PDF with decreased, properly proportioned size
        const imgProps = pdf.getImageProperties(imgData);
        const maxPlanWidth = 124;
        const maxPlanHeight = 85;
        const ratio = Math.min(maxPlanWidth / imgProps.width, maxPlanHeight / imgProps.height);
        const finalImgWidth = imgProps.width * ratio;
        const finalImgHeight = imgProps.height * ratio;
        const imageX = margin + (pdfWidth - finalImgWidth) / 2;

        pdf.setDrawColor(218, 224, 220);
        pdf.setLineWidth(0.3);
        pdf.rect(imageX - 0.5, yPosition - 0.5, finalImgWidth + 1, finalImgHeight + 1);

        pdf.addImage(imgData, 'JPEG', imageX, yPosition, finalImgWidth, finalImgHeight, undefined, 'FAST');
        drawLocalizedText(pdf, 'Note: N = North, NE = Northeast, etc.', margin, yPosition + finalImgHeight + 4, {
            fontSize: 8,
            color: [90, 90, 90]
        });
        yPosition += finalImgHeight + 12;

        // Add validation results section header
        drawLocalizedText(pdf, reportTitle, margin, yPosition, {
            fontSize: 13,
            color: [110, 120, 133]
        });
        yPosition += 7;

        // Add validation results with remedies
        const resultsElement = document.getElementById('validationResults');
        if (resultsElement && resultsElement.children.length > 0) {
            Array.from(resultsElement.children).forEach((result, index) => {
                if (yPosition > pdf.internal.pageSize.getHeight() - 30) {
                    pdf.addPage();
                    yPosition = 20;
                }

                // Prefer the stored plain-text message for PDF to avoid any HTML parsing issues
                const directMessage = result.dataset.message || '';
                const fallbackHtml = result.dataset.messageHtml || result.innerHTML || '';
                const extractedText = extractPlainTextFromHtml(directMessage || fallbackHtml || result.textContent || '');
                const resultText = (extractedText || directMessage || '').trim() || 'Vastu result unavailable';
                const isCorrect = result.classList.contains('correct');
                const textColor = isCorrect ? [40, 167, 69] : [220, 53, 69];

                const numberedLabel = `${index + 1}.`;
                drawLocalizedText(pdf, numberedLabel, margin, yPosition, {
                    fontSize: 11,
                    color: textColor,
                    maxWidth: pdfWidth
                });

                // Rely on color alone for status to avoid glyph gaps from icons or labels
                const labeledText = resultText;
                const textHeight = drawLocalizedText(pdf, labeledText, margin + 10, yPosition, {
                    fontSize: 11,
                    color: textColor,
                    maxWidth: pdfWidth
                });
                yPosition += textHeight + 2;

                // Add remedies if available
                if (result.dataset.remedies && !result.classList.contains('correct')) {
                    try {
                        const remedies = JSON.parse(result.dataset.remedies);
                        if (remedies && remedies.length > 0) {
                            remedies.forEach(remedy => {
                                if (yPosition > pdf.internal.pageSize.getHeight() - 40) {
                                    pdf.addPage();
                                    yPosition = 20;
                                }

                                const remedyTitle = `Remedies for ${remedy.title}:`;
                                const titleHeight = drawLocalizedText(pdf, remedyTitle, margin + 5, yPosition, {
                                    fontSize: 10,
                                    color: [110, 120, 133],
                                    maxWidth: pdfWidth - 10
                                });
                                yPosition += titleHeight + 2;

                                remedy.suggestions.forEach((suggestion, i) => {
                                    if (yPosition > pdf.internal.pageSize.getHeight() - 10) {
                                        pdf.addPage();
                                        yPosition = 20;
                                    }
                                    const suggestionText = `• ${suggestion}`;
                                    const suggestionHeight = drawLocalizedText(pdf, suggestionText, margin + 10, yPosition, {
                                        fontSize: 10,
                                        color: [0, 0, 0],
                                        maxWidth: pdfWidth - 15
                                    });
                                    yPosition += suggestionHeight;
                                });
                                yPosition += 3;
                            });
                        }
                    } catch (e) {
                        console.error('Error parsing remedies:', e);
                    }
                }

                yPosition += 5;
            });
        } else {
            // No validation results available
            drawLocalizedText(pdf, 'No validation results available. Please run Vastu validation first.', margin, yPosition, {
                fontSize: 11,
                color: [102, 102, 102],
                maxWidth: pdfWidth
            });
            yPosition += 10;
        }

        // Add general Vastu remedies section
        if (yPosition > pdf.internal.pageSize.getHeight() - 50) {
            pdf.addPage();
            yPosition = 20;
        }

        const generalTipsTitle = labels.generalVastuTips || 'General Vastu Tips';
        drawLocalizedText(pdf, generalTipsTitle, margin, yPosition, {
            fontSize: 15,
            color: [110, 120, 133]
        });
        yPosition += 8;

        const generalRemedies = getLocalizedGeneralVastuRemedies();

        generalRemedies.forEach((remedy, i) => {
            if (yPosition > pdf.internal.pageSize.getHeight() - 10) {
                pdf.addPage();
                yPosition = 20;
            }
            const remedyHeight = drawLocalizedText(pdf, `${i + 1}. ${remedy}`, margin, yPosition, {
                fontSize: 11,
                color: [0, 0, 0],
                maxWidth: pdfWidth
            });
            yPosition += remedyHeight;
        });

        // Add disclaimer
        if (yPosition > pdf.internal.pageSize.getHeight() - 50) {
            pdf.addPage();
            yPosition = 20;
        }

        const disclaimerTitle = labels.disclaimerTitle || 'Disclaimer:';
        drawLocalizedText(pdf, disclaimerTitle, margin, yPosition, {
            fontSize: 11,
            color: [255, 0, 0],
            maxWidth: pdfWidth
        });
        yPosition += 5;

        const disclaimerText = messages.pdfDisclaimerLines || [
            '1. This report is generated automatically and should be used for reference only.',
            '2. For accurate Vastu analysis, please consult a qualified Vastu expert.',
            '3. The suggestions provided are general remedies and may not suit every situation.',
            '4. The accuracy of room directions depends on proper north alignment of your plan.',
            '5. Results are based on standard Vastu principles and may vary case by case.'
        ];

        disclaimerText.forEach(line => {
            if (yPosition > pdf.internal.pageSize.getHeight() - 10) {
                pdf.addPage();
                yPosition = 20;
            }
            const lines = pdf.splitTextToSize(line, pdfWidth);
            const textHeight = drawLocalizedText(pdf, lines, margin, yPosition, {
                fontSize: 10,
                color: [0, 0, 0],
                maxWidth: pdfWidth
            });
            yPosition += textHeight;
        });

        // Architectural Vastu Reference Guide for all elements (PDF Exclusive)
        if (typeof window.getVastuElementsGuide === 'function') {
            const guide = window.getVastuElementsGuide(currentLanguage);
            if (guide && Array.isArray(guide.categories)) {
                pdf.addPage();
                yPosition = 20;
                const isIndic = ['hi', 'kn', 'ta', 'te', 'ml'].includes(currentLanguage);

                if (isIndic && window.renderIndicVastuHeading && window.renderIndicVastuText) {
                    const topBadge = window.renderIndicVastuHeading(guide.title, pdfWidth, 1, 2.5);
                    pdf.addImage(topBadge.dataUrl, 'PNG', margin, yPosition, pdfWidth, topBadge.heightMm, undefined, 'FAST');
                    yPosition += topBadge.heightMm + 2;

                    const heading = window.renderIndicVastuHeading(guide.heading, pdfWidth, 2, 2.5);
                    pdf.addImage(heading.dataUrl, 'PNG', margin, yPosition, pdfWidth, heading.heightMm, undefined, 'FAST');
                    yPosition += heading.heightMm + 2.5;

                    const desc = window.renderIndicVastuText(guide.description, pdfWidth, { size: 8, color: [75, 85, 80] }, 2.5);
                    pdf.addImage(desc.dataUrl, 'PNG', margin, yPosition, pdfWidth, desc.heightMm, undefined, 'FAST');
                    yPosition += desc.heightMm + 4;
                } else {
                    const titleHeight = drawLocalizedText(pdf, guide.title, margin, yPosition, {
                        fontSize: 8.5,
                        color: [162, 120, 43],
                        maxWidth: pdfWidth
                    });
                    yPosition += titleHeight + 2;

                    const headingHeight = drawLocalizedText(pdf, guide.heading, margin, yPosition, {
                        fontSize: 14,
                        color: [35, 68, 56],
                        maxWidth: pdfWidth
                    });
                    yPosition += headingHeight + 2.5;

                    const descHeight = drawLocalizedText(pdf, guide.description, margin, yPosition, {
                        fontSize: 8,
                        color: [75, 85, 80],
                        maxWidth: pdfWidth
                    });
                    yPosition += descHeight + 4;
                }

                guide.categories.forEach(section => {
                    if (yPosition > pdf.internal.pageSize.getHeight() - 25) {
                        pdf.addPage();
                        yPosition = 20;
                    }

                    if (isIndic && window.renderIndicVastuHeading) {
                        const secHeading = window.renderIndicVastuHeading(section.category, pdfWidth, 3, 2.5);
                        pdf.addImage(secHeading.dataUrl, 'PNG', margin, yPosition, pdfWidth, secHeading.heightMm, undefined, 'FAST');
                        yPosition += secHeading.heightMm + 2.5;
                    } else {
                        const secHeight = drawLocalizedText(pdf, section.category, margin, yPosition, {
                            fontSize: 11,
                            color: [35, 68, 56],
                            maxWidth: pdfWidth
                        });
                        yPosition += secHeight + 2.5;
                    }

                    section.items.forEach(item => {
                        if (isIndic && window.renderIndicVastuCard) {
                            const card = window.renderIndicVastuCard(item, guide.idealLabel || 'Ideal:', pdfWidth, 2.5);
                            if (yPosition + card.heightMm > pdf.internal.pageSize.getHeight() - 15) {
                                pdf.addPage();
                                yPosition = 20;
                            }
                            pdf.addImage(card.dataUrl, 'PNG', margin, yPosition, pdfWidth, card.heightMm, undefined, 'FAST');
                            yPosition += card.heightMm + 2.2;
                        } else {
                            const ruleLines = pdf.splitTextToSize(item.rules, pdfWidth - 7);
                            const boxHeight = 7.5 + ruleLines.length * 3.4;
                            if (yPosition + boxHeight > pdf.internal.pageSize.getHeight() - 15) {
                                pdf.addPage();
                                yPosition = 20;
                            }

                            pdf.setDrawColor(226, 232, 228);
                            pdf.setLineWidth(0.2);
                            pdf.setFillColor(252, 253, 251);
                            pdf.roundedRect(margin, yPosition, pdfWidth, boxHeight, 1.2, 1.2, 'FD');

                            pdf.setFont('helvetica', 'bold');
                            pdf.setFontSize(8.5);
                            pdf.setTextColor(35, 68, 56);
                            pdf.text(item.name, margin + 3, yPosition + 4.2);

                            pdf.setFont('helvetica', 'bold');
                            pdf.setFontSize(7.5);
                            pdf.setTextColor(162, 120, 43);
                            pdf.text(`${guide.idealLabel || 'Ideal:'} ${item.zone}`, margin + pdfWidth - 3, yPosition + 4.2, { align: 'right' });

                            pdf.setFont('helvetica', 'normal');
                            pdf.setFontSize(7.5);
                            pdf.setTextColor(65, 75, 70);
                            let lineY = yPosition + 8;
                            for (const line of ruleLines) {
                                pdf.text(line, margin + 3, lineY);
                                lineY += 3.4;
                            }

                            yPosition += boxHeight + 2.5;
                        }
                    });
                    yPosition += 2;
                });
            }
        }

        addPdfPageNumbering(pdf);
        // Save the PDF
        pdf.save('Vastu-Validation-Report.pdf');

        // Show success message in the HTML UI
        const androidStatus = document.getElementById('androidSaveStatus');
        if (androidStatus) {
            androidStatus.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px;vertical-align:middle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg> PDF Report Saved in <b>Downloads/Apzok Vastu</b>';
            androidStatus.style.display = 'block';
            androidStatus.style.padding = '15px';
            androidStatus.style.margin = '15px 28px';
            androidStatus.style.borderRadius = '8px';
            androidStatus.style.background = '#e8f5e9';
            androidStatus.style.color = '#2e7d32';
            androidStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        const validationStatus = document.getElementById('validationSaveStatus');
        if (validationStatus) {
            validationStatus.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px;vertical-align:middle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg> Saved in Downloads/Apzok Vastu';
            validationStatus.style.display = 'block';

            // Hide after 5 seconds
            setTimeout(() => {
                validationStatus.style.display = 'none';
            }, 5000);
        }
    } catch (error) {
        console.error('Error generating PDF:', error);
        showAlertPopup(`${alerts.pdfErrorPrefix}${error.message}`, alerts.pdfErrorTitle);
    } finally {
        isPdfGenerationInProgress = false;
        setPdfProgress(false);
        if (downloadBtn) {
            downloadBtn.innerHTML = originalText || `<i class="fas fa-download"></i> ${labels.downloadPdf}`;
            downloadBtn.disabled = false;
        }
    }
}

function getImageDataUrl(imgElement) {
    return new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = imgElement.naturalWidth;
        canvas.height = imgElement.naturalHeight;
        ctx.drawImage(imgElement, 0, 0);
        resolve(canvas.toDataURL('image/jpeg'));
    });
}

// Language functions
function toggleLanguageOptions() {
    const options = document.getElementById('languageOptions');
    if (options) options.classList.toggle('show');
}

function hideLanguageOptions() {
    const options = document.getElementById('languageOptions');
    if (options) options.classList.remove('show');
}

function handleGlobalDropdownClose(event) {
    const languageSelector = document.getElementById('languageSelector');

    if (languageSelector && !languageSelector.contains(event.target)) {
        hideLanguageOptions();
    }
}

function shouldUseMobileLabels() {
    const viewportMatcher = window.matchMedia ? window.matchMedia('(max-width: 768px)') : null;
    const matchesViewport = viewportMatcher ? viewportMatcher.matches : false;
    return isMobileDevice() || matchesViewport;
}

function applyLanguageText(lang) {
    document.documentElement.lang = lang;
    const strings = getCurrentStrings(lang);
    const { labels, options } = strings;
    const workspaceStrings = workspaceUiTranslations[lang] || workspaceUiTranslations.en;
    document.querySelectorAll('[data-ui]').forEach((element) => {
        const translatedText = workspaceStrings[element.dataset.ui];
        if (translatedText) element.textContent = translatedText;
    });
    const settingsPanel = document.getElementById('workspaceSettings') || document.querySelector('.settings-panel');
    const controlsText = workspaceStrings.controls;
    if (settingsPanel) settingsPanel.setAttribute('aria-label', workspaceStrings.continuePlanToolsButton);
    document.getElementById('workspaceMenu')?.setAttribute('aria-label', controlsText);
    document.getElementById('workspaceMenuButton')?.setAttribute('title', controlsText);
    document.getElementById('setupLanguageOverlay')?.setAttribute('aria-label', workspaceStrings.changeLanguage);
    document.querySelectorAll('.language-option').forEach(option => {
        const labelEl = option.querySelector('.language-option__label');
        const langCode = option.dataset.lang;
        if (labelEl && languageOptionLabels[langCode]) {
            labelEl.textContent = languageOptionLabels[langCode];
        }
    });
    const uploadButton = document.getElementById('uploadButton');
    const pdfToImageUploadButton = document.getElementById('pdfToImageUploadButton');
    const addAnnotationBtn = document.getElementById('addAnnotationBtn');
    const scanBtn = document.getElementById('scanBtn') || document.getElementById('ocrScanBtn');
    const advancedOcrBtn = document.getElementById('advancedOcrBtn');
    const advancedAnalyzerBtn = document.getElementById('advancedAnalyzerBtn');
    const validateBtn = document.getElementById('validateBtn');
    const compactLabels = shouldUseMobileLabels();

    const scanLabel = compactLabels ? labels.scanShort : labels.scan;
    const validateLabel = compactLabels ? labels.validateShort : labels.validate;
    const addLabel = compactLabels ? (labels.addNameShort || 'T') : labels.addName;

    if (pdfToImageUploadButton) {
        pdfToImageUploadButton.querySelector('span').textContent = labels.pdfToImageButton || translations.en.labels.pdfToImageButton;
    }
    const localizedToolbarLabels = new Map([
        [uploadButton, labels.uploadButton],
        [addAnnotationBtn, addLabel],
        [scanBtn, scanLabel],
        [advancedOcrBtn, labels.advancedScan],
        [advancedAnalyzerBtn, labels.advancedAnalysis || translations.en.labels.advancedAnalysis],
        [validateBtn, validateLabel]
    ]);
    localizedToolbarLabels.forEach((name, tool) => {
        const label = tool?.querySelector('span');
        if (label && name) label.textContent = name;
    });

    // Tooltips and accessible names are part of the UI too.  Keeping these in
    // sync also prevents a control that was rendered in the previous language
    // from retaining that language after the user switches back to English.
    const localizedToolNames = {
        zoomInBtn: labels.zoomIn,
        zoomOutBtn: labels.zoomOut,
        zoomResetBtn: labels.resetZoom,
        fullscreenToggle: labels.fullscreen,
        guideToggle: labels.guideToggle
    };
    Object.entries(localizedToolNames).forEach(([id, name]) => {
        const tool = document.getElementById(id);
        if (!tool || !name) return;
        tool.setAttribute('title', name);
        tool.setAttribute('aria-label', name);
    });

    const uploadPopupTitle = document.querySelector('#popupOverlay .popup h3');
    if (uploadPopupTitle) uploadPopupTitle.textContent = labels.uploadPopupTitle;

    const fileLabel = document.querySelector('label[for="fileInput"]');
    if (fileLabel) fileLabel.textContent = labels.selectImageLabel;

    const northDirectionLabel = document.querySelector('label[for="northDirection"]');
    if (northDirectionLabel) northDirectionLabel.textContent = labels.northDirectionLabel;

    const northDirection = document.getElementById('northDirection');
    if (northDirection && northDirection.options.length >= 4) {
        northDirection.options[0].text = options.north;
        northDirection.options[1].text = options.east;
        northDirection.options[2].text = options.west;
        northDirection.options[3].text = options.south;
    }

    const floorFeatureLabel = document.getElementById('floorFeatureLabel');
    if (floorFeatureLabel) floorFeatureLabel.textContent = labels.floorFeatureLabel;

    const floorFeatureDropdownLabel = document.getElementById('floorFeatureDropdownLabel');
    if (floorFeatureDropdownLabel) floorFeatureDropdownLabel.textContent = labels.floorFeatureDropdownLabel;

    const floorFeatureSelect = document.getElementById('floorFeatureSelect');
    if (floorFeatureSelect && floorFeatureSelect.options.length >= 2) {
        floorFeatureSelect.options[0].text = options.yes;
        floorFeatureSelect.options[1].text = options.no;
    }

    const cancelUploadBtn = document.getElementById('cancelUploadBtn');
    const confirmUploadBtn = document.getElementById('confirmUploadBtn');
    if (cancelUploadBtn) cancelUploadBtn.textContent = labels.cancel;
    if (confirmUploadBtn) confirmUploadBtn.textContent = labels.uploadConfirm;

    const defaultLabels = translations.en.labels;
    const pdfToImageBtn = document.getElementById('pdfToImageBtn');
    if (pdfToImageBtn) pdfToImageBtn.textContent = labels.pdfToImageButton || defaultLabels.pdfToImageButton;
    const pdfPopupTitle = document.getElementById('pdfPopupTitle');
    if (pdfPopupTitle) pdfPopupTitle.textContent = labels.pdfPopupTitle || defaultLabels.pdfPopupTitle;
    const pdfUploadLabel = document.getElementById('pdfUploadLabel');
    if (pdfUploadLabel) pdfUploadLabel.textContent = labels.pdfUploadLabel || defaultLabels.pdfUploadLabel;
    const convertPdfBtn = document.getElementById('convertPdfBtn');
    if (convertPdfBtn) convertPdfBtn.textContent = labels.pdfConvertButton || defaultLabels.pdfConvertButton;
    const closePdfPopupBtn = document.getElementById('closePdfPopupBtn');
    if (closePdfPopupBtn) closePdfPopupBtn.textContent = labels.pdfCloseButton || defaultLabels.pdfCloseButton;

    const addRoomTitle = document.getElementById('addRoomTitle');
    const annotationInput = document.getElementById('annotationText');
    const addButton = document.getElementById('addButton');
    const cancelButton = document.getElementById('cancelButton');
    if (addRoomTitle) addRoomTitle.textContent = labels.addRoomTitle;
    if (annotationInput) annotationInput.placeholder = labels.addRoomPlaceholder;
    if (addButton) addButton.textContent = labels.add;
    if (cancelButton) cancelButton.textContent = labels.cancel;

    const editForm = document.getElementById('editAnnotationForm');
    if (editForm) {
        const editTitle = editForm.querySelector('h3');
        const editInput = document.getElementById('editAnnotationText');
        const saveEditButton = document.getElementById('saveEditButton');
        const cancelEditButton = document.getElementById('cancelEditButton');
        if (editTitle) editTitle.textContent = labels.editRoomTitle;
        if (editInput) editInput.placeholder = labels.editRoomPlaceholder;
        if (saveEditButton) saveEditButton.textContent = labels.save;
        if (cancelEditButton) cancelEditButton.textContent = labels.cancel;
    }

    const manualOverlay = document.getElementById('manualAnnotationOverlay');
    if (manualOverlay) {
        const title = manualOverlay.querySelector('h3');
        const body = manualOverlay.querySelector('p');
        const confirm = document.getElementById('manualAnnotationConfirm');
        const cancel = document.getElementById('manualAnnotationCancel');
        if (title) title.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px;vertical-align:middle"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg> ${labels.manualAnnotationTitle}`;
        if (body) body.textContent = labels.manualAnnotationBody;
        if (confirm) confirm.textContent = labels.manualAnnotationConfirm;
        if (cancel) cancel.textContent = labels.manualAnnotationCancel;
    }

    const validationPopup = document.getElementById('validationPopup');
    if (validationPopup) {
        const title = validationPopup.querySelector('h3');
        const closeBtn = document.getElementById('closeButton');
        const downloadBtn = document.getElementById('downloadPdfButton');
        if (title) title.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px;vertical-align:middle"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /><path d="M9 14l2 2 4-4" /></svg> ${labels.validationTitle}`;
        if (closeBtn) closeBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px;vertical-align:middle"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg> ${labels.close}`;
        if (downloadBtn) downloadBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px;vertical-align:middle"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg> ${labels.downloadPdf}`;
    }

    const ocrProgressTitle = document.querySelector('#ocrProgress h3');
    const ocrStatus = document.getElementById('ocrStatus');
    if (ocrProgressTitle) ocrProgressTitle.textContent = labels.scanningTitle;
    if (ocrStatus) ocrStatus.textContent = labels.ocrStatus;

    const ocrAlert = document.getElementById('ocrAlertPopup');
    if (ocrAlert) {
        const alertTitle = ocrAlert.querySelector('h3');
        const alertBody = ocrAlert.querySelector('.ocr-alert-content');
        const cancelBtn = document.getElementById('cancelScanBtn');
        const scanBtnEl = document.getElementById('confirmScanBtn');
        if (alertTitle) alertTitle.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px;vertical-align:middle"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg> ${labels.ocrAlertTitle}`;
        if (alertBody) alertBody.innerHTML = labels.ocrAlertBody;
        if (cancelBtn) cancelBtn.textContent = labels.ocrAlertCancel;
        if (scanBtnEl) scanBtnEl.textContent = labels.ocrAlertScan;
    }

    const messagePopupTitle = document.getElementById('messagePopupTitle');
    const messagePopupDismiss = document.getElementById('messagePopupDismiss');
    if (messagePopupTitle) messagePopupTitle.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px;vertical-align:middle"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg> ${labels.messageTitle}`;
    if (messagePopupDismiss) messagePopupDismiss.textContent = labels.messageDismiss;

    updateFloorFeatureInfo();
}

function setLanguage(lang, suppressOptionsToggle = false) {
    if (!SUPPORTED_UI_LANGUAGES.includes(lang)) lang = 'en';
    currentLanguage = lang;
    try { window.localStorage.setItem('vastuUiLanguage', lang); } catch (_) { /* Storage can be disabled. */ }
    applyLanguageText(lang);
    window.dispatchEvent(new CustomEvent('vastu:language-changed', { detail: { language: lang } }));
    const speechSupport = updateSpeechSupportForLanguage(lang);

    if (!suppressOptionsToggle) {
        toggleLanguageOptions();
    } else {
        const options = document.getElementById('languageOptions');
        if (options) options.classList.remove('show');
    }

    return { languageCode: getCurrentSpeechStrings(lang).speechLang };
}

window.setLanguage = setLanguage;

if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
}

if (window.matchMedia) {
    const mobileLabelMatcher = window.matchMedia('(max-width: 768px)');
    if (mobileLabelMatcher.addEventListener) {
        mobileLabelMatcher.addEventListener('change', () => applyLanguageText(currentLanguage));
    } else if (mobileLabelMatcher.addListener) {
        mobileLabelMatcher.addListener(() => applyLanguageText(currentLanguage));
    }
}

function changeLanguage(e) {
    e.stopPropagation();
    const lang = e.currentTarget.getAttribute('data-lang');
    const speechSupport = setLanguage(lang);
    document.getElementById('setupLanguageOverlay')?.setAttribute('hidden', '');
    document.querySelector('[data-workspace-action="setup"]')?.setAttribute('aria-expanded', 'false');
    maybeShowBrowserNotice(lang);

    const languageName = languageOptionLabels[lang] || lang;
    const selectionMessages = {
        hi: 'आपने हिंदी को सेलेक्ट किया है।',
        kn: 'ನೀವು ಕನ್ನಡವನ್ನು ಆಯ್ಕೆ ಮಾಡಿಕೊಂಡಿದ್ದೀರಿ.',
        ta: 'நீங்கள் தமிழைத் தேர்ந்தெடுத்துள்ளீர்கள்.',
        te: 'మీరు తెలుగును ఎంచుకున్నారు.',
        ml: 'നിങ്ങൾ മലയാളം തിരഞ്ഞെടുത്തു.'
    };

    if (speechSupport?.isUnsupportedKannada) {
        showAlertPopup(
            'Your device does not support Kannada speech. Please add the Kannada language to enable spoken guidance.',
            'Kannada speech unavailable'
        );
    }

    const message = speechSupport?.isUnsupportedKannada
        ? 'You selected Kannada. Your device does not support Kannada speech, so the guide will play in English.'
        : (selectionMessages[lang] || `You have selected ${languageName}.`);
    speakMessage(message);
}

// Fullscreen functions
function toggleFullscreen() {
    if (!isFullscreen) {
        enterFullscreen();
    } else {
        exitFullscreen();
    }
}

function enterFullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
    isFullscreen = true;
    const fullscreenToggle = document.getElementById('fullscreenToggle');
    if (fullscreenToggle) fullscreenToggle.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3" /><path d="M21 8V5a2 2 0 0 0-2-2h-3" /><path d="M3 16v3a2 2 0 0 0 2 2h3" /><path d="M16 21h3a2 2 0 0 0 2-2v-3" /></svg>';
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
    isFullscreen = false;
    const fullscreenToggle = document.getElementById('fullscreenToggle');
    if (fullscreenToggle) fullscreenToggle.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3" /><path d="M21 8V5a2 2 0 0 0-2-2h-3" /><path d="M3 16v3a2 2 0 0 0 2 2h3" /><path d="M16 21h3a2 2 0 0 0 2-2v-3" /></svg>';
}

document.addEventListener('fullscreenchange', handleFullscreenChange);
document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
document.addEventListener('msfullscreenchange', handleFullscreenChange);

function handleFullscreenChange() {
    isFullscreen = !!document.fullscreenElement || !!document.webkitFullscreenElement || !!document.msFullscreenElement;
    const fullscreenToggle = document.getElementById('fullscreenToggle');
    if (fullscreenToggle) {
        fullscreenToggle.innerHTML = isFullscreen ?
            '<i class="fas fa-compress"></i>' : '<i class="fas fa-expand"></i>';
    }
}


/************************
 * SECURITY PROTECTIONS *
 ************************/

// 1. Disable right-click context menu (silently)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// 2. Disable text selection and copy (silently)
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

document.addEventListener('copy', function(e) {
    e.preventDefault();
});

// 3. Disable printing (silently)
document.addEventListener('keydown', function(e) {
    // Block Ctrl+P (Windows) or Command+P (Mac)
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        return false;
    }
});

// 4. Disable developer tools (silently)
document.addEventListener('keydown', function(e) {
    if (
        e.key === 'F12' ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'u')
    ) {
        e.preventDefault();
        return false;
    }
});

// 5. Prevent image dragging (silently)
document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// 6. Clear clipboard when leaving the page (silently)
window.addEventListener('blur', function() {
    navigator.clipboard.writeText('').catch(err => {});
});

// 7. Add watermark protection
function addWatermark() {
    const watermark = document.createElement('div');
    watermark.className = 'watermark';
    watermark.textContent = `© ${new Date().getFullYear()} Apzok.com`;
    document.body.appendChild(watermark);
}

// Initialize security features when DOM loads
document.addEventListener('DOMContentLoaded', function() {
  const dropZone = document.getElementById('dropZone');
  const fileInput = document.getElementById('fileInput');
  const fileNameDisplay = document.getElementById('fileName');
  const browseLink = document.querySelector('.browse-link');

  if (!dropZone || !fileInput || !fileNameDisplay || !browseLink) {
    return;
  }

  // Handle file selection
  fileInput.addEventListener('change', function() {
    if (this.files.length > 0) {
      fileNameDisplay.textContent = this.files[0].name;
      dropZone.classList.add('file-selected');
    } else {
      fileNameDisplay.textContent = 'No file selected';
      dropZone.classList.remove('file-selected');
    }
  });

  // Click on browse text
  browseLink.addEventListener('click', function(e) {
    e.preventDefault();
    fileInput.click();
  });



  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  ['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, highlight, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, unhighlight, false);
  });

  function highlight() {
    dropZone.classList.add('highlight');
  }

  function unhighlight() {
    dropZone.classList.remove('highlight');
  }

  dropZone.addEventListener('drop', handleDrop, false);

  function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    fileInput.files = files;
    fileInput.dispatchEvent(new Event('change'));
  }

});


// 9. Disable print screen (silently)
document.addEventListener('keyup', function(e) {
    if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('').catch(err => {});
    }
});

function resetToDefault() {
    if (confirm("Reset everything including uploaded plan?")) {
        // Reset transformations
        currentRotation = 0;
currentScale = 1;
currentX = 0;
currentY = 0;
updateImageTransform();

        // Reset compass
        const northDirection = document.getElementById('northDirection');
        if (northDirection) {
            northDirection.value = 'north';
            updateCompassRotation(northDirection.value);
        }

        // Clear image
        imageElement.src = '';
        container.classList.remove('glow');

        // Clear annotations
        clearAnnotations();

        // Reset zoom
        resetZoom();
    }
}




// Capture only the plan canvas and its visible overlays. Workspace buttons are
// deliberately excluded so reports never contain a screenshot of the app UI.
async function captureContainerAsImage() {
    if (!container) throw new Error('Container element not found');
    if (typeof window.html2canvas !== 'function') throw new Error('PDF capture library not loaded');

    const capture = window.html2canvas(container, {
        scale: getPdfCaptureScale(container),
        useCORS: true,
        allowTaint: false,
        backgroundColor: '#ffffff',
        imageTimeout: 12000,
        logging: false,
        removeContainer: true,
        ignoreElements: element => element.id === 'browserNotice' ||
            element.id === 'compassViewToggle' || element.id === 'guideToggle' ||
            element.classList?.contains('annotation-close') ||
            element.classList?.contains('annotation-edit')
    }).then(canvas => {
        if (!canvas.width || !canvas.height) throw new Error('The plan capture was empty');
        try {
            return canvas.toDataURL('image/jpeg', 0.96);
        } finally {
            // Release the large backing store promptly, especially on mobile.
            canvas.width = 1;
            canvas.height = 1;
        }
    });

    return withTimeout(capture, 30000, 'Plan capture timed out. Try closing other apps and retrying.');
}

// Project-file bridge. Only plain data is exposed; DOM nodes and event handlers
// are rebuilt through the normal annotation factory when a project is opened.
window.VastuWorkspaceProject = {
    getData() {
        return {
            transform: { rotation: currentRotation, scale: currentScale, x: currentX, y: currentY },
            compass: { rotation: currentCompassRotation, sizePercent: compassSizePercent },
            language: currentLanguage,
            annotations: annotations.map(item => ({ text: item.text, x: item.x, y: item.y, roomNameOnly: item.roomNameOnly, direction: item.direction }))
        };
    },
    restoreData(data) {
        if (!data || typeof data !== 'object') return;
        const view=data.transform||{}, compass=data.compass||{};
        currentRotation=Number(view.rotation)||0;currentScale=Number(view.scale)||1;currentX=Number(view.x)||0;currentY=Number(view.y)||0;
        currentCompassRotation=Number(compass.rotation)||0;compassSizePercent=Number(compass.sizePercent)||100;
        clearAnnotations();(Array.isArray(data.annotations)?data.annotations:[]).forEach(item=>createAnnotation(item.text,item.x,item.y,item));
        updateImageTransform();setCompassRotation(currentCompassRotation);updateCompassCircleSize();
    }
};
