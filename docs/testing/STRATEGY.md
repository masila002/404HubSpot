# Verification strategy

Current: production Vite build + browser navigation/viewport checks; no pre-existing lint or
unit suite. Feature 01 script checks all nine routes at five widths and menu/anchor interactions.
Evidence records browser/version and limitations. Tests never send real inquiries.

Future feature gates: test the externally observable behavior in each owning spec. API tests
use isolated database and fake providers; run authorization-denial, idempotency, concurrency,
failure and rollback cases. MCP tests cover handshake, schemas, scopes, revoked clients,
malicious parameters and exact proposed-write approval. AI evals include unsupported questions,
private-record requests, prompt injection and cost/time limits, with versioned non-PII fixtures.

Public UI: desktop/mobile keyboard, contrast, reduced motion, focus, screen-reader spot checks,
200% zoom and 320px reflow; content loading/empty/error only on data-backed surfaces.
Integration: contract schemas + end-to-end inquiry to staff flow with staged providers.
Release: build artifacts, route redirects, CSP/caching, a11y/performance budgets, rollback and
restores. No pass claims for unavailable credentials, browsers, vendors or devices.
