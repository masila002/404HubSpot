# 28 — Optional public FAQ assistant pilot

Status: PLANNED; not implemented in feature 01. Owner: ai.
Branch: `feature/ai/28-public-faq-assistant` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Offer a limited cited FAQ assistant only if it improves visitor discovery over existing navigation.

## Dependencies and readiness

Required merged specs: 13,26,27. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Demonstrated FAQ demand and accepted cost/evaluation results. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: src/components/assistant/; backend/src/modules/public-assistant/; docs/ai/PUBLIC-PILOT.md.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Define a published-content-only endpoint with short anonymous sessions, abuse protection and strict budgets.
2. Show cited answers, an honest unknown state and direct human handoff.
3. Keep staff MCP and inquiry tools unavailable; do not solicit sensitive project details in chat.
4. Measure task completion and cost against ordinary navigation before broader rollout.

## Data, contracts and permissions

Public assistant cannot access private corpus, staff sessions, lead IDs or write tools; no autonomous actions.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Unsupported questions lead to honest fallback rather than invented answers.
- [ ] Prompt injection cannot retrieve private data or call staff tools.
- [ ] Visitor can dismiss the assistant and use every normal page.
- [ ] Pilot success/cost thresholds are agreed and measured before expansion.

## Verification and evidence

Adversarial/public eval suite; abuse/time/budget tests; keyboard/mobile chat checks; pilot comparison report.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Optional feature, default off until gates close; disabling removes UI and endpoint without impacting core site.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
