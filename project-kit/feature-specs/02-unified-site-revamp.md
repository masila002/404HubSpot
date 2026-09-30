# 02 — Unified site revamp (owner-approved bundle)

Branch: `feature/web/02-unified-site-revamp`. Base: `origin/main` `cb5d263`.
Authorization: user approved bundling specs 02–09, 12, 33 plus new Clerk/GSAP/Lottie/font/pricing in ONE branch as an exception to one-spec rule. Recorded 2026-09-30 via session questions (bundled revamp, demo Clerk until key, Glory defaults, Fraunces+Inter).

## Outcome
All 9 original routes + `/sign-in` + `/sign-up` share the landing executive system (tokens, cards, heroes, CTAs). 5-person team. Responsive 360–1920. GSAP scroll/hero reveals with reduced-motion guard. Lottie placeholders in `public/lottie/`. Clerk demo shell until `VITE_CLERK_PUBLISHABLE_KEY` is set.

## What changed (runtime)
- Fonts: Fraunces display + Inter body (index.html, tailwind, landing.css `:root`).
- Data: `src/data/site.js` adds `team` (5) + `pricing` bands; fixes LanguageCard phone to shared `whatsappUrl`.
- Motion: `gsap@3.15.0`, `lottie-web@5.13.0` (npm 2026-09-30); `src/composables/useReveal.js` (gsap.context + ScrollTrigger + cleanup + reduced-motion); `LottiePlayer.vue`, `PageHero.vue`.
- Auth: `@clerk/vue@2.5.7` (npm 2026-09-30); `main.js` registers clerkPlugin only when key exists; `/sign-in`, `/sign-up` landing-styled + demo shell; nav links to sign-in; `.env.example` documents key.
- Pages: Home (+reveal), Web/Software/Mobile/M-Pesa/Graphics, ProgrammingClasses, OurProcess, Contact rewritten to landing classes; pricing from shared data.
- Team detail: `/team/:slug` pages (GitHub-verified bios, stats, repos, contact); cards link to profiles; App.vue GSAP route transition; magnetic CTAs; card sheen hover.
- Checks: `scripts/verify-ui.cjs` covers 11 routes × 5 widths (55) + 5 team cards.

## Pricing research (Kenya/Africa, anti-undercharge)
2026-09-30: web search integration returned no results; no Context7 MCP resources (`tools.opencode.list_mcp_resources` → `[]`). Bands below are PROVISIONAL, owner-review required (spec 02 gate) — uplifted from current site toward Nairobi agency norms; confirm on WhatsApp per quote:
- Landing 45–85k; Business 95–250k; E-commerce 250k+; Small system 280–650k; Enterprise 650k+; Basic app 400–700k; Cross-platform 750k–1.5M; Enterprise app 1.5M+; STK starter 80–150k; Full Daraja 160k+; Logo 25–55k; Identity 85–200k; Marketing 35k+; Classes 12–20k/level.
- Do not publish as fixed quotes. 50/50 payment terms retained.

## Current docs consulted — 2026-09-30
No Context7 MCP available (`list_mcp_resources` → `[]`); official docs fallback (Context7 research: https://github.com/upstash/context7; Brevo: https://developers.brevo.com/docs/send-a-transactional-email; ../Griot scaffold has neither — verified 2026-09-30, see docs/integrations/):
- GSAP 3.15 Installation (`npm install gsap`; `gsap.registerPlugin(ScrollTrigger)`): https://gsap.com/docs/v3/Installation/
- Clerk Vue quickstart + `clerkPlugin` + `VITE_CLERK_PUBLISHABLE_KEY`: https://clerk.com/docs/vue/getting-started/quickstart (via fetch 2026-09-30)
- Vue 3 lifecycle (`onMounted`/`onUnmounted` + cleanup): https://vuejs.org/guide/essentials/lifecycle.html
- Vue Router scroll behavior: https://router.vuejs.org/guide/advanced/scroll-behavior.html
- Installed: `gsap@3.15.0`, `lottie-web@5.13.0`, `@clerk/vue@2.5.7` via `npm view` 2026-09-30.

## Email deviation (owner-ordered 2026-09-30): Formspree REMOVED
Contact form POSTs to first-party `VITE_INQUIRY_ENDPOINT` (`src/lib/brevo.js`);
server sends Brevo transactional mail per docs/integrations/BREVO.md.
Templates `emails/inquiry-{internal,autoreply}.html` match HubSpot branding;
logo hotlinked from GitHub raw. Browser never holds `BREVO_API_KEY`.
 Gates: sender domain, key, inbox, endpoint (spec 19).
- [ ] All 11 routes render with header/footer; zero overflow 360/768/1024/1440/1920.
- [ ] 6 service cards home; 5 team cards; pricing visible per service; WhatsApp/mailto intact.
- [ ] Reduced motion disables reveals/Lottie; focus outlines intact; no fake metrics.
- [ ] `npm run build`, `git diff --check`, `verify-ui.cjs` pass; tracker updated before push.
- [ ] Owner confirms: Glory bio/links/photo, Frank/Don titles, final KES bands, Clerk key + Brevo sender/key/inbox + Google Meet ID.

## Open gates
Visual review; merge; Clerk production key; content/asset truth (02); deployment not run.
