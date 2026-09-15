# Design System Reference

A complete design specification for AI agents building web applications. Defines every visual and interactive standard.

---

## 1. Border Radius

| Component | Radius | Tailwind | Avoid |
|:---|:---|:---|:---|
| Buttons & CTAs | 6–8 px | `rounded-md` | `rounded-full` / `9999px` |
| Cards & modals | 8–12 px | `rounded-lg` / `rounded-xl` | Bubble corners (24px+) |
| Badges & tags | 4–6 px | `rounded-sm` | Pill capsules |
| Inputs | 6–8 px | `rounded-md` / `rounded-lg` | Oval inputs |

```css
.btn-primary {
  border-radius: 6px;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 0.92rem;
  background: var(--accent-blue);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.15s ease, background-color 0.15s ease;
}

.btn-primary:hover {
  transform: translateY(-1px);
}
```

---

## 2. Navbar & Hero

### Navbar Checklist
- Position: sticky/fixed at `top: 0`, `z-index: 100`.
- Surface: `backdrop-filter: blur(16px)` with semi-transparent background (`rgba(10, 10, 12, 0.8)`).
- Divider: 1px bottom border (`rgba(255, 255, 255, 0.08)` dark / `rgba(0, 0, 0, 0.08)` light).
- Links: `0.9rem`, `font-weight: 500`, subtle hover transition.
- CTA: `border-radius: 6px`.

### Hero Checklist
- Spacing: generous vertical padding (`padding: 100px 0 80px`).
- Eyebrow tag: compact uppercase badge (`border-radius: 4px`, `letter-spacing: 0.5px`).
- Headline: 2.8–4.2rem, `font-weight: 800`, `letter-spacing: -1.5px`.
- Subtitle: `max-width: 640px`, centered, `font-size: 1.15rem`, muted color.
- CTA row: primary action (`border-radius: 6px`) paired with ghost secondary button.
- **Centerpiece required.** Always anchor the hero with an application window mockup, interactive canvas, or terminal preview.

```html
<!-- Application window centerpiece -->
<div class="relative mx-auto mt-12 w-full max-w-5xl rounded-xl border border-white/10 bg-[#121318] p-2 shadow-2xl shadow-blue-500/5">
  <div class="flex items-center justify-between border-b border-white/5 px-4 py-3">
    <div class="flex space-x-2">
      <div class="h-3 w-3 rounded-full bg-red-500/80"></div>
      <div class="h-3 w-3 rounded-full bg-yellow-500/80"></div>
      <div class="h-3 w-3 rounded-full bg-green-500/80"></div>
    </div>
    <div class="text-xs font-mono text-zinc-500">app.example.dev/dashboard</div>
    <div class="w-12"></div>
  </div>
  <div class="rounded-lg bg-[#0a0a0c] p-6">
    <!-- Functional UI preview -->
  </div>
</div>
```

---

## 3. Incremental Delivery

Build one chunk to a high standard (e.g. navbar + hero), review and verify, then pause and check in with the user before continuing.

---

## 4. Color System

**Banned:** Multicolor rainbow gradients on any surface.
**Allowed:** Monochromatic ambient glows and radial spotlights for atmospheric depth.

| Surface | Background | Card | Border (1px) | Text | Accent |
|:---|:---|:---|:---|:---|:---|
| Obsidian Dark | `#0a0a0c` | `#121318` | `rgba(255,255,255,0.08)` | `#f8fafc` | `#3b82f6` |
| Slate Dark | `#0b0f17` | `#111827` | `rgba(255,255,255,0.07)` | `#f1f5f9` | `#10b981` |
| Studio Light | `#ffffff` | `#f8fafc` | `rgba(0,0,0,0.08)` | `#0f172a` | `#2563eb` |
| Warm Editorial | `#faf9f5` | `#f3f1ea` | `rgba(0,0,0,0.06)` | `#1c1917` | `#0284c7` |

### Dual-Theme & Scoped Dark Sections

```css
:root {
  --background: #f7f7f7;
  --foreground: #0a0a0a;
  --card: #ffffff;
  --muted: #eeeeee;
  --muted-foreground: #6b6b6b;
}

.dark {
  --background: #000000;
  --foreground: #f7f7f7;
  --card: #141414;
  --muted: #121212;
  --muted-foreground: #8a8a8a;
}

.section-dark {
  background-color: #000000 !important;
  color: #f7f7f7 !important;
}

::selection {
  background-color: var(--foreground);
  color: var(--background);
}
```

---

## 5. Typography

### Font Pairings

| Role | Font | Characteristics |
|:---|:---|:---|
| Display / hero / large numerals | Space Grotesk | Negative tracking (`-0.04em` to `-0.02em`) |
| Body / interface | Plus Jakarta Sans | Humanist grotesque, relaxed leading |
| Geometric luxury | Manrope | Agency and portfolio contexts |
| Dashboard precision | Inter / Geist | Data-dense, minimalist interfaces |

Never use decorative, cartoonish, or novelty fonts.

### Section Eyebrows (Bracket Standard)

```tsx
<span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-zinc-400">
  [ OUR PROCESS ]
</span>
```

- Uppercase, monospace or sans with wide tracking (`tracking-[0.2em]` to `tracking-[0.25em]`).
- Muted tone: `text-zinc-400`, `text-muted-foreground`, or subtle accent.

---

## 6. Section Architecture

### One Signature Component Per Section

Every section centers around a single high-craft visual or interactive component:

- **Hero stage:** Full-bleed viewport canvas with centerpiece mockup.
- **Sticky feature showcase:** Multi-step reveal that pins while content scrolls.
- **Bento matrix:** Asymmetric grid with functional micro-interfaces.
- **Proof / metrics:** Counter cards with live telemetry.
- **Conversion CTA:** High-contrast banner with single action.

### Full-Bleed Layout Rules

- Hero wrapper: `w-full min-h-[100dvh]`. Never place inside a boxed container.
- Ambient spotlights, grids, and dividers span 100% viewport width.
- Inner content: `w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Padding: `pt-32 pb-20 md:pt-40 md:pb-28`.

### Viewport Height Matrix

| Section | Desktop | Mobile | Purpose |
|:---|:---|:---|:---|
| Hero | `min-height: 100vh` / `100dvh` | `100svh` / `auto` | Full-screen entry |
| Sticky feature reveal | `min-height: 120–140vh` | `auto` | Sticky pin while cards scroll |
| Bento grid | `min-height: 100–130vh` | `auto` | Breathing room for grids |
| Metrics | `min-height: 80–100vh` | `auto` | Stat cards with vertical margin |
| Final CTA | `min-height: 80–100vh` | `auto` | Clean closing statement |

### Responsive Rules

```css
.section-showcase {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 24px;
  min-height: 130vh;
}

.sticky-stage-container {
  position: sticky;
  top: 120px;
  height: 80vh;
  width: 100%;
  max-width: 1200px;
}

@media (max-width: 768px) {
  .section-showcase {
    min-height: auto;
    padding: 80px 16px;
  }
  .sticky-stage-container {
    position: static;
    height: auto;
  }
}
```

### Asymmetric Bento Grid Blueprint

Never generate identical card rows. Use varied column spans with functional content:

```html
<section class="relative w-full min-h-auto md:min-h-[130vh] py-20 md:py-32 flex flex-col items-center justify-center">
  <div class="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
      <!-- 8-column showcase card -->
      <div class="md:col-span-8 rounded-xl border border-white/10 bg-[#121318] p-8 transition-colors hover:border-white/20">
        <div class="flex items-center justify-between border-b border-white/5 pb-4">
          <span class="text-xs font-mono uppercase tracking-widest text-zinc-400">[ 01 // ARCHITECTURE ]</span>
          <span class="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Active
          </span>
        </div>
        <h3 class="mt-4 text-2xl font-bold tracking-tight text-white">Feature Title</h3>
        <p class="mt-2 text-sm text-zinc-400">Description of the feature with real content.</p>
        <div class="mt-6 rounded-lg border border-white/5 bg-[#0a0a0c] p-4">
          <!-- Functional micro-interface -->
        </div>
      </div>

      <!-- 4-column metrics card -->
      <div class="md:col-span-4 rounded-xl border border-white/10 bg-[#121318] p-8 flex flex-col justify-between transition-colors hover:border-white/20">
        <div>
          <span class="text-xs font-mono uppercase tracking-widest text-zinc-400">[ 02 // METRICS ]</span>
          <div class="mt-6 text-5xl font-extrabold tracking-tight text-white">99.98%</div>
          <p class="mt-2 text-sm text-zinc-400">Metric description.</p>
        </div>
        <div class="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500">
          <span>Label</span>
          <span class="font-mono text-zinc-300">12ms</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Card Standard

Cards must be architectural and tactile:

- **Border:** `border border-white/10 hover:border-white/25` (dark).
- **Surface:** `bg-[#121318]` with `bg-gradient-to-b from-white/[0.03] to-transparent`.
- **Corners:** `rounded-xl` (12px).
- **Hover:** `transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-2xl hover:shadow-blue-500/5`.
- **Inner hierarchy:** Bracketed tag → display title → body text → footer/telemetry row.

### Interactivity

All rendered UI controls must have working client-side state. Tabs must switch views. Search must filter. Copy buttons must write to clipboard. Modals must toggle.

### Mobile Responsiveness

- Never enforce 130–140vh on mobile. Use `min-height: auto`.
- Always use `min-height`, never fixed `height`.
- Stack to single-column on `<768px`.
- Use `100svh` / `100dvh` for full-height mobile sections.
- Use responsive padding (`py-20 md:py-32`).

### Sticky Card Stacking

For project showcases and feature timelines:

- Offset formula: `top: ${70 + index * 32}px`.
- Depth: preceding cards scale to `0.94` and dim to `brightness(0.55)`.
- Mobile override (`<768px`): `position: static`, `transform: none`.

---

## 7. Micro-Interactions

### Rolling Links

Dual-text stack where the active label slides up (`-translate-y-full`) and a duplicate rolls in from below. Duration `300ms`, easing `cubic-bezier(0.65, 0, 0.35, 1)`. Wrap the duplicate with `aria-hidden="true"`.

### Fluid Button Fill

Dual-wave SVG path rising from bottom to top on hover. Easing `cubic-bezier(0.215, 0.61, 0.355, 1)` with staggered wave delays. Foreground text inverts on fill.

### Magnetic Cursor

Elements attract toward cursor within a radius using spring physics. Elastic snap-back on mouse leave. **Disabled on mobile (`<768px`) and when `prefers-reduced-motion` is active.**

### Media Handling

- Inspect URL extensions to switch between `<Image>` and `<video>`.
- Throttle off-screen video with `IntersectionObserver` (`rootMargin: "400px"`).
- Image quality: only `[70, 80, 85, 90]`. Never `100`.
- Mark hero visuals with `priority` loading.

---

## 8. Motion

### Framer Motion (React / Next.js)

```tsx
// Slide-up headline reveal
<motion.div
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
>
  <h1 className="text-5xl font-extrabold tracking-tight">Headline</h1>
</motion.div>

// Scroll-triggered staggered grid
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
  variants={{
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }}
>
  {cards.map((card) => (
    <motion.div
      key={card.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
      }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
    />
  ))}
</motion.div>
```

### Vanilla CSS Fallback

```css
:root {
  --ease-framer: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-reveal: 600ms;
}

.animate-slide-up {
  opacity: 0;
  transform: translateY(24px);
  animation: slideUp var(--duration-reveal) var(--ease-framer) forwards;
}

@keyframes slideUp {
  to { opacity: 1; transform: translateY(0); }
}

.delay-1 { animation-delay: 80ms; }
.delay-2 { animation-delay: 160ms; }
.delay-3 { animation-delay: 240ms; }

.btn-primary:active { transform: scale(0.98); }

.btn-primary:focus-visible,
input:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.25);
  outline-offset: 2px;
}
```

---

## 9. Tailwind CSS Configuration

### v4 (CSS-First)

```css
@import "tailwindcss";

@theme {
  --font-display: "Space Grotesk", sans-serif;
  --font-sans: "Plus Jakarta Sans", sans-serif;
  --color-obsidian: #0a0a0c;
  --color-obsidian-card: #121318;
  --color-slate-tech: #0b0f17;
  --color-slate-card: #111827;
  --radius-btn: 6px;
  --radius-card: 12px;
  --radius-tag: 4px;
}
```

### v3 (Config-First)

```ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
        sans: ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        obsidian: { DEFAULT: '#0a0a0c', card: '#121318' },
        slateTech: { DEFAULT: '#0b0f17', card: '#111827' },
      },
      borderRadius: { btn: '6px', card: '12px', tag: '4px' },
    },
  },
  plugins: [],
};
export default config;
```

### Utility Patterns

- Full-bleed hero: `w-full min-h-[100dvh] relative overflow-hidden bg-[#0a0a0c] pt-32 pb-20`
- Executive container: `w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Button: `rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-zinc-200 active:scale-[0.98] transition-all`
- Bento card: `col-span-12 md:col-span-8 rounded-xl border border-white/10 bg-[#121318] p-8 hover:border-white/20 transition-colors`
- Bracket tag: `text-xs font-mono font-bold tracking-[0.25em] uppercase text-zinc-400`

---

*Visual reference catalogue: [premium-section-benchmarks.md](./premium-section-benchmarks.md)*
