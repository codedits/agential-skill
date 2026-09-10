<div align="center">

# ⚡ Agential Skill (`agential-skill`)

### The User-First, Ultra-Efficient Web & App Development Skill for Any AI

[![Standard: Agent Skills](https://img.shields.io/badge/Standard-Agent_Skills_1.0-3b82f6.svg?style=for-the-badge)](https://github.com/codedits/agential-skill)
[![Author: Talha Irfan](https://img.shields.io/badge/Author-Talha_Irfan_(codedits)-8b5cf6.svg?style=for-the-badge)](https://github.com/codedits)
[![License: MIT](https://img.shields.io/badge/License-MIT-10b981.svg?style=for-the-badge)](./LICENSE)
[![Validation: Passing](https://img.shields.io/badge/Validation-100%25_Passing-059669.svg?style=for-the-badge)](./.github/workflows/validate-skill.yml)

<br/>

**Built for every developer and every AI model:**<br/>
`Google Antigravity` • `Claude Code` • `Cursor IDE` • `GitHub Copilot` • `ChatGPT` • `Ollama`

<br/>

---

### 💡 Why Agential Skill?

Standard AI models often overwhelm non-technical users with complex jargon, write heavy code that causes browser fan spin & CPU lag, break existing code when editing files, and rely on outdated training memory.

**Agential Skill fixes all of that.** It enforces a disciplined 4-step workflow that guarantees clean, fast, reliable, and user-friendly software every time.

---

</div>

<br/>

## 🔄 The 4-Step Operational Flow

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                        │
│   1️⃣  INQUISITIVE CLARIFICATION                                                        │
│       Before coding, the AI asks 1-3 simple, plain-English questions with clear       │
│       options so anyone—regardless of coding experience—can make decisions easily.     │
│                                           │                                            │
│                                           ▼                                            │
│   2️⃣  PROACTIVE WEB INSPIRATION                                                        │
│       Searches the web for modern 2026 design trends, clean palettes, and up-to-date   │
│       framework syntax to eliminate doubt and outdated code.                           │
│                                           │                                            │
│                                           ▼                                            │
│   3️⃣  ULTRA-LOW CPU CODING                                                             │
│       Engineers silky-smooth 60fps web apps and software with near 0% idle CPU usage,   │
│       GPU-accelerated animations, input debouncing, and zero DOM layout thrashing.     │
│                                           │                                            │
│                                           ▼                                            │
│   4️⃣  MANDATORY POST-EDIT SELF-REVIEW                                                  │
│       Before reporting done, the AI automatically inspects its own diff to ensure      │
│       imports, closing tags, and existing functions didn't break.                      │
│                                                                                        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

<br/>

---

## ⚡ 1-Minute Quick Start (Install into Any Project)

Install `agential-skill` into your workspace with a single terminal command:

### 🪟 Windows (PowerShell)
```powershell
irm https://raw.githubusercontent.com/codedits/agential-skill/main/scripts/install.ps1 | iex
```

### 🍎 macOS / 🐧 Linux (Bash)
```bash
curl -fsSL https://raw.githubusercontent.com/codedits/agential-skill/main/scripts/install.sh | bash
```

> [!TIP]
> **What this does automatically:**
> 1. Installs the canonical skill into `.agents/skills/agential-skill/` (for Antigravity / Gemini CLI).
> 2. Generates `.cursorrules` in your project root (for Cursor IDE).
> 3. Creates `.github/copilot-instructions.md` (for GitHub Copilot).

<br/>

---

## 🔌 How to Use in Your Favorite AI Tool

### 1. Google Antigravity & Gemini CLI
Simply install the skill into your project's `.agents/skills/agential-skill/` directory. Antigravity automatically detects the skill and activates it whenever you ask to plan, build, or refactor web apps or software.

### 2. Cursor IDE
Copy [`adapters/cursor/.cursorrules`](./adapters/cursor/.cursorrules) into your project root:
- Automatically guides Cursor Chat and Composer to ask simple questions, keep CPU usage low, and review its edits before completing.

### 3. Claude Code & Anthropic Projects
Copy [`adapters/claude/CLAUDE.md`](./adapters/claude/CLAUDE.md) into your project root or paste its contents into your Claude Project Custom Instructions.

### 4. GitHub Copilot
Copy [`adapters/copilot/copilot-instructions.md`](./adapters/copilot/copilot-instructions.md) into your project's `.github/` folder. Copilot will automatically follow these rules for every chat and inline suggestion.

### 5. ChatGPT, Claude Web, Gemini Web & Ollama
Open [`adapters/system-prompt/prompt.md`](./adapters/system-prompt/prompt.md), copy the compiled prompt, and paste it into your Custom Instructions or Modelfile.

<br/>

---

## 🎯 Real-World Comparison: Standard AI vs. Agential Skill

| Situation | Standard AI Behavior ❌ | With Agential Skill ✅ |
| :--- | :--- | :--- |
| **Requirements** | Confuses you with technical jargon (*"Do you want SSR or CSR with Hydration?"*) | Asks simple, plain choices (*"Do you want pages to load instantly without a screen reload? (1) Yes (2) Standard"*)|
| **Performance** | Causes browser lag with heavy loops and animating `top/left` properties | 60fps GPU acceleration using `transform/opacity` with 0% idle CPU |
| **Editing Files** | Often deletes other functions or leaves unclosed tags that break the app | Mandatory self-review pass checks all imports, tags, and callers before replying |
| **Design** | Generates plain, dated-looking UI from old memory | Searches the web for modern UI/UX trends, clean color palettes, and glassmorphism |
| **Communication** | Long, repetitive walls of text | Concise, direct answers focused strictly on what was accomplished |

<br/>

---

## 📂 Repository Structure

```text
agential-skill/
├── SKILL.md                          # Universal Agent Skill specification (with YAML frontmatter)
├── README.md                         # Beautiful visual documentation & install guides
├── LICENSE                           # Open-source MIT License (Talha Irfan / codedits)
├── .gitignore                        # Clean environment ignore rules
│
├── references/                       # Deep-dive knowledge base (loaded on demand)
│   ├── questioning-framework.md      # Beginner-friendly plain-English question guide
│   ├── low-cpu-optimization.md       # High-performance rules for Web & Software
│   ├── post-edit-review-checklist.md # Mandatory self-review checklist to prevent breakage
│   └── web-research-workflow.md      # Web search trigger rules for design & docs
│
├── examples/
│   └── sample-interaction.md         # End-to-end real-world demonstration
│
├── adapters/                         # Ready-to-use configs for every AI tool
│   ├── cursor/.cursorrules           # For Cursor IDE
│   ├── copilot/copilot-instructions.md # For GitHub Copilot
│   ├── claude/CLAUDE.md              # For Claude Code
│   └── system-prompt/prompt.md       # Standalone prompt for ChatGPT & Web UIs
│
├── scripts/
│   ├── install.ps1                   # Windows 1-click installer
│   ├── install.sh                    # macOS / Linux 1-click installer
│   └── export-bundle.py              # Schema validator & prompt compiler
│
└── .github/workflows/
    └── validate-skill.yml            # Automated GitHub Actions CI test
```

<br/>

---

## 🛠️ CLI Utilities & Validation

The repository includes a Python utility to validate and compile the skill:

```bash
# 1. Validate SKILL.md frontmatter and reference files
py scripts/export-bundle.py --format verify

# 2. Compile everything into a single standalone prompt file
py scripts/export-bundle.py --format prompt --output standalone-prompt.md

# 3. Export as JSON structure for APIs or registries
py scripts/export-bundle.py --format json --output skill.json
```

<br/>

---

## 👤 Author & Maintainer

Created and maintained with ❤️ by **Talha Irfan** ([@codedits](https://github.com/codedits)).

Contributions, issues, and feature requests are welcome! Feel free to star ⭐ the repository if you find it helpful.

<br/>

---

## 📄 License

Distributed under the [MIT License](./LICENSE). Free for personal, open-source, and commercial use.
