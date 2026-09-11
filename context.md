# Project Context & AI Memory: Agential Skill
*Maintained by Talha Irfan (@codedits)*

## 1. Vision & Core Objectives
- **Project Purpose**: The universal, user-first, ultra-low CPU fullstack agent skill for any AI model (Antigravity, Cursor, Copilot, Claude, ChatGPT, Ollama).
- **Core Mission**: Prevent AI models from overwhelming beginners with jargon, generating CPU-heavy laggy code, breaking existing files on edit, writing ugly bubble/gradient UI, or falling into deadly backend traps (N+1 queries, IDOR security leaks, mass assignment, unvalidated boot-time crashes).
- **Repository**: `https://github.com/codedits/agential-skill`

## 2. Visual Design & Theme Decisions
- **Design Standard**: Framer-inspired clean, architectural minimalism (like Linear & Vercel).
- **Gradients**: Strictly NO gradients by default unless requested. Solid high-contrast colors only.
- **Typography**: Strictly clean fonts (`Plus Jakarta Sans`, `Manrope`, `Poppins`, `Inter`). Never funky/novelty.
- **Border Radius**: Minimal, sharp roundness (Buttons: `6px–8px`, Cards: `8px–12px`, Tags: `4px–6px`). Never pill capsules (`9999px`).
- **Hero & Navbar**: Sticky blurred navbars and authoritative, spacious heroes.
- **Section Architecture & Scale**: Distinct storytelling sections with one signature premium component per section. Desktop scale: `min-height: 100vh` to `140vh` (e.g. `130vh`/`140vh` for sticky feature reveals, `100vh`–`120vh` for bento grids). Mobile adaptation: fluid `min-height: auto` or `100svh`/`100dvh`, stacked layouts, and responsive padding. Visual benchmarks in `references/premium-section-benchmarks.md`.
- **Dynamic Motion**: Framer Motion standard (`framer-motion`/`motion/react`). Smooth slide-up text entry (`opacity: 0, y: 24` -> `1, 0`), scroll reveals (`whileInView`), and staggered bento cards so the UI never feels dead. Strictly GPU properties only (`transform`, `opacity`).

## 3. Backend Engineering & Production Architecture
- **Boot-Time Fail-Fast Env Validation**: Validate env variables strictly at startup (Zod / Pydantic v2 `BaseSettings`). Crash immediately at boot if any secret or config is missing; never during an active request.
- **Anti-IDOR Authorization**: Every single database query must scope to the verified `user_id` or `tenant_id` from decoded auth tokens (`where: { id, userId }`). Never trust raw client IDs alone.
- **Zero N+1 Queries & Mandatory Pagination**: Always use eager loading (`include`/`selectinload`) or join batches. Every list endpoint must enforce a default limit (max 50-100 items). Unbounded queries are banned.
- **Atomic Transactions & Race Safety**: Wrap multi-step writes in atomic database transactions (`tx`). Use atomic database increments/decrements.
- **Strict Schema Guardrails**: Enforce `.strict()` in Zod or `extra = "forbid"` in Pydantic to prevent mass-assignment privilege escalations. Never pass raw `req.body` into ORM calls.
- **Sanitized Error Handling**: Global error boundary with UUID correlation IDs. Return RFC 7807 Problem Details. Never leak stack traces or raw database error messages.
- **Persistent Connection Pools**: Maintain singleton database clients (Prisma, asyncpg, SQLAlchemy). Never create connection pools per-request.

## 4. Architecture & Tech Stack
- **Standard**: Agent Skills 1.0 specification (`SKILL.md`).
- **Distribution**: Zero-dependency Node.js CLI (`npx agential-skill init`), PowerShell & Bash scripts.
- **Multi-Agent Adapters**: `.cursorrules`, `.cursor/rules/agential-skill.mdc`, `.github/copilot-instructions.md`, `CLAUDE.md`, `prompt.md`.
- **References**: 8 progressive disclosure guides in `references/` (including `references/backend-engineering-standards.md`).
- **Visual Assets**: Standardized WebP reference designs in `resources/design-references/`.

## 5. Completed Milestones
- [x] Initial universal skill structure and multi-agent adapters.
- [x] 4 Core Pillars: Beginner questions, Low-CPU (60fps), Post-edit review pass, Proactive web search.
- [x] 100k-star upgrades: `npx` CLI (`bin/cli.js`), visual SVG demo, Chrome DevTools benchmarks, framework presets (`presets/`).
- [x] Frontend Milestone: Framer clean design, strict typography, anti-pill minimal roundness, elite navbars/heroes, paced feature delivery.
- [x] Section Architecture Milestone: 100vh–140vh desktop viewport scaling, fluid mobile responsiveness, and signature premium components per section.
- [x] Visual Benchmark Suite: 9 standardized, high-efficiency WebP reference archetypes with dedicated agent inspection guide (`references/premium-section-benchmarks.md`).
- [x] Dynamic Motion Milestone: Framer Motion declarative standard, smooth slide-up text reveals, and low-CPU GPU rules.
- [x] Fullstack Backend Milestone: Solved the 7 deadly backend AI failure modes (`references/backend-engineering-standards.md`, `presets/node-backend.md`, and production-hardened `presets/python-fastapi.md`).
- [x] `context.md` memory persistence protocol.

## 6. Active Conventions for Any AI Reading This
- Always check `context.md` first.
- Always ask the frontend kickoff questionnaire before starting any new UI.
- Deliver in paced chunks; do not exhaust context.
- For backend tasks, enforce Pillar 3 & `references/backend-engineering-standards.md`.
- Run `py scripts/export-bundle.py --format verify` to validate.
