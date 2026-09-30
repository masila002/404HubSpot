# 29 — Inquiry retention, export and deletion operations

Status: PLANNED; not implemented in feature 01. Owner: data.
Branch: `feature/data/29-privacy-and-retention` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Give staff accountable procedures for retaining, exporting and deleting personal inquiry data.

## Dependencies and readiness

Required merged specs: 19,20,21. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Owner-approved retention/notice and relevant compliance review. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: backend/src/modules/privacy/; src/views/admin/PrivacyRequests.vue; docs/security/DATA-HANDLING.md.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Define data inventory, retention clocks, legal/operational holds and verified requester workflow with the business owner.
2. Implement scoped export/delete jobs with explicit preview/approval, audit and retry safety.
3. Apply deletion to application records, derived indexes and provider copies where supported; document backup expiry limitations.
4. Publish truthful privacy copy consistent with actual storage/providers; avoid blanket compliance claims.

## Data, contracts and permissions

Deletion tombstones prevent replay resurrection; export artifacts are private, short-lived and never emailed as public links.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Only authorized operators can create or retrieve an export.
- [ ] Deletion is idempotent and honors documented holds.
- [ ] Derived/search copies follow retention actions.
- [ ] User-facing policy matches verified retention and backup behavior.

## Verification and evidence

Export access/expiry tests; deletion/retry/hold tests; restore/replay checks; manual policy review.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Pause jobs on anomaly; retain audit without unnecessary PII; irreversible deletion requires explicit operational approval.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
