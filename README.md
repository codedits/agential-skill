# ⚡ Lean Craftsman (`lean-craftsman`)

[![Standard: Agent Skills](https://img.shields.io/badge/Standard-Agent_Skills_1.0-blue.svg)](https://github.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![Validation](https://img.shields.io/badge/Validation-Passing-success.svg)](./.github/workflows/validate-skill.yml)
[![AI Compatibility](https://img.shields.io/badge/AI_Models-Gemini%20|%20Claude%20|%20GPT--4o%20|%20DeepSeek-purple.svg)](./SKILL.md)

> **A Universal AI Developer Skill Engineered for: (1) Beginner-Friendly Clarifying Questions, (2) Ultra-Low CPU Optimization, (3) Concise Communication with Mandatory Post-Edit Self-Reviews to Prevent Breakage, and (4) Proactive Web Research.**

Compatible with **any AI agent or model**: Google Antigravity, Claude Code, Cursor, GitHub Copilot, ChatGPT / Custom GPTs, Cline, and raw LLM APIs.

---

## 🧭 The 4 Core Pillars

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. INQUISITIVE & EASY    │ Asks plain-English, multiple-choice questions    │
│ 2. ULTRA-LOW CPU USAGE   │ Zero-bloat, battery-friendly, low-cycle code     │
│ 3. POST-EDIT REVIEW PASS │ Mandatory internal review to guarantee no breaks │
│ 4. PROACTIVE WEB SEARCH  │ Searches the web for latest patterns & clarity   │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1. Inquisitive Clarification (Beginner-Friendly)
- Avoids cryptic technical jargon. Questions are phrased in everyday language so users with low technical experience can guide the AI with confidence.
- Asks high-impact, essential questions first (offering 2–3 clear choices) before writing code.

### 2. Ultra-Low CPU & Resource Optimization
- **Web Applications**: Eliminates DOM thrashing/forced reflows, leverages GPU-composited CSS transitions (`transform`, `opacity`), passive event listeners, debouncing/throttling, and DOM virtualization.
- **Software & Backend**: Eliminates busy-waiting loops and polling. Employs async event-driven I/O and $O(1)$ lookups instead of $O(n^2)$ scans.

### 3. Concise Communication & Post-Edit Review Pass
- Direct, concise responses without conversational filler.
- **Breakage Prevention Gate**: Immediately after modifying any file, the AI performs a self-review of the diff to confirm that imports, function signatures, syntax, and calling sites remain intact.

### 4. Proactive Web Research
- Searches the web when facing ambiguity, unfamiliar errors, or new SDK versions.
- Draws modern UI/UX design inspirations and architectural patterns rather than relying on stale training memory.

---

## 🚀 Quick Install (Any Project)

### Windows (PowerShell)
```powershell
# Install into your project's .agents/skills/ directory:
irm https://raw.githubusercontent.com/<YOUR_USERNAME>/<YOUR_REPO>/main/scripts/install.ps1 | iex
```
*Or locally from a clone:*
```powershell
.\scripts\install.ps1 -TargetDir "C:\path\to\your\project" -TargetType "all"
```

### macOS / Linux (Bash)
```bash
# Install into your project:
curl -fsSL https://raw.githubusercontent.com/<YOUR_USERNAME>/<YOUR_REPO>/main/scripts/install.sh | bash
```
*Or locally from a clone:*
```bash
./scripts/install.sh /path/to/your/project all
```

---

## 🔌 Platform & Model Compatibility

| Platform / Tool | Supported File / Location | How It Works |
| :--- | :--- | :--- |
| **Google Antigravity / Gemini CLI** | `.agents/skills/lean-craftsman/SKILL.md` | Discovered automatically via progressive disclosure |
| **Cursor IDE** | `.cursorrules` or `.cursor/rules/lean-craftsman.mdc` | Applied to Cursor Chat and Composer |
| **Claude Code / Anthropic** | `CLAUDE.md` or Project System Prompt | Injected into Claude's context |
| **GitHub Copilot** | `.github/copilot-instructions.md` | Standard repository instruction file |
| **ChatGPT / Custom GPTs** | `adapters/system-prompt/prompt.md` | Paste into Custom Instructions or GPT Builder |
| **Local LLMs (Ollama, LM Studio)** | `adapters/system-prompt/prompt.md` | Load as Modelfile or System Prompt |

---

## 📂 Repository Structure

```text
├── SKILL.md                          # Canonical Agent Skill specification (with YAML frontmatter)
├── README.md                         # Documentation & installation guides
├── LICENSE                           # MIT License
├── .gitignore                        # Standard developer gitignore
│
├── references/                       # Deep-dive knowledge base (loaded on demand)
│   ├── questioning-framework.md      # Beginner-friendly plain-English question guide
│   ├── low-cpu-optimization.md       # Low-CPU rules for Web & Software applications
│   ├── post-edit-review-checklist.md # Mandatory review checklist to prevent breakage
│   └── web-research-workflow.md      # Web search trigger rules & modern design sourcing
│
├── examples/
│   └── sample-interaction.md         # Demonstration of the 4 pillars in action
│
├── adapters/                         # Pre-configured drop-in files for other platforms
│   ├── cursor/.cursorrules           # Ready for Cursor IDE
│   ├── copilot/copilot-instructions.md # Ready for GitHub Copilot
│   ├── claude/CLAUDE.md              # Ready for Claude Code
│   └── system-prompt/prompt.md       # Compiled standalone prompt for Web UIs
│
├── scripts/
│   ├── install.ps1                   # Windows PowerShell installer
│   ├── install.sh                    # macOS / Linux installer
│   └── export-bundle.py              # CLI compiler & validator tool
│
└── .github/workflows/
    └── validate-skill.yml            # Automated CI validation pipeline
```

---

## 🛠️ CLI Utilities (`export-bundle.py`)

```bash
# 1. Validate SKILL.md frontmatter and reference files
py scripts/export-bundle.py --format verify

# 2. Compile everything into a single standalone prompt file
py scripts/export-bundle.py --format prompt --output standalone-prompt.md

# 3. Export as JSON structure for APIs or registries
py scripts/export-bundle.py --format json --output skill.json
```

---

## 📤 How to Upload to GitHub

1. Create a new public repository on [GitHub](https://github.com/new) (e.g. `lean-craftsman` or `agential-skill`). Leave "Add a README" unchecked.
2. In your terminal at `d:\agential-skill`, run:
   ```bash
   git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
   git push -u origin main
   ```

---

## 📄 License

Distributed under the [MIT License](./LICENSE). Free for personal and commercial use.
