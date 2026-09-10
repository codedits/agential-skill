# Framer-Inspired Clean Design System & Minimal Roundness

A design specification for AI agents building modern web applications with the visual refinement of award-winning Framer websites, Linear, and Vercel.

---

## 1. Minimal & Refined Roundness (Anti-Pill / Anti-Bubble)

Modern executive and architectural software design strictly avoids bubble-like, over-rounded elements.

| Component | Allowed Radius | Styling Rule | What to AVOID |
| :--- | :--- | :--- | :--- |
| **Buttons & CTAs** | `6px` to `8px` (`rounded-md`) | Clean, sharp, executive precision | ❌ Never use `rounded-full` / `border-radius: 9999px` |
| **Cards & Modals** | `8px` to `12px` (`rounded-lg`) | Subtle corner soften with 1px border | ❌ Never use large 24px+ bubble corners |
| **Badges & Tags** | `4px` to `6px` (`rounded-sm`) | Crisp inline metadata marker | ❌ Never use pill capsules |
| **Inputs & Dropdowns** | `6px` to `8px` | Matches button geometry | ❌ Never use oval inputs |

```css
/* Canonical Framer Button Geometry */
.btn-primary {
  border-radius: 6px; /* NOT 9999px */
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

## 2. Elite Navbars & Hero Blueprint

The Navbar and Hero define 80% of a user's initial impression of your application.

### Elite Navbar Checklist:
- [ ] **Position**: Sticky/fixed at `top: 0`, `z-index: 100`.
- [ ] **Surface**: `backdrop-filter: blur(16px)` with semi-transparent solid background (`rgba(10, 10, 12, 0.8)`).
- [ ] **Divider**: Subtle 1px bottom border (`rgba(255, 255, 255, 0.08)` on dark, `rgba(0, 0, 0, 0.08)` on light).
- [ ] **Links**: Compact, clean sans-serif (`0.9rem`, `font-weight: 500`), subtle color transition on hover.
- [ ] **Action CTA**: Minimal-radius button (`border-radius: 6px`).

### Elite Hero Checklist:
- [ ] **Spacing**: Generous vertical breathing room (`padding: 100px 0 80px`).
- [ ] **Eyebrow Tag**: Compact uppercase announcement badge (`border-radius: 4px`, `letter-spacing: 0.5px`).
- [ ] **Authoritative Headline**: 2.8rem to 4.2rem, `font-weight: 800`, letter-spacing `-1.5px`.
- [ ] **Balanced Subtitle**: Max-width `640px` centered, `font-size: 1.15rem`, muted secondary color.
- [ ] **Dual CTA Row**: Primary action (`border-radius: 6px`) paired with a subtle ghost/secondary button.
- [ ] **No Gradients by Default**: Solid, high-contrast text and clean solid accents.

---

## 3. Paced Feature Chunks (Anti-Agent Exhaustion)

Never attempt to build an entire multi-page application or dashboard in a single prompt:
1. **Focus on Quality over Quantity**: Build one feature chunk to world-class standards (e.g. *Navbar + Hero*).
2. **Review & Verify**: Inspect all closing tags, styles, and interactions.
3. **Stop & Align**: Present the completed chunk to the user, gather feedback, and confirm the direction before implementing subsequent sections.

---

## 4. Solid Color Archetypes (No Gradients)

| Aesthetic | Background | Card Surface | Border (1px) | Primary Text | Accent Color |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Obsidian Minimal (Dark)** | `#0a0a0c` | `#121318` | `rgba(255,255,255,0.08)` | `#f8fafc` | `#3b82f6` (Electric Blue) |
| **Slate Engineering (Dark)**| `#0b0f17` | `#111827` | `rgba(255,255,255,0.07)` | `#f1f5f9` | `#10b981` (Emerald) |
| **Pure Studio (Light)**      | `#ffffff` | `#f8fafc` | `rgba(0,0,0,0.08)`       | `#0f172a` | `#2563eb` (Royal Blue) |
| **Warm Editorial (Light)**   | `#faf9f5` | `#f3f1ea` | `rgba(0,0,0,0.06)`       | `#1c1917` | `#0284c7` (Deep Sky) |

---

## 5. Approved Clean Typography Stack

- **`Plus Jakarta Sans`**: Default modern SaaS & tech.
- **`Manrope`**: Geometric luxury & agency styling.
- **`Poppins`**: Rounded, approachable, and balanced.
- **`Inter` / `Geist`**: Dashboard precision & clean interface typography.
- *Strictly avoid comic, handwriting, grunge, pixel, or decorative display fonts.*

---

## 6. Section Architecture & Premium Viewport Scale (100vh – 140vh Desktop, Fluid Mobile)

Top-tier Framer, Apple, Linear, and Stripe web applications do not build cramped, shallow 400px boxes. They structure experiences into distinct, storytelling sections with deliberate vertical scale, generous negative space, and signature interactive components.

### 1. The "One Signature Component Per Section" Law
Every section must center around a single, high-craft visual or interactive component:
- **Hero Section**: Authoritative typography + interactive product preview canvas or terminal preview.
- **Sticky Feature Showcase**: Multi-step feature reveal locking in place while stage cards transition.
- **Bento Matrix**: Asymmetric high-contrast bento grid (`8px–12px` radius) showcasing features with live indicators.
- **Interactive Proof / Metrics**: High-impact counter cards with live telemetry or architectural comparison matrix.
- **Conversion CTA**: Focused, high-contrast banner with minimal-radius primary action and zero visual clutter.

### 2. Viewport Height Matrix

| Section Type | Desktop / PC Height | Mobile (<768px) Height | Purpose & Behavior |
| :--- | :--- | :--- | :--- |
| **Hero Stage** | `min-height: 100vh` (or `100dvh`) | `min-height: 100svh` or `auto` | Full-screen immersive entry with navbar offset |
| **Sticky Feature Reveal** | `min-height: 120vh` – `140vh` | `min-height: auto` | Allows sticky element to pin while narrative scrolls through |
| **Bento Grid / Ecosystem** | `min-height: 100vh` – `130vh` | `min-height: auto` | Expansive breathing room for multi-card grid systems |
| **Live Metrics & Proof** | `min-height: 80vh` – `100vh` | `min-height: auto` | Architectural stat cards with generous vertical margins |
| **Final Conversion CTA** | `min-height: 80vh` – `100vh` | `min-height: auto` | Clean closing statement with no bottom distraction |

### 3. Responsive Implementation Blueprint

#### CSS Implementation:
```css
/* Section Base with Extended Desktop Scale */
.section-showcase {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 24px;
  
  /* Desktop Scale: 120vh - 140vh for sticky reveals */
  min-height: 130vh;
}

/* Sticky Stage Inside Extended Section */
.sticky-stage-container {
  position: sticky;
  top: 120px;
  height: 80vh;
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
}

/* Mobile Adaptation: NEVER enforce 130vh on phone screens */
@media (max-width: 768px) {
  .section-showcase {
    min-height: auto; /* Fluid height, no awkward empty scroll */
    padding: 80px 16px;
  }
  
  .sticky-stage-container {
    position: static;
    height: auto;
    flex-direction: column;
  }
}
```

#### Tailwind CSS Utility Pattern:
```html
<!-- Section with 130vh desktop immersion and fluid mobile stacking -->
<section class="relative w-full min-h-auto md:min-h-[130vh] py-20 md:py-32 flex flex-col items-center justify-center">
  <div class="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
    <!-- Signature Component (e.g. Bento Grid or Interactive Canvas) -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
      <!-- High-craft cards with 8px-12px radius -->
      <div class="md:col-span-8 rounded-lg border border-white/10 bg-[#121318] p-8">
        ...
      </div>
      <div class="md:col-span-4 rounded-lg border border-white/10 bg-[#121318] p-8">
        ...
      </div>
    </div>
  </div>
</section>
```

### 4. Mobile Responsiveness Best Practices
1. **Never use fixed heights (`height: 130vh`)**: Always use `min-height` with media query overrides so content is never clipped.
2. **Prevent Viewport Trapping**: Avoid nested sticky containers that hijack swipe gestures on iOS Safari / Android Chrome.
3. **Use Dynamic Viewport Units on Mobile**: When full-height is required on mobile (e.g., hero or mobile drawer), use `100svh` or `100dvh` to avoid browser toolbar jumps.
4. **Fluid Spacing**: Use responsive vertical padding (`py-20 md:py-32`) to maintain architectural rhythm across all screen widths.

---

*Visual Benchmark Reference Guide: For exact screenshots, archetypes, and architectural breakdowns of all 9 high-end section patterns, consult [references/premium-section-benchmarks.md](./premium-section-benchmarks.md).*

