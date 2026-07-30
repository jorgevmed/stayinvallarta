/**
 * Locales, hreflang codes and the route registry.
 *
 * WHY A REGISTRY: hreflang must be *reciprocal* — every localized version of a
 * page has to list every other version, including itself. Deriving that from
 * the URL breaks the moment slugs are localized (SIV-5 requires
 * /es/departamentos/ and /fr/appartements/, not /es/apartments/). So each page's
 * three URLs are declared here, once, and both the page and its alternates read
 * from the same object. Add an entry when a page ships — never hand-write a
 * <link rel="alternate"> in a template.
 */

export type Lang = "en" | "es" | "fr";

export const LOCALES: readonly Lang[] = ["en", "es", "fr"] as const;

/**
 * hreflang codes emitted per locale.
 * EN covers two markets (25% US + 25% English Canada) and both are served the
 * same page, so `en` maps to two codes. Spanish is Mexico, French is Québec.
 */
export const HREFLANG: Record<Lang, readonly string[]> = {
  en: ["en-US", "en-CA"],
  es: ["es-MX"],
  fr: ["fr-CA"],
};

/** Open Graph locale codes (underscore form). */
export const OG_LOCALE: Record<Lang, string> = {
  en: "en_US",
  es: "es_MX",
  fr: "fr_CA",
};

/** Full-word language names for the switcher (never flags, never 2-letter codes). */
export const LANG_NAME: Record<Lang, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
};

/**
 * The route registry — the single source of truth for localized URLs.
 * Slugs are localized per SIV-5; keep trailing slashes, Astro builds directories.
 */
export const ROUTES = {
  home: { en: "/", es: "/es/", fr: "/fr/" },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof ROUTES;

/** All localized paths for a route, for building the hreflang set. */
export function alternatesFor(key: RouteKey): Record<Lang, string> {
  return ROUTES[key];
}

/** The path of `key` in `lang` — use for language switchers and cross-links. */
export function localizedPath(key: RouteKey, lang: Lang): string {
  return ROUTES[key][lang];
}
