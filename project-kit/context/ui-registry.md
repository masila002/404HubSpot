# UI component registry

| Component | Owner / consumers | Anatomy and states |
|---|---|---|
| GlobalNav | src/components/GlobalNav.vue; all nine views | Brand, disclosure, route links, CTA; desktop/mobile, open/closed, active, hover/focus; cleanup listeners on unmount |
| Footer | src/components/Footer.vue; all views | Brand, service list, exploration, contact, social; wrapped mobile columns; real destinations only |
| ServiceCard | src/components/ServiceCard.vue; Home | Icon, ordinal, linked heading, description, tags, inquiry; hover/focus; preserves service-specific destination |
| UiIcon | src/components/UiIcon.vue; shared shell/home/cards | Decorative stroked SVG; inherits color; accessible name lives on parent control |
| BuildPreview | src/components/BuildPreview.vue; Home | Original CSS site/code/payment illustration; labelled as concept, no actions |
| Teamsection | src/views/services/Teamsection.vue; Home | Existing identities, portrait/initials, bio, profile links; image fallback is explicit |
| Action | src/styles/landing.css; scoped redesign | Dark/light anchors with icon, ≥44px target; hover/focus/reduced-motion |
| PageHero | src/components/PageHero.vue; all detail views | Landing kicker/display/ledes + actions + art slot; responsive stack |
| Pricing | src/data/site.js pricing + price-card styles; service views | Provisional KES bands (owner-review); featured dark card; WhatsApp CTA |
| Reveal | src/composables/useReveal.js (gsap 3.15 + ScrollTrigger) | data-reveal/data-hero entrances; matchMedia + reduced-motion; ctx.revert cleanup |
| LottiePlayer | src/components/LottiePlayer.vue (lottie-web 5.13) | Local `public/lottie/*.json` placeholders; reduced-motion skips; destroy on unmount |
| Auth shell | src/views/auth/SignIn.vue + SignUp.vue (@clerk/vue 2.5.7) | Landing-styled Clerk path-routing; demo shell without key; nav sign-in link |
| Team data | src/data/site.js team; Teamsection | Five members; Glory Kinya default (photo/bio/links TBD); initials fallback |
| TeamDetail | src/views/TeamDetail.vue; `/team/:slug` | GitHub-verified bio/stats/repos; prev/next; cards link out, details on page |
| ThemeToggle | src/components/ThemeToggle.vue; GlobalNav | Light/System/Dark segmented control; localStorage + OS match; pre-paint init; theme-color sync |
| SEO | src/lib/seo.js + router.afterEach; index.html; public/{sitemap.xml,robots.txt} | Per-route title/desc/canonical/OG/Twitter; auth noindex; JSON-LD org+site; domain provisional (VITE_SITE_URL) |
| Service data | src/data/site.js; Home/Nav/Footer/Card | Six services, route, tags, icon, tone; inquiry builder encodes message once |

Future shared form, case-study, FAQ, consent and admin components register in their owning specs.
