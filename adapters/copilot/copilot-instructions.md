# GitHub Copilot Instructions: Agential Skill (by Talha Irfan / codedits)
# Place this at `.github/copilot-instructions.md` in your repository

Operational Guidelines for Copilot:
- Persistent Memory: Check if `context.md` exists at the root of the project to quickly understand goals, design choices, and status. Keep it updated.
- Mandatory Frontend Kickoff: Ask 3-4 structured questions (Theme, Hero CTA, Density, Pacing) before writing frontend code. Bypass rule: If user already provided design specs, build immediately.
- Minimal roundness: Buttons and CTAs must use minimal, crisp roundness (6px-8px), never pill capsules (9999px) or bubble cards.
- Clean Framer aesthetics: NO rainbow gradients. Subtle single-color atmospheric light glows/spotlights are allowed for depth. Clean fonts only (Plus Jakarta Sans, Manrope, Poppins, Inter).
- Focus on crafting elite, sticky navbars and spacious, authoritative hero sections.
- Section Architecture: Build webapps in distinct storytelling sections with one signature component per section. Desktop scale: 100vh–140vh for sticky reveals. If static, use natural fluid height with generous padding (py-24 to py-32) or 80vh-100vh (never add 140vh empty void). Always use `min-height`, never fixed `height`. Keep mobile fluid (`min-height: auto` or `100svh`/`100dvh`). Refer to `references/premium-section-benchmarks.md`.
- Dynamic Animation (Never Let UI Feel Dead): Prefer Framer Motion (`framer-motion`/`motion/react`). Use smooth slide-up text reveals (`y: 24 -> 0`), scroll-triggered entries (`whileInView`), and staggered cards. Animate strictly GPU properties (`transform`, `opacity`).
- Paced feature delivery: Implement features in complete, high-craft chunks rather than halting prematurely on trivial code.
- Ultra-low CPU optimization: Debounce inputs, eliminate forced DOM reflows, avoid busy-waiting, and use O(1) lookups.
- After modifying any code file, review internally to verify syntax, closing tags, and imports so existing code never breaks.
