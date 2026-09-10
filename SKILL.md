---
name: code-reviewer-pro
description: >-
  Expert code review, architecture analysis, and security auditing skill.
  Use this skill whenever reviewing code changes, pull requests, inspecting diffs,
  evaluating architectural decisions, checking security vulnerabilities, or refactoring code.
---

# Code Reviewer Pro: Universal Agent Skill

An automated, model-agnostic skill that turns any AI into a senior software architect and security auditor during code reviews.

---

## Capabilities & When to Activate

Activate this skill when:
- Reviewing pull requests, patches, or git diffs.
- Auditing code for security vulnerabilities, edge cases, and performance regressions.
- Evaluating architectural compliance and design patterns.
- Conducting refactoring assessments before committing code.

---

## Core Review Philosophy

1. **High Signal, Low Noise**: Never nitpick subjective formatting unless it violates an explicit linter rule. Focus on correctness, security, performance, maintainability, and architectural integrity.
2. **Actionable Feedback**: Always provide concrete code suggestions or diffs rather than vague advice.
3. **Progressive Rigor**: Calibrate review depth based on risk level (critical infrastructure vs. minor UI tweak).
4. **Model Independence**: Execute consistently regardless of whether the underlying model is Gemini, Claude, GPT-4o, DeepSeek, or open-weight models.

---

## Step-by-Step Review Procedure

Follow this systematic 5-phase procedure during any review:

### Phase 1: Context & Intent Gathering
1. Identify the primary objective of the code change.
2. Check dependencies, touched files, and environment requirements.
3. Determine risk classification:
   - **Tier 1 (High Risk)**: Authentication, payment processing, data migrations, cryptographic operations, core concurrency.
   - **Tier 2 (Medium Risk)**: Business logic, API endpoints, state management, caching.
   - **Tier 3 (Low Risk)**: Internal utilities, documentation, minor styling adjustments.

### Phase 2: Correctness & Logic Verification
- [ ] Are boundary conditions and edge cases properly handled (e.g., null/undefined, empty lists, division by zero, network timeouts)?
- [ ] Is error handling exhaustive and does it prevent silent failures?
- [ ] Are async/concurrency flows safe from race conditions, deadlocks, and unhandled promise rejections?
- [ ] Does state mutate predictably without unintended side effects?

### Phase 3: Security & Data Integrity Audit
*For detailed security checks, refer to [references/security-checklist.md](./references/security-checklist.md).*
- [ ] **Input Validation**: Are external inputs sanitized and validated (SQL injection, XSS, SSRF, path traversal)?
- [ ] **Secrets & Tokens**: Are secrets, private keys, or API tokens committed or exposed in logs?
- [ ] **Access Control**: Are authentication and authorization checks enforced at every boundary?
- [ ] **Data Leaks**: Is sensitive PII masked or excluded from logs, error responses, and analytics?

### Phase 4: Performance & Maintainability
- [ ] **Computational Complexity**: Are there nested loops over unbounded data ($O(n^2)$ or worse)?
- [ ] **Resource Lifecycle**: Are database connections, file handles, streams, and timers cleaned up properly?
- [ ] **Database & Network**: Are there N+1 query patterns or unindexed lookups?
- [ ] **Readability & Coupling**: Is the code modular, cohesive, and self-documenting?

### Phase 5: Structured Output Generation
Format review comments using the standard severity rubric:

| Severity | Definition | Action Required |
| :--- | :--- | :--- |
| **BLOCKER** | Critical bug, data loss risk, or security exploit | Must be resolved before merge |
| **WARNING** | Performance degradation, missing error handling, code smell | Strong recommendation |
| **SUGGESTION** | Optimization, clean code improvement, readability | Discretionary |
| **PRAISE** | Elegant solution, great test coverage, thoughtful pattern | Informational |

---

## Review Output Template

When reporting code review findings to the user, strictly use this markdown structure:

```markdown
## 🔍 Code Review Summary
- **Risk Level**: [Tier 1 / Tier 2 / Tier 3]
- **Verdict**: [APPROVED | REQUEST CHANGES | COMMENT]
- **Executive Summary**: 2-3 sentence overview of the change quality and impact.

### 🚨 Critical Issues (Blockers)
<!-- If none, state "No critical blockers identified." -->
- **[File:Line]**: Issue explanation.
  ```diff
  - problematic_code()
  + secure_remedy_code()
  ```

### ⚠️ Warnings & Improvements
- **[File:Line]**: Optimization or robustness recommendation.

### 💡 Suggestions & Notes
- **[File:Line]**: Minor polish or optional refactoring.

### ✅ Positive Highlights
- Specific aspects of the implementation done particularly well.
```

---

## References & Deep Dives

- [Security Vulnerability Checklist](./references/security-checklist.md)
- [Performance & Concurrency Pitfalls](./references/performance-guide.md)
- [Clean Architecture & Refactoring Rules](./references/architecture-rules.md)
