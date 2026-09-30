# Feature 01 verification evidence

[Desktop capture](landing-1440.png), [mobile capture](landing-360.png),
[768px](landing-768.png), [1024px](landing-1024.png), [1920px](landing-1920.png).
[Machine-readable browser result](browser-results.json). Images are actual browser captures,
not supplied reference artwork. [Editable design board](../landing-design.html).

## Reproduce

Start `npm run dev -- --host 127.0.0.1`. With Playwright and Chromium installed, run:

```sh
node scripts/verify-ui.cjs
```

This session reused existing machine tools without modifying project dependencies:

```sh
PLAYWRIGHT_MODULE=/home/artkins/sababisha/node_modules/playwright \
CHROMIUM_PATH=/home/artkins/.cache/ms-playwright/chromium-1140/chrome-linux/chrome \
node scripts/verify-ui.cjs
```

BASE_URL overrides the default http://127.0.0.1:5173. Playwright 1.63.0 drove existing
Chromium 130.0.6723.31. This compatibility was exercised locally; CI should pin matching
supported tools in spec 16. No Firefox/WebKit, live Formspree submission, external social
verification, or manual screen-reader audit was performed.

Checks cover 45 route/viewport combinations, landing assets/card/team counts, desktop/mobile
menus, keyboard/Tab/Escape, outside click, route-close, viewport reset, hash offset, skip links,
reduced motion, safe external-link attributes and absence of JavaScript runtime errors.

Semantic text contrast measured independently: ink/canvas 11.41:1, muted/canvas 5.22:1,
muted/white 5.52:1, brand/mint 5.73:1, inverse/dark 11.48:1, secondary/dark 7.41:1,
ink/lime 9.42:1. This checks primary text roles, not a full accessibility certification.

Build uses unchanged lockfile. Known warnings: stale caniuse-lite data and package module-type
inference in the existing PostCSS configuration. They do not fail the build; remediation is
separate dependency/tooling work rather than an unrequested upgrade in this feature.
