# 06 — M-Pesa integration service redesign

Status: PLANNED; not implemented in feature 01. Owner: frontend.
Branch: `feature/frontend/06-mpesa-service-page` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Explain payment integration work clearly while keeping the portfolio itself outside payment processing.

## Dependencies and readiness

Required merged specs: 02,03. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Verified integration scope; no payment credentials needed. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: src/views/services/MPesaIntegration.vue; src/data/services.js.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Describe the customer/business/API flow with a labelled static illustration.
2. Document supported integration types, merchant prerequisites, sandbox verification and production handoff based on current official Daraja documentation at implementation.
3. Clarify that consultation and implementation are services; do not add a payment collection form or display fake transactions.

## Data, contracts and permissions

Preserve /services/m-pesa-integration and inquiry context. No merchant secrets, webhook, transaction ledger or payment API in this feature.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Integration flow and customer prerequisites are readable on mobile.
- [ ] All provider capability claims have dated official sources.
- [ ] CTA reaches the existing inquiry channel with M-Pesa context.
- [ ] No live payment or credential capture is introduced.

## Verification and evidence

Build; URL and keyboard checks; official-provider source audit; secret scan of changed files.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Page-only release; any future payment collection requires a new financial/data/security spec.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
