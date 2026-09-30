# 09 — Delivery process and collaboration page

Status: PLANNED; not implemented in feature 01. Owner: frontend.
Branch: `feature/frontend/09-process-page` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Explain how clients collaborate with the company from discovery to support.

## Dependencies and readiness

Required merged specs: 01,02. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Approved delivery/support commitments. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: src/views/OurProcess.vue; src/data/process.js.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Convert the long existing page into a clear sequence with client inputs, team deliverables and decision checkpoints.
2. Differentiate discovery, design approval, development, verification, launch and support without invented time guarantees.
3. Link to service-specific details and a relevant consultation CTA.

## Data, contracts and permissions

Preserve /our-process and align landing process summary with this canonical detailed journey.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Each phase names a client action and concrete deliverable.
- [ ] Launch and support responsibilities are unambiguous.
- [ ] Landing and detail process wording do not contradict.
- [ ] Sequential content remains readable with keyboard and narrow viewports.

## Verification and evidence

Build; content consistency review; route/CTA regression; visual checks.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Rollback only process data/page; no operational workflow automation in this feature.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
