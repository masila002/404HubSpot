# UI behavior and accessibility rules

- Heading order: one h1 per view; h2 per major section; h3 per card. Main/nav/footer landmarks.
- Main content is reachable by skip link. Interactive controls retain a visible 3px focus outline.
- Services is a disclosure, not an ARIA menu. Keep ordinary link/Tab semantics; Escape restores focus.
- Mobile nav opens inline, stays scrollable on short screens, closes on navigation/outside focus,
  and resets across the 1000px breakpoint. No body-scroll lock or modal focus trap.
- At 360px: one service column, stacked hero/features, two team columns; at 768px: two service
  columns; ≥1000px desktop nav; ≥1150px three service columns. Check through 1920px.
- Main content remains readable at narrow widths; do not hide overflow to conceal layout defects.
- Every action navigates or performs a defined function. Decorative mock UI has no fake controls.
- Team portraits have names; absent portraits use initials. Original code artwork is decorative
  or explicitly labelled illustrative, never a customer endorsement.
- Static landing has no network fetch, so loading/error/empty states are not invented. Future
  data-backed surfaces must define them in their own specs.
- Primary/muted/action text must satisfy WCAG AA contrast for its size; tint is decorative only.
- External new-tab links carry noopener noreferrer. No fake stats, prices or review counts.
