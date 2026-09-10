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
