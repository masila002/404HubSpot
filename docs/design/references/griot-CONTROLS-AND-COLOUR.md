# Controls and Colour: Web 94

- **Form controls** (switch, checkbox, radio) are styled once, in `web/src/theme.ts`, with Griot's own marks in `components/controls/ControlIcons.tsx`. Never restyle them in `sx`.
- **Card icons** wear the colour of their card's subject, which is the same hue as the card's chart. Pass the chart colour as `tint`. Without one, `toneFor(title)` picks it:
  - companies: blue;
  - people: pink;
  - tasks: green;
  - errors: red;
  - requests: orange;
  - live system: cyan;
  - audit: violet;
  - money: brass;
  - files and reports: teal;
  - messages: pink.
- **Text on fills, in both modes:**
  - on brass, use `ON_BRASS` (#1E2022, about 7:1);
  - on brown, use `ink.inverse` (white in light mode, dark in dark mode).
- **Scroll-to-top** watches whatever scrolls (the window on public pages, `<main>` in the app) and stacks above any floating action on the same corner.
