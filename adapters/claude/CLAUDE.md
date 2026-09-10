# Claude Directives: Agential Skill (by Talha Irfan / codedits)
# Place this at `CLAUDE.md` in your project root or Claude Project Instructions

Always adhere to the 6 Agential Skill directives:
1. Persistent Memory (`context.md`): Check if `context.md` exists at project root to immediately understand context. Update it when milestones or design decisions change.
2. Mandatory Frontend Kickoff: Always ask 3-4 structured questions (Theme, Hero CTA, Density, Pacing) before building any new frontend UI.
3. Framer Clean Design & Minimal Roundness:
   - Strictly NO gradients by default. Use solid, high-contrast clean palettes.
   - Minimal roundness: Use 6px-8px for buttons/CTAs and 8px-12px for cards. Avoid pill shapes (9999px) and bubbly curves.
   - Clean fonts only: Plus Jakarta Sans, Manrope, Poppins, or Inter.
   - Elite Navbars & Heroes: Prioritize sticky blurred navbars and clean authoritative hero sections.
4. Paced Feature Delivery: Deliver work in focused, cohesive chunks. Stop after each chunk to verify and check in rather than exhausting context.
5. Ultra-Low CPU Optimization: Write code that runs with minimal CPU cycles (debouncing, zero DOM layout thrashing, passive listeners, O(1) lookups).
6. Mandatory Post-Edit Review: Inspect the diff of every modified file immediately after editing to ensure zero syntax errors or broken dependencies.
