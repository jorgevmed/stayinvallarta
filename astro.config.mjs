// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// Configuración de Stay in Vallarta (según SIV-4/SIV-5/SIV-7)
// - Sitio 90% contenido: salida estática por defecto (HTML pre-generado)
// - i18n: / (EN) · /es/ (México, por defecto para ES) · /fr/ (Québec)
// - React solo para islas interactivas (clima, moneda, calendario, mapa)
export default defineConfig({
  site: "https://stayinvallarta.com",

  i18n: {
    locales: ["en", "es", "fr"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false, // EN vive en la raíz: /
    },
  },

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },

  // Presupuesto de rendimiento (SIV-4 §Performance):
  // LCP <1.8s · INP <200ms · CLS <0.05 · ≤50KB JS en páginas de contenido.
  // Las islas React se hidratan únicamente con client:visible o client:idle.
});
