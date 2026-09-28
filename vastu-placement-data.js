(function (root, factory) {
    const api = factory();
    if (typeof module === 'object' && module.exports) module.exports = api;
    if (root) root.VastuPlacementData = api;
}(typeof window !== 'undefined' ? window : globalThis, function () {
    'use strict';

    // These are traditional Vastu associations, not medical or financial
    // diagnoses. Keep the wording conditional whenever it is shown to a user.
    const profiles = [
        { keywords: ['pooja', 'puja', 'temple', 'mandir', 'prayer', 'worship'], concerns: ['difficulty maintaining calm and focus', 'a less settled atmosphere for prayer or meditation'] },
        { keywords: ['kitchen', 'rasoi', 'cooking'], concerns: ['frequent disagreements or irritability', 'avoidable expense and disturbance in daily routines'] },
        { keywords: ['master bedroom', 'primary bedroom', 'parents bedroom', 'main bedroom', 'elders room'], concerns: ['restlessness and disturbed sleep', 'strain in relationships or difficulty maintaining stability'] },
        { keywords: ['children bedroom', 'kids room', 'boys room', 'girls room', 'nursery'], concerns: ['reduced concentration or unsettled sleep', 'restlessness in children’s routines'] },
        { keywords: ['guest bedroom', 'visitor room'], concerns: ['long or unsettled guest stays', 'reduced privacy or household restlessness'] },
        { keywords: ['bedroom', 'bed room'], concerns: ['disturbed sleep and fatigue', 'tension or reduced emotional comfort'] },
        { keywords: ['toilet', 'bathroom', 'washroom', 'shower', 'septic'], concerns: ['hygiene, drainage, or maintenance concerns', 'a sense of heaviness in the affected zone'] },
        { keywords: ['living room', 'drawing room', 'family room', 'hall', 'reception'], concerns: ['reduced social harmony', 'difficulty keeping the home active and welcoming'] },
        { keywords: ['study', 'library', 'office', 'work from home'], concerns: ['difficulty concentrating or making decisions', 'delays in study or professional progress'] },
        { keywords: ['entrance', 'main door', 'entry door', 'foyer'], concerns: ['slower opportunities or an unsettled first impression', 'difficulty maintaining a positive flow through the home'] },
        { keywords: ['staircase', 'stairs', 'elevator', 'lift'], concerns: ['pressure or heaviness in the affected zone', 'obstacles and instability in household routines'] },
        { keywords: ['water source', 'borewell', 'well', 'swimming pool', 'pool'], concerns: ['financial pressure or emotional imbalance', 'dampness and maintenance concerns'] },
        { keywords: ['overhead tank', 'water tank'], concerns: ['a sense of pressure in the affected zone', 'unexpected expense or maintenance burden'] },
        { keywords: ['cash locker', 'safe', 'money storage'], concerns: ['difficulty retaining savings', 'irregular cash flow or financial planning'] },
        { keywords: ['store', 'storage', 'pantry', 'wardrobe', 'almirah'], concerns: ['clutter and delayed decision-making', 'stagnation in household routines'] },
        { keywords: ['garage', 'parking'], concerns: ['delays in movement or travel', 'recurring vehicle or maintenance inconvenience'] },
        { keywords: ['garden', 'balcony', 'veranda', 'open area'], concerns: ['reduced lightness and positive activity', 'difficulty keeping the area open and well maintained'] },
        { keywords: ['electrical', 'electric meter', 'generator', 'inverter', 'fireplace', 'heater'], concerns: ['overheating, equipment trouble, or avoidable expense', 'irritability and conflict associated with an imbalanced fire zone'] }
    ];

    const directionConcerns = {
        Northeast: ['the traditionally light and open Northeast may feel blocked'],
        Southeast: ['the fire zone may feel overactive or imbalanced'],
        Southwest: ['stability, rest, and long-term planning may feel affected'],
        Northwest: ['movement, support, or relationships may feel unsettled'],
        Center: ['the Brahmasthan may feel congested and circulation can be restricted']
    };

    function findProfile(roomName) {
        const name = String(roomName || '').trim().toLowerCase();
        if (!name) return null;
        return profiles.find(profile => profile.keywords.some(keyword => name.includes(keyword))) || null;
    }

    function getPlacementImpact(roomName, direction) {
        const profile = findProfile(roomName);
        const concerns = profile ? [...profile.concerns] : ['imbalance in the activities associated with this space'];
        const directional = directionConcerns[String(direction || '')];
        if (directional) concerns.push(...directional);
        return [...new Set(concerns)].slice(0, 3);
    }

    return { getPlacementImpact, profiles };
}));
