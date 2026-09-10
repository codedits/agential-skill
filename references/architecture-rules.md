# Architecture & Code Quality Principles

Reference principles to evaluate maintainability, coupling, and modular design.

---

## 1. Modularity & Cohesion

- **Single Responsibility Principle (SRP)**: Each module, class, or function should do one thing well. A function handling HTTP parsing should not also calculate taxes and send emails.
- **Explicit Contracts**: Prefer typed interfaces, DTOs, or schemas (TypeScript interfaces, Pydantic models, Go structs) over loose untyped dicts or objects.
- **Pure Functions & Immutability**: Prefer pure functions for business calculations to simplify testing and eliminate unexpected side effects.

---

## 2. Error Handling & Observability

- **Never Swallow Errors**: Avoid empty `catch {}` or `except: pass` blocks without logging or re-throwing.
- **Contextual Logging**: When logging errors, include contextual identifiers (e.g. `userId`, `requestId`, `transactionId`) without leaking PII.
- **Fail Fast**: Validate preconditions early at the boundary (guard clauses) to avoid deeply nested if/else logic.

---

## 3. Backward Compatibility & Migrations

- **API Versioning**: Do not remove fields or alter types in public API endpoints without backward-compatible deprecation paths.
- **Database Migrations**: Additive changes first (add nullable column) before backfilling and enforcing NOT NULL in a subsequent deployment.
