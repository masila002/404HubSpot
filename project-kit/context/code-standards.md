# Code standards

Preserve the existing Vue Options API and source layout. Use semantic HTML, real links,
visible focus, keyboard-operable disclosures and reduced-motion-safe CSS.
New CSS is scoped under landing/shared-shell classes; keep legacy page utilities intact.
Do not represent illustrative interface graphics as real business metrics or customer work.

Checks: `npm run build`, `git diff --check`, and `node scripts/verify-ui.cjs`
against a local Vite server (see feature spec for browser environment).
No existing lint/unit suite was configured; do not claim one ran.
