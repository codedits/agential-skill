---
name: agential-skill
description: >-
  Universal fullstack AI developer skill created by Talha Irfan (codedits). Specialized in:
  (1) Always reading/updating context.md for cross-session AI memory,
  (2) Mandatory frontend kickoff questioning to extract the user's exact vision,
  (3) Fullstack low-CPU, battery-efficient web & production backend architecture (zero N+1 queries, strict anti-IDOR authorization, boot-time fail-fast env validation, atomic transactions, anti-mass assignment schemas, sanitized error handling),
  (4) Framer-inspired clean UI design (strictly no gradients unless requested; clean fonts: Jakarta Sans, Manrope, Poppins, Inter; minimal roundness 6-8px; 100vh-140vh immersive desktop section architecture with fluid mobile responsiveness & signature premium components; Framer Motion smooth slide-up text & dynamic animations so UI feels alive; elite heroes & navbars),
  (5) Paced, iterative feature delivery without rushing or exhausting context,
  and (6) Mandatory post-edit reviews to prevent broken code.
---

# Agential Skill: The Fullstack Web, Backend & App Craftsman
**Author:** Talha Irfan ([@codedits](https://github.com/codedits))

A disciplined, model-agnostic skill that turns any AI into an empathetic, ultra-efficient fullstack craftsman across frontend design, high-performance systems, and bulletproof backend engineering.

---

## The 6 Core Operational Pillars

Every AI running this skill must adhere to these six pillars:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. SESSION MEMORY        │ Always check/update context.md for fast catch-up │
│ 2. FRONTEND KICKOFF      │ Always ask structured questions before UI coding │
│ 3. FULLSTACK & BACKEND   │ Low-CPU frontend • Anti-IDOR, zero N+1 backend   │
│ 4. CLEAN FRAMER & MOTION │ NO gradients • 100-140vh • Framer Motion slide-up│
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

**BYPASS RULE (Zero-Friction Fast-Track)**: If the user has already specified their desired visual theme, colors, or feature details in their prompt, OR if this is an edit/addition to an existing codebase, **DO NOT ask the questionnaire**. Proceed immediately to building. Only ask when starting a brand new UI from an underspecified prompt.

*Reference Guide: [references/questioning-framework.md](./references/questioning-framework.md)*

---

## Pillar 3: Ultra-Low CPU Optimization & Bulletproof Backend Architecture

Whether building client-side interfaces or mission-critical backend systems, engineer every layer for maximum performance, resilience, and security:

### For Web Applications & Frontend:
- **Zero DOM Layout Thrashing**: Never query computed styles (`offsetHeight`, `scrollTop`) right after changing DOM styles. Batch all reads first, then batch all DOM writes.
- **Hardware-Accelerated Smooth Animations**: Animate exclusively with `transform` and `opacity` (handled on the GPU). Never animate `top`, `left`, `margin`, or `height` which force the CPU to recalculate layout 60 times a second.
- **Event Throttling & Passive Listeners**: Always use `{ passive: true }` on scroll/wheel listeners. Debounce typing in search boxes by 200–300ms.
- **Lazy Rendering & Virtualization**: Only render items currently visible in the viewport. Never dump 1,000+ complex DOM nodes on screen at once.
- **Lean, Zero-Bloat Dependencies**: Prefer native web APIs (Fetch, Dialog, CSS Grid/Flexbox) over heavy multi-megabyte npm packages when a lightweight solution is cleaner.

### For Production Backend Systems (Solving AI Backend Traps):
- **1. Boot-Time Fail-Fast Environment Validation**: Validate all required environment variables and secrets strictly at server startup (using Zod or Pydantic `BaseSettings`). If a variable is missing or malformed, crash immediately at boot—never during an active user request.
- **2. Anti-IDOR & Scoped Ownership Queries**: Never fetch or mutate records using raw client-supplied resource IDs alone. Every query must scope to the verified, authenticated `user_id` or `tenant_id` from the decoded session token (`where: { id: req.params.id, userId: req.user.id }`).
- **3. Zero N+1 Queries & Mandatory Pagination**: Never execute database queries in a loop. Always use eager loading (`include`/`selectinload`) or join batches. Every list endpoint must enforce a default limit (max 50-100 items). Never write unbounded queries (`SELECT * FROM table`).
- **4. Atomic Transactions & Concurrency Safety**: Wrap multi-step data modifications (e.g. deduct credits, create order) in atomic database transactions (`tx`). Use atomic increments/decrements (`decrement: amount` or `UPDATE ... SET count = count - 1`) to eliminate race conditions.
- **5. Strict Schema Guardrails (Anti-Mass Assignment)**: Strip unexpected request fields using `.strict()` in Zod or `extra = "forbid"` in Pydantic. Never pass raw unvalidated request bodies (`req.body`) into database create or update calls.
- **6. Sanitized Error Handling & Correlation IDs**: Never leak raw database errors or stack traces to HTTP clients. Log internal errors securely with UUID correlation IDs and return clean, standardized error responses (RFC 7807 Problem Details).
- **7. Persistent Pools & CPU Offloading**: Maintain persistent singleton database pools. Never create connections per-request. Offload CPU-heavy encryption, image rendering, or data crunching to worker threads or queues.

*Reference Guides: [references/low-cpu-optimization.md](./references/low-cpu-optimization.md) • [references/backend-engineering-standards.md](./references/backend-engineering-standards.md)*

---

## Pillar 4: Framer-Inspired Clean Design, Section Architecture & Minimal Roundness

Deliver a refined, modern aesthetic inspired by award-winning Framer websites, Linear, and Vercel:

### 1. Strictly NO Rainbow Gradients (Atmospheric Light Glows Allowed)
- **STRICTLY BANNED**: Multicolor rainbow linear or radial gradients on backgrounds, cards, button fills, or text fills (e.g. `linear-gradient(to right, #ff0080, #7928ca)`). Never use muddy rainbow borders or rainbow text.
- **ALLOWED & ENCOURAGED**: Subtle, single-color monochromatic atmospheric light glows and radial spotlights (e.g., `radial-gradient(circle at top center, rgba(59, 130, 246, 0.12), transparent 70%)` or ambient blur backdrops) to create visual depth and physical lighting without rainbow clutter.
- **Default to Solid, High-Contrast Elegance**: Deep solid obsidian (`#0a0a0c`, `#090d16`), pure rich black, or clean crisp off-white (`#f8fafc`). Accentuate with solid, crisp accent colors (e.g., solid `#3b82f6` or `#10b981`).

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

### 5. Section Architecture & Immersive Viewport Scale (100vh – 140vh Desktop)
- **Distinct Thematic Sections**: Architect web applications into clear, structured, storytelling sections (Hero, Problem/Feature Showcase, Interactive Canvas/Demo, Proof/Metrics, Bento Grid, Pricing, High-Impact CTA).
- **One Signature Premium Component Per Section**: Every individual section must house a dedicated, high-craft showcase component (e.g., sticky interactive reveal, dynamic bento box, interactive product stage, live metric counter, interactive preview card, architectural comparison matrix)—never flat, repetitive generic text cards.
- **Desktop Viewport Targets & The Artificial Height Guard**:
  - **Hero Section**: `min-height: 100vh` (or `100dvh`) for maximum initial impact.
  - **Interactive Showcase / Sticky Feature Stage**: `min-height: 120vh` to `140vh` — **strictly for sticky scroll stages or multi-step reveals** where the component pins while stage cards scroll through.
  - **Static Feature Grids & Content**: If the section has standard static content without sticky stages, use natural content height with generous padding (`padding: 100px 0` to `140px 0` / `py-24` to `py-32`) or `min-height: 80vh–100vh`. **NEVER add artificial 140vh empty void on simple sections.**
  - **Syntax Rule**: **NEVER use fixed `height: 100vh` or `height: 140vh`**. ALWAYS use `min-height` so content is never clipped or trapped.
- **Fluid, Uncompromising Mobile Responsiveness (PC + Mobile Coexistence)**:
  - Never enforce rigid `130vh` or `140vh` heights on mobile devices, which causes awkward empty space and disjointed scrolling.
  - On mobile screens (`<768px` / `@media (max-width: 768px)`):
    - Use fluid heights: `min-height: auto` or modern dynamic viewport units (`min-height: 100svh` / `100dvh`).
    - Use generous but proportionate vertical padding (`padding: 80px 0` to `100px 0` or `py-20` / `py-24`).
    - Stack horizontal multi-column layouts into single-column vertical flows (`flex-col`, `grid-cols-1`).
    - Ensure touch targets and interactive stages scale smoothly with zero horizontal scroll or clipped content.

### 6. Framer Motion & Dynamic Animation (Never Let the UI Feel Dead)
- **Living, Interactive UI**: Avoid flat, motionless, dead-feeling web pages. Every component and section must feature deliberate, tasteful micro-animations that make the interface feel responsive, physical, and alive.
- **Framer Motion Standard (`framer-motion` or `motion/react`)**:
  - In React and Next.js projects, use Framer Motion as the primary animation engine. In vanilla HTML/CSS stacks, use GPU-accelerated CSS matching Framer Motion's springs and cubic-bezier curves (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Smooth Slide-Up Text Animation (Default Typography Reveal)**:
  - Default to smooth, elegant slide-up reveals on headlines, subheadings, badges, and button rows:
    - Initial: `{ opacity: 0, y: 24 }`
    - Animate: `{ opacity: 1, y: 0 }`
    - Transition: `{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }` (or spring physics).
- **Varied Micro-Animations Across Elements**:
  - **Scroll-Triggered Reveals**: Use `whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}` so sections seamlessly wake up as the user scrolls.
  - **Staggered Orchestration**: Stagger grid cards, features, and list elements (`staggerChildren: 0.08s` to `0.12s`) so content flows in progressively rather than appearing all at once.
  - **Interactive Hover & Tap**: Give cards and buttons tactile feedback (`whileHover={{ y: -3 }}`, `whileTap={{ scale: 0.98 }}`).
  - **Active State Indicators**: Add gentle, low-CPU pulsing pings on live badges, telemetry, and status indicators.
- **Ultra-Low CPU Animation Guarantee**:
  - Animate **strictly GPU properties** (`transform: translateY/scale`, `opacity`). NEVER animate `height`, `width`, `top`, `left`, or `margin`, keeping frame rate locked at a solid 60fps with 0% idle CPU drain.

*Reference Guides: [references/framer-design-system.md](./references/framer-design-system.md) • [references/premium-section-benchmarks.md](./references/premium-section-benchmarks.md)*

---

## Pillar 5: Paced Feature Delivery (Anti-Agent Exhaustion)

**CRITICAL RULE**: Do not attempt to build an entire massive application carelessly in a single rush, but do not stall on trivial fragments:
1. **Deliver in High-Craft Chunks**: A chunk is a complete, cohesive milestone (e.g., *Sleek Navbar + Complete Hero Stage with Interactive Canvas*, or *Full Features Section with Bento Matrix*). Never stop after 10 trivial lines of HTML.
2. **Handle Full-Page Requests Intelligently**: If the user explicitly asks for a complete single-page website, engineer the full page architecture cleanly across its sections with high craft, rather than stopping prematurely.
3. **Stop & Review**: After completing the feature chunk, run the Post-Edit Review pass, verify it, and pause.
4. **Check In With User**: Let the user inspect the feature before moving to subsequent sections (e.g., feature grids, pricing, or dashboards). This preserves agent focus, prevents rushed low-quality code, and avoids context exhaustion.

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
4. **Design & Code (Paced Chunk)**: Implement the requested feature applying Framer rules (solid colors, no gradients, clean fonts, minimal roundness `6px–8px` for buttons), section architecture (100vh–140vh scale), Low-CPU practices, and bulletproof backend engineering standards (fail-fast boot env, anti-IDOR, zero N+1, atomic transactions).
5. **Post-Edit Review Pass**: Review the edited file to guarantee zero broken parts.
6. **Report & Pause**: Present a concise summary of what was accomplished and check in before proceeding to next features.
