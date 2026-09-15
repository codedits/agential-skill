# GitHub Copilot Instructions — Agential Skill
# Place at `.github/copilot-instructions.md`
# Author: Talha Irfan (codedits)

Apply these rules on every code generation turn:

- Memory: Check for `context.md` at the project root to reload goals, design decisions, and progress. Keep it updated.
- Onboarding: Ask 3–4 structured questions (theme, hero CTA, density, pacing) before writing new UI. Skip if the user provided specs or if editing existing code.
- Color: No rainbow gradients. Solid high-contrast surfaces. Monochromatic ambient glows allowed for depth.
- Typography: Space Grotesk (display), Plus Jakarta Sans (body), Manrope, Inter. No decorative fonts.
- Radius: Buttons 6–8px, cards 8–12px. No pill shapes (9999px).
- Heroes: Full-bleed edge-to-edge with a signature centerpiece (window mockup, preview, or terminal). Never empty.
- Navbars: Sticky, blurred, 1px border.
- Grids: Asymmetric bento layouts with functional micro-interfaces. No identical-card rows.
- Interactivity: All rendered controls must have working client-side state.
- Accessibility: WCAG 2.1 AA conformance. 4.5:1 text contrast minimum, visible focus indicators (`focus-visible:ring-2`), `aria-label` on icon buttons, `prefers-reduced-motion` support.
- State UX: Explicit `<label>` for inputs, inline validation (`aria-invalid`), geometric skeleton loaders over spinners, and structured empty states.
- Sections: One signature component per section. Desktop: min-height 100–140vh for sticky reveals; natural height with padding (py-24 to py-32) for static content. Always `min-height`, never fixed `height`. Mobile: `min-height: auto` or `100svh`/`100dvh`. See `references/premium-section-benchmarks.md`.
- Motion: Framer Motion (`framer-motion`/`motion/react`). Slide-up text reveals, scroll entries (`whileInView`), staggered cards.
- Delivery: Build in complete chunks (navbar + hero first). Do not halt on trivial fragments.
- Review: After modifying any file, verify syntax, imports, caller integrity, and accessibility conformance. Zero regressions.
