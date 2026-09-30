# 27 — Staff inquiry drafting assistant

Status: PLANNED; not implemented in feature 01. Owner: ai.
Branch: `feature/ai/27-staff-draft-assistant` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Help staff draft grounded replies while keeping all communication under human control.

## Dependencies and readiness

Required merged specs: 21,26. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Provider/model choice, budget, privacy terms and evaluation bar. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: backend/src/adapters/ai/; backend/src/modules/assistant/; src/components/admin/DraftAssistant.vue; docs/ai/EVALUATIONS.md.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Pass only authorized inquiry context and approved retrieved business facts to a provider-neutral model adapter.
2. Return editable draft, citations and limitations; never send email/WhatsApp or update records automatically.
3. Implement input/output limits, timeouts, budget caps, redacted telemetry and useful fallback.
4. Evaluate price/promise hallucination, prompt injection, cross-record leakage and provider outage before enabling.

## Data, contracts and permissions

Draft response contract includes source references and usage; output is untrusted text and cannot issue privileged tool calls.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Staff can inspect/edit/discard a draft before using it.
- [ ] Unsupported facts and commitments are not represented as confirmed.
- [ ] Wrong-role and cross-record attempts are denied.
- [ ] Budget/provider failures leave the manual workflow usable.

## Verification and evidence

Non-PII eval fixtures with pass thresholds; authorization tests; provider fake timeout/rate-limit tests; UI edit/discard checks.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Feature flag disables AI instantly; preserve normal inquiry operations and audit, do not store raw prompts by default.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
