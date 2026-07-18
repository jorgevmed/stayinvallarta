# Stay in Vallarta — Sitio web oficial

Sitio de contenido y reservas de Stay in Vallarta (stayinvallarta.com).
Stack según **SIV-7**: Astro 5 · React 19 (islas) · Tailwind CSS 4 · TypeScript · Cloudflare Pages · Supabase · GitHub Actions.

## Estructura

```
├── .github/workflows/ci.yml   # Robot de calidad: tipos + build + Lighthouse CI
├── lighthouserc.json           # Presupuestos de velocidad bloqueantes (SIV-4)
├── astro.config.mjs            # i18n (en / es / fr), React, Tailwind
├── src/
│   ├── styles/global.css       # DESIGN TOKENS de la marca + accesibilidad 60+
│   ├── layouts/Base.astro      # Layout base (head, meta, idioma)
│   └── pages/                  # / (EN) · /es/ · /fr/
└── tsconfig.json               # TypeScript estricto, alias @/*
```

## Puesta en marcha (lunes 20 de julio — Semana 1)

1. **Crear el repositorio en GitHub** (privado): `stayinvallarta`.
2. **Subir este código:**
   ```bash
   cd stayinvallarta
   git init -b main
   git add -A
   git commit -m "Fundaciones: Astro 5 + Tailwind 4 + tokens SIV + CI"
   git remote add origin git@github.com:<org>/stayinvallarta.git
   git push -u origin main
   ```
3. **Probar en local** (requiere Node 22+):
   ```bash
   npm install
   npm run dev      # http://localhost:4321
   npm run check    # tipos
   npm run build    # genera dist/
   ```
4. **Conectar Cloudflare Pages:** Dashboard → Workers & Pages → Create →
   Pages → Connect to Git → repo `stayinvallarta`.
   - Framework preset: **Astro** · Build: `npm run build` · Output: `dist`
   - Cada push a `main` publica a producción; cada PR genera una URL de vista previa.
5. **Proteger `main`:** Settings → Branches → require pull request + require
   status checks (el job **CI / calidad** debe estar en verde para hacer merge).

## Reglas del proyecto

- **Presupuestos de velocidad (bloqueantes en CI):** LCP < 1.8 s · CLS < 0.05 ·
  TBT < 200 ms · JS ≤ 50 KB en páginas de contenido · Lighthouse ≥ 95 en las
  4 categorías. Si una página se vuelve lenta, el cambio no pasa.
- **Colores y tipografía:** solo los tokens de `src/styles/global.css`.
  No inventar valores fuera del sistema.
- **React solo en islas** (`client:visible` / `client:idle`). Las páginas de
  contenido no cargan JavaScript.
- **Idiomas:** `/` inglés · `/es/` español (México) · `/fr/` francés (Québec),
  con slugs localizados (se implementa la matriz hreflang en Semana 2).

## Próximos pasos (ver SIV-8, plan semanal)

- Semana 1: proyecto Supabase + primeras migraciones; cuentas de medición.
- Semana 2: layout definitivo (header 5 secciones, footer, tab bar móvil),
  i18n con hreflang, admin UI v1.
