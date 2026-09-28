// General Vastu remedies data used across the application
window.tamilGeneralVastuRemedies = [
    "நல்ல சக்தி ஓட்டம் கிடைக்க வடகிழக்கு மூலையை சுத்தமாகவும் திறந்தவையாகவும் வைத்திருக்கவும்.",
    "தென்மேற்கு திசையில் கனமான பொருட்கள் மற்றும் சேமிப்பு பொருட்களை வைக்கவும்.",
    "தண்ணீர் சார்ந்த அம்சங்கள் (கிணறு, நீரூற்று) வடகிழக்கில் இருக்க வேண்டும்.",
    "வீட்டின் மையப் பகுதி (பிரம்மஸ்தானம்) காலியாகவும் சுத்தமாகவும் இருக்க வேண்டும்.",
    "வடகிழக்கு அல்லது வீட்டின் மையத்தில் கழிப்பறைகளை அமைப்பதை தவிர்க்கவும்.",
    "அனைத்து அறைகளிலும் சரியான காற்றோட்டம் மற்றும் இயற்கை ஒளி இருக்குமாறு உறுதி செய்யவும்.",
    "நல்ல சக்தியை அதிகரிக்க கண்ணாடிகளை திட்டமிட்டு பயன்படுத்தவும்.",
    "எதிர்மறை சக்தியை சமநிலைப்படுத்த பிரச்சனையான இடங்களில் வாஸ்து பைரமிட்களை வைக்கவும்."
];

// Room-specific Vastu remedies data
window.getTamilVastuRemedies = function(roomName, direction) {
    if (!roomName) return [];
    
    const lowerName = roomName.toLowerCase();
    const remedies = [];
    const dirLower = direction.toLowerCase();
    
    if (lowerName.includes('kitchen') || lowerName.includes('rasoi') || 
        lowerName.includes('bawarchi') || lowerName.includes('cooking') || 
        lowerName.includes('modular kitchen') || lowerName.includes('dry kitchen') ||
        lowerName.includes('wet kitchen')) {

        if (dirLower === 'southeast') {
            remedies.push({
                title: "தெற்க்கிழக்கு (அக்னேய) திசையில் சமையலறை – சிறந்த இடம்.",
                suggestions: [
                    "சமையலறைக்கு (அக்னி தத்துவம்) சிறந்த திசை இதுவே.",
                    "அடுப்பை தெற்க்கிழக்கு மூலையில் கிழக்கை நோக்கி வைக்கவும்.",
                    "கிழக்கை நோக்கி சமையல் செய்வது நல்ல சக்தியை தரும்.",
                    "சிவப்பு, ஆரஞ்சு, மஞ்சள் அல்லது பச்சை நிறங்களை பயன்படுத்தவும்.",
                    "சரியான காற்றோட்டத்திற்காக கிழக்கில் ஜன்னல்கள் இருக்க வேண்டும்.",
                    "தானியங்கள் மற்றும் உணவுப்பொருட்களை வடமேற்கு அல்லது தென்மேற்கில் சேமிக்கவும்."
                ]
            });
        } else if (dirLower === 'east') {
            remedies.push({
                title: "கிழக்கு திசையில் சமையலறை.",
                suggestions: [
                    "தெற்க்கிழக்கு திசைக்கு நல்ல மாற்று இடமாகும்.",
                    "சமையலறையின் தெற்க்கிழக்கு மூலையில் அடுப்பை வைக்கவும்.",
                    "செல்வ வளர்ச்சிக்காக கிழக்கை நோக்கி சமையல் செய்யவும்.",
                    "இளஞ்சிவப்பு, கிரீம் அல்லது ரோஸ் நிறங்களை பயன்படுத்தவும்.",
                    "காலை நேர சூரிய ஒளி கிடைப்பதை உறுதி செய்யவும்.",
                    "வடகிழக்கு பகுதியில் கழிவு நீர் வெளியேறும் இடம் இருக்க வேண்டும்."
                ]
            });
        } else if (dirLower === 'northwest') {
            remedies.push({
                title: "வடமேற்கு திசையில் சமையலறை.",
                suggestions: [
                    "பணநிலையற்ற தன்மை மற்றும் உடல்நல பிரச்சனைகள் ஏற்படலாம்.",
                    "அடுப்பின் பின்னால் கண்ணாடியை வைக்கவும்.",
                    "சிவப்பு மற்றும் ஆரஞ்சு போன்ற அக்னி நிறங்களை பயன்படுத்தவும்.",
                    "தெற்க்கிழக்கு மூலையில் பித்தளை ஆமை வைக்கவும்.",
                    "கருப்பு அல்லது நீல நிறங்களை தவிர்க்கவும்.",
                    "கிழக்கு சுவரில் எக்ஸாஸ்ட் ஃபேனை அமைக்கவும்."
                ]
            });
        } else if (dirLower === 'south') {
            remedies.push({
                title: "தெற்கு திசையில் சமையலறை.",
                suggestions: [
                    "பண இழப்பு மற்றும் குடும்ப மோதல்கள் ஏற்படலாம்.",
                    "அடுப்பை தெற்க்கிழக்கு மூலையில் கிழக்கை நோக்கி வைக்கவும்.",
                    "பிரகாசமான விளக்குகள் மற்றும் அக்னி நிறங்களை பயன்படுத்தவும்.",
                    "வடகிழக்கு மூலையில் வாஸ்து பைரமிட் வைக்கவும்.",
                    "அக்னி பகுதியில் தண்ணீர் அம்சங்களை தவிர்க்கவும்.",
                    "குளிர்சாதன பெட்டியை வடமேற்கு பகுதியில் வைக்கவும்."
                ]
            });
        } else if (dirLower === 'southwest') {
            remedies.push({
                title: "தென்மேற்கு திசையில் சமையலறை – மிகவும் முக்கியம்.",
                suggestions: [
                    "மிகவும் தவறான இடம் – கடுமையான உடல்நல பிரச்சனைகள் ஏற்படலாம்.",
                    "இயன்றால் சமையலறையை தெற்க்கிழக்கிற்கு மாற்றவும்.",
                    "தெற்க்கிழக்கில் அக்னி சின்னங்களை வைக்கவும்.",
                    "சிவப்பு அல்லது ஆரஞ்சு நிறங்களை தீர்வாக பயன்படுத்தவும்.",
                    "சமையலறையை மிகவும் சுத்தமாகவும் ஒழுங்காகவும் வைத்திருக்கவும்.",
                    "வடகிழக்கு பகுதியில் வாஸ்து பைரமிட் வைக்கவும்."
                ]
            });
        } else if (dirLower === 'west') {
            remedies.push({
                title: "மேற்கு திசையில் சமையலறை.",
                suggestions: [
                    "தேவையற்ற செலவுகள் அதிகரிக்க வாய்ப்புள்ளது.",
                    "அடுப்பை தெற்க்கிழக்கு மூலையில் கிழக்கை நோக்கி வைக்கவும்.",
                    "மஞ்சள் அல்லது வெள்ளை நிறங்களை சமநிலைக்காக பயன்படுத்தவும்.",
                    "வடக்கு அல்லது கிழக்கில் ஜன்னல்கள் இருக்குமாறு செய்யவும்.",
                    "சமையலறை சுவருக்கு அருகில் உறங்குவதை தவிர்க்கவும்.",
                    "தெற்க்கிழக்கு மூலையில் கிரிஸ்டல் வைக்கவும்."
                ]
            });
        } else if (dirLower === 'north') {
            remedies.push({
                title: "வடக்கு திசையில் சமையலறை.",
                suggestions: [
                    "பரிந்துரைக்கப்படாத இடம் – செல்வத்தை பாதிக்கலாம்.",
                    "அடுப்பை தெற்க்கிழக்கு பகுதியில் வைக்கவும்.",
                    "பச்சை அல்லது பழுப்பு நிறங்களை தீர்வாக பயன்படுத்தவும்.",
                    "சமையலறை கதவை எப்போதும் மூடப்பட்டிருக்கச் செய்யவும்.",
                    "தண்ணீர் கசிவு பிரச்சனைகளை தவிர்க்கவும்.",
                    "வடகிழக்கில் மணி பிளான்ட் வைக்கவும்."
                ]
            });
        } else if (dirLower === 'northeast') {
            remedies.push({
                title: "வடகிழக்கு திசையில் சமையலறை – மிக முக்கியமான தவறு.",
                suggestions: [
                    "மிகவும் தவறான இடம் – உடல்நலம் மற்றும் செழிப்பை பாதிக்கும்.",
                    "இயன்றால் உடனடியாக சமையலறையை மாற்றவும்.",
                    "தென்மேற்கு மூலையில் கனமான கல் வைக்கவும்.",
                    "தற்காலிக தீர்வாக அக்னி சின்னங்களை பயன்படுத்தவும்.",
                    "சமையலறையை மிக எளிமையாகவும் சுத்தமாகவும் வைத்திருக்கவும்.",
                    "முக்கிய மாற்றங்களுக்கு வாஸ்து நிபுணரை அணுகவும்."
                ]
            });
        }

        remedies.push({
            title: "பொதுவான சமையலறை வாஸ்து குறிப்புகள்.",
            suggestions: [
                "அடுப்பை நேருக்கு நேர் சிங்குடன் வைக்க வேண்டாம்.",
                "சமையலறைக்கு அருகில் கழிப்பறை கதைகள் இருக்கக்கூடாது.",
                "கூர்மையான பொருட்களை மூடிய அலமாரிகளில் வைத்திருக்கவும்.",
                "உடைந்த பாத்திரங்களை உடனே மாற்றவும்.",
                "குளிர்சாதன பெட்டியை தெற்க்கிழக்கு, மேற்கு அல்லது வடக்கில் வைக்கவும்.",
                "சரியான காற்றோட்டம் மற்றும் வெளிச்சம் இருக்குமாறு செய்யவும்."
            ]
        });
    }

    // Pooja
    else if (lowerName.includes('pooja') || lowerName.includes('puja') || 
        lowerName.includes('temple') || lowerName.includes('mandir') || 
        lowerName.includes('devagriha') || lowerName.includes('poojalaya') ||
        lowerName.includes('worship') || lowerName.includes('prayer')) {

        if (dirLower === 'south') {
            remedies.push({
                title: "தெற்கு திசையில் பூஜை அறை.",
                suggestions: [
                    "நல்ல சக்திக்காக குறிப்பிட்ட தீர்வுகள் தேவை.",
                    "சிலைகளை வடக்கு நோக்கி வைக்கவும்.",
                    "பிரகாசமான வெள்ளை விளக்குகளை பயன்படுத்தவும்.",
                    "அறையை மிகச் சுத்தமாக வைத்திருக்கவும்.",
                    "பணம் அல்லது நிதி ஆவணங்களை வைக்க வேண்டாம்.",
                    "நுழைவில் ஓம் சின்னம் வைக்கவும்."
                ]
            });
        }
    }


//Master Bedroom
else if (lowerName.includes('master') || lowerName.includes('parents') || 
         lowerName.includes('shayya') || lowerName.includes('sutra') || 
         lowerName.includes('main bedroom') || lowerName.includes('elders room') ||
         lowerName.includes('primary bedroom')) {
    
    if (dirLower === 'southwest') {
        remedies.push({
            title: "South-West (Nairutya) direction-ல் Master Bedroom – best placement.",
            suggestions: [
                "Master bedroom-க்கு இது தான் best direction.",
                "Bed-ஐ South-West corner-ல் வைத்து head South side-க்கு வைக்கவும்.",
                "South அல்லது West side-க்கு head வைத்து தூங்குவது stability தரும்.",
                "Brown, beige, dark blue மாதிரி earthy colors use செய்யவும்.",
                "இந்த room வீட்டிலேயே heavy room-ஆ இருக்கணும்.",
                "Wardrobe மற்றும் heavy furniture-ஐ South / West walls-க்கு place செய்யவும்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "South direction-ல் Master Bedroom.",
            suggestions: [
                "Stability மற்றும் health-க்கு நல்ல direction.",
                "Bed-ஐ South-West corner-ல் வைத்து South-க்கு face ஆக வைக்கவும்.",
                "Red, orange, pink மாதிரி warm colors use செய்யலாம்.",
                "Sleep பண்ணும்போது head South-க்கு இருக்கணும்.",
                "Heavy furniture-ஐ South wall-க்கு வைக்கவும்.",
                "South wall-ல் too many windows avoid செய்யவும்."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "West direction-ல் Master Bedroom.",
            suggestions: [
                "Master bedroom-க்கு acceptable direction.",
                "Creativity மற்றும் relaxation improve ஆகும்.",
                "White, grey, light blue மாதிரி light colors use செய்யவும்.",
                "West அல்லது South side-க்கு head வைத்து தூங்கவும்.",
                "Room-ன் South-West part-ல் bed place செய்யவும்.",
                "Bed-க்கு opposite-ஆ mirror வைக்காதீர்கள்."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "North-West direction-ல் Master Bedroom.",
            suggestions: [
                "Instability மற்றும் unnecessary travel issues வரலாம்.",
                "South-West corner-ல் heavy stone அல்லது pyramid வைக்கவும்.",
                "Brown அல்லது green மாதிரி stabilizing colors use செய்யவும்.",
                "West-க்கு head வைத்து தூங்கவும், North side avoid செய்யவும்.",
                "Room neat-ஆவும் clutter-free-ஆவும் வைத்திருக்கவும்.",
                "South-West corner-ல் couple photo வைக்கவும்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "South-East direction-ல் Master Bedroom.",
            suggestions: [
                "Arguments மற்றும் health issues வர chance உண்டு.",
                "North-West corner-ல் water bowl வைக்கவும்.",
                "Light blue அல்லது white மாதிரி cooling colors use செய்யவும்.",
                "Red மற்றும் bright colors bedroom-ல் avoid செய்யவும்.",
                "Electronic devices-ஐ minimum-ஆ வைத்திருக்கவும்.",
                "Bed-ஐ room-ன் South-West corner-ல் place செய்யவும்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "East direction-ல் Master Bedroom.",
            suggestions: [
                "Master bedroom-க்கு ideal இல்லை, kids room-க்கு better.",
                "Early wake-up மற்றும் restlessness feel ஆகலாம்.",
                "East windows-க்கு heavy curtains use செய்யவும்.",
                "South-West corner-ல் bed வைத்து South-க்கு face செய்யவும்.",
                "Light green அல்லது blue மாதிரி calm colors use செய்யவும்.",
                "Beam கீழ bed வைப்பதை avoid செய்யவும்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "North direction-ல் Master Bedroom.",
            suggestions: [
                "Married couples-க்கு recommend இல்லை.",
                "Relationship harmony affect ஆகலாம்.",
                "South-West corner-ல் heavy furniture place செய்யவும்.",
                "Warm earthy colors remedy-ஆ use செய்யலாம்.",
                "Head South-க்கு வைத்து மட்டுமே தூங்கவும்.",
                "South-West corner-ல் crystal வைக்கவும்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "North-East-ல் Master Bedroom – critical.",
            suggestions: [
                "Master bedroom-க்கு ரொம்ப negative placement.",
                "Health issues மற்றும் financial loss வர chance உண்டு.",
                "Possible என்றால் bedroom-ஐ South-West-க்கு shift செய்யவும்.",
                "North-East corner-ல் pyramid place செய்யவும்.",
                "Light blue அல்லது white colors use செய்யவும்.",
                "இந்த room-ஐ very clean-ஆவும் minimal-ஆவும் வைத்திருக்கவும்."
            ]
        });
    }
    
    // Additional general master bedroom remedies
    remedies.push({
        title: "General Master Bedroom Vastu tips.",
        suggestions: [
            "Bed-லிருந்து door clearly தெரியுமாறு bed place செய்யவும்.",
            "Open beam கீழ sleep பண்ணுவதை avoid செய்யவும்.",
            "Toilet door எப்போதும் closed-ஆ வைத்திருக்கவும்.",
            "Bed reflect ஆகும் mirrors avoid செய்யவும்.",
            "Solid wall-க்கு bed வைக்கவும் (toilet shared wall வேண்டாம்).",
            "Relationship strong ஆக pair items use செய்யவும்."
        ]
    });
}
    
//Living Hall
else if (lowerName.includes('living room') || lowerName.includes('drawing room') || 
         lowerName.includes('baithak') || lowerName.includes('sitting room') || 
         lowerName.includes('reception') || lowerName.includes('guest lounge') ||
         lowerName.includes('hall') || lowerName.includes('family room')) {
    
    if (dirLower === 'north') {
        remedies.push({
            title: "North direction-ல் Living Room – ideal placement.",
            suggestions: [
                "Wealth மற்றும் opportunities-க்கு excellent direction.",
                "Main seating-ஐ South-West அல்லது West side-ல் place செய்யவும்.",
                "Sitting போது North அல்லது East-க்கு face செய்யவும்.",
                "White, yellow, blue மாதிரி bright colors use செய்யவும்.",
                "North-East corner-ஐ open-ஆவும் clutter-free-ஆவும் வைத்திருக்கவும்.",
                "North-East-ல் water feature அல்லது fountain வைக்கலாம்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "East direction-ல் Living Room.",
            suggestions: [
                "Health மற்றும் family harmony-க்கு good direction.",
                "Morning sunlight மற்றும் positive energy கிடைக்கும்.",
                "Seating-ஐ North அல்லது East-க்கு face ஆக வைக்கவும்.",
                "Green, blue, white மாதிரி light colors use செய்யவும்.",
                "East wall-ஐ West wall-விட lighter-ஆ வைத்திருக்கவும்.",
                "North-East corner-ல் heavy furniture avoid செய்யவும்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "North-East (Ishanya)-ல் Living Room – best.",
            suggestions: [
                "Spiritual energy மற்றும் positivity-க்கு best direction.",
                "இந்த area-வை open, light, airy-ஆ வைத்திருக்கவும்.",
                "White, light yellow, light blue மாதிரி colors use செய்யவும்.",
                "Seating-ஐ North அல்லது East-க்கு face செய்யவும்.",
                "இந்த corner-ல் toilet, kitchen, heavy furniture வேண்டாம்.",
                "Prayer corner அல்லது meditation space-க்கு ideal."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "North-West direction-ல் Living Room.",
            suggestions: [
                "Guests மற்றும் social connections-க்கு good.",
                "Frequent visitors மற்றும் travel அதிகரிக்கலாம்.",
                "South-West corner-ல் heavy furniture place செய்யவும்.",
                "White, grey, silver மாதிரி metallic colors use செய்யவும்.",
                "North-East corner-ஐ light-ஆவும் open-ஆவும் வைத்திருக்கவும்.",
                "Stability-க்கு center-ல் Vastu pyramid வைக்கவும்."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "West direction-ல் Living Room.",
            suggestions: [
                "Creativity மற்றும் kids success support ஆகும்.",
                "Unnecessary expenses வர chance உண்டு.",
                "Energy balance-க்கு bright lighting use செய்யவும்.",
                "Seating-ஐ North அல்லது East-க்கு face செய்யவும்.",
                "Light colors + metallic accents use செய்யலாம்.",
                "Evening sunlight-க்கு windows clean-ஆ வைத்திருக்கவும்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "South direction-ல் Living Room.",
            suggestions: [
                "Positive energy-க்கு careful planning தேவை.",
                "Heavy furniture-ஐ South wall-க்கு place செய்யவும்.",
                "Red, orange, pink மாதிரி warm colors use செய்யவும்.",
                "South fire element என்பதால் proper lighting முக்கியம்.",
                "North-East corner-ஐ fully clean-ஆவும் open-ஆவும் வைத்திருக்கவும்.",
                "Possible என்றால் main entrance North அல்லது East-ல் இருக்கலாம்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "South-East direction-ல் Living Room.",
            suggestions: [
                "Arguments மற்றும் restlessness வரலாம்.",
                "Fire balance-க்கு North-East-ல் water feature வைக்கவும்.",
                "Blue, green, white மாதிரி cooling colors use செய்யவும்.",
                "Red மற்றும் bright colors decoration-ல் avoid செய்யவும்.",
                "Electronic devices-ஐ South-East corner-ல் place செய்யவும்.",
                "Heavy furniture-ஐ South-West side-ல் வைக்கவும்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "South-West direction-ல் Living Room – critical.",
            suggestions: [
                "Living room-க்கு ideal இல்லை, bedroom-க்கு better.",
                "Financial instability மற்றும் health issues வரலாம்.",
                "South-West corner-ல் heavy furniture place செய்யவும்.",
                "North-East-ல் bright lighting மற்றும் mirrors use செய்யவும்.",
                "Room center-ஐ open-ஆவும் clutter-free-ஆவும் வைத்திருக்கவும்.",
                "North-East corner-ல் crystal pyramid வைக்கவும்."
            ]
        });
    }
    
    // Additional general living room remedies
    remedies.push({
        title: "General Living Room Vastu tips.",
        suggestions: [
            "Main door living room-க்குள் clockwise-ஆ open ஆக வேண்டும்.",
            "Seating area மேல beams இருக்கக்கூடாது.",
            "TV-ஐ South-East corner-ல் place செய்யவும்.",
            "Room center-ஐ empty-ஆவும் clean-ஆவும் வைத்திருக்கவும்.",
            "Chairs / seating odd numbers-ல் (3, 5, 7) use செய்யவும்.",
            "Entrance opposite-ஆ mirrors place செய்வதை avoid செய்யவும்."
        ]
    });
}

    
//Bathroom
else if (lowerName.includes('bathroom') || lowerName.includes('toilet') || 
         lowerName.includes('bath room') || lowerName.includes('washroom') || 
         lowerName.includes('shower') || lowerName.includes('sauna') ||
         lowerName.includes('steam room') || lowerName.includes('snana') ||
         lowerName.includes('shauchalay') || lowerName.includes('restroom')) {
    
    if (dirLower === 'northwest') {
        remedies.push({
            title: "North-West திசையில் Bathroom – ஏற்றுக்கொள்ளக்கூடிய இடம்.",
            suggestions: [
                "Other directions-விட less harmful.",
                "Bathroom door எப்போதும் closed-ஆ வைத்திருக்கவும்.",
                "North அல்லது East wall-ல் exhaust fan install செய்யவும்.",
                "North-East corner-ல் small pyramid வைக்கவும்.",
                "White, blue, grey மாதிரி light colors use செய்யவும்.",
                "Proper ventilation மற்றும் cleanliness maintain செய்யவும்."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "West திசையில் Bathroom – மிதமான பாதிப்புடன் இருக்கும் இடம்.",
            suggestions: [
                "Moderately acceptable placement.",
                "Kids health மற்றும் success-ஐ affect செய்யலாம்.",
                "Use இல்லாத போது toilet seat cover closed-ஆ வைத்திருக்கவும்.",
                "Negative energy absorb செய்ய bathroom-ல் salt bowl வைக்கவும்.",
                "Energy balance-க்கு bright lighting use செய்யவும்.",
                "Leakage அல்லது clogging issues இல்லாமல் பார்த்துக்கொள்ளவும்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "South திசையில் Bathroom – கவனத்துடன் கையாள வேண்டிய இடம்.",
            suggestions: [
                "Financial loss மற்றும் reputation issues வரலாம்.",
                "Bathroom door outside side-ல் mirror place செய்யவும்.",
                "Bathroom floor-ல் red அல்லது brown colors use செய்யவும்.",
                "Bathroom-ஐ well-lit-ஆவும் ventilated-ஆவும் வைத்திருக்கவும்.",
                "Drainage area-ல் copper coin வைக்கவும்.",
                "Black அல்லது dark blue colors avoid செய்யவும்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "South-East திசையில் Bathroom – அக்னி & தண்ணீர் முரண்பாடு.",
            suggestions: [
                "Health issues மற்றும் financial instability வர chance உண்டு.",
                "Fire + water element conflict, ideal இல்லை.",
                "South-East corner-ல் green plant வைக்கவும்.",
                "White அல்லது light green colors remedy-ஆ use செய்யவும்.",
                "Bathroom door closed-ஆவும் windows open-ஆவும் வைத்திருக்கவும்.",
                "Bathroom door-ல் Swastik symbol வைக்கவும்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "South-West திசையில் Bathroom – மிக முக்கியமான குறை.",
            suggestions: [
                "Highly negative placement, health மற்றும் relationships பாதிக்கலாம்.",
                "Elders-க்கு serious health issues வரலாம்.",
                "Possible என்றால் bathroom-ஐ North-West-க்கு shift செய்யவும்.",
                "South-West corner-ல் heavy stone அல்லது pyramid வைக்கவும்.",
                "Bathroom-ஐ extremely clean-ஆவும் dry-ஆவும் வைத்திருக்கவும்.",
                "Bright lights மற்றும் regular ventilation use செய்யவும்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "East திசையில் Bathroom – ஆரோக்கியத்துக்கு பாதிப்பு தரும் இடம்.",
            suggestions: [
                "Health, prosperity, family harmony-ஐ affect செய்யும்.",
                "Morning sunlight மற்றும் positive energy block ஆகும்.",
                "Bathroom door outside side-ல் mirror place செய்யவும்.",
                "Yellow அல்லது white colors அதிகமா use செய்யவும்.",
                "East window எப்போதும் clean-ஆவும் open-ஆவும் வைத்திருக்கவும்.",
                "House North-East corner-ல் crystal place செய்யவும்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "North திசையில் Bathroom – பண வளர்ச்சிக்கு தடையாகும்.",
            suggestions: [
                "Wealth மற்றும் career opportunities block ஆகலாம்.",
                "Financial growth மற்றும் stability பாதிக்கலாம்.",
                "Bathroom outside money plant place செய்யவும்.",
                "Brass fittings மாதிரி metal elements use செய்யவும்.",
                "Bathroom door எப்போதும் closed-ஆ வைத்திருக்கவும்.",
                "Bathroom door-ல் Vastu yantra place செய்யவும்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "North-East திசையில் Bathroom – மிக மிக மோசமான இடம்.",
            suggestions: [
                "Extremely negative placement, life-ல எல்லா aspects-ஐ affect செய்யும்.",
                "Major health மற்றும் financial problems வரலாம்.",
                "Possible என்றால் bathroom-ஐ immediately shift செய்யவும்.",
                "North-East corner-ல் heavy pyramid place செய்யவும்.",
                "Bathroom-ஐ dry, clean, well-maintained-ஆ வைத்திருக்கவும்.",
                "Major correction-க்கு Vastu expert consult செய்யவும்."
            ]
        });
    }
    
    remedies.push({
        title: "பொதுவான Bathroom வாஸ்து குறிப்புகள்.",
        suggestions: [
            "Bathroom door எப்போதும் closed-ஆ வைத்திருக்கவும்.",
            "Leakage issues உடனே fix செய்யவும்.",
            "Use இல்லாத போது toilet seat cover down-ஆ வைத்திருக்கவும்.",
            "Proper ventilation மற்றும் sunlight ensure செய்யவும்.",
            "Mirrors-ஐ North அல்லது East walls-ல் மட்டும் place செய்யவும்.",
            "Bathroom-ஐ staircase கீழ அல்லது kitchen பக்கத்தில் avoid செய்யவும்."
        ]
    });
}
    
// Dining Hall
else if (lowerName.includes('dining') || lowerName.includes('bhajan kaksh') || 
         lowerName.includes('eating area') || lowerName.includes('food area') || 
         lowerName.includes('dining hall')) {
    
    if (dirLower === 'west') {
        remedies.push({
            title: "West திசையில் Dining Room – குடும்ப ஒற்றுமைக்கு சிறந்த இடம்.",
            suggestions: [
                "Family harmony மற்றும் digestion-க்கு excellent.",
                "Dining table-ஐ North-West அல்லது center-ல் place செய்யவும்.",
                "Eating போது East-க்கு face செய்யவும் for better health.",
                "Orange, pink, chocolate மாதிரி warm colors use செய்யவும்.",
                "Meals time-ல் dining area well-lit-ஆ இருக்கணும்.",
                "Dining area-க்கு மேல beams avoid செய்யவும்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "East திசையில் Dining Room – ஆரோக்கியம் தரும் இடம்.",
            suggestions: [
                "Health மற்றும் prosperity-க்கு good.",
                "Morning breakfast-க்கு sunlight perfect-ஆ இருக்கும்.",
                "Eating போது East அல்லது West-க்கு face செய்யலாம்.",
                "White, yellow, green மாதிரி light colors use செய்யவும்.",
                "Natural light-க்கு windows clean-ஆ வைத்திருக்கவும்.",
                "Water dispenser-ஐ North-East-ல் place செய்யவும்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "North திசையில் Dining Room – செல்வ வளர்ச்சிக்கு உதவும்.",
            suggestions: [
                "Wealth மற்றும் abundance promote ஆகும்.",
                "Dining table-ஐ North-West section-ல் place செய்யவும்.",
                "Eating போது East அல்லது North-க்கு face செய்யவும்.",
                "Blue, green, silver மாதிரி colors use செய்யலாம்.",
                "Dining area clutter-free-ஆ வைத்திருக்கவும்.",
                "North-East corner-ல் place செய்வதை avoid செய்யவும்."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "North-West திசையில் Dining Room – விருந்தினர்களுக்கு ஏற்றது.",
            suggestions: [
                "Guests மற்றும் social dining-க்கு good.",
                "Irregular eating habits develop ஆகலாம்.",
                "South-West-ல் heavy furniture place செய்யவும்.",
                "White அல்லது light yellow colors use செய்யவும்.",
                "Dining table square அல்லது rectangular shape-ஆ இருக்கலாம்.",
                "Circular tables இந்த direction-ல் avoid செய்யவும்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "South திசையில் Dining Room – செரிமான சிக்கல் வரலாம்.",
            suggestions: [
                "Digestive issues வர chance உண்டு.",
                "Dining table-ஐ South-West corner-ல் place செய்யவும்.",
                "Eating போது North-க்கு face செய்ய remedy-ஆ use செய்யவும்.",
                "White அல்லது cream மாதிரி light colors use செய்யவும்.",
                "South wall North wall-விட heavier-ஆ இருக்கணும்.",
                "Dining area-ல் red colors avoid செய்யவும்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "South-East திசையில் Dining Room – அக்னி முரண்பாடு உள்ள இடம்.",
            suggestions: [
                "Fire element food-உடன் conflict ஆகும்.",
                "Meals போது arguments வர chance உண்டு.",
                "Balance-க்கு North-East-ல் water feature place செய்யவும்.",
                "Blue அல்லது white மாதிரி cooling colors use செய்யவும்.",
                "Dining area well-ventilated-ஆ வைத்திருக்கவும்.",
                "Kitchen fire பக்கத்தில் place செய்வதை avoid செய்யவும்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "South-West திசையில் Dining Room – பரிந்துரைக்கப்படாத இடம்.",
            suggestions: [
                "Ideal இல்லை, weight issues வரலாம்.",
                "Master bedroom-க்கு இந்த direction better.",
                "Dining table-ஐ North-West part-ல் place செய்யவும்.",
                "Light colors + heavy furniture balance-ஆ use செய்யவும்.",
                "Area bright-ஆவும் cheerful-ஆவும் வைத்திருக்கவும்.",
                "Decoration-ல் dark colors avoid செய்யவும்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "North-East திசையில் Dining Room – மிக முக்கியமான குறை.",
            suggestions: [
                "Dining-க்கு highly negative placement.",
                "Health மற்றும் prosperity-ஐ affect செய்யும்.",
                "Possible என்றால் dining area shift செய்யவும்.",
                "North-East corner-ல் pyramid place செய்யவும்.",
                "White marble அல்லது tiles use செய்யவும்.",
                "Area extremely clean-ஆவும் minimal-ஆவும் வைத்திருக்கவும்."
            ]
        });
    }
    
    remedies.push({
        title: "பொதுவான Dining Room வாஸ்து குறிப்புகள்.",
        suggestions: [
            "Eating போது East அல்லது North-க்கு face செய்யவும்.",
            "Dining table-ஐ toilet பக்கத்தில் வைக்காதீர்கள்.",
            "Dining table reflect ஆகும் mirrors avoid செய்யவும்.",
            "Food serve East side-லிருந்து செய்யவும்.",
            "Dining area well-ventilated-ஆ வைத்திருக்கவும்.",
            "Staircase கீழ dining area place செய்வதை avoid செய்யவும்."
        ]
    });
}

    
//Study Room
else if (lowerName.includes('study') || lowerName.includes('library') || 
         lowerName.includes('reading room') || lowerName.includes('path kaksh') || 
         lowerName.includes('office') || lowerName.includes('home office') ||
         lowerName.includes('gyan kaksh')) {
    
    if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் படிப்பு அறை – சிறந்த இடம்.",
            suggestions: [
                "கவனம், நினைவாற்றல் மற்றும் அறிவு வளர்ச்சிக்கு மிகச் சிறந்த திசை.",
                "வடகிழக்கு மூலையில் படிப்பு மேசையை வைத்து கிழக்கை நோக்கி அமரவும்.",
                "படிக்கும் போது கிழக்கு அல்லது வடக்கு நோக்கி அமர்வது கவனத்தை அதிகரிக்கும்.",
                "வெள்ளை, இளமஞ்சள் அல்லது இளநீலம் போன்ற லைட் நிறங்களை பயன்படுத்தவும்.",
                "அறையை வெளிச்சமாகவும் குழப்பமில்லாமலும் வைத்திருக்கவும்.",
                "புத்தக அலமாரிகளை தெற்கு அல்லது மேற்கு சுவரில் வைக்கவும்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் படிப்பு அறை.",
            suggestions: [
                "மாணவர்கள் மற்றும் போட்டித் தேர்வுகளுக்கு நல்ல திசை.",
                "காலை நேர சூரிய ஒளியுடன் படிப்பதற்கு ஏற்ற இடம்.",
                "படிக்கும் போது கிழக்கை நோக்கி அமர்வது மன தெளிவை தரும்.",
                "பச்சை, இளநீலம் அல்லது வெள்ளை நிறங்களை பயன்படுத்தவும்.",
                "இயற்கை ஒளிக்காக ஜன்னல்களை சுத்தமாக வைத்திருக்கவும்.",
                "அறையின் வடகிழக்கு மூலையில் படிப்பு மேசையை வைக்கவும்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் படிப்பு அறை.",
            suggestions: [
                "வேலை வளர்ச்சி மற்றும் புதிய வாய்ப்புகளுக்கு உதவும்.",
                "அறிவுத்திறன் மற்றும் புத்திசாலித்தனத்தை மேம்படுத்தும்.",
                "வேலை செய்யும் அல்லது படிக்கும் போது கிழக்கு அல்லது வடக்கு நோக்கி அமரவும்.",
                "நீலம், பச்சை அல்லது வெள்ளை நிறங்களை பயன்படுத்தலாம்.",
                "வடகிழக்கு மூலையை திறந்ததாகவும் சுத்தமாகவும் வைத்திருக்கவும்.",
                "செல்வ அம்சத்திற்காக குபேரர் சிலையை வைக்கலாம்."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் படிப்பு அறை.",
            suggestions: [
                "ஆராய்ச்சி மற்றும் படைப்பாற்றல் பணிகளுக்கு ஏற்றது.",
                "வேலை முடிவுகளில் தாமதம் ஏற்பட வாய்ப்பு உள்ளது.",
                "படிப்பு மேசையை கிழக்கு அல்லது வடக்கு நோக்கி வைக்கவும்.",
                "மஞ்சள் அல்லது வெள்ளை நிறங்களை சமநிலைக்காக பயன்படுத்தவும்.",
                "மாலை நேர படிப்புக்கு போதிய வெளிச்சம் இருக்குமாறு செய்யவும்.",
                "புத்தக அலமாரிகளை தெற்கு அல்லது மேற்கு சுவரில் வைக்கவும்."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் படிப்பு அறை.",
            suggestions: [
                "தொடர்பு மற்றும் நெட்வொர்க்கிங் பணிகளுக்கு நல்லது.",
                "கவனம் சிதறல் மற்றும் இடையூறு ஏற்படலாம்.",
                "வடகிழக்கு மூலையில் கிரிஸ்டல் பைரமிட் வைக்கவும்.",
                "லைட் நிறங்களுடன் உலோக அம்சங்களை பயன்படுத்தலாம்.",
                "முழு கவனம் தேவைப்படும் போது கதவை மூடி வைத்திருக்கவும்.",
                "படிப்பு மேசையை கிழக்கை நோக்கி வைக்கவும்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் படிப்பு அறை.",
            suggestions: [
                "கவனக் குறைவு ஏற்படக்கூடிய திசை.",
                "வடகிழக்கு மூலையில் படிப்பு மேசையை வைத்து வடக்கு நோக்கி அமரவும்.",
                "வெள்ளை அல்லது இளப்பச்சை நிறங்களை பயன்படுத்தவும்.",
                "கனத்தன்மையை சமநிலைப்படுத்த பிரகாசமான விளக்குகள் அவசியம்.",
                "தெற்கு சுவர் வடக்கு சுவரை விட கனமாக இருக்க வேண்டும்.",
                "சிவப்பு அல்லது இருண்ட நிறங்களை தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் படிப்பு அறை.",
            suggestions: [
                "அமைதியின்மை மற்றும் அவசரம் ஏற்படலாம்.",
                "அக்னி தத்துவம் அதிகமாக இருப்பதால் அமைதியான படிப்புக்கு ஏற்றது அல்ல.",
                "வடகிழக்கில் தண்ணீர் அம்சம் அல்லது நீல நிற பொருட்களை வைக்கவும்.",
                "நீலம் அல்லது வெள்ளை போன்ற குளிர்ச்சியான நிறங்களை பயன்படுத்தவும்.",
                "மின்னணு சாதனங்களை ஒழுங்காக வைத்திருக்கவும்.",
                "படிப்பு மேசையை கிழக்கு அல்லது வடக்கு நோக்கி வைக்கவும்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் படிப்பு அறை – முக்கிய குறை.",
            suggestions: [
                "படிப்புக்கு மிகக் குறைவாக பரிந்துரைக்கப்படும் திசை.",
                "மன அழுத்தம் மற்றும் தடைகள் ஏற்படலாம்.",
                "இயன்றால் படிப்பு அறையை வடகிழக்கிற்கு மாற்றவும்.",
                "வடகிழக்கு மூலையில் பைரமிட் வைக்கவும்.",
                "மிக இளநிறங்கள் மற்றும் அதிக வெளிச்சம் பயன்படுத்தவும்.",
                "அறையை மிகச் சீராகவும் குறைந்த பொருட்களுடன் வைத்திருக்கவும்."
            ]
        });
    }
    
    remedies.push({
        title: "பொதுவான படிப்பு அறை வாஸ்து குறிப்புகள்.",
        suggestions: [
            "படிக்கும் அல்லது வேலை செய்யும் போது கிழக்கு அல்லது வடக்கு நோக்கி அமரவும்.",
            "படிப்பு மேசையை உறுதியான சுவரை ஒட்டி வைக்கவும்.",
            "புத்தக அலமாரிகளை தெற்கு அல்லது மேற்கு சுவரில் வைக்கவும்.",
            "நிழல் இல்லாத சரியான வெளிச்சம் இருக்குமாறு செய்யவும்.",
            "படிப்பு மேசையை பிரதிபலிக்கும் கண்ணாடிகள் வேண்டாம்.",
            "அறையை அமைதியாகவும் காற்றோட்டத்துடன் வைத்திருக்கவும்."
        ]
    });
}

//Children Room
else if (lowerName.includes('children') || lowerName.includes('kids room') || 
         lowerName.includes('bal kaksh') || lowerName.includes('boys room') || 
         lowerName.includes('girls room') || lowerName.includes('child bedroom')) {
    
    if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் குழந்தைகள் அறை – சிறந்த இடம்.",
            suggestions: [
                "படைப்பாற்றல் மற்றும் கல்வி வெற்றிக்கு உதவும்.",
                "நல்ல தூக்கம் மற்றும் உடல் வளர்ச்சியை ஆதரிக்கும்.",
                "தென்மேற்கு மூலையில் படுக்கையை வைத்து மேற்கு நோக்கி தலை வைத்துத் தூங்கவும்.",
                "நீலம், பச்சை அல்லது மஞ்சள் போன்ற மகிழ்ச்சியான நிறங்களை பயன்படுத்தவும்.",
                "வடகிழக்கு மூலையில் படிப்பு இடத்தை அமைக்கவும்.",
                "கலை மற்றும் சிருஷ்டி விருப்பம் உள்ள குழந்தைகளுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் குழந்தைகள் அறை.",
            suggestions: [
                "சுறுசுறுப்பான மற்றும் சமூகமாக பழகும் குழந்தைகளுக்கு நல்லது.",
                "அமைதியின்மை மற்றும் அதிக நண்பர்கள் வருகை இருக்கலாம்.",
                "தென்மேற்கு மூலையில் படுக்கையை வைத்து மேற்கு நோக்கி வைக்கவும்.",
                "இளநீலம் அல்லது இளப்பச்சை போன்ற அமைதியான நிறங்களை பயன்படுத்தவும்.",
                "வடகிழக்கு மூலையில் படிப்பு மேசையை வைக்கவும்.",
                "ஒழுக்கம் மற்றும் தினசரி ஒழுங்கை கடைப்பிடிக்கவும்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் குழந்தைகள் அறை.",
            suggestions: [
                "காலை சீக்கிரம் எழும் குழந்தைகள் மற்றும் படிப்பு கவனத்திற்கு சிறந்தது.",
                "ஒழுக்கம் மற்றும் கவனத்தை வளர்க்கும்.",
                "தெற்க்கிழக்கு மூலையில் படுக்கையை வைத்து கிழக்கை நோக்கி தலை வைத்துத் தூங்கவும்.",
                "மஞ்சள், ஆரஞ்சு அல்லது வெள்ளை போன்ற பிரகாசமான நிறங்களை பயன்படுத்தவும்.",
                "காலை சூரிய ஒளியுடன் படிப்பு இடம் அமைக்க ஏற்றது.",
                "புதிய சக்திக்காக நல்ல காற்றோட்டம் அவசியம்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் குழந்தைகள் அறை.",
            suggestions: [
                "மொத்த வளர்ச்சி மற்றும் முன்னேற்றத்திற்கு நல்லது.",
                "புத்திசாலித்தனம் மற்றும் கற்றல் திறனை மேம்படுத்தும்.",
                "வடமேற்கு மூலையில் படுக்கையை வைத்து கிழக்கை நோக்கி வைக்கவும்.",
                "நீலம், பச்சை அல்லது வெள்ளை போன்ற லைட் நிறங்களை பயன்படுத்தவும்.",
                "வடகிழக்கு மூலையில் படிப்பு இடத்தை அமைக்கவும்.",
                "வடகிழக்கில் கனமான பொருட்களை தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் குழந்தைகள் அறை.",
            suggestions: [
                "குழந்தைகள் பிடிவாதமாக அல்லது கோபமாக மாறலாம்.",
                "தென்மேற்கு மூலையில் படுக்கையை வைத்து தெற்கு நோக்கி தலை வைத்துத் தூங்கவும்.",
                "இளநீலம் அல்லது இளப்பச்சை போன்ற அமைதியான நிறங்களை பயன்படுத்தவும்.",
                "வடகிழக்கு மூலையில் படிப்பு மேசையை கிழக்கை நோக்கி வைக்கவும்.",
                "நல்ல வெளிச்சம் மற்றும் காற்றோட்டம் இருக்குமாறு செய்யவும்.",
                "இருண்ட நிறங்களை அலங்காரத்தில் தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் குழந்தைகள் அறை.",
            suggestions: [
                "அதிக சுறுசுறுப்பு மற்றும் அமைதியின்மை ஏற்படலாம்.",
                "அறையின் தென்மேற்கு பகுதியில் படுக்கையை வைக்கவும்.",
                "வெள்ளை அல்லது இளநீலம் போன்ற குளிர்ச்சியான நிறங்களை பயன்படுத்தவும்.",
                "மின்னணு சாதனங்களை குறைவாக வைத்திருக்கவும்.",
                "வடகிழக்கு மூலையில் படிப்பு இடத்தை அமைக்கவும்.",
                "சிவப்பு அல்லது மிக பிரகாசமான நிறங்களை தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் குழந்தைகள் அறை – பரிந்துரைக்கப்படாத இடம்.",
            suggestions: [
                "சோம்பேறித்தனம் அல்லது கட்டுப்பாடின்மை ஏற்படலாம்.",
                "இந்த திசை பெற்றோர் அறைக்கு அதிகம் ஏற்றது.",
                "தென்மேற்கு மூலையில் படுக்கையை வைத்து தெற்கு நோக்கி வைக்கவும்.",
                "லைட் நிறங்களும் நல்ல வெளிச்சமும் பயன்படுத்தவும்.",
                "வடகிழக்கு மூலையில் படிப்பு இடத்தை அமைக்கவும்.",
                "அறையை ஒழுங்காக வைத்திருக்கவும்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் குழந்தைகள் அறை – முக்கிய குறை.",
            suggestions: [
                "குழந்தைகள் அறைக்கு மிகவும் தவறான இடம்.",
                "உடல்நலம் மற்றும் கவனத்தில் பிரச்சனைகள் ஏற்படலாம்.",
                "இயன்றால் அறையை மேற்கு அல்லது வடமேற்கிற்கு மாற்றவும்.",
                "வடகிழக்கு மூலையில் பைரமிட் வைக்கவும்.",
                "மிக இளநிறங்கள் மற்றும் அதிக வெளிச்சம் பயன்படுத்தவும்.",
                "அறையை மிகவும் சுத்தமாகவும் குறைந்த பொருட்களுடன் வைத்திருக்கவும்."
            ]
        });
    }
    
    remedies.push({
        title: "பொதுவான குழந்தைகள் அறை வாஸ்து குறிப்புகள்.",
        suggestions: [
            "படிப்பு மேசையை கிழக்கு அல்லது வடக்கு திசையில் அமைக்கவும்.",
            "தூங்கும் போது தலை கிழக்கு அல்லது தெற்கு நோக்கி இருக்க வேண்டும்.",
            "அறையை நிறமுள்ளதாக வைத்தாலும் மிக அதிகமாக இருக்க வேண்டாம்.",
            "படுக்கையை பிரதிபலிக்கும் கண்ணாடிகள் வேண்டாம்.",
            "விளையாட்டு பொருட்களை மூடிய சேமிப்பில் வைத்திருக்கவும்.",
            "படிப்பு இடத்திற்கு போதிய வெளிச்சம் இருக்குமாறு செய்யவும்."
        ]
    });
}

    
// Guest Room
else if (lowerName.includes('guest bedroom') || lowerName.includes('atithi kaksh') || 
         lowerName.includes('visitor room') || lowerName.includes('guest room') ||
         lowerName.includes('paying guest room')) {
    
    if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் விருந்தினர் அறை – மிகச் சிறந்த இடம்.",
            suggestions: [
                "விருந்தினர் அறைக்கு மிகவும் பொருத்தமான திசை.",
                "விருந்தினர்கள் சுகமாகவும் குறுகிய காலத்திலும் தங்க உதவும்.",
                "தென்மேற்கு மூலையில் படுக்கையை வைத்து மேற்கு நோக்கி தலை வைத்திருக்கவும்.",
                "வெள்ளை, சாம்பல் அல்லது இளநீலம் போன்ற லைட் நிறங்களை பயன்படுத்தவும்.",
                "விருந்தினர்களுக்கு சௌகரியம் தரும் ஆனால் அதிக நாட்கள் தங்க வைக்காது.",
                "குடும்ப தனியுரிமையை பாதுகாக்க உதவும்."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் விருந்தினர் அறை.",
            suggestions: [
                "விருந்தினர் தங்குவதற்கு ஏற்ற இடம்.",
                "விருந்தினர்களுக்கு சுகமான தங்குமிடம் வழங்கும்.",
                "தென்மேற்கு மூலையில் படுக்கையை வைத்து மேற்கு நோக்கி வைக்கவும்.",
                "இளப்பச்சை அல்லது இளநீலம் போன்ற அமைதியான நிறங்களை பயன்படுத்தவும்.",
                "நல்ல காற்றோட்டமும் வெளிச்சமும் இருக்குமாறு செய்யவும்.",
                "அறையை சுத்தமாகவும் வரவேற்பாகவும் வைத்திருக்கவும்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் விருந்தினர் அறை.",
            suggestions: [
                "விருந்தினர் அறைக்கு ஏற்றுக்கொள்ளக்கூடிய திசை.",
                "விருந்தினர்கள் திட்டமிட்டதை விட நீண்ட நாட்கள் தங்கலாம்.",
                "வடமேற்கு மூலையில் படுக்கையை வைத்து கிழக்கு நோக்கி வைக்கவும்.",
                "வெள்ளை அல்லது இளநீலம் போன்ற லைட் நிறங்களை பயன்படுத்தவும்.",
                "அறையை ஒழுங்காகவும் குழப்பமில்லாமலும் வைத்திருக்கவும்.",
                "அதிகமான குடும்ப தனிப்பட்ட பொருட்களை வைக்க வேண்டாம்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் விருந்தினர் அறை.",
            suggestions: [
                "விருந்தினர்களுக்கு அமைதியின்மை ஏற்படலாம்.",
                "சிலர் அவசரமாக வெளியே செல்ல விரும்பலாம்.",
                "அறையின் தென்மேற்கு மூலையில் படுக்கையை வைக்கவும்.",
                "வெள்ளை அல்லது இளநீலம் போன்ற குளிர்ச்சியான நிறங்களை பயன்படுத்தவும்.",
                "மின்னணு சாதனங்களை குறைவாக வைத்திருக்கவும்.",
                "நல்ல காற்றோட்டம் இருக்குமாறு செய்யவும்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் விருந்தினர் அறை.",
            suggestions: [
                "விருந்தினர்கள் அதிக நாட்கள் தங்கும் வாய்ப்பு உள்ளது.",
                "அதிக சார்பு அல்லது பழக்கம் உருவாகலாம்.",
                "தென்மேற்கு மூலையில் படுக்கையை வைத்து தெற்கு நோக்கி வைக்கவும்.",
                "சக்தியை சமநிலைப்படுத்த லைட் நிறங்களை பயன்படுத்தவும்.",
                "அறையை எளிமையாகவும் பயன்பாட்டிற்கு ஏற்றதாகவும் வைத்திருக்கவும்.",
                "நீண்ட தங்குதலுக்கு மிக அதிக சௌகரியம் செய்ய வேண்டாம்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் விருந்தினர் அறை.",
            suggestions: [
                "குடும்ப உறுப்பினர்களுக்கான அறைக்கு இது சிறந்தது.",
                "விருந்தினர்கள் அதிகமாக வசதியாக உணரலாம்.",
                "தெற்க்கிழக்கு மூலையில் படுக்கையை வைத்து கிழக்கு நோக்கி வைக்கவும்.",
                "வெள்ளை அல்லது கிரீம் போன்ற லைட் நிறங்களை பயன்படுத்தவும்.",
                "அலங்காரங்களை குறைவாகவும் சாதாரணமாகவும் வைத்திருக்கவும்.",
                "குடும்ப புகைப்படங்கள் அல்லது தனிப்பட்ட பொருட்களை தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் விருந்தினர் அறை – முக்கிய குறை.",
            suggestions: [
                "விருந்தினர் அறைக்கு மிகவும் பொருத்தமற்ற இடம்.",
                "விருந்தினர்களுக்கு உடல்நல பிரச்சனைகள் ஏற்படலாம்.",
                "இந்த திசை பெற்றோர் அல்லது முதன்மை அறைக்கு ஏற்றது.",
                "தென்மேற்கு மூலையில் படுக்கையை வைத்து தெற்கு நோக்கி வைக்கவும்.",
                "லைட் நிறங்களும் நல்ல வெளிச்சமும் பயன்படுத்தவும்.",
                "விருந்தினர் வருகையை குறுகிய காலத்திற்கு மட்டும் வைத்திருக்கவும்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் விருந்தினர் அறை – மிக மிக மோசமான இடம்.",
            suggestions: [
                "விருந்தினர் அறைக்கு மிகவும் தவறான திசை.",
                "குடும்ப ஆரோக்கியம் மற்றும் செல்வ நிலையை பாதிக்கலாம்.",
                "இயன்றால் உடனடியாக விருந்தினர் அறையை மாற்றவும்.",
                "வடகிழக்கு மூலையில் பைரமிட் வைக்கவும்.",
                "வெள்ளை நிறங்களையும் மிகச் சுத்தத்தையும் பயன்படுத்தவும்.",
                "விருந்தினர்கள் நீண்ட நாட்கள் தங்குவதை தவிர்க்கவும்."
            ]
        });
    }
    
    remedies.push({
        title: "பொதுவான விருந்தினர் அறை வாஸ்து குறிப்புகள்.",
        suggestions: [
            "அறையை எப்போதும் சுத்தமாகவும் ஒழுங்காகவும் வைத்திருக்கவும்.",
            "நடுநிலை நிறங்களும் சாதாரண அலங்காரங்களும் பயன்படுத்தவும்.",
            "குடும்ப புகைப்படங்கள் அல்லது மதிப்புள்ள பொருட்களை வைக்க வேண்டாம்.",
            "நல்ல காற்றோட்டமும் வெளிச்சமும் உறுதி செய்யவும்.",
            "இயன்றால் இணைந்த கழிப்பறை வசதி இருக்கலாம்.",
            "குடும்ப முக்கிய பகுதிகளில் இருந்து தனியுரிமை வைத்திருக்கவும்."
        ]
    });
}

// Yoga / Meditation Room
else if (lowerName.includes('meditation') || lowerName.includes('dhyan kaksh') || 
         lowerName.includes('yoga room') || lowerName.includes('meditation hall') || 
         lowerName.includes('yogashala') || lowerName.includes('Meditation Room')) {
    
    if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் தியான / யோகா அறை – மிகச் சிறந்த இடம்.",
            suggestions: [
                "ஆன்மீக பயிற்சிகளுக்கு மிக உகந்த திசை.",
                "கவனம் மற்றும் உள்ளார்ந்த அமைதியை அதிகரிக்கும்.",
                "தியானம் செய்யும் போது கிழக்கு அல்லது வடக்கு நோக்கி அமரவும்.",
                "வெள்ளை, இளமஞ்சள் அல்லது இளநீலம் போன்ற சுத்தமான நிறங்களை பயன்படுத்தவும்.",
                "அறையை முழுமையாக சுத்தமாகவும் குழப்பமில்லாமலும் வைத்திருக்கவும்.",
                "வடகிழக்கு மூலையில் தியான இருக்கையை அமைக்கவும்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் தியான / யோகா அறை.",
            suggestions: [
                "காலை தியானத்திற்கும் சூரிய சக்திக்கும் சிறந்தது.",
                "புதிய தொடக்கம் மற்றும் மன தெளிவை அளிக்கும்.",
                "தியானத்தின் போது கிழக்கை நோக்கி அமர்வது சிறந்த பலன் தரும்.",
                "வெள்ளை, இளப்பச்சை அல்லது மங்கிய மஞ்சள் நிறங்களை பயன்படுத்தவும்.",
                "காலை சூரிய ஒளிக்காக ஜன்னல்களை சுத்தமாக வைத்திருக்கவும்.",
                "யோகா மற்றும் பிராணாயாம பயிற்சிகளுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் தியான / யோகா அறை.",
            suggestions: [
                "ஆன்மீக வளர்ச்சி மற்றும் ஞானத்தை மேம்படுத்தும்.",
                "கற்றல் மற்றும் அறிவாற்றலை அதிகரிக்கும்.",
                "பயிற்சியின் போது வடக்கு அல்லது கிழக்கு நோக்கி அமரவும்.",
                "இளநீலம், வெள்ளை அல்லது வெள்ளி நிறங்களை பயன்படுத்தவும்.",
                "வடகிழக்கு மூலையை திறந்ததும் புனிதமானதாகவும் வைத்திருக்கவும்.",
                "ஆன்மீக புத்தகங்களை வடக்கு பகுதியில் வைக்கலாம்."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் தியான / யோகா அறை.",
            suggestions: [
                "மாலை நேர தியானத்திற்கு ஏற்றது.",
                "உளைச்சல் குறைப்பு மற்றும் தளர்ச்சிக்கு உதவும்.",
                "தியானத்தின் போது கிழக்கு அல்லது வடக்கு நோக்கி அமரவும்.",
                "இளநீலம் அல்லது வெள்ளை போன்ற அமைதியான நிறங்களை பயன்படுத்தவும்.",
                "அமைதியான சூழலும் நல்ல காற்றோட்டமும் உறுதி செய்யவும்.",
                "சூரிய அஸ்தமன தியானத்திற்கு நல்லது."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் தியான / யோகா அறை.",
            suggestions: [
                "கவனம் சிதறல் மற்றும் மன ஓட்டம் அதிகரிக்கலாம்.",
                "வடகிழக்கு மூலையில் தியான இருக்கையை அமைக்கவும்.",
                "வெள்ளை நிறங்களும் மிகக் குறைந்த அலங்காரமும் பயன்படுத்தவும்.",
                "பயிற்சியின் போது கதவை மூடி வைத்திருக்கவும்.",
                "வடகிழக்கில் கிரிஸ்டல் பைரமிட் வைக்கவும்.",
                "அதிகமான ஜன்னல்கள் அல்லது திறப்புகளை தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் தியான / யோகா அறை.",
            suggestions: [
                "ஆன்மீக பயிற்சிகளுக்கு மிக உகந்ததல்ல.",
                "கனத்தன்மை மற்றும் கவனக் குறைவு ஏற்படலாம்.",
                "வடக்கு அல்லது கிழக்கு நோக்கி தியான இருக்கையை வைக்கவும்.",
                "மிக இளநிறங்களும் பிரகாசமான வெளிச்சமும் பயன்படுத்தவும்.",
                "தெற்கு சுவரை எளிமையாக வைத்திருக்கவும்.",
                "வடகிழக்கில் ஆன்மீக சின்னங்களை வைக்கவும்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் தியான / யோகா அறை.",
            suggestions: [
                "அக்னி தத்துவம் தியான அமைதியை குலைக்கலாம்.",
                "அமைதியின்மை மற்றும் பதற்றம் ஏற்படலாம்.",
                "வடகிழக்கு மூலையில் தண்ணீர் அம்சம் வைக்கவும்.",
                "வெள்ளை அல்லது இளநீலம் போன்ற குளிர்ச்சியான நிறங்களை பயன்படுத்தவும்.",
                "அறையை குளிர்ச்சியாகவும் நல்ல காற்றோட்டத்துடன் வைத்திருக்கவும்.",
                "சிவப்பு அல்லது மிக பிரகாசமான நிறங்களை தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் தியான / யோகா அறை – முக்கிய குறை.",
            suggestions: [
                "தியானத்திற்கு மிகக் குறைவாக பரிந்துரைக்கப்படும் திசை.",
                "எதிர்மறை எண்ணங்கள் மற்றும் தடைகள் ஏற்படலாம்.",
                "இயன்றால் அறையை வடகிழக்கிற்கு மாற்றவும்.",
                "வடகிழக்கு மூலையில் பைரமிட் வைக்கவும்.",
                "முழு அறையிலும் தூய வெள்ளை நிறங்களை பயன்படுத்தவும்.",
                "அறையை மிகவும் எளிமையாகவும் சுத்தமாகவும் வைத்திருக்கவும்."
            ]
        });
    }
    
    remedies.push({
        title: "பொதுவான தியான / யோகா அறை வாஸ்து குறிப்புகள்.",
        suggestions: [
            "தியானம் செய்யும் போது கிழக்கு அல்லது வடக்கு நோக்கி அமரவும்.",
            "அறையை முழுமையாக அமைதியாகவும் சுத்தமாகவும் வைத்திருக்கவும்.",
            "இயற்கை பொருட்களும் குறைந்த அலங்காரமும் பயன்படுத்தவும்.",
            "தியான இருக்கையை கம்பளி அல்லது மேட்டில் வைக்கவும்.",
            "நல்ல காற்றோட்டம் உறுதி செய்யவும்.",
            "தியான இடத்தில் மின்னணு சாதனங்களை தவிர்க்கவும்."
        ]
    });
}

// Store Room
else if (lowerName.includes('store room') || lowerName.includes('storage') || 
         lowerName.includes('godown') || lowerName.includes('bhandara griha') || 
         lowerName.includes('storage area')) {
    
    if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் ஸ்டோர் ரூம் – மிகவும் சிறந்த இடம்.",
            suggestions: [
                "சேமிப்பு அறைக்கான மிகச் சரியான திசை.",
                "கனமான பொருட்களை தென்மேற்கு மூலையில் வைக்கவும்.",
                "பழுப்பு, சாம்பல் அல்லது அடர் நீலம் போன்ற இருண்ட நிறங்களை பயன்படுத்தவும்.",
                "மதிப்புள்ள பொருட்களை தெற்கு அல்லது மேற்கு பகுதிகளில் வைக்கவும்.",
                "தானியங்கள், ஆவணங்கள் மற்றும் மதிப்புள்ள பொருட்கள் சேமிக்க ஏற்றது.",
                "அறையை எப்போதும் சுத்தமாகவும் ஒழுங்காகவும் வைத்திருக்கவும்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் ஸ்டோர் ரூம்.",
            suggestions: [
                "சேமிப்பு பயன்பாட்டிற்கு ஏற்ற திசை.",
                "கனமான பொருட்களை தெற்கு சுவரை ஒட்டி வைக்கவும்.",
                "சிவப்பு, பழுப்பு அல்லது ஆரஞ்சு போன்ற சூடான நிறங்களை பயன்படுத்தவும்.",
                "எரியும் தன்மை உள்ள பொருட்களை தெற்க்கிழக்கு பகுதியில் வைக்கவும்.",
                "ஈரப்பதம் வராமல் நல்ல காற்றோட்டம் இருக்குமாறு செய்யவும்.",
                "பொருட்களை ஒழுங்காக அடுக்கி வைத்திருக்கவும்."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் ஸ்டோர் ரூம்.",
            suggestions: [
                "சேமிப்பு அறைக்கு ஏற்றுக்கொள்ளக்கூடிய இடம்.",
                "உலோக பொருட்கள் மற்றும் கருவிகளை மேற்கு பகுதியில் வைக்கவும்.",
                "சாம்பல், வெள்ளை அல்லது உலோக நிறங்களை பயன்படுத்தவும்.",
                "அடிக்கடி பயன்படுத்தும் பொருட்களை எளிதாக எடுக்கக்கூடிய இடத்தில் வைக்கவும்.",
                "பாதுகாப்பிற்காக போதிய வெளிச்சம் இருக்க வேண்டும்.",
                "நுழைவாயில் அருகில் குழப்பம் இருக்க வேண்டாம்."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் ஸ்டோர் ரூம்.",
            suggestions: [
                "இலகுரக சேமிப்பிற்கு ஏற்றது.",
                "பருவகால பொருட்கள் மற்றும் சிறிய கருவிகளுக்கு நல்லது.",
                "ஒழுங்கான அலமாரிகளுடன் இளநிறங்களை பயன்படுத்தவும்.",
                "உலோக பொருட்களை வடமேற்கு மூலையில் வைக்கவும்.",
                "நல்ல காற்றோட்டம் உறுதி செய்யவும்.",
                "மிக கனமான பொருட்களை இங்கு வைக்க வேண்டாம்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் ஸ்டோர் ரூம்.",
            suggestions: [
                "சரியாக பராமரிக்கவில்லை என்றால் தீ அபாயம் ஏற்படலாம்.",
                "எரியாத பொருட்களை மட்டும் இங்கு சேமிக்கவும்.",
                "வெள்ளை அல்லது நீலம் போன்ற குளிர்ச்சியான நிறங்களை பயன்படுத்தவும்.",
                "மின்சார பொருட்களை தெற்க்கிழக்கு பகுதியில் வைக்கவும்.",
                "தீ பாதுகாப்பு உபகரணங்களை அமைக்கவும்.",
                "ரசாயனங்கள் அல்லது எரிபொருட்களை தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் ஸ்டோர் ரூம்.",
            suggestions: [
                "பரிந்துரைக்கப்படாத இடம் – செல்வ சக்தியை தடுக்கும்.",
                "சேமிப்பை குறைவாகவும் ஒழுங்காகவும் வைத்திருக்கவும்.",
                "வெள்ளை அல்லது இளநீலம் போன்ற நிறங்களை பயன்படுத்தவும்.",
                "இலகுரக பொருட்களை மட்டும் வடக்கு பகுதியில் வைக்கவும்.",
                "வடகிழக்கு மூலையை முற்றிலும் காலியாக வைத்திருக்கவும்.",
                "கனமான அல்லது தேவையற்ற பொருட்களை தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் ஸ்டோர் ரூம்.",
            suggestions: [
                "காலை நேர நல்ல சக்தியை தடுக்கும்.",
                "சேமிப்பை மிகக் குறைவாகவும் சுத்தமாகவும் வைத்திருக்கவும்.",
                "இளநிறங்களும் நல்ல வெளிச்சமும் பயன்படுத்தவும்.",
                "அத்தியாவசிய பொருட்களை மட்டும் வைக்கவும்.",
                "கிழக்கு ஜன்னல்கள் எளிதாக திறக்கக்கூடியதாக இருக்க வேண்டும்.",
                "உடைந்த அல்லது பயன்படுத்தாத பொருட்களை தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் ஸ்டோர் ரூம் – மிக முக்கியமான குறை.",
            suggestions: [
                "சேமிப்பிற்கு மிகவும் தவறான இடம்.",
                "பண மற்றும் உடல்நல பிரச்சனைகள் ஏற்படலாம்.",
                "இயன்றால் சேமிப்பு அறையை தென்மேற்கிற்கு மாற்றவும்.",
                "வடகிழக்கு மூலையை முற்றிலும் காலியாக வைத்திருக்கவும்.",
                "வெள்ளை நிறங்களும் மிகச் சுத்தமும் பயன்படுத்தவும்.",
                "அவசியமெனில் ஆன்மீக பொருட்களை மட்டும் வைக்கலாம்."
            ]
        });
    }
    
    remedies.push({
        title: "பொதுவான ஸ்டோர் ரூம் வாஸ்து குறிப்புகள்.",
        suggestions: [
            "கனமான பொருட்களை தெற்கு அல்லது மேற்கு திசையில் வைக்கவும்.",
            "சுத்தமும் ஒழுங்கும் அவசியம்.",
            "உடைந்த அல்லது பயன்படுத்தாத பொருட்களை அடிக்கடி அகற்றவும்.",
            "நல்ல காற்றோட்டமும் வெளிச்சமும் உறுதி செய்யவும்.",
            "எரியும் பொருட்களை தனியாக வைத்திருக்கவும்.",
            "மதிப்புள்ள பொருட்களை தென்மேற்கு மூலையில் சேமிக்கவும்."
        ]
    });
}
    
// Staircase
else if (lowerName.includes('staircase') || lowerName.includes('seedhiyan') ||
         lowerName.includes('stairs') || lowerName.includes('stairway') ||
         lowerName.includes('steps') || lowerName.includes('elevator') ||
         lowerName.includes('lift')) {
    
    if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் படிக்கட்டு – முக்கிய குறை.",
            suggestions: [
                "நிலைத்தன்மையை பாதிக்கும் மிக தவறான இடம்.",
                "பண இழப்பு மற்றும் உடல்நல பிரச்சனைகள் ஏற்படலாம்.",
                "இயன்றால் படிக்கட்டினை தெற்கு அல்லது மேற்கு திசைக்கு மாற்றவும்.",
                "அடிப்பகுதியில் கனமான செடி அல்லது பைரமிட் வைக்கவும்.",
                "பழுப்பு அல்லது கருப்பு போன்ற இருண்ட நிறங்களை பயன்படுத்தவும்.",
                "படிக்கட்டில் போதிய வெளிச்சமும் பாதுகாப்பும் இருக்க வேண்டும்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் படிக்கட்டு – மிக மிக மோசமான இடம்.",
            suggestions: [
                "வாழ்க்கையின் அனைத்து அம்சங்களையும் பாதிக்கும்.",
                "பெரிய பண மற்றும் உடல்நல பிரச்சனைகள் ஏற்படலாம்.",
                "இயன்றால் உடனடியாக படிக்கட்டினை மாற்றவும்.",
                "வடகிழக்கு மூலையில் பைரமிட் வைக்கவும்.",
                "வெள்ளை மார்பிள் அல்லது இளநிறங்களை பயன்படுத்தவும்.",
                "பகுதியை மிகவும் சுத்தமாகவும் குறைந்த பொருட்களுடன் வைத்திருக்கவும்."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் படிக்கட்டு.",
            suggestions: [
                "தேவையற்ற பயணங்களும் நிலைத்தன்மையின்மையும் ஏற்படலாம்.",
                "உறவுகள் மற்றும் மன அமைதியை பாதிக்கலாம்.",
                "அடிப்பகுதியில் கனமான உலோக பொருள் வைக்கவும்.",
                "வெள்ளை அல்லது இளசாம்பல் நிறங்களை பயன்படுத்தவும்.",
                "படிக்கட்டினை நன்றாக பராமரிக்கவும்.",
                "பிடிப்புக் கம்பிகள் உறுதியாக இருக்க வேண்டும்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் படிக்கட்டு.",
            suggestions: [
                "அக்னி தத்துவ முரண்பாடு விபத்துகளை ஏற்படுத்தலாம்.",
                "வாதங்கள் மற்றும் அமைதியின்மை உருவாகலாம்.",
                "அருகில் தீ அணைப்பான் வைத்திருக்கவும்.",
                "நீலம் அல்லது வெள்ளை போன்ற குளிர்ச்சியான நிறங்களை பயன்படுத்தவும்.",
                "இந்த திசையில் மர படிக்கட்டுகளை தவிர்க்கவும்.",
                "பகுதியை நல்ல காற்றோட்டத்துடன் வைத்திருக்கவும்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் படிக்கட்டு.",
            suggestions: [
                "மிதமான அளவில் ஏற்றுக்கொள்ளக்கூடிய இடம்.",
                "கிழக்கிலிருந்து தெற்கிற்கு சுழல் முறையில் அமைக்க வேண்டும்.",
                "வலுவான பொருட்களும் இருண்ட நிறங்களும் பயன்படுத்தவும்.",
                "நிலைத்தன்மைக்காக அடிப்பகுதியில் கனமான சிலை வைக்கவும்.",
                "ஒவ்வொரு படியிலும் போதிய வெளிச்சம் இருக்க வேண்டும்.",
                "தெற்கு சுவர் உறுதியானதாக இருக்க வேண்டும்."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் படிக்கட்டு.",
            suggestions: [
                "ஏற்றுக்கொள்ளக்கூடிய அமைப்பு.",
                "வடக்கிலிருந்து மேற்கு நோக்கி மேலே செல்லும் வகையில் இருக்க வேண்டும்.",
                "கட்டுமானத்தில் உலோக அம்சங்களை பயன்படுத்தலாம்.",
                "படிக்கட்டில் பாதுகாப்பும் வெளிச்சமும் இருக்க வேண்டும்.",
                "சுருள் படிக்கட்டுகளை இந்த திசையில் தவிர்க்கவும்.",
                "பாதுகாப்பிற்காக உலோக கைப்பிடி வைக்கவும்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் படிக்கட்டு.",
            suggestions: [
                "பரிந்துரைக்கப்படாத இடம் – செல்வ சக்தியை தடுக்கும்.",
                "எளிமையான மற்றும் இலகுரக கட்டமைப்பாக இருக்க வேண்டும்.",
                "வெள்ளை அல்லது இளசாம்பல் நிறங்களை பயன்படுத்தவும்.",
                "வடகிழக்கு மூலையை பாதிக்காத வகையில் அமைக்கவும்.",
                "வடக்கு நுழைவாயிலை மறைக்காதீர்கள்.",
                "சமநிலைக்காக அருகில் தண்ணீர் அம்சம் வைக்கலாம்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் படிக்கட்டு.",
            suggestions: [
                "காலை நேர நல்ல சக்தியை தடுக்கும்.",
                "மிக இலகுரக மற்றும் திறந்த வடிவமைப்பாக இருக்க வேண்டும்.",
                "இயன்றால் தெளிவான அல்லது லேசான பொருட்களை பயன்படுத்தவும்.",
                "கிழக்கு ஜன்னல்களை மறைக்காமல் வைத்திருக்கவும்.",
                "கனமான கட்டுமானப் பொருட்களை தவிர்க்கவும்.",
                "சமநிலைக்காக அருகில் செடிகளை வைக்கலாம்."
            ]
        });
    }
    
    remedies.push({
        title: "பொதுவான படிக்கட்டு வாஸ்து குறிப்புகள்.",
        suggestions: [
            "படிக்கட்டு கிழக்கு → தெற்கு → மேற்கு என வலது சுற்றில் மேலே செல்ல வேண்டும்.",
            "வீட்டின் மையத்தில் சுருள் படிக்கட்டுகளை தவிர்க்கவும்.",
            "படிகள் ஒற்றை எண்ணிக்கையாக இருக்க வேண்டும் (3, 5, 7 போன்றவை).",
            "அனைத்து படிகளிலும் சரியான வெளிச்சம் இருக்க வேண்டும்.",
            "படிக்கட்டின் கீழ் கழிப்பறை இருக்கக்கூடாது.",
            "படிக்கட்டினை எப்போதும் சுத்தமாகவும் பராமரிப்புடனும் வைத்திருக்கவும்."
        ]
    });
}

    
// Main Door
else if (lowerName.includes('main door') || lowerName.includes('entrance') || 
         lowerName.includes('main entrance') || lowerName.includes('pradhan dwar') || 
         lowerName.includes('entry door') || lowerName.includes('mukhya dwar')) {
    
    if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் முதன்மை கதவு – மிகவும் சிறந்த இடம்.",
            suggestions: [
                "முதன்மை நுழைவிற்கு மிகச் சிறந்த திசை.",
                "ஆரோக்கியம், செல்வம் மற்றும் வெற்றியை கொண்டு வரும்.",
                "கதவு வீட்டுக்குள் வலது சுழலில் திறக்க வேண்டும்.",
                "சதுரம் அல்லது செவ்வக வடிவத்தில் மரக் கதவை பயன்படுத்தவும்.",
                "நுழைவிடம் வெளிச்சமாகவும் குழப்பமில்லாமலும் வைத்திருக்கவும்.",
                "கதவின் வலது பக்கத்தில் பெயர்பலகை வைக்கவும்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் முதன்மை கதவு.",
            suggestions: [
                "செல்வம் மற்றும் வாய்ப்புகளுக்கு சிறந்தது.",
                "வேலை முன்னேற்றம் மற்றும் பண நிலைத்தன்மையை அதிகரிக்கும்.",
                "கதவு வீட்டுக்குள் வலது சுழலில் திறக்க வேண்டும்.",
                "உலோக பொருத்தங்களுடன் வலுவான மரக் கதவை பயன்படுத்தவும்.",
                "நுழைவிடத்தை சுத்தமாகவும் வரவேற்பாகவும் வைத்திருக்கவும்.",
                "வடக்கு நுழைவிற்கு முன் எந்த தடையும் இருக்கக்கூடாது."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் முதன்மை கதவு – மிகவும் உகந்தது.",
            suggestions: [
                "ஆன்மீக வளர்ச்சிக்கு மிகவும் உகந்த திசை.",
                "தெய்வ அருளும் நல்ல சக்தியும் கிடைக்கும்.",
                "இந்த கதவு மற்ற கதவுகளை விட சற்று சிறியதாக இருக்கலாம்.",
                "வெள்ளை அல்லது மஞ்சள் போன்ற இளநிறங்களை பயன்படுத்தவும்.",
                "பகுதியை முழுமையாக சுத்தமாகவும் புனிதமாகவும் வைத்திருக்கவும்.",
                "நுழைவின் அருகில் ஆன்மீக சின்னங்களை வைக்கலாம்."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் முதன்மை கதவு.",
            suggestions: [
                "முதன்மை நுழைவிற்கு ஏற்றுக்கொள்ளக்கூடிய திசை.",
                "படைப்பாற்றல் மற்றும் குழந்தைகளின் வெற்றிக்கு உதவும்.",
                "கதவு வீட்டுக்குள் வலது சுழலில் திறக்க வேண்டும்.",
                "உறுதியான வாசல் படியுடன் வலுவான கதவை பயன்படுத்தவும்.",
                "மாலை நேரத்திற்கு நல்ல வெளிச்சம் இருக்க வேண்டும்.",
                "நுழைவிற்கு வெளியே வரவேற்பு மாட் வைக்கலாம்."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் முதன்மை கதவு.",
            suggestions: [
                "சமூக தொடர்புகள் மற்றும் பயணங்களை அதிகரிக்கும்.",
                "அடிக்கடி விருந்தினர்கள் மற்றும் செலவுகள் ஏற்படலாம்.",
                "வலுவான உலோக அல்லது மரக் கதவை பயன்படுத்தவும்.",
                "பாதுகாப்பு ஏற்பாடுகளை உறுதி செய்யவும்.",
                "நுழைவிடத்தை நன்றாக பராமரிக்கவும்.",
                "உடைந்த அல்லது சேதமடைந்த கதவை தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் முதன்மை கதவு.",
            suggestions: [
                "கவனத்துடன் வாஸ்து திருத்தங்கள் தேவை.",
                "தாமதங்கள் மற்றும் தடைகள் ஏற்படலாம்.",
                "அடர் நிறத்தில் வலுவான மரக் கதவை பயன்படுத்தவும்.",
                "கதவின் மேல்பகுதியில் பைரமிட் அல்லது கிரிஸ்டல் வைக்கவும்.",
                "கதவு சத்தமின்றி சீராக திறக்கப்பட வேண்டும்.",
                "நுழைவிடம் பிரகாசமாக வெளிச்சமுடன் இருக்க வேண்டும்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் முதன்மை கதவு.",
            suggestions: [
                "வாதங்கள் மற்றும் உடல்நல பிரச்சனைகள் ஏற்படலாம்.",
                "அக்னி தத்துவம் காரணமாக நுழைவிற்கு உகந்ததல்ல.",
                "கதவின் அருகில் தண்ணீர் சார்ந்த சின்னங்களை பயன்படுத்தவும்.",
                "நீலம் நிற வரவேற்பு மாட் அல்லது டைல்கள் பயன்படுத்தலாம்.",
                "நுழைவிடம் குளிர்ச்சியாகவும் காற்றோட்டத்துடன் இருக்க வேண்டும்.",
                "சிவப்பு நிறங்களை நுழைவில் தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் முதன்மை கதவு – மிக முக்கியமான குறை.",
            suggestions: [
                "முதன்மை நுழைவிற்கு மிகவும் தவறான இடம்.",
                "பெரிய உடல்நல மற்றும் பண பிரச்சனைகள் ஏற்படலாம்.",
                "இயன்றால் நுழைவைக் வடக்கு அல்லது கிழக்கு திசைக்கு மாற்றவும்.",
                "வெளியே கனமான செடி அல்லது பைரமிட் வைக்கவும்.",
                "மிக வலுவான பாதுகாப்பு கதவை பயன்படுத்தவும்.",
                "முக்கிய திருத்தங்களுக்கு வாஸ்து நிபுணரை அணுகவும்."
            ]
        });
    }
    
    remedies.push({
        title: "பொதுவான முதன்மை கதவு வாஸ்து குறிப்புகள்.",
        suggestions: [
            "கதவு வீட்டுக்குள் வலது சுழலில் திறக்க வேண்டும்.",
            "நுழைவிடத்தை சுத்தமாகவும் வெளிச்சமாகவும் வைத்திருக்கவும்.",
            "கதவின் முன் தூண் அல்லது தடைகள் இருக்கக்கூடாது.",
            "கதவில் உடைப்பு அல்லது சத்தம் இருக்கக் கூடாது.",
            "ஸ்வஸ்திக் அல்லது ஓம் போன்ற நல்ல சின்னங்களை வைக்கலாம்.",
            "கதவு முழுவதும் சீராக திறக்கப்பட வேண்டும்."
        ]
    });
}
    
// Balcony
else if (lowerName.includes('balcony') || lowerName.includes('veranda') || 
         lowerName.includes('porch') || lowerName.includes('baramda') || 
         lowerName.includes('sitout') || lowerName.includes('open area')) {
    
    if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் பால்கனி – சிறந்த இடம்.",
            suggestions: [
                "காலை சூரிய ஒளி மற்றும் நல்ல சக்திக்குப் பொருத்தமானது.",
                "காலை தியானம் மற்றும் உடற்பயிற்சிக்கு ஏற்றது.",
                "பால்கனியை திறந்ததாகவும் குழப்பமில்லாமலும் வைத்திருக்கவும்.",
                "வெள்ளை, மஞ்சள் அல்லது பச்சை போன்ற இளநிறங்களை பயன்படுத்தவும்.",
                "காலை சூரிய ஒளி தேவையுள்ள செடிகளை வைக்கவும்.",
                "காலை தேநீர் அல்லது செய்தித்தாள் வாசிக்க ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் பால்கனி.",
            suggestions: [
                "செல்வம் மற்றும் வாய்ப்புகளை அதிகரிக்கும்.",
                "பண வளர்ச்சி மற்றும் வேலை முன்னேற்றத்திற்கு உதவும்.",
                "பால்கனியை சுத்தமாகவும் பராமரிப்புடன் வைத்திருக்கவும்.",
                "நீலம், வெள்ளை அல்லது பச்சை நிறங்களை பயன்படுத்தவும்.",
                "இயன்றால் தண்ணீர் அம்சம் அல்லது சிறிய நீரூற்று வைக்கலாம்.",
                "மாலை நேர ஓய்விற்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் பால்கனி – மிகவும் உகந்தது.",
            suggestions: [
                "ஆன்மீக சக்திக்கு மிகச் சிறந்த திசை.",
                "தியானம் மற்றும் பூஜைக்குப் பொருத்தமானது.",
                "முழுமையாக சுத்தமாகவும் எளிமையாகவும் வைத்திருக்கவும்.",
                "தூய வெள்ளை அல்லது இளமஞ்சள் நிறங்களை பயன்படுத்தவும்.",
                "சேமிப்பு அல்லது கனமான பொருட்கள் வேண்டாம்.",
                "துளசி போன்ற புனித செடிகளுக்கு ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் பால்கனி.",
            suggestions: [
                "மாலை நேர ஓய்வு மற்றும் சூரிய அஸ்தமனத்திற்கு நல்லது.",
                "படைப்பாற்றல் மற்றும் சமூக தொடர்புகளை ஊக்குவிக்கும்.",
                "நல்ல வெளிச்சத்துடன் இளநிறங்களை பயன்படுத்தவும்.",
                "மாலை நேர பயன்பாட்டிற்கு வசதியான அமர்வு ஏற்பாடு செய்யவும்.",
                "மதிய வெயிலை தாங்கும் செடிகளை வைக்கவும்.",
                "மாலை நேர குடும்ப கூடுகைக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் பால்கனி.",
            suggestions: [
                "சமூக தொடர்புகள் மற்றும் அறிமுகங்களை அதிகரிக்கும்.",
                "அடிக்கடி வருகை மற்றும் உரையாடல்கள் ஏற்படலாம்.",
                "வெள்ளை அல்லது இளசாம்பல் நிறங்களை பயன்படுத்தவும்.",
                "பால்கனியை ஒழுங்காக வைத்திருக்கவும்.",
                "நல்ல சக்திக்காக காற்று மணிகளை வைக்கலாம்.",
                "காலை காப்பி அல்லது தேநீருக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் பால்கனி.",
            suggestions: [
                "அக்னி தத்துவம் காரணமாக கவனத்துடன் பயன்படுத்த வேண்டும்.",
                "கோடைக்காலத்தில் அதிக வெப்பம் ஏற்படலாம்.",
                "நீலம் அல்லது வெள்ளை போன்ற குளிர்ச்சியான நிறங்களை பயன்படுத்தவும்.",
                "அக்னியை சமநிலைப்படுத்த தண்ணீர் அம்சங்களை வைக்கவும்.",
                "எரியும் பொருட்களை சேமிப்பதை தவிர்க்கவும்.",
                "துணிகளை விரைவாக உலர்த்த ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் பால்கனி.",
            suggestions: [
                "அதிக வெப்பமும் சக்தியும் ஏற்படலாம்.",
                "வெப்பத்தை தாங்கும் செடிகள் மற்றும் பொருட்களை பயன்படுத்தவும்.",
                "பாதுகாப்பிற்காக சாயல் அல்லது திரைகள் அமைக்கவும்.",
                "வெப்பத்தை குறைக்க இளநிறங்களை பயன்படுத்தவும்.",
                "கனமான பொருட்களை பால்கனியில் தவிர்க்கவும்.",
                "குளிர்கால சூரிய ஒளிக்கு நல்லது."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் பால்கனி – பரிந்துரைக்கப்படாத இடம்.",
            suggestions: [
                "நிலைத்தன்மை மற்றும் உறவுகளை பாதிக்கலாம்.",
                "இந்த திசை உறுதியான சுவருக்கு ஏற்றது.",
                "கனமான குடுவைகள் மற்றும் நிலையான பொருட்களை பயன்படுத்தவும்.",
                "மிகவும் திறந்தவையாக அல்லது பெரிதாக செய்ய வேண்டாம்.",
                "பாதுகாப்பு கம்பிகள் அல்லது வேலிகள் அமைக்கவும்.",
                "எளிமையாகவும் பயன்பாட்டிற்கு ஏற்றதாகவும் வைத்திருக்கவும்."
            ]
        });
    }
    
    remedies.push({
        title: "பொதுவான பால்கனி வாஸ்து குறிப்புகள்.",
        suggestions: [
            "பால்கனியை எப்போதும் சுத்தமாகவும் குழப்பமில்லாமலும் வைத்திருக்கவும்.",
            "நல்ல சக்திக்காக செடிகளை பயன்படுத்தவும்.",
            "பாதுகாப்பான கைப்பிடிகள் மற்றும் வேலிகள் உறுதி செய்யவும்.",
            "தேவையற்ற அல்லது உடைந்த பொருட்களை சேமிக்க வேண்டாம்.",
            "மாலை நேரத்திற்கு போதிய வெளிச்சம் இருக்க வேண்டும்.",
            "பால்கனியை அடிக்கடி சுத்தம் செய்து பராமரிக்கவும்."
        ]
    });
}

    
// Garage
else if (lowerName.includes('garage') || lowerName.includes('car parking') || 
         lowerName.includes('vehicle shed') || lowerName.includes('gaadi ghar')) {
    
    if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் கார் நிறுத்தும் இடம் – சிறந்த இடம்.",
            suggestions: [
                "கார் நிறுத்துவதற்கு மிகச் சிறந்த திசை.",
                "பாதுகாப்பான பயணங்களுக்கும் வாகன பராமரிப்பிற்கும் உதவும்.",
                "வாகனங்களை வடக்கு அல்லது கிழக்கு நோக்கி நிறுத்தவும்.",
                "வெள்ளை, சாம்பல் அல்லது இளநீலம் போன்ற இளநிறங்களை பயன்படுத்தவும்.",
                "காரேஜை சுத்தமாகவும் ஒழுங்காகவும் வைத்திருக்கவும்.",
                "வாகன சேமிப்பு மற்றும் பராமரிப்பிற்கு மிகவும் ஏற்றது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் கார் நிறுத்தும் இடம்.",
            suggestions: [
                "கார் நிறுத்தத்திற்கு ஏற்ற திசை.",
                "வாகனங்களுக்கு நல்ல பாதுகாப்பு வழங்கும்.",
                "வாகனங்களை கிழக்கு அல்லது வடக்கு நோக்கி நிறுத்தவும்.",
                "இளநிறங்களும் நல்ல வெளிச்சமும் பயன்படுத்தவும்.",
                "நல்ல காற்றோட்ட அமைப்பு இருக்குமாறு செய்யவும்.",
                "கருவிகளை தெற்கு அல்லது மேற்கு சுவரில் ஒழுங்காக வைக்கவும்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் கார் நிறுத்தும் இடம்.",
            suggestions: [
                "சில கவனத்துடன் ஏற்றுக்கொள்ளக்கூடிய இடம்.",
                "வாகனங்களுக்கு பாதுகாப்பு கிடைக்கலாம்.",
                "வாகனங்களை வடக்கு அல்லது கிழக்கு நோக்கி நிறுத்தவும்.",
                "தரைக்கு அடர் நிறங்களை பயன்படுத்தலாம்.",
                "வலுவான பாதுகாப்பு ஏற்பாடுகளை செய்யவும்.",
                "இடம் நல்ல வெளிச்சத்துடனும் பாதுகாப்புடனும் இருக்க வேண்டும்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் கார் நிறுத்தும் இடம்.",
            suggestions: [
                "அக்னி தத்துவம் காரணமாக அபாயம் ஏற்படலாம்.",
                "இயந்திர கோளாறுகள் உருவாக வாய்ப்பு உள்ளது.",
                "தீ பாதுகாப்பு உபகரணங்களை கட்டாயமாக அமைக்கவும்.",
                "வெள்ளை அல்லது நீலம் போன்ற குளிர்ச்சியான நிறங்களை பயன்படுத்தவும்.",
                "எரியும் பொருட்களை சேமிப்பதை தவிர்க்கவும்.",
                "காற்றோட்ட அமைப்பு சிறப்பாக இருக்க வேண்டும்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் கார் நிறுத்தும் இடம்.",
            suggestions: [
                "பரிந்துரைக்கப்படாத இடம் – செல்வ சக்தியை தடுக்கும்.",
                "வாகன செயல்திறனை பாதிக்கலாம்.",
                "வாகனங்களை கிழக்கு அல்லது வடக்கு நோக்கி நிறுத்தவும்.",
                "இளநிறங்களும் பிரகாசமான வெளிச்சமும் பயன்படுத்தவும்.",
                "வடகிழக்கு மூலையை சுத்தமாகவும் திறந்ததாகவும் வைத்திருக்கவும்.",
                "தேவையற்ற பொருட்களை காரேஜில் சேமிக்க வேண்டாம்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் கார் நிறுத்தும் இடம்.",
            suggestions: [
                "காலை நேர நல்ல சக்தியை தடுக்கும்.",
                "குடும்ப ஆரோக்கியம் மற்றும் செல்வ நிலையை பாதிக்கலாம்.",
                "மிக இளநிறங்களும் இலகுரக பொருட்களும் பயன்படுத்தவும்.",
                "காரேஜ் கதவு சீராக செயல்படுமாறு பார்த்துக்கொள்ளவும்.",
                "கனமான வாகன பழுதுபார்த்தலை இங்கு தவிர்க்கவும்.",
                "வடகிழக்கு மூலையில் பைரமிட் வைக்கலாம்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் கார் நிறுத்தும் இடம் – முக்கிய குறை.",
            suggestions: [
                "கார் நிறுத்தத்திற்கு மிகவும் தவறான இடம்.",
                "குடும்ப நிலைத்தன்மை மற்றும் உடல்நலத்தை பாதிக்கலாம்.",
                "இயன்றால் காரேஜை வடமேற்கிற்கு மாற்றவும்.",
                "வலுவான மற்றும் கனமான கட்டமைப்பு பயன்படுத்தவும்.",
                "தென்மேற்கு மூலையில் கனமான கல் வைக்கவும்.",
                "இடத்தை எளிமையாகவும் சுத்தமாகவும் வைத்திருக்கவும்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் கார் நிறுத்தும் இடம் – மிக மிக மோசமான இடம்.",
            suggestions: [
                "அனைத்து அம்சங்களுக்கும் தீங்கு விளைவிக்கும்.",
                "பெரிய விபத்துகள் மற்றும் இழப்புகள் ஏற்படலாம்.",
                "இயன்றால் உடனடியாக காரேஜை மாற்றவும்.",
                "வெள்ளை நிறங்களும் மிகச் சுத்தமும் பயன்படுத்தவும்.",
                "இந்த பகுதியில் வாகன பழுதுபார்த்தலை தவிர்க்கவும்.",
                "திருத்தங்களுக்கு வாஸ்து நிபுணரை அணுகவும்."
            ]
        });
    }
    
    remedies.push({
        title: "பொதுவான கார் நிறுத்தம் வாஸ்து குறிப்புகள்.",
        suggestions: [
            "வாகனங்களை வடக்கு அல்லது கிழக்கு நோக்கி நிறுத்தவும்.",
            "காரேஜை சுத்தமாகவும் ஒழுங்காகவும் வைத்திருக்கவும்.",
            "நல்ல காற்றோட்டமும் வெளிச்சமும் உறுதி செய்யவும்.",
            "உடைந்த அல்லது தேவையற்ற பொருட்களை சேமிக்க வேண்டாம்.",
            "பாதுகாப்பு ஏற்பாடுகளை கட்டாயமாக செய்யவும்.",
            "வாகனமும் இடமும் அடிக்கடி பராமரிக்கப்பட வேண்டும்."
        ]
    });
}
    
// Servant Room
else if (lowerName.includes('servant room') || lowerName.includes('domestic help room') || 
         lowerName.includes('naukar room') || lowerName.includes('sevak kaksh')) {
    
    if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் பணியாளர் அறை – சிறந்த இடம்.",
            suggestions: [
                "பணியாளர் தங்குவதற்கு மிகச் சிறந்த திசை.",
                "உழைப்பு மற்றும் பொறுப்புணர்வை அதிகரிக்கும்.",
                "அறையின் தென்மேற்கு மூலையில் படுக்கையை வைக்கவும்.",
                "எளிமையான மற்றும் பயன்பாட்டிற்கு ஏற்ற பொருட்களை பயன்படுத்தவும்.",
                "அறையை சுத்தமாகவும் நல்ல காற்றோட்டத்துடனும் வைத்திருக்கவும்.",
                "உறவுகளில் எல்லைகளை சரியாக வைத்திருக்க உதவும்."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் பணியாளர் அறை.",
            suggestions: [
                "பணியாளர் தங்குவதற்கு ஏற்ற இடம்.",
                "நம்பிக்கையும் நீண்டகால சேவையும் உருவாக உதவும்.",
                "தென்மேற்கு மூலையில் படுக்கையை வைக்கவும்.",
                "இளநிறங்களும் அடிப்படை வசதிகளும் போதுமானது.",
                "போதிய வெளிச்சமும் காற்றோட்டமும் இருக்க வேண்டும்.",
                "அறையை ஒழுங்காகவும் குழப்பமில்லாமலும் வைத்திருக்கவும்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் பணியாளர் அறை.",
            suggestions: [
                "பணியாளர் தங்குவதற்கு ஏற்றுக்கொள்ளக்கூடிய திசை.",
                "சேவையில் நிலைத்தன்மை தரும்.",
                "படுக்கையை தெற்கு சுவரை ஒட்டி வைக்கவும்.",
                "எளிய அலங்காரத்துடன் சூடான நிறங்களை பயன்படுத்தவும்.",
                "அறையை நடைமுறைபூர்வமாக வைத்திருக்கவும்.",
                "பாதுகாப்பு ஏற்பாடுகள் இருக்க வேண்டும்."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் பணியாளர் அறை.",
            suggestions: [
                "மிதமான அளவில் ஏற்ற திசை.",
                "வேலையில் சுறுசுறுப்பை தரலாம்.",
                "தென்மேற்கு மூலையில் படுக்கையை வைக்கவும்.",
                "இளநிறங்களும் நல்ல வெளிச்சமும் பயன்படுத்தவும்.",
                "அறையை நன்றாக பராமரிக்கவும்.",
                "அதிக ஜன்னல்கள் வேண்டாம்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் பணியாளர் அறை.",
            suggestions: [
                "பரிந்துரைக்கப்படாத இடம் – அதிகார சிக்கல்கள் உருவாகலாம்.",
                "பணியாளர் மாற்றம் அதிகரிக்க வாய்ப்பு உள்ளது.",
                "படுக்கையை வடமேற்கு மூலையில் வைக்கவும்.",
                "இளநிறங்களுடன் மிக எளிய அமைப்பு போதும்.",
                "அறையை எளிமையாகவும் பயன்பாட்டிற்கு ஏற்றதாகவும் வைத்திருக்கவும்.",
                "எல்லைகள் தெளிவாக இருக்க வேண்டும்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் பணியாளர் அறை.",
            suggestions: [
                "பணியாளர் தங்குவதற்கு பரிந்துரைக்கப்படாத இடம்.",
                "மரியாதை மற்றும் கட்டுப்பாடு தொடர்பான பிரச்சனைகள் உருவாகலாம்.",
                "படுக்கையை தெற்க்கிழக்கு மூலையில் வைக்கவும்.",
                "மிக எளிய மற்றும் அடிப்படை வசதிகள் மட்டும் பயன்படுத்தவும்.",
                "அறையை குறைந்த பொருட்களுடன் சுத்தமாக வைத்திருக்கவும்.",
                "அதிக சௌகரியங்களை வழங்க வேண்டாம்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் பணியாளர் அறை – முக்கிய குறை.",
            suggestions: [
                "பணியாளர் அறைக்கு மிகவும் தவறான இடம்.",
                "அதிகார மோதல்கள் மற்றும் சிக்கல்கள் ஏற்படலாம்.",
                "இயன்றால் அறையை தெற்க்கிழக்கு திசைக்கு மாற்றவும்.",
                "எளிய மற்றும் நடைமுறை வடிவமைப்பு மட்டும் பயன்படுத்தவும்.",
                "அறையை மிகச் சுத்தமாக வைத்திருக்கவும்.",
                "மிக அதிக இடம் வழங்க வேண்டாம்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் பணியாளர் அறை – மிக மிக மோசமான இடம்.",
            suggestions: [
                "மிகுந்த பாதிப்புகளை ஏற்படுத்தும் இடம்.",
                "வீட்டில் பெரிய பிரச்சனைகள் உருவாகலாம்.",
                "இயன்றால் உடனடியாக அறையை மாற்றவும்.",
                "வெள்ளை நிறங்களும் அடிப்படை வசதிகளும் மட்டும் பயன்படுத்தவும்.",
                "அறையை முற்றிலும் எளிமையாக வைத்திருக்கவும்.",
                "திருத்தங்களுக்கு வாஸ்து நிபுணரை அணுகவும்."
            ]
        });
    }
    
    remedies.push({
        title: "பொதுவான பணியாளர் அறை வாஸ்து குறிப்புகள்.",
        suggestions: [
            "அறையை எளிமையாகவும் பயன்பாட்டிற்கு ஏற்றதாகவும் வைத்திருக்கவும்.",
            "முதன்மை வீட்டிலிருந்து எல்லைகள் தெளிவாக இருக்க வேண்டும்.",
            "நல்ல காற்றோட்டமும் வெளிச்சமும் உறுதி செய்யவும்.",
            "அறையை சுத்தமாகவும் ஒழுங்காகவும் வைத்திருக்கவும்.",
            "அதிக சௌகரியமான பொருட்களை தவிர்க்கவும்.",
            "பணியாளர்–உரிமையாளர் உறவை மரியாதையுடன் வைத்திருக்கவும்."
        ]
    });
}

    
// Laundry
else if (lowerName.includes('laundry') || lowerName.includes('washing area') || 
         lowerName.includes('dhobi ghat') || lowerName.includes('clothes washing') ||
         lowerName.includes('laundry room')) {
    
    if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் துணி துவைக்கும் இடம் – சிறந்த இடம்.",
            suggestions: [
                "துணி துவைக்கும் பணிகளுக்கு மிகச் சிறந்த திசை.",
                "வேலை திறனையும் சீரான செயல்பாடையும் அதிகரிக்கும்.",
                "வாஷிங் மெஷினை கிழக்கு அல்லது வடக்கு பக்கத்தில் வைக்கவும்.",
                "வெள்ளை, நீலம் அல்லது சாம்பல் போன்ற இளநிறங்களை பயன்படுத்தவும்.",
                "பகுதியை நல்ல காற்றோட்டத்துடனும் உலர்ந்த நிலையிலும் வைத்திருக்கவும்.",
                "துணிகளை இயற்கையாக உலர்த்த ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் துணி துவைக்கும் இடம்.",
            suggestions: [
                "துணி துவைக்கும் இடத்திற்கு ஏற்ற திசை.",
                "உலர்த்த நல்ல காற்றோட்டம் கிடைக்கும்.",
                "வாஷிங் மெஷினை கிழக்கை நோக்கி வைக்கவும்.",
                "இளநிறங்களும் நல்ல வெளிச்சமும் பயன்படுத்தவும்.",
                "நீர்வழித்தடத்தை வடகிழக்கு திசையில் வைத்திருக்கவும்.",
                "மாலை நேர துணி துவைப்பிற்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் துணி துவைக்கும் இடம்.",
            suggestions: [
                "சில கவனத்துடன் ஏற்றுக்கொள்ளக்கூடிய இடம்.",
                "துணிகள் நன்றாக உலர உதவும்.",
                "வாஷிங் மெஷினை கிழக்கு அல்லது வடக்கு பக்கம் வைக்கவும்.",
                "வெப்பத்தை சமநிலைப்படுத்த இளநிறங்களை பயன்படுத்தவும்.",
                "நல்ல காற்றோட்ட அமைப்பு இருக்க வேண்டும்.",
                "பகுதியை சுத்தமாகவும் ஒழுங்காகவும் வைத்திருக்கவும்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் துணி துவைக்கும் இடம்.",
            suggestions: [
                "அக்னி மற்றும் தண்ணீர் தத்துவம் ஒன்றாக இருப்பது.",
                "மின்சார கோளாறுகள் ஏற்பட வாய்ப்பு உள்ளது.",
                "மின்சார பாதுகாப்பு ஏற்பாடுகளை உறுதி செய்யவும்.",
                "வெள்ளை அல்லது நீலம் போன்ற குளிர்ச்சியான நிறங்களை பயன்படுத்தவும்.",
                "பகுதியை உலர்ந்ததும் நல்ல காற்றோட்டத்துடனும் வைத்திருக்கவும்.",
                "மின்சார புள்ளிகளின் அருகில் குழப்பம் தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் துணி துவைக்கும் இடம்.",
            suggestions: [
                "பரிந்துரைக்கப்படாத இடம் – நீர் தத்துவம் செல்வத்தை பாதிக்கலாம்.",
                "பணச் செலவுகள் அதிகரிக்கும் வாய்ப்பு உள்ளது.",
                "வாஷிங் மெஷினை கிழக்கு மூலையில் வைக்கவும்.",
                "இளநிறங்களும் பிரகாசமான வெளிச்சமும் பயன்படுத்தவும்.",
                "வடகிழக்கு மூலையை உலர்ந்ததாகவும் சுத்தமாகவும் வைத்திருக்கவும்.",
                "நீர் ஒழுகல் இருந்தால் உடனே சரி செய்யவும்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் துணி துவைக்கும் இடம்.",
            suggestions: [
                "காலை நேர நல்ல சக்தியை தடுக்கும்.",
                "ஆரோக்கியம் மற்றும் செல்வ நிலையை பாதிக்கலாம்.",
                "மிக இளநிறங்களும் இலகுரக பொருட்களும் பயன்படுத்தவும்.",
                "பகுதியை மிகச் சுத்தமாகவும் உலர்ந்ததாகவும் வைத்திருக்கவும்.",
                "வாஷிங் மெஷினை தெற்க்கிழக்கு மூலையில் வைக்கவும்.",
                "இடத்தை குழப்பமாக மாற்ற வேண்டாம்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் துணி துவைக்கும் இடம் – முக்கிய குறை.",
            suggestions: [
                "துணி துவைக்கும் இடத்திற்கு மிகவும் தவறான திசை.",
                "குடும்ப நிலைத்தன்மை மற்றும் உடல்நலத்தை பாதிக்கலாம்.",
                "இயன்றால் இடத்தை வடமேற்கிற்கு மாற்றவும்.",
                "இளநிறங்களும் மிகச் சுத்தமும் பயன்படுத்தவும்.",
                "பகுதியை உலர்ந்ததாகவும் ஒழுங்காகவும் வைத்திருக்கவும்.",
                "அழுக்குத் துணிகளை நீண்ட நேரம் சேமிக்க வேண்டாம்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் துணி துவைக்கும் இடம் – மிக மிக மோசமான இடம்.",
            suggestions: [
                "அனைத்து அம்சங்களுக்கும் தீங்கு விளைவிக்கும்.",
                "பெரிய உடல்நல மற்றும் பண பிரச்சனைகள் ஏற்படலாம்.",
                "இயன்றால் உடனடியாக இடத்தை மாற்றவும்.",
                "வெள்ளை நிறங்களும் முழுமையான சுத்தமும் பயன்படுத்தவும்.",
                "பகுதியை முற்றிலும் உலர்ந்ததும் குறைந்த பொருட்களுடனும் வைத்திருக்கவும்.",
                "முக்கிய திருத்தங்களுக்கு வாஸ்து நிபுணரை அணுகவும்."
            ]
        });
    }
    
    remedies.push({
        title: "பொதுவான துணி துவைக்கும் இடம் வாஸ்து குறிப்புகள்.",
        suggestions: [
            "துணி துவைக்கும் இடத்தை எப்போதும் சுத்தமாகவும் உலர்ந்ததாகவும் வைத்திருக்கவும்.",
            "நீர் ஒழுகல் இருந்தால் உடனடியாக சரி செய்யவும்.",
            "உலர்த்த போதிய காற்றோட்டம் இருக்க வேண்டும்.",
            "டிடர்ஜெண்ட்களை மூடிய அலமாரிகளில் வைத்திருக்கவும்.",
            "வாஷிங் மெஷினை நன்றாக பராமரிக்கவும்.",
            "அழுக்குத் துணிகள் குவியாமல் பார்த்துக்கொள்ளவும்."
        ]
    });
}
    
// Pantry
else if (lowerName.includes('pantry') || lowerName.includes('store') || 
         lowerName.includes('provision room') || lowerName.includes('ration storage')) {
    
    if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் பாண்ட்ரி – சிறந்த இடம்.",
            suggestions: [
                "உணவுப் பொருட்கள் சேமிப்பிற்கு மிகச் சிறந்த திசை.",
                "நீண்ட காலம் உணவுப் பொருட்கள் பாதுகாப்பாக இருக்கும்.",
                "தானியங்கள் மற்றும் உலர் உணவுகளை தென்மேற்கு மூலையில் வைக்கவும்.",
                "பழுப்பு, ஆரஞ்சு அல்லது மஞ்சள் போன்ற சூடான நிறங்களை பயன்படுத்தவும்.",
                "கனமான பொருட்களை தெற்கு மற்றும் மேற்கு சுவரில் வைக்கவும்.",
                "உணவின் தரத்தை பாதுகாக்க உதவும்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் பாண்ட்ரி.",
            suggestions: [
                "உணவு சேமிப்பு மற்றும் பாதுகாப்பிற்கு மிகவும் நல்லது.",
                "வீட்டு உணவுப் பொருட்களுக்கு நிலைத்தன்மை தரும்.",
                "கனமான பாத்திரங்களை தென்மேற்கு மூலையில் வைக்கவும்.",
                "பழுப்பு அல்லது மண்ணிற நிறங்களை பயன்படுத்தவும்.",
                "பாண்ட்ரியை ஒழுங்காகவும் சுத்தமாகவும் வைத்திருக்கவும்.",
                "நீண்டகால உணவு சேமிப்பிற்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் பாண்ட்ரி.",
            suggestions: [
                "பாண்ட்ரி மற்றும் சேமிப்பிற்கு நல்ல திசை.",
                "உணவுப் பொருட்களை சரியாக பாதுகாக்க உதவும்.",
                "பொருட்களை உலோக பாத்திரங்களில் சேமிக்கவும்.",
                "இளநிறங்களும் நல்ல வெளிச்சமும் பயன்படுத்தவும்.",
                "அடிக்கடி பயன்படும் பொருட்களை எளிதாக எடுக்க வைக்கவும்.",
                "நல்ல காற்றோட்டம் இருக்குமாறு செய்யவும்."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் பாண்ட்ரி.",
            suggestions: [
                "இலகுரக சேமிப்பிற்கு ஏற்றது.",
                "தினசரி பயன்பாட்டு பொருட்களுக்கு நல்லது.",
                "ஒழுங்கான அலமாரி அமைப்பை பயன்படுத்தவும்.",
                "பகுதியை சுத்தமாகவும் உலர்ந்ததாகவும் வைத்திருக்கவும்.",
                "இலகுரக உணவுப் பொருட்களை சேமிக்கவும்.",
                "மசாலா மற்றும் சுவையூட்டிகளுக்கு ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் பாண்ட்ரி.",
            suggestions: [
                "அக்னி தத்துவம் காரணமாக உணவு சேமிப்பிற்கு ஆபத்து.",
                "உணவுப் பொருட்கள் கெடும் வாய்ப்பு உள்ளது.",
                "வெள்ளை அல்லது நீலம் போன்ற குளிர்ச்சியான நிறங்களை பயன்படுத்தவும்.",
                "வெப்ப மூலங்களிலிருந்து உணவுப் பொருட்களை தள்ளி வைக்கவும்.",
                "பகுதியை குளிர்ச்சியாகவும் நல்ல காற்றோட்டத்துடனும் வைத்திருக்கவும்.",
                "எரியும் பொருட்களை தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் பாண்ட்ரி.",
            suggestions: [
                "பரிந்துரைக்கப்படாத இடம் – செல்வ சக்தியை பாதிக்கலாம்.",
                "உணவுப் பொருட்கள் வீணாகும் வாய்ப்பு உள்ளது.",
                "பொருட்களை காற்று புகாத பாத்திரங்களில் சேமிக்கவும்.",
                "இளநிறங்களும் பிரகாசமான வெளிச்சமும் பயன்படுத்தவும்.",
                "வடகிழக்கு மூலையை காலியாகவும் சுத்தமாகவும் வைத்திருக்கவும்.",
                "காலாவதியான பொருட்களை சேமிக்க வேண்டாம்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் பாண்ட்ரி.",
            suggestions: [
                "காலை நேர நல்ல சக்தியை தடுக்கும்.",
                "உணவின் தரம் மற்றும் تازாத்தன்மையை பாதிக்கலாம்.",
                "மிக இளநிறங்களும் இலகுரக பொருட்களும் பயன்படுத்தவும்.",
                "பாண்ட்ரியை குறைந்த பொருட்களுடன் ஒழுங்காக வைத்திருக்கவும்.",
                "பொருட்களை வெளிப்படையான பாத்திரங்களில் சேமிக்கவும்.",
                "இடத்தை குழப்பமாக மாற்ற வேண்டாம்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் பாண்ட்ரி – மிக மிக மோசமான இடம்.",
            suggestions: [
                "உணவு சேமிப்பிற்கு மிகவும் தீங்கு விளைவிக்கும்.",
                "உடல்நல பிரச்சனைகள் மற்றும் உணவு கெடுதல் ஏற்படலாம்.",
                "இயன்றால் உடனடியாக பாண்ட்ரியை மாற்றவும்.",
                "வெள்ளை நிறங்களும் மிகச் சுத்தமும் பயன்படுத்தவும்.",
                "அத்தியாவசியமான மிகக் குறைந்த பொருட்களை மட்டும் வைக்கவும்.",
                "பகுதியை முற்றிலும் உலர்ந்ததும் சுத்தமாகவும் வைத்திருக்கவும்."
            ]
        });
    }
    
    remedies.push({
        title: "பொதுவான பாண்ட்ரி வாஸ்து குறிப்புகள்.",
        suggestions: [
            "பாண்ட்ரியை சுத்தமாகவும் உலர்ந்ததாகவும் ஒழுங்காகவும் வைத்திருக்கவும்.",
            "தானியங்களை காற்று புகாத பாத்திரங்களில் சேமிக்கவும்.",
            "முதலில் வந்தது முதலில் பயன்படுத்தும் முறையை பின்பற்றவும்.",
            "கனமான பொருட்களை கீழ் அலமாரிகளில் வைக்கவும்.",
            "நல்ல காற்றோட்டமும் வெளிச்சமும் உறுதி செய்யவும்.",
            "காலாவதியான பொருட்களை அடிக்கடி சரிபார்க்கவும்."
        ]
    });
}

    
// TV / Family Room
else if (lowerName.includes('family room') || lowerName.includes('tv room') || 
         lowerName.includes('entertainment room') || lowerName.includes('recreation room')) {
    
    if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் குடும்ப அறை – சிறந்த இடம்.",
            suggestions: [
                "பொழுதுபோக்கு மற்றும் குடும்ப கூடுகைகளுக்கு மிகச் சிறந்த இடம்.",
                "குடும்ப ஒற்றுமையும் உரையாடலும் அதிகரிக்கும்.",
                "அறையின் தெற்க்கிழக்கு மூலையில் டிவியை வைக்கவும்.",
                "வெள்ளை, நீலம் அல்லது சாம்பல் போன்ற இளநிறங்களை பயன்படுத்தவும்.",
                "அமர்வு இடங்களை வடக்கு அல்லது கிழக்கு நோக்கி அமைக்கவும்.",
                "குடும்ப கலந்துரையாடல் மற்றும் பொழுதுபோக்கிற்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் குடும்ப அறை.",
            suggestions: [
                "மாலை நேர குடும்ப நேரத்திற்கு மிக நல்லது.",
                "படைப்பாற்றல் மற்றும் ஓய்வை ஊக்குவிக்கும்.",
                "டிவியை தெற்க்கிழக்கு மூலையில் வைத்து வடக்கு நோக்கி அமைக்கவும்.",
                "நல்ல வெளிச்சத்துடன் இளநிறங்களை பயன்படுத்தவும்.",
                "திரைப்பட இரவுகள் மற்றும் பொழுதுபோக்கிற்கு ஏற்றது.",
                "அறையை காற்றோட்டத்துடனும் சௌகரியமாகவும் வைத்திருக்கவும்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் குடும்ப அறை.",
            suggestions: [
                "குடும்ப பொழுதுபோக்கிற்கு நல்லது.",
                "ஒற்றுமை மற்றும் இணைப்பை அதிகரிக்கும்.",
                "டிவியை தெற்க்கிழக்கு மூலையில் வைக்கவும்.",
                "நீலம், பச்சை அல்லது வெள்ளை நிறங்களை பயன்படுத்தவும்.",
                "அமர்வுகளை வடக்கு அல்லது கிழக்கு நோக்கி அமைக்கவும்.",
                "வடகிழக்கு மூலையை திறந்ததாகவும் சுத்தமாகவும் வைத்திருக்கவும்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் குடும்ப அறை.",
            suggestions: [
                "மின்னணு பொழுதுபோக்கிற்கு ஏற்ற திசை.",
                "அக்னி தத்துவம் டிவி மற்றும் சாதனங்களுக்கு ஆதரவாக இருக்கும்.",
                "டிவியை தெற்க்கிழக்கு மூலையில் வைக்கவும்.",
                "சக்தியை சமநிலைப்படுத்த குளிர்ச்சியான நிறங்களை பயன்படுத்தவும்.",
                "சாதனங்களுக்கு போதிய காற்றோட்டம் இருக்க வேண்டும்.",
                "அறையை வெளிச்சமாகவும் மகிழ்ச்சியாகவும் வைத்திருக்கவும்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் குடும்ப அறை.",
            suggestions: [
                "பொழுதுபோக்கில் அதிக கவனம் செல்ல வாய்ப்பு உள்ளது.",
                "குடும்ப உரையாடல் குறையலாம்.",
                "டிவியை தெற்க்கிழக்கு மூலையில் வைக்கவும்.",
                "சக்தியை சமநிலைப்படுத்த இளநிறங்களை பயன்படுத்தவும்.",
                "அமர்வுகளை வடக்கு அல்லது கிழக்கு நோக்கி அமைக்கவும்.",
                "மின்னணு சாதன பயன்பாட்டை கட்டுப்படுத்தவும்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் குடும்ப அறை.",
            suggestions: [
                "காலை நேர செயலில் அதிகம் பயன்படுத்த ஏற்றது.",
                "காலை நேர நல்ல சக்தியை பாதிக்கலாம்.",
                "டிவியை தெற்க்கிழக்கு மூலையில் வைக்கவும்.",
                "இளநிறங்களுடன் குறைந்த அலங்காரங்களை பயன்படுத்தவும்.",
                "கிழக்கு ஜன்னல்களை சுத்தமாகவும் திறந்ததாகவும் வைத்திருக்கவும்.",
                "காலை நேர குடும்ப உடற்பயிற்சிக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் குடும்ப அறை – பரிந்துரைக்கப்படாத இடம்.",
            suggestions: [
                "சோம்பேறித்தனம் மற்றும் செயலற்ற நிலை ஏற்படலாம்.",
                "இந்த திசை பெற்றோர் அறைக்கு ஏற்றது.",
                "டிவியை தெற்க்கிழக்கு மூலையில் வைக்கவும்.",
                "இளநிறங்களும் பிரகாசமான வெளிச்சமும் பயன்படுத்தவும்.",
                "அறையை சுறுசுறுப்பாக வைத்திருக்கவும்.",
                "பாசிவ் பொழுதுபோக்கை குறைக்கவும்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் குடும்ப அறை – முக்கிய குறை.",
            suggestions: [
                "பொழுதுபோக்கிற்கு மிகவும் தவறான இடம்.",
                "குடும்ப ஒற்றுமை மற்றும் உடல்நலத்தை பாதிக்கலாம்.",
                "இயன்றால் அறையை வடமேற்கிற்கு மாற்றவும்.",
                "மிக இளநிறங்களும் அதிக வெளிச்சமும் பயன்படுத்தவும்.",
                "இந்த பகுதியில் பொழுதுபோக்கை குறைவாக வைத்திருக்கவும்.",
                "தியானம் அல்லது படிப்பிற்கு இந்த இடம் சிறந்தது."
            ]
        });
    }
    
    remedies.push({
        title: "பொதுவான குடும்ப அறை வாஸ்து குறிப்புகள்.",
        suggestions: [
            "டிவியை தெற்க்கிழக்கு மூலையில் வைக்கவும்.",
            "அமர்வுகளை வடக்கு அல்லது கிழக்கு நோக்கி அமைக்கவும்.",
            "அறையை நன்றாக வெளிச்சமுள்ளதும் காற்றோட்டமுள்ளதுமானதாக வைத்திருக்கவும்.",
            "மிக ஆடம்பரமில்லாத சௌகரியமான மரச்சாமான்களை பயன்படுத்தவும்.",
            "இடத்தை சுத்தமாகவும் குழப்பமில்லாமலும் வைத்திருக்கவும்.",
            "குடும்ப உரையாடலுக்கு போதிய இடம் இருக்க வேண்டும்."
        ]
    });
}
    
    
// Basement
else if (lowerName.includes('basement') || lowerName.includes('tala griha') || 
         lowerName.includes('underground room') || lowerName.includes('cellar')) {
    
    if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் பேஸ்மென்ட் – சிறந்த இடம்.",
            suggestions: [
                "பேஸ்மென்ட் பயன்பாடுகளுக்கு மிகச் சிறந்த திசை.",
                "பொழுதுபோக்கு அல்லது சேமிப்பிற்கு ஏற்றது.",
                "பிரகாசமான விளக்குகளும் வெள்ளை நிறங்களும் பயன்படுத்தவும்.",
                "வடகிழக்கு மூலையை முழுமையாக சுத்தமாக வைத்திருக்கவும்.",
                "நல்ல காற்றோட்ட அமைப்பை நிறுவவும்.",
                "ஹோம் தியேட்டர் அல்லது ஜிம் பயன்பாட்டிற்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் பேஸ்மென்ட்.",
            suggestions: [
                "பேஸ்மென்ட் பயன்பாட்டிற்கு ஏற்றுக்கொள்ளக்கூடிய இடம்.",
                "காலை நேர செயல்பாடுகளுக்கு நல்லது.",
                "மிக பிரகாசமான விளக்கு அமைப்பை பயன்படுத்தவும்.",
                "கிழக்கு பகுதியை சுத்தமாகவும் திறந்ததாகவும் வைத்திருக்கவும்.",
                "இயன்றால் இயற்கை ஒளிக்கான ஜன்னல்கள் அமைக்கவும்.",
                "சேமிப்பு அல்லது பயன்பாட்டு அறைக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் பேஸ்மென்ட் – முக்கிய குறை.",
            suggestions: [
                "பேஸ்மென்டுக்கு மிகவும் தவறான திசை.",
                "பெரிய உடல்நல மற்றும் பண பிரச்சனைகள் ஏற்படலாம்.",
                "இந்த இடத்தை வாழ்வதற்கு பயன்படுத்த வேண்டாம்.",
                "அவசியமெனில் இலகுரக சேமிப்பிற்கு மட்டும் பயன்படுத்தவும்.",
                "வடகிழக்கு மூலையில் பைரமிட் வைக்கவும்.",
                "பகுதியை மிகவும் சுத்தமாகவும் உலர்ந்ததாகவும் வைத்திருக்கவும்."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் பேஸ்மென்ட்.",
            suggestions: [
                "மிதமான அளவில் ஏற்றுக்கொள்ளக்கூடிய இடம்.",
                "சேமிப்பு அல்லது பயன்பாட்டு அறைக்கு பொருத்தமானது.",
                "நல்ல காற்றோட்டமும் வெளிச்சமும் பயன்படுத்தவும்.",
                "பகுதியை ஒழுங்காகவும் குழப்பமில்லாமலும் வைத்திருக்கவும்.",
                "ஈரப்பதத்தை கட்டுப்படுத்த டிஹ்யூமிடிஃபையர் பயன்படுத்தவும்.",
                "படுக்கையறை அல்லது வாழும் அறையாக பயன்படுத்த வேண்டாம்."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் பேஸ்மென்ட்.",
            suggestions: [
                "சில குறிப்பிட்ட பயன்பாடுகளுக்கு ஏற்றது.",
                "மாலை நேர பொழுதுபோக்கிற்கு நல்லது.",
                "சூடான வெளிச்சமும் இளநிறங்களும் பயன்படுத்தவும்.",
                "நல்ல காற்றோட்டம் உறுதி செய்யவும்.",
                "விளையாட்டு அல்லது பொழுதுபோக்கு அறைக்கு ஏற்றது.",
                "நன்றாக பராமரித்து சுத்தமாக வைத்திருக்கவும்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் பேஸ்மென்ட்.",
            suggestions: [
                "நிலைத்தன்மை தொடர்பான பிரச்சனைகள் ஏற்படலாம்.",
                "சேமிப்பிற்காக மட்டுமே பயன்படுத்தவும்.",
                "வலுவான வெளிச்ச அமைப்பை நிறுவவும்.",
                "தெற்கு சுவரை கனமாகவும் உறுதியானதாகவும் வைத்திருக்கவும்.",
                "வாழும் அறையாக பயன்படுத்த வேண்டாம்.",
                "கனமான பொருட்களை தென்மேற்கு பகுதியில் வைக்கவும்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் பேஸ்மென்ட்.",
            suggestions: [
                "நிலத்தடியில் அக்னி தத்துவ அபாயம் உள்ளது.",
                "மின்சார பிரச்சனைகள் ஏற்படலாம்.",
                "தீ பாதுகாப்பு உபகரணங்களை நிறுவவும்.",
                "வெள்ளை அல்லது நீலம் போன்ற குளிர்ச்சியான நிறங்களை பயன்படுத்தவும்.",
                "எரியும் பொருட்களை சேமிக்க வேண்டாம்.",
                "பகுதியை நல்ல காற்றோட்டத்துடன் வைத்திருக்கவும்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் பேஸ்மென்ட் – மிக மிக மோசமான இடம்.",
            suggestions: [
                "பேஸ்மென்டுக்கு மிகவும் தீங்கு விளைவிக்கும் திசை.",
                "கடுமையான உடல்நல மற்றும் உறவு பிரச்சனைகள் ஏற்படலாம்.",
                "இயன்றால் இந்த இடத்தை முழுமையாக பயன்படுத்தாமல் விடவும்.",
                "அவசியமெனில் மிகக் குறைந்த சேமிப்பிற்கு மட்டும் பயன்படுத்தவும்.",
                "தென்மேற்கு மூலையில் கனமான பைரமிட் வைக்கவும்.",
                "முக்கிய திருத்தங்களுக்கு வாஸ்து நிபுணரை அணுகவும்."
            ]
        });
    }
    
    remedies.push({
        title: "பொதுவான பேஸ்மென்ட் வாஸ்து குறிப்புகள்.",
        suggestions: [
            "முழுவதும் பிரகாசமான வெள்ளை விளக்குகளை பயன்படுத்தவும்.",
            "நல்ல காற்றோட்டமும் ஈரப்பதம் கட்டுப்படுத்தும் அமைப்பும் நிறுவவும்.",
            "பேஸ்மென்டை சுத்தமாகவும் உலர்ந்ததாகவும் வைத்திருக்கவும்.",
            "படுக்கையறை அல்லது பூஜை அறையாக பயன்படுத்த வேண்டாம்.",
            "சுவர் மற்றும் மாடியில் இளநிறங்களை பயன்படுத்தவும்.",
            "பாதுகாப்பு மற்றும் வெளியேறும் வழிகளை உறுதி செய்யவும்."
        ]
    });
}

    
//Garden
else if (lowerName.includes('garden') || lowerName.includes('lawn') || 
         lowerName.includes('bagicha') || lowerName.includes('green area') || 
         lowerName.includes('plants area') || lowerName.includes('backyard')) {
    
    if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் தோட்டம் – சிறந்த இடம்.",
            suggestions: [
                "பணவளம் மற்றும் முன்னேற்றத்திற்கு மிக நல்லது.",
                "பூச்செடிகள் மற்றும் சிறிய புதர்களை நட்டுவைக்கவும்.",
                "வடகிழக்கு பகுதியில் நீரூற்று அல்லது ஃபவுண்டைன் வைக்கவும்.",
                "பல்வேறு நிற பூக்களை வளர்க்கவும்.",
                "புல்வெளியை சுத்தமாகவும் பராமரிப்புடனும் வைத்திருக்கவும்.",
                "காலை நடை மற்றும் தியானத்திற்கு ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் தோட்டம்.",
            suggestions: [
                "காலை சூரியஒளி கிடைக்கும் செடிகளுக்கு சிறந்தது.",
                "உடல்நலம் மற்றும் நல்ல சக்தியை அதிகரிக்கும்.",
                "துளசி, பூச்செடிகள் மற்றும் மூலிகைகளை நட்டுவைக்கவும்.",
                "தோட்டத்தை திறந்ததாகவும் குழப்பமில்லாமலும் வைத்திருக்கவும்.",
                "சூரியோதய தியானம் மற்றும் யோகாவிற்கு ஏற்றது.",
                "இயற்கை கல் நடைபாதைகளை பயன்படுத்தவும்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் தோட்டம் – மிகவும் சிறந்தது.",
            suggestions: [
                "ஆன்மீக தோட்டத்திற்கு சிறந்த திசை.",
                "துளசி மற்றும் புனித மரங்களுக்கு ஏற்ற இடம்.",
                "இடத்தை திறந்ததாகவும் சுத்தமாகவும் வைத்திருக்கவும்.",
                "வடகிழக்கு மூலையில் சிறிய நீரூற்று வைக்கவும்.",
                "வெள்ளை நிற பூச்செடிகளை அதிகம் வளர்க்கவும்.",
                "தியானம் மற்றும் பிரார்த்தனைக்கு மிகச் சிறந்த இடம்."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் தோட்டம்.",
            suggestions: [
                "மூலிகை செடிகள் மற்றும் வாசனைத் தாவரங்களுக்கு ஏற்றது.",
                "சிறிய மரங்கள் மற்றும் செடிகளை நட்டுவைக்கவும்.",
                "தோட்டத்தை ஒழுங்காகவும் சீராகவும் வைத்திருக்கவும்.",
                "நல்ல சக்திக்காக காற்றாடிகளை பயன்படுத்தலாம்.",
                "மாலை நேர ஓய்விற்கு ஏற்ற இடம்.",
                "சரியான எல்லைகளை பராமரிக்கவும்."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் தோட்டம்.",
            suggestions: [
                "மாலை நேர தோட்ட செயல்களுக்கு நல்லது.",
                "மதிய வெயிலைத் தடுக்க நிழல் தரும் மரங்களை வளர்க்கவும்.",
                "பல்வேறு நிற பூச்செடிகளை நட்டுவைக்கவும்.",
                "சூரிய அஸ்தமனத்தை ரசிக்க ஏற்ற இடம்.",
                "மாலை பயன்பாட்டிற்கு நல்ல வெளிச்சம் அமைக்கவும்.",
                "வாசனை பூச்செடிகளை வளர்க்கவும்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் தோட்டம்.",
            suggestions: [
                "பெரிய மரங்கள் மற்றும் செடிகளுக்கு ஏற்ற இடம்.",
                "நிழல் தரும் மரங்களை தெற்கு பகுதியில் நட்டுவைக்கவும்.",
                "வெயிலுக்கு தாங்கும் செடிகள் மற்றும் பூக்களை தேர்வு செய்யவும்.",
                "புல்வெளியை சரியாக நீரூற்றி பராமரிக்கவும்.",
                "முள் செடிகளை இந்த பகுதியில் தவிர்க்கவும்.",
                "குளிர்கால வெயில் பெற நல்லது."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் தோட்டம்.",
            suggestions: [
                "பூச்செடிகளுக்கு ஏற்ற திசை.",
                "நிறமுள்ள மற்றும் அழகான பூக்களை நட்டுவைக்கவும்.",
                "சிகப்பு, ஆரஞ்சு, மஞ்சள் நிற பூக்களை வளர்க்கலாம்.",
                "தோட்டத்தை சுத்தமாக பராமரிக்கவும்.",
                "சூரியஒளியை மறைக்கும் பெரிய மரங்களை தவிர்க்கவும்.",
                "உரக்குழி அமைக்க ஏற்ற பகுதி."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் தோட்டம்.",
            suggestions: [
                "கனமான மரங்கள் மற்றும் பெரிய செடிகளுக்கு ஏற்றது.",
                "பெரிய மரங்களை தென்மேற்கு மூலையில் நட்டுவைக்கவும்.",
                "கனமான குடுவைகள் மற்றும் நில அமைப்புகளை பயன்படுத்தவும்.",
                "இந்த பகுதியில் நீரூற்று வைக்க வேண்டாம்.",
                "தோட்டத்தை ஒழுங்காக வைத்திருக்கவும்.",
                "வலுவான எல்லைகளை பராமரிக்கவும்."
            ]
        });
    }
    
    remedies.push({
        title: "பொதுவான தோட்ட வாஸ்து குறிப்புகள்.",
        suggestions: [
            "துளசியை வடகிழக்கு அல்லது கிழக்கு திசையில் நட்டுவைக்கவும்.",
            "முள் செடிகளை ரோஜாவை தவிர மற்றவை தவிர்க்கவும்.",
            "தோட்டத்தை எப்போதும் சுத்தமாக வைத்திருக்கவும்.",
            "இயற்கை உரம் மற்றும் பூச்சிக்கொல்லிகளை பயன்படுத்தவும்.",
            "நீரூற்றுகளை வடக்கு அல்லது கிழக்கில் அமைக்கவும்.",
            "வீட்டிற்கு மிக அருகில் பெரிய மரங்களை தவிர்க்கவும்."
        ]
    });
}
    
//Borewell / Water Source
else if (lowerName.includes('water source') || lowerName.includes('well') || 
         lowerName.includes('borewell') || lowerName.includes('water tank') || 
         lowerName.includes('jal strot') || lowerName.includes('underground water')) {
    
    if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் நீர் ஆதாரம் – மிகச் சிறந்த இடம்.",
            suggestions: [
                "நீருக்கான மிகச் சிறந்த திசை.",
                "செழிப்பு மற்றும் நல்ல சக்தியை வழங்கும்.",
                "இடத்தை சுத்தமாகவும் பராமரிப்புடனும் வைத்திருக்கவும்.",
                "டேங்க்களுக்கு வெள்ளை அல்லது நீல நிறம் பயன்படுத்தவும்.",
                "நீர் வீணாகாமல் கவனிக்கவும்.",
                "பூமிக்குள் நீர் சேமிப்பிற்கு ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் நீர் ஆதாரம்.",
            suggestions: [
                "நீரை அமைக்க ஏற்ற சிறந்த திசை.",
                "உடல்நலம் மற்றும் சுறுசுறுப்பை அதிகரிக்கும்.",
                "நீரை சுத்தமாகவும் தூய்மையாகவும் வைத்திருக்கவும்.",
                "இலகுரக நிற டேங்க்களை பயன்படுத்தவும்.",
                "காலை நேர நீர் பயன்பாட்டிற்கு நல்லது.",
                "முறையான பராமரிப்பு அவசியம்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் நீர் ஆதாரம்.",
            suggestions: [
                "பணவளம் மற்றும் வளர்ச்சிக்கு நல்லது.",
                "நிதி நிலைத்தன்மையை அதிகரிக்கும்.",
                "நீர் தொடர்ந்து ஓடக்கூடிய நிலையில் வைத்திருக்கவும்.",
                "நீலம் அல்லது வெள்ளை நிறங்களை பயன்படுத்தவும்.",
                "மேல்நிலை நீர்தேக்கத்திற்கு ஏற்ற இடம்.",
                "நீர் தேங்காமல் கவனிக்கவும்."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் நீர் ஆதாரம்.",
            suggestions: [
                "நீரை அமைக்க ஏற்றுக்கொள்ளக்கூடிய இடம்.",
                "சமூக தொடர்புகளை அதிகரிக்க உதவும்.",
                "நீர் ஆதாரத்தை நன்றாக பராமரிக்கவும்.",
                "இயன்றால் உலோக டேங்க்களை பயன்படுத்தவும்.",
                "நீர் ஓட்டம் சரியாக இருக்க வேண்டும்.",
                "இரண்டாம் நிலை நீர் ஆதாரத்திற்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் நீர் ஆதாரம்.",
            suggestions: [
                "மிதமான அளவில் ஏற்ற இடம்.",
                "படைப்பாற்றல் சக்தியை ஆதரிக்கும்.",
                "நீரை சுத்தமாகவும் சுழற்சியுடனும் வைத்திருக்கவும்.",
                "இளநிற டேங்க்களை பயன்படுத்தவும்.",
                "நீர் கசிவு இல்லாமல் கவனிக்கவும்.",
                "மாலை நேர நீர் பயன்பாட்டிற்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் நீர் ஆதாரம்.",
            suggestions: [
                "அக்னி மற்றும் நீர் தத்துவ முரண்பாடு உள்ளது.",
                "பணநிலைத்தன்மை பாதிக்கப்படலாம்.",
                "அக்னி தத்துவ சின்னங்களை அருகில் வைக்கவும்.",
                "சிகப்பு அல்லது ஆரஞ்சு நிறங்களை பரிகாரமாக பயன்படுத்தவும்.",
                "நீர் பயன்பாட்டை குறைவாக வைத்திருக்கவும்.",
                "பூமிக்குள் நீர் அமைப்பை தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் நீர் ஆதாரம்.",
            suggestions: [
                "நீருக்கு ஏற்ற திசை அல்ல.",
                "மரியாதை மற்றும் உடல்நலத்தை பாதிக்கலாம்.",
                "நீர் அருகில் பைரமிட் வைக்கவும்.",
                "இளநிறங்களும் நல்ல வெளிச்சமும் பயன்படுத்தவும்.",
                "நீர் எப்போதும் ஓடக்கூடியதாக வைத்திருக்கவும்.",
                "தெற்கு பகுதியில் மேல்நிலை டேங்க் தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் நீர் ஆதாரம் – மிக மோசமானது.",
            suggestions: [
                "நீருக்கான மிகவும் தீங்கு விளைவிக்கும் திசை.",
                "கடுமையான உடல்நல பிரச்சனைகள் ஏற்படலாம்.",
                "இயன்றால் நீர் ஆதாரத்தை மாற்றவும்.",
                "நீர் பகுதியில் கனமான கல் வைக்கவும்.",
                "மண் தத்துவ சின்னங்களை பரிகாரமாக பயன்படுத்தவும்.",
                "நீர் பயன்பாட்டை குறைவாக வைத்திருக்கவும்."
            ]
        });
    }
    
    remedies.push({
        title: "பொதுவான நீர் ஆதார வாஸ்து குறிப்புகள்.",
        suggestions: [
            "நீர் ஆதாரங்களை சுத்தமாகவும் கசிவு இல்லாமலும் வைத்திருக்கவும்.",
            "நீர் தேங்கி நிற்பதை தவிர்க்கவும்.",
            "மேல்நிலை நீர்தேக்கத்தை வடமேற்கில் அமைக்கவும்.",
            "பூமிக்குள் நீர் சேமிப்பு வடகிழக்கில் சிறந்தது.",
            "நீர் ஓட்டம் சீராக இருக்க வேண்டும்.",
            "முறையான பராமரிப்பு மற்றும் சுத்தம் அவசியம்."
        ]
    });
}


//septic Tank
else if (lowerName.includes('septic tank') || lowerName.includes('soak pit') || 
         lowerName.includes('waste disposal') || lowerName.includes('mal nikal')) {
    
    if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் செப்டிக் டேங்க் – ஏற்றுக்கொள்ளக்கூடிய இடம்.",
            suggestions: [
                "கழிவு நீர் அகற்றத்திற்கு குறைவான பாதிப்புள்ள திசை.",
                "டேங்கை மூடப்பட்ட நிலையில் நன்றாக பராமரிக்கவும்.",
                "எதிர்மறை சக்தியை உறிஞ்ச மரங்களை சுற்றிலும் நடவும்.",
                "போதுமான காற்றோட்டம் மற்றும் பாதுகாப்பு உறுதி செய்யவும்.",
                "முறைப்படி சுத்தம் மற்றும் பராமரிப்பு செய்யவும்.",
                "நீர் ஆதாரங்களுக்கு அருகில் அமைப்பதை தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் செப்டிக் டேங்க்.",
            suggestions: [
                "மிதமான அளவில் ஏற்றுக்கொள்ளக்கூடிய இடம்.",
                "டேங்கை நன்றாக மூடப்பட்டும் சீல் செய்யப்பட்டும் வைத்திருக்கவும்.",
                "நாற்றம் குறைக்க இயற்கை முறைகளை பயன்படுத்தவும்.",
                "வாசனை தரும் செடிகளை அருகில் வளர்க்கவும்.",
                "வாழும் பகுதிகளிலிருந்து பாதுகாப்பான தூரம் வைக்கவும்.",
                "தொழில்நுட்ப நிபுணர்களால் முறைப்படி சுத்தம் செய்யவும்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் செப்டிக் டேங்க்.",
            suggestions: [
                "சரியாக பராமரிக்காவிட்டால் உடல்நல பாதிப்பு ஏற்படலாம்.",
                "டேங்கை ஆழமாகவும் நன்றாக மூடியும் அமைக்கவும்.",
                "அருகில் கனமான கல் அல்லது பைரமிட் வைக்கவும்.",
                "இயற்கை நாற்றம் உறிஞ்சும் பொருட்களை பயன்படுத்தவும்.",
                "சரியான வடிகால் அமைப்பு இருக்க வேண்டும்.",
                "சமையல் தோட்டத்திற்கு அருகில் அமைப்பதை தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் செப்டிக் டேங்க்.",
            suggestions: [
                "அக்னி தத்துவம் மற்றும் கழிவு தத்துவ முரண்பாடு உள்ளது.",
                "செரிமானம் தொடர்பான உடல்நல பிரச்சனைகள் ஏற்படலாம்.",
                "பரிகாரமாக அக்னி தத்துவ சின்னங்களை வைக்கவும்.",
                "டேங்கை நன்றாக காற்றோட்டத்துடன் வைத்திருக்கவும்.",
                "ரசாயனமில்லா சுத்தம் செய்யும் முறைகளை பயன்படுத்தவும்.",
                "வேப்பமரம் போன்ற மரங்களை அருகில் நடலாம்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் செப்டிக் டேங்க் – மிக மோசமான இடம்.",
            suggestions: [
                "கழிவு நீர் அகற்றத்திற்கு மிகவும் தீங்கு விளைவிக்கும் திசை.",
                "குடும்ப உடல்நலம் மற்றும் நிலைத்தன்மையை பாதிக்கலாம்.",
                "இயன்றால் டேங்கை வடமேற்கிற்கு மாற்றவும்.",
                "கனமான பைரமிட் அல்லது கல் வைக்கவும்.",
                "பகுதியை சுத்தமாகவும் உலர்ந்ததாகவும் வைத்திருக்கவும்.",
                "மாற்றத்திற்கு நிபுணரின் ஆலோசனை பெறவும்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் செப்டிக் டேங்க்.",
            suggestions: [
                "பணச் சக்தியை தடுக்கும் திசை.",
                "பணச் செலவு அதிகரிக்கும் பிரச்சனைகள் ஏற்படலாம்.",
                "வடக்கு பகுதியில் பைரமிட் வைக்கவும்.",
                "டேங்கை குறைந்த அளவில் செயல்திறனுடன் வைத்திருக்கவும்.",
                "மேம்பட்ட கழிவு சிகிச்சை முறைகளை பயன்படுத்தவும்.",
                "நீர் ஆதாரங்களுக்கு அருகில் அமைப்பதை தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் செப்டிக் டேங்க்.",
            suggestions: [
                "காலை நேர நல்ல சக்தியை தடுக்கும்.",
                "உடல்நலம் மற்றும் செழிப்பை பாதிக்கலாம்.",
                "கிழக்கு பகுதியில் பைரமிட் வைக்கவும்.",
                "டேங்கை ஆழமாகவும் நன்றாக மூடியும் வைத்திருக்கவும்.",
                "இயற்கை சுத்திகரிப்பு முறைகளை பயன்படுத்தவும்.",
                "முக்கிய நுழைவாயிலுக்கு அருகில் அமைக்க வேண்டாம்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் செப்டிக் டேங்க் – மிகவும் ஆபத்தானது.",
            suggestions: [
                "மிகவும் தீங்கு விளைவிக்கும் அமைப்பு.",
                "பெரிய உடல்நல மற்றும் பண பிரச்சனைகள் ஏற்படலாம்.",
                "இயன்றால் உடனே டேங்கை மாற்றவும்.",
                "வடகிழக்கு பகுதியில் கனமான பைரமிட் வைக்கவும்.",
                "மேம்பட்ட கழிவு மேலாண்மை முறைகளை பயன்படுத்தவும்.",
                "அவசரமாக வாஸ்து நிபுணரை அணுகவும்."
            ]
        });
    }
    
    remedies.push({
        title: "பொதுவான செப்டிக் டேங்க் வாஸ்து குறிப்புகள்.",
        suggestions: [
            "சிறந்த முறையில் வடமேற்கு திசையில் அமைக்கவும்.",
            "வீடு மற்றும் நீர் ஆதாரங்களிலிருந்து பாதுகாப்பான தூரம் வைக்கவும்.",
            "முறையான மூடல் மற்றும் காற்றோட்டம் உறுதி செய்யவும்.",
            "முறைப்படி சுத்தம் மற்றும் பராமரிப்பு செய்யவும்.",
            "இயற்கை நாற்றக் கட்டுப்பாட்டு முறைகளை பயன்படுத்தவும்.",
            "சமையலறை, பூஜை அறை, படுக்கையறை அருகில் தவிர்க்கவும்."
        ]
    });
}
    
    
//Electric Meter
else if (lowerName.includes('electric meter') || lowerName.includes('meter room') || 
         lowerName.includes('bijli meter') || lowerName.includes('electrical meter')) {
    
    if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் மின்மீட்டர் – சிறந்த இடம்.",
            suggestions: [
                "மின்சாதனங்களுக்கு மிகச் சிறந்த திசை.",
                "அக்னி தத்துவம் மின் சக்தியை ஆதரிக்கும்.",
                "மீட்டரை தெற்க்கிழக்கு சுவரில் கிழக்கு நோக்கி அமைக்கவும்.",
                "அருகில் சிவப்பு, ஆரஞ்சு அல்லது மஞ்சள் நிறங்களை பயன்படுத்தவும்.",
                "பகுதியை சுத்தமாகவும் எளிதில் அணுகக்கூடியதாகவும் வைத்திருக்கவும்.",
                "மின் ஓட்டம் சிறப்பாக செயல்படும்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் மின்மீட்டர்.",
            suggestions: [
                "மின்சாதனங்களுக்கு ஏற்ற இடம்.",
                "மின் செயல்திறனை மேம்படுத்தும்.",
                "மீட்டரை கிழக்கு சுவரில் அமைக்கவும்.",
                "இளநிறங்களுடன் பாதுகாப்பு கவனம் செலுத்தவும்.",
                "பகுதியை வெளிச்சமாகவும் அணுக எளிதாகவும் வைத்திருக்கவும்.",
                "சரியான எர்த்திங் அமைப்பு அவசியம்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் மின்மீட்டர்.",
            suggestions: [
                "ஏற்றுக்கொள்ளக்கூடிய அமைப்பு.",
                "அக்னி தத்துவம் மின் ஓட்டத்தை ஆதரிக்கும்.",
                "மீட்டரை தெற்கு சுவரில் அமைக்கவும்.",
                "பாதுகாப்பான மூடுபெட்டியை பயன்படுத்தவும்.",
                "பகுதியை சுத்தமாகவும் ஒழுங்காகவும் வைத்திருக்கவும்.",
                "நல்ல காற்றோட்டம் உறுதி செய்யவும்."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் மின்மீட்டர்.",
            suggestions: [
                "மிதமான அளவில் ஏற்ற இடம்.",
                "மின் ஏற்ற இறக்கங்கள் ஏற்படலாம்.",
                "மீட்டரை உலோக பாதுகாப்புப் பெட்டியில் வைக்கவும்.",
                "சரியான எர்த்திங் மற்றும் பாதுகாப்பு அவசியம்.",
                "பகுதியை நன்றாக பராமரிக்கவும்.",
                "முறைப்படி பாதுகாப்பு சோதனை செய்யவும்."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் மின்மீட்டர்.",
            suggestions: [
                "மின் தொடர்பான பிரச்சனைகள் ஏற்படலாம்.",
                "மீட்டரை பாதுகாப்பான பெட்டியில் வைக்கவும்.",
                "சர்ஜ் பாதுகாப்பு சாதனங்களை பயன்படுத்தவும்.",
                "பகுதியை சுத்தமாகவும் உலர்ந்ததாகவும் வைத்திருக்கவும்.",
                "முறைப்படி பராமரிப்பு அவசியம்.",
                "வைரிங் பாதுகாப்பு உறுதி செய்யவும்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் மின்மீட்டர்.",
            suggestions: [
                "மின்சாதனங்களுக்கு ஏற்ற திசை அல்ல.",
                "நீர் தத்துவம் மின்சக்தியுடன் முரண்படும்.",
                "நீர்ப்புகா பாதுகாப்புப் பெட்டியில் வைக்கவும்.",
                "சரியான இன்சுலேஷன் மற்றும் பாதுகாப்பு தேவை.",
                "பகுதியை உலர்ந்ததாக வைத்திருக்கவும்.",
                "பாதுகாப்பு ஸ்விட்ச்களை நிறுவவும்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் மின்மீட்டர் – மிக மோசமான இடம்.",
            suggestions: [
                "மின்மீட்டருக்கு மிகவும் தீங்கு விளைவிக்கும் திசை.",
                "பாதுகாப்பு ஆபத்துகள் மற்றும் கோளாறுகள் ஏற்படலாம்.",
                "இயன்றால் மீட்டரை தெற்க்கிழக்கிற்கு மாற்றவும்.",
                "கனமான பாதுகாப்புப் பெட்டியை பயன்படுத்தவும்.",
                "கூடுதல் பாதுகாப்பு ஏற்பாடுகள் செய்யவும்.",
                "தொழில்நுட்ப நிபுணரால் முறைப்படி சோதனை செய்யவும்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் மின்மீட்டர் – மிகவும் ஆபத்தானது.",
            suggestions: [
                "மிகவும் தீங்கு விளைவிக்கும் அமைப்பு.",
                "பெரிய மின் கோளாறுகள் ஏற்படலாம்.",
                "இயன்றால் உடனே மீட்டரை மாற்றவும்.",
                "அதிக பாதுகாப்பு முன்னெச்சரிக்கைகள் எடுக்கவும்.",
                "தீ பாதுகாப்பு சாதனங்களை அருகில் வைக்கவும்.",
                "மின் நிபுணரை அணுகி மாற்றம் செய்யவும்."
            ]
        });
    }
    
    remedies.push({
        title: "பொதுவான மின்மீட்டர் வாஸ்து குறிப்புகள்.",
        suggestions: [
            "மின்மீட்டரை சிறந்த முறையில் தெற்க்கிழக்கு திசையில் அமைக்கவும்.",
            "மீட்டரை சுத்தமாகவும் எளிதில் அணுகக்கூடியதாகவும் வைத்திருக்கவும்.",
            "சரியான எர்த்திங் மற்றும் பாதுகாப்பு ஏற்பாடுகள் அவசியம்.",
            "முறைப்படி பராமரிப்பு மற்றும் பாதுகாப்பு சோதனை செய்யவும்.",
            "நீர் ஆதாரங்களுக்கு அருகில் அமைக்க வேண்டாம்.",
            "பாதுகாப்பான மூடுபெட்டிகளை பயன்படுத்தவும்."
        ]
    });
}

    
//UPS Room
else if (lowerName.includes('inverter') || lowerName.includes('generator') || 
         lowerName.includes('power backup') || lowerName.includes('ups room')) {
    
    if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் யூபிஎஸ் / இன்வெர்டர் அறை – சிறந்த இடம்.",
            suggestions: [
                "மின் ஆதரவு சாதனங்களுக்கு மிகச் சிறந்த திசை.",
                "அக்னி தத்துவம் மின் உற்பத்திக்கு ஆதரவாக இருக்கும்.",
                "சாதனங்களை தெற்க்கிழக்கு மூலையில் கிழக்கு நோக்கி வைக்கவும்.",
                "வெப்பம் வெளியேற நல்ல காற்றோட்டம் ஏற்படுத்தவும்.",
                "பகுதியை சுத்தமாகவும் எளிதில் அணுகக்கூடியதாகவும் வைத்திருக்கவும்.",
                "சிறந்த செயல்திறன் மற்றும் பாதுகாப்பு கிடைக்கும்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் ஜெனரேட்டர் / இன்வெர்டர்.",
            suggestions: [
                "மின் ஆதரவு சாதனங்களுக்கு ஏற்ற திசை.",
                "அக்னி தத்துவம் மின் உற்பத்தியை ஆதரிக்கும்.",
                "சரியான எக்ஸாஸ்ட் உடன் தெற்கு பகுதியில் வைக்கவும்.",
                "தேவைப்பட்டால் சத்தம் குறைக்கும் பெட்டி பயன்படுத்தவும்.",
                "நல்ல காற்றோட்ட அமைப்பு இருக்க வேண்டும்.",
                "பகுதியை சுத்தமாகவும் ஒழுங்காகவும் வைத்திருக்கவும்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் மின் ஆதரவு அமைப்பு.",
            suggestions: [
                "இன்வெர்டர் அமைப்பிற்கு ஏற்றுக்கொள்ளக்கூடிய இடம்.",
                "மின் ஓட்டம் சீராக கிடைக்கும்.",
                "சாதனங்களை பாதுகாப்பான பெட்டியில் வைக்கவும்.",
                "குழந்தைகள் மற்றும் செல்லப்பிராணிகளிடமிருந்து பாதுகாக்கவும்.",
                "பகுதியை உலர்ந்ததாகவும் காற்றோட்டத்துடனும் வைத்திருக்கவும்.",
                "முறைப்படி பராமரிப்பு அவசியம்."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் ஜெனரேட்டர் / இன்வெர்டர்.",
            suggestions: [
                "மிதமான அளவில் ஏற்றுக்கொள்ளக்கூடிய இடம்.",
                "சத்தம் தொடர்பான தொந்தரவு ஏற்படலாம்.",
                "சத்தம் குறைக்கும் ஏற்பாடுகளை செய்யவும்.",
                "பாதுகாப்புக்காக உலோக பெட்டியில் வைக்கவும்.",
                "வாழும் பகுதிகளிலிருந்து தூரம் வைக்கவும்.",
                "சரியான எக்ஸாஸ்ட் அமைப்பு இருக்க வேண்டும்."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் மின் ஆதரவு அமைப்பு.",
            suggestions: [
                "மின் ஏற்ற இறக்கங்கள் ஏற்பட வாய்ப்பு உள்ளது.",
                "சாதனங்களை பாதுகாப்பான பெட்டியில் வைக்கவும்.",
                "சர்ஜ் பாதுகாப்பு சாதனங்களை பயன்படுத்தவும்.",
                "பகுதியை சுத்தமாகவும் உலர்ந்ததாகவும் வைத்திருக்கவும்.",
                "முறைப்படி பராமரிப்பு அவசியம்.",
                "வைரிங் பாதுகாப்பு உறுதி செய்யவும்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் இன்வெர்டர் / ஜெனரேட்டர்.",
            suggestions: [
                "மின் சாதனங்களுக்கு ஏற்ற திசை அல்ல.",
                "நீர் தத்துவம் மின்சக்தியுடன் முரண்படும்.",
                "நீர்ப்புகா மற்றும் பாதுகாப்பான பெட்டியில் வைக்கவும்.",
                "சரியான இன்சுலேஷன் மற்றும் பாதுகாப்பு அவசியம்.",
                "பகுதியை உலர்ந்ததாகவும் நன்றாக பராமரிக்கவும்.",
                "பாதுகாப்பு ஸ்விட்ச் மற்றும் சர்க்யூட் பிரேக்கர் அமைக்கவும்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் மின் ஆதரவு அமைப்பு – மிக மோசமான இடம்.",
            suggestions: [
                "மின் சாதனங்களுக்கு மிகவும் தீங்கு விளைவிக்கும் திசை.",
                "பாதுகாப்பு ஆபத்துகள் மற்றும் கோளாறுகள் ஏற்படலாம்.",
                "இயன்றால் சாதனங்களை தெற்க்கிழக்கிற்கு மாற்றவும்.",
                "கனமான பாதுகாப்புப் பெட்டியை பயன்படுத்தவும்.",
                "கூடுதல் பாதுகாப்பு ஏற்பாடுகள் செய்யவும்.",
                "தொழில்நுட்ப நிபுணரால் முறைப்படி சோதனை செய்யவும்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் ஜெனரேட்டர் / இன்வெர்டர் – மிகவும் ஆபத்தானது.",
            suggestions: [
                "மிகவும் தீங்கு விளைவிக்கும் அமைப்பு.",
                "பெரிய மின் விபத்துகள் ஏற்பட வாய்ப்பு உள்ளது.",
                "இயன்றால் உடனே சாதனங்களை மாற்றவும்.",
                "அதிக பாதுகாப்பு முன்னெச்சரிக்கைகள் எடுக்கவும்.",
                "தீ பாதுகாப்பு சாதனங்களை அருகில் வைக்கவும்.",
                "மின் நிபுணரை அணுகி அவசர மாற்றம் செய்யவும்."
            ]
        });
    }
    
    remedies.push({
        title: "பொதுவான மின் ஆதரவு அறை வாஸ்து குறிப்புகள்.",
        suggestions: [
            "சிறந்த முறையில் தெற்க்கிழக்கு திசையில் அமைக்கவும்.",
            "நல்ல காற்றோட்டம் மற்றும் குளிர்ச்சியை உறுதி செய்யவும்.",
            "சாதனங்களை சுத்தமாகவும் எளிதில் அணுகக்கூடியதாகவும் வைத்திருக்கவும்.",
            "முறைப்படி பராமரிப்பு மற்றும் பாதுகாப்பு சோதனை செய்யவும்.",
            "சரியான எர்த்திங் மற்றும் சர்ஜ் பாதுகாப்பு அவசியம்.",
            "நீர் ஆதாரங்கள் அல்லது படுக்கையறைகளுக்கு அருகில் தவிர்க்கவும்."
        ]
    });
}
    
    
//overhead tank
else if (lowerName.includes('overhead tank') || lowerName.includes('water tank') || 
         lowerName.includes('sinchai tank') || lowerName.includes('pani ka tank') ||
         lowerName.includes('storage tank')) {
    
    if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் மேல்நிலை நீர்தேக்கம் – சிறந்த இடம்.",
            suggestions: [
                "மேல்நிலை நீர் சேமிப்பிற்கு மிகச் சிறந்த திசை.",
                "நீர் அழுத்தம் மற்றும் வழங்கல் நிலைத்திருக்கும்.",
                "மேற்கு திசையின் வடமேற்கு பகுதியில் டேங்கை வைக்கவும்.",
                "நீலம், வெள்ளை அல்லது கருப்பு நிறங்களை பயன்படுத்தவும்.",
                "வலுவான ஆதாரம் மற்றும் சரியான பொருத்தம் அவசியம்.",
                "வீட்டு நீர் தேவைக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் மேல்நிலை நீர்தேக்கம்.",
            suggestions: [
                "மேல்நிலை நீர் சேமிப்பிற்கு மிக நல்லது.",
                "நீர் ஓட்டம் மற்றும் பகிர்வு சீராக இருக்கும்.",
                "டேங்கை வலுவாக ஆதரித்து பாதுகாப்பாக அமைக்கவும்.",
                "உலோகம் அல்லது பிளாஸ்டிக் டேங்க் பயன்படுத்தலாம்.",
                "டேங்கை மூடப்பட்டும் சுத்தமாகவும் வைத்திருக்கவும்.",
                "தினசரி நீர் பயன்பாட்டிற்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் மேல்நிலை நீர்தேக்கம்.",
            suggestions: [
                "கனமான நீர் சேமிப்பிற்கு ஏற்ற இடம்.",
                "நிலைத்தன்மை மற்றும் வலுவான ஆதாரம் கிடைக்கும்.",
                "டேங்கை நன்றாக வலுப்படுத்தி அமைக்கவும்.",
                "நீலம் அல்லது கருப்பு போன்ற கருநிறங்களை பயன்படுத்தவும்.",
                "டேங்கை கசிவு இல்லாமல் பராமரிக்கவும்.",
                "பெரிய கொள்ளளவு சேமிப்பிற்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் மேல்நிலை நீர்தேக்கம்.",
            suggestions: [
                "நீர் கசிவு இருந்தால் பணச் சக்தி பாதிக்கப்படும்.",
                "எந்தவித கசிவும் இல்லாமல் கவனிக்கவும்.",
                "வடக்கு திசையின் வடமேற்கு பகுதியில் டேங்கை வைக்கவும்.",
                "சரியான இன்சுலேஷன் மற்றும் பராமரிப்பு அவசியம்.",
                "முறையாக விரிசல் மற்றும் சேதங்களை பரிசோதிக்கவும்.",
                "வடகிழக்கு பகுதியில் நேரடியாக வைக்க வேண்டாம்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் மேல்நிலை நீர்தேக்கம்.",
            suggestions: [
                "நீர் பயன்பாடு அதிகரிக்க வாய்ப்பு உள்ளது.",
                "தெற்கு திசையின் தென்மேற்கு பகுதியில் டேங்கை வைக்கவும்.",
                "வெயிலை உறிஞ்ச கருநிறங்களை பயன்படுத்தவும்.",
                "வலுவான ஆதார அமைப்பு இருக்க வேண்டும்.",
                "நீர் ஆவியாகாமல் டேங்கை மூடவும்.",
                "முறைப்படி பராமரிப்பு அவசியம்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் மேல்நிலை நீர்தேக்கம்.",
            suggestions: [
                "காலை நேர நல்ல சக்தியை தடுக்கும்.",
                "உடல்நலம் மற்றும் செழிப்பை பாதிக்கலாம்.",
                "தவிர்க்க முடியாவிட்டால் வடகிழக்கு மூலையில் வைக்கவும்.",
                "இளநிறங்களை பயன்படுத்தி மிகவும் சுத்தமாக வைத்திருக்கவும்.",
                "வீட்டின் மீது நிழல் விழாமல் பார்த்துக்கொள்ளவும்.",
                "டேங்கின் அளவை குறைவாக வைத்திருக்கவும்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் மேல்நிலை நீர்தேக்கம் – மிக மோசமான இடம்.",
            suggestions: [
                "அக்னி மற்றும் நீர் தத்துவ முரண்பாடு உள்ளது.",
                "மின் மற்றும் உடல்நல பிரச்சனைகள் ஏற்படலாம்.",
                "இயன்றால் டேங்கை மேற்கு அல்லது வடமேற்கிற்கு மாற்றவும்.",
                "தீ எதிர்ப்பு பொருட்களை பயன்படுத்தவும்.",
                "மின்கம்பிகளுக்கு அருகில் வைக்க வேண்டாம்.",
                "முறைப்படி பாதுகாப்பு சோதனை செய்யவும்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் மேல்நிலை நீர்தேக்கம் – மிகவும் ஆபத்தானது.",
            suggestions: [
                "மிகவும் தீங்கு விளைவிக்கும் அமைப்பு.",
                "பெரிய உடல்நல மற்றும் பண பிரச்சனைகள் ஏற்படலாம்.",
                "இயன்றால் உடனே டேங்கை மாற்றவும்.",
                "மாற்ற முடியாவிட்டால் மிகச் சிறியதாகவும் சுத்தமாகவும் வைத்திருக்கவும்.",
                "வெள்ளை நிறம் பயன்படுத்தி அடிக்கடி சுத்தம் செய்யவும்.",
                "திருத்தங்களுக்கு வாஸ்து நிபுணரை அணுகவும்."
            ]
        });
    }
    
    remedies.push({
        title: "பொதுவான மேல்நிலை நீர்தேக்கம் வாஸ்து குறிப்புகள்.",
        suggestions: [
            "மேல்நிலை நீர்தேக்கத்தை மேற்கு அல்லது வடமேற்கு திசையில் அமைக்கவும்.",
            "வலுவான ஆதாரம் மற்றும் பாதுகாப்பு உறுதி செய்யவும்.",
            "டேங்கை மூடப்பட்டும் அடிக்கடி சுத்தம் செய்தும் வைத்திருக்கவும்.",
            "நீர் கசிவு இருந்தால் உடனே சரி செய்யவும்.",
            "வடகிழக்கு மற்றும் கிழக்கு திசைகளை தவிர்க்கவும்.",
            "முறைப்படி பராமரிப்பு மிகவும் அவசியம்."
        ]
    });
}

    
//Heting Room
else if (lowerName.includes('fireplace') || lowerName.includes('heater') || 
         lowerName.includes('agni sthan') || lowerName.includes('heating area')) {
    
    if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் வெப்ப அறை – சிறந்த இடம்.",
            suggestions: [
                "அக்னி சார்ந்த அமைப்புகளுக்கு மிகவும் ஏற்ற திசை.",
                "அக்னேய மூலை இயல்பாகவே வெப்ப சக்தியை ஆதரிக்கும்.",
                "வெப்ப அமைப்பை தெற்க்கிழக்கு மூலையில் கிழக்கு நோக்கி அமைக்கவும்.",
                "சிகப்பு, ஆரஞ்சு அல்லது மஞ்சள் நிறங்களை சுற்றிலும் பயன்படுத்தவும்.",
                "போதுமான காற்றோட்டம் மற்றும் பாதுகாப்பு உறுதி செய்யவும்.",
                "வெப்பத்திற்கும் அடுப்பு பயன்பாட்டிற்கும் ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் வெப்ப அறை.",
            suggestions: [
                "வெப்ப அமைப்பிற்கு ஏற்ற திசை.",
                "அக்னி தத்துவம் வெப்ப உற்பத்தியை ஆதரிக்கும்.",
                "தெற்கு சுவரில் வெப்ப அமைப்பை அமைக்கவும்.",
                "சரியான புகை வெளியேற்றும் அமைப்பு அவசியம்.",
                "தீ பாதுகாப்பு ஏற்பாடுகள் கட்டாயம்.",
                "பகுதியை சுத்தமாகவும் ஒழுங்காகவும் வைத்திருக்கவும்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் வெப்ப அறை.",
            suggestions: [
                "சில முன்னெச்சரிக்கைகளுடன் ஏற்றுக்கொள்ளலாம்.",
                "காலை நேர வெப்பம் கிடைக்க உதவும்.",
                "கிழக்கு பகுதியின் தெற்க்கிழக்கு மூலையில் அமைக்கவும்.",
                "பாதுகாப்பான மூடுபெட்டிகளை பயன்படுத்தவும்.",
                "நல்ல காற்றோட்ட அமைப்பு இருக்க வேண்டும்.",
                "எளிதில் எரியும் பொருட்களை அருகில் வைக்க வேண்டாம்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் வெப்ப அறை.",
            suggestions: [
                "நீர் மற்றும் அக்னி தத்துவ முரண்பாடு உள்ளது.",
                "சக்தி சமநிலையின்மை ஏற்படலாம்.",
                "வடமேற்கு மூலையில் மாற்றி அமைக்க பரிந்துரை.",
                "சரியான இன்சுலேஷன் மற்றும் பாதுகாப்பு அவசியம்.",
                "பகுதியை நல்ல காற்றோட்டத்துடன் வைத்திருக்கவும்.",
                "தீ பாதுகாப்பு சாதனங்களை நிறுவவும்."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் வெப்ப அறை.",
            suggestions: [
                "உறவு தொடர்பான பதற்றம் ஏற்படலாம்.",
                "காற்று தத்துவம் அக்னியுடன் முரண்படும்.",
                "பாதுகாப்புக்காக உலோக மூடுபெட்டியில் அமைக்கவும்.",
                "சரியான காற்றோட்ட அமைப்பு அவசியம்.",
                "படுக்கையறைகளுக்கு அருகில் வைக்க வேண்டாம்.",
                "முறைப்படி பாதுகாப்பு சோதனை செய்யவும்."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் வெப்ப அறை.",
            suggestions: [
                "மாலை நேர பயன்பாட்டிற்கு மிதமான அளவில் ஏற்றது.",
                "படைப்பாற்றல் சக்தியை ஆதரிக்கலாம்.",
                "மேற்கு பகுதியின் தென்மேற்கு பகுதியில் அமைக்கவும்.",
                "சரியான புகை வெளியேற்றும் அமைப்பு தேவை.",
                "மாலை நேர காற்றோட்டம் உறுதி செய்யவும்.",
                "பாதுகாப்பு சாதனங்களை அருகில் வைத்திருக்கவும்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் வெப்ப அறை – மிக மோசமான இடம்.",
            suggestions: [
                "அக்னி சார்ந்த அமைப்புகளுக்கு மிகவும் தீங்கு விளைவிக்கும்.",
                "உடல்நலம் மற்றும் நிலைத்தன்மை பாதிக்கப்படலாம்.",
                "இயன்றால் தெற்க்கிழக்கிற்கு மாற்றவும்.",
                "கனமான பாதுகாப்பு மூடுபெட்டிகளை பயன்படுத்தவும்.",
                "மேம்பட்ட தீ பாதுகாப்பு அமைப்புகளை நிறுவவும்.",
                "மாற்றத்திற்கு நிபுணரின் ஆலோசனை பெறவும்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் வெப்ப அறை – மிக மிக ஆபத்தானது.",
            suggestions: [
                "மிகவும் தீங்கு விளைவிக்கும் அமைப்பு.",
                "பெரிய தீ விபத்துகள் மற்றும் உடல்நல பிரச்சனைகள் ஏற்படலாம்.",
                "இயன்றால் உடனடியாக மாற்றவும்.",
                "அதிகபட்ச தீ பாதுகாப்பு முன்னெச்சரிக்கைகள் எடுக்கவும்.",
                "பல பாதுகாப்பு அமைப்புகளை நிறுவவும்.",
                "அவசரமாக வாஸ்து நிபுணரை அணுகவும்."
            ]
        });
    }
    
    remedies.push({
        title: "பொதுவான வெப்ப அறை வாஸ்து குறிப்புகள்.",
        suggestions: [
            "வெப்ப அமைப்புகளை சிறந்த முறையில் தெற்க்கிழக்கு திசையில் அமைக்கவும்.",
            "சரியான காற்றோட்டம் மற்றும் புகை வெளியேற்றும் அமைப்பு அவசியம்.",
            "தீ பாதுகாப்பு சாதனங்களை எப்போதும் தயாராக வைத்திருக்கவும்.",
            "முறைப்படி பராமரிப்பு மற்றும் பாதுகாப்பு சோதனை செய்யவும்.",
            "மர கட்டமைப்புகளுக்கு அருகில் வைக்க வேண்டாம்.",
            "பாதுகாப்பு தடுப்புகள் மற்றும் மூடுபெட்டிகள் பயன்படுத்தவும்."
        ]
    });
}
    
    
//Cash Locker
else if (lowerName.includes('cash locker') || lowerName.includes('safe') || 
         lowerName.includes('money storage') || lowerName.includes('dhan rakha')) {
    
    if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் பணப்பெட்டி – சிறந்த இடம்.",
            suggestions: [
                "செல்வ சேமிப்பிற்கு மிகச் சிறந்த திசை.",
                "குபேர திசை நிதி வளர்ச்சியை அதிகரிக்கும்.",
                "வடக்கு சுவரில் வடக்கு நோக்கி பெட்டியை வைக்கவும்.",
                "நீலம், பச்சை அல்லது வெள்ளி நிறங்களை பயன்படுத்தவும்.",
                "பகுதியை சுத்தமாகவும் ஒழுங்காகவும் வைத்திருக்கவும்.",
                "மதிப்புள்ள பொருட்கள் மற்றும் ஆவணங்களுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் பணப்பெட்டி.",
            suggestions: [
                "பண பாதுகாப்பிற்கு ஏற்ற இடம்.",
                "நிலைத்தன்மை மற்றும் பாதுகாப்பு கிடைக்கும்.",
                "தெற்கு சுவரில் வடக்கு நோக்கி பெட்டியை வைக்கவும்.",
                "கனமான மற்றும் வலுவான பெட்டியை பயன்படுத்தவும்.",
                "பகுதியை மறைந்ததாகவும் பாதுகாப்பாகவும் வைத்திருக்கவும்.",
                "நீண்டகால சேமிப்பிற்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் பணப்பெட்டி.",
            suggestions: [
                "மிக உயர்ந்த பாதுகாப்பு கிடைக்கும் இடம்.",
                "செல்வ நிலைத்தன்மை அதிகரிக்கும்.",
                "தென்மேற்கு மூலையில் பெட்டியை வைக்கவும்.",
                "வலுவான பூட்டுகளுடன் கனமான பெட்டி பயன்படுத்தவும்.",
                "பகுதியை தனிமைப்படுத்தி மறைத்து வைத்திருக்கவும்.",
                "மதிப்புள்ள சொத்துகளுக்கு ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் பணப்பெட்டி.",
            suggestions: [
                "நிதி பாதுகாப்பிற்கு நல்ல இடம்.",
                "சேமிப்பை பாதுகாக்க உதவும்.",
                "மேற்கு சுவரில் கிழக்கு நோக்கி பெட்டியை வைக்கவும்.",
                "உலோக பெட்டி பயன்படுத்துவது நல்லது.",
                "பகுதியை சுத்தமாக வைத்திருக்கவும்.",
                "முறைப்படி பராமரித்து சரிபார்க்கவும்."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் பணப்பெட்டி.",
            suggestions: [
                "பண வரவு செலவு ஏற்ற இறக்கமாக இருக்கலாம்.",
                "பணம் அடிக்கடி வரவும் போகவும் செய்யலாம்.",
                "பெட்டியை பாதுகாப்பான இடத்தில் வைக்கவும்.",
                "வலுவான பூட்டு அமைப்பை பயன்படுத்தவும்.",
                "நிதி பதிவுகளை ஒழுங்காக வைத்திருக்கவும்.",
                "அதிக ரொக்கம் சேமிப்பதை தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் பணப்பெட்டி.",
            suggestions: [
                "பண சேமிப்பிற்கு ஏற்ற இடம் அல்ல.",
                "வரும் செல்வ சக்தியை தடுக்கும்.",
                "தவிர்க்க முடியாவிட்டால் வடகிழக்கு மூலையில் வைக்கவும்.",
                "சிறிய மற்றும் குறைந்த அளவிலான பெட்டி பயன்படுத்தவும்.",
                "பகுதியை மிகவும் சுத்தமாக வைத்திருக்கவும்.",
                "அதிக தொகை சேமிப்பதை தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் பணப்பெட்டி – மிக மோசமான இடம்.",
            suggestions: [
                "அக்னி தத்துவம் செல்வ சக்தியை எரிக்கக்கூடும்.",
                "பண இழப்புகள் மற்றும் அதிக செலவுகள் ஏற்படலாம்.",
                "இயன்றால் வடக்கு அல்லது தென்மேற்கிற்கு மாற்றவும்.",
                "தீ எதிர்ப்பு பெட்டியை முன்னெச்சரிக்கையாக பயன்படுத்தவும்.",
                "நிதி ஆவணங்களை தனியாக வைத்திருக்கவும்.",
                "நீண்டகால ரொக்கம் சேமிப்பை தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் பணப்பெட்டி – மிக மிக ஆபத்தானது.",
            suggestions: [
                "செல்வ சேமிப்பிற்கு மிகவும் தீங்கு விளைவிக்கும்.",
                "பெரிய நிதி இழப்புகள் ஏற்படலாம்.",
                "இயன்றால் உடனடியாக பெட்டியை மாற்றவும்.",
                "மாற்ற முடியாவிட்டால் மிகச் சிறிய பெட்டி மட்டும் வைக்கவும்.",
                "வெள்ளை நிறம் பயன்படுத்தி மிகவும் சுத்தமாக வைத்திருக்கவும்.",
                "திருத்தங்களுக்கு வாஸ்து நிபுணரை அணுகவும்."
            ]
        });
    }
    
    remedies.push({
        title: "பொதுவான பணப்பெட்டி வாஸ்து குறிப்புகள்.",
        suggestions: [
            "பணப்பெட்டியை சிறந்த முறையில் வடக்கு அல்லது தென்மேற்கு திசையில் அமைக்கவும்.",
            "பெட்டியை மறைந்ததாகவும் உரிமையாளருக்கு எளிதாக அணுகக்கூடியதாகவும் வைத்திருக்கவும்.",
            "பெட்டியை திறக்கும் போது வடக்கு நோக்கி இருக்கவும்.",
            "பகுதியை எப்போதும் சுத்தமாகவும் ஒழுங்காகவும் வைத்திருக்கவும்.",
            "சேதமடைந்த அல்லது கிழிந்த நோட்டுகளை சேமிக்க வேண்டாம்.",
            "செல்வ வளர்ச்சிக்காக குபேர யந்திரத்தை அருகில் வைக்கலாம்."
        ]
    });
}

    
//wodrobe
else if (lowerName.includes('wardrobe') || lowerName.includes('almirah') || 
         lowerName.includes('cupboard') || lowerName.includes('storage cabinet') || 
         lowerName.includes('dresser')) {
    
    if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் Wardrobe – சிறந்த இடம்.",
            suggestions: [
                "கனமான furniture வைக்க ஏற்ற திசை.",
                "நிலைத்தன்மை மற்றும் பாதுகாப்பு கிடைக்கும்.",
                "Wardrobe-ஐ South அல்லது West சுவரில் வைக்கவும்.",
                "பிரவுன், கருப்பு அல்லது டார்க் ப்ளூ நிறங்கள் நல்லது.",
                "கனமான பொருட்களை கீழ் shelves-ல் வைக்கவும்.",
                "Master bedroom-க்கு மிகவும் ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் Wardrobe.",
            suggestions: [
                "Wardrobe வைக்க நல்ல திசை.",
                "வலுவான support மற்றும் stability கிடைக்கும்.",
                "South சுவரில் North நோக்கி வைக்கவும்.",
                "ரெட், பிரவுன் அல்லது ஆரஞ்சு நிறங்கள் பயன்படுத்தலாம்.",
                "ஒழுங்காகவும் clutter இல்லாமலும் வைத்திருக்கவும்.",
                "கனமான உடைகள் சேமிக்க ஏற்றது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் Wardrobe.",
            suggestions: [
                "Storage furniture-க்கு சிறந்த இடம்.",
                "ஒழுங்கும் சுத்தமும் மேம்படும்.",
                "West சுவரில் East நோக்கி வைக்கவும்.",
                "லைட் கலர் மற்றும் metal handle நல்லது.",
                "அடிக்கடி பயன்படுத்தும் உடைகளை எளிதாக வைக்கவும்.",
                "Daily wear clothes-க்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் Wardrobe.",
            suggestions: [
                "லைட் storage-க்கு ஏற்ற இடம்.",
                "Seasonal clothes சேமிக்க நல்லது.",
                "லைட் கலர் furniture பயன்படுத்தவும்.",
                "சரியான shelves வைத்து ஒழுங்குபடுத்தவும்.",
                "Children room-க்கு ஏற்ற storage.",
                "மிகவும் கனமாக நிரப்ப வேண்டாம்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் Wardrobe.",
            suggestions: [
                "மிகவும் கனமான Wardrobe செல்வ சக்தியை தடுக்கலாம்.",
                "லைட் weight மற்றும் minimal furniture பயன்படுத்தவும்.",
                "Room-ன் North-West பகுதியில் வைக்கவும்.",
                "வெள்ளை அல்லது லைட் ப்ளூ நிறங்கள் நல்லது.",
                "Overload செய்யாமல் ஒழுங்காக வைத்திருக்கவும்.",
                "மதிப்புள்ள பொருட்கள் இங்கு வைக்க வேண்டாம்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் Wardrobe.",
            suggestions: [
                "காலை நேர positive energy தடுக்கப்படும்.",
                "Health மற்றும் growth பாதிக்கப்படலாம்.",
                "மிகவும் லைட் மற்றும் small furniture பயன்படுத்தவும்.",
                "தவிர்க்க முடியாவிட்டால் North-East பகுதியில் வைக்கவும்.",
                "லைட் கலர் மற்றும் mirror பயன்படுத்தலாம்.",
                "மிகவும் neat-ஆ ஒழுங்குபடுத்த வேண்டும்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் Wardrobe.",
            suggestions: [
                "Fire element மற்றும் storage clash ஆகும்.",
                "Restlessness மற்றும் arguments ஏற்படலாம்.",
                "Room-ன் South-West பகுதியில் மாற்றி வைக்கவும்.",
                "வெள்ளை அல்லது லைட் ப்ளூ நிறங்கள் பயன்படுத்தவும்.",
                "Minimal-ஆவும் neat-ஆவும் வைத்திருக்கவும்.",
                "எளிதில் எரியும் பொருட்கள் வைக்க வேண்டாம்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் Wardrobe – மிக மோசமான இடம்.",
            suggestions: [
                "மிகவும் தீங்கு விளைவிக்கும் placement.",
                "Health மற்றும் finance பிரச்சனைகள் வரலாம்.",
                "இயன்றால் உடனே Wardrobe-ஐ மாற்றவும்.",
                "மாற்ற முடியாவிட்டால் மிகச் சிறிய cabinet மட்டும் வைக்கவும்.",
                "வெள்ளை நிறம் பயன்படுத்தி மிகச் சுத்தமாக வைத்திருக்கவும்.",
                "தேவையெனில் வாஸ்து நிபுணரை அணுகவும்."
            ]
        });
    }
    
    remedies.push({
        title: "பொதுவான Wardrobe வாஸ்து குறிப்புகள்.",
        suggestions: [
            "கனமான Wardrobe-களை South அல்லது West திசையில் வைக்கவும்.",
            "Wardrobe உள்ளே எப்போதும் ஒழுங்காக வைத்திருக்கவும்.",
            "Natural protection-க்கு neem wood அல்லது cedar wood நல்லது.",
            "Shoes-ஐ clothes-இருந்து தனியாக வைக்கவும்.",
            "பயன்பாடு இல்லாத போது கதவுகளை மூடிவைக்கவும்.",
            "முறைப்படி சுத்தம் செய்து ஒழுங்குபடுத்தவும்."
        ]
    });
}
    
//Utility
else if (lowerName.includes('utility area') || lowerName.includes('utility room') || 
         lowerName.includes('service area') || lowerName.includes('service room')) {
    
    if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் Utility Area – சிறந்த இடம்.",
            suggestions: [
                "Utility மற்றும் service வேலைகளுக்கு சரியான திசை.",
                "வீட்டு வேலைகளில் efficiency அதிகரிக்கும்.",
                "Cleaning items-ஐ North-West பகுதியில் வைக்கவும்.",
                "வெள்ளை, கிரே அல்லது லைட் ப்ளூ நிறங்கள் நல்லது.",
                "Area-ஐ neat-ஆவும் clean-ஆவும் வைத்திருக்கவும்.",
                "Washing machine மற்றும் drying area-க்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் Utility Room.",
            suggestions: [
                "Utility பயன்பாட்டிற்கு நல்ல திசை.",
                "Drying-க்கு நல்ல ventilation கிடைக்கும்.",
                "Equipment-ஐ West சுவரில் வைக்கவும்.",
                "லைட் கலர் மற்றும் நல்ல lighting வைத்திருக்கவும்.",
                "Functional-ஆவும் practical-ஆவும் வைத்திருக்கவும்.",
                "மாலை நேர வீட்டுப் பணிகளுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் Utility Area.",
            suggestions: [
                "Utility பயன்பாட்டிற்கு ஏற்றுக்கொள்ளலாம்.",
                "கனமான equipment handle செய்ய முடியும்.",
                "South சுவரில் North நோக்கி வைக்கவும்.",
                "Flooring-க்கு டார்க் கலர் பயன்படுத்தலாம்.",
                "Proper ventilation system அவசியம்.",
                "Area-ஐ clean-ஆவும் organized-ஆவும் வைத்திருக்கவும்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் Utility Room.",
            suggestions: [
                "Fire element சில utility வேலைகளுக்கு ஏற்றது.",
                "Electrical items storage-க்கு நல்லது.",
                "Chemicals-ஐ fire-safe container-ல் வைக்கவும்.",
                "வெள்ளை அல்லது லைட் ப்ளூ நிறங்கள் பயன்படுத்தவும்.",
                "Area-க்கு நல்ல ventilation தேவை.",
                "Fire safety equipment install செய்யவும்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் Utility Area.",
            suggestions: [
                "செல்வ சக்தியை தடுக்க வாய்ப்பு உள்ளது.",
                "Utility area-ஐ minimal-ஆ வைத்திருக்கவும்.",
                "Room-ன் North-West பகுதியில் வைக்கவும்.",
                "லைட் கலர் மற்றும் bright lighting பயன்படுத்தவும்.",
                "North-East பகுதியை மிகச் சுத்தமாக வைத்திருக்கவும்.",
                "Junk அல்லது broken items சேமிக்க வேண்டாம்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் Utility Room.",
            suggestions: [
                "காலை positive energy தடுக்கப்படும்.",
                "Health மற்றும் prosperity பாதிக்கலாம்.",
                "மிகவும் லைட் கலர் materials பயன்படுத்தவும்.",
                "Area-ஐ மிகச் சுத்தமாகவும் neat-ஆவும் வைத்திருக்கவும்.",
                "Equipment-ஐ South-East பகுதியில் வைக்கவும்.",
                "Clutter செய்யாமல் வைத்திருக்கவும்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் Utility Area – மோசமான இடம்.",
            suggestions: [
                "Utility room-க்கு மிகவும் ஏற்றதல்ல.",
                "Family stability மற்றும் health பாதிக்கலாம்.",
                "இயன்றால் North-West-க்கு மாற்றவும்.",
                "லைட் கலர் மற்றும் அதிக சுத்தம் அவசியம்.",
                "Area-ஐ dry-ஆவும் organized-ஆவும் வைத்திருக்கவும்.",
                "அழுக்கான அல்லது பழுதான பொருட்கள் வைக்க வேண்டாம்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் Utility Room – மிக மோசமானது.",
            suggestions: [
                "எல்லா விஷயங்களுக்கும் தீங்கு விளைவிக்கும்.",
                "Health மற்றும் finance பிரச்சனைகள் வரலாம்.",
                "இயன்றால் உடனே Utility area-ஐ மாற்றவும்.",
                "வெள்ளை நிறம் பயன்படுத்தி மிகச் சுத்தமாக வைத்திருக்கவும்.",
                "Area-ஐ dry மற்றும் minimal-ஆ வைத்திருக்கவும்.",
                "பெரிய மாற்றங்களுக்கு வாஸ்து நிபுணரை அணுகவும்."
            ]
        });
    }
    
    remedies.push({
        title: "பொதுவான Utility Area வாஸ்து குறிப்புகள்.",
        suggestions: [
            "Utility area-ஐ எப்போதும் clean-ஆவும் organized-ஆவும் வைத்திருக்கவும்.",
            "Cleaning chemicals-ஐ மூடிய cabinets-ல் வைக்கவும்.",
            "Proper ventilation மற்றும் lighting அவசியம்.",
            "Water leakage இருந்தால் உடனே சரி செய்யவும்.",
            "Tools மற்றும் equipment ஒழுங்காக அடுக்கவும்.",
            "Regular cleaning மற்றும் maintenance முக்கியம்."
        ]
    });
}

    
    
//Hottub
else if (lowerName.includes('jacuzzi') || lowerName.includes('hot tub') || 
         lowerName.includes('spa') || lowerName.includes('whirlpool')) {
    
    if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் Jacuzzi – நல்ல ஓய்வு இடம்.",
            suggestions: [
                "தண்ணீர் சார்ந்த relaxation-க்கு சிறந்த திசை.",
                "செல்வம் மற்றும் abundance energy அதிகரிக்கும்.",
                "North பகுதியில் North-East மூலையில் Jacuzzi வைக்கவும்.",
                "நீலம், வெள்ளை அல்லது aqua நிறங்கள் பயன்படுத்தவும்.",
                "இடத்தை எப்போதும் clean-ஆவும் maintain-ஆவும் வைத்திருக்கவும்.",
                "Body relaxation மற்றும் hydrotherapy-க்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் Hot Tub.",
            suggestions: [
                "காலை நேர ஓய்வுக்கு நல்ல திசை.",
                "Health மற்றும் freshness மேம்படும்.",
                "East-ன் North-East மூலையில் வைக்கவும்.",
                "லைட் நிறங்கள் மற்றும் natural material பயன்படுத்தவும்.",
                "நல்ல ventilation மற்றும் சுத்தம் அவசியம்.",
                "Sunrise நேர relaxation-க்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் Spa – மிகச் சிறந்த இடம்.",
            suggestions: [
                "மன அமைதி மற்றும் inner peace அதிகரிக்கும்.",
                "Meditation feeling-ஐ மேம்படுத்தும்.",
                "North-East மூலையில் East நோக்கி வைக்கவும்.",
                "வெள்ளை அல்லது லைட் ப்ளூ நிறங்கள் பயன்படுத்தவும்.",
                "இடத்தை மிகச் சுத்தமாகவும் sacred-ஆவும் வைத்திருக்கவும்.",
                "Therapeutic water treatment-க்கு சிறந்தது."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் Whirlpool.",
            suggestions: [
                "Social relaxation-க்கு ஏற்ற இடம்.",
                "Relationship harmony அதிகரிக்கும்.",
                "Proper enclosure-உடன் வைக்கவும்.",
                "Metallic அல்லது லைட் நிறங்கள் பயன்படுத்தலாம்.",
                "Area-ஐ நன்றாக maintain செய்யவும்.",
                "Couple relaxation-க்கு நல்லது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் Jacuzzi.",
            suggestions: [
                "மாலை நேர ஓய்வுக்கு ஏற்ற இடம்.",
                "Stress குறைந்து creative mood வரும்.",
                "West-ன் South-West பகுதியில் வைக்கவும்.",
                "மாலை நேரத்திற்கு warm lighting பயன்படுத்தவும்.",
                "Privacy மற்றும் safety கவனிக்கவும்.",
                "Sunset relaxation-க்கு நல்லது."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் Hot Tub – கவனமாக இருக்க வேண்டும்.",
            suggestions: [
                "Fire மற்றும் water elements clash ஆகும்.",
                "Electrical safety பிரச்சனைகள் வரலாம்.",
                "Electrical equipment-இருந்து தள்ளி வைக்கவும்.",
                "Proper insulation மற்றும் safety அவசியம்.",
                "GFCI protection install செய்யவும்.",
                "நல்ல ventilation கட்டாயம்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் Spa.",
            suggestions: [
                "Water feature-க்கு சிறந்த திசை அல்ல.",
                "Energy imbalance ஏற்படலாம்.",
                "தவிர்க்க முடியாவிட்டால் South-East மூலையில் வைக்கவும்.",
                "Energy balance-க்கு லைட் நிறங்கள் பயன்படுத்தவும்.",
                "Heating control சரியாக இருக்க வேண்டும்.",
                "Area-ஐ நன்றாக maintain செய்யவும்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் Jacuzzi – மிகவும் மோசமான இடம்.",
            suggestions: [
                "Water feature-க்கு மிகவும் தீங்கு தரும்.",
                "Health மற்றும் stability பாதிக்கப்படும்.",
                "இயன்றால் North அல்லது East-க்கு மாற்றவும்.",
                "Extra safety precautions அவசியம்.",
                "பயன்பாடு இல்லாத போது area dry-ஆ வைத்திருக்கவும்.",
                "Relocation-க்கு expert ஆலோசனை பெறவும்."
            ]
        });
    }
    
    remedies.push({
        title: "Jacuzzi / Spa – பொதுவான வாஸ்து குறிப்புகள்.",
        suggestions: [
            "North அல்லது East திசை சிறந்தது.",
            "Water filtration மற்றும் cleanliness கவனிக்கவும்.",
            "Water temperature சரியாக maintain செய்யவும்.",
            "Area-க்கு நல்ல ventilation அவசியம்.",
            "Natural material மற்றும் calming colors பயன்படுத்தவும்.",
            "Regular maintenance மற்றும் safety check முக்கியம்."
        ]
    });
}
    
//home thiter
else if (lowerName.includes('home theater') || lowerName.includes('media room') || 
         lowerName.includes('cinema room') || lowerName.includes('entertainment lounge')) {
    
    if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் Home Theater – சிறந்த இடம்.",
            suggestions: [
                "Electronic entertainment-க்கு சரியான திசை.",
                "Fire element audio-video equipment-க்கு support தரும்.",
                "Screen-ஐ South-East மூலையில் North-West நோக்கி வைக்கவும்.",
                "சுவர்களுக்கு red, black அல்லது dark colors பயன்படுத்தவும்.",
                "Soundproofing மற்றும் ventilation அவசியம்.",
                "Best audio-visual experience கிடைக்கும்."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் Media Room.",
            suggestions: [
                "Family entertainment மற்றும் group viewing-க்கு நல்லது.",
                "Family bonding அதிகரிக்கும்.",
                "Screen-ஐ room-ன் South-East பகுதியில் வைக்கவும்.",
                "Seating-ஐ North அல்லது East நோக்கி அமைக்கவும்.",
                "Proper acoustic treatment அவசியம்.",
                "Group entertainment-க்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் Cinema Room.",
            suggestions: [
                "மாலை நேர entertainment-க்கு சிறந்தது.",
                "Relaxation மற்றும் enjoyment அதிகரிக்கும்.",
                "Screen-ஐ West சுவரில் East நோக்கி வைக்கவும்.",
                "Warm lighting மற்றும் comfortable seating பயன்படுத்தவும்.",
                "Daytime viewing-க்கு blackout curtains போடவும்.",
                "Movie marathon-க்கு நல்லது."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் Home Theater.",
            suggestions: [
                "Entertainment room-க்கு ஏற்றுக்கொள்ளலாம்.",
                "Sound insulation நல்லதாக இருக்கும்.",
                "Screen-ஐ South சுவரில் North நோக்கி வைக்கவும்.",
                "Viewing experience-க்கு dark colors பயன்படுத்தவும்.",
                "Proper ventilation system அவசியம்.",
                "Area-ஐ neat-ஆ வைத்திருக்கவும்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் Media Room.",
            suggestions: [
                "Audio clarity மேம்படும்.",
                "Sound transmission தெளிவாக இருக்கும்.",
                "Screen-ஐ North-East பகுதியில் South-West நோக்கி வைக்கவும்.",
                "Blue அல்லது black நிறங்கள் பயன்படுத்தலாம்.",
                "Speaker placement சரியாக செய்யவும்.",
                "North-East பகுதியை சுத்தமாக வைத்திருக்கவும்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் Entertainment Lounge.",
            suggestions: [
                "காலை நேர entertainment-க்கு ஏற்றது.",
                "Morning positive energy பாதிக்கப்படலாம்.",
                "Screen-ஐ South-East பகுதியில் வைக்கவும்.",
                "Light absorb செய்யும் wall colors பயன்படுத்தவும்.",
                "Proper curtain அல்லது blinds அவசியம்.",
                "Daytime viewing-க்கு நல்லது."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் Home Theater – சிறந்தது அல்ல.",
            suggestions: [
                "சோம்பல் மற்றும் inactivity அதிகரிக்கலாம்.",
                "தவிர்க்க முடியாவிட்டால் South-East பகுதியில் screen வைக்கவும்.",
                "பயன்பாடு இல்லாத போது bright lighting வைத்திருக்கவும்.",
                "Entertainment usage time-ஐ limit செய்யவும்.",
                "Area-ஐ active-ஆ வைத்திருக்கவும்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் Cinema Room – மிக மோசமானது.",
            suggestions: [
                "Entertainment-க்கு மிகவும் தீங்கு தரும்.",
                "Concentration மற்றும் mental peace பாதிக்கப்படும்.",
                "இயன்றால் South-East அல்லது North-West-க்கு மாற்றவும்.",
                "பயன்பாடு இல்லாத போது maximum lighting வைத்திருக்கவும்.",
                "Entertainment இங்கு குறைவாக வைத்திருக்கவும்.",
                "Study அல்லது meditation room-ஆ பயன்படுத்துவது நல்லது."
            ]
        });
    }
    
    remedies.push({
        title: "Home Theater – பொதுவான வாஸ்து குறிப்புகள்.",
        suggestions: [
            "Screen-ஐ South-East மூலையில் வைக்கவும்.",
            "Seating-ஐ North அல்லது East நோக்கி அமைக்கவும்.",
            "Soundproofing மற்றும் acoustics கவனிக்கவும்.",
            "மிகவும் luxurious furniture தவிர்க்கவும்.",
            "Ventilation மற்றும் air quality நல்லதாக இருக்க வேண்டும்.",
            "Cables மற்றும் equipment ஒழுங்காக manage செய்யவும்."
        ]
    });
}

    
    
//Gym
else if (lowerName.includes('gym') || lowerName.includes('exercise room') || 
         lowerName.includes('workout area') || lowerName.includes('fitness room') || 
         lowerName.includes('vyayam kaksh')) {
    
    if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் Gym – உடற்பயிற்சிக்கு சிறந்த இடம்.",
            suggestions: [
                "Exercise மற்றும் fitness-க்கு மிகச் சரியான திசை.",
                "காலை சூரிய ஒளி energy மற்றும் stamina அதிகரிக்கும்.",
                "Equipment-ஐ East அல்லது North நோக்கி வைக்கவும்.",
                "Orange, yellow, red போன்ற energizing colors பயன்படுத்தவும்.",
                "Area நல்ல ventilation-உடன் bright-ஆ இருக்க வேண்டும்.",
                "Morning workout மற்றும் yoga-க்கு சிறந்தது."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் Exercise Room.",
            suggestions: [
                "Fitness activities-க்கு நல்ல திசை.",
                "Strength மற்றும் endurance மேம்படும்.",
                "Equipment-ஐ East அல்லது North நோக்கி வைக்கவும்.",
                "Blue, white அல்லது silver நிறங்கள் பயன்படுத்தலாம்.",
                "Area clean-ஆவும் organized-ஆவும் வைத்திருக்கவும்.",
                "Weight training மற்றும் cardio-க்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் Gym.",
            suggestions: [
                "High-energy workout-க்கு நல்ல திசை.",
                "Fire element physical activity-க்கு support தரும்.",
                "Equipment-ஐ South-East மூலையில் வைக்கவும்.",
                "Red அல்லது orange போன்ற energizing colors பயன்படுத்தவும்.",
                "Heat control-க்கு proper ventilation அவசியம்.",
                "Intense training session-க்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் Workout Area.",
            suggestions: [
                "மாலை நேர exercise-க்கு ஏற்ற இடம்.",
                "Flexibility மற்றும் relaxation மேம்படும்.",
                "Equipment-ஐ East அல்லது North நோக்கி வைக்கவும்.",
                "Calming colors மற்றும் நல்ல lighting பயன்படுத்தவும்.",
                "Evening use-க்கு ventilation முக்கியம்.",
                "Yoga மற்றும் stretching-க்கு நல்லது."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் Fitness Room.",
            suggestions: [
                "Group exercise-க்கு ஏற்ற இடம்.",
                "Social workout mood உருவாகும்.",
                "Equipment ஒழுங்காக arrange செய்யவும்.",
                "Light colors மற்றும் proper spacing வைத்திருக்கவும்.",
                "Air circulation நல்லதாக இருக்க வேண்டும்.",
                "Aerobic மற்றும் dance workout-க்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் Gym.",
            suggestions: [
                "Heavy weight training-க்கு ஏற்றது.",
                "Equipment-க்கு நல்ல stability கிடைக்கும்.",
                "Heavy machines-ஐ South wall-க்கு ஒட்டி வைக்கவும்.",
                "Energy balance-க்கு bright lighting பயன்படுத்தவும்.",
                "Equipment safety சரியாக இருக்க வேண்டும்.",
                "Strength training-க்கு நல்லது."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் Exercise Room – சரியான இடம் அல்ல.",
            suggestions: [
                "Workout motivation குறைய வாய்ப்பு உள்ளது.",
                "தவிர்க்க முடியாவிட்டால் South-East மூலையில் equipment வைக்கவும்.",
                "மிக bright lighting மற்றும் energizing colors பயன்படுத்தவும்.",
                "Workout short-ஆவும் intense-ஆவும் வைத்துக்கொள்ளவும்.",
                "Area dull-ஆ இருக்க விட வேண்டாம்.",
                "Meditation அல்லது rest room-க்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் Gym – மிகவும் மோசமானது.",
            suggestions: [
                "Physical activity-க்கு மிகுந்த பாதிப்பு தரும்.",
                "Injury மற்றும் health issues ஏற்படலாம்.",
                "Gym-ஐ உடனடியாக மாற்றுவது சிறந்தது.",
                "தவிர்க்க முடியாவிட்டால் light stretching மட்டும் செய்யவும்.",
                "Area-ஐ மிகச் சுத்தமாகவும் minimal-ஆவும் வைத்திருக்கவும்.",
                "Vastu expert ஆலோசனை பெறவும்."
            ]
        });
    }
    
    remedies.push({
        title: "Gym – பொதுவான வாஸ்து குறிப்புகள்.",
        suggestions: [
            "Exercise செய்யும்போது East அல்லது North நோக்கி இருப்பது நல்லது.",
            "Gym area clean, bright மற்றும் well-ventilated ஆக இருக்க வேண்டும்.",
            "Mirrors-ஐ North அல்லது East சுவரில் மட்டும் வைக்கவும்.",
            "Energizing colors மற்றும் proper lighting பயன்படுத்தவும்.",
            "Equipment-ஐ ஒழுங்காகவும் maintain-ஆவும் வைத்திருக்கவும்.",
            "Safety flooring மற்றும் protection அவசியம்."
        ]
    });
}
    
//Play Room
else if (lowerName.includes('play room') || lowerName.includes('kids play area') || 
         lowerName.includes('children activity room') || lowerName.includes('khel kaksh')) {
    
    if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் Play Room – குழந்தைகளுக்கு சிறந்த இடம்.",
            suggestions: [
                "Kids play area-க்கு சரியான திசை.",
                "Creativity மற்றும் imagination அதிகரிக்கும்.",
                "Toys மற்றும் games-ஐ North-West பகுதியில் வைக்கவும்.",
                "Yellow, blue, green போன்ற bright colors பயன்படுத்தவும்.",
                "Area safe-ஆவும் clean-ஆவும் இருக்க வேண்டும்.",
                "Creative play activities-க்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் Kids Play Area.",
            suggestions: [
                "Social play மற்றும் interaction-க்கு நல்லது.",
                "Friendship மற்றும் communication skill மேம்படும்.",
                "Group games-ஐ room-ன் center-ல் வைக்கவும்.",
                "Light colors-உடன் colorful accents பயன்படுத்தவும்.",
                "Proper toy storage வைத்திருக்கவும்.",
                "Playdate மற்றும் group activity-க்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் Play Room.",
            suggestions: [
                "காலை நேர play session-க்கு நல்லது.",
                "Energy மற்றும் enthusiasm அதிகரிக்கும்.",
                "Educational toys-ஐ East மூலையில் வைக்கவும்.",
                "Bright மற்றும் energizing colors பயன்படுத்தவும்.",
                "Windows clean-ஆ இருக்க வேண்டும்.",
                "Learning through play-க்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் Children Activity Room.",
            suggestions: [
                "Intellectual games-க்கு ஏற்ற இடம்.",
                "Learning மற்றும் development மேம்படும்.",
                "Puzzle மற்றும் educational games-ஐ North-ல் வைக்கவும்.",
                "Blue, green அல்லது white நிறங்கள் பயன்படுத்தவும்.",
                "Area safe-ஆவும் organized-ஆவும் வைத்திருக்கவும்.",
                "Brain development activities-க்கு நல்லது."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் Play Room.",
            suggestions: [
                "Over excitement மற்றும் hyperactivity வரலாம்.",
                "Calming toys-ஐ North-West பகுதியில் வைக்கவும்.",
                "Light blue அல்லது green போன்ற cooling colors பயன்படுத்தவும்.",
                "Area cool-ஆவும் ventilated-ஆவும் இருக்க வேண்டும்.",
                "Electronic toys குறைவாக வைத்துக்கொள்ளவும்.",
                "Active physical play-க்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் Kids Play Area.",
            suggestions: [
                "Children stubborn அல்லது aggressive ஆகலாம்.",
                "Creative மற்றும் calm toys-ஐ West பகுதியில் வைக்கவும்.",
                "Light மற்றும் soothing colors பயன்படுத்தவும்.",
                "Area bright-ஆவும் cheerful-ஆவும் வைத்திருக்கவும்.",
                "Highly competitive games தவிர்க்கவும்.",
                "Constructive play-க்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் Play Room – சரியானது அல்ல.",
            suggestions: [
                "Play interest குறைய வாய்ப்பு உள்ளது.",
                "தவிர்க்க முடியாவிட்டால் North-West பகுதியில் play area அமைக்கவும்.",
                "Very bright மற்றும் energizing colors பயன்படுத்தவும்.",
                "Area active-ஆவும் lively-ஆவும் இருக்க வேண்டும்.",
                "Quiet activity-க்கு மட்டும் பயன்படுத்தலாம்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் Children Activity Room – மிகவும் மோசமானது.",
            suggestions: [
                "Children concentration மற்றும் health பாதிக்கப்படும்.",
                "Play room-ஐ உடனடியாக மாற்றுவது நல்லது.",
                "தவிர்க்க முடியாவிட்டால் quiet reading மட்டும் செய்யவும்.",
                "Area-ஐ மிகச் சுத்தமாகவும் minimal-ஆவும் வைத்திருக்கவும்.",
                "Vastu expert ஆலோசனை பெறவும்."
            ]
        });
    }
    
    remedies.push({
        title: "Play Room – பொதுவான வாஸ்து குறிப்புகள்.",
        suggestions: [
            "Play area bright, colorful மற்றும் safe-ஆ இருக்க வேண்டும்.",
            "Furniture rounded edges-உடன் இருக்க வேண்டும்.",
            "Play முடிந்ததும் toys ஒழுங்காக வைக்கவும்.",
            "Good ventilation மற்றும் natural light அவசியம்.",
            "Non-toxic paints மற்றும் materials பயன்படுத்தவும்.",
            "Different activities-க்கு தனி zones அமைக்கவும்."
        ]
    });
}

    
    
//baby Room
else if (lowerName.includes('nursery') || lowerName.includes('infant room') || 
         lowerName.includes('baby room') || lowerName.includes('shishu kaksh')) {
    
    if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் குழந்தை அறை – சிறந்த இடம்.",
            suggestions: [
                "குழந்தை அறைக்கு மிகச் சரியான திசை.",
                "அமைதியான தூக்கம் மற்றும் ஆரோக்கியமான வளர்ச்சி கிடைக்கும்.",
                "தொட்டிலை தென்மேற்கு மூலையில், தலை மேற்கு நோக்கி வைக்கவும்.",
                "மென்மையான நீலம், இளஞ்சிவப்பு அல்லது பீச் போன்ற நிறங்கள் பயன்படுத்தவும்.",
                "அறை அமைதியாகவும் காற்றோட்டம் உள்ளதாகவும் இருக்க வேண்டும்.",
                "குழந்தையின் ஓய்வு மற்றும் வளர்ச்சிக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் குழந்தை அறை.",
            suggestions: [
                "புதிய பிறந்த குழந்தைக்கு நல்ல திசை.",
                "பாதுகாப்பு மற்றும் சௌகரியம் அதிகரிக்கும்.",
                "தொட்டிலை அறையின் தென்மேற்கு பகுதியில் வைக்கவும்.",
                "மென்மையான பாஸ்டல் நிறங்கள் பயன்படுத்தவும்.",
                "அறை ஒழுங்காகவும் குழப்பமில்லாமலும் இருக்க வேண்டும்.",
                "பெற்றோர்–குழந்தை பந்தத்தை வலுப்படுத்தும்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் குழந்தை வளர்ச்சி அறை.",
            suggestions: [
                "குழந்தையின் மன வளர்ச்சிக்கு நல்லது.",
                "அமைதியான சூழல் உருவாகும்.",
                "தொட்டிலை வடமேற்கு மூலையில், கிழக்கு நோக்கி வைக்கவும்.",
                "இளஞ்சிவப்பு நீலம், வெள்ளை அல்லது மெல்லிய பச்சை நிறங்கள் பயன்படுத்தவும்.",
                "அறை ஒளியுடன் இருந்தாலும் அதிக தூண்டுதல் இருக்கக் கூடாது.",
                "கற்றல் மற்றும் வளர்ச்சிக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் குழந்தை அறை.",
            suggestions: [
                "காலை நேர சக்தி மற்றும் உற்சாகம் கிடைக்கும்.",
                "ஆரம்ப வளர்ச்சிக்கு உதவும்.",
                "தொட்டிலை தெற்க்கிழக்கு பகுதியில், தலை கிழக்கு நோக்கி வைக்கவும்.",
                "மெல்லிய மஞ்சள், பீச் அல்லது இளம்பச்சை நிறங்கள் பயன்படுத்தவும்.",
                "திரைகளை பயன்படுத்தி காலை ஒளியை கட்டுப்படுத்தவும்.",
                "சுறுசுறுப்பான குழந்தைகளுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் குழந்தை அறை.",
            suggestions: [
                "குழந்தை சற்று சஞ்சலமாக இருக்க வாய்ப்பு உள்ளது.",
                "தொட்டிலை தென்மேற்கு மூலையில், வடக்கு நோக்கி வைக்கவும்.",
                "இளநீலம் அல்லது லாவெண்டர் போன்ற அமைதியான நிறங்கள் பயன்படுத்தவும்.",
                "அறை குளிர்ச்சியாகவும் காற்றோட்டமாகவும் இருக்க வேண்டும்.",
                "மென்மையான விளக்குகள் மற்றும் அமைதியான ஒலிகள் பயன்படுத்தவும்.",
                "அதிக பிரகாசமான நிறங்களை தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் குழந்தை அறை.",
            suggestions: [
                "அமைதியின்மை மற்றும் தூக்க சிக்கல்கள் ஏற்படலாம்.",
                "தொட்டிலை அறையின் தென்மேற்கு பகுதியில் வைக்கவும்.",
                "வெள்ளை அல்லது இளநீலம் போன்ற குளிர்ந்த நிறங்கள் பயன்படுத்தவும்.",
                "மின்னணு சாதனங்களை குறைவாக வைத்திருக்கவும்.",
                "அறையின் வெப்பநிலையை சீராக வைத்திருக்கவும்.",
                "நல்ல தூக்கத்திற்கு தடுப்புத் திரைகள் பயன்படுத்தலாம்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் குழந்தை அறை – ஏற்றது அல்ல.",
            suggestions: [
                "குழந்தைக்கு சௌகரியக் குறைவு ஏற்படலாம்.",
                "மாற்ற முடியாவிட்டால் தொட்டியை தென்மேற்கு மூலையில் வைக்கவும்.",
                "மிக மென்மையான, அமைதியான நிறங்கள் பயன்படுத்தவும்.",
                "அறையை மிகச் சுத்தமாகவும் ஒழுங்காகவும் வைத்திருக்கவும்.",
                "இந்த இடம் பெரியவர்களின் அறைக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் குழந்தை அறை – மிகவும் தவறான இடம்.",
            suggestions: [
                "குழந்தையின் உடல் மற்றும் மனநலத்திற்கு பாதிப்பு ஏற்படலாம்.",
                "குழந்தை அறையை உடனடியாக மாற்றுவது நல்லது.",
                "மாற்ற முடியாவிட்டால் மிக இலகுவான நிறங்களுடன் சுத்தம் அவசியம்.",
                "அறையை குறைந்த பொருட்களுடன் வைத்திருக்கவும்.",
                "நல்ல காற்றோட்டம் அவசியம்.",
                "உடனடி வாஸ்து ஆலோசனை பெறவும்."
            ]
        });
    }
    
    remedies.push({
        title: "குழந்தை அறை – பொதுவான வாஸ்து குறிப்புகள்.",
        suggestions: [
            "தொட்டியின் தலை கிழக்கு அல்லது தெற்கு நோக்கி இருக்க வேண்டும்.",
            "விஷமில்லாத, பாதுகாப்பான பொருட்கள் மட்டும் பயன்படுத்தவும்.",
            "அறை எப்போதும் சுத்தமாகவும் காற்றோட்டத்துடனும் இருக்க வேண்டும்.",
            "தொட்டியில் பிரதிபலிக்கும் கண்ணாடிகளை தவிர்க்கவும்.",
            "மென்மையான விளக்குகள் மற்றும் அமைதியான நிறங்கள் பயன்படுத்தவும்.",
            "தூங்கும் இடத்திற்கு அருகில் மின்னணு சாதனங்கள் வேண்டாம்."
        ]
    });
}
    
//Dressing Room
else if (lowerName.includes('walk-in closet') || lowerName.includes('dressing area') || 
         lowerName.includes('dressing room') || lowerName.includes('kapda ghar') ||
         lowerName.includes('Walk-in Wardrobe') || lowerName.includes('Wardrobe Room')) {
    
    if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் உடை மாற்றும் அறை – சிறந்த இடம்.",
            suggestions: [
                "உடை மாற்றும் இடத்திற்கு மிகச் சரியான திசை.",
                "ஒழுங்கு மற்றும் எளிய பயன்பாடு கிடைக்கும்.",
                "அலமாரி மற்றும் அடுக்குகளை வடக்கு, மேற்கு சுவரில் அமைக்கவும்.",
                "வெள்ளை, இளஞ்சாம்பல் அல்லது மண் நிறங்கள் பயன்படுத்தவும்.",
                "அறை நல்ல ஒளியுடனும் காற்றோட்டத்துடனும் இருக்க வேண்டும்.",
                "தினசரி உடை தேர்வுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் உடை மாற்றும் அறை.",
            suggestions: [
                "மாலை நேர உடை மாற்றத்திற்கு நல்லது.",
                "அலங்கார உணர்வை அதிகரிக்கும்.",
                "கண்ணாடிகளை வடக்கு அல்லது கிழக்கு சுவரில் வைக்கவும்.",
                "உண்மையான நிறம் தெரிய மிதமான விளக்குகள் பயன்படுத்தவும்.",
                "ஒழுங்கான சேமிப்பு அமைப்பு அவசியம்.",
                "அலங்கார பொருட்கள் தேர்வுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் உடை அலமாரி அறை.",
            suggestions: [
                "உடை ஒழுங்குக்குப் பொருத்தமானது.",
                "சுத்தம் மற்றும் கட்டுப்பாடு அதிகரிக்கும்.",
                "அடுக்குகளை வடக்கு சுவரில் அமைக்கவும்.",
                "இலகு நிறங்களுடன் நல்ல விளக்குகள் பயன்படுத்தவும்.",
                "மதிப்புள்ள பொருட்களை பாதுகாப்பாக வைக்கவும்.",
                "காலாண்டு உடைகள் சேமிக்க ஏற்றது."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் உடை மாற்றும் பகுதி.",
            suggestions: [
                "பாதுகாப்பான உடை சேமிப்புக்கு நல்லது.",
                "கனமான அலமாரிகளுக்கு நிலைத்தன்மை தரும்.",
                "கனமான பொருட்களை தென்மேற்கு மூலையில் வைக்கவும்.",
                "தரம் வாய்ந்த மரப்பொருட்கள் பயன்படுத்தவும்.",
                "அறை தனியுரிமையுடன் இருக்க வேண்டும்.",
                "மதிப்புள்ள உடைகளுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் உடை அலமாரி அறை.",
            suggestions: [
                "கனமான சேமிப்பிற்கு ஏற்றது.",
                "அலமாரிகளை தெற்கு சுவரில் அமைக்கவும்.",
                "மிதமான நிறங்கள் மற்றும் நல்ல விளக்குகள் பயன்படுத்தவும்.",
                "பூச்சி தாக்கம் இல்லாமல் பராமரிக்கவும்.",
                "சரியான காற்றோட்டம் அவசியம்.",
                "வழக்கமான உடைகளுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் உடை மாற்றும் அறை.",
            suggestions: [
                "அவசரம் அதிகரிக்கலாம்.",
                "கண்ணாடிகளை வடக்கு அல்லது கிழக்கு சுவரில் மட்டும் வைக்கவும்.",
                "வெள்ளை அல்லது இளநீலம் போன்ற குளிர்ந்த நிறங்கள் பயன்படுத்தவும்.",
                "அறை குளிர்ச்சியாக இருக்க வேண்டும்.",
                "அதிக பொருட்கள்詰め込み தவிர்க்கவும்.",
                "காலை நேர பயன்பாட்டுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் உடை அலமாரி அறை.",
            suggestions: [
                "காலை நேர நல்ல சக்தியை தடுக்கும்.",
                "மாற்ற முடியாவிட்டால் வடகிழக்கு மூலையில் அமைக்கவும்.",
                "மிக இலகு நிறங்கள் மற்றும் கண்ணாடிகள் பயன்படுத்தவும்.",
                "மிக ஒழுங்காகவும் குறைந்த பொருட்களுடனும் வைத்திருக்கவும்.",
                "காலாண்டு உடைகளை இங்கு வைக்க வேண்டாம்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் உடை மாற்றும் பகுதி – மிகவும் தவறு.",
            suggestions: [
                "தினசரி செயல்களில் குழப்பம் ஏற்படலாம்.",
                "உடை மாற்றும் அறையை உடனடியாக மாற்றுவது நல்லது.",
                "மாற்ற முடியாவிட்டால் மிகச் சிறியதாக வைத்திருக்கவும்.",
                "வெள்ளை நிறம் மற்றும் அதிக சுத்தம் அவசியம்.",
                "உடனடி வாஸ்து ஆலோசனை பெறவும்."
            ]
        });
    }
    
    remedies.push({
        title: "உடை மாற்றும் அறை – பொதுவான வாஸ்து குறிப்புகள்.",
        suggestions: [
            "கண்ணாடிகளை வடக்கு அல்லது கிழக்கு சுவரில் மட்டும் வைக்கவும்.",
            "அறை எப்போதும் சுத்தமாகவும் ஒளியுடனும் இருக்க வேண்டும்.",
            "உடை தொங்கிகள் மற்றும் அலமாரிகள் ஒழுங்காக இருக்க வேண்டும்.",
            "ஈரப்பதம் வராதபடி காற்றோட்டம் அவசியம்.",
            "காலணிகளை உடைகளிலிருந்து தனியாக வைத்திருக்கவும்.",
            "அடிக்கடி தேவையில்லாத பொருட்களை அகற்றவும்."
        ]
    });
}

    
    
    
//Powder Room
else if (lowerName.includes('powder room') || lowerName.includes('guest toilet') || 
         lowerName.includes('common bathroom') || lowerName.includes('sadharan shauchalay')) {
    
    if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் விருந்தினர் கழிப்பறை – சிறந்த இடம்.",
            suggestions: [
                "விருந்தினர் பயன்படுத்தும் கழிப்பறைக்கு ஏற்ற திசை.",
                "வீட்டில் எதிர்மறை சக்தி பரவுவதை குறைக்கும்.",
                "கழிப்பறையை வடமேற்கு மூலையில் அமைக்கவும்.",
                "வெள்ளை, இளநீலம் அல்லது இளஞ்சாம்பல் நிறங்கள் பயன்படுத்தவும்.",
                "இடம் எப்போதும் சுத்தமாகவும் காற்றோட்டத்துடனும் இருக்க வேண்டும்.",
                "விருந்தினர்களுக்கு சௌகரியம் தரும் இடம்."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் விருந்தினர் கழிப்பறை.",
            suggestions: [
                "பொதுக் கழிப்பறைக்கு நல்ல இடம்.",
                "விருந்தினர்களுக்கு தனியுரிமை கிடைக்கும்.",
                "உபகரணங்களை மேற்கு சுவருக்கு ஒட்டி அமைக்கவும்.",
                "அமைதியான நிறங்களுடன் நல்ல விளக்குகள் பயன்படுத்தவும்.",
                "வடக்கு அல்லது கிழக்கு சுவரில் காற்றோட்ட விசிறி வைக்கவும்.",
                "மாலை நேர விருந்துகளுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் பொதுக் கழிப்பறை.",
            suggestions: [
                "சில முன்னெச்சரிக்கைகளுடன் பயன்படுத்தலாம்.",
                "வீட்டின் பெயர் மற்றும் மரியாதை பாதிக்கப்படலாம்.",
                "கழிப்பறையை தென்மேற்கு மூலையில் அமைக்கவும்.",
                "சக்தி சமநிலைக்கு இலகு நிறங்கள் பயன்படுத்தவும்.",
                "கழிப்பறை கதவை எப்போதும் மூடியே வைத்திருக்கவும்.",
                "மிக நல்ல காற்றோட்டம் அவசியம்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் பொடி கழிப்பறை.",
            suggestions: [
                "பொருளாதார சக்தியை தடுக்கும் வாய்ப்பு உள்ளது.",
                "விருந்தினர்கள் மூலம் வரும் நல்ல ஓட்டம் குறையலாம்.",
                "கழிப்பறையை வடமேற்கு மூலையில் அமைக்கவும்.",
                "பிரகாசமான விளக்குகள் மற்றும் கண்ணாடிகள் பயன்படுத்தவும்.",
                "வடகிழக்கு பகுதியை மிகச் சுத்தமாக வைத்திருக்கவும்.",
                "நீர்கசிவு இருந்தால் உடனே சரி செய்யவும்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் விருந்தினர் கழிப்பறை.",
            suggestions: [
                "காலை நேர நல்ல சக்தியை தடுக்கும்.",
                "விருந்தினர்களின் அனுபவத்தை பாதிக்கலாம்.",
                "மாற்ற முடியாவிட்டால் வடகிழக்கு மூலையில் அமைக்கவும்.",
                "மிக இலகு நிறங்கள் மற்றும் அதிக சுத்தம் அவசியம்.",
                "கிழக்கு ஜன்னலை சுத்தமாகவும் காற்றோட்டமாகவும் வைத்திருக்கவும்.",
                "முக்கிய நுழைவுவாசலுக்கு அருகில் அமைப்பதை தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் பொதுக் கழிப்பறை.",
            suggestions: [
                "அக்னி மற்றும் நீர் தத்துவ மோதல் ஏற்படும்.",
                "விருந்தினர்களுக்கு அசௌகரியம் தரலாம்.",
                "சமநிலைக்காக வடகிழக்கு பகுதியில் நீர்சார் அம்சம் வைக்கவும்.",
                "வெள்ளை அல்லது இளநீலம் போன்ற குளிர்ந்த நிறங்கள் பயன்படுத்தவும்.",
                "நல்ல காற்றோட்டம் மற்றும் வாசனை இல்லாத சூழல் அவசியம்.",
                "அலங்காரத்தில் சிவப்பு நிறங்களை தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் பொடி கழிப்பறை – மிக மோசமானது.",
            suggestions: [
                "விருந்தினர் கழிப்பறைக்கு மிகத் தவறான இடம்.",
                "வீட்டின் நிலைத்தன்மை மற்றும் உறவுகள் பாதிக்கப்படும்.",
                "மாற்ற முடிந்தால் உடனே வடமேற்கு திசைக்கு மாற்றவும்.",
                "இலகு நிறங்கள் மற்றும் பிரகாசமான விளக்குகள் பயன்படுத்தவும்.",
                "மிகச் சுத்தமாகவும் பராமரிப்புடனும் வைத்திருக்கவும்.",
                "இடமாற்றம் குறித்து நிபுணர் ஆலோசனை பெறவும்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் விருந்தினர் கழிப்பறை – மிகவும் மோசமானது.",
            suggestions: [
                "விருந்தினர்களும் குடும்பத்தாரும் உடல்நலப் பிரச்சனைகளை சந்திக்கலாம்.",
                "கழிப்பறையை உடனடியாக மாற்றுவது சிறந்தது.",
                "மாற்ற முடியாவிட்டால் மிகச் சிறியதாக வைத்திருக்கவும்.",
                "வெள்ளை நிறம் மற்றும் அதிக காற்றோட்டம் அவசியம்.",
                "எப்போதும் சுத்தமாக வைத்திருக்க வேண்டும்.",
                "உடனடி வாஸ்து ஆலோசனை பெறவும்."
            ]
        });
    }
    
    remedies.push({
        title: "பொடி கழிப்பறை – பொதுவான வாஸ்து குறிப்புகள்.",
        suggestions: [
            "விருந்தினர் கழிப்பறையை எப்போதும் சுத்தமாகவும் تازா வாசனையுடனும் வைத்திருக்கவும்.",
            "இயற்கை வாசனை நீக்கும் பொருட்கள் பயன்படுத்தலாம்.",
            "நல்ல காற்றோட்டம் மற்றும் விளக்குகள் அவசியம்.",
            "பயன்பாடு இல்லாத போது கதவை மூடி வைத்திருக்கவும்.",
            "குழாய் மற்றும் நீர்கசிவு பிரச்சனைகளை உடனே சரி செய்யவும்.",
            "விருந்தினர்களுக்கு அடிப்படை வசதிகள் வழங்கவும்."
        ]
    });
}
    
//Mud Room
else if (lowerName.includes('mud room') || lowerName.includes('entryway') || 
         lowerName.includes('foyer') || lowerName.includes('entrance lobby') || 
         lowerName.includes('pravesh kaksh')) {
    
    if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் நுழைவு பகுதி – சிறந்த இடம்.",
            suggestions: [
                "வீட்டின் நுழைவுப் பகுதிக்கு மிகச் சிறந்த திசை.",
                "நல்ல வாய்ப்புகள் மற்றும் சக்தி வீட்டிற்குள் வரும்.",
                "காலணி அலமாரியை வடமேற்கு மூலையில் வைக்கவும்.",
                "வெள்ளை, மஞ்சள் அல்லது இளநீலம் போன்ற 밝은 நிறங்கள் பயன்படுத்தவும்.",
                "இடம் சுத்தமாகவும் குழப்பமில்லாமலும் இருக்க வேண்டும்.",
                "விருந்தினர்களை வரவேற்க ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் நுழைவு பகுதி.",
            suggestions: [
                "காலை நேர நல்ல சக்தி நுழையும் திசை.",
                "உடல்நலம் மற்றும் செழிப்பு அதிகரிக்கும்.",
                "மேலங்கி அல்லது பொருள் வைக்கும் இடத்தை வடகிழக்கில் அமைக்கவும்.",
                "இலகு மற்றும் வரவேற்பு தரும் நிறங்கள் பயன்படுத்தவும்.",
                "காலை ஒளி நுழைய இடம் திறந்ததாக இருக்க வேண்டும்.",
                "சூரிய உதய சக்திக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் நுழைவு மண்டபம் – மிகச் சிறந்தது.",
            suggestions: [
                "நுழைவு மண்டபத்திற்கு மிகச் சிறந்த திசை.",
                "தெய்வீக ஆசீர்வாதம் மற்றும் நல்ல சக்தி கிடைக்கும்.",
                "இடத்தை மிகச் சுத்தமாகவும் குறைந்த பொருட்களுடன் வைத்திருக்கவும்.",
                "வெள்ளை அல்லது இளமஞ்சள் நிறங்கள் பயன்படுத்தவும்.",
                "ஓம், ஸ்வஸ்திக் போன்ற நல்ல சின்னங்கள் வைக்கலாம்.",
                "ஆன்மீக சக்தி வீட்டிற்குள் நுழையும் இடம்."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் நுழைவு பகுதி.",
            suggestions: [
                "விருந்தினர் வரவேற்புக்கு நல்ல இடம்.",
                "சமூக தொடர்புகள் மற்றும் பயணங்கள் அதிகரிக்கும்.",
                "பொருள் சேமிப்பை ஒழுங்காக அமைக்கவும்.",
                "இலகு நிறங்களுடன் உலோக அம்சங்கள் பயன்படுத்தலாம்.",
                "இடம் பயன்பாட்டிற்கு ஏற்றதாக வைத்திருக்கவும்.",
                "அடிக்கடி வரும் விருந்தினர்களுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் நுழைவு பகுதி.",
            suggestions: [
                "மாலை நேர நுழைவுக்கு ஏற்றது.",
                "அமைதி மற்றும் சிருஷ்டி உணர்வு கிடைக்கும்.",
                "காலணி இடத்தை வடமேற்கு மூலையில் வைக்கவும்.",
                "மாலை நேரத்திற்கு மிதமான விளக்குகள் பயன்படுத்தவும்.",
                "இடம் சுத்தமாகவும் வரவேற்புடனும் இருக்க வேண்டும்.",
                "சூரிய அஸ்தமன சக்திக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் நுழைவு மண்டபம்.",
            suggestions: [
                "கவனமாக திட்டமிட வேண்டிய இடம்.",
                "வாய்ப்புகளில் தாமதம் ஏற்படலாம்.",
                "கனமான பொருட்களை தெற்கு சுவரில் வைக்கவும்.",
                "அதிக ஒளி பயன்படுத்தி கனத்தன்மையை குறைக்கவும்.",
                "வடகிழக்கு பகுதியை மிகச் சுத்தமாக வைத்திருக்கவும்.",
                "சமநிலைக்காக வடகிழக்கில் பைரமிட் வைக்கலாம்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் நுழைவு பகுதி.",
            suggestions: [
                "அவசரம் அல்லது வாக்குவாதம் ஏற்படலாம்.",
                "சமநிலைக்காக வடகிழக்கில் நீர்சார் அம்சம் வைக்கவும்.",
                "வெள்ளை அல்லது இளநீலம் போன்ற குளிர்ந்த நிறங்கள் பயன்படுத்தவும்.",
                "இடம் அமைதியாகவும் காற்றோட்டமாகவும் இருக்க வேண்டும்.",
                "கூர்மையான பொருட்கள் மற்றும் குழப்பம் தவிர்க்கவும்.",
                "விரைவு நுழைவு–வெளியேற்றத்திற்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் நுழைவு பகுதி – மிக மோசமானது.",
            suggestions: [
                "வீட்டிற்குள் நல்ல சக்தி நுழைவதை தடுக்கும்.",
                "மாற்ற முடிந்தால் உடனே வடக்கு அல்லது கிழக்குக்கு மாற்றவும்.",
                "மிக பிரகாசமான விளக்குகள் மற்றும் கண்ணாடிகள் பயன்படுத்தவும்.",
                "இடத்தை மிகச் சுத்தமாகவும் குறைந்த பொருட்களுடன் வைத்திருக்கவும்.",
                "வாஸ்து நிபுணர் ஆலோசனை பெறுவது நல்லது."
            ]
        });
    }
    
    remedies.push({
        title: "நுழைவு பகுதி – பொதுவான வாஸ்து குறிப்புகள்.",
        suggestions: [
            "நுழைவு பகுதி எப்போதும் சுத்தமாகவும் ஒளியுடனும் இருக்க வேண்டும்.",
            "வாசலுக்கு வெளியே வரவேற்பு தரும் மேட் வைக்கவும்.",
            "நல்ல சின்னங்களை நுழைவிற்கு அருகில் வைக்கவும்.",
            "கதவு முழுவதும் திறக்க இடையூறு இருக்கக்கூடாது.",
            "காலணி இடம் ஒழுங்காகவும் சுத்தமாகவும் இருக்க வேண்டும்.",
            "நல்ல காற்றோட்டம் மற்றும் விளக்குகள் அவசியம்."
        ]
    });
}

    
//Sun Room
else if (lowerName.includes('sun room') || lowerName.includes('solarium') || 
         lowerName.includes('sun porch') || lowerName.includes('surya kaksh')) {
    
    if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் சூரிய ஒளி அறை – சிறந்த இடம்.",
            suggestions: [
                "சூரிய ஒளி அறைக்கு மிகச் சிறந்த திசை.",
                "காலை சூரிய ஒளி முழுமையாக கிடைக்கும்.",
                "கிழக்கு நோக்கி பெரிய ஜன்னல்கள் அமைக்கவும்.",
                "அமர்விடங்களை கிழக்கு நோக்கி அமைக்கவும்.",
                "ஒளியை பிரதிபலிக்கும் இலகு நிறங்கள் பயன்படுத்தவும்.",
                "காலை ஒளி பிடிக்கும் செடிகளுக்கு ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் சூரிய ஒளி அறை.",
            suggestions: [
                "நாள்பகல் முழுவதும் மென்மையான இயற்கை ஒளி கிடைக்கும்.",
                "கண் சோர்வு இல்லாத ஒளி சூழல் உருவாகும்.",
                "வெப்பம் கட்டுப்பட கண்ணாடி அமைப்பு பயன்படுத்தவும்.",
                "வடகிழக்கு மூலையில் நீர்சார் அம்சம் வைக்கலாம்.",
                "புத்தகம் படிக்கவும் ஓய்வெடுக்கவும் ஏற்றது.",
                "மறைமுக ஒளி விரும்பும் செடிகளுக்கு நல்லது."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் சூரிய ஒளி அறை – மிகச் சிறந்தது.",
            suggestions: [
                "ஆன்மீகமும் உடல்நலமும் மேம்படும் ஒளி கிடைக்கும்.",
                "காலை யோகா, தியானத்திற்கு ஏற்ற இடம்.",
                "இடத்தை மிகச் சுத்தமாகவும் அமைதியாகவும் வைத்திருக்கவும்.",
                "வெள்ளை அல்லது இளமஞ்சள் நிறங்கள் பயன்படுத்தவும்.",
                "துளசி போன்ற புனித செடிகள் வைக்கலாம்.",
                "நல்ல சக்தி சேமிக்கும் பகுதி."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் சூரிய மாடம்.",
            suggestions: [
                "குளிர்கால சூரிய ஒளி பெற ஏற்ற இடம்.",
                "குளிர் காலத்தில் வெப்பம் தரும்.",
                "கோடைக்கால வெப்பத்திற்கு நல்ல காற்றோட்டம் அவசியம்.",
                "வெப்பத்தை தாங்கும் செடிகள் பயன்படுத்தவும்.",
                "மூலிகை செடிகள் உலர்த்த ஏற்ற இடம்.",
                "சூரிய சக்தி பயன்பாட்டுக்கு நல்லது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் சூரிய ஒளி அறை.",
            suggestions: [
                "மாலை சூரிய அஸ்தமனக் காட்சிக்கு சிறந்தது.",
                "மாலை நேர அமைதியும் ஓய்வும் கிடைக்கும்.",
                "மாலை வெப்பத்தை குறைக்கும் கண்ணாடி பயன்படுத்தவும்.",
                "ஒளி கட்டுப்பாட்டிற்கு திரைகள் அமைக்கவும்.",
                "மாலை தேநீர், குடும்ப நேரத்திற்கு ஏற்றது.",
                "மாலை தியானத்திற்கு நல்ல இடம்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் சூரிய ஒளி அறை.",
            suggestions: [
                "அதிக சூரிய ஒளி கிடைக்கும்.",
                "கோடைக்காலத்தில் அதிக வெப்பம் ஏற்படலாம்.",
                "குளிரூட்டும் அமைப்புகள் அவசியம்.",
                "வெப்பத்தை பிரதிபலிக்கும் நிறங்கள் பயன்படுத்தவும்.",
                "குளிர்கால தோட்டத்துக்கு ஏற்ற இடம்.",
                "சூரிய வெப்ப நன்மைகள் கிடைக்கும்."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் சூரிய மாடம்.",
            suggestions: [
                "மதியம் மற்றும் மாலை ஒளி கிடைக்கும்.",
                "உரையாடல் மற்றும் குடும்ப கூடுகைகளுக்கு நல்லது.",
                "விருந்தினர்களுக்கான அமர்விடம் அமைக்கவும்.",
                "காற்று தடுக்கும் பாதுகாப்பு ஏற்பாடு செய்யவும்.",
                "மாலை ஓய்விற்கு ஏற்ற இடம்.",
                "காலநிலை செடிகளுக்கு நல்லது."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் சூரிய ஒளி அறை – ஏற்றதல்ல.",
            suggestions: [
                "அதிக வெப்பம் மற்றும் சக்தி சமநிலை குலைவு ஏற்படும்.",
                "மிகச் சிறந்த இடம் அல்ல.",
                "காற்றோட்டம் மற்றும் குளிரூட்டல் அவசியம்.",
                "ஒளியை பிரதிபலிக்கும் நிறங்கள் பயன்படுத்தவும்.",
                "மாலை நேரங்களில் மட்டுமே பயன்படுத்தவும்.",
                "நிழல் உள்ள வெளிப்பகுதிக்கு ஏற்றது."
            ]
        });
    }
    
    remedies.push({
        title: "சூரிய ஒளி அறை – பொதுவான வாஸ்து குறிப்புகள்.",
        suggestions: [
            "இயற்கை ஒளியை அதிகப்படுத்தி வெப்பத்தை கட்டுப்படுத்தவும்.",
            "நல்ல கண்ணாடி மற்றும் உள் பாதுகாப்பு பயன்படுத்தவும்.",
            "செடிகளை அவை விரும்பும் ஒளிக்கு ஏற்ப வைக்கவும்.",
            "சரியான காற்றோட்டம் அவசியம்.",
            "இலகு நிறங்கள் பயன்படுத்தி வெளிச்சத்தை அதிகரிக்கவும்.",
            "ஓய்வுக்கு வசதியான அமர்விடம் அமைக்கவும்."
        ]
    });
}

//Bar
else if (lowerName.includes('wine cellar') || lowerName.includes('bar') || 
         lowerName.includes('wine storage') || lowerName.includes('madira griha')) {
    
    if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் மது சேமிப்பு அறை – சிறந்த இடம்.",
            suggestions: [
                "மது சேமிப்பு மற்றும் பழக்கத்திற்கு ஏற்ற திசை.",
                "வெப்பம் நிலையாக இருக்கும்.",
                "தெற்கு அல்லது மேற்கு சுவரில் அலமாரி அமைக்கவும்.",
                "கருமை நிறங்கள் பயன்படுத்தவும்.",
                "குளிர்ந்த வெப்பநிலை பராமரிக்கவும்.",
                "நீண்டகால சேமிப்புக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் மது சேமிப்பு அறை.",
            suggestions: [
                "மது சேமிப்புக்கு நிலையான இடம்.",
                "இயற்கையான இருட்டு சூழல் கிடைக்கும்.",
                "அலமாரிகளை தெற்கு சுவரில் அமைக்கவும்.",
                "கருமை நிற அலங்காரம் பயன்படுத்தவும்.",
                "ஈரப்பதம் கட்டுப்படுத்தவும்.",
                "சிவப்பு மதுவுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் மது அரங்கம்.",
            suggestions: [
                "மாலை நேர பொழுதுபோக்குக்கு நல்லது.",
                "உரையாடல் மற்றும் ஓய்வு அதிகரிக்கும்.",
                "மதுக் கவுண்டரை கிழக்கு அல்லது வடக்கு நோக்கி அமைக்கவும்.",
                "மிதமான விளக்குகள் பயன்படுத்தவும்.",
                "இடம் காற்றோட்டத்துடன் இருக்க வேண்டும்.",
                "பானங்கள் தயாரிக்க ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் மது அரங்கம்.",
            suggestions: [
                "சமூக கூடுகைகளுக்கு ஏற்ற இடம்.",
                "நண்பர்களுடன் உரையாடல் அதிகரிக்கும்.",
                "அரங்கத்தை வடமேற்கு மூலையில் அமைக்கவும்.",
                "இலகு நிறங்கள் மற்றும் நல்ல ஒளி பயன்படுத்தவும்.",
                "இடத்தை சுத்தமாக வைத்திருக்கவும்.",
                "விருந்தினர்களுக்கான பொழுதுபோக்கு பகுதி."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் மது சேமிப்பு.",
            suggestions: [
                "வெப்ப தத்துவம் மதுவின் தரத்தை பாதிக்கலாம்.",
                "குளிரூட்டல் அவசியம்.",
                "நல்ல உள் பாதுகாப்பு அமைப்பு பயன்படுத்தவும்.",
                "நேரடி வெப்பம் படாதபடி கவனிக்கவும்.",
                "மதுவின் நிலையை அடிக்கடி சரிபார்க்கவும்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் மது சேமிப்பு.",
            suggestions: [
                "மது பாதுகாப்புக்கு ஏற்றதல்ல.",
                "மிக நல்ல உள் பாதுகாப்பு தேவை.",
                "மாற்ற முடியாவிட்டால் வடமேற்கு மூலையில் அமைக்கவும்.",
                "வெப்பம் மற்றும் ஈரப்பதம் கட்டுப்படுத்தவும்.",
                "வெப்ப மாற்றம் ஏற்படாமல் கவனிக்கவும்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் மது அரங்கம்.",
            suggestions: [
                "காலை நேரத்திற்கு ஏற்றதல்ல.",
                "மதுவற்ற பானங்களுக்கு மட்டும் பயன்படுத்தலாம்.",
                "மாற்ற முடியாவிட்டால் வடகிழக்கு மூலையில் சிறிய அளவில் அமைக்கவும்.",
                "இலகு நிறங்கள் பயன்படுத்தவும்.",
                "மது வெளிப்படையாக காட்டுவதை தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் மது சேமிப்பு – மிக மோசமானது.",
            suggestions: [
                "உடல் மற்றும் மனநலத்திற்கு பாதிப்பு ஏற்படும்.",
                "உடனே இடமாற்றம் செய்வது சிறந்தது.",
                "மாற்ற முடியாவிட்டால் மிகச் சிறிய அளவில் வைத்திருக்கவும்.",
                "வெள்ளை நிறம் மற்றும் அதிக சுத்தம் அவசியம்.",
                "வாஸ்து நிபுணர் ஆலோசனை பெறவும்."
            ]
        });
    }
    
    remedies.push({
        title: "மது அரங்கம் / சேமிப்பு – பொதுவான வாஸ்து குறிப்புகள்.",
        suggestions: [
            "வெப்பநிலை மற்றும் ஈரப்பதத்தை நிலையாக வைத்திருக்கவும்.",
            "பாட்டில்களை கிடைமட்டமாக சேமிக்கவும்.",
            "ஒளி படாத இடத்தில் வைக்கவும்.",
            "வாசனை வராதபடி காற்றோட்டம் ஏற்படுத்தவும்.",
            "மதுவகைபடி ஒழுங்காக சேமிக்கவும்.",
            "நல்ல உள் பாதுகாப்பு அமைப்பு அவசியம்."
        ]
    });
}

    
//Art Room
else if (lowerName.includes('art studio') || lowerName.includes('craft room') || 
         lowerName.includes('hobby room') || lowerName.includes('kala kaksh')) {
    
    if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் கலை அறை – சிறந்த இடம்.",
            suggestions: [
                "கலை மற்றும் சிருஷ்டி வேலைகளுக்கு ஏற்ற திசை.",
                "கற்பனை திறன் மற்றும் கலை ஓட்டம் அதிகரிக்கும்.",
                "வரைதல் மேசையை வடக்கு அல்லது கிழக்கு நோக்கி வைக்கவும்.",
                "நீலம், வெள்ளை போன்ற அமைதியான நிறங்கள் பயன்படுத்தவும்.",
                "வடகிழக்கு மூலையை சுத்தமாக வைத்திருக்கவும்.",
                "ஓவியம், வரைதல் போன்ற பணிகளுக்கு ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் கலை அறை.",
            suggestions: [
                "காலை நேர கலை பணிகளுக்கு சிறந்தது.",
                "புதிய யோசனைகள் மற்றும் ஊக்கம் கிடைக்கும்.",
                "காலை இயற்கை ஒளியை முழுமையாக பயன்படுத்தவும்.",
                "உற்சாகமான ஆனால் மென்மையான நிறங்கள் பயன்படுத்தவும்.",
                "ஜன்னல்கள் சுத்தமாக வைத்திருக்கவும்.",
                "நீர்வண்ணம் போன்ற நுண்ணிய கலைக்கு நல்லது."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் கைத்தொழில் அறை – மிகச் சிறந்தது.",
            suggestions: [
                "ஆன்மீக மற்றும் நுண்ணிய கலைக்கு சிறந்த இடம்.",
                "கவனம் மற்றும் துல்லியம் அதிகரிக்கும்.",
                "இடத்தை மிகச் சுத்தமாகவும் ஒழுங்காகவும் வைத்திருக்கவும்.",
                "வெள்ளை அல்லது இளமஞ்சள் நிறங்கள் பயன்படுத்தவும்.",
                "வேலை மேசையை கிழக்கு நோக்கி அமைக்கவும்.",
                "நகை தயாரிப்பு போன்ற நுண்ணிய பணிகளுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் பொழுதுபோக்கு கலை அறை.",
            suggestions: [
                "மாலை நேர கலை பணிகளுக்கு ஏற்றது.",
                "மன அழுத்தம் குறைந்து ரசனை அதிகரிக்கும்.",
                "வேலை இடத்தை கிழக்கு அல்லது வடக்கு நோக்கி வைக்கவும்.",
                "மிதமான விளக்குகள் பயன்படுத்தவும்.",
                "மண் வேலை, மர வேலைக்கு நல்லது.",
                "வேலைக்கு பிறகு சிருஷ்டி செய்ய ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் கலை அறை.",
            suggestions: [
                "குழுவாக கலை செய்ய ஏற்ற இடம்.",
                "யோசனை பகிர்வு மற்றும் பயிற்சி அதிகரிக்கும்.",
                "கருவிகள் ஒழுங்காக வைக்கவும்.",
                "வாசனை வரும் பொருட்களுக்கு காற்றோட்டம் அவசியம்.",
                "பயிற்சி வகுப்புகளுக்கு நல்லது.",
                "கற்பித்தல் மற்றும் கற்றலுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் கைத்தொழில் அறை.",
            suggestions: [
                "உற்சாகமான கலை பணிகளுக்கு நல்லது.",
                "வெப்பம் பயன்படுத்தும் கருவிகள் இங்கு வைக்கலாம்.",
                "தீ பாதுகாப்பு கவனமாக இருக்க வேண்டும்.",
                "நல்ல காற்றோட்டம் ஏற்படுத்தவும்.",
                "கண்ணாடி, உலோகம் வேலைக்கு ஏற்றது.",
                "பாதுகாப்பு சாதனங்கள் அருகில் வைக்கவும்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் பொழுதுபோக்கு கலை அறை.",
            suggestions: [
                "பெரிய கருவிகள் பயன்படுத்த ஏற்றது.",
                "சிலைகள், பெரிய ஓவியங்களுக்கு நல்லது.",
                "கனமான கருவிகளை தெற்கு சுவரில் வைக்கவும்.",
                "நல்ல வெளிச்சம் ஏற்படுத்தவும்.",
                "வேலை இடம் ஒழுங்காக இருக்க வேண்டும்.",
                "பெரிய கன்வாஸ் பணிகளுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் கலை அறை – ஏற்றதல்ல.",
            suggestions: [
                "கலை ஓட்டம் குறைய வாய்ப்பு உள்ளது.",
                "யோசனை அடைப்பு ஏற்படலாம்.",
                "மாற்ற முடியாவிட்டால் வடகிழக்கு பகுதியில் வேலை செய்யவும்.",
                "அதிக வெளிச்சம் மற்றும் ஊக்க நிறங்கள் பயன்படுத்தவும்.",
                "இடத்தை மிகச் சுத்தமாக வைத்திருக்கவும்.",
                "முடிந்த பணிகளை சேமிக்க ஏற்ற இடம்."
            ]
        });
    }
    
    remedies.push({
        title: "கலை அறை – பொதுவான வாஸ்து குறிப்புகள்.",
        suggestions: [
            "கலை செய்யும்போது கிழக்கு அல்லது வடக்கு நோக்கி அமரவும்.",
            "இயற்கை வெளிச்சம் அதிகமாக இருக்க வேண்டும்.",
            "கருவிகள் ஒழுங்காக அடுக்கி வைக்கவும்.",
            "வாசனை வரும் வண்ணங்களுக்கு நல்ல காற்றோட்டம் அவசியம்.",
            "இடம் எப்போதும் சுத்தமாகவும் ஊக்கமாகவும் இருக்க வேண்டும்.",
            "முடிந்த ஓவியங்களை தெற்கு அல்லது மேற்கு சுவரில் வைக்கவும்."
        ]
    });
}

//Dance Room
else if (lowerName.includes('music room') || lowerName.includes('dance room') || 
         lowerName.includes('sangeet kaksh') || lowerName.includes('nritya kaksh')) {
    
    if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் இசை அறை – சிறந்த இடம்.",
            suggestions: [
                "இசை பயிற்சிக்கு ஏற்ற திசை.",
                "கலை உணர்வு மற்றும் ரசனை அதிகரிக்கும்.",
                "கருவிகளை கிழக்கு அல்லது வடக்கு நோக்கி வைக்கவும்.",
                "ஒலி கட்டுப்பாடு ஏற்பாடு செய்யவும்.",
                "வடக்கு சுவரில் கண்ணாடி வைக்கலாம்.",
                "மாலை பயிற்சிக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் இசை அறை.",
            suggestions: [
                "குழு இசை பயிற்சிக்கு நல்லது.",
                "ஒத்துழைப்பு மற்றும் ஒற்றுமை அதிகரிக்கும்.",
                "கருவிகளை வட்டமாக அமைக்கலாம்.",
                "ஒலி உறிஞ்சும் பொருட்கள் பயன்படுத்தவும்.",
                "பயிற்சி மற்றும் பதிவு செய்ய ஏற்றது.",
                "குழு நிகழ்ச்சிகளுக்கு நல்லது."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் நடன அறை.",
            suggestions: [
                "நடன பயிற்சிக்கு சிறந்த இடம்.",
                "அசைவில் மென்மை மற்றும் அழகு அதிகரிக்கும்.",
                "கண்ணாடிகளை வடக்கு அல்லது கிழக்கு சுவரில் வைக்கவும்.",
                "சரளமான தரை அமைப்பு அவசியம்.",
                "நல்ல வெளிச்சம் ஏற்படுத்தவும்.",
                "பாரம்பரிய மற்றும் நவீன நடனங்களுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் இசை அறை.",
            suggestions: [
                "காலை நேர இசை பயிற்சிக்கு நல்லது.",
                "குரல் தெளிவு அதிகரிக்கும்.",
                "இயற்கை காலை ஒளி பயன்படுத்தவும்.",
                "கருவிகளை கிழக்கு நோக்கி வைக்கவும்.",
                "தியான இசை, ஜபத்திற்கு ஏற்றது.",
                "தொடக்க நிலை பயிற்சிக்கு நல்லது."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் நடன அறை.",
            suggestions: [
                "உற்சாகமான நடனங்களுக்கு ஏற்றது.",
                "சுறுசுறுப்பான அசைவுகள் அதிகரிக்கும்.",
                "ஒலி அமைப்பை தெற்க்கிழக்கு மூலையில் வைக்கவும்.",
                "நல்ல காற்றோட்டம் அவசியம்.",
                "உடற்பயிற்சி நடனங்களுக்கு நல்லது.",
                "இடம் எப்போதும் வெளிச்சமாக இருக்க வேண்டும்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் இசை அறை.",
            suggestions: [
                "சத்தம் அதிகமான கருவிகளுக்கு ஏற்றது.",
                "தாள வாத்தியங்களுக்கு நல்லது.",
                "கனமான கருவிகளை தெற்கு சுவரில் வைக்கவும்.",
                "ஒலி கட்டுப்பாடு அவசியம்.",
                "முரசு, டிரம் பயிற்சிக்கு ஏற்றது.",
                "சத்தம் வெளியே செல்லாமல் கவனிக்கவும்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் ஆன்மீக இசை அறை – சிறந்தது.",
            suggestions: [
                "தியான இசை மற்றும் பக்தி பாடல்களுக்கு ஏற்றது.",
                "மன அமைதி மற்றும் ஆன்மீக உணர்வு அதிகரிக்கும்.",
                "இடத்தை மிகச் சுத்தமாக வைத்திருக்கவும்.",
                "பாரம்பரிய கருவிகளை கிழக்கு நோக்கி வைக்கவும்.",
                "பஜனை, கீர்த்தனைக்கு ஏற்ற இடம்.",
                "கருவிகளை மரியாதையுடன் வைத்திருக்கவும்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் நடன அறை – ஏற்றதல்ல.",
            suggestions: [
                "அசைவில் சோர்வு ஏற்படலாம்.",
                "உற்சாகம் குறைய வாய்ப்பு உள்ளது.",
                "மாற்ற முடியாவிட்டால் வடக்கு பகுதியில் பயிற்சி செய்யவும்.",
                "அதிக வெளிச்சம் மற்றும் கண்ணாடி பயன்படுத்தவும்.",
                "இடத்தை ஊக்கமாக வைத்திருக்கவும்.",
                "இசை கோட்பாடு பயிற்சிக்கு பயன்படுத்தலாம்."
            ]
        });
    }
    
    remedies.push({
        title: "இசை / நடன அறை – பொதுவான வாஸ்து குறிப்புகள்.",
        suggestions: [
            "பயிற்சியின் போது கிழக்கு அல்லது வடக்கு நோக்கி அமரவும்.",
            "ஒலி மற்றும் எதிரொலி சரியாக இருக்க வேண்டும்.",
            "கருவிகளை சுத்தமாக பராமரிக்கவும்.",
            "நடனத்திற்கு கண்ணாடி கிழக்கு அல்லது வடக்கு சுவரில் வைக்கவும்.",
            "நல்ல காற்றோட்டம் அவசியம்.",
            "ஊக்கமான சூழல் உருவாக்கவும்."
        ]
    });
}

    
//Game Room
else if (lowerName.includes('game room') || lowerName.includes('billiards room') || 
         lowerName.includes('indoor games') || lowerName.includes('antar griha khel')) {
    
    if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் விளையாட்டு அறை – சிறந்த இடம்.",
            suggestions: [
                "உள் விளையாட்டுகளுக்கு ஏற்ற திசை.",
                "நண்பர்கள் மற்றும் குடும்பம் ஒன்றாக விளையாட நல்லது.",
                "விளையாட்டு மேசைகளை நடுவில் அல்லது வடமேற்கு மூலையில் வைக்கவும்.",
                "பச்சை, நீலம் போன்ற உற்சாக நிறங்கள் பயன்படுத்தவும்.",
                "நல்ல வெளிச்சம் மற்றும் காற்றோட்டம் இருக்க வேண்டும்.",
                "பில்லியர்ட்ஸ், டேபிள் டென்னிஸ் போன்ற விளையாட்டுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் விளையாட்டு அறை.",
            suggestions: [
                "மாலை நேர விளையாட்டுக்கு நல்லது.",
                "மன அழுத்தம் குறைந்து மகிழ்ச்சி அதிகரிக்கும்.",
                "விளையாட்டு கருவிகளை கிழக்கு அல்லது வடக்கு நோக்கி வைக்கவும்.",
                "மிதமான மஞ்சள் வெளிச்சம் பயன்படுத்தவும்.",
                "கார்ட்ஸ், வீடியோ கேம்ஸ் போன்றவற்றுக்கு ஏற்றது.",
                "இரவு உணவுக்கு பின் விளையாட நல்ல இடம்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் விளையாட்டு அறை.",
            suggestions: [
                "உற்சாகம் அதிகம் தேவைப்படும் விளையாட்டுக்கு நல்லது.",
                "போட்டி உணர்வு அதிகரிக்கும்.",
                "பில்லியர்ட்ஸ் மேசையை தெற்க்கிழக்கு மூலையில் வைக்கலாம்.",
                "மேசைக்கு மேலே நல்ல வெளிச்சம் அவசியம்.",
                "போட்டி விளையாட்டுகளுக்கு ஏற்ற இடம்.",
                "காற்றோட்டம் கட்டாயம் இருக்க வேண்டும்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் விளையாட்டு அறை.",
            suggestions: [
                "கனமான விளையாட்டு கருவிகளுக்கு ஏற்றது.",
                "சதுரங்கம், கேரம் போன்ற விளையாட்டுக்கு நல்லது.",
                "கனமான மேசைகளை தெற்கு சுவரில் வைக்கவும்.",
                "தெளிவான வெளிச்சம் ஏற்படுத்தவும்.",
                "நீண்ட நேரம் விளையாட வசதியான இருக்கை அவசியம்.",
                "மனநிலை அமைதியாக வைத்திருக்க வேண்டும்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் உள் விளையாட்டு அறை.",
            suggestions: [
                "மனதிறன் விளையாட்டுக்கு நல்லது.",
                "கவனம் மற்றும் புத்திசாலித்தனம் அதிகரிக்கும்.",
                "விளையாட்டு மேசையை வடக்கு அல்லது கிழக்கு நோக்கி வைக்கவும்.",
                "நீலம், பச்சை போன்ற அமைதி நிறங்கள் பயன்படுத்தவும்.",
                "சதுரங்கம், புதிர் விளையாட்டுக்கு ஏற்றது.",
                "இடம் ஒழுங்காக இருக்க வேண்டும்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் விளையாட்டு அறை.",
            suggestions: [
                "காலை நேர மன விளையாட்டுக்கு நல்லது.",
                "சுறுசுறுப்பு மற்றும் வேகமான சிந்தனை கிடைக்கும்.",
                "காலை ஒளியை பயன்படுத்தி விளையாடலாம்.",
                "வடகிழக்கு மூலையில் விளையாட்டு பகுதி அமைக்கவும்.",
                "வார இறுதி குடும்ப விளையாட்டுக்கு ஏற்றது.",
                "இடம் பிரகாசமாக இருக்க வேண்டும்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் விளையாட்டு அறை – ஏற்றதல்ல.",
            suggestions: [
                "வாக்குவாதம் மற்றும் அதிக போட்டி ஏற்படலாம்.",
                "விளையாட்டு நேரத்தை கட்டுப்படுத்தவும்.",
                "மாற்ற முடியாவிட்டால் வடமேற்கு பகுதியில் விளையாடவும்.",
                "இளநிறங்கள் மற்றும் அதிக வெளிச்சம் பயன்படுத்தவும்.",
                "அமைதியான விளையாட்டுக்கு மட்டுமே பயன்படுத்தவும்.",
                "அதிக சத்தம் தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் விளையாட்டு அறை – மிகவும் தவறு.",
            suggestions: [
                "கவனம் சிதறல் மற்றும் மன அமைதி குறையும்.",
                "முடிந்தால் உடனே மாற்ற வேண்டும்.",
                "மாற்ற முடியாவிட்டால் சிறிய புதிர்களுக்கு மட்டும் பயன்படுத்தவும்.",
                "இடத்தை மிகச் சுத்தமாக வைத்திருக்கவும்.",
                "அலங்காரம் மிகக் குறைவாக இருக்க வேண்டும்.",
                "வாஸ்து நிபுணர் ஆலோசனை பெறவும்."
            ]
        });
    }
    
    remedies.push({
        title: "விளையாட்டு அறை – பொதுவான வாஸ்து குறிப்புகள்.",
        suggestions: [
            "விளையாட்டு அறையில் நல்ல வெளிச்சம் அவசியம்.",
            "கருவிகள் ஒழுங்காக அடுக்கி வைக்கவும்.",
            "உட்கார இடம் வசதியாக இருக்க வேண்டும்.",
            "விளையாட்டு சூழல் மகிழ்ச்சியாக இருக்க வேண்டும்.",
            "அதிக சாமான்கள் சேர்க்க வேண்டாம்.",
            "போட்டி மற்றும் ஒத்துழைப்பு இரண்டும் சமமாக இருக்க வேண்டும்."
        ]
    });
}


//Library
else if (lowerName.includes('library') || lowerName.includes('study') || 
         lowerName.includes('reading nook') || lowerName.includes('pustakalay')) {
    
    if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் நூலகம் – சிறந்த இடம்.",
            suggestions: [
                "படிப்பு மற்றும் அறிவுக்கு மிகச் சிறந்த திசை.",
                "கவனம் மற்றும் நினைவாற்றல் அதிகரிக்கும்.",
                "படிப்பு மேசையை கிழக்கு நோக்கி வைக்கவும்.",
                "வெள்ளை, இளமஞ்சள் போன்ற மென்மையான நிறங்கள் பயன்படுத்தவும்.",
                "இடம் மிகவும் சுத்தமாக இருக்க வேண்டும்.",
                "ஆழமான படிப்புக்கு ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் நூலகம்.",
            suggestions: [
                "காலை நேர படிப்புக்கு மிக நல்லது.",
                "புதிய யோசனைகள் மற்றும் தெளிவு கிடைக்கும்.",
                "காலை இயற்கை ஒளியை பயன்படுத்தவும்.",
                "புத்தக அலமாரிகளை தெற்கு அல்லது மேற்கு சுவரில் வைக்கவும்.",
                "ஜன்னல்கள் சுத்தமாக இருக்க வேண்டும்.",
                "மாணவர்களுக்கு ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் படிப்பு அறை.",
            suggestions: [
                "வேலை மற்றும் கல்வி முன்னேற்றம் தரும்.",
                "ஞானம் மற்றும் அறிவு வளரும்.",
                "படிப்பு மேசையை வடக்கு அல்லது கிழக்கு நோக்கி வைக்கவும்.",
                "நீலம், பச்சை நிறங்கள் நல்லது.",
                "வடகிழக்கு மூலையை திறந்துவிட்டு சுத்தமாக வைத்திருக்கவும்.",
                "தொழில்முறை படிப்புக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் வாசிப்பு இடம்.",
            suggestions: [
                "மாலை நேர வாசிப்புக்கு நல்லது.",
                "கற்பனை மற்றும் ரசனை அதிகரிக்கும்.",
                "இருக்கையை கிழக்கு அல்லது வடக்கு நோக்கி வைக்கவும்.",
                "மிதமான மஞ்சள் வெளிச்சம் பயன்படுத்தவும்.",
                "நாவல்கள் மற்றும் பொழுதுபோக்கு வாசிப்புக்கு ஏற்றது.",
                "மாலை அமைதியான நேரத்திற்கு நல்லது."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் நூலகம்.",
            suggestions: [
                "தகவல் புத்தகங்களுக்கு ஏற்றது.",
                "தொடர்பு மற்றும் பொது அறிவு வளர்க்கும்.",
                "புத்தகங்களை ஒழுங்காக அடுக்கவும்.",
                "நல்ல வெளிச்சம் மற்றும் காற்றோட்டம் இருக்க வேண்டும்.",
                "மாசு இல்லாமல் வைத்திருக்கவும்.",
                "செய்தித்தாள்கள், மாத இதழ்களுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் படிப்பு அறை.",
            suggestions: [
                "கவனம் குறைய வாய்ப்பு உள்ளது.",
                "படிப்பு மேசையை வடகிழக்கு மூலையில் வைக்கவும்.",
                "இளநிறங்கள் பயன்படுத்தி கனத்தன்மையை குறைக்கவும்.",
                "அதிக வெளிச்சம் ஏற்படுத்தவும்.",
                "தெற்கு சுவர் கனமாக இருக்கலாம்.",
                "ஆழமான படிப்புக்கு தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் நூலகம்.",
            suggestions: [
                "அமைதி குறைந்து கவனம் சிதறலாம்.",
                "படிப்பு இடத்தை வடகிழக்கு பகுதியில் அமைக்கவும்.",
                "நீலம் அல்லது வெள்ளை நிறங்கள் பயன்படுத்தவும்.",
                "மின்னணு சாதனங்களை ஒழுங்காக வைக்கவும்.",
                "சிறு வாசிப்புக்கு மட்டும் பயன்படுத்தவும்.",
                "ஆழமான படிப்பை தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் நூலகம் – ஏற்றதல்ல.",
            suggestions: [
                "மன அழுத்தம் மற்றும் தடைகள் ஏற்படலாம்.",
                "முடிந்தால் வடகிழக்கு திசைக்கு மாற்றவும்.",
                "மிக இளநிறங்கள் மற்றும் அதிக வெளிச்சம் பயன்படுத்தவும்.",
                "இடம் மிக ஒழுங்காக இருக்க வேண்டும்.",
                "பழைய புத்தகங்களை சேமிக்க மட்டும் பயன்படுத்தலாம்.",
                "தினசரி படிப்புக்கு தவிர்க்கவும்."
            ]
        });
    }
    
    remedies.push({
        title: "நூலகம் / படிப்பு அறை – பொதுவான வாஸ்து குறிப்புகள்.",
        suggestions: [
            "படிக்கும் போது கிழக்கு அல்லது வடக்கு நோக்கி அமரவும்.",
            "புத்தக அலமாரிகள் தெற்கு அல்லது மேற்கு சுவரில் இருக்க வேண்டும்.",
            "நிழல் இல்லாத நல்ல வெளிச்சம் அவசியம்.",
            "படிப்பு இடம் சுத்தமாகவும் அமைதியாகவும் இருக்க வேண்டும்.",
            "படிப்பு மேசைக்கு எதிரே கண்ணாடி வைக்க வேண்டாம்.",
            "மன அமைதியான சூழல் உருவாக்கவும்."
        ]
    });
}

    
//Office
else if (lowerName.includes('office') || lowerName.includes('work from home') || 
         lowerName.includes('corner office') || lowerName.includes('karyalay')) {
    
    if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் அலுவலகம் – மிகச் சிறந்த இடம்.",
            suggestions: [
                "வேலை முன்னேற்றம் மற்றும் பதவி உயர்வுக்கு நல்ல திசை.",
                "வருமானம் மற்றும் தொழில் வளர்ச்சி அதிகரிக்கும்.",
                "மேசையை வடக்கு அல்லது கிழக்கு நோக்கி வைக்கவும்.",
                "நீலம், பச்சை, வெள்ளை போன்ற நிறங்கள் உற்பத்தித்திறன் அதிகரிக்கும்.",
                "வடகிழக்கு மூலையை சுத்தமாகவும் திறந்தவையாகவும் வைத்திருக்கவும்.",
                "வாடிக்கையாளர் சந்திப்பு மற்றும் முக்கிய முடிவுகளுக்கு ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் அலுவலகம் – தலைமைப் பொறுப்புக்கு ஏற்றது.",
            suggestions: [
                "தலைமைத் திறன் மற்றும் தெளிவான சிந்தனை வளர்க்கும்.",
                "முக்கிய முடிவுகள் எடுக்க உதவும் திசை.",
                "மேசையை வடக்கு அல்லது கிழக்கு நோக்கி வைக்கவும்.",
                "வெள்ளை, இளமஞ்சள், இளநீலம் போன்ற மென்மையான நிறங்கள் பயன்படுத்தவும்.",
                "இடத்தை மிகச் சுத்தமாகவும் எளிமையாகவும் வைத்திருக்கவும்.",
                "மேலாளர், நிர்வாகப் பொறுப்பில் இருப்பவர்களுக்கு ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் அலுவலகம்.",
            suggestions: [
                "காலை நேர வேலைக்கு மிக நல்லது.",
                "புதிய யோசனைகள் மற்றும் புதுமை அதிகரிக்கும்.",
                "இயற்கை காலை ஒளியை பயன்படுத்தவும்.",
                "மேசையை கிழக்கு நோக்கி வைக்கவும்.",
                "படைப்பாற்றல் வேலை செய்யும் நபர்களுக்கு ஏற்றது.",
                "குழு ஆலோசனை மற்றும் யோசனைச் சந்திப்புக்கு நல்ல இடம்."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் அலுவலகம்.",
            suggestions: [
                "தொடர்பு மற்றும் பேசித் தீர்மானிக்கும் வேலைக்கு நல்லது.",
                "வாடிக்கையாளர் உறவுகள் மற்றும் பயண வேலைக்கு ஏற்றது.",
                "மேசையை வடக்கு அல்லது கிழக்கு நோக்கி வைக்கவும்.",
                "இளநிறங்கள் மற்றும் மென்மையான அலங்காரம் பயன்படுத்தவும்.",
                "விற்பனை, விளம்பரம் போன்ற வேலைக்கு ஏற்ற இடம்.",
                "ஆன்லைன் சந்திப்பு மற்றும் வீடியோ அழைப்புக்கு நல்லது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் வீட்டிலிருந்து வேலை செய்யும் அலுவலகம்.",
            suggestions: [
                "மாலை நேர வேலைக்கு ஏற்றது.",
                "வேலை முடிப்பதில் நிலைத்தன்மை தரும்.",
                "மேசையை கிழக்கு நோக்கி வைக்கவும்.",
                "மிதமான வெளிச்சம் மற்றும் அமைதியான சூழல் அமைக்கவும்.",
                "எழுத்து, வடிவமைப்பு போன்ற படைப்பாற்றல் வேலைக்கு நல்லது.",
                "வெளிநாட்டு நேர வேலைக்கு ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் அலுவலகம்.",
            suggestions: [
                "நிலையான தொழிலுக்கு ஏற்ற திசை.",
                "மேசையை வடக்கு நோக்கி வைக்கவும்.",
                "கனத்தன்மை குறைய அதிக வெளிச்சம் பயன்படுத்தவும்.",
                "தெற்கு சுவரில் கனமான பொருட்கள் வைக்கலாம்.",
                "கணக்கு, நிதி சார்ந்த வேலைக்கு ஏற்றது.",
                "நீண்ட நேர அமர்வுக்கு நல்ல நாற்காலி அவசியம்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் அலுவலகம்.",
            suggestions: [
                "தொழில்நுட்பம் மற்றும் கணினி வேலைக்கு நல்லது.",
                "மின்சாதன சக்தி அதிகமாக செயல்படும்.",
                "கணினி மற்றும் மின் சாதனங்களை தெற்க்கிழக்கு மூலையில் வைக்கவும்.",
                "அதிக வெப்பம் தவிர்க்க இளநிறங்கள் பயன்படுத்தவும்.",
                "மென்பொருள் மற்றும் பொறியியல் வேலைக்கு ஏற்றது.",
                "காற்றோட்டம் கட்டாயம் இருக்க வேண்டும்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் அலுவலகம் – ஏற்றதல்ல.",
            suggestions: [
                "வேலை தடைகள் மற்றும் முன்னேற்ற தாமதம் ஏற்படலாம்.",
                "முடிந்தால் அலுவலகத்தை மாற்றவும்.",
                "மாற்ற முடியாவிட்டால் மேசையை வடகிழக்கு மூலையில் வைக்கவும்.",
                "மிக அதிக வெளிச்சம் மற்றும் இளநிறங்கள் பயன்படுத்தவும்.",
                "வேலை நேரத்தை குறுகியதாக வைத்திருக்கவும்.",
                "வாஸ்து நிபுணர் ஆலோசனை பெறுவது நல்லது."
            ]
        });
    }
    
    remedies.push({
        title: "அலுவலகம் – பொதுவான வாஸ்து குறிப்புகள்.",
        suggestions: [
            "வேலை செய்யும் போது வடக்கு அல்லது கிழக்கு நோக்கி அமரவும்.",
            "கணினியை மேசையின் தெற்க்கிழக்கு பகுதியில் வைக்கவும்.",
            "மேசையை தினமும் சுத்தமாக வைத்திருக்கவும்.",
            "நல்ல நாற்காலி ஆதரவு மற்றும் சரியான அமர்வு அவசியம்.",
            "பசுமை செடிகள் வைத்து காற்று சுத்தமாக வைத்திருக்கவும்.",
            "திரையில் ஒளி பிரதிபலிப்பு இல்லாமல் பார்த்துக்கொள்ளவும்."
        ]
    });
}


//waiting Room
else if (lowerName.includes('waiting room') || lowerName.includes('reception area') || 
         lowerName.includes('pratiksha kaksh') || lowerName.includes('waiting area')) {
    
    if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் காத்திருப்பு அறை – சிறந்த இடம்.",
            suggestions: [
                "வரவேற்பு மற்றும் காத்திருப்பு இடத்திற்கு ஏற்ற திசை.",
                "வருகையாளர்களுக்கு நல்ல முதல் அனுபவம் தரும்.",
                "இருப்பிடங்களை வடக்கு அல்லது கிழக்கு நோக்கி அமைக்கவும்.",
                "வெள்ளை, இளநீலம், பச்சை போன்ற மென்மையான நிறங்கள் பயன்படுத்தவும்.",
                "இடம் வெளிச்சமாகவும் காற்றோட்டத்துடனும் இருக்க வேண்டும்.",
                "விருந்தினர்கள் அமைதியாக காத்திருக்க உதவும்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் வரவேற்பு பகுதி.",
            suggestions: [
                "வியாபார வாய்ப்புகள் மற்றும் நல்ல பெயர் தரும்.",
                "நேர்மறை தொழில் சக்தி உருவாகும்.",
                "வரவேற்பு மேசையை வடக்கு அல்லது கிழக்கு நோக்கி வைக்கவும்.",
                "நீலம், பச்சை போன்ற வளம் குறிக்கும் நிறங்கள் நல்லது.",
                "வடகிழக்கு மூலையை சுத்தமாகவும் திறந்தவையாகவும் வைத்திருக்கவும்.",
                "நிறுவன அலுவலகங்களுக்கு ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் காத்திருப்பு அறை.",
            suggestions: [
                "காலை நேர வருகையாளர்களுக்கு நல்லது.",
                "உடல் நலம் மற்றும் சுறுசுறுப்பு அதிகரிக்கும்.",
                "காலை ஒளியை பயன்படுத்தி இடத்தை பிரகாசமாக வைத்திருக்கவும்.",
                "இருப்பிடங்களை கிழக்கு நோக்கி அமைக்கவும்.",
                "மகிழ்ச்சியான நிறங்கள் பயன்படுத்தவும்.",
                "மருத்துவம் மற்றும் சேவை இடங்களுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் வரவேற்பு பகுதி.",
            suggestions: [
                "மாலை நேர சந்திப்புகளுக்கு ஏற்றது.",
                "வருகையாளர்களுக்கு ஓய்வு உணர்வு தரும்.",
                "வரவேற்பு மேசையை கிழக்கு நோக்கி வைக்கவும்.",
                "மிதமான வெளிச்சம் பயன்படுத்தவும்.",
                "படைப்புத் தொழில் நிறுவனங்களுக்கு ஏற்ற இடம்.",
                "மாலை நேர வருகை அதிகம் உள்ள இடங்களுக்கு நல்லது."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் காத்திருப்பு அறை.",
            suggestions: [
                "அமைதியின்மை ஏற்பட வாய்ப்பு உள்ளது.",
                "வடகிழக்கு பகுதியில் தண்ணீர் அம்சம் வைக்கலாம்.",
                "நீலம், பச்சை போன்ற குளிர்ச்சி நிறங்கள் பயன்படுத்தவும்.",
                "இருப்பிடங்கள் வசதியாக இருக்க வேண்டும்.",
                "சிறிய சேவை இடங்களுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் வரவேற்பு பகுதி.",
            suggestions: [
                "கடுமையான சூழல் தோன்றலாம்.",
                "இருப்பிடங்களை வடக்கு நோக்கி அமைக்கவும்.",
                "இளநிறங்கள் மற்றும் அதிக வெளிச்சம் பயன்படுத்தவும்.",
                "பத்திரிகை, தண்ணீர் போன்ற வசதிகள் வழங்கவும்.",
                "சட்ட மற்றும் அரசு அலுவலகங்களுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் காத்திருப்பு அறை – ஏற்றதல்ல.",
            suggestions: [
                "வருகையாளர்கள் அசௌகரியம் உணரலாம்.",
                "முடிந்தால் வடமேற்கு பகுதியில் மாற்றவும்.",
                "அதிக வெளிச்சம் மற்றும் வரவேற்பு நிறங்கள் பயன்படுத்தவும்.",
                "இடம் மிகச் சுத்தமாக இருக்க வேண்டும்.",
                "சேவை தரத்தை அதிகரித்து சமநிலை செய்யவும்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் வரவேற்பு பகுதி – மிகப் பெரிய தவறு.",
            suggestions: [
                "நிறுவன பெயருக்கு பாதிப்பு ஏற்படலாம்.",
                "முடிந்தால் உடனே இடத்தை மாற்றவும்.",
                "மாற்ற முடியாவிட்டால் மிக எளிமையாக வைத்திருக்கவும்.",
                "வெள்ளை நிறம் மற்றும் மிகச் சுத்தம் அவசியம்.",
                "வாஸ்து நிபுணர் ஆலோசனை பெறவும்."
            ]
        });
    }
    
    remedies.push({
        title: "காத்திருப்பு அறை – பொதுவான வாஸ்து குறிப்புகள்.",
        suggestions: [
            "இருப்பிடங்கள் வடக்கு அல்லது கிழக்கு நோக்கி இருக்க வேண்டும்.",
            "இடம் சுத்தமாகவும் காற்றோட்டத்துடனும் இருக்க வேண்டும்.",
            "அமைதியான நிறங்கள் மற்றும் நல்ல வெளிச்சம் பயன்படுத்தவும்.",
            "வருகையாளர்களுக்கு தண்ணீர் மற்றும் வாசிப்பு வசதி கொடுக்கவும்.",
            "வரவேற்பு மேசை எளிதாக அணுகக்கூடிய இடத்தில் இருக்க வேண்டும்.",
            "சத்தம் குறைந்த தொழில்முறை சூழல் வைத்திருக்கவும்."
        ]
    });
}

    
//security room
else if (lowerName.includes('panic room') || lowerName.includes('safe room') || 
         lowerName.includes('security room') || lowerName.includes('suraksha kaksh')) {
    
    if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் பாதுகாப்பு அறை – மிகச் சிறந்த இடம்.",
            suggestions: [
                "பாதுகாப்பு மற்றும் காப்புக்கு சிறந்த திசை.",
                "நிலைத்தன்மை மற்றும் பாதுகாப்பு அதிகமாக இருக்கும்.",
                "பாதுகாப்பு சாதனங்களை தென்மேற்கு மூலையில் வைக்கவும்.",
                "மிக வலுவான கட்டுமானப் பொருட்கள் பயன்படுத்தவும்.",
                "நுழைவுவழி மறைந்ததாக இருந்தாலும் எளிதாக அணுகக்கூடியதாக இருக்க வேண்டும்.",
                "அவசர நேர பாதுகாப்புக்கு ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் பாதுகாப்பு அறை.",
            suggestions: [
                "பாதுகாப்புக்கும் நிலைத்தன்மைக்கும் நல்ல திசை.",
                "வலுவான பாதுகாப்பு சக்தி கிடைக்கும்.",
                "அவசர பொருட்களை தெற்கு சுவரில் வைக்கவும்.",
                "வலுவான சுவர்கள் மற்றும் பாதுகாப்பான கதவு அவசியம்.",
                "தொடர்பு சாதனங்கள் எப்போதும் சார்ஜ் நிலையில் இருக்க வேண்டும்.",
                "நீண்ட நேர பாதுகாப்புக்கு ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் பாதுகாப்பு அறை.",
            suggestions: [
                "கண்காணிப்பு மற்றும் பாதுகாப்பு பார்வைக்கு ஏற்றது.",
                "பாதுகாப்பு கட்டுப்பாடு நன்றாக அமையும்.",
                "கண்காணிப்பு திரைகளை கிழக்கு நோக்கி அமைக்கவும்.",
                "உலோக ஆதரவு மற்றும் வலுவான அமைப்பு பயன்படுத்தவும்.",
                "அவசர வெளியேறும் வழிகளை முன்கூட்டியே திட்டமிடவும்.",
                "பாதுகாப்பு கட்டுப்பாட்டு அறைக்கு ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் பாதுகாப்பு அறை.",
            suggestions: [
                "விரைவான அணுகல் மற்றும் வெளியேறும் வழிகளுக்கு ஏற்றது.",
                "காற்றோட்டம் நன்றாக இருக்கும்.",
                "அவசர பொருட்களை ஒழுங்காக வைத்திருக்கவும்.",
                "பாதுகாப்பான ஆனால் எளிதாக திறக்கக்கூடிய கதவு அமைக்கவும்.",
                "தொடர்பு அமைப்புகள் சரியாக செயல்பட வேண்டும்.",
                "குடும்ப பாதுகாப்பு அறைக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் பாதுகாப்பு அறை.",
            suggestions: [
                "அக்னி தன்மை காரணமாக கூடுதல் கவனம் தேவை.",
                "தீ பாதுகாப்பு ஏற்பாடுகள் அவசியம்.",
                "தீ அணைப்பு அமைப்புகளை நிறுவவும்.",
                "தீ எதிர்ப்பு பொருட்கள் பயன்படுத்தவும்.",
                "அவசர ஆக்ஸிஜன் வசதி வைத்திருக்கவும்.",
                "விரைவான நடவடிக்கைக்கான பாதுகாப்பு அறையாக பயன்படுத்தலாம்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் பாதுகாப்பு அறை – ஏற்றதல்ல.",
            suggestions: [
                "பாதுகாப்பு நோக்கத்திற்கு சிறந்ததல்ல.",
                "முடிந்தால் தென்மேற்கு பகுதியில் மாற்றவும்.",
                "மாற்ற முடியாவிட்டால் கூடுதல் பாதுகாப்பு ஏற்பாடுகள் செய்யவும்.",
                "பல மாற்று அமைப்புகள் வைத்திருக்கவும்.",
                "அவசர நடைமுறைகள் தெளிவாக இருக்க வேண்டும்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் பாதுகாப்பு அறை.",
            suggestions: [
                "பாதுகாப்பு குறைபாடு ஏற்படும் வாய்ப்பு உள்ளது.",
                "மிக அதிக பாதுகாப்பு ஏற்பாடுகள் அவசியம்.",
                "மறைந்த நுழைவுவழி அமைக்கவும்.",
                "இடம் பற்றிய தகவலை ரகசியமாக வைத்திருக்கவும்.",
                "முறையான பாதுகாப்பு பயிற்சி செய்யவும்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் பாதுகாப்பு அறை – மிக மோசமான இடம்.",
            suggestions: [
                "முழு பாதுகாப்பு அமைப்பையும் பாதிக்கலாம்.",
                "முடிந்தால் உடனே இடத்தை மாற்றவும்.",
                "மாற்ற முடியாவிட்டால் மிக அதிக பாதுகாப்பு ஏற்பாடுகள் செய்யவும்.",
                "பல மாற்று பாதுகாப்பு அமைப்புகள் கட்டாயம்.",
                "பாதுகாப்பு நிபுணர் ஆலோசனை பெறவும்."
            ]
        });
    }
    
    remedies.push({
        title: "பாதுகாப்பு அறை – பொதுவான வாஸ்து குறிப்புகள்.",
        suggestions: [
            "அறையின் இடத்தை ரகசியமாக வைத்திருக்கவும்.",
            "அவசர பொருட்கள் மற்றும் தொடர்பு சாதனங்கள் தயார் நிலையில் இருக்க வேண்டும்.",
            "காற்றோட்டம் மற்றும் ஆக்ஸிஜன் வசதி அவசியம்.",
            "வலுவான கதவுகள் மற்றும் பாதுகாப்பு அமைப்புகள் பயன்படுத்தவும்.",
            "பாதுகாப்பு அமைப்புகளை அடிக்கடி சோதிக்கவும்.",
            "அவசர வெளியேறும் வழிகள் முன்கூட்டியே திட்டமிடப்பட வேண்டும்."
        ]
    });
}


//Green House
else if (lowerName.includes('green house') || lowerName.includes('plant room') || 
         lowerName.includes('nursery garden') || lowerName.includes('paudha griha')) {
    
    if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் தாவர அறை – மிகச் சிறந்த இடம்.",
            suggestions: [
                "செடிகள் நன்றாக வளர சிறந்த திசை.",
                "காலை சூரிய ஒளி செடிகளுக்கு மிகவும் நல்லது.",
                "உயரமான செடிகளை மேற்கு பக்கமும் குறைந்த உயர செடிகளை கிழக்கு பக்கமும் வைக்கவும்.",
                "அதிக ஒளி வர வெளிப்படையான அமைப்புகள் பயன்படுத்தவும்.",
                "காற்றோட்டம் மற்றும் ஈரப்பதம் சரியாக இருக்க வேண்டும்.",
                "மலர் மற்றும் காய்கறி வளர்ப்புக்கு ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் தாவர அறை.",
            suggestions: [
                "மென்மையான ஒளி கிடைக்கும்.",
                "செடிகள் எரியாமல் ஆரோக்கியமாக வளரும்.",
                "அதிக தண்ணீர் விரும்பும் செடிகளை வடகிழக்கு மூலையில் வைக்கவும்.",
                "ஒளி பரவ பிரதிபலிக்கும் அமைப்புகள் பயன்படுத்தவும்.",
                "சரியான வெப்பம் மற்றும் ஈரப்பதம் பராமரிக்கவும்.",
                "நிழல் விரும்பும் செடிகளுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் தாவர அறை – மூலிகை செடிகளுக்கு சிறந்தது.",
            suggestions: [
                "மருத்துவ மற்றும் ஆன்மிக செடிகளுக்கு மிகச் சிறந்த இடம்.",
                "மூலிகைகளின் சக்தி அதிகரிக்கும்.",
                "துளசி, கற்றாழை போன்ற செடிகளை இங்கு வைக்கவும்.",
                "இடத்தை மிகச் சுத்தமாக வைத்திருக்கவும்.",
                "இயற்கை நீர்ப்பாசனம் மற்றும் இயற்கை உரம் பயன்படுத்தவும்.",
                "மருத்துவ பயன் தரும் செடிகளுக்கு ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் தாவர அறை.",
            suggestions: [
                "வெப்பம் விரும்பும் செடிகளுக்கு நல்லது.",
                "மலர்ச்சியை அதிகரிக்கும்.",
                "கற்றாழை போன்ற செடிகளை இங்கு வைக்கலாம்.",
                "அதிக வெப்பத்திற்கு நிழல் ஏற்பாடு செய்யவும்.",
                "காற்றோட்டம் நன்றாக இருக்க வேண்டும்.",
                "பாலைவன வகை செடிகளுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் தாவர அறை.",
            suggestions: [
                "மாலை சூரிய ஒளி கிடைக்கும்.",
                "தண்டு வலிமை அதிகரிக்கும்.",
                "மாலை ஒளியை தாங்கும் செடிகளை வைக்கவும்.",
                "அதிக வெப்பத்திற்கு பாதுகாப்பு ஏற்பாடு செய்யவும்.",
                "வெப்பம் விரும்பும் செடிகளுக்கு நல்லது."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் நர்சரி தோட்டம்.",
            suggestions: [
                "முழு சூரிய ஒளி கிடைக்கும்.",
                "கோடையில் அதிக வெப்பம் ஏற்படலாம்.",
                "நிழல் மற்றும் குளிர்ச்சி ஏற்பாடு செய்யவும்.",
                "வெப்பம் தாங்கும் செடிகளை இங்கு வைக்கவும்.",
                "மூலிகை மற்றும் வெளிநாட்டு செடிகளுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் தாவர அறை.",
            suggestions: [
                "காற்றோட்டம் நன்றாக இருக்கும்.",
                "இயற்கை பூச்சி கட்டுப்பாடு கிடைக்கும்.",
                "காற்று தேவைப்படும் செடிகளை வைக்கவும்.",
                "காற்று தாக்கம் குறைக்க பாதுகாப்பு ஏற்பாடு செய்யவும்.",
                "காலாண்டு செடிகள் வளர்க்க ஏற்றது."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் தாவர அறை – ஏற்றதல்ல.",
            suggestions: [
                "செடிகள் சரியாக வளராமல் போகலாம்.",
                "காற்றோட்டம் குறைவு ஏற்படும்.",
                "கூடுதல் வெளிச்சம் ஏற்பாடு செய்ய வேண்டும்.",
                "இடத்தை மிகச் சுத்தமாக பராமரிக்கவும்.",
                "தோட்ட கருவி சேமிப்புக்கு பயன்படுத்தலாம்."
            ]
        });
    }
    
    remedies.push({
        title: "தாவர அறை – பொதுவான வாஸ்து குறிப்புகள்.",
        suggestions: [
            "செடிகளின் தேவைக்கு ஏற்ப சூரிய ஒளி வழங்கவும்.",
            "வெப்பம் மற்றும் ஈரப்பதம் சமநிலையில் இருக்க வேண்டும்.",
            "இயற்கை உரம் மற்றும் பூச்சி கட்டுப்பாடு பயன்படுத்தவும்.",
            "உயரமான செடிகளை வடக்கு அல்லது மேற்கு பக்கம் வைக்கவும்.",
            "காற்றோட்டம் கட்டாயம் இருக்க வேண்டும்.",
            "தண்ணீர் மூலத்தை வடகிழக்கு பகுதியில் வைத்தால் நல்லது."
        ]
    });
}

    
//Beam
else if (lowerName.includes('columns') || lowerName.includes('pillars') || 
         lowerName.includes('beams') || lowerName.includes('structural support') || 
         lowerName.includes('stambh')) {
    
    if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் தூண்கள் – சிறந்த அமைப்பு",
            suggestions: [
                "கட்டிடத் தூண்களுக்கு மிகவும் சிறந்த திசை.",
                "கட்டிடத்திற்கு அதிக நிலைத்தன்மையும் வலிமையும் தரும்.",
                "தூண்கள் வலுவாகவும் உறுதியாகவும் இருக்க வேண்டும்.",
                "சதுரம் அல்லது செவ்வக வடிவ தூண்கள் சிறந்தது.",
                "தூண்கள் நேராகவும் சமநிலையுடனும் இருக்க வேண்டும்.",
                "முக்கிய சுமை தாங்கும் அமைப்புகளுக்கு ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் தூண்கள்",
            suggestions: [
                "கட்டிட ஆதரவுக்கு நல்ல திசை.",
                "அடித்தள வலிமை மற்றும் நிலைத்தன்மை கிடைக்கும்.",
                "தூண்களை சமமான இடைவெளியில் அமைக்கவும்.",
                "கான்கிரீட் அல்லது கல் போன்ற வலுவான பொருட்கள் பயன்படுத்தவும்.",
                "அடித்தளம் ஆழமாகவும் உறுதியாகவும் இருக்க வேண்டும்.",
                "நிலநடுக்கம் தாங்கும் கட்டுமானத்திற்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் தூண்கள்",
            suggestions: [
                "கட்டிட ஆதரவுக்கு ஏற்ற இடம்.",
                "சுமை தாங்கும் திறன் நன்றாக இருக்கும்.",
                "தூண்கள் நேர்கோட்டில் அமைக்கப்பட வேண்டும்.",
                "தரமான கட்டுமானப் பொருட்கள் பயன்படுத்தவும்.",
                "சுவர்களுடன் சரியான இணைப்பு இருக்க வேண்டும்.",
                "பல மாடி கட்டிடங்களுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் தூண்கள்",
            suggestions: [
                "இரண்டாம் நிலை கட்டமைப்புகளுக்கு ஏற்றது.",
                "விரிவாக்க பகுதிகளுக்கு போதுமான ஆதரவு தரும்.",
                "மிகவும் பெரிதாக இல்லாமல் ஒழுங்கான அளவில் வைக்கவும்.",
                "தேவையெனில் உலோக கலப்பு பொருட்கள் பயன்படுத்தலாம்.",
                "நடமாட்டத்தை தடை செய்யாத வகையில் அமைக்கவும்.",
                "வராண்டா, பால்கனி ஆதரவுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் தூண்கள்",
            suggestions: [
                "அக்னி தன்மை காரணமாக கூடுதல் கவனம் தேவை.",
                "கூடுதல் வலுப்படுத்தல் அவசியம்.",
                "தீ எதிர்ப்பு பொருட்கள் பயன்படுத்தவும்.",
                "விரிசல் அல்லது சேதம் உள்ளதா என அடிக்கடி பரிசோதிக்கவும்.",
                "மின் வயரிங் பாதுகாப்பாக இருக்க வேண்டும்.",
                "சமையலறை விரிவாக்கத்திற்கு பயன்படுத்தலாம்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் தூண்கள்",
            suggestions: [
                "தவறான அமைப்பு பண ஓட்டத்தை தடுக்கலாம்.",
                "வடக்கில் தூண்கள் மிகக் குறைவாக இருக்க வேண்டும்.",
                "வடகிழக்கு மூலையில் தூண் வைக்கவே கூடாது.",
                "இலகுவான நிறங்கள் பயன்படுத்தி பாரம் குறைக்கவும்.",
                "நல்ல சக்தி ஓட்டம் தடைபடாமல் பார்த்துக்கொள்ளவும்.",
                "அலங்கார ஆதரவாக மட்டும் பயன்படுத்தலாம்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் தூண்கள்",
            suggestions: [
                "காலை நேர நல்ல சக்தியை தடுக்கக்கூடும்.",
                "வாசிகளின் ஆரோக்கியம் பாதிக்கப்படலாம்.",
                "மிக மெலிந்த தூண்கள் மட்டுமே பயன்படுத்தவும்.",
                "இயன்றால் கண்ணாடி போன்ற பொருட்கள் பயன்படுத்தலாம்.",
                "வடகிழக்கு மூலையை முற்றிலும் தவிர்க்கவும்.",
                "தூண்களுக்கு பதிலாக beam அமைப்பு நல்லது."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் தூண்கள் – மிக மோசமான அமைப்பு",
            suggestions: [
                "வாஸ்து ரீதியாக மிகவும் தீங்கு தரும்.",
                "ஆரோக்கியம் மற்றும் பொருளாதாரம் பாதிக்கப்படும்.",
                "வடகிழக்கில் தூண்களை முற்றிலும் தவிர்க்கவும்.",
                "தவிர்க்க முடியாவிட்டால் மிக மெலிந்ததாக அமைக்கவும்.",
                "கண்ணாடி அல்லது வெளிப்படையான பொருட்கள் பயன்படுத்தலாம்.",
                "வாஸ்து மற்றும் கட்டுமான நிபுணர் ஆலோசனை அவசியம்."
            ]
        });
    }
    
    remedies.push({
        title: "தூண்கள் / Beam – பொதுவான வாஸ்து குறிப்புகள்",
        suggestions: [
            "படுக்கை, அமர்வு, வேலை இடத்தின் மேல் beam இருக்கக் கூடாது.",
            "வடகிழக்கு பகுதி தூண்கள் இல்லாமல் இருக்க வேண்டும்.",
            "வட்ட வடிவத்தை விட சதுர/செவ்வக தூண்கள் சிறந்தது.",
            "தூண்கள் நேராகவும் சமநிலையுடனும் இருக்க வேண்டும்.",
            "இலகுவான நிறங்களில் பூச்சு செய்யவும்.",
            "கட்டமைப்பு பாதுகாப்பை அடிக்கடி சரிபார்க்கவும்."
        ]
    });
}


//Swimming Pool
else if (lowerName.includes('swimming pool') || lowerName.includes('pool') || 
         lowerName.includes('talarav') || lowerName.includes('swimming area')) {
    
    if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் நீச்சல் குளம் – சிறந்த இடம்",
            suggestions: [
                "தண்ணீர் அம்சங்களுக்கு சிறந்த திசை.",
                "பணம், செழிப்பு மற்றும் நல்ல சக்தி அதிகரிக்கும்.",
                "வடக்கு பகுதியின் வடகிழக்கு பக்கத்தில் அமைக்கவும்.",
                "நீல நிற டைல்ஸ் அல்லது இயற்கை கல் பயன்படுத்தவும்.",
                "தண்ணீர் சுழற்சி சரியாக இருக்க வேண்டும்.",
                "குடும்ப ஆரோக்கியத்துக்கும் பொழுதுபோக்குக்கும் நல்லது."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் நீச்சல் குளம்",
            suggestions: [
                "காலை நேர நீச்சலுக்கு சிறந்தது.",
                "உடல் ஆரோக்கியமும் சுறுசுறுப்பும் அதிகரிக்கும்.",
                "கிழக்கு பகுதியின் வடகிழக்கு மூலையில் அமைக்கவும்.",
                "இலகு நிற டைல்ஸ் பயன்படுத்தவும்.",
                "இடம் எப்போதும் சுத்தமாக இருக்க வேண்டும்.",
                "காலை பயிற்சிக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் நீச்சல் குளம் – மிகச் சிறந்தது",
            suggestions: [
                "ஆன்மிக மற்றும் ஆரோக்கிய சக்தி அதிகரிக்கும்.",
                "மிகவும் சுத்தமாக பராமரிக்க வேண்டும்.",
                "இயற்கை பொருட்கள் மற்றும் வெள்ளை/நீல நிறம் பயன்படுத்தவும்.",
                "தண்ணீர் எப்போதும் تازாவாக இருக்க வேண்டும்.",
                "தியானம் மற்றும் மருத்துவ நீச்சலுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் நீச்சல் குளம்",
            suggestions: [
                "விருந்தினர்கள் மற்றும் குடும்ப பொழுதுபோக்குக்கு நல்லது.",
                "பாதுகாப்பு வேலிகள் அவசியம்.",
                "சறுக்காத தரை அமைப்பு பயன்படுத்தவும்.",
                "கண்காணிப்பு ஏற்பாடு இருக்க வேண்டும்.",
                "விழாக்கள் மற்றும் சந்திப்புகளுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் நீச்சல் குளம்",
            suggestions: [
                "மாலை நேர ஓய்வுக்கு ஏற்றது.",
                "மன அழுத்தம் குறையும்.",
                "மேற்கு பகுதியின் தென்மேற்கு பக்கத்தில் அமைக்கவும்.",
                "மாலை விளக்குகள் அமைக்கவும்.",
                "வேலைக்குப் பிறகு ஓய்வுக்கு நல்லது."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் நீச்சல் குளம்",
            suggestions: [
                "அக்னி–நீர் முரண்பாடு ஏற்படலாம்.",
                "முடிந்தால் வடகிழக்கில் மாற்றவும்.",
                "பாதுகாப்பு மற்றும் சுத்தம் அவசியம்.",
                "வெப்ப நீச்சல் குளத்திற்கு பயன்படுத்தலாம்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் நீச்சல் குளம்",
            suggestions: [
                "நீர் அம்சங்களுக்கு ஏற்றதல்ல.",
                "புகழ் மற்றும் நிலைத்தன்மை பாதிக்கலாம்.",
                "மாற்ற முடியாவிட்டால் தெற்க்கிழக்கில் வைக்கவும்.",
                "அதிக பராமரிப்பு அவசியம்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் நீச்சல் குளம் – மிக மோசமான இடம்",
            suggestions: [
                "மிகவும் தீங்கு தரும் அமைப்பு.",
                "ஆரோக்கியம் மற்றும் உறவுகளில் பிரச்சனை ஏற்படலாம்.",
                "இந்த திசையில் குளம் அமைக்கவே கூடாது.",
                "ஏற்கனவே இருந்தால் நிபுணர் ஆலோசனை பெறவும்.",
                "தோட்டம் அல்லது திட பகுதி ஆக மாற்றுவது நல்லது."
            ]
        });
    }
    
    remedies.push({
        title: "நீச்சல் குளம் – பொதுவான வாஸ்து குறிப்புகள்",
        suggestions: [
            "வடக்கு, கிழக்கு அல்லது வடகிழக்கு திசை சிறந்தது.",
            "தண்ணீர் எப்போதும் சுத்தமாக இருக்க வேண்டும்.",
            "சறுக்காத தரை மற்றும் பாதுகாப்பு ஏற்பாடுகள் அவசியம்.",
            "நீர் சுத்திகரிப்பு அமைப்பு கட்டாயம்.",
            "குழந்தைகள் பாதுகாப்புக்கு வேலி அல்லது மூடி வைக்கவும்."
        ]
    });
}

    
//Outdoor seating
else if (lowerName.includes('patio') || lowerName.includes('deck') || 
         lowerName.includes('outdoor seating') || lowerName.includes('bahari baithak')) {
    
    if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் வெளிப்புற அமர்வு – சிறந்த இடம்",
            suggestions: [
                "வெளிப்புற அமர்வுக்கும் ஓய்வுக்கும் மிகச் சிறந்த திசை.",
                "நல்ல காற்றும் நல்ல சக்தியும் வீட்டுக்குள் வர உதவும்.",
                "அமர்வுகளை வடக்கு அல்லது கிழக்கு நோக்கி வைக்கவும்.",
                "வெள்ளை, நீலம், பச்சை போன்ற இலகு நிற möble பயன்படுத்தவும்.",
                "வடகிழக்கு மூலையில் சிறிய தண்ணீர் அம்சம் வைக்கலாம்.",
                "மாலை நேர குடும்ப நேரத்துக்கு ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் Deck / வெளிப்புற அமர்வு",
            suggestions: [
                "காலை காப்பி, சூரிய உதயத்துக்கு மிகச் சிறந்த இடம்.",
                "ஆரோக்கியம் மற்றும் சுறுசுறுப்பை அதிகரிக்கும்.",
                "அமர்வுகளை கிழக்கு நோக்கி வைக்கவும்.",
                "காலை நேரத்துக்கு பொருத்தமான பிரகாசமான நிறங்கள் பயன்படுத்தவும்.",
                "மதிய வெயிலுக்கு நிழல் ஏற்பாடு செய்யவும்.",
                "காலை தியானம், காலை உணவுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் வெளிப்புற அமர்வு – மிகச் சிறந்தது",
            suggestions: [
                "ஆன்மிகம் மற்றும் அமைதியான செயல்களுக்கு சிறந்த திசை.",
                "தியானம், யோகா செய்ய மிகவும் ஏற்ற இடம்.",
                "இடத்தை மிகச் சுத்தமாகவும் எளிமையாகவும் வைத்திருக்கவும்.",
                "கல், மரம் போன்ற இயற்கை பொருட்கள் பயன்படுத்தவும்.",
                "அமர்வுகளை கிழக்கு நோக்கி வைக்கவும்.",
                "காலை பிரார்த்தனை, அமைதியான சிந்தனைக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் Patio / வெளிப்புற அமர்வு",
            suggestions: [
                "விருந்தினர்கள், சமூக சந்திப்புகளுக்கு நல்ல இடம்.",
                "பேச்சு, நட்பு, தொடர்புகள் அதிகரிக்கும்.",
                "பலர் அமர வசதியாக அமைக்கவும்.",
                "மென்மையான காற்று சுழற்சிக்காக wind chime வைக்கலாம்.",
                "காற்று அதிகமிருந்தால் பாதுகாப்பு ஏற்பாடு செய்யவும்.",
                "மாலை நிகழ்ச்சிகள், விருந்துகளுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் Deck / வெளிப்புற அமர்வு",
            suggestions: [
                "சூரிய அஸ்தமனத்தை ரசிக்க சிறந்த இடம்.",
                "மாலை நேர ஓய்வுக்கும் மனநிம்மதிக்கும் உதவும்.",
                "அமர்வுகளை மேற்கு நோக்கி வைக்கலாம்.",
                "மாலை நேரத்திற்கு மென்மையான விளக்குகள் அமைக்கவும்.",
                "நீண்ட நேரம் அமர வசதியான இருக்கைகள் பயன்படுத்தவும்.",
                "மாலை தேநீர், இரவு உணவுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் வெளிப்புற அமர்வு",
            suggestions: [
                "செயலில் நிறைந்த வெளிப்புற செயல்களுக்கு ஏற்றது.",
                "BBQ, வெளிப்புற சமையலுக்கு பொருத்தமான இடம்.",
                "தீ சார்ந்த அம்சங்களை தெற்க்கிழக்கு மூலையில் வைக்கவும்.",
                "பாதுகாப்பு விதிகளை கட்டாயம் பின்பற்றவும்.",
                "வெயில் அதிகமாக இருப்பதால் நிழல் ஏற்பாடு செய்யவும்.",
                "கூட்டங்கள், கொண்டாட்டங்களுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் Patio / வெளிப்புற அமர்வு",
            suggestions: [
                "குளிர்காலத்தில் வெயில் கிடைக்க உதவும்.",
                "வெயில் குளிர்ச்சிக்காக adjustable shade அமைக்கவும்.",
                "வெப்பம் தாங்கும் möble பயன்படுத்தவும்.",
                "அமர்வுகளை வடக்கு நோக்கி வைப்பது நல்லது.",
                "குளிர்கால காலை நேரத்திற்கு ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் Deck – ஏற்றதல்ல",
            suggestions: [
                "ஓய்வுக்கும் ரசனைக்கும் ஏற்ற இடமல்ல.",
                "மன அழுத்தம் அல்லது சலிப்பு ஏற்படலாம்.",
                "மாற்ற முடியாவிட்டால் வடக்கு/கிழக்கு மூலையில் அமர்வு வைக்கவும்.",
                "இலகு நிறங்களும் பிரகாசமான விளக்குகளும் பயன்படுத்தவும்.",
                "இடத்தை சுறுசுறுப்பாக வைத்திருக்கவும்.",
                "உறுதியான கட்டமைப்புக்கு இந்த பகுதி நல்லது."
            ]
        });
    }
    
    remedies.push({
        title: "வெளிப்புற அமர்வு – பொதுவான வாஸ்து குறிப்புகள்",
        suggestions: [
            "அமரும்போது வடக்கு அல்லது கிழக்கு நோக்கி அமரவும்.",
            "வானிலை தாங்கும் வசதியான möble பயன்படுத்தவும்.",
            "மாலை நேரத்திற்கு போதுமான விளக்குகள் அமைக்கவும்.",
            "இடத்தை சுத்தமாகவும் ஒழுங்காகவும் வைத்திருக்கவும்.",
            "செடிகள், இயற்கை அம்சங்கள் சேர்க்கவும்.",
            "ஒவ்வொரு செயலுக்கும் தனி இடம் அமைக்கவும்."
        ]
    });
}


//Pergola / Gazebo
else if (lowerName.includes('gazebo') || lowerName.includes('pergola') || 
         lowerName.includes('shade structure') || lowerName.includes('chhaya griha')) {
    
    if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் Gazebo / Pergola – சிறந்த இடம்",
            suggestions: [
                "நிழல் அமைப்புகளுக்கு சிறந்த திசை.",
                "ஓய்வும் நல்ல சக்தி ஓட்டமும் கிடைக்கும்.",
                "அமர்வுகளை வடக்கு அல்லது கிழக்கு நோக்கி வைக்கவும்.",
                "காற்றோட்டம் இருக்கும் இலகு பொருட்கள் பயன்படுத்தவும்.",
                "படரும் செடிகள் நிழலுக்காக நடலாம்.",
                "தியானம், அமைதியான ஓய்வுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் Pergola",
            suggestions: [
                "காலை நேர நிழலுக்கும் சூரிய உதயத்துக்கும் ஏற்றது.",
                "உடல் மற்றும் மன சுறுசுறுப்பு அதிகரிக்கும்.",
                "திறந்த வடிவமைப்பில் காலை வெளிச்சம் வரும்படி செய்யவும்.",
                "இயற்கை மரப் பொருட்கள் பயன்படுத்தவும்.",
                "மலரும் கொடிகள் நடலாம்.",
                "காலை உணவு, சந்திப்புகளுக்கு நல்லது."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் Gazebo – மிகச் சிறந்தது",
            suggestions: [
                "ஆன்மிக செயல்களுக்கு மிகச் சிறந்த இடம்.",
                "தியானம், பிரார்த்தனைக்கு ஏற்றது.",
                "அமைப்பு எளிமையாகவும் திறந்ததாகவும் இருக்க வேண்டும்.",
                "வெள்ளை அல்லது இயற்கை மர நிறம் பயன்படுத்தவும்.",
                "அமர்வுகளை கிழக்கு நோக்கி வைக்கவும்.",
                "யோகா, அமைதியான செயல்களுக்கு உகந்தது."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் Pergola",
            suggestions: [
                "விருந்துகள் மற்றும் சமூக நிகழ்வுகளுக்கு நல்லது.",
                "குடும்ப உறவுகள் வலுப்படும்.",
                "வசதியான அமர்வு அமைப்பு செய்யவும்.",
                "காற்று தாக்கத்துக்கு வலுவான பொருட்கள் பயன்படுத்தவும்.",
                "மாலை நேரத்திற்கு மென்மையான விளக்குகள் அமைக்கவும்.",
                "பார்ட்டி, நிகழ்ச்சிகளுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் Gazebo",
            suggestions: [
                "மாலை நேர நிழலுக்கும் சூரிய அஸ்தமனத்துக்கும் நல்லது.",
                "மதிய வெயிலிலிருந்து பாதுகாப்பு தரும்.",
                "மேற்கு பக்கம் திறந்த வடிவமைப்பு செய்யலாம்.",
                "மாலை நேர விளக்குகள் அமைக்கவும்.",
                "நீண்ட நேரம் அமர வசதியான இருக்கைகள் வைக்கவும்.",
                "மாலை உணவு, தேநீருக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் Pergola",
            suggestions: [
                "செயலில் நிறைந்த வெளிப்புற சமையலுக்கு ஏற்றது.",
                "BBQ, வெளிப்புற dining க்கு நல்ல இடம்.",
                "தீ சார்ந்த அம்சங்களை தெற்க்கிழக்கில் வைக்கவும்.",
                "தீ எதிர்ப்பு பொருட்கள் பயன்படுத்தவும்.",
                "புகை வெளியேற நல்ல காற்றோட்டம் அவசியம்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் Gazebo",
            suggestions: [
                "மதிய வெயிலிலிருந்து நிழல் தரும்.",
                "கோடைக்கால ஓய்வுக்கு உதவும்.",
                "மூடிய கூரை வடிவமைப்பு நல்லது.",
                "வெப்பம் குறைக்கும் இலகு நிறங்கள் பயன்படுத்தவும்.",
                "அமர்வுகளை வடக்கு நோக்கி வைக்கவும்.",
                "கோடை பிற்பகல் ஓய்வுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் Pergola – ஏற்றதல்ல",
            suggestions: [
                "ஓய்வுக்கான அமைப்புக்கு நல்லதல்ல.",
                "மனச் சுமை ஏற்படலாம்.",
                "மாற்ற முடியாவிட்டால் வடக்கு/கிழக்கு மூலையில் அமைக்கவும்.",
                "திறந்த, இலகு அமைப்பு பயன்படுத்தவும்.",
                "இடத்தை செயல்பாட்டுடன் வைத்திருக்கவும்.",
                "தோட்ட குடில் போன்ற உறுதியான அமைப்புக்கு பொருத்தம்."
            ]
        });
    }
    
    remedies.push({
        title: "Gazebo / Pergola – பொதுவான வாஸ்து குறிப்புகள்",
        suggestions: [
            "அமரும்போது வடக்கு அல்லது கிழக்கு நோக்கி அமரவும்.",
            "இயற்கை காற்றோட்டம் தரும் பொருட்கள் பயன்படுத்தவும்.",
            "நல்ல காற்றோட்டம் இருக்க வேண்டும்.",
            "படரும் செடிகள் மூலம் இயற்கை அழகு கூட்டவும்.",
            "சுற்றுப்புறத்தை சுத்தமாக பராமரிக்கவும்.",
            "தோட்ட அமைப்புடன் ஒத்திசைவாக வடிவமைக்கவும்."
        ]
    });
}

    
//Barbecue
else if (lowerName.includes('barbecue area') || lowerName.includes('bbq') || 
         lowerName.includes('outdoor kitchen') || lowerName.includes('rasoi bahar')) {
    
    if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் பார்பிக்யூ பகுதி – சிறந்த இடம்",
            suggestions: [
                "வெளிப்புற சமையலும் தீ தொடர்பான செயல்களுக்கும் மிகச் சிறந்த திசை.",
                "அக்னி மூலை இயல்பாகவே சமையல் சக்தியை ஆதரிக்கும்.",
                "கிரில் அல்லது பார்பிக்யூ அமைப்பை தெற்க்கிழக்கு மூலையில், கிழக்கு நோக்கி வைக்கவும்.",
                "தீ எதிர்ப்பு பொருட்கள் பயன்படுத்தி பாதுகாப்பை உறுதி செய்யவும்.",
                "புகை வெளியேற நல்ல காற்றோட்டம் கட்டாயம்.",
                "சமையலும் சமூக கூடுகைகளுக்கும் ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் BBQ பகுதி",
            suggestions: [
                "காலை சமையல் மற்றும் காலை உணவுக்கு நல்ல திசை.",
                "ஆரோக்கியமான சமையலும் குடும்ப உறவுகளும் வலுப்படும்.",
                "சமையல் பகுதியை கிழக்கின் தெற்க்கிழக்கு பகுதியில் வைக்கவும்.",
                "உணவு தயாரிப்புக்கு சுத்தமான, இலகு பொருட்கள் பயன்படுத்தவும்.",
                "காலை வெளிச்சம் நல்லபடி வரும்படி அமைக்கவும்.",
                "குடும்ப காலை நேரத்துக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் வெளிப்புற சமையல் பகுதி",
            suggestions: [
                "தீ சார்ந்த சமையல் செயல்களுக்கு ஏற்றது.",
                "சமையல் மற்றும் பேக்கிங் வேலைகளுக்கு நல்ல வெப்பம் கிடைக்கும்.",
                "தெற்கு பகுதியில் தெற்க்கிழக்கு மூலையில் கிரில் வைக்கவும்.",
                "வெப்பம் தாங்கும் தரை மற்றும் மேற்பரப்பு பயன்படுத்தவும்.",
                "கோடை காலத்திற்கு நிழல் ஏற்பாடு செய்யவும்.",
                "பாரம்பரிய சமையலுக்கு நல்ல இடம்."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் பார்பிக்யூ பகுதி",
            suggestions: [
                "விருந்தினர்களுடன் சமையல், சமூக சந்திப்புக்கு நல்லது.",
                "நட்பு பேச்சும் மகிழ்ச்சியும் அதிகரிக்கும்.",
                "காற்று தாக்கம் இல்லாதபடி பாதுகாப்பு ஏற்பாடு செய்யவும்.",
                "சமையல் வேலை சீராக செல்ல ஒழுங்கான அமைப்பு செய்யவும்.",
                "புகை வீட்டுக்குள் செல்லாதபடி கவனம் தேவை.",
                "பார்ட்டி மற்றும் நிகழ்ச்சிகளுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் BBQ பகுதி",
            suggestions: [
                "மாலை சமையலும் சூரிய அஸ்தமன உணவுக்கும் சிறந்தது.",
                "மனநிம்மதியும் உணவு ரசனையும் அதிகரிக்கும்.",
                "மேற்கு பகுதியின் தென்மேற்கு மூலையில் கிரில் வைக்கவும்.",
                "மாலை நேரத்திற்கு மென்மையான விளக்குகள் அமைக்கவும்.",
                "பாதுகாப்பான சமையலுக்கு போதுமான வெளிச்சம் அவசியம்.",
                "குடும்ப இரவு உணவுக்கு ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் வெளிப்புற சமையல் – ஏற்றதல்ல",
            suggestions: [
                "சமையல் பகுதிக்கு நல்ல திசையல்ல.",
                "உடல் நலம் தொடர்பான பிரச்சனைகள் ஏற்படலாம்.",
                "மாற்ற முடியாவிட்டால் தெற்க்கிழக்கு மூலையில் மாற்றவும்.",
                "தீ பாதுகாப்பு விதிகளை மிகக் கடுமையாக பின்பற்றவும்.",
                "சமையல் நேரம் குறைவாகவும் காற்றோட்டத்துடன் இருக்க வேண்டும்.",
                "முடிந்தால் இடமாற்றம் செய்யவும்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் பார்பிக்யூ பகுதி",
            suggestions: [
                "தண்ணீர் மற்றும் தீ சக்திகள் மோதும் திசை.",
                "செல்வம் மற்றும் உடல் நலத்திற்கு பாதிப்பு ஏற்படலாம்.",
                "மாற்ற முடியாவிட்டால் வடமேற்கு மூலையில் வைக்கவும்.",
                "தீ பாதுகாப்பு அமைப்புகள் அவசியம்.",
                "மிக நல்ல காற்றோட்டம் இருக்க வேண்டும்.",
                "அடிக்கடி பயன்படுத்துவது தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் BBQ – மிக மோசமான இடம்",
            suggestions: [
                "தீ மற்றும் சமையலுக்கு மிகவும் கேடு தரும் திசை.",
                "உடல், மன மற்றும் ஆன்மிக பாதிப்புகள் ஏற்படலாம்.",
                "இந்த திசையில் பார்பிக்யூ அமைப்பை தவிர்க்கவும்.",
                "இருந்தால் உடனே தெற்க்கிழக்கு திசைக்கு மாற்றவும்.",
                "சுத்திகரிப்பு மற்றும் வாஸ்து சரிசெய்தல் தேவை.",
                "வாஸ்து நிபுணரை அணுகுவது நல்லது."
            ]
        });
    }
    
    remedies.push({
        title: "பார்பிக்யூ பகுதி – பொதுவான வாஸ்து குறிப்புகள்",
        suggestions: [
            "தீ அமைப்பை தெற்க்கிழக்கு திசையில் வைப்பது சிறந்தது.",
            "புகை வெளியேற நல்ல காற்றோட்டம் அவசியம்.",
            "தீ எதிர்ப்பு பொருட்கள் மற்றும் பாதுகாப்பு சாதனங்கள் பயன்படுத்தவும்.",
            "சமையல் பகுதியை சுத்தமாகவும் ஒழுங்காகவும் வைத்திருக்கவும்.",
            "முக்கிய வீட்டிலிருந்து பாதுகாப்பான இடைவெளி வைக்கவும்.",
            "மாலை சமையலுக்கு போதுமான விளக்குகள் அமைக்கவும்."
        ]
    });
}


//Fire Pit
else if (lowerName.includes('fire pit') || lowerName.includes('bonfire area') || 
         lowerName.includes('agni kund') || lowerName.includes('campfire area')) {
    
    if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் Fire Pit – சிறந்த இடம்",
            suggestions: [
                "தீ சார்ந்த செயல்கள் மற்றும் ஹோமங்களுக்கு சிறந்த திசை.",
                "அக்னி மூலை இயல்பாக தீ சக்தியை ஆதரிக்கும்.",
                "Fire pit-ஐ தெற்க்கிழக்கு மூலையில், கிழக்கு நோக்கி வைக்கவும்.",
                "தீ எதிர்ப்பு கற்கள் மற்றும் பாதுகாப்பு தடுப்புகள் பயன்படுத்தவும்.",
                "எரியும் பொருட்களிலிருந்து பாதுகாப்பான இடைவெளி வைக்கவும்.",
                "ஹோமம், முகாம் தீக்கு ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் Bonfire பகுதி",
            suggestions: [
                "தீ சார்ந்த செயல்களுக்கு ஏற்ற திசை.",
                "உடல் வெப்பம் மற்றும் உற்சாகம் தரும்.",
                "தெற்கு பகுதியில் தெற்க்கிழக்கு மூலையில் அமைக்கவும்.",
                "வெப்பம் தாங்கும் இருக்கைகள் பயன்படுத்தவும்.",
                "காற்று பாதுகாப்பு அவசியம்.",
                "குளிர்கால கூடுகைகளுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் Fire Pit",
            suggestions: [
                "காலை நேர ஹோமம் மற்றும் தீ வழிபாட்டுக்கு ஏற்றது.",
                "புதிய தொடக்கங்களுக்கும் சுத்திகரிப்புக்கும் உதவும்.",
                "கிழக்கின் தெற்க்கிழக்கு மூலையில் வைக்கவும்.",
                "புனித மரக்கட்டைகள் பயன்படுத்தலாம்.",
                "புகை வீட்டுக்குள் செல்லாதபடி கவனம் தேவை.",
                "காலை தியானத்திற்கு பொருத்தம்."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் Bonfire பகுதி",
            suggestions: [
                "குழு கூடுகைகள் மற்றும் கதையாடலுக்கு நல்லது.",
                "சமூக உறவுகள் வலுப்படும்.",
                "காற்று திசையை கருத்தில் கொண்டு அமைக்கவும்.",
                "வீட்டிலிருந்து பாதுகாப்பான இடைவெளி வைக்கவும்.",
                "தீ பாதுகாப்பு கட்டாயம்.",
                "முகாம் சூழலுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் Fire Pit",
            suggestions: [
                "மாலை நேர ஓய்வு மற்றும் ரசனைக்கு நல்லது.",
                "மன அமைதி மற்றும் ரொமான்டிக் சூழல் உருவாகும்.",
                "மேற்கு பகுதியின் தென்மேற்கு மூலையில் வைக்கவும்.",
                "மாலை அமர்வுக்கு வசதியான இருக்கைகள் அமைக்கவும்.",
                "பாதுகாப்பு விளக்குகள் அவசியம்.",
                "சமூக நிகழ்ச்சிகளுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் Bonfire – ஏற்றதல்ல",
            suggestions: [
                "தீ அமைப்புக்கு நல்ல திசையல்ல.",
                "நிலைத்தன்மை குறைய வாய்ப்பு.",
                "மாற்ற முடியாவிட்டால் தெற்க்கிழக்கு மூலையில் வைக்கவும்.",
                "தீ கட்டுப்பாடு மற்றும் பாதுகாப்பு அதிகம் தேவை.",
                "சிறிய தீ மட்டுமே பயன்படுத்தவும்.",
                "முடிந்தால் இடமாற்றம் செய்யவும்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் Fire Pit",
            suggestions: [
                "தண்ணீர்–தீ சக்தி மோதல் ஏற்படும்.",
                "செல்வம் மற்றும் உடல் நலத்திற்கு பாதிப்பு.",
                "மாற்ற முடியாவிட்டால் வடமேற்கு மூலையில் வைக்கவும்.",
                "தீ கட்டுப்பாடு அவசியம்.",
                "காற்றோட்டம் மிக முக்கியம்.",
                "அடிக்கடி பயன்படுத்த வேண்டாம்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் Fire Pit – மிக மோசமானது",
            suggestions: [
                "தீ செயல்களுக்கு மிகவும் கேடு தரும்.",
                "உடல் மற்றும் ஆன்மிக பாதிப்புகள் ஏற்படும்.",
                "இந்த திசையில் Fire pit தவிர்க்க வேண்டும்.",
                "இருந்தால் உடனே தெற்க்கிழக்கு திசைக்கு மாற்றவும்.",
                "சுத்திகரிப்பு வழிபாடுகள் செய்யவும்.",
                "வாஸ்து நிபுணரை அணுகவும்."
            ]
        });
    }
    
    remedies.push({
        title: "Fire Pit – பொதுவான வாஸ்து குறிப்புகள்",
        suggestions: [
            "Fire pit-ஐ தெற்க்கிழக்கு திசையில் அமைக்கவும்.",
            "எப்போதும் தீ பாதுகாப்பு விதிகளை பின்பற்றவும்.",
            "புகை வெளியேற நல்ல காற்றோட்டம் இருக்க வேண்டும்.",
            "எரியும் பொருட்கள் அருகில் வைக்க வேண்டாம்.",
            "இடத்தை சுத்தமாக வைத்திருக்கவும்.",
            "தீயை மரியாதையுடன், பொறுப்புடன் பயன்படுத்தவும்."
        ]
    });
}

    
//Meter Room
else if (lowerName.includes('meter room') || lowerName.includes('utility closet') || 
         lowerName.includes('service closet') || lowerName.includes('seva kaksh')) {
    
    if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் மீட்டர் அறை – சிறந்த இடம்",
            suggestions: [
                "மின்சார மீட்டர் மற்றும் சேவை சாதனங்களுக்கு மிகச் சரியான திசை.",
                "அக்னி சக்தி மின்சார சக்தியை இயல்பாக ஆதரிக்கும்.",
                "மின்சார மீட்டர்களை தெற்க்கிழக்கு மூலையில் அமைக்கவும்.",
                "தீ எதிர்ப்பு பெட்டி மற்றும் பாதுகாப்பு உறை பயன்படுத்தவும்.",
                "பராமரிப்பு மற்றும் வாசிப்புக்கு எளிதான அணுகல் இருக்க வேண்டும்.",
                "முக்கிய மின்பலகை அமைப்புக்கு ஏற்ற இடம்."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் சேவை அலமாரி",
            suggestions: [
                "வீட்டு சேவை மற்றும் பராமரிப்பு பகுதிக்கு நல்ல திசை.",
                "சாதனங்களை ஒழுங்காக வைத்துக்கொள்ள உதவும்.",
                "சுத்தம் செய்யும் பொருட்களை முறையாக அடுக்கி வைக்கவும்.",
                "இலகு நிறங்கள் மற்றும் நல்ல வெளிச்சம் பயன்படுத்தவும்.",
                "இடம் உலர்ந்தும் காற்றோட்டத்துடனும் இருக்க வேண்டும்.",
                "வீட்டு பராமரிப்பு உபகரணங்களுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் சேவை அறை",
            suggestions: [
                "பெரிய சேவை சாதனங்களை வைக்க ஏற்றது.",
                "இயந்திரங்களுக்கு நிலைத்தன்மை தரும்.",
                "கனமான சாதனங்களை தெற்கு சுவரில் வைக்கவும்.",
                "வெப்பம் மற்றும் மின்சார பாதுகாப்பு ஏற்பாடுகள் அவசியம்.",
                "போதுமான காற்றோட்டம் இருக்க வேண்டும்.",
                "ஹீட்டர் மற்றும் பெரிய அமைப்புகளுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் மீட்டர் அறை",
            suggestions: [
                "சேவை மற்றும் பராமரிப்பு பணிகளுக்கு ஏற்ற இடம்.",
                "பராமரிப்பு செய்ய எளிதாக இருக்கும்.",
                "மீட்டர் மற்றும் கட்டுப்பாடுகளை ஒழுங்காக அமைக்கவும்.",
                "நீடித்த பொருட்கள் பயன்படுத்துவது நல்லது.",
                "இடம் வெளிச்சமாகவும் எளிதாக அணுகக்கூடியதாகவும் இருக்க வேண்டும்.",
                "இரண்டாம் நிலை சேவை அமைப்புகளுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் சேவை அலமாரி – கவனம் தேவை",
            suggestions: [
                "ஒழுங்கில்லாமல் இருந்தால் செல்வ சக்தி தடைப்படும்.",
                "சாதனங்களை மிகக் குறைவாகவும் ஒழுங்காகவும் வைத்திருக்கவும்.",
                "மாற்ற முடியாவிட்டால் வடமேற்கு மூலையில் வைக்கவும்.",
                "பிரகாசமான வெளிச்சம் மற்றும் இலகு நிறங்கள் பயன்படுத்தவும்.",
                "வடகிழக்கு மூலை முற்றிலும் காலியாகவும் சுத்தமாகவும் இருக்க வேண்டும்.",
                "தண்ணீர் தொடர்பான சாதனங்களை தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் சேவை அலமாரி",
            suggestions: [
                "சரியாக இல்லாவிட்டால் காலை நேர நல்ல சக்தி தடைப்படும்.",
                "மிகச் சிறிய மற்றும் ஒழுங்கான அமைப்பு மட்டும் பயன்படுத்தவும்.",
                "இடம் மிகச் சுத்தமாக பராமரிக்கப்பட வேண்டும்.",
                "மிக அவசியம் என்றால் மட்டுமே வடகிழக்கு பகுதியில் அமைக்கவும்.",
                "இந்த திசையில் மின்பலகைகள் தவிர்க்கப்பட வேண்டும்.",
                "அடிக்கடி பராமரிப்பு செய்ய வேண்டும்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் மீட்டர் அறை – நல்லதல்ல",
            suggestions: [
                "மின்சார மற்றும் இயந்திர கோளாறுகள் ஏற்படலாம்.",
                "பாதுகாப்பு சிக்கல்கள் உருவாக வாய்ப்பு.",
                "முடிந்தால் தெற்க்கிழக்கு அல்லது வடமேற்கு திசைக்கு மாற்றவும்.",
                "பாதுகாப்பு விதிகளை கடுமையாக பின்பற்றவும்.",
                "இடத்தை மிகவும் சுத்தமாக வைத்திருக்கவும்.",
                "நிபுணரின் ஆலோசனை பெறுவது நல்லது."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் சேவை அலமாரி – மிக மோசமானது",
            suggestions: [
                "எந்த சேவை அல்லது மின்சார சாதனங்களுக்கும் கேடு தரும்.",
                "பெரிய கோளாறுகள் மற்றும் உடல் நல பாதிப்புகள் ஏற்படலாம்.",
                "முடிந்தால் உடனே வேறு திசைக்கு மாற்றவும்.",
                "மாற்ற முடியாவிட்டால் மிகக் குறைவாகவும் சுத்தமாகவும் வைத்திருக்கவும்.",
                "வெள்ளை நிறங்கள் மற்றும் அதிக பாதுகாப்பு பயன்படுத்தவும்.",
                "வாஸ்து நிபுணர் ஆலோசனை அவசியம்."
            ]
        });
    }
    
    remedies.push({
        title: "மீட்டர் / சேவை அறை – பொதுவான வாஸ்து குறிப்புகள்",
        suggestions: [
            "சேவை பகுதிகளை எப்போதும் சுத்தமாகவும் ஒழுங்காகவும் வைத்திருக்கவும்.",
            "மின்சார பாதுகாப்பு விதிகளை கட்டாயமாக பின்பற்றவும்.",
            "போதுமான காற்றோட்டம் மற்றும் வெளிச்சம் இருக்க வேண்டும்.",
            "அனைத்து சாதனங்களையும் அடிக்கடி பரிசோதிக்கவும்.",
            "அவசர நிறுத்து சுவிட்ச் எளிதாக அணுகக்கூடிய இடத்தில் இருக்க வேண்டும்.",
            "சாதனங்களுக்கு பெயர் அடையாளம் தெளிவாக இருக்க வேண்டும்."
        ]
    });
}


//Light Box / Fuse Box
else if (lowerName.includes('electrical panel') || lowerName.includes('fuse box') || 
         lowerName.includes('circuit breaker') || lowerName.includes('bijli board')) {
    
    if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் மின்பலகை – சிறந்த இடம்",
            suggestions: [
                "மின்பலகை மற்றும் ஃப்யூஸ் பெட்டிக்கு மிகச் சரியான திசை.",
                "அக்னி சக்தி மின்சார ஓட்டத்தை இயல்பாக ஆதரிக்கும்.",
                "மின்பலகையை தெற்க்கிழக்கு மூலையில், கிழக்கு நோக்கி வைக்கவும்.",
                "தீ எதிர்ப்பு பாதுகாப்பு உறை பயன்படுத்தவும்.",
                "பராமரிப்புக்கு குறைந்தது 3 அடி இடைவெளி வைக்கவும்.",
                "பாதுகாப்பான மின்சார விநியோகத்திற்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் ஃப்யூஸ் பெட்டி",
            suggestions: [
                "வீட்டு மின்சார கட்டுப்பாட்டுக்கு ஏற்றது.",
                "சீரான மின்சார விநியோகத்திற்கு உதவும்.",
                "கிழக்கு சுவரின் தெற்க்கிழக்கு பகுதியில் அமைக்கவும்.",
                "நல்ல தரையிடல் மற்றும் பாதுகாப்பு அவசியம்.",
                "ஒவ்வொரு சுவிட்சுக்கும் தெளிவான பெயர் எழுதவும்.",
                "வீட்டு பயன்பாட்டுக்கு பொருத்தமான இடம்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் சர்க்யூட் கட்டுப்பாடு",
            suggestions: [
                "சில முன்னெச்சரிக்கைகளுடன் பயன்படுத்தலாம்.",
                "மின்சார கட்டுப்பாட்டுக்கு அக்னி சக்தி உதவும்.",
                "தெற்கு சுவரின் தெற்க்கிழக்கு பகுதியில் வைக்கவும்.",
                "நல்ல மின்சார பாதுகாப்பு உறை அவசியம்.",
                "வெப்பம் வெளியேற காற்றோட்டம் இருக்க வேண்டும்.",
                "பெரிய மின்சார அமைப்புகளுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் மின்பலகை",
            suggestions: [
                "சராசரி அளவில் ஏற்ற திசை.",
                "சில நேரங்களில் மின்சார ஏற்ற இறக்கங்கள் ஏற்படலாம்.",
                "நல்ல தரமான பாதுகாப்பு சாதனங்கள் பயன்படுத்தவும்.",
                "சரியான தரையிடல் மற்றும் மின்னழுத்த பாதுகாப்பு தேவை.",
                "இடம் காற்றோட்டத்துடன் இருக்க வேண்டும்.",
                "அடிக்கடி பரிசோதனை செய்ய வேண்டும்."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் ஃப்யூஸ் பெட்டி",
            suggestions: [
                "மின்சார நிலைத்தன்மை சிக்கல்கள் ஏற்படலாம்.",
                "அடிக்கடி மின்தடை ஏற்படும் வாய்ப்பு உள்ளது.",
                "மேம்பட்ட பாதுகாப்பு அமைப்புகள் பயன்படுத்தவும்.",
                "வைரிங் தரம் சரியாக இருக்க வேண்டும்.",
                "தகுதியான மின்சார நிபுணர் பரிசோதனை அவசியம்.",
                "பேக்கப் பாதுகாப்பு அமைப்புகள் சேர்க்கவும்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் மின்சார கட்டுப்பாடு – நல்லதல்ல",
            suggestions: [
                "தண்ணீர்–மின்சாரம் மோதல் ஏற்படும்.",
                "பாதுகாப்பு அபாயங்கள் அதிகரிக்கலாம்.",
                "நீர்ப்புகா பாதுகாப்பு உறை பயன்படுத்தவும்.",
                "மேம்பட்ட பாதுகாப்பு சாதனங்கள் அவசியம்.",
                "இடம் எப்போதும் உலர்ந்ததாக இருக்க வேண்டும்.",
                "தொழில்முறை பரிசோதனை கட்டாயம்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் மின்பலகை – மிக மோசமானது",
            suggestions: [
                "மிகவும் கேடு தரும் திசை.",
                "பெரிய பாதுகாப்பு மற்றும் மின்சார கோளாறுகள் ஏற்படலாம்.",
                "முடிந்தால் உடனே தெற்க்கிழக்கு திசைக்கு மாற்றவும்.",
                "அதிக பாதுகாப்பு மற்றும் தீ தடுப்பு அமைப்புகள் பயன்படுத்தவும்.",
                "பல அடுக்கு பாதுகாப்பு ஏற்பாடுகள் செய்யவும்.",
                "தொழில்முறை பரிசோதனை கட்டாயம்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் ஃப்யூஸ் பெட்டி – மிக மோசமானது",
            suggestions: [
                "மிகப் பெரிய விபத்துகள் ஏற்படும் வாய்ப்பு.",
                "முழு மின்சார அமைப்பே பாதிக்கப்படலாம்.",
                "முடிந்தால் உடனே மாற்ற வேண்டும்.",
                "மாற்ற முடியாவிட்டால் அதிக பாதுகாப்பு தேவை.",
                "தீ அணைப்பு அமைப்புகள் அருகில் இருக்க வேண்டும்.",
                "மின்சார + வாஸ்து நிபுணரை உடனே அணுகவும்."
            ]
        });
    }
    
    remedies.push({
        title: "மின்பலகை – பொதுவான வாஸ்து குறிப்புகள்",
        suggestions: [
            "மின்பலகையை தெற்க்கிழக்கு திசையில் வைப்பது சிறந்தது.",
            "சரியான தரையிடல் மற்றும் பாதுகாப்பு அவசியம்.",
            "பாதுகாப்பான அணுகலுக்கு 3 அடி இடைவெளி வைக்கவும்.",
            "தீ எதிர்ப்பு பெட்டி பயன்படுத்தவும்.",
            "அனைத்து சர்க்யூட்களுக்கும் தெளிவான பெயர் இடவும்.",
            "தொழில்முறை பராமரிப்பு மற்றும் பாதுகாப்பு சோதனை அவசியம்."
        ]
    });
}

    
//Plumbing
else if (lowerName.includes('plumbing chase') || lowerName.includes('pipe space') || 
         lowerName.includes('water lines area') || lowerName.includes('nali sthan')) {
    
    if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் குழாய் பகுதி – சிறந்த இடம்",
            suggestions: [
                "தண்ணீர் குழாய்கள் மற்றும் நீர் ஓட்டத்திற்கு சிறந்த திசை.",
                "தண்ணீர் சக்தி இயல்பாக ஓட்டத்தை ஆதரிக்கும்.",
                "முக்கிய நீர் குழாய்களை வடக்கு அல்லது வடகிழக்கு பகுதியில் வைக்கவும்.",
                "ஈரப்பதம் மற்றும் ஒழுகல் வராமல் பாதுகாப்பு அடுக்குகள் அவசியம்.",
                "பராமரிப்புக்கு எளிதாக அணுகும் வசதி இருக்க வேண்டும்.",
                "நீர் அழுத்தம் சீராக இருக்க உதவும்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் குழாய் இடம்",
            suggestions: [
                "நீர் விநியோகத்திற்கு ஏற்ற திசை.",
                "சுத்தமான நீர் ஓட்டத்திற்கு உதவும்.",
                "கிழக்கு திசையின் வடகிழக்கு பகுதியில் குழாய்களை அமைக்கவும்.",
                "நல்ல தரமான குழாய்கள் பயன்படுத்த வேண்டும்.",
                "இயற்கை நீர் ஓட்டத்திற்கு சரியான சாய்வு இருக்க வேண்டும்.",
                "முக்கிய நீர் வரவு குழாய்களுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் நீர் குழாய்கள் – மிகச் சிறந்தது",
            suggestions: [
                "குடிநீர் மற்றும் வடிகட்டி அமைப்புகளுக்கு மிகச் சிறந்த திசை.",
                "நீரின் தரம் மற்றும் நல்ல சக்தி அதிகரிக்கும்.",
                "ஒரு சொட்டு ஒழுகலும் இல்லாமல் பராமரிக்க வேண்டும்.",
                "உயர்தர குழாய்கள் மற்றும் வடிகட்டி அமைப்புகள் பயன்படுத்தவும்.",
                "வடகிழக்கு மூலையில் நீர் தேங்க விடக்கூடாது.",
                "குடிநீர் குழாய்களுக்கு மிகச் சரியான இடம்."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் குழாய் பகுதி",
            suggestions: [
                "இரண்டாம் நிலை நீர் குழாய்களுக்கு ஏற்றது.",
                "சூடுநீர் குழாய்களுக்கு இந்த திசை சரி.",
                "குழாய்களை ஒழுங்காகவும் எளிதாக அணுகக்கூடியதாகவும் வைக்கவும்.",
                "வெப்ப பாதுகாப்பு அடுக்குகள் பயன்படுத்தவும்.",
                "ஈரப்பதம் சேராமல் காற்றோட்டம் அவசியம்.",
                "சேவை மற்றும் கழிவு நீர் குழாய்களுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் குழாய் இடம்",
            suggestions: [
                "சராசரி அளவில் ஏற்ற திசை.",
                "மாலை நேர நீர் பயன்பாட்டுக்கு பொருந்தும்.",
                "குழாய்களுக்கு நல்ல ஆதரவு மற்றும் பாதுகாப்பு தேவை.",
                "துருப்பிடிக்காத பொருட்கள் பயன்படுத்தவும்.",
                "பராமரிப்புக்கு எளிதாக இருக்க வேண்டும்.",
                "குளியலறை மற்றும் சமையலறை குழாய்களுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் நீர் குழாய்கள் – கவனம் தேவை",
            suggestions: [
                "நீருக்கு ஏற்ற திசை அல்ல.",
                "நீர் அழுத்தம் மற்றும் ஒழுகல் பிரச்சினைகள் வரலாம்.",
                "மாற்ற முடியாவிட்டால் வடமேற்கு பகுதியில் அமைக்கவும்.",
                "கூடுதல் பாதுகாப்பு மற்றும் ஒழுகல் கண்டறிதல் அவசியம்.",
                "நீர் அழுத்தத்தை சரியாக கட்டுப்படுத்தவும்.",
                "அடிக்கடி பரிசோதனை கட்டாயம்."
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் குழாய் பகுதி – நல்லதல்ல",
            suggestions: [
                "அக்னி மற்றும் நீர் சக்திகள் மோதும்.",
                "குழாய் சேதம் மற்றும் மின்சார அபாயம் ஏற்படலாம்.",
                "நீர் குழாய்களை மின்சார வழிகளில் இருந்து விலக்கி வைக்கவும்.",
                "தீ எதிர்ப்பு பாதுகாப்பு பொருட்கள் பயன்படுத்தவும்.",
                "தானியங்கி நீர் நிறுத்து அமைப்பு உதவும்.",
                "பாதுகாப்பு சோதனை அவசியம்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் குழாய் இடம் – மிக மோசமானது",
            suggestions: [
                "குழாய்களுக்கு மிகவும் கேடு தரும் திசை.",
                "பெரிய ஒழுகல் மற்றும் கட்டிட சேதம் ஏற்படலாம்.",
                "முடிந்தால் வடக்கு திசைக்கு மாற்றவும்.",
                "மிக உயர்தர பொருட்கள் பயன்படுத்த வேண்டும்.",
                "ஒழுகல் தடுப்பு அமைப்புகள் கட்டாயம்.",
                "பிளம்பர் + வாஸ்து ஆலோசனை பெறவும்."
            ]
        });
    }
    
    remedies.push({
        title: "குழாய் பகுதி – பொதுவான வாஸ்து குறிப்புகள்",
        suggestions: [
            "முக்கிய நீர் குழாய்களை வடக்கு அல்லது வடகிழக்கு திசையில் வைப்பது சிறந்தது.",
            "ஒழுகல் இல்லாமல் பராமரிக்க வேண்டும்.",
            "தரமான குழாய்கள் மட்டுமே பயன்படுத்தவும்.",
            "பராமரிப்புக்கு திறப்பு கதவுகள் இருக்க வேண்டும்.",
            "வடகிழக்கு பகுதியில் நீர் வடிகட்டி அமைப்பது நல்லது.",
            "அடிக்கடி பரிசோதனை அவசியம்."
        ]
    });
}


//AC Plant / HVAC
else if (lowerName.includes('hvac room') || lowerName.includes('ac plant room') || 
         lowerName.includes('heating cooling') || lowerName.includes('tapun shital')) {
    
    if (dirLower === 'southeast') {
        remedies.push({
            title: "தெற்க்கிழக்கு திசையில் ஏசி / குளிரூட்டி அறை – சிறந்தது",
            suggestions: [
                "குளிரூட்டி மற்றும் வெப்ப சாதனங்களுக்கு மிகச் சரியான திசை.",
                "அக்னி சக்தி மின்சார பயன்பாட்டை ஆதரிக்கும்.",
                "ஏசி இயந்திரங்களை தெற்க்கிழக்கு மூலையில் வைக்கவும்.",
                "வெப்பம் வெளியேற நல்ல காற்றோட்டம் தேவை.",
                "பராமரிப்புக்கு எளிதான இடம் இருக்க வேண்டும்.",
                "மின்சார செலவு சீராக இருக்கும்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் ஏசி இயந்திர அறை",
            suggestions: [
                "வெப்ப சாதனங்களுக்கு ஏற்றது.",
                "சூடு காற்று சுழற்சிக்கு உதவும்.",
                "கனமான இயந்திரங்களை தெற்கு சுவரில் வைக்கவும்.",
                "நல்ல வெப்ப பாதுகாப்பு அவசியம்.",
                "காற்றோட்டத்திற்கு போதிய இடம் வேண்டும்.",
                "ஹீட்டர் மற்றும் பாய்லர் அமைப்புகளுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் ஏசி அறை",
            suggestions: [
                "குளிரூட்டி அமைப்புகளுக்கு சராசரி திசை.",
                "காற்று சுழற்சி நல்லதாக இருக்கும்.",
                "இயந்திரங்களை காற்று திசையை கவனித்து வைக்கவும்.",
                "சத்தம் குறைக்கும் ஏற்பாடுகள் செய்யவும்.",
                "நீர் வடிகால் சரியாக இருக்க வேண்டும்.",
                "மைய ஏசி அமைப்புகளுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் ஏசி அறை",
            suggestions: [
                "மாலை நேர குளிர்ச்சிக்கு உதவும்.",
                "வெயில் அதிகமாகும் நேரங்களில் பயனுள்ளது.",
                "இயந்திரங்களுக்கு நிழல் ஏற்பாடு செய்யவும்.",
                "மின்சார சேமிப்பு இயந்திரங்கள் பயன்படுத்தவும்.",
                "அடிக்கடி பராமரிப்பு அவசியம்.",
                "வெப்பம் அதிகமான பகுதிகளுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் குளிரூட்டி அறை – நல்லதல்ல",
            suggestions: [
                "இயந்திர செயல்திறன் குறையலாம்.",
                "ஈரப்பதம் மின்சார சாதனங்களை பாதிக்கலாம்.",
                "மாற்ற முடியாவிட்டால் வடமேற்கு பகுதியில் வைக்கவும்.",
                "நீர்ப்புகா பாதுகாப்பு அவசியம்.",
                "நல்ல காற்றோட்டம் மற்றும் நீர் வடிகால் தேவை.",
                "ஈரப்பதம் கட்டுப்பாடு முக்கியம்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் ஏசி அறை",
            suggestions: [
                "காலை நேர நல்ல சக்தி தடைப்படலாம்.",
                "மின்சார செலவு அதிகரிக்க வாய்ப்பு.",
                "முடிந்தால் கிழக்கின் தெற்க்கிழக்கு பகுதியில் வைக்கவும்.",
                "சத்தம் வெளியே வராத பாதுகாப்பு செய்யவும்.",
                "இடம் மிகவும் சுத்தமாக இருக்க வேண்டும்.",
                "வடகிழக்கு மூலையை தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு திசையில் ஏசி அறை – மிக மோசமானது",
            suggestions: [
                "இயந்திர கோளாறுகள் அடிக்கடி ஏற்படலாம்.",
                "மின்சார செலவு அதிகரிக்கும்.",
                "முடிந்தால் உடனே தெற்க்கிழக்கு அல்லது வடமேற்கு திசைக்கு மாற்றவும்.",
                "உயர் திறன் இயந்திரங்கள் பயன்படுத்தவும்.",
                "மேம்பட்ட கண்காணிப்பு அமைப்புகள் உதவும்.",
                "தொழில்முறை பராமரிப்பு அவசியம்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் ஏசி அறை – மிக மோசமானது",
            suggestions: [
                "எந்த இயந்திரங்களுக்கும் கேடு தரும்.",
                "பெரிய பழுதுகள் மற்றும் உடல் நல பாதிப்புகள் ஏற்படலாம்.",
                "முடிந்தால் உடனே மாற்ற வேண்டும்.",
                "மாற்ற முடியாவிட்டால் மிகச் சிறிய அமைப்பு மட்டும் பயன்படுத்தவும்.",
                "உயர்தர காற்று வடிகட்டி அமைப்புகள் அவசியம்.",
                "நிபுணர் ஆலோசனை உடனே பெறவும்."
            ]
        });
    }
    
    remedies.push({
        title: "ஏசி / குளிரூட்டி அறை – பொதுவான வாஸ்து குறிப்புகள்",
        suggestions: [
            "ஏசி மற்றும் குளிரூட்டி அமைப்புகளை தெற்க்கிழக்கு திசையில் வைப்பது சிறந்தது.",
            "இயந்திரங்களைச் சுற்றி நல்ல காற்றோட்டம் இருக்க வேண்டும்.",
            "மின்சார சேமிப்பு இயந்திரங்கள் பயன்படுத்தவும்.",
            "பில்டர் மற்றும் இயந்திர பராமரிப்பு தவறாமல் செய்யவும்.",
            "நீர் வடிகால் சரியாக அமைக்கவும்.",
            "இடத்தை எப்போதும் சுத்தமாகவும் ஒழுங்காகவும் வைத்திருக்கவும்."
        ]
    });
}

    
    
//Center
else if (lowerName.includes('brahmasthan') || lowerName.includes('center') || 
         lowerName.includes('central area') || lowerName.includes('madhya sthan')) {
    
    if (dirLower === 'center') {
        remedies.push({
            title: "பிரம்மஸ்தானம் – வீட்டின் மைய சக்தி பகுதி",
            suggestions: [
                "வீட்டில் மிக முக்கியமான மற்றும் சக்திவாய்ந்த பகுதி.",
                "முழு வீட்டின் சக்தி இங்கிருந்து பரவுகிறது.",
                "இந்த இடத்தை எப்போதும் திறந்ததாகவும் சுத்தமாகவும் வைத்திருக்க வேண்டும்.",
                "இலகுவான நிறங்கள் அல்லது இயற்கை தரை பொருட்கள் பயன்படுத்தவும்.",
                "கனமான பொருட்கள், தூண்கள், கழிப்பறை இங்கு இருக்கக் கூடாது.",
                "தியானம், பிரார்த்தனை மற்றும் நல்ல சக்தி ஓட்டத்திற்கு ஏற்ற இடம்."
            ]
        });
    } else {
        remedies.push({
            title: "பிரம்மஸ்தானம் – முக்கிய கவனிக்க வேண்டியவை",
            suggestions: [
                "பிரம்மஸ்தானம் எப்போதும் வீட்டின் மையத்தில் இருக்க வேண்டும்.",
                "இந்த பகுதி லேசாகவும் திறந்ததாகவும் இருக்க வேண்டும்.",
                "கனமான பொருட்கள் அல்லது கட்டுமானம் தவிர்க்க வேண்டும்.",
                "சமையலறை, கழிப்பறை, படிக்கட்டு இங்கு இருக்கக் கூடாது.",
                "சுத்தம் மற்றும் ஒழுங்கு மிகவும் அவசியம்.",
                "அமைதியான சூழல் உருவாக்க சிறந்த இடம்."
            ]
        });
    }
    
    remedies.push({
        title: "பிரம்மஸ்தான வாஸ்து விதிகள்",
        suggestions: [
            "மைய பகுதியில் கழிப்பறை அல்லது குளியலறை இருக்கக் கூடாது.",
            "அக்னி தொடர்பான அமைப்புகள் மையத்தில் வேண்டாம்.",
            "கனமான அலமாரி அல்லது சேமிப்பு பொருட்கள் தவிர்க்கவும்.",
            "தரை இலகுவாக இருக்க வேண்டும் – மார்பிள் அல்லது லைட் டைல்ஸ் நல்லது.",
            "மையத்தில் லைட் அல்லது கிரிஸ்டல் தொங்க விடலாம்.",
            "எப்போதும் சுத்தம் மற்றும் நல்ல சக்தி பராமரிக்க வேண்டும்."
        ]
    });
    
    remedies.push({
        title: "பிரம்மஸ்தானத்தில் தவறு இருந்தால் தீர்வுகள்",
        suggestions: [
            "மையத்தில் கழிப்பறை இருந்தால் உடனே மாற்ற வேண்டும்.",
            "மையத்தில் சமையலறை இருந்தால் பைரமிட் அல்லது கிரிஸ்டல் வைக்கலாம்.",
            "தூண் இருந்தால் கண்ணாடி மற்றும் இலகு நிறங்கள் பயன்படுத்தலாம்.",
            "தூபம், சாம்பிராணி மூலம் அடிக்கடி சுத்தம் செய்யவும்.",
            "கிரிஸ்டல் பைரமிட் அல்லது தாமரை சின்னம் வைக்கலாம்.",
            "பெரிய மாற்றங்களுக்கு வாஸ்து நிபுணரை அணுகவும்."
        ]
    });
}


//Courtyard
else if (lowerName.includes('chowk') || lowerName.includes('courtyard') || 
         lowerName.includes('angan') || lowerName.includes('inner courtyard')) {
    
    if (dirLower === 'center') {
        remedies.push({
            title: "மைய பகுதியில் முற்றம் – மிகச் சிறந்த அமைப்பு",
            suggestions: [
                "வீட்டின் நடுவில் முற்றம் இருப்பது மிகவும் நல்லது.",
                "காற்றோட்டம் மற்றும் வெளிச்சம் சிறப்பாக கிடைக்கும்.",
                "வானத்துக்கு திறந்த முற்றமாக இருக்க வேண்டும்.",
                "கல், செடி, நீர் போன்ற இயற்கை அம்சங்கள் சேர்க்கவும்.",
                "முற்றத்தை எப்போதும் சுத்தமாக வைத்திருக்க வேண்டும்.",
                "குடும்ப நிகழ்ச்சிகள் மற்றும் தியானத்திற்கு சிறந்த இடம்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் முற்றம்",
            suggestions: [
                "செல்வம் மற்றும் நல்ல வாய்ப்புகளை ஈர்க்கும்.",
                "குளிர்ந்த காற்று மற்றும் நல்ல சக்தி கிடைக்கும்.",
                "வடகிழக்கு பகுதியில் நீர் அம்சம் வைக்கலாம்.",
                "இலகு நிற தரை மற்றும் ஒளி பிரதிபலிக்கும் பொருட்கள் பயன்படுத்தவும்.",
                "திறந்த மற்றும் வரவேற்கும் சூழல் வைத்திருக்கவும்.",
                "விருந்தினர்கள் கூடுவதற்கு நல்ல இடம்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் முற்றம்",
            suggestions: [
                "காலை சூரிய ஒளி நிறைவாக கிடைக்கும்.",
                "உடல் ஆரோக்கியம் மற்றும் புத்துணர்ச்சி தரும்.",
                "கிழக்கு பக்கம் திறந்த வடிவமைப்பு செய்யவும்.",
                "காலை வெயிலில் வளரும் செடிகள் நடவும்.",
                "பகல் நேரம் பயன்பாட்டிற்கு ஏற்ற சூழல்.",
                "காலை யோகா மற்றும் குடும்ப நேரத்திற்கு சிறந்தது."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு திசையில் முற்றம் – புனிதமானது",
            suggestions: [
                "மிகவும் நல்ல மற்றும் புனிதமான திசை.",
                "தெய்வீக சக்தி மற்றும் அமைதி அதிகரிக்கும்.",
                "முற்றம் மிகவும் சுத்தமாக இருக்க வேண்டும்.",
                "துளசி செடி மற்றும் புனித சின்னங்கள் வைக்கலாம்.",
                "வெள்ளை அல்லது இலகு நிற கற்கள் பயன்படுத்தவும்.",
                "பிரார்த்தனை மற்றும் தியானத்திற்கு மிகச் சிறந்தது."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு திசையில் முற்றம்",
            suggestions: [
                "உறவுகள் மற்றும் உரையாடலுக்கு நல்லது.",
                "விருந்தினர் வருகைக்கு ஏற்ற இடம்.",
                "அமர்வதற்கு வசதியான இருக்கைகள் அமைக்கவும்.",
                "காற்று மணி போன்றவை வைக்கலாம்.",
                "மாலை நேரத்திற்கு நல்ல விளக்குகள் அமைக்கவும்.",
                "குடும்ப விழாக்களுக்கு பொருத்தமானது."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் முற்றம்",
            suggestions: [
                "மாலை நேர ஓய்வுக்கு நல்லது.",
                "சூரிய அஸ்தமன காட்சிக்கு ஏற்றது.",
                "மேற்கு பக்கம் திறந்த அமைப்பு செய்யலாம்.",
                "மாலை நேரத்திற்கு மென்மையான விளக்குகள் பயன்படுத்தவும்.",
                "குடும்பத்துடன் அமர சிறந்த சூழல்.",
                "இரவு நேர சந்திப்புகளுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் முற்றம்",
            suggestions: [
                "குளிர்காலத்தில் வெயில் கிடைக்க உதவும்.",
                "குளிர் கால நிகழ்ச்சிகளுக்கு ஏற்றது.",
                "கோடைக்கால வெப்பத்தை குறைக்க பிரதிபலிக்கும் பொருட்கள் பயன்படுத்தவும்.",
                "நிழல் ஏற்பாடுகள் செய்யவும்.",
                "வடக்கு நோக்கி அமரும் வகையில் இருக்கைகள் அமைக்கவும்.",
                "குளிர்கால செயல்களுக்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'southeast' || dirLower === 'southwest') {
        remedies.push({
            title: "தெற்கு திசைகளில் முற்றம் – பரிந்துரை இல்லை",
            suggestions: [
                "முக்கிய முற்றமாக அமைப்பது நல்லதல்ல.",
                "வேறு பயன்பாடுகளுக்கு ஏற்ற இடமாக இருக்கும்.",
                "மாற்ற முடியாவிட்டால் திறந்த மற்றும் காற்றோட்டம் வைத்திருக்கவும்.",
                "இலகு நிறங்கள் மற்றும் நல்ல விளக்குகள் பயன்படுத்தவும்.",
                "சமநிலை பெற வடகிழக்கில் நீர் அம்சம் வைக்கவும்.",
                "வாஸ்து ஆலோசனை பெறுவது நல்லது."
            ]
        });
    }
    
    remedies.push({
        title: "முற்றம் – பொதுவான வாஸ்து குறிப்புகள்",
        suggestions: [
            "முற்றத்தை எப்போதும் சுத்தமாகவும் திறந்ததாகவும் வைத்திருக்கவும்.",
            "செடி, நீர், கல் போன்ற இயற்கை அம்சங்கள் சேர்க்கவும்.",
            "நீர் தேங்காமல் சரியான வடிகால் ஏற்பாடு செய்யவும்.",
            "வீட்டு அமைப்புடன் ஒத்திசைவாக வடிவமைக்கவும்.",
            "குடும்பத்திற்கு நல்ல நிகழ்ச்சிகளுக்கு முற்றம் பயன்படுத்தவும்.",
            "அடிக்கடி சுத்தம் செய்து நல்ல சக்தி பராமரிக்கவும்."
        ]
    });
}

    
// Wi-Fi Hub / Server Room
else if (lowerName.includes('server room') || lowerName.includes('network closet') || 
         lowerName.includes('smart home hub') || lowerName.includes('tantra kaksh')) {
    
    if (dirLower === 'southeast') {
        remedies.push({
            title: "தென்கிழக்கு – சர்வர் / வைஃபை ஹப் சிறந்த இடம்",
            suggestions: [
                "எலக்ட்ரானிக் சாதனங்களுக்கு ஏற்ற திசை.",
                "அக்னி சக்தி மின்சாரம் மற்றும் டேட்டா ஓட்டத்தை ஆதரிக்கும்.",
                "சர்வர் மற்றும் நெட்வொர்க் சாதனங்களை தென்கிழக்கில் வைக்கவும்.",
                "வெப்பம் அதிகரிக்காமல் குளிர்ச்சி அமைப்பு அவசியம்.",
                "நல்ல காற்றோட்டம் மற்றும் வெப்ப கட்டுப்பாடு இருக்க வேண்டும்.",
                "நெட்வொர்க் ஸ்டேபிளாக இயங்க உதவும்."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் சர்வர் ரூம்",
            suggestions: [
                "டேட்டா சேமிப்புக்கு ஸ்திரமான திசை.",
                "கனமான ரேக்குகளை தெற்கு சுவரில் வைக்கலாம்.",
                "யுபிஎஸ் மற்றும் குளிர்ச்சி அமைப்பு கட்டாயம்.",
                "கேபிள்கள் ஒழுங்காக இருக்க வேண்டும்.",
                "டேட்டா சென்டர் பயன்பாட்டிற்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் நெட்வொர்க் பகுதி",
            suggestions: [
                "தகவல் பரிமாற்றத்திற்கு நல்ல திசை.",
                "ரூட்டர், ஸ்விட்ச் போன்றவை இங்கு வைக்கலாம்.",
                "வெப்பம் அதிகரிக்காமல் காற்றோட்டம் அவசியம்.",
                "மேன்டினன்ஸுக்கு எளிதான அணுகல் இருக்க வேண்டும்.",
                "இணையம் மற்றும் ஸ்மார்ட் ஹோம் பயன்பாட்டிற்கு நல்லது."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு – ஸ்மார்ட் ஹோம் ஹப்",
            suggestions: [
                "வைர்லெஸ் இணைப்புக்கு ஏற்ற இடம்.",
                "ஸ்மார்ட் சாதனங்கள் நல்லபடியாக இணையும்.",
                "வீட்டின் மையத்திற்கு அருகில் வைத்தால் கவரேஜ் நல்லது.",
                "சிக்னல் இடையூறு வராமல் பாதுகாப்பு தேவை.",
                "பவர் பேக்கப் கட்டாயம்."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் சர்வர் ரூம்",
            suggestions: [
                "பேக்கப் மற்றும் சேமிப்பு சர்வர்களுக்கு ஏற்றது.",
                "குளிர்ச்சி மற்றும் பாதுகாப்பு கவனிக்க வேண்டும்.",
                "பவர் பேக்கப் அவசியம்.",
                "அக்சஸ் கட்டுப்பாடு வைத்திருக்க வேண்டும்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் நெட்வொர்க் பகுதி",
            suggestions: [
                "முழுமையாக பரிந்துரை செய்யப்படாத இடம்.",
                "ஈரப்பதம் சாதனங்களுக்கு பாதிப்பு தரலாம்.",
                "முடிந்தால் வடமேற்கில் மாற்றவும்.",
                "வாட்டர்ப்ரூஃப் கவர் பயன்படுத்தவும்.",
                "மின்னழுத்த பாதுகாப்பு அவசியம்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு – தவிர்க்க வேண்டிய இடம்",
            suggestions: [
                "எலக்ட்ரானிக் சாதனங்களுக்கு நல்லதல்ல.",
                "அடிக்கடி பிரச்சனை, டேட்டா லாஸ் ஏற்படும்.",
                "முடிந்தால் உடனே தென்கிழக்குக்கு மாற்றவும்.",
                "பேக்கப் மற்றும் கண்காணிப்பு கட்டாயம்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு – மிக மோசமான இடம்",
            suggestions: [
                "எந்த எலக்ட்ரானிக் சாதனமும் இங்கு வைக்கக் கூடாது.",
                "சிஸ்டம் கோளாறு மற்றும் பாதுகாப்பு பிரச்சனை ஏற்படும்.",
                "உடனே மாற்றுவது நல்லது.",
                "மாற்ற முடியாவிட்டால் அதிக பாதுகாப்பு தேவை."
            ]
        });
    }
    
    remedies.push({
        title: "சர்வர் / வைஃபை ஹப் – பொது வாஸ்து குறிப்புகள்",
        suggestions: [
            "தென்கிழக்கு திசை சிறந்த தேர்வு.",
            "குளிர்ச்சி, காற்றோட்டம் சரியாக இருக்க வேண்டும்.",
            "யுபிஎஸ் மற்றும் மின்சார பாதுகாப்பு அவசியம்.",
            "கேபிள்கள் ஒழுங்காக வைத்திருக்கவும்.",
            "பாதுகாப்பு மற்றும் அணுகல் கட்டுப்பாடு முக்கியம்.",
            "அடிக்கடி பராமரிப்பு செய்ய வேண்டும்."
        ]
    });
}


// Charging Station
else if (lowerName.includes('charging station') || lowerName.includes('electronics area') || 
         lowerName.includes('gadget zone') || lowerName.includes('device charging')) {
    
    if (dirLower === 'southeast') {
        remedies.push({
            title: "தென்கிழக்கு – சார்ஜிங் பகுதி சிறந்த இடம்",
            suggestions: [
                "மின்சாதனங்களை சார்ஜ் செய்ய மிகச் சிறந்த திசை.",
                "அக்னி சக்தி மின்சார ஓட்டத்தை ஆதரிக்கும்.",
                "சார்ஜிங் பாயிண்ட் தென்கிழக்கில் வைக்கவும்.",
                "சர்ஜ் பாதுகாப்பு கட்டாயம்.",
                "வெப்பம் கூடாமல் காற்றோட்டம் இருக்க வேண்டும்."
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "கிழக்கு திசையில் எலக்ட்ரானிக் பகுதி",
            suggestions: [
                "தினசரி போன், டேப்லெட் சார்ஜ் செய்ய நல்லது.",
                "கேபிள்கள் ஒழுங்காக வைத்திருக்கவும்.",
                "சுத்தமான, குழப்பமில்லாத இடம் வைத்துக்கொள்ளவும்.",
                "காலை நேர பயன்பாட்டிற்கு ஏற்றது."
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "தெற்கு திசையில் சார்ஜிங் பகுதி",
            suggestions: [
                "பல சாதனங்கள் சார்ஜ் செய்ய ஏற்றது.",
                "சுவருக்கு அருகில் சார்ஜிங் ஹப் வைக்கலாம்.",
                "சாதனங்களுக்கு இடைவெளி இருக்க வேண்டும்.",
                "பவர் பேங்க் பயன்பாட்டிற்கு நல்லது."
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "வடமேற்கு – கேஜெட் பகுதி",
            suggestions: [
                "வைர்லெஸ் சார்ஜிங் சாதனங்களுக்கு ஏற்றது.",
                "ஹெட்ஃபோன், வாட்ச் போன்றவை இங்கு வைக்கலாம்.",
                "கேபிள்கள் ஒழுங்காக சேமிக்கவும்.",
                "காற்றோட்டம் அவசியம்."
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "மேற்கு திசையில் சார்ஜிங்",
            suggestions: [
                "மாலை நேர சார்ஜிங்கிற்கு ஏற்றது.",
                "லேப்டாப் மற்றும் வேலை சாதனங்களுக்கு நல்லது.",
                "இரவெல்லாம் சார்ஜ் வைக்க தவிர்க்கவும்."
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "வடக்கு திசையில் சார்ஜிங் – கவனம் தேவை",
            suggestions: [
                "நீர் அருகில் சார்ஜ் செய்யக் கூடாது.",
                "முடிந்தால் வடமேற்கில் மாற்றவும்.",
                "பாதுகாப்பு கவர் பயன்படுத்தவும்."
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "தென்மேற்கு – தவிர்க்க வேண்டிய இடம்",
            suggestions: [
                "சாதனங்களுக்கு பிரச்சனை ஏற்படலாம்.",
                "பேட்டரி ஆயுள் குறையும்.",
                "முடிந்தால் தென்கிழக்கில் மாற்றவும்."
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "வடகிழக்கு – மிக மோசமான இடம்",
            suggestions: [
                "சார்ஜிங் செய்யவே கூடாது.",
                "சாதனங்கள் நிரந்தரமாக சேதமடையலாம்.",
                "உடனே இடம் மாற்றுவது நல்லது."
            ]
        });
    }
    
    remedies.push({
        title: "சார்ஜிங் பகுதி – பொது வாஸ்து குறிப்புகள்",
        suggestions: [
            "தென்கிழக்கு திசை சிறந்தது.",
            "நல்ல தரமான சார்ஜர்கள் பயன்படுத்தவும்.",
            "கேபிள் குழப்பம் தவிர்க்கவும்.",
            "இரவெல்லாம் சார்ஜ் வைக்க வேண்டாம்.",
            "சர்ஜ் பாதுகாப்பு பயன்படுத்தவும்.",
            "காற்றோட்டம் உள்ள இடம் தேர்வு செய்யவும்."
        ]
    });
}

    
    
    
    

    
    
    
    
    
// பொது வாஸ்து விதிகள்

if (remedies.length === 0) {
    if (lowerName.includes('living') || lowerName.includes('hall')) {
        remedies.push({
            title: "பொது லிவிங் ஹால் வாஸ்து தீர்வுகள்",
            suggestions: [
                "வடகிழக்கு மூலையை சுத்தமாகவும் திறந்தபடியாகவும் வைத்திருக்கவும்",
                "கனமான பொருட்களை தெற்கு அல்லது மேற்கு பக்கம் வைக்கவும்",
                "ஒளிர்வான ஆனால் அமைதியான நிறங்களை பயன்படுத்தவும்",
                "நல்ல காற்றோட்டம் மற்றும் இயற்கை வெளிச்சம் இருக்க வேண்டும்",
                "முடிந்தால் வடகிழக்கில் தண்ணீர் அம்சம் வைக்கலாம்"
            ]
        });
    } else if (lowerName.includes('store') || lowerName.includes('storage')) {
        remedies.push({
            title: "பொது ஸ்டோர் ரூம் வாஸ்து தீர்வுகள்",
            suggestions: [
                "ஸ்டோர் ரூமை ஒழுங்காகவும் குழப்பமில்லாமல் வைத்திருக்கவும்",
                "கனமான பொருட்களை தென்மேற்கு பகுதியில் வைக்கவும்",
                "சுவர்களுக்கு லைட் நிறங்கள் பயன்படுத்தவும்",
                "நல்ல காற்றோட்டம் இருக்க வேண்டும்",
                "உடைந்த அல்லது பயன்பாடில்லாத பொருட்களை சேமிக்க வேண்டாம்"
            ]
        });
    }
}

return remedies;
}

