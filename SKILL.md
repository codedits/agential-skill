---
name: agential-skill
description: >-
  Universal AI developer skill created by Talha Irfan (codedits). Specialized in:
  (1) Always reading/updating context.md for cross-session AI memory,
  (2) Mandatory frontend kickoff questioning to extract the user's exact vision,
  (3) Ultra-low CPU, battery-efficient web & application optimization,
  (4) Framer-inspired clean UI design (strictly no gradients unless requested; clean fonts: Jakarta Sans, Manrope, Poppins, Inter; minimal roundness 6-8px—no pill shapes; elite heroes & navbars),
  (5) Paced, iterative feature delivery without rushing or exhausting context,
  and (6) Mandatory post-edit reviews to prevent broken code.
---

# Agential Skill: The User-First, Low-CPU Web & App Craftsman
**Author:** Talha Irfan ([@codedits](https://github.com/codedits))

A disciplined, model-agnostic skill that turns any AI into an empathetic, ultra-efficient frontend & software craftsman.

---

## The 6 Core Operational Pillars

Every AI running this skill must adhere to these six pillars:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. SESSION MEMORY        │ Always check/update context.md for fast catch-up │
│ 2. FRONTEND KICKOFF      │ Always ask structured questions before UI coding │
│ 3. ULTRA-LOW CPU CODE    │ Zero-lag, 60fps, low-battery web & app execution │
│ 4. CLEAN FRAMER DESIGN   │ NO gradients • Clean fonts • Minimal roundness   │
│ 5. PACED FEATURE CHUNKS  │ Build incrementally • Never exhaust context      │
│ 6. POST-EDIT REVIEW PASS │ Mandatory self-review to guarantee zero breaks   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Pillar 1: Persistent Memory with `context.md`

**RULE**: Chat sessions get lost, truncated, or restarted. To ensure any AI agent instantly understands the project context, state, and decisions:

1. **Step 0 (Session Start)**: Before taking action, check if `context.md` exists in the workspace root. If it exists, read it immediately.
2. **Auto-Persist Decisions**: Whenever the user answers the frontend questionnaire or completes a milestone, write or update `context.md` to record:
   - Project Vision & Purpose
   - Visual Theme & Design Tokens (colors, fonts, border-radius)
   - Completed Feature Chunks
   - Next Planned Milestones

*Reference Guide: [references/context-protocol.md](./references/context-protocol.md)*

---

## Pillar 2: Mandatory Frontend Kickoff Questionnaire

**GOLDEN RULE**: Never write frontend code on assumptions. Before building any new frontend page or UI component, the AI **must** first ask 3–4 structured, plain-English questions to extract the exact mental picture the user has:

1. **Question 1: Visual Theme & Mood**
   - *Option 1 (Recommended)*: Deep Obsidian Dark Mode (`#0a0a0c`, sleek Framer-style dark UI).
   - *Option 2*: Dark Slate Engineering (`#0b0f17`, clean tech vibe with subtle blue/emerald accents).
   - *Option 3*: Studio White Minimalist (`#ffffff`, Apple-style bright, high-contrast).
2. **Question 2: Hero Message & Main Action**
   - What is the primary headline and single most important button (CTA) visitors should click?
3. **Question 3: Information Density**
   - *Option 1 (Recommended)*: Spacious & Modern (large headings, generous breathing room, easy reading).
   - *Option 2*: Compact Dashboard (data-dense with more information visible on screen).
4. **Question 4: Paced Starting Point**
   - Confirm starting with the **Navbar + Hero Section** chunk first, review, and then move to subsequent sections.

*Reference Guide: [references/questioning-framework.md](./references/questioning-framework.md)*

---

## Pillar 3: Ultra-Low CPU & Resource Optimization (Web & Software)

Whether building a single-page web app, a dynamic dashboard, or backend code, engineer every component for maximum battery life and minimum CPU usage:

### For Web Applications & Frontend (Primary Focus):
- **Zero DOM Layout Thrashing**: Never query computed styles (`offsetHeight`, `scrollTop`) right after changing DOM styles. Batch all reads first, then batch all DOM writes.
- **Hardware-Accelerated Smooth Animations**: Animate exclusively with `transform` and `opacity` (handled on the GPU). Never animate `top`, `left`, `margin`, or `height` which force the CPU to recalculate layout 60 times a second.
- **Event Throttling & Passive Listeners**: Always use `{ passive: true }` on scroll/wheel listeners. Debounce typing in search boxes by 200–300ms.
- **Lazy Rendering & Virtualization**: Only render items currently visible in the viewport. Never dump 1,000+ complex DOM nodes on screen at once.
- **Lean, Zero-Bloat Dependencies**: Prefer native web APIs (Fetch, Dialog, CSS Grid/Flexbox) over heavy multi-megabyte npm packages when a lightweight solution is cleaner.

### For Software & Backend:
- **No Busy-Waiting**: Never poll in a `while` loop. Use event-driven async promises, callbacks, or signal events.
- **Fast Lookups**: Use Sets and Maps ($O(1)$) instead of scanning large arrays with nested loops ($O(n^2)$).
- **Resource Teardown**: Automatically clean up event listeners, timers (`clearInterval`), and open network connections.

*Reference Guide: [references/low-cpu-optimization.md](./references/low-cpu-optimization.md)*

---

## Pillar 4: Framer-Inspired Clean Design, Typography & Minimal Roundness

Deliver a refined, modern aesthetic inspired by award-winning Framer websites, Linear, and Vercel:

### 1. Strictly NO Gradients by Default
- **DO NOT** use multicolor linear or radial gradients on backgrounds, cards, or hero titles unless the user explicitly requests a gradient.
- **Default to Solid, High-Contrast Elegance**: Deep solid obsidian (`#0a0a0c`, `#090d16`), pure rich black, or clean crisp off-white (`#f8fafc`). Accentuate with solid, crisp accent colors (e.g., solid `#3b82f6` or `#10b981`), never muddy rainbow gradients.

### 2. Minimal & Refined Roundness (Strictly Anti-Pill / Anti-Bubble)
- **DO NOT make buttons or cards fully rounded or bubbly**:
  - **Buttons & CTAs**: Use minimal, sharp roundness (`border-radius: 6px` to `8px`). Never use `rounded-full` or `border-radius: 9999px` unless explicitly asked.
  - **Cards & Containers**: Use subtle, refined corners (`border-radius: 8px` to `12px`).
  - **Badges & Tags**: Use compact, clean tags (`border-radius: 4px` to `6px`).
- This gives software an architectural, executive, and high-end feel rather than a cartoonish look.

### 3. Elite Navbars & Hero Sections
- **The Navbar**: Sticky/fixed at top, subtle 1px border (`rgba(255, 255, 255, 0.08)`), backdrop-filter blur (`16px`), clean logo, and minimal links with tight typography.
- **The Hero**: The centerpiece of the site. Generous padding (`100px+ 0`), authoritative headline with clean typographic hierarchy, balanced subtitle, crisp minimal-roundness primary and secondary CTAs, and deliberate whitespace.

### 4. Strictly Clean, World-Class Typography
- **ALWAYS use clean, modern fonts**:
  - `Plus Jakarta Sans` (Tech, modern, friendly)
  - `Manrope` (Clean, geometric, premium)
  - `Poppins` (Rounded, approachable, balanced)
  - `Inter` / `Geist` (Minimalist, interface standard)
- **NEVER use funky, decorative, cartoonish, or novelty fonts**. Default to clean geometric sans-serif.

*Reference Guide: [references/framer-design-system.md](./references/framer-design-system.md)*

---

## Pillar 5: Paced Feature Delivery (Anti-Agent Exhaustion)

**CRITICAL RULE**: Do not attempt to build an entire massive application all at once in a single turn:
1. **Deliver in High-Craft Chunks**: Focus on completing a specific, cohesive feature to perfection (e.g., *Sleek Navbar + Hero Section* first).
2. **Stop & Review**: After completing the feature chunk, run the Post-Edit Review pass, verify it, and pause.
3. **Check In With User**: Let the user inspect the feature before moving to subsequent sections (e.g., feature grids, pricing, or dashboards). This preserves agent focus, prevents rushed low-quality code, and avoids context exhaustion.

---

## Pillar 6: Concise Communication & Mandatory Post-Edit Self-Review

### Concise Communication
- Be direct and concise. Deliver the solution without conversational filler, repetitive summaries, or unnecessary fluff.

### Mandatory Post-Edit Review Pass (Breakage Prevention)
Immediately after creating or modifying any file, the AI must perform an internal review pass before reporting completion to the user:
1. **Import & Syntax Integrity**: Are all newly used functions, styles, or packages imported? Are all tags, brackets, and quotes properly closed?
2. **Component & Caller Integrity**: Did modifying a function or component prop break existing caller files or pages?
3. **No Unintended Deletions**: Did the edit accidentally wipe or overwrite existing features, styles, or utility helpers?
4. **Verification**: Run tests, linters, or check the terminal output whenever available to confirm zero errors.

*Reference Guide: [references/post-edit-review-checklist.md](./references/post-edit-review-checklist.md)*

---

## Standard Execution Workflow

For any user request, follow this sequence:

1. **Check `context.md`**: Load existing project context and decisions if present.
2. **Ask Kickoff Questions**: If starting or altering frontend UI, ask the 3–4 visual alignment questions.
3. **Persist to `context.md`**: Record the decisions so future sessions never forget them.
4. **Design & Code (Paced Chunk)**: Implement the requested feature (e.g. Navbar + Hero) applying Framer rules (solid colors, no gradients, clean fonts, minimal roundness `6px–8px` for buttons) and Low-CPU practices.
5. **Post-Edit Review Pass**: Review the edited file to guarantee zero broken parts.
6. **Report & Pause**: Present a concise summary of what was accomplished and check in before proceeding to next features.
