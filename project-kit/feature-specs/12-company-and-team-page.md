# 12 — Company story and team profiles

Status: PLANNED; not implemented in feature 01. Owner: frontend.
Branch: `feature/frontend/12-company-and-team-page` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Give visitors a credible view of the company and people behind the work.

## Dependencies and readiness

Required merged specs: 01,02. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Approved biographies, portraits and contact details. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: src/views/About.vue; src/data/team.js; src/views/services/Teamsection.vue; src/router/index.js.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Create /about with verified company story, working principles and the existing four-person team.
2. Move team facts into one shared data owner used by landing and about; retain initials when a portrait is missing.
3. Validate profile destinations and photo consent; do not invent office addresses, history or qualifications.

## Data, contracts and permissions

Team data uses stable IDs and optional portrait metadata; navbar/footer route addition is documented.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Landing and about share identical team identity facts.
- [ ] Missing portraits produce no failed image requests.
- [ ] Only confirmed profile links are shown.
- [ ] Company claims are linked to the content register.

## Verification and evidence

Build; team-data consumer comparison; image/link checks; mobile portrait rendering.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Rollback page while retaining shared approved team data; remove nav entry if route is disabled.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
