/**
 * JSON-LD building blocks.
 *
 * Only facts we can actually stand behind go in here — structured data that
 * contradicts the page is worse than none. No street address is claimed
 * (we don't publish one), no aggregateRating (there is no review corpus yet),
 * no priceRange until real prices ship on /listings/.
 *
 * Target schema for individual apartments later is `VacationRental`; the
 * organization itself is a `LodgingBusiness`. Both share the @id below so the
 * graph links up instead of describing two unrelated entities.
 */
import { CONTACT } from "./site";

const SITE = "https://stayinvallarta.com";

export const ORG_ID = `${SITE}/#organization`;
export const SITE_ID = `${SITE}/#website`;

/** E.164 for the public phone. The WhatsApp number carries Mexico's legacy
 *  mobile "1" after the country code; tel: links must not. */
export const TEL_E164 = "+523223730218";

export function organizationSchema() {
  return {
    "@type": "LodgingBusiness",
    "@id": ORG_ID,
    name: "Stay in Vallarta",
    url: SITE,
    logo: { "@type": "ImageObject", url: `${SITE}/logo.png` },
    image: `${SITE}/og/default.png`,
    email: CONTACT.email,
    telephone: TEL_E164,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Puerto Vallarta",
      addressRegion: "Jalisco",
      addressCountry: "MX",
    },
    areaServed: [
      { "@type": "Place", name: "Versalles, Puerto Vallarta" },
      { "@type": "Place", name: "Fluvial Vallarta, Puerto Vallarta" },
    ],
    knowsLanguage: ["en", "es", "fr"],
    availableLanguage: ["English", "Español", "Français"],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: SITE,
    name: "Stay in Vallarta",
    inLanguage: ["en-US", "en-CA", "es-MX", "fr-CA"],
    publisher: { "@id": ORG_ID },
  };
}

/**
 * Per-apartment node for /apartments/ pages.
 *
 * ONLY call this when the listing's `factsVerified` is true — structured data
 * that contradicts the page is worse than none (see file header). Price is
 * optional for the same reason: omit until a real number ships.
 */
export function vacationRentalSchema(v: {
  url: string;
  name: string;
  description: string;
  bedrooms: number;
  baths: number;
  guests: number;
  neighborhood: string;
  image?: string;
  priceFromUSD?: number | null;
}) {
  return {
    "@type": "VacationRental",
    "@id": `${v.url}#vacation-rental`,
    name: v.name,
    description: v.description,
    url: v.url,
    ...(v.image ? { image: v.image } : {}),
    containedInPlace: { "@id": ORG_ID },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Puerto Vallarta",
      addressRegion: "Jalisco",
      addressCountry: "MX",
    },
    containsPlace: {
      "@type": "Accommodation",
      occupancy: { "@type": "QuantitativeValue", maxValue: v.guests },
      numberOfBedrooms: v.bedrooms,
      numberOfBathroomsTotal: v.baths,
    },
    ...(v.priceFromUSD
      ? {
          offers: {
            "@type": "Offer",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: v.priceFromUSD,
              priceCurrency: "USD",
              unitText: "MONTH",
            },
          },
        }
      : {}),
    knowsLanguage: ["en", "es", "fr"],
  };
}

/** Wrap nodes in a single @graph so one <script> describes the whole page. */
export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
