# 20 — Staff identity and authorization

Status: PLANNED; not implemented in feature 01. Owner: backend.
Branch: `feature/backend/20-staff-identity` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Authenticate staff and enforce content/inquiry permissions on the server.

## Dependencies and readiness

Required merged specs: 17,18. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Chosen OIDC provider and approved role matrix. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: backend/src/modules/identity/; backend/src/policy/; src/views/admin/Login.vue; docs/security/ACCESS-MATRIX.md.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Integrate managed OIDC with state/nonce/PKCE as appropriate and secure server sessions; do not build password storage.
2. Define editor, publisher, inquiry operator and administrator capabilities and deny by default.
3. Implement session expiration/revocation/logout, CSRF defenses and staff deactivation; audit security actions.

## Data, contracts and permissions

Browser sessions are not MCP tokens. Permissions are enforced per operation/object, not inferred from visible UI.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Unauthenticated, disabled and wrong-role callers are rejected.
- [ ] Logout/revocation prevents further protected operations.
- [ ] Session cookies are secure/HttpOnly with documented SameSite behavior.
- [ ] CSRF and forged identity callback cases fail safely.

## Verification and evidence

Provider sandbox authentication tests; full positive/negative role matrix; session/CSRF integration tests.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Keep admin private behind a disable switch until provider configuration is verified; preserve public site availability.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
