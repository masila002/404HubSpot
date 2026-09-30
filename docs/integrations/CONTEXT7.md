# Context7 — versioned docs for agents

2026-09-30 · Branch `feature/web/02-unified-site-revamp`.
Source: https://github.com/upstash/context7 (README, fetched 2026-09-30).

## Griot finding (truthful)

The local Griot scaffold at `../Griot` was inspected 2026-09-30: bare
React+Vite starter (`package.json`: react 19, vite 8, tailwind 4) with no
Context7, MCP, Brevo, or email code — nothing to copy. The setup below follows
Context7's official install instead, and matches the project rule of recording
library, version, source, and date per spec.

## Install (owner runs — interactive OAuth, not run by this agent)

```bash
npx ctx7 setup --opencode
```

This authenticates via OAuth, generates an API key, and installs the Context7
skill for OpenCode. Requires Node.js 18+. To remove later: `npx ctx7 remove`.
Free API key (higher limits): https://context7.com/dashboard.

Manual MCP alternative — server URL `https://mcp.context7.com/mcp` with header
`Authorization: Bearer YOUR_API_KEY`. Tools: `resolve-library-id`
(name → `/org/project` ID), `query-docs` (ID + question → versioned docs).
CLI alternative (no MCP): `ctx7 library <name> <query>`, then
`ctx7 docs <libraryId> <query>`.

## Project rule

When this MCP/skill is available, fetch current docs for every touched
package before answering versioned APIs. Until then, record fallbacks in the
spec (as 01 and 02b do). Suggested library IDs for this stack:
`/vuejs/core`, `/vuejs/router`, `/vitejs/vite`, `/tailwindlabs/tailwindcss`,
`/greensock/gsap`, `/clerk/javascript` (verify via `resolve-library-id`).

Agent rule to add (Cursor `Rules` / `CLAUDE.md` / OpenCode equivalent):

```text
Always use Context7 when I need library/API documentation, code generation,
setup or configuration steps without me having to explicitly ask.
```
