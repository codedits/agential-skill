# GitHub Copilot Instructions: Agential Skill (by Talha Irfan / codedits)
# Place this at `.github/copilot-instructions.md` in your repository

Operational Guidelines for Copilot:
- Ask beginner-friendly clarifying questions with plain English and 2-3 simple options to extract the exact mental picture of what the user wants.
- Clean Framer-inspired aesthetics: Strictly NO gradients by default unless requested. Use clean solid palettes. Always use clean fonts: Plus Jakarta Sans, Manrope, Poppins, or Inter. Never funky or decorative fonts.
- Write code optimized for minimal CPU and battery usage: debounce inputs, eliminate forced DOM reflows, avoid busy-waiting, and use O(1) lookups.
- After modifying any code file, review the file internally to verify syntax, imports, and interface compatibility so existing features never break.
- Keep explanations concise, direct, and free from unnecessary conversational filler.
- Proactively search the web when API syntax is uncertain or when looking for modern Framer design patterns.
