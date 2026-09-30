# Brevo inquiry email — integration contract

Version 1 · 2026-09-30 · Branch `feature/web/02-unified-site-revamp`.
Sources: https://developers.brevo.com/docs/send-a-transactional-email and
https://developers.brevo.com/llms.txt (fetched 2026-09-30). No Context7 MCP
available; official docs used directly.

## Deviation (owner-ordered, documented here)

Formspree is REMOVED. The contact form now POSTs to the first-party inquiry
endpoint (`VITE_INQUIRY_ENDPOINT`, default `/api/inquiries`), which validates,
stores (backend spec 19), and sends two Brevo transactional emails:

1. Internal notification → team inbox (`INQUIRY_TO_EMAIL`), template `emails/inquiry-internal.html`.
2. Auto-reply → visitor, template `emails/inquiry-autoreply.html`.

Rationale: the browser must never hold the Brevo API key (`api-key` header).
Griot comparison: the local Griot scaffold at `../Griot` (checked 2026-09-30)
contains no Brevo/mail code — bare React+Vite starter — so there was nothing to
copy; this contract follows Brevo's official API instead.

## Endpoint contract (backend spec 19 implements)

`POST {VITE_INQUIRY_ENDPOINT}` — `Content-Type: application/json`

```json
{
  "name": "June Chemuu", "email": "june@example.com", "phone": "+254700000000",
  "service": "Web Development", "budget": "KES 50,000 - 150,000",
  "timeline": "1-3 months", "description": "...", "source": "404hubspot-contact-page"
}
```

Success: `201/200` JSON. Failure: non-2xx with `{ "message": "..." }`.
The form (`src/views/Contact.vue` + `src/lib/brevo.js`) shows inline errors and
falls back to WhatsApp/email links — it never claims delivery it can't confirm.

## Brevo send (server side only)

`POST https://api.brevo.com/v3/smtp/email` with headers
`api-key: $BREVO_API_KEY`, `content-type: application/json`, `accept: application/json`.
Body uses `sender` (verified, see below), `to`, `subject`, plus ONE of
`htmlContent` / `textContent` / `templateId`, and `params` for
`{{params.name}}`-style variables. `201` returns `{ "messageId" }` for log tracing.

## Templates

`emails/inquiry-internal.html` and `emails/inquiry-autoreply.html` match the
HubSpot landing system: canvas `#f8f9f5`, ink `#203b36`, brand `#246653`,
mint `#e6efdf`, Georgia/Inter stacks. The logo is hotlinked from GitHub so mail
clients render it without attachments:

`https://raw.githubusercontent.com/masila002/404HubSpot/main/public/assets/logo.png`

To use Brevo's dashboard editor instead, paste either file as custom HTML and
use its assigned `templateId` with the same `params`.

## Owner setup (numbered, production gate)

1. Create/select sender at Brevo (e.g. `hello@<verified-domain>`) and verify the domain.
2. Generate a transactional API key; store as `BREVO_API_KEY` server-side only.
3. Set `INQUIRY_TO_EMAIL` (team inbox), optional `BREVO_TEMPLATE_INTERNAL/AUTOREPLY` IDs.
4. Implement/publish the inquiry endpoint per this contract (spec 19), then set
   `VITE_INQUIRY_ENDPOINT` in `.env` and rebuild.
5. Send a test inquiry; confirm both emails + `messageId` in Brevo logs.

Until 1–4 are done the form runs in demo mode against the unimplemented
endpoint and says so — no fake "sent" state, no third-party form service.
