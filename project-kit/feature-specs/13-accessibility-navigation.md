# 13 — Sitewide accessibility and navigation completion

Status: PLANNED; not implemented in feature 01. Owner: qa.
Branch: `feature/qa/13-accessibility-navigation` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Complete consistent keyboard, semantic, focus and error behavior across the redesigned site.

## Dependencies and readiness

Required merged specs: 33, 03,04,05,06,07,08,09,10,11,12. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Public page redesigns available on main. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: src/router/index.js; src/components/; src/views/; tests/accessibility/; docs/testing/ACCESSIBILITY.md.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Audit heading/landmark structure, skip links, route-change focus, focus visibility and disclosure behavior on every route.
2. Add a real not-found route with recovery links and update title/focus announcements appropriately.
3. Check contrast, 320px reflow, 200% zoom, touch sizes and reduced motion; log screen-reader findings.

## Data, contracts and permissions

Navigation contract includes focus placement after programmatic route changes and history behavior; no silent focus trap.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Every route has a single primary heading and reachable main content.
- [ ] Keyboard-only users can complete service discovery and inquiry.
- [ ] Unknown routes expose recovery and a descriptive title.
- [ ] Automated findings are triaged and manual assistive-technology checks have recorded evidence.

## Verification and evidence

Browser accessibility scan plus manual keyboard/zoom/screen-reader checks; regression suite at five widths.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Fixes stay on this feature branch; do not claim full WCAG conformance from automated scans alone.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
