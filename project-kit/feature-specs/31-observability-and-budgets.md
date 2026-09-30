# 31 — Operational visibility and AI/MCP cost controls

Status: PLANNED; not implemented in feature 01. Owner: infra.
Branch: `feature/infra/31-observability-and-budgets` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Make failures, abuse and spending visible with actionable signals and bounded cost.

## Dependencies and readiness

Required merged specs: 19,24,27,30. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Alert destination and operational owner. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: backend/src/observability/; infra/monitoring/; docs/operations/RUNBOOK.md.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Correlate request IDs across inquiry acceptance, outbox, model calls and MCP invocations without logging messages/tokens.
2. Create dashboards/alerts for availability, latency, failed commits, outbox age, authorization denials, AI usage and tool errors.
3. Enforce per-user/client/global limits and budget cutoff at execution, not only reporting.
4. Exercise one failure per alert and confirm runbook actions and recovery notifications.

## Data, contracts and permissions

Metric labels exclude unbounded PII/request text; budgets are configured values with an explicit reset policy.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Every critical alert links to an owner and tested action.
- [ ] Optional AI/MCP overload cannot exhaust the core inquiry API.
- [ ] Spend caps prevent new provider calls after threshold.
- [ ] Logs and exported traces contain no secrets or unnecessary personal data.

## Verification and evidence

Fault injection in staging; budget concurrency tests; telemetry redaction tests; alert delivery drill.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Reduce telemetry safely on overhead; budget enforcement fails closed for optional AI while core site continues.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
