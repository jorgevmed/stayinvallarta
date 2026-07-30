# Stay in Vallarta — Sitio web oficial

Sitio público de contenido y captación de reservas de **stayinvallarta.com**.
Stack real: **Astro 5** (salida estática, sin SSR) · **Tailwind CSS 4** (configuración
CSS-first, sin `tailwind.config.*`) · **TypeScript** estricto · **Cloudflare Workers
con assets estáticos** · **Supabase** (solo lectura pública de fotos) · **GitHub Actions**.

> **Este repositorio es PÚBLICO a propósito.** No contiene secretos: la llave anon de
> Supabase se sirve al navegador por diseño (RLS la limita a fotos publicadas) y el CSP
> de `public/_headers` viaja en cada respuesta HTTP. Ser público mantiene gratis el
> ruleset de rama protegida y el *secret scanning con push protection* de GitHub.
> **Nunca traigas material de la app de gestión aquí** — ese repo
> (`siv-rental-manager`) es privado porque contiene las políticas RLS y `SECURITY.md`.

## Estructura

```
├── .github/workflows/ci.yml        # Tipos + build + Lighthouse CI (bloqueante)
├── lighthouserc.json               # Presupuestos de velocidad (assertMatrix: sitio vs /gallery/)
├── wrangler.jsonc                  # Cloudflare Workers: assets ./dist, 404-page
├── astro.config.mjs                # site, i18n (en/es/fr), React, Tailwind
├── public/
│   ├── _headers                    # CSP, HSTS, X-Frame-Options, caché inmutable /_astro/*
│   ├── robots.txt · llms.txt · site.webmanifest
│   ├── fonts/                      # Fraunces + Plus Jakarta Sans (.woff2 autoalojados)
│   ├── og/default.png              # Imagen Open Graph 1200×630
│   ├── favicon.ico · favicon-16/32.png · apple-touch-icon.png · icon-192/512.png
│   └── emblem.png · logo.png
├── src/
│   ├── styles/global.css           # @font-face + DESIGN TOKENS (@theme) + accesibilidad 60+
│   ├── layouts/Base.astro          # Único layout: canonical, hreflang, OG/Twitter, JSON-LD
│   ├── components/
│   │   ├── PublicGallery.astro     # Galería compartible (JS, i18n en cliente)
│   │   └── PhotoGallery.astro · Photo.astro   # Ruta cero-JS (base de /listings/)
│   ├── lib/                        # photos · img · site · gallery-icons · i18n · schema
│   └── pages/                      # / (EN) · /es/ · /fr/ · 404 · /gallery/… · listings-demo
└── tsconfig.json                   # TypeScript estricto, alias @/*
```

## Desarrollo local

Requiere **Node 22+**.

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # tipos (astro check)
npm run build    # genera dist/
npm run preview  # sirve dist/ localmente
```

Copia `.env.example` a `.env` y rellena las tres variables (se hornean en el build):

| Variable | Nota |
|---|---|
| `PUBLIC_SUPABASE_URL` | proyecto Supabase |
| `PUBLIC_SUPABASE_ANON_KEY` | llave anon/publishable (pública por diseño) |
| `PUBLIC_IMG_BASE` | `https://img.stayinvallarta.com` — **sin barra final y sin `/cdn-cgi/image`** (`img.ts` lo añade) |

> `_headers` **no se aplica en local**: los errores de CSP solo aparecen en producción.

## Despliegue — Cloudflare Workers (no Pages)

El sitio se publica como **Worker con assets estáticos**, configurado en `wrangler.jsonc`
(worker `stayinvallarta`, assets `./dist`, `not_found_handling: "404-page"`).

- **Pipeline real:** integración Git de Cloudflare. Un merge a `main` publica producción;
  cada PR abierto genera una URL de vista previa.
- **Respaldo manual:** `npm run build && npx wrangler deploy`.
- Las tres variables `PUBLIC_*` deben existir también en la configuración del proyecto
  en Cloudflare (se necesitan **en tiempo de build**).

## Rama `main` protegida

No se puede hacer push directo a `main`. El ruleset **`protege-main`** exige un pull
request y que pase el check **`Tipos, build y presupuestos de velocidad`**:

```bash
git switch -c mi-cambio
git push -u origin mi-cambio      # abre la URL del PR que imprime git
# esperar el check en verde → merge
git switch main && git fetch && git reset --hard origin/main
```

Un error `GH013` al empujar desde `main` es la regla funcionando, no un remoto roto.

## Reglas del proyecto

- **Nada de la app de gestión en este repo.** Sin SQL, sin políticas RLS, sin
  `SECURITY.md`, sin claves de servicio, sin código de `v2/`.
- **Presupuestos de velocidad (bloqueantes en CI):** LCP < 1.8 s · CLS < 0.05 ·
  TBT < 200 ms · JS ≤ 50 KB por página · Lighthouse ≥ 95 en las 4 categorías
  (SEO se omite solo en `/gallery/`, que es `noindex` a propósito).
- **Colores y tipografía:** solo los tokens de `src/styles/global.css`. Nunca usar
  `#009CD8` ni `#F0B400` como texto sobre fondos claros.
- **Accesibilidad 60+ es requisito duro:** cuerpo 18 px mínimo, menús por clic
  (nunca hover), selector de idioma con la palabra completa, teléfono visible.
- **Cada cadena visible se publica en EN + ES + FR.** fr-CA es idioma de lanzamiento.
- **URLs de galería congeladas:** `/gallery/<edificio>/<unidad>/` se imprime en códigos
  QR desde la app de gestión. No cambiar esas rutas.

## i18n y hreflang

`src/lib/i18n.ts` tiene el **registro de rutas**: la única fuente de verdad de las URLs
localizadas. hreflang debe ser *recíproco* (cada versión lista a todas, incluida a sí
misma) y los slugs van traducidos (`/es/departamentos/`, no `/es/apartments/`), así que
no se puede derivar de la URL. Al publicar una página nueva se añade su entrada ahí y se
pasa `route="<clave>"` a `Base.astro`; los `<link rel="alternate">` salen solos.

El inglés emite **dos** códigos (`en-US` y `en-CA`) porque sirve a dos mercados. Por eso
el sitemap **no** lleva bloque `i18n`: ese plugin admite un solo código por locale y un
subconjunto entraría en conflicto con el HTML.

Las páginas `noindex` no reciben hreflang ni JSON-LD a propósito.

## Estado actual

Las tres portadas (`/`, `/es/`, `/fr/`) son *stubs* "Coming soon", pero ya con el paquete
SEO completo: sitemap, `robots.txt`, `llms.txt`, matriz hreflang, JSON-LD
(`LodgingBusiness` + `WebSite`), Open Graph/Twitter, juego de favicons y página 404
trilingüe. Las 18 páginas de galería (`noindex`) leen fotos publicadas de Supabase **en
el navegador**, así que publicar u ocultar una foto **no requiere rebuild**; añadir un
edificio o unidad **sí** lo requiere (URL nueva).

Pendiente y bloqueante para el lanzamiento: las páginas `/listings/` y el contenido real
en tres idiomas. Ver `CLAUDE.md` en la carpeta superior.
