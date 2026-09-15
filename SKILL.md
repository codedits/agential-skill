---
name: agential-skill
description: >-
  Use this skill when the user asks to build, design, code, refactor, debug, review, style, or optimize any website, web application, frontend UI, component, layout, or page. Enforces persistent memory (context.md), structured onboarding questions for new UI, a strict design system (solid colors, clean typography, minimal radius, viewport-scale section architecture, motion), incremental delivery, and mandatory post-edit review.
---

# Agential Skill — Specification
**Author:** Talha Irfan ([@codedits](https://github.com/codedits))

A model-agnostic skill that enforces a disciplined five-step workflow for frontend and UI development. Produces clean, consistent, well-reviewed code with a strict visual standard.

---

## Task Routing

| User Intent | Action | Skip Onboarding? | Reference |
|:---|:---|:---|:---|
| New UI without design specs | Ask the 4 onboarding questions | No | [questioning-framework.md](./references/questioning-framework.md) |
| Frontend with specs or edits | Build directly | Yes | [framer-design-system.md](./references/framer-design-system.md) · [DESIGN.md](./DESIGN.md) |
| Section layouts / sticky stages | Apply viewport scaling rules | Yes | [premium-section-benchmarks.md](./references/premium-section-benchmarks.md) |
| Forms, loading, & empty states | Apply state UX patterns | Yes | [form-and-feedback-ux.md](./references/form-and-feedback-ux.md) |
| Accessibility audit & remediation | Apply WCAG 2.1 AA checklist | Yes | [accessibility-standards.md](./references/accessibility-standards.md) |
| Bug fix / refactor / small tweak | Edit target file, run review | Yes | [post-edit-review-checklist.md](./references/post-edit-review-checklist.md) |

---

## Fast Reference (For AI Assistants)

| Pillar | Mandatory Action | Key Tokens & Rules |
|:---|:---|:---|
| **1. Memory** | Read `context.md` at start; update after milestones. | Persists across session truncations and model switches. |
| **2. Onboarding** | Ask 4 questions before building new UI without specs. | 1. Theme, 2. Hero CTA, 3. Density, 4. Pacing. (Skip on edits). |
| **3. Design System** | Enforce Swiss editorial aesthetic. | **Surfaces:** Obsidian `#0a0a0c`, Slate `#0b0f17`, White `#ffffff`. Strictly no rainbow gradients.<br>**Radius:** Buttons `6–8px` (`rounded-md`), Cards `8–12px` (`rounded-xl`). Never pill (`rounded-full`).<br>**Typography:** Space Grotesk (display), Plus Jakarta Sans (body), `[ BRACKETED TAGS ]`.<br>**Layout:** Full-bleed (`w-full min-h-[100dvh]`), executive container (`max-w-7xl`).<br>**Accessibility:** WCAG 2.1 AA (4.5:1 text contrast minimum, `focus-visible:ring-2`, `motion-reduce`). |
| **4. Delivery** | Build in complete, cohesive chunks. | Start with Navbar + Hero centerpiece. Pause for user review. |
| **5. Review** | Mandatory diff check before reporting done. | Verify syntax, closed tags, imports, accessibility, and zero deletions. |

---

## Pillar 1 — Memory

Chat sessions get lost, truncated, or restarted. The `context.md` file in the project root preserves state across sessions and across model switches.

1. **Session start:** Check if `context.md` exists. If it does, read it before doing anything else.
2. **Persist decisions:** After the user answers onboarding questions or a feature milestone is completed, update `context.md` with the project vision, design tokens, completed chunks, and next milestones.

*Reference: [context-protocol.md](./references/context-protocol.md)*

---

## Pillar 2 — Onboarding

Before building any new frontend page or component from an underspecified prompt, ask 3–4 structured, plain-English questions:

1. **Visual Theme** — Deep obsidian dark (`#0a0a0c`), slate engineering dark (`#0b0f17`), or studio white (`#ffffff`).
2. **Hero Message & Primary Action** — The main headline and the single most important button.
3. **Information Density** — Spacious and modern (recommended) or compact dashboard.
4. **Pacing** — Confirm starting with navbar + hero, then iterating.

**Skip this step** when:
- The user already specified theme, colors, or component requirements.
- The task is an edit, modification, or bug fix on existing code.

*Reference: [questioning-framework.md](./references/questioning-framework.md)*

---

## Pillar 3 — Design System

### 3.1 Color

- **Banned:** Rainbow gradients, multicolor linear/radial gradients on backgrounds, cards, buttons, or text.
- **Allowed:** Single-color monochromatic atmospheric glows and radial spotlights (e.g. `radial-gradient(circle at top center, rgba(59,130,246,0.12), transparent 70%)`).
- **Default palette:** Obsidian `#0a0a0c`, slate `#0b0f17`, pure black, clean off-white `#f8fafc`. Accent with solid colors like `#3b82f6` (blue) or `#10b981` (emerald).

| Surface | Background | Card | Border (1px) | Text | Accent |
|:---|:---|:---|:---|:---|:---|
| Obsidian Dark | `#0a0a0c` | `#121318` | `rgba(255,255,255,0.08)` | `#f8fafc` | `#3b82f6` |
| Slate Dark | `#0b0f17` | `#111827` | `rgba(255,255,255,0.07)` | `#f1f5f9` | `#10b981` |
| Studio Light | `#ffffff` | `#f8fafc` | `rgba(0,0,0,0.08)` | `#0f172a` | `#2563eb` |
| Warm Editorial | `#faf9f5` | `#f3f1ea` | `rgba(0,0,0,0.06)` | `#1c1917` | `#0284c7` |

Dual-theme variables:
```css
:root { --background: #f7f7f7; --foreground: #0a0a0a; }
.dark { --background: #000000; --foreground: #f7f7f7; }
.section-dark { background-color: #000; color: #f7f7f7; }
::selection { background-color: var(--foreground); color: var(--background); }
```

### 3.2 Typography

| Role | Font | Notes |
|:---|:---|:---|
| Display / titles / large numerals | Space Grotesk | Negative tracking (`-0.04em` to `-0.02em`) |
| Body / interface | Plus Jakarta Sans | Relaxed leading (`leading-relaxed`) |
| Geometric luxury | Manrope | Agency/portfolio contexts |
| Dashboard precision | Inter / Geist | Data-dense interfaces |

Never use funky, decorative, cartoonish, or novelty fonts.

**Section eyebrows** use the bracketed uppercase format:
```tsx
<span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-zinc-400">
  [ OUR PROCESS ]
</span>
```

### 3.3 Border Radius

| Component | Radius | Tailwind |
|:---|:---|:---|
| Buttons & CTAs | 6–8 px | `rounded-md` / `rounded-lg` |
| Cards & modals | 8–12 px | `rounded-lg` / `rounded-xl` |
| Badges & tags | 4–6 px | `rounded-sm` |
| Inputs | 6–8 px | `rounded-md` / `rounded-lg` |

Never use `rounded-full` / `9999px` unless explicitly requested.

### 3.4 Navbar & Hero

**Navbar:**
- Sticky/fixed at top, `z-index: 100`.
- `backdrop-filter: blur(16px)` with semi-transparent background.
- 1px bottom border (`rgba(255,255,255,0.08)` dark / `rgba(0,0,0,0.08)` light).
- Compact sans-serif links (`0.9rem`, `font-weight: 500`).
- Minimal-radius action CTA (`border-radius: 6px`).

**Hero:**
- Full-bleed edge-to-edge: `w-full min-h-[100dvh]`. The outer wrapper must never sit inside a boxed container with horizontal page margins.
- Ambient spotlights, backgrounds, and canvases span 100% viewport width.
- Inner content centered in `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Generous padding (`pt-32 pb-20 md:pt-40 md:pb-28`).
- Clean typographic hierarchy: eyebrow tag → authoritative headline → balanced subtitle → dual CTA row.
- **Signature centerpiece required.** Never create an empty hero with just floating text. Always include an application window mockup, interactive preview, or terminal.

### 3.5 Cards

When cards are used, enforce this standard:

- **Border:** `border border-white/10 hover:border-white/25` (dark) or `border border-black/[0.07] hover:border-black/[0.15]` (light).
- **Surface:** `bg-[#121318]` with `bg-gradient-to-b from-white/[0.03] to-transparent`.
- **Corners:** `rounded-xl` (12 px).
- **Hover:** `hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300`.
- **Inner structure:** Bracketed micro-tag → Space Grotesk title → Plus Jakarta Sans body → footer/telemetry row.

### 3.6 Section Architecture

Structure web applications into distinct, self-contained sections. Each section has one signature component.

| Section Type | Desktop Height | Mobile Height |
|:---|:---|:---|
| Hero | `min-height: 100vh` / `100dvh` | `100svh` or `auto` |
| Sticky feature reveal | `min-height: 120–140vh` | `auto` |
| Bento grid / ecosystem | `min-height: 100–130vh` | `auto` |
| Metrics / proof | `min-height: 80–100vh` | `auto` |
| Final CTA | `min-height: 80–100vh` | `auto` |

**Rules:**
- Always use `min-height`, never fixed `height`.
- 120–140vh is strictly for sticky scroll stages. Static content uses natural height with generous padding (`py-24` to `py-32`).
- Mobile (`<768px`): Use `min-height: auto` or `100svh`/`100dvh`. Stack layouts to single column. Disable sticky stacking.
- Full-width layout priority: sections span edge-to-edge (`w-full`). Inner content sits in an executive container (`max-w-7xl` or `max-w-screen-2xl`).

### 3.7 Grid Layouts

Do not generate identical card rows. Use asymmetric bento grids:

```html
<div class="grid grid-cols-1 md:grid-cols-12 gap-6">
  <div class="md:col-span-8 rounded-xl border border-white/10 bg-[#121318] p-8">
    <!-- Primary showcase -->
  </div>
  <div class="md:col-span-4 rounded-xl border border-white/10 bg-[#121318] p-8">
    <!-- Metrics / telemetry -->
  </div>
</div>
```

### 3.8 Interactivity

All rendered UI controls must have working client-side state:
- Tab switchers must change the active view.
- Search inputs must filter content.
- Copy buttons must write to clipboard and show confirmation.
- Modals and accordions must toggle open and closed.

Never render non-functional mock UI.

### 3.9 Motion

Use Framer Motion (`framer-motion` or `motion/react`) in React/Next.js. In vanilla stacks, use CSS with `cubic-bezier(0.16, 1, 0.3, 1)`.

**Default text reveal:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
>
```

**Scroll-triggered sections:**
```tsx
<motion.div
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
>
```

**Staggered grids:** `staggerChildren: 0.08` to `0.12`.

**Hover feedback:** `whileHover={{ y: -3 }}`, `whileTap={{ scale: 0.98 }}`.

### 3.10 Tailwind CSS

Primary styling engine. Support both versions:

**v4 (CSS-first):**
```css
@import "tailwindcss";

@theme {
  --font-display: "Space Grotesk", sans-serif;
  --font-sans: "Plus Jakarta Sans", sans-serif;
  --color-obsidian: #0a0a0c;
  --color-obsidian-card: #121318;
  --radius-btn: 6px;
  --radius-card: 12px;
}
```

**v3 (config-first):** Map fonts, colors, and radii under `theme.extend` in `tailwind.config.ts`.

**Canonical utility patterns:**
- Full-bleed hero: `w-full min-h-[100dvh] relative overflow-hidden bg-[#0a0a0c] pt-32 pb-20`
- Executive container: `w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Button: `rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-black`
- Card: `rounded-xl border border-white/10 bg-[#121318] p-8 hover:border-white/20`
- Bracket tag: `text-xs font-mono font-bold tracking-[0.25em] uppercase text-zinc-400`

### 3.11 Advanced Interactions

- **Rolling links (`RollText`):** Dual-text stack with vertical roll on hover. Duration `300ms`, easing `cubic-bezier(0.65, 0, 0.35, 1)`.
- **Sticky card stacking:** Dynamic offset `top: ${70 + index * 32}px`. Preceding cards scale to `0.94` and dim to `brightness(0.55)`. Disabled on mobile (`<768px`).
- **Fluid button fills:** Dual-wave SVG fill rising from bottom on hover.
- **Magnetic cursor:** Desktop only. Disabled below `768px` and when `prefers-reduced-motion` is active.

### 3.12 Accessibility & Semantics (WCAG 2.1 AA)

- **Contrast compliance:** Maintain 4.5:1 minimum for body text, 3:1 for large display titles and borders. Secondary metadata must use `text-zinc-400` minimum on obsidian dark surfaces—never faint zinc (`text-zinc-600`).
- **Focus visibility:** Every clickable control must have an explicit focus indicator: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`.
- **Keyboard navigation:** Full tab sequence support, skip-to-content links, trapped focus inside open dialogs/modals.
- **Screen reader labels:** All icon-only buttons require explicit `aria-label` tags. Collapsibles require `aria-expanded`.
- **Motion reduction:** Wrap Framer Motion animations with `useReducedMotion()` and use Tailwind `motion-reduce:transition-none`.

### 3.13 Form & State UX

- **Explicit labels:** Pair all inputs with `<label>`. Do not use placeholder attributes as labels.
- **Validation feedback:** Inline errors with `role="alert"`, `aria-invalid={true}`, and `aria-describedby`.
- **Loading states:** Use geometric skeleton pulse loaders that match layout geometry rather than generic circular spinners.
- **Empty states:** Provide informative placeholders with bracketed tags (`[ NO ENTRIES ]`) and a clear primary action button.

*References: [DESIGN.md](./DESIGN.md) · [accessibility-standards.md](./references/accessibility-standards.md) · [form-and-feedback-ux.md](./references/form-and-feedback-ux.md) · [framer-design-system.md](./references/framer-design-system.md) · [premium-section-benchmarks.md](./references/premium-section-benchmarks.md)*

---

## Pillar 4 — Incremental Delivery

1. **Deliver in cohesive chunks.** A chunk is a complete milestone: navbar + hero stage, or a full features section with bento grid. Never stop after trivial fragments.
2. **Handle full-page requests.** If the user asks for a complete page, build the full architecture cleanly — do not stop prematurely.
3. **Review after each chunk.** Run the post-edit review, verify, then pause.
4. **Check in with the user.** Let them inspect the result before continuing to the next section.

---

## Pillar 5 — Post-Edit Review

After creating or modifying any file, run this check before reporting completion:

1. **Imports & syntax:** All used functions, styles, and packages imported. All tags, brackets, and quotes closed.
2. **Caller integrity:** Modifying a component's props didn't break existing callers.
3. **Accessibility verification:** Focus rings present, contrast ratio met, icon buttons have `aria-label`, motion-reduction respected.
4. **No deletions:** The edit didn't accidentally remove existing features, styles, or utilities.
5. **Verification:** Run available tests, linters, or check terminal output. Zero errors.

*Reference: [post-edit-review-checklist.md](./references/post-edit-review-checklist.md)*

---

## Standard Execution Sequence

1. Check `context.md` — load existing project state.
2. Ask onboarding questions — if starting new UI without specs.
3. Persist to `context.md` — record decisions.
4. Build — apply design system rules, deliver as a cohesive chunk.
5. Post-edit review — verify zero breakage.
6. Report and pause — present summary, check in before next chunk.
