# The `context.md` Session Persistence Protocol

A standard specification for preserving project context, user design decisions, and architectural state across different AI chat sessions.

---

## 1. Why `context.md` Exists

AI chat windows suffer from context loss, token truncation, or chat restarts. When a developer starts a new chat tomorrow or switches models (e.g. from Claude to Gemini or GPT-4o), they should **never have to re-explain their project from scratch**.

The `context.md` file sits in the project root as a **single source of truth** for any AI agent.

---

## 2. Mandatory Lifecycle Rules for AI Agents

1. **Step 0 (Session Start)**: Before asking questions or taking action, check if `context.md` exists in the workspace root. If it exists, read it immediately to instantly understand the project state.
2. **Post-Alignment Update**: Immediately after the user answers the kickoff questionnaire, create or update `context.md` with their decisions.
3. **Post-Feature Chunk Update**: When completing a feature chunk (e.g. *Navbar + Hero*), record it under "Completed Components" and list what is next under "Current Milestone".

---

## 3. Standard `context.md` Structure

```markdown
# Project Context & AI Memory: [Project Name]
*Last Updated: [Date / Time] by Agential Skill*

## 1. Vision & Core Objectives
- **Project Purpose**: [1-2 sentences on what this app does]
- **Target Audience**: [Who uses it]
- **Primary Goal**: [e.g. Conversion, internal productivity, dashboard]

## 2. Visual Design & Theme Decisions
- **Color Theme**: [e.g., Obsidian Dark (#0a0a0c) with Electric Blue (#3b82f6) accent]
- **Gradients**: Strictly NO gradients (solid high-contrast colors only)
- **Typography**: [e.g., Plus Jakarta Sans (Headers) + Inter (Body)]
- **Border Radius**: [Buttons: 6px-8px, Cards: 8px-12px, Tags: 4px]
- **Information Density**: [e.g., Spacious & Modern / Compact Dashboard]

## 3. Architecture & Tech Stack
- **Framework**: [e.g., Vanilla HTML/CSS/JS, Next.js, or Vue]
- **Performance Constraints**: 60fps GPU acceleration, 0% idle CPU, debounced inputs.
- **Key Files**:
  - `src/...` or `index.html`

## 4. Completed Feature Chunks
- [x] Chunk 1: [e.g., Sticky blurred navbar + Hero with 6px CTA button]
- [x] Chunk 2: [e.g., 3-day tabbed agenda with DocumentFragment rendering]

## 5. Current & Next Milestones
- [ ] Next Chunk: [e.g., Pricing cards or Contact form]
- [ ] Backlog: [Future features discussed with user]

## 6. User Preferences & Special Notes
- [Any specific quirks or preferences the user mentioned]
```
