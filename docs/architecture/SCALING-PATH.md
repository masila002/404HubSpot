# Scaling path: add only what evidence justifies

These thresholds are decision triggers, not measured current traffic or guarantees.

| Capability | Adopt when | First intervention | Evidence before extraction |
|---|---|---|---|
| Managed backend + database | Staff needs durable inquiry ownership/content editing | Modular monolith, managed Postgres | Specs 17–21; operator workflow and hosting cost accepted |
| Worker | Notification retries or AI work must outlive HTTP requests | Same codebase, outbox consumer | Repeated delivery tests; queue depth/latency observed |
| Object storage | Staff uploads portfolio media | Managed blob store + metadata validation | Approved media policy; cleanup/restore exercised |
| Cache | Public read latency remains over target after profiling/indexing | CDN/content cache with revision keys | Hit rate, invalidation tests and stale-content budget |
| Redis / broker | Database-backed queue or rate limits fail measured concurrency needs | Evaluate one managed service | Load report and operational owner; never default install |
| Separate AI service | Model workload causes API resource contention or distinct release cadence | Extract existing AI adapter behind contract | Resource profile and rollback plan |
| Separate MCP service | Independent clients, policy boundary or transport scaling require it | Extract adapter; domain API remains authoritative | Auth/audit contract tests and measured concurrency |
| Microservice | One bounded domain needs independent scale/ownership | Extract one domain, one owned store | Stable contracts, team owner, telemetry, failure isolation and migration ADR |
| Mobile app | Repeat users need validated offline/native/push workflows unavailable on responsive web | Research prototype first | Approved personas, retention/use frequency and delivery budget |
| PWA | Repeated mobile visits need installability or deliberate offline read | Cache public assets/content only | Update/offline/privacy tests; never cache staff/inquiry responses |
| Kubernetes | Multiple services and operational requirements exceed managed deployment | Compare managed options first | Staffing, total cost, rollout/recovery evidence |

Do not pre-create mobile, microservice, Redis, Kubernetes or multi-tenant application trees.
The portfolio service called Mobile Apps remains part of the business offering regardless.
Before extraction: publish/contract versioning, idempotency, tracing, migration backfill and
reconciliation, consumer cutover, rollback window. Never share cross-service table writes.
