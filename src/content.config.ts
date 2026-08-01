/**
 * Content collections — the home of all listing/destination prose (CLAUDE.md §11.2).
 *
 * WHY COLLECTIONS, NOT SUPABASE: apartment facts beyond photos are not
 * anon-readable (RLS), and prose wants PR review — Claude drafts, Jorge +
 * Melissa edit (§11.3). Photos still load live from Supabase; only words and
 * verified facts live here.
 *
 * One file per listing per language: src/content/listings/<lang>/<file>.md
 * The frontmatter `slug` (not the filename) is the URL segment, so slugs can
 * be localized later (/fr/appartements/<slug-fr>/) without renaming files.
 *
 * TWO GUARD FIELDS:
 *   draft         — true removes the page from the build entirely.
 *   factsVerified — false renders the page NOINDEX with a visible draft
 *                   banner, keeps it out of JSON-LD, and (because indexable
 *                   /apartments/ pages fall under the strict Lighthouse rule,
 *                   §6) keeps CI red if it is ever autodiscovered. Placeholder
 *                   facts cannot silently reach Google. Flip it only after a
 *                   human has checked every number and every "home truth".
 */
import { defineCollection } from "astro:content";
import { z } from "astro/zod"; // `z` via astro:content / astro:schema is deprecated
import { glob } from "astro/loaders";

const listings = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/listings" }),
  schema: z.object({
    lang: z.enum(["en", "es", "fr"]),
    /** URL segment under /apartments/ (localized per language later). */
    slug: z.string().regex(/^[a-z0-9-]+$/),
    draft: z.boolean().default(false),
    factsVerified: z.boolean().default(false),

    /** Two-word home name (Plum pattern) — the h1. */
    name: z.string(),
    /** Meta description, ≤160 chars. */
    description: z.string().max(160),

    building: z.string(),
    /** Must match property_photos.building_slug so photos resolve. */
    buildingSlug: z.string(),
    unit: z.string(),
    neighborhood: z.enum(["Versalles", "Fluvial"]),

    guests: z.number().int().positive(),
    bedrooms: z.number().int().positive(),
    baths: z.number().positive(),
    floor: z.number().int().nonnegative(),
    /** Senior audience: elevator presence is a first-class fact. null = unknown. */
    elevator: z.boolean().nullable(),

    /** Monthly floor price in USD. null = pending → renders "ask us". */
    priceFromUSD: z.number().positive().nullable(),
    seasons: z.array(
      z.object({
        label: z.string(),
        months: z.string(),
        monthlyUSD: z.number().positive().nullable(),
      }),
    ),
    minStayNights: z.number().int().positive().nullable(),

    /** Exactly 3 captioned highlights (template, CLAUDE.md §7). */
    highlights: z.array(z.object({ title: z.string(), caption: z.string() })).length(3),
    /** Honest drawbacks in plain sentences — the trust wedge. Never delete to zero. */
    homeTruths: z.array(z.string()).min(1),
    /** Full list; the page shows 8 and folds the rest behind <details>. */
    amenities: z.array(z.string()).min(1),
    bedroomsDetail: z.array(
      z.object({ room: z.string(), bed: z.string(), ensuite: z.boolean() }),
    ),
    /** Walk-times replace a map pin on purpose (60+ audience, zero JS). */
    walkTimes: z.array(z.object({ place: z.string(), minutes: z.number().int().positive() })),
    /** What the rent includes / any extra costs, one plain line each. */
    servicesAndFees: z.array(z.string()).default([]),
    houseRules: z.array(z.string()),
    cancellation: z.string(),
    /** Named human — the differentiator. Photo asset comes later. */
    host: z.object({ name: z.string(), note: z.string() }),
  }),
});

export const collections = { listings };
