# 19 — Durable inquiry capture and notifications

Status: PLANNED; not implemented in feature 01. Owner: backend.
Branch: `feature/backend/19-durable-inquiries` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Accept leads once, preserve them durably and notify staff reliably.

## Dependencies and readiness

Required merged specs: 08,17,18. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Approved live data handling and notification provider. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: backend/src/modules/inquiries/; backend/src/adapters/mail/; backend/src/workers/; src/views/Contact.vue.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Implement validated, rate-limited POST /api/v1/inquiries with request-bound idempotency.
2. Commit inquiry and outbox atomically; return receipt only after commit and hide internal details.
3. Deliver notifications through a provider adapter with bounded retries, deduplication and dead-letter visibility.
4. Switch the contact adapter behind explicit environment configuration; never double-send to Formspree and backend.

## Data, contracts and permissions

InquiryReceived.v1 outbox and 201 receipt follow FUTURE-PLATFORM; public cannot list/read inquiries.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] A duplicate submission produces one inquiry and one notification intent.
- [ ] Provider outage does not lose committed inquiries.
- [ ] Database failure never produces a success receipt.
- [ ] Anonymous access to any inquiry read/update endpoint is denied.

## Verification and evidence

API validation/idempotency/concurrency/abuse tests; outbox retry tests with fake provider; browser form integration.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Roll back ingress to the selected prior provider only after reconciling accepted receipts; drain outbox without resending delivered messages.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
