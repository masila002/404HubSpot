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
| Service data | src/data/site.js; Home/Nav/Footer/Card | Six services, route, tags, icon, tone; inquiry builder encodes message once |

Future shared form, case-study, FAQ, consent and admin components register in their owning specs.
