# 34 — Customer accounts & password auth (Clerk) — PLANNED

Owner: backend. Depends on: 17 (API), 18 (data), 20 (staff identity).
Do NOT implement until the fullstack phase. Auth was prototyped on branch
`feature/web/02-unified-site-revamp` (SignIn/SignUp pages, nav controls) and
then fully REMOVED per owner order — this spec is the single plan of record.

## Clerk app

- Clerk application `app_3K3LH52WGSgmgXWm84tuaxfkrOE` (owner-provided, non-secret).
- Link at build time: `npx clerk@latest link --app app_3K3LH52WGSgmgXWm84tuaxfkrOE`
  (requires `clerk auth login` first). CLI via npx, no global install needed.

## Lessons from the retired prototype (verified 2026-09-30, @clerk/vue 2.5.7)

- Vue has NO `SignedIn`/`SignedOut` (React-only names — build fails). Use
  `<Show when="signed-out">` / `<Show when="signed-in">` + `<UserButton>`.
- Custom pages need path routing PLUS catch-all routes, otherwise Clerk
  subpaths (e.g. password reset) have no match:
  `/sign-in` + `/sign-in/:catchAll(.*)`, same for sign-up, with
  `<SignIn routing="path" path="/sign-in" sign-up-url="/sign-up" />`.
- Theming goes through the `appearance` prop (`variables` + `elements`);
  retired `src/lib/clerkAppearance.js` matched landing tokens (Inter/Fraunces,
  ink #203b36, brand #246653) — resurrect it from git history (`fff1afe^`).
- "Forgot password?" renders ONLY when the Clerk Dashboard enables password
  auth + password reset + email verification for the app. 2026-09-30 probe:
  themed button rendered, reset link absent → dashboard config, not code.
- `VITE_CLERK_PUBLISHABLE_KEY` in browser; `CLERK_SECRET_KEY` server-side
  ONLY, needed by the inquiry/newsletter endpoints and all backend auth.

## Acceptance (fullstack phase)

- [ ] Sign-in/sign-up/reset/verify flows work against the linked app.
- [ ] Signed-in state shows UserButton; protected routes guard correctly.
- [ ] No secret in client bundle; demo shell removed (not just hidden).
- [ ] `clerk doctor` clean; test-user signup recorded as evidence.

## Verification

Per-spec backend gates only (never another layer's). Never submit real
credentials during automated checks.
