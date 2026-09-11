# Preset: Python & FastAPI Production Backend Optimization

Specialized engineering standards for robust, high-performance Python, FastAPI, and async web services.

---

## 1. Async Non-Blocking Endpoints & CPU Offloading
- Use `async def` for I/O-bound endpoints (database queries, HTTP calls, file reads).
- Never execute blocking CPU-heavy calculations (image processing, encryption, heavy data parsing) directly inside the async event loop; offload them to `asyncio.to_thread()` or background worker queues (Celery, ARQ, Redis Queue).

## 2. Boot-Time Fail-Fast Environment Validation
- Validate all environment variables and secrets strictly at startup using Pydantic v2 `BaseSettings`.
- Disallow undefined extra environment variables and provide typed defaults:
```python
from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import PostgresDsn, SecretStr

class Settings(BaseSettings):
    database_url: PostgresDsn
    jwt_secret: SecretStr
    environment: str = "production"

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

settings = Settings()
```

## 3. Anti-IDOR Scoped Database Queries
- Never retrieve or mutate resources solely by client-supplied ID parameters.
- Always scope queries to the authenticated user or tenant identity extracted from verified tokens:
```python
# ❌ UNSAFE: IDOR vulnerability
@router.get("/documents/{doc_id}")
async def get_doc(doc_id: uuid.UUID, session: AsyncSession = Depends(get_db)):
    doc = await session.get(Document, doc_id)
    return doc

# ✅ SECURE: Scoped to verified user
@router.get("/documents/{doc_id}")
async def get_doc(
    doc_id: uuid.UUID,
    user: CurrentUser = Depends(get_current_user),
    session: AsyncSession = Depends(get_db)
):
    stmt = select(Document).where(Document.id == doc_id, Document.user_id == user.id)
    result = await session.execute(stmt)
    doc = result.scalar_one_or_none()
    if not doc:
        raise HTTPException(status_code=404, detail="Document not found")
    return doc
```

## 4. Atomic Database Transactions & Session Management
- Never perform non-atomic multi-step writes without explicit transaction scoping.
- Use async context managers to guarantee rollback on any failure:
```python
async with session.begin():
    user.credits -= item.price
    session.add(Order(user_id=user.id, item_id=item.id))
```

## 5. Low-Memory Serialization & Strict Schema Guardrails
- Utilize Pydantic v2 with native Rust core serialization for high-throughput JSON processing.
- Explicitly configure schemas with `extra = "forbid"` on mutation DTOs to prevent mass-assignment injection:
```python
class ProfileUpdateDTO(BaseModel):
    bio: str | None = None
    display_name: str | None = None

    model_config = ConfigDict(extra="forbid")
```
- Never return raw database ORM entities directly. Always define dedicated `response_model` schemas.

## 6. Zero N+1 Queries & Mandatory Pagination
- Always enforce eager loading on foreign relationships via `selectinload` or `joinedload`.
- Mandatory default limit (max 50-100 items) on every list endpoint. Never allow unbounded queries.

## 7. Sanitized Production Exception Handling
- Catch unhandled exceptions globally, log detailed stack traces securely with correlation IDs, and return generic RFC 7807 problem details to the client without exposing internal DB or code paths.
