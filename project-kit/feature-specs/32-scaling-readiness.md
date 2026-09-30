# 32 — Scaling and extraction decision review

Status: PLANNED; not implemented in feature 01. Owner: infra.
Branch: `feature/infra/32-scaling-readiness` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Decide whether any additional service, queue, cache or mobile client is actually warranted.

## Dependencies and readiness

Required merged specs: 15,30,31. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Measured production demand and clear ownership. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: docs/architecture/SCALING-REVIEW.md; docs/decisions/; docs/testing/LOAD-REPORT.md.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Measure representative traffic, slow queries, queue pressure, operational cost and team release contention.
2. Compare tuning the modular monolith against extracting one bounded module; include failure modes and total operating cost.
3. Evaluate native mobile only for validated repeat/offline/native workflows; otherwise retain responsive web.
4. Produce an ADR with keep/extract/defer decision and a new implementation spec only if justified.

## Data, contracts and permissions

No new microservice or mobile runtime is created by this review; future extraction must own its data and versioned contract.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Evidence identifies a real bottleneck or explicitly concludes no change is needed.
- [ ] Alternatives include the cost of operational complexity.
- [ ] Any recommended extraction has an owner, contract, migration and rollback outline.
- [ ] Native mobile remains deferred without a validated use case.

## Verification and evidence

Reproducible load/profile report; dependency/ownership review; cost comparison; ADR review.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Document-only feature; any runtime extraction becomes its own feature branch after approval.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
