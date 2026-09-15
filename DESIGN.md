---
name: "Agential Swiss Editorial Design System"
version: "1.0.0"
author: "Talha Irfan (@codedits)"
license: "MIT"
tokens:
  color:
    background:
      obsidian: "#0a0a0c"
      slate: "#0b0f17"
      pure-black: "#000000"
      studio-white: "#ffffff"
      warm-editorial: "#faf9f5"
    surface:
      obsidian-card: "#121318"
      slate-card: "#111827"
      white-card: "#f8fafc"
      warm-card: "#f3f1ea"
    text:
      dark-primary: "#f8fafc"
      dark-secondary: "#a1a1aa"
      dark-muted: "#71717a"
      light-primary: "#0f172a"
      light-secondary: "#475569"
      light-muted: "#94a3b8"
    border:
      dark-default: "rgba(255, 255, 255, 0.08)"
      dark-hover: "rgba(255, 255, 255, 0.20)"
      light-default: "rgba(0, 0, 0, 0.08)"
      light-hover: "rgba(0, 0, 0, 0.18)"
    accent:
      blue: "#3b82f6"
      emerald: "#10b981"
      indigo: "#6366f1"
  typography:
    font-family:
      display: "Space Grotesk, sans-serif"
      body: "Plus Jakarta Sans, sans-serif"
      editorial: "Manrope, sans-serif"
      mono: "Geist Mono, ui-monospace, monospace"
    tracking:
      display-tight: "-0.03em"
      eyebrow-wide: "0.25em"
  radius:
    button: "6px"
    card: "12px"
    tag: "4px"
    pill: "never"
  layout:
    container-max: "1280px"
    section-desktop-min: "100vh"
    section-desktop-reveal: "140vh"
    section-padding-y: "6rem"
---

# Design System Specification — Swiss Editorial
**Author:** Talha Irfan ([@codedits](https://github.com/codedits))

This document defines the formal visual design contract for this repository. All code generators, AI coding agents, and contributors must respect these specifications.

---

## 1. Principles

1. **Objectivity over Decoration:** Interfaces are vehicles for content. Surfaces are neutral, typography is authoritative, and visual ornaments are restricted to functional cues.
2. **Strict Geometry:** Border radii are restrained (6px buttons, 12px cards). Pill buttons (`rounded-full`) are prohibited unless explicitly directed by the user.
3. **High-Contrast Monochromes:** Dominant surfaces rely on deep obsidian (`#0a0a0c`) or slate (`#0b0f17`) with pure white foregrounds. Multicolor rainbow gradients are strictly banned. Single-color atmospheric glows are permitted.
4. **Full-Bleed Architecture:** Sections span edge-to-edge (`w-full min-h-[100dvh]`) with inner content anchored in an executive max-width container (`max-w-7xl px-4 sm:px-6 lg:px-8`).
5. **Accessible by Default:** All text, UI components, and focus states must pass WCAG 2.1 AA standards.

---

## 2. Token Application Matrix

### 2.1 Surfaces & Borders
- **Main Canvas:** `bg-[#0a0a0c]` (Obsidian) or `bg-[#0b0f17]` (Slate).
- **Cards & Modals:** `bg-[#121318]` with 1px border `border-white/10 hover:border-white/20`.
- **Buttons:** 
  - Primary: `bg-white text-black hover:bg-zinc-200 rounded-md` (6px).
  - Secondary: `bg-transparent text-white border border-white/15 hover:bg-white/5 rounded-md` (6px).

### 2.2 Typography Hierarchy
- **Eyebrow:** `[ SECTION NAME ]` — `font-mono text-xs font-bold tracking-[0.25em] uppercase text-zinc-400`.
- **H1 / H2 Titles:** Space Grotesk, negative tracking `tracking-tight` (`-0.03em`), high contrast `text-white`.
- **Body:** Plus Jakarta Sans, relaxed line-height `leading-relaxed`, neutral contrast `text-zinc-300`.

### 2.3 Motion
- Slide-up text reveal on scroll: `opacity: 0, y: 24` → `1, 0`.
- Duration: `0.5s` to `0.6s`, easing cubic bezier `[0.16, 1, 0.3, 1]`.
- Always respect `prefers-reduced-motion`.

---

## 3. Reference Standards
- Accessibility: [references/accessibility-standards.md](./references/accessibility-standards.md)
- Form & Feedback UX: [references/form-and-feedback-ux.md](./references/form-and-feedback-ux.md)
- Section Archetypes: [references/premium-section-benchmarks.md](./references/premium-section-benchmarks.md)
- Motion & Components: [references/framer-design-system.md](./references/framer-design-system.md)
