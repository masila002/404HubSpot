# Draft platform contracts

Design inputs for future specs, NOT implemented endpoints. Formal OpenAPI and JSON Schemas
must be validated and version-pinned in spec 17 before backend implementation.

## HTTP

- GET /api/v1/content/services, /case-studies, /courses: published projections only;
  paginated {items,nextCursor}, stable ID/slug, ETag by published revision. Unknown slug 404.
- POST /api/v1/inquiries: {name,email,phone?,serviceSlug,message,consentVersion,source?};
  bounded UTF-8 text; validate type/length/email/service; Idempotency-Key bound to request body;
  201 {id,status:"received"} only after commit; replay returns same id; differing replay 409.
- GET /api/v1/staff/inquiries: scoped, cursor pagination, status/service filters; minimized fields.
- PATCH /api/v1/staff/inquiries/:id: {status,assigneeId?,version}; role check and expected-version;
  409 on stale edit; append audit in transaction. No arbitrary field patch.
- Staff content revision and publish operations use explicit endpoints and expected versions;
  publication never occurs by saving a draft.
- Error {code,message,requestId,fieldErrors?}; no stack traces/PII. 401 unauthenticated, 403 denied,
  404 missing or deliberately hidden object, 409 conflict, 422 invalid, 429 Retry-After, 503 unavailable.

Request IDs across API/tool/AI traces. Input limits and pagination caps must be tested, not just
documented. Identity uses managed OIDC + secure server session for browser; CSRF protection on
cookie-authenticated writes; same-origin API routing preferred.

## MCP — initial scope

Local development stdio can prove tools; production remote access uses current supported
Streamable HTTP and the MCP authorization specification. Pin SDK/protocol version in spec 24.
Read tools: search_public_content(query,limit), get_service(slug), get_inquiry(id),
list_inquiries(status,cursor,limit). Inquiry tools require staff scope; public-content tools
return published content. Scope checks happen at execution, not only tool discovery.
Resources can expose published content by stable URI; never expose arbitrary paths or secrets.
Phase 2 writes: propose_inquiry_update(id,version,changes) → preview and short-lived proposal;
apply_inquiry_update(proposalId,approvalToken) reauthorizes, compares version, consumes approval,
and writes idempotently. Approval binds actor, operation, exact payload and expiration.
No delete, deploy, arbitrary HTTP, SQL, shell, payment or outbound-email tool in initial release.
Tool annotations describe behavior; they do not enforce permissions. Result sizes/pagination,
timeouts, audit requestId and redacted errors are part of every tool schema.

## AI

Internal draft operation returns {draft,citations,limitations,usage,requestId}; input references
published content IDs or authorized inquiry IDs, never client-supplied privileged prompts.
Public FAQ returns cited published facts or “I don’t have that information” + human handoff.
No hidden access to staff MCP tools. Model outage/budget denial preserves non-AI journeys.

## Event envelope

Outbox internal record: {eventId,type,schemaVersion,aggregateId,occurredAt,payload}.
Initial event InquiryReceived.v1 contains inquiry reference, not unrestricted PII fan-out.
Consumers deduplicate by eventId; at-least-once delivery; dead-letter after bounded retries.
