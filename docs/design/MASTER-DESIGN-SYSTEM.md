# 404HubSpot — company portfolio design system

Version 2 · 2026-09-30 · Unified site revamp (02b, review pending).
V1 landing direction retained and extended to all routes: Fraunces display + Inter body,
GSAP reveals + Lottie accents, Clerk auth shell, five-person team, provisional KES bands.
The user delegated reference selection and redesign. This document records our project-specific
choices; copied Griot approval statements have no authority here.

## Direction

A warm, light digital studio: spacious editorial headings, teal ink, white capability cards,
quiet neutral borders, green payment feature, practical code illustration, and real team identities.
The six service offerings and training path remain the primary visitor choices.

## Composition

1. Sticky brand/navigation with a services disclosure and direct inquiry action.
2. Split hero: clear business proposition left, original code/site/payment illustration right.
3. Capability strip (capabilities, not unverifiable client logos or performance claims).
4. Six linked service cards, each with tags and a service-specific WhatsApp action.
5. M-Pesa feature: narrative plus illustrative customer → Daraja → business flow.
6. Programming section: original code graphic, actual class categories, class-page link.
7. Three-step process, existing four-person team, conversational closing CTA.
8. Footer: all services, learning/process/contact and configured social channels.

## Source traceability

Primary: micro/features-cards.png. Supporting: micro/pricing.png, DASHBOARD.png, 1/2/3/4.jpeg,
9.jpeg for compact layouts. [Full analysis](../../inspo/CATALOG.md).
Original CSS artwork replaces third-party screenshots in the public page. Illustration labels
make no claims about actual delivered projects or payment transactions.

## Canonical owners

[Tokens](../../project-kit/context/ui-tokens.md), [rules](../../project-kit/context/ui-rules.md),
[registry](../../project-kit/context/ui-registry.md), and
[navigation contract](../contracts/public-navigation.md). Implementation is src/styles/landing.css.
[Editable design board](landing-design.html) records layout/tokens; browser captures in evidence/
show actual implementation at five widths. Do not claim pixel equivalence to dashboard screenshots.

## Compatibility

Landing and shared shell are redesigned in feature 01. Detail-page bodies adopt this system
in their own specs. Legacy Tailwind buttons and page utilities remain available. No global
framework theme swap or dependency upgrade is part of this feature.
