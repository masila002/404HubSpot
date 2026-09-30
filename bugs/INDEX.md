# Known issues

Pre-existing, outside landing redesign:
- Google Meet URL is a placeholder. Brevo sender/key/inbox + inquiry endpoint
  unconfigured (server side, spec 19) — form runs in honest demo mode.

Fixed in 02b: LanguageCard phone now uses shared `whatsappUrl` (254708345963);
Formspree removed per owner order (see docs/integrations/BREVO.md);
`bugs/UI-VISIBILITY.png` flow-bottom dark-on-dark fixed by declaring the
pair (#f8faf4 on #314d42, 8.80:1) plus full light/dark/system theme audit below.

Addressed in redesign: missing team portrait requests, placeholder footer social links,
navbar listener cleanup, menu keyboard dismissal, and route scroll reset.
