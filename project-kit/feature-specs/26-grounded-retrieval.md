# 26 — Published knowledge retrieval for AI

Status: PLANNED; not implemented in feature 01. Owner: ai.
Branch: `feature/ai/26-grounded-retrieval` — create from freshly fetched `origin/main` only after dependencies merge.
One root spec, one feature branch, one PR; affected layers share this vertical outcome.

## Problem and outcome

Build a small, reliable source retrieval layer before adding model-driven assistance.

## Dependencies and readiness

Required merged specs: 22. Read [architecture](../../docs/architecture/SYSTEM-DESIGN.md),
[roadmap](../../docs/planning/IMPLEMENTATION-ROADMAP.md), root tracker and affected contracts.
Before code: Approved corpus and retrieval evaluation set. Unresolved external facts remain explicit gates; never fabricate them.
Confirm current provider/library versions from official sources at implementation and record date.

## Owned files and layer boundaries

Proposed files: backend/src/modules/knowledge/; backend/tests/evals/; docs/ai/KNOWLEDGE-CONTRACT.md.
Create only files needed by this outcome. Preserve existing source layout and public URLs.
Owner/consumer documents update together; do not introduce unrelated layer scaffolding.

## Behavior and implementation sequence

1. Index approved published service/course/company/case-study content with stable source/revision IDs.
2. Start with structured lookup and database text search; add vectors only if benchmark failures justify them.
3. Exclude drafts and private inquiries from public retrieval; propagate unpublishing/deletion to search.

## Data, contracts and permissions

Retrieval returns bounded excerpts with source IDs, URLs and revision; input text cannot expand access scope.
Record schema/interface changes in the canonical contract and update consumers in the same PR.
No secrets or production user data in fixtures. All privileged actions authorize on the server.

## Acceptance criteria

- [ ] Published factual queries return relevant traceable sources.
- [ ] Draft/private/deleted records are absent from public results.
- [ ] Unanswerable queries produce no invented source.
- [ ] Corpus updates invalidate stale revisions within a documented bound.

## Verification and evidence

Versioned retrieval benchmark with expected sources; permission/unpublish tests; latency and payload bounds.
Before implementation, register exact executable commands for newly introduced tooling in the
stack contract and this spec. Run existing `npm run build` and `git diff --check` where frontend
changes apply. Record revision, environment, pass/fail/skip counts and unavailable operator gates.
For visible UI, capture relevant mobile/desktop states including failures; for APIs/tools, include
negative access and failure tests. Do not claim unrun integration or provider checks as passed.

## Rollout, rollback and completion

Disable index-backed retrieval and keep deterministic published-content lookup; no public assistant dependency yet.
Update the root tracker and any changed layer responsibility/contract before pushing this branch.
Present concrete evidence for review; do not merge or begin the next spec without the user's decision.
