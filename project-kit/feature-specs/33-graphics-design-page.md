# 33 — Graphics design and brand identity service

Status: PLANNED, not implemented. Owner: frontend/content.
Branch: `feature/frontend/33-graphics-design-page`, from fetched origin/main.
Dependencies: merged 02 (approved content) and 03 (service-detail shell).
This ID was added during completeness review; execute with 04–06, before 13/15.

## Outcome

Explain the company’s design service with credible examples and a clear creative-brief path.
Preserve `/services/graphics-design`; existing pricing/deliverables require owner verification.

## Owned files

src/views/services/GraphicsDesign.vue; src/data/services.js; reusable service-detail shell only
where a compatible extension is needed. Update UI registry and public-navigation contract.
No design-editor app or automated logo generation is introduced.

## Behavior and implementation sequence

1. Reuse the service-detail structure for identity, logos and visual communication actually offered.
2. Explain the brief, exploration, feedback, refinement and handoff stages; name expected client
   inputs and delivered file formats only where confirmed by the team.
3. Show approved portfolio imagery with permission/attribution. If no work is cleared, explain
   capabilities without publishing invented client logos or stock work as delivered projects.
4. Provide accessible image descriptions and an inquiry CTA that carries Graphics Design context.
5. Make scope/revision/licensing terms clear using owner-approved copy; do not promise unlimited
   revisions or ownership terms that have not been agreed.

## States and contracts

Static page requires no artificial loading state. Missing examples are omitted honestly.
Future case-study references use published IDs/slugs. The canonical six-service registry stays
compatible with navbar, footer and landing cards; illustrations remain separate from client proof.

## Acceptance criteria

- [ ] Original service route and inquiry intent remain intact.
- [ ] Offerings, process and handoff are understandable without design jargon.
- [ ] Every example has recorded publication rights and truthful attribution.
- [ ] Pricing/revision/ownership claims match approved business policy.
- [ ] Layout, FAQ and imagery work with keyboard and at all five baseline widths.

## Verification

Run npm run build, git diff --check and the route/viewport suite; inspect the page’s keyboard
order, image loading/alt text, specific inquiry URL and content register. Save mobile/desktop
evidence and exact pass/fail/skip counts. Never submit a real inquiry as an automated test.

## Rollout and rollback

Page/data-only rollout on this feature branch; keep the old route. Revert presentation changes
if needed without altering other service pages. Tracker and contract docs update before push;
review and merge remain the user’s decision. No next spec in the same branch.
