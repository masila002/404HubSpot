# 22 — Content editing and controlled publishing

Status: PLANNED; not implemented in feature 01. Owner: backend.
Branch: `feature/backend/22-content-publishing` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Allow staff to maintain public content with separate draft and publication decisions.

## Dependencies and readiness

Required merged specs: 10,11,12,18,20. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Content owners and publisher permissions. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: backend/src/modules/content/; src/views/admin/Content.vue; src/data/content-adapter.js; docs/contracts/openapi.yaml.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Implement versioned drafts for services, projects, courses and team content with validated fields.
2. Provide preview, publish and archive operations with expected-version conflicts and publisher checks.
3. Public API returns only published projections; frontend keeps a known published fallback during outage.
4. Migrate approved static records with stable IDs and reconcile output before enabling dynamic reads.

## Data, contracts and permissions

ContentRevision owns drafts; entity publication selects a revision. Cache/ETag keys follow published version.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Saving a draft never changes the public site.
- [ ] Unauthorized publishing fails even when directly invoked.
- [ ] Preview matches the intended public rendering without leaking drafts.
- [ ] Migration preserves URLs and approved content without duplicates.

## Verification and evidence

Publish/permission/version tests; public-vs-draft visibility tests; static-to-API reconciliation; UI failure cases.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Switch reads to last approved static snapshot and retain drafts; avoid destructive content migration.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
