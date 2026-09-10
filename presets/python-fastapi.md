# Preset: Python & FastAPI Low-CPU Optimization

Specialized guidelines for high-performance Python, FastAPI, and async web services.

---

## 1. Async Non-Blocking Endpoints
- Use `async def` for I/O-bound endpoints (database queries, HTTP calls, file reads).
- Never execute blocking CPU-heavy calculations directly inside the async event loop; offload them to `asyncio.to_thread()`.

## 2. Low-Memory Serialization
- Utilize Pydantic v2 with native Rust core serialization for high-throughput JSON processing.
- Use generator expressions (`(x for x in data)`) instead of allocating massive in-memory lists.

## 3. Database Connection Pooling
- Maintain persistent async connection pools (e.g., `asyncpg` or `SQLAlchemy[asyncio]`). Never create new database connections per request.
