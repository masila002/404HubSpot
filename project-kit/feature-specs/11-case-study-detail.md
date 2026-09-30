# 11 — Evidence-backed case study pages

Status: PLANNED; not implemented in feature 01. Owner: frontend.
Branch: `feature/frontend/11-case-study-detail` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Present a complete project story that supports a prospective client decision.

## Dependencies and readiness

Required merged specs: 10. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Approved customer story and media permission. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: src/views/CaseStudy.vue; src/data/projects.js; src/router/index.js; docs/content/CONTENT-REGISTER.md.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Add /work/:slug with context, challenge, team role, implementation, outcomes and relevant inquiry.
2. Attribute measured results to evidence and dates; label qualitative outcomes accurately.
3. Use accessible galleries and a missing/unpublished case-study state; avoid loading private drafts.

## Data, contracts and permissions

Published case-study fields follow the future CaseStudy entity; stable slug redirects on changes.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Each outcome has evidence or is explicitly qualitative.
- [ ] Unknown and draft slugs show a proper not-found experience.
- [ ] Gallery controls work without hover and images have captions/alt text.
- [ ] Related service and inquiry links carry useful context.

## Verification and evidence

Build; valid/invalid/draft slug tests; gallery keyboard checks; metadata/content review.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Unpublish by explicit content status; preserve public redirects when a slug is retired.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
