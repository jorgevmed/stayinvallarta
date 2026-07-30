// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Configuración de Stay in Vallarta (según SIV-5/SIV-6/SIV-8)
// - Sitio 90% contenido: salida estática, CERO JavaScript por defecto.
// - i18n: / (EN) · /es/ (México) · /fr/ (Québec)
// - NO hay integración de React: no existe ninguna isla .tsx. Si algún día se
//   necesita una, se instala `@astrojs/react` en ese momento y se hidrata solo
//   con client:visible / client:idle. Dejarla instalada sin usarla metía un
//   chunk muerto de 194 KB en dist/ que ningún HTML referenciaba.
export default defineConfig({
  site: "https://stayinvallarta.com",

  i18n: {
    locales: ["en", "es", "fr"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false, // EN vive en la raíz: /
    },
  },

  integrations: [
    sitemap({
      // Las galerías son noindex a propósito (sus URLs se imprimen en códigos
      // QR) y la vista previa interna tampoco debe indexarse: fuera del sitemap.
      filter: (page) =>
        !page.includes("/gallery/") && !page.includes("/listings-demo"),
      // SIN bloque i18n a propósito. Este plugin admite UN código por locale,
      // pero el inglés sirve a dos mercados (en-US 25% + en-CA 25%) y el head
      // declara ambos. Un sitemap que solo listara en-US sería un subconjunto
      // en conflicto con el HTML. La matriz hreflang vive en un solo lugar:
      // Base.astro, alimentado por el registro de rutas de lib/i18n.ts.
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  // Presupuesto de rendimiento (CI bloqueante, ver lighthouserc.json):
  // LCP <1.8s · CLS <0.05 · TBT <200ms · ≤50KB de JS por página.
});
