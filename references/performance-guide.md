# Performance & Concurrency Review Guide

Reference guidelines for identifying performance bottlenecks, resource leaks, and concurrency hazards.

---

## 1. Database Performance

### N+1 Query Antipattern
*Problem*: Executing a database query inside a loop over a collection of records.
```python
# Bad: N+1 queries
users = db.query(User).all()
for user in users:
    posts = db.query(Post).filter_by(user_id=user.id).all()

# Good: Single batch join or eager load
users = db.query(User).options(joinedload(User.posts)).all()
```

### Unindexed Queries & Full Table Scans
- Check if filter conditions (`WHERE`, `ORDER BY`, `JOIN ON`) use indexed columns.
- Ensure composite indexes match query column order (leftmost prefix rule).

### Pagination
- Avoid unbounded `SELECT *` without `LIMIT`.
- Prefer cursor-based (keyset) pagination over deep `OFFSET` for high-volume datasets.

---

## 2. Memory & Resource Lifecycle

- **Streams & Buffers**: Process large payloads (files, CSV exports, media) via streams rather than loading entire blobs into memory.
- **Connection Leaks**: Ensure database connections, HTTP clients, and file descriptors are wrapped in `try...finally`, context managers (`with`), or automated pool managers.
- **Event Listeners**: Ensure subscriptions, event handlers, and timers are deregistered upon unmount or scope exit to prevent memory leaks.

---

## 3. Concurrency & Async Traps

- **Unbounded Parallelism**: Avoid `Promise.all(massiveArray.map(...))` or launching thousands of unthrottled goroutines/tasks. Use worker pools or concurrency limits (e.g. `p-limit`).
- **Race Conditions**: In concurrent writes (e.g. balance updates, seat reservation), use database transactions with row-level locks (`SELECT ... FOR UPDATE`) or optimistic concurrency control (`version` column).
- **Blocking the Event Loop**: In Node.js / Python asyncio, avoid heavy CPU calculations, synchronous file I/O (`fs.readFileSync`), or crypto operations on the main thread.
