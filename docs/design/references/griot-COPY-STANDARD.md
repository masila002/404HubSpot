# Copy Standard — How Griot Talks

> Hard rule 13 in [AGENTS.md](../../AGENTS.md). Gate: `scripts/check-ui-copy.py` (added lines; `--all` for a full report).

Griot is the shared record of what a team did and what comes next. Its words should sound like a colleague who
was there: short, specific, and about the person's work, never about how Griot is built.

## 1. Never in user-visible text
- **Internal references:** spec numbers ("spec 42"), layer names with numbers ("backend 99", "web 31"), ticket
  ids, "ERD", "D1".
- **Promises of later work:** "coming soon", "will be implemented in …", "ships with …", "not implemented". If a
  thing is not built, it does not appear.
- **The long dash (—).** Use a comma, a full stop, or "-". Two short sentences beat one long one.
- **Code as a label:** `Tenant.PlatformScopeEntered`, `DbUpdateException`, `GET /api/...`, enum names, GUIDs.

## 2. Two voices, one screen
| Who | First line | Beneath it |
|---|---|---|
| Everyone | What happened, in their words: "You signed in", "Mary replied to your message", "The upload didn't finish" | What they can do next |
| SuperAdmin and Griot's dev team | The same plain line | The technical detail: action code, exception, route, layer, request id, a fix prompt |

## 3. Tone
- **Say the thing.** "Your report is ready", not "We're excited to let you know…".
- **No filler openers** ("Great question", "I'd be happy to", "As an AI"). Artkins greets like a person: "Hi, I'm Artkins. What are we working on?"
- **Numbers over adjectives.** "3 tasks are late", not "several tasks need attention".
- **Errors say what happened and what to do.** "We couldn't save that. Check your connection and try again."
- **Empty states offer a real next step** the viewer is allowed to take ([EMPTY-STATE-CONTRACT](EMPTY-STATE-CONTRACT.md)).

## 4. Time
Relative first ("12 seconds ago", "yesterday"), exact local time on hover. Never UTC on screen, never "Invalid Date". Web: `lib/time`.

## 5. Events, errors and incidents (web 95)
Lead with the sentence or plain title from `web/src/lib/plain.ts`; put codes, routes, exceptions and payloads in `<TechnicalDetails>`. Pills say the state in words ("Still happening", "Stopped"), never an exception name.

## 6. The assistant (web 90)
Inside the app a reply may name the model that wrote it ("Answered by …"). When no AI answered, say so kindly ("AI is off, so this came from Artkins's built-in guide") and offer the fix to whoever can act on it. The public site never names models or providers.


## 7. Email (backend 103)
Emails follow every rule above. Join clauses with a full stop or a comma, never a long dash. A button names what it opens ("Finish setup"), and its app twin always reads "Open in the Griot app".

## 8. People's activity (web 98)
- A person's activity is titled with their name ("Mary's last 30 days"), and its stats are in plain words: actions taken, days active, problems they ran into, last seen.

## 9. Service status (web 102)
- **Say what happened, not the setting.** Use "Working", "Not used yet", "Not set up" and "Failing", followed by the reason and what to do.
- **Where a service runs:** "On this computer" or "Hosted".
- **Which copy of Griot this is:** a banner says it once per page.
