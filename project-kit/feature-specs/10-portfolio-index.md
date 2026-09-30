# 10 — Portfolio discovery and filtering

Status: PLANNED; not implemented in feature 01. Owner: frontend.
Branch: `feature/frontend/10-portfolio-index` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Let prospects explore real work by service category without fabricated portfolio entries.

## Dependencies and readiness

Required merged specs: 01,02. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: At least one approved publishable project, otherwise hold release. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: src/views/Work.vue; src/components/portfolio/ProjectCard.vue; src/data/projects.js; src/router/index.js.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Introduce /work with approved project cards, cover images, role/scope and service filters.
2. Keep filter state in URL query parameters; show all/filtered-empty states with a reset action.
3. Unknown filters fall back safely; avoid clickable case-study links until a published detail exists.

## Data, contracts and permissions

Project summary: id, slug, title, services, approved cover/alt, summary, published detail flag. Navbar/footer additions synchronize public-navigation contract.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Every card corresponds to approved evidence and publication permission.
- [ ] Filter URLs are shareable and browser-back restores selection.
- [ ] Empty results provide a clear recovery action.
- [ ] Grid and images are responsive and keyboard accessible.

## Verification and evidence

Build; filter/query/back-navigation tests; empty-state test; asset permission audit.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Keep /work unpublished until content readiness; route rollback preserves redirects if already public.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
