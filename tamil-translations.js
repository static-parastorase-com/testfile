(function() {
    const directionLabels = {
        north: 'வடக்கு',
        east: 'கிழக்கு',
        west: 'மேற்கு',
        south: 'தெற்கு',
        northeast: 'வடகிழக்கு',
        northwest: 'வடமேற்கு',
        southeast: 'தென்கிழக்கு',
        southwest: 'தென்மேற்கு',
        center: 'மையம்',
        varies: 'மாறுபடும்',
        'as needed': 'தேவைக்கேற்ப',
        'keep empty': 'காலியாக வைத்திருங்கள்',
        'east should be lower': 'கிழக்கு பகுதி தாழ்ந்து இருக்க வேண்டும்'
    };

    const languageStrings = {
        speechLang: 'ta-IN',
        labels: {
            uploadButton: 'பதிவேற்று',
            addName: 'பெயரைச் சேர்க்கவும்',
            addNameShort: 'T',
            scan: 'உரை ஸ்கேன்',
            scanShort: 'ஸ்கேன்',
            advancedScan: 'மேம்பட்ட ஸ்கேன்',
            advancedAnalysis: 'மேம்பட்ட பகுப்பாய்வு',
            validate: 'வாஸ்து சரிபார்க்க',
            validateShort: 'சரி',
            uploadPopupTitle: 'வீட்டு திட்டத்தை பதிவேற்றவும்',
            selectImageLabel: 'படத்தைத் தேர்ந்தெடுக்கவும்:',
            northDirectionLabel: 'வடக்கு நோக்கம்:',
            floorFeatureLabel: 'இந்த மாடியில் சமையலறை மற்றும் பிரதான கதவு உள்ளது',
            floorFeatureDropdownLabel: 'ஆம் அல்லது இல்லை என்பதைத் தேர்ந்தெடுக்கவும்:',
            cancel: 'ரத்து',
            uploadConfirm: 'தொடங்கு',
            zoomIn: 'பெரிதாக்கு',
            zoomOut: 'சிறிதாக்கு',
            resetZoom: 'பெரிதாக்கத்தை மீட்டமை',
            fullscreen: 'முழுத்திரை',
            guideToggle: 'பேசும் வழிகாட்டியை இயக்கு/நிறுத்து',
            addRoomTitle: 'அறை பெயரைச் சேர்க்கவும்',
            addRoomPlaceholder: 'அறை பெயரை உள்ளிடவும் (உதா: Kitchen, Bedroom)',
            add: 'சேர்க்க',
            editRoomTitle: 'அறை பெயரைத் திருத்தவும்',
            editRoomPlaceholder: 'அறை பெயரைத் திருத்தவும்',
            save: 'சேமிக்க',
            manualAnnotationTitle: 'அறை பெயர்களை கையேடு சேர்க்கவும்',
            manualAnnotationBody: 'அனைத்து அறை பெயர்களையும் உறுதியாக அடையாளம் கண்டு கொள்ள முடியவில்லை. கையேடு சேர்க்க விரும்புகிறீர்களா? ஏற்கனவே கண்டறியப்பட்ட லேபிள்கள் இருக்கும்.',
            manualAnnotationConfirm: 'அறை பெயர்களைச் சேர்க்கவும்',
            manualAnnotationCancel: 'பிறகு',
            validationTitle: 'வாஸ்து சரிபார்ப்பு முடிவுகள்',
            close: 'மூடு',
            downloadPdf: 'PDF பதிவிறக்க',
            scanningTitle: 'உரை ஸ்கேன் செய்யப்படுகிறது...',
            ocrStatus: 'OCR என்ஜின் தொடங்குகிறது...',
            ocrAlertTitle: '2D திட்ட ஸ்கேன் தயார்',
            ocrAlertBody: 'ஸ்கேன் தொடங்குவதற்கு முன் உறுதி செய்யவும்:<br><br>1. திட்டப் படம் முழு அளவில் உள்ளது<br>2. படம் பெரிதாக்கப்பட்டு கொண்டெய்னரில் பொருந்துகிறது<br>3. அனைத்து உரையும் தெளிவாக தெரியும்<br><br>இது சிறந்த வாஸ்து முடிவுகளை தரும்.',
            ocrAlertCancel: 'ரத்து',
            ocrAlertScan: 'இப்போது ஸ்கேன்',
            messageTitle: 'அறிவிப்பு',
            messageDismiss: 'சரி',
            generalVastuTips: 'பொது வாஸ்து குறிப்புகள்',
            disclaimerTitle: 'துறப்பு:'
        },
        options: {
            north: 'வடக்கு',
            east: 'கிழக்கு',
            west: 'மேற்கு',
            south: 'தெற்கு',
            yes: 'ஆம்',
            no: 'இல்லை'
        },
        messages: {
            uploadInstruction: [
                'உங்கள் வீட்டுத் திட்டத்தை பதிவேற்றவும். ஒரு மாடி படத்தை மட்டும் பதிவேற்றவும்; பல மாடி திட்டப் படங்களை பதிவேற்ற வேண்டாம்.',
                'பின், உங்கள் திட்டம் எதிர்கொள்ளும் திசையைத் தேர்ந்தெடுக்கவும்: வடக்கு, கிழக்கு, மேற்கு அல்லது தெற்கு.',
                'மாடியில் சமையலறை மற்றும் பிரதான கதவு இருந்தால் ஆம் என்பதைத் தேர்ந்தெடுக்கவும்; இல்லையெனில் இல்லை என்பதைத் தேர்ந்தெடுக்கவும்.',
                'இறுதியாக, பதிவேற்ற பொத்தானை அழுத்தவும்.'
            ].join(' '),
            scanStatus: 'உங்கள் திட்டம் ஸ்கேன் செய்யப்படுகிறது, தயவுசெய்து காத்திருக்கவும்.',
            noTextDetected: 'உங்கள் திட்டத்தில் உரை கண்டறியப்படவில்லை. அறை பெயர்களை கையேடு சேர்த்து திசைக்கு ஏற்ப வைக்கவும்.',
            scanCompletionReminder: 'அறை பெயர்கள் சரியாக சரிசெய்யப்பட்டுள்ளனவா என்பதைச் சரிபார்க்கவும். இல்லையெனில், குறைவான பெயர்களை கையேடு சேர்க்கவும் அல்லது தவறானவற்றை அகற்றவும். துல்லியமான முடிவுகளுக்காக பெயர்கள் வட்டத்தின் வெளியே இருக்க வேண்டும். மவுஸைப் பயன்படுத்தி உரையைத் தேர்ந்தெடுக்கவும் அல்லது மொபைலில் சரியான திசையில் இழுத்து விடவும்.',
            controlButtonsGuide: 'கட்டுப்பாடுகள்: திட்டத்தை பெரிதாக்க Zoom in, பெரிய காட்சி Zoom out, அச்சுகளைக் கொண்டு நகர்த்தவும், Reset மூலம் இயல்புநிலைக்கு திரும்பவும். பொத்தான்களுக்கு மேல் விட்டு இந்த வழிகாட்டியை கேட்கலாம்.',
            floorHasKitchen: 'இந்த மாடியில் சமையலறை மற்றும் பிரதான கதவு உள்ளது.',
            floorIsDuplex: 'இது தொடர்ச்சியான மாடிகளுடன் கூடிய டுப்ளெக்ஸ் வீடு.',
            noRemedies: 'இந்த பொருளுக்கான தீர்வுகள் இல்லை.',
            alerts: {
                uploadRequiredTitle: 'பதிவேற்றம் தேவை',
                selectFileFirst: 'முதலில் கோப்பைத் தேர்ந்தெடுக்கவும்',
                invalidFileTitle: 'தவறான கோப்பு',
                invalidImageFile: 'படக் கோப்பை பதிவேற்றவும் (JPEG, PNG)',
                readErrorTitle: 'படிப்பதில் பிழை',
                readError: 'கோப்பு படிக்க பிழை. மீண்டும் முயற்சி செய்யவும்.',
                annotationInvalidTitle: 'செல்லுபடியாகாத குறிப்பு',
                annotationNoNumbers: 'குறிப்புகளில் எண்கள் இருக்க முடியாது. சரியான அறை பெயரை உள்ளிடவும்.',
                uploadPlanFirst: 'முதலில் வீட்டு திட்டத்தை பதிவேற்றவும்',
                pdfUnavailableTitle: 'PDF கிடைக்கவில்லை',
                pdfLibraryMissing: 'PDF உருவாக்க நூலகம் ஏற்றப்படவில்லை. மீண்டும் முயற்சி செய்யவும்.',
                pdfErrorTitle: 'PDF பிழை',
                pdfErrorPrefix: 'PDF உருவாக்கும்போது பிழை: '
            },
            pdfDisclaimerLines: [
                '1. இந்த அறிக்கை தானாக உருவாக்கப்பட்டுள்ளது, குறிப்பு நோக்கில் மட்டுமே பயன்படுத்தவும்.',
                '2. துல்லியமான வாஸ்து பகுப்பாய்வுக்கு தகுதியான நிபுணரை அணுகவும்.',
                '3. வழங்கப்பட்ட பரிந்துரைகள் பொதுவானவை; எல்லா சூழலுக்கும் பொருந்தாது.',
                '4. அறை திசைகளின் துல்லியம் சரியான வடக்கு சீரமைப்பைப் பொறுத்தது.',
                '5. முடிவுகள் தரமான வாஸ்து கோட்பாடுகளை அடிப்படையாகக் கொண்டவை; சூழ்நிலைக்கு ஏற்ப மாறலாம்.'
            ]
        }
    };

    const validationMessages = {
        noRecognizedRooms: 'அறியப்பட்ட அறை பெயர்கள் எதுவும் இல்லை. Kitchen, Bedroom போன்ற பொதுவான பெயர்களைப் பயன்படுத்தவும்.',
        generalLocation: (name, direction) => `${name} <span class="correct-value">${direction}</span> திசையில் உள்ளது`,
        correctPlacement: (name, direction, ideal) => `${name} <span class="correct-value">${direction}</span> திசையில் சரியான இடத்தில் உள்ளது (சரியான திசை ${ideal})`,
        incorrectPlacement: (name, direction, ideal) => `${name} <span class="incorrect-value">${direction}</span> திசையில் உள்ளது. சரியான வாஸ்துக்கு <span class="correct-value">${ideal}</span> திசையில் இருக்க வேண்டும்.`,
        noResults: 'முடிவுகள் இல்லை. அறை பெயரைச் சேர்த்து மீண்டும் சரிபார்க்கவும்.',
        guestBedroom: 'விருந்தினர் அறை <span class="correct-value">தென்கிழக்கு</span> திசையில் சரியாக உள்ளது'
    };

    const speech = {
        summary: (correctCount, issuesCount) => `வாஸ்து சரிபார்ப்பு முடிந்தது. ${correctCount} பகுதி சரியானது, ${issuesCount} பகுதியில் கவனம் தேவை.`,
        attentionPrefix: 'கவனம்: ',
        correctPrefix: 'சரி: ',
        reminderInstruction: 'வாஸ்து தீர்வுகளுக்குப் PDF பதிவிறக்கவும், தவறான வாஸ்தை கிளிக் செய்து கேட்கவும்.'
    };

    window.tamilTranslations = {
        directionLabels,
        languageStrings,
        validationMessages,
        speech,
        languageOptionLabel: 'தமிழ் (Tamil)'
    };
})();