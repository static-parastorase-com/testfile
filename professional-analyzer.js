(function () {
    'use strict';

    const G = window.ProfessionalAnalyzerGeometry;
    const Marma = window.VastuMarmaEngine;
    if (!G) return;
    const clone = (value) => JSON.parse(JSON.stringify(value));
    const id = () => (crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`);
    const $ = (selector, root = document) => root.querySelector(selector);
    const defaultState = () => ({ planFileUri: '', planFileType: '', selectedPdfPage: null,
        calibration: null, outerBoundary: { vertices: [], isClosed: false },
        measurements: null, centroid: null, compass: null, northAngle: 0, planRotation: 0, baseFacingAngle: 0, plotTilt: 0, sourceSize: null, compassSizePercent: 100, currentWorkflowStep: 'IMPORT_PLAN',
        boundaryState: 'EMPTY', preferredLength: 'feetInches', preferredArea: 'sqFt', patternOpacityPercent: 100, devatasWidthPercent: 100, devatasHeightPercent: 100,
        annotations: {}, penColor: '#e11d48', penSize: 5,
        marmaAnalysis: null, marmaOptions: { showBoundary:true, showGrid:true, showLines:true, showPoints:true, showDevtaNames:false, showOutside:true, showRadius:false, debug:false, showNormalizedOnCanvas:false, showLineIds:false, showWorldCoordinates:false, showClassification:false },
        draftFeet: 0, draftInches: 0 });

    let state = defaultState();
    let history = []; let future = []; let imageSize = { width: 1, height: 1 };
    let transform = { zoom: 1, panX: 0, panY: 0 }; let selectedVertex = null; let draggingVertex = false;
    let boundaryHold = null; let pendingBoundaryPoint = null; let vertexDragStart = null;
    let panStart = null; let lastTap = { time: 0, vertex: null }; let lastDrawnUri = '';
    let cachedImage = null; let cachedImageUri = '';
    let devatasResize = null;
    let compassView = 'image';
    let selectedSixteenZone = null;
    let selectedMarmaPoint = null;
    let selectedVanshaLine = null;
    let drawingTool = null;
    let activeStroke = null;
    let isErasing = false;
    const touchPointers = new Map();
    let pinchStart = null;
    let touchCandidate = null;
    let transformFrame = 0;
    let vertexDragFrame = 0;
    let resumeDraw = null;
    const DOUBLE_TAP_MS = 600;
    const penColors = ['#e11d48','#ef4444','#f97316','#eab308','#22c55e','#14b8a6','#0ea5e9','#2563eb','#7c3aed','#111827'];
    const workspaceTools = [];

    const workflowCopy = {
        en: { planAnalysis:'Plan Analysis',step1:'STEP 1 OF 3',step2:'STEP 2 OF 3',step3:'STEP 3 OF 3',closed:'BOUNDARY CLOSED',setScale:'Set the Plan Scale',setDrawingScale:'Set Drawing Scale',scaleIntro:'Choose a wall or dimension whose real length you know. Mark its two ends, then enter the distance.',scaleItems:['Click the start point once.','Click the end point once.','Use a long, clearly visible line for better accuracy.','For photos, use a straight top-view image without perspective.'],tiltTitle:'Plot Tilt Direction',tiltIntro:'Enter the magnetic bearing of the property facing to align the plan.',tiltLabel:'Plot Tilt (Degrees)',ok:'OK',skip:'Skip',propertyFacing:'Property Facing',baseAngle:'Base Angle',clearTilt:'Clear Tilt',boundaryTitle:'Mark the Floor Boundary',boundaryIntro:'After you press OK, boundary marking will start.',boundaryItems:['Use the nearby magnifying circle and red target to place each outside corner precisely.','Follow the outer wall edge; do not mark internal room corners.','Scroll the mouse wheel to zoom, or hold the wheel and drag to move the plan.','Mark at least 3 corners, then click <strong>Close Boundary</strong> or double-click the final point.'],complete:'Boundary Complete',completeText:'The compass is centered and aligned automatically to the direction selected during upload.',okUnderstand:'OK, I understand',continue:'Continue',markLine:"Click a known line's start point, then its end point.",points:'points marked',distance:'Enter the real distance between the marked points.',feet:'Feet',inches:'Inches',markAgain:'Mark again',setPlanScale:'Set plan scale',autoBoundary:'Plot tilt and boundary marking follow automatically after scale is set.',floorMeasurement:'Floor Measurement',perimeter:'Perimeter',vertices:'Vertices',scale:'Scale',calibrated:'Calibrated',north:'North',patternOptions:'Pattern options',marma:'Marma Points',image:'Image',standard:'Standard',zone:'16 Zone',boundaryFill:'Boundary fill',devatas:'Devatas',opacity:'Opacity',editBoundary:'Edit Boundary',recalibrate:'Recalibrate',boundaryHelp:'Boundary fill extends each Vastu direction from the plan center until it touches the marked outer edge.'},
        hi: {planAnalysis:'प्लान एनालिसिस',step1:'स्टेप 1 / 3',step2:'स्टेप 2 / 3',step3:'स्टेप 3 / 3',closed:'बाउंड्री पूरी हुई',setScale:'प्लान का स्केल सेट करें',setDrawingScale:'ड्रॉइंग स्केल सेट करें',scaleIntro:'जिस दीवार या लाइन की असली लंबाई पता है, उसके दोनों सिरे मार्क करके दूरी डालें।',scaleItems:['स्टार्ट पॉइंट पर एक बार क्लिक करें।','एंड पॉइंट पर एक बार क्लिक करें।','बेहतर नतीजे के लिए लंबी और साफ़ दिखने वाली लाइन चुनें।','फोटो के लिए बिना टेढ़े एंगल वाली सीधी टॉप-व्यू इमेज इस्तेमाल करें।'],tiltTitle:'प्लॉट टिल्ट दिशा',tiltIntro:'प्लान को अलाइन करने के लिए प्रॉपर्टी फेसिंग की मैग्नेटिक बेयरिंग डालें।',tiltLabel:'प्लॉट टिल्ट (डिग्री)',ok:'OK',skip:'छोड़ें',propertyFacing:'प्रॉपर्टी फेसिंग',baseAngle:'बेस एंगल',clearTilt:'टिल्ट हटाएँ',boundaryTitle:'फ्लोर बाउंड्री मार्क करें',boundaryIntro:'OK दबाने के बाद बाउंड्री मार्किंग शुरू होगी।',boundaryItems:['हर बाहरी कोने को सही जगह रखने के लिए पास वाला मैग्निफायर और लाल टारगेट इस्तेमाल करें।','बाहर की दीवार के किनारे चलें; कमरे के अंदरूनी कोने मार्क न करें।','ज़ूम के लिए माઉસ व्हील स्क्रॉल करें; प्लान मूव करने के लिए व्हील दबाकर ड्रैग करें।','कम से कम 3 कोने मार्क करें, फिर <strong>बाउंड्री बंद करें</strong> पर क्लिक करें या आखिरी पॉइंट पर डबल-क्लिक करें।'],complete:'बाउंड्री पूरी हो गई',completeText:'अपलोड के समय चुनी दिशा के हिसाब से कंपास अपने-आप सेंटर और अलाइन हो गया है।',okUnderstand:'OK, समझ गया',continue:'आगे बढ़ें',markLine:'पहले लाइन के स्टार्ट पॉइंट और फिर एंड पॉइंट पर क्लिक करें।',points:'पॉइंट मार्क हुए',distance:'मार्क किए पॉइंट्स के बीच की असली दूरी डालें।',feet:'फीट',inches:'इंच',markAgain:'दोबारा मार्क करें',setPlanScale:'प्लान स्केल सेट करें',autoBoundary:'स्केल सेट होते ही इसी प्लान पर प्लॉट टિલ્ट और बाउंड्री मार्किंग शुरू होगी।',floorMeasurement:'फ्लोर मेज़रमेंट',perimeter:'पेरिमीटर',vertices:'पॉइंट्स',scale:'स्केल',calibrated:'कैलिब्रेटेड',north:'नॉर्थ',patternOptions:'पैटर्न ऑप्शन',marma:'मर्म पॉइंट्स',image:'इमेज',standard:'स्टैंडर्ड',zone:'16 ज़ोन',boundaryFill:'बाउंड्री फिल',devatas:'देवता',opacity:'ओपेसिटी',editBoundary:'बाउंड्री एडिट करें',recalibrate:'फिर कैलिब्रेट करें',boundaryHelp:'बाउंड्री फिल प्लान के सेंटर से हर वास्तु दिशा में बाहरी किनारे तक दिखता है।'},
        kn: {planAnalysis:'ಪ್ಲಾನ್ ಅನಾಲಿಸಿಸ್',step1:'ಸ್ಟೆಪ್ 1 / 3',step2:'ಸ್ಟೆಪ್ 2 / 3',step3:'ಸ್ಟೆಪ್ 3 / 3',closed:'ಬೌಂಡರಿ ಮುಗಿದಿದೆ',setScale:'ಪ್ಲಾನ್ ಸ್ಕೇಲ್ ಸೆಟ್ ಮಾಡಿ',setDrawingScale:'ಡ್ರಾಯಿಂಗ್ ಸ್ಕೇಲ್ ಸೆಟ್ ಮಾಡಿ',scaleIntro:'ನಿಜವಾದ ಉದ್ದ ಗೊತ್ತಿರುವ ಗೋಡೆ ಅಥವಾ ಲೈನ್ ಆಯ್ಕೆ ಮಾಡಿ. ಅದರ ಎರಡು ತುದಿಗಳನ್ನು ಮಾರ್ಕ್ ಮಾಡಿ, ನಂತರ ದೂರ ನಮೂದಿಸಿ.',scaleItems:['ಸ್ಟಾರ್ಟ್ ಪಾಯಿಂಟ್ ಮೇಲೆ ಒಮ್ಮೆ ಕ್ಲಿಕ್ ಮಾಡಿ.','ಎಂಡ್ ಪಾಯಿಂಟ್ ಮೇಲೆ ಒಮ್ಮೆ ಕ್ಲಿಕ್ ಮಾಡಿ.','ಹೆಚ್ಚು ಅಕ್ಯುರಸಿಗಾಗಿ ಉದ್ದವಾಗಿ ಸ್ಪಷ್ಟವಾಗಿ ಕಾಣುವ ಲೈನ್ ಬಳಸಿ.','ಫೋಟೋಗೆ ಪರ್ಸ್‌ಪೆಕ್ಟಿವ್ ಇಲ್ಲದ ನೇರ ಟಾಪ್-ವ್ಯೂ ಇಮೇಜ್ ಬಳಸಿ.'],tiltTitle:'ಪ್ಲಾಟ್ ಟಿಲ್ಟ್ ದಿಕ್ಕು',tiltIntro:'ಪ್ಲಾನ್ ಅಲೈನ್ ಮಾಡಲು ಪ್ರಾಪರ್ಟಿ ಫೇಸಿಂಗ್‌ನ ಮ್ಯಾಗ್ನೆಟಿಕ್ ಬೇರಿಂಗ್ ನಮೂದಿಸಿ.',tiltLabel:'ಪ್ಲಾಟ್ ಟಿಲ್ಟ್ (ಡಿಗ್ರಿ)',ok:'ಸರಿ',skip:'ಬಿಡಿ',propertyFacing:'ಪ್ರಾಪರ್ಟಿ ಫೇಸಿಂಗ್',baseAngle:'ಬೇಸ್ ಆಂಗಲ್',clearTilt:'ಟಿಲ್ಟ್ ತೆರವುಗೊಳಿಸಿ',boundaryTitle:'ಫ್ಲೋರ್ ಬೌಂಡರಿ ಮಾರ್ಕ್ ಮಾಡಿ',boundaryIntro:'OK ಒತ್ತಿದ ನಂತರ ಬೌಂಡರಿ ಮಾರ್ಕಿಂಗ್ ಶುರುವಾಗುತ್ತದೆ.',boundaryItems:['ಹೊರಗಿನ ಪ್ರತಿಯೊಂದು ಕಾರ್ನರ್ ಸರಿಯಾಗಿ ಇಡಲು ಮ್ಯಾಗ್ನಿಫಯರ್ ಮತ್ತು ಕೆಂಪು ಟಾರ್ಗೆಟ್ ಬಳಸಿ.','ಹೊರಗಿನ ಗೋಡೆಯ ಅಂಚನ್ನು ಫಾಲೋ ಮಾಡಿ; ರೂಮಿನ ಒಳಗಿನ ಕಾರ್ನರ್ ಮಾರ್ಕ್ ಮಾಡಬೇಡಿ.','ಝೂಮ್ ಮಾಡಲು ಮೌಸ್ ವೀಲ್ ಸ್ಕ್ರೋಲ್ ಮಾಡಿ; ಪಪ್ಲಾನ್ ಮೂವ್ ಮಾಡಲು ವೀಲ್ ಹಿಡಿದು ಡ್ರ್ಯಾಗ್ ಮಾಡಿ.','ಕನಿಷ್ಠ 3 ಕಾರ್ನರ್ ಮಾರ್ಕ್ ಮಾಡಿ, ನಂತರ <strong>ಬೌಂಡರಿ ಕ್ಲೋಸ್ ಮಾಡಿ</strong> ಕ್ಲಿಕ್ ಮಾಡಿ ಅಥವಾ ಕೊನೆಯ ಪಾಯಿಂಟ್ ಡಬಲ್-ಕ್ಲಿಕ್ ಮಾಡಿ.'],complete:'ಬೌಂಡರಿ ಕಂಪ್ಲೀಟ್',completeText:'ಅಪ್‌ಲೋಡ್ ಸಮಯದಲ್ಲಿ ಆಯ್ಕೆ ಮಾಡಿದ ದಿಕ್ಕಿಗೆ ಕಂಪಾಸ್ ಆಟೋಮ್ಯಾಟಿಕ್ ಆಗಿ ಸೆಂಟರ್ ಮತ್ತು ಅಲೈನ್ ಆಗಿದೆ.',okUnderstand:'OK, ಅರ್ಥವಾಯಿತು',continue:'ಮುಂದುವರಿಸಿ',markLine:'ಮೊದಲು ಲೈನ್‌ನ ಸ್ಟಾರ್ಟ್ ಪಾಯಿಂಟ್, ನಂತರ ಎಂಡ್ ಪಾಯಿಂಟ್ ಕ್ಲಿಕ್ ಮಾಡಿ.',points:'ಪಾಯಿಂಟ್ ಮಾರ್ಕ್ ಆಗಿವೆ',distance:'ಮಾರ್ಕ್ ಮಾಡಿದ ಪಾಯಿಂಟ್‌ಗಳ ನಡುವಿನ ನಿಜವಾದ ದೂರ ನಮೂದಿಸಿ.',feet:'ಫೀಟ್',inches:'ಇಂಚ್',markAgain:'ಮತ್ತೆ ಮಾರ್ಕ್ ಮಾಡಿ',setPlanScale:'ಪ್ಲಾನ್ ಸ್ಕೇಲ್ ಸೆಟ್ ಮಾಡಿ',autoBoundary:'ಸ್ಕೇಲ್ ಸೆಟ್ ಆದ ತಕ್ಷಣ ಪ್ಲಾಟ್ ಟಿಲ್ಟ್ ಮತ್ತು ಬೌಂಡರಿ ಮಾರ್ಕಿಂಗ್ ಶುರುವಾಗುತ್ತದೆ.',floorMeasurement:'ಫ್ಲೋರ್ ಮೆಷರ್‌ಮೆಂಟ್',perimeter:'ಪೆರಿಮೀಟರ್',vertices:'ಪಾಯಿಂಟ್ಸ್',scale:'ಸ್ಕೇಲ್',calibrated:'ಕ್ಯಾಲಿಬ್ರೇಟ್ ಆಗಿದೆ',north:'ನಾರ್ತ್',patternOptions:'ಪ್ಯಾಟರ್ನ್ ಆಯ್ಕೆಗಳು',marma:'ಮರ್ಮ ಪಾಯಿಂಟ್ಸ್',image:'ಇಮೇಜ್',standard:'ಸ್ಟ್ಯಾಂಡರ್ಡ್',zone:'16 ಝೋನ್',boundaryFill:'ಬೌಂಡರಿ ಫಿಲ್',devatas:'ದೇವತೆಗಳು',opacity:'ಒಪ್ಯಾಸಿಟಿ',editBoundary:'ಬೌಂಡರಿ ಎಡಿಟ್ ಮಾಡಿ',recalibrate:'ಮತ್ತೆ ಕ್ಯಾಲಿಬ್ರೇಟ್ ಮಾಡಿ',boundaryHelp:'ಬೌಂಡರಿ ಫಿಲ್ ಪ್ಲಾನ್ ಸೆಂಟರ್‌ನಿಂದ ಪ್ರತಿ ವಾಸ್ತು ದಿಕ್ಕಿನಲ್ಲಿ ಹೊರಗಿನ ಅಂಚಿನವರೆಗೆ ಕಾಣಿಸುತ್ತದೆ.'},
        ta: {planAnalysis:'பிளான் அனாலிசிஸ்',step1:'ஸ்டெப் 1 / 3',step2:'ஸ்டெப் 2 / 3',step3:'ஸ்டெப் 3 / 3',closed:'பவுண்டரி முடிந்தது',setScale:'பிளான் ஸ்கேலை செட் செய்யவும்',setDrawingScale:'டிராயிங் ஸ்கேலை செட் செய்யவும்',scaleIntro:'உண்மையான நீளம் தெரிந்த சுவர் அல்லது லைனைத் தேர்வு செய்யவும். அதன் இரண்டு முனைகளையும் மார்க் செய்து, தூரத்தை உள்ளிடவும்.',scaleItems:['ஸ்டார்ட் பாயிண்டில் ஒருமுறை கிளிக் செய்யவும்.','எண்ட் பாயிண்டில் ஒருமுறை கிளிக் செய்யவும்.','துல்லியத்திற்கு நீளமாகவும் தெளிவாகவும் தெரியும் லைனைப் பயன்படுத்தவும்.','ஃபோட்டோவுக்கு சாய்வு இல்லாத நேரான டாப்-வியூ இமேஜைப் பயன்படுத்தவும்.'],tiltTitle:'பிளாட் டில்ட் திசை',tiltIntro:'பிளானைச் சீரமைக்க சொத்தின் திசையின் காந்தத் தாங்கலை உள்ளிடவும்.',tiltLabel:'பிளாட் டில்ட் (டிகிரி)',ok:'சரி',skip:'தவிர்',propertyFacing:'சொத்து திசை',baseAngle:'அடிப்படை கோணம்',clearTilt:'டில்ட் நீக்கு',boundaryTitle:'ஃப்ளோர் பவுண்டரியை மார்க் செய்யவும்',boundaryIntro:'OK அழுத்தியதும் பவுண்டரி மார்க்கிங் தொடங்கும்.',boundaryItems:['ஒவ்வொரு வெளிப்புற கார்னரையும் சரியாக வைக்க மேக்னிஃபையர் மற்றும் சிவப்பு டார்கெட்டைப் பயன்படுத்தவும்.','வெளிப்புற சுவர் ஓரத்தைப் பின்தொடரவும்; ரூமின் உள்ளே உள்ள கார்னர்களை மார்க் செய்ய வேண்டாம்.','ஸூம் செய்ய மவுஸ் வீலை ஸ்க்ரோல் செய்யவும்; பிளானை நகர்த்த வீலைப் பிடித்து டிராக் செய்யவும்.','குறைந்தது 3 கார்னர்களை மார்க் செய்து, <strong>பவுண்டரியை மூடவும்</strong> கிளிக் செய்யவும் அல்லது கடைசி பாயிண்டை டபுள்-கிளிக் செய்யவும்.'],complete:'பவுண்டரி கம்ப்ளீட்',completeText:'அப்லோட் செய்யும்போது தேர்ந்தெடுத்த திசைக்கு கம்பஸ் ஆட்டோமேட்டிக்காக சென்டர் மற்றும் அலைன் செய்யப்பட்டது.',okUnderstand:'OK, புரிந்தது',continue:'தொடரவும்',markLine:'முதலில் லைனின் ஸ்டார்ட் பாயிண்ட், பிறகு எண்ட் பாயிண்டை கிளிக் செய்யவும்.',points:'பாயிண்ட்கள் மார்க் செய்யப்பட்டன',distance:'மார்க் செய்த பாயிண்ட்களுக்கு இடையிலான உண்மையான தூரத்தை உள்ளிடவும்.',feet:'அடி',inches:'இன்ச்',markAgain:'மீண்டும் மார்க் செய்யவும்',setPlanScale:'பிளான் ஸ்கேல் செட் செய்யவும்',autoBoundary:'ஸ்கேல் செட் ஆனதும் பிளாட் டில்ட் மற்றும் பவுண்டரி மார்க்கிங் தொடங்கும்.',floorMeasurement:'ஃப்ளோர் மெஷர்மென்ட்',perimeter:'பெரிமீட்டர்',vertices:'பாயிண்ட்கள்',scale:'ஸ்கேல்',calibrated:'காலிப்ரேட் ஆனது',north:'நார்த்',patternOptions:'பேட்டர்ன் ஆப்ஷன்கள்',marma:'மர்ம பாயிண்ட்கள்',image:'இமேஜ்',standard:'ஸ்டாண்டர்டு',zone:'16 ஸோன்',boundaryFill:'பவுண்டரி ஃபில்',devatas:'தேவதைகள்',opacity:'ஒபாசிட்டி',editBoundary:'பவுண்டரி எடிட்',recalibrate:'மீண்டும் காலிப்ரேட்',boundaryHelp:'பவுண்டரி ஃபில் பிளான் சென்டரிலிருந்து ஒவ்வொரு வாஸ்து திசையிலும் வெளிப்புற ஓரம் வரை காட்டப்படும்.'},
        te: {planAnalysis:'ప్లాన్ అనాలిసిస్',step1:'స్టెప్ 1 / 3',step2:'స్టెప్ 2 / 3',step3:'స్టెప్ 3 / 3',closed:'బౌండరీ పూర్తయింది',setScale:'ప్లాన్ స్కేల్ సెట్ చేయండి',setDrawingScale:'డ్రాయింగ్ స్కేల్ సెట్ చేయండి',scaleIntro:'అసలు పొడవు తెలిసిన గోడ లేదా లైన్ ఎంచుకోండి. దాని రెండు చివరలను మార్క్ చేసి, దూరాన్ని ఎంటర్ చేయండి.',scaleItems:['స్టార్ట్ పాయింట్‌పై ఒకసారి క్లిక్ చేయండి.','ఎండ్ పాయింట్‌పై ఒకసారి క్లిక్ చేయండి.','మంచి అక్యురసీ కోసం పొడవుగా, స్పష్టంగా కనిపించే లైన్ వాడండి.','ఫోటో కోసం పర్స్పెక్టివ్ లేని స్ట్రెయిట్ టాప్-వ్యూ ఇమేజ్ వాడండి.'],tiltTitle:'ప్లాట్ టిల్ట్ దిశ',tiltIntro:'ప్లాన్‌ను అమర్చడానికి ప్రాపర్టీ ఫేసింగ్ యొక్క అయస్కాంత బేరింగ్‌ను నమోదు చేయండి.',tiltLabel:'ప్లాట్ టిల్ట్ (డిగ్రీలు)',ok:'సరే',skip:'వదిలేయండి',propertyFacing:'ప్రాపర్టీ ఫేసింగ్',baseAngle:'బేస్ యాంగిల్',clearTilt:'టిల్ట్ తొలగించు',boundaryTitle:'ఫ్లోర్ బౌండరీని మార్క్ చేయండి',boundaryIntro:'OK నొక్కిన తర్వాత బౌండరీ మార్కింగ్ మొదలవుతుంది.',boundaryItems:['ప్రతి బయట కార్నర్‌ను సరిగ్గా పెట్టడానికి మాగ్నిఫయర్ మరియు రెడ్ టార్గెట్ వాడండి.','బయటి గోడ అంచును ఫాలో అవ్వండి; రూమ్ లోపలి కార్నర్లను మార్క్ చేయవద్దు.','జూమ్ కోసం మౌస్ వీల్ స్క్రోల్ చేయండి; ప్లాన్ మూవ్ చేయడానికి వీల్ పట్టుకుని డ్రాగ్ చేయండి.','కనీసం 3 కార్నర్లు మార్క్ చేసి, <strong>బౌండరీ క్లోజ్ చేయండి</strong> క్లిక్ చేయండి లేదా చివరి పాయింట్‌ను డబుల్-క్లిక్ చేయండి.'],complete:'బౌండరీ కంప్లీట్',completeText:'అప్‌లోడ్ సమయంలో ఎంచుకున్న దిశకు కంపాస్ ఆటోమేటిక్‌గా సెంటర్ మరియు అలైన్ అయింది.',okUnderstand:'OK, అర్థమైంది',continue:'కొనసాగించండి',markLine:'ముందు లైన్ స్టార్ట్ పాయింట్, తర్వాత ఎండ్ పాయింట్ క్లిక్ చేయండి.',points:'పాయింట్లు మార్క్ అయ్యాయి',distance:'మార్క్ చేసిన పాయింట్ల మధ్య అసలు దూరాన్ని ఎంటర్ చేయండి.',feet:'ఫీట్',inches:'ఇంచెస్',markAgain:'మళ్లీ మార్క్ చేయండి',setPlanScale:'ప్లాన్ స్కేల్ సెట్ చేయండి',autoBoundary:'స్కేల్ సెట్ అయిన వెంటనే ప్లాట్ టిల్ట్ మరియు బౌండరీ మార్కింగ్ మొదలవుతుంది.',floorMeasurement:'ఫ్లోర్ మెజర్‌మెంట్',perimeter:'పెరిమీటర్',vertices:'పాయింట్లు',scale:'స్కేల్',calibrated:'కాలిబ్రేట్ అయింది',north:'నార్త్',patternOptions:'ప్యాటర్న్ ఆప్షన్స్',marma:'మర్మ పాయింట్స్',image:'ఇమేజ్',standard:'స్టాండర్డ్',zone:'16 జోన్',boundaryFill:'బౌండరీ ఫిల్',devatas:'దేవతలు',opacity:'ఒపాసిటీ',editBoundary:'బౌండరీ ఎడిట్',recalibrate:'మళ్లీ కాలిబ్రేట్',boundaryHelp:'బౌండరీ ఫిల్ ప్లాన్ సెంటర్ నుంచి ప్రతి వాస్తు దిశలో బయటి అంచు వరకు కనిపిస్తుంది.'},
        ml: {planAnalysis:'ಪ್ಲಾನ್ అనాలిసిస్',step1:'స్టెప్ 1 / 3',step2:'స్టెప్ 2 / 3',step3:'స్టెప్ 3 / 3',closed:'బౌండరీ పూర్తయింది',setScale:'പ്ലാൻ സ്കെയിൽ സെറ്റ് ചെയ്യുക',setDrawingScale:'ഡ്രോയിംഗ് സ്കെയിൽ സെറ്റ് ചെയ്യുക',scaleIntro:'യഥാർത്ഥ നീളം അറിയാവുന്ന ചുമരോ ലൈനോ തിരഞ്ഞെടുക്കുക. അതിന്റെ രണ്ട് అറ്റങ്ങളും മാർക്ക് ചെയ്ത് ദൂരം നൽകുക.',scaleItems:['സ്റ്റാർട്ട് പോയിന്റിൽ ഒരിക്കൽ ക്ലിുകുക.','എൻഡ് പോയിന്റിൽ ഒരിക്കൽ ക്లిക്ക് ചെയ്യുക.','കൂടുതൽ കൃത്യതയ്ക്ക് നീളമുള്ള, വ്യക്തമായ ലൈൻ ഉപയോഗിക്കുക.','ഫോട്ടോയ്ക്ക് ചെരിവില്ലാത്ത നേരായ ടോപ്പ്-വി്യൂ ഇമേജ് ഉപയോഗിക്കുക.'],tiltTitle:'പ്ലോട്ട് ടിൽറ്റ് ദിശ',tiltIntro:'പ്ലാൻ വിന്യസിക്കുന്നതിന് പ്രോപ്പർട്ടി ഫേസിംഗിന്റെ മാഗ്നറ്റിക് ബെയറിംഗ് നൽകുക.',tiltLabel:'പ്ലോട്ട് ടിൽറ്റ് (ഡിഗ്രി)',ok:'ശരി',skip:'ഒഴിവാക്കുക',propertyFacing:'പ്രോപ്പർട്ടി ഫേസിംഗ്',baseAngle:'బేస్ యాంగిల్',clearTilt:'ടിൽറ്റ് മാറ്റുക',boundaryTitle:'ഫ്ലോർ ബൗണ്ടറി മാർക്ക് ചെയ്യുക',boundaryIntro:'OK അമർത്തിയാൽ ബൗണ്ടറി മാർക്കിംഗ് തുടങ്ങും.',boundaryItems:['ഓരോ പുറം കോർണറും കൃത്യമായി വയ്ക്കാൻ മാഗ്നിഫയറും ചുവന്ന ടാർഗറ്റും ഉപയോഗിക്കുക.','പുറത്തെ ചുമരിന്റെ അരികിലൂടെ പോകുക; റൂമിനുള്ളിലെ കോർണറുകൾ മാർക്ക് ചെയ്യരുത്.','സൂം ചെയ്യാൻ മൗസ് വീൽ സ്ക്രോൾ ചെയ്യുക; പ്ലാൻ നീക്കാൻ വീൽ പിടിച്ച് ഡ്രാഗ് ചെയ്യുക.','കുറഞ്ഞത് 3 കോർണർ మార్ക്ക് ചെയ്ത് <strong>ബൗണ്ടറി క్లోజ్ చేయండి</strong> క్లిక్ చేయండి, లేదా చివరి పాయింట్‌పై డబుల్-క్లిక్ చేయండి.'],complete:'പ്ലാൻ കാലിബ്രേറ്റ് ചെയ്തു',completeText:'പ്ലാൻ ഇപ്പോൾ മാഗ്നറ്റിക് ടിൽറ്റിനൊപ്പം വിന്യസിച്ചിരിക്കുന്നു. എല്ലാ വാസ്തു പാറ്റേണുകളും ശരിയായി കേന്ദ്രീകരിച്ചിരിക്കുന്നു.',okUnderstand:'OK, മനസ്സിലായി',continue:'തുടരുക',markLine:'ആദ്യം ലൈനിന്റെ സ്റ്റാർട്ട് പോയിന്റിലും പിന്നീട് എൻഡ് പോയിന്റിലും ക്ലിക്ക് ചെയ്യുക.',points:'പോയിന്റുകൾ మార్క్ చేయండి',distance:'മാർക്ക് ചെയ്ത പോയിന്റുകൾക്കിடയിലെ യഥാർത്ഥ ദൂരം നൽകുക.',feet:'ഫീറ്റ്',inches:'ഇഞ്ച്',markAgain:'വീണ്ടും మార్క్ చేయండి',setPlanScale:'ಪ್ಲಾನ್ ಸ್ಕೇಲ್ ಸೆಟ್ ಮಾಡಿ',autoBoundary:'ಸ್ಕೇಲ್ ಸೆಟ್ ಆಯಲ್ ಬೌಂಡರಿ ಮಾರ್ಕಿಂಗ್ ಪರ್ಯಾಯವಾಗುತ್ತದೆ.',floorMeasurement:'ఫ్లోర్ మెజర్‌మెంట్',perimeter:'പെരിമീറ്റർ',vertices:'പോയിന്റുകൾ',scale:'സ്കെയിൽ',calibrated:'കാലിബ്രേറ്റ് ചെയ്തു',north:'നോർത്ത്',patternOptions:'പാറ്റേൺ ഓപ്ഷനുകൾ',marma:'മർമ്മ പോയിന്റുകൾ',image:'ഇമേജ്',standard:'സ്റ്റാൻഡೇർഡ്',zone:'16 സോൺ',boundaryFill:'బౌండరీ ఫిల్',devatas:'దేవతలు',opacity:'ఒపాసిటీ',editBoundary:'బౌండరీ ఎడిట్',recalibrate:'വീണ്ടും കാലിப்ரേഷൻ',boundaryHelp:'బౌండరీ ఫిల్ ప్లాన్ సెంటర్ నుంచి ప్రతి వాస్తు దిశలో బయటి అంచు వరకు కనిపిస్తుంది.'}
    };
    const copy = () => workflowCopy[document.documentElement.lang] || workflowCopy.en;
    const list = (items) => `<ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;

    function addPressListener(element, handler) {
        if (!element || typeof handler !== 'function') return;
        let lastTouchTime = 0;
        let touchStart = null;
        const touchStartHandler = (event) => {
            lastTouchTime = Date.now();
            const touch = event.touches[0];
            touchStart = touch ? { x: touch.clientX, y: touch.clientY } : null;
        };
        const touchEndHandler = (event) => {
            const touch = event.changedTouches[0];
            const moved = !touchStart || !touch || Math.hypot(touch.clientX-touchStart.x,touch.clientY-touchStart.y)>8;
            touchStart = null;
            if (moved || (event.target && event.target.closest('a[href]'))) return;
            event.preventDefault();
            handler(event);
        };
        const clickHandler = (event) => {
            if (Date.now() - lastTouchTime < 400) return;
            handler(event);
        };
        element.addEventListener('click', clickHandler);
        element.addEventListener('touchstart', touchStartHandler, { passive: true });
        element.addEventListener('touchend', touchEndHandler, { passive: false });
        element.addEventListener('touchcancel', () => { touchStart = null; }, { passive: true });
    }

    function snapshot() { history.push(clone(state)); if (history.length > 80) history.shift(); future = []; }
    function restore(next) { state = clone(next); selectedVertex = null; syncWorkspace(); }
    function undo() { if (!history.length) return; future.push(clone(state)); restore(history.pop()); }
    function redo() { if (!future.length) return; history.push(clone(state)); restore(future.pop()); }

    function injectUi() {
        document.querySelector('.canvas-panel').insertAdjacentHTML('beforeend', `<div class="pro-overlay" id="proOverlay" aria-hidden="true">
          <section class="pro-shell" aria-label="Plan scale and boundary workflow">
            <div class="pro-workspace" id="proWorkspace">
              <div class="pro-toolbar"><button type="button" class="pro-primary pro-toolbar-upload" data-action="replace-plan" title="Upload" style="font-weight:700;background:#b78831;color:#fff;border-color:#b78831;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg> Upload</button><button data-action="undo"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px"><path d="M3 7v6h6" /><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" /></svg> Undo</button><button data-action="redo"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px"><path d="M21 7v6h-6" /><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" /></svg> Redo</button><button data-action="fit"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px"><path d="m15 3 6 6-6 6" /><path d="M9 21 3 15l6-6" /><path d="M21 9H9" /><path d="M3 15h12" /></svg> Fit</button><button data-action="zoom-in"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg></button><button data-action="zoom-out"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="8" y1="11" x2="14" y2="11" /></svg></button><div class="pro-draw-tools" aria-label="Plan drawing tools"><button type="button" class="pro-icon-button pro-pen-button" data-action="toggle-pen" title="Draw / Mark on plan" aria-label="Draw / Mark on plan" aria-expanded="false" aria-pressed="false"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg><span>Draw</span><span class="pro-pen-color-dot" id="proPenColorDot" style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#e11d48;margin-left:4px;border:1.5px solid #fff;box-shadow:0 0 0 1px #9d7529;vertical-align:middle;"></span></button><button type="button" class="pro-icon-button" data-action="toggle-eraser" title="Erase marks or drawing strokes" aria-label="Erase marks or drawing strokes" aria-pressed="false"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.9-9.9c1-1 2.5-1 3.4 0l4.4 4.3c1 1 1 2.5 0 3.4L10.5 21" /><path d="M18 14l-4.2-4.3" /><path d="M22 21H6" /></svg></button><div class="pro-pen-popover" id="proPenPopover" hidden><div class="pro-pen-options"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;"><strong style="margin:0;color:#32473d;font-size:11px;font-weight:700;">Color Pen</strong><button type="button" data-action="close-pen-popover" style="padding:0 4px;border:none;background:transparent;color:#78857f;cursor:pointer;font-size:14px;line-height:1;" title="Close popup" aria-label="Close color pen popup">✕</button></div><div class="pro-pen-colors" role="radiogroup" aria-label="Pen color">${penColors.map(color=>`<button type="button" data-action="pen-color" data-color="${color}" style="--pen-color:${color}" aria-label="Use ${color}" role="radio"></button>`).join('')}</div><label for="proPenSize"><span>Pointer size <i class="pro-pen-size-preview" id="proPenSizePreview" aria-hidden="true"></i></span><output id="proPenSizeOutput">5 px</output></label><div class="pro-pen-size-controls"><button type="button" data-action="pen-size-decrease" aria-label="Decrease pointer size">−</button><input id="proPenSize" type="range" min="1" max="24" step="1" value="5" aria-label="Pen pointer size"><button type="button" data-action="pen-size-increase" aria-label="Increase pointer size">+</button></div></div><button type="button" data-action="clear-drawing"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg> Clear marks</button></div></div><div class="pro-toolbar-tools" aria-label="Compass and voice controls"></div></div>
              <main class="pro-main"><section class="pro-canvas-column"><div class="pro-instruction" id="proInstruction"></div><div class="pro-canvas-wrap" id="proCanvasWrap"><div class="pro-stage" id="proStage"><canvas id="proPlanCanvas"></canvas><svg id="proGeometry" aria-label="Interactive plan geometry"></svg><svg id="proDrawingLayer" class="pro-drawing-layer" aria-label="Drawing marks on top layers"></svg></div><div class="pro-empty" id="proEmptyArea" style="cursor:pointer;"><svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:#b78831;margin-bottom:12px"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg><strong style="font-size:24px;color:#20372f;margin-bottom:4px;">Upload Floor Plan &amp; Mark Boundary</strong><span style="font-size:13px;color:#5a6b63;max-width:380px;text-align:center;line-height:1.5;">Choose your architectural floor plan (JPG, PNG, or PDF) to start boundary marking and Vastu analysis.</span><button type="button" class="pro-primary" data-action="replace-plan" style="margin-top:16px;cursor:pointer;display:inline-flex;align-items:center;gap:8px;padding:12px 28px;border-radius:8px;background:#b78831;color:#fff;font-weight:700;font-size:14px;box-shadow:0 4px 14px rgba(183,136,49,0.35);border:none;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg><span>Choose Floor Plan</span></button></div><div class="pro-marking-target" id="proMarkingTarget" aria-hidden="true"></div><div class="pro-drawing-cursor" id="proDrawingCursor" aria-hidden="true"></div><div class="pro-magnifier" id="proMagnifier" aria-hidden="true"><canvas width="120" height="120"></canvas><span></span></div><div class="pro-tilt-popup" id="proTiltPopup" hidden><div class="pro-tilt-card"><h3 id="proTiltTitle">Plot Tilt Direction</h3><p id="proTiltIntro">Enter the magnetic bearing of the property facing to align the plan.</p><div class="pro-tilt-input-wrap"><input id="plotTiltInput" type="number" step="0.1" placeholder="e.g. 217.5"><span>°</span></div><div class="pro-dialog-actions"><button type="button" class="pro-primary" data-action="apply-tilt">OK</button><button type="button" data-action="skip-tilt">Skip</button></div></div></div><button type="button" class="pro-close-boundary-fab" id="proCloseBoundaryFab" hidden><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px"><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3z" /><path d="M12 21v-9" /><path d="m12 12 8-4.5" /><path d="m12 12-8-4.5" /></svg> <span>Close Boundary</span></button></div><div class="pro-calibration-popup" id="proCalibrationPopup" hidden><div class="pro-distance-fields"><label>${copy().feet}<input id="popupCalFeet" type="number" min="0" step="1" value="0"></label><label>${copy().inches}<input id="popupCalInches" type="number" min="0" max="11.99" step="0.01" value="0"></label></div><button type="button" class="pro-primary" id="popupSetScaleBtn">${copy().setPlanScale}</button></div></section></main><div class="pro-status" id="proStatus" role="status" aria-live="polite"></div>
                <div class="pro-guide-dialog" id="proGuideDialog" role="dialog" aria-modal="true" aria-labelledby="proGuideTitle" hidden><div class="pro-guide-card"><span class="pro-eyebrow" id="proGuideStep"></span><div id="proGuideIconWrap"></div><h3 id="proGuideTitle"></h3><div id="proGuideCopy"></div><button type="button" class="pro-primary" data-action="accept-guide">OK, I understand</button></div></div>
                <div class="pro-guide-dialog" id="proAddPointDialog" role="dialog" aria-modal="true" aria-labelledby="proAddPointTitle" hidden><div class="pro-guide-card pro-add-point-card"><svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:#b8892e;margin-bottom:20px"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg><h3 id="proAddPointTitle">Add a boundary point?</h3><p>Add one more adjustable point at this position for precise boundary alignment.</p><div class="pro-dialog-actions"><button type="button" data-action="cancel-add-point">Cancel</button><button type="button" class="pro-primary" data-action="confirm-add-point">Add point</button></div></div></div>
              </div>
            </section></div>`);
        const sideSection = document.createElement('section');
        sideSection.className = 'workspace-menu__section pro-workflow-panel';
        sideSection.id = 'proWorkflowPanel';
        sideSection.innerHTML = `<h2><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg> ${copy().planAnalysis}</h2><aside class="pro-side" id="proSide"></aside>`;
        $('#workspaceMenuContent')?.prepend(sideSection);
        ['#compassViewToggle', '#guideToggle'].forEach((selector) => {
            const element = $(selector);
            if (element) workspaceTools.push({ element, parent: element.parentNode, nextSibling: element.nextSibling });
        });
        bindEvents(); syncWorkspace();
        open();
    }

    function placeWorkspaceTools(inToolbar) {
        const toolbarTools = $('.pro-toolbar-tools');
        const tools = inToolbar ? workspaceTools : workspaceTools.slice().reverse();
        tools.forEach(({ element, parent, nextSibling }) => {
            if (inToolbar && toolbarTools) toolbarTools.appendChild(element);
            else if (nextSibling?.parentNode === parent) parent.insertBefore(element, nextSibling);
            else parent.appendChild(element);
        });
    }

    function openHousePlanUploadPopup() {
        if (typeof window.showUploadPopup === 'function') {
            window.showUploadPopup();
            return;
        }
        const popup = document.getElementById('popupOverlay');
        if (popup) {
            popup.style.display = 'flex';
            popup.style.pointerEvents = 'auto';
            popup.classList.add('active');
            popup.removeAttribute('aria-hidden');
        }
    }

    function bindEvents() {
        window.addEventListener('vastu:language-changed', () => {
            const heading=$('#proWorkflowPanel h2');
            if(heading) heading.innerHTML=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg> ${copy().planAnalysis}`;
            renderInstruction(); renderSide();
            const guide=$('#proGuideDialog');
            if(guide && !guide.hidden) showGuide(guide.dataset.kind || 'scale');
        });
        window.addEventListener('vastu:plan-uploaded', (event) => loadSharedPlan(event.detail));
        window.addEventListener('vastu:compass-view-changed', (event) => {
            compassView = event.detail?.showImageCompass ? 'image' : 'standard';
            renderGeometry();
        });
        $('#proEmptyArea')?.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openHousePlanUploadPopup();
        });
        const canvasWrap = $('#proCanvasWrap');
        if (canvasWrap) {
            canvasWrap.addEventListener('dragover', (e) => { e.preventDefault(); e.dataTransfer.dropEffect = 'copy'; });
            canvasWrap.addEventListener('drop', (e) => {
                e.preventDefault();
                const files = e.dataTransfer?.files;
                if (files && files.length) {
                    importPlan({ target: { files } });
                }
            });
        }
        document.querySelector('[data-workspace-action="plan"]')?.addEventListener('click', () => {
            open();
        });
        $('#proOverlay').addEventListener('click', handleAction);
        $('#proGeometry').addEventListener('keydown', (event) => {
            const marmaTarget=event.target.closest?.('[data-action="select-marma"], [data-action="select-vansha"]');
            if(marmaTarget&&(event.key==='Enter'||event.key===' ')){event.preventDefault();marmaTarget.click();return;}
            const zone = event.target.closest?.('[data-action="select-16-zone"]');
            if (zone && (event.key === 'Enter' || event.key === ' ')) {
                event.preventDefault();
                selectSixteenZone(zone.dataset.zone);
            }
        });
        $('#proSide').addEventListener('click', handleAction);

        // Delegated click on #proOverlay and #proSide handles toolbar and side buttons without duplicate event firing

        const syncDistance = (event) => {
            const id = event.target.id;
            if (!['calFeet', 'popupCalFeet', 'calInches', 'popupCalInches'].includes(id)) return;
            const val = Number(event.target.value || 0);
            if (id === 'calFeet' || id === 'popupCalFeet') {
                state.draftFeet = val;
                const otherId = id === 'calFeet' ? 'popupCalFeet' : 'calFeet';
                const other = document.getElementById(otherId);
                if (other && other.value !== event.target.value) other.value = event.target.value;
            } else {
                state.draftInches = val;
                const otherId = id === 'calInches' ? 'popupCalInches' : 'calInches';
                const other = document.getElementById(otherId);
                if (other && other.value !== event.target.value) other.value = event.target.value;
            }
        };
        $('#proSide').addEventListener('input', syncDistance);
        const popup = $('#proCalibrationPopup');
        if (popup) {
            popup.addEventListener('input', syncDistance);
            popup.addEventListener('pointerdown', e => e.stopPropagation());
        }

        const syncTilt = (event) => {
            const id = event.target.id;
            if (!['plotTiltInput', 'sidePlotTiltInput'].includes(id)) return;
            const val = parseFloat(event.target.value) || 0;
            state.plotTilt = val;
            state.planRotation = G.normalizeAngle(val - state.baseFacingAngle);
            applyTransform();

            const inputs = ['plotTiltInput', 'sidePlotTiltInput'];
            inputs.forEach(inputId => {
                const elements = document.querySelectorAll(`#${inputId}`);
                elements.forEach(el => {
                    if (el !== event.target) {
                        const valStr = inputId === 'sidePlotTiltInput' ? val.toFixed(1) : val.toString();
                        if (el.value !== valStr) el.value = valStr;
                    }
                });
            });
        };
        $('#proSide').addEventListener('input', syncTilt);
        const tiltPopup = $('#proTiltPopup');
        if (tiltPopup) {
            tiltPopup.addEventListener('input', syncTilt);
            tiltPopup.addEventListener('pointerdown', e => e.stopPropagation());
        }
        $('#popupSetScaleBtn')?.addEventListener('click', (e) => { e.stopPropagation(); applyCalibration(); });
        const boundaryFab = $('#proCloseBoundaryFab');
        if (boundaryFab) {
            boundaryFab.addEventListener('click', (e) => { e.stopPropagation(); closeBoundary(); });
            boundaryFab.addEventListener('pointerdown', e => e.stopPropagation());
            boundaryFab.addEventListener('mousedown', e => e.stopPropagation());
            boundaryFab.addEventListener('touchstart', e => { e.stopPropagation(); }, {passive: true});
        }
        $('#proSide').addEventListener('submit', (event) => {
            if (event.target.id === 'proDistanceForm') applyCalibration(event);
            if (event.target.id === 'proTiltForm' || event.target.id === 'proSideTiltForm') applyTilt(event);
        });
        $('#proSide').addEventListener('change', (event) => {
            const option=event.target.dataset.marmaOption;if(!option)return;
            state.marmaOptions[option]=event.target.checked;
            if(option==='debug'&&!event.target.checked){selectedMarmaPoint=null;selectedVanshaLine=null;}
            renderSide();renderGeometry();
        });
        $('#proSide').addEventListener('input', (event) => {
            if (event.target.id !== 'proPatternOpacity') return;
            state.patternOpacityPercent=Math.min(100,Math.max(0,Number(event.target.value)));
            $('#proPatternOpacityOutput')?.replaceChildren(`${Math.round(state.patternOpacityPercent)}%`);
            $('#proGeometry .pro-pattern-overlay')?.setAttribute('opacity',state.patternOpacityPercent/100);
        });
        $('#proPenSize').addEventListener('input', (event) => {
            setPointerSize(event.target.value);
        });
        $('#compassSizeRange')?.addEventListener('input', (event) => {
            const previousDevatasWidth=state.devatasWidthPercent||100,previousDevatasHeight=state.devatasHeightPercent||100;
            state.compassSizePercent=Number(event.target.value);
            if(compassView==='devatas'){
                const devatas=$('#proGeometry .pro-devatas');
                state.devatasWidthPercent=state.devatasHeightPercent=state.compassSizePercent;
                if(devatas){devatasResize={startWidth:previousDevatasWidth,startHeight:previousDevatasHeight,startPatternWidth:Number(devatas.dataset.width)||1,startPatternHeight:Number(devatas.dataset.height)||1};updateDevatasResizePreview();devatasResize=null;}
                else renderGeometry();
            }else if(compassView!=='boundary')renderGeometry();
        });
        const wrap = $('#proCanvasWrap');
        wrap.addEventListener('pointerdown', pointerDown); wrap.addEventListener('pointermove', pointerMove); wrap.addEventListener('pointerup', pointerUp); wrap.addEventListener('pointercancel', pointerUp); wrap.addEventListener('pointerleave', hideMagnifier);
        wrap.addEventListener('contextmenu', openBoundaryPointMenu);
        wrap.addEventListener('pointerleave', hideDrawingCursor);
        wrap.addEventListener('pointerenter', updateDrawingCursor);
        wrap.addEventListener('wheel', (e) => { if (!state.planFileUri) return; e.preventDefault(); const rect=wrap.getBoundingClientRect(); zoomAt(e.deltaY < 0 ? 1.12 : .89, e.clientX-rect.left, e.clientY-rect.top); }, { passive: false });
        document.addEventListener('pointerdown', (event) => {
            const popover = $('#proPenPopover');
            if (popover && !popover.hidden) {
                if (!event.target.closest('#proPenPopover, [data-action="toggle-pen"]')) {
                    popover.hidden = true;
                    syncDrawingTools();
                }
            }
        }, true);
        // Mobile browsers may discard a canvas backing store while the screen
        // is locked. The SVG boundary survives, which otherwise makes it look
        // as though the uploaded plan disappeared. Repaint from the retained
        // source whenever the page becomes active again.
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') restorePlanAfterResume();
        });
        window.addEventListener('pageshow', restorePlanAfterResume);
    }
    function restorePlanAfterResume() {
        if (!state.planFileUri || !$('#proOverlay')?.classList.contains('open')) return;
        lastDrawnUri='';
        if (!resumeDraw) resumeDraw=drawPlan().catch(() => {}).finally(() => { resumeDraw=null; });
        return resumeDraw;
    }
    function open() { placeWorkspaceTools(true); $('#proOverlay').classList.add('open'); $('#proOverlay').setAttribute('aria-hidden', 'false'); document.querySelector('.canvas-panel')?.classList.add('plan-analysis-active'); document.body.classList.add('plan-analysis-mode'); syncWorkspace(); }
    async function loadSharedPlan(detail = {}) {
        const { sourceUrl = detail.dataUrl, mimeType = '', direction = 'north', compassSizePercent = 100 } = detail;
        if (!sourceUrl) return;
        snapshot(); state.planFileUri=sourceUrl; state.planFileType=mimeType || (sourceUrl.startsWith('data:image/png')?'image/png':'image/jpeg'); state.selectedPdfPage=null;
        const normalizedDirection=String(direction).toLowerCase();
        // Cardinal goals (absolute bearings):
        // Right(0 deg / North), Down(90 deg / East), Left(180 deg / South), Up(270 deg / West)
        const baseFacingAngles={north:0,east:90,south:180,west:270};
        state.baseFacingAngle = baseFacingAngles[normalizedDirection] ?? 0;
        state.planRotation=0;
        state.plotTilt=state.baseFacingAngle;

        // northAngle is the absolute bearing where North (0 deg) should point on screen.
        // If Facing is East (90 deg at bottom), then North (0 deg) points Right (0 deg).
        // If Facing is North (0 deg at bottom), then North (0 deg) points Down (90 deg).
        const uploadAngles={north:90,east:-90,south:270,west:180};
        state.northAngle=G.normalizeAngle(uploadAngles[normalizedDirection] ?? 90); state.compassSizePercent=Number(compassSizePercent) || 100;

        state.calibration={draftPoints:[]}; state.outerBoundary={vertices:[],isClosed:false}; state.currentWorkflowStep='CALIBRATE_SCALE'; state.boundaryState='EMPTY'; lastDrawnUri=''; recalculate();
        open(); await drawPlan(); fit(); syncWorkspace();
        $('#proWorkflowPanel')?.scrollIntoView({block:'start'});
        showGuide('scale');
    }
    async function openPlanTool(tool) {
        const sharedPlanUri = $('#housePlan')?.getAttribute('src') || '';
        if (sharedPlanUri && sharedPlanUri !== state.planFileUri) {
            snapshot(); state.planFileUri=sharedPlanUri; state.planFileType=sharedPlanUri.startsWith('data:image/png')?'image/png':'image/jpeg'; state.selectedPdfPage=null;
            state.calibration=null; state.outerBoundary={vertices:[],isClosed:false}; state.currentWorkflowStep='CALIBRATE_SCALE'; state.boundaryState='EMPTY'; lastDrawnUri=''; recalculate();
        }
        open();
        if (!state.planFileUri) { showStatus('Upload a floor plan first, then set its reference distance.', 'warning'); openHousePlanUploadPopup(); return; }
        if (tool === 'reference') {
            mutate(() => { state.calibration={draftPoints:[]}; state.outerBoundary={vertices:[],isClosed:false}; state.currentWorkflowStep='CALIBRATE_SCALE'; state.boundaryState='EMPTY'; recalculate(); });
            showGuide('scale');
        } else if (!state.calibration?.scaleMmPerPixel) {
            state.currentWorkflowStep='CALIBRATE_SCALE'; await syncWorkspace();
            showStatus('Set a reference distance first. Boundary marking follows automatically.', 'warning');
        } else {
            mutate(() => { state.currentWorkflowStep='MARK_BOUNDARY'; state.outerBoundary.isClosed=false; state.boundaryState=state.outerBoundary.vertices.length?'DRAWING':'EMPTY'; recalculate(); });
            showStatus('Click each outside corner in order, then close the boundary.', 'success');
        }
    }
    function close() { placeWorkspaceTools(false); $('#proOverlay').classList.remove('open'); $('#proOverlay').setAttribute('aria-hidden', 'true'); document.querySelector('.canvas-panel')?.classList.remove('plan-analysis-active'); document.body.classList.remove('plan-analysis-mode'); }
    let lastActionTime = 0;
    let lastActionElement = null;

    function handleAction(event) {
        const button = event.target.closest('[data-action]'); if (!button) return;
        const now = Date.now();
        if (lastActionElement === button && now - lastActionTime < 350) {
            if (event.stopPropagation) event.stopPropagation();
            return;
        }
        lastActionTime = now;
        lastActionElement = button;
        if (event.stopPropagation) event.stopPropagation();

        const action = button.dataset.action;
        if (action === 'close') close();
        else if (action === 'undo') undo(); else if (action === 'redo') redo(); else if (action === 'fit') fit(); else if (action === 'zoom-in') zoomAt(1.2); else if (action === 'zoom-out') zoomAt(.8);
        else if (action === 'toggle-pen') {
            const popover = $('#proPenPopover');
            if (drawingTool !== 'pen' || (popover && popover.hidden)) {
                setDrawingTool('pen', true);
            } else {
                setDrawingTool(null);
            }
        }
        else if (action === 'close-pen-popover') {
            const popover = $('#proPenPopover');
            if (popover) popover.hidden = true;
            syncDrawingTools();
        }
        else if (action === 'toggle-eraser') {
            setDrawingTool(drawingTool === 'eraser' ? null : 'eraser');
        }
        else if (action === 'pen-color') {
            state.penColor = button.dataset.color;
            drawingTool = 'pen';
            syncDrawingTools();
            const cursor = $('#proDrawingCursor');
            if (cursor) {
                cursor.style.color = state.penColor;
                cursor.style.borderColor = state.penColor;
            }
        }
        else if (action === 'pen-size-decrease') setPointerSize(state.penSize - 1);
        else if (action === 'pen-size-increase') setPointerSize(state.penSize + 1);
        else if (action === 'clear-drawing') {
            const strokes = currentAnnotations();
            if (strokes.length && confirm('Clear all drawing marks from this plan?')) mutate(() => { setAnnotations([]); });
        }
        else if (action === 'cancel-calibration') resetCalibrationPoints(); else if (action === 'close-boundary') closeBoundary(); else if (action === 'reopen') mutate(() => { state.outerBoundary.isClosed=false; state.boundaryState='EDITING'; state.currentWorkflowStep='MARK_BOUNDARY'; recalculate(); });
        else if (action === 'clear-boundary' && confirm('Clear all marked boundary points?')) mutate(() => { state.outerBoundary={vertices:[],isClosed:false}; state.boundaryState='EMPTY'; recalculate(); });
        else if (action === 'accept-guide') acceptGuide();
        else if (action === 'apply-tilt') applyTilt();
        else if (action === 'skip-tilt') skipTilt();
        else if (action === 'edit-tilt') mutate(() => { state.currentWorkflowStep = 'SET_TILT'; recalculate(); });
        else if (action === 'reset-tilt') mutate(() => { state.plotTilt=state.baseFacingAngle; state.planRotation=0; recalculate(); });
        else if (action === 'cancel-add-point') closeAddPointDialog();
        else if (action === 'confirm-add-point') addPendingBoundaryPoint();
        else if (action === 'delete-vertex') deleteSelected(); else if (action === 'recalibrate') mutate(() => { state.calibration=null; state.outerBoundary={vertices:[],isClosed:false}; state.currentWorkflowStep='CALIBRATE_SCALE'; state.boundaryState='EMPTY'; recalculate(); });
        else if (action === 'compass-view') {
            compassView=button.dataset.view;
            if(compassView==='devatas'){
                state.compassSizePercent=100;
                state.devatasWidthPercent=state.devatasHeightPercent=100;
                const sizeRange=$('#compassSizeRange');if(sizeRange){sizeRange.max='300';sizeRange.value='100';sizeRange.previousElementSibling?.querySelector('output')?.replaceChildren('100%');}
            }
            updatePatternPicker(); renderGeometry();
            syncDrawingTools();
        }
        else if (action === 'select-marma') { selectedMarmaPoint=button.dataset.marmaId;selectedVanshaLine=null;renderSide();renderGeometry(); }
        else if (action === 'select-vansha') { selectedVanshaLine=button.dataset.vanshaId;selectedMarmaPoint=null;renderSide();renderGeometry(); }
        else if (action === 'select-16-zone') selectSixteenZone(button.dataset.zone);
        else if (action === 'replace-plan') {
            openHousePlanUploadPopup();
        }
    }
    function selectSixteenZone(zone) {
        selectedSixteenZone=zone;
        renderGeometry();
        requestAnimationFrame(()=>$('#proGeometry [data-zone="'+zone+'"]')?.focus());
    }
    function mutate(callback) { snapshot(); callback(); syncWorkspace(); }
    function currentAnnotations(){
        state.annotations ||= {};
        if (Array.isArray(state.annotations)) return state.annotations;
        if (!Array.isArray(state.annotations.strokes)) {
            const list = [];
            Object.keys(state.annotations).forEach(k => {
                if (Array.isArray(state.annotations[k])) list.push(...state.annotations[k]);
            });
            state.annotations.strokes = list;
        }
        return state.annotations.strokes;
    }
    function setAnnotations(newStrokes){
        state.annotations ||= {};
        if (Array.isArray(state.annotations)) {
            state.annotations = newStrokes;
        } else {
            state.annotations.strokes = newStrokes;
            if (compassView) state.annotations[compassView] = newStrokes;
        }
    }
    function ensureCanvasDimensions() {
        const wrap = $('#proCanvasWrap');
        if (!state.planFileUri) {
            const w = Math.max(900, wrap ? wrap.clientWidth - 40 : 1200);
            const h = Math.max(650, wrap ? wrap.clientHeight - 40 : 800);
            if (imageSize.width <= 1 || imageSize.height <= 1) {
                imageSize = { width: w, height: h };
            }
            const canvas = $('#proPlanCanvas');
            if (canvas && (canvas.width <= 1 || canvas.height <= 1)) {
                canvas.width = imageSize.width;
                canvas.height = imageSize.height;
                const ctx = canvas.getContext('2d');
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, imageSize.width, imageSize.height);
            }
        }
        const targetViewBox = `0 0 ${imageSize.width} ${imageSize.height}`;
        $('#proGeometry')?.setAttribute('viewBox', targetViewBox);
        $('#proDrawingLayer')?.setAttribute('viewBox', targetViewBox);
        const stage = $('#proStage');
        if (stage) {
            stage.style.width = `${imageSize.width}px`;
            stage.style.height = `${imageSize.height}px`;
        }
        if (transform.zoom === 1 && transform.panX === 0 && transform.panY === 0 && wrap && wrap.clientWidth > 50) {
            const z = Math.min((wrap.clientWidth - 40) / imageSize.width, (wrap.clientHeight - 40) / imageSize.height);
            transform = {
                zoom: Math.min(1, Math.max(0.2, z)),
                panX: Math.max(10, (wrap.clientWidth - imageSize.width * z) / 2),
                panY: Math.max(10, (wrap.clientHeight - imageSize.height * z) / 2)
            };
            applyTransform();
        }
    }
    function setPointerSize(value){
        state.penSize=Math.min(24,Math.max(1,Number(value)));
        const range=$('#proPenSize');if(range)range.value=String(state.penSize);
        $('#proPenSizeOutput')?.replaceChildren(`${state.penSize} px`);
        $('#proPenSizePreview')?.style.setProperty('--preview-size',`${Math.max(3,state.penSize)}px`);
        syncDrawingTools();
    }
    function setDrawingTool(tool, openPopup = true){
        drawingTool = tool;
        activeStroke = null;
        isErasing = false;
        ensureCanvasDimensions();
        const popover = $('#proPenPopover');
        if (popover) {
            popover.hidden = (tool !== 'pen' || !openPopup);
        }
        syncDrawingTools();
    }
    function syncDrawingTools(){
        const popover = $('#proPenPopover');
        const isPopoverOpen = popover && !popover.hidden;
        document.querySelectorAll('.pro-draw-tools>.pro-icon-button').forEach(button => {
            const isPen = button.dataset.action === 'toggle-pen';
            const selected = (isPen && drawingTool === 'pen') || (!isPen && drawingTool === 'eraser');
            button.classList.toggle('active', selected);
            button.setAttribute('aria-pressed', String(selected));
            if (isPen) button.setAttribute('aria-expanded', String(selected && isPopoverOpen));
        });
        document.querySelectorAll('.pro-pen-colors button').forEach(button => {
            button.setAttribute('aria-checked', String(button.dataset.color === state.penColor));
        });
        const dot = $('#proPenColorDot');
        if (dot) dot.style.background = state.penColor || '#e11d48';
        const range = $('#proPenSize');
        if (range) range.value = String(state.penSize);
        $('#proPenSizeOutput')?.replaceChildren(`${state.penSize} px`);
        $('#proPenSizePreview')?.style.setProperty('--preview-size', `${Math.max(3, state.penSize)}px`);
        const wrap = $('#proCanvasWrap');
        if (wrap) wrap.classList.toggle('is-drawing', Boolean(drawingTool));
        if (!drawingTool) hideDrawingCursor();
    }

    async function importPlan(event) {
        const file = event.target.files[0]; if (!file) return;
        const fileExt = file.name ? file.name.split('.').pop().toLowerCase() : '';
        const isSupportedImage = file.type.startsWith('image/') || ['jpg', 'jpeg', 'png', 'webp', 'bmp', 'gif', 'svg', 'heic', 'heif'].includes(fileExt);
        const isPdf = file.type === 'application/pdf' || fileExt === 'pdf';
        if (!isSupportedImage && !isPdf) { showStatus('Unsupported file. Choose an Image or PDF.', 'error'); return; }
        try {
            let dataUrl; let pageNumber = null;
            if (isPdf) {
                if (!window.pdfjsLib) throw new Error('PDF renderer is unavailable.');
                const pdf = await window.pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
                pageNumber = pdf.numPages > 1 ? Number(prompt(`This PDF has ${pdf.numPages} pages. Enter a page number:`, '1')) : 1;
                if (!Number.isInteger(pageNumber) || pageNumber < 1 || pageNumber > pdf.numPages) throw new Error('Choose a valid PDF page.');
                const page = await pdf.getPage(pageNumber); const viewport = page.getViewport({ scale: 2.25 });
                const canvas = document.createElement('canvas'); canvas.width=viewport.width; canvas.height=viewport.height;
                await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise; dataUrl=await window.ImageAssetManager.fromCanvas(canvas, 'image/jpeg', .92);
                canvas.width=1; canvas.height=1;
            } else {
                showStatus('Compressing and optimizing floor plan...', 'info');
                dataUrl = await window.ImageAssetManager.compressImageFile(file);
            }
            snapshot(); state.planFileUri=dataUrl; state.planFileType=dataUrl.mimeType || file.type || ('image/' + (fileExt === 'jpg' ? 'jpeg' : fileExt)); state.selectedPdfPage=pageNumber;
            state.planRotation=0;
            state.calibration=null; state.outerBoundary={vertices:[],isClosed:false}; state.currentWorkflowStep='CALIBRATE_SCALE'; state.boundaryState='EMPTY'; recalculate();
            const house=$('#housePlan');if(house){house.src=dataUrl;house.style.display='block';$('#planEmptyState')?.classList.add('hidden');}
            await drawPlan(); fit(); syncWorkspace();
            showGuide('scale');
        } catch (error) { showStatus(error.message || 'The plan could not be opened.', 'error'); }
        event.target.value='';
    }
    async function drawPlan() {
        const canvas=$('#proPlanCanvas'); if (!state.planFileUri) { canvas.width=1; canvas.height=1; cachedImage=null; cachedImageUri=''; return; }
        let image;
        if (cachedImage && cachedImageUri === state.planFileUri) {
            image = cachedImage;
        } else {
            image = new Image();
            image.src = state.planFileUri;
            try {
                await image.decode();
            } catch (err) {
                console.warn("image.decode failed, falling back to onload", err);
                await new Promise((resolve, reject) => {
                    image.onload = resolve;
                    image.onerror = reject;
                });
            }
            cachedImage = image;
            cachedImageUri = state.planFileUri;
        }
        const max=2048; const sample=Math.min(1,max/Math.max(image.naturalWidth,image.naturalHeight));
        const sourceSize={width:Math.round(image.naturalWidth*sample),height:Math.round(image.naturalHeight*sample)};
        state.sourceSize = sourceSize;
        imageSize = sourceSize;
        if (canvas.width !== imageSize.width || canvas.height !== imageSize.height) {
            canvas.width = imageSize.width;
            canvas.height = imageSize.height;
        }
        const context=canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0, sourceSize.width, sourceSize.height);

        const targetViewBox = `0 0 ${imageSize.width} ${imageSize.height}`;
        if ($('#proGeometry').getAttribute('viewBox') !== targetViewBox) {
            $('#proGeometry').setAttribute('viewBox', targetViewBox);
        }
        if ($('#proDrawingLayer') && $('#proDrawingLayer').getAttribute('viewBox') !== targetViewBox) {
            $('#proDrawingLayer').setAttribute('viewBox', targetViewBox);
        }
        const targetWidthStr = `${imageSize.width}px`;
        if ($('#proStage').style.width !== targetWidthStr) {
            $('#proStage').style.width = targetWidthStr;
        }
        const targetHeightStr = `${imageSize.height}px`;
        if ($('#proStage').style.height !== targetHeightStr) {
            $('#proStage').style.height = targetHeightStr;
        }
        lastDrawnUri = state.planFileUri;
    }

    function resetCalibrationPoints() { mutate(() => { state.calibration={draftPoints:[]}; }); }
    function applyCalibration(event) {
        if (event) event.preventDefault();
        const points=state.calibration?.draftPoints || [];
        const value=state.draftFeet+(state.draftInches/12);
        try {
            const calibration=G.calibrate(points[0],points[1],value,'feet');
            mutate(() => { state.calibration=calibration; state.currentWorkflowStep='MARK_BOUNDARY'; state.boundaryState='EMPTY'; state.draftFeet=0; state.draftInches=0; });
            showGuide('boundary');
        }
        catch (error) { showStatus(error.message, 'error'); }
    }
    function applyTilt(event) {
        if (event) event.preventDefault();
        const popupInput = $('#plotTiltInput');
        const sideInput = $('#sidePlotTiltInput');
        const tilt = parseFloat(popupInput?.value || sideInput?.value) || 0;

        mutate(() => {
            state.plotTilt = tilt;
            state.planRotation = G.normalizeAngle(tilt - state.baseFacingAngle);
            state.currentWorkflowStep = 'READY_FOR_ANALYSIS';
            const popup = $('#proTiltPopup');
            if (popup) popup.hidden = true;
            recalculate();
        });

        centerOnCentroid();
    }
    function skipTilt() {
        mutate(() => {
            state.currentWorkflowStep = 'READY_FOR_ANALYSIS';
            const popup = $('#proTiltPopup');
            if (popup) popup.hidden = true;
            recalculate();
        });
        centerOnCentroid();
    }

    function centerOnCentroid() {
        if (!state.centroid || !state.sourceSize) return;
        const wrap = $('#proCanvasWrap');
        const width = wrap.clientWidth || window.innerWidth || 800;
        const height = wrap.clientHeight || window.innerHeight || 600;
        const centerX = width / 2;
        const centerY = height / 2;

        transform.zoom = Math.max(0.05, transform.zoom || 1);
        transform.panX = centerX - state.centroid.x * transform.zoom;
        transform.panY = centerY - state.centroid.y * transform.zoom;

        applyTransform();
    }
    function showGuide(kind) {
        const dialog=$('#proGuideDialog');
        const iconWrap=$('#proGuideIconWrap');
        const t=copy();
        dialog.dataset.kind=kind;
        if(kind==='complete'){
            $('#proGuideStep').textContent=t.closed; $('#proGuideTitle').textContent=t.complete;
            $('#proGuideCopy').innerHTML=`<p>${t.completeText}</p>`;
            if(iconWrap) iconWrap.innerHTML = `<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#287a4b;margin-bottom:20px"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>`;
            dialog.querySelector('button').textContent=t.continue;
        }else if(kind==='boundary'){
            $('#proGuideStep').textContent=t.step2; $('#proGuideTitle').textContent=t.boundaryTitle;
            $('#proGuideCopy').innerHTML=`<p>${t.boundaryIntro}</p>${list(t.boundaryItems)}`;
            if(iconWrap) iconWrap.innerHTML = `<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#b8892e;margin-bottom:20px"><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3z" /><path d="M12 21v-9" /><path d="m12 12 8-4.5" /><path d="m12 12-8-4.5" /></svg>`;
        }else{
            $('#proGuideStep').textContent=t.step1; $('#proGuideTitle').textContent=t.setScale;
            $('#proGuideCopy').innerHTML=`<p>${t.scaleIntro}</p>${list(t.scaleItems)}`;
            if(iconWrap) iconWrap.innerHTML = `<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#b8892e;margin-bottom:20px"><path d="M11 5L6 9" /><path d="M13 13l-4 4" /><path d="M14 11l-3 3" /><path d="M15 9l-2 2" /><path d="M17 7l-1 1" /><path d="M19 15c0 3.314-2.686 6-6 6" /><path d="M21 11a10 10 0 0 0-20 0 10 10 0 0 0 20 0Z" /></svg>`;
        }
        if(kind!=='complete') dialog.querySelector('button').textContent=t.ok;
        dialog.hidden=false; dialog.querySelector('button').focus();
    }
    function acceptGuide(){
        const dialog=$('#proGuideDialog');
        const kind = dialog.dataset.kind;
        if(kind==='boundary') mutate(()=>{state.currentWorkflowStep='MARK_BOUNDARY';state.boundaryState='EMPTY';recalculate();});
        else if(kind==='complete') {
            if (state.currentWorkflowStep === 'READY_FOR_ANALYSIS') {
                dialog.hidden = true;
            } else {
                mutate(()=>{state.currentWorkflowStep='SET_TILT';recalculate();});
            }
        }
        dialog.hidden=true;
    }
    function closeBoundary() {
        const points=state.outerBoundary.vertices;
        if (points.length<3) return showStatus('Mark at least three unique corners before closing.', 'error');
        if (G.polygonAreaPx2(points)<1) return showStatus('The boundary has zero or near-zero area.', 'error');
        if (G.hasSelfIntersection(points)) return showStatus('Boundary lines cross each other. Adjust the marked points before closing.', 'error');
        mutate(() => { state.outerBoundary.isClosed=true; state.boundaryState='CLOSED'; recalculate(); });
        showGuide('complete');
    }
    function recalculate() {
        const points=state.outerBoundary.vertices; const scale=state.calibration?.scaleMmPerPixel;
        if (!state.outerBoundary.isClosed || !scale || points.length<3) { state.measurements=null; state.centroid=null; state.compass=null; state.marmaAnalysis=null; return; }
        try {
            const centroid=G.polygonCentroid(points); const areaMm2=G.polygonAreaMm2(points,scale);
            state.measurements={ edges:G.boundaryEdges(points,scale,true), edgeLengthsMm:G.boundaryEdges(points,scale,true).map(e=>e.realLengthMm), perimeterMm:G.perimeterMm(points,scale), areaMm2 };
            state.centroid=centroid; state.compass={centerX:centroid.x,centerY:centroid.y,northAngleDegrees:G.normalizeAngle(state.northAngle),opacity:.72};
            if(Marma){
                try { state.marmaAnalysis=Marma.calculateMarmaAnalysis(points,G.normalizeAngle(state.northAngle-180),scale,{requireScale:true}); }
                catch(error){ state.marmaAnalysis=null; showStatus(error.message,'error'); }
            }
        } catch (error) {
            console.error("Recalculation failed:", error);
            state.measurements=null; state.centroid=null; state.compass=null; state.marmaAnalysis=null;
            showStatus(error.message || 'Recalculation failed. Please verify marked points.', 'error');
        }
    }
    function planPoint(event) {
        const rect=$('#proCanvasWrap').getBoundingClientRect();
        return G.createTransform({ ...transform, rotation: state.planRotation, origin: state.centroid || { x: 0, y: 0 } }).screenToPlan({x:event.clientX-rect.left,y:event.clientY-rect.top});
    }
    function updateMagnifier(event) {
        const magnifier=$('#proMagnifier'),target=$('#proMarkingTarget'),wrap=$('#proCanvasWrap');
        const canMagnify=state.currentWorkflowStep==='CALIBRATE_SCALE'||state.currentWorkflowStep==='MARK_BOUNDARY'||draggingVertex;
        if(!magnifier||!target||!wrap||!canMagnify||panStart){hideMagnifier();return;}
        const rect=wrap.getBoundingClientRect(),x=event.clientX-rect.left,y=event.clientY-rect.top;
        if(x<0||y<0||x>rect.width||y>rect.height){hideMagnifier();return;}
        const point=planPoint(event),canvas=magnifier.querySelector('canvas'),context=canvas.getContext('2d'),source=$('#proPlanCanvas');
        const sampleSize=canvas.width/(3*transform.zoom);
        context.clearRect(0,0,canvas.width,canvas.height);
        context.imageSmoothingEnabled=true;
        context.drawImage(source,point.x-sampleSize/2,point.y-sampleSize/2,sampleSize,sampleSize,0,0,canvas.width,canvas.height);
        drawMagnifiedGeometry(context,point,sampleSize,canvas.width);
        const size=120,gap=24,padding=8;
        let left=x+gap,top=y-size-gap;
        if(left+size+padding>rect.width) left=x-size-gap;
        if(top<padding) top=y+gap;
        magnifier.style.transform=`translate(${Math.max(padding,left)}px,${Math.min(rect.height-size-padding,top)}px)`;
        target.style.transform=`translate(${x}px,${y}px)`;
        magnifier.classList.add('show');target.classList.add('show');
    }
    function drawMagnifiedGeometry(context,center,sampleSize,size){
        const calibrationPoints=state.calibration?.draftPoints||(state.calibration?.pointA?[state.calibration.pointA,state.calibration.pointB]:[]);
        const points=state.currentWorkflowStep==='CALIBRATE_SCALE'?calibrationPoints:state.outerBoundary.vertices;
        if(!points.length)return;
        const scale=size/sampleSize,toCanvas=point=>({x:(point.x-center.x)*scale+size/2,y:(point.y-center.y)*scale+size/2});
        context.save();context.lineCap='round';context.lineJoin='round';context.lineWidth=3;
        context.strokeStyle=state.currentWorkflowStep==='CALIBRATE_SCALE'?'#176f78':'#c48b22';
        if(state.currentWorkflowStep==='CALIBRATE_SCALE')context.setLineDash([8,5]);
        context.beginPath();points.forEach((item,index)=>{const shown=toCanvas(item);if(index)context.lineTo(shown.x,shown.y);else context.moveTo(shown.x,shown.y);});
        if(state.currentWorkflowStep!=='CALIBRATE_SCALE'&&state.outerBoundary.isClosed&&points.length>2){const first=toCanvas(points[0]);context.lineTo(first.x,first.y);}
        context.stroke();context.setLineDash([]);
        points.forEach(item=>{const shown=toCanvas(item);context.beginPath();context.arc(shown.x,shown.y,item.id===selectedVertex?7:5,0,Math.PI*2);context.fillStyle=item.id===selectedVertex?'#ffcf52':'#fff';context.fill();context.lineWidth=2;context.stroke();});
        context.restore();
    }
    function hideMagnifier(){ $('#proMagnifier')?.classList.remove('show'); $('#proMarkingTarget')?.classList.remove('show'); }
    function updateDrawingCursor(event){
        const cursor=$('#proDrawingCursor');
        if(!cursor||!drawingTool)return hideDrawingCursor();
        const rect=$('#proCanvasWrap').getBoundingClientRect(),size=drawingTool==='eraser'?Math.max(28,state.penSize*5):Math.max(6,state.penSize);
        cursor.style.width=`${size}px`;cursor.style.height=`${size}px`;cursor.style.left=`${event.clientX-rect.left}px`;cursor.style.top=`${event.clientY-rect.top}px`;
        cursor.className=`pro-drawing-cursor show is-${drawingTool}`;
        cursor.style.borderColor=drawingTool==='eraser'?'#263b32':state.penColor;
        cursor.style.color=state.penColor;
    }
    function hideDrawingCursor(){ $('#proDrawingCursor')?.classList.remove('show'); }

    function eraseAtPoint(center, radius) {
        let changed = false;
        const zoom = transform.zoom || 1;

        // Erase freehand drawing annotation strokes
        const strokes = currentAnnotations();
        const beforeCount = strokes.length;
        const remaining = strokes.filter(stroke => {
            if (!stroke.points || stroke.points.length === 0) return false;
            const strokeRadius = (Number(stroke.size) || 5) / (2 * zoom);
            const effRadius = radius + strokeRadius;
            if (stroke.points.length === 1) {
                return G.distancePx(stroke.points[0], center) > effRadius;
            }
            for (let i = 0; i < stroke.points.length - 1; i++) {
                const proj = G.projectPointToSegment(center, stroke.points[i], stroke.points[i + 1]);
                if (proj && proj.distance <= effRadius) return false;
            }
            return G.distancePx(stroke.points[stroke.points.length - 1], center) > effRadius;
        });
        if (remaining.length !== beforeCount) {
            setAnnotations(remaining);
            renderAnnotations();
            changed = true;
        }

        return changed;
    }
    function nearestVertex(point, radius=18/transform.zoom) { let best=null; let dist=radius; const all=state.currentWorkflowStep==='CALIBRATE_SCALE' ? state.calibration?.draftPoints || [] : state.outerBoundary.vertices; all.forEach(p=>{const d=G.distancePx(point,p);if(d<=dist){best=p;dist=d;}});return best; }
    function selectedPoint(){return state.calibration?.draftPoints?.find(point=>point.id===selectedVertex)||state.outerBoundary.vertices.find(point=>point.id===selectedVertex);}
    function nearestBoundaryEdge(point, radius=16/transform.zoom){
        const points=state.outerBoundary.vertices;if(points.length<2)return null;
        const edgeCount=state.outerBoundary.isClosed?points.length:points.length-1;let best=null;
        for(let index=0;index<edgeCount;index+=1){const projection=G.projectPointToSegment(point,points[index],points[(index+1)%points.length]);if(projection.position>.04&&projection.position<.96&&projection.distance<=radius&&(!best||projection.distance<best.point.distance))best={index,point:projection};}
        return best;
    }
    function cancelBoundaryHold(){if(boundaryHold?.timer)clearTimeout(boundaryHold.timer);boundaryHold=null;}
    function startBoundaryHold(event,edge){
        cancelBoundaryHold();boundaryHold={pointerId:event.pointerId,startX:event.clientX,startY:event.clientY,edge,timer:setTimeout(()=>{if(!boundaryHold)return;touchCandidate=null;boundaryHold=null;showAddPointDialog(edge);},2000)};
    }
    function showAddPointDialog(edge){pendingBoundaryPoint={index:edge.index,x:edge.point.x,y:edge.point.y};hideMagnifier();const dialog=$('#proAddPointDialog');dialog.hidden=false;dialog.querySelector('[data-action="confirm-add-point"]').focus();}
    function openBoundaryPointMenu(event){
        if(!state.planFileUri||drawingTool)return;
        const edge=nearestBoundaryEdge(planPoint(event));if(!edge)return;
        event.preventDefault();cancelBoundaryHold();showAddPointDialog(edge);
    }
    function closeAddPointDialog(){pendingBoundaryPoint=null;$('#proAddPointDialog').hidden=true;}
    function addPendingBoundaryPoint(){if(!pendingBoundaryPoint)return closeAddPointDialog();const point=pendingBoundaryPoint;closeAddPointDialog();mutate(()=>{state.outerBoundary.vertices.splice(point.index+1,0,{id:id(),x:point.x,y:point.y});recalculate();});showStatus('Boundary point added. Drag it to fine-tune the alignment.','success');}
    function pointerDown(event) {
        if (!state.planFileUri && !drawingTool) return;
        const point = planPoint(event);

        if (drawingTool) {
            if (event.pointerType === 'mouse' && event.button !== 0) return;
            const popover = $('#proPenPopover');
            if (popover && !popover.hidden) {
                popover.hidden = true;
                syncDrawingTools();
            }
            snapshot();
            if (drawingTool === 'pen') {
                activeStroke = { id: id(), color: state.penColor, size: state.penSize, points: [point] };
                currentAnnotations().push(activeStroke);
                renderAnnotations();
            } else if (drawingTool === 'eraser') {
                isErasing = true;
                const eraserRadius = Math.max(16, (state.penSize * 5) / 2);
                const planRadius = eraserRadius / (transform.zoom || 1);
                eraseAtPoint(point, planRadius);
            }
            try { event.currentTarget.setPointerCapture(event.pointerId); } catch(err) {}
            event.preventDefault();
            return;
        }

        const vertex = nearestVertex(point);
        if (event.pointerType === 'mouse' && event.button === 2) { event.preventDefault(); return; }
        if (vertex && (state.currentWorkflowStep === 'CALIBRATE_SCALE' || state.outerBoundary.vertices.some(item => item.id === vertex.id))) {
            selectedVertex = vertex.id;
            draggingVertex = true;
            vertexDragStart = { x: event.clientX, y: event.clientY, vertexId: vertex.id };
            snapshot();
            event.currentTarget.setPointerCapture(event.pointerId);
            renderGeometry();
            updateMagnifier(event);
            event.preventDefault();
            return;
        }
        const edge = nearestBoundaryEdge(point);
        if (edge && event.pointerType === 'touch') {
            startBoundaryHold(event, edge);
            event.currentTarget.setPointerCapture(event.pointerId);
            touchPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
            touchCandidate = null;
            event.preventDefault();
            return;
        }
        if (event.pointerType === 'touch') {
            touchPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
            if (touchPointers.size === 2) {
                const [a, b] = [...touchPointers.values()], rect = event.currentTarget.getBoundingClientRect();
                pinchStart = { distance: Math.hypot(b.x - a.x, b.y - a.y), zoom: transform.zoom, panX: transform.panX, panY: transform.panY, centerX: (a.x + b.x) / 2 - rect.left, centerY: (a.y + b.y) / 2 - rect.top };
                touchCandidate = null;
                activeStroke = null;
                event.currentTarget.setPointerCapture(event.pointerId);
                event.preventDefault();
                return;
            }
            if (state.currentWorkflowStep === 'CALIBRATE_SCALE' || state.currentWorkflowStep === 'MARK_BOUNDARY') {
                touchCandidate = { pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, point };
                event.currentTarget.setPointerCapture(event.pointerId);
                event.preventDefault();
                return;
            }
            if (state.currentWorkflowStep === 'READY_FOR_ANALYSIS' && !vertex && !event.target.closest?.('.pro-devatas-handle,.pro-devatas-handle-hit')) {
                panStart = { x: event.clientX, y: event.clientY, panX: transform.panX, panY: transform.panY };
                event.currentTarget.setPointerCapture(event.pointerId);
                event.currentTarget.classList.add('is-panning');
                event.preventDefault();
                return;
            }
        }
        if (event.pointerType === 'mouse' && event.button === 1) {
            panStart = { x: event.clientX, y: event.clientY, panX: transform.panX, panY: transform.panY };
            event.currentTarget.setPointerCapture(event.pointerId);
            event.currentTarget.classList.add('is-panning');
            hideMagnifier();
            event.preventDefault();
            return;
        }
        const resizeHandle = event.target.closest?.('.pro-devatas-handle,.pro-devatas-handle-hit');
        if (resizeHandle && state.centroid) {
            const angle = G.normalizeAngle(state.northAngle + 90) * Math.PI / 180, dx = point.x - state.centroid.x, dy = point.y - state.centroid.y;
            const local = { x: dx * Math.cos(angle) + dy * Math.sin(angle), y: -dx * Math.sin(angle) + dy * Math.cos(angle) };
            const devatas = resizeHandle.closest('.pro-devatas');
            devatasResize = { axis: resizeHandle.dataset.axis, startLocal: local, startWidth: state.devatasWidthPercent || 100, startHeight: state.devatasHeightPercent || 100, startPatternWidth: Number(devatas?.dataset.width) || 1, startPatternHeight: Number(devatas?.dataset.height) || 1 };
            event.currentTarget.setPointerCapture(event.pointerId);
            event.preventDefault();
            return;
        }
        if (event.pointerType === 'mouse' && event.shiftKey) {
            panStart = { x: event.clientX, y: event.clientY, panX: transform.panX, panY: transform.panY };
            event.currentTarget.setPointerCapture(event.pointerId);
            event.currentTarget.classList.add('is-panning');
            hideMagnifier();
            event.preventDefault();
            return;
        }
        if (state.currentWorkflowStep === 'CALIBRATE_SCALE') {
            const draft = state.calibration?.draftPoints || [];
            if (draft.length >= 2) return;
            mutate(() => { state.calibration = { draftPoints: [...draft, { id: id(), x: point.x, y: point.y }] }; });
            if (draft.length === 1 && matchMedia('(min-width: 601px)').matches) {
                window.dispatchEvent(new CustomEvent('vastu:open-workspace-controls', { detail: { target: '#proWorkflowPanel' } }));
            }
            return;
        }
        if (state.currentWorkflowStep === 'MARK_BOUNDARY' && !state.outerBoundary.isClosed) {
            const now = Date.now();
            const near = nearestVertex(point);
            const doubleTap = now - lastTap.time < DOUBLE_TAP_MS && near && (near.id === state.outerBoundary.vertices[0]?.id || near.id === state.outerBoundary.vertices.at(-1)?.id);
            if (doubleTap) { closeBoundary(); lastTap = { time: 0, vertex: null }; return; }
            if (near) { lastTap = { time: now, vertex: near.id }; return; }
            const vertexId = id();
            mutate(() => { state.outerBoundary.vertices.push({ id: vertexId, x: point.x, y: point.y }); state.boundaryState = 'DRAWING'; });
            lastTap = { time: now, vertex: vertexId };
        }
    }
    function pointerMove(event) {
        if (boundaryHold?.pointerId === event.pointerId && Math.hypot(event.clientX - boundaryHold.startX, event.clientY - boundaryHold.startY) > 10) cancelBoundaryHold();
        if (event.pointerType === 'touch' && touchPointers.has(event.pointerId)) {
            touchPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
            if (touchCandidate && touchCandidate.pointerId === event.pointerId && Math.hypot(event.clientX - touchCandidate.startX, event.clientY - touchCandidate.startY) > 10) touchCandidate = null;
            if (pinchStart && touchPointers.size >= 2) {
                const [a, b] = [...touchPointers.values()], distance = Math.max(1, Math.hypot(b.x - a.x, b.y - a.y)), next = Math.min(8, Math.max(.08, pinchStart.zoom * distance / pinchStart.distance));
                const rect = event.currentTarget.getBoundingClientRect(), centerX = (a.x + b.x) / 2 - rect.left, centerY = (a.y + b.y) / 2 - rect.top, ratio = next / pinchStart.zoom;
                transform.zoom = next; transform.panX = centerX - (pinchStart.centerX - pinchStart.panX) * ratio; transform.panY = centerY - (pinchStart.centerY - pinchStart.panY) * ratio; applyTransform(); event.preventDefault(); return;
            }
        }
        updateDrawingCursor(event);
        updateMagnifier(event);
        if (activeStroke) {
            const point = planPoint(event), last = activeStroke.points[activeStroke.points.length - 1];
            if (!last || G.distancePx(last, point) >= Math.max(0.5, 0.5 / (transform.zoom || 1))) {
                activeStroke.points.push(point);
                renderAnnotations();
            }
            return;
        }
        if (drawingTool === 'eraser' && isErasing) {
            const point = planPoint(event);
            const eraserRadius = Math.max(14, (state.penSize * 5) / 2);
            const planRadius = eraserRadius / (transform.zoom || 1);
            eraseAtPoint(point, planRadius);
            return;
        }
        if (devatasResize && state.centroid) {
            const point = planPoint(event), angle = G.normalizeAngle(state.northAngle + 90) * Math.PI / 180, dx = point.x - state.centroid.x, dy = point.y - state.centroid.y;
            const local = { x: dx * Math.cos(angle) + dy * Math.sin(angle), y: -dx * Math.sin(angle) + dy * Math.cos(angle) };
            if (devatasResize.axis.includes('x')) state.devatasWidthPercent = Math.min(300, Math.max(25, devatasResize.startWidth * Math.abs(local.x) / Math.max(Math.abs(devatasResize.startLocal.x), 1)));
            if (devatasResize.axis.includes('y')) state.devatasHeightPercent = Math.min(300, Math.max(25, devatasResize.startHeight * Math.abs(local.y) / Math.max(Math.abs(devatasResize.startLocal.y), 1)));
            const sizeRange = $('#compassSizeRange'); if (sizeRange) { const value = Math.round(Math.max(state.devatasWidthPercent, state.devatasHeightPercent)); sizeRange.value = String(value); sizeRange.previousElementSibling?.querySelector('output')?.replaceChildren(`W ${Math.round(state.devatasWidthPercent)}% · H ${Math.round(state.devatasHeightPercent)}%`); }

            updateDevatasResizePreview();
            return;
        }
        if (panStart) { transform.panX = panStart.panX + event.clientX - panStart.x; transform.panY = panStart.panY + event.clientY - panStart.y; applyTransform(); event.preventDefault(); return; }
        if (!draggingVertex) return; const point = planPoint(event); const vertex = selectedPoint(); if (vertex) { vertex.x = point.x; vertex.y = point.y; scheduleVertexDragPreview(); updateMagnifier(event); event.preventDefault(); }
    }
    function pointerUp(event) {
        cancelBoundaryHold();
        const candidate = event?.pointerType === 'touch' && touchCandidate?.pointerId === event.pointerId ? touchCandidate : null;
        if (event?.pointerType === 'touch') {
            touchPointers.delete(event.pointerId);
            if (touchPointers.size < 2) pinchStart = null;
            if (candidate && touchPointers.size === 0) {
                touchCandidate = null;
                markPlanPoint(candidate.point);
            } else if (candidate) touchCandidate = null;
        }
        activeStroke = null;
        isErasing = false;
        try {
            if (event?.currentTarget?.hasPointerCapture?.(event.pointerId)) {
                event.currentTarget.releasePointerCapture(event.pointerId);
            }
        } catch(err) {}
        if (draggingVertex) {
            const drag = vertexDragStart;
            draggingVertex = false;
            vertexDragStart = null;
            if (vertexDragFrame) {
                cancelAnimationFrame(vertexDragFrame);
                vertexDragFrame = 0;
            }
            if (state.outerBoundary.vertices.length >= 4 && G.hasSelfIntersection(state.outerBoundary.vertices)) {
                future.push(clone(state));
                restore(history.pop());
                showStatus('Move cancelled because boundary lines would cross.', 'error');
            } else {
                recalculate();
                renderGeometry();
                renderSide();
                if (drag && Math.hypot(event.clientX - drag.x, event.clientY - drag.y) < 10) recordBoundaryEndpointTap(drag.vertexId);
            }
        }
        devatasResize = null;
        panStart = null;
        event?.currentTarget?.classList.remove('is-panning');
        hideMagnifier();
    }

    function scheduleVertexDragPreview(){
        if(vertexDragFrame)return;
        vertexDragFrame=requestAnimationFrame(()=>{vertexDragFrame=0;updateVertexDragPreview();});
    }
    function updateVertexDragPreview(){
        const svg=$('#proGeometry');if(!svg)return;
        const calPoints=state.calibration?.draftPoints||(state.calibration?.pointA?[state.calibration.pointA,state.calibration.pointB]:[]);
        calPoints.forEach((point,index)=>{const marker=svg.querySelector(`[data-cal-point="${index}"]`),label=svg.querySelector(`[data-cal-label="${index}"]`);if(marker){marker.setAttribute('cx',point.x);marker.setAttribute('cy',point.y);}if(label){label.setAttribute('x',point.x+10);label.setAttribute('y',point.y-10);}});
        const calLine=svg.querySelector('.pro-cal-line');if(calLine&&calPoints.length===2){calLine.setAttribute('x1',calPoints[0].x);calLine.setAttribute('y1',calPoints[0].y);calLine.setAttribute('x2',calPoints[1].x);calLine.setAttribute('y2',calPoints[1].y);}
        const points=state.outerBoundary.vertices;if(!points.length)return;
        const path=points.map(point=>`${point.x},${point.y}`).join(' '),closedPath=`${path}${state.outerBoundary.isClosed?` ${points[0].x},${points[0].y}`:''}`;
        svg.querySelector('.pro-boundary-fill')?.setAttribute('points',path);svg.querySelector('.pro-boundary-line')?.setAttribute('points',closedPath);
        points.forEach((point,index)=>{const group=svg.querySelector(`[data-boundary-vertex="${index}"]`);if(group)group.setAttribute('transform',`translate(${point.x} ${point.y})`);});
        const edges=state.calibration?G.boundaryEdges(points,state.calibration.scaleMmPerPixel,state.outerBoundary.isClosed):[];
        edges.forEach((edge,index)=>{const a=points[index],b=points[(index+1)%points.length],label=svg.querySelector(`[data-boundary-edge="${index}"]`);if(label){label.setAttribute('x',(a.x+b.x)/2);label.setAttribute('y',(a.y+b.y)/2-8);label.textContent=G.formatLength(edge.realLengthMm,state.preferredLength);}});
    }

    function recordBoundaryEndpointTap(vertexId){
        if(state.currentWorkflowStep!=='MARK_BOUNDARY'||state.outerBoundary.isClosed)return;
        const points=state.outerBoundary.vertices,isEndpoint=vertexId===points[0]?.id||vertexId===points.at(-1)?.id,now=Date.now();
        if(isEndpoint&&now-lastTap.time<DOUBLE_TAP_MS&&lastTap.vertex===vertexId){lastTap={time:0,vertex:null};closeBoundary();return;}
        lastTap={time:now,vertex:isEndpoint?vertexId:null};
    }

    function markPlanPoint(point){
        if(state.currentWorkflowStep==='CALIBRATE_SCALE'){
            const draft=state.calibration?.draftPoints||[];if(draft.length<2)mutate(()=>{state.calibration={draftPoints:[...draft,{id:id(),x:point.x,y:point.y}]};});return;
        }
        if(state.currentWorkflowStep==='MARK_BOUNDARY'&&!state.outerBoundary.isClosed){
            const now=Date.now(),near=nearestVertex(point),doubleTap=now-lastTap.time<DOUBLE_TAP_MS&&near&&(near.id===state.outerBoundary.vertices[0]?.id||near.id===state.outerBoundary.vertices.at(-1)?.id);
            if(doubleTap){closeBoundary();lastTap={time:0,vertex:null};return;}if(near){lastTap={time:now,vertex:near.id};return;}
            const vertexId=id();mutate(()=>{state.outerBoundary.vertices.push({id:vertexId,x:point.x,y:point.y});state.boundaryState='DRAWING';});lastTap={time:now,vertex:vertexId};
        }
    }
    function deleteSelected(){if(!selectedVertex)return showStatus('Select a vertex first.','warning');if(state.outerBoundary.vertices.length<=3)return showStatus('A boundary requires at least three vertices.','error');mutate(()=>{state.outerBoundary.vertices=state.outerBoundary.vertices.filter(v=>v.id!==selectedVertex);selectedVertex=null;recalculate();});}

    function zoomAt(factor,x=$('#proCanvasWrap').clientWidth/2,y=$('#proCanvasWrap').clientHeight/2){const old=transform.zoom;const next=Math.min(8,Math.max(.08,old*factor));transform.panX=x-(x-transform.panX)*(next/old);transform.panY=y-(y-transform.panY)*(next/old);transform.zoom=next;renderGeometry();applyTransform();}
    function fit(){
        if(!state.planFileUri)return;
        const wrap=$('#proCanvasWrap');
        const width = wrap.clientWidth || window.innerWidth || 800;
        const height = wrap.clientHeight || window.innerHeight || 600;
        const zoom=Math.max(0.05, Math.min((width-24)/imageSize.width,(height-24)/imageSize.height));
        transform={zoom,panX:(width-imageSize.width*zoom)/2,panY:(height-imageSize.height*zoom)/2};
        applyTransform();
    }
    function applyTransform(){
        if(transformFrame)return;
        transformFrame=requestAnimationFrame(()=>{
            transformFrame=0;
            const s=$('#proStage').style;
            const rotation = state.planRotation || 0;
            const ox = state.centroid?.x || 0;
            const oy = state.centroid?.y || 0;
            s.transform=`translate3d(${transform.panX}px,${transform.panY}px,0) scale(${transform.zoom}) translate(${ox}px,${oy}px) rotate(${rotation}deg) translate(${-ox}px,${-oy}px)`;
            s.transformOrigin='0px 0px';
        });
    }

    async function syncWorkspace(){await drawPlan().catch(()=>{});const wrap=$('#proCanvasWrap');wrap.classList.toggle('has-plan',Boolean(state.planFileUri));wrap.classList.toggle('is-marking',state.currentWorkflowStep==='CALIBRATE_SCALE'||state.currentWorkflowStep==='MARK_BOUNDARY');if(state.currentWorkflowStep!=='MARK_BOUNDARY'&&state.currentWorkflowStep!=='CALIBRATE_SCALE')hideMagnifier();renderInstruction();renderSide();renderGeometry();renderBoundaryFab();renderCalibrationPopup();renderTiltPopup();applyTransform();syncDrawingTools();}
    function renderBoundaryFab() {
        const fab = $('#proCloseBoundaryFab');
        if (!fab) return;
        const isMarking = state.currentWorkflowStep === 'MARK_BOUNDARY';
        const points = state.outerBoundary.vertices.length;
        fab.hidden = !isMarking || points < 3 || state.outerBoundary.isClosed;
        if (!fab.hidden) {
            const t = copy();
            const label = fab.querySelector('span');
            if (label) label.textContent = t.closed;
        }
    }
    function renderCalibrationPopup() {
        const popup = $('#proCalibrationPopup');
        if (!popup) return;
        const isCalibrating = state.currentWorkflowStep === 'CALIBRATE_SCALE';
        const count = state.calibration?.draftPoints?.length || 0;
        const shouldShow = isCalibrating && count === 2;
        popup.hidden = !shouldShow;
        if (shouldShow) {
            const t = copy();
            const btn = popup.querySelector('.pro-primary');
            if (btn) btn.textContent = t.setPlanScale;
            const labels = popup.querySelectorAll('label');
            if (labels.length >= 2) {
                if (labels[0].firstChild) labels[0].firstChild.textContent = t.feet;
                if (labels[1].firstChild) labels[1].firstChild.textContent = t.inches;
            }
            const feetIn = $('#popupCalFeet');
            if (feetIn) feetIn.value = state.draftFeet;
            const inchesIn = $('#popupCalInches');
            if (inchesIn) inchesIn.value = state.draftInches;
        }
    }
    function renderTiltPopup() {
        const popup = $('#proTiltPopup');
        if (!popup) return;
        const isTilting = state.currentWorkflowStep === 'SET_TILT';
        popup.hidden = !isTilting;
        if (isTilting) {
            const t = copy();
            $('#proTiltTitle').textContent = t.tiltTitle;
            $('#proTiltIntro').textContent = t.tiltIntro;
            const input = $('#plotTiltInput');
            if (input) input.value = state.plotTilt;
            const okBtn = popup.querySelector('[data-action="apply-tilt"]');
            if (okBtn) okBtn.textContent = t.ok;
            const skipBtn = popup.querySelector('[data-action="skip-tilt"]');
            if (skipBtn) skipBtn.textContent = t.skip;
        }
    }
    function renderInstruction(){const instruction=$('#proInstruction');const touch=matchMedia('(pointer: coarse)').matches;const t=copy();const messages={IMPORT_PLAN:['Upload Floor Plan','Choose a JPG, PNG, or PDF to begin working immediately.'],CALIBRATE_SCALE:[`${t.step1} — ${t.setScale}`,t.markLine],MARK_BOUNDARY:[`${t.step2} — ${t.boundaryTitle}`,t.boundaryIntro],SET_TILT:[`${t.step3} — ${t.tiltTitle}`,t.tiltIntro]};const c=messages[state.currentWorkflowStep];instruction.hidden=!c;if(c)instruction.innerHTML=`<strong>${c[0]}</strong><span>${c[1]}</span>`;else instruction.replaceChildren();}
    function renderSide(){const side=$('#proSide');const cal=state.calibration;const m=state.measurements;const t=copy();
        if(state.currentWorkflowStep==='IMPORT_PLAN'){side.innerHTML=`<h3>Start Analysis</h3><p>Upload a floor plan and work on it directly. No project setup or saving is required.</p><button class="pro-primary" data-action="replace-plan">Choose Floor Plan</button><p class="pro-privacy"><i class="fas fa-shield-halved"></i> Your plan is processed on this device.</p>`;return;}
        if(state.currentWorkflowStep==='CALIBRATE_SCALE'){const count=cal?.draftPoints?.length||0;side.innerHTML=`<span class="pro-eyebrow">${t.step1}</span><h3>${t.setDrawingScale}</h3><p class="pro-tool-help"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px"><path d="m3 3 7.07 16.97 2.51-7.39 6.99-2.51L3 3z" /><path d="m13 13 6 6" /></svg> ${t.markLine}</p><strong>${count}/2 ${t.points}</strong>${count===2?`<form id="proDistanceForm" class="pro-inline-distance"><p>${t.distance}</p><div class="pro-distance-fields"><label>${t.feet}<input id="calFeet" type="number" min="0" step="1" value="${state.draftFeet}"></label><label>${t.inches}<input id="calInches" type="number" min="0" max="11.99" step="0.01" value="${state.draftInches}"></label></div><div class="pro-dialog-actions"><button type="button" data-action="cancel-calibration">${t.markAgain}</button><button type="submit" class="pro-primary">${t.setPlanScale}</button></div></form>`:''}<p class="pro-note">${t.autoBoundary}</p>`;renderCalibrationPopup();return;}
        renderCalibrationPopup();
        const summaryArea=m?`<section class="pro-summary"><h3>${t.floorMeasurement}</h3><strong>${G.formatArea(m.areaMm2,state.preferredArea)}</strong><span>${G.formatArea(m.areaMm2,'sqMeter')}</span><dl><dt>${t.perimeter}</dt><dd>${G.formatLength(m.perimeterMm,state.preferredLength)}</dd><dt>${t.vertices}</dt><dd>${state.outerBoundary.vertices.length}</dd><dt>${t.scale}</dt><dd>${t.calibrated}</dd><dt>${t.north}</dt><dd>${state.northAngle.toFixed(1)}°</dd></dl>${state.centroid&&!G.pointInPolygon(state.centroid,state.outerBoundary.vertices)?'<p class="pro-warning">The geometric centroid falls outside this concave boundary.</p>':''}</section>`:'';
        const tiltControl = `<section class="pro-summary pro-summary--tilt"><dl><dt>${t.propertyFacing}</dt><dd>${state.plotTilt.toFixed(1)}°</dd><dt>${t.baseAngle}</dt><dd>${state.baseFacingAngle}°</dd></dl><div class="pro-row"><button type="button" data-action="reset-tilt">${t.clearTilt}</button><button type="button" class="pro-primary" data-action="edit-tilt">Edit Tilt</button></div></section>`;
        const viewHelp=compassView==='marma' ? 'Marma Points uses a North-aligned 81-pada reference frame. Geometry outside an irregular plan is retained.' : compassView==='devatas' ? 'Devatas appears as a complete compass-style pattern over the plan and rotates with the selected North direction.' : compassView==='sixteen-zone' ? 'Hover a zone to preview its darker shade. Select a zone to keep it highlighted.' : t.boundaryHelp;
        const marmaControls=compassView==='marma'?`<fieldset class="pro-marma-controls"><legend>Marma layers</legend>${[['showBoundary','Show Vastu Boundary'],['showGrid','Show 9×9 Grid'],['showLines','Show Marma Lines'],['showPoints','Show Marma Points'],['showDevtaNames','Show Devta Names'],['showOutside','Show Outside Marma Points'],['showRadius','Show Marma Sensitive Radius'],['debug','Debug Coordinates']].map(([key,label])=>`<label><input type="checkbox" data-marma-option="${key}" ${state.marmaOptions[key]?'checked':''}> ${label}</label>`).join('')}</fieldset>${state.marmaOptions.debug?renderMarmaDetails():''}`:'';
        if(state.currentWorkflowStep==='MARK_BOUNDARY'){side.innerHTML=`<span class="pro-eyebrow">${t.step2}</span><h3>Boundary Marker</h3><p class="pro-tool-help"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px"><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3z" /><path d="M12 21v-9" /><path d="m12 12 8-4.5" /><path d="m12 12-8-4.5" /></svg> Click each outside corner in order. Double-click the final point to join it to the first.</p><strong>${state.outerBoundary.vertices.length} corners marked</strong><button class="pro-primary" data-action="close-boundary" ${state.outerBoundary.vertices.length<3?'disabled':''}>Close Boundary</button><button data-action="clear-boundary">Reset Boundary</button>${summaryArea}`;return;}
        if(state.currentWorkflowStep==='SET_TILT'){side.innerHTML=`<span class="pro-eyebrow">${t.step3}</span><h3>${t.tiltTitle}</h3><p>${t.tiltIntro}</p><form id="proTiltForm" class="pro-inline-distance"><label>${t.tiltLabel}<input id="plotTiltInput" type="number" step="0.1" value="${state.plotTilt}"></label><div class="pro-dialog-actions"><button type="submit" class="pro-primary">${t.ok}</button><button type="button" data-action="skip-tilt">${t.skip}</button></div></form>`;return;}
        side.innerHTML=`${summaryArea}${tiltControl}<section class="pro-compass-picker" aria-label="${t.patternOptions}"><strong>${t.patternOptions}</strong><div><button data-action="compass-view" data-view="marma" class="${compassView==='marma'?'active':''}">${t.marma}</button><button data-action="compass-view" data-view="image" class="${compassView==='image'?'active':''}">${t.image}</button><button data-action="compass-view" data-view="standard" class="${compassView==='standard'?'active':''}">${t.standard}</button><button data-action="compass-view" data-view="sixteen-zone" class="${compassView==='sixteen-zone'?'active':''}">${t.zone}</button><button data-action="compass-view" data-view="boundary" class="${compassView==='boundary'?'active':''}">${t.boundaryFill}</button><button data-action="compass-view" data-view="devatas" class="${compassView==='devatas'?'active':''}">${t.devatas}</button></div><label class="pro-pattern-opacity" for="proPatternOpacity"><span>${t.opacity}</span><output id="proPatternOpacityOutput" for="proPatternOpacity">${Math.round(state.patternOpacityPercent)}%</output></label><input class="pro-pattern-opacity-range" id="proPatternOpacity" type="range" min="0" max="100" step="1" value="${state.patternOpacityPercent}" aria-label="${t.opacity}"><p>${viewHelp}</p></section>${marmaControls}<button data-action="reopen">${t.editBoundary}</button><button data-action="recalibrate">${t.recalibrate}</button>`;
    }

    function updatePatternPicker(){
        const picker=$('#proSide .pro-compass-picker');if(!picker)return renderSide();
        picker.querySelectorAll('[data-action="compass-view"]').forEach(option=>option.classList.toggle('active',option.dataset.view===compassView));
        const help=picker.querySelector('p');if(!help)return;
        const t=copy();
        help.textContent=compassView==='marma' ? 'Marma Points uses a North-aligned 81-pada reference frame. Geometry outside an irregular plan is retained.' : compassView==='devatas' ? 'Devatas appears as a complete compass-style pattern over the plan and rotates with the selected North direction.' : compassView==='sixteen-zone' ? 'Hover a zone to preview its darker shade. Select a zone to keep it highlighted.' : t.boundaryHelp;
    }

    function renderMarmaDetails(){
        const analysis=state.marmaAnalysis;if(!analysis)return '';
        const labels=Marma.VANSHA_DEBUG_LABELS;const pretty=value=>value.split('_TO_').map(part=>part.charAt(0)+part.slice(1).toLowerCase()).join(' → ');
        const counts=analysis.marmaPoints.reduce((result,point)=>{result[point.buildingStatus]=(result[point.buildingStatus]||0)+1;return result;},{});
        const boundary=analysis.referenceBoundary;const width=Math.hypot(boundary[1].worldX-boundary[0].worldX,boundary[1].worldY-boundary[0].worldY),height=Math.hypot(boundary[3].worldX-boundary[0].worldX,boundary[3].worldY-boundary[0].worldY);
        const advanced=[['showNormalizedOnCanvas','Show normalized coordinates on canvas'],['showLineIds','Show line IDs'],['showWorldCoordinates','Show world coordinates'],['showClassification','Show polygon classification']].map(([key,label])=>`<label><input type="checkbox" data-marma-option="${key}" ${state.marmaOptions[key]?'checked':''}> ${label}</label>`).join('');
        let selected='<p class="pro-marma-empty">Select a Marma point or Vansha line on the plan to inspect it.</p>';
        const point=analysis.marmaPoints.find(item=>item.id===selectedMarmaPoint);
        if(point){const screenX=transform.panX+point.worldX*transform.zoom,screenY=transform.panY+point.worldY*transform.zoom;selected=`<div class="pro-debug-selected"><h4>${point.id}</h4><dl><dt>Normalized</dt><dd>X ${point.normalizedX.toFixed(6)}<br>Y ${point.normalizedY.toFixed(6)}</dd><dt>World</dt><dd>X ${point.worldX.toFixed(2)}<br>Y ${point.worldY.toFixed(2)}</dd><dt>Screen (debug only)</dt><dd>X ${screenX.toFixed(1)}<br>Y ${screenY.toFixed(1)}</dd><dt>Status</dt><dd>${point.buildingStatus}</dd><dt>Vansha A</dt><dd>${labels[point.sourceLineA]} ${pretty(point.sourceLineA)}</dd><dt>Vansha B</dt><dd>${labels[point.sourceLineB]} ${pretty(point.sourceLineB)}</dd><dt>Nearest wall</dt><dd>${G.formatLength(point.distanceToNearestWall,'mm')}</dd><dt>North</dt><dd>${analysis.northAngleDegrees.toFixed(1)}°</dd></dl>${point.buildingStatus==='OUTSIDE_BUILDING'?'<p class="pro-debug-note">Calculated position falls outside the actual floor polygon. Reference geometry: <strong>VALID</strong>. The point is not relocated.</p>':''}</div>`;}
        const line=analysis.vanshaLines.find(item=>item.id===selectedVanshaLine);
        if(line){const intersections=analysis.marmaPoints.filter(point=>point.sourceLineA===line.id||point.sourceLineB===line.id).map(point=>point.id).join(', ');selected=`<div class="pro-debug-selected"><h4>${line.debugId} · ${pretty(line.id)}</h4><dl><dt>Group</dt><dd>${line.group.replace('_',' ↔ ')}</dd><dt>Anchor 1</dt><dd>${pretty(line.from)}<br>${line.anchorFrom.normalizedX.toFixed(4)}, ${line.anchorFrom.normalizedY.toFixed(4)}</dd><dt>Anchor 2</dt><dd>${pretty(line.to)}<br>${line.anchorTo.normalizedX.toFixed(4)}, ${line.anchorTo.normalizedY.toFixed(4)}</dd><dt>Intersections</dt><dd>${intersections}</dd></dl></div>`;}
        return `<section class="pro-marma-details" aria-label="Marma Debug"><header><div><span>DEBUG DETAILS</span><h3>Marma Debug</h3></div><b>${selectedMarmaPoint||analysis.vanshaLines.find(line=>line.id===selectedVanshaLine)?.debugId||'Ready'}</b></header><dl class="pro-debug-summary"><dt>North</dt><dd>${analysis.northAngleDegrees.toFixed(1)}°</dd><dt>Reference boundary</dt><dd>${width.toFixed(2)} × ${height.toFixed(2)}</dd><dt>Reference center</dt><dd>X ${analysis.referenceCenter.worldX.toFixed(2)}, Y ${analysis.referenceCenter.worldY.toFixed(2)}</dd><dt>Scale</dt><dd>${analysis.scale?.toFixed(4)||'—'}</dd><dt>Grid / pada</dt><dd>9 × 9 / ${analysis.grid.padaWidth.toFixed(2)} × ${analysis.grid.padaHeight.toFixed(2)}</dd><dt>Marma points</dt><dd>${analysis.marmaPoints.length}</dd><dt>Inside / outside / boundary</dt><dd>${counts.INSIDE_BUILDING||0} / ${counts.OUTSIDE_BUILDING||0} / ${counts.ON_BOUNDARY||0}</dd></dl><details><summary>Advanced canvas labels</summary><div class="pro-debug-toggles">${advanced}</div></details><div class="pro-debug-selection"><span>SELECTED</span>${selected}</div></section>`;
    }

    function renderStandardCompass(c, compassSize) {
        const radius=compassSize/2, inner=radius*.72, labelRadius=radius*.83;
        const colors=['#d7f3ef','#e7f1dc','#fff0c2','#f9e5c7','#d6f0ff','#e4e8dc','#ffe0d0','#f2d9d3','#ffd6d6','#ead7e8','#e6d8ff','#dddff2','#dbe7ff','#d8e9e9','#d8f0e1','#d8ece7'];
        const sectors=colors.map((color,index)=>{const start=(index*22.5-11.25)*Math.PI/180,end=(index*22.5+11.25)*Math.PI/180;const x1=Math.sin(start)*radius,y1=Math.cos(start)*radius,x2=Math.sin(end)*radius,y2=Math.cos(end)*radius;return `<path class="pro-sector" d="M0 0 L${x1} ${y1} A${radius} ${radius} 0 0 1 ${x2} ${y2} Z" fill="${color}"/>`;}).join('');
        const spokes=Array.from({length:16},(_,index)=>{const angle=index*22.5*Math.PI/180;return `<line x1="0" y1="0" x2="${Math.sin(angle)*radius}" y2="${Math.sin(angle)*radius}" class="${index%4===0?'pro-cardinal-spoke':'pro-sector-spoke'}"/>`;}).join('');
        const labels=['N','NE','E','SE','S','SW','W','NW'].map((label,index)=>{const angle=index*45*Math.PI/180;return `<text x="${Math.cos(angle)*labelRadius}" y="${Math.sin(angle)*labelRadius}" class="${label==='N'?'north':''}">${label}</text>`;}).join('');
        return `<g class="pro-compass pro-compass--standard" transform="translate(${c.x} ${c.y}) rotate(${state.northAngle})">${sectors}<circle r="${radius}"/><circle r="${inner}"/>${spokes}${labels}<circle class="pro-compass-center" r="3"/></g>`;
    }

    function renderSixteenZoneCompass(c, compassSize) {
        const radius=compassSize/2,labelRadius=radius*.76;
        const colors=['#58b89f','#7acdb2','#fade5b','#f1d266','#71c4e5','#f4a965','#ee7c4d','#e36752','#dc5b66','#bf6384','#916ab8','#7570bb','#5989cf','#55a0be','#64ae89','#53a691'];
        const directions=['N','NNE','NE','ENE','E','ESE','SE','SSE','S','SSW','SW','WSW','W','WNW','NW','NNW'];
        const sectors=directions.map((direction,index)=>{const start=(index*22.5-11.25)*Math.PI/180,end=(index*22.5+11.25)*Math.PI/180;const x1=Math.cos(start)*radius,y1=Math.sin(start)*radius,x2=Math.cos(end)*radius,y2=Math.sin(end)*radius;const angle=index*22.5*Math.PI/180;const selected=selectedSixteenZone===direction;return `<g class="pro-sixteen-zone${selected?' is-selected':''}" data-action="select-16-zone" data-zone="${direction}" role="button" tabindex="0" aria-label="${direction} zone" aria-pressed="${selected}"><path d="M0 0 L${x1} ${y1} A${radius} ${radius} 0 0 1 ${x2} ${y2} Z" fill="${colors[index]}"/><text x="${Math.cos(angle)*labelRadius}" y="${Math.sin(angle)*labelRadius}">${direction}</text></g>`;}).join('');
        return `<g class="pro-compass pro-compass--sixteen-zone" aria-label="Interactive 16 Zone compass" transform="translate(${c.x} ${c.y}) rotate(${state.northAngle})">${sectors}<circle class="pro-sixteen-zone-frame" r="${radius}"/><circle class="pro-compass-center" r="3"/></g>`;
    }

    function renderBoundaryCompass(c, points) {
        const colors=['#67c6c2','#88d4c7','#aadba8','#d8df86','#f3db72','#f5bd72','#f29b79','#ed7f87','#df738d','#cb78a2','#b48bbc','#969ed0','#7faed8','#70bed5','#69c9ce','#64c9c6'];
        const directions=['N','NNE','NE','ENE','E','ESE','SE','SSE','S','SSW','SW','WSW','W','WNW','NW','NNW'];
        const radius=Math.max(...points.map(point=>G.distancePx(c,point)))+2;
        const polygon=points.map(point=>`${point.x},${point.y}`).join(' ');
        const sectors=colors.map((color,index)=>{const start=(state.northAngle+index*22.5-11.25)*Math.PI/180;const end=(state.northAngle+index*22.5+11.25)*Math.PI/180;const x1=c.x+Math.cos(start)*radius,y1=c.y+Math.sin(start)*radius;const x2=c.x+Math.cos(end)*radius,y2=c.y+Math.sin(end)*radius;return `<path class="pro-boundary-sector" d="M${c.x} ${c.y} L${x1} ${y1} A${radius} ${radius} 0 0 1 ${x2} ${y2} Z" fill="${color}"/>`;}).join('');
        const rays=Array.from({length:16},(_,index)=>{const angle=(state.northAngle+index*22.5-11.25)*Math.PI/180;return `<line x1="${c.x}" y1="${c.y}" x2="${c.x+Math.cos(angle)*radius}" y2="${c.y+Math.sin(angle)*radius}"/>`;}).join('');
        const cardinalRays=['north','east','south','west'].map((direction,index)=>{const angle=(state.northAngle+index*90)*Math.PI/180;return `<line class="pro-cardinal-ray pro-cardinal-ray--${direction}" x1="${c.x}" y1="${c.y}" x2="${c.x+Math.cos(angle)*radius}" y2="${c.y+Math.sin(angle)*radius}"/>`;}).join('');
        const labels=directions.map((direction,index)=>{
            const bearing=index*22.5; const angle=(state.northAngle+bearing)*Math.PI/180;
            const vector={x:Math.cos(angle),y:Math.sin(angle)};
            const distance=G.rayPolygonIntersectionDistance(c,vector,points);
            const edgeX=c.x+vector.x*distance,edgeY=c.y+vector.y*distance;const labelX=edgeX+vector.x*34,labelY=edgeY+vector.y*34;
            return `<g class="pro-boundary-bearing ${direction==='N'?'north':''}" transform="translate(${labelX} ${labelY})"><circle r="16"/><text y="-2">${direction}</text><text class="pro-bearing-degrees" y="9">${Number.isInteger(bearing)?bearing:bearing.toFixed(1)}°</text></g>`;
        }).join('');
        const zonePrefixes=['N','E','S','W'];
        const zoneLabels=Array.from({length:32},(_,index)=>{
            const bearing=-45+(index+.5)*11.25;
            const angle=(state.northAngle+bearing)*Math.PI/180;
            const vector={x:Math.cos(angle),y:Math.sin(angle)};
            const distance=G.rayPolygonIntersectionDistance(c,vector,points);
            const labelX=c.x+vector.x*(distance+10),labelY=c.y+vector.y*(distance+10);
            const label=`${zonePrefixes[Math.floor(index/8)]}${index%8+1}`;
            return `<g class="pro-boundary-zone ${label==='N1'?'north':''}" transform="translate(${labelX} ${labelY})"><rect x="-10" y="-7" width="20" height="14" rx="4"/><text>${label}</text></g>`;
        }).join('');
        const rotation = state.planRotation || 0;
        return `<defs><clipPath id="proBoundaryCompassClip" clipPathUnits="userSpaceOnUse" transform="rotate(${rotation} ${c.x} ${c.y})"><polygon points="${polygon}"/></clipPath></defs><g class="pro-compass pro-compass--boundary" clip-path="url(#proBoundaryCompassClip)">${sectors}${rays}${cardinalRays}</g><g class="pro-boundary-zones" aria-label="32 Vastu boundary zones">${zoneLabels}</g><g class="pro-boundary-bearings" aria-label="Compass directions and bearings">${labels}</g>`;
    }

    function renderDevatas(c, patternWidth, patternHeight) {
        const unitX=patternWidth/9,unitY=patternHeight/9;
        const colors={blue:'#2381c2',green:'#60c943',yellow:'#ffe70a',coral:'#f88473',aqua:'#a9ccd2',peach:'#ffc08d',cream:'#fff36c'};
        const cells=[
            ['Roga',0,0,1,1,'blue'],['Naga',1,0,1,1,'aqua'],['Mukhya',2,0,1,1,'aqua'],['Bhallat',3,0,1,1,'yellow'],['Soma',4,0,1,1,'coral'],['Bhujang',5,0,1,1,'yellow'],['Aditya',6,0,1,1,'green'],['Diti',7,0,1,1,'green'],['Shikhi',8,0,1,1,'blue'],
            ['Papashma',0,1,1,1,'green'],['Sosha',0,2,1,1,'yellow'],['Asur',0,3,1,1,'coral'],['Varun',0,4,1,1,'coral'],['Puspadan',0,5,1,1,'blue'],['Sugreev',0,6,1,1,'coral'],['Dauwarik',0,7,1,1,'blue'],['Pitra',0,8,1,1,'blue'],
            ['Parjanya',8,1,1,1,'green'],['Jayanta',8,2,1,1,'green'],['Mahendra',8,3,1,1,'green'],['Surya',8,4,1,1,'aqua'],['Satya',8,5,1,1,'coral'],['Bhrisha',8,6,1,1,'green'],['Akash',8,7,1,1,'yellow'],['Anil',8,8,1,1,'yellow'],
            ['Rudra',1,1,1,2,'aqua'],['Rudra-Jaya',2,1,1,2,'aqua'],['Bhudhar',3,1,3,2,'aqua'],['Aapha',6,1,1,2,'peach'],['Aapha Vastha',7,1,1,2,'peach'],
            ['Mitra',1,3,2,3,'coral'],['Bhramha',3,3,3,3,'cream'],['Aryama',6,3,2,3,'cream'],
            ['Indra Jaya',1,6,1,2,'coral'],['Indra',2,6,1,2,'aqua'],['Vivaswan',3,6,3,2,'coral'],['Savitra',6,6,1,2,'coral'],['Savitha',7,6,1,2,'aqua'],
            ['Mrigha',1,8,1,1,'green'],['Bhringraj',2,8,1,1,'yellow'],['Gandharva',3,8,1,1,'blue'],['Yama',4,8,1,1,'yellow'],['Grhaskhata',5,8,1,1,'green'],['Vithatha',6,8,1,1,'coral'],['Pusha',7,8,1,1,'blue']
        ];
        const artwork=cells.map(([name,x,y,width,height,color])=>{
            const left=(x-4.5)*unitX,top=(y-4.5)*unitY;
            const centerX=left+width*unitX/2,centerY=top+height*unitY/2;
            const label=name.includes(' ')||name.includes('-') ? name.replace(/[- ]/,'\n') : name;
            const lines=label.split('\n');
            const text=lines.map((line,index)=>`<tspan x="${centerX}" dy="${index ? '1.05em' : lines.length>1 ? '-.3em' : '0'}">${line}</tspan>`).join('');
            return `<g class="pro-devata-cell"><rect x="${left}" y="${top}" width="${width*unitX}" height="${height*unitY}" fill="${colors[color]}"/><text x="${centerX}" y="${centerY}">${text}</text></g>`;
        }).join('');
        const halfX=patternWidth/2,halfY=patternHeight/2;
        const handles=[[0,-halfY,'y'],[halfX,0,'x'],[0,halfY,'y'],[-halfX,0,'x'],[-halfX,-halfY,'xy'],[halfX,-halfY,'xy'],[halfX,halfY,'xy'],[-halfX,halfY,'xy']]
            .map(([x,y,axis])=>`<g><circle class="pro-devatas-handle-hit pro-devatas-handle--${axis}" data-axis="${axis}" cx="${x}" cy="${y}" r="10"/><circle class="pro-devatas-handle pro-devatas-handle--${axis}" data-axis="${axis}" cx="${x}" cy="${y}" r="10"/></g>`).join('');
        return `<g class="pro-devatas" data-width="${patternWidth}" data-height="${patternHeight}" data-base-width="${patternWidth}" data-base-height="${patternHeight}" transform="translate(${c.x} ${c.y}) rotate(${state.northAngle + 90})"><g class="pro-devatas-resize-layer"><g class="pro-devatas-pattern">${artwork}</g><rect class="pro-devatas-frame" x="-${halfX}" y="-${halfY}" width="${patternWidth}" height="${patternHeight}"/>${handles}<circle class="pro-devatas-center" r="7"/></g></g>`;
    }

    function updateDevatasResizePreview() {
        const devatas=$('#proGeometry .pro-devatas');if(!devatas||!devatasResize)return;
        const width=devatasResize.startPatternWidth*state.devatasWidthPercent/devatasResize.startWidth;
        const height=devatasResize.startPatternHeight*state.devatasHeightPercent/devatasResize.startHeight;
        const baseWidth=Number(devatas.dataset.baseWidth)||devatasResize.startPatternWidth,baseHeight=Number(devatas.dataset.baseHeight)||devatasResize.startPatternHeight;
        const layer=devatas.querySelector('.pro-devatas-resize-layer');if(layer)layer.style.transform=`scale(${width/baseWidth},${height/baseHeight})`;
        devatas.dataset.width=width;devatas.dataset.height=height;
    }

    function renderMarmaOverlay(){
        const analysis=state.marmaAnalysis,options=state.marmaOptions;if(!analysis)return '';
        const corners=analysis.referenceBoundary;const at=(u,v)=>({x:corners[0].worldX+(corners[1].worldX-corners[0].worldX)*u+(corners[3].worldX-corners[0].worldX)*v,y:corners[0].worldY+(corners[1].worldY-corners[0].worldY)*u+(corners[3].worldY-corners[0].worldY)*v});
        const polygon=points=>points.map(p=>`${p.worldX},${p.worldY}`).join(' ');
        const rotation = state.planRotation || 0;
        let out=`<g class="pro-marma-overlay${options.debug?' is-debug':''}" transform="rotate(${-rotation} ${analysis.referenceCenter.worldX} ${analysis.referenceCenter.worldY})">`;
        const zoom=transform.zoom||1,overlaps=(a,b)=>a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;
        const occupied=[];
        if(options.showDevtaNames)analysis.vanshaLines.forEach(line=>[line.anchorFrom,line.anchorTo].forEach(anchor=>occupied.push({x:anchor.worldX-22/zoom,y:anchor.worldY-7/zoom,w:44/zoom,h:14/zoom})));
        state.outerBoundary.vertices.forEach((point,index)=>{const next=state.outerBoundary.vertices[(index+1)%state.outerBoundary.vertices.length];if(next)occupied.push({x:(point.x+next.x)/2-35/zoom,y:(point.y+next.y)/2-15/zoom,w:70/zoom,h:16/zoom});});
        const placeLabel=point=>{const w=(options.showNormalizedOnCanvas?72:25)/zoom,h=(options.showNormalizedOnCanvas?25:15)/zoom,gap=9/zoom,candidates=[[gap,-gap-h],[-gap-w,-gap-h],[gap,gap],[-gap-w,gap]];for(const [dx,dy] of candidates){const box={x:point.worldX+dx,y:point.worldY+dy,w,h};if(box.x>=0&&box.y>=0&&box.x+w<=imageSize.width&&box.y+h<=imageSize.height&&!occupied.some(item=>overlaps(box,item))){occupied.push(box);return box;}}const box={x:point.worldX+gap,y:point.worldY-gap-h,w,h};occupied.push(box);return box;};
        if(options.showBoundary)out+=`<polygon class="pro-marma-reference" points="${polygon(corners)}"/>`;
        if(options.showGrid){for(let i=0;i<=9;i+=1){const u=i/9,a=at(u,0),b=at(u,1),c=at(0,u),d=at(1,u);out+=`<line class="pro-marma-grid" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"/><line class="pro-marma-grid" x1="${c.x}" y1="${c.y}" x2="${d.x}" y2="${d.y}"/>`;}}
        out+=`<polygon class="pro-marma-brahmasthan" points="${polygon(analysis.brahmasthan)}"/>`;
        if(options.showLines)analysis.vanshaLines.forEach(line=>{const selected=selectedVanshaLine===line.id;out+=`<g class="pro-vansha-line${selected?' is-selected':''}" data-action="select-vansha" data-vansha-id="${line.id}" role="button" tabindex="${options.debug?'0':'-1'}" aria-label="Vansha ${line.debugId}, ${line.from} to ${line.to}">`;line.segments.forEach(segment=>{if(segment.status==='OUTSIDE'&&!options.showOutside)return;out+=`<line class="pro-vansha-segment pro-vansha-segment--${segment.status.toLowerCase()}" x1="${segment.start.worldX}" y1="${segment.start.worldY}" x2="${segment.end.worldX}" y2="${segment.end.worldY}"/><line class="pro-vansha-hit" x1="${segment.start.worldX}" y1="${segment.start.worldY}" x2="${segment.end.worldX}" y2="${segment.end.worldY}"/>`;});out+='</g>';if(options.debug&&options.showLineIds)out+=`<text class="pro-vansha-debug-id" x="${line.start.worldX+6/zoom}" y="${line.start.worldY-6/zoom}" style="font-size:${10/zoom}px" transform="rotate(${rotation} ${line.start.worldX} ${line.start.worldY})">${line.debugId}</text>`;if(options.showDevtaNames)out+=`<text class="pro-marma-devta" x="${line.anchorFrom.worldX}" y="${line.anchorFrom.worldY}" transform="rotate(${rotation} ${line.anchorFrom.worldX} ${line.anchorFrom.worldY})">${line.from}</text><text class="pro-marma-devta" x="${line.anchorTo.worldX}" y="${line.anchorTo.worldY}" transform="rotate(${rotation} ${line.anchorTo.worldX} ${line.anchorTo.worldY})">${line.to}</text>`;});
        if(options.showPoints)analysis.marmaPoints.forEach(point=>{const outside=point.buildingStatus==='OUTSIDE_BUILDING';if(outside&&!options.showOutside)return;const radius=options.showRadius?analysis.marmaRadius:8,selected=selectedMarmaPoint===point.id,label=options.debug?placeLabel(point):null;out+=`<g data-action="select-marma" data-marma-id="${point.id}" class="pro-marma-point ${outside?'is-outside':''} ${selected?'is-selected':''}" role="button" tabindex="${options.debug?'0':'-1'}" aria-label="Marma point ${point.id}, ${point.buildingStatus.toLowerCase().replaceAll('_',' ')}">${selected?`<circle class="pro-marma-selection-ring" cx="${point.worldX}" cy="${point.worldY}" r="${radius+5/zoom}"/>`:''}<circle cx="${point.worldX}" cy="${point.worldY}" r="${radius}"/>${options.showRadius?`<circle class="pro-marma-core" cx="${point.worldX}" cy="${point.worldY}" r="4"/>`:''}${options.debug?`<text class="pro-marma-debug${selected?' is-selected':''}" x="${label.x}" y="${label.y+11/zoom}" style="font-size:${11/zoom}px" transform="rotate(${rotation} ${label.x} ${label.y+11/zoom})">${point.id}${options.showNormalizedOnCanvas?`<tspan x="${label.x}" dy="${11/zoom}">${point.normalizedX.toFixed(3)}, ${point.normalizedY.toFixed(3)}</tspan>`:''}${options.showWorldCoordinates?`<tspan x="${label.x}" dy="${11/zoom}">W ${point.worldX.toFixed(1)}, ${point.worldY.toFixed(1)}</tspan>`:''}${options.showClassification?`<tspan x="${label.x}" dy="${11/zoom}">${point.buildingStatus}</tspan>`:''}</text>`:''}<title>${point.id} · ${point.buildingStatus}</title></g>`;});
        if(options.debug){const c=analysis.referenceCenter,s=7/zoom;out+=`<g class="pro-reference-center" aria-label="Reference center" transform="rotate(${rotation} ${c.worldX} ${c.worldY})"><path d="M${c.worldX-s} ${c.worldY}h${2*s}M${c.worldX} ${c.worldY-s}v${2*s}"/><text x="${c.worldX+8/zoom}" y="${c.worldY-8/zoom}" style="font-size:${10/zoom}px">C</text></g>`;}
        return `${out}</g>`;
    }

    function annotationMarkup(){
        return currentAnnotations().map(stroke=>{
            if (!stroke.points || stroke.points.length === 0) return '';
            const pts = stroke.points;
            let d;
            if (pts.length === 1) {
                d = `M ${pts[0].x} ${pts[0].y} L ${pts[0].x + 0.1} ${pts[0].y}`;
            } else {
                d = pts.map((p, i) => `${i ? 'L' : 'M'}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
            }
            const color = stroke.color || '#e11d48';
            const size = Math.max(1, Number(stroke.size) || 5);
            return `<path class="pro-annotation-stroke" d="${d}" fill="none" stroke="${color}" stroke-width="${size}" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>`;
        }).join('');
    }
    function renderAnnotations(){
        const markup = annotationMarkup();
        const topLayer = $('#proDrawingLayer');
        if (topLayer) {
            topLayer.innerHTML = markup;
        }
        const layer = $('#proGeometry .pro-annotations');
        if (layer) {
            layer.dataset.pattern = compassView;
            layer.innerHTML = markup;
        }
    }
    function renderGeometry(){const svg=$('#proGeometry');const points=state.outerBoundary.vertices;const calibration=state.calibration;const calPoints=calibration?.draftPoints || (calibration?.pointA ? [calibration.pointA,calibration.pointB] : []);let out='';
        if(calPoints.length){out+=calPoints.map((p,i)=>`<circle class="pro-cal-point" data-cal-point="${i}" cx="${p.x}" cy="${p.y}" r="7"/><text class="pro-point-label" data-cal-label="${i}" x="${p.x+10}" y="${p.y-10}">${i?'B':'A'}</text>`).join('');if(calPoints.length===2)out+=`<line class="pro-cal-line" x1="${calPoints[0].x}" y1="${calPoints[0].y}" x2="${calPoints[1].x}" y2="${calPoints[1].y}"/>`;}
        if(points.length){const path=points.map(p=>`${p.x},${p.y}`).join(' ');out+=`<polygon class="pro-boundary-fill" points="${path}" ${state.outerBoundary.isClosed?'':'fill="none"'}/><polyline class="pro-boundary-line" points="${path}${state.outerBoundary.isClosed?' '+points[0].x+','+points[0].y:''}"/>`;
            const edges=state.calibration?G.boundaryEdges(points,state.calibration.scaleMmPerPixel,state.outerBoundary.isClosed):[];edges.forEach((e,i)=>{const a=points[i],b=points[(i+1)%points.length];out+=`<text class="pro-measure" data-boundary-edge="${i}" x="${(a.x+b.x)/2}" y="${(a.y+b.y)/2-8}">${G.formatLength(e.realLengthMm,state.preferredLength)}</text>`;});
            out+=points.map((p,i)=>`<g data-boundary-vertex="${i}" transform="translate(${p.x} ${p.y})"><circle class="pro-touch-target" r="18"/><circle class="pro-vertex ${selectedVertex===p.id?'selected':''}" r="4"/><text class="pro-point-label" x="9" y="-9">P${i+1}</text></g>`).join('');}
        if(state.centroid){const c=state.centroid;const baseCompassSize=G.centeredBoundaryDiameter(c,points);const compassSize=baseCompassSize*(state.compassSizePercent/100);const half=compassSize/2;const bounds=points.reduce((box,p)=>({minX:Math.min(box.minX,p.x),maxX:Math.max(box.maxX,p.x),minY:Math.min(box.minY,p.y),maxY:Math.max(box.maxY,p.y)}),{minX:Infinity,maxX:-Infinity,minY:Infinity,maxY:-Infinity});const devatasWidth=(bounds.maxX-bounds.minX)*(state.devatasWidthPercent||100)/100,devatasHeight=(bounds.maxY-bounds.minY)*(state.devatasHeightPercent||100)/100;let compass;if(compassView==='marma')compass=renderMarmaOverlay();else if(compassView==='boundary')compass=renderBoundaryCompass(c,points);else if(compassView==='devatas')compass=renderDevatas(c,devatasWidth,devatasHeight);else if(compassView==='sixteen-zone')compass=renderSixteenZoneCompass(c,compassSize);else if(compassView==='image')compass=`<g class="pro-compass pro-compass--image" transform="translate(${c.x} ${c.y}) rotate(${state.northAngle - 180})"><image href="Compas.png" x="-${half}" y="-${half}" width="${compassSize}" height="${compassSize}" preserveAspectRatio="xMidYMid meet"/><circle class="pro-compass-center" r="3"/></g>`;else compass=renderStandardCompass(c,compassSize);
            const rotation = state.planRotation || 0;
            const showPatterns = state.currentWorkflowStep === 'READY_FOR_ANALYSIS';
            if (showPatterns) {
                out+=`<g class="pro-pattern-overlay" style="overflow:visible" opacity="${state.patternOpacityPercent/100}" transform="rotate(${-rotation} ${c.x} ${c.y})">${compass}</g>`;
                if(compassView!=='marma')out+=`<g class="pro-center" transform="rotate(${-rotation} ${c.x} ${c.y})"><circle cx="${c.x}" cy="${c.y}" r="6"/><path d="M${c.x-17} ${c.y}h34M${c.x} ${c.y-17}v34"/><text x="${c.x+12}" y="${c.y+24}">Center / Brahmasthan</text></g>`;
            }
        }
        svg.innerHTML=out+`<g class="pro-annotations" data-pattern="${compassView}">${annotationMarkup()}</g>`;
    }
    function showStatus(message,type='info'){const status=$('#proStatus');status.textContent=message;status.className=`pro-status show ${type}`;clearTimeout(status._timer);status._timer=setTimeout(()=>status.classList.remove('show'),4500);}

    // A read-only bridge lets the report use the exact editor state and renderers.
    // It deliberately exposes no geometry mutation methods.
    window.VastuPlanAnalysis = {
        zoomIn() { transform.zoom *= 1.2; applyTransform(); },
        zoomOut() { transform.zoom *= 0.8; applyTransform(); },
        resetZoom() { transform.zoom = 1; transform.panX = 0; transform.panY = 0; applyTransform(); },
        getCurrentProject() {
            return clone({ ...state, imageSize, compassView, transform, projectId: 'current-plan' });
        },
        async restoreProject(project) {
            if (!project || typeof project !== 'object') throw new Error('The saved plan data is invalid.');
            const clean=clone(project);delete clean.imageSize;delete clean.compassView;delete clean.transform;delete clean.projectId;
            state={...defaultState(),...clean,outerBoundary:{...defaultState().outerBoundary,...clean.outerBoundary},marmaOptions:{...defaultState().marmaOptions,...clean.marmaOptions},annotations:clean.annotations||{}};
            if(state.calibration?.scaleMmPerPixel&&state.outerBoundary.vertices.length>=3&&state.outerBoundary.isClosed){state.currentWorkflowStep='READY_FOR_ANALYSIS';state.boundaryState='CLOSED';}
            compassView=project.compassView||'image';transform=project.transform&&Number.isFinite(project.transform.zoom)?clone(project.transform):{zoom:1,panX:0,panY:0};
            history=[];future=[];lastDrawnUri='';cachedImage=null;cachedImageUri='';selectedVertex=null;drawingTool=null;recalculate();
            await syncWorkspace();applyTransform();
            if(state.planFileUri)open();
        },
        renderPatternForReport(patternType, options = {}) {
            const views={IMAGE:'image',STANDARD:'standard',ZONE_16:'sixteen-zone',BOUNDARY_FILL:'boundary',DEVATAS:'devatas',MARMA_POINTS:'marma'};
            const previousView=compassView,previousOptions=clone(state.marmaOptions),previousOpacity=state.patternOpacityPercent;
            compassView=views[patternType]||'image';
            state.patternOpacityPercent=100;
            state.marmaOptions={...state.marmaOptions,showBoundary:options.showBoundary!==false,showGrid:true,showLines:true,showPoints:true,showDevtaNames:true,showRadius:false,debug:false,showNormalizedOnCanvas:false,showLineIds:false,showWorldCoordinates:false,showClassification:false};
            renderGeometry();
            const svg=$('#proGeometry');
            const clean=svg.cloneNode(true);
            clean.querySelectorAll('.pro-touch-target,.pro-vertex,.pro-cal-point,.pro-cal-line,.pro-point-label,.pro-marma-debug,.pro-devatas-handle,.pro-marma-selection-ring').forEach(node=>node.remove());
            clean.querySelectorAll('.pro-boundary-line').forEach(node=>{
                node.style.setProperty('stroke-width', '1.2px', 'important');
                node.style.setProperty('stroke', '#c48b22', 'important');
                node.style.setProperty('filter', 'none', 'important');
                node.setAttribute('stroke-width', '1.2');
            });
            clean.querySelectorAll('.pro-boundary-fill').forEach(node=>{
                node.style.setProperty('fill', 'rgba(216,164,51,0.12)', 'important');
                node.style.setProperty('stroke', 'none', 'important');
            });
            // Refine Marma points to delicate, crisp, small dots matching live edit preview
            clean.querySelectorAll('.pro-marma-point').forEach(pointGroup=>{
                const isOutside = pointGroup.classList.contains('is-outside');
                pointGroup.querySelectorAll('circle:not(.pro-marma-core):not(.pro-marma-selection-ring)').forEach(circle=>{
                    circle.setAttribute('r', '3.5');
                    circle.style.setProperty('stroke-width', '0.75px', 'important');
                    circle.style.setProperty('stroke', isOutside ? '#c92d35' : '#ffffff', 'important');
                    circle.style.setProperty('fill', isOutside ? 'rgba(255,255,255,0.85)' : '#c92d35', 'important');
                    circle.style.setProperty('fill-opacity', isOutside ? '0.85' : '0.92', 'important');
                });
                const core = pointGroup.querySelector('.pro-marma-core');
                if (core) {
                    core.setAttribute('r', '1.2');
                    core.style.setProperty('fill', '#c92d35', 'important');
                    core.style.setProperty('stroke', '#ffffff', 'important');
                    core.style.setProperty('stroke-width', '0.5px', 'important');
                }
            });
            clean.querySelectorAll('.pro-vansha-segment').forEach(node=>{
                node.style.setProperty('stroke-width', '0.9px', 'important');
                node.setAttribute('stroke-width', '0.9');
            });
            clean.querySelectorAll('.pro-vansha-segment--on_wall').forEach(node=>{
                node.style.setProperty('stroke-width', '1.2px', 'important');
                node.setAttribute('stroke-width', '1.2');
            });
            clean.querySelectorAll('.pro-marma-grid').forEach(node=>{
                node.style.setProperty('stroke-width', '0.5px', 'important');
                node.setAttribute('stroke-width', '0.5');
            });
            clean.querySelectorAll('.pro-marma-reference').forEach(node=>{
                node.style.setProperty('stroke-width', '0.8px', 'important');
                node.setAttribute('stroke-width', '0.8');
                node.style.setProperty('stroke-dasharray', '5 3', 'important');
            });
            clean.querySelectorAll('.pro-marma-brahmasthan').forEach(node=>{
                node.style.setProperty('stroke-width', '0.8px', 'important');
                node.setAttribute('stroke-width', '0.8');
                node.style.setProperty('fill', 'rgba(246,190,55,0.14)', 'important');
            });
            clean.querySelectorAll('.pro-marma-devta').forEach(node=>{
                node.style.setProperty('font-size', '5.5px', 'important');
                node.style.setProperty('stroke-width', '0.8px', 'important');
                node.style.setProperty('paint-order', 'stroke', 'important');
            });
            // Decrease drawn pen strokes so they appear fine and crisp instead of thick bars
            clean.querySelectorAll('.pro-annotation-stroke, .pro-annotations path').forEach(node=>{
                const orig = Number(node.getAttribute('stroke-width')) || 5;
                const neat = Math.max(1, Math.min(2.5, orig * 0.35));
                node.style.setProperty('stroke-width', `${neat}px`, 'important');
                node.setAttribute('stroke-width', String(neat));
                node.style.setProperty('stroke-linecap', 'round', 'important');
                node.style.setProperty('stroke-linejoin', 'round', 'important');
            });
            // Decrease measurement labels
            clean.querySelectorAll('.pro-measure').forEach(node=>{
                node.style.setProperty('font-size', '7px', 'important');
                node.style.setProperty('font-weight', '600', 'important');
                node.style.setProperty('stroke-width', '1.2px', 'important');
                node.style.setProperty('paint-order', 'stroke', 'important');
            });
            // Decrease Devatas overlay
            clean.querySelectorAll('.pro-devata-cell rect').forEach(node=>{
                node.style.setProperty('stroke-width', '0.6px', 'important');
                node.setAttribute('stroke-width', '0.6');
            });
            clean.querySelectorAll('.pro-devata-cell text').forEach(node=>{
                node.style.setProperty('font-size', '5.5px', 'important');
                node.style.setProperty('font-weight', '700', 'important');
                node.style.setProperty('stroke-width', '0.7px', 'important');
                node.style.setProperty('paint-order', 'stroke', 'important');
            });
            clean.querySelectorAll('.pro-devatas-frame').forEach(node=>{
                node.style.setProperty('stroke-width', '1px', 'important');
                node.setAttribute('stroke-width', '1');
            });
            // Decrease 16 zones and boundary bearings
            clean.querySelectorAll('.pro-boundary-bearing circle').forEach(node=>{
                node.setAttribute('r', '4');
                node.style.setProperty('stroke-width', '0.8px', 'important');
            });
            clean.querySelectorAll('.pro-boundary-bearing text').forEach(node=>{
                node.style.setProperty('font-size', '5px', 'important');
            });
            clean.querySelectorAll('.pro-bearing-degrees').forEach(node=>{
                node.style.setProperty('font-size', '4px', 'important');
            });
            clean.querySelectorAll('.pro-boundary-zone rect').forEach(node=>{
                node.style.setProperty('stroke-width', '0.7px', 'important');
            });
            clean.querySelectorAll('.pro-boundary-zone text').forEach(node=>{
                node.style.setProperty('font-size', '5px', 'important');
            });
            clean.querySelectorAll('.pro-compass text').forEach(node=>{
                node.style.setProperty('font-size', '6px', 'important');
                node.style.setProperty('stroke-width', '0.8px', 'important');
                node.style.setProperty('paint-order', 'stroke', 'important');
            });
            clean.querySelectorAll('.pro-compass path, .pro-compass line, .pro-compass circle').forEach(node=>{
                node.style.setProperty('stroke-width', '0.8px', 'important');
                node.setAttribute('stroke-width', '0.8');
            });

            if(options.showDimensions===false)clean.querySelectorAll('.pro-measure').forEach(node=>node.remove());
            if(options.showCenter===false)clean.querySelectorAll('.pro-center').forEach(node=>node.remove());
            if(options.showBoundary===false)clean.querySelectorAll('.pro-boundary-line,.pro-boundary-fill').forEach(node=>node.remove());
            clean.setAttribute('viewBox',`0 0 ${imageSize.width} ${imageSize.height}`);
            clean.setAttribute('preserveAspectRatio','xMidYMid meet');
            const planCanvas=$('#proPlanCanvas');
            let planImage=state.planFileUri;
            if (planCanvas && planCanvas.width > 1) {
                try {
                    planImage = planCanvas.toDataURL('image/png');
                } catch (e) {
                    console.warn("Canvas toDataURL failed (possibly tainted), using state.planFileUri directly:", e);
                    planImage = state.planFileUri;
                }
            }

            const rotation = state.planRotation || 0;
            const c = state.centroid || { x: imageSize.width / 2, y: imageSize.height / 2 };
            // Decrease center marker
            clean.querySelectorAll('.pro-center').forEach(node=>{
                const circle = node.querySelector('circle');
                if (circle) circle.setAttribute('r', '3');
                const path = node.querySelector('path');
                if (path) {
                    path.setAttribute('d', `M${c.x - 7} ${c.y}h14M${c.x} ${c.y - 7}v14`);
                    path.style.setProperty('stroke-width', '1px', 'important');
                }
                const text = node.querySelector('text');
                if (text) {
                    text.setAttribute('x', String(c.x + 6));
                    text.setAttribute('y', String(c.y + 10));
                    text.style.setProperty('font-size', '6.5px', 'important');
                    text.style.setProperty('stroke-width', '1px', 'important');
                    text.style.setProperty('paint-order', 'stroke', 'important');
                }
            });
            const innerMarkup = `<image href="${planImage}" x="0" y="0" width="${imageSize.width}" height="${imageSize.height}" preserveAspectRatio="none"/>${clean.innerHTML}`;
            clean.innerHTML = `<g transform="rotate(${rotation} ${c.x} ${c.y})">${innerMarkup}</g>`;

            compassView=previousView;state.marmaOptions=previousOptions;state.patternOpacityPercent=previousOpacity;renderGeometry();
            return { markup:clean.outerHTML, width:imageSize.width, height:imageSize.height };
        }
    };

    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',injectUi);else injectUi();
}());