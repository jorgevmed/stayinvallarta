/**
 * Property-photo data access for the website (build-time / SSR).
 *
 * Reads the public, published rows from Supabase via the REST endpoint using the
 * anon key — no extra dependency needed. RLS (policy `pp_public_read`) guarantees
 * only `is_published = true` rows are ever returned to the anon key.
 *
 * Env (.env):
 *   PUBLIC_SUPABASE_URL       e.g. https://xxxx.supabase.co
 *   PUBLIC_SUPABASE_ANON_KEY  the publishable/anon key (safe in the browser)
 */
const SUPA = String(import.meta.env.PUBLIC_SUPABASE_URL ?? "").replace(/\/+$/, "");
const ANON = String(import.meta.env.PUBLIC_SUPABASE_ANON_KEY ?? "");

export interface PropertyPhoto {
  id: string;
  building: string;
  building_slug: string;
  unit: string | null;
  role: "unit" | "building" | "drone" | "pool" | "common";
  sort_order: number;
  is_hero: boolean;
  r2_key: string;
  width: number;
  height: number;
  lqip: string | null;
  alt_en: string | null;
  alt_es: string | null;
  alt_fr: string | null;
}

export interface PhotoQuery {
  buildingSlug?: string;
  unit?: string;
  role?: PropertyPhoto["role"];
  limit?: number;
}

/** Fetch published photos. Returns [] (never throws) if not configured or on error,
 *  so pages render gracefully before the bucket/table exist. */
export async function getPhotos(q: PhotoQuery = {}): Promise<PropertyPhoto[]> {
  if (!SUPA || !ANON) return [];
  const p = new URLSearchParams();
  p.set("select", "*");
  p.set("is_published", "eq.true");
  p.set("order", "sort_order.asc");
  if (q.buildingSlug) p.set("building_slug", `eq.${q.buildingSlug}`);
  if (q.unit) p.set("unit", `eq.${q.unit}`);
  if (q.role) p.set("role", `eq.${q.role}`);
  if (q.limit) p.set("limit", String(q.limit));
  try {
    const res = await fetch(`${SUPA}/rest/v1/property_photos?${p.toString()}`, {
      headers: { apikey: ANON, Authorization: `Bearer ${ANON}` },
    });
    if (!res.ok) return [];
    return (await res.json()) as PropertyPhoto[];
  } catch {
    return [];
  }
}

/** The hero for a set of photos: the flagged one, else the first. */
export function heroOf(photos: PropertyPhoto[]): PropertyPhoto | undefined {
  return photos.find((x) => x.is_hero) ?? photos[0];
}

/** Localized alt text with EN fallback. */
export function altFor(p: PropertyPhoto, lang: "en" | "es" | "fr" = "en"): string {
  return (lang === "es" ? p.alt_es : lang === "fr" ? p.alt_fr : p.alt_en) || p.alt_en || "";
}
