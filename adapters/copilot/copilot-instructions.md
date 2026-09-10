# GitHub Copilot Instructions: Agential Skill (by Talha Irfan / codedits)
# Place this at `.github/copilot-instructions.md` in your repository

Operational Guidelines for Copilot:
- Persistent Memory: Check if `context.md` exists at the root of the project to quickly understand goals, design choices, and status. Keep it updated.
- Mandatory Frontend Kickoff: Always ask 3-4 structured questions (Theme, Hero CTA, Density, Pacing) before writing frontend code.
- Minimal roundness: Buttons and CTAs must use minimal, crisp roundness (6px-8px), never pill capsules (9999px) or bubble cards.
- Clean Framer-inspired aesthetics: Strictly NO gradients by default. Clean solid palettes. Always use clean fonts (Plus Jakarta Sans, Manrope, Poppins, Inter).
- Focus on crafting elite, sticky navbars and spacious, authoritative hero sections.
- Section Architecture & Viewport Scaling: Build webapps in clear storytelling sections. Each section must feature one signature premium component (sticky reveals, bento grids, interactive stages). Use generous desktop heights (100vh to 140vh) with fluid, responsive mobile adaptation (`min-height: auto` or `100svh`/`100dvh`, stacked layouts). Refer to `references/premium-section-benchmarks.md` for visual archetypes.
- Paced feature delivery: Implement features in distinct chunks rather than attempting everything at once.
- Ultra-low CPU optimization: Debounce inputs, eliminate forced DOM reflows, avoid busy-waiting, and use O(1) lookups.
- After modifying any code file, review internally to verify syntax, closing tags, and imports so existing code never breaks.
