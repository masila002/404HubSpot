# 30 — Full-stack deployment, backups and recovery

Status: PLANNED; not implemented in feature 01. Owner: infra.
Branch: `feature/infra/30-fullstack-deployment-recovery` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Deploy the required platform components with reproducible recovery and environment isolation.

## Dependencies and readiness

Required merged specs: 17,18,19,20,29. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Provider/region/budget, domain, RPO/RTO and operator approval. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: infra/; docs/deployment/RELEASE-RUNBOOK.md; docs/operations/RESTORE-DRILL.md; .github/workflows/.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Provision one managed API runtime, database and required storage/secrets; no unused clusters or services.
2. Separate preview/prod identities and data; apply HTTPS, same-origin routing, safe headers and provider health checks.
3. Automate backups and perform timed restore into an isolated environment; reconcile inquiry/outbox state after recovery.
4. Document release, schema expand/contract, feature disable and artifact rollback procedures.

## Data, contracts and permissions

Runtime configuration is validated; secrets never enter frontend bundles. Production deployment is a distinct operator action.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Fresh environment can be built from documented configuration.
- [ ] Preview cannot read/send through production resources.
- [ ] Restore evidence meets owner-approved RPO/RTO.
- [ ] Rollback preserves accepted inquiry records and avoids duplicate notifications.

## Verification and evidence

Infrastructure plan review; staged deployment smoke; backup/restore/reconciliation drill; secret/config scans.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Publish only after reviewed plan; rollback compatible app artifact and isolate failed optional components, not blind database rewind.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
