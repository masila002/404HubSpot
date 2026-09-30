# 04 — Software development service redesign

Status: PLANNED; not implemented in feature 01. Owner: frontend.
Branch: `feature/frontend/04-software-development-page` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Explain custom software engagements in business terms with a clear discovery path.

## Dependencies and readiness

Required merged specs: 02,03. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Verified software capabilities. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: src/views/services/SoftwareDevelopment.vue; src/data/services.js.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Reuse the service-detail shell for internal tools, automation and business systems actually offered.
2. Explain discovery, integrations, delivery checkpoints and support ownership; avoid claiming unsupported platforms.
3. Separate example scenarios from real customer case studies and link approved evidence when available.

## Data, contracts and permissions

Existing /services/software-development route and service ID remain compatible; inquiries identify this service.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] All original relevant offerings have an intentional place in the new page.
- [ ] Scope and handoff expectations are explicit.
- [ ] Examples are not misrepresented as delivered work.
- [ ] Service-specific CTA and shared shell navigation pass.

## Verification and evidence

Build; route/CTA regression; content evidence check; narrow/desktop screenshots.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Rollback page/data changes without changing the shared shell contract.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
