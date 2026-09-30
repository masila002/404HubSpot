# Operations plan

Before full-stack launch, assign an owner and escalation contact. Monitor availability,
API p95 latency/error rate, failed inquiry commits, oldest outbox age, delivery retry count,
auth failures, MCP denial/error rates, model usage/latency and budget exhaustion. Redact PII.
Proposed initial targets (not measured): public reads p95 <500ms at agreed load; inquiry accept
p95 <1s excluding provider delivery; error rate <1%; investigate outbox age >5 minutes.
Agree business-appropriate RPO/RTO before choosing backup retention and run a timed restore.

Incident: identify impact/request IDs → disable affected optional feature → preserve evidence →
rollback compatible artifact → verify public contact fallbacks → reconcile undelivered outbox.
AI and MCP have separate disable switches; their outage must not stop the portfolio or inquiries.
Release rollback never blindly reverses a destructive migration; use expand/contract schema changes.
