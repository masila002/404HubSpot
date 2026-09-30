# System map

Single Vue app. `src/main.js` mounts `App.vue`; `src/router/index.js` owns nine routes.
Views own page content and mount shared `GlobalNav` and `Footer` components.
`Home.vue` owns the landing-page composition; `ServiceCard.vue` owns service discovery.
`Teamsection.vue` retains the team. `src/style.css` keeps legacy utility components;
`src/styles/landing.css` owns the redesign's scoped styles and semantic tokens.
Static brand/team assets remain in `public/assets/`. Inspiration stays outside public/.
External boundaries: user-opened WhatsApp/mail/social links; Contact's existing Formspree POST.
No backend or stored user data is introduced.

## Target architecture

[System design](../../docs/architecture/SYSTEM-DESIGN.md) owns the future architecture;
[layer map](../../docs/architecture/LAYER-MAP.md) owns frontend/content/backend/data/AI/MCP/infra/QA.
None of the planned backend, database, AI or MCP capabilities is deployed by feature 01.
