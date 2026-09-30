# 01 — Landing redesign and project workflow adoption

Branch: `feature/web/01-landing-redesign`.
Base: fetched GitHub `origin/main`, `16f9a7a72351f2b4226b200aed1b6587f820586e`.
Authorization: user requested baseline adoption, selection/copying of Griot UI references,
and a complete landing-page/nav/footer/card redesign. One feature; no merge authorization.

## Outcome and scope

Create project-owned planning using baseline existing-project mode; catalogue copied
references; derive UI tokens, component rules and an editable design artifact; implement
an original responsive landing page plus the shared navigation/footer. Retain all routes,
service offerings, team identities and existing lead channels. Missing team portraits use
initials; placeholder social destinations are omitted from the new footer.

Owned: Home, GlobalNav, Footer, ServiceCard, Teamsection; new shared icon/hero illustration,
content and scoped style files; router scroll behavior; design/planning/inspiration documents;
reproducible browser regression script. Other page bodies and lead form behavior stay intact.
Supporting scope expanded by user follow-ups: full-stack architecture, eight logical layer
kits and 33 root feature specs for the full-site revamp. Future runtime implementation remains
out of this branch. Favicon reuses the existing logo. No package changes. No Griot app code, brands, dependencies or workflow tree imported.

## Acceptance criteria

- [x] Hero, six service cards, payment feature, training, process, team, CTA and footer redesigned.
- [x] All nine original paths load and shared nav/footer remain usable on detail pages.
- [x] Mobile menu + services disclosure support keyboard, Escape, outside click and route-close.
- [x] No missing landing images, runtime errors or overflow at 360/768/1024/1440/1920.
- [x] Reduced motion, visible focus and semantic landmarks are verified.
- [x] Reference provenance, borrow/reject analysis, tokens, registry and design artifact recorded.
- [x] Build, browser checks, diff check pass; tracker updated before feature-branch push.

## Verification

`npm run build`; `git diff --check`.
Run `npm run dev -- --host 127.0.0.1`, then `node scripts/verify-ui.cjs`.
Runner accepts BASE_URL, PLAYWRIGHT_MODULE and CHROMIUM_PATH for preinstalled tools.
Screenshots go to docs/design/evidence/. Never submit live contact forms during tests.

## Current docs consulted — 2026-09-30

No Context7 MCP tool available; used official documentation fallback:
- Vue 3.5.27 lifecycle cleanup: https://vuejs.org/guide/essentials/lifecycle.html
- Vue Router 4.6.4 scroll behavior: https://router.vuejs.org/guide/advanced/scroll-behavior.html
- Vite 7.3.1 production build: https://vite.dev/guide/build.html
These live docs are not pinned historical snapshots; installed package build/browser checks
verify the APIs used. Tailwind config and version remain unchanged.

## Verification result

2026-09-30: production build passed (48 modules, 0 errors, 2 existing tooling warnings).
57 grouped browser checks passed, including 45 route/viewport combinations; 0 page errors.
193 local documentation links resolved; all 33 spec dependencies exist and form an acyclic graph.
23 inspiration images match the supplied originals by SHA-256. Seven primary text color pairs
pass AA normal-text contrast (minimum measured 5.22:1). git diff --check passed.
See docs/design/evidence for screenshots, exact source fingerprint, output and machine results.
Visual sign-off and merge remain pending; live contact/provider and full-stack features not tested.
