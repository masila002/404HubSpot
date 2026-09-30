# 02 — Content, brand and asset truth

Status: PLANNED; not implemented in feature 01. Owner: content.
Branch: `feature/content/02-content-and-brand-audit` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Create an approved source of truth for what the company may claim and publish.

## Dependencies and readiness

Required merged specs: 01. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Owner-supplied identity, contact details and evidence. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: src/data/site.js; public/assets/; docs/content/CONTENT-REGISTER.md; docs/content/ASSET-REGISTER.md.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Inventory all nine page bodies, prices, biographies, phone numbers, email, social links and meeting/form destinations against original source files.
2. Resolve the LanguageCard phone mismatch through owner confirmation; record missing portraits without inventing faces or credentials.
3. Assign each claim/asset an owner, evidence, publication permission and status; distinguish proposal copy from approved facts.

## Data, contracts and permissions

Content records carry stable IDs, source, reviewedAt, approvedBy and publication status; secrets and customer private material stay outside the repository.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Every public contact destination has an owner-confirmed value or is explicitly unavailable.
- [ ] All six services and four course categories have approved summaries and details.
- [ ] Every portfolio/portrait asset has attribution and permission status.
- [ ] No fabricated testimonials, client names, awards or performance metrics appear.

## Verification and evidence

Link/asset scan; compare contact destinations across all views; manual owner review of claim register.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Update public copy only after approval; preserve historical claims in an internal audit record, not duplicate public content.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
