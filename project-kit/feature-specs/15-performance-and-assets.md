# 15 — Performance budgets and media delivery

Status: PLANNED; not implemented in feature 01. Owner: qa.
Branch: `feature/qa/15-performance-and-assets` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Keep the redesigned portfolio responsive on realistic mobile connections.

## Dependencies and readiness

Required merged specs: 33, 03,04,05,06,07,08,09,10,11,12,14. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Representative deployment preview. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: vite.config.js; src/router/index.js; public/assets/; src/components/; docs/testing/PERFORMANCE.md.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Measure route bundles and mobile LCP/CLS/INP proxies before optimizing; capture device/network settings.
2. Introduce route splitting and responsive compressed media only where measured savings justify it.
3. Reserve image dimensions, load below-fold assets lazily and assess font fallbacks/self-hosting rights.

## Data, contracts and permissions

Proposed budgets: CLS ≤0.1, lab mobile LCP ≤2.5s under agreed profile; distinguish lab results from field Core Web Vitals.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Before/after artifacts include sizes and test conditions.
- [ ] Navigation and image fidelity do not regress.
- [ ] No avoidable layout shift from primary media/fonts.
- [ ] Performance budget failures have a blocking CI result or documented explicit exception.

## Verification and evidence

Production build/bundle report; repeated mobile lab runs; route/image visual regression.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Revert individual optimizations on functional regression; do not change the stack solely for a score.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
