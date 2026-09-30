# 08 — Contact and inquiry experience

Status: PLANNED; not implemented in feature 01. Owner: frontend.
Branch: `feature/frontend/08-contact-inquiry-experience` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Provide a usable, honest inquiry form and reliable direct contact alternatives.

## Dependencies and readiness

Required merged specs: 01,02. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Confirmed form provider, meeting link and privacy copy. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: src/views/Contact.vue; src/components/forms/; src/data/site.js; docs/contracts/public-navigation.md.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Redesign fields, service selection, error summary, submitting state and success receipt; preserve user values on failure.
2. Validate required name/email/service/message on client, with accessible per-field errors and focus on the first error.
3. Use configured provider only; if unavailable, show direct email/WhatsApp and a clear unavailable state instead of submitting to YOUR_FORM_ID.
4. Display a meeting link only when configured; avoid sending analytics containing the message or contact details.

## Data, contracts and permissions

Current provider adapter remains compatible until spec 19 introduces first-party inquiries. No claim of durable receipt without actual provider success.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Invalid fields receive associated error messages and focus.
- [ ] Duplicate clicks cannot create overlapping submissions.
- [ ] Server/network failures retain all inputs and expose retry/direct channels.
- [ ] Configured success is tested with a stub; no real lead is sent during automated tests.

## Verification and evidence

Build; browser form success/422/500/network tests using intercepted requests; keyboard and narrow-screen checks.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Feature flag/provider configuration enables old vs new submission adapter; keep direct contact channels available.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
