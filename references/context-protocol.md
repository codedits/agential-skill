# Session Memory Protocol (`context.md`)

A specification for preserving project context, design decisions, and architectural state across AI chat sessions.

---

## Why

Chat sessions suffer from context loss, token truncation, and restarts. When a developer starts a new session or switches models (Claude → Gemini → GPT), they should never re-explain their project from scratch.

The `context.md` file in the project root is the single source of truth for any AI agent.

---

## Lifecycle

1. **Session start.** Before asking questions or taking action, check if `context.md` exists. If it does, read it immediately.
2. **Post-onboarding.** After the user answers the kickoff questions, create or update `context.md` with their decisions.
3. **Post-delivery.** When a feature chunk is completed, record it under "Completed" and list what comes next.

---

## Structure

```markdown
# Project Context: [Project Name]
*Last Updated: [Date]*

## 1. Vision
- **Purpose**: [What this app does]
- **Audience**: [Who uses it]
- **Primary Goal**: [Conversion, productivity, dashboard, etc.]

## 2. Design Decisions
- **Color**: [e.g. Obsidian dark (#0a0a0c) with blue accent (#3b82f6)]
- **Gradients**: None (solid colors only)
- **Typography**: [e.g. Space Grotesk (display) + Plus Jakarta Sans (body)]
- **Border Radius**: [Buttons: 6–8px, Cards: 8–12px, Tags: 4px]
- **Density**: [Spacious / Compact]

## 3. Tech Stack
- **Framework**: [Vanilla, Next.js, Vue, etc.]
- **Key Files**: [src/... or index.html]

## 4. Completed
- [x] [e.g. Sticky navbar + hero with 6px CTA]
- [x] [e.g. Tabbed agenda with DocumentFragment rendering]

## 5. Next
- [ ] [e.g. Pricing cards]
- [ ] [e.g. Contact form]

## 6. Notes
- [Any specific user preferences]
```
