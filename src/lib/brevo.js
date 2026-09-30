// Brevo inquiry integration (frontend side).
// The browser NEVER holds the Brevo API key. The contact form POSTs to the
// first-party inquiry endpoint (VITE_INQUIRY_ENDPOINT, default /api/inquiries).
// That endpoint — owned by backend spec 19 — validates, stores, and calls
// POST https://api.brevo.com/v3/smtp/email with the templates in emails/.
// Docs: docs/integrations/BREVO.md. Sources: developers.brevo.com, 2026-09-30.

export const INQUIRY_ENDPOINT =
  import.meta.env.VITE_INQUIRY_ENDPOINT || "/api/inquiries";

export const LOGO_URL =
  "https://raw.githubusercontent.com/masila002/404HubSpot/main/public/assets/logo.png";

export async function submitInquiry(payload) {
  const res = await fetch(INQUIRY_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    let detail = "";
    try {
      detail = (await res.json()).message || "";
    } catch {
      detail = "";
    }
    throw new Error(detail || `Inquiry endpoint returned ${res.status}`);
  }
  return res.json().catch(() => ({}));
}

// Shared payload shape — mirrors the server contract in docs/integrations/BREVO.md.
export function toInquiryPayload(form) {
  return {
    name: form.name.trim(),
    email: form.email.trim(),
    phone: form.phone?.trim() || null,
    service: form.service,
    budget: form.budget || null,
    timeline: form.timeline || null,
    description: form.description.trim(),
    source: "404hubspot-contact-page",
  };
}
