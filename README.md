# 🛡️ Code Reviewer Pro (`code-reviewer-pro`)

[![Standard: Agent Skills](https://img.shields.io/badge/Standard-Agent_Skills_1.0-blue.svg)](https://github.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![CI](https://img.shields.io/badge/Validation-Passing-success.svg)](./.github/workflows/validate-skill.yml)
[![AI Compatibility](https://img.shields.io/badge/AI_Models-Gemini%20|%20Claude%20|%20GPT--4o%20|%20DeepSeek-purple.svg)](./SKILL.md)

> **A Universal, Model-Agnostic AI Agent Skill for Senior-Level Code Reviews, Architecture Analysis, and Security Auditing.**

Designed to run natively across **any AI agent or model**: Google Antigravity, Claude Code, Cursor, GitHub Copilot, ChatGPT / Custom GPTs, Cline, and raw LLM APIs.

---

## 🌟 Why This Skill?

General AI models often produce noisy, superficial code reviews (nitpicking whitespace or restating what the code does). **Code Reviewer Pro** provides rigorous, structured operational constraints that turn any AI into a Senior Staff Engineer and Application Security Auditor:

- 🎯 **High Signal, Low Noise**: Focuses strictly on logic correctness, OWASP security, performance traps, and architectural integrity.
- ⚡ **Actionable Diffs**: Replaces vague suggestions with copy-pasteable before/after code blocks.
- 🛡️ **Progressive Deep Dives**: Bundled with dedicated reference guides for security checklists, concurrency traps, and design principles loaded on demand.
- 🌐 **True Model Independence**: Consistent results across Gemini 1.5/2.0, Claude 3.5 Sonnet, GPT-4o, DeepSeek-V3/R1, and local open-weight models.

---

## 🚀 Quick Install (Any Project)

Clone or install this skill into any repository using a single command:

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
| **Google Antigravity / Gemini CLI** | `.agents/skills/code-reviewer-pro/SKILL.md` | Discovered automatically via progressive disclosure |
| **Cursor IDE** | `.cursorrules` or `.cursor/rules/code-reviewer-pro.mdc` | Applied to Cursor Chat and Composer |
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
│   ├── security-checklist.md         # OWASP Top 10, injection, auth, and secrets checks
│   ├── performance-guide.md          # N+1 queries, memory lifecycle, concurrency traps
│   └── architecture-rules.md         # Modularity, contracts, error handling, migrations
│
├── examples/
│   └── sample-review.md              # Gold-standard reference output for the agent
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

This repository includes a Python utility to validate and compile the skill for different targets:

```bash
# 1. Validate SKILL.md frontmatter and reference links
py scripts/export-bundle.py --format verify

# 2. Compile everything into a single standalone prompt file
py scripts/export-bundle.py --format prompt --output standalone-prompt.md

# 3. Export as JSON structure for APIs or tool registries
py scripts/export-bundle.py --format json --output skill.json
```

---

## 📤 How to Upload to GitHub

Follow these steps to publish this repository to GitHub so anyone can use it:

### Step 1: Create a GitHub Repository
1. Go to [GitHub New Repository](https://github.com/new).
2. Name your repository (e.g. `code-reviewer-pro` or `agential-skill`).
3. Choose **Public** so others can install it.
4. Leave "Add a README" **unchecked** (we already have a complete one).

### Step 2: Push Your Local Repository
Open PowerShell or your terminal in this folder (`d:\agential-skill`) and run:

```bash
git init -b main
git add .
git commit -m "feat: initial release of universal code-reviewer-pro skill"
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
git push -u origin main
```

*(Replace `<YOUR_USERNAME>` and `<YOUR_REPO>` with your GitHub username and repository name).*

---

## 🎨 How to Create Your Own Custom Skill

Want to adapt this repository for a different use case (e.g. `api-architect`, `database-optimizer`, `release-manager`)?

1. **Edit `SKILL.md`**:
   - Change `name: your-skill-name` in the YAML frontmatter.
   - Update `description` with clear triggers (use third-person: *"Use this skill when..."*).
   - Write your procedure steps.
2. **Add domain guides in `references/`**:
   - Place checklists or deep manuals in `references/` so models only read them when needed (progressive disclosure).
3. **Run Validation**:
   ```bash
   py scripts/export-bundle.py --format verify
   ```
4. **Re-export Adapters**:
   ```bash
   py scripts/export-bundle.py --format prompt --output adapters/system-prompt/prompt.md
   ```
5. Commit and push to GitHub!

---

## 📄 License

Distributed under the [MIT License](./LICENSE). Free for personal and commercial use.
