# Mandatory Post-Edit Self-Review Checklist (Breakage Prevention)

AI models must execute this 4-step checklist immediately after modifying or creating any code file to ensure nothing broke.

---

## 4-Step Self-Review Procedure

### 1. Scope & Diff Sanity Check
- [ ] Did the edit modify only what was requested without truncating or removing existing functions?
- [ ] Are all HTML tags, JSX elements, and brackets (`{}`, `()`, `[]`) properly closed?
- [ ] Are CSS classes and style variables spelled consistently with the rest of the stylesheet?

### 2. Dependency & Import Verification
- [ ] Are all newly used components, helper functions, and icons properly imported at the top of the file?
- [ ] Did removing old code leave any broken or undefined variable references?
- [ ] If an npm package was added, is it listed in `package.json`?

### 3. Interface & Calling Site Integrity
- [ ] If a component's props or a function's arguments were changed, were all caller files updated?
- [ ] Are event handlers properly bound (e.g. `onClick={handleClick}` without immediately invoking `handleClick()`)?
- [ ] Are default values provided for newly added optional props?

### 4. Build & Console Check
- [ ] If a local dev server, test runner, or linter is running, check the terminal output for zero errors.
- [ ] Fix any syntax or import issues immediately before reporting completion to the user.
