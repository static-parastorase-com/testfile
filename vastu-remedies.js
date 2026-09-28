// General Vastu remedies data used across the application
window.generalVastuRemedies = [
    "Keep Northeast clean and open for positive energy flow",
    "Place heavy furniture and storage in Southwest direction",
    "Water elements (wells, fountains) should be in Northeast",
    "Keep center of the house (Brahmasthan) empty and clean",
    "Avoid placing toilets in Northeast or center of the house",
    "Ensure proper ventilation and natural light in all rooms",
    "Use mirrors strategically to enhance positive energy",
    "Place pyramids in problematic areas to neutralize negative energy"
];

// Room-specific Vastu remedies data
window.getVastuRemedies = function(roomName, direction) {
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
            title: "Kitchen in South-East (Agneya) - Ideal Placement",
            suggestions: [
                "This is the best direction for kitchen (fire element)",
                "Place gas stove in South-East corner facing East",
                "Cook facing East for positive energy",
                "Use red, orange, yellow or green colors",
                "Keep windows in East for proper ventilation",
                "Store grains and food in North-West or South-West"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Kitchen in East Direction",
            suggestions: [
                "Good alternative to South-East direction",
                "Place stove in South-East corner of kitchen",
                "Cook facing East for prosperity",
                "Use light green, cream or rose colors",
                "Ensure proper sunlight in morning",
                "Keep drainage in North-East area"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Kitchen in North-West Direction",
            suggestions: [
                "Can cause financial instability and health issues",
                "Place a mirror behind the stove",
                "Use fire element colors (red, orange)",
                "Keep a brass tortoise in South-East corner",
                "Avoid black or blue colors in kitchen",
                "Install exhaust fan in East wall"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Kitchen in South Direction",
            suggestions: [
                "Can lead to financial losses and conflicts",
                "Place stove in South-East corner facing East",
                "Use bright lighting and fire colors",
                "Keep a pyramid in North-East corner",
                "Avoid water elements near fire zone",
                "Place refrigerator in North-West"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Kitchen in South-West Direction - Critical",
            suggestions: [
                "Highly inauspicious - can cause serious health issues",
                "Shift kitchen if possible to South-East",
                "Place fire element symbols in South-East",
                "Use bright red or orange colors as remedy",
                "Keep kitchen very clean and organized",
                "Place a Vastu pyramid in North-East"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Kitchen in West Direction",
            suggestions: [
                "Can cause unnecessary expenses",
                "Place stove in South-East corner facing East",
                "Use yellow or white colors to balance",
                "Keep windows in North or East for ventilation",
                "Avoid sleeping next to kitchen wall",
                "Place a crystal in South-East corner"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Kitchen in North Direction",
            suggestions: [
                "Not recommended - can affect wealth",
                "Place stove in South-East section",
                "Use green or brown colors as remedy",
                "Keep kitchen door always closed",
                "Avoid water leakage issues",
                "Place a money plant in North-East"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Kitchen in North-East - Most Critical",
            suggestions: [
                "Extremely inauspicious - affects health and prosperity",
                "Shift kitchen immediately if possible",
                "Place heavy stone in South-West corner",
                "Use fire element symbols as temporary remedy",
                "Keep kitchen extremely clean and minimal",
                "Consult Vastu expert for major corrections"
            ]
        });
    }
    
    // Additional general kitchen remedies
    remedies.push({
        title: "General Kitchen Vastu Tips",
        suggestions: [
            "Never place stove directly opposite to sink",
            "Keep toilet doors away from kitchen",
            "Store sharp objects in closed cabinets",
            "Avoid broken utensils - replace immediately",
            "Keep refrigerator in South-East, West or North",
            "Ensure proper ventilation and lighting"
        ]
    });
}
//Pooja
    else if (lowerName.includes('pooja') || lowerName.includes('puja') || 
         lowerName.includes('temple') || lowerName.includes('mandir') || 
         lowerName.includes('devagriha') || lowerName.includes('poojalaya') ||
         lowerName.includes('worship') || lowerName.includes('prayer')) {
    
    if (dirLower === 'northeast') {
        remedies.push({
            title: "Pooja Room in North-East (Ishanya) - Ideal Placement",
            suggestions: [
                "This is the most auspicious direction for prayer room",
                "Keep the room clean, well-lit and clutter-free",
                "Place idols at least 1-2 inches away from the wall",
                "Face East or North while praying",
                "Use white, light yellow or light blue colors",
                "Keep a water vessel in North-East corner"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Pooja Room in East Direction",
            suggestions: [
                "Good direction for morning prayers and meditation",
                "Ensure proper sunlight enters the room",
                "Place idols facing West",
                "Use light colors like white, cream or light yellow",
                "Keep the room well-ventilated",
                "Avoid storing unnecessary items"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Pooja Room in North Direction",
            suggestions: [
                "Acceptable direction for worship room",
                "Place idols facing South",
                "Use white, light blue or green colors",
                "Keep Kuber (wealth) idol in this room",
                "Maintain absolute cleanliness",
                "Avoid broken or cracked idols"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Pooja Room in West Direction",
            suggestions: [
                "Place a crystal pyramid in North-East corner",
                "Use bright lighting to enhance positive energy",
                "Place idols facing East",
                "Regularly light ghee lamps",
                "Keep the room elevated if possible",
                "Use white or light yellow colors"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Pooja Room in South-East (Agneya) Direction",
            suggestions: [
                "Not ideal due to fire element dominance",
                "Place a Swastik symbol on the door",
                "Use cooling colors like white or light blue",
                "Keep a small water fountain in North-East",
                "Avoid keeping red flowers or red items",
                "Light lamp only during prayers"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Pooja Room in South-West (Nairutya) Direction",
            suggestions: [
                "Least recommended direction for worship",
                "Place the pooja room on ground floor only",
                "Use white marble or tiles",
                "Keep a pyramid in North-East corner",
                "Avoid keeping pooja room in basement",
                "Place idols facing North or East"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Pooja Room in North-West (Vayavya) Direction",
            suggestions: [
                "Can cause instability in worship routine",
                "Place heavy deity idols in East side",
                "Use stabilizing colors like light yellow",
                "Keep the room well-organized",
                "Avoid airy or drafty conditions",
                "Place a crystal globe in center"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Pooja Room in South Direction",
            suggestions: [
                "Requires specific remedies for positive energy",
                "Place idols facing North",
                "Use bright white lighting",
                "Keep the room spotlessly clean",
                "Avoid keeping money or financial documents",
                "Place a Om symbol on the entrance"
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
            title: "Master Bedroom in South-West (Nairutya) - Ideal Placement",
            suggestions: [
                "This is the best direction for master bedroom",
                "Place bed in South-West corner with head towards South",
                "Sleep with head towards South or West for stability",
                "Use earthy colors like brown, beige, or dark blue",
                "Keep this room as the heaviest in the house",
                "Place wardrobe and heavy furniture in South/West walls"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Master Bedroom in South Direction",
            suggestions: [
                "Good direction for stability and health",
                "Place bed in South-West corner facing South",
                "Use warm colors like red, orange or pink",
                "Keep head towards South while sleeping",
                "Place heavy furniture against South wall",
                "Avoid too many windows in South wall"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Master Bedroom in West Direction",
            suggestions: [
                "Acceptable for master bedroom",
                "Promotes creativity and relaxation",
                "Use light colors like white, grey or light blue",
                "Sleep with head towards West or South",
                "Place bed in South-West part of room",
                "Avoid mirrors facing the bed"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Master Bedroom in North-West Direction",
            suggestions: [
                "Can cause instability and unnecessary travels",
                "Place a heavy stone or pyramid in South-West corner",
                "Use stabilizing colors like brown or green",
                "Sleep with head towards West, never North",
                "Keep room well-organized and clutter-free",
                "Place couple photo in South-West corner"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Master Bedroom in South-East Direction",
            suggestions: [
                "Can cause arguments and health issues",
                "Place a bowl of water in North-West corner",
                "Use cooling colors like light blue or white",
                "Avoid red or bright colors in bedroom",
                "Keep electronic devices to minimum",
                "Place bed in South-West corner of room"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Master Bedroom in East Direction",
            suggestions: [
                "Not ideal for master bedroom - better for children",
                "Can cause early waking and restlessness",
                "Use heavy curtains on East windows",
                "Place bed in South-West corner facing South",
                "Use calming colors like light green or blue",
                "Avoid placing bed under beam"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Master Bedroom in North Direction",
            suggestions: [
                "Not recommended for married couples",
                "Can affect relationship harmony",
                "Place heavy furniture in South-West corner",
                "Use warm, earthy colors as remedy",
                "Sleep with head towards South only",
                "Place a crystal in South-West corner"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Master Bedroom in North-East - Critical",
            suggestions: [
                "Highly inauspicious for master bedroom",
                "Can cause health issues and financial losses",
                "Shift bedroom if possible to South-West",
                "Place pyramid in North-East corner",
                "Use light blue or white colors",
                "Keep this room extremely clean and minimal"
            ]
        });
    }
    
    // Additional general master bedroom remedies
    remedies.push({
        title: "General Master Bedroom Vastu Tips",
        suggestions: [
            "Place bed so that you can see the door from bed",
            "Avoid sleeping under exposed beams",
            "Keep toilet door closed at all times",
            "No mirrors reflecting the bed",
            "Place bed against solid wall (not shared with toilet)",
            "Use pairs of items to strengthen relationship"
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
            title: "Living Room in North Direction - Ideal Placement",
            suggestions: [
                "Excellent direction for wealth and opportunities",
                "Place main seating in South-West or West side",
                "Face North or East while sitting for positive energy",
                "Use bright colors like white, yellow or blue",
                "Keep North-East corner open and clutter-free",
                "Place water feature or fountain in North-East"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Living Room in East Direction",
            suggestions: [
                "Good for health and family harmony",
                "Ideal for morning sunlight and positive energy",
                "Place seating facing North or East",
                "Use light colors like green, blue or white",
                "Keep East wall lighter than West wall",
                "Avoid heavy furniture in North-East corner"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Living Room in North-East (Ishanya) - Ideal",
            suggestions: [
                "Best direction for spiritual energy and positivity",
                "Keep this area open, light and airy",
                "Use light colors like white, light yellow or light blue",
                "Place seating facing North or East directions",
                "No toilets, kitchen or heavy furniture in this corner",
                "Ideal for prayer corner or meditation space"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Living Room in North-West Direction",
            suggestions: [
                "Good for guests and social connections",
                "Can cause frequent visitors and travels",
                "Place heavy furniture in South-West corner",
                "Use metallic colors like white, grey or silver",
                "Keep North-East corner light and open",
                "Place Vastu pyramid in center for stability"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Living Room in West Direction",
            suggestions: [
                "Promotes creativity and children's success",
                "Can lead to unnecessary expenses",
                "Use bright lighting to balance energy",
                "Place seating facing North or East",
                "Use light colors with metallic accents",
                "Keep windows clean for evening sunlight"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Living Room in South Direction",
            suggestions: [
                "Requires careful planning for positive energy",
                "Place heavy furniture against South wall",
                "Use warm colors like red, orange or pink",
                "Ensure proper lighting as South is fire element",
                "Keep North-East corner absolutely clean and open",
                "Place main entrance in North or East if possible"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Living Room in South-East Direction",
            suggestions: [
                "Can cause arguments and restlessness",
                "Place water feature in North-East to balance fire",
                "Use cooling colors like blue, green or white",
                "Avoid red and bright colors in decoration",
                "Keep electronic devices in South-East corner",
                "Place heavy furniture in South-West"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Living Room in South-West Direction - Critical",
            suggestions: [
                "Not ideal for living room - better for bedroom",
                "Can cause financial instability and health issues",
                "Place heavy furniture in South-West corner",
                "Use bright lighting and mirrors in North-East",
                "Keep center of room open and clutter-free",
                "Place a crystal pyramid in North-East corner"
            ]
        });
    }
    
    // Additional general living room remedies
    remedies.push({
        title: "General Living Room Vastu Tips",
        suggestions: [
            "Main door should open clockwise into living room",
            "No beams over seating area",
            "Place TV in South-East corner",
            "Keep center of room empty and clean",
            "Use odd number of chairs/seating (3, 5, 7)",
            "Avoid placing mirrors opposite entrance"
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
            title: "Bathroom in North-West Direction - Acceptable",
            suggestions: [
                "Less harmful compared to other directions",
                "Keep bathroom door closed at all times",
                "Use exhaust fan in North or East wall",
                "Place a small pyramid in North-East corner",
                "Use light colors like white, blue or grey",
                "Ensure proper ventilation and cleanliness"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Bathroom in West Direction",
            suggestions: [
                "Moderately acceptable placement",
                "Can affect children's health and success",
                "Keep toilet seat cover closed when not in use",
                "Place a salt bowl in bathroom to absorb negativity",
                "Use bright lighting to balance energy",
                "Ensure no leakage or clogging issues"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Bathroom in South Direction",
            suggestions: [
                "Can cause financial losses and reputation issues",
                "Place a mirror on outside of bathroom door",
                "Use red or brown colors on bathroom floor",
                "Keep bathroom well-lit and ventilated",
                "Place a copper coin in drainage area",
                "Avoid black or dark blue colors"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Bathroom in South-East Direction",
            suggestions: [
                "Can cause health issues and financial instability",
                "Fire and water element conflict - not ideal",
                "Place a green plant in South-East corner",
                "Use white or light green colors as remedy",
                "Keep bathroom door closed and windows open",
                "Place a Swastik symbol on bathroom door"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Bathroom in South-West Direction - Critical",
            suggestions: [
                "Highly inauspicious - affects health and relationships",
                "Can cause serious health issues to elders",
                "Shift bathroom if possible to North-West",
                "Place heavy stone or pyramid in South-West corner",
                "Keep bathroom extremely clean and dry",
                "Use bright lights and ventilation regularly"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Bathroom in East Direction - Critical",
            suggestions: [
                "Affects health, prosperity and family harmony",
                "Blocks morning sunlight and positive energy",
                "Place a mirror on outside of bathroom door",
                "Use yellow or white colors extensively",
                "Keep East window always clean and open",
                "Place a crystal in North-East corner of house"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Bathroom in North Direction - Critical",
            suggestions: [
                "Can block wealth and career opportunities",
                "Affects financial growth and stability",
                "Place a money plant outside bathroom",
                "Use metal elements like brass fixtures",
                "Keep bathroom door closed at all times",
                "Place a Vastu yantra on bathroom door"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Bathroom in North-East - Most Critical",
            suggestions: [
                "Extremely inauspicious - affects all aspects of life",
                "Can cause major health and financial problems",
                "Shift bathroom immediately if possible",
                "Place heavy pyramid in North-East corner",
                "Keep bathroom dry, clean and well-maintained",
                "Consult Vastu expert for major corrections"
            ]
        });
    }
    
    // Additional general bathroom remedies
    remedies.push({
        title: "General Bathroom Vastu Tips",
        suggestions: [
            "Always keep bathroom door closed",
            "Fix any leakage issues immediately",
            "Keep toilet seat cover down when not in use",
            "Ensure proper ventilation and sunlight",
            "Place mirrors on North or East walls only",
            "Avoid placing bathroom under staircase or next to kitchen"
        ]
    });
}
    
    // Dining Hall
else if (lowerName.includes('dining') || lowerName.includes('bhajan kaksh') || 
         lowerName.includes('eating area') || lowerName.includes('food area') || 
         lowerName.includes('dining hall')) {
    
    if (dirLower === 'west') {
        remedies.push({
            title: "Dining Room in West Direction - Ideal Placement",
            suggestions: [
                "Excellent for family harmony and digestion",
                "Place dining table in North-West or center",
                "Face East while eating for optimal health",
                "Use warm colors like orange, pink or chocolate",
                "Keep dining area well-lit during meals",
                "Avoid placing dining under beams"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Dining Room in East Direction",
            suggestions: [
                "Good for health and prosperity",
                "Ideal for morning breakfast with sunlight",
                "Face East or West while eating",
                "Use light colors like white, yellow or green",
                "Keep windows clean for natural light",
                "Place water dispenser in North-East"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Dining Room in North Direction",
            suggestions: [
                "Promotes wealth and abundance",
                "Place dining table in North-West section",
                "Face East or North while eating",
                "Use blue, green or silver colors",
                "Keep dining area clutter-free",
                "Avoid placing in North-East corner"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Dining Room in North-West Direction",
            suggestions: [
                "Good for social dining and guests",
                "Can cause irregular eating habits",
                "Place heavy furniture in South-West",
                "Use white or light yellow colors",
                "Keep dining table square or rectangular",
                "Avoid circular tables in this direction"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Dining Room in South Direction",
            suggestions: [
                "Can cause digestive issues",
                "Place dining table in South-West corner",
                "Face North while eating as remedy",
                "Use light colors like white or cream",
                "Keep South wall heavier than North",
                "Avoid red colors in dining area"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Dining Room in South-East Direction",
            suggestions: [
                "Fire element conflict with food",
                "Can cause arguments during meals",
                "Place water feature in North-East",
                "Use cooling colors like blue or white",
                "Keep dining area well-ventilated",
                "Avoid placing near kitchen fire"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Dining Room in South-West Direction",
            suggestions: [
                "Not ideal - can cause weight issues",
                "Better suited for master bedroom",
                "Place dining table in North-West part",
                "Use light colors with heavy furniture",
                "Keep area bright and cheerful",
                "Avoid dark colors in decoration"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Dining Room in North-East - Critical",
            suggestions: [
                "Highly inauspicious for dining",
                "Can affect health and prosperity",
                "Shift dining area if possible",
                "Place pyramid in North-East corner",
                "Use white marble or tiles",
                "Keep extremely clean and minimal"
            ]
        });
    }
    
    remedies.push({
        title: "General Dining Room Vastu Tips",
        suggestions: [
            "Face East or North while eating",
            "Keep dining table away from toilet",
            "No mirrors reflecting dining table",
            "Place food from East direction",
            "Keep dining area well-ventilated",
            "Avoid placing under staircase"
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
            title: "Study Room in North-East - Ideal Placement",
            suggestions: [
                "Best direction for concentration and knowledge",
                "Place study table in North-East corner facing East",
                "Face East or North while studying for better focus",
                "Use light colors like white, light yellow or light blue",
                "Keep this room well-lit and clutter-free",
                "Place bookshelves on South or West walls"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Study Room in East Direction",
            suggestions: [
                "Excellent for students and competitive exams",
                "Ideal for morning study sessions with sunlight",
                "Face East while studying for mental clarity",
                "Use green, light blue or white colors",
                "Keep windows clean for natural light",
                "Place study table in North-East corner of room"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Study Room in North Direction",
            suggestions: [
                "Good for career growth and opportunities",
                "Promotes intellectual growth and wisdom",
                "Face East or North while working/studying",
                "Use blue, green or white colors",
                "Keep North-East corner open and clean",
                "Place Kuber idol for wealth aspect"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Study Room in West Direction",
            suggestions: [
                "Suitable for creative work and research",
                "Can cause delays in completing tasks",
                "Place study table facing East or North",
                "Use yellow or white colors for balance",
                "Ensure proper lighting for evening study",
                "Keep bookshelves on South or West walls"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Study Room in North-West Direction",
            suggestions: [
                "Good for networking and communication work",
                "Can cause distractions and interruptions",
                "Place a crystal pyramid in North-East corner",
                "Use light colors with metallic elements",
                "Keep door closed during focused work",
                "Place study table facing East"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Study Room in South Direction",
            suggestions: [
                "Not ideal - can cause lack of concentration",
                "Place study table in North-East corner facing North",
                "Use light colors like white or light green",
                "Ensure bright lighting to counter heaviness",
                "Keep South wall heavier than North wall",
                "Avoid red or dark colors"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Study Room in South-East Direction",
            suggestions: [
                "Can cause restlessness and impatience",
                "Fire element not conducive for peaceful study",
                "Place water feature or blue elements in North-East",
                "Use cooling colors like blue or white",
                "Keep electronic devices organized",
                "Place study table facing East or North"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Study Room in South-West - Critical",
            suggestions: [
                "Least recommended direction for study",
                "Can cause mental stress and obstacles",
                "Shift study room if possible to North-East",
                "Place pyramid in North-East corner",
                "Use very light colors and bright lighting",
                "Keep room extremely organized and minimal"
            ]
        });
    }
    
    remedies.push({
        title: "General Study Room Vastu Tips",
        suggestions: [
            "Face East or North while studying/working",
            "Place study table against solid wall",
            "Keep bookshelves on South or West walls",
            "Ensure proper lighting without shadows",
            "No mirrors reflecting study table",
            "Keep room well-ventilated and quiet"
        ]
    });
}

//Children Room
else if (lowerName.includes('children') || lowerName.includes('kids room') || 
         lowerName.includes('bal kaksh') || lowerName.includes('boys room') || 
         lowerName.includes('girls room') || lowerName.includes('child bedroom')) {
    
    if (dirLower === 'west') {
        remedies.push({
            title: "Children Bedroom in West Direction - Ideal",
            suggestions: [
                "Excellent for creativity and academic success",
                "Promotes good sleep and healthy growth",
                "Place bed in South-West corner with head towards West",
                "Use creative colors like blue, green or yellow",
                "Keep study area in North-East corner of room",
                "Ideal for artistic and creative children"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Children Bedroom in North-West Direction",
            suggestions: [
                "Good for active and social children",
                "Can cause restlessness and too many friends",
                "Place bed in South-West corner facing West",
                "Use calming colors like light blue or green",
                "Keep study table in North-East corner",
                "Ensure proper discipline and routine"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Children Bedroom in East Direction",
            suggestions: [
                "Excellent for early risers and academic focus",
                "Promotes discipline and concentration",
                "Place bed in South-East corner with head towards East",
                "Use bright colors like yellow, orange or white",
                "Ideal for study area with morning sunlight",
                "Keep room well-ventilated for fresh energy"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Children Bedroom in North Direction",
            suggestions: [
                "Good for overall growth and development",
                "Enhances intelligence and learning abilities",
                "Place bed in North-West corner facing East",
                "Use light colors like blue, green or white",
                "Keep study area in North-East corner",
                "Avoid heavy furniture in North-East"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Children Bedroom in South Direction",
            suggestions: [
                "Can make children stubborn or aggressive",
                "Place bed in South-West corner with head towards South",
                "Use calming colors like light blue or green",
                "Keep study table in North-East corner facing East",
                "Ensure room has good lighting and ventilation",
                "Avoid dark colors in decoration"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Children Bedroom in South-East Direction",
            suggestions: [
                "Can cause hyperactivity and restlessness",
                "Place bed in South-West corner of room",
                "Use cooling colors like white or light blue",
                "Keep electronic devices to minimum",
                "Place study area in North-East corner",
                "Avoid red or bright colors in room"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Children Bedroom in South-West - Not Ideal",
            suggestions: [
                "Can make children lazy or disobedient",
                "Better suited for master bedroom",
                "Place bed in South-West corner facing South",
                "Use light colors and bright lighting",
                "Keep study area in North-East corner",
                "Ensure room is well-organized"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Children Bedroom in North-East - Critical",
            suggestions: [
                "Highly inauspicious for children's room",
                "Can cause health and concentration issues",
                "Shift room if possible to West or North-West",
                "Place pyramid in North-East corner",
                "Use very light colors and maximum lighting",
                "Keep room extremely clean and minimal"
            ]
        });
    }
    
    remedies.push({
        title: "General Children Bedroom Vastu Tips",
        suggestions: [
            "Place study table in East or North direction",
            "Sleep with head towards East or South",
            "Keep room colorful but not overwhelming",
            "No mirrors reflecting the bed",
            "Keep toys organized in closed storage",
            "Ensure proper lighting for study area"
        ]
    });
}
    
// Geust Room
    else if (lowerName.includes('guest bedroom') || lowerName.includes('atithi kaksh') || 
         lowerName.includes('visitor room') || lowerName.includes('guest room') ||
			lowerName.includes('paying guest room')) {
    
    if (dirLower === 'northwest') {
        remedies.push({
            title: "Guest Bedroom in North-West - Ideal Placement",
            suggestions: [
                "Perfect direction for guest bedroom",
                "Promotes short and pleasant stays for visitors",
                "Place bed in South-West corner with head towards West",
                "Use light colors like white, grey or light blue",
                "Keeps guests comfortable but encourages timely departure",
                "Ideal for maintaining family privacy"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Guest Bedroom in West Direction",
            suggestions: [
                "Good for guest accommodation",
                "Provides comfortable stay for visitors",
                "Place bed in South-West corner facing West",
                "Use calming colors like light green or blue",
                "Ensure proper ventilation and lighting",
                "Keep room clean and welcoming"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Guest Bedroom in North Direction",
            suggestions: [
                "Acceptable for guest room",
                "Can make guests stay longer than intended",
                "Place bed in North-West corner facing East",
                "Use light colors like white or light blue",
                "Keep room well-organized and clutter-free",
                "Avoid too many personal family items"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Guest Bedroom in South-East Direction",
            suggestions: [
                "Can cause restlessness among guests",
                "Visitors may feel uncomfortable or hurried",
                "Place bed in South-West corner of room",
                "Use cooling colors like white or light blue",
                "Keep electronic devices to minimum",
                "Ensure room is well-ventilated"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Guest Bedroom in South Direction",
            suggestions: [
                "Not ideal - guests may overstay",
                "Can create dependency issues",
                "Place bed in South-West corner facing South",
                "Use light colors to balance energy",
                "Keep room simple and functional",
                "Avoid making too comfortable for long stays"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Guest Bedroom in East Direction",
            suggestions: [
                "Better suited for family bedrooms",
                "Guests may become too comfortable",
                "Place bed in South-East corner facing East",
                "Use light colors like white or cream",
                "Keep decorations minimal and neutral",
                "Avoid family photos or personal items"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Guest Bedroom in South-West - Critical",
            suggestions: [
                "Highly inauspicious for guest room",
                "Can cause health issues for guests",
                "Better used for master bedroom",
                "Place bed in South-West corner facing South",
                "Use light colors with bright lighting",
                "Keep visits short and infrequent"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Guest Bedroom in North-East - Most Critical",
            suggestions: [
                "Extremely inauspicious for guest room",
                "Can affect family's health and prosperity",
                "Shift guest room immediately if possible",
                "Place pyramid in North-East corner",
                "Use white colors and maximum cleanliness",
                "Avoid letting guests stay for long periods"
            ]
        });
    }
    
    remedies.push({
        title: "General Guest Bedroom Vastu Tips",
        suggestions: [
            "Keep room clean and clutter-free",
            "Use neutral colors and decorations",
            "Avoid placing family photos or valuables",
            "Ensure proper ventilation and lighting",
            "Keep bathroom attached if possible",
            "Maintain privacy from main family areas"
        ]
    });
}
    //Yoga
else if (lowerName.includes('meditation') || lowerName.includes('dhyan kaksh') || 
         lowerName.includes('yoga room') || lowerName.includes('meditation hall') || 
         lowerName.includes('yogashala') || lowerName.includes('Meditation Room')) {
    
    if (dirLower === 'northeast') {
        remedies.push({
            title: "Meditation Room in North-East - Ideal Placement",
            suggestions: [
                "Perfect direction for spiritual practices",
                "Enhances concentration and inner peace",
                "Face East or North while meditating",
                "Use pure white, light yellow or light blue colors",
                "Keep room absolutely clean and clutter-free",
                "Place meditation seat in North-East corner"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Meditation Room in East Direction",
            suggestions: [
                "Excellent for morning meditation and sunrise energy",
                "Promotes new beginnings and mental clarity",
                "Face East while meditating for optimal benefits",
                "Use light colors like white, light green or pale yellow",
                "Keep windows clean for morning sunlight",
                "Ideal for yoga and pranayama practices"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Meditation Room in North Direction",
            suggestions: [
                "Good for spiritual growth and wisdom",
                "Enhances knowledge and learning capabilities",
                "Face North or East while practicing",
                "Use light blue, white or silver colors",
                "Keep North-East corner open and sacred",
                "Place spiritual books in North direction"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Meditation Room in West Direction",
            suggestions: [
                "Suitable for evening meditation practices",
                "Promotes relaxation and stress relief",
                "Face East or North while meditating",
                "Use calming colors like light blue or white",
                "Ensure proper ventilation and quiet atmosphere",
                "Good for sunset meditation sessions"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Meditation Room in North-West Direction",
            suggestions: [
                "Can cause distractions and mental chatter",
                "Place meditation seat in North-East corner",
                "Use white colors and minimal decorations",
                "Keep door closed during practice",
                "Place a crystal pyramid in North-East",
                "Avoid too many windows or openings"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Meditation Room in South Direction",
            suggestions: [
                "Not ideal for spiritual practices",
                "Can cause heaviness and lack of focus",
                "Place meditation seat facing North or East",
                "Use very light colors and bright lighting",
                "Keep South wall plain and simple",
                "Place spiritual symbols in North-East"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Meditation Room in South-East Direction",
            suggestions: [
                "Fire element disturbs meditation peace",
                "Can cause restlessness and agitation",
                "Place water feature in North-East corner",
                "Use cooling colors like white or light blue",
                "Keep room well-ventilated and cool",
                "Avoid red or bright colors"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Meditation Room in South-West - Critical",
            suggestions: [
                "Least suitable direction for meditation",
                "Can cause negative thoughts and obstacles",
                "Shift room if possible to North-East",
                "Place pyramid in North-East corner",
                "Use pure white colors throughout",
                "Keep room extremely minimal and clean"
            ]
        });
    }
    
    remedies.push({
        title: "General Meditation Room Vastu Tips",
        suggestions: [
            "Face East or North while meditating",
            "Keep room absolutely silent and clean",
            "Use natural materials and minimal decor",
            "Place meditation seat on rug or mat",
            "Ensure proper air circulation",
            "No electronic devices in meditation space"
        ]
    });
}
    //store
    
    else if (lowerName.includes('store room') || lowerName.includes('storage') || 
         lowerName.includes('godown') || lowerName.includes('bhandara griha') || 
         lowerName.includes('storage area')) {
    
    if (dirLower === 'southwest') {
        remedies.push({
            title: "Store Room in South-West - Ideal Placement",
            suggestions: [
                "Perfect direction for storage area",
                "Place heavy items in South-West corner",
                "Use dark colors like brown, grey or dark blue",
                "Keep valuable items in South or West sections",
                "Ideal for storing grains, documents and valuables",
                "Maintain cleanliness and organization"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Store Room in South Direction",
            suggestions: [
                "Good for storage purposes",
                "Place heavy items against South wall",
                "Use warm colors like red, brown or orange",
                "Keep flammable items in South-East corner",
                "Ensure proper ventilation to avoid dampness",
                "Organize items systematically"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Store Room in West Direction",
            suggestions: [
                "Acceptable for storage area",
                "Place metal items and tools in West section",
                "Use grey, white or metallic colors",
                "Keep frequently used items accessible",
                "Ensure proper lighting for safety",
                "Avoid clutter near entrance"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Store Room in North-West Direction",
            suggestions: [
                "Suitable for light storage",
                "Ideal for seasonal items and tools",
                "Use light colors with organized shelving",
                "Keep metal items in North-West corner",
                "Ensure good air circulation",
                "Avoid storing heavy items"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Store Room in South-East Direction",
            suggestions: [
                "Can cause fire hazards if not managed",
                "Store only non-flammable items here",
                "Use cooling colors like white or blue",
                "Keep electrical items in South-East corner",
                "Install fire safety equipment",
                "Avoid storing chemicals or fuels"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Store Room in North Direction",
            suggestions: [
                "Not ideal - can block wealth energy",
                "Keep storage minimal and organized",
                "Use light colors like white or blue",
                "Store light items only in North section",
                "Keep North-East corner absolutely empty",
                "Avoid storing heavy or junk items"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Store Room in East Direction",
            suggestions: [
                "Blocks morning positive energy",
                "Keep storage very minimal and clean",
                "Use light colors and bright lighting",
                "Store only essential items",
                "Keep East windows clean and accessible",
                "Avoid storing broken or unused items"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Store Room in North-East - Critical",
            suggestions: [
                "Extremely inauspicious for storage",
                "Can cause financial and health issues",
                "Shift storage if possible to South-West",
                "Keep North-East corner completely empty",
                "Use white colors and maximum cleanliness",
                "Store only sacred or spiritual items if necessary"
            ]
        });
    }
    
    remedies.push({
        title: "General Store Room Vastu Tips",
        suggestions: [
            "Keep heavy items in South/West directions",
            "Maintain cleanliness and organization",
            "Discard broken or unused items regularly",
            "Ensure proper ventilation and lighting",
            "Keep flammable items separate",
            "Store valuables in South-West corner"
        ]
    });
}
    
    //stair Case
else if (lowerName.includes('staircase') || lowerName.includes('seedhiyan') ||
         lowerName.includes('stairs') || lowerName.includes('stairway') ||
         lowerName.includes('steps') || lowerName.includes('elevator') ||
         lowerName.includes('lift')) {
    
    if (dirLower === 'southwest') {
        remedies.push({
            title: "Staircase in South-West - Critical",
            suggestions: [
                "Highly inauspicious - affects stability",
                "Can cause financial losses and health issues",
                "Shift staircase if possible to South or West",
                "Place heavy plant or pyramid at base",
                "Use dark colors like brown or black",
                "Keep staircase well-lit and secure"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Staircase in North-East - Most Critical",
            suggestions: [
                "Extremely harmful - affects all aspects of life",
                "Can cause major financial and health problems",
                "Shift staircase immediately if possible",
                "Place pyramid in North-East corner",
                "Use white marble or light colors",
                "Keep area extremely clean and minimal"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Staircase in North-West Direction",
            suggestions: [
                "Can cause unnecessary travels and instability",
                "Affects relationships and mental peace",
                "Place heavy metal object at base",
                "Use white or light grey colors",
                "Keep staircase well-maintained",
                "Ensure proper handrail support"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Staircase in South-East Direction",
            suggestions: [
                "Fire element conflict - can cause accidents",
                "May lead to arguments and restlessness",
                "Place fire extinguisher nearby",
                "Use cooling colors like blue or white",
                "Avoid wooden staircase in this direction",
                "Keep area well-ventilated"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Staircase in South Direction",
            suggestions: [
                "Moderately acceptable",
                "Should be clockwise from East to South",
                "Use strong materials and dark colors",
                "Place heavy statue at base for stability",
                "Ensure proper lighting on steps",
                "Keep South wall solid and strong"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Staircase in West Direction",
            suggestions: [
                "Acceptable placement",
                "Should ascend from North to West",
                "Use metallic elements in construction",
                "Keep staircase well-lit and secure",
                "Avoid spiral staircase in this direction",
                "Place metal handrail for safety"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Staircase in North Direction",
            suggestions: [
                "Not ideal - can block wealth energy",
                "Should be light and minimal construction",
                "Use light colors like white or grey",
                "Keep North-East corner unaffected",
                "Ensure staircase doesn't block North entrance",
                "Place water feature nearby to balance"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Staircase in East Direction",
            suggestions: [
                "Blocks morning positive energy",
                "Should be very light and open design",
                "Use transparent materials if possible",
                "Keep East windows unobstructed",
                "Avoid heavy construction materials",
                "Place plants near staircase for balance"
            ]
        });
    }
    
    remedies.push({
        title: "General Staircase Vastu Tips",
        suggestions: [
            "Staircase should ascend clockwise (East to South to West)",
            "Avoid spiral staircase in center of house",
            "Keep odd number of steps (3, 5, 7, etc.)",
            "Ensure proper lighting on all steps",
            "No toilet under staircase",
            "Keep staircase clean and well-maintained"
        ]
    });
}
    
    //main Door
    else if (lowerName.includes('main door') || lowerName.includes('entrance') || 
         lowerName.includes('main entrance') || lowerName.includes('pradhan dwar') || 
         lowerName.includes('entry door') || lowerName.includes('mukhya dwar')) {
    
    if (dirLower === 'east') {
        remedies.push({
            title: "Main Door in East Direction - Ideal Placement",
            suggestions: [
                "Best direction for main entrance",
                "Brings health, prosperity and success",
                "Door should open clockwise inside the house",
                "Use wooden door with square or rectangular design",
                "Keep entrance well-lit and clutter-free",
                "Place nameplate on right side of door"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Main Door in North Direction",
            suggestions: [
                "Excellent for wealth and opportunities",
                "Promotes career growth and financial stability",
                "Door should open inside in clockwise direction",
                "Use strong wooden door with metal fittings",
                "Keep entrance clean and welcoming",
                "Avoid obstructions outside North entrance"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Main Door in North-East - Ideal",
            suggestions: [
                "Highly auspicious for spiritual growth",
                "Brings divine blessings and positive energy",
                "Door should be smaller than other doors",
                "Use light colors like white or yellow",
                "Keep area absolutely clean and sacred",
                "Place religious symbols near entrance"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Main Door in West Direction",
            suggestions: [
                "Acceptable for main entrance",
                "Promotes creativity and children's success",
                "Door should open inside with clockwise motion",
                "Use strong door with proper threshold",
                "Ensure good lighting for evening hours",
                "Place welcome mat outside entrance"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Main Door in North-West Direction",
            suggestions: [
                "Good for social connections and travels",
                "Can cause frequent visitors and expenses",
                "Use strong metal or wooden door",
                "Place security measures for protection",
                "Keep entrance well-maintained",
                "Avoid broken or damaged door"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Main Door in South Direction",
            suggestions: [
                "Requires careful Vastu corrections",
                "Can cause delays and obstacles",
                "Use dark colored strong wooden door",
                "Place pyramid or crystal above doorframe",
                "Ensure door opens properly without creaking",
                "Keep entrance brightly lit"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Main Door in South-East Direction",
            suggestions: [
                "Can cause arguments and health issues",
                "Fire element not ideal for entrance",
                "Use water element symbols near door",
                "Place blue welcome mat or tiles",
                "Keep entrance cool and well-ventilated",
                "Avoid red colors near entrance"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Main Door in South-West - Critical",
            suggestions: [
                "Highly inauspicious for main entrance",
                "Can cause major health and financial problems",
                "Shift entrance if possible to North or East",
                "Place heavy plant or pyramid outside",
                "Use very strong security door",
                "Consult Vastu expert for major corrections"
            ]
        });
    }
    
    remedies.push({
        title: "General Main Door Vastu Tips",
        suggestions: [
            "Door should open inside in clockwise direction",
            "Keep entrance clean, well-lit and clutter-free",
            "No obstructions or pillars in front of door",
            "Door should not creak or have broken parts",
            "Place auspicious symbols like Swastik or Om",
            "Ensure door opens fully without hitting walls"
        ]
    });
}
    
    //balcony
    else if (lowerName.includes('balcony') || lowerName.includes('veranda') || 
         lowerName.includes('porch') || lowerName.includes('baramda') || 
         lowerName.includes('sitout') || lowerName.includes('open area')) {
    
    if (dirLower === 'east') {
        remedies.push({
            title: "Balcony in East Direction - Ideal Placement",
            suggestions: [
                "Perfect for morning sunlight and positive energy",
                "Ideal for morning meditation and exercise",
                "Keep balcony open and clutter-free",
                "Use light colors like white, yellow or green",
                "Place plants that require morning sunlight",
                "Excellent for reading newspaper or morning tea"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Balcony in North Direction",
            suggestions: [
                "Good for wealth and opportunities",
                "Promotes financial growth and career opportunities",
                "Keep balcony clean and well-maintained",
                "Use blue, white or green colors",
                "Place water feature or fountain if possible",
                "Ideal for evening relaxation"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Balcony in North-East - Ideal",
            suggestions: [
                "Best direction for spiritual energy",
                "Perfect for meditation and prayer",
                "Keep absolutely clean and minimal",
                "Use pure white or light yellow colors",
                "No storage or heavy items allowed",
                "Ideal for sacred plants like Tulsi"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Balcony in West Direction",
            suggestions: [
                "Good for evening relaxation and sunset view",
                "Promotes creativity and social interactions",
                "Use light colors with good lighting",
                "Place comfortable seating for evening use",
                "Keep plants that tolerate afternoon sun",
                "Ideal for family gatherings in evening"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Balcony in North-West Direction",
            suggestions: [
                "Good for social connections and networking",
                "Can cause frequent visitors and interactions",
                "Use white or light grey colors",
                "Keep balcony well-organized",
                "Place wind chimes for positive energy",
                "Ideal for morning coffee or tea"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Balcony in South-East Direction",
            suggestions: [
                "Fire element - use with caution",
                "Can cause overheating in summer",
                "Use cooling colors like blue or white",
                "Place water elements to balance fire",
                "Avoid storing flammable materials",
                "Good for drying clothes quickly"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Balcony in South Direction",
            suggestions: [
                "Can cause excessive heat and energy",
                "Use heat-resistant plants and materials",
                "Install shades or awnings for protection",
                "Use light colors to reflect heat",
                "Avoid heavy furniture in balcony",
                "Good for winter sunbathing"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Balcony in South-West - Not Ideal",
            suggestions: [
                "Can affect stability and relationships",
                "Better suited for solid walls",
                "Use heavy pots and stable furniture",
                "Avoid making it too spacious or open",
                "Place protective railing or grills",
                "Keep minimal and functional"
            ]
        });
    }
    
    remedies.push({
        title: "General Balcony Vastu Tips",
        suggestions: [
            "Keep balcony clean and clutter-free",
            "Use plants to enhance positive energy",
            "Ensure proper safety railings",
            "Avoid storing junk or broken items",
            "Maintain good lighting for evening use",
            "Regular cleaning and maintenance"
        ]
    });
}
    
    //garage
    else if (lowerName.includes('garage') || lowerName.includes('car parking') || 
         lowerName.includes('vehicle shed') || lowerName.includes('gaadi ghar')) {
    
    if (dirLower === 'northwest') {
        remedies.push({
            title: "Garage in North-West - Ideal Placement",
            suggestions: [
                "Perfect direction for garage and vehicles",
                "Promotes safe travels and vehicle maintenance",
                "Place vehicles facing North or East direction",
                "Use white, grey or light blue colors",
                "Keep garage clean and well-organized",
                "Ideal for vehicle storage and maintenance"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Garage in West Direction",
            suggestions: [
                "Good for garage placement",
                "Provides protection for vehicles",
                "Park vehicles facing East or North",
                "Use light colors with good lighting",
                "Ensure proper ventilation system",
                "Keep tools organized in South or West walls"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Garage in South Direction",
            suggestions: [
                "Acceptable for garage with precautions",
                "Can provide good protection",
                "Park vehicles facing North or East",
                "Use dark colors for flooring",
                "Install strong security measures",
                "Keep garage well-lit and secure"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Garage in South-East Direction",
            suggestions: [
                "Fire element risk with vehicles",
                "Can cause mechanical issues",
                "Install fire safety equipment",
                "Use cooling colors like white or blue",
                "Avoid storing flammable materials",
                "Keep ventilation system efficient"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Garage in North Direction",
            suggestions: [
                "Not ideal - can block wealth energy",
                "Can affect vehicle performance",
                "Park vehicles facing East or North",
                "Use light colors and bright lighting",
                "Keep North-East corner clean and open",
                "Avoid junk storage in garage"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Garage in East Direction",
            suggestions: [
                "Blocks morning positive energy",
                "Can affect family health and prosperity",
                "Use very light colors and materials",
                "Keep garage door clean and functional",
                "Avoid heavy vehicle repairs inside",
                "Place pyramid in North-East corner"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Garage in South-West - Critical",
            suggestions: [
                "Highly inauspicious for garage",
                "Can affect family stability and health",
                "Shift garage if possible to North-West",
                "Use heavy and strong construction",
                "Place heavy stone in South-West corner",
                "Keep garage minimal and clean"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Garage in North-East - Most Critical",
            suggestions: [
                "Extremely harmful for all aspects",
                "Can cause major accidents and losses",
                "Shift garage immediately if possible",
                "Use white colors and maximum cleanliness",
                "Avoid vehicle repairs in this area",
                "Consult Vastu expert for correctionsಕನ್ನಡ "
            ]
        });
    }
    
    remedies.push({
        title: "General Garage Vastu Tips",
        suggestions: [
            "Park vehicles facing North or East direction",
            "Keep garage clean and well-organized",
            "Ensure proper ventilation and lighting",
            "Avoid storing junk or broken items",
            "Install security measures for protection",
            "Regular maintenance of vehicles and space"
        ]
    });
}
    
    //servent Room
else if (lowerName.includes('servant room') || lowerName.includes('domestic help room') || 
         lowerName.includes('naukar room') || lowerName.includes('sevak kaksh')) {
    
    if (dirLower === 'southeast') {
        remedies.push({
            title: "Servant Room in South-East - Ideal Placement",
            suggestions: [
                "Best direction for servant quarters",
                "Promotes hard work and dedication",
                "Place bed in South-West corner of room",
                "Use simple and functional furniture",
                "Keep room clean and well-ventilated",
                "Ideal for maintaining proper boundaries"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Servant Room in North-West Direction",
            suggestions: [
                "Good for servant accommodation",
                "Promotes loyalty and long-term service",
                "Place bed in South-West corner",
                "Use light colors with basic amenities",
                "Ensure proper lighting and ventilation",
                "Keep room organized and clutter-free"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Servant Room in South Direction",
            suggestions: [
                "Acceptable for servant quarters",
                "Provides stability in service",
                "Place bed against South wall",
                "Use warm colors with simple decor",
                "Keep room functional and practical",
                "Ensure proper security measures"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Servant Room in West Direction",
            suggestions: [
                "Moderately suitable for help room",
                "Can promote creativity in work",
                "Place bed in South-West corner",
                "Use light colors with good lighting",
                "Keep room well-maintained",
                "Avoid too many windows"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Servant Room in North Direction",
            suggestions: [
                "Not ideal - can cause authority issues",
                "May lead to frequent staff changes",
                "Place bed in North-West corner",
                "Use light colors with minimal decor",
                "Keep room simple and functional",
                "Maintain clear boundaries"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Servant Room in East Direction",
            suggestions: [
                "Not recommended for servant quarters",
                "Can cause disrespect or authority problems",
                "Place bed in South-East corner",
                "Use very simple and basic furnishings",
                "Keep room minimal and clean",
                "Avoid luxurious amenities"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Servant Room in South-West - Critical",
            suggestions: [
                "Highly inauspicious for servant room",
                "Can cause power struggles and conflicts",
                "Shift room if possible to South-East",
                "Use simple and functional design",
                "Keep room extremely clean",
                "Avoid giving too much space"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Servant Room in North-East - Most Critical",
            suggestions: [
                "Extremely harmful placement",
                "Can cause major household problems",
                "Shift room immediately if possible",
                "Use white colors and basic amenities",
                "Keep room absolutely minimal",
                "Consult Vastu expert for corrections"
            ]
        });
    }
    
    remedies.push({
        title: "General Servant Room Vastu Tips",
        suggestions: [
            "Keep room simple and functional",
            "Maintain clear boundaries from main house",
            "Ensure proper ventilation and lighting",
            "Keep room clean and well-organized",
            "Avoid luxurious furnishings",
            "Maintain respectful employer-employee relationship"
        ]
    });
}
    
    //Laundry
    else if (lowerName.includes('laundry') || lowerName.includes('washing area') || 
         lowerName.includes('dhobi ghat') || lowerName.includes('clothes washing') ||
		 lowerName.includes('laundry room')) {
    
    if (dirLower === 'northwest') {
        remedies.push({
            title: "Laundry Room in North-West - Ideal Placement",
            suggestions: [
                "Best direction for laundry activities",
                "Promotes efficiency in cleaning work",
                "Place washing machine in East or North side",
                "Use white, blue or grey colors",
                "Keep area well-ventilated and dry",
                "Ideal for drying clothes naturally"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Laundry Room in West Direction",
            suggestions: [
                "Good for laundry area",
                "Provides good ventilation for drying",
                "Place washing machine facing East",
                "Use light colors with good lighting",
                "Keep drainage in North-East direction",
                "Ideal for evening laundry work"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Laundry Room in South Direction",
            suggestions: [
                "Acceptable with proper precautions",
                "Can provide good drying conditions",
                "Place washing machine in East or North",
                "Use light colors to balance heat",
                "Ensure proper ventilation system",
                "Keep area clean and organized"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Laundry Room in South-East Direction",
            suggestions: [
                "Fire and water element combination",
                "Can cause electrical issues with machines",
                "Install proper electrical safety measures",
                "Use cooling colors like white or blue",
                "Keep area well-ventilated and dry",
                "Avoid clutter near electrical points"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Laundry Room in North Direction",
            suggestions: [
                "Not ideal - water element can affect wealth",
                "Can cause financial drainage issues",
                "Place washing machine in East corner",
                "Use light colors and bright lighting",
                "Keep North-East corner dry and clean",
                "Fix any water leakage immediately"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Laundry Room in East Direction",
            suggestions: [
                "Blocks morning positive energy",
                "Can affect health and prosperity",
                "Use very light colors and materials",
                "Keep area extremely clean and dry",
                "Place washing machine in South-East corner",
                "Avoid cluttering the space"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Laundry Room in South-West - Critical",
            suggestions: [
                "Highly inauspicious for laundry",
                "Can affect family stability and health",
                "Shift laundry area if possible to North-West",
                "Use light colors and maximum cleanliness",
                "Keep area dry and well-organized",
                "Avoid storing dirty clothes for long"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Laundry Room in North-East - Most Critical",
            suggestions: [
                "Extremely harmful for all aspects",
                "Can cause major health and financial problems",
                "Shift laundry area immediately if possible",
                "Use white colors and absolute cleanliness",
                "Keep area dry and minimal",
                "Consult Vastu expert for major corrections"
            ]
        });
    }
    
    remedies.push({
        title: "General Laundry Room Vastu Tips",
        suggestions: [
            "Keep laundry area clean and dry",
            "Fix any water leakage immediately",
            "Ensure proper ventilation for drying",
            "Store detergents in closed cabinets",
            "Keep washing machine well-maintained",
            "Avoid clutter and dirty clothes accumulation"
        ]
    });
}
    
    //pantry
    else if (lowerName.includes('pantry') || lowerName.includes('store') || 
         lowerName.includes('provision room') || lowerName.includes('ration storage')) {
    
    if (dirLower === 'south') {
        remedies.push({
            title: "Pantry in South Direction - Ideal Placement",
            suggestions: [
                "Best direction for food storage",
                "Promotes long-lasting provisions",
                "Store grains and dry foods in South-West corner",
                "Use warm colors like brown, orange or yellow",
                "Keep heavy items on South and West walls",
                "Ideal for preserving food quality"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Pantry in South-West Direction",
            suggestions: [
                "Excellent for food storage and preservation",
                "Provides stability to household provisions",
                "Place heavy containers in South-West corner",
                "Use earthy colors like brown or beige",
                "Keep pantry well-organized and clean",
                "Ideal for long-term food storage"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Pantry in West Direction",
            suggestions: [
                "Good for pantry and storage",
                "Helps in proper food preservation",
                "Store items in metal containers",
                "Use light colors with good lighting",
                "Keep frequently used items accessible",
                "Ensure proper ventilation"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Pantry in North-West Direction",
            suggestions: [
                "Suitable for light storage",
                "Ideal for daily use items",
                "Use organized shelving systems",
                "Keep area clean and dry",
                "Store light-weight provisions",
                "Good for spices and condiments"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Pantry in South-East Direction",
            suggestions: [
                "Fire element risk with food storage",
                "Can cause food spoilage issues",
                "Use cooling colors like white or blue",
                "Store items away from heat sources",
                "Keep area well-ventilated and cool",
                "Avoid storing flammable items"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Pantry in North Direction",
            suggestions: [
                "Not ideal - can affect wealth energy",
                "May lead to wastage of food",
                "Store items in airtight containers",
                "Use light colors and bright lighting",
                "Keep North-East corner empty and clean",
                "Avoid storing expired items"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Pantry in East Direction",
            suggestions: [
                "Blocks morning positive energy",
                "Can affect food quality and freshness",
                "Use very light colors and materials",
                "Keep pantry minimal and organized",
                "Store items in transparent containers",
                "Avoid cluttering the space"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Pantry in North-East - Most Critical",
            suggestions: [
                "Extremely harmful for food storage",
                "Can cause health issues and food spoilage",
                "Shift pantry immediately if possible",
                "Use white colors and maximum cleanliness",
                "Store only minimal essential items",
                "Keep area absolutely dry and clean"
            ]
        });
    }
    
    remedies.push({
        title: "General Pantry Vastu Tips",
        suggestions: [
            "Keep pantry clean, dry and well-organized",
            "Store grains in airtight containers",
            "Use FIFO (First In First Out) system",
            "Keep heavy items on bottom shelves",
            "Ensure proper ventilation and lighting",
            "Regularly check for expired items"
        ]
    });
}
    
    //TV Place
else if (lowerName.includes('family room') || lowerName.includes('tv room') || 
         lowerName.includes('entertainment room') || lowerName.includes('recreation room')) {
    
    if (dirLower === 'northwest') {
        remedies.push({
            title: "Family Room in North-West - Ideal Placement",
            suggestions: [
                "Perfect for entertainment and social gatherings",
                "Promotes family bonding and communication",
                "Place TV in South-East corner of the room",
                "Use light colors like white, blue or grey",
                "Arrange seating facing North or East",
                "Ideal for family discussions and entertainment"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Family Room in West Direction",
            suggestions: [
                "Excellent for evening family time",
                "Promotes creativity and relaxation",
                "Place TV in South-East corner facing North",
                "Use warm colors with good lighting",
                "Ideal for movie nights and entertainment",
                "Keep room well-ventilated and comfortable"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Family Room in North Direction",
            suggestions: [
                "Good for family entertainment",
                "Promotes harmony and togetherness",
                "Place TV in South-East corner",
                "Use blue, green or white colors",
                "Arrange seating facing North or East",
                "Keep North-East corner open and clean"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Family Room in South-East Direction",
            suggestions: [
                "Good for electronic entertainment",
                "Fire element supports TV and electronics",
                "Place TV in South-East corner",
                "Use cooling colors to balance energy",
                "Ensure proper ventilation for electronics",
                "Keep room well-lit and cheerful"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Family Room in South Direction",
            suggestions: [
                "Can cause excessive entertainment focus",
                "May lead to reduced family interaction",
                "Place TV in South-East corner",
                "Use light colors to balance energy",
                "Arrange seating facing North or East",
                "Limit electronic usage time"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Family Room in East Direction",
            suggestions: [
                "Better suited for active morning activities",
                "Can affect morning positive energy",
                "Place TV in South-East corner",
                "Use light colors with minimal decor",
                "Keep East windows clean and open",
                "Ideal for morning family exercises"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Family Room in South-West - Not Ideal",
            suggestions: [
                "Can cause laziness and inactivity",
                "Better suited for master bedroom",
                "Place TV in South-East corner",
                "Use light colors and bright lighting",
                "Keep room active and energetic",
                "Limit passive entertainment time"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Family Room in North-East - Critical",
            suggestions: [
                "Highly inauspicious for entertainment",
                "Can affect family harmony and health",
                "Shift room if possible to North-West",
                "Use very light colors and maximum lighting",
                "Keep entertainment minimal in this area",
                "Better used for meditation or study"
            ]
        });
    }
    
    remedies.push({
        title: "General Family Room Vastu Tips",
        suggestions: [
            "Place TV in South-East corner (fire element)",
            "Arrange seating facing North or East",
            "Keep room well-lit and ventilated",
            "Use comfortable but not overly luxurious furniture",
            "Maintain clean and clutter-free space",
            "Ensure good family interaction space"
        ]
    });
}
    
    
    //Basement
else if (lowerName.includes('basement') || lowerName.includes('tala griha') || 
         lowerName.includes('underground room') || lowerName.includes('cellar')) {
    
    if (dirLower === 'north') {
        remedies.push({
            title: "Basement in North Direction - Ideal Placement",
            suggestions: [
                "Best direction for basement activities",
                "Suitable for entertainment or storage",
                "Use bright lighting and white colors",
                "Keep North-East corner absolutely clean",
                "Install proper ventilation system",
                "Ideal for home theater or gym"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Basement in East Direction",
            suggestions: [
                "Acceptable for basement usage",
                "Good for morning activities",
                "Use very bright lighting systems",
                "Keep East side clean and open",
                "Install windows for natural light if possible",
                "Suitable for storage or utility area"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Basement in North-East - Critical",
            suggestions: [
                "Highly inauspicious for basement",
                "Can cause major health and financial issues",
                "Avoid using this area for living spaces",
                "Use only for light storage if necessary",
                "Install pyramid in North-East corner",
                "Keep area extremely clean and dry"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Basement in North-West Direction",
            suggestions: [
                "Moderately acceptable for basement",
                "Suitable for storage or utility area",
                "Use good ventilation and lighting",
                "Keep area organized and clutter-free",
                "Install dehumidifier to control moisture",
                "Avoid using as bedroom or living space"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Basement in West Direction",
            suggestions: [
                "Acceptable for specific purposes",
                "Good for evening entertainment area",
                "Use warm lighting and light colors",
                "Ensure proper air circulation",
                "Suitable for game room or hobby area",
                "Keep well-maintained and clean"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Basement in South Direction",
            suggestions: [
                "Can cause stability issues",
                "Use only for storage purposes",
                "Install strong lighting system",
                "Keep South wall heavy and solid",
                "Avoid using as living space",
                "Place heavy items in South-West"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Basement in South-East Direction",
            suggestions: [
                "Fire element risk underground",
                "Can cause electrical issues",
                "Install fire safety equipment",
                "Use cooling colors like white or blue",
                "Avoid storing flammable materials",
                "Keep area well-ventilated"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Basement in South-West - Most Critical",
            suggestions: [
                "Extremely inauspicious for basement",
                "Can cause serious health and relationship issues",
                "Avoid using this area completely if possible",
                "Use only for minimal storage with precautions",
                "Place heavy pyramid in South-West corner",
                "Consult Vastu expert for major corrections"
            ]
        });
    }
    
    remedies.push({
        title: "General Basement Vastu Tips",
        suggestions: [
            "Use bright white lighting throughout",
            "Install proper ventilation and dehumidifier",
            "Keep basement clean, dry and clutter-free",
            "Avoid using as bedroom or prayer room",
            "Use light colors on walls and ceiling",
            "Ensure proper safety and exit routes"
        ]
    });
}
    
    //Garden
    else if (lowerName.includes('garden') || lowerName.includes('lawn') || 
         lowerName.includes('bagicha') || lowerName.includes('green area') || 
         lowerName.includes('plants area') || lowerName.includes('backyard')) {
    
    if (dirLower === 'north') {
        remedies.push({
            title: "Garden in North Direction - Ideal Placement",
            suggestions: [
                "Excellent for wealth and prosperity",
                "Plant flowering plants and small shrubs",
                "Place water feature or fountain in North-East",
                "Use variety of colorful flowers",
                "Keep lawn well-maintained and clean",
                "Ideal for morning walks and meditation"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Garden in East Direction",
            suggestions: [
                "Perfect for morning sunlight plants",
                "Promotes health and positive energy",
                "Plant Tulsi, flowering plants and medicinal herbs",
                "Keep garden open and clutter-free",
                "Ideal for sunrise meditation and yoga",
                "Use natural stone pathways"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Garden in North-East - Ideal",
            suggestions: [
                "Best direction for spiritual garden",
                "Perfect for Tulsi plant and sacred trees",
                "Keep area open, clean and well-maintained",
                "Place small water feature in North-East",
                "Use white flowering plants predominantly",
                "Ideal for meditation and prayer"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Garden in North-West Direction",
            suggestions: [
                "Good for social plants and herbs",
                "Plant aromatic herbs and small trees",
                "Keep garden well-organized and neat",
                "Use wind chimes for positive energy",
                "Ideal for evening relaxation",
                "Maintain proper boundaries"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Garden in West Direction",
            suggestions: [
                "Good for evening garden activities",
                "Plant trees that provide afternoon shade",
                "Use variety of colorful flowers",
                "Ideal for sunset viewing and relaxation",
                "Keep garden well-lit for evening use",
                "Plant fragrant flowering plants"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Garden in South Direction",
            suggestions: [
                "Can support large trees and plants",
                "Plant shade-giving trees in South",
                "Use heat-resistant plants and flowers",
                "Keep lawn well-watered and maintained",
                "Avoid thorny plants in this area",
                "Good for winter sunbathing"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Garden in South-East Direction",
            suggestions: [
                "Suitable for flowering plants",
                "Plant colorful and vibrant flowers",
                "Use red, orange and yellow flowers",
                "Keep garden well-maintained",
                "Avoid large trees blocking sunlight",
                "Good for composting area"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Garden in South-West Direction",
            suggestions: [
                "Better for heavy plants and trees",
                "Plant large trees in South-West corner",
                "Use heavy pots and solid landscaping",
                "Avoid water features in this area",
                "Keep garden well-organized",
                "Maintain strong boundaries"
            ]
        });
    }
    
    remedies.push({
        title: "General Garden Vastu Tips",
        suggestions: [
            "Plant Tulsi in North-East or East direction",
            "Avoid thorny plants except roses",
            "Keep garden clean and well-maintained",
            "Use natural fertilizers and pesticides",
            "Place water feature in North or East",
            "Avoid large trees too close to house"
        ]
    });
}
    
    //Borewell
    else if (lowerName.includes('water source') || lowerName.includes('well') || 
         lowerName.includes('borewell') || lowerName.includes('water tank') || 
         lowerName.includes('jal strot') || lowerName.includes('underground water')) {
    
    if (dirLower === 'northeast') {
        remedies.push({
            title: "Water Source in North-East - Ideal Placement",
            suggestions: [
                "Best direction for water sources",
                "Brings prosperity and positive energy",
                "Keep area clean and well-maintained",
                "Use white or blue colors for tanks",
                "Ensure no leakage or wastage",
                "Ideal for underground water storage"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Water Source in East Direction",
            suggestions: [
                "Excellent for water placement",
                "Promotes health and vitality",
                "Keep water source clean and pure",
                "Use light colors for containers",
                "Ideal for morning water usage",
                "Ensure proper maintenance"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Water Source in North Direction",
            suggestions: [
                "Good for wealth and abundance",
                "Promotes financial stability",
                "Keep water flowing and clean",
                "Use blue or white colors",
                "Ideal for overhead water tanks",
                "Avoid stagnation of water"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Water Source in North-West Direction",
            suggestions: [
                "Acceptable for water placement",
                "Can promote social connections",
                "Keep water source well-maintained",
                "Use metallic containers if possible",
                "Ensure proper water flow",
                "Good for secondary water sources"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Water Source in West Direction",
            suggestions: [
                "Moderately acceptable",
                "Can support creative energy",
                "Keep water clean and circulating",
                "Use light colors for tanks",
                "Ensure no water leakage",
                "Good for evening water usage"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Water Source in South-East Direction",
            suggestions: [
                "Fire and water element conflict",
                "Can cause financial instability",
                "Place fire element symbols nearby",
                "Use red or orange colors as remedy",
                "Keep water usage minimal",
                "Avoid underground water sources"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Water Source in South Direction",
            suggestions: [
                "Not ideal for water placement",
                "Can affect reputation and health",
                "Place pyramid near water source",
                "Use light colors and bright lighting",
                "Keep water circulating constantly",
                "Avoid overhead tanks in South"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Water Source in South-West - Critical",
            suggestions: [
                "Highly inauspicious for water",
                "Can cause serious health issues",
                "Shift water source if possible",
                "Place heavy stone near water area",
                "Use earth element symbols as remedy",
                "Keep water usage to minimum"
            ]
        });
    }
    
    remedies.push({
        title: "General Water Source Vastu Tips",
        suggestions: [
            "Keep water sources clean and leak-free",
            "Avoid stagnation of water",
            "Place overhead tanks in North-West",
            "Underground water in North-East ideal",
            "Ensure proper water flow and circulation",
            "Regular maintenance and cleaning"
        ]
    });
}

    //septic Tank
    else if (lowerName.includes('septic tank') || lowerName.includes('soak pit') || 
         lowerName.includes('waste disposal') || lowerName.includes('mal nikal')) {
    
    if (dirLower === 'northwest') {
        remedies.push({
            title: "Septic Tank in North-West - Acceptable",
            suggestions: [
                "Less harmful direction for waste disposal",
                "Keep tank covered and well-maintained",
                "Plant trees around to absorb negative energy",
                "Ensure proper ventilation and safety",
                "Regular cleaning and maintenance",
                "Avoid placing near water sources"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Septic Tank in West Direction",
            suggestions: [
                "Moderately acceptable placement",
                "Keep tank properly sealed and covered",
                "Use anti-odor measures regularly",
                "Plant aromatic plants nearby",
                "Ensure safe distance from living areas",
                "Regular professional cleaning"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Septic Tank in South Direction",
            suggestions: [
                "Can cause health issues if not maintained",
                "Keep tank deep and well-covered",
                "Place heavy stone or pyramid nearby",
                "Use natural odor absorbers",
                "Ensure proper drainage system",
                "Avoid placing near kitchen garden"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Septic Tank in South-East Direction",
            suggestions: [
                "Fire and waste element conflict",
                "Can cause digestive health issues",
                "Place fire element symbols as remedy",
                "Keep tank well-ventilated",
                "Use chemical-free cleaning methods",
                "Plant neem trees nearby"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Septic Tank in South-West - Critical",
            suggestions: [
                "Highly inauspicious for waste disposal",
                "Can affect family health and stability",
                "Shift tank if possible to North-West",
                "Place heavy pyramid or stone",
                "Keep area clean and dry",
                "Consult expert for relocation"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Septic Tank in North Direction",
            suggestions: [
                "Not ideal - can block wealth energy",
                "Can cause financial drainage issues",
                "Place pyramid in North direction",
                "Keep tank minimal and efficient",
                "Use advanced waste treatment systems",
                "Avoid near water sources or wells"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Septic Tank in East Direction",
            suggestions: [
                "Blocks morning positive energy",
                "Can affect health and prosperity",
                "Place pyramid in East direction",
                "Keep tank deep and well-covered",
                "Use natural purification methods",
                "Avoid near main entrance"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Septic Tank in North-East - Most Critical",
            suggestions: [
                "Extremely harmful placement",
                "Can cause major health and financial problems",
                "Shift tank immediately if possible",
                "Place heavy pyramid in North-East",
                "Use advanced waste management systems",
                "Consult Vastu expert for urgent corrections"
            ]
        });
    }
    
    remedies.push({
        title: "General Septic Tank Vastu Tips",
        suggestions: [
            "Place septic tank in North-West direction ideally",
            "Keep safe distance from water sources and house",
            "Ensure proper covering and ventilation",
            "Regular maintenance and cleaning",
            "Use natural odor control methods",
            "Avoid placing near kitchen, prayer room or bedrooms"
        ]
    });
}
    
    
    //Electric Meter
else if (lowerName.includes('electric meter') || lowerName.includes('meter room') || 
         lowerName.includes('bijli meter') || lowerName.includes('electrical meter')) {
    
    if (dirLower === 'southeast') {
        remedies.push({
            title: "Electric Meter in South-East - Ideal Placement",
            suggestions: [
                "Perfect direction for electrical meters",
                "Fire element supports electrical energy",
                "Place meter on South-East wall facing East",
                "Use red, orange or yellow colors nearby",
                "Keep area clean and easily accessible",
                "Ideal for optimal electrical flow"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Electric Meter in East Direction",
            suggestions: [
                "Good for electrical equipment",
                "Promotes energy efficiency",
                "Place meter on East wall facing East",
                "Use light colors with proper safety",
                "Keep area well-lit and accessible",
                "Ensure proper earthing system"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Electric Meter in South Direction",
            suggestions: [
                "Acceptable for meter placement",
                "Fire element supports electrical flow",
                "Place meter on South wall",
                "Use proper safety enclosures",
                "Keep area clean and organized",
                "Ensure good ventilation"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Electric Meter in North-West Direction",
            suggestions: [
                "Moderately acceptable placement",
                "Can cause electrical fluctuations",
                "Place meter in metal enclosure",
                "Use proper earthing and safety",
                "Keep area well-maintained",
                "Regular safety checks recommended"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Electric Meter in West Direction",
            suggestions: [
                "Can cause electrical issues",
                "Place meter in proper safety box",
                "Use surge protection devices",
                "Keep area clean and dry",
                "Regular maintenance required",
                "Ensure proper wiring safety"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Electric Meter in North Direction",
            suggestions: [
                "Not ideal for electrical equipment",
                "Water element conflicts with electricity",
                "Place meter in waterproof enclosure",
                "Use proper insulation and safety",
                "Keep area dry and well-maintained",
                "Install safety switches"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Electric Meter in South-West - Critical",
            suggestions: [
                "Highly inauspicious for electrical meter",
                "Can cause safety hazards and faults",
                "Shift meter if possible to South-East",
                "Use heavy-duty safety enclosure",
                "Install additional safety measures",
                "Regular professional inspection"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Electric Meter in North-East - Most Critical",
            suggestions: [
                "Extremely harmful placement",
                "Can cause major electrical problems",
                "Shift meter immediately if possible",
                "Use maximum safety precautions",
                "Install fire safety equipment nearby",
                "Consult electrician for relocation"
            ]
        });
    }
    
    remedies.push({
        title: "General Electric Meter Vastu Tips",
        suggestions: [
            "Place meter in South-East direction ideally",
            "Keep meter clean and easily accessible",
            "Ensure proper earthing and safety measures",
            "Regular maintenance and safety checks",
            "Avoid placing near water sources",
            "Use proper enclosures for protection"
        ]
    });
}
    
    //UPS Room
else if (lowerName.includes('inverter') || lowerName.includes('generator') || 
         lowerName.includes('power backup') || lowerName.includes('ups room')) {
    
    if (dirLower === 'southeast') {
        remedies.push({
            title: "Inverter/Generator in South-East - Ideal Placement",
            suggestions: [
                "Perfect direction for power backup equipment",
                "Fire element supports electrical energy generation",
                "Place equipment in South-East corner facing East",
                "Use proper ventilation for heat dissipation",
                "Keep area clean and easily accessible",
                "Ideal for optimal performance and safety"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Generator/Inverter in South Direction",
            suggestions: [
                "Good for power backup equipment",
                "Fire element supports energy generation",
                "Place equipment on South side with proper exhaust",
                "Use soundproof enclosure if needed",
                "Ensure proper ventilation system",
                "Keep area clean and organized"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Power Backup in East Direction",
            suggestions: [
                "Acceptable for inverter placement",
                "Provides good energy flow",
                "Place equipment in proper enclosure",
                "Ensure safety from children and pets",
                "Keep area well-ventilated and dry",
                "Regular maintenance recommended"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Generator/Inverter in North-West Direction",
            suggestions: [
                "Moderately acceptable placement",
                "Can cause noise disturbances",
                "Use proper soundproofing measures",
                "Place in metal enclosure for safety",
                "Keep away from living areas",
                "Ensure proper exhaust system"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Power Backup in West Direction",
            suggestions: [
                "Can cause electrical fluctuations",
                "Place equipment in proper safety enclosure",
                "Use surge protection devices",
                "Keep area clean and dry",
                "Regular maintenance required",
                "Ensure proper wiring safety"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Inverter/Generator in North Direction",
            suggestions: [
                "Not ideal for electrical equipment",
                "Water element conflicts with electricity",
                "Place in waterproof and secure enclosure",
                "Use proper insulation and safety measures",
                "Keep area dry and well-maintained",
                "Install safety switches and circuit breakers"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Power Backup in South-West - Critical",
            suggestions: [
                "Highly inauspicious for electrical equipment",
                "Can cause safety hazards and malfunctions",
                "Shift equipment if possible to South-East",
                "Use heavy-duty safety enclosure",
                "Install additional safety measures",
                "Regular professional inspection needed"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Generator/Inverter in North-East - Most Critical",
            suggestions: [
                "Extremely harmful placement",
                "Can cause major electrical accidents",
                "Shift equipment immediately if possible",
                "Use maximum safety precautions",
                "Install fire safety equipment nearby",
                "Consult electrician for urgent relocation"
            ]
        });
    }
    
    remedies.push({
        title: "General Power Backup Vastu Tips",
        suggestions: [
            "Place in South-East direction ideally",
            "Ensure proper ventilation and cooling",
            "Keep equipment clean and accessible",
            "Regular maintenance and safety checks",
            "Use proper earthing and surge protection",
            "Avoid placing near water sources or bedrooms"
        ]
    });
}
    
    
    //overhead tank
else if (lowerName.includes('overhead tank') || lowerName.includes('water tank') || 
         lowerName.includes('sinchai tank') || lowerName.includes('pani ka tank') ||
         lowerName.includes('storage tank')) {
    
    if (dirLower === 'west') {
        remedies.push({
            title: "Overhead Tank in West Direction - Ideal Placement",
            suggestions: [
                "Best direction for overhead water storage",
                "Provides stable water supply and pressure",
                "Place tank in North-West part of West direction",
                "Use blue, white or black colors for tank",
                "Ensure strong support and proper installation",
                "Ideal for household water needs"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Water Tank in North-West Direction",
            suggestions: [
                "Excellent for overhead water storage",
                "Promotes good water flow and distribution",
                "Place tank properly supported and secured",
                "Use metal or plastic materials ideally",
                "Keep tank covered and clean",
                "Good for regular water usage"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Overhead Tank in South-West Direction",
            suggestions: [
                "Good for heavy water storage",
                "Provides stability and strong support",
                "Ensure tank is properly reinforced",
                "Use dark colors like blue or black",
                "Keep tank well-maintained and leak-proof",
                "Ideal for large capacity storage"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Water Tank in North Direction",
            suggestions: [
                "Can affect wealth energy if leaking",
                "Ensure absolutely no water leakage",
                "Place tank in North-West part of North",
                "Use proper insulation and maintenance",
                "Regular check for cracks or damages",
                "Avoid placing directly in North-East"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Overhead Tank in South Direction",
            suggestions: [
                "Can cause excessive water usage",
                "Place tank in South-West part of South",
                "Use dark colors to absorb heat",
                "Ensure proper support structure",
                "Keep tank covered to prevent evaporation",
                "Regular maintenance essential"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Water Tank in East Direction",
            suggestions: [
                "Blocks morning positive energy",
                "Can affect health and prosperity",
                "Place tank in North-East corner if unavoidable",
                "Use light colors and keep very clean",
                "Ensure no shadow falls on house",
                "Minimize size and capacity"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Overhead Tank in South-East - Critical",
            suggestions: [
                "Fire and water element conflict",
                "Can cause electrical and health issues",
                "Shift tank if possible to West or North-West",
                "Use fire-resistant materials",
                "Keep away from electrical wires",
                "Regular safety inspections"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Water Tank in North-East - Most Critical",
            suggestions: [
                "Extremely harmful placement",
                "Can cause major health and financial problems",
                "Shift tank immediately if possible",
                "If unavoidable, keep very small and clean",
                "Use white color and regular cleaning",
                "Consult Vastu expert for corrections"
            ]
        });
    }
    
    remedies.push({
        title: "General Overhead Tank Vastu Tips",
        suggestions: [
            "Place overhead tank in West or North-West ideally",
            "Ensure strong support structure and safety",
            "Keep tank covered and clean regularly",
            "Fix any leakage immediately",
            "Avoid placing in North-East or East directions",
            "Regular maintenance and cleaning essential"
        ]
    });
}
    
    //Heting Room
else if (lowerName.includes('fireplace') || lowerName.includes('heater') || 
         lowerName.includes('agni sthan') || lowerName.includes('heating area')) {
    
    if (dirLower === 'southeast') {
        remedies.push({
            title: "Fireplace in South-East - Ideal Placement",
            suggestions: [
                "Perfect direction for fire elements",
                "Agneya corner naturally supports fire energy",
                "Place fireplace in South-East corner facing East",
                "Use red, orange or yellow colors around",
                "Keep area well-ventilated and safe",
                "Ideal for cooking hearth or heating"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Fireplace in South Direction",
            suggestions: [
                "Good for fireplace placement",
                "Fire element supports heating equipment",
                "Place fireplace on South wall",
                "Use proper chimney and ventilation",
                "Ensure fire safety measures",
                "Keep area clean and organized"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Fireplace in East Direction",
            suggestions: [
                "Acceptable with precautions",
                "Can provide morning warmth",
                "Place fireplace in South-East part of East",
                "Use proper safety enclosures",
                "Ensure good ventilation system",
                "Keep away from flammable materials"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Fireplace in North Direction",
            suggestions: [
                "Water and fire element conflict",
                "Can cause energy imbalance",
                "Place fireplace in North-West corner",
                "Use proper insulation and safety",
                "Keep area well-ventilated",
                "Install fire safety equipment"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Fireplace in North-West Direction",
            suggestions: [
                "Can cause relationship issues",
                "Air element conflicts with fire",
                "Place in metal enclosure for safety",
                "Use proper ventilation system",
                "Keep away from bedrooms",
                "Regular safety checks needed"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Fireplace in West Direction",
            suggestions: [
                "Moderately acceptable for evening use",
                "Can support creative energy",
                "Place fireplace in South-West part of West",
                "Use proper chimney and exhaust",
                "Ensure evening ventilation",
                "Keep safety equipment nearby"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Fireplace in South-West - Critical",
            suggestions: [
                "Highly inauspicious for fire elements",
                "Can cause health and stability issues",
                "Shift fireplace if possible to South-East",
                "Use heavy safety enclosures",
                "Install advanced fire safety systems",
                "Consult expert for relocation"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Fireplace in North-East - Most Critical",
            suggestions: [
                "Extremely harmful placement",
                "Can cause major accidents and health issues",
                "Shift fireplace immediately if possible",
                "Use maximum fire safety precautions",
                "Install multiple safety systems",
                "Consult Vastu expert for urgent corrections"
            ]
        });
    }
    
    remedies.push({
        title: "General Fireplace Vastu Tips",
        suggestions: [
            "Place fireplace in South-East direction ideally",
            "Ensure proper ventilation and chimney system",
            "Keep fire safety equipment readily available",
            "Regular maintenance and safety checks",
            "Avoid placing near wooden structures",
            "Use proper enclosures and safety barriers"
        ]
    });
}
    
    
    //Cash Locker
    else if (lowerName.includes('cash locker') || lowerName.includes('safe') || 
         lowerName.includes('money storage') || lowerName.includes('dhan rakha')) {
    
    if (dirLower === 'north') {
        remedies.push({
            title: "Cash Locker in North Direction - Ideal Placement",
            suggestions: [
                "Perfect direction for wealth storage",
                "Kuber's direction enhances financial growth",
                "Place safe in North wall facing North",
                "Use blue, green or silver colors",
                "Keep area clean and organized",
                "Ideal for valuables and important documents"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Safe in South Direction",
            suggestions: [
                "Good for secure money storage",
                "Provides stability and protection",
                "Place safe in South wall facing North",
                "Use strong, heavy safe enclosure",
                "Keep area well-concealed and secure",
                "Ideal for long-term savings"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Cash Locker in South-West Direction",
            suggestions: [
                "Excellent for secure storage",
                "Provides maximum security and stability",
                "Place safe in South-West corner",
                "Use heavy safe with strong locks",
                "Keep area private and concealed",
                "Ideal for valuable assets"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Safe in West Direction",
            suggestions: [
                "Good for financial security",
                "Promotes wealth preservation",
                "Place safe in West wall facing East",
                "Use metal safe for better security",
                "Keep area clean and organized",
                "Regularly check and maintain"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Cash Locker in North-West Direction",
            suggestions: [
                "Can cause financial fluctuations",
                "Money may come and go frequently",
                "Place safe in secure enclosure",
                "Use strong locking system",
                "Keep financial records organized",
                "Avoid keeping large cash amounts"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Safe in East Direction",
            suggestions: [
                "Not ideal for money storage",
                "Can block incoming wealth energy",
                "Place safe in North-East corner if unavoidable",
                "Use small and minimal safe",
                "Keep area very clean and organized",
                "Avoid storing large amounts"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Cash Locker in South-East - Critical",
            suggestions: [
                "Fire element can burn wealth energy",
                "Can cause financial losses and expenses",
                "Shift safe if possible to North or South-West",
                "Use fire-proof safe as precaution",
                "Keep financial records separate",
                "Avoid storing cash long-term"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Safe in North-East - Most Critical",
            suggestions: [
                "Extremely harmful for wealth storage",
                "Can cause major financial losses",
                "Shift safe immediately if possible",
                "If unavoidable, keep very small locker",
                "Use white color and keep extremely clean",
                "Consult Vastu expert for corrections"
            ]
        });
    }
    
    remedies.push({
        title: "General Cash Locker Vastu Tips",
        suggestions: [
            "Place safe in North or South-West direction ideally",
            "Keep safe concealed but accessible to owner",
            "Face North while accessing the safe",
            "Keep area clean and organized regularly",
            "Avoid storing broken or damaged currency",
            "Place Kuber Yantra near safe for wealth enhancement"
        ]
    });
}
    
    //wodrobe
else if (lowerName.includes('wardrobe') || lowerName.includes('almirah') || 
         lowerName.includes('cupboard') || lowerName.includes('storage cabinet') || 
         lowerName.includes('dresser')) {
    
    if (dirLower === 'southwest') {
        remedies.push({
            title: "Wardrobe in South-West - Ideal Placement",
            suggestions: [
                "Perfect direction for heavy furniture",
                "Provides stability and security",
                "Place wardrobe against South or West wall",
                "Use dark colors like brown, black or dark blue",
                "Keep heavy items in bottom shelves",
                "Ideal for master bedroom storage"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Wardrobe in South Direction",
            suggestions: [
                "Good for wardrobe placement",
                "Provides strong support and stability",
                "Place against South wall facing North",
                "Use warm colors like red, brown or orange",
                "Keep organized and clutter-free",
                "Ideal for heavy clothing storage"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Wardrobe in West Direction",
            suggestions: [
                "Excellent for storage furniture",
                "Promotes organization and cleanliness",
                "Place against West wall facing East",
                "Use light colors with metal handles",
                "Keep frequently used items accessible",
                "Good for daily wear clothing"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Wardrobe in North-West Direction",
            suggestions: [
                "Suitable for light storage",
                "Ideal for seasonal clothing",
                "Use light-colored furniture",
                "Keep organized with proper shelving",
                "Good for children's room storage",
                "Avoid overloading with heavy items"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Wardrobe in North Direction",
            suggestions: [
                "Can block wealth energy if too heavy",
                "Use light-weight and minimal furniture",
                "Place in North-West corner of room",
                "Use light colors like white or blue",
                "Keep organized and not overloaded",
                "Avoid storing valuables here"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Wardrobe in East Direction",
            suggestions: [
                "Blocks morning positive energy",
                "Can affect health and prosperity",
                "Use very light and minimal furniture",
                "Place in North-East corner if unavoidable",
                "Use light colors and mirrors",
                "Keep extremely organized"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Wardrobe in South-East Direction",
            suggestions: [
                "Fire element conflict with storage",
                "Can cause restlessness and arguments",
                "Place in South-West corner of room",
                "Use cooling colors like white or blue",
                "Keep well-organized and minimal",
                "Avoid storing flammable items"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Wardrobe in North-East - Critical",
            suggestions: [
                "Extremely harmful placement",
                "Can cause major health and financial issues",
                "Shift wardrobe immediately if possible",
                "If unavoidable, use very small cabinet",
                "Use white color and keep extremely clean",
                "Consult Vastu expert for corrections"
            ]
        });
    }
    
    remedies.push({
        title: "General Wardrobe Vastu Tips",
        suggestions: [
            "Place heavy wardrobes in South/West directions",
            "Keep wardrobes organized and clutter-free",
            "Use cedarwood or neem wood for natural protection",
            "Place shoes separately from clothing",
            "Keep wardrobe doors closed when not in use",
            "Regularly clean and organize contents"
        ]
    });
}
    
    //Utility
else if (lowerName.includes('utility area') || lowerName.includes('utility room') || 
         lowerName.includes('service area') || lowerName.includes('service room')) 
{
    
    if (dirLower === 'northwest') {
        remedies.push({
            title: "Utility Area in North-West - Ideal Placement",
            suggestions: [
                "Perfect direction for utility and service areas",
                "Promotes efficiency in household work",
                "Place cleaning equipment in North-West corner",
                "Use white, grey or light blue colors",
                "Keep area well-organized and clean",
                "Ideal for washing machine and drying area"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Utility Room in West Direction",
            suggestions: [
                "Good for utility and service purposes",
                "Provides good ventilation for drying",
                "Place equipment against West wall",
                "Use light colors with good lighting",
                "Keep area functional and practical",
                "Ideal for evening household chores"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Utility Area in South Direction",
            suggestions: [
                "Acceptable for utility purposes",
                "Can handle heavy equipment well",
                "Place against South wall facing North",
                "Use dark colors for flooring",
                "Ensure proper ventilation system",
                "Keep area clean and organized"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Utility Room in South-East Direction",
            suggestions: [
                "Fire element suitable for some utilities",
                "Good for electrical equipment storage",
                "Place fire-safe containers for chemicals",
                "Use cooling colors like white or blue",
                "Keep area well-ventilated",
                "Install fire safety equipment"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Utility Area in North Direction",
            suggestions: [
                "Not ideal - can block wealth energy",
                "Keep utility area minimal and clean",
                "Place in North-West corner of room",
                "Use light colors and bright lighting",
                "Keep North-East corner absolutely clean",
                "Avoid storing junk or broken items"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Utility Room in East Direction",
            suggestions: [
                "Blocks morning positive energy",
                "Can affect health and prosperity",
                "Use very light colors and materials",
                "Keep area extremely clean and organized",
                "Place equipment in South-East corner",
                "Avoid cluttering the space"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Utility Area in South-West - Critical",
            suggestions: [
                "Highly inauspicious for utility room",
                "Can affect family stability and health",
                "Shift utility area if possible to North-West",
                "Use light colors and maximum cleanliness",
                "Keep area dry and well-organized",
                "Avoid storing dirty or broken items"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Utility Room in North-East - Most Critical",
            suggestions: [
                "Extremely harmful for all aspects",
                "Can cause major health and financial problems",
                "Shift utility area immediately if possible",
                "Use white colors and absolute cleanliness",
                "Keep area dry and minimal",
                "Consult Vastu expert for major corrections"
            ]
        });
    }
    
    remedies.push({
        title: "General Utility Area Vastu Tips",
        suggestions: [
            "Keep utility area clean and well-organized",
            "Store cleaning chemicals in closed cabinets",
            "Ensure proper ventilation and lighting",
            "Fix any leakage issues immediately",
            "Keep tools and equipment properly arranged",
            "Regular cleaning and maintenance essential"
        ]
    });
}
    
    
    //Hottub
else if (lowerName.includes('jacuzzi') || lowerName.includes('hot tub') || 
         lowerName.includes('spa') || lowerName.includes('whirlpool')) {
    
    if (dirLower === 'north') {
        remedies.push({
            title: "Jacuzzi in North Direction - Ideal Placement",
            suggestions: [
                "Excellent direction for water-based relaxation",
                "Promotes wealth and abundance energy",
                "Place jacuzzi in North-East part of North direction",
                "Use blue, white or aqua colors",
                "Keep area clean and well-maintained",
                "Ideal for relaxation and hydrotherapy"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Hot Tub in East Direction",
            suggestions: [
                "Good for morning relaxation",
                "Promotes health and vitality",
                "Place in North-East corner of East",
                "Use light colors and natural materials",
                "Keep area well-ventilated and clean",
                "Ideal for sunrise hydrotherapy"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Spa in North-East - Ideal",
            suggestions: [
                "Perfect for spiritual relaxation",
                "Enhances meditation and peace",
                "Place in North-East corner facing East",
                "Use pure white or light blue colors",
                "Keep area absolutely clean and sacred",
                "Ideal for therapeutic water treatments"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Whirlpool in North-West Direction",
            suggestions: [
                "Good for social relaxation",
                "Promotes relationship harmony",
                "Place in proper enclosure",
                "Use metallic or light colors",
                "Keep area well-maintained",
                "Ideal for couple relaxation"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Jacuzzi in West Direction",
            suggestions: [
                "Acceptable for evening relaxation",
                "Promotes creativity and stress relief",
                "Place in South-West part of West",
                "Use warm lighting for evening",
                "Keep area secure and private",
                "Good for sunset relaxation"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Hot Tub in South-East - Critical",
            suggestions: [
                "Fire and water element conflict",
                "Can cause electrical safety issues",
                "Place away from electrical equipment",
                "Use proper insulation and safety",
                "Install GFCI protection",
                "Keep area well-ventilated"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Spa in South Direction",
            suggestions: [
                "Not ideal for water features",
                "Can cause energy imbalance",
                "Place in South-East corner if unavoidable",
                "Use light colors to balance energy",
                "Ensure proper heating controls",
                "Keep area well-maintained"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Jacuzzi in South-West - Most Critical",
            suggestions: [
                "Extremely inauspicious for water features",
                "Can affect stability and health",
                "Shift to North or East if possible",
                "Use heavy safety precautions",
                "Keep area very clean and dry when not in use",
                "Consult expert for relocation"
            ]
        });
    }
    
    remedies.push({
        title: "General Jacuzzi/Spa Vastu Tips",
        suggestions: [
            "Place in North or East directions ideally",
            "Ensure proper water filtration and cleanliness",
            "Maintain optimal water temperature",
            "Keep area well-ventilated and dry",
            "Use natural materials and calming colors",
            "Regular maintenance and safety checks"
        ]
    });
}
    
    //home thiter
    else if (lowerName.includes('home theater') || lowerName.includes('media room') || 
         lowerName.includes('cinema room') || lowerName.includes('entertainment lounge')) {
    
    if (dirLower === 'southeast') {
        remedies.push({
            title: "Home Theater in South-East - Ideal Placement",
            suggestions: [
                "Perfect direction for electronic entertainment",
                "Fire element supports audio-visual equipment",
                "Place screen in South-East corner facing North-West",
                "Use red, black or dark colors for walls",
                "Install proper soundproofing and ventilation",
                "Ideal for optimal audio-visual experience"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Media Room in North-West Direction",
            suggestions: [
                "Excellent for entertainment and social viewing",
                "Promotes family bonding and movie nights",
                "Place screen in South-East corner of room",
                "Use comfortable seating facing North or East",
                "Ensure proper acoustic treatment",
                "Ideal for group entertainment"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Cinema Room in West Direction",
            suggestions: [
                "Good for evening entertainment",
                "Promotes relaxation and enjoyment",
                "Place screen on West wall facing East",
                "Use warm lighting and comfortable seating",
                "Install blackout curtains for daytime viewing",
                "Ideal for movie marathons"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Home Theater in South Direction",
            suggestions: [
                "Acceptable for entertainment room",
                "Provides good sound insulation",
                "Place screen on South wall facing North",
                "Use dark colors for better viewing experience",
                "Ensure proper ventilation system",
                "Keep area clean and organized"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Media Room in North Direction",
            suggestions: [
                "Can enhance audio quality",
                "Promotes clear sound transmission",
                "Place screen in North-East corner facing South-West",
                "Use blue or black colors for walls",
                "Ensure proper speaker placement",
                "Keep North-East corner clean"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Entertainment Lounge in East Direction",
            suggestions: [
                "Better for morning entertainment",
                "Can affect morning positive energy",
                "Place screen in South-East corner",
                "Use light-absorbing colors for walls",
                "Install proper window treatments",
                "Ideal for daytime viewing"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Home Theater in South-West - Critical",
            suggestions: [
                "Not ideal for entertainment room",
                "Can cause excessive laziness",
                "Place screen in South-East corner if unavoidable",
                "Use bright lighting when not in use",
                "Limit usage time to avoid inactivity",
                "Keep area active and energetic"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Cinema Room in North-East - Most Critical",
            suggestions: [
                "Extremely harmful for entertainment",
                "Can affect concentration and mental peace",
                "Shift room if possible to South-East or North-West",
                "Use very light colors and maximum lighting when not used",
                "Keep entertainment minimal in this area",
                "Better used for study or meditation"
            ]
        });
    }
    
    remedies.push({
        title: "General Home Theater Vastu Tips",
        suggestions: [
            "Place screen in South-East corner (fire element)",
            "Arrange seating facing North or East for viewers",
            "Ensure proper soundproofing and acoustics",
            "Use comfortable but not overly luxurious furniture",
            "Maintain good ventilation and air quality",
            "Keep equipment organized and cables managed"
        ]
    });
}
    
    
    //Gym
    else if (lowerName.includes('gym') || lowerName.includes('exercise room') || 
         lowerName.includes('workout area') || lowerName.includes('fitness room') || 
         lowerName.includes('vyayam kaksh')) {
    
    if (dirLower === 'east') {
        remedies.push({
            title: "Gym in East Direction - Ideal Placement",
            suggestions: [
                "Perfect direction for exercise and fitness",
                "Morning sunlight boosts energy and vitality",
                "Place equipment facing East or North",
                "Use energizing colors like orange, yellow or red",
                "Keep area well-ventilated and bright",
                "Ideal for morning workouts and yoga"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Exercise Room in North Direction",
            suggestions: [
                "Excellent for fitness activities",
                "Promotes strength and endurance",
                "Place equipment facing East or North",
                "Use blue, white or silver colors",
                "Keep area clean and organized",
                "Ideal for weight training and cardio"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Gym in South-East Direction",
            suggestions: [
                "Good for high-energy workouts",
                "Fire element supports physical activity",
                "Place equipment in South-East corner",
                "Use energizing colors like red or orange",
                "Ensure proper ventilation for heat dissipation",
                "Ideal for intense training sessions"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Workout Area in West Direction",
            suggestions: [
                "Good for evening exercise routines",
                "Promotes flexibility and relaxation",
                "Place equipment facing East or North",
                "Use calming colors with good lighting",
                "Keep area well-ventilated for evening use",
                "Ideal for yoga and stretching"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Fitness Room in North-West Direction",
            suggestions: [
                "Suitable for group exercises",
                "Promotes social workout sessions",
                "Place equipment in organized manner",
                "Use light colors with good spacing",
                "Ensure proper air circulation",
                "Ideal for aerobic and dance workouts"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Gym in South Direction",
            suggestions: [
                "Can support heavy weight training",
                "Provides stability for equipment",
                "Place heavy machines against South wall",
                "Use bright lighting to balance energy",
                "Ensure proper equipment safety",
                "Good for strength training"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Exercise Room in South-West - Critical",
            suggestions: [
                "Not ideal for active workout space",
                "Can cause lethargy and lack of motivation",
                "Place equipment in South-East corner if unavoidable",
                "Use very bright lighting and energizing colors",
                "Keep workouts short and intense",
                "Better suited for meditation or rest"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Gym in North-East - Most Critical",
            suggestions: [
                "Extremely harmful for physical activities",
                "Can cause injuries and health issues",
                "Shift gym immediately if possible",
                "If unavoidable, use for light stretching only",
                "Keep area extremely clean and minimal",
                "Consult Vastu expert for corrections"
            ]
        });
    }
    
    remedies.push({
        title: "General Gym Vastu Tips",
        suggestions: [
            "Face East or North while exercising",
            "Keep gym clean, well-ventilated and bright",
            "Place mirrors on North or East walls",
            "Use energizing colors and good lighting",
            "Keep equipment organized and maintained",
            "Ensure proper safety measures and flooring"
        ]
    });
}
    
    //Play Room
    else if (lowerName.includes('play room') || lowerName.includes('kids play area') || 
         lowerName.includes('children activity room') || lowerName.includes('khel kaksh')) {
    
    if (dirLower === 'west') {
        remedies.push({
            title: "Play Room in West Direction - Ideal Placement",
            suggestions: [
                "Perfect direction for children's play area",
                "Promotes creativity and imagination",
                "Place toys and games in North-West corner",
                "Use bright, cheerful colors like yellow, blue, green",
                "Keep area safe, clean and well-lit",
                "Ideal for creative play and activities"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Kids Play Area in North-West Direction",
            suggestions: [
                "Excellent for social play and interaction",
                "Promotes friendship and communication skills",
                "Place group games in center of room",
                "Use light colors with colorful accents",
                "Keep area organized with proper storage",
                "Ideal for playdates and group activities"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Play Room in East Direction",
            suggestions: [
                "Good for morning play sessions",
                "Promotes energy and enthusiasm",
                "Place educational toys in East corner",
                "Use bright, energizing colors",
                "Keep windows clean for natural light",
                "Ideal for learning through play"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Children Activity Room in North Direction",
            suggestions: [
                "Good for intellectual games",
                "Promotes learning and development",
                "Place puzzle and educational games in North",
                "Use blue, green or white colors",
                "Keep area well-organized and safe",
                "Ideal for brain-developing activities"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Play Room in South-East Direction",
            suggestions: [
                "Can cause over-excitement and hyperactivity",
                "Place calming activities in North-West corner",
                "Use cooling colors like light blue or green",
                "Keep area well-ventilated and cool",
                "Avoid too many electronic toys",
                "Good for active physical play"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Kids Play Area in South Direction",
            suggestions: [
                "Can make children stubborn or aggressive",
                "Place creative and calming toys in West",
                "Use light, soothing colors",
                "Keep area bright and cheerful",
                "Avoid competitive games here",
                "Good for constructive play"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Play Room in South-West - Critical",
            suggestions: [
                "Not ideal for children's play area",
                "Can cause laziness or lack of interest",
                "Place play area in North-West corner if unavoidable",
                "Use very bright, energizing colors",
                "Keep area active and stimulating",
                "Better suited for quiet activities"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Children Activity Room in North-East - Most Critical",
            suggestions: [
                "Extremely harmful for play area",
                "Can affect children's concentration and health",
                "Shift play room immediately if possible",
                "If unavoidable, use for quiet reading only",
                "Keep area extremely clean and minimal",
                "Consult Vastu expert for corrections"
            ]
        });
    }
    
    remedies.push({
        title: "General Play Room Vastu Tips",
        suggestions: [
            "Keep play area bright, colorful and safe",
            "Use rounded furniture edges for safety",
            "Store toys properly after play",
            "Ensure good ventilation and natural light",
            "Use non-toxic materials and paints",
            "Create different zones for different activities"
        ]
    });
}
    
    
    //baby Room
else if (lowerName.includes('nursery') || lowerName.includes('infant room') || 
         lowerName.includes('baby room') || lowerName.includes('shishu kaksh')) {
    
    if (dirLower === 'west') {
        remedies.push({
            title: "Nursery in West Direction - Ideal Placement",
            suggestions: [
                "Perfect direction for baby's room",
                "Promotes peaceful sleep and healthy growth",
                "Place crib in South-West corner with head towards West",
                "Use soft, soothing colors like light blue, pink or peach",
                "Keep room quiet, calm and well-ventilated",
                "Ideal for infant's rest and development"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Baby Room in North-West Direction",
            suggestions: [
                "Excellent for newborn care",
                "Promotes comfort and security",
                "Place crib in South-West corner of room",
                "Use gentle, pastel colors",
                "Keep room well-organized and clutter-free",
                "Ideal for parent-child bonding"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Nursery in North Direction",
            suggestions: [
                "Good for baby's intellectual development",
                "Promotes calm and peaceful environment",
                "Place crib in North-West corner facing East",
                "Use light blue, white or soft green colors",
                "Keep room bright but not overly stimulating",
                "Ideal for learning and growth"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Infant Room in East Direction",
            suggestions: [
                "Good for morning energy and vitality",
                "Promotes early development and activity",
                "Place crib in South-East corner with head towards East",
                "Use soft yellow, peach or light green colors",
                "Use curtains to control morning light",
                "Ideal for active babies"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Baby Room in South Direction",
            suggestions: [
                "Can make baby restless or fussy",
                "Place crib in South-West corner facing North",
                "Use calming colors like light blue or lavender",
                "Keep room well-ventilated and cool",
                "Use soft lighting and gentle sounds",
                "Avoid bright, stimulating colors"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Nursery in South-East Direction",
            suggestions: [
                "Can cause restlessness and sleep issues",
                "Place crib in South-West corner of room",
                "Use cooling colors like white or light blue",
                "Keep electronic devices to minimum",
                "Maintain comfortable temperature",
                "Use blackout curtains for better sleep"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Baby Room in South-West - Critical",
            suggestions: [
                "Not ideal for infant's room",
                "Can cause health issues and discomfort",
                "Place crib in South-West corner if unavoidable",
                "Use very light, soothing colors",
                "Keep room extremely clean and organized",
                "Better suited for master bedroom"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Nursery in North-East - Most Critical",
            suggestions: [
                "Extremely harmful for baby's room",
                "Can affect health, sleep and development",
                "Shift nursery immediately if possible",
                "If unavoidable, use very light colors and maximum cleanliness",
                "Keep room minimal and well-ventilated",
                "Consult Vastu expert for urgent corrections"
            ]
        });
    }
    
    remedies.push({
        title: "General Nursery Vastu Tips",
        suggestions: [
            "Place crib so baby's head faces East or South",
            "Use soft, non-toxic materials and paints",
            "Keep room clean, clutter-free and well-ventilated",
            "Avoid mirrors reflecting the crib",
            "Use gentle lighting and soothing colors",
            "Keep electronic devices away from sleeping area"
        ]
    });
}
    
    //Dressing Room
else if (lowerName.includes('walk-in closet') || lowerName.includes('dressing area') || 
         lowerName.includes('dressing room') || lowerName.includes('kapda ghar') ||
		 lowerName.includes('Walk-in Wardrobe') || lowerName.includes('Wardrobe Room')) {
    
    if (dirLower === 'northwest') {
        remedies.push({
            title: "Walk-in Closet in North-West - Ideal Placement",
            suggestions: [
                "Perfect direction for dressing area",
                "Promotes organization and easy access",
                "Place shelves and racks on North and West walls",
                "Use light colors like white, grey or beige",
                "Keep area well-lit and ventilated",
                "Ideal for daily clothing selection"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Dressing Room in West Direction",
            suggestions: [
                "Excellent for evening dressing",
                "Promotes creativity in fashion choices",
                "Place mirrors on North or East walls",
                "Use warm lighting for accurate color representation",
                "Keep organized with proper storage systems",
                "Ideal for accessory selection"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Walk-in Closet in North Direction",
            suggestions: [
                "Good for wardrobe organization",
                "Promotes neatness and order",
                "Place shelves against North wall",
                "Use light colors with good lighting",
                "Keep valuable items in secure storage",
                "Ideal for seasonal clothing storage"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Dressing Area in South-West Direction",
            suggestions: [
                "Good for secure clothing storage",
                "Provides stability for heavy wardrobes",
                "Place heavy items in South-West corner",
                "Use dark woods and quality materials",
                "Keep area well-organized and private",
                "Ideal for valuable clothing items"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Walk-in Closet in South Direction",
            suggestions: [
                "Can support heavy storage needs",
                "Place shelves against South wall",
                "Use warm colors with bright lighting",
                "Keep area clean and moth-free",
                "Ensure proper ventilation",
                "Good for formal wear storage"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Dressing Room in South-East Direction",
            suggestions: [
                "Fire element may cause haste in dressing",
                "Place mirrors in North or East only",
                "Use cooling colors like white or blue",
                "Keep area well-ventilated and cool",
                "Avoid overcrowding with too many items",
                "Good for quick morning routines"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Walk-in Closet in East Direction",
            suggestions: [
                "Blocks morning positive energy",
                "Can affect daily routine efficiency",
                "Place in North-East corner if unavoidable",
                "Use very light colors and mirrors",
                "Keep extremely organized and minimal",
                "Avoid storing seasonal items here"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Dressing Area in North-East - Most Critical",
            suggestions: [
                "Extremely harmful for storage area",
                "Can cause confusion and delays in routine",
                "Shift dressing room immediately if possible",
                "If unavoidable, keep very small and minimal",
                "Use white colors and maximum cleanliness",
                "Consult Vastu expert for corrections"
            ]
        });
    }
    
    remedies.push({
        title: "General Walk-in Closet Vastu Tips",
        suggestions: [
            "Place mirrors on North or East walls only",
            "Keep area clean, organized and well-lit",
            "Use proper storage systems and hangers",
            "Ensure good ventilation to prevent moisture",
            "Keep shoes separate from clothing",
            "Regularly declutter and organize contents"
        ]
    });
}
    
    
    
    //Powder Room
    else if (lowerName.includes('powder room') || lowerName.includes('guest toilet') || 
         lowerName.includes('common bathroom') || lowerName.includes('sadharan shauchalay')) {
    
    if (dirLower === 'northwest') {
        remedies.push({
            title: "Powder Room in North-West - Ideal Placement",
            suggestions: [
                "Perfect direction for guest toilet",
                "Minimizes negative energy impact on guests",
                "Place toilet in North-West corner of room",
                "Use light colors like white, blue or grey",
                "Keep area clean, fresh and well-ventilated",
                "Ideal for visitor convenience"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Guest Toilet in West Direction",
            suggestions: [
                "Good for powder room placement",
                "Provides privacy for guests",
                "Place fixtures against West wall",
                "Use calming colors with good lighting",
                "Keep exhaust fan in North or East wall",
                "Ideal for evening gatherings"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Common Bathroom in South Direction",
            suggestions: [
                "Acceptable for guest toilet with precautions",
                "Can affect household reputation",
                "Place toilet in South-West corner",
                "Use light colors to balance energy",
                "Keep door closed at all times",
                "Ensure excellent ventilation"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Powder Room in North Direction",
            suggestions: [
                "Not ideal - can block wealth energy",
                "May affect financial flow from guests",
                "Place toilet in North-West corner",
                "Use bright lighting and mirrors",
                "Keep North-East corner absolutely clean",
                "Fix any leakage immediately"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Guest Toilet in East Direction",
            suggestions: [
                "Blocks morning positive energy for guests",
                "Can affect visitor experience",
                "Place in North-East corner if unavoidable",
                "Use very light colors and maximum cleanliness",
                "Keep East window clean and ventilated",
                "Avoid placing near main entrance"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Common Bathroom in South-East Direction",
            suggestions: [
                "Fire and water element conflict",
                "Can cause discomfort for guests",
                "Place water elements in North-East",
                "Use cooling colors like white or blue",
                "Keep well-ventilated and odor-free",
                "Avoid red colors in decoration"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Powder Room in South-West - Critical",
            suggestions: [
                "Highly inauspicious for guest toilet",
                "Can affect family stability and guest relations",
                "Shift toilet if possible to North-West",
                "Use light colors and bright lighting",
                "Keep extremely clean and well-maintained",
                "Consult expert for relocation"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Guest Toilet in North-East - Most Critical",
            suggestions: [
                "Extremely harmful placement",
                "Can cause major health issues for guests and family",
                "Shift toilet immediately if possible",
                "If unavoidable, keep extremely small and clean",
                "Use white colors and maximum ventilation",
                "Consult Vastu expert for urgent corrections"
            ]
        });
    }
    
    remedies.push({
        title: "General Powder Room Vastu Tips",
        suggestions: [
            "Keep guest toilet extremely clean and fresh",
            "Use air fresheners or natural odor absorbers",
            "Ensure proper ventilation and lighting",
            "Keep door closed when not in use",
            "Fix any plumbing issues immediately",
            "Provide basic amenities for guest comfort"
        ]
    });
}
    
    //Mud Room
else if (lowerName.includes('mud room') || lowerName.includes('entryway') || 
         lowerName.includes('foyer') || lowerName.includes('entrance lobby') || 
         lowerName.includes('pravesh kaksh')) {
    
    if (dirLower === 'north') {
        remedies.push({
            title: "Mud Room in North Direction - Ideal Placement",
            suggestions: [
                "Perfect direction for entryway and foyer",
                "Welcomes positive energy and opportunities",
                "Place shoe rack in North-West corner",
                "Use bright colors like white, yellow or light blue",
                "Keep area clean, clutter-free and well-lit",
                "Ideal for welcoming guests and positive vibes"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Entryway in East Direction",
            suggestions: [
                "Excellent for morning energy entry",
                "Promotes health and prosperity",
                "Place coat rack in North-East corner",
                "Use light, welcoming colors",
                "Keep area bright and airy with morning light",
                "Ideal for sunrise positive energy"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Foyer in North-East - Ideal",
            suggestions: [
                "Best direction for entrance lobby",
                "Brings divine blessings and positivity",
                "Keep area absolutely clean and minimal",
                "Use pure white or light yellow colors",
                "Place auspicious symbols like Om or Swastik",
                "Ideal for spiritual energy entry"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Mud Room in North-West Direction",
            suggestions: [
                "Good for guest reception area",
                "Promotes social connections and travels",
                "Place storage in organized manner",
                "Use light colors with metal elements",
                "Keep area well-maintained and functional",
                "Ideal for frequent visitors"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Entryway in West Direction",
            suggestions: [
                "Acceptable for evening entry",
                "Promotes creativity and relaxation",
                "Place shoe storage in North-West corner",
                "Use warm lighting for evening hours",
                "Keep area clean and welcoming",
                "Good for sunset energy entry"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Foyer in South Direction",
            suggestions: [
                "Requires careful Vastu planning",
                "Can cause delays in opportunities",
                "Place heavy furniture against South wall",
                "Use bright lighting to counter heaviness",
                "Keep North-East corner absolutely clean",
                "Place pyramid in North-East for balance"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Mud Room in South-East Direction",
            suggestions: [
                "Fire element may cause haste or arguments",
                "Place water feature in North-East to balance",
                "Use cooling colors like white or blue",
                "Keep area well-ventilated and calm",
                "Avoid clutter and sharp objects",
                "Good for quick entries and exits"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Entryway in South-West - Critical",
            suggestions: [
                "Highly inauspicious for entrance area",
                "Can block positive energy entry",
                "Shift entryway if possible to North or East",
                "Use very bright lighting and mirrors",
                "Keep area extremely clean and minimal",
                "Consult Vastu expert for corrections"
            ]
        });
    }
    
    remedies.push({
        title: "General Mud Room Vastu Tips",
        suggestions: [
            "Keep entryway clean, bright and clutter-free",
            "Place welcome mat outside the entrance",
            "Use auspicious symbols near entrance",
            "Ensure door opens fully without obstructions",
            "Keep shoe storage organized and clean",
            "Maintain good lighting and ventilation"
        ]
    });
}
    
    //Sun Room
    
    else if (lowerName.includes('sun room') || lowerName.includes('solarium') || 
         lowerName.includes('sun porch') || lowerName.includes('surya kaksh')) {
    
    if (dirLower === 'east') {
        remedies.push({
            title: "Sun Room in East Direction - Ideal Placement",
            suggestions: [
                "Perfect direction for sun room/solarium",
                "Maximizes morning sunlight and positive energy",
                "Use large windows facing East for sunrise views",
                "Place seating facing East for morning meditation",
                "Use light colors that reflect sunlight beautifully",
                "Ideal for plants that thrive in morning light"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Solarium in North Direction",
            suggestions: [
                "Excellent for consistent natural light",
                "Provides soft, diffused lighting throughout day",
                "Use energy-efficient glass for temperature control",
                "Place water feature in North-East corner",
                "Ideal for reading and relaxation activities",
                "Good for plants requiring indirect sunlight"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Sun Room in North-East - Ideal",
            suggestions: [
                "Best for spiritual and healing sunlight",
                "Perfect for morning yoga and meditation",
                "Keep area absolutely clean and sacred",
                "Use pure white or light yellow colors",
                "Place sacred plants like Tulsi in this area",
                "Ideal for positive energy accumulation"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Sun Porch in South-East Direction",
            suggestions: [
                "Good for winter sun exposure",
                "Provides warmth during colder months",
                "Install proper ventilation for summer heat",
                "Use heat-resistant plants and materials",
                "Ideal for drying herbs and medicinal plants",
                "Good for solar energy utilization"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Sun Room in West Direction",
            suggestions: [
                "Excellent for evening sunset views",
                "Promotes relaxation and evening tranquility",
                "Use UV-protected glass for afternoon sun",
                "Install adjustable blinds for light control",
                "Ideal for evening tea and family time",
                "Good for sunset meditation"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Solarium in South Direction",
            suggestions: [
                "Provides maximum sunlight exposure",
                "Can become excessively hot in summer",
                "Install proper cooling and shading systems",
                "Use heat-reflective materials and colors",
                "Ideal for winter gardening and warmth",
                "Good for solar heating benefits"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Sun Porch in North-West Direction",
            suggestions: [
                "Good for afternoon and evening light",
                "Promotes social gatherings and conversations",
                "Use comfortable seating for guests",
                "Install proper wind protection",
                "Ideal for evening relaxation with family",
                "Good for seasonal plants"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Sun Room in South-West - Critical",
            suggestions: [
                "Not ideal for sun room placement",
                "Can cause overheating and energy imbalance",
                "Install advanced cooling and ventilation",
                "Use light-reflecting colors and materials",
                "Limit usage during peak afternoon hours",
                "Better suited for shaded outdoor area"
            ]
        });
    }
    
    remedies.push({
        title: "General Sun Room Vastu Tips",
        suggestions: [
            "Maximize natural light while controlling temperature",
            "Use energy-efficient glass and insulation",
            "Place plants according to their sunlight needs",
            "Ensure proper ventilation and air circulation",
            "Use light colors to enhance natural brightness",
            "Create comfortable seating for relaxation"
        ]
    });
}
    
    
    
    //Bar
else if (lowerName.includes('wine cellar') || lowerName.includes('bar') || 
         lowerName.includes('wine storage') || lowerName.includes('madira griha')) {
    
    if (dirLower === 'southwest') {
        remedies.push({
            title: "Wine Cellar in South-West - Ideal Placement",
            suggestions: [
                "Perfect direction for wine storage and aging",
                "Provides stable temperature and darkness",
                "Place wine racks against South or West walls",
                "Use dark colors like brown, black or deep red",
                "Maintain consistent cool temperature",
                "Ideal for long-term wine preservation"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Wine Cellar in South Direction",
            suggestions: [
                "Excellent for wine storage stability",
                "Provides natural insulation and darkness",
                "Place racks against South wall facing North",
                "Use warm, dark colors for ambiance",
                "Ensure proper humidity control",
                "Ideal for red wine aging"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Bar Area in West Direction",
            suggestions: [
                "Good for evening entertainment bar",
                "Promotes social gatherings and relaxation",
                "Place bar counter facing East or North",
                "Use metallic accents and warm lighting",
                "Keep area well-ventilated and organized",
                "Ideal for cocktail preparation"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Bar in North-West Direction",
            suggestions: [
                "Suitable for social drinking area",
                "Promotes conversation and networking",
                "Place bar in North-West corner",
                "Use light colors with good lighting",
                "Keep area clean and well-maintained",
                "Ideal for guest entertainment"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Wine Storage in South-East Direction",
            suggestions: [
                "Fire element may affect wine quality",
                "Requires extra temperature control",
                "Install advanced cooling systems",
                "Use insulating materials extensively",
                "Avoid direct heat exposure",
                "Monitor wine condition regularly"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Wine Cellar in North Direction",
            suggestions: [
                "Not ideal - can affect wine preservation",
                "Requires excellent insulation",
                "Place in North-West corner if unavoidable",
                "Use temperature-controlled storage",
                "Monitor humidity levels carefully",
                "Avoid frequent temperature fluctuations"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Bar Area in East Direction",
            suggestions: [
                "Not suitable for morning alcohol consumption",
                "Better for non-alcoholic beverage station",
                "Place in North-East corner if unavoidable",
                "Use very light colors and minimal decor",
                "Keep area extremely clean and organized",
                "Avoid prominent display of alcohol"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Wine Cellar in North-East - Most Critical",
            suggestions: [
                "Extremely harmful for alcohol storage",
                "Can cause health and spiritual issues",
                "Shift wine cellar immediately if possible",
                "If unavoidable, keep very small and discreet",
                "Use white colors and maximum cleanliness",
                "Consult Vastu expert for corrections"
            ]
        });
    }
    
    remedies.push({
        title: "General Wine Cellar/Bar Vastu Tips",
        suggestions: [
            "Maintain consistent temperature and humidity",
            "Store wine bottles horizontally for cork moisture",
            "Keep area dark to prevent light damage",
            "Use proper ventilation to prevent musty odors",
            "Organize wines by type and aging potential",
            "Ensure proper insulation and climate control"
        ]
    });
}
    
    //Art Room
else if (lowerName.includes('art studio') || lowerName.includes('craft room') || 
         lowerName.includes('hobby room') || lowerName.includes('kala kaksh')) {
    
    if (dirLower === 'north') {
        remedies.push({
            title: "Art Studio in North Direction - Ideal Placement",
            suggestions: [
                "Perfect direction for creative endeavors",
                "Enhances imagination and artistic flow",
                "Place easel facing North or East for optimal light",
                "Use inspiring colors like blue, white or silver",
                "Keep North-East corner clean for positive energy",
                "Ideal for painting, sketching and creative work"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Art Studio in East Direction",
            suggestions: [
                "Excellent for morning creativity sessions",
                "Promotes new ideas and inspiration",
                "Utilize natural morning light for accurate colors",
                "Use bright, energizing colors in decor",
                "Keep windows clean for maximum sunlight",
                "Ideal for watercolor and light-based arts"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Craft Room in North-East - Ideal",
            suggestions: [
                "Best for spiritual and meaningful crafts",
                "Enhances precision and attention to detail",
                "Keep area absolutely clean and organized",
                "Use pure white or light yellow colors",
                "Place worktable facing East for concentration",
                "Ideal for intricate work like jewelry making"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Hobby Room in West Direction",
            suggestions: [
                "Good for evening creative sessions",
                "Promotes relaxation and enjoyment in crafts",
                "Place work area facing East or North",
                "Use warm lighting for accurate color perception",
                "Ideal for pottery, woodworking and crafts",
                "Good for creative expression after work"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Art Studio in North-West Direction",
            suggestions: [
                "Excellent for collaborative art projects",
                "Promotes sharing ideas and techniques",
                "Use organized storage for art supplies",
                "Keep area well-ventilated for fumes",
                "Ideal for group workshops and classes",
                "Good for teaching and learning arts"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Craft Room in South-East Direction",
            suggestions: [
                "Fire element supports passionate creativity",
                "Good for energetic art forms",
                "Place kiln or heating tools in South-East corner",
                "Use proper ventilation for safety",
                "Ideal for glass blowing, metal work",
                "Keep fire safety equipment handy"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Hobby Room in South Direction",
            suggestions: [
                "Can support heavy craft equipment",
                "Good for sculpting and heavy work",
                "Place heavy tools against South wall",
                "Use bright lighting for detailed work",
                "Ideal for pottery wheel, large canvases",
                "Ensure proper workspace organization"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Art Studio in South-West - Critical",
            suggestions: [
                "Not ideal for creative energy flow",
                "Can cause creative blocks and stagnation",
                "Place work area in North-East corner if unavoidable",
                "Use very bright lighting and inspiring colors",
                "Keep area extremely clean and minimal",
                "Better suited for storage of finished works"
            ]
        });
    }
    
    remedies.push({
        title: "General Art Studio Vastu Tips",
        suggestions: [
            "Face North or East while creating art for best energy",
            "Keep studio well-lit with natural light when possible",
            "Organize supplies systematically for easy access",
            "Ensure proper ventilation for paints and chemicals",
            "Keep creative space clean and inspiring",
            "Display finished artworks on South or West walls"
        ]
    });
}
    
    //Dance Room
else if (lowerName.includes('music room') || lowerName.includes('dance room') || 
         lowerName.includes('sangeet kaksh') || lowerName.includes('nritya kaksh')) {
    
    if (dirLower === 'west') {
        remedies.push({
            title: "Music Room in West Direction - Ideal Placement",
            suggestions: [
                "Perfect direction for musical activities",
                "Enhances creativity and artistic expression",
                "Place instruments facing East or North",
                "Use acoustically treated walls for sound quality",
                "Install mirrors on North wall for dance practice",
                "Ideal for evening practice sessions"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Music Room in North-West Direction",
            suggestions: [
                "Excellent for group music sessions",
                "Promotes harmony and collaboration",
                "Place instruments in circle formation",
                "Use sound-absorbing materials for acoustics",
                "Ideal for band practice and ensemble work",
                "Good for recording and mixing"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Dance Room in North Direction",
            suggestions: [
                "Perfect for dance practice and movement",
                "Enhances grace and fluidity in dance",
                "Place mirrors on North or East walls",
                "Use smooth flooring for easy movement",
                "Ensure proper lighting for practice",
                "Ideal for classical and contemporary dance"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Music Room in East Direction",
            suggestions: [
                "Good for morning practice and vocal training",
                "Promotes clarity in voice and sound",
                "Utilize natural morning light for energy",
                "Place instruments facing East for optimal resonance",
                "Ideal for meditation music and chanting",
                "Good for beginner practice sessions"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Dance Room in South-East Direction",
            suggestions: [
                "Fire element supports energetic dance forms",
                "Good for high-energy and expressive dance",
                "Place sound system in South-East corner",
                "Use proper ventilation for active sessions",
                "Ideal for aerobic dance and Zumba",
                "Keep area well-lit and energizing"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Music Room in South Direction",
            suggestions: [
                "Can support powerful sound systems",
                "Good for percussion and rhythm instruments",
                "Place heavy instruments against South wall",
                "Use acoustic treatment for sound control",
                "Ideal for drum practice and loud instruments",
                "Ensure proper soundproofing"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Music Room in North-East - Ideal for Spiritual Music",
            suggestions: [
                "Perfect for meditation music and chanting",
                "Enhances spiritual connection through sound",
                "Keep area absolutely clean and sacred",
                "Use traditional instruments facing East",
                "Ideal for bhajans, kirtans and classical music",
                "Place instruments with respect and care"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Dance Room in South-West - Critical",
            suggestions: [
                "Not ideal for dance and movement",
                "Can cause stiffness and lack of flow",
                "Place practice area in North if unavoidable",
                "Use very bright lighting and mirrors",
                "Keep area energetic and inspiring",
                "Better suited for music theory study"
            ]
        });
    }
    
    remedies.push({
        title: "General Music/Dance Room Vastu Tips",
        suggestions: [
            "Face East or North while practicing for best energy",
            "Ensure proper acoustics and sound treatment",
            "Keep instruments clean and well-maintained",
            "Use mirrors on North or East walls for dance",
            "Maintain good ventilation and air quality",
            "Create inspiring and creative atmosphere"
        ]
    });
}
    
    //Game Room
else if (lowerName.includes('game room') || lowerName.includes('billiards room') || 
         lowerName.includes('indoor games') || lowerName.includes('antar griha khel')) {
    
    if (dirLower === 'northwest') {
        remedies.push({
            title: "Game Room in North-West - Ideal Placement",
            suggestions: [
                "Perfect direction for indoor games and recreation",
                "Promotes friendly competition and social interaction",
                "Place game tables in center or North-West corner",
                "Use energetic colors like green, blue or red",
                "Keep area well-lit and ventilated for long sessions",
                "Ideal for billiards, table tennis and group games"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Game Room in West Direction",
            suggestions: [
                "Excellent for evening entertainment and games",
                "Promotes relaxation and stress relief through play",
                "Place gaming equipment facing East or North",
                "Use warm lighting for comfortable gameplay",
                "Ideal for video games, card games and family fun",
                "Good for post-dinner recreational activities"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Billiards Room in South-East Direction",
            suggestions: [
                "Fire element supports competitive energy",
                "Good for high-energy games and tournaments",
                "Place billiards table in South-East corner",
                "Use proper lighting above game tables",
                "Ideal for competitive games and challenges",
                "Keep area well-ventilated during intense games"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Game Room in South Direction",
            suggestions: [
                "Can support heavy game equipment",
                "Good for strategic and board games",
                "Place heavy game tables against South wall",
                "Use bright lighting for clear visibility",
                "Ideal for chess, carrom and puzzle games",
                "Ensure comfortable seating for long sessions"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Indoor Games Room in North Direction",
            suggestions: [
                "Good for intellectual and strategy games",
                "Promotes mental sharpness and concentration",
                "Place game tables facing North or East",
                "Use cool colors like blue or green for focus",
                "Ideal for chess, puzzles and brain games",
                "Keep area organized and clutter-free"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Game Room in East Direction",
            suggestions: [
                "Good for morning mental games",
                "Promotes alertness and quick thinking",
                "Utilize natural morning light for board games",
                "Place gaming area in North-East corner",
                "Ideal for family games on weekends",
                "Keep area bright and cheerful"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Game Room in South-West - Critical",
            suggestions: [
                "Not ideal for recreational activities",
                "Can cause excessive competitiveness or arguments",
                "Place games in North-West corner if unavoidable",
                "Use light colors and bright lighting",
                "Keep gameplay friendly and time-limited",
                "Better suited for quiet activities"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Game Room in North-East - Most Critical",
            suggestions: [
                "Extremely harmful for game room placement",
                "Can affect concentration and cause distractions",
                "Shift game room immediately if possible",
                "If unavoidable, use for light puzzles only",
                "Keep area extremely clean and minimal",
                "Consult Vastu expert for corrections"
            ]
        });
    }
    
    remedies.push({
        title: "General Game Room Vastu Tips",
        suggestions: [
            "Keep game room well-lit and ventilated",
            "Organize games and equipment systematically",
            "Ensure comfortable seating and playing space",
            "Maintain friendly and positive gaming atmosphere",
            "Keep area clean and free from clutter",
            "Balance competitive games with cooperative ones"
        ]
    });
}
    
    
    //Library
    else if (lowerName.includes('library') || lowerName.includes('study') || 
         lowerName.includes('reading nook') || lowerName.includes('pustakalay')) {
    
    if (dirLower === 'northeast') {
        remedies.push({
            title: "Library in North-East - Ideal Placement",
            suggestions: [
                "Perfect direction for knowledge and learning",
                "Enhances concentration and intellectual growth",
                "Place study table in North-East corner facing East",
                "Use light colors like white, light yellow or light blue",
                "Keep this area absolutely clean and clutter-free",
                "Ideal for serious study and research work"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Library in East Direction",
            suggestions: [
                "Excellent for morning study sessions",
                "Promotes mental clarity and fresh ideas",
                "Utilize natural morning light for reading",
                "Place bookshelves on South or West walls",
                "Keep windows clean for maximum sunlight",
                "Ideal for students and competitive exams"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Study Room in North Direction",
            suggestions: [
                "Good for academic and career growth",
                "Promotes wisdom and knowledge acquisition",
                "Place study table facing North or East",
                "Use blue, green or white colors for walls",
                "Keep North-East corner open and clean",
                "Ideal for professional studies and research"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Reading Nook in West Direction",
            suggestions: [
                "Good for evening reading and relaxation",
                "Promotes creative thinking and imagination",
                "Place comfortable seating facing East or North",
                "Use warm lighting for evening reading",
                "Ideal for leisure reading and novels",
                "Good for sunset reading sessions"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Library in North-West Direction",
            suggestions: [
                "Good for reference books and periodicals",
                "Promotes communication and networking knowledge",
                "Place bookshelves in organized manner",
                "Use light colors with good lighting",
                "Keep area well-ventilated and dry",
                "Ideal for magazines and current affairs"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Study in South Direction",
            suggestions: [
                "Can cause lack of concentration",
                "Place study table in North-East corner facing North",
                "Use light colors like white or light green",
                "Ensure bright lighting to counter heaviness",
                "Keep South wall heavier than North wall",
                "Avoid dense theoretical subjects here"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Library in South-East Direction",
            suggestions: [
                "Fire element may cause restlessness",
                "Can affect focus and comprehension",
                "Place study area in North-East corner",
                "Use cooling colors like blue or white",
                "Keep electronic devices organized",
                "Better for quick reference than deep study"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Library in South-West - Critical",
            suggestions: [
                "Least recommended direction for study",
                "Can cause mental stress and obstacles",
                "Shift study area if possible to North-East",
                "Use very light colors and bright lighting",
                "Keep room extremely organized and minimal",
                "Better suited for storage of old books"
            ]
        });
    }
    
    remedies.push({
        title: "General Library Vastu Tips",
        suggestions: [
            "Face East or North while studying/reading",
            "Place bookshelves on South or West walls",
            "Ensure proper lighting without shadows",
            "Keep study area clean and organized",
            "No mirrors reflecting study table",
            "Maintain quiet and peaceful atmosphere"
        ]
    });
}
    
    //Office
else if (lowerName.includes('office') || lowerName.includes('work from home') || 
         lowerName.includes('corner office') || lowerName.includes('karyalay')) {
    
    if (dirLower === 'north') {
        remedies.push({
            title: "Office in North Direction - Ideal Placement",
            suggestions: [
                "Perfect direction for career growth and opportunities",
                "Enhances professional success and financial gains",
                "Place desk facing North or East for optimal energy flow",
                "Use blue, green or white colors for productivity",
                "Keep North-East corner clean and open for positive energy",
                "Ideal for business meetings and client interactions"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Office in North-East - Ideal for Leadership",
            suggestions: [
                "Best direction for executive and leadership roles",
                "Promotes clear thinking and strategic decision making",
                "Place desk facing North or East in North-East corner",
                "Use light colors like white, light yellow or light blue",
                "Keep area absolutely clean and minimal for focus",
                "Ideal for CEOs, managers and decision-makers"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Office in East Direction",
            suggestions: [
                "Excellent for morning productivity and new ventures",
                "Promotes innovation and fresh ideas",
                "Utilize natural morning light for energy and focus",
                "Place desk facing East for maximum concentration",
                "Ideal for creative professionals and startups",
                "Good for team collaborations and brainstorming"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Office in North-West Direction",
            suggestions: [
                "Good for networking and communication-based work",
                "Promotes client relationships and business travel",
                "Place desk facing North or East for better focus",
                "Use light colors with metallic accents",
                "Ideal for sales, marketing and PR professionals",
                "Good for video conferences and virtual meetings"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Work from Home Office in West Direction",
            suggestions: [
                "Good for evening work and creative professions",
                "Promotes stability and completion of projects",
                "Place desk facing East for better concentration",
                "Use warm lighting for comfortable working environment",
                "Ideal for writers, designers and artists",
                "Good for international clients in different time zones"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Office in South Direction",
            suggestions: [
                "Can provide stability for established businesses",
                "Place desk facing North for better energy flow",
                "Use bright lighting to counter heaviness",
                "Keep South wall solid with heavy furniture",
                "Ideal for accounting and financial work",
                "Ensure proper chair support for long hours"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Office in South-East Direction",
            suggestions: [
                "Fire element supports technology and energy work",
                "Good for IT professionals and technical work",
                "Place computer equipment in South-East corner",
                "Use cooling colors to balance fire energy",
                "Ideal for software developers and engineers",
                "Keep area well-ventilated for electronic devices"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Office in South-West - Critical",
            suggestions: [
                "Not ideal for work office - can cause career obstacles",
                "Better suited for storage or resting area",
                "Place desk in North-East corner if unavoidable",
                "Use very bright lighting and light colors",
                "Keep work sessions short and focused",
                "Consult Vastu expert for major corrections"
            ]
        });
    }
    
    remedies.push({
        title: "General Office Vastu Tips",
        suggestions: [
            "Sit facing North or East for optimal concentration",
            "Place computer in South-East corner of desk",
            "Keep desk clean and organized daily",
            "Ensure proper chair support and ergonomics",
            "Use green plants for fresh energy and air purification",
            "Maintain good lighting without glare on screen"
        ]
    });
}
    
    
    //waiting Room
else if (lowerName.includes('waiting room') || lowerName.includes('reception area') || 
         lowerName.includes('pratiksha kaksh') || lowerName.includes('waiting area')) {
    
    if (dirLower === 'northwest') {
        remedies.push({
            title: "Waiting Room in North-West - Ideal Placement",
            suggestions: [
                "Perfect direction for reception and waiting areas",
                "Promotes positive first impressions and client comfort",
                "Place seating facing North or East for visitor comfort",
                "Use light, welcoming colors like white, blue or green",
                "Keep area well-lit, ventilated and clutter-free",
                "Ideal for making visitors feel comfortable and valued"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Reception Area in North Direction",
            suggestions: [
                "Excellent for welcoming wealth and opportunities",
                "Creates positive business energy and prosperity",
                "Place reception desk facing North or East",
                "Use prosperous colors like blue, green or silver",
                "Keep North-East corner absolutely clean and open",
                "Ideal for financial institutions and corporate offices"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Waiting Room in East Direction",
            suggestions: [
                "Good for morning business and positive energy flow",
                "Promotes health and vitality for visitors and staff",
                "Utilize natural morning light for welcoming atmosphere",
                "Place seating facing East for optimal comfort",
                "Use bright, cheerful colors for positive vibes",
                "Ideal for healthcare facilities and service businesses"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Reception Area in West Direction",
            suggestions: [
                "Good for evening appointments and creative businesses",
                "Promotes relaxation and comfort for waiting visitors",
                "Place reception desk facing East for better energy",
                "Use warm lighting for comfortable atmosphere",
                "Ideal for design studios and artistic businesses",
                "Good for businesses with afternoon client traffic"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Waiting Room in South-East Direction",
            suggestions: [
                "Fire element may cause impatience or restlessness",
                "Can lead to shorter waiting tolerance",
                "Place water feature or calming elements in North-East",
                "Use cooling colors like blue or green",
                "Provide comfortable seating and distractions",
                "Good for quick-service businesses"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Reception Area in South Direction",
            suggestions: [
                "Can create formal or serious atmosphere",
                "May cause visitors to feel less comfortable",
                "Place seating facing North for better energy flow",
                "Use light colors and bright lighting to balance",
                "Provide reading materials and amenities",
                "Ideal for legal or government offices"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Waiting Room in South-West - Critical",
            suggestions: [
                "Not ideal for reception areas - can create discomfort",
                "May cause visitors to feel uneasy or impatient",
                "Place reception in North-West corner if unavoidable",
                "Use very bright lighting and welcoming colors",
                "Keep area extremely clean and comfortable",
                "Provide excellent customer service to compensate"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Reception Area in North-East - Most Critical",
            suggestions: [
                "Extremely harmful for waiting areas",
                "Can negatively impact business reputation and client flow",
                "Shift reception area immediately if possible",
                "If unavoidable, keep very minimal and clean",
                "Use white colors and maximum cleanliness",
                "Consult Vastu expert for urgent corrections"
            ]
        });
    }
    
    remedies.push({
        title: "General Waiting Room Vastu Tips",
        suggestions: [
            "Keep seating comfortable and facing North or East",
            "Maintain clean, clutter-free and well-ventilated space",
            "Use soothing colors and good lighting for positive atmosphere",
            "Provide reading materials, water and amenities for comfort",
            "Ensure reception desk is easily accessible and welcoming",
            "Keep area noise-controlled and professionally maintained"
        ]
    });
}
    
    //security room
    else if (lowerName.includes('panic room') || lowerName.includes('safe room') || 
         lowerName.includes('security room') || lowerName.includes('suraksha kaksh')) {
    
    if (dirLower === 'southwest') {
        remedies.push({
            title: "Safe Room in South-West - Ideal Placement",
            suggestions: [
                "Perfect direction for security and protection",
                "Provides maximum stability and safety",
                "Place security equipment in South-West corner",
                "Use strong, solid construction materials",
                "Keep entrance concealed but easily accessible",
                "Ideal for emergency shelter and protection"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Panic Room in South Direction",
            suggestions: [
                "Excellent for security and stability",
                "Provides strong protective energy",
                "Place emergency supplies against South wall",
                "Use reinforced walls and secure entry",
                "Keep communication devices fully charged",
                "Ideal for long-term safety and protection"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Security Room in West Direction",
            suggestions: [
                "Good for monitoring and surveillance",
                "Provides good protective coverage",
                "Place security monitors facing East",
                "Use metal reinforcements for strength",
                "Keep emergency exits well-planned",
                "Ideal for security control rooms"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Safe Room in North-West Direction",
            suggestions: [
                "Suitable for quick access and escape routes",
                "Provides good ventilation and air supply",
                "Place emergency kits in organized manner",
                "Use secure but accessible entry points",
                "Keep communication systems operational",
                "Ideal for family security rooms"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Panic Room in South-East Direction",
            suggestions: [
                "Fire element may cause emergency situations",
                "Requires extra fire safety precautions",
                "Install advanced fire suppression systems",
                "Use fire-resistant materials extensively",
                "Keep emergency oxygen supply available",
                "Good for quick response security rooms"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Security Room in North Direction",
            suggestions: [
                "Not ideal for security purposes",
                "Can compromise safety effectiveness",
                "Place in South-West corner if unavoidable",
                "Use reinforced security measures",
                "Install multiple backup systems",
                "Keep emergency protocols clearly defined"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Safe Room in East Direction",
            suggestions: [
                "Vulnerable placement for security",
                "Can expose safety weaknesses",
                "Use maximum security reinforcements",
                "Install hidden entry mechanisms",
                "Keep location absolutely confidential",
                "Regular security drills recommended"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Panic Room in North-East - Most Critical",
            suggestions: [
                "Extremely vulnerable placement for security",
                "Can compromise entire safety system",
                "Shift security room immediately if possible",
                "If unavoidable, use maximum security measures",
                "Install multiple backup security systems",
                "Consult security expert for urgent relocation"
            ]
        });
    }
    
    remedies.push({
        title: "General Safe Room Vastu Tips",
        suggestions: [
            "Keep location confidential and access controlled",
            "Maintain emergency supplies and communication devices",
            "Ensure proper ventilation and air supply systems",
            "Install reinforced doors and security mechanisms",
            "Regularly test all security and communication systems",
            "Have clear emergency protocols and escape routes"
        ]
    });
}
    
    
    //Green House
    else if (lowerName.includes('green house') || lowerName.includes('plant room') || 
         lowerName.includes('nursery garden') || lowerName.includes('paudha griha')) {
    
    if (dirLower === 'east') {
        remedies.push({
            title: "Green House in East Direction - Ideal Placement",
            suggestions: [
                "Perfect direction for plant growth and vitality",
                "Maximizes morning sunlight for optimal photosynthesis",
                "Place tall plants on West side, shorter on East side",
                "Use transparent materials for maximum light penetration",
                "Ensure proper ventilation and humidity control",
                "Ideal for flowering plants and vegetable gardening"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Plant Room in North Direction",
            suggestions: [
                "Excellent for consistent, gentle light exposure",
                "Promotes healthy growth without scorching",
                "Place water-loving plants in North-East corner",
                "Use reflective surfaces to enhance light distribution",
                "Maintain optimal temperature and humidity levels",
                "Ideal for ferns, mosses and shade-loving plants"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Green House in North-East - Ideal for Medicinal Plants",
            suggestions: [
                "Best for spiritual and healing plants",
                "Enhances medicinal properties of herbs",
                "Place Tulsi, aloe vera and medicinal herbs here",
                "Keep area absolutely clean and well-maintained",
                "Use natural watering and organic fertilizers",
                "Ideal for Ayurvedic and therapeutic plants"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Plant Room in South-East Direction",
            suggestions: [
                "Good for heat-loving plants and succulents",
                "Fire element supports vibrant flowering",
                "Place cacti, succulents and tropical plants here",
                "Install proper shading for intense afternoon heat",
                "Ensure excellent ventilation system",
                "Ideal for desert plants and winter protection"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Green House in West Direction",
            suggestions: [
                "Good for afternoon sun exposure",
                "Promotes strong stem growth and durability",
                "Place plants that tolerate evening sun",
                "Use UV-protected glass for intense afternoon light",
                "Ideal for plants requiring warm temperatures",
                "Good for extending growing season"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Nursery Garden in South Direction",
            suggestions: [
                "Provides maximum sunlight for full-sun plants",
                "Can become excessively hot in summer months",
                "Install automatic shading and cooling systems",
                "Place heat-tolerant plants in South section",
                "Use thermal mass for temperature regulation",
                "Ideal for Mediterranean plants and herbs"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Plant Room in North-West Direction",
            suggestions: [
                "Good for air circulation and pollination",
                "Promotes healthy pest control naturally",
                "Place plants that benefit from good airflow",
                "Install proper wind protection measures",
                "Ideal for plants requiring cross-pollination",
                "Good for seasonal plant starting"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Green House in South-West - Critical",
            suggestions: [
                "Not ideal for plant growth energy",
                "Can cause stagnant growth and plant diseases",
                "Install advanced ventilation and air circulation",
                "Use very bright artificial lighting if necessary",
                "Keep area extremely clean and well-maintained",
                "Better suited for garden tool storage"
            ]
        });
    }
    
    remedies.push({
        title: "General Green House Vastu Tips",
        suggestions: [
            "Ensure proper sunlight exposure according to plant needs",
            "Maintain optimal temperature and humidity levels",
            "Use organic fertilizers and natural pest control methods",
            "Arrange plants by height - taller plants towards North/West",
            "Ensure good air circulation and ventilation",
            "Keep water source in North-East for healthy plant growth"
        ]
    });
}
    
    //Beam
else if (lowerName.includes('columns') || lowerName.includes('pillars') || 
         lowerName.includes('beams') || lowerName.includes('structural support') || 
         lowerName.includes('stambh')) {
    
    if (dirLower === 'southwest') {
        remedies.push({
            title: "Pillars in South-West - Ideal Placement",
            suggestions: [
                "Perfect direction for structural supports",
                "Provides maximum stability and strength to building",
                "Keep pillars strong, solid and well-maintained",
                "Use square or rectangular shape for optimal support",
                "Ensure pillars are perfectly vertical and balanced",
                "Ideal for main load-bearing structural elements"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Columns in South Direction",
            suggestions: [
                "Excellent for supporting building structure",
                "Provides strong foundation and stability",
                "Place columns symmetrically for balanced support",
                "Use durable materials like concrete or stone",
                "Ensure proper foundation depth and strength",
                "Ideal for earthquake-resistant construction"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Pillars in West Direction",
            suggestions: [
                "Good for structural support and stability",
                "Provides reliable load-bearing capacity",
                "Place columns in straight alignment",
                "Use quality construction materials",
                "Ensure proper integration with walls",
                "Ideal for multi-story building support"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Columns in North-West Direction",
            suggestions: [
                "Acceptable for secondary structural supports",
                "Provides adequate stability for extensions",
                "Keep pillars slender and well-proportioned",
                "Use metal or composite materials if needed",
                "Ensure they don't obstruct movement flow",
                "Ideal for balcony and veranda supports"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Pillars in South-East Direction",
            suggestions: [
                "Fire element may cause structural stress over time",
                "Requires extra reinforcement and maintenance",
                "Use fire-resistant materials and coatings",
                "Regular inspection for cracks or damage",
                "Ensure proper electrical wiring safety",
                "Good for supporting kitchen extensions"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Columns in North Direction",
            suggestions: [
                "Can block wealth energy if improperly placed",
                "Keep pillars minimal and slender in North",
                "Avoid placing in North-East corner at all costs",
                "Use light colors to reduce visual impact",
                "Ensure they don't obstruct positive energy flow",
                "Ideal for decorative rather than load-bearing"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Pillars in East Direction",
            suggestions: [
                "Blocks morning positive energy if poorly placed",
                "Can affect health and prosperity of residents",
                "Keep pillars very slender and minimal in East",
                "Use transparent or reflective materials if possible",
                "Avoid placing in North-East corner absolutely",
                "Better to use beam support instead of pillars"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Columns in North-East - Most Critical",
            suggestions: [
                "Extremely harmful for structural elements",
                "Can cause major health and financial problems",
                "Avoid pillars in North-East corner completely",
                "If unavoidable, make them very slender and minimal",
                "Use glass or transparent materials as remedy",
                "Consult structural engineer and Vastu expert"
            ]
        });
    }
    
    remedies.push({
        title: "General Structural Support Vastu Tips",
        suggestions: [
            "Avoid beams over beds, seating areas or workstations",
            "Keep North-East corner absolutely free of pillars",
            "Use square or rectangular pillars instead of circular",
            "Ensure pillars are perfectly vertical and symmetrical",
            "Paint beams and pillars in light, soothing colors",
            "Regularly inspect for structural integrity and repairs"
        ]
    });
}
    
    //sweeming Pool
    else if (lowerName.includes('swimming pool') || lowerName.includes('pool') || 
         lowerName.includes('talarav') || lowerName.includes('swimming area')) {
    
    if (dirLower === 'north') {
        remedies.push({
            title: "Swimming Pool in North Direction - Ideal Placement",
            suggestions: [
                "Perfect direction for water elements and swimming pools",
                "Enhances wealth, prosperity and positive energy flow",
                "Place pool in North-East part of North direction",
                "Use blue tiles or natural stone for aesthetics",
                "Ensure proper water circulation and filtration",
                "Ideal for family recreation and health benefits"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Pool in East Direction",
            suggestions: [
                "Excellent for morning swimming and exercise",
                "Promotes health, vitality and positive energy",
                "Place pool in North-East corner of East direction",
                "Use light-colored tiles to reflect morning light",
                "Keep area clean and well-maintained",
                "Ideal for sunrise swimming and aquatic exercises"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Swimming Pool in North-East - Ideal",
            suggestions: [
                "Best direction for spiritual and healing water elements",
                "Enhances positive energy and divine blessings",
                "Keep pool absolutely clean and well-maintained",
                "Use natural materials and pure white or blue colors",
                "Ensure water is always fresh and circulating",
                "Ideal for meditation and therapeutic swimming"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Pool in North-West Direction",
            suggestions: [
                "Good for social swimming and entertainment",
                "Promotes guest interactions and family fun",
                "Place pool in proper enclosure for wind protection",
                "Use safe, non-slip materials around pool area",
                "Ensure proper safety measures and supervision",
                "Ideal for parties and social gatherings"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Swimming Pool in West Direction",
            suggestions: [
                "Good for evening relaxation and sunset swimming",
                "Promotes creativity and stress relief",
                "Place pool in South-West part of West direction",
                "Use warm lighting for evening ambiance",
                "Ensure proper heating for comfortable swimming",
                "Ideal for post-work relaxation and family time"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Pool in South-East Direction",
            suggestions: [
                "Fire and water element conflict requires balance",
                "Can cause energy imbalance if not managed properly",
                "Place pool in North-East corner if unavoidable",
                "Use proper filtration and water treatment systems",
                "Install safety equipment and fire precautions",
                "Good for heated pools and spa features"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Swimming Pool in South Direction",
            suggestions: [
                "Not ideal for water elements",
                "Can affect reputation and stability",
                "Place pool in South-East corner if unavoidable",
                "Use light colors and bright lighting around pool",
                "Ensure excellent maintenance and cleanliness",
                "Avoid placing in direct South-West corner"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Pool in South-West - Most Critical",
            suggestions: [
                "Extremely harmful for swimming pool placement",
                "Can cause serious health and relationship issues",
                "Avoid placing pool in South-West direction completely",
                "If existing, consult expert for relocation or remedies",
                "Use extensive Vastu corrections and balancing elements",
                "Consider converting to garden or solid area instead"
            ]
        });
    }
    
    remedies.push({
        title: "General Swimming Pool Vastu Tips",
        suggestions: [
            "Place pool in North, East or North-East directions ideally",
            "Ensure water is always clean, fresh and well-circulated",
            "Use safe, non-slip materials around pool perimeter",
            "Install proper filtration and water treatment systems",
            "Maintain optimal water temperature for comfort",
            "Ensure safety measures like fences and supervision"
        ]
    });
}
    
   //Outdoor siting
 else if (lowerName.includes('patio') || lowerName.includes('deck') || 
         lowerName.includes('outdoor seating') || lowerName.includes('bahari baithak')) {
    
    if (dirLower === 'north') {
        remedies.push({
            title: "Patio in North Direction - Ideal Placement",
            suggestions: [
                "Perfect direction for outdoor seating and relaxation",
                "Welcomes positive energy and cool breezes",
                "Place seating facing North or East for optimal comfort",
                "Use light colors like white, blue or green for furniture",
                "Add water feature in North-East corner for enhanced energy",
                "Ideal for evening gatherings and family time"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Deck in East Direction",
            suggestions: [
                "Excellent for morning coffee and sunrise views",
                "Promotes health, vitality and fresh beginnings",
                "Place seating facing East to welcome morning sun",
                "Use bright, cheerful colors for morning energy",
                "Install adjustable shading for afternoon comfort",
                "Ideal for breakfast and morning meditation"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Outdoor Seating in North-East - Ideal",
            suggestions: [
                "Best direction for spiritual outdoor activities",
                "Enhances meditation, yoga and peaceful contemplation",
                "Keep area absolutely clean and minimalistic",
                "Use natural materials like stone and wood",
                "Place seating facing East for optimal energy flow",
                "Ideal for morning prayers and quiet reflection"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Patio in North-West Direction",
            suggestions: [
                "Good for social gatherings and guest entertainment",
                "Promotes conversations and networking opportunities",
                "Place comfortable seating for group interactions",
                "Use wind chimes for positive energy circulation",
                "Install proper wind protection measures",
                "Ideal for evening parties and social events"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Deck in West Direction",
            suggestions: [
                "Excellent for sunset viewing and evening relaxation",
                "Promotes creativity and romantic ambiance",
                "Place seating facing West for beautiful sunset views",
                "Use warm lighting for evening atmosphere",
                "Install comfortable seating for prolonged enjoyment",
                "Ideal for dinner parties and evening tea"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Outdoor Seating in South-East Direction",
            suggestions: [
                "Fire element supports energetic outdoor activities",
                "Good for barbecue and outdoor cooking areas",
                "Place grill or fire pit in South-East corner",
                "Use proper safety measures for fire elements",
                "Install shading for hot afternoon sun",
                "Ideal for active gatherings and celebrations"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Patio in South Direction",
            suggestions: [
                "Can provide warmth during winter months",
                "Good for sunbathing and winter relaxation",
                "Install adjustable awnings for summer shade",
                "Use heat-resistant materials and furniture",
                "Place seating facing North for better energy flow",
                "Ideal for winter morning activities"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Deck in South-West - Critical",
            suggestions: [
                "Not ideal for leisure and relaxation areas",
                "Can cause heaviness and lack of enjoyment",
                "Place seating in North or East corners if unavoidable",
                "Use light colors and bright lighting",
                "Keep area active with movement and activities",
                "Better suited for solid construction than seating"
            ]
        });
    }
    
    remedies.push({
        title: "General Patio/Deck Vastu Tips",
        suggestions: [
            "Face North or East while seating for optimal energy flow",
            "Use comfortable, weather-resistant furniture",
            "Ensure proper lighting for evening use",
            "Maintain clean and clutter-free outdoor space",
            "Incorporate plants and natural elements for balance",
            "Create different zones for various activities"
        ]
    });
}
    
    //Pargolla
else if (lowerName.includes('gazebo') || lowerName.includes('pergola') || 
         lowerName.includes('shade structure') || lowerName.includes('chhaya griha')) {
    
    if (dirLower === 'north') {
        remedies.push({
            title: "Gazebo in North Direction - Ideal Placement",
            suggestions: [
                "Perfect direction for outdoor shade structures",
                "Enhances relaxation and positive energy flow",
                "Place seating facing North or East for optimal comfort",
                "Use light, airy materials that allow energy circulation",
                "Add climbing plants for natural shade and beauty",
                "Ideal for meditation and quiet contemplation"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Pergola in East Direction",
            suggestions: [
                "Excellent for morning shade and sunrise enjoyment",
                "Promotes health and vitality through morning energy",
                "Design with open structure to allow morning light",
                "Use natural wood materials for harmonious energy",
                "Plant flowering vines for seasonal beauty",
                "Ideal for breakfast and morning gatherings"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Gazebo in North-East - Ideal",
            suggestions: [
                "Best direction for spiritual outdoor structures",
                "Enhances meditation and peaceful activities",
                "Keep structure open and minimalistic",
                "Use pure white or natural wood colors",
                "Place seating facing East for optimal energy",
                "Ideal for yoga, prayer and quiet reflection"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Pergola in North-West Direction",
            suggestions: [
                "Good for social gatherings and entertainment",
                "Promotes conversations and family bonding",
                "Design with comfortable seating arrangements",
                "Use durable materials for wind protection",
                "Install subtle lighting for evening use",
                "Ideal for parties and social events"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Gazebo in West Direction",
            suggestions: [
                "Excellent for sunset viewing and evening relaxation",
                "Provides shade from afternoon sun",
                "Design with open West side for sunset views",
                "Use warm lighting for evening ambiance",
                "Install comfortable seating for prolonged enjoyment",
                "Ideal for romantic dinners and evening tea"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Pergola in South-East Direction",
            suggestions: [
                "Fire element supports energetic outdoor activities",
                "Good for barbecue and dining areas",
                "Place cooking area in South-East corner",
                "Use fire-resistant materials for safety",
                "Install proper ventilation for smoke dispersion",
                "Ideal for outdoor kitchen and dining"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Gazebo in South Direction",
            suggestions: [
                "Provides shade from harsh midday sun",
                "Good for summer relaxation and cooling",
                "Design with solid roof for maximum shade",
                "Use light-reflecting colors to reduce heat",
                "Place seating facing North for better energy",
                "Ideal for summer afternoon retreat"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Pergola in South-West - Critical",
            suggestions: [
                "Not ideal for leisure structures",
                "Can cause heaviness and lack of enjoyment",
                "Place in North or East corners if unavoidable",
                "Use light, open construction materials",
                "Keep area active with movement and activities",
                "Better suited for solid garden sheds"
            ]
        });
    }
    
    remedies.push({
        title: "General Gazebo/Pergola Vastu Tips",
        suggestions: [
            "Face North or East while seating under the structure",
            "Use natural, breathable materials for construction",
            "Ensure proper ventilation and air circulation",
            "Incorporate climbing plants for natural beauty",
            "Maintain clean and well-kept surroundings",
            "Create harmonious blend with garden landscape"
        ]
    });
}
    
    //barbeeque
else if (lowerName.includes('barbecue area') || lowerName.includes('bbq') || 
         lowerName.includes('outdoor kitchen') || lowerName.includes('rasoi bahar')) {
    
    if (dirLower === 'southeast') {
        remedies.push({
            title: "Barbecue Area in South-East - Ideal Placement",
            suggestions: [
                "Perfect direction for outdoor cooking and fire elements",
                "Agneya corner naturally supports fire and cooking energy",
                "Place grill or barbecue in South-East corner facing East",
                "Use fire-resistant materials and proper safety measures",
                "Install ventilation to handle smoke and odors",
                "Ideal for energetic cooking and social gatherings"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "BBQ Area in East Direction",
            suggestions: [
                "Good for morning cooking and breakfast preparations",
                "Promotes healthy cooking and family bonding",
                "Place cooking area in South-East part of East direction",
                "Use light, clean materials for food preparation areas",
                "Ensure proper morning light for food preparation",
                "Ideal for family breakfasts and morning gatherings"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Outdoor Kitchen in South Direction",
            suggestions: [
                "Fire element supports cooking activities",
                "Provides good heat for cooking and baking",
                "Place grill in South-East corner of South area",
                "Use heat-resistant materials and surfaces",
                "Install proper shading for summer cooking",
                "Ideal for traditional cooking methods"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Barbecue Area in North-West Direction",
            suggestions: [
                "Good for social cooking and guest entertainment",
                "Promotes friendly gatherings and conversations",
                "Place cooking area with proper wind protection",
                "Use organized layout for efficient cooking flow",
                "Ensure smoke doesn't blow towards house",
                "Ideal for parties and social events"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "BBQ in West Direction",
            suggestions: [
                "Excellent for evening cooking and sunset dinners",
                "Promotes relaxation and enjoyable meals",
                "Place grill in South-West part of West direction",
                "Use warm lighting for evening ambiance",
                "Install proper lighting for safe evening cooking",
                "Ideal for dinner parties and family meals"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Outdoor Kitchen in South-West - Critical",
            suggestions: [
                "Not ideal for cooking areas - can cause health issues",
                "Better suited for solid structures than fire elements",
                "Place cooking area in South-East corner if unavoidable",
                "Use maximum fire safety precautions",
                "Keep cooking sessions short and well-ventilated",
                "Consult expert for relocation if possible"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Barbecue Area in North Direction",
            suggestions: [
                "Water and fire element conflict - not recommended",
                "Can affect wealth and health energy",
                "Place in North-West corner if unavoidable",
                "Use proper containment for fire safety",
                "Ensure excellent ventilation system",
                "Avoid frequent use in this direction"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "BBQ Area in North-East - Most Critical",
            suggestions: [
                "Extremely harmful for fire and cooking activities",
                "Can cause major health and spiritual issues",
                "Avoid placing barbecue in North-East completely",
                "If existing, shift immediately to South-East",
                "Use extensive Vastu corrections and purification",
                "Consult Vastu expert for urgent remedies"
            ]
        });
    }
    
    remedies.push({
        title: "General Barbecue Area Vastu Tips",
        suggestions: [
            "Place cooking fire in South-East direction ideally",
            "Ensure proper ventilation and smoke management",
            "Use fire-resistant materials and safety equipment",
            "Keep cooking area clean and well-organized",
            "Maintain safe distance from main house structure",
            "Install proper lighting for evening cooking safety"
        ]
    });
}
    
    //Fire Pit
else if (lowerName.includes('fire pit') || lowerName.includes('bonfire area') || 
         lowerName.includes('agni kund') || lowerName.includes('campfire area')) {
    
    if (dirLower === 'southeast') {
        remedies.push({
            title: "Fire Pit in South-East - Ideal Placement",
            suggestions: [
                "Perfect direction for fire elements and rituals",
                "Agneya corner naturally supports fire energy",
                "Place fire pit in South-East corner facing East",
                "Use fire-resistant stones and safety barriers",
                "Ensure proper clearance from flammable materials",
                "Ideal for havan, bonfires and fire ceremonies"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Bonfire Area in South Direction",
            suggestions: [
                "Good for fire activities and warmth",
                "Fire element supports energy and vitality",
                "Place fire pit in South-East part of South area",
                "Use heat-resistant materials for seating",
                "Install wind protection for safety",
                "Ideal for winter gatherings and celebrations"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Fire Pit in East Direction",
            suggestions: [
                "Acceptable for morning fire rituals",
                "Promotes new beginnings and purification",
                "Place in South-East corner of East direction",
                "Use sacred woods for spiritual fires",
                "Ensure smoke doesn't enter living areas",
                "Ideal for sunrise meditation and prayers"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Bonfire Area in North-West Direction",
            suggestions: [
                "Good for social gatherings around fire",
                "Promotes conversations and storytelling",
                "Place with proper wind direction consideration",
                "Use safe distance from main structures",
                "Ensure excellent fire safety measures",
                "Ideal for group activities and camping"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Fire Pit in West Direction",
            suggestions: [
                "Good for evening relaxation and sunset fires",
                "Promotes creativity and romantic ambiance",
                "Place in South-West part of West direction",
                "Use comfortable seating for evening enjoyment",
                "Install proper lighting for safety",
                "Ideal for dinner parties and social events"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Bonfire Area in South-West - Critical",
            suggestions: [
                "Not ideal for fire elements - can cause instability",
                "Better suited for solid structures than fire pits",
                "Place in South-East corner if unavoidable",
                "Use maximum fire containment and safety",
                "Keep fires small and well-controlled",
                "Consult expert for relocation if possible"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Fire Pit in North Direction",
            suggestions: [
                "Water and fire element conflict - not recommended",
                "Can affect wealth and health energy",
                "Place in North-West corner if unavoidable",
                "Use proper fire containment measures",
                "Ensure excellent ventilation and safety",
                "Avoid frequent use in this direction"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Fire Pit in North-East - Most Critical",
            suggestions: [
                "Extremely harmful for fire activities",
                "Can cause major health and spiritual issues",
                "Avoid placing fire pit in North-East completely",
                "If existing, shift immediately to South-East",
                "Perform purification rituals after removal",
                "Consult Vastu expert for urgent remedies"
            ]
        });
    }
    
    remedies.push({
        title: "General Fire Pit Vastu Tips",
        suggestions: [
            "Place fire pit in South-East direction ideally",
            "Always maintain proper fire safety measures",
            "Use sacred woods like sandalwood for spiritual fires",
            "Keep area clean and free from flammable materials",
            "Ensure proper ventilation and smoke management",
            "Respect fire as sacred element and use responsibly"
        ]
    });
}
    
    //meter Room
else if (lowerName.includes('meter room') || lowerName.includes('utility closet') || 
         lowerName.includes('service closet') || lowerName.includes('seva kaksh')) {
    
    if (dirLower === 'southeast') {
        remedies.push({
            title: "Meter Room in South-East - Ideal Placement",
            suggestions: [
                "Perfect direction for electrical meters and utilities",
                "Fire element supports electrical energy and equipment",
                "Place electrical meters in South-East corner",
                "Use proper safety enclosures and fire-resistant materials",
                "Ensure easy access for maintenance and reading",
                "Ideal for main electrical panels and utility controls"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Utility Closet in North-West Direction",
            suggestions: [
                "Excellent for service areas and utility storage",
                "Promotes organization and easy maintenance access",
                "Place cleaning supplies and tools in organized manner",
                "Use light colors with good lighting for visibility",
                "Keep area clean, dry and well-ventilated",
                "Ideal for household maintenance equipment"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Service Closet in South Direction",
            suggestions: [
                "Good for heavy utility equipment storage",
                "Provides stability for mechanical systems",
                "Place water heaters or heavy equipment against South wall",
                "Use proper insulation and safety measures",
                "Ensure adequate ventilation for equipment",
                "Ideal for HVAC systems and water heaters"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Meter Room in West Direction",
            suggestions: [
                "Acceptable for utility and service areas",
                "Provides good access for maintenance work",
                "Place meters and controls in organized layout",
                "Use durable materials for long-lasting service",
                "Keep area well-lit and accessible",
                "Ideal for plumbing controls and secondary utilities"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Utility Closet in North Direction",
            suggestions: [
                "Not ideal - can block wealth energy if cluttered",
                "Keep utility area minimal and extremely organized",
                "Place in North-West corner if unavoidable",
                "Use bright lighting and light colors",
                "Keep North-East corner absolutely clean and empty",
                "Avoid storing water-related equipment here"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Service Closet in East Direction",
            suggestions: [
                "Blocks morning positive energy if poorly placed",
                "Can affect health and prosperity of residents",
                "Use very compact and organized storage solutions",
                "Keep area extremely clean and well-maintained",
                "Place in North-East corner if absolutely necessary",
                "Avoid electrical panels in this direction"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Meter Room in South-West - Critical",
            suggestions: [
                "Highly inauspicious for utility equipment",
                "Can cause mechanical failures and safety issues",
                "Shift utility room if possible to South-East or North-West",
                "Use maximum safety precautions and regular maintenance",
                "Keep area extremely clean and well-organized",
                "Consult expert for relocation if possible"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Utility Closet in North-East - Most Critical",
            suggestions: [
                "Extremely harmful for any utility or service equipment",
                "Can cause major system failures and health issues",
                "Shift immediately if possible to appropriate direction",
                "If unavoidable, keep absolutely minimal and clean",
                "Use white colors and maximum safety measures",
                "Consult Vastu expert for urgent corrections"
            ]
        });
    }
    
    remedies.push({
        title: "General Meter/Utility Room Vastu Tips",
        suggestions: [
            "Keep utility areas clean, organized and accessible",
            "Ensure proper safety measures for electrical equipment",
            "Maintain good ventilation and lighting in service areas",
            "Regularly inspect and maintain all utility systems",
            "Label equipment clearly for easy identification",
            "Keep emergency shut-off valves and switches accessible"
        ]
    });
}
    
    
    //light box
else if (lowerName.includes('electrical panel') || lowerName.includes('fuse box') || 
         lowerName.includes('circuit breaker') || lowerName.includes('bijli board')) {
    
    if (dirLower === 'southeast') {
        remedies.push({
            title: "Electrical Panel in South-East - Ideal Placement",
            suggestions: [
                "Perfect direction for electrical equipment and panels",
                "Fire element naturally supports electrical energy flow",
                "Place panel in South-East corner facing East",
                "Use proper safety enclosures and fire-resistant materials",
                "Ensure easy access for maintenance with 3-foot clearance",
                "Ideal for optimal electrical distribution and safety"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Fuse Box in East Direction",
            suggestions: [
                "Good for electrical control panels",
                "Promotes efficient energy distribution",
                "Place panel in South-East part of East wall",
                "Use proper grounding and safety mechanisms",
                "Ensure clear labeling and easy accessibility",
                "Ideal for residential electrical systems"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Circuit Breaker in South Direction",
            suggestions: [
                "Acceptable for electrical panels with precautions",
                "Fire element supports electrical energy control",
                "Place panel in South-East corner of South wall",
                "Use proper insulation and safety enclosures",
                "Ensure adequate ventilation for heat dissipation",
                "Ideal for heavy-duty electrical systems"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Electrical Panel in North-West Direction",
            suggestions: [
                "Moderately acceptable for electrical controls",
                "Can cause occasional electrical fluctuations",
                "Use high-quality circuit breakers and safety devices",
                "Ensure proper earthing and surge protection",
                "Keep area well-ventilated and accessible",
                "Regular maintenance and safety checks recommended"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Fuse Box in West Direction",
            suggestions: [
                "Can cause electrical stability issues",
                "May lead to frequent circuit trips",
                "Use advanced safety devices and voltage regulators",
                "Ensure proper wiring and connection quality",
                "Regular inspection by qualified electrician",
                "Install backup power protection systems"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Circuit Breaker in North Direction",
            suggestions: [
                "Water and electricity conflict - not recommended",
                "Can cause safety hazards and electrical faults",
                "Place in waterproof enclosure with proper insulation",
                "Use GFCI protection and advanced safety measures",
                "Keep area dry and well-maintained",
                "Regular professional inspection essential"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Electrical Panel in South-West - Critical",
            suggestions: [
                "Highly inauspicious for electrical equipment",
                "Can cause serious safety hazards and system failures",
                "Shift panel if possible to South-East direction",
                "Use heavy-duty safety enclosures and fire protection",
                "Install multiple safety backup systems",
                "Regular professional inspection mandatory"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Fuse Box in North-East - Most Critical",
            suggestions: [
                "Extremely harmful for electrical panels",
                "Can cause major accidents and system breakdowns",
                "Shift electrical panel immediately if possible",
                "If unavoidable, use maximum safety precautions",
                "Install fire suppression systems nearby",
                "Consult electrician and Vastu expert urgently"
            ]
        });
    }
    
    remedies.push({
        title: "General Electrical Panel Vastu Tips",
        suggestions: [
            "Place electrical panel in South-East direction ideally",
            "Ensure proper earthing and circuit protection",
            "Maintain 3-foot clearance for safe access",
            "Use fire-resistant materials for enclosure",
            "Label all circuits clearly for easy identification",
            "Regular professional maintenance and safety checks"
        ]
    });
}
    
    //plumbing
else if (lowerName.includes('plumbing chase') || lowerName.includes('pipe space') || 
         lowerName.includes('water lines area') || lowerName.includes('nali sthan')) {
    
    if (dirLower === 'north') {
        remedies.push({
            title: "Plumbing Chase in North Direction - Ideal Placement",
            suggestions: [
                "Perfect direction for water lines and plumbing systems",
                "Water element naturally supports fluid flow and circulation",
                "Place main water lines in North or North-East section",
                "Use proper insulation to prevent condensation and leaks",
                "Ensure easy access for maintenance and repairs",
                "Ideal for smooth water flow and pressure maintenance"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Pipe Space in East Direction",
            suggestions: [
                "Good for water supply lines and morning water usage",
                "Promotes clean water flow and purification",
                "Place pipes in North-East corner of East direction",
                "Use quality materials to prevent corrosion and leaks",
                "Ensure proper slope for natural water flow",
                "Ideal for main water supply entry points"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Water Lines Area in North-East - Ideal",
            suggestions: [
                "Best for pure water supply and filtration systems",
                "Enhances water quality and positive energy flow",
                "Keep plumbing absolutely leak-free and well-maintained",
                "Use high-quality pipes and filtration systems",
                "Ensure proper drainage away from North-East corner",
                "Ideal for drinking water lines and purification"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Plumbing Chase in North-West Direction",
            suggestions: [
                "Acceptable for secondary water lines and drainage",
                "Good for hot water pipes and circulation systems",
                "Place pipes in organized, accessible manner",
                "Use proper insulation for temperature control",
                "Ensure good ventilation to prevent moisture buildup",
                "Ideal for utility water lines and drainage systems"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Pipe Space in West Direction",
            suggestions: [
                "Moderately acceptable for plumbing systems",
                "Can support evening water usage patterns",
                "Place pipes with proper support and protection",
                "Use corrosion-resistant materials for longevity",
                "Ensure easy access for maintenance and upgrades",
                "Good for bathroom and kitchen water lines"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Water Lines Area in South Direction",
            suggestions: [
                "Not ideal for water elements - can cause pressure issues",
                "May lead to plumbing problems and leaks",
                "Place pipes in North-West corner if unavoidable",
                "Use extra insulation and leak detection systems",
                "Ensure proper water pressure regulation",
                "Regular inspection and maintenance essential"
            ]
        });
    } else if (dirLower === 'southeast') {
        remedies.push({
            title: "Plumbing Chase in South-East - Critical",
            suggestions: [
                "Fire and water element conflict - not recommended",
                "Can cause pipe damage and electrical hazards",
                "Keep water lines away from electrical systems",
                "Use fire-resistant insulation and materials",
                "Install leak detection and automatic shut-off systems",
                "Regular safety inspections mandatory"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Pipe Space in South-West - Most Critical",
            suggestions: [
                "Extremely harmful for plumbing systems",
                "Can cause major leaks and structural damage",
                "Shift plumbing lines if possible to North direction",
                "Use maximum quality materials and reinforcement",
                "Install advanced leak prevention systems",
                "Consult plumber and Vastu expert for corrections"
            ]
        });
    }
    
    remedies.push({
        title: "General Plumbing Chase Vastu Tips",
        suggestions: [
            "Place main water lines in North or North-East directions",
            "Ensure all pipes are leak-free and well-maintained",
            "Use quality materials to prevent corrosion and damage",
            "Provide proper access panels for maintenance",
            "Install water filtration systems in North-East area",
            "Regular inspection and preventive maintenance essential"
        ]
    });
}
    
    
    //AC Plant
else if (lowerName.includes('hvac room') || lowerName.includes('ac plant room') || 
         lowerName.includes('heating cooling') || lowerName.includes('tapun shital')) {
    
    if (dirLower === 'southeast') {
        remedies.push({
            title: "HVAC Room in South-East - Ideal Placement",
            suggestions: [
                "Perfect direction for heating and cooling equipment",
                "Fire element supports energy consumption and heat generation",
                "Place AC units and heaters in South-East corner",
                "Use proper ventilation for heat dissipation",
                "Ensure easy access for maintenance and servicing",
                "Ideal for optimal temperature control efficiency"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "AC Plant Room in South Direction",
            suggestions: [
                "Good for heating systems and thermal equipment",
                "Fire element supports warm air circulation",
                "Place heavy equipment against South wall",
                "Use proper insulation for energy efficiency",
                "Ensure adequate space for air circulation",
                "Ideal for boiler rooms and heating systems"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "HVAC Room in North-West Direction",
            suggestions: [
                "Acceptable for air conditioning and ventilation systems",
                "Air element supports cool air distribution",
                "Place AC units with proper wind direction consideration",
                "Use noise-reduction materials for quiet operation",
                "Ensure proper drainage for condensation removal",
                "Ideal for central air conditioning systems"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "AC Plant Room in West Direction",
            suggestions: [
                "Good for evening cooling requirements",
                "Supports comfortable temperature during hot afternoons",
                "Place equipment with proper sun protection",
                "Use energy-efficient systems for cost savings",
                "Ensure proper maintenance for optimal performance",
                "Ideal for areas with high afternoon temperatures"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Heating Cooling Room in North Direction",
            suggestions: [
                "Not ideal - can affect system efficiency",
                "Water element may conflict with electrical components",
                "Place in North-West corner if unavoidable",
                "Use waterproof enclosures and proper insulation",
                "Ensure excellent ventilation and drainage",
                "Regular maintenance to prevent moisture issues"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "HVAC Room in East Direction",
            suggestions: [
                "Blocks morning positive energy if poorly placed",
                "Can affect system performance and energy costs",
                "Place in South-East corner of East direction if necessary",
                "Use soundproofing to minimize noise disturbance",
                "Keep area extremely clean and well-maintained",
                "Avoid placing main units in North-East corner"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "AC Plant Room in South-West - Critical",
            suggestions: [
                "Highly inauspicious for HVAC equipment",
                "Can cause system failures and high energy costs",
                "Shift equipment if possible to South-East or North-West",
                "Use high-efficiency systems to compensate",
                "Install advanced monitoring and control systems",
                "Regular professional servicing essential"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "HVAC Room in North-East - Most Critical",
            suggestions: [
                "Extremely harmful for any mechanical equipment",
                "Can cause major breakdowns and health issues",
                "Shift HVAC room immediately if possible",
                "If unavoidable, use smallest possible equipment",
                "Install superior filtration and purification systems",
                "Consult HVAC expert and Vastu specialist urgently"
            ]
        });
    }
    
    remedies.push({
        title: "General HVAC Room Vastu Tips",
        suggestions: [
            "Place HVAC equipment in South-East direction ideally",
            "Ensure proper ventilation and air circulation around units",
            "Use energy-efficient systems for cost savings",
            "Maintain regular servicing and filter changes",
            "Install proper drainage for condensation removal",
            "Keep area clean, organized and accessible for maintenance"
        ]
    });
}
    
    
    //Center

else if (lowerName.includes('brahmasthan') || lowerName.includes('center') || 
         lowerName.includes('central area') || lowerName.includes('madhya sthan')) {
    
    if (dirLower === 'center') {
        remedies.push({
            title: "Brahmasthan - The Sacred Center",
            suggestions: [
                "Most sacred and powerful area of the house",
                "Represents the cosmic energy and spiritual heart",
                "Keep absolutely open, clean and unobstructed",
                "Use light colors or natural flooring materials",
                "No heavy furniture, pillars, or toilets in this area",
                "Ideal for meditation, prayer and positive energy flow"
            ]
        });
    } else {
        remedies.push({
            title: "Brahmasthan Considerations",
            suggestions: [
                "Brahmasthan should always be in the center of the house",
                "This area must remain light, open and energy-flowing",
                "Avoid placing any heavy objects or constructions here",
                "No kitchens, toilets, or staircases in Brahmasthan",
                "Keep clean and clutter-free for optimal energy circulation",
                "Ideal for creating a peaceful, meditative space"
            ]
        });
    }
    
    remedies.push({
        title: "Brahmasthan Vastu Rules",
        suggestions: [
            "Never build toilets or bathrooms in Brahmasthan",
            "Avoid placing kitchen or fire elements in center",
            "No heavy furniture or storage in central area",
            "Keep flooring light - use marble, light tiles or wood",
            "Ideal for hanging crystal or light fixture in center",
            "Maintain absolute cleanliness and positive energy"
        ]
    });
    
    remedies.push({
        title: "Brahmasthan Remedies if Violated",
        suggestions: [
            "If toilet exists in center, shift it immediately",
            "If kitchen is in center, use pyramid and crystals",
            "If pillar is in center, use mirrors and light colors",
            "Regularly cleanse area with incense and positive vibrations",
            "Place crystal pyramid or lotus symbol in center",
            "Consult Vastu expert for major corrections"
        ]
    });
}
    
    //court yard
    else if (lowerName.includes('chowk') || lowerName.includes('courtyard') || 
         lowerName.includes('angan') || lowerName.includes('inner courtyard')) {
    
    if (dirLower === 'center') {
        remedies.push({
            title: "Courtyard in Center (Brahmasthan) - Ideal Placement",
            suggestions: [
                "Perfect placement for inner courtyard or chowk",
                "Creates excellent energy flow and ventilation",
                "Keep courtyard open to sky for natural light and air",
                "Use natural materials like stone, plants and water features",
                "Maintain absolute cleanliness and positive energy",
                "Ideal for family gatherings, meditation and celebrations"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Courtyard in North Direction",
            suggestions: [
                "Excellent for wealth and prosperity energy",
                "Brings cool breezes and positive vibrations",
                "Place water feature or fountain in North-East corner",
                "Use light-colored flooring and reflective surfaces",
                "Keep area open and welcoming for positive energy flow",
                "Ideal for entertaining guests and social gatherings"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Chowk in East Direction",
            suggestions: [
                "Perfect for morning sunlight and positive energy",
                "Promotes health, vitality and new beginnings",
                "Design with open East side for sunrise views",
                "Use flowering plants that thrive in morning light",
                "Keep area bright and cheerful for daytime activities",
                "Ideal for morning yoga, exercise and family time"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Courtyard in North-East - Sacred Placement",
            suggestions: [
                "Most auspicious direction for spiritual courtyard",
                "Enhances divine energy and positive vibrations",
                "Keep absolutely clean, pure and well-maintained",
                "Place Tulsi plant and sacred symbols in this area",
                "Use white marble or light-colored natural stones",
                "Ideal for prayers, meditation and spiritual activities"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Chowk in North-West Direction",
            suggestions: [
                "Good for social interactions and guest entertainment",
                "Promotes communication and relationship harmony",
                "Design with comfortable seating arrangements",
                "Use wind chimes for positive energy circulation",
                "Keep area well-lit for evening gatherings",
                "Ideal for parties, celebrations and family events"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Courtyard in West Direction",
            suggestions: [
                "Excellent for evening relaxation and sunset views",
                "Promotes creativity and romantic ambiance",
                "Design with open West side for beautiful sunsets",
                "Use warm lighting for evening atmosphere",
                "Place comfortable seating for family enjoyment",
                "Ideal for dinner parties and evening socializing"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Chowk in South Direction",
            suggestions: [
                "Can provide warmth during winter months",
                "Good for winter gatherings and sunlight exposure",
                "Use light-reflecting materials to reduce summer heat",
                "Install adjustable shading for temperature control",
                "Place seating facing North for better energy flow",
                "Ideal for winter activities and celebrations"
            ]
        });
    } else if (dirLower === 'southeast' || dirLower === 'southwest') {
        remedies.push({
            title: "Courtyard in South Directions - Not Recommended",
            suggestions: [
                "Not ideal for main courtyard placement",
                "Better suited for specific functional areas",
                "If unavoidable, keep area open and well-ventilated",
                "Use light colors and bright lighting",
                "Place water features in North-East for balance",
                "Consult Vastu expert for proper remedies"
            ]
        });
    }
    
    remedies.push({
        title: "General Courtyard Vastu Tips",
        suggestions: [
            "Keep courtyard clean, open and well-maintained",
            "Use natural elements like plants, water and stones",
            "Ensure proper drainage and water flow direction",
            "Create harmonious balance with surrounding architecture",
            "Use courtyard for positive family activities and gatherings",
            "Maintain positive energy with regular cleansing and care"
        ]
    });
}
    
    //wifi Hub
else if (lowerName.includes('server room') || lowerName.includes('network closet') || 
         lowerName.includes('smart home hub') || lowerName.includes('tantra kaksh')) {
    
    if (dirLower === 'southeast') {
        remedies.push({
            title: "Server Room in South-East - Ideal Placement",
            suggestions: [
                "Perfect direction for electronic equipment and servers",
                "Fire element supports electrical energy and data flow",
                "Place servers and network equipment in South-East corner",
                "Use proper cooling systems for heat management",
                "Ensure excellent ventilation and temperature control",
                "Ideal for optimal network performance and reliability"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Server Room in South Direction",
            suggestions: [
                "Good for stable network infrastructure",
                "Provides strong foundation for data storage",
                "Place heavy server racks against South wall",
                "Use advanced cooling and UPS systems",
                "Ensure proper cable management and organization",
                "Ideal for data centers and critical systems"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Network Closet in East Direction",
            suggestions: [
                "Excellent for communication equipment and networking",
                "Promotes clear data transmission and connectivity",
                "Place routers and switches facing East for optimal signal",
                "Use proper ventilation to prevent overheating",
                "Ensure easy access for maintenance and upgrades",
                "Ideal for internet connectivity and smart home systems"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Smart Home Hub in North-West Direction",
            suggestions: [
                "Good for wireless communication and connectivity",
                "Promotes seamless integration of smart devices",
                "Place hub in centralized location for best coverage",
                "Use proper shielding to prevent signal interference",
                "Ensure reliable power backup for continuous operation",
                "Ideal for home automation and IoT devices"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Server Room in West Direction",
            suggestions: [
                "Acceptable for data storage and backup systems",
                "Provides stability for archival and storage servers",
                "Place equipment with proper cooling considerations",
                "Use redundant power supplies for reliability",
                "Ensure proper security and access controls",
                "Ideal for backup servers and secondary systems"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Network Closet in North Direction",
            suggestions: [
                "Can support data flow but requires precautions",
                "Water element may risk equipment damage",
                "Place in North-West corner if unavoidable",
                "Use waterproof enclosures and humidity control",
                "Install proper grounding and surge protection",
                "Regular monitoring for moisture issues essential"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Server Room in South-West - Critical",
            suggestions: [
                "Highly inauspicious for electronic equipment",
                "Can cause frequent system failures and data loss",
                "Shift equipment if possible to South-East direction",
                "Use advanced cooling and redundancy systems",
                "Install multiple backup and disaster recovery solutions",
                "Regular maintenance and monitoring mandatory"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Smart Home Hub in North-East - Most Critical",
            suggestions: [
                "Extremely harmful for any electronic equipment",
                "Can cause major system crashes and security breaches",
                "Shift immediately to appropriate direction if possible",
                "If unavoidable, use maximum protection and redundancy",
                "Install superior cooling and power protection systems",
                "Consult IT and Vastu experts for urgent solutions"
            ]
        });
    }
    
    remedies.push({
        title: "General Server Room Vastu Tips",
        suggestions: [
            "Place servers and network equipment in South-East ideally",
            "Ensure proper cooling, ventilation and temperature control",
            "Use UPS and surge protection for power stability",
            "Maintain excellent cable management and organization",
            "Implement proper security and access controls",
            "Regular maintenance, updates and monitoring essential"
        ]
    });
}
    
    //charging Sation
else if (lowerName.includes('charging station') || lowerName.includes('electronics area') || 
         lowerName.includes('gadget zone') || lowerName.includes('device charging')) {
    
    if (dirLower === 'southeast') {
        remedies.push({
            title: "Charging Station in South-East - Ideal Placement",
            suggestions: [
                "Perfect direction for electronic charging and power devices",
                "Fire element supports electrical energy and battery charging",
                "Place charging station in South-East corner facing East",
                "Use proper surge protection and safety mechanisms",
                "Ensure good ventilation to prevent overheating",
                "Ideal for fast charging and optimal device performance"
            ]
        });
    } else if (dirLower === 'east') {
        remedies.push({
            title: "Electronics Area in East Direction",
            suggestions: [
                "Excellent for morning charging and daily device use",
                "Promotes clear energy flow and device functionality",
                "Place charging station facing East for optimal energy",
                "Use organized cable management systems",
                "Keep area clean and free from clutter",
                "Ideal for smartphones, tablets and daily gadgets"
            ]
        });
    } else if (dirLower === 'south') {
        remedies.push({
            title: "Charging Station in South Direction",
            suggestions: [
                "Good for stable power supply and device charging",
                "Provides strong energy flow for multiple devices",
                "Place charging hub against South wall",
                "Use multi-port chargers with proper load capacity",
                "Ensure proper spacing between charging devices",
                "Ideal for power banks and backup charging"
            ]
        });
    } else if (dirLower === 'northwest') {
        remedies.push({
            title: "Gadget Zone in North-West Direction",
            suggestions: [
                "Good for portable devices and wireless charging",
                "Promotes connectivity and device synchronization",
                "Place charging pads and wireless stations here",
                "Use organized storage for cables and accessories",
                "Ensure good air circulation around devices",
                "Ideal for smartwatches, headphones and wearables"
            ]
        });
    } else if (dirLower === 'west') {
        remedies.push({
            title: "Electronics Area in West Direction",
            suggestions: [
                "Acceptable for evening charging and device maintenance",
                "Supports device usage during evening hours",
                "Place charging station with proper cable management",
                "Use warm lighting for comfortable evening use",
                "Ensure devices are not left charging overnight",
                "Ideal for laptops and work devices"
            ]
        });
    } else if (dirLower === 'north') {
        remedies.push({
            title: "Charging Station in North Direction",
            suggestions: [
                "Can support charging but requires precautions",
                "Water element may risk electrical safety",
                "Place in North-West corner if unavoidable",
                "Use waterproof charging mats and covers",
                "Install proper surge protection devices",
                "Avoid charging near water sources"
            ]
        });
    } else if (dirLower === 'southwest') {
        remedies.push({
            title: "Gadget Zone in South-West - Critical",
            suggestions: [
                "Not ideal for electronic charging areas",
                "Can cause device malfunctions and battery issues",
                "Place charging station in South-East if unavoidable",
                "Use high-quality chargers and cables",
                "Avoid overnight charging in this direction",
                "Regular device maintenance recommended"
            ]
        });
    } else if (dirLower === 'northeast') {
        remedies.push({
            title: "Charging Station in North-East - Most Critical",
            suggestions: [
                "Extremely harmful for electronic devices",
                "Can cause permanent device damage and battery failure",
                "Shift charging area immediately if possible",
                "If unavoidable, use minimal charging and short durations",
                "Install superior surge protection and voltage regulators",
                "Consult electronics expert for safety measures"
            ]
        });
    }
    
    remedies.push({
        title: "General Charging Station Vastu Tips",
        suggestions: [
            "Place charging stations in South-East direction ideally",
            "Use quality chargers and cables for device safety",
            "Maintain organized cable management and clutter-free area",
            "Avoid overnight charging to prevent overheating",
            "Use surge protectors for voltage fluctuation protection",
            "Keep charging area well-ventilated and easily accessible"
        ]
    });
}
    
    
    
    

    
    
    
    
    
//Genreal Vastu    
    
    if (remedies.length === 0) {
        if (lowerName.includes('living') || lowerName.includes('hall')) {
            remedies.push({
                title: "General Living Area Remedies",
                suggestions: [
                    "Keep the Northeast corner clean and open",
                    "Place heavy furniture in South or West",
                    "Use bright but soothing colors",
                    "Ensure proper ventilation and natural light",
                    "Place a water feature in Northeast if possible"
                ]
            });
        } else if (lowerName.includes('store') || lowerName.includes('storage')) {
            remedies.push({
                title: "General Storage Room Remedies",
                suggestions: [
                    "Keep storage organized and clutter-free",
                    "Place heavier items in South-West",
                    "Use light colors for walls",
                    "Ensure proper ventilation",
                    "Avoid storing broken or unused items"
                ]
            });
        }
    }

    return remedies;
}
