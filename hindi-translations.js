(function() {
    const directionLabels = {
        north: 'उत्तर',
        east: 'पूर्व',
        west: 'पश्चिम',
        south: 'दक्षिण',
        northeast: 'ईशान्य',
        northwest: 'वायव्य',
        southeast: 'आग्नेय',
        southwest: 'नैऋत्य',
        center: 'केंद्र',
        varies: 'विभिन्न',
        'as needed': 'आवश्यकतानुसार',
        'keep empty': 'खाली रखें',
        'east should be lower': 'पूर्व भाग नीचा रखें'
    };

    const languageStrings = {
        speechLang: 'hi-IN',
        labels: {
            uploadButton: 'अपलोड करें',
            addName: 'नाम जोड़ें',
            scan: 'पाठ स्कैन करें',
            scanShort: 'स्कैन',
            advancedScan: 'एडवांस स्कैन',
            advancedAnalysis: 'उन्नत विश्लेषण',
            validate: 'वास्तु जांचें',
            validateShort: 'जांचें',
            uploadPopupTitle: 'मकान का नक्शा अपलोड करें',
            selectImageLabel: 'छवि चुनें:',
            northDirectionLabel: 'उत्तर दिशा:',
            floorFeatureLabel: 'इस फ़्लोर पर रसोई और मुख्य द्वार है',
            floorFeatureDropdownLabel: 'हाँ या नहीं चुनें:',
            cancel: 'रद्द करें',
            uploadConfirm: 'शुरू करें',
            zoomIn: 'ज़ूम इन',
            zoomOut: 'ज़ूम आउट',
            resetZoom: 'ज़ूम रीसेट करें',
            fullscreen: 'पूर्ण स्क्रीन',
            guideToggle: 'बोले जाने वाले मार्गदर्शन को चालू या बंद करें',
            addRoomTitle: 'कमरे का नाम जोड़ें',
            addRoomPlaceholder: 'कमरे का नाम लिखें (जैसे: Kitchen, Living Hall)',
            add: 'जोड़ें',
            editRoomTitle: 'कमरे का नाम संपादित करें',
            editRoomPlaceholder: 'कमरे का नाम संपादित करें',
            save: 'सहेजें',
            manualAnnotationTitle: 'कमरों के नाम मैन्युअली जोड़ें',
            manualAnnotationBody: 'हम सभी कमरे के नाम नहीं पहचान पाए। क्या आप उन्हें मैन्युअली जोड़ना चाहेंगे? मौजूदा पहचाने गए लेबल यथावत रहेंगे।',
            manualAnnotationConfirm: 'कमरे के नाम जोड़ें',
            manualAnnotationCancel: 'बाद में',
            validationTitle: 'वास्तु जाँच परिणाम',
            close: 'बंद करें',
            downloadPdf: 'पीडीएफ डाउनलोड करें',
            scanningTitle: 'पाठ स्कैन हो रहा है...',
            ocrStatus: 'ओसीआर इंजन शुरू हो रहा है...',
            ocrAlertTitle: '2D प्लान स्कैन तैयारी',
            ocrAlertBody: 'स्कैन शुरू करने से पहले सुनिश्चित करें:<br><br>1. प्लान की छवि पूर्ण आकार में सेट हो<br>2. छवि को कंटेनर में फिट होने तक बड़ा किया गया हो<br>3. सारा पाठ स्पष्ट और पढ़ने योग्य हो<br><br>इससे सर्वोत्तम वास्तु परिणाम मिलेंगे।',
            ocrAlertCancel: 'रद्द करें',
            ocrAlertScan: 'अभी स्कैन करें',
            messageTitle: 'सूचना',
            messageDismiss: 'ठीक है',
            generalVastuTips: 'सामान्य वास्तु सुझाव',
            disclaimerTitle: 'अस्वीकरण:'
        },
        options: {
            north: 'उत्तर',
            east: 'पूर्व',
            west: 'पश्चिम',
            south: 'दक्षिण',
            yes: 'हाँ',
            no: 'नहीं'
        },
        messages: {
            uploadInstruction: [
                'अपना मकान प्लान अपलोड करें। केवल एक ही फ़्लोर की प्लान अपलोड करें, कई फ़्लोर प्लान चित्र अपलोड न करें।',
                'इसके बाद उत्तर, पूर्व, पश्चिम या दक्षिण में से प्लान की दिशा चुनें।',
                'अगर फ़्लोर प्लान में किचन और मुख्य दरवाज़ा है तो हाँ चुनें, वरना नहीं।',
                'अंत में अपलोड बटन दबाएं।'
            ].join(' '),
            scanStatus: 'आपका प्लान स्कैन हो रहा है, कृपया प्रतीक्षा करें।',
            noTextDetected: 'आपके प्लान में कोई कमरे का नाम नहीं मिला। कृपया कमरे के नाम मैन्युअली जोड़ें और दिशा अनुसार रखें।',
            scanCompletionReminder: 'सुनिश्चित करें कि कमरों के नाम सही जगह पर हैं। अगर नहीं, तो मैन्युअल नाम जोड़ें या गलत नाम हटाएं। सटीक परिणाम के लिए कमरों के नाम को कंपास सर्कल के बाहर रखें। माउस पॉइंटर से टेक्स्ट चुनें, या मोबाइल पर अपनी उंगली से टेक्स्ट को खींचकर सही दिशा में ले जाएँ और छोड़ दें ताकि टेक्स्ट सही दिशा में धिके।',
            controlButtonsGuide: 'कंट्रोल्स: प्लान को बड़ा करने के लिए ज़ूम इन करें, बड़ा दृश्य देखने के लिए ज़ूम आउट करें, दिशा तीरों से प्लान को मूव करें, और रीसेट से सबकुछ डिफॉल्ट पर लाएँ। बटनों पर होवर करें ताकि यह गाइड आवाज़ में सुनाई दे।',
            floorHasKitchen: 'इस फ़्लोर पर रसोई और मुख्य द्वार है।',
            floorIsDuplex: 'यह एक डुप्लेक्स मकान है जिसमें फ़्लोर जुड़े हुए हैं।',
            noRemedies: 'इस आइटम के लिए कोई उपाय उपलब्ध नहीं है।',
            alerts: {
                uploadRequiredTitle: 'अपलोड आवश्यक',
                selectFileFirst: 'कृपया पहले फ़ाइल चुनें',
                invalidFileTitle: 'अमान्य फ़ाइल',
                invalidImageFile: 'कृपया इमेज फ़ाइल अपलोड करें (JPEG, PNG)',
                readErrorTitle: 'रीड त्रुटि',
                readError: 'फ़ाइल पढ़ने में समस्या। कृपया फिर से प्रयास करें।',
                annotationInvalidTitle: 'अमान्य एनोटेशन',
                annotationNoNumbers: 'एनोटेशन में संख्याएँ नहीं हो सकतीं। कृपया सही कमरे का नाम दर्ज करें।',
                uploadPlanFirst: 'कृपया पहले मकान का प्लान अपलोड करें',
                pdfUnavailableTitle: 'पीडीएफ उपलब्ध नहीं',
                pdfLibraryMissing: 'पीडीएफ जनरेशन लाइब्रेरी लोड नहीं हुई। कृपया पुनः प्रयास करें।',
                pdfErrorTitle: 'पीडीएफ त्रुटि',
                pdfErrorPrefix: 'पीडीएफ बनाते समय त्रुटि: '
            },
            pdfDisclaimerLines: [
                '1. यह रिपोर्ट स्वचालित रूप से तैयार की गई है, इसे केवल संदर्भ के रूप में उपयोग करें।',
                '2. सटीक वास्तु विश्लेषण के लिए कृपया किसी योग्य वास्तु विशेषज्ञ से सलाह लें।',
                '3. दिए गए सुझाव सामान्य उपाय हैं, हर स्थिति में उपयुक्त नहीं हो सकते।',
                '4. कमरों की दिशा की शुद्धता आपके प्लान के सही उत्तर संरेखण पर निर्भर करती है।',
                '5. परिणाम मानक वास्तु सिद्धांतों पर आधारित हैं और परिस्थितियों के अनुसार बदल सकते हैं।'
            ]
        }
    };

    const validationMessages = {
        noRecognizedRooms: 'कोई पहचाने गए कमरे के नाम नहीं मिले। कृपया सामान्य नाम जैसे Kitchen, Bedroom आदि अंग्रेजी भाषा का उपयोग करें।',
        generalLocation: (name, direction) => `${name} <span class="correct-value">${direction}</span> दिशा में स्थित है`,
        correctPlacement: (name, direction, ideal) => `${name} <span class="correct-value">${direction}</span> में सही स्थान पर है (आदर्श दिशा ${ideal} है)`,
        incorrectPlacement: (name, direction, ideal) => `${name} <span class="incorrect-value">${direction}</span> में है। सही वास्तु के लिए इसे <span class="correct-value">${ideal}</span> में होना चाहिए।`,
        noResults: 'कोई परिणाम नहीं मिला। कृपया कमरे का नाम जोड़ें और फिर से जांचें।',
        centerOpen: '✅ केंद्र (ब्रह्मस्थान) खाली है। यह आदर्श है।',
        centerOccupied: '⚠️ केंद्र (ब्रह्मस्थान) खाली और खुला रखना चाहिए – यहां कमरे या वस्तुएं न रखें।',
        guestBedroom: 'अतिथि शयनकक्ष <span class="correct-value">दक्षिण-पूर्व</span> में सही स्थान पर है'
    };

    const speech = {
        summary: (correctCount, issuesCount) => `वास्तु जांच पूरी हुई। ${correctCount} भाग ठीक हैं और ${issuesCount} पर ध्यान देने की आवश्यकता है।`,
        attentionPrefix: 'ध्यान दें: ',
        correctPrefix: 'सही: ',
        reminderInstruction: 'वास्तु संबंधी उपाय के लिए पीडीएफ डाउनलोड करें, और गलत वास्तु पर क्लिक करके सुनें।'
    };

    window.hindiTranslations = {
        directionLabels,
        languageStrings,
        validationMessages,
        speech,
        languageOptionLabel: 'हिंदी (Hindi)'
    };
})();