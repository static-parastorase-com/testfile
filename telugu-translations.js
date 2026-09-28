(function() {
    const directionLabels = {
        north: 'ఉత్తరం',
        east: 'తూర్పు',
        west: 'పడమర',
        south: 'దక్షిణం',
        northeast: 'ఈశాన్యం',
        northwest: 'వాయువ్యం',
        southeast: 'ఆగ్నేయం',
        southwest: 'నైఋత్యం',
        center: 'కేంద్రం',
        varies: 'మారుతుంది',
        'as needed': 'అవసరానికి అనుగుణంగా',
        'keep empty': 'ఖాళీగా ఉంచండి',
        'east should be lower': 'తూర్పు భాగం తగ్గించి ఉంచండి'
    };

    const languageStrings = {
        speechLang: 'te-IN',
        labels: {
            uploadButton: 'అప్‌లోడ్',
            addName: 'పేరు జోడించండి',
            addNameShort: 'T',
            scan: 'టెక్స్ట్ స్కాన్',
            scanShort: 'స్కాన్',
            advancedScan: 'అధునాతన స్కాన్',
            advancedAnalysis: 'అధునాతన విశ్లేషణ',
            validate: 'వాస్తు తనిఖీ',
            validateShort: 'తనిఖీ',
            uploadPopupTitle: 'ఇల్లు ప్లాన్ అప్‌లోడ్ చేయండి',
            selectImageLabel: 'చిత్రాన్ని ఎంపిక చేయండి:',
            northDirectionLabel: 'ఉత్తర దిశ:',
            floorFeatureLabel: 'ఈ అంతస్తులో వంటగది మరియు ప్రధాన ద్వారం ఉన్నాయి',
            floorFeatureDropdownLabel: 'అవును లేదా కాదు ఎంచుకోండి:',
            cancel: 'రద్దు',
            uploadConfirm: 'ప్రారంభించండి',
            zoomIn: 'పెద్దదిగా చూడండి',
            zoomOut: 'చిన్నదిగా చూడండి',
            resetZoom: 'జూమ్ రీసెట్',
            fullscreen: 'పూర్తి తెర',
            guideToggle: 'మాట్లాడే మార్గదర్శనాన్ని ఆన్ లేదా ఆఫ్ చేయండి',
            addRoomTitle: 'గది పేరును జోడించండి',
            addRoomPlaceholder: 'గది పేరు ఇవ్వండి (ఉదా: Kitchen, Bedroom)',
            add: 'జోడించండి',
            editRoomTitle: 'గది పేరు సవరించండి',
            editRoomPlaceholder: 'గది పేరు సవరించండి',
            save: 'సేవ్',
            manualAnnotationTitle: 'గది పేర్లను చేతితో జోడించండి',
            manualAnnotationBody: 'అన్ని గది పేర్లను విశ్వసనీయంగా గుర్తించలేకపోయాము. వాటిని చేతితో జోడించాలని అనుకుంటున్నారా? ఇప్పటికే గుర్తించిన లేబుళ్లు అలాగే ఉంటాయి.',
            manualAnnotationConfirm: 'గది పేర్లను జోడించండి',
            manualAnnotationCancel: 'తర్వాత',
            validationTitle: 'వాస్తు ధృవీకరణ ఫలితాలు',
            close: 'మూసివేయి',
            downloadPdf: 'PDF డౌన్‌లోడ్',
            scanningTitle: 'టెక్స్ట్ స్కాన్ అవుతోంది...',
            ocrStatus: 'OCR ఇంజిన్ ప్రారంభమవుతోంది...',
            ocrAlertTitle: '2D ప్లాన్ స్కాన్ సిద్ధత',
            ocrAlertBody: 'స్కాన్ ప్రారంభించే ముందు దయచేసి నిర్ధారించండి:<br><br>1. ప్లాన్ చిత్రం పూర్తి పరిమాణంలో ఉంది<br>2. చిత్రం పెంచి కంటైనర్‌లో సరిపోతుంది<br>3. మొత్తం టెక్స్ట్ స్పష్టంగా కనిపిస్తుంది<br><br>ఇది ఉత్తమమైన వాస్తు ఫలితాలను ఇస్తుంది.',
            ocrAlertCancel: 'రద్దు',
            ocrAlertScan: 'ఇప్పుడే స్కాన్',
            messageTitle: 'నోటీసు',
            messageDismiss: 'సరే',
            generalVastuTips: 'సాధారణ వాస్తు సూచనలు',
            disclaimerTitle: 'వ్యాఖ్య:'
        },
        options: {
            north: 'ఉత్తరం',
            east: 'తూర్పు',
            west: 'పడమర',
            south: 'దక్షిణం',
            yes: 'అవును',
            no: 'కాదు'
        },
        messages: {
            uploadInstruction: [
                'మీ ఇల్లు ప్లాన్‌ను అప్‌లోడ్ చేయండి. ఒక్క అంతస్తు చిత్రాన్ని మాత్రమే అప్‌లోడ్ చేయండి; బహుళ అంతస్తు చిత్రాలను అప్‌లోడ్ చేయవద్దు.',
                'తరువాత, మీ ప్లాన్ ఏ దిశనుంచి ఉందో ఎంచుకోండి: ఉత్తరం, తూర్పు, పడమర లేదా దక్షిణం.',
                'అంతస్తులో వంటగది మరియు ప్రధాన ద్వారం ఉంటే అవును, లేకపోతే కాదు ఎంచుకోండి.',
                'చివరిగా అప్‌లోడ్ బటన్‌ను నొక్కండి.'
            ].join(' '),
            scanStatus: 'మీ ప్లాన్ స్కాన్ అవుతోంది, దయచేసి వేచి ఉండండి.',
            noTextDetected: 'మీ ప్లాన్‌లో టెక్స్ట్ గుర్తించబడలేదు. దయచేసి గది పేర్లను చేతితో జోడించి దిశ ప్రకారం ఉంచండి.',
            scanCompletionReminder: 'గది పేర్లు సరిగ్గా సర్దుబాటు అయ్యాయో లేదో చూడండి. లేకపోతే కావాల్సిన పేర్లను జోడించండి లేదా తప్పులను తొలగించండి. ఖచ్చితమైన ఫలితాల కోసం పేర్లు సర్కిల్ వెలుపల ఉండాలి. మౌస్‌తో టెక్స్ట్‌ను ఎంచుకోండి లేదా మొబైల్‌లో సరైన దిశలో లాగి వదలండి.',
            controlButtonsGuide: 'నియంత్రణలు: ప్లాన్‌ను పెంచడానికి Zoom in, విస్తృత దృశ్యం కోసం Zoom out, అచ్చులను ఉపయోగించి కదిలించండి, Reset ద్వారా డిఫాల్ట్‌కి తిరిగి వెళ్లండి. బటన్లపై ఉంచితే ఈ మార్గదర్శకాన్ని విని తెలుసుకోగలరు.',
            floorHasKitchen: 'ఈ అంతస్తులో వంటగది మరియు ప్రధాన ద్వారం ఉన్నాయి.',
            floorIsDuplex: 'ఇది కలిసిన అంతస్తులతో ఉన్న డ్యూప్లెక్స్ ఇల్లు.',
            noRemedies: 'ఈ అంశానికి సూచనలు లేవు.',
            alerts: {
                uploadRequiredTitle: 'అప్‌లోడ్ అవసరం',
                selectFileFirst: 'మొదట ఫైల్‌ను ఎంచుకోండి',
                invalidFileTitle: 'చెల్లని ఫైల్',
                invalidImageFile: 'దయచేసి ఇమేజ్ ఫైల్‌ను అప్‌లోడ్ చేయండి (JPEG, PNG)',
                readErrorTitle: 'చదవడంలో లోపం',
                readError: 'ఫైల్ చదవడంలో లోపం. దయచేసి మళ్ళీ ప్రయత్నించండి.',
                annotationInvalidTitle: 'చెల్లని వ్యాఖ్య',
                annotationNoNumbers: 'వ్యాఖ్యల్లో సంఖ్యలు ఉండకూడదు. దయచేసి సరైన గది పేరు ఇవ్వండి.',
                uploadPlanFirst: 'మొదట ఇల్లు ప్లాన్‌ను అప్‌లోడ్ చేయండి',
                pdfUnavailableTitle: 'PDF అందుబాటులో లేదు',
                pdfLibraryMissing: 'PDF సృష్టి లైబ్రరీ లోడ్ కాలేదు. మళ్ళీ ప్రయత్నించండి.',
                pdfErrorTitle: 'PDF లోపం',
                pdfErrorPrefix: 'PDF రూపొందించేటప్పుడు లోపం: '
            },
            pdfDisclaimerLines: [
                '1. ఈ నివేదిక ఆటోమేటిక్‌గా రూపొందించబడింది, సూచన కోసం మాత్రమే ఉపయోగించాలి.',
                '2. ఖచ్చితమైన వాస్తు విశ్లేషణ కోసం అర్హత కలిగిన నిపుణుడిని సంప్రదించండి.',
                '3. ఇచ్చిన సూచనలు సాధారణమైనవి; ప్రతి పరిస్థితికి సరిపోకపోవచ్చు.',
                '4. గది దిశల ఖచ్చితత్వం మీ ప్లాన్ సరైన ఉత్తర దిశలో ఉండడంపై ఆధారపడి ఉంటుంది.',
                '5. ఫలితాలు ప్రామాణిక వాస్తు సూత్రాలపై ఆధారపడి ఉంటాయి మరియు పరిస్థితుల ప్రకారం మారవచ్చు.'
            ]
        }
    };

    const validationMessages = {
        noRecognizedRooms: 'గుర్తించబడిన గది పేర్లు లేవు. Kitchen, Bedroom వంటి సాధారణ పేర్లను ఉపయోగించండి.',
        generalLocation: (name, direction) => `${name} <span class="correct-value">${direction}</span> దిశలో ఉంది`,
        correctPlacement: (name, direction, ideal) => `${name} <span class="correct-value">${direction}</span> దిశలో సరిగ్గా ఉంది (అనుకూల దిశ ${ideal})`,
        incorrectPlacement: (name, direction, ideal) => `${name} <span class="incorrect-value">${direction}</span> దిశలో ఉంది. సరైన వాస్తు కోసం <span class="correct-value">${ideal}</span> దిశలో ఉండాలి.`,
        noResults: 'ఏ ఫలితాలు లేవు. గది పేరు జోడించి మళ్ళీ తనిఖీ చేయండి.',
        centerOpen: '✅ కేంద్రం (బ్రహ్మస్థానం) ఖాళీగా ఉంది. ఇది ఉత్తమం.',
        centerOccupied: '⚠️ కేంద్రం (బ్రహ్మస్థానం) ఖాళీగా మరియు శుభ్రంగా ఉంచాలి – ఇక్కడ గదులు లేదా వస్తువులు పెట్టవద్దు.',
        guestBedroom: 'అతిథి పడకగది <span class="correct-value">ఆగ్నేయం</span> దిశలో సరిగా ఉంది'
    };

    const speech = {
        summary: (correctCount, issuesCount) => `వాస్తు తనిఖీ పూర్తైంది. ${correctCount} భాగాలు సరిగ్గా ఉన్నాయి, ${issuesCount} భాగాలకు శ్రద్ధ అవసరం.`,
        attentionPrefix: 'జాగ్రత్త: ',
        correctPrefix: 'సరైంది: ',
        reminderInstruction: 'వాస్తు పరిష్కారాల కోసం PDFని డౌన్‌లోడ్ చేసి, తప్పు వాస్తుపై క్లిక్ చేసి వినండి.',
        nextWord: 'తర్వాత'
    };

    window.teluguTranslations = {
        directionLabels,
        languageStrings,
        validationMessages,
        speech,
        languageOptionLabel: 'తెలుగు (Telugu)'
    };
})();