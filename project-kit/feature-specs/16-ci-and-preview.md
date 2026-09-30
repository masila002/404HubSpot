# 16 — Reproducible checks and branch previews

Status: PLANNED; not implemented in feature 01. Owner: infra.
Branch: `feature/infra/16-ci-and-preview` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Give every feature branch reproducible verification and a reviewable preview.

## Dependencies and readiness

Required merged specs: 01. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: GitHub Actions/hosting permissions and chosen preview provider. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: .github/workflows/; package.json; scripts/; docs/deployment/ENVIRONMENTS.md.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Pin supported Node and browser tooling after current-version research; install from lockfiles.
2. Run build, relevant browser/contract checks and artifact upload on PRs; use minimal CI permissions.
3. Configure preview deployment only with authorized provider access; previews use test configuration and cannot send production mail.

## Data, contracts and permissions

One feature branch → one PR targeting main. No auto-merge or production release implied by preview setup.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Fresh checkout reproduces build and UI checks.
- [ ] Failed checks block promotion under configured repository policy.
- [ ] Preview links identify revision and environment.
- [ ] Secrets are absent from artifacts/browser bundles and workflow logs.

## Verification and evidence

Exercise a passing and intentionally failing check on the feature branch; verify preview route refresh.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Disable new workflow/preview integration if broken; retain local commands and existing production configuration.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
