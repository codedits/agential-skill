# Agential Skill — Operational Rules
**Author:** Talha Irfan ([@codedits](https://github.com/codedits))

You must follow these five rules on every request, without exception.

---

## 1. Session Memory (`context.md`)

- Check if `context.md` exists in the project root before taking any action.
- Update `context.md` whenever visual decisions, design tokens, or feature milestones are agreed upon or completed.

## 2. Onboarding Questions

- When starting new UI without design specs, ask 3–4 plain-English questions: visual theme, hero CTA, information density, pacing.
- **Skip this step** if the user already provided design specs, or if editing an existing page or component. Build immediately.

## 3. Design System

Apply the following standards to all generated UI:

- **Color:** Solid high-contrast surfaces only. Obsidian `#0a0a0c`, slate `#0b0f17`, pure white `#ffffff`. No rainbow gradients. Single-color monochromatic ambient glows are allowed.
- **Typography:** Space Grotesk (display/titles), Plus Jakarta Sans (body), Manrope, or Inter. No decorative or novelty fonts. Use bracketed uppercase micro-labels (`[ OUR PROCESS ]`, `tracking-[0.25em]`) for section eyebrows.
- **Border Radius:** Buttons/CTAs: `6–8 px` (`rounded-md` / `rounded-lg`). Cards: `8–12 px` (`rounded-xl`). Never use pill shapes (`9999px` / `rounded-full`) unless explicitly requested.
- **Layout:** Full-bleed edge-to-edge sections (`w-full min-h-[100dvh]`). Inner content centered in an executive container (`max-w-7xl px-4 sm:px-6 lg:px-8`). No narrow boxed containers with dead lateral whitespace.
- **Heroes:** Must be full-viewport, edge-to-edge. Must include a signature centerpiece (application window mockup, interactive preview, or terminal) — never empty text floating in void.
- **Cards:** 1px translucent border (`border-white/10 hover:border-white/25`), subtle surface gradient (`bg-gradient-to-b from-white/[0.03] to-transparent`), `12px` corners, hover lift (`hover:-translate-y-1 hover:shadow-2xl`), bracketed micro-tags, inner editorial hierarchy.
- **Section Architecture:** Distinct storytelling sections, one signature component per section. Desktop: `min-height: 100–140vh` for sticky reveals; natural fluid height with generous padding (`py-24` to `py-32`) for static content. Mobile: `min-height: auto` or `100svh`/`100dvh`, stacked layouts. Always use `min-height`, never fixed `height`.
- **Grid Layouts:** Asymmetric bento grids (e.g. 8-col + 4-col) with functional micro-interfaces. No generic identical-card rows.
- **Interactivity:** All rendered controls (tabs, filters, modals, copy buttons) must have working client-side state. No non-functional mock UI.
- **Accessibility:** WCAG 2.1 AA conformance. Maintain 4.5:1 text contrast minimum (`text-zinc-400` minimum on obsidian dark surfaces), visible keyboard focus indicators (`focus-visible:ring-2 focus-visible:ring-blue-500`), explicit `aria-label` on icon-only buttons, and `motion-reduce` support.
- **State UX:** Explicit `<label>` on all form inputs, inline validation (`aria-invalid`, `role="alert"`), geometric skeleton loaders instead of spinners, and actionable empty states.
- **Motion:** Use Framer Motion (`framer-motion` / `motion/react`). Smooth slide-up text reveals (`opacity: 0, y: 24` → `1, 0`), scroll reveals (`whileInView`), staggered cards (`staggerChildren: 0.1`).
- **Styling:** Tailwind CSS. Support both v4 (CSS-first `@theme` in `globals.css`) and v3 (`tailwind.config.ts`). Map design tokens directly: obsidian `bg-[#0a0a0c]`, buttons `rounded-md` (6px) to `rounded-lg` (8px), cards `rounded-xl` (12px), full-bleed containers `w-full min-h-[100dvh]`.
- **Advanced Interactions:** Dual-state rolling links (`RollText`), sticky card stacking (`top: ${70 + index * 32}px`, scale `0.94`, brightness `0.55`), fluid button fills (`LiquidButton`), magnetic hover inertia (desktop only, disabled below `768px`).

## 4. Incremental Delivery

- Deliver in complete, cohesive chunks (e.g. navbar + hero first).
- Do not halt prematurely on trivial fragments, but check in with the user before tackling subsequent sections.

## 5. Post-Edit Review

- After modifying any file, inspect the diff to verify imports, syntax, closing tags, caller integrity, and accessibility (focus rings, contrast ratios, aria tags) before reporting done.
