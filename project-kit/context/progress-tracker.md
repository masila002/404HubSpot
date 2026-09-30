# Progress tracker — 404HubSpot

## 0. Execution chain

Current: 01 merged to `main` (`cb5d263`); 02b unified revamp IN PROGRESS on `feature/web/02-unified-site-revamp` (owner-approved bundle of 02–09,12,33 + Clerk/GSAP/Lottie/font/pricing).
Next eligible after user review/merge: 02 content truth confirmation (prices/team/keys), then remaining staged specs one-by-one.
One spec/branch/PR normally; 02b is a documented single exception — do not batch further without approval.

## 1. Status board

| ID | Feature | State | Evidence | Operator gates |
|---|---|---|---|---|
| 01 | Landing/shared shell redesign + workflow/architecture planning | READY FOR REVIEW | 57 browser checks; build; 193 links; 23 reference hashes | Visual review OPEN; merge OPEN; deployment NOT RUN |
| 02–33 | Remaining portfolio and staged full-stack features | PLANNED | Detailed specs and dependency graph | Per-spec content/provider/identity/budget gates OPEN |
| 02b | Unified site revamp (all pages + motion + Clerk shell + pricing) | IN PROGRESS | Branch `feature/web/02-unified-site-revamp`; spec 02-unified-site-revamp.md | Visual review OPEN; owner price/team/key confirmation OPEN |

## 2. Delivered scope

- Baseline existing-project generator created only missing project-owned planning; original source
  layout, package manifest/lockfile and hosting configs remain intact.
- Redesigned hero, navigation, six service cards, M-Pesa feature, training, process, four-person
  team, closing CTA and footer. Existing nine routes and detail-page bodies preserved.
- Shared service/inquiry data, accessible disclosures, cleanup on unmount, skip links, hash/top
  scrolling, safe external-link attributes, initials for absent team portraits, existing logo favicon.
- Copied 23 supplied images and four upstream design reference documents; authored project-specific
  catalogue, design system, tokens, UI rules/registry and editable desktop/mobile HTML design board.
- User follow-ups expanded supporting documentation to 33 feature specs, eight logical ownership
  kits, modular full-stack architecture, data model, API/MCP/AI contracts, threat model and operations.
- Backend, database, admin, AI, MCP, hosting provisioning, mobile and microservices are NOT built.

## 3. Verification

### 3a. Feature 01 (merged to main `cb5d263`) — historical record

Tested source based on fetched origin/main `16f9a7a72351f2b4226b200aed1b6587f820586e`.
Exact working-source fingerprint: `af24480e670ea51a1e10a6437c8439ae9a34a76ace61179ac1edd08b0e67d19a`.
Per-file hashes: docs/design/evidence/source-snapshot.json; the feature commit contains this snapshot.

- `npm run build`: PASS; 48 modules; 0 errors; CSS 41.69 kB (8.94 gzip), JS 187.77 kB
  (54.28 gzip), HTML 1.03 kB. Two existing warning categories: caniuse-lite age and module-type inference.
- `PLAYWRIGHT_MODULE=/home/artkins/sababisha/node_modules/playwright CHROMIUM_PATH=/home/artkins/.cache/ms-playwright/chromium-1140/chrome-linux/chrome node scripts/verify-ui.cjs`:
  PASS, 57 grouped checks, including 45 combinations of nine routes × 360/768/1024/1440/1920px.
  Zero runtime page errors; no horizontal overflow; landing images loaded; menu keyboard/Escape/
  outside-click/route-close/resize, skip links, anchors and reduced motion verified.
- Playwright 1.63.0 with installed Chromium 130.0.6723.31. No project dependency installed.
- Seven primary text contrast pairs: PASS, minimum 5.22:1; not a full accessibility certification.
- Planning audit: 193 local links resolved; 33 specs; eight layer kits; dependency graph acyclic.
- Inspiration audit: 23 images byte-identical to provided source (SHA-256).
- `git diff --check`: PASS. Manifest, lockfile and hosting configuration diffs: empty.
- Browser captures: docs/design/evidence/landing-{360,768,1024,1440,1920}.png.

### 3b. Feature 02b unified revamp (this branch, 2026-09-30)
- `npm run build`: PASS; 101 modules; 0 errors. Warnings only: caniuse-lite age, lottie eval notice (module-type warning fixed via `"type": "module"`).
- `verify-ui.cjs`: PASS, 72 grouped checks (60 route×viewport: 12 routes × 360/768/1024/1440/1920). Zero runtime errors; no overflow; skip links, menu/disclosure keyboard, anchors, reduced motion verified. Script waits 450ms post-navigation for the GSAP route transition.
- Team detail fix: App.vue transition close-tag + TeamDetail import paths corrected after dev-server report; stale Vite processes killed so `:5173` is the tested server.
- GitHub verify 2026-09-30 (api.github.com): DonArtkins 69 repos/63 followers; masila002 35/21; kiki-glow 46/10 + portfolio URL; Ericnjuki254 6/20; chemii933 10/14.
- Pricing bands provisional (search integration down, no Context7) — owner confirmation gates quotes.

## 4. Contract synchronization and deviations

Updated public-navigation contract, canonical UI tokens/rules/registry, owner and consumer context,
feature spec and README. Source paths/services/contact destinations synchronized via src/data/site.js.
Route shapes unchanged; new scroll behavior documented. Existing detail styles remain scoped apart.
Future platform contracts are explicitly drafts, not implemented APIs. Layer kits route status here.
No baseline .baseline/Husky/CI workflow tree injected; baseline tooling remains in its source repo.
No Figma file created: editable local HTML board and actual screenshots provide review artifacts.
Official documentation fallback used because no Context7 MCP tool was available; sources are in spec.

## 5. Open limits and next action

02b review/merge: OPEN. Owner must confirm: Glory Kinya photo/bio/links; Frank “Fullstack Developer & Designer” and Don “AI Engineer & System Architect” titles; provisional KES bands; Clerk publishable key + Brevo sender/key/inbox + Meet ID. Production deployment not run.
Existing Contact form/meeting placeholders remain (demo until IDs set); LanguageCard phone mismatch FIXED in 02b via shared whatsappUrl.
External social destinations not live-verified; manual screen-reader/Firefox/WebKit checks not run.
No backend, database, MCP, AI, retention, security or deployment tests are claimed as passing.
