# 07 — Programming classes and learning paths

Status: PLANNED; not implemented in feature 01. Owner: frontend.
Branch: `feature/frontend/07-programming-classes-page` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Let a learner compare Python, JavaScript, SQL and Scratch and inquire about a suitable path.

## Dependencies and readiness

Required merged specs: 01,02. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Confirmed formats, fees and availability. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: src/views/ProgrammingClasses.vue; src/components/LanguageCard.vue; src/data/courses.js.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Use a clear course grid with audience, prerequisites, practical outcomes and delivery format.
2. Provide an honest path for beginners; distinguish mentorship from accredited certification.
3. Replace the conflicting inquiry number only with the approved contact record; carry selected class into the inquiry.

## Data, contracts and permissions

Course IDs and slugs remain stable for future course content APIs; no booking/payment/account system in this spec.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] All four existing subjects remain discoverable.
- [ ] Every class explains who it suits and what students build.
- [ ] Missing schedule/price data is labelled rather than invented.
- [ ] All class inquiry links use the confirmed business destination.

## Verification and evidence

Build; course count/content checks; inquiry encoding tests; responsive cards and keyboard navigation.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Rollback course presentation; enrollment functionality remains a later separately approved need.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
