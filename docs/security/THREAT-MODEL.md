# Threat model and release boundaries

Assets: lead PII, staff identities, draft/unpublished content, model/provider credentials,
publication rights, deployment credentials. Attackers: public spammers, compromised browser,
overprivileged staff/client, malicious model/retrieved text, forged provider callback.

| Boundary | Threat | Required control / verification |
|---|---|---|
| Public inquiry | Spam, duplicate submits, injection | Size/schema limits, rate limits, idempotency, encoded rendering; abuse tests |
| Staff API | IDOR, CSRF, role escalation | Managed identity, server policy per operation/object, CSRF, negative role matrix |
| Content publish | XSS, unapproved customer material | Sanitized rendering, draft/publish split, permission metadata and review |
| Media | Active payloads, huge files, private leaks | MIME/signature/size checks, private staging and signed upload boundaries |
| MCP | Wrong-audience token, confused deputy, excessive tools | Validate resource audience and scopes, approved client policy, per-tool checks, no token passthrough |
| AI | Prompt injection, private retrieval, fabricated claims | Published-only public corpus, scoped internal access, source citations, no autonomous writes, adversarial evals |
| Providers | Secret leak, forged webhook, replay | Server secrets, signature verification where supported, replay bounds and idempotency |
| Operations | Data loss, accidental publication | Preview environments, reviewed releases, restore drills and rollback proof |

MCP guidance verified against official current docs on 2026-09-30:
https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization
https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/security_best_practices
https://modelcontextprotocol.io/specification/2026-07-28/basic/transports
Recheck at implementation; adapters must use a supported pinned SDK/protocol combination.
Do not pass MCP client tokens through unvalidated to unrelated upstream services.
Retention/privacy policy requires business decisions and appropriate review before collection;
this document is an engineering plan, not a claim of legal compliance.
