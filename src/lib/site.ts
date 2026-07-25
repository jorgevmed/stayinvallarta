/**
 * Site-wide contact + gallery configuration.
 * Fill in the WhatsApp number (digits only, with country code, e.g. "5213221234567")
 * and the public contact email — the gallery CTA buttons appear automatically
 * once these are set. Leave "" to hide a button.
 */
export const CONTACT = {
  whatsappNumber: "5213223730218", // 52 (MX) + 10-digit number, digits only
  email: "reservations@stayinvallarta.com",
};

/**
 * Known galleries — build-time fallback for route generation.
 * getStaticPaths merges this with the live published catalog, so a unit whose
 * photos were unpublished at build time still gets a page. Update when an
 * apartment is added (or just rebuild the site — live data covers it).
 */
export const KNOWN_GALLERIES: Record<string, { name: string; units: string[] }> = {
  "artisan-lagos": { name: "Artisan Lagos", units: ["101", "102", "203", "204", "402", "404"] },
  "bambu-residencial": { name: "Bambu Residencial", units: ["405"] },
  "punto-madeira": { name: "Punto Madeira", units: ["502", "507"] },
  "roma-240": { name: "Roma 240", units: ["303", "502", "602"] },
  "roma-encore": { name: "Roma Encore", units: ["703"] },
};
