# Motion policy — which animation runtime is allowed where

**Owner:** web 31 (dashboard shell) · web 43 (interaction foundation) · applies to `web/` and, by parity, `mobile/`
**Created:** 2026-09-21 · **Status:** ACTIVE

> **Web 43 implementation (2026-09-24, ✅ COMPLETE):** Framer Motion integration with theme tokens, nine dataviz foundation components (WidgetCard, KpiCard, MetricRail, StatusRowTable, WidgetHeader, WidgetState, ChartArea, ChartLine, ChartBar), Lottie local assets served from /public/lottie/; this policy governs app-shell motion. All automated gates pass (lint 0 errors / 2 pre-existing warnings, typecheck clean, Jest passing, build green).

## The question this settles

`web/AGENTS.md` hard rule 1 says *"App shell never imports GSAP; Public shell is the only
motion-heavy surface"*, and the two-shells section adds *"MUI transitions only"* for the app shell.
Both were written for web 06–08, when the app shell's entire motion requirement was a drawer, a
menu and a drag ring.

The dashboard wave (web 31–35) changes that. Staggered widget entry, KPI count-ups, chart reveals
and a sliding tab indicator are **not** expressible as MUI transitions, and hand-rolling them in CSS
produces the jank hard rule 1 exists to prevent. The rule's *intent* — keep a 70 KB scroll-animation
runtime out of the authenticated first paint — is correct and unchanged.

## The policy

| Runtime | Public shell | App shell | Loading |
|---|---|---|---|
| **MUI transitions** | ✅ | ✅ | bundled |
| **Framer Motion** (`framer-motion`, via `m` + `LazyMotion`) | ✅ | ✅ **permitted** | already a dependency |
| **GSAP + ScrollTrigger** | ✅ | ❌ **forbidden** | dynamic `import()` only |
| **Lenis** (smooth scroll) | ✅ | ❌ **forbidden** | dynamic `import()` only |
| **Three.js** (WebGL) | ✅ (none shipped yet) | ❌ **forbidden** | dynamic `import()`, behind an observer |

**Why Framer Motion and not GSAP in the app shell.** It is already installed, it is React-native
(no imperative escape hatch around the reconciler), and `LazyMotion` + the `m` component let the
shell load `domAnimation` only — the transform/opacity/layout/gesture subset — instead of a general
animation engine. GSAP's value is timelines and scroll scrubbing, which the app shell must not have.

**Why the app shell still may not import GSAP.** Nothing changed about the cost. A static
`import { gsap } from 'gsap'` under `src/features/app/` is a build-gate failure.

## Consequences the specs inherit

1. The app shell mounts exactly one `<LazyMotion features={domAnimation} strict>` at its root.
   `strict` throws if anyone renders a full `motion` component underneath, so the bundle saving
   cannot be silently lost later.
2. Every duration and easing comes from `theme.griot.motion`. There is one motion personality.
3. `prefers-reduced-motion: reduce` **swaps transform for opacity** rather than disabling animation
   (the documented Motion pattern) — a user who asked for less motion still needs to see that
   something changed. Count-ups jump to their final value.
4. **Entry animation runs on first paint only.** A widget that re-animates on every poll makes
   stable data look volatile.
5. **Web 43's shared state contract is tokenized.** `theme.griot.motion` owns timing and easing;
   `theme.griot.interaction` owns the 44px target, travel, hover lift, press compression, drag
   scale/rotation and stagger cap. `ActionButton`/`ActionIconButton` are the shared accessible
   control primitives. `DragFeedbackCard` and `DropPlaceholder` are visual-only; no app descendant
   may add a drag handler, API mutation or persistence path under this policy.
6. **The global theme provider does not load GSAP.** Theme changes use the token-driven CSS
   transition. The public `animateThemeSwitch` helper remains available for a page-level effect,
   but `ThemedApp` must not call it; otherwise the app's first paint would acquire a public motion
   runtime.
7. **Reduced motion is a substitution, not a blank screen.** Transform travel, scale and rotation
   are removed; opacity, colour, elevation, focus ring and text state remain. Lenis and scroll-reveal
   preference listeners stay mounted so a later preference change can be honoured without a reload.
   Skeletons become static placeholders under the preference.
8. **The runtime boundary is source-tested.** A test scans `web/src/features/app/` for GSAP/Lenis/
   Three imports, full `motion` imports, and a second strict `LazyMotion` root. The deterministic
   fixture at `/presentation/interactions` is development-only and performs no request.

## Skills

`web/.agents/skills/motion-framer/` (app shell) · `web/.agents/skills/gsap/` (public shell) ·
`web/.agents/skills/three/` (public shell, unshipped) · `web/.agents/skills/awwwards-interactions/`
(the craft bar, both shells). All four were resolved through Context7 on 2026-09-21; library ids and
findings are recorded in [`mcp-versions.json`](../../mcp-versions.json).
