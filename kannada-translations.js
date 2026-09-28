(function() {
    const directionLabels = {
        north: 'ಉತ್ತರ',
        east: 'ಪೂರ್ವ',
        west: 'ಪಶ್ಚಿಮ',
        south: 'ದಕ್ಷಿಣ',
        northeast: 'ಈಶಾನ್ಯ',
        northwest: 'ವಾಯವ್ಯ',
        southeast: 'ಆಗ್ನೇಯ',
        southwest: 'ನೈಋತ್ಯ',
        center: 'ಕೇಂದ್ರ',
        varies: 'ಬದಲಾಗುತ್ತದೆ',
        'as needed': 'ಅಗತ್ಯವಿದ್ದರೆ',
        'keep empty': 'ಖಾಲಿ ಇರಿಸಿ',
        'east should be lower': 'ಪೂರ್ವ ಭಾಗ ತಗ್ಗಾಗಿ ಇರಲಿ'
    };

    const languageStrings = {
        speechLang: 'kn-IN',
        labels: {
            uploadButton: 'ಅಪ್‌ಲೋಡ್',
            addName: 'ಹೆಸರನ್ನು ಸೇರಿಸಿ',
            addNameShort: 'T',
            scan: 'ಪಠ್ಯ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ',
            scanShort: 'ಸ್ಕ್ಯಾನ್',
            advancedScan: 'ಅಡ್ವಾನ್ಸ್ಡ್ ಸ್ಕ್ಯಾನ್',
            advancedAnalysis: 'ಸುಧಾರಿತ ವಿಶ್ಲೇಷಣೆ',
            validate: 'ವಾಸ್ತು ಪರಿಶೀಲನೆ',
            validateShort: 'ಪರಿಶೀಲನೆ',
            uploadPopupTitle: 'ಮನೆಯ ಪ್ಲಾನ್ ಅಪ್ಲೋಡ್ ಮಾಡಿ',
            selectImageLabel: 'ಚಿತ್ರ ಆಯ್ಕೆ:',
            northDirectionLabel: 'ಉತ್ತರ ದಿಕ್ಕು:',
            floorFeatureLabel: 'ಈ ಮಹಡಿಯಲ್ಲಿ ಅಡಿಗೆಮನೆ ಮತ್ತು ಮುಖ್ಯ ಬಾಗಿಲು ಇದೆ',
            floorFeatureDropdownLabel: 'ಹೌದು ಅಥವಾ ಇಲ್ಲ ಆಯ್ಕೆ ಮಾಡಿ:',
            cancel: 'ರದ್ದುಗೊಳಿಸಿ',
            uploadConfirm: 'ಪ್ರಾರಂಭಿಸಿ',
            zoomIn: 'ಹಿಗ್ಗಿಸಿ',
            zoomOut: 'ಕುಗ್ಗಿಸಿ',
            resetZoom: 'ಜೂಮ್ ಮರುಹೊಂದಿಸಿ',
            fullscreen: 'ಪೂರ್ಣ ಪರದೆ',
            guideToggle: 'ಮಾತನಾಡುವ ಮಾರ್ಗದರ್ಶಿಯನ್ನು ಆನ್ ಅಥವಾ ಆಫ್ ಮಾಡಿ',
            addRoomTitle: 'ಕೊಠಡಿಯ ಹೆಸರು ಸೇರಿಸಿ',
            addRoomPlaceholder: 'ಕೊಠಡಿ ಹೆಸರು ನಮೂದಿಸಿ (ಉದಾ: Kitchen, Bedroom)',
            add: 'ಸೇರಿಸಿ',
            editRoomTitle: 'ಕೊಠಡಿ ಹೆಸರು ಸಂಪಾದಿಸಿ',
            editRoomPlaceholder: 'ಕೊಠಡಿ ಹೆಸರು ಸಂಪಾದಿಸಿ',
            save: 'ಉಳಿಸಿ',
            manualAnnotationTitle: 'ಕೊಠಡಿ ಹೆಸರನ್ನು ಕೈಯಾರೆ ಸೇರಿಸಿ',
            manualAnnotationBody: 'ಎಲ್ಲಾ ಕೊಠಡಿ ಹೆಸರನ್ನು ನಾವು ಗುರುತಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ಕೈಯಾರೆ ಸೇರಿಸಲು ಬಯಸುವಿರಾ? ಈಗಾಗಲೇ ಕಂಡುಹಿಡಿದ ಲೇಬಲ್‌ಗಳು ಹಾಗೇ ಉಳಿಯುತ್ತವೆ.',
            manualAnnotationConfirm: 'ಕೊಠಡಿ ಹೆಸರನ್ನು ಸೇರಿಸಿ',
            manualAnnotationCancel: 'ನಂತರ',
            validationTitle: 'ವಾಸ್ತು ಫಲಿತಾಂಶಗಳು',
            close: 'ಮುಚ್ಚಿ',
            downloadPdf: 'PDF ಡೌನ್‌ಲೋಡ್',
            scanningTitle: 'ಪಠ್ಯ ಸ್ಕ್ಯಾನ್ ಆಗುತ್ತಿದೆ...',
            ocrStatus: 'OCR ಎಂಜಿನ್ ಪ್ರಾರಂಭವಾಗುತ್ತಿದೆ...',
            ocrAlertTitle: '2D ಪ್ಲಾನ್ ಸ್ಕ್ಯಾನ್ ತಯಾರಿ',
            ocrAlertBody: 'ಸ್ಕ್ಯಾನ್ ಮಾಡಲು ಮುಂಚೆ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ:<br><br>1. ಪ್ಲಾನ್ ಚಿತ್ರ ಪೂರ್ಣ ಗಾತ್ರದಲ್ಲಿದೆ<br>2. ಚಿತ್ರವು ಕಂಟೈನರ್‌ಗೆ ಸರಿಯಾಗಿ ಸರಿಹೊಂದಿದೆ<br>3. ಎಲ್ಲಾ ಪಠ್ಯ ಸ್ಪಷ್ಟವಾಗಿ ಕಾಣುತ್ತದೆ ಮತ್ತು ಓದಬಹುದು<br><br>ಇದರಿಂದ ಉತ್ತಮ ವಾಸ್ತು ಫಲಿತಾಂಶಗಳು ದೊರೆಯುತ್ತವೆ.',
            ocrAlertCancel: 'ರದ್ದು',
            ocrAlertScan: 'ಈಗ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ',
            messageTitle: 'ಸೂಚನೆ',
            messageDismiss: 'ಸರಿ',
            generalVastuTips: 'ಸಾಮಾನ್ಯ ವಾಸ್ತು ಸಲಹೆಗಳು',
            disclaimerTitle: 'ನಿರಾಕರಣೆ:'
        },
        options: {
            north: 'ಉತ್ತರ',
            east: 'ಪೂರ್ವ',
            west: 'ಪಶ್ಚಿಮ',
            south: 'ದಕ್ಷಿಣ',
            yes: 'ಹೌದು',
            no: 'ಇಲ್ಲ'
        },
        messages: {
            uploadInstruction: [
                'ನಿಮ್ಮ ಮನೆ ಪ್ಲಾನ್ ಅಪ್ಲೋಡ್ ಮಾಡಿ. ಒಂದು ಮಹಡಿಯ ಚಿತ್ರ ಮಾತ್ರ ಅಪ್ಲೋಡ್ ಮಾಡಿ, ಅನೇಕ ಫ್ಲೋರ್ ಪ್ಲಾನ್ ಚಿತ್ರಗಳನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಬೇಡಿ.',
                'ಆ ನಂತರ ಪ್ಲಾನ್‌ನ ಮುಖದ ದಿಕ್ಕನ್ನು ಆರಿಸಿ: ಉತ್ತರ, ಪೂರ್ವ, ಪಶ್ಚಿಮ ಅಥವಾ ದಕ್ಷಿಣ.',
                'ಪ್ಲಾನ್‌ನಲ್ಲಿ ಅಡಿಗೆಮನೆ ಮತ್ತು ಮುಖ್ಯ ಬಾಗಿಲು ಇದ್ದರೆ ಹೌದು ಆಯ್ಕೆ ಮಾಡಿ, ಇಲ್ಲದಿದ್ದರೆ ಇಲ್ಲ ಆಯ್ಕೆ ಮಾಡಿ.',
                'ಕೊನೆಗೆ ಅಪ್ಲೋಡ್ ಬಟನ್ ಒತ್ತಿ.'
            ].join(' '),
            scanStatus: 'ನಿಮ್ಮ ಪ್ಲಾನ್ ಸ್ಕ್ಯಾನ್ ಆಗುತ್ತಿದೆ, ದಯವಿಟ್ಟು ಕಾಯಿರಿ.',
            noTextDetected: 'ನಿಮ್ಮ ಪ್ಲಾನ್‌ನಲ್ಲಿ ಯಾವುದೇ ಕೊಠಡಿ ಹೆಸರು ಪತ್ತೆಯಾಗಿಲ್ಲ. ದಯವಿಟ್ಟು ಕೊಠಡಿ ಹೆಸರನ್ನು ಕೈಯಾರೆ ಸೇರಿಸಿ ಮತ್ತು ದಿಕ್ಕಿನಂತೆ ಇರಿಸಿ.',
            scanCompletionReminder: 'ಕೊಠಡಿ ಹೆಸರುಗಳು ಸರಿಯಾದ ಸ್ಥಳದಲ್ಲಿವೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ. ಅಗತ್ಯವಿದ್ದರೆ ತಪ್ಪಿದ್ದನ್ನು ಕೈಯಾರೆ ಸರಿಪಡಿಸಿ ಅಥವಾ ತೆಗೆದುಹಾಕಿ. ಸರಿಯಾದ ಫಲಿತಾಂಶಕ್ಕಾಗಿ ಹೆಸರನ್ನು ವಲಯದ ಹೊರಗೆ ಇರಿಸಿ. ಕಂಪ್ಯೂಟರ್‌ನಲ್ಲಿ ಮಾಉಸ್ ಅಥವಾ ಮೊಬೈಲ್‌ನಲ್ಲಿ ಬೆರಳನ್ನು ಬಳಸಿ ಪಠ್ಯವನ್ನು ಸರಿಯಾದ ದಿಕ್ಕಿಗೆ ಸರಿಸಿ.',
            controlButtonsGuide: 'ನಿಯಂತ್ರಣಗಳು: ಪ್ಲಾನ್ ದೊಡ್ಡದಾಗಿ ಕಾಣಲು Zoom In ಮಾಡಿ, ವಿಶಾಲ ದೃಶ್ಯಕ್ಕಾಗಿ Zoom Out ಮಾಡಿ, ದಿಕ್ಕು ಬಾಣಗಳಿಂದ ಪ್ಲಾನ್ ಸರಿಸಿ, ಮತ್ತು Reset ಬಳಸಿ ಎಲ್ಲವನ್ನು ಡೀಫಾಲ್ಟ್‌ಗೆ ಹಿಂತಿರುಗಿಸಿ. ಬಟನ್‌ಗಳ ಮೇಲೆ ಹಾವರ್ ಮಾಡಿದರೆ ಧ್ವನಿಯಲ್ಲಿ ಮಾರ್ಗದರ್ಶನ ಕೇಳಬಹುದು.',
            floorHasKitchen: 'ಈ ಮಹಡಿಯಲ್ಲಿ ಅಡಿಗೆಮನೆ ಮತ್ತು ಮುಖ್ಯ ಬಾಗಿಲು ಇದೆ.',
            floorIsDuplex: 'ಇದು ನಿರಂತರ ಮಹಡಿಗಳ ಡ್ಯುಪ್ಲೆಕ್ಸ್ ಮನೆ.',
            noRemedies: 'ಈ ಐಟಂಗೆ ಯಾವುದೇ ಪರಿಹಾರಗಳು ಲಭ್ಯವಿಲ್ಲ.',
            alerts: {
                uploadRequiredTitle: 'ಅಪ್ಲೋಡ್ ಅಗತ್ಯ',
                selectFileFirst: 'ದಯವಿಟ್ಟು ಮೊದಲು ಫೈಲ್ ಆಯ್ಕೆ ಮಾಡಿ',
                invalidFileTitle: 'ಅಮಾನ್ಯ ಫೈಲ್',
                invalidImageFile: 'ದಯವಿಟ್ಟು ಚಿತ್ರ ಫೈಲ್ ಅಪ್ಲೋಡ್ ಮಾಡಿ (JPEG, PNG)',
                readErrorTitle: 'ಓದುವ ದೋಷ',
                readError: 'ಫೈಲ್ ಓದುವಲ್ಲಿ ಸಮಸ್ಯೆ. ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
                annotationInvalidTitle: 'ಅಮಾನ್ಯ ಟಿಪ್ಪಣಿ',
                annotationNoNumbers: 'ಟಿಪ್ಪಣಿಗಳಲ್ಲಿ ಸಂಖ್ಯೆಗಳು ಇರಬಾರದು. ಸರಿಯಾದ ಕೊಠಡಿ ಹೆಸರು ನಮೂದಿಸಿ.',
                uploadPlanFirst: 'ದಯವಿಟ್ಟು ಮೊದಲು ಮನೆಯ ಪ್ಲಾನ್ ಅಪ್ಲೋಡ್ ಮಾಡಿ',
                pdfUnavailableTitle: 'PDF ಲಭ್ಯವಿಲ್ಲ',
                pdfLibraryMissing: 'PDF ತಯಾರಿಕಾ ಲೈಬ್ರರಿ ಲೋಡ್ ಆಗಿಲ್ಲ. ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
                pdfErrorTitle: 'PDF ದೋಷ',
                pdfErrorPrefix: 'PDF ಸೃಷ್ಟಿಸುವಾಗ ದೋಷ: '
            },
            pdfDisclaimerLines: [
                '1. ಈ ವರದಿ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ರಚಿತವಾಗಿದೆ, ಕೇವಲ ಉಲ್ಲೇಖಕ್ಕಾಗಿ ಬಳಸಿರಿ.',
                '2. ನಿಖರವಾದ ವಾಸ್ತು ವಿಶ್ಲೇಷಣೆಗೆ ಅರ್ಹ ವಾಸ್ತು ತಜ್ಞರನ್ನು ಸಂಪರ್ಕಿಸಿ.',
                '3. ನೀಡಿರುವ ಸಲಹೆಗಳು ಸಾಮಾನ್ಯ ಪರಿಹಾರಗಳು; ಪ್ರತಿಯೊಂದು ಪರಿಸ್ಥಿತಿಗೆ ಸೂಕ್ತವಾಗದಿರಬಹುದು.',
                '4. ಕೊಠಡಿ ದಿಕ್ಕಿನ ಖಚಿತತೆ ನಿಮ್ಮ ಪ್ಲಾನ್‌ನ ಸರಿಯಾದ ಉತ್ತರ ಹೊಂದಾಣಿಕೆಯನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ.',
                '5. ಫಲಿತಾಂಶಗಳು ಸಾಮಾನ್ಯ ವಾಸ್ತು ತತ್ವಗಳ ಮೇಲೆ ಆಧಾರಿತವಾಗಿದ್ದು ಪರಿಸ್ಥಿತಿಯ ಪ್ರಕಾರ ಬದಲಾಗಬಹುದು.'
            ]
        }
    };

    const validationMessages = {
        noRecognizedRooms: 'ಯಾವುದೇ ಗುರುತಿಸಲಾದ ಕೊಠಡಿ ಹೆಸರುಗಳು ಸಿಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು Kitchen, Bedroom ಮುಂತಾದ ಸಾಮಾನ್ಯ ಹೆಸರನ್ನು ಬಳಸಿರಿ.',
        generalLocation: (name, direction) => `${name} <span class="correct-value">${direction}</span> ದಿಕ್ಕಿನಲ್ಲಿ ಇದೆ`,
        correctPlacement: (name, direction, ideal) => `${name} <span class="correct-value">${direction}</span> ನಲ್ಲಿ ಸರಿಯಾದ ಸ್ಥಾನದಲ್ಲಿದೆ (ಐಡಿಯಲ್ ದಿಕ್ಕು ${ideal})`,
        incorrectPlacement: (name, direction, ideal) => `${name} <span class="incorrect-value">${direction}</span> ನಲ್ಲಿ ಇದೆ. ಸರಿಯಾದ ವಾಸ್ತುಗಾಗಿ <span class="correct-value">${ideal}</span> ನಲ್ಲಿ ಇರಬೇಕು.`,
        noResults: 'ಯಾವುದೇ ಫಲಿತಾಂಶ ಸಿಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಕೊಠಡಿ ಹೆಸರು ಸೇರಿಸಿ ಮತ್ತು ಮತ್ತೆ ಪರಿಶೀಲಿಸಿ.',
        centerOpen: '✅ ಕೇಂದ್ರ (ಬ್ರಹ್ಮಸ್ಥಾನ) ಖಾಲಿಯಾಗಿದೆ. ಇದು ಆದರ್ಶ.',
        centerOccupied: '⚠️ ಕೇಂದ್ರ (ಬ್ರಹ್ಮಸ್ಥಾನ) ಖಾಲಿ ಮತ್ತು ತೆರೆಯಾಗಿ ಇರಬೇಕು – ಇಲ್ಲಿ ಕೊಠಡಿಗಳು ಅಥವಾ ವಸ್ತುಗಳನ್ನು ಇಡಬೇಡಿ.',
        guestBedroom: 'ಗಸ್ಟ್ ಬೇಡ್ರೂಮ್ <span class="correct-value">ದಕ್ಷಿಣ-ಪೂರ್ವ</span> ದಿಕ್ಕಿನಲ್ಲಿ ಸರಿಯಾಗಿ ಇದೆ'
    };

    const speech = {
        summary: (correctCount, issuesCount) => `ವಾಸ್ತು ಪರಿಶೀಲನೆ ಪೂರ್ಣವಾಗಿದೆ. ${correctCount} ಭಾಗಗಳು ಸರಿಯಾಗಿವೆ ಮತ್ತು ${issuesCount} ಭಾಗಗಳಲ್ಲಿ ಗಮನ ಅಗತ್ಯವಿದೆ.`,
        attentionPrefix: 'ಗಮನಿಸಿ: ',
        correctPrefix: 'ಸರಿಯಾಗಿದೆ: ',
        reminderInstruction: 'ವಾಸ್ತು ಸಲಹೆಗಾಗಿ PDF ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ, ಮತ್ತು ತಪ್ಪಾದ ವಾಸ್ತು ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ ಕೇಳಿ.',
        nextWord: 'ಮುಂದಿನದು'
    };

    window.kannadaTranslations = {
        directionLabels,
        languageStrings,
        validationMessages,
        speech,
        languageOptionLabel: 'ಕನ್ನಡ (Kannada)'
    };
})();