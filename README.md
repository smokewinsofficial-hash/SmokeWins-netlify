# SmokeWins — Astro + Netlify Starter (GitHub-ready)

A fast, SEO-friendly starter for a Canadian online casino affiliate site.

- Framework: **Astro**
- Deploy: **Netlify** (Free tier)
- Styling: Modern CSS (responsive), no extra build steps
- Affiliate hops: `/go/*` via `public/_redirects`

## Quick Start (Local)
1. Install Node.js 18+ (recommended 20).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run dev server:
   ```bash
   npm run dev
   ```
   Visit http://localhost:4321

## Deploy on Netlify (GitHub)
1. Push this folder to GitHub.
2. Netlify → **Add new site → Import from Git**.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. After deploy, test: `https://<site>.netlify.app/go/test` → should 302 to example.org.

## Editing
- Top table: `src/components/CasinoTable.astro`
- Affiliate redirects: `public/_redirects`
- Footer/legal: `src/layouts/Base.astro` and `src/pages/*`

## SEO
- Set `site` in `astro.config.mjs` to your final domain when ready.
- Update titles/descriptions at each page's frontmatter.
