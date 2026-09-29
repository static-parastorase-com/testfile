// Multilingual Architectural Vastu Guide for all house & duplex elements
// Available languages: English (en), Kannada (kn), Hindi (hi), Tamil (ta), Telugu (te), Malayalam (ml)
(function() {
    'use strict';

    const VASTU_MULTILINGUAL_GUIDE = {
    "en": {
        "title": "ARCHITECTURAL REFERENCE GUIDE · VASTU SHASTRA",
        "heading": "Vastu Shastra Guide for All House & Duplex Elements",
        "description": "Essential directional guidelines, zone orientations, and spatial rules for planning, validating, and harmonizing all residential spaces from ground floor to duplex / multi-storey layouts.",
        "idealLabel": "Ideal:",
        "categories": [
            {
                "category": "Core Sacred & Living Spaces",
                "items": [
                    {
                        "name": "Pooja Room (Mandir / Devasthanam)",
                        "zone": "North-East (Ishanya - Sacred Corner)",
                        "rules": "Idols should face West or East so worshippers face East or North during prayer. Use light yellow, white, or marble tones. Strictly avoid under staircases, against shared toilet walls, or in South-West."
                    },
                    {
                        "name": "Kitchen (Fire Element / Agni)",
                        "zone": "South-East (Agneya - 1st Choice), North-West (Vayu - 2nd Choice)",
                        "rules": "Cook facing East. Cooking hob must be placed in South-East. Water sink, dishwasher, and drainage belong in North-East. Refrigerator in South-West or North-West. Avoid kitchen directly above/below pooja or bedroom."
                    },
                    {
                        "name": "Living Hall / Drawing Room",
                        "zone": "North, East, or North-East (Alt: North-West)",
                        "rules": "Keep North and East sides open and uncluttered to allow Prana energy. Heavy sofas, TV units, and storage should align along South and West walls. Air conditioners in South-East or West."
                    },
                    {
                        "name": "Dining Room",
                        "zone": "West or North-West (Adjacent to Kitchen)",
                        "rules": "Family members should face East or North while dining to foster health and digestion. Dining table should be rectangular or square (avoid round/oval in main dining). Keep away from main entrance line."
                    },
                    {
                        "name": "Brahmasthan (Energy Core / Center of House)",
                        "zone": "Exact Center (Navel of Vastu Purusha)",
                        "rules": "Must be completely open, well-ventilated, and clutter-free. Zero load: strictly no pillars, beams, staircases, toilets, water tanks, or heavy furniture. Represents health, prosperity, and harmony."
                    },
                    {
                        "name": "Entrance Foyer / Vestibule (Deodhi)",
                        "zone": "North, East, or North-East",
                        "rules": "A welcoming, well-lit threshold that filters positive energy into the home. Shoe racks and umbrella stands must be kept towards North-West or West, never in direct sight of the main door."
                    },
                    {
                        "name": "Central Courtyard / Open-to-Sky Atrium (Aangan)",
                        "zone": "North-East or Central Brahmasthan",
                        "rules": "Brings natural daylight, cosmic radiation, and cross-ventilation into duplex levels. Keep rain drainage sloped toward North-East; maintain zero structural column load."
                    }
                ]
            },
            {
                "category": "Bedrooms & Private Quarters",
                "items": [
                    {
                        "name": "Master Bedroom",
                        "zone": "South-West (Nairutya - Earth Element / Stability)",
                        "rules": "Reserved for family head/owner. Sleep with head towards South (1st priority) or East (2nd priority); never North. Wardrobes and heavy cash lockers on South/West wall opening North/East. No mirrors facing bed."
                    },
                    {
                        "name": "Children’s Bedroom & Study",
                        "zone": "West (Growth & Intellect) or North-East / North",
                        "rules": "Study desk facing East or North for concentration. Keep books along South or West shelves. Keep North-East corner of the study clean and light. Avoid sleeping with head towards West."
                    },
                    {
                        "name": "Guest Bedroom",
                        "zone": "North-West (Vayu - Wind Element)",
                        "rules": "Promotes pleasant, temporary stays and prevents guests from overstaying. Never allot South-West to guests or tenants to retain home ownership authority."
                    },
                    {
                        "name": "Grandparents’ / Senior Citizens’ Bedroom",
                        "zone": "South-West (if family head) or South / West (Ground Floor)",
                        "rules": "Quiet, grounded environment with minimal stairs. Avoid airy North-West to prevent joint/rheumatic ailments. Bed positioned with head towards South for peaceful longevity."
                    },
                    {
                        "name": "Home Office / Library",
                        "zone": "North (Kuber - Wealth/Career) or West (Knowledge)",
                        "rules": "Desk positioned so you face North or East while working. Ensure a solid, firm wall behind your work chair (avoid sitting with door or window directly behind your back)."
                    },
                    {
                        "name": "Dressing Room & Walk-in Wardrobe",
                        "zone": "South or West Side of Master Suite",
                        "rules": "Heavy cupboards and wardrobes should occupy South and West walls. Full-length dressing mirrors must be mounted on North or East walls with a cover when facing beds."
                    },
                    {
                        "name": "Safe / Cash Locker & Jewelry Vault (Tijori)",
                        "zone": "South-West Room, South Wall Opening North",
                        "rules": "Position locker against the South wall opening toward the North (Lord Kuber’s realm) or West wall opening East. Ensure locker base is completely level and never directly visible from doors."
                    }
                ]
            },
            {
                "category": "Duplex & First Floor (Upper Level) Architecture",
                "items": [
                    {
                        "name": "Internal & Duplex Staircase",
                        "zone": "South, South-West, or West (Heaviness & Support)",
                        "rules": "Stairs must climb clockwise (Pradakshina / East-to-West or North-to-South). Total steps should be an odd number (ending in 1, 3, 5, 7, 9). Strictly avoid in North-East (Ishanya) or Brahmasthan."
                    },
                    {
                        "name": "Elevator / Home Lift / Dumbwaiter",
                        "zone": "South, South-West, or West Shaft",
                        "rules": "Provides structural mass along heavy zones. Avoid lift shafts in North-East or Brahmasthan as mechanical vibration disrupts delicate magnetic cosmic energy."
                    },
                    {
                        "name": "First Floor / Duplex Massing & Height",
                        "zone": "South and West Taller; North and East Lower",
                        "rules": "In duplex homes, the South and West portions of the upper floor should be constructed heavier, taller, and more solid. The North and East sides should have lower heights and larger open terraces."
                    },
                    {
                        "name": "Upper Floor Master Suite (Duplex)",
                        "zone": "South-West of Upper Floor",
                        "rules": "Provides superior privacy, commanding authority, and peace for the master. Ensure the bed is not positioned directly above a ground-floor kitchen stove or toilet commode."
                    },
                    {
                        "name": "Upper Family Lounge / Mezzanine & Bridge",
                        "zone": "North, East, or Center-North",
                        "rules": "Double-height cutouts and atrium spaces are ideal in North-East and Central areas to allow sunlight to permeate both ground and first floors."
                    },
                    {
                        "name": "Balconies, Verandahs & Terraces",
                        "zone": "North, East, or North-East",
                        "rules": "Open towards morning sunlight (Prana energy). Terrace floor must slope towards North-East for water runoff. Parapet walls should be taller on South/West and lower on North/East."
                    },
                    {
                        "name": "Skylights & Natural Light Shafts",
                        "zone": "North, East, or Central Roof Apex",
                        "rules": "Directs daylight deep into duplex levels. Use clear UV-filtering glass inclined toward East or North to capture ambient solar radiation without excess heat gain."
                    }
                ]
            },
            {
                "category": "Specialized Lifestyle & Wellness Spaces",
                "items": [
                    {
                        "name": "Home Theater / Media Den / AV Room",
                        "zone": "South-West (Sound Absorption) or North-West",
                        "rules": "Heavy acoustic paneling and seating along South and West walls. AV screen along North or East wall. Avoid in North-East to prevent electrical heating of the water corner."
                    },
                    {
                        "name": "Gymnasium / Fitness Studio (Weights)",
                        "zone": "South-West, South, or West",
                        "rules": "Heavy weight training equipment, barbells, and machines provide beneficial grounding weight. Mirrors positioned along North or East walls for positive reflection."
                    },
                    {
                        "name": "Yoga, Meditation & Spiritual Studio",
                        "zone": "North-East (Ishanya) or East",
                        "rules": "Requires pure, serene atmosphere with abundant morning light. Keep floor clutter-free, use natural timber or bamboo flooring, and face East while meditating."
                    },
                    {
                        "name": "Utility, Laundry & Washing Area (Scullery)",
                        "zone": "South-East (Agneya) or North-West (Vayu)",
                        "rules": "Washing machines and laundry sinks work harmoniously with drainage flowing North or East. Drying yards best placed on open South or West terraces for sunlight disinfection."
                    },
                    {
                        "name": "Servant Quarters / Caretaker Room",
                        "zone": "South-East or North-West Corner",
                        "rules": "Never allot the South-West master zone to domestic staff or caretakers to ensure household hierarchy, loyalty, and owner authority remain intact."
                    }
                ]
            },
            {
                "category": "Utilities, Water Infrastructure & Site Systems",
                "items": [
                    {
                        "name": "Toilets & Bathrooms",
                        "zone": "North-West (Vayu) or West-North-West (WNW)",
                        "rules": "Commode oriented on North-South axis (facing North or South when seated). Geyser in South-East. Mirror on North or East wall. Strictly prohibit toilets in North-East (Ishanya) and Brahmasthan."
                    },
                    {
                        "name": "Main Entrance (Mahadwara)",
                        "zone": "North (Kuber/Mukhya), East (Jayanta/Indra), or West (Pushpadanta)",
                        "rules": "Must be the grandest and cleanest door in the home. Raised threshold, well-lit entrance, opening clockwise inward. Avoid obstacles like trees, poles, or corners directly facing the door."
                    },
                    {
                        "name": "Overhead Water Tank (Duplex Roof / Top Floor)",
                        "zone": "Exact South-West (Nairutya - Highest Point)",
                        "rules": "Elevated on a raised platform at the highest elevation of the building to provide natural grounding weight. Never place overhead tanks in North-East or Center."
                    },
                    {
                        "name": "Underground Water Sump / Borewell / Rainwater",
                        "zone": "North-East (Ishanya) or North",
                        "rules": "Must be dug below ground level in Ishanya to attract positive cosmic and magnetic currents. Strictly prohibited in South, South-West, or South-East."
                    },
                    {
                        "name": "Car Parking / Garage / Porch",
                        "zone": "North-West (Vayu) or South-East (Covered Porch)",
                        "rules": "Vehicles should face East or North when parked. Avoid parking vehicles in North-East, which blocks primary energy flow."
                    },
                    {
                        "name": "Store Room & Heavy Storage",
                        "zone": "South-West or South",
                        "rules": "Heavy goods, machinery, and non-perishable storage provide auspicious weight and stability when positioned in Nairutya."
                    },
                    {
                        "name": "Electrical Meter, Solar Panels & Inverters",
                        "zone": "South-East (Agneya - Fire / Energy Domain)",
                        "rules": "Solar inverter banks, electrical distribution panels, and power backup units belong in the fire quadrant. Solar panels on roof should tilt towards South for solar efficiency."
                    },
                    {
                        "name": "Septic Tank & Sewer Line",
                        "zone": "West of North-West (WNW) or North-West",
                        "rules": "Should not touch the exterior boundary wall directly. Must never be situated in North-East, South-West, or Brahmasthan."
                    },
                    {
                        "name": "Basement / Cellar (Tahkhana)",
                        "zone": "North or East Half of the Plot Only",
                        "rules": "Basements under North-East or East attract prosperity and light. Strictly avoid basements only under South-West, which destabilizes foundational grounding."
                    },
                    {
                        "name": "Swimming Pool & Decorative Water Cascades",
                        "zone": "North-East (Ishanya) or North",
                        "rules": "Water bodies enhance spiritual serenity and wealth when placed in Ishanya. Water depth and slope should lead toward North-East. Never build pools in South-West."
                    },
                    {
                        "name": "Boundary Compound Wall & Perimeter Gates",
                        "zone": "South & West High/Thick; North & East Lower",
                        "rules": "South and West boundary walls protect against harsh solar rays and negative energy. Main perimeter entry gate should match auspicious house door quadrants."
                    },
                    {
                        "name": "Garden, Trees, Tulsi & Greenery",
                        "zone": "Tulsi in NE/East; Heavy Trees in SW/South/West",
                        "rules": "Holy Basil (Tulsi) in North-East or East invites positive prana. Dense, tall evergreen shade trees along South and West protect the house from afternoon heat."
                    }
                ]
            },
            {
                "category": "Household Appliances, Fixtures & Additional Spaces",
                "items": [
                    {
                        "name": "Gas Cylinder & Cooking Gas Pipeline (LPG)",
                        "zone": "South-East (Agneya - Fire Quadrant)",
                        "rules": "Store gas cylinders and cooking gas manifolds strictly in the South-East fire zone. Keep away from North-East and Brahmasthan. Ensure proper ventilation and safety shut-off valves."
                    },
                    {
                        "name": "Solar Water Heater / Roof Geyser / Heat Pump",
                        "zone": "South-East or South on Rooftop / Duplex Terrace",
                        "rules": "Combines solar heat with water element; place towards South-East or South roof perimeter. Avoid placing solar heating units in North-East or North."
                    },
                    {
                        "name": "Washing Machine, Dryer & Dishwasher",
                        "zone": "North-West (Vayu) or South-East (Agneya)",
                        "rules": "Water drainage should flow North or East. Keep electrical appliances grounded and avoid North-East to prevent frequent mechanical breakdowns."
                    },
                    {
                        "name": "Refrigerator / Deep Freezer & Cold Storage",
                        "zone": "South-West, West, or North-West of Kitchen",
                        "rules": "Place against South or West wall with 15 cm air clearance. Never place refrigerator in North-East corner of the kitchen or house."
                    },
                    {
                        "name": "Wall Clocks, Pendulum Clocks & Timepieces",
                        "zone": "North, East, or West Walls",
                        "rules": "Clocks should be hung on North (wealth/opportunity) or East (progress/vitality) walls. Always keep clocks in working order; avoid stopped clocks and never hang above entrance doors."
                    },
                    {
                        "name": "Mirrors, Dressing Mirrors & Reflective Glass",
                        "zone": "North or East Walls",
                        "rules": "Mount mirrors on North or East walls so reflections face South or West. Never place mirrors directly reflecting the bed or main door. Cover mirrors at night in bedrooms."
                    },
                    {
                        "name": "Shoe Rack & Footwear Storage Cabinet",
                        "zone": "North-West or West (Outside Living Area)",
                        "rules": "Place shoe storage towards West or North-West. Strictly avoid placing shoe racks in North-East, under pooja rooms, or directly facing the main entrance threshold. Keep enclosed and tidy."
                    },
                    {
                        "name": "Overhead Terrace Garden, Pergola & Sit-out",
                        "zone": "South-West or South for Heavy Planters; North-East for Light Flowers",
                        "rules": "Heavy concrete planter boxes and pergolas should sit on South/West terrace to add beneficial weight. Keep North-East terrace open for morning sunlight and cosmic flow."
                    },
                    {
                        "name": "Security Cabin / Guard Room / Sentry Post",
                        "zone": "South-West of Main Gate or North-West",
                        "rules": "Guard cabin should be placed beside gate in South-West or North-West. Sentry should face East or North when seated. Cabin height must be lower than main compound wall."
                    },
                    {
                        "name": "Pet House, Dog Kennel & Bird Feeders",
                        "zone": "North-West (Vayu - Animal Energy) or North",
                        "rules": "North-West corner is ideal for kennels and animal shelters. Bird feeders and water bowls in North or East attract benevolent energy and harmony. Avoid pet shelters in South-East or South-West."
                    },
                    {
                        "name": "External Staircase / Outdoor Emergency & Service Stairs",
                        "zone": "South-West, South, or West Perimeter",
                        "rules": "Must ascend clockwise from East to West or North to South. Keep independent of the main building’s North-East corner to prevent structural energy blockages."
                    },
                    {
                        "name": "Water Purifier / RO Filter & Drinking Water Dispenser",
                        "zone": "North-East (Ishanya - Pure Water Domain) or North",
                        "rules": "Pure drinking water should be kept in the sacred North-East corner of the kitchen or dining area. Drinking while facing East promotes digestion, vitality, and health."
                    }
                ]
            }
        ]
    },
    "kn": {
        "title": "ವಾಸ್ತು ಶಾಸ್ತ್ರ ಸಮಗ್ರ ವಾಸ್ತುಶಿಲ್ಪ ಮಾರ್ಗದರ್ಶಿ",
        "heading": "ಎಲ್ಲಾ ಗೃಹ ಮತ್ತು ಡ್ಯೂಪ್ಲೆಕ್ಸ್ ಅಂಶಗಳ ವಾಸ್ತು ಶಾಸ್ತ್ರ ನಿಯಮಾವಳಿ",
        "description": "ನೆಲಮಹಡಿಯಿಂದ ಡ್ಯೂಪ್ಲೆಕ್ಸ್ / ಬಹುಮಹಡಿ ಮನೆಗಳ ಪ್ರತಿಯೊಂದು ಕೊಠಡಿ ಮತ್ತು ಜಾಗದ ಸೂಕ್ತ ದಿಕ್ಕುಗಳು ಹಾಗೂ ಶಾಸ್ತ್ರೋಕ್ತ ನಿಯಮಗಳು.",
        "idealLabel": "ಸೂಕ್ತ ದಿಕ್ಕು:",
        "categories": [
            {
                "category": "ಪೂಜಾ ಮತ್ತು ಪ್ರಮುಖ ಜೀವಂತ ಸ್ಥಳಗಳು",
                "items": [
                    {
                        "name": "ಪೂಜಾ ಕೊಠಡಿ (ಮಂದಿರ / ದೇವಸ್ಥಾನ)",
                        "zone": "ಉತ್ತರ-ಪೂರ್ವ (ಈಶಾನ್ಯ - ದೈವಿಕ ಮೂಲೆ)",
                        "rules": "ಮೂರ್ತಿಗಳನ್ನು ಪಶ್ಚಿಮ ಅಥವಾ ಪೂರ್ವಕ್ಕೆ ಮುಖ ಮಾಡಿ ಇರಿಸಿ. ಪ್ರಾರ್ಥಿಸುವಾಗ ಪೂರ್ವ ಅಥವಾ ಉತ್ತರಕ್ಕೆ ಮುಖ ಮಾಡಬೇಕು. ಮೆಟ್ಟಿಲುಗಳ ಕೆಳಗೆ, ಶೌಚಾಲಯದ ಪಕ್ಕದಲ್ಲಿ ಅಥವಾ ನೈಋತ್ಯದಲ್ಲಿ ಪೂಜಾ ಕೋಣೆ ಎಂದಿಗೂ ಬೇಡ."
                    },
                    {
                        "name": "ಅಡುಗೆ ಮನೆ (ಅಗ್ನಿ ತತ್ವ)",
                        "zone": "ದಕ್ಷಿಣ-ಪೂರ್ವ (ಆಗ್ನೇಯ - ಪ್ರಥಮ ಆಯ್ಕೆ), ವಾಯುವ್ಯ (ದ್ವಿತೀಯ)",
                        "rules": "ಪೂರ್ವಕ್ಕೆ ಮುಖ ಮಾಡಿ ಅಡುಗೆ ಮಾಡಿ. ಗ್ಯಾಸ್ ಸ್ಟೌವ್ ಆಗ್ನೇಯದಲ್ಲಿರಲಿ. ನೀರಿನ ಸಿಂಕ್ ಮತ್ತು ನಲ್ಲಿ ಈಶಾನ್ಯದಲ್ಲಿರಬೇಕು. ರೆಫ್ರಿಜರೇಟರ್ ನೈಋತ್ಯ ಅಥವಾ ವಾಯುವ್ಯದಲ್ಲಿರಲಿ."
                    },
                    {
                        "name": "ವಾಸದ ಕೊಠಡಿ / ಹಾಲ್ (ಲಿವಿಂಗ್ ಹಾಲ್)",
                        "zone": "ಉತ್ತರ, ಪೂರ್ವ ಅಥವಾ ಈಶಾನ್ಯ (ಪರ್ಯಾಯ: ವಾಯುವ್ಯ)",
                        "rules": "ಉತ್ತರ ಮತ್ತು ಪೂರ್ವ ದಿಕ್ಕುಗಳನ್ನು ತೆರೆದು ಹಗುರವಾಗಿಡಿ. ಭಾರವಾದ ಸೋಫಾ, ಟಿವಿ ಯೂನಿಟ್ ಮತ್ತು ಕಪಾಟುಗಳನ್ನು ದಕ್ಷಿಣ ಹಾಗೂ ಪಶ್ಚಿಮ ಗೋಡೆಗಳ ಬದಿಯಲ್ಲಿ ಇರಿಸಿ."
                    },
                    {
                        "name": "ಊಟದ ಕೊಠಡಿ (ಡೈನಿಂಗ್ ಹಾಲ್)",
                        "zone": "ಪಶ್ಚಿಮ ಅಥವಾ ವಾಯುವ್ಯ (ಅಡುಗೆ ಮನೆಗೆ ಹೊಂದಿಕೊಂಡಂತೆ)",
                        "rules": "ಊಟ ಮಾಡುವಾಗ ಪೂರ್ವ ಅಥವಾ ಉತ್ತರಕ್ಕೆ ಮುಖ ಮಾಡುವುದು ಆರೋಗ್ಯ ಮತ್ತು ಜೀರ್ಣಕ್ರಿಯೆಗೆ ಅತ್ಯುತ್ತಮ. ಡೈನಿಂಗ್ ಟೇಬಲ್ ಚೌಕ ಅಥವಾ ಆಯತಾಕಾರದಲ್ಲಿರಲಿ."
                    },
                    {
                        "name": "ಬ್ರಹ್ಮಸ್ಥಾನ (ಮನೆಯ ಕೇಂದ್ರ ಬಿಂದು)",
                        "zone": "ಮನೆಯ ನಿಖರ ಮಧ್ಯಭಾಗ (ವಾಸ್ತು ಪುರುಷನ ನಾಭಿ)",
                        "rules": "ಸಂಪೂರ್ಣ ಮುಕ್ತ, ಸ್ವಚ್ಛ ಮತ್ತು ಗಾಳಿಯಾಡುವಂತಿರಬೇಕು. ಯಾವುದೇ ಕಂಬ, ಮೆಟ್ಟಿಲು, ಶೌಚಾಲಯ ಅಥವಾ ಭಾರವಾದ ಹೊರೆ ಇರಬಾರದು. ಇದು ಕುಟುಂಬದ ಆರೋಗ್ಯ ಹಾಗೂ ನೆಮ್ಮದಿಯ ಮೂಲ."
                    },
                    {
                        "name": "ಮುಖ್ಯ ಪ್ರವೇಶ ಮಂಟಪ / ಫೋಯರ್",
                        "zone": "ಉತ್ತರ, ಪೂರ್ವ ಅಥವಾ ಈಶಾನ್ಯ",
                        "rules": "ಮನೆಗೆ ಸಕಾರಾತ್ಮಕ ಶಕ್ತಿಯನ್ನು ಬರಮಾಡಿಕೊಳ್ಳುವ ಸ್ವಚ್ಛ ಪ್ರವೇಶದ್ವಾರ. ಶೂ ರ್ಯಾಕ್ ಮತ್ತು ಛತ್ರಿಗಳನ್ನು ವಾಯುವ್ಯ ಅಥವಾ ಪಶ್ಚಿಮಕ್ಕೆ ಇಡಿ, ಮುಖ್ಯ ಬಾಗಿಲಿಗೆ ಎದುರಾಗಿ ಇಡಬೇಡಿ."
                    },
                    {
                        "name": "ಕೇಂದ್ರ ಅಂಗಳ / ತೆರೆದ ಆಕಾಶ ಜಾಗ (ಅಂಗಳ)",
                        "zone": "ಈಶಾನ್ಯ ಅಥವಾ ಕೇಂದ್ರ ಬ್ರಹ್ಮಸ್ಥಾನ",
                        "rules": "ಡ್ಯೂಪ್ಲೆಕ್ಸ್ ಮಹಡಿಗಳಿಗೆ ನೈಸರ್ಗಿಕ ಬೆಳಕು ಮತ್ತು ಗಾಳಿ ನೀಡುತ್ತದೆ. ಮಳೆನೀರಿನ ಇಳಿಜಾರು ಈಶಾನ್ಯಕ್ಕೆ ಇರಲಿ; ಕಂಬಗಳ ಭಾರ ಇರಬಾರದು."
                    }
                ]
            },
            {
                "category": "ಮಲಗುವ ಕೋಣೆಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಸ್ಥಳಗಳು",
                "items": [
                    {
                        "name": "ಮುಖ್ಯ ಮಲಗುವ ಕೋಣೆ (ಮಾಸ್ಟರ್ ಬೆಡ್‌ರೂಮ್)",
                        "zone": "ದಕ್ಷಿಣ-ಪಶ್ಚಿಮ (ನೈಋತ್ಯ - ಪೃಥ್ವಿ ತತ್ವ / ಸ್ಥಿರತೆ)",
                        "rules": "ಮನೆಯ ಯಜಮಾನರಿಗೆ ಮೀಸಲು. ಮಲಗುವಾಗ ತಲೆ ದಕ್ಷಿಣಕ್ಕೆ (ಮೊದಲ ಆಯ್ಕೆ) ಅಥವಾ ಪೂರ್ವಕ್ಕೆ ಇರಲಿ; ಉತ್ತರಕ್ಕೆ ಎಂದಿಗೂ ಬೇಡ. ವಾರ್ಡ್‌ರೋಬ್ ಮತ್ತು ಹಣದ ಲಾಕರ್ ದಕ್ಷಿಣ/ಪಶ್ಚಿಮ ಗೋಡೆಗೆ ಇರಲಿ."
                    },
                    {
                        "name": "ಮಕ್ಕಳ ಕೋಣೆ ಮತ್ತು ಅಧ್ಯಯನ ಕೊಠಡಿ",
                        "zone": "ಪಶ್ಚಿಮ (ಬುದ್ಧಿಶಕ್ತಿ/ಬೆಳವಣಿಗೆ) ಅಥವಾ ಈಶಾನ್ಯ/ಉತ್ತರ",
                        "rules": "ಓದುವ ಟೇಬಲ್ ಅನ್ನು ಪೂರ್ವ ಅಥವಾ ಉತ್ತರಕ್ಕೆ ಮುಖ ಮಾಡಿ ಓದುವಂತೆ ಇರಿಸಿ. ಪುಸ್ತಕಗಳನ್ನು ದಕ್ಷಿಣ ಅಥವಾ ಪಶ್ಚಿಮದ ಶೆಲ್ಫ್‌ನಲ್ಲಿ ಇಡಿ."
                    },
                    {
                        "name": "ಅತಿಥಿ ಕೊಠಡಿ (ಗೆಸ್ಟ್ ಬೆಡ್‌ರೂಮ್)",
                        "zone": "ಉತ್ತರ-ಪಶ್ಚಿಮ (ವಾಯುವ್ಯ - ವಾಯು ತತ್ವ)",
                        "rules": "ಹಿತಕರವಾದ ತಾತ್ಕಾಲಿಕ ವಾಸ್ತವ್ಯವನ್ನು ಉತ್ತೇಜಿಸುತ್ತದೆ. ಮನೆಯ ಮಾಲೀಕತ್ವದ ಹಿಡಿತ ಉಳಿಸಿಕೊಳ್ಳಲು ಅತಿಥಿಗಳಿಗೆ ನೈಋತ್ಯ ಕೋಣೆಯನ್ನು ಎಂದಿಗೂ ನೀಡಬೇಡಿ."
                    },
                    {
                        "name": "ಹಿರಿಯರ / ಅಜ್ಜ-ಅಜ್ಜಿಯರ ಕೋಣೆ",
                        "zone": "ನೆಲಮಹಡಿಯ ದಕ್ಷಿಣ ಅಥವಾ ಪಶ್ಚಿಮ",
                        "rules": "ಶಾಂತ ಹಾಗೂ ಸ್ಥಿರ ವಾತಾವರಣ. ವಾತದ ತೊಂದರೆ ತಪ್ಪಿಸಲು ಗಾಳಿಯ ವಾಯುವ್ಯ ದಿಕ್ಕು ಬೇಡ. ದೀರ್ಘಾಯುಷ್ಯಕ್ಕಾಗಿ ಮಲಗುವಾಗ ತಲೆ ದಕ್ಷಿಣಕ್ಕೆ ಇರಲಿ."
                    },
                    {
                        "name": "ಗೃಹ ಕಚೇರಿ / ಗ್ರಂಥಾಲಯ",
                        "zone": "ಉತ್ತರ (ಕುಬೇರ - ಸಂಪತ್ತು/ವೃತ್ತಿ) ಅಥವಾ ಪಶ್ಚಿಮ",
                        "rules": "ಕೆಲಸ ಮಾಡುವಾಗ ಉತ್ತರ ಅಥವಾ ಪೂರ್ವಕ್ಕೆ ಮುಖ ಮಾಡಿ. ಬೆನ್ನಿನ ಹಿಂದೆ ಗಟ್ಟಿಮುಟ್ಟಾದ ಗೋಡೆ ಇರಲಿ (ಕಿಟಕಿ ಅಥವಾ ಬಾಗಿಲು ಬೆನ್ನಿನ ಹಿಂದಿರಬಾರದು)."
                    },
                    {
                        "name": "ಡ್ರೆಸ್ಸಿಂಗ್ ರೂಮ್ ಮತ್ತು ವಾರ್ಡ್‌ರೋಬ್",
                        "zone": "ಮಾಸ್ಟರ್ ಬೆಡ್‌ರೂಮ್‌ನ ದಕ್ಷಿಣ ಅಥವಾ ಪಶ್ಚಿಮ ಭಾಗ",
                        "rules": "ಭಾರವಾದ ಬೀರುಗಳನ್ನು ದಕ್ಷಿಣ/ಪಶ್ಚಿಮದಲ್ಲಿ ಇರಿಸಿ. ಪೂರ್ಣ ಪ್ರಮಾಣದ ಕನ್ನಡಿಯನ್ನು ಉತ್ತರ ಅಥವಾ ಪೂರ್ವ ಗೋಡೆಗೆ ಅಳವಡಿಸಿ."
                    },
                    {
                        "name": "ಹಣದ ತಿಜೋರಿ / ಚಿನ್ನಾಭರಣ ಲಾಕರ್",
                        "zone": "ನೈಋತ್ಯ ಕೋಣೆಯ ದಕ್ಷಿಣ ಗೋಡೆ, ಉತ್ತರಕ್ಕೆ ತೆರೆಯುವುದು",
                        "rules": "ಲಾಕರ್ ದಕ್ಷಿಣ ಗೋಡೆಗೆ ತಾಗಿ ಉತ್ತರಕ್ಕೆ (ಕುಬೇರ ದಿಕ್ಕು) ತೆರೆಯಬೇಕು. ಲಾಕರ್ ಸಮತಟ್ಟಾಗಿರಲಿ ಮತ್ತು ಬಾಗಿಲಿನಿಂದ ನೇರವಾಗಿ ಕಾಣಿಸಬಾರದು."
                    }
                ]
            },
            {
                "category": "ಡ್ಯೂಪ್ಲೆಕ್ಸ್ ಮತ್ತು ಮೇಲ್ಮಹಡಿ ವಾಸ್ತುಶಿಲ್ಪ",
                "items": [
                    {
                        "name": "ಡ್ಯೂಪ್ಲೆಕ್ಸ್ ಮತ್ತು ಆಂತರಿಕ ಮೆಟ್ಟಿಲುಗಳು",
                        "zone": "ದಕ್ಷಿಣ, ನೈಋತ್ಯ ಅಥವಾ ಪಶ್ಚಿಮ (ಭಾರವಾದ ಬೆಂಬಲ)",
                        "rules": "ಮೆಟ್ಟಿಲುಗಳು ಪ್ರದಕ್ಷಿಣಾಕಾರವಾಗಿ (ಕ್ಲಾಕ್‌ವೈಸ್) ಏರಬೇಕು. ಒಟ್ಟು ಮೆಟ್ಟಿಲುಗಳ ಸಂಖ್ಯೆ ಬೆಸವಾಗಿರಲಿ (1, 3, 5, 7, 9). ಈಶಾನ್ಯ ಅಥವಾ ಬ್ರಹ್ಮಸ್ಥಾನದಲ್ಲಿ ಎಂದಿಗೂ ಬೇಡ."
                    },
                    {
                        "name": "ಹೋಮ್ ಲಿಫ್ಟ್ / ಎಲಿವೇಟರ್",
                        "zone": "ದಕ್ಷಿಣ, ನೈಋತ್ಯ ಅಥವಾ ಪಶ್ಚಿಮದ ಶಾಫ್ಟ್",
                        "rules": "ಭಾರವಾದ ದಿಕ್ಕುಗಳಲ್ಲಿ ಯಾಂತ್ರಿಕ ಲಿಫ್ಟ್ ಇರಲಿ. ಸೂಕ್ಷ್ಮ ಕಾಂತೀಯ ಶಕ್ತಿ ಕಾಪಾಡಲು ಈಶಾನ್ಯ ಅಥವಾ ಬ್ರಹ್ಮಸ್ಥಾನದಲ್ಲಿ ಲಿಫ್ಟ್ ಇಡಬೇಡಿ."
                    },
                    {
                        "name": "ಡ್ಯೂಪ್ಲೆಕ್ಸ್ ಮೇಲ್ಮಹಡಿ ಎತ್ತರ ಮತ್ತು ತೂಕ",
                        "zone": "ದಕ್ಷಿಣ/ಪಶ್ಚಿಮ ಎತ್ತರ ಮತ್ತು ಗಟ್ಟಿ; ಉತ್ತರ/ಪೂರ್ವ ತಗ್ಗು",
                        "rules": "ಡ್ಯೂಪ್ಲೆಕ್ಸ್ ಮನೆಗಳಲ್ಲಿ ಮೇಲ್ಮಹಡಿಯ ದಕ್ಷಿಣ ಮತ್ತು ಪಶ್ಚಿಮ ಭಾಗವು ಹೆಚ್ಚು ಎತ್ತರ ಮತ್ತು ಭಾರವಾಗಿರಬೇಕು. ಉತ್ತರ ಮತ್ತು ಪೂರ್ವ ಭಾಗಗಳು ತಗ್ಗಾಗಿದ್ದು ವಿಶಾಲ ಟೆರೇಸ್ ಹೊಂದಿರಬೇಕು."
                    },
                    {
                        "name": "ಮೇಲ್ಮಹಡಿಯ ಮಾಸ್ಟರ್ ಸೂಟ್ (ಡ್ಯೂಪ್ಲೆಕ್ಸ್)",
                        "zone": "ಮೇಲ್ಮಹಡಿಯ ನೈಋತ್ಯ (ದಕ್ಷಿಣ-ಪಶ್ಚಿಮ)",
                        "rules": "ಮನೆಯ ಮುಖ್ಯಸ್ಥರಿಗೆ ಅತ್ಯುನ್ನತ ನೆಮ್ಮದಿ ಮತ್ತು ಅಧಿಕಾರ ನೀಡುತ್ತದೆ. ಹಾಸಿಗೆಯ ಕೆಳಗೆ ಕೆಳಮಹಡಿಯ ಅಡುಗೆ ಸ್ಟೌವ್ ಅಥವಾ ಶೌಚಾಲಯ ಇರಬಾರದು."
                    },
                    {
                        "name": "ಮೇಲ್ಮಹಡಿಯ ಫ್ಯಾಮಿಲಿ ಲೌಂಜ್ / ಮೆಜ್ಜನೈನ್",
                        "zone": "ಉತ್ತರ, ಪೂರ್ವ ಅಥವಾ ಮಧ್ಯ-ಉತ್ತರ",
                        "rules": "ಡಬಲ್ ಹೈಟ್ ಓಪನಿಂಗ್‌ಗಳು ಈಶಾನ್ಯ ಮತ್ತು ಮಧ್ಯಭಾಗದಲ್ಲಿ ಇದ್ದರೆ ಎರಡು ಮಹಡಿಗಳಿಗೂ ಸಮೃದ್ಧ ನೈಸರ್ಗಿಕ ಬೆಳಕು ಹರಿಯುತ್ತದೆ."
                    },
                    {
                        "name": "ಬಾಲ್ಕನಿ, ವರಾಂಡ ಮತ್ತು ತೆರೆದ ಟೆರೇಸ್",
                        "zone": "ಉತ್ತರ, ಪೂರ್ವ ಅಥವಾ ಈಶಾನ್ಯ",
                        "rules": "ಬೆಳಗಿನ ಪ್ರಾಣಶಕ್ತಿಯ ಸೂರ್ಯನ ಬೆಳಕಿಗಾಗಿ ಮುಕ್ತವಾಗಿರಲಿ. ಟೆರೇಸ್ ನೀರಿನ ಇಳಿಜಾರು ಈಶಾನ್ಯಕ್ಕೆ ಇರಲಿ. ಪ್ಯಾರಾಪೆಟ್ ಗೋಡೆ ದಕ್ಷಿಣ/ಪಶ್ಚಿಮದಲ್ಲಿ ಎತ್ತರವಾಗಿರಲಿ."
                    },
                    {
                        "name": "ಸ್ಕೈಲೈಟ್ಸ್ ಮತ್ತು ನೈಸರ್ಗಿಕ ಬೆಳಕಿನ ಕಿಂಡಿಗಳು",
                        "zone": "ಉತ್ತರ, ಪೂರ್ವ ಅಥವಾ ಛಾವಣಿಯ ಮೇಲ್ಭಾಗ",
                        "rules": "ಡ್ಯೂಪ್ಲೆಕ್ಸ್ ಆಳಕ್ಕೆ ನೈಸರ್ಗಿಕ ಬೆಳಕನ್ನು ತರುತ್ತದೆ. ಅತಿಯಾದ ಬಿಸಿಲು ತಡೆಯಲು ಯುವಿ-ಫಿಲ್ಟರ್ ಗ್ಲಾಸ್ ಬಳಸಿ ಪೂರ್ವ ಅಥವಾ ಉತ್ತರಕ್ಕೆ ಇರಿಸಿ."
                    }
                ]
            },
            {
                "category": "ವಿಶೇಷ ಜೀವನಶೈಲಿ ಮತ್ತು ಕ್ಷೇಮ ಸ್ಥಳಗಳು",
                "items": [
                    {
                        "name": "ಹೋಮ್ ಥಿಯೇಟರ್ / ಮೀಡಿಯಾ ರೂಮ್",
                        "zone": "ದಕ್ಷಿಣ-ಪಶ್ಚಿಮ (ಧ್ವನಿ ಹೀರುವಿಕೆ) ಅಥವಾ ವಾಯುವ್ಯ",
                        "rules": "ಭಾರವಾದ ಅಕೌಸ್ಟಿಕ್ ಪ್ಯಾನೆಲ್ ಮತ್ತು ಆಸನಗಳು ದಕ್ಷಿಣ/ಪಶ್ಚಿಮದಲ್ಲಿರಲಿ. ಸ್ಕ್ರೀನ್ ಉತ್ತರ ಅಥವಾ ಪೂರ್ವ ಗೋಡೆಗೆ ಇರಲಿ. ಈಶಾನ್ಯದಲ್ಲಿ ಬೇಡ."
                    },
                    {
                        "name": "ಜಿಮ್ ಮತ್ತು ವ್ಯಾಯಾಮ ಕೊಠಡಿ",
                        "zone": "ದಕ್ಷಿಣ-ಪಶ್ಚಿಮ, ದಕ್ಷಿಣ ಅಥವಾ ಪಶ್ಚಿಮ",
                        "rules": "ಭಾರವಾದ ತೂಕದ ಉಪಕರಣಗಳು ಮತ್ತು ಯಂತ್ರಗಳು ನೈಋತ್ಯಕ್ಕೆ ಶುಭ. ಕನ್ನಡಿಗಳನ್ನು ಉತ್ತರ ಅಥವಾ ಪೂರ್ವ ಗೋಡೆಗಳಿಗೆ ಅಳವಡಿಸಿ."
                    },
                    {
                        "name": "ಯೋಗ ಮತ್ತು ಧ್ಯಾನ ಕೊಠಡಿ",
                        "zone": "ಈಶಾನ್ಯ (ಉತ್ತರ-ಪೂರ್ವ) ಅಥವಾ ಪೂರ್ವ",
                        "rules": "ಶಾಂತ ಮತ್ತು ಪವಿತ್ರ ವಾತಾವರಣ ಅಗತ್ಯ. ನೈಸರ್ಗಿಕ ಮರದ ನೆಲಹಾಸು ಬಳಸಿ ಧ್ಯಾನ ಮಾಡುವಾಗ ಪೂರ್ವಕ್ಕೆ ಮುಖ ಮಾಡಿ."
                    },
                    {
                        "name": "ಯುಟಿಲಿಟಿ, ವಾಷಿಂಗ್ ಮತ್ತು ಲಾಂಡ್ರಿ ಜಾಗ",
                        "zone": "ದಕ್ಷಿಣ-ಪೂರ್ವ (ಆಗ್ನೇಯ) ಅಥವಾ ವಾಯುವ್ಯ",
                        "rules": "ವಾಷಿಂಗ್ ಮೆಷಿನ್ ಮತ್ತು ಸಿಂಕ್ ನೀರಿನ ಹರಿವು ಉತ್ತರ ಅಥವಾ ಪೂರ್ವಕ್ಕೆ ಇರಲಿ. ಬಟ್ಟೆ ಒಣಗಿಸುವ ಜಾಗ ದಕ್ಷಿಣ ಅಥವಾ ಪಶ್ಚಿಮ ಟೆರೇಸ್‌ನಲ್ಲಿರಲಿ."
                    },
                    {
                        "name": "ಸಹಾಯಕರ / ಕಾವಲುಗಾರರ ಕೊಠಡಿ",
                        "zone": "ದಕ್ಷಿಣ-ಪೂರ್ವ ಅಥವಾ ವಾಯುವ್ಯ ಮೂಲೆ",
                        "rules": "ಮನೆಯ ಯಜಮಾನಿಕೆಯ ನಿಯಂತ್ರಣ ಉಳಿಸಿಕೊಳ್ಳಲು ಕೆಲಸಗಾರರಿಗೆ ನೈಋತ್ಯ ಕೊಠಡಿಯನ್ನು ಎಂದಿಗೂ ನೀಡಬೇಡಿ."
                    }
                ]
            },
            {
                "category": "ಉಪಯುಕ್ತತೆಗಳು, ನೀರು ಮತ್ತು ಸೈಟ್ ವ್ಯವಸ್ಥೆಗಳು",
                "items": [
                    {
                        "name": "ಶೌಚಾಲಯ ಮತ್ತು ಸ್ನಾನಗೃಹ",
                        "zone": "ಪಶ್ಚಿಮ-ವಾಯುವ್ಯ (WNW) ಅಥವಾ ವಾಯುವ್ಯ",
                        "rules": "ಕಮೋಡ್ ಉತ್ತರ-ದಕ್ಷಿಣ ಅಕ್ಷದಲ್ಲಿರಲಿ (ಕೂತಾಗ ಉತ್ತರ ಅಥವಾ ದಕ್ಷಿಣಕ್ಕೆ ಮುಖ). ಗೀಸರ್ ಆಗ್ನೇಯದಲ್ಲಿರಲಿ. ಈಶಾನ್ಯ ಮತ್ತು ಬ್ರಹ್ಮಸ್ಥಾನದಲ್ಲಿ ಶೌಚಾಲಯ ಕಟ್ಟುನಿಟ್ಟಾಗಿ ನಿಷೇಧ."
                    },
                    {
                        "name": "ಮುಖ್ಯ ಪ್ರವೇಶ ದ್ವಾರ (ಮಹಾದ್ವಾರ)",
                        "zone": "ಉತ್ತರ (ಕುಬೇರ/ಮುಖ್ಯ), ಪೂರ್ವ (ಜಯಂತ/ಇಂದ್ರ), ಅಥವಾ ಪಶ್ಚಿಮ (ಪುಷ್ಪದಂತ)",
                        "rules": "ಮನೆಯ ಅತಿ ದೊಡ್ಡ ಮತ್ತು ಸುಂದರ ಬಾಗಿಲಾಗಿರಲಿ. ಹೊಸ್ತಿಲು ಇರಲಿ, ಬೆಳಕಿನ ವ್ಯವಸ್ಥೆ ಉತ್ತಮವಾಗಿರಲಿ, ಗಡಿಯಾರದ ದಿಕ್ಕಿನಲ್ಲಿ ಒಳಕ್ಕೆ ತೆರೆಯಬೇಕು."
                    },
                    {
                        "name": "ಮೇಲ್ಛಾವಣಿ ನೀರಿನ ಟ್ಯಾಂಕ್ (ಓವರ್‌ಹೆಡ್ ಟ್ಯಾಂಕ್)",
                        "zone": "ನಿಖರ ನೈಋತ್ಯ (ದಕ್ಷಿಣ-ಪಶ್ಚಿಮ - ಎತ್ತರದ ಬಿಂದು)",
                        "rules": "ಕಟ್ಟಡದ ಅತಿ ಎತ್ತರದ ನೈಋತ್ಯ ಭಾಗದಲ್ಲಿ ಎತ್ತರಿಸಿ ಇಡಬೇಕು. ಈಶಾನ್ಯ ಅಥವಾ ಕೇಂದ್ರದಲ್ಲಿ ಎಂದಿಗೂ ಇಡಬೇಡಿ."
                    },
                    {
                        "name": "ಭೂಗತ ನೀರಿನ ತೊಟ್ಟಿ / ಬೋರ್‌ವೆಲ್ / ಮಳೆನೀರು",
                        "zone": "ಈಶಾನ್ಯ (ಉತ್ತರ-ಪೂರ್ವ) ಅಥವಾ ಉತ್ತರ",
                        "rules": "ಈಶಾನ್ಯದಲ್ಲಿ ನೆಲದ ಕೆಳಗೆ ಇರಿಸುವುದರಿಂದ ಸಮೃದ್ಧಿ ಮತ್ತು ಶಾಂತಿ ಆಕರ್ಷಿಸುತ್ತದೆ. ದಕ್ಷಿಣ, ನೈಋತ್ಯ ಅಥವಾ ಆಗ್ನೇಯದಲ್ಲಿ ಕಟ್ಟುನಿಟ್ಟಾಗಿ ನಿಷೇಧ."
                    },
                    {
                        "name": "ಕಾರು ಪಾರ್ಕಿಂಗ್ / ಗ್ಯಾರೇಜ್",
                        "zone": "ಉತ್ತರ-ಪಶ್ಚಿಮ (ವಾಯುವ್ಯ) ಅಥವಾ ಆಗ್ನೇಯ",
                        "rules": "ವಾಹನಗಳು ನಿಲ್ಲಿಸಿದಾಗ ಪೂರ್ವ ಅಥವಾ ಉತ್ತರಕ್ಕೆ ಮುಖ ಮಾಡಿರಲಿ. ಈಶಾನ್ಯದಲ್ಲಿ ಪಾರ್ಕಿಂಗ್ ಮಾಡಬೇಡಿ."
                    },
                    {
                        "name": "ಸ್ಟೋರ್ ರೂಮ್ ಮತ್ತು ಭಾರವಾದ ಸಂಗ್ರಹಣೆ",
                        "zone": "ದಕ್ಷಿಣ-ಪಶ್ಚಿಮ ಅಥವಾ ದಕ್ಷಿಣ",
                        "rules": "ಭಾರವಾದ ವಸ್ತುಗಳು ಮತ್ತು ಧಾನ್ಯಗಳ ಸಂಗ್ರಹವು ನೈಋತ್ಯದಲ್ಲಿದ್ದರೆ ಮನೆಗೆ ಸ್ಥಿರತೆ ಮತ್ತು ಶಕ್ತಿ ನೀಡುತ್ತದೆ."
                    },
                    {
                        "name": "ವಿದ್ಯುತ್ ಮೀಟರ್, ಸೋಲಾರ್ ಮತ್ತು ಇನ್ವರ್ಟರ್",
                        "zone": "ದಕ್ಷಿಣ-ಪೂರ್ವ (ಆಗ್ನೇಯ - ಅಗ್ನಿ ತತ್ವ)",
                        "rules": "ವಿದ್ಯುತ್ ಮೀಟರ್ ಬೋರ್ಡ್, ಸೋಲಾರ್ ಇನ್ವರ್ಟರ್ ಮತ್ತು ಬ್ಯಾಟರಿಗಳು ಆಗ್ನೇಯದಲ್ಲಿರಲಿ. ಸೋಲಾರ್ ಪ್ಯಾನೆಲ್ ದಕ್ಷಿಣಕ್ಕೆ ಇಳಿಜಾರಾಗಿರಲಿ."
                    },
                    {
                        "name": "ಸೆಪ್ಟಿಕ್ ಟ್ಯಾಂಕ್ ಮತ್ತು ಒಳಚರಂಡಿ",
                        "zone": "ಪಶ್ಚಿಮ-ವಾಯುವ್ಯ (WNW) ಅಥವಾ ವಾಯುವ್ಯ",
                        "rules": "ಕಾಂಪೌಂಡ್ ಗೋಡೆಗೆ ನೇರವಾಗಿ ತಾಗಬಾರದು. ಈಶಾನ್ಯ, ನೈಋತ್ಯ ಅಥವಾ ಬ್ರಹ್ಮಸ್ಥಾನದಲ್ಲಿ ಎಂದಿಗೂ ಇರಬಾರದು."
                    },
                    {
                        "name": "ನೆಲಮಾಳಿಗೆ / ಬೇಸ್‌ಮೆಂಟ್",
                        "zone": "ನಿವೇಶನದ ಉತ್ತರ ಅಥವಾ ಪೂರ್ವಾರ್ಧ ಮಾತ್ರ",
                        "rules": "ಈಶಾನ್ಯ ಅಥವಾ ಪೂರ್ವದಲ್ಲಿ ಬೇಸ್‌ಮೆಂಟ್ ಇದ್ದರೆ ಸಮೃದ್ಧಿ. ನೈಋತ್ಯದ ಕೆಳಗೆ ಮಾತ್ರ ಬೇಸ್‌ಮೆಂಟ್ ಮಾಡಬೇಡಿ, ಇದು ಸ್ಥಿರತೆಯನ್ನು ಹಾಳುಮಾಡುತ್ತದೆ."
                    },
                    {
                        "name": "ಈಜುಕೊಳ ಮತ್ತು ಕಾರಂಜಿಗಳು",
                        "zone": "ಉತ್ತರ-ಪೂರ್ವ (ಈಶಾನ್ಯ) ಅಥವಾ ಉತ್ತರ",
                        "rules": "ಈಶಾನ್ಯದಲ್ಲಿ ಜಲಮೂಲಗಳು ಸಂಪತ್ತು ಮತ್ತು ನೆಮ್ಮದಿ ಹೆಚ್ಚಿಸುತ್ತವೆ. ನೀರಿನ ಇಳಿಜಾರು ಈಶಾನ್ಯಕ್ಕೆ ಇರಲಿ. ನೈಋತ್ಯದಲ್ಲಿ ಎಂದಿಗೂ ಬೇಡ."
                    },
                    {
                        "name": "ಕಾಂಪೌಂಡ್ ಗೋಡೆ ಮತ್ತು ಗೇಟ್‌ಗಳು",
                        "zone": "ದಕ್ಷಿಣ ಮತ್ತು ಪಶ್ಚಿಮ ಎತ್ತರ/ದಪ್ಪ; ಉತ್ತರ ಮತ್ತು ಪೂರ್ವ ಕಡಿಮೆ",
                        "rules": "ದಕ್ಷಿಣ ಮತ್ತು ಪಶ್ಚಿಮದ ಗೋಡೆಗಳು ದಪ್ಪ ಮತ್ತು ಎತ್ತರವಾಗಿದ್ದು ನಕಾರಾತ್ಮಕ ಶಾಖ ತಡೆಯುತ್ತವೆ. ಉತ್ತರ ಮತ್ತು ಪೂರ್ವದ ಗೋಡೆಗಳು ಹಗುರವಾಗಿರಲಿ."
                    },
                    {
                        "name": "ಉದ್ಯಾನವನ, ತುಳಸಿ ಮತ್ತು ಗಿಡಮರಗಳು",
                        "zone": "ತುಳಸಿ ಈಶಾನ್ಯ/ಪೂರ್ವದಲ್ಲಿ; ದೊಡ್ಡ ಮರಗಳು ನೈಋತ್ಯ/ದಕ್ಷಿಣದಲ್ಲಿ",
                        "rules": "ತುಳಸಿ ಗಿಡವನ್ನು ಈಶಾನ್ಯದಲ್ಲಿಟ್ಟರೆ ಸಕಾರಾತ್ಮಕ ಪ್ರಾಣಶಕ್ತಿ ಹೆಚ್ಚುತ್ತದೆ. ಎತ್ತರದ ನಿತ್ಯಹರಿದ್ವರ್ಣ ಮರಗಳನ್ನು ನೈಋತ್ಯ ಅಥವಾ ದಕ್ಷಿಣದಲ್ಲಿ ನೆಡಿ."
                    }
                ]
            },
            {
                "category": "ಗೃಹೋಪಯೋಗಿ ಉಪಕರಣಗಳು ಮತ್ತು ಹೆಚ್ಚುವರಿ ಅಂಶಗಳು",
                "items": [
                    {
                        "name": "ಗ್ಯಾಸ್ ಸಿಲಿಂಡರ್ ಮತ್ತು ಅಡುಗೆ ಅನಿಲ ಪೈಪ್‌ಲೈನ್",
                        "zone": "ಆಗ್ನೇಯ (ದಕ್ಷಿಣ-ಪೂರ್ವ - ಅಗ್ನಿ ಮೂಲೆ)",
                        "rules": "ಗ್ಯಾಸ್ ಸಿಲಿಂಡರ್ ಮತ್ತು ಅನಿಲ ಸಂಪರ್ಕವನ್ನು ಆಗ್ನೇಯ ಮೂಲೆಯಲ್ಲಿಯೇ ಇಡಬೇಕು. ಈಶಾನ್ಯ ಮತ್ತು ಬ್ರಹ್ಮಸ್ಥಾನದಲ್ಲಿ ಸಿಲಿಂಡರ್ ಇಡಬಾರದು. ಸುರಕ್ಷಿತ ಗಾಳಿ ಬೆಳಕಿನ ವ್ಯವಸ್ಥೆ ಇರಲಿ."
                    },
                    {
                        "name": "ಸೋಲಾರ್ ವಾಟರ್ ಹೀಟರ್ ಮತ್ತು ಹೀಟ್ ಪಂಪ್",
                        "zone": "ಮಹಡಿಯ ದಕ್ಷಿಣ-ಪೂರ್ವ ಅಥವಾ ದಕ್ಷಿಣ ಭಾಗ",
                        "rules": "ಸೋಲಾರ್ ವಾಟರ್ ಹೀಟರ್ ಅನ್ನು ಮೇಲ್ಛಾವಣಿಯ ಆಗ್ನೇಯ ಅಥವಾ ದಕ್ಷಿಣ ಭಾಗದಲ್ಲಿ ಅಳವಡಿಸಬೇಕು. ಈಶಾನ್ಯ ಅಥವಾ ಉತ್ತರ ಭಾಗದಲ್ಲಿ ಇಡುವುದನ್ನು ತಪ್ಪಿಸಿ."
                    },
                    {
                        "name": "ವಾಷಿಂಗ್ ಮೆಷಿನ್ ಮತ್ತು ಡಿಶ್‌ವಾಷರ್",
                        "zone": "ವಾಯುವ್ಯ (ಉತ್ತರ-ಪಶ್ಚಿಮ) ಅಥವಾ ಆಗ್ನೇಯ",
                        "rules": "ನೀರಿನ ಹೊರಹರಿವು ಉತ್ತರ ಅಥವಾ ಪೂರ್ವಕ್ಕೆ ಇರಬೇಕು. ಈಶಾನ್ಯ ಮೂಲೆಯಲ್ಲಿ ಭಾರವಾದ ಎಲೆಕ್ಟ್ರಿಕಲ್ ವಾಷಿಂಗ್ ಮೆಷಿನ್ ಇಡಬೇಡಿ."
                    },
                    {
                        "name": "ರೆಫ್ರಿಜರೇಟರ್ (ಫ್ರಿಜ್) ಮತ್ತು ಡೀಪ್ ಫ್ರೀಜರ್",
                        "zone": "ಅಡುಗೆಮನೆಯ ದಕ್ಷಿಣ-ಪಶ್ಚಿಮ, ಪಶ್ಚಿಮ ಅಥವಾ ವಾಯುವ್ಯ",
                        "rules": "ಫ್ರಿಜ್ ಅನ್ನು ದಕ್ಷಿಣ ಅಥವಾ ಪಶ್ಚಿಮ ಗೋಡೆಗೆ ಹೊಂದಿಸಿ ಇಡಿ. ಅಡುಗೆಮನೆಯ ಈಶಾನ್ಯ ಮೂಲೆಯಲ್ಲಿ ಫ್ರಿಜ್ ಇಡಲೇಬಾರದು."
                    },
                    {
                        "name": "ಗೋಡೆ ಗಡಿಯಾರಗಳು",
                        "zone": "ಉತ್ತರ, ಪೂರ್ವ ಅಥವಾ ಪಶ್ಚಿಮ ಗೋಡೆಗಳು",
                        "rules": "ಗಡಿಯಾರಗಳನ್ನು ಉತ್ತರ (ಕುಬೇರ/ಧನ ಸಂಪತ್ತು) ಅಥವಾ ಪೂರ್ವ ಗೋಡೆಗಳ ಮೇಲೆ ಅಳವಡಿಸಿ. ನಿಂತುಹೋದ ಗಡಿಯಾರಗಳನ್ನು ಇಡಬೇಡಿ, ಮುಖ್ಯ ಬಾಗಿಲಿನ ಮೇಲ್ಭಾಗದಲ್ಲಿ ನೇತುಹಾಕಬೇಡಿ."
                    },
                    {
                        "name": "ಕನ್ನಡಿಗಳು ಮತ್ತು ಡ್ರೆಸ್ಸಿಂಗ್ ಟೇಬಲ್",
                        "zone": "ಉತ್ತರ ಅಥವಾ ಪೂರ್ವ ಗೋಡೆ",
                        "rules": "ಕನ್ನಡಿಗಳನ್ನು ಉತ್ತರ ಅಥವಾ ಪೂರ್ವ ಗೋಡೆಗೆ ಅಳವಡಿಸಬೇಕು. ಮಲಗುವ ಹಾಸಿಗೆ ಅಥವಾ ಮುಖ್ಯ ಪ್ರವೇಶ ದ್ವಾರಕ್ಕೆ ಎದುರಾಗಿ ಕನ್ನಡಿ ಇರಬಾರದು."
                    },
                    {
                        "name": "ಶೂ ರ್ಯಾಕ್ (ಪಾದರಕ್ಷೆಗಳ ಕಪಾಟು)",
                        "zone": "ವಾಯುವ್ಯ ಅಥವಾ ಪಶ್ಚಿಮ (ಮನೆಯ ಹೊರಭಾಗ)",
                        "rules": "ಶೂ ರ್ಯಾಕ್ ಅನ್ನು ಪಶ್ಚಿಮ ಅಥವಾ ವಾಯುವ್ಯ ಭಾಗದಲ್ಲಿ ಇಡಿ. ಈಶಾನ್ಯ ಮೂಲೆಯಲ್ಲಿ, ಪೂಜಾ ಕೋಣೆಯ ಕೆಳಗೆ ಅಥವಾ ಮುಖ್ಯ ಬಾಗಿಲಿನ ಮುಂಭಾಗದಲ್ಲಿ ಶೂ ರ್ಯಾಕ್ ಇಡಲೇಬಾರದು."
                    },
                    {
                        "name": "ಟೆರೇಸ್ ಗಾರ್ಡನ್ ಮತ್ತು ಪರ್ಗೋಲಾ (ಸಿಟ್-ಔಟ್)",
                        "zone": "ಭಾರವಾದ ಕುಂಡಗಳು ನೈಋತ್ಯದಲ್ಲಿ; ಹಗುರವಾದ ಗಿಡಗಳು ಈಶಾನ್ಯದಲ್ಲಿ",
                        "rules": "ಮಹಡಿಯ ಮೇಲೆ ಭಾರವಾದ ಗಿಡಗಳ ಕುಂಡಗಳನ್ನು ದಕ್ಷಿಣ ಮತ್ತು ನೈಋತ್ಯದಲ್ಲಿ ಇಡಿ. ಈಶಾನ್ಯ ಮಹಡಿಯನ್ನು ಮುಕ್ತವಾಗಿ ಮತ್ತು ಹಗುರವಾಗಿ ಇರಿಸಿ."
                    },
                    {
                        "name": "ಸೆಕ್ಯೂರಿಟಿ ಗಾರ್ಡ್ ಕೊಠಡಿ (ಭದ್ರತಾ ಸಿಬ್ಬಂದಿ ಕೊಠಡಿ)",
                        "zone": "ಮುಖ್ಯ ಗೇಟ್‌ನ ನೈಋತ್ಯ ಅಥವಾ ವಾಯುವ್ಯ",
                        "rules": "ಗಾರ್ಡ್ ಕೊಠಡಿಯನ್ನು ಗೇಟ್‌ನ ನೈಋತ್ಯ ಅಥವಾ ವಾಯುವ್ಯದಲ್ಲಿ ನಿರ್ಮಿಸಿ. ಭದ್ರತಾ ಸಿಬ್ಬಂದಿ ಕುಳಿತಾಗ ಪೂರ್ವ ಅಥವಾ ಉತ್ತರಕ್ಕೆ ಮುಖ ಮಾಡಿರಬೇಕು."
                    },
                    {
                        "name": "ಸಾಕುಪ್ರಾಣಿಗಳ ಕೊಠಡಿ (ಡಾಗ್ ಕೆನ್ನೆಲ್)",
                        "zone": "ವಾಯುವ್ಯ (ಉತ್ತರ-ಪಶ್ಚಿಮ - ಪ್ರಾಣಿ ಶಕ್ತಿ) ಅಥವಾ ಉತ್ತರ",
                        "rules": "ಸಾಕುಪ್ರಾಣಿಗಳ ವಾಸಕ್ಕೆ ವಾಯುವ್ಯ ಮೂಲೆ ಅತ್ಯಂತ ಸೂಕ್ತ. ಪಕ್ಷಿಗಳಿಗೆ ಧಾನ್ಯ ಮತ್ತು ನೀರನ್ನು ಉತ್ತರ ಅಥವಾ ಪೂರ್ವದಲ್ಲಿ ಇಡುವುದು ಮಂಗಳಕರ."
                    },
                    {
                        "name": "ಹೊರಗಿನ ಮೆಟ್ಟಿಲುಗಳು (ಬಾಹ್ಯ / ಸರ್ವಿಸ್ ಮೆಟ್ಟಿಲು)",
                        "zone": "ದಕ್ಷಿಣ-ಪಶ್ಚಿಮ, ದಕ್ಷಿಣ ಅಥವಾ ಪಶ್ಚಿಮ ಪರಿಧಿ",
                        "rules": "ಮೆಟ್ಟಿಲುಗಳು ಪ್ರದಕ್ಷಿಣಾಕಾರವಾಗಿ (ಕ್ಲಾಕ್‌ವೈಸ್) ಹತ್ತಬೇಕು. ಈಶಾನ್ಯ ಭಾಗದಲ್ಲಿ ಎಂದಿಗೂ ಹೊರಗಿನ ಮೆಟ್ಟಿಲುಗಳನ್ನು ನಿರ್ಮಿಸಬೇಡಿ."
                    },
                    {
                        "name": "ವಾಟರ್ ಪ್ಯೂರಿಫೈಯರ್ (RO ಫಿಲ್ಟರ್) ಮತ್ತು ಕುಡಿಯುವ ನೀರು",
                        "zone": "ಈಶಾನ್ಯ (ಉತ್ತರ-ಪೂರ್ವ - ಪವಿತ್ರ ಜಲ ಸ್ಥಾನ) ಅಥವಾ ಉತ್ತರ",
                        "rules": "ಕುಡಿಯುವ ನೀರಿನ ಫಿಲ್ಟರ್ ಅನ್ನು ಅಡುಗೆಮನೆಯ ಈಶಾನ್ಯ ಭಾಗದಲ್ಲಿ ಅಳವಡಿಸಿ. ಪೂರ್ವಕ್ಕೆ ಮುಖ ಮಾಡಿ ನೀರು ಕುಡಿಯುವುದು ಆಯುರಾರೋಗ್ಯ ವೃದ್ಧಿಸುತ್ತದೆ."
                    }
                ]
            }
        ]
    },
    "hi": {
        "title": "वास्तु शास्त्र वास्तुशिल्प संदर्भ निर्देशिका",
        "heading": "सभी घरेलू एवं डुप्लेक्स तत्वों के लिए संपूर्ण वास्तु नियम",
        "description": "भूतल से लेकर डुप्लेक्स एवं बहुमंजिला भवनों के प्रत्येक कक्ष और स्थान के लिए आवश्यक दिशा-निर्देश एवं वास्तु सिद्धांत।",
        "idealLabel": "उत्तम दिशा:",
        "categories": [
            {
                "category": "पवित्र एवं मुख्य आवासीय स्थल",
                "items": [
                    {
                        "name": "पूजा कक्ष (मंदिर / देवालय)",
                        "zone": "ईशान कोण (उत्तर-पूर्व - देव स्थान)",
                        "rules": "मूर्तियों का मुख पश्चिम या पूर्व की ओर रखें ताकि पूजा करते समय मुख पूर्व या उत्तर दिशा में रहे। सीढ़ियों के नीचे, शौचालय की दीवार से सटाकर या दक्षिण-पश्चिम में कभी न बनाएं।"
                    },
                    {
                        "name": "रसोई घर (अग्नि तत्व)",
                        "zone": "आग्नेय कोण (दक्षिण-पूर्व - प्रथम विकल्प), वायव्य (द्वितीय विकल्प)",
                        "rules": "पूर्व दिशा की ओर मुख करके भोजन पकाएं। गैस का चूल्हा आग्नेय कोण में रखें। पानी का सिंक और नल उत्तर-पूर्व में हों। फ्रिज दक्षिण-पश्चिम या वायव्य में रखें।"
                    },
                    {
                        "name": "बैठक कक्ष / लिविंग हॉल",
                        "zone": "उत्तर, पूर्व या उत्तर-पूर्व (विकल्प: वायव्य)",
                        "rules": "उत्तर और पूर्व दिशा को खुला और हल्का रखें ताकि सकारात्मक ऊर्जा का संचार हो सके। भारी सोफे और टीवी दक्षिण एवं पश्चिम की दीवारों पर रखें।"
                    },
                    {
                        "name": "भोजन कक्ष (डाइनिंग रूम)",
                        "zone": "पश्चिम या उत्तर-पश्चिम (रसोई के समीप)",
                        "rules": "भोजन करते समय परिवार के सदस्यों का मुख पूर्व या उत्तर दिशा की ओर होना स्वास्थ्य और पाचन के लिए अत्यंत लाभकारी है।"
                    },
                    {
                        "name": "ब्रह्मस्थान (घर का केंद्रीय नाभिक)",
                        "zone": "घर का ठीक मध्य भाग",
                        "rules": "यह स्थान पूर्णतः खुला, हवादार और भारमुक्त होना चाहिए। यहां कोई खंभा, सीढ़ी, शौचालय या भारी वस्तु न रखें। यह सुख और समृद्धि का केंद्र है।"
                    },
                    {
                        "name": "मुख्य प्रवेश गलियारा (फ़ोयर)",
                        "zone": "उत्तर, पूर्व या उत्तर-पूर्व",
                        "rules": "उजाले से परिपूर्ण एवं स्वागतयोग्य प्रवेश द्वार। जूते की अलमारी वायव्य या पश्चिम में रखें, मुख्य द्वार के ठीक सामने न रखें।"
                    },
                    {
                        "name": "केंद्रीय आंगन (खुला चौक / आंगन)",
                        "zone": "ईशान कोण या केंद्रीय ब्रह्मस्थान",
                        "rules": "डुप्लेक्स स्तरों में प्राकृतिक रोशनी और ताजी हवा का संचार करता है। बारिश के पानी का ढलान उत्तर-पूर्व की ओर रखें।"
                    }
                ]
            },
            {
                "category": "शयनकक्ष एवं निजी कक्ष",
                "items": [
                    {
                        "name": "मुख्य शयनकक्ष (मास्टर बेडरूम)",
                        "zone": "नैऋत्य कोण (दक्षिण-पश्चिम - पृथ्वी तत्व / स्थिरता)",
                        "rules": "परिवार के मुखिया के लिए आरक्षित। सोते समय सिर दक्षिण (सर्वोत्तम) या पूर्व दिशा में रखें; उत्तर में कभी नहीं। अलमारी एवं तिजोरी दक्षिण/पश्चिम दीवार पर रखें।"
                    },
                    {
                        "name": "बच्चों का कमरा एवं अध्ययन कक्ष",
                        "zone": "पश्चिम (बौद्धिक विकास) या उत्तर-पूर्व / उत्तर",
                        "rules": "पढ़ते समय मुख पूर्व या उत्तर की ओर होना चाहिए। अध्ययन की पुस्तकें दक्षिण या पश्चिम की अलमारी में रखें।"
                    },
                    {
                        "name": "अतिथि कक्ष (गेस्ट रूम)",
                        "zone": "वायव्य कोण (उत्तर-पश्चिम - वायु तत्व)",
                        "rules": "सुखद एवं अल्पकालिक प्रवास को बढ़ावा देता है। गृहस्वामी के अधिकार को अक्षुण्ण रखने के लिए अतिथियों को नैऋत्य कोण का कमरा कभी न दें।"
                    },
                    {
                        "name": "बुजुर्गों / दादा-दादी का कमरा",
                        "zone": "भूतल पर दक्षिण या पश्चिम दिशा",
                        "rules": "शांत और स्थिर वातावरण। जोड़ों की समस्या से बचने हेतु अधिक हवादार वायव्य कोण न दें। स्वास्थ्य के लिए सिर दक्षिण में रखकर सोएं।"
                    },
                    {
                        "name": "कार्यालय / पुस्तकालय (होम ऑफिस)",
                        "zone": "उत्तर (कुबेर - धन व करियर) या पश्चिम दिशा",
                        "rules": "काम करते समय उत्तर या पूर्व की ओर मुख रखें। पीठ के पीछे ठोस दीवार होनी चाहिए (पीछे खिड़की या दरवाजा न हो)।"
                    },
                    {
                        "name": "ड्रेसिंग रूम और वॉर्डरोब",
                        "zone": "मास्टर बेडरूम का दक्षिण या पश्चिम हिस्सा",
                        "rules": "भारी अलमारियां दक्षिण/पश्चिम में रखें। पूरा दर्पण उत्तर या पूर्व की दीवार पर लगाएं।"
                    },
                    {
                        "name": "तिजोरी / धन व आभूषण लॉकर",
                        "zone": "नैऋत्य कक्ष की दक्षिण दीवार, उत्तर की ओर खुलती हुई",
                        "rules": "तिजोरी दक्षिण दीवार से सटाकर रखें ताकि उसका दरवाजा उत्तर (कुबेर दिशा) की ओर खुले। लॉकर का आधार समतल होना चाहिए।"
                    }
                ]
            },
            {
                "category": "डुप्लेक्स एवं ऊपरी मंजिल वास्तुकला",
                "items": [
                    {
                        "name": "आंतरिक एवं डुप्लेक्स सीढ़ियाँ",
                        "zone": "दक्षिण, नैऋत्य या पश्चिम (भारी आधार)",
                        "rules": "सीढ़ियां सदैव दक्षिणावर्त (घड़ी की सुई की दिशा में) ऊपर चढ़नी चाहिए। सीढ़ियों की कुल संख्या विषम (1, 3, 5, 7, 9) होनी चाहिए। ईशान में वर्जित।"
                    },
                    {
                        "name": "होम लिफ्ट / एलिवेटर",
                        "zone": "दक्षिण, नैऋत्य या पश्चिम शाफ्ट",
                        "rules": "भारी दिशाओं में लिफ्ट शाफ्ट बनाएं। ईशान कोण या ब्रह्मस्थान में लिफ्ट न लगाएं ताकि चुंबकीय ऊर्जा बाधित न हो।"
                    },
                    {
                        "name": "ऊपरी मंजिल की ऊंचाई व भार",
                        "zone": "दक्षिण व पश्चिम ऊंचा और भारी; उत्तर व पूर्व नीचा",
                        "rules": "डुप्लेक्स मकानों में ऊपरी मंजिल का दक्षिण एवं पश्चिम भाग अधिक ऊंचा एवं भारी होना चाहिए। उत्तर व पूर्व में खुली बालकनी होनी चाहिए।"
                    },
                    {
                        "name": "ऊपरी मास्टर सुइट (डुप्लेक्स)",
                        "zone": "ऊपरी मंजिल का नैऋत्य कोण",
                        "rules": "गृहस्वामी को सर्वोत्तम शांति और नियंत्रण प्रदान करता है। ध्यान रहे कि बिस्तर के नीचे भूतल की रसोई का चूल्हा या शौचालय न हो।"
                    },
                    {
                        "name": "ऊपरी फैमिली लाउंज",
                        "zone": "उत्तर, पूर्व या मध्य-उत्तर",
                        "rules": "डबल हाइट कटआउट और खुले आंगन ईशान कोण में होने से दोनों मंजिलों में प्राकृतिक सूर्य का प्रकाश फैलता है।"
                    },
                    {
                        "name": "बालकनी, बरामदा एवं खुली छत",
                        "zone": "उत्तर, पूर्व या उत्तर-पूर्व",
                        "rules": "सुबह की प्राणदायी धूप के लिए खुला रखें। छत का पानी उत्तर-पूर्व की ओर बहना चाहिए। दक्षिण/पश्चिम की मुंडेर ऊंची रखें।"
                    },
                    {
                        "name": "स्काईलाइट्स एवं प्राकृतिक रोशनी शाफ्ट",
                        "zone": "उत्तर, पूर्व या मध्य छत",
                        "rules": "डुप्लेक्स में नीचे तक प्राकृतिक रोशनी लाती हैं। अधिक गर्मी से बचने के लिए यूवी-फिल्टर ग्लास का प्रयोग करें।"
                    }
                ]
            },
            {
                "category": "विशेष जीवनशैली एवं स्वास्थ्य कक्ष",
                "items": [
                    {
                        "name": "होम थिएटर / मीडिया रूम",
                        "zone": "नैऋत्य (ध्वनि अवशोषण) या वायव्य",
                        "rules": "भारी अकॉस्टिक पैनल और बैठने की व्यवस्था दक्षिण/पश्चिम में करें। स्क्रीन उत्तर या पूर्व की दीवार पर लगाएं।"
                    },
                    {
                        "name": "जिम एवं फिटनेस स्टूडियो",
                        "zone": "नैऋत्य, दक्षिण या पश्चिम",
                        "rules": "भारी वजन और कसरत की मशीनें नैऋत्य कोण में शुभ भार प्रदान करती हैं। दर्पण उत्तर या पूर्व की दीवार पर लगाएं।"
                    },
                    {
                        "name": "योग एवं ध्यान कक्ष",
                        "zone": "ईशान कोण (उत्तर-पूर्व) या पूर्व",
                        "rules": "शांत और पवित्र वातावरण आवश्यक है। ध्यान करते समय पूर्व दिशा की ओर मुख रखें।"
                    },
                    {
                        "name": "यूटिलिटी एवं वॉशिंग एरिया",
                        "zone": "आग्नेय (दक्षिण-पूर्व) या वायव्य",
                        "rules": "वॉशिंग मशीन और कपड़े धोने का स्थान। पानी का निकास उत्तर या पूर्व की ओर होना चाहिए।"
                    },
                    {
                        "name": "सहायक / चौकीदार का कमरा",
                        "zone": "आग्नेय या वायव्य कोना",
                        "rules": "घर के अनुशासन एवं नियंत्रण हेतु कर्मचारियों को नैऋत्य कोण का कमरा कभी न दें।"
                    }
                ]
            },
            {
                "category": "सुविधाएं, जल प्रणाली एवं बाह्य व्यवस्था",
                "items": [
                    {
                        "name": "शौचालय एवं स्नानघर",
                        "zone": "पश्चिम-वायव्य (WNW) या वायव्य",
                        "rules": "कमोड उत्तर-दक्षिण अक्ष में हो (बैठने पर मुख उत्तर या दक्षिण में)। गीजर आग्नेय में लगाएं। ईशान और ब्रह्मस्थान में शौचालय सख्त वर्जित है।"
                    },
                    {
                        "name": "मुख्य प्रवेश द्वार (महाद्वार)",
                        "zone": "उत्तर (कुबेर/मुख्य), पूर्व (जयंत/इंद्र) या पश्चिम (पुष्पदंत)",
                        "rules": "घर का सबसे बड़ा और आकर्षक दरवाजा होना चाहिए। देहरी (चौखट) ऊंची हो और दरवाजा अंदर की ओर दक्षिणावर्त खुले।"
                    },
                    {
                        "name": "छत की पानी टंकी (ओवरहेड टैंक)",
                        "zone": "ठीक नैऋत्य कोण (सर्वोच्च ऊंचाई)",
                        "rules": "भवन के सबसे ऊंचे हिस्से में नैऋत्य कोण में स्थापित करें। ईशान कोण या केंद्र में कभी न लगाएं।"
                    },
                    {
                        "name": "भूमिगत जल टंकी / बोरवेल",
                        "zone": "ईशान कोण (उत्तर-पूर्व) या उत्तर",
                        "rules": "ईशान कोण में जमीन के नीचे जल स्रोत सुख, शांति और समृद्धि लाता है। दक्षिण या नैऋत्य में बोरवेल बिल्कुल न करवाएं।"
                    },
                    {
                        "name": "कार पार्किंग / गैरेज",
                        "zone": "वायव्य (उत्तर-पश्चिम) या आग्नेय",
                        "rules": "गाड़ी खड़ी करते समय उसका मुख पूर्व या उत्तर की ओर होना चाहिए। ईशान कोण में वाहन पार्क न करें।"
                    },
                    {
                        "name": "भंडार कक्ष (स्टोर रूम)",
                        "zone": "नैऋत्य या दक्षिण दिशा",
                        "rules": "भारी सामान एवं अनाज का भंडारण नैऋत्य में होने से घर में स्थिरता और शक्ति आती है।"
                    },
                    {
                        "name": "बिजली का मीटर एवं सोलर पैनल",
                        "zone": "आग्नेय कोण (दक्षिण-पूर्व - अग्नि क्षेत्र)",
                        "rules": "बिजली का मुख्य बोर्ड, इनवर्टर व बैटरी आग्नेय में लगाएं। छत के सोलर पैनल दक्षिण की ओर झुके होने चाहिए।"
                    },
                    {
                        "name": "सेप्टिक टैंक एवं सीवर लाइन",
                        "zone": "पश्चिम-वायव्य (WNW) या वायव्य",
                        "rules": "यह बाहरी बाउंड्री दीवार से सटा हुआ नहीं होना चाहिए। ईशान या नैऋत्य में सेप्टिक टैंक कभी न बनाएं।"
                    },
                    {
                        "name": "तहखाना / बेसमेंट",
                        "zone": "प्लाट के केवल उत्तर या पूर्व हिस्से में",
                        "rules": "उत्तर-पूर्व में बेसमेंट समृद्धि लाता है। केवल दक्षिण-पश्चिम में कभी बेसमेंट न बनाएं।"
                    },
                    {
                        "name": "स्विमिंग पूल एवं फव्वारे",
                        "zone": "ईशान कोण (उत्तर-पूर्व) या उत्तर",
                        "rules": "जल स्रोत ईशान में होने से सकारात्मक ऊर्जा बढ़ती है। दक्षिण-पश्चिम में कभी पूल न बनाएं।"
                    },
                    {
                        "name": "चारदीवारी एवं बाहरी गेट",
                        "zone": "दक्षिण व पश्चिम ऊंची और मोटी; उत्तर व पूर्व नीची",
                        "rules": "दक्षिण व पश्चिम की दीवारें तेज धूप व नकारात्मक ऊर्जा से रक्षा करती हैं।"
                    },
                    {
                        "name": "बगीचा, पेड़-पौधे एवं तुलसी",
                        "zone": "तुलसी ईशान/पूर्व में; भारी पेड़ नैऋत्य/दक्षिण में",
                        "rules": "तुलसी का पौधा ईशान कोण में सकारात्मक प्राण ऊर्जा देता है। घने व बड़े पेड़ दक्षिण और पश्चिम में लगाएं।"
                    }
                ]
            },
            {
                "category": "घरेलू उपकरण, फिटिंग्स एवं अतिरिक्त स्थल",
                "items": [
                    {
                        "name": "गैस सिलेंडर और कुकिंग गैस पाइपलाइन (एलपीजी)",
                        "zone": "दक्षिण-पूर्व (आग्नेय कोण - अग्नि तत्व)",
                        "rules": "गैस सिलेंडर और गैस पाइपलाइन केवल आग्नेय कोण में रखें। उत्तर-पूर्व (ईशान) और ब्रह्मस्थान में गैस कभी न रखें। उचित वेंटिलेशन सुनिश्चित करें।"
                    },
                    {
                        "name": "सोलर वाटर हीटर और हीट पंप",
                        "zone": "छत का दक्षिण-पूर्व या दक्षिण भाग",
                        "rules": "सौर ताप उपकरण छत के दक्षिण-पूर्व या दक्षिण भाग में स्थापित करें। इन्हें उत्तर-पूर्व या उत्तर की छत पर लगाने से बचें।"
                    },
                    {
                        "name": "वॉशिंग मशीन, ड्रायर और डिशवॉशर",
                        "zone": "उत्तर-पश्चिम (वायव्य कोण) या दक्षिण-पूर्व",
                        "rules": "जल निकासी उत्तर या पूर्व की ओर होनी चाहिए। उपकरणों को अर्थिंग दें और ईशान कोण में भारी मशीनें न रखें।"
                    },
                    {
                        "name": "रेफ्रिजरेटर (फ्रिज) और डीप फ्रीजर",
                        "zone": "रसोई का दक्षिण-पश्चिम, पश्चिम या उत्तर-पश्चिम",
                        "rules": "फ्रिज को दक्षिण या पश्चिम की दीवार से 15 सेमी दूर रखें। रसोई के ईशान (उत्तर-पूर्व) कोण में फ्रिज कभी न रखें।"
                    },
                    {
                        "name": "दीवार घड़ी और पेंडुलम घड़ी",
                        "zone": "उत्तर, पूर्व या पश्चिम की दीवार",
                        "rules": "घड़ियां उत्तर (कुबेर/धन) या पूर्व (प्रगति) की दीवार पर लगाएं। बंद या खराब घड़ियां तुरंत हटाएं और मुख्य द्वार के ऊपर कभी घड़ी न लगाएं।"
                    },
                    {
                        "name": "दर्पण और ड्रेसिंग टेबल (कांच)",
                        "zone": "उत्तर या पूर्व की दीवार",
                        "rules": "दर्पण उत्तर या पूर्व की दीवार पर इस प्रकार लगाएं कि चेहरा उत्तर या पूर्व की ओर रहे। बिस्तर या मुख्य द्वार के सामने दर्पण कभी न रखें।"
                    },
                    {
                        "name": "जूता रैक और फुटवियर कैबिनेट",
                        "zone": "उत्तर-पश्चिम या पश्चिम (प्रवेश द्वार के बाहर)",
                        "rules": "जूते-चप्पल की अलमारी पश्चिम या वायव्य में रखें। ईशान कोण, पूजा घर के नीचे या मुख्य द्वार के ठीक सामने जूता रैक कभी न रखें।"
                    },
                    {
                        "name": "छत का बगीचा (टेरेस गार्डन) और सिट-आउट",
                        "zone": "भारी गमले दक्षिण-पश्चिम में; हल्के फूल उत्तर-पूर्व में",
                        "rules": "छत पर भारी गमले और परगोला दक्षिण-पश्चिम या दक्षिण में बनाएं जिससे उचित भार बना रहे। ईशान कोण को खुला और हल्का रखें।"
                    },
                    {
                        "name": "सुरक्षा गार्ड केबिन (चौकीदार कक्ष)",
                        "zone": "मुख्य द्वार का दक्षिण-पश्चिम या उत्तर-पश्चिम",
                        "rules": "गार्ड रूम मुख्य द्वार के पास दक्षिण-पश्चिम या वायव्य में बनाएं। गार्ड का मुख बैठते समय उत्तर या पूर्व की ओर होना चाहिए।"
                    },
                    {
                        "name": "पालतू जानवरों का घर (डॉग केनेल / पक्षी दाना)",
                        "zone": "उत्तर-पश्चिम (वायव्य कोण) या उत्तर",
                        "rules": "पालतू जानवरों के लिए वायव्य कोण सर्वोत्तम है। पक्षियों के लिए दाना-पानी उत्तर या पूर्व में रखने से सकारात्मक ऊर्जा बढ़ती है।"
                    },
                    {
                        "name": "बाहरी सीढ़ी (इमरजेंसी / सर्विस सीढ़ियां)",
                        "zone": "दक्षिण-पश्चिम, दक्षिण या पश्चिम दिशा",
                        "rules": "सीढ़ियां हमेशा दक्षिणावर्त (क्लॉकवाइज) चढ़नी चाहिए। भवन के उत्तर-पूर्व हिस्से को बाहरी सीढ़ी से कभी न ढकें।"
                    },
                    {
                        "name": "वाटर प्यूरीफायर (आरओ फिल्टर) और पीने का पानी",
                        "zone": "उत्तर-पूर्व (ईशान कोण) या उत्तर दिशा",
                        "rules": "पीने का पानी और आरओ फिल्टर रसोई के ईशान कोण में स्थापित करें। पूर्व दिशा की ओर मुंह करके पानी पीना स्वास्थ्यवर्धक है।"
                    }
                ]
            }
        ]
    },
    "ta": {
        "title": "வாஸ்து சாஸ்திர கட்டிடக்கலை வழிகாட்டி",
        "heading": "அனைத்து வீடு மற்றும் டூப்ளக்ஸ் பகுதிகளுக்கான முழுமையான வாஸ்து விதிகள்",
        "description": "தரைதளம் முதல் டூப்ளக்ஸ் மாடி வீடுகள் வரை அனைத்து அறைகள் மற்றும் பகுதிகளுக்கான திசை அமைப்புகள் மற்றும் வாஸ்து தத்துவங்கள்.",
        "idealLabel": "சிறந்த திசை:",
        "categories": [
            {
                "category": "புனித மற்றும் முதன்மை வாழ்விடப் பகுதிகள்",
                "items": [
                    {
                        "name": "பூஜை அறை (மந்திரம் / தேவஸ்தானம்)",
                        "zone": "வடகிழக்கு (ஈசானியம் - தெய்வீக மூலை)",
                        "rules": "சிலைகள் மேற்கு அல்லது கிழக்கு நோக்கி இருக்க வேண்டும்; வழிபடும் போது கிழக்கு அல்லது வடக்கு நோக்கி வணங்க வேண்டும். படிக்கட்டுகளின் கீழ் அல்லது கழிப்பறை சுவரை ஒட்டி அமைக்கக் கூடாது."
                    },
                    {
                        "name": "சமையலறை (அக்னி மூலை)",
                        "zone": "தென்கிழக்கு (ஆக்னேயம் - முதல் தேர்வு), வடமேற்கு (இரண்டாம் தேர்வு)",
                        "rules": "கிழக்கு நோக்கி சமைக்க வேண்டும். சமையல் அடுப்பு தென்கிழக்கில் இருக்க வேண்டும். பாத்திரம் கழுவும் சிங்க் மற்றும் நீர் வடகிழக்கில் அமைய வேண்டும்."
                    },
                    {
                        "name": "வரவேற்பறை / ஹால் (லிவிங் ஹால்)",
                        "zone": "வடக்கு, கிழக்கு அல்லது வடகிழக்கு",
                        "rules": "நேர்மறை ஆற்றல் வர வடக்கு மற்றும் கிழக்கு பகுதிகளை எடையின்றி திறந்தவெளியாக வைக்கவும். கனமான சோபா, டிவி போன்றவற்றை தெற்கு மற்றும் மேற்கு சுவர்களில் அமைக்கவும்."
                    },
                    {
                        "name": "சாப்பாட்டு அறை (டைனிங் ஹால்)",
                        "zone": "மேற்கு அல்லது வடமேற்கு (சமையலறைக்கு அருகில்)",
                        "rules": "உணவு உண்ணும் போது கிழக்கு அல்லது வடக்கு நோக்கி அமர்வது செரிமானத்திற்கும் நல்வாழ்விற்கும் மிகவும் நல்லது."
                    },
                    {
                        "name": "பிரம்மாஸ்தனம் (வீட்டின் மையப் பகுதி)",
                        "zone": "வீட்டின் சரியான நடுப்பகுதி (வாஸ்து புருஷனின் நாபி)",
                        "rules": "முழுமையாக திறந்த, வெளிச்சமான மற்றும் எடையற்ற பகுதியாக இருக்க வேண்டும். தூண்கள், மாடிப்படிகள், கழிப்பறை அல்லது கனமான பொருட்கள் இருக்கக்கூடாது."
                    },
                    {
                        "name": "நுழைவு மண்டபம் / ஃபோயர்",
                        "zone": "வடக்கு, கிழக்கு அல்லது வடகிழக்கு",
                        "rules": "வீட்டிற்குள் நேர்மறை ஆற்றலை ஈர்க்கும் பிரகாசமான நுழைவாயில். காலணி ரேக்குகளை வடமேற்கில் வைக்கவும்."
                    },
                    {
                        "name": "மைய முற்றம் / திறந்தவெளி வானம் (ஆங்கண்)",
                        "zone": "வடகிழக்கு அல்லது மைய பிரம்மாஸ்தனம்",
                        "rules": "டூப்ளக்ஸ் தளங்களுக்குள் இயற்கை வெளிச்சமும் காற்றோட்டமும் பரவ உதவுகிறது. மழைநீர் வடகிழக்கு நோக்கி வழிய வேண்டும்."
                    }
                ]
            },
            {
                "category": "படுக்கையறைகள் மற்றும் தனிப்பட்ட அறைகள்",
                "items": [
                    {
                        "name": "முதன்மை படுக்கையறை (மாஸ்டர் பெட்ரூம்)",
                        "zone": "தென்மேற்கு (நைருதி - பூமி தத்துவம் / நிலைத்தன்மை)",
                        "rules": "குடும்பத் தலைவருக்குரியது. தெற்கு (முதல் தேர்வு) அல்லது கிழக்கு நோக்கி தலைவைத்து தூங்கவும்; வடக்கு நோக்கி தூங்கக் கூடாது. பீரோ மற்றும் பணப்பெட்டி தெற்கு/மேற்கு சுவரில் இருக்க வேண்டும்."
                    },
                    {
                        "name": "குழந்தைகள் அறை & படிக்கும் அறை",
                        "zone": "மேற்கு (வளர்ச்சி) அல்லது வடகிழக்கு / வடக்கு",
                        "rules": "படிக்கும் மேஜை கிழக்கு அல்லது வடக்கு நோக்கி அமர்ந்து படிக்கும் வகையில் இருக்க வேண்டும். புத்தகங்களை தெற்கு அல்லது மேற்கு அலமாரியில் வைக்கவும்."
                    },
                    {
                        "name": "விருந்தினர் படுக்கையறை",
                        "zone": "வடமேற்கு (வாயு மூலை)",
                        "rules": "மகிழ்ச்சியான தற்காலிக தங்குதலை ஊக்குவிக்கும். குடும்பத் தலைமை அதிகாரத்தை தக்கவைக்க தென்மேற்கு அறையை விருந்தினர்களுக்கு தரக்கூடாது."
                    },
                    {
                        "name": "முதியவர்கள் / தாத்தா-பாட்டி அறை",
                        "zone": "தரைதளத்தின் தெற்கு அல்லது மேற்கு பகுதி",
                        "rules": "அமைதியான, தரைமட்ட சூழல். மூட்டு வலிகளை தவிர்க்க அதிக காற்றோட்டமுள்ள வடமேற்கை தவிர்க்கவும். தெற்கு நோக்கி தலைவைத்து உறங்கவும்."
                    },
                    {
                        "name": "வீட்டு அலுவலகம் / நூலகம் (ஹோம் ஆபீஸ்)",
                        "zone": "வடக்கு (குபேரன் - செல்வம்/தொழில்) அல்லது மேற்கு",
                        "rules": "வேலை செய்யும் போது வடக்கு அல்லது கிழக்கு நோக்கி அமரவும். நாற்காலிக்கு பின்னால் உறுதியான சுவர் இருக்க வேண்டும்."
                    },
                    {
                        "name": "ஆடை மாற்றும் அறை & அலமாரி",
                        "zone": "மாஸ்டர் பெட்ரூமின் தெற்கு அல்லது மேற்கு பகுதி",
                        "rules": "கனமான பீரோக்களை தெற்கு/மேற்கில் வைக்கவும். முழு நீள முகம் பார்க்கும் கண்ணாடியை வடக்கு அல்லது கிழக்கு சுவரில் பொருத்தவும்."
                    },
                    {
                        "name": "பணப்பெட்டி / நகை லாக்கர் (திஜோரி)",
                        "zone": "தென்மேற்கு அறை, தெற்கு சுவர் வடக்கு நோக்கி திறப்பது",
                        "rules": "லாக்கர் தெற்கு சுவரை ஒட்டி வடக்கு நோக்கி (குபேர திசை) திறக்கும்படி வைக்க வேண்டும். தரைமட்டம் சமமாக இருக்க வேண்டும்."
                    }
                ]
            },
            {
                "category": "டூப்ளக்ஸ் மற்றும் மேல்மாடி வாஸ்து அமைப்பு",
                "items": [
                    {
                        "name": "டூப்ளக்ஸ் மற்றும் உள் மாடிப்படிகள்",
                        "zone": "தெற்கு, தென்மேற்கு அல்லது மேற்கு (கனமான பகுதி)",
                        "rules": "படிகள் கடிகார திசையில் (வலஞ்சுழி) ஏற வேண்டும். படிகளின் மொத்த எண்ணிக்கை ஒற்றைப்படை எண்ணாக (1, 3, 5, 7, 9) இருக்க வேண்டும். வடகிழக்கில் அமைக்கக் கூடாது."
                    },
                    {
                        "name": "லிப்ட் / எலிவேட்டர்",
                        "zone": "தெற்கு, தென்மேற்கு அல்லது மேற்கு பகுதி",
                        "rules": "கனமான திசைகளில் லிப்ட் அமைக்கவும். காந்த ஆற்றல் பாதிக்கப்படாமல் இருக்க வடகிழக்கு அல்லது பிரம்மாஸ்தனத்தில் லிப்ட் தவிர்க்கவும்."
                    },
                    {
                        "name": "மேல்மாடி உயரம் மற்றும் சுமை அமைப்பு",
                        "zone": "தெற்கு/மேற்கு உயரமாக; வடக்கு/கிழக்கு தாழ்வாக",
                        "rules": "டூப்ளக்ஸ் வீடுகளில் மேல்மாடியின் தெற்கு மற்றும் மேற்கு பகுதிகள் அதிக உயரமாகவும் கனமாகவும் கட்டப்பட வேண்டும்."
                    },
                    {
                        "name": "மேல்மாடி மாஸ்டர் சூட் (டூப்ளக்ஸ்)",
                        "zone": "மேல்மாடியின் தென்மேற்கு பகுதி",
                        "rules": "குடும்பத் தலைவருக்கு சிறந்த அமைதியையும் அதிகாரத்தையும் தரும். படுக்கைக்கு கீழே தரைதளத்தில் சமையலறை அடுப்பு அல்லது கழிப்பறை இருக்கக்கூடாது."
                    },
                    {
                        "name": "மேல்மாடி குடும்ப லவுஞ்ச்",
                        "zone": "வடக்கு, கிழக்கு அல்லது மைய-வடக்கு",
                        "rules": "இரண்டு தளங்களுக்கும் சூரிய ஒளி கிடைக்க வடகிழக்கு மற்றும் நடுப்பகுதியில் திறந்தவெளிகள் அமைப்பது நல்லது."
                    },
                    {
                        "name": "பால்கனி, வராண்டா மற்றும் திறந்த மொட்டை மாடி",
                        "zone": "வடக்கு, கிழக்கு அல்லது வடகிழக்கு",
                        "rules": "காலை சூரிய ஒளிக்காக திறந்திருக்க வேண்டும். மொட்டை மாடி நீர் வடகிழக்கு நோக்கி வழிய வேண்டும். தெற்கு/மேற்கு கைப்பிடி சுவர் உயரமாக இருக்க வேண்டும்."
                    },
                    {
                        "name": "ஸ்கைலைட்ஸ் மற்றும் இயற்கை ஒளி குழாய்கள்",
                        "zone": "வடக்கு, கிழக்கு அல்லது மைய கூரை",
                        "rules": "டூப்ளக்ஸ் தளங்களுக்குள் பகல் ஒளியை கொண்டு வரும். வெப்பத்தை தணிக்க புற ஊதா கதிர் தடுப்பு கண்ணாடிகளை பயன்படுத்தவும்."
                    }
                ]
            },
            {
                "category": "வாழ்க்கை முறை மற்றும் ஆரோக்கிய பகுதிகள்",
                "items": [
                    {
                        "name": "ஹோம் தியேட்டர் / மீடியா அறை",
                        "zone": "தென்மேற்கு (ஒலி கட்டுப்பாடு) அல்லது வடமேற்கு",
                        "rules": "கனமான ஒலி தடுப்பு அமைப்புகள் தெற்கு/மேற்கில் அமைய வேண்டும். திரை வடக்கு அல்லது கிழக்கு சுவரில் அமைய வேண்டும்."
                    },
                    {
                        "name": "உடற்பயிற்சி கூடம் (ஜிம்)",
                        "zone": "தென்மேற்கு, தெற்கு அல்லது மேற்கு",
                        "rules": "கனமான உடற்பயிற்சி இயந்திரங்கள் தென்மேற்கில் அமைப்பது நன்மையளிக்கும். கண்ணாடிகளை வடக்கு அல்லது கிழக்கு சுவரில் பொருத்தவும்."
                    },
                    {
                        "name": "யோகா மற்றும் தியான அறை",
                        "zone": "வடகிழக்கு (ஈசானியம்) அல்லது கிழக்கு",
                        "rules": "அமைதியான மற்றும் தூய்மையான சூழல் தேவை. தியானம் செய்யும் போது கிழக்கு நோக்கி அமர வேண்டும்."
                    },
                    {
                        "name": "வாஷிங் ஏரியா மற்றும் பயன்பாட்டு பகுதி",
                        "zone": "தென்கிழக்கு (ஆக்னேயம்) அல்லது வடமேற்கு",
                        "rules": "வாஷிங் மெஷின் மற்றும் கழிவுநீர் வடக்கு அல்லது கிழக்கு நோக்கி வெளியேற வேண்டும்."
                    },
                    {
                        "name": "பணியாளர்கள் / காவலாளி அறை",
                        "zone": "தென்கிழக்கு அல்லது வடமேற்கு மூலை",
                        "rules": "குடும்ப கட்டுப்பாட்டை காக்க பணியாளர்களுக்கு தென்மேற்கு அறையை ஒருபோதும் ஒதுக்கக்கூடாது."
                    }
                ]
            },
            {
                "category": "பயன்பாடுகள், நீர் மற்றும் நில அமைப்புகள்",
                "items": [
                    {
                        "name": "கழிப்பறை மற்றும் குளியலறை",
                        "zone": "மேற்கு-வடமேற்கு (WNW) அல்லது வடமேற்கு",
                        "rules": "கமோட் வடக்கு-தெற்கு அச்சில் இருக்க வேண்டும். கீசர் தென்கிழக்கில் பொருத்தவும். வடகிழக்கு மற்றும் பிரம்மாஸ்தனத்தில் கழிப்பறை முற்றிலும் தடை செய்யப்பட்டுள்ளது."
                    },
                    {
                        "name": "தலைவாசல் (மகா துவாரம்)",
                        "zone": "வடக்கு, கிழக்கு அல்லது மேற்கு சுப பாதங்கள்",
                        "rules": "வீட்டின் மிகப்பெரிய மற்றும் அழகிய கதவாக இருக்க வேண்டும். வாசல் படி இருக்க வேண்டும், கடிகார திசையில் உள்ளே திறக்க வேண்டும்."
                    },
                    {
                        "name": "மேல்நிலை தண்ணீர் தொட்டி (ஓவர்ஹெட்)",
                        "zone": "சரியான தென்மேற்கு (உயரமான புள்ளி)",
                        "rules": "கட்டிடத்தின் மிக உயர்ந்த தென்மேற்கு உச்சியில் அமைக்க வேண்டும். வடகிழக்கு அல்லது நடுவில் வைக்கக் கூடாது."
                    },
                    {
                        "name": "நிலத்தடி நீர் தொட்டி / போர்வெல்",
                        "zone": "வடகிழக்கு (ஈசானியம்) அல்லது வடக்கு",
                        "rules": "வடகிழக்கில் தரைக்கு கீழே அமைப்பது செல்வத்தையும் அமைதியையும் தரும். தெற்கு அல்லது தென்மேற்கில் போர்வெல் தோண்டக்கூடாது."
                    },
                    {
                        "name": "கார் பார்க்கிங் / கேரேஜ்",
                        "zone": "வடமேற்கு (வாயு மூலை) அல்லது தென்கிழக்கு",
                        "rules": "வாகனங்களை நிறுத்தும் போது கிழக்கு அல்லது வடக்கு நோக்கி நிற்க வேண்டும். வடகிழக்கில் பார்க் செய்யக் கூடாது."
                    },
                    {
                        "name": "பொருட்கள் சேமிப்பு அறை (ஸ்டோர் ரூம்)",
                        "zone": "தென்மேற்கு அல்லது தெற்கு",
                        "rules": "கனமான பொருட்கள் தென்மேற்கில் சேமிக்கப்படும் போது குடும்பத்திற்கு நிலைத்தன்மை மற்றும் அமைதி கிடைக்கும்."
                    },
                    {
                        "name": "மின்சார மீட்டர் & சோலார் பேனல்கள்",
                        "zone": "தென்கிழக்கு (ஆக்னேயம் - நெருப்பு மூலை)",
                        "rules": "மின்சார மெயின் போர்டு, இன்வெர்ட்டர் ஆகியவை தென்கிழக்கில் இருக்க வேண்டும். சோலார் பேனல்கள் தெற்கு நோக்கி சாய வேண்டும்."
                    },
                    {
                        "name": "செப்டிக் டேங்க் & கழிவுநீர் பாதை",
                        "zone": "மேற்கு-வடமேற்கு (WNW) அல்லது வடமேற்கு",
                        "rules": "வெளிப்புற சுற்றுச்சுவரை தொடக்கூடாது. வடகிழக்கு அல்லது தென்மேற்கில் செப்டிக் டேங்க் அமைக்கக்கூடாது."
                    },
                    {
                        "name": "பாதாள அறை / பேஸ்மெண்ட்",
                        "zone": "மனையின் வடக்கு அல்லது கிழக்கு பாதியில் மட்டும்",
                        "rules": "வடகிழக்கில் பேஸ்மெண்ட் அமைப்பது நல்லது. தென்மேற்கின் கீழ் மட்டும் தனியாக பேஸ்மெண்ட் அமைக்கக் கூடாது."
                    },
                    {
                        "name": "நீச்சல் குளம் & நீரூற்றுகள்",
                        "zone": "வடகிழக்கு (ஈசானியம்) அல்லது வடக்கு",
                        "rules": "வடகிழக்கில் நீர் நிலைகள் அமைப்பது நேர்மறை ஆற்றலை பெருக்கும். தென்மேற்கில் நீச்சல் குளம் அமைக்கக் கூடாது."
                    },
                    {
                        "name": "சுற்றுச்சுவர் மற்றும் வெளி கேட்",
                        "zone": "தெற்கு மற்றும் மேற்கு உயரமாக; வடக்கு மற்றும் கிழக்கு தாழ்வாக",
                        "rules": "தெற்கு மற்றும் மேற்கு சுவர்கள் தடிமனாகவும் உயரமாகவும் இருக்க வேண்டும்."
                    },
                    {
                        "name": "தோட்டம், மரங்கள் மற்றும் துளசி மாடம்",
                        "zone": "துளசி வடகிழக்கு/கிழக்கில்; பெரிய மரங்கள் தென்மேற்கில்",
                        "rules": "துளசி மாடம் வடகிழக்கில் இருப்பது நேர்மறை பிராணனை ஈர்க்கும். பெரிய மரங்களை தெற்கு மற்றும் தென்மேற்கில் நடவும்."
                    }
                ]
            },
            {
                "category": "வீட்டு உபகரணங்கள் மற்றும் கூடுதல் அமைப்புகள்",
                "items": [
                    {
                        "name": "எரிவாயு சிலிண்டர் மற்றும் சமையல் எரிவாயு குழாய்",
                        "zone": "தென்கிழக்கு (அக்னி மூலை)",
                        "rules": "கேஸ் சிலிண்டர்களை தென்கிழக்கு அக்னி மூலையில் மட்டுமே வைக்க வேண்டும். வடகிழக்கு (ஈசானியம்) மற்றும் பிரம்மஸ்தானத்தில் வைக்கக்கூடாது. போதுமான காற்றோட்டம் உறுதி செய்க."
                    },
                    {
                        "name": "சோலார் வாட்டர் ஹீட்டர் மற்றும் ஹீட் பம்ப்",
                        "zone": "மொட்டை மாடியின் தென்கிழக்கு அல்லது தெற்கு பகுதி",
                        "rules": "சோலார் வாட்டர் ஹீட்டரை மொட்டை மாடியின் தென்கிழக்கு அல்லது தெற்கு விளிம்பில் அமைக்க வேண்டும். வடகிழக்கில் அமைக்கக்கூடாது."
                    },
                    {
                        "name": "துணி துவைக்கும் இயந்திரம் (வாஷிங் மெஷின்) மற்றும் பாத்திர வாஷர்",
                        "zone": "வடமேற்கு (வாயு மூலை) அல்லது தென்கிழக்கு",
                        "rules": "கழிவுநீர் வடக்கு அல்லது கிழக்கு நோக்கி வெளியேற வேண்டும். வடகிழக்கு மூலையில் வாஷிங் மெஷின் வைப்பதைத் தவிர்க்கவும்."
                    },
                    {
                        "name": "குளிர்சாதன பெட்டி (பிரிட்ஜ்)",
                        "zone": "சமையலறையின் தென்மேற்கு, மேற்கு அல்லது வடமேற்கு",
                        "rules": "பிரிட்ஜை தெற்கு அல்லது மேற்கு சுவரில் இருந்து இடைவெளி விட்டு வைக்கவும். வடகிழக்கு ஈசானிய மூலையில் வைக்கக்கூடாது."
                    },
                    {
                        "name": "சுவர் கடிகாரங்கள்",
                        "zone": "வடக்கு, கிழக்கு அல்லது மேற்கு சுவர்கள்",
                        "rules": "கடிகாரங்களை வடக்கு (குபேரன் செல்வம்) அல்லது கிழக்கு சுவர்களில் பொருத்தவும். பழுதான கடிகாரங்களை உடனே நீக்கவும், வாசலின் மேல் மாட்டக்கூடாது."
                    },
                    {
                        "name": "கண்ணாடிகள் மற்றும் அலங்கார கண்ணாடி",
                        "zone": "வடக்கு அல்லது கிழக்கு சுவர்கள்",
                        "rules": "கண்ணாடியை வடக்கு அல்லது கிழக்கு சுவரில் அமைக்கவும். படுக்கையை நோக்கியோ அல்லது பிரதான வாசலை நோக்கியோ கண்ணாடி இருக்கக்கூடாது."
                    },
                    {
                        "name": "காலணி ரேக் (ஷூ ரேக்)",
                        "zone": "வடமேற்கு அல்லது மேற்கு (வீட்டின் வெளிப்புறம்)",
                        "rules": "காலணி ரேக்கை மேற்கு அல்லது வடமேற்கில் வைக்கவும். வடகிழக்கிலோ அல்லது பூஜை அறைக்கு கீழோ வைக்கக்கூடாது."
                    },
                    {
                        "name": "மொட்டை மாடி தோட்டம் மற்றும் சிட்-அவுட்",
                        "zone": "கனமான தொட்டிகள் தென்மேற்கில்; பூச்செடிகள் வடகிழக்கில்",
                        "rules": "கனமான மரத்தொட்டிகளை தென்மேற்கு அல்லது தெற்கில் வைக்கவும். வடகிழக்கு மாடியை திறந்தவெளியாகவும் இலகுவாகவும் வைக்கவும்."
                    },
                    {
                        "name": "காவலாளி அறை (செக்யூரிட்டி அறை)",
                        "zone": "பிரதான வாசலின் தென்மேற்கு அல்லது வடமேற்கு",
                        "rules": "காவலாளி அமரும் போது வடக்கு அல்லது கிழக்கு நோக்கி பார்க்க வேண்டும். காவலாளி அறையின் உயரம் காம்பவுண்ட் சுவரை விட அதிகமாக இருக்கக்கூடாது."
                    },
                    {
                        "name": "செல்லப்பிராணிகள் அறை (நாய் கூண்டு)",
                        "zone": "வடமேற்கு (வாயு மூலை) அல்லது வடக்கு",
                        "rules": "செல்லப்பிராணிகளுக்கு வடமேற்கு மூலை சிறந்தது. பறவைகளுக்கு நீர் மற்றும் தானியங்களை வடக்கு அல்லது கிழக்கில் வைப்பது சுபமாகும்."
                    },
                    {
                        "name": "வெளி மாடிப்படி (அவசர கால படி)",
                        "zone": "தென்மேற்கு, தெற்கு அல்லது மேற்கு",
                        "rules": "மாடிப்படிகள் கடிகார திசையில் (வலஞ்சுழி) ஏற வேண்டும். வடகிழக்கு பகுதியில் வெளி மாடிப்படி அமைக்கக்கூடாது."
                    },
                    {
                        "name": "குடிநீர் சுத்திகரிப்பான் (RO ஃபில்டர்)",
                        "zone": "வடகிழக்கு (ஈசானியம் - புனித நீர் நிலை) அல்லது வடக்கு",
                        "rules": "குடிநீர் ஃபில்டரை வடகிழக்கு பகுதியில் பொருத்தவும். கிழக்கு நோக்கி அமர்ந்து நீர் அருந்துவது உடல்நலத்திற்கு நல்லது."
                    }
                ]
            }
        ]
    },
    "te": {
        "title": "వాస్తు శాస్త్ర సంపూర్ణ ఆర్కిటెక్చరల్ గైడ్",
        "heading": "ఇంటి మరియు డ్యూప్లెక్స్ నిర్మాణాల సమగ్ర వాస్తు సూత్రాలు",
        "description": "గ్రౌండ్ ఫ్లోర్ నుండి డ్యూప్లెక్స్ భవనాల వరకు అన్ని గదులు మరియు ప్రాంతాలకు సంబంధించిన దిశల అమరిక మరియు వాస్తు నియమాలు.",
        "idealLabel": "అనుకూల దిశ:",
        "categories": [
            {
                "category": "పవిత్ర మరియు ప్రధాన జీవన ప్రదేశాలు",
                "items": [
                    {
                        "name": "పూజా గది (మందిరం / దేవస్థానం)",
                        "zone": "ఈశాన్యం (ఉత్తర-తూర్పు - దైవిక మూల)",
                        "rules": "విగ్రహాలు పశ్చిమం లేదా తూర్పు వైపు ఉండాలి; పూజించేటప్పుడు తూర్పు లేదా ఉత్తరం ముఖంగా కూర్చోవాలి. మెట్ల కింద లేదా టాయిలెట్ గోడకు ఆనించి పూజగది పెట్టరాదు."
                    },
                    {
                        "name": "వంటగది (అగ్ని మూల)",
                        "zone": "ఆగ్నేయం (దక్షిణ-తూర్పు - మొదటి ప్రాధాన్యత), వాయువ్యం (రెండవది)",
                        "rules": "తూర్పు ముఖంగా వంట చేయాలి. పొయ్యి ఆగ్నేయంలో ఉండాలి. నీటి సింక్, కుళాయిలు ఈశాన్యంలో ఉండాలి. ఫ్రిజ్ నైరుతి లేదా వాయువ్యంలో పెట్టాలి."
                    },
                    {
                        "name": "డ్రాయింగ్ రూమ్ / లివింగ్ హాల్",
                        "zone": "ఉత్తరం, తూర్పు లేదా ఈశాన్యం (ప్రత్యామ్నాయం: వాయువ్యం)",
                        "rules": "సానుకూల శక్తి ప్రవాహం కోసం ఉత్తరం, తూర్పు వైపు ఖాళీగా ఉంచాలి. బరువైన సోఫాలు, టీవీ యూనిట్లు దక్షిణం మరియు పడమర గోడల వద్ద అమర్చాలి."
                    },
                    {
                        "name": "భోజనాల గది (డైనింగ్ రూమ్)",
                        "zone": "పడమర లేదా వాయువ్యం (వంటగదికి సమీపంలో)",
                        "rules": "భోజనం చేసేటప్పుడు తూర్పు లేదా ఉత్తరం ముఖంగా కూర్చోవడం జీర్ణక్రియకు మరియు ఆరోగ్యానికి ఎంతో మంచిది."
                    },
                    {
                        "name": "బ్రహ్మస్థానం (ఇంటి కేంద్ర బిందువు)",
                        "zone": "ఇంటి ఖచ్చితమైన మధ్య భాగం",
                        "rules": "పూర్తిగా ఖాళీగా, వెలుతురుతో ఉండాలి. స్తంభాలు, మెట్లు, టాయిలెట్లు లేదా బరువైన వస్తువులు ఉండరాదు. ఇది కుటుంబ సౌభాగ్య కేంద్రం."
                    },
                    {
                        "name": "ప్రవేశ ముఖద్వారం / ఫోయర్",
                        "zone": "ఉత్తరం, తూర్పు లేదా ఈశాన్యం",
                        "rules": "ఇంటికి ఆహ్వానపూర్వకమైన వెలుతురు గల ప్రవేశం. బూట్ల స్టాండ్ వాయువ్యం లేదా పడమరలో ఉంచాలి, సింహద్వారానికి ఎదురుగా ఉంచరాదు."
                    },
                    {
                        "name": "మధ్య ప్రాంగణం / ఆకాశ ప్రాంగణం (అంగణం)",
                        "zone": "ఈశాన్యం లేదా మధ్య బ్రహ్మస్థానం",
                        "rules": "డ్యూప్లెక్స్ ఇళ్లలో సహజ వెలుతురు మరియు గాలి ప్రసరణను అందిస్తుంది. వర్షపు నీరు ఈశాన్యం వైపు ప్రవహించాలి."
                    }
                ]
            },
            {
                "category": "పడక గదులు మరియు వ్యక్తిగత ప్రదేశాలు",
                "items": [
                    {
                        "name": "మాస్టర్ బెడ్‌రూమ్ (యజమాని గది)",
                        "zone": "నైరుతి (దక్షిణ-పడమర - పృథ్వీ తత్త్వం / స్థిరత్వం)",
                        "rules": "ఇంటి యజమానికి కేటాయించాలి. నిద్రించేటప్పుడు తల దక్షిణం (ఉత్తమం) లేదా తూర్పు వైపు ఉంచాలి; ఉత్తరం వైపు పెట్టరాదు. బీరువాలు దక్షిణం/పడమర గోడకు ఉత్తరం వైపు తెరుచుకునేలా ఉండాలి."
                    },
                    {
                        "name": "పిల్లల గది & స్టడీ రూమ్",
                        "zone": "పడమర (జ్ఞాన వృద్ధి) లేదా ఈశాన్యం / ఉత్తరం",
                        "rules": "చదువుకునే టేబుల్ తూర్పు లేదా ఉత్తరం ముఖంగా ఉండాలి. పుస్తకాలను దక్షిణం లేదా పడమర రాక్లలో ఉంచాలి."
                    },
                    {
                        "name": "అతిథి గది (గెస్ట్ బెడ్‌రూమ్)",
                        "zone": "వాయువ్యం (ఉత్తర-పడమర - వాయు తత్త్వం)",
                        "rules": "ఆహ్లాదకరమైన తాత్కాలిక బసకు మంచిది. ఇంటి యజమాని అధికారాన్ని కాపాడుకోవడానికి అతిథులకు నైరుతి గదిని ఇవ్వరాదు."
                    },
                    {
                        "name": "పెద్దల / వృద్ధుల గది",
                        "zone": "గ్రౌండ్ ఫ్లోర్ దక్షిణం లేదా పడమర",
                        "rules": "ప్రశాంతమైన, గట్టి నేల వాతావరణం. కీళ్ల నొప్పులు నివారించడానికి ఎక్కువ గాలి ఉండే వాయువ్యం వద్దు. దక్షిణం వైపు తలపెట్టి పడుకోవాలి."
                    },
                    {
                        "name": "హోమ్ ఆఫీస్ / లైబ్రరీ",
                        "zone": "ఉత్తరం (కుబేరుడు - సంపద/వృత్తి) లేదా పడమర",
                        "rules": "పనిచేసేటప్పుడు ఉత్తరం లేదా తూర్పు వైపు ముఖం పెట్టాలి. కుర్చీ వెనుక దృఢమైన గోడ ఉండాలి."
                    },
                    {
                        "name": "డ్రెస్సింగ్ రూమ్ & వార్డ్‌రోబ్",
                        "zone": "మాస్టర్ సూట్ దక్షిణం లేదా పడమర భాగం",
                        "rules": "బరువైన అల్మారాలు దక్షిణం/పడమరలో ఉంచాలి. పూర్తి అద్దాన్ని ఉత్తరం లేదా తూర్పు గోడపై అమర్చాలి."
                    },
                    {
                        "name": "ధన బీరువా / సేఫ్ లాకర్ (తిజోరీ)",
                        "zone": "నైరుతి గది, దక్షిణం గోడ ఉత్తరం వైపు తెరుచుకునేలా",
                        "rules": "లాకర్ దక్షిణం గోడకు ఆనించి ఉత్తరం (కుబేర స్థానం) వైపు తెరుచుకోవాలి. లాకర్ నేలపై సమాంతరంగా ఉండాలి."
                    }
                ]
            },
            {
                "category": "డ్యూప్లెక్స్ మరియు పై అంతస్తు వాస్తు",
                "items": [
                    {
                        "name": "అంతర్గత & డ్యూప్లెక్స్ మెట్లు",
                        "zone": "దక్షిణం, నైరుతి లేదా పడమర (భారమైన ఆధారం)",
                        "rules": "మెట్లు సవ్యదిశలో (క్లాక్‌వైజ్) పైకి ఎక్కాలి. మొత్తం మెట్ల సంఖ్య బేసి సంఖ్య (1, 3, 5, 7, 9) గా ఉండాలి. ఈశాన్యంలో మెట్లు నిషేధం."
                    },
                    {
                        "name": "లిఫ్ట్ / ఎలివేటర్",
                        "zone": "దక్షిణం, నైరుతి లేదా పడమర షాఫ్ట్",
                        "rules": "బరువైన దిశలలో లిఫ్ట్ ఏర్పాటు చేయాలి. అయస్కాంత తరంగాలకు ఆటంకం కలగకుండా ఈశాన్యం లేదా బ్రహ్మస్థానంలో లిఫ్ట్ పెట్టరాదు."
                    },
                    {
                        "name": "పై అంతస్తు ఎత్తు మరియు బరువు",
                        "zone": "దక్షిణం/పడమర ఎత్తుగా; ఉత్తరం/తూర్పు పల్లంగా",
                        "rules": "డ్యూప్లెక్స్ భవనాల్లో పై అంతస్తు దక్షిణం, పడమర భాగాలు ఎత్తుగా మరియు బరువుగా ఉండాలి. ఉత్తరం, తూర్పు వైపు విశాల బాల్కనీలు ఉండాలి."
                    },
                    {
                        "name": "పై అంతస్తు మాస్టర్ సూట్ (డ్యూప్లెక్స్)",
                        "zone": "పై అంతస్తు నైరుతి మూల",
                        "rules": "యజమానికి అత్యున్నత ప్రశాంతత మరియు నాయకత్వ శక్తిని ఇస్తుంది. మంచం కింద గ్రౌండ్ ఫ్లోర్‌లో వంటపొయ్యి లేదా టాయిలెట్ ఉండరాదు."
                    },
                    {
                        "name": "పై అంతస్తు ఫ్యామిలీ లాంజ్",
                        "zone": "ఉత్తరం, తూర్పు లేదా మధ్య-ఉత్తరం",
                        "rules": "ఈశాన్యంలో డబుల్ హైట్ కటౌట్‌లు ఉంటే రెండు అంతస్తులకూ విస్తారమైన సూర్యరశ్మి ప్రసరిస్తుంది."
                    },
                    {
                        "name": "బాల్కనీలు, వరండాలు మరియు టెర్రస్",
                        "zone": "ఉత్తరం, తూర్పు లేదా ఈశాన్యం",
                        "rules": "ఉదయపు ప్రాణశక్తి కోసం తెరిచి ఉంచాలి. టెర్రస్ నీరు ఈశాన్యం వైపు ప్రవహించాలి. పారాపెట్ గోడ దక్షిణం/పడమర ఎత్తుగా ఉండాలి."
                    },
                    {
                        "name": "స్కైలైట్స్ & సహజ వెలుతురు మార్గాలు",
                        "zone": "ఉత్తరం, తూర్పు లేదా మధ్య పైకప్పు",
                        "rules": "డ్యూప్లెక్స్ లోపలికి సహజ కాంతిని అందిస్తాయి. అధిక వేడి నివారణకు యువి-ఫిల్టర్ అద్దాలు వాడాలి."
                    }
                ]
            },
            {
                "category": "ప్రత్యేక జీవనశైలి & వెల్‌నెస్ ప్రదేశాలు",
                "items": [
                    {
                        "name": "హోమ్ థియేటర్ / మీడియా రూమ్",
                        "zone": "నైరుతి (శబ్ద నియంత్రణ) లేదా వాయువ్యం",
                        "rules": "బరువైన సౌండ్‌ఫ్రూఫ్ ప్యానెల్స్ దక్షిణం/పడమరలో ఉండాలి. స్క్రీన్ ఉత్తరం లేదా తూర్పు గోడపై అమర్చాలి."
                    },
                    {
                        "name": "జిమ్ మరియు ఫిట్‌నెస్ స్టూడియో",
                        "zone": "నైరుతి, దక్షిణం లేదా పడమర",
                        "rules": "బరువైన వెయిట్ మిషన్లు నైరుతిలో ఉండడం శ్రేయస్కరం. అద్దాలను ఉత్తరం లేదా తూర్పు గోడకు పెట్టాలి."
                    },
                    {
                        "name": "యోగా మరియు ధ్యాన మందిరం",
                        "zone": "ఈశాన్యం లేదా తూర్పు",
                        "rules": "ప్రశాంతమైన, పవిత్రమైన వాతావరణం. ధ్యానం చేసేటప్పుడు తూర్పు వైపు ముఖం పెట్టాలి."
                    },
                    {
                        "name": "వాషింగ్ ఏరియా & యుటిలిటీ",
                        "zone": "ఆగ్నేయం లేదా వాయువ్యం",
                        "rules": "వాషింగ్ మెషీన్, బట్టలు ఉతికే స్థలం. నీటి నిష్క్రమణ ఉత్తరం లేదా తూర్పు వైపు ఉండాలి."
                    },
                    {
                        "name": "సేవకుల / వాచ్‌మెన్ గది",
                        "zone": "ఆగ్నేయం లేదా వాయువ్య మూల",
                        "rules": "ఇంటిపై యజమాని పట్టు కోల్పోకుండా ఉండటానికి పనివారికి నైరుతి గదిని ఎప్పుడూ ఇవ్వరాదు."
                    }
                ]
            },
            {
                "category": "యుటిలిటీలు, నీటి వనరులు & బాహ్య వ్యవస్థలు",
                "items": [
                    {
                        "name": "మరుగుదొడ్డి మరియు స్నానాల గది",
                        "zone": "పశ్చిమ-వాయువ్యం (WNW) లేదా వాయువ్యం",
                        "rules": "కమోడ్ ఉత్తర-దక్షిణ అక్షంలో ఉండాలి. గీజర్ ఆగ్నేయంలో పెట్టాలి. ఈశాన్యం మరియు బ్రహ్మస్థానంలో టాయిలెట్ కఠినంగా నిషిద్ధం."
                    },
                    {
                        "name": "సింహద్వారం (ప్రధాన ద్వారం)",
                        "zone": "ఉత్తరం, తూర్పు లేదా పడమర శుభ స్థానాలు",
                        "rules": "ఇంటి అన్ని తలుపుల కంటే పెద్దదిగా, అందంగా ఉండాలి. గడప ఉండాలి, సవ్యదిశలో లోపలికి తెరవబడాలి."
                    },
                    {
                        "name": "ఓవర్‌హెడ్ వాటర్ ట్యాంక్",
                        "zone": "ఖచ్చితమైన నైరుతి (అత్యున్నత ప్రదేశం)",
                        "rules": "భవనం యొక్క అత్యంత ఎత్తైన నైరుతి భాగంలో నిర్మించాలి. ఈశాన్యం లేదా మధ్యలో ఎప్పుడూ పెట్టరాదు."
                    },
                    {
                        "name": "భూగర్భ నీటి సంప్ / బోరుబావి",
                        "zone": "ఈశాన్యం (ఉత్తర-తూర్పు) లేదా ఉత్తరం",
                        "rules": "ఈశాన్యంలో భూగర్భ జలవనరు ఉండడం అష్టైశ్వర్యాలను ఇస్తుంది. దక్షిణం లేదా నైరుతిలో బోరుబావి ఎప్పుడూ వేయరాదు."
                    },
                    {
                        "name": "కార్ పార్కింగ్ / గ్యారేజ్",
                        "zone": "వాయువ్యం లేదా ఆగ్నేయం",
                        "rules": "వాహనాలు ఆపినప్పుడు తూర్పు లేదా ఉత్తరం వైపు ముఖం చేసి ఉండాలి. ఈశాన్యంలో పార్కింగ్ చేయరాదు."
                    },
                    {
                        "name": "స్టోర్ రూమ్ (నిల్వ గది)",
                        "zone": "నైరుతి లేదా దక్షిణం",
                        "rules": "బరువైన వస్తువులు నైరుతిలో ఉంచడం వల్ల కుటుంబానికి స్థిరత్వం మరియు బలం చేకూరుతాయి."
                    },
                    {
                        "name": "విద్యుత్ మీటర్ & సోలార్ ప్యానెల్స్",
                        "zone": "ఆగ్నేయం (అగ్ని స్థానం)",
                        "rules": "మెయిన్ మీటర్ బోర్డు, ఇన్వర్టర్ ఆగ్నేయంలో ఉండాలి. పైకప్పు సోలార్ ప్యానెల్స్ దక్షిణం వైపు వంగి ఉండాలి."
                    },
                    {
                        "name": "సెప్టిక్ ట్యాంక్ & మురుగు కాలువ",
                        "zone": "పశ్చిమ-వాయువ్యం (WNW) లేదా వాయువ్యం",
                        "rules": "బయటి ప్రహరీ గోడకు తగలకుండా ఉండాలి. ఈశాన్యం లేదా నైరుతిలో సెప్టిక్ ట్యాంక్ అస్సలు పెట్టరాదు."
                    },
                    {
                        "name": "నేలమాళిగ / బేస్‌మెంట్",
                        "zone": "స్థలం యొక్క ఉత్తర లేదా తూర్పు సగభాగంలో మాత్రమే",
                        "rules": "ఈశాన్యం లేదా తూర్పులో బేస్‌మెంట్ ఉంటే సంపద వృద్ధి. నైరుతి కింద మాత్రమే ఎప్పుడూ బేస్‌మెంట్ తీయరాదు."
                    },
                    {
                        "name": "స్విమ్మింగ్ పూల్ & ఫౌంటెన్లు",
                        "zone": "ఈశాన్యం లేదా ఉత్తరం",
                        "rules": "ఈశాన్యంలో జలాశయాలు సానుకూల శక్తిని పెంచుతాయి. నైరుతిలో స్విమ్మింగ్ పూల్ నిర్మించరాదు."
                    },
                    {
                        "name": "ప్రహరీ గోడ మరియు గేట్లు",
                        "zone": "దక్షిణం, పడమర ఎత్తు/దళసరి; ఉత్తరం, తూర్పు తక్కువ",
                        "rules": "దక్షిణం మరియు పడమర గోడలు ఎత్తుగా ఉండి వేడి, ప్రతికూల శక్తులను నిరోధిస్తాయి."
                    },
                    {
                        "name": "తోట, చెట్లు మరియు తులసి కోట",
                        "zone": "తులసి ఈశాన్యం/తూర్పులో; పెద్ద చెట్లు నైరుతి/దక్షిణంలో",
                        "rules": "తులసి మొక్కను ఈశాన్యంలో ఉంచడం వల్ల సాత్విక ప్రాణశక్తి లభిస్తుంది. పెద్ద నీడనిచ్చే చెట్లను నైరుతిలో నాటాలి."
                    }
                ]
            },
            {
                "category": "గృహోపకరణాలు మరియు అదనపు అంశాలు",
                "items": [
                    {
                        "name": "గ్యాస్ సిలిండర్ మరియు కుకింగ్ గ్యాస్ పైప్‌లైన్",
                        "zone": "ఆగ్నేయం (దక్షిణ-తూర్పు - అగ్ని మూల)",
                        "rules": "గ్యాస్ సిలిండర్ మరియు పైప్‌లైన్ ఖచ్చితంగా ఆగ్నేయ మూలలోనే ఉంచాలి. ఈశాన్యం మరియు బ్రహ్మస్థానంలో గ్యాస్ సిలిండర్లు ఎట్టిపరిస్థితుల్లోనూ ఉంచకూడదు."
                    },
                    {
                        "name": "సోలార్ వాటర్ హీటర్ మరియు హీట్ పంప్",
                        "zone": "డాబా పై ఆగ్నేయం లేదా దక్షిణం వైపు",
                        "rules": "సోలార్ వాటర్ హీటర్‌ను మేడపైన ఆగ్నేయం లేదా దక్షిణ సరిహద్దులో అమర్చాలి. ఈశాన్యం లేదా ఉత్తర భాగంలో ఉంచకూడదు."
                    },
                    {
                        "name": "వాషింగ్ మెషీన్ మరియు డిష్‌వాషర్",
                        "zone": "వాయవ్య మూల (ఉత్తర-పశ్చిమం) లేదా ఆగ్నేయం",
                        "rules": "డ్రైనేజీ నీరు ఉత్తరం లేదా తూర్పు వైపు ప్రవహించాలి. ఈశాన్య మూలలో బరువైన వాషింగ్ మెషీన్లు ఉంచకూడదు."
                    },
                    {
                        "name": "రిఫ్రిజిరేటర్ (ఫ్రిజ్) మరియు డీప్ ఫ్రీజర్",
                        "zone": "వంటగది యొక్క నైరుతి, పశ్చిమం లేదా వాయవ్యం",
                        "rules": "ఫ్రిజ్‌ను దక్షిణ లేదా పశ్చిమ గోడకు ఆనించి ఉంచండి. వంటగదిలోని ఈశాన్య మూలలో ఫ్రిజ్ ఎప్పుడూ ఉంచకూడదు."
                    },
                    {
                        "name": "గోడ గడియారాలు",
                        "zone": "ఉత్తరం, తూర్పు లేదా పశ్చిమ గోడలు",
                        "rules": "గడియారాలను ఉత్తరం (కుబేర స్థానం) లేదా తూర్పు గోడలపై అమర్చాలి. ఆగిపోయిన గడియారాలను ఉంచవద్దు, సింహద్వారం పైభాగాన తగిలించవద్దు."
                    },
                    {
                        "name": "అద్దాలు మరియు డ్రెస్సింగ్ టేబుల్",
                        "zone": "ఉత్తరం లేదా తూర్పు గోడ",
                        "rules": "అద్దాలను ఉత్తరం లేదా తూర్పు గోడకు అమర్చాలి. పడుకునే మంచానికి లేదా ప్రధాన ద్వారానికి ఎదురుగా అద్దాలు ఉండకూడదు."
                    },
                    {
                        "name": "షూ ర్యాక్ (పాదరక్షల స్టాండ్)",
                        "zone": "వాయవ్యం లేదా పశ్చిమం (ఇంటి బయట)",
                        "rules": "షూ ర్యాక్‌ను పశ్చిమం లేదా వాయవ్యంలో ఉంచాలి. ఈశాన్యంలో, పూజా గది కింద లేదా ప్రధాన ద్వారం ఎదురుగా ఉంచకూడదు."
                    },
                    {
                        "name": "టెర్రస్ గార్డెన్ మరియు సిట్-ఔట్",
                        "zone": "బరువైన కుండీలు నైరుతిలో; తేలికపాటి మొక్కలు ఈశాన్యంలో",
                        "rules": "మేడపైన బరువైన కుండీలను దక్షిణం, నైరుతి వైపు ఉంచాలి. ఈశాన్య టెర్రస్‌ను ఖాళీగా, తేలికగా ఉంచాలి."
                    },
                    {
                        "name": "సెక్యూరిటీ క్యాబిన్ (వాచ్‌మన్ గది)",
                        "zone": "మెయిన్ గేట్ నైరుతి లేదా వాయవ్యం",
                        "rules": "గేటు వద్ద వాచ్‌మన్ గది నైరుతి లేదా వాయవ్యంలో నిర్మించాలి. కూర్చున్నప్పుడు తూర్పు లేదా ఉత్తరం వైపు ముఖం ఉండాలి."
                    },
                    {
                        "name": "పెంపుడు జంతువుల స్థలం (డాగ్ కెన్నెల్)",
                        "zone": "వాయవ్యం (ఉత్తర-పశ్చిమం) లేదా ఉత్తరం",
                        "rules": "పెంపుడు జంతువులకు వాయవ్య మూల అత్యంత అనుకూలం. పక్షుల కోసం దాణా, నీరు ఉత్తరం లేదా తూర్పున ఉంచడం శుభప్రదం."
                    },
                    {
                        "name": "బాహ్య మెట్లు (అవుట్‌డోర్ సర్వీస్ మెట్లు)",
                        "zone": "నైరుతి, దక్షిణం లేదా పశ్చిమం",
                        "rules": "మెట్లు సవ్యదిశలో (క్లాక్‌వైజ్) మాత్రమే ఎక్కాలి. భవనం యొక్క ఈశాన్యంలో బాహ్య మెట్లు నిర్మించరాదు."
                    },
                    {
                        "name": "వాటర్ ప్యూరిఫయర్ (RO ఫిల్టర్) మరియు తాగునీరు",
                        "zone": "ఈశాన్యం (ఉత్తర-తూర్పు - జల స్థానం) లేదా ఉత్తరం",
                        "rules": "తాగునీరు మరియు RO ఫిల్టర్లను వంటగది ఈశాన్యంలో అమర్చాలి. తూర్పు ముఖంగా నీరు తాగడం ఆరోగ్యానికి శ్రేయస్కరం."
                    }
                ]
            }
        ]
    },
    "ml": {
        "title": "വാസ്തു ശാസ്ത്ര സമ്പൂർണ്ണ വാസ്തുവിദ്യാ ഗൈഡ്",
        "heading": "ഭവന, ഡ്യൂപ്ലെക്സ് നിർമ്മിതികൾക്കുള്ള സമഗ്ര വാസ്തു തത്വങ്ങൾ",
        "description": "ഗ്രൗണ്ട് ഫ്ലോർ മുതൽ ഡ്യൂപ്ലെക്സ് / ബഹുനില വീടുകൾ വരെയുള്ള ഓരോ മുറികളുടെയും നിർണ്ണായക ദിശാ ക്രമീകരണങ്ങളും വാസ്തു നിയമങ്ങളും.",
        "idealLabel": "അനുയോജ്യ ദിശ:",
        "categories": [
            {
                "category": "പവിത്രവും പ്രധാനവുമായ ജീവതടങ്ങൾ",
                "items": [
                    {
                        "name": "പൂജാ മുറി (ക്ഷേത്രസ്ഥാനം / മന്ദിരം)",
                        "zone": "വടക്ക്-കിഴക്ക് (ഈശാനകോൺ - ദൈവീക സ്ഥാനം)",
                        "rules": "വിഗ്രഹങ്ങൾ പടിഞ്ഞാറോ കിഴക്കോ അഭിമുഖമായി വയ്ക്കണം; പ്രാർത്ഥിക്കുമ്പോൾ കിഴക്കോട്ടോ വടക്കോട്ടോ തിരിഞ്ഞിരിക്കണം. കോണിപ്പടികൾക്ക് താഴെയോ ടോയ്‌ലറ്റിനോട് ചേർന്നോ പൂജാമുറി അരുത്."
                    },
                    {
                        "name": "അടുക്കള (അഗ്നി തത്വം)",
                        "zone": "തെക്ക്-കിഴക്ക് (ആഗ്നേയം - ഒന്നാം സ്ഥാനം), വടക്ക്-പടിഞ്ഞാറ് (രണ്ടാം സ്ഥാനം)",
                        "rules": "കിഴക്കോട്ട് തിരിഞ്ഞ് പാചകം ചെയ്യണം. ഗ്യാസ് സ്റ്റൗ തെക്ക്-കിഴക്ക് വയ്ക്കണം. സിങ്കും വെള്ള പൈപ്പുകളും വടക്ക്-കിഴക്ക് ആയിരിക്കണം. ഫ്രിഡ്ജ് തെക്ക്-പടിഞ്ഞാറോ വടക്ക്-പടിഞ്ഞാറോ വയ്ക്കാം."
                    },
                    {
                        "name": "സ്വീകരണ മുറി (ലിവിംഗ് ഹാൾ)",
                        "zone": "വടക്ക്, കിഴക്ക് അല്ലെങ്കിൽ വടക്ക്-കിഴക്ക്",
                        "rules": "പോസിറ്റീവ് എനർജി പ്രവാഹത്തിനായി വടക്ക്, കിഴക്ക് ഭാഗങ്ങൾ ഭാരമില്ലാതെ തുറന്നിടുക. ഭാരമുള്ള സോഫകൾ, ടിവി യൂണിറ്റുകൾ തെക്ക്, പടിഞ്ഞാറ് ഭിത്തികളിൽ വയ്ക്കുക."
                    },
                    {
                        "name": "ഭക്ഷണ മുറി (ഡൈനിംഗ് ഹാൾ)",
                        "zone": "പടിഞ്ഞാറ് അല്ലെങ്കിൽ വടക്ക്-പടിഞ്ഞാറ് (അടുക്കളയ്ക്ക് സമീപം)",
                        "rules": "ഭക്ഷണം കഴിക്കുമ്പോൾ കിഴക്കോട്ടോ വടക്കോട്ടോ തിരിഞ്ഞിരിക്കുന്നത് ദഹനത്തിനും ആരോഗ്യത്തിനും ഉത്തമമാണ്."
                    },
                    {
                        "name": "ബ്രഹ്മസ്ഥാനം (ഗൃഹമധ്യം / വീടിന്റെ കേന്ദ്രം)",
                        "zone": "വീടിന്റെ കൃത്യമായ മധ്യഭാഗം",
                        "rules": "പൂർണ്ണമായും ഭാരമില്ലാതെ, വായുസഞ്ചാരത്തോടെ നിലനിർത്തണം. തൂണുകൾ, കോണിപ്പടികൾ, ടോയ്‌ലറ്റുകൾ എന്നിവ ഇവിടെ അരുത്. ഇത് ഗൃഹസമാധാനത്തിന്റെ കേന്ദ്രമാണ്."
                    },
                    {
                        "name": "പ്രവേശന കവാടം / ഫോയർ",
                        "zone": "വടക്ക്, കിഴക്ക് അല്ലെങ്കിൽ വടക്ക്-കിഴക്ക്",
                        "rules": "വീട്ടിലേക്ക് ശുഭകരമായ ഊർജ്ജം കൊണ്ടുവരുന്ന പ്രകാശമാനമായ കവാടം. ഷൂ റാക്കുകൾ വടക്ക്-പടിഞ്ഞാറോ പടിഞ്ഞാറോ വയ്ക്കുക."
                    },
                    {
                        "name": "നടുമുറ്റം / തുറന്ന ആകാശം (അങ്കണം)",
                        "zone": "വടക്ക്-കിഴക്ക് അല്ലെങ്കിൽ കേന്ദ്ര ബ്രഹ്മസ്ഥാനം",
                        "rules": "ഡ്യൂപ്ലെക്സ് നിലകളിലേക്ക് സ്വാഭാവിക വെളിച്ചവും വായുസഞ്ചാരവും നൽകുന്നു. മഴവെള്ളം വടക്ക്-കിഴക്കിലേക്ക് ഒഴുകണം."
                    }
                ]
            },
            {
                "category": "കിടപ്പുമുറികളും സ്വകാര്യ ഇടങ്ങളും",
                "items": [
                    {
                        "name": "പ്രധാന കിടപ്പുമുറി (മാസ്റ്റർ ബെഡ്‌റൂം)",
                        "zone": "തെക്ക്-പടിഞ്ഞാറ് (കന്നികോൺ / നൈരൃതി - ഭൂമി തത്വം)",
                        "rules": "ഗൃഹനാഥന് അനുയോജ്യം. ഉറങ്ങുമ്പോൾ തല തെക്കോട്ടോ (ഉത്തമം) കിഴക്കോട്ടോ വയ്ക്കണം; വടക്കോട്ട് പാടില്ല. അലമാരകളും പണപ്പെട്ടിയും തെക്ക്/പടിഞ്ഞാറ് ഭിത്തിയിൽ വടക്കോട്ട് തുറക്കുന്ന രീതിയിൽ വയ്ക്കണം."
                    },
                    {
                        "name": "കുട്ടികളുടെ മുറിയും പഠനമുറിയും",
                        "zone": "പടിഞ്ഞാറ് (ബുദ്ധിവികാസം) അല്ലെങ്കിൽ വടക്ക്-കിഴക്ക് / വടക്ക്",
                        "rules": "പഠനമേശ കിഴക്കോട്ടോ വടക്കോട്ടോ അഭിമുഖമായി വയ്ക്കണം. പുസ്തകങ്ങൾ തെക്ക് അല്ലെങ്കിൽ പടിഞ്ഞാറ് റാക്കുകളിൽ വയ്ക്കുക."
                    },
                    {
                        "name": "അതിഥി മുറി (ഗസ്റ്റ് റൂം)",
                        "zone": "വടക്ക്-പടിഞ്ഞാറ് (വായുകോൺ)",
                        "rules": "സന്തോഷകരമായ താൽക്കാലിക താമസത്തിന് അനുയോജ്യം. ഗൃഹനാഥന്റെ അധികാരം കാത്തുസൂക്ഷിക്കാൻ അതിഥികൾക്ക് തെക്ക്-പടിഞ്ഞാറ് മുറി നൽകരുത്."
                    },
                    {
                        "name": "മുതിർന്നവരുടെ മുറി",
                        "zone": "താഴത്തെ നിലയിലെ തെക്ക് അല്ലെങ്കിൽ പടിഞ്ഞാറ്",
                        "rules": "ശാന്തവും സുരക്ഷിതവുമായ ഇടം. വാതസംബന്ധമായ പ്രശ്നങ്ങൾ ഒഴിവാക്കാൻ കാറ്റുള്ള വടക്ക്-പടിഞ്ഞാറ് ഒഴിവാക്കുക. ആയുരാരോഗ്യത്തിനായി തെക്കോട്ട് തലവച്ച് കിടക്കുക."
                    },
                    {
                        "name": "ഹോം ഓഫീസ് / ലൈബ്രറി",
                        "zone": "വടക്ക് (ധനസമൃദ്ധി/കരിയർ) അല്ലെങ്കിൽ പടിഞ്ഞാറ്",
                        "rules": "ജോലി ചെയ്യുമ്പോൾ വടക്കോട്ടോ കിഴക്കോട്ടോ തിരിഞ്ഞിരിക്കണം. കസേരയ്ക്ക് പിന്നിൽ ഉറപ്പുള്ള ഭിത്തി ഉണ്ടായിരിക്കണം."
                    },
                    {
                        "name": "ഡ്രസ്സിംഗ് റൂമും വാർഡ്രോബും",
                        "zone": "മാസ്റ്റർ ബെഡ്‌റൂമിന്റെ തെക്ക് അല്ലെങ്കിൽ പടിഞ്ഞാറ് ഭാഗം",
                        "rules": "ഭാരമേറിയ അലമാരകൾ തെക്ക്/പടിഞ്ഞാറ് ഭാഗത്ത് വയ്ക്കുക. കണ്ണാടി വടക്കോ കിഴക്കോ ഉള്ള ഭിത്തിയിൽ സ്ഥാപിക്കുക."
                    },
                    {
                        "name": "പണപ്പെട്ടി / ആഭരണ ലോക്കർ (തിജോരി)",
                        "zone": "തെക്ക്-പടിഞ്ഞാറ് മുറി, തെക്ക് ഭിത്തിയിൽ വടക്കോട്ട് തുറക്കുന്നത്",
                        "rules": "ലോക്കർ തെക്ക് ഭിത്തിയിൽ വടക്കോട്ട് (കുബേര ദിശ) തുറക്കുന്ന രീതിയിൽ വയ്ക്കണം. നിരപ്പായ തറയിൽ സ്ഥാപിക്കണം."
                    }
                ]
            },
            {
                "category": "ഡ്യൂപ്ലെക്സ്, മുകൾനില വാസ്തുവിദ്യ",
                "items": [
                    {
                        "name": "ആന്തരിക, ഡ്യൂപ്ലെക്സ് കോണിപ്പടികൾ",
                        "zone": "തെക്ക്, തെക്ക്-പടിഞ്ഞാറ് അല്ലെങ്കിൽ പടിഞ്ഞാറ്",
                        "rules": "പടികൾ ഘടികാരദിശയിൽ (ക്ലോക്ക്‌വൈസ്) കയറുന്ന രീതിയിലായിരിക്കണം. മൊത്തം പടികളുടെ എണ്ണം ഒറ്റസംഖ്യ (1, 3, 5, 7, 9) ആയിരിക്കണം. ഈശാനകോണിൽ കോണിപ്പടി അരുത്."
                    },
                    {
                        "name": "ഹോം ലിഫ്റ്റ് / എലിവേറ്റർ",
                        "zone": "തെക്ക്, തെക്ക്-പടിഞ്ഞാറ് അല്ലെങ്കിൽ പടിഞ്ഞാറ് ഭാഗം",
                        "rules": "ഭാരമേറിയ ദിശകളിൽ ലിഫ്റ്റ് ഷാഫ്റ്റ് നിർമ്മിക്കുക. കാന്തിക തരംഗങ്ങളെ തടസ്സപ്പെടുത്താതിരിക്കാൻ വടക്ക്-കിഴക്കിലോ നടുമുറ്റത്തോ ലിഫ്റ്റ് പാടില്ല."
                    },
                    {
                        "name": "മുകൾനില ഉയരവും ഘടനയും",
                        "zone": "തെക്ക്/പടിഞ്ഞാറ് ഉയരത്തിൽ; വടക്ക്/കിഴക്ക് താഴ്ന്ന്",
                        "rules": "ഡ്യൂപ്ലെക്സ് വീടുകളിൽ മുകൾനിലയുടെ തെക്ക്, പടിഞ്ഞാറ് ഭാഗങ്ങൾക്ക് കൂടുതൽ ഉയരവും ഭാരവും ഉണ്ടായിരിക്കണം."
                    },
                    {
                        "name": "മുകൾനിലയിലെ മാസ്റ്റർ സ്യൂട്ട് (ഡ്യൂപ്ലെക്സ്)",
                        "zone": "മുകൾനിലയുടെ തെക്ക്-പടിഞ്ഞാറ് ഭാഗം",
                        "rules": "ഗൃഹനാഥന് മികച്ച സ്വകാര്യതയും ശാന്തതയും നൽകുന്നു. കട്ടിലിന് താഴെ താഴത്തെ നിലയിലെ അടുക്കളയോ ടോയ്‌ലറ്റോ വരാൻ പാടില്ല."
                    },
                    {
                        "name": "മുകൾനില ഫാമിലി ലോഞ്ച്",
                        "zone": "വടക്ക്, കിഴക്ക് അല്ലെങ്കിൽ മധ്യ-വടക്ക്",
                        "rules": "രണ്ട് നിലകളിലും വെളിച്ചം ലഭിക്കാൻ ഈശാനകോണിലും നടുവിലും ഡബിൾ ഹൈറ്റ് സ്പേസുകൾ നൽകുന്നത് ഉത്തമമാണ്."
                    },
                    {
                        "name": "ബാൽക്കണി, വരാന്ത, ഓപ്പൺ ടെറസ്",
                        "zone": "വടക്ക്, കിഴക്ക് അല്ലെങ്കിൽ വടക്ക്-കിഴക്ക്",
                        "rules": "പ്രഭാത സൂര്യപ്രകാശത്തിനായി തുറന്നിടുക. ടെറസിലെ വെള്ളം വടക്ക്-കിഴക്കിലേക്ക് ഒഴുകണം. തെക്ക്/പടിഞ്ഞാറ് സംരക്ഷണ ഭിത്തി ഉയരത്തിൽ പണിയുക."
                    },
                    {
                        "name": "സ്കൈലൈറ്റുകൾ & പ്രകാശ ദ്വാരങ്ങൾ",
                        "zone": "വടക്ക്, കിഴക്ക് അല്ലെങ്കിൽ മധ്യ മേൽക്കൂര",
                        "rules": "ഡ്യൂപ്ലെക്സ് ഉള്ളിലേക്ക് സ്വാഭാവിക വെളിച്ചം നൽകുന്നു. ചൂട് കുറയ്ക്കാൻ യുവി-ഫിൽട്ടർ ഗ്ലാസ് ഉപയോഗിക്കുക."
                    }
                ]
            },
            {
                "category": "ജീവിതശൈലി & ആരോഗ്യ കേന്ദ്രങ്ങൾ",
                "items": [
                    {
                        "name": "ഹോം തിയേറ്റർ / മീഡിയ റൂം",
                        "zone": "തെക്ക്-പടിഞ്ഞാറ് (ശബ്ദ നിയന്ത്രണം) അല്ലെങ്കിൽ വടക്ക്-പടിഞ്ഞാറ്",
                        "rules": "ഭാരമേറിയ അക്കോസ്റ്റിക് പാനലുകൾ തെക്ക്/പടിഞ്ഞാറ് വയ്ക്കണം. സ്ക്രീൻ വടക്കോ കിഴക്കോ ഭിത്തിയിൽ നൽകുക."
                    },
                    {
                        "name": "ജിംനേഷ്യം / ഫിറ്റ്നസ് സ്റ്റുഡിയോ",
                        "zone": "തെക്ക്-പടിഞ്ഞാറ്, തെക്ക് അല്ലെങ്കിൽ പടിഞ്ഞാറ്",
                        "rules": "ഭാരമേറിയ വ്യായാമ ഉപകരണങ്ങൾ തെക്ക്-പടിഞ്ഞാറ് വയ്ക്കുന്നത് ശുഭകരമാണ്. കണ്ണാടികൾ വടക്കോ കിഴക്കോ നൽകുക."
                    },
                    {
                        "name": "യോഗ, ധ്യാന മുറി",
                        "zone": "വടക്ക്-കിഴക്ക് (ഈശാനകോൺ) അല്ലെങ്കിൽ കിഴക്ക്",
                        "rules": "ശാന്തവും പവിത്രവുമായ അന്തരീക്ഷം. ധ്യാനിക്കുമ്പോൾ കിഴക്കോട്ട് തിരിഞ്ഞിരിക്കണം."
                    },
                    {
                        "name": "വാഷിംഗ് ഏരിയ, യൂട്ടിലിറ്റി",
                        "zone": "തെക്ക്-കിഴക്ക് (ആഗ്നേയം) അല്ലെങ്കിൽ വടക്ക്-പടിഞ്ഞാറ്",
                        "rules": "വാഷിംഗ് മെഷീനും ഡ്രെയിനേജും. മലിനജലം വടക്കോട്ടോ കിഴക്കോട്ടോ ഒഴുകിപ്പോകണം."
                    },
                    {
                        "name": "ജീവനക്കാരുടെ മുറി",
                        "zone": "തെക്ക്-കിഴക്ക് അല്ലെങ്കിൽ വടക്ക്-പടിഞ്ഞാറ് കോൺ",
                        "rules": "ഗൃഹാധികാരം നഷ്ടപ്പെടാതിരിക്കാൻ ജോലിക്കാർക്ക് തെക്ക്-പടിഞ്ഞാറ് മുറി നൽകരുത്."
                    }
                ]
            },
            {
                "category": "സേവനങ്ങൾ, ജലസംവിധാനം & ബാഹ്യ ക്രമീകരണങ്ങൾ",
                "items": [
                    {
                        "name": "ടോയ്‌ലറ്റും ബാത്ത്റൂമും",
                        "zone": "പടിഞ്ഞാറ്-വടക്ക്-പടിഞ്ഞാറ് (WNW) അല്ലെങ്കിൽ വടക്ക്-പടിഞ്ഞാറ്",
                        "rules": "ക്ലോസറ്റ് വടക്ക്-തെക്ക് ദിശയിലായിരിക്കണം. ഗീസർ തെക്ക്-കിഴക്ക് ഘടിപ്പിക്കുക. വടക്ക്-കിഴക്കിലും ബ്രഹ്മസ്ഥാനത്തും ടോയ്‌ലറ്റ് കർശനമായി നിരോധിച്ചിരിക്കുന്നു."
                    },
                    {
                        "name": "പ്രധാന വാതിൽ (പടിപ്പുര / മഹദ്വാരം)",
                        "zone": "വടക്ക്, കിഴക്ക് അല്ലെങ്കിൽ പടിഞ്ഞാറ് ശുഭ സ്ഥാനങ്ങൾ",
                        "rules": "വീട്ടിലെ ഏറ്റവും വലിപ്പമുള്ളതും മനോഹരവുമായ വാതിലായിരിക്കണം. പടി ഉണ്ടായിരിക്കണം, ഘടികാരദിശയിൽ ഉള്ളിലേക്ക് തുറക്കണം."
                    },
                    {
                        "name": "മേൽക്കൂരയിലെ വാട്ടർ ടാങ്ക് (ഓവർഹെഡ്)",
                        "zone": "കൃത്യമായ തെക്ക്-പടിഞ്ഞാറ് (ഏറ്റവും ഉയർന്ന സ്ഥാനം)",
                        "rules": "കെട്ടിടത്തിന്റെ ഏറ്റവും ഉയർന്ന തെക്ക്-പടിഞ്ഞാറ് കോണിൽ സ്ഥാപിക്കുക. വടക്ക്-കിഴക്കിലോ നടുവിലോ ഒരിക്കലും അരുത്."
                    },
                    {
                        "name": "ഭൂഗർഭ ജലസംഭരണി / കുഴൽക്കിണർ (ബോർവെൽ)",
                        "zone": "വടക്ക്-കിഴക്ക് (ഈശാനകോൺ) അല്ലെങ്കിൽ വടക്ക്",
                        "rules": "വടക്ക്-കിഴക്ക് ഭൂമിക്കടിയിൽ ജലസ്രോതസ്സ് വരുന്നത് ഐശ്വര്യവും സമാധാനവും നൽകുന്നു. തെക്കോട്ടോ തെക്ക്-പടിഞ്ഞാറോട്ടോ ബോർവെൽ പാടില്ല."
                    },
                    {
                        "name": "കാർ പാർക്കിംഗ് / ഗാരേജ്",
                        "zone": "വടക്ക്-പടിഞ്ഞാറ് (വായുകോൺ) അല്ലെങ്കിൽ തെക്ക്-കിഴക്ക്",
                        "rules": "വാഹനങ്ങൾ നിർത്തുമ്പോൾ കിഴക്കോട്ടോ വടക്കോട്ടോ അഭിമുഖമായിരിക്കണം. വടക്ക്-കിഴക്കിൽ പാർക്കിംഗ് പാടില്ല."
                    },
                    {
                        "name": "സ്റ്റോർ റൂം (സംഭരണ മുറി)",
                        "zone": "തെക്ക്-പടിഞ്ഞാറ് അല്ലെങ്കിൽ തെക്ക്",
                        "rules": "ഭാരമുള്ള വസ്തുക്കൾ തെക്ക്-പടിഞ്ഞാറ് സൂക്ഷിക്കുന്നത് വീടിന് സ്ഥിരതയും ഊർജ്ജവും നൽകുന്നു."
                    },
                    {
                        "name": "വൈദ്യുതി മീറ്റർ, സോളാർ പാനലുകൾ",
                        "zone": "തെക്ക്-കിഴക്ക് (ആഗ്നേയം - അഗ്നി തത്വം)",
                        "rules": "മെയിൻ സ്വിച്ച് ബോർഡ്, ഇൻവെർട്ടർ എന്നിവ തെക്ക്-കിഴക്കിൽ വയ്ക്കുക. സോളാർ പാനലുകൾ തെക്കോട്ട് ചരിഞ്ഞിരിക്കണം."
                    },
                    {
                        "name": "സെപ്റ്റിക് ടാങ്കും ഡ്രെയിനേജും",
                        "zone": "പടിഞ്ഞാറ്-വടക്ക്-പടിഞ്ഞാറ് (WNW) അല്ലെങ്കിൽ വടക്ക്-പടിഞ്ഞാറ്",
                        "rules": "ബാഹ്യ മതിൽക്കെട്ടിൽ തൊടരുത്. വടക്ക്-കിഴക്കിലോ തെക്ക്-പടിഞ്ഞാറിലോ സെപ്റ്റിക് ടാങ്ക് അരുത്."
                    },
                    {
                        "name": "നിലവറ / ബേസ്മെന്റ്",
                        "zone": "പ്ലോട്ടിന്റെ വടക്ക് അല്ലെങ്കിൽ കിഴക്ക് പകുതിയിൽ മാത്രം",
                        "rules": "വടക്ക്-കിഴക്കിലെ ബേസ്മെന്റ് സമൃദ്ധി നൽകുന്നു. തെക്ക്-പടിഞ്ഞാറ് താഴെ മാത്രമായി ബേസ്മെന്റ് പണിയരുത്."
                    },
                    {
                        "name": "നീന്തൽക്കുളവും ജലധാരകളും",
                        "zone": "വടക്ക്-കിഴക്ക് (ഈശാനകോൺ) അല്ലെങ്കിൽ വടക്ക്",
                        "rules": "വടക്ക്-കിഴക്കിലെ ജലാശയങ്ങൾ സമാധാനവും ധനവും വർദ്ധിപ്പിക്കുന്നു. തെക്ക്-പടിഞ്ഞാറ് പൂൾ നിർമ്മിക്കരുത്."
                    },
                    {
                        "name": "മതിൽക്കെട്ടും ഗേറ്റും",
                        "zone": "തെക്കും പടിഞ്ഞാറും ഉയരത്തിലും കട്ടിയിലും; വടക്കും കിഴക്കും താഴ്ന്ന്",
                        "rules": "തെക്ക്, പടിഞ്ഞാറ് മതിലുകൾ കട്ടിയുള്ളതും ഉയരമുള്ളതുമായിരിക്കണം."
                    },
                    {
                        "name": "പൂന്തോട്ടം, മരങ്ങൾ, തുളസിത്തറ",
                        "zone": "തുളസിത്തറ വടക്ക്-കിഴക്ക്/കിഴക്കിൽ; വലിയ മരങ്ങൾ തെക്ക്-പടിഞ്ഞാറ്",
                        "rules": "തുളസിത്തറ ഈശാനകോണിൽ നൽകുന്നത് പോസിറ്റീവ് പ്രാണവായു നൽകുന്നു. വലിയ തണൽമരങ്ങൾ തെക്ക്, പടിഞ്ഞാറ് ഭാഗങ്ങളിൽ നടുക."
                    }
                ]
            },
            {
                "category": "ഗാർഹിക ഉപകരണങ്ങളും അധിക ഘടകങ്ങളും",
                "items": [
                    {
                        "name": "ഗ്യാസ് സിലിണ്ടറും കുക്കിംഗ് ഗ്യാസ് പൈപ്പ്‌ലൈനും",
                        "zone": "തെക്ക്-കിഴക്ക് (ആഗ്നേയകോൺ - അഗ്നി തത്വം)",
                        "rules": "ഗ്യാസ് സിലിണ്ടറും കണക്ഷനും തെക്ക്-കിഴക്ക് ആഗ്നേയകോണിൽ മാത്രം സ്ഥാപിക്കുക. ഈശാനകോണിലോ ബ്രഹ്മസ്ഥാനത്തോ സിലിണ്ടർ വയ്ക്കരുത്."
                    },
                    {
                        "name": "സോളാർ വാട്ടർ ഹീറ്ററും ഹീറ്റ് പമ്പും",
                        "zone": "ടെറസിന്റെ തെക്ക്-കിഴക്ക് അല്ലെങ്കിൽ തെക്ക് ഭാഗം",
                        "rules": "സോളാർ വാട്ടർ ഹീറ്റർ മേൽക്കൂരയുടെ തെക്ക്-കിഴക്ക് അല്ലെങ്കിൽ തെക്ക് അതിരിൽ സ്ഥാപിക്കുക. വടക്ക്-കിഴക്ക് വയ്ക്കരുത്."
                    },
                    {
                        "name": "വാഷിംഗ് മെഷീനും ഡിഷ്‌വാഷറും",
                        "zone": "വടക്ക്-പടിഞ്ഞാറ് (വായുകോൺ) അല്ലെങ്കിൽ തെക്ക്-കിഴക്ക്",
                        "rules": "ഡ്രെയിനേജ് വെള്ളം വടക്കോട്ടോ കിഴക്കോട്ടോ ഒഴുകണം. വടക്ക്-കിഴക്ക് മൂലയിൽ വാഷിംഗ് മെഷീൻ സ്ഥാപിക്കരുത്."
                    },
                    {
                        "name": "റഫ്രിജറേറ്റർ (ഫ്രിഡ്ജ്)",
                        "zone": "അടുക്കളയുടെ തെക്ക്-പടിഞ്ഞാറ്, പടിഞ്ഞാറ് അല്ലെങ്കിൽ വടക്ക്-പടിഞ്ഞാറ്",
                        "rules": "ഫ്രിഡ്ജ് തെക്ക് അല്ലെങ്കിൽ പടിഞ്ഞാറ് ഭിത്തിയോട് ചേർത്ത് വയ്ക്കുക. അടുക്കളയുടെ ഈശാനകോണിൽ ഫ്രിഡ്ജ് വയ്ക്കരുത്."
                    },
                    {
                        "name": "ക്ലോക്കുകളും പെൻഡുലം ക്ലോക്കുകളും",
                        "zone": "വടക്ക്, കിഴക്ക് അല്ലെങ്കിൽ പടിഞ്ഞാറ് ഭിത്തികൾ",
                        "rules": "ക്ലോക്കുകൾ വടക്ക് (കുബേര സ്ഥാനം) അല്ലെങ്കിൽ കിഴക്ക് ഭിത്തികളിൽ തൂക്കുക. കേടായ ക്ലോക്കുകൾ സൂക്ഷിക്കരുത്, പ്രധാന വാതിലിനു മുകളിൽ വയ്ക്കരുത്."
                    },
                    {
                        "name": "കണ്ണാടികളും ഡ്രസ്സിംഗ് ടേബിളും",
                        "zone": "വടക്ക് അല്ലെങ്കിൽ കിഴക്ക് ഭിത്തി",
                        "rules": "കണ്ണാടികൾ വടക്ക് അല്ലെങ്കിൽ കിഴക്ക് ഭിത്തിയിൽ ഘടിപ്പിക്കുക. കിടക്കയ്ക്കോ പ്രധാന വാതിലിനോ നേരെ കണ്ണാടി വയ്ക്കരുത്."
                    },
                    {
                        "name": "ഷൂ റാക്ക് (പാദരക്ഷാ സ്റ്റാൻഡ്)",
                        "zone": "വടക്ക്-പടിഞ്ഞാറ് അല്ലെങ്കിൽ പടിഞ്ഞാറ് (വീടിന് പുറത്ത്)",
                        "rules": "ഷൂ റാക്ക് പടിഞ്ഞാറോ വടക്ക്-പടിഞ്ഞാറോ സൂക്ഷിക്കുക. പൂജാമുറിയുടെ താഴെയോ പ്രധാന വാതിലിന് നേരെയോ ഈശാനകോണിലോ വയ്ക്കരുത്."
                    },
                    {
                        "name": "ടെറസ് ഗാർഡനും സിറ്റ്-ഔട്ടും",
                        "zone": "ഭാരമുള്ള ചെടിച്ചട്ടികൾ തെക്ക്-പടിഞ്ഞാറ്; ലഘുവായ ചെടികൾ വടക്ക്-കിഴക്ക്",
                        "rules": "ടെറസിൽ വലിയ ചെടിച്ചട്ടികളും പർഗോളയും തെക്ക്-പടിഞ്ഞാറ് ഭാഗത്ത് ഒരുക്കുക. വടക്ക്-കിഴക്ക് ഭാഗം തുറന്നതും ഭാരമില്ലാത്തതുമായി നിലനിർത്തുക."
                    },
                    {
                        "name": "സെക്യൂരിറ്റി ക്യാബിൻ (കാവൽക്കാരന്റെ മുറി)",
                        "zone": "പ്രധാന ഗേറ്റിന്റെ തെക്ക്-പടിഞ്ഞാറ് അല്ലെങ്കിൽ വടക്ക്-പടിഞ്ഞാറ്",
                        "rules": "കാവൽക്കാരൻ ഇരിക്കുമ്പോൾ വടക്കോട്ടോ കിഴക്കോട്ടോ ദർശനം നൽകണം. ക്യാബിന്റെ ഉയരം ചുറ്റുമതിലിനേക്കാൾ കുറവായിരിക്കണം."
                    },
                    {
                        "name": "വളർത്തുമൃഗങ്ങളുടെ സ്ഥലം (ഡോഗ് കെന്നൽ)",
                        "zone": "വടക്ക്-പടിഞ്ഞാറ് (വായുകോൺ) അല്ലെങ്കിൽ വടക്ക്",
                        "rules": "വളർത്തുമൃഗങ്ങൾക്ക് വടക്ക്-പടിഞ്ഞാറ് കോൺ ഉത്തമമാണ്. പക്ഷികൾക്ക് തീറ്റയും വെള്ളവും വടക്കോ കിഴക്കോ നൽകുന്നത് ശുഭകരമാണ്."
                    },
                    {
                        "name": "ബാഹ്യ ഗോവണി (ഔട്ട്ഡോർ സ്റ്റെയർകെയ്സ്)",
                        "zone": "തെക്ക്-പടിഞ്ഞാറ്, തെക്ക് അല്ലെങ്കിൽ പടിഞ്ഞാറ്",
                        "rules": "ഗോവണി ഘടികാരദിശയിൽ (ക്ലോക്ക്‌വൈസ്) കയറുന്ന തരത്തിലായിരിക്കണം. വീടിന്റെ വടക്ക്-കിഴക്ക് ഭാഗത്ത് ഒരിക്കലും പുറം ഗോവണി പണിയരുത്."
                    },
                    {
                        "name": "വാട്ടർ പ്യൂരിഫയറും കുടിവെള്ളവും (RO ഫിൽറ്റർ)",
                        "zone": "വടക്ക്-കിഴക്ക് (ഈശാനകോൺ - ശുദ്ധജല സ്ഥാനം) അല്ലെങ്കിൽ വടക്ക്",
                        "rules": "കുടിവെള്ളവും ഫിൽറ്ററും അടുക്കളയുടെ ഈശാനകോണിൽ സ്ഥാപിക്കുക. കിഴക്കോട്ട് നോക്കി വെള്ളം കുടിക്കുന്നത് ആരോഗ്യപ്രദമാണ്."
                    }
                ]
            }
        ]
    }
};

    window.getVastuElementsGuide = function(lang) {
        const normalized = String(lang || 'en').toLowerCase().trim();
        return VASTU_MULTILINGUAL_GUIDE[normalized] || VASTU_MULTILINGUAL_GUIDE.en;
    };

    const PX_PER_MM = 96 / 25.4;
    const FONT_STACK = '"Noto Sans Kannada", "Noto Sans Tamil", "Noto Sans Telugu", "Noto Sans Malayalam", "Noto Sans Devanagari", "DM Sans", Arial, sans-serif';

    window.renderIndicVastuCard = function(item, idealLabel, contentWidthMm, scale = 2.5) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const widthPx = Math.round(contentWidthMm * PX_PER_MM * scale);

        const titleFontSize = Math.round(8.5 * (96 / 72) * scale);
        const labelFontSize = Math.round(7.5 * (96 / 72) * scale);
        const bodyFontSize = Math.round(7.5 * (96 / 72) * scale);
        const paddingX = Math.round(3.5 * PX_PER_MM * scale);
        const paddingY = Math.round(3.2 * PX_PER_MM * scale);
        const innerWidth = widthPx - paddingX * 2;

        ctx.font = `normal ${bodyFontSize}px ${FONT_STACK}`;
        const words = String(item.rules || '').split(/\s+/);
        const lines = [];
        let cur = '';
        for (const w of words) {
            const test = cur ? cur + ' ' + w : w;
            if (ctx.measureText(test).width > innerWidth && cur) {
                lines.push(cur);
                cur = w;
            } else {
                cur = test;
            }
        }
        if (cur) lines.push(cur);
        if (!lines.length) lines.push('');

        const lineHeightPx = Math.round(3.5 * PX_PER_MM * scale);
        const headerHeightPx = Math.max(titleFontSize, labelFontSize) + Math.round(2.8 * PX_PER_MM * scale);
        const totalHeightPx = paddingY * 2 + headerHeightPx + lines.length * lineHeightPx;

        canvas.width = widthPx;
        canvas.height = totalHeightPx;

        ctx.fillStyle = '#fcfdfb';
        ctx.strokeStyle = '#e2e8e4';
        ctx.lineWidth = Math.max(1, Math.round(0.3 * PX_PER_MM * scale));
        const radius = Math.round(1.5 * PX_PER_MM * scale);

        ctx.beginPath();
        ctx.moveTo(radius, 0);
        ctx.lineTo(widthPx - radius, 0);
        ctx.quadraticCurveTo(widthPx, 0, widthPx, radius);
        ctx.lineTo(widthPx, totalHeightPx - radius);
        ctx.quadraticCurveTo(widthPx, totalHeightPx, widthPx - radius, totalHeightPx);
        ctx.lineTo(radius, totalHeightPx);
        ctx.quadraticCurveTo(0, totalHeightPx, 0, totalHeightPx - radius);
        ctx.lineTo(0, radius);
        ctx.quadraticCurveTo(0, 0, radius, 0);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#234438';
        ctx.font = `bold ${titleFontSize}px ${FONT_STACK}`;
        ctx.textBaseline = 'top';
        ctx.textAlign = 'left';
        ctx.fillText(item.name, paddingX, paddingY);

        ctx.fillStyle = '#a2782b';
        ctx.font = `bold ${labelFontSize}px ${FONT_STACK}`;
        ctx.textAlign = 'right';
        ctx.fillText(`${idealLabel} ${item.zone}`, widthPx - paddingX, paddingY);

        ctx.fillStyle = '#414b46';
        ctx.font = `normal ${bodyFontSize}px ${FONT_STACK}`;
        ctx.textAlign = 'left';
        let textY = paddingY + headerHeightPx;
        for (const line of lines) {
            ctx.fillText(line, paddingX, textY);
            textY += lineHeightPx;
        }

        return {
            dataUrl: canvas.toDataURL('image/png'),
            heightMm: totalHeightPx / (PX_PER_MM * scale)
        };
    };

    window.renderIndicVastuHeading = function(text, contentWidthMm, level = 2, scale = 2.5) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const widthPx = Math.round(contentWidthMm * PX_PER_MM * scale);
        const fontSizePt = level === 1 ? 9.5 : level === 2 ? 13 : 10.5;
        const fontSizePx = Math.round(fontSizePt * (96 / 72) * scale);

        ctx.font = `bold ${fontSizePx}px ${FONT_STACK}`;
        const words = String(text || '').split(/\s+/);
        const lines = [];
        let cur = '';
        for (const w of words) {
            const test = cur ? cur + ' ' + w : w;
            if (ctx.measureText(test).width > widthPx && cur) {
                lines.push(cur);
                cur = w;
            } else {
                cur = test;
            }
        }
        if (cur) lines.push(cur);

        const lineHeightPx = Math.round(fontSizePx * 1.35);
        const totalHeightPx = lines.length * lineHeightPx + Math.round(2 * scale);

        canvas.width = widthPx;
        canvas.height = totalHeightPx;

        ctx.fillStyle = level === 1 ? '#a2782b' : '#234438';
        ctx.font = `bold ${fontSizePx}px ${FONT_STACK}`;
        ctx.textBaseline = 'top';
        ctx.textAlign = 'left';

        let textY = Math.round(1 * scale);
        for (const line of lines) {
            ctx.fillText(line, 0, textY);
            textY += lineHeightPx;
        }

        return {
            dataUrl: canvas.toDataURL('image/png'),
            heightMm: totalHeightPx / (PX_PER_MM * scale)
        };
    };

    window.renderIndicVastuText = function(text, contentWidthMm, options = {}, scale = 2.5) {
        const { size = 8, color = [75, 85, 80], bold = false } = options;
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const widthPx = Math.round(contentWidthMm * PX_PER_MM * scale);
        const fontSizePx = Math.round(size * (96 / 72) * scale);

        ctx.font = `${bold ? 'bold ' : 'normal '}${fontSizePx}px ${FONT_STACK}`;
        const words = String(text || '').split(/\s+/);
        const lines = [];
        let cur = '';
        for (const w of words) {
            const test = cur ? cur + ' ' + w : w;
            if (ctx.measureText(test).width > widthPx && cur) {
                lines.push(cur);
                cur = w;
            } else {
                cur = test;
            }
        }
        if (cur) lines.push(cur);

        const lineHeightPx = Math.round(fontSizePx * 1.4);
        const totalHeightPx = lines.length * lineHeightPx + Math.round(2 * scale);

        canvas.width = widthPx;
        canvas.height = totalHeightPx;

        ctx.fillStyle = `rgb(${color.join(',')})`;
        ctx.font = `${bold ? 'bold ' : 'normal '}${fontSizePx}px ${FONT_STACK}`;
        ctx.textBaseline = 'top';
        ctx.textAlign = 'left';

        let textY = Math.round(1 * scale);
        for (const line of lines) {
            ctx.fillText(line, 0, textY);
            textY += lineHeightPx;
        }

        return {
            dataUrl: canvas.toDataURL('image/png'),
            heightMm: totalHeightPx / (PX_PER_MM * scale)
        };
    };
})();
