# Battle-Hardened Backend Engineering Standards

A comprehensive guide and operational protocol for AI agents engineering production-ready backends, APIs, and microservices.

Standard AI models frequently write backend code that looks deceptively functional in simple tutorials but fails catastrophically under production load or leaks user data to attackers. Every AI agent operating under `agential-skill` must eliminate the **7 Deadly Backend AI Traps** detailed below.

---

## The 7 Deadly Backend AI Traps (Diagnosis & Fix)

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        THE 7 DEADLY BACKEND AI TRAPS & SOLUTIONS                       │
├─────────────────────────┬───────────────────────────────┬──────────────────────────────┤
│ 1. Secret & Env Leaks   │ process.env || "default"      │ Fail-fast boot schema (Zod)  │
│ 2. The N+1 Query Plague │ db.find inside .map() loop    │ Batch queries / Prisma join  │
│ 3. Mass-Assignment      │ db.update({ data: req.body }) │ Strict schema picking (.pick)│
│ 4. IDOR Vulnerability   │ WHERE id = req.params.id      │ Enforce WHERE userId = auth  │
│ 5. Race Conditions      │ read -> mutate -> save loop   │ DB atomic ops & $transaction │
│ 6. Stack Trace Leaks    │ res.status(500).send(err)     │ Sanitized error middleware   │
│ 7. Memory/Payload DoS   │ Read full file into memory    │ Streams & strict body limits │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

### Trap 1: Boot-Time Environment Variable Leaks & Insecure Fallbacks

* **The Problem**: AI models frequently write code with insecure fallbacks like `const secret = process.env.JWT_SECRET || "fallback_secret_123"`. If the environment variable fails to load in production, the application silently boots using a publicly known secret. Alternatively, they access `process.env.DB_URL` deep inside request handlers hours after launch, causing runtime crashes.
* **The Rule**: **Fail-Fast at Boot Time**. All environment variables must be strictly validated against a typed schema before the server accepts a single HTTP connection. If any variable is missing or malformed, the process must terminate immediately with a clear diagnostic message.

#### ❌ Wrong (Standard AI Default):
```typescript
// DANGEROUS: Silently insecure in production
const jwtSecret = process.env.JWT_SECRET || "dev_secret";
const stripeKey = process.env.STRIPE_SECRET_KEY; // Crashes at checkout if missing
```

#### ✅ Right (Agential Skill Standard):
```typescript
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32, "JWT_SECRET must be at least 32 characters"),
  CORS_ORIGIN: z.string().url().default("http://localhost:3000"),
});

// Fails immediately during boot with precise field errors if invalid
export const env = envSchema.parse(process.env);
```

---

### Trap 2: The N+1 Query Plague & Unbounded Database Fetches

* **The Problem**: When fetching a list of parent entities (e.g. 100 organizations), AI models routinely query child entities (e.g. users, invoices) inside a `.map()` or `for` loop. This generates 101 separate database round-trips ($N+1$), spiking CPU usage and locking connection pools. Furthermore, AI often executes `SELECT * FROM table` without limits or pagination.
* **The Rule**:
  1. **Batch or Join**: Use ORM inclusions (`include: { items: true }`), composite joins, or DataLoader patterns.
  2. **Mandatory Pagination**: Every query returning a collection must enforce a maximum limit (`take: 50`, `LIMIT 50`) and support cursor or limit-offset pagination.
  3. **Mandatory Indexes**: Ensure foreign keys, query filter fields (`status`, `created_at`), and lookup columns (`email`) have explicit database indexes.

#### ❌ Wrong (Standard AI Default):
```typescript
// DISASTER: 1 + N database round-trips & unbounded table scan
const users = await prisma.user.findMany(); // Unbounded: crashes on 100k users
const result = await Promise.all(
  users.map(async (user) => {
    const orders = await prisma.order.findMany({ where: { userId: user.id } }); // N queries!
    return { ...user, orders };
  })
);
```

#### ✅ Right (Agential Skill Standard):
```typescript
// Single optimized query with pagination and eager relational loading
const PAGE_SIZE_MAX = 50;

export async function getUsersWithOrders(cursor?: string, limit = 20) {
  const take = Math.min(limit, PAGE_SIZE_MAX);
  
  return prisma.user.findMany({
    take,
    skip: cursor ? 1 : 0,
    cursor: cursor ? { id: cursor } : undefined,
    orderBy: { createdAt: "desc" },
    include: {
      orders: {
        take: 10,
        orderBy: { createdAt: "desc" },
        select: { id: true, total: true, status: true }
      }
    }
  });
}
```

---

### Trap 3: Mass Assignment & Over-Posting Vulnerabilities

* **The Problem**: AI models often write `await prisma.user.update({ where: { id }, data: req.body })`. Attackers can send a payload containing `{ "role": "admin", "isVerified": true, "balance": 99999 }`, escalating privileges instantly.
* **The Rule**: Never pass unvalidated request bodies to ORM write operations. Validate incoming payloads through a strict schema (Zod/Pydantic) that explicitly strips or ignores unauthorized fields.

#### ❌ Wrong (Standard AI Default):
```typescript
app.patch("/api/users/:id", async (req, res) => {
  // CRITICAL SECURITY HOLE: Client can overwrite any column in DB!
  const updated = await prisma.user.update({
    where: { id: req.params.id },
    data: req.body,
  });
  res.json(updated);
});
```

#### ✅ Right (Agential Skill Standard):
```typescript
const UpdateProfileSchema = z.object({
  displayName: z.string().min(2).max(50).optional(),
  bio: z.string().max(250).optional(),
  avatarUrl: z.string().url().optional(),
}).strict(); // Rejects unexpected fields like 'role' or 'balance'

app.patch("/api/users/:id", authenticateToken, async (req, res) => {
  const parsed = UpdateProfileSchema.parse(req.body);
  
  const updated = await prisma.user.update({
    where: { id: req.user.id }, // Scoped to authenticated user (Anti-IDOR)
    data: parsed,
    select: { id: true, displayName: true, bio: true, avatarUrl: true }
  });
  res.json(updated);
});
```

---

### Trap 4: Insecure Direct Object References (IDOR) & Scoped Authorization

* **The Problem**: An endpoint like `GET /api/invoices/:invoiceId` or `DELETE /api/documents/:id` checks that the user is logged in, but fails to check if the requested invoice or document actually belongs to them. Any user can view or delete another user's private data simply by changing the ID in the URL.
* **The Rule**: All queries affecting private or tenant-specific records must enforce ownership constraints at the database query level:
  `WHERE id = :documentId AND organizationId = :userOrgId`.

#### ❌ Wrong (Standard AI Default):
```typescript
app.delete("/api/documents/:id", authenticate, async (req, res) => {
  // VULNERABLE: User A can delete User B's documents!
  await prisma.document.delete({
    where: { id: req.params.id }
  });
  res.status(204).send();
});
```

#### ✅ Right (Agential Skill Standard):
```typescript
app.delete("/api/documents/:id", authenticate, async (req, res) => {
  // GUARANTEED: Only the document owner or tenant can delete
  const deleteResult = await prisma.document.deleteMany({
    where: {
      id: req.params.id,
      userId: req.user.id, // Ownership constraint enforced directly in query
    }
  });

  if (deleteResult.count === 0) {
    return res.status(404).json({ error: "Document not found or access denied" });
  }

  res.status(204).send();
});
```

---

### Trap 5: Race Conditions & Non-Atomic Read-Modify-Write Loops

* **The Problem**: When updating inventory, credits, or balances, AI models read the record into memory, perform arithmetic in JavaScript, and write it back:
  ```typescript
  const wallet = await getWallet(userId);
  wallet.balance -= amount;
  await saveWallet(wallet);
  ```
  If two requests arrive simultaneously, both read the original balance, resulting in a **double-spend vulnerability** and lost revenue.
* **The Rule**:
  1. **Atomic DB Operations**: Use database-level increment/decrement operations (`UPDATE wallets SET balance = balance - :amount WHERE id = :id AND balance >= :amount`).
  2. **Transactions**: Wrap multi-entity updates in explicit atomic transactions (`prisma.$transaction`, `BEGIN / COMMIT`).
  3. **Idempotency Keys**: Require an `Idempotency-Key` header on financial and critical state-mutating endpoints to protect against network retries.

#### ❌ Wrong (Standard AI Default):
```typescript
// RACE CONDITION: Double-spend bug under concurrent clicks
const user = await prisma.user.findUnique({ where: { id: userId } });
if (user.balance < 50) return res.status(400).send("Insufficient funds");

await prisma.user.update({
  where: { id: userId },
  data: { balance: user.balance - 50 }
});
await prisma.order.create({ data: { userId, amount: 50 } });
```

#### ✅ Right (Agential Skill Standard):
```typescript
// Atomic transaction with database-level concurrency protection
await prisma.$transaction(async (tx) => {
  // Decrement atomically only if balance is sufficient
  const user = await tx.user.updateMany({
    where: {
      id: userId,
      balance: { gte: 50 }, // Concurrency guard
    },
    data: {
      balance: { decrement: 50 }, // Atomic operator
    },
  });

  if (user.count === 0) {
    throw new InsufficientFundsError("Insufficient balance or concurrent update");
  }

  return tx.order.create({
    data: { userId, amount: 50, status: "PAID" },
  });
});
```

---

### Trap 6: Stack Trace Information Disclosure & Cryptic Status Codes

* **The Problem**: AI models often catch errors and return `res.status(500).json({ error: err.message, stack: err.stack })`. This reveals database schemas, internal file paths, and environment secrets to attackers. Conversely, some models catch errors and return HTTP 200 with `{ success: false }`, breaking standard REST semantics, HTTP caching, and monitoring alerts.
* **The Rule**:
  1. **Centralized Error Middleware**: Catch all unhandled exceptions in a centralized error handler.
  2. **Sanitize Production Errors**: In production, return an opaque user-facing message paired with a unique correlation ID (`requestId`). Log the full stack trace internally to your secure logging pipeline.
  3. **Semantic HTTP Status Codes**:
     - `400 Bad Request`: Schema validation failure.
     - `401 Unauthorized`: Missing or invalid token.
     - `403 Forbidden`: Authenticated user lacks permission/ownership.
     - `404 Not Found`: Entity does not exist.
     - `409 Conflict`: Unique constraint violation (e.g. email taken).
     - `422 Unprocessable Entity`: Semantic business logic violation.
     - `429 Too Many Requests`: Rate limit reached.
     - `500 Internal Server Error`: Unexpected server exception.

#### ❌ Wrong (Standard AI Default):
```typescript
app.post("/api/login", async (req, res) => {
  try {
    /* ... */
  } catch (err: any) {
    // LEAKS INTERNAL PATHS & DB DETAILS!
    res.status(500).json({ error: err.message, stack: err.stack });
  }
});
```

#### ✅ Right (Agential Skill Standard):
```typescript
// Centralized Error Middleware
export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  const requestId = req.headers["x-request-id"] || crypto.randomUUID();

  // 1. Handled Domain Error
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      code: err.code,
      message: err.message,
      requestId,
    });
  }

  // 2. Input Validation Error (e.g. Zod)
  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      code: "VALIDATION_ERROR",
      errors: err.flatten().fieldErrors,
      requestId,
    });
  }

  // 3. Unhandled System Error: Log internally, never leak to client
  logger.error({ requestId, err }, "Unhandled server exception");
  
  res.status(500).json({
    success: false,
    code: "INTERNAL_SERVER_ERROR",
    message: "An unexpected error occurred. Please contact support.",
    requestId,
  });
}
```

---

### Trap 7: Memory Bloat, Unbounded Payloads & Missing Rate Limits (DoS)

* **The Problem**: AI models frequently read entire files into memory buffers (`fs.readFileSync()`), parse unbounded JSON bodies without size limits, and omit rate limiting on authentication and search endpoints. A single 50MB file or automated script can crash the Node.js or Python process with an Out-of-Memory (OOM) error.
* **The Rule**:
  1. **Strict Body Limits**: Restrict JSON body size to sensible limits (e.g. `100kb`–`1mb`).
  2. **Stream File I/O**: Use Node.js streams (`pipeline`) or async generators when reading, writing, or transforming files.
  3. **Rate Limiting**: Apply token-bucket or sliding-window rate limiting on all public authentication, AI proxy, and expensive query endpoints.

#### ❌ Wrong (Standard AI Default):
```typescript
app.use(express.json()); // Defaults to no rate limit, risky memory buffer
app.get("/api/download-report", (req, res) => {
  // CRASHES PROCESS: Loads multi-gigabyte CSV into memory buffer
  const fileData = fs.readFileSync("/large-report.csv");
  res.send(fileData);
});
```

#### ✅ Right (Agential Skill Standard):
```typescript
import rateLimit from "express-rate-limit";

// Rate limiting on sensitive routes
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Max 10 attempts per IP
  standardHeaders: true,
  message: { error: "Too many login attempts. Please try again later." }
});

// Strict JSON payload limits
app.use(express.json({ limit: "100kb" }));

// Stream large files directly to response without loading into RAM
app.get("/api/download-report", (req, res) => {
  res.setHeader("Content-Type", "text/csv");
  const readStream = fs.createReadStream("/large-report.csv");
  readStream.pipe(res);
});
```

---

## The AI Agent Backend Checklist

Before reporting completion on any backend route, migration, or controller, verify:
- [ ] **Env Validation**: Are all environment variables validated via Zod/Pydantic at startup?
- [ ] **Input Schemas**: Is `req.body` parsed and stripped through an explicit schema?
- [ ] **Anti-IDOR**: Is the database query explicitly scoped to `req.user.id` or `tenantId`?
- [ ] **N+1 Guard**: Are related models fetched via joins/inclusions rather than looped queries?
- [ ] **Pagination**: Does every collection endpoint enforce a maximum limit?
- [ ] **Atomic Updates**: Are numeric increments or multi-step writes wrapped in transactions?
- [ ] **Error Sanitization**: Are internal stack traces and database schemas stripped from client responses?
- [ ] **Connection Pooling**: Is the database client instantiated once as a pooled singleton?
