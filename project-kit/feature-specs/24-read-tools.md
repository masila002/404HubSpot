# 24 — Private MCP read tools and resources

Status: PLANNED; not implemented in feature 01. Owner: mcp.
Branch: `feature/mcp/24-read-tools` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Expose useful company content/inquiry reads to authorized MCP clients through domain policy.

## Dependencies and readiness

Required merged specs: 17,20,21,22. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Approved MCP clients, transport and identity setup. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: backend/src/adapters/mcp/; backend/tests/mcp/; docs/contracts/MCP-TOOLS.md; project-kit/layers/mcp/README.md.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Pin a supported official MCP SDK/protocol and test initialization, tool listing and schema validation.
2. Implement search_public_content/get_service and scoped get_inquiry/list_inquiries using existing application services.
3. For remote access, implement supported authorization/resource metadata, correct token audience/scopes, revocation and Origin checks per current official specification.
4. Enforce pagination/result limits, timeouts, rate limits, redaction and audit IDs; treat tool content as untrusted data.

## Data, contracts and permissions

No direct SQL/shell/arbitrary URL access. Local stdio validation does not prove remote authentication; test transport separately.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Every tool has a documented schema, scope and bounded response.
- [ ] Wrong audience, revoked client and insufficient-scope requests fail.
- [ ] Unpublished/private content cannot leak through public search.
- [ ] Tool actions appear in audit records without raw sensitive payloads.

## Verification and evidence

MCP client conformance smoke tests; tool schema tests; full auth negative matrix; injection and oversized-response cases.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Disable MCP endpoint independently of web/API; revoke client access without changing staff browser identity.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
