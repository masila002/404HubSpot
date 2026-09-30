# Brevo setup guide — 404HubSpot

Adapted 2026-09-30 from `research/Brevo-Email-Setup-Guide.pdf` (GTP 2026
Bootcamp guide, .NET-oriented) plus https://developers.brevo.com/docs.
HubSpot differences: Vue 3 frontend (no .NET), two first-party endpoints
(`POST /api/inquiries`, `POST /api/newsletter`, spec 19), three HubSpot
templates in `emails/`. Follow in order — sender verified → curl passes →
wire endpoints → one real end-to-end send → then domain auth polish.

## 0. How mail moves for HubSpot

```
Contact form / newsletter  →  POST /api/inquiries | /api/newsletter
(first-party endpoint, spec 19)
→  HTTPS POST api.brevo.com/v3/smtp/email  →  inbox
```

The browser NEVER holds the Brevo key. The dashboard configures the pipe;
it doesn't carry the mail.

## 1. Create your Brevo account (~2 min)

brevo.com → Sign up free. Use an inbox you actually check. Confirm via the
"Confirm your Brevo account" email (check spam; resend from the banner).

## 2. Add & verify a sender

Gear icon → Senders, domains, IPs → Add sender. Suggested display name
`404HubSpot`, address `hubspot861@gmail.com` to start. Brevo emails a
6-digit code ("[Brevo] Activate Your New Sender") — paste it, sender flips
to Verified. Two verifications exist: account (step 1) vs sender (this step).

## 3. Authenticate a domain (optional now, required before scale)

Only with a domain you own (Vercel subdomains don't count). Domains tab →
Add a domain → publish the TXT + DKIM (+DMARC if shown) records → Verify.
Then switch the sender to `hello@<yourdomain>` — no code change (sender
comes from config). Gmail senders work but land in Spam more often.

## 4. Generate the API key

SMTP & API → API Keys → Generate (`hubspot-production`). Copy ONCE.
Server-side only: `.env` `BREVO_API_KEY` (never `VITE_`, never committed).

## 5. Test with curl (before writing backend code)

```bash
curl -i -X POST https://api.brevo.com/v3/smtp/email \
  -H "accept: application/json" \
  -H "api-key: YOUR_API_KEY_HERE" \
  -H "content-type: application/json" \
  -d '{
    "sender": {"name":"404HubSpot","email":"hubspot861@gmail.com"},
    "to": [{"email":"YOUR_OWN_EMAIL","name":"Test"}],
    "subject": "HubSpot Brevo test",
    "htmlContent": "<h1>It works</h1><p>Sent for 404HubSpot.</p>"
  }'
```

`201` + `messageId` = queued. `sender.email` must EXACTLY match the verified
sender. Track under Transactional → Email Activity.

## 6. Wire the HubSpot endpoints (spec 19)

- `POST /api/inquiries` accepts `toInquiryPayload` (see `src/lib/brevo.js`),
  stores it, then sends `emails/inquiry-internal.html` to `INQUIRY_TO_EMAIL`
  and `emails/inquiry-autoreply.html` to the visitor.
- `POST /api/newsletter` accepts `{ email, source }`, upserts the Brevo
  contact (double opt-in), then sends `emails/newsletter-welcome.html`
  with `params: { email, unsubscribeUrl }` — the URL must be real one-click
  before going live.
- Best-effort: a failed send logs + returns false, never fails the API
  response or rolls back the stored record.
- Needed env (server): `BREVO_API_KEY`, `BREVO_SENDER_EMAIL`,
  `BREVO_SENDER_NAME=404HubSpot`, `INQUIRY_TO_EMAIL`,
  `BREVO_TEMPLATE_INTERNAL`, `BREVO_TEMPLATE_AUTOREPLY`.

## 7. Failure modes (check before blaming code)

| Symptom | Cause | Fix |
|---|---|---|
| 400 sender invalid | `sender.email` ≠ verified sender | Copy address exactly from Senders |
| 401 Unauthorized | Missing/wrong `api-key` | Fresh key → env vars |
| Lands in Spam | Freemail sender, no domain auth | Step 3; plain transactional subjects |
| 300/day cap hit | Free plan limit, shared across inquiry+newsletter+welcome | Wait for reset; add per-IP guards |
| Nothing arrives, no error | Typo'd address / silent reject | Transactional → Email Activity logs |

## 8. Go-live order

Sender verified → curl passes → endpoints wired → one real end-to-end send
from the app → welcome/unsubscribe real → domain auth → templates polish.
