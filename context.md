# Project Context & AI Memory: Agential Skill
*Maintained by Talha Irfan (@codedits)*

## 1. Vision & Core Objectives
- **Project Purpose**: The universal, user-first, ultra-low CPU agent skill for any AI model (Antigravity, Cursor, Copilot, Claude, ChatGPT, Ollama).
- **Core Mission**: Prevent AI models from overwhelming beginners with jargon, generating CPU-heavy laggy code, breaking existing files on edit, or writing ugly bubble/gradient UI.
- **Repository**: `https://github.com/codedits/agential-skill`

## 2. Visual Design & Theme Decisions
- **Design Standard**: Framer-inspired clean, architectural minimalism (like Linear & Vercel).
- **Gradients**: Strictly NO gradients by default unless requested. Solid high-contrast colors only.
- **Typography**: Strictly clean fonts (`Plus Jakarta Sans`, `Manrope`, `Poppins`, `Inter`). Never funky/novelty.
- **Border Radius**: Minimal, sharp roundness (Buttons: `6px–8px`, Cards: `8px–12px`, Tags: `4px–6px`). Never pill capsules (`9999px`).
- **Hero & Navbar**: Sticky blurred navbars and authoritative, spacious heroes.
- **Section Architecture & Scale**: Distinct storytelling sections with one signature premium component per section. Desktop scale: `min-height: 100vh` to `140vh` (e.g. `130vh`/`140vh` for sticky feature reveals, `100vh`–`120vh` for bento grids). Mobile adaptation: fluid `min-height: auto` or `100svh`/`100dvh`, stacked layouts, and responsive padding. Visual benchmarks in `references/premium-section-benchmarks.md`.

## 3. Architecture & Tech Stack
- **Standard**: Agent Skills 1.0 specification (`SKILL.md`).
- **Distribution**: Zero-dependency Node.js CLI (`npx agential-skill init`), PowerShell & Bash scripts.
- **Multi-Agent Adapters**: `.cursorrules`, `.cursor/rules/agential-skill.mdc`, `.github/copilot-instructions.md`, `CLAUDE.md`, `prompt.md`.
- **References**: Progressive disclosure guides in `references/` (including `references/premium-section-benchmarks.md`).
- **Visual Assets**: Standardized WebP reference designs in `resources/design-references/`.

## 4. Completed Milestones
- [x] Initial universal skill structure and multi-agent adapters.
- [x] 4 Core Pillars: Beginner questions, Low-CPU (60fps), Post-edit review pass, Proactive web search.
- [x] 100k-star upgrades: `npx` CLI (`bin/cli.js`), visual SVG demo, Chrome DevTools benchmarks, framework presets (`presets/`).
- [x] Frontend Milestone: Framer clean design, strict typography, anti-pill minimal roundness, elite navbars/heroes, paced feature delivery.
- [x] Section Architecture Milestone: 100vh–140vh desktop viewport scaling, fluid mobile responsiveness, and signature premium components per section.
- [x] Visual Benchmark Suite: 9 standardized, high-efficiency WebP reference archetypes with dedicated agent inspection guide (`references/premium-section-benchmarks.md`).
- [x] `context.md` memory persistence protocol.

## 5. Active Conventions for Any AI Reading This
- Always check `context.md` first.
- Always ask the frontend kickoff questionnaire before starting any new UI.
- Deliver in paced chunks; do not exhaust context.
- Run `py scripts/export-bundle.py --format verify` to validate.
