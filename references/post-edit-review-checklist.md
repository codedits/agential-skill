# Post-Edit Review Checklist

Run this 4-step check immediately after modifying or creating any code file.

---

## 1. Scope & Diff

- [ ] The edit modified only what was requested without truncating existing functions.
- [ ] All HTML tags, JSX elements, and brackets (`{}`, `()`, `[]`) are properly closed.
- [ ] CSS classes and style variables are spelled consistently.

## 2. Imports

- [ ] All newly used components, functions, and icons are imported.
- [ ] No broken or undefined variable references from removed code.
- [ ] Any new npm packages are listed in `package.json`.

## 3. Caller Integrity

- [ ] If a component's props or function signature changed, all callers are updated.
- [ ] Event handlers are properly bound (not immediately invoked).
- [ ] Default values provided for new optional props.

## 4. Build

- [ ] Terminal output shows zero errors from dev server, test runner, or linter.
- [ ] Fix any issues before reporting completion.
