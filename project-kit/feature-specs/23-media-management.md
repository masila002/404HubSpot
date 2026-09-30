# 23 — Managed portfolio media

Status: PLANNED; not implemented in feature 01. Owner: content.
Branch: `feature/content/23-media-management` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Let editors add safe, attributed portfolio imagery without broken layouts or unrestricted uploads.

## Dependencies and readiness

Required merged specs: 18,20,22. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Object storage provider and media/rights policy. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: backend/src/modules/assets/; backend/src/adapters/storage/; src/components/admin/MediaPicker.vue.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Add allowlisted file types, signature/size limits and staging before publication.
2. Store asset metadata, checksums, alt text, attribution and permission independently from provider URLs.
3. Generate responsive variants only with licensed processing tools; handle failed processing and orphan cleanup.

## Data, contracts and permissions

Asset IDs are stable; private originals/staging are not public; signed upload bounds are server-authorized.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Oversized or disguised active files are rejected.
- [ ] Unapproved assets cannot be published or fetched publicly.
- [ ] Missing alt/permission data blocks publication when required.
- [ ] Deleting an in-use asset is refused or requires an explicit replacement.

## Verification and evidence

Upload abuse tests; access and expiry checks; processing failure tests; responsive gallery checks.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Disable uploads without breaking already-published assets; restore metadata/object versions together.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
