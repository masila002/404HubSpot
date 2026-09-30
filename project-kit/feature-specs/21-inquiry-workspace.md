# 21 — Staff inquiry workspace

Status: PLANNED; not implemented in feature 01. Owner: frontend.
Branch: `feature/frontend/21-inquiry-workspace` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Let authorized staff triage and follow up on inquiries without losing context.

## Dependencies and readiness

Required merged specs: 19,20. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Approved staff workflow. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: src/views/admin/Inquiries.vue; src/components/admin/; backend/src/modules/inquiries/; docs/contracts/openapi.yaml.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Provide paginated list/filter/detail views with explicit loading, empty, denied, error and retry states.
2. Allow authorized status/assignee changes with optimistic version checks and visible conflict recovery.
3. Minimize displayed PII in lists; show event history and copy/manual-contact actions without automatically sending messages.

## Data, contracts and permissions

GET/PATCH staff inquiry contracts use cursor pagination and expected version; audit reads and writes as required.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Wrong-role users cannot view or change records even by direct URL/API.
- [ ] Filter/back navigation preserves state.
- [ ] Concurrent edits produce a resolvable conflict instead of silent overwrite.
- [ ] Failures preserve entered notes/intent and do not falsely show success.

## Verification and evidence

API role/concurrency tests; browser loading/empty/error/conflict journeys; accessibility keyboard checks.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Disable staff route if needed; durable inquiry capture/outbox remain active.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
