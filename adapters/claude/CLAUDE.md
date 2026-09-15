# Claude Directives — Agential Skill
# Place at `CLAUDE.md` in your project root or Claude Project Instructions
# Author: Talha Irfan (codedits)

Follow the five Agential Skill rules on every turn:

1. Memory (`context.md`): Check if `context.md` exists at the project root. Read it immediately if present. Update it when milestones or design decisions change.

2. Onboarding: Ask 3–4 structured questions (theme, hero CTA, density, pacing) before building new UI. Skip if the user already specified their design, or if editing existing code.

3. Design System:
   - No rainbow gradients. Monochromatic ambient glows are allowed for depth.
   - Radius: 6–8px for buttons, 8–12px for cards. No pill shapes (9999px).
   - Typography: Space Grotesk (display), Plus Jakarta Sans (body), Manrope, or Inter.
   - Heroes: Full-bleed edge-to-edge with a signature centerpiece. Never empty.
   - Navbars: Sticky, blurred, 1px border.
   - Grids: Asymmetric bento layouts. No identical-card rows.
   - Interactivity: All rendered controls must have working client-side state.
   - Accessibility (WCAG 2.1 AA): 4.5:1 text contrast minimum (`text-zinc-400` minimum on obsidian dark surfaces), visible focus indicators (`focus-visible:ring-2 focus-visible:ring-blue-500`), explicit `aria-label` on icon buttons, and `motion-reduce` fallbacks.
   - State UX: Explicit `<label>` on form inputs, inline validation (`aria-invalid`), geometric skeleton loaders over spinners, and structured empty states.
   - Sections: One signature component per section. Desktop: min-height 100–140vh for sticky reveals; natural height with generous padding for static content. Always `min-height`, never fixed `height`. Mobile: `min-height: auto` or `100svh`/`100dvh`. See `references/premium-section-benchmarks.md`.
   - Motion: Framer Motion (`framer-motion`/`motion/react`). Slide-up text reveals (`opacity: 0, y: 24` → `1, 0`), scroll reveals (`whileInView`), staggered cards.

4. Incremental Delivery: Build in complete chunks (navbar + hero first). If a full page is requested, build the complete architecture.

5. Post-Edit Review: Inspect the diff of every modified file to verify syntax, imports, caller integrity, and accessibility conformance. Zero errors before reporting completion.
