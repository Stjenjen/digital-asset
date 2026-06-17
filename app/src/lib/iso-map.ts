// Maps jurisdiction slugs → numeric ISO 3166-1 codes used by world-atlas TopoJSON
// 'ecb' is EU-wide and has no single country code — omitted from map rendering
export const JURISDICTION_TO_ISO: Record<string, number> = {
  australia:      36,
  brazil:         76,
  canada:         124,
  china:          156,
  france:         250,
  'hong-kong':    344,
  india:          356,
  japan:          392,
  malaysia:       458,
  norway:         578,
  'saudi-arabia': 682,
  singapore:      702,
  'south-africa': 710,
  'south-korea':  410,
  sweden:         752,
  switzerland:    756,
  thailand:       764,
  uae:            784,
  uk:             826,
  us:             840,
};

// Reverse lookup: ISO code → jurisdiction slug
export const ISO_TO_JURISDICTION: Record<number, string> = Object.fromEntries(
  Object.entries(JURISDICTION_TO_ISO).map(([slug, iso]) => [iso, slug])
);
