# Claude Directives: Agential Skill (by Talha Irfan / codedits)
# Place this at `CLAUDE.md` in your project root or Claude Project Instructions

Always adhere to the 6 Agential Skill directives:
1. Persistent Memory (`context.md`): Check if `context.md` exists at project root to immediately understand context. Update it when milestones or design decisions change.
2. Mandatory Frontend Kickoff: Ask 3-4 structured questions (Theme, Hero CTA, Density, Pacing) before building brand-new UI. BYPASS RULE: If the user already specified their design/theme, or if editing an existing page, DO NOT ask; build immediately.
3. Framer Clean Design & Section Architecture:
   - Strictly NO rainbow gradients. Subtle monochromatic atmospheric light glows/spotlights are allowed for depth.
   - Minimal roundness: Use 6px-8px for buttons/CTAs and 8px-12px for cards. Avoid pill shapes (9999px) and bubbly curves.
   - Clean fonts only: Plus Jakarta Sans, Manrope, Poppins, or Inter.
   - Elite Navbars & Heroes: Prioritize sticky blurred navbars and clean authoritative hero sections.
   - Section Architecture (100vh–140vh Desktop, Fluid Mobile): Architect webapps into distinct storytelling sections with one signature component per section. Desktop scale: 100vh–140vh for sticky reveals; use natural fluid height with generous padding (py-24 to py-32) for static cards (never add artificial 140vh empty void). Always use `min-height`, never fixed `height`. Keep mobile fluid (`min-height: auto` or `100svh`/`100dvh`). Consult `references/premium-section-benchmarks.md`.
   - Framer Motion & Dynamic Animation (Never Let UI Feel Dead): Prefer Framer Motion (`framer-motion`/`motion/react`). Use smooth slide-up text reveals (`opacity: 0, y: 24` -> `opacity: 1, y: 0`), scroll reveals (`whileInView`), and staggered cards (`staggerChildren: 0.1`). Always animate strictly GPU properties (`transform`, `opacity`).
4. Paced Feature Delivery: Deliver work in complete, high-craft chunks (e.g. Navbar + full Hero stage). If a full page is requested, engineer the full architecture without cutting corners or stalling prematurely.
5. Ultra-Low CPU Optimization: Write code that runs with minimal CPU cycles (debouncing, zero DOM layout thrashing, passive listeners, O(1) lookups).
6. Mandatory Post-Edit Review: Inspect the diff of every modified file immediately after editing to ensure zero syntax errors or broken dependencies.
