# Environment design

Current configs: netlify.toml and vercel.json. Hosting vendor remains an owner decision;
choose one for production to avoid ambiguous rewrites and environment drift.
Local: existing Vite dev server. Preview: branch builds with test data and no production mail,
MCP/AI secrets, or database credentials. Production: reviewed artifact and scoped runtime secrets.
Future API gets isolated preview/prod database identities; no copying live lead data to preview.
Domain, budget, region, retention and provider choices are open gates before provisioning.

CI first: build + UI/contract checks on one feature PR; no direct main push. Deploy preview
when configured. Publish production only through the accepted release process. Store credentials
in provider/CI secrets, not VITE_ variables or repository files. No infrastructure created now.
