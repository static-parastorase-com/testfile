# Vastu Marma overlay geometry

The Marma engine treats the marked floor boundary and the Vastu calculation frame as separate objects. Plan/world points are projected onto a coordinate basis whose **+Y axis is calibrated North** and whose **+X axis is East**. The axis-aligned bounds of that projected polygon form the Vastu reference rectangle. Results are transformed back to plan/world coordinates only after calculation; pan, zoom, pixels, DPI, and output units therefore cannot change normalized placement.

The reference rectangle is divided at `i / 9` for `i = 0…9`, producing 81 floating-point cells. The single central cell (row 4, column 4) is this application's Brahmasthan interpretation. Its center and the actual polygon's area-weighted centroid remain distinct values.

## Configured outer Devta padas

Rows run North to South and columns West to East. Each Vansha endpoint uses the center of its configured pada.

| Devta | Row | Column | Devta | Row | Column |
| --- | ---: | ---: | --- | ---: | ---: |
| Shikhi | 0 | 8 | Pitra | 8 | 0 |
| Aditi | 0 | 6 | Sugriv | 6 | 0 |
| Jayant | 2 | 8 | Bhringraj | 8 | 2 |
| Roga | 0 | 0 | Anila | 8 | 8 |
| Mukhya | 0 | 2 | Brisha | 6 | 8 |
| Shosha | 2 | 0 | Vitatha | 8 | 6 |

The mapping is isolated in `DEVTA_PADA_LAYOUT`, versioned as `81-pada-v2-provisional-devta-anchors`, and intentionally flagged **provisional pending domain review**. It normalizes spellings found in the existing Devatas artwork (for example Anil/Anila and Vithatha/Vitatha). No claim of textual-tradition accuracy is made for these anchors until that review is complete. Saved floor boundaries remain compatible; derived results carrying an older rules version must be recalculated from that boundary rather than shifted.

## Vanshas and intersections

The configured NE–SW group is `SHIKHI_TO_PITRA`, `ADITI_TO_SUGRIV`, and `JAYANT_TO_BHRINGRAJ`. The NW–SE group is `ROGA_TO_ANILA`, `MUKHYA_TO_BRISHA`, and `SHOSHA_TO_VITATHA`.

Each Devta pair creates an infinite mathematical line. The renderer clips it to the regular reference rectangle, while the engine retains its anchors and line identity. Every line in the first group is intersected with every line in the second group, producing the nine Maha Marma points programmatically. The engine stores local, normalized, and world coordinates; source Vansha IDs; boundary status; direction; and nearest-wall distance.

## Irregular boundaries

Polygon edges only classify results—they never alter the Mandala. Line/polygon intersections divide each clipped Vansha into ordered inside, outside, or on-wall rendering segments. Marma points are classified as inside, outside, or on-boundary and are never projected onto a wall or moved into the footprint. Cut and extension arrays are reserved in the API; the current application has no independent cut/extension detector, so absent space is reported as outside rather than claiming a more specific status.

## Debug renderings

The square, rectangle, L-shape, and cross-shape fixtures below are generated from the production engine. Blue is the reference frame, pale blue is the 9×9 grid, gold is Brahmasthan, solid/dashed gold lines are inside/outside Vansha segments, and red marks the calculated intersections.

* [Square debug rendering](marma-debug-square.svg)
* [Rectangle debug rendering](marma-debug-rectangle.svg)
* [L-shape debug rendering](marma-debug-l-shape.svg)
* [Cross-shape debug rendering](marma-debug-cross-shape.svg)
