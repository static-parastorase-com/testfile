(function() {
    const directionLabels = {
        north: 'വടക്ക്',
        east: 'കിഴക്ക്',
        west: 'പടിഞ്ഞാറ്',
        south: 'തെക്ക്',
        northeast: 'ഈശാന്യം',
        northwest: 'വടക്കുപടിഞ്ഞാറ്',
        southeast: 'തെക്കുകിഴക്ക്',
        southwest: 'തെക്കുപടിഞ്ഞാറ്',
        center: 'മധ്യം',
        varies: 'മാറാം',
        'as needed': 'ആവശ്യമെങ്കിൽ',
        'keep empty': 'ഒഴിച്ചുവെയ്ക്കുക',
        'east should be lower': 'കിഴക്ക് ഭാഗം താഴെയായിരിക്കണം'
    };

    const languageStrings = {
        speechLang: 'ml-IN',
        labels: {
            uploadButton: 'അപ്‌ലോഡ്',
            addName: 'പേര് ചേർക്കുക',
            addNameShort: 'T',
            scan: 'ടെക്സ്റ്റ് സ്കാൻ',
            scanShort: 'സ്കാൻ',
            advancedScan: 'മുന്നേറ്റ സ്കാൻ',
            advancedAnalysis: 'മെച്ചപ്പെട്ട വിശകലനം',
            validate: 'വാസ്തു പരിശോധിക്കുക',
            validateShort: 'ചെക്ക്',
            uploadPopupTitle: 'വീട്ടുപ്ലാൻ അപ്ലോഡ് ചെയ്യുക',
            selectImageLabel: 'ചിത്രം തിരഞ്ഞെടുക്കുക:',
            northDirectionLabel: 'വടക്ക് നേരിട്ട്:',
            floorFeatureLabel: 'ഈ നിലയിൽ അടുക്കളയും മുഖ്യവാതിലും ഉണ്ട്',
            floorFeatureDropdownLabel: 'അതെ അല്ലെങ്കിൽ ഇല്ല തിരഞ്ഞെടുക്കുക:',
            cancel: 'റദ്ദാക്കുക',
            uploadConfirm: 'തുടങ്ങുക',
            zoomIn: 'വലുതാക്കുക',
            zoomOut: 'ചെറുതാക്കുക',
            resetZoom: 'സൂം പുനഃസജ്ജമാക്കുക',
            fullscreen: 'പൂർണ്ണസ്ക്രീൻ',
            guideToggle: 'സംസാരിക്കുന്ന വഴികാട്ടി ഓൺ/ഓഫ് ചെയ്യുക',
            addRoomTitle: 'മുറി നാമം ചേർക്കുക',
            addRoomPlaceholder: 'മുറിയുടെ പേര് നൽകുക (ഉദാ: Kitchen, Bedroom)',
            add: 'ചേർക്കുക',
            editRoomTitle: 'മുറി നാമം തിരുത്തുക',
            editRoomPlaceholder: 'മുറി നാമം തിരുത്തുക',
            save: 'സംരക്ഷിക്കുക',
            manualAnnotationTitle: 'മുറികളുടെ പേരുകൾ കൈയ്യോടെ ചേർക്കുക',
            manualAnnotationBody: 'എല്ലാ മുറിപ്പേരുകളും ഉറപ്പായി തിരിച്ചറിയാൻ കഴിഞ്ഞില്ല. അവ കൈയ്യോടെ ചേർക്കണോ? ഇതിനകം കണ്ടെടുത്ത ലേബലുകൾ നിലനിൽക്കും.',
            manualAnnotationConfirm: 'മുറി പേരുകൾ ചേർക്കുക',
            manualAnnotationCancel: 'പിന്നീട്',
            validationTitle: 'വാസ്തു പരിശോധനാ ഫലങ്ങൾ',
            close: 'അടയ്ക്കുക',
            downloadPdf: 'PDF ഡൗൺലോഡ്',
            scanningTitle: 'ടെക്സ്റ്റ് സ്കാൻ ചെയ്യുന്നു...',
            ocrStatus: 'OCR എൻജിൻ ആരംഭിക്കുന്നു...',
            ocrAlertTitle: '2D പ്ലാൻ സ്കാൻ തയ്യാറാക്കൽ',
            ocrAlertBody: 'സ്കാൻ ആരംഭിക്കുന്നതിന് മുമ്പ് ദയവായി ഉറപ്പാക്കുക:<br><br>1. പ്ലാൻ ചിത്രം പൂർണ്ണ വലുപ്പത്തിലാണ്<br>2. ചിത്രം വലുതാക്കി കണ്ടെയിനറിൽ ഒതുങ്ങുന്നു<br>3. മുഴുവൻ ടെക്സ്റ്റും വ്യക്തമാക്കിക്കാണാം<br><br>ഇത് മികച്ച വാസ്തു ഫലങ്ങൾ നൽകും.',
            ocrAlertCancel: 'റദ്ദാക്കുക',
            ocrAlertScan: 'ഇപ്പോൾ സ്കാൻ',
            messageTitle: 'അറിയിപ്പ്',
            messageDismiss: 'ശരി',
            generalVastuTips: 'പൊതു വാസ്തു നിർദേശങ്ങൾ',
            disclaimerTitle: 'വിമർശനം:'
        },
        options: {
            north: 'വടക്ക്',
            east: 'കിഴക്ക്',
            west: 'പടിഞ്ഞാറ്',
            south: 'തെക്ക്',
            yes: 'അതെ',
            no: 'ഇല്ല'
        },
        messages: {
            uploadInstruction: [
                'നിങ്ങളുടെ വീടിന്റെ പ്ലാൻ അപ്ലോഡ് ചെയ്യുക. ഒരു നിലയുടെ ചിത്രം മാത്രമേ അപ്ലോഡ് ചെയ്യാവൂ; നിരവധി നിലപടങ്ങൾ അപ്ലോഡ് ചെയ്യരുത്.',
                'അടുത്തതായി, നിങ്ങളുടെ പ്ലാൻ ഏത് ദിശയിലാണെന്ന് തിരഞ്ഞെടുക്കുക: വടക്ക്, കിഴക്ക്, പടിഞ്ഞാറ് അല്ലെങ്കിൽ തെക്ക്.',
                'നിലയിൽ അടുക്കളയും മുഖ്യവാതിലും ഉണ്ടെങ്കിൽ അതെ തിരഞ്ഞെടുക്കുക; ഇല്ലെങ്കിൽ ഇല്ല തിരഞ്ഞെടുക്കുക.',
                'അവസാനം അപ്ലോഡ് ബട്ടൺ അമർത്തുക.'
            ].join(' '),
            scanStatus: 'നിങ്ങളുടെ പ്ലാൻ സ്കാൻ ചെയ്യുന്നു, ദയവായി കാത്തിരിക്കുക.',
            noTextDetected: 'നിങ്ങളുടെ പ്ലാനിൽ ടെക്സ്റ്റ് കണ്ടെത്തിയില്ല. മുറിപ്പേരുകൾ കൈയ്യോടെ ചേർത്തു ദിശപ്രകാരം വയ്ക്കുക.',
            scanCompletionReminder: 'മുറിപ്പേരുകൾ ശരിയായി ക്രമീകരിച്ചിട്ടുണ്ടോ എന്ന് പരിശോധിക്കുക. ഇല്ലെങ്കിൽ നഷ്ടപ്പെട്ടവ ചേർക്കുകയോ തെറ്റുകൾ നീക്കുകയോ ചെയ്യുക. കൃത്യമായ ഫലങ്ങൾക്ക് പേരുകൾ സർക്കിളിന് പുറത്തായിരിക്കണം. മൗസ് ഉപയോഗിച്ച് ടെക്സ്റ്റ് തിരഞ്ഞെടുക്കുക അല്ലെങ്കിൽ മൊബൈലിൽ ശരിയായ ദിശയിൽ വലിച്ച് വിടുക.',
            controlButtonsGuide: 'നിയന്ത്രണങ്ങൾ: പ്ലാൻ വലുതാക്കാൻ Zoom in, വിപുലമായി കാണാൻ Zoom out, അച്ചുകൾ ഉപയോഗിച്ച് നീക്കുക, Reset ഉപയോഗിച്ച് ഡീഫോൾട്ടിലേക്ക് മടങ്ങുക. ബട്ടണുകളിൽ ഹോവർ ചെയ്യുമ്പോൾ ഈ മാർഗ്ഗനിർദേശം കേൾക്കാം.',
            floorHasKitchen: 'ഈ നിലയിൽ അടുക്കളയും മുഖ്യവാതിലും ഉണ്ട്.',
            floorIsDuplex: 'ഇത് ബന്ധിപ്പിച്ച നിലകളുള്ള ഡ്യൂപ്ലെക്‌സ് വീടാണ്.',
            noRemedies: 'ഈ വിഷയത്തിന് പരിഹാരങ്ങൾ ലഭ്യമല്ല.',
            alerts: {
                uploadRequiredTitle: 'അപ്ലോഡ് ആവശ്യം',
                selectFileFirst: 'ആദ്യം ഫയൽ തിരഞ്ഞെടുക്കുക',
                invalidFileTitle: 'തെറ്റായ ഫയൽ',
                invalidImageFile: 'ദയവായി ചിത്രം അപ്ലോഡ് ചെയ്യുക (JPEG, PNG)',
                readErrorTitle: 'വായന പിശക്',
                readError: 'ഫയൽ വായനയിൽ പിശക്. ദയവായി വീണ്ടും ശ്രമിക്കുക.',
                annotationInvalidTitle: 'സരിയല്ലാത്ത കുറിപ്പ്',
                annotationNoNumbers: 'കുറിപ്പുകളിൽ സംഖ്യകൾ അനുവദനീയമല്ല. ശരിയായ മുറി പേര് നൽകുക.',
                uploadPlanFirst: 'ആദ്യം വീടിന്റെ പ്ലാൻ അപ്ലോഡ് ചെയ്യുക',
                pdfUnavailableTitle: 'PDF ലഭ്യമല്ല',
                pdfLibraryMissing: 'PDF സൃഷ്ടി ലൈബ്രറി ലോഡ് ചെയ്തിട്ടില്ല. വീണ്ടും ശ്രമിക്കുക.',
                pdfErrorTitle: 'PDF പിശക്',
                pdfErrorPrefix: 'PDF സൃഷ്ടിക്കുന്നതിനിടെ പിശക്: '
            },
            pdfDisclaimerLines: [
                '1. ഈ റിപ്പോർട്ട് സ്വയം സൃഷ്ടിച്ചതാണ്, റഫറൻസിനായി മാത്രം ഉപയോഗിക്കുക.',
                '2. കൃത്യമായ വാസ്തു വിശകലനത്തിന് യോഗ്യനായ വിദഗ്ധനെ സമീപിക്കുക.',
                '3. നൽകിയിരിക്കുന്ന നിർദേശങ്ങൾ സാധാരണ പരിഹാരങ്ങളാണ്; എല്ലാ സാഹചര്യങ്ങൾക്കും അനുയോജ്യമാകണമെന്നില്ല.',
                '4. മുറികളുടെ ദിശയുടെ കൃത്യത നിങ്ങളുടെ പ്ലാൻ ശരിയായ വടക്ക് ദിശയിലാണെന്ന് ആശ്രയിച്ചിരിക്കുന്നു.',
                '5. ഫലങ്ങൾ സാധാരണ വാസ്തു സിദ്ധാന്തങ്ങളെ അടിസ്ഥാനമാക്കിയുള്ളതാണ്; സാഹചര്യം അനുസരിച്ച് മാറാം.'
            ]
        }
    };

    const validationMessages = {
        noRecognizedRooms: 'മുറി പേരുകൾ ഒന്നും കണ്ടെത്താനായില്ല. Kitchen, Bedroom പോലുള്ള സാധാരണ പേരുകൾ ഉപയോഗിക്കുക.',
        generalLocation: (name, direction) => `${name} <span class="correct-value">${direction}</span> ദിശയിൽ സ്ഥിതിചെയ്യുന്നു`,
        correctPlacement: (name, direction, ideal) => `${name} <span class="correct-value">${direction}</span> ദിശയിൽ ശരിയായി സ്ഥിതിചെയ്യുന്നു (ആദർശ ദിശ ${ideal})`,
        incorrectPlacement: (name, direction, ideal) => `${name} <span class="incorrect-value">${direction}</span> ദിശയിൽ സ്ഥിതിചെയ്യുന്നു. ശരിയായ വാസ്തുവിന് <span class="correct-value">${ideal}</span> ദിശയിൽ വേണം.`,
        noResults: 'ഫലങ്ങൾ ലഭിച്ചില്ല. മുറി നാമം ചേർത്ത് വീണ്ടും പരിശോധിക്കുക.',
        guestBedroom: 'അതിഥി മുറി <span class="correct-value">തെക്കുകിഴക്ക്</span> ദിശയിൽ ശരിയായി സ്ഥിതിചെയ്യുന്നു'
    };

    const speech = {
        summary: (correctCount, issuesCount) => `വാസ്തു പരിശോധന പൂർത്തിയായി. ${correctCount} ഭാഗങ്ങൾ ശരിയായി ഉണ്ട്, ${issuesCount} ഭാഗങ്ങൾ ശ്രദ്ധ ആവശ്യമുണ്ട്.`,
        attentionPrefix: 'ശ്രദ്ധിക്കുക: ',
        correctPrefix: 'ശരി: ',
        reminderInstruction: 'വാസ്തു പരിഹാരങ്ങൾക്കായി PDF ഡൗൺലോഡ് ചെയ്യുക, തെറ്റായ വാസ്തുവിൽ ക്ലിക് ചെയ്ത് കേൾക്കുക.'
    };

    window.malayalamTranslations = {
        directionLabels,
        languageStrings,
        validationMessages,
        speech,
        languageOptionLabel: 'മലയാളം (Malayalam)'
    };
})();