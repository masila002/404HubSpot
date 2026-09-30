# 14 — Search metadata, structured data and sharing

Status: PLANNED; not implemented in feature 01. Owner: frontend.
Branch: `feature/frontend/14-seo-and-sharing` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Make public pages discoverable and shareable with accurate page-specific metadata.

## Dependencies and readiness

Required merged specs: 02,10,11,12. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Confirmed canonical domain and company facts. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: index.html; src/router/index.js; src/seo/; public/robots.txt; public/sitemap.xml; docs/content/SEO.md.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Define unique title/description/canonical values for published routes and case studies.
2. Choose a compatible prerender/static output approach only after verifying crawler-visible HTML; keep Vue route behavior intact.
3. Generate sitemap and validated organization/service/course structured data from approved facts; omit ratings and addresses not supported.

## Data, contracts and permissions

Metadata source is published content; preview environments are noindex and excluded from production sitemap.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Direct HTTP HTML contains route-specific metadata for targeted public pages.
- [ ] Canonical/sitemap URLs use the approved production domain.
- [ ] Structured data contains no fabricated ratings or contact facts.
- [ ] Preview and private/admin routes cannot be indexed by configuration.

## Verification and evidence

Build; inspect served HTML without JS; metadata/schema fixtures; crawler/redirect checks.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Preserve URL compatibility; rollback build adapter if hosting rewrite tests fail.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
