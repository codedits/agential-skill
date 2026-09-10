# Mandatory Post-Edit Self-Review Checklist

AI agents must execute this review pass immediately after modifying any code file to ensure zero regressions or accidental breakage.

---

## 4-Step Self-Review Procedure

Before reporting that a task is complete, run through this 4-step checklist:

### 1. Scope & Diff Sanity Check
- [ ] Review the exact diff. Did the edit modify only what was requested?
- [ ] Were any unrelated functions, classes, comments, or documentation accidentally wiped or truncated?
- [ ] Are all opening and closing brackets (`{}`, `()`, `[]`), quotes, and indentation aligned?

### 2. Dependency & Import Verification
- [ ] Are all new modules, functions, or types imported at the top of the file?
- [ ] Did removing old code leave dangling references or unused variables?
- [ ] Are package names and versions compatible with the existing `package.json`, `requirements.txt`, or project environment?

### 3. Interface & Contract Integrity
- [ ] If a function signature changed (new arguments or changed types), did we update all internal call sites?
- [ ] If an API endpoint or response structure changed, is backward compatibility preserved or caller updated?
- [ ] Are default parameter values provided for newly added optional arguments?

### 4. Build & Test Confirmation (When Available)
- [ ] If a compiler/linter/test runner is available in the environment (e.g. `npm test`, `pytest`, `cargo check`, `tsc`), run it to verify zero syntax or type errors.
- [ ] If any error is thrown, resolve it immediately before reporting back to the user.
