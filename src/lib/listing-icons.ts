/**
 * Listing-page icons — Untitled UI PRO duotone, pre-rendered to static SVG
 * strings, exactly like gallery-icons.ts (regenerate: see CLAUDE.md §10 —
 * NEVER add @untitledui-pro/icons to package.json; the private registry
 * breaks CI). Licensed via the Untitled UI Icons PRO purchase.
 *
 * Icons are DECORATIVE (aria-hidden) and always sit next to their words —
 * the senior rule is words over icons, never icons instead of words.
 *
 * The keyword matchers work because listing copy is centrally owned
 * (CONTENT-VOICE.md): we control the amenity strings, so plain-language
 * keywords are stable. Unknown amenities get a check, unknown places a pin.
 */

const ICONS: Record<string, string> = {
  wifi: "<svg viewBox=\"0 0 24 24\" fill=\"none\" width=\"24\" height=\"24\" color=\"currentColor\" aria-hidden=\"true\"><path d=\"M12 19.5h.01M22.806 8.7A15.942 15.942 0 0 0 12 4.5c-4.166 0-7.96 1.592-10.807 4.2m3.539 3.543A10.958 10.958 0 0 1 12 9.5c2.786 0 5.33 1.036 7.268 2.743m-3.57 3.532A5.974 5.974 0 0 0 12 14.5c-1.416 0-2.718.49-3.745 1.312\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>",
  pool: "<svg viewBox=\"0 0 24 24\" fill=\"none\" width=\"24\" height=\"24\" color=\"currentColor\" aria-hidden=\"true\"><path d=\"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>",
  ac: "<svg viewBox=\"0 0 24 24\" fill=\"none\" width=\"24\" height=\"24\" color=\"currentColor\" aria-hidden=\"true\"><path d=\"m18.062 8.5-12.124 7m12.124-7 1.098-4.098M18.062 8.5l4.098 1.098M5.938 15.5 1.84 14.402M5.938 15.5 4.84 19.598M18.062 15.5l-12.124-7m12.124 7 4.098-1.098M18.062 15.5l1.098 4.098M5.938 8.5 4.84 4.402M5.938 8.5 1.84 9.598M12 5v14m0-14L9 2m3 3 3-3m-3 17-3 3m3-3 3 3\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>",
  tv: "<svg viewBox=\"0 0 24 24\" fill=\"none\" width=\"24\" height=\"24\" color=\"currentColor\" aria-hidden=\"true\"><path opacity=\"0.12\" d=\"M2 11.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 7 5.12 7 6.8 7h10.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 9.28 22 10.12 22 11.8v4.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 21 18.88 21 17.2 21H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 18.72 2 17.88 2 16.2v-4.4Z\" fill=\"currentColor\"></path><path d=\"m17 3-5 4-5-4m-.2 18h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 18.72 22 17.88 22 16.2v-4.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 7 18.88 7 17.2 7H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 9.28 2 10.12 2 11.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 21 5.12 21 6.8 21Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>",
  workspace: "<svg viewBox=\"0 0 24 24\" fill=\"none\" width=\"24\" height=\"24\" color=\"currentColor\" aria-hidden=\"true\"><path opacity=\"0.12\" d=\"M2 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 3 5.12 3 6.8 3h10.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 5.28 22 6.12 22 7.8v4.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 17 18.88 17 17.2 17H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 14.72 2 13.88 2 12.2V7.8Z\" fill=\"currentColor\"></path><path d=\"M8 21h8m-4-4v4m-5.2-4h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 14.72 22 13.88 22 12.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 3 18.88 3 17.2 3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 5.28 2 6.12 2 7.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 17 5.12 17 6.8 17Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>",
  water: "<svg viewBox=\"0 0 24 24\" fill=\"none\" width=\"24\" height=\"24\" color=\"currentColor\" aria-hidden=\"true\"><path opacity=\"0.12\" d=\"M22 16a6 6 0 0 1-12 0c0-4.314 6-14 6-14s6 9.686 6 14Z\" fill=\"currentColor\"></path><path d=\"M22 16a6 6 0 0 1-12 0c0-4.314 6-14 6-14s6 9.686 6 14ZM8 9a3 3 0 1 1-6 0c0-2.157 3-7 3-7s3 4.843 3 7Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>",
  fan: "<svg viewBox=\"0 0 24 24\" fill=\"none\" width=\"24\" height=\"24\" color=\"currentColor\" aria-hidden=\"true\"><path d=\"M21 18s-1.19-.47-2-.698c-5.12-1.445-8.88 2.84-14 1.396C4.19 18.469 3 18 3 18m18-6s-1.19-.47-2-.698c-5.12-1.445-8.88 2.84-14 1.396C4.19 12.469 3 12 3 12m18-6s-1.19-.47-2-.698c-5.12-1.445-8.88 2.84-14 1.396C4.19 6.47 3 6 3 6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>",
  check: "<svg viewBox=\"0 0 24 24\" fill=\"none\" width=\"24\" height=\"24\" color=\"currentColor\" aria-hidden=\"true\"><path opacity=\"0.12\" d=\"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z\" fill=\"currentColor\"></path><path d=\"m7.5 12 3 3 6-6m5.5 3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>",
  pharmacy: "<svg viewBox=\"0 0 24 24\" fill=\"none\" width=\"24\" height=\"24\" color=\"currentColor\" aria-hidden=\"true\"><path opacity=\"0.12\" d=\"M15 4.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C14.24 3 13.96 3 13.4 3h-2.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C9 3.76 9 4.04 9 4.6v2.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C8.24 9 7.96 9 7.4 9H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 9.76 3 10.04 3 10.6v2.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 15 4.04 15 4.6 15h2.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C9 15.76 9 16.04 9 16.6v2.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C9.76 21 10.04 21 10.6 21h2.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C15 20.24 15 19.96 15 19.4v-2.8c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C15.76 15 16.04 15 16.6 15h2.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 14.24 21 13.96 21 13.4v-2.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 9 19.96 9 19.4 9h-2.8c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C15 8.24 15 7.96 15 7.4V4.6Z\" fill=\"currentColor\"></path><path d=\"M15 4.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C14.24 3 13.96 3 13.4 3h-2.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C9 3.76 9 4.04 9 4.6v2.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C8.24 9 7.96 9 7.4 9H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 9.76 3 10.04 3 10.6v2.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 15 4.04 15 4.6 15h2.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C9 15.76 9 16.04 9 16.6v2.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C9.76 21 10.04 21 10.6 21h2.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C15 20.24 15 19.96 15 19.4v-2.8c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C15.76 15 16.04 15 16.6 15h2.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 14.24 21 13.96 21 13.4v-2.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 9 19.96 9 19.4 9h-2.8c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C15 8.24 15 7.96 15 7.4V4.6Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>",
  market: "<svg viewBox=\"0 0 24 24\" fill=\"none\" width=\"24\" height=\"24\" color=\"currentColor\" aria-hidden=\"true\"><path opacity=\"0.12\" d=\"M17.352 16.5H8.794c-.99 0-1.485 0-1.883-.183a2 2 0 0 1-.853-.745c-.234-.369-.301-.86-.435-1.84L4.571 6h16.462c.332 0 .498 0 .614.068a.5.5 0 0 1 .22.266c.045.127.014.29-.048.616l-1.323 6.949c-.177.926-.265 1.389-.504 1.735a2 2 0 0 1-.841.696c-.385.17-.857.17-1.799.17Z\" fill=\"currentColor\"></path><path d=\"M2 2h1.306c.246 0 .37 0 .468.045a.5.5 0 0 1 .213.185c.059.092.076.213.111.457L4.571 6m0 0 1.052 7.731c.134.982.2 1.472.435 1.841a2 2 0 0 0 .853.745c.398.183.893.183 1.883.183h8.558c.942 0 1.414 0 1.799-.17a2 2 0 0 0 .841-.696c.239-.346.327-.81.503-1.735l1.324-6.95c.062-.325.093-.488.048-.615a.5.5 0 0 0-.22-.266C21.532 6 21.366 6 21.034 6H4.571ZM10 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>",
  beach: "<svg viewBox=\"0 0 24 24\" fill=\"none\" width=\"24\" height=\"24\" color=\"currentColor\" aria-hidden=\"true\"><path opacity=\"0.12\" d=\"M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z\" fill=\"currentColor\"></path><path d=\"M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>",
  pin: "<svg viewBox=\"0 0 24 24\" fill=\"none\" width=\"24\" height=\"24\" color=\"currentColor\" aria-hidden=\"true\"><path opacity=\"0.12\" d=\"M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z\" fill=\"currentColor\"></path><path d=\"M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M12 22c4-4 8-7.582 8-12a8 8 0 1 0-16 0c0 4.418 4 8 8 12Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>",
};

const AMENITY_RULES: [RegExp, string][] = [
  [/wi-?fi|internet/i, "wifi"],
  [/pool|barbecue|bbq|rooftop/i, "pool"],
  [/air.?conditioning|a\/c|cooling/i, "ac"],
  [/\btv\b|television/i, "tv"],
  [/workspace|desk|work/i, "workspace"],
  [/water/i, "water"],
  [/fan/i, "fan"],
];

const WALK_RULES: [RegExp, string][] = [
  [/pharmac|clinic|hospital|doctor|medical/i, "pharmacy"],
  [/supermarket|market|grocer|store/i, "market"],
  [/beach|playa/i, "beach"],
];

function pick(text: string, rules: [RegExp, string][], fallback: string): string {
  for (const [re, key] of rules) if (re.test(text)) return ICONS[key];
  return ICONS[fallback];
}

/** Icon for an amenity line; falls back to a check. */
export const amenityIcon = (text: string): string => pick(text, AMENITY_RULES, "check");

/** Icon for a walk-time place; falls back to a map pin. */
export const walkIcon = (text: string): string => pick(text, WALK_RULES, "pin");
