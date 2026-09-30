# 25 — MCP proposed writes with explicit approval

Status: PLANNED; not implemented in feature 01. Owner: mcp.
Branch: `feature/mcp/25-approved-write-tools` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Allow a tightly scoped inquiry update only after a human reviews the exact change.

## Dependencies and readiness

Required merged specs: 24. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Approved write use cases and approval UI. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: backend/src/adapters/mcp/; backend/src/modules/proposals/; src/views/admin/Approvals.vue; docs/contracts/MCP-TOOLS.md.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Implement propose_inquiry_update with exact before/after values and a short-lived immutable proposal.
2. Bind approval to actor, payload, target version, operation and expiry; apply through normal inquiry service.
3. Reauthorize and compare version at apply; make replay idempotent and reject modified/expired proposals.
4. Exclude publication, outbound messaging, deletion, deployment and arbitrary commands from this feature.

## Data, contracts and permissions

Proposal/approval is distinct from MCP tool annotations; annotations alone do not grant authority.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] No write occurs at proposal creation.
- [ ] Unapproved, altered, expired and stale-version applies fail.
- [ ] Approved replay cannot duplicate a state transition.
- [ ] Audit links proposer, approver, tool invocation and domain update.

## Verification and evidence

Approval tamper/replay/expiry/concurrency tests; wrong-role cases; end-to-end preview/approve/apply using synthetic leads.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Disable write tools while retaining read tools; outstanding proposals expire and cannot bypass disabled policy.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
