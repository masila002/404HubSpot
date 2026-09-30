# UI tokens — canonical 404HubSpot values

Implementation: `src/styles/landing.css :root`. Intentional choices, not pixel-sampled claims.

| Role / CSS variable | Value | Use |
|---|---|---|
| canvas / --site-canvas | #f8f9f5 | Page, header, footer |
| surface / --site-surface | #ffffff | Cards, dropdown |
| ink / --site-ink | #203b36 | Headings and primary text |
| muted / --site-muted | #5d6c66 | Secondary readable text |
| border / --site-border | #dfe5df | Decorative hairlines |
| brand / --site-brand | #246653 | Links, accents |
| mint / --site-mint | #e6efdf | Panels and icon chips |
| lime / --site-lime | #d8ebac | Action on dark feature |
| sand / --site-sand | #f2ecdf | Code section and icon chips |
| lilac / --site-lilac | #ece9f4 | Mobile-service icon chip |
| rose / --site-rose | #f4e9e4 | Design-service icon chip |
| dark / --site-dark | #203b36 | Primary action/payment panel |
| inverse / --site-inverse | #f8faf4 | Text on dark |
| focus / --site-focus | #306bc7 | 3px visible focus outline |
| radius / --site-radius | 20px | Cards; 8px buttons, 24px feature panels |
| shadow / --site-shadow | 0 8px 24px #203b3606 | Quiet card depth |

Inter/system sans for body/UI; Fraunces serif for executive display (h1/h2, v2 2026-09-30 — editorial trust for services + training); native monospace for overlines/code. Main display scales
46–78px; section headings 30–42px; paragraph 12–15px; tiny illustration text is decorative.
Layout: max 1240px, desktop gutters 48px, mobile 20px. Section spacing 88/65/48px.
Grid: 18px services gap, 22px team gap. Buttons and icon actions ≥44px high.
Motion: 180ms interaction transition; disable transitions/hover transforms for reduced motion.
Illustration-only shades may remain local literals; product roles use semantic variables.
Themes (02b): light default + `[data-theme="dark"]` remap + `system` (OS match, localStorage `hubspot-theme`, pre-paint init in index.html). Fixed pairs never change: dark panels/buttons #203b36 + #f8faf4; mock illustration cards stay light. Measured 2026-09-30 — light h1 11.41 / muted 5.22 / CTA 11.48 / flow 8.80 / team-role 6.41; dark h1 16.54 / muted 9.42 / CTA 11.48 / flow 8.80 / team-role 10.90. All ≥ 4.5.
