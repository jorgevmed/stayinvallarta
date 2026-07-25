/**
 * Cloudflare image delivery helper (website copy).
 *
 * Strategy: originals live in Cloudflare R2, exposed on a custom domain that is
 * proxied by Cloudflare (e.g. https://img.stayinvallarta.com). We resize/convert
 * on the fly with Cloudflare Image Resizing:
 *
 *   {BASE}/cdn-cgi/image/{options}/{r2_key}
 *
 * `format=auto` negotiates AVIF → WebP → JPEG per browser automatically, so one
 * URL serves the smallest file each device supports.
 *
 * Set PUBLIC_IMG_BASE in .env. Until it is set, buildImageUrl() returns "" and
 * callers fall back to the LQIP placeholder (so the site still renders).
 *
 * To switch to the Cloudflare Images product (imagedelivery.net) later, change
 * only this file — nothing that consumes it needs to change.
 */
const BASE = String(import.meta.env.PUBLIC_IMG_BASE ?? "").replace(/\/+$/, "");

export interface ImgOpts {
  width?: number;
  height?: number;
  quality?: number;
  fit?: "cover" | "contain" | "scale-down" | "crop" | "pad";
  format?: "auto" | "avif" | "webp" | "jpeg";
}

/** True once PUBLIC_IMG_BASE is configured (R2 custom domain live). */
export const imagesConfigured = (): boolean => BASE.length > 0;

export function buildImageUrl(r2Key: string, opts: ImgOpts = {}): string {
  if (!BASE || !r2Key) return "";
  const key = r2Key.replace(/^\/+/, "");
  const o: string[] = [`format=${opts.format ?? "auto"}`, `quality=${opts.quality ?? 82}`];
  if (opts.width) o.push(`width=${Math.round(opts.width)}`);
  if (opts.height) o.push(`height=${Math.round(opts.height)}`);
  if (opts.fit) o.push(`fit=${opts.fit}`);
  return `${BASE}/cdn-cgi/image/${o.join(",")}/${key}`;
}

/** Responsive srcset string across a width ladder. */
export function buildSrcSet(r2Key: string, widths: number[], opts: ImgOpts = {}): string {
  if (!BASE || !r2Key) return "";
  return widths.map((w) => `${buildImageUrl(r2Key, { ...opts, width: w })} ${w}w`).join(", ");
}
