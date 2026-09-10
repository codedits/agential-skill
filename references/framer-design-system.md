# Framer-Inspired Clean Design System & Typography Rules

A design specification for AI agents building modern web applications with the visual refinement of award-winning Framer sites, Linear, and Vercel.

---

## 1. The Strict "No Gradients by Default" Rule

- **DO NOT** splash multicolor gradients across titles, buttons, or backgrounds by default.
- Modern luxury design relies on **subtle contrast, crisp solid colors, and intentional whitespace**, not loud rainbow text.
- **When are gradients allowed?** Exclusively when the user explicitly requests one (e.g. *"Use a sunset gradient for my hero"*).

### Approved Solid Color Archetypes

| Aesthetic | Background | Card Surface | Border (1px) | Primary Text | Accent Color |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Obsidian Minimal (Dark)** | `#0a0a0c` | `#121318` | `rgba(255,255,255,0.08)` | `#f8fafc` | `#3b82f6` (Electric Blue) |
| **Slate Engineering (Dark)**| `#0b0f17` | `#111827` | `rgba(255,255,255,0.07)` | `#f1f5f9` | `#10b981` (Emerald) |
| **Pure Studio (Light)**      | `#ffffff` | `#f8fafc` | `rgba(0,0,0,0.08)`       | `#0f172a` | `#2563eb` (Royal Blue) |
| **Warm Editorial (Light)**   | `#faf9f5` | `#f3f1ea` | `rgba(0,0,0,0.06)`       | `#1c1917` | `#0284c7` (Deep Sky) |

---

## 2. Approved Typography Stack

Never use quirky, novelty, decorative, or cartoonish display fonts. Always load clean, modern geometric sans-serif typefaces from Google Fonts:

### 1. `Plus Jakarta Sans` (Default Modern Tech)
- Clean, balanced, approachable with exceptional legibility across all weights.
- Perfect for SaaS, developer tools, and product landings.

### 2. `Manrope` (Geometric Elegance)
- Modern semi-condensed grotesque styling.
- Gives a premium, bespoke feel reminiscent of high-end design agencies.

### 3. `Poppins` (Rounded & Friendly)
- Geometric curves with open counters.
- Great for consumer apps, communities, and creative portfolios.

### 4. `Inter` & `Geist` (Standard Precision)
- The industry benchmark for dashboards, data-dense UIs, and complex web apps.

---

## 3. Questioning Technique: Extracting the User's Mental Picture

When a user asks for a website, dashboard, or component without visual specifications, ask 2–3 targeted questions to reveal what they picture in their mind:

> **Question 1: Visual Theme**
> What visual style do you picture for this project?
> - **Option 1 (Recommended)**: Deep Obsidian Dark Mode (sleek, Framer-style dark UI with subtle borders).
> - **Option 2**: Clean Minimalist White (Apple-style bright, spacious, high-contrast).
> - **Option 3**: Dark Slate Engineering (clean tech vibe with emerald or electric blue accents).
>
> **Question 2: Information Density**
> How would you like the content laid out?
> - **Option 1 (Recommended)**: Spacious & Modern (large headings, generous padding, easy reading).
> - **Option 2**: Compact Dashboard (shows more data and options on screen at once).

---

## 4. Key Framer Layout Principles

- **Subtle 1px Borders**: Define hierarchy with fine borders (`1px solid rgba(255, 255, 255, 0.08)`) instead of heavy box shadows.
- **Generous Padding**: Give elements breathing room (e.g. `padding: 28px 32px` on cards, `padding: 100px 0` on hero sections).
- **Crisp Typographic Hierarchy**: Large headline (`2.5rem - 4rem`, `font-weight: 800`), muted subtitle (`1.1rem`, `var(--text-muted)`), and compact uppercase eyebrow tags (`0.8rem`, `letter-spacing: 1px`).
