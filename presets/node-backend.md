# Preset: Node.js, TypeScript & Modern Backend Architecture

Specialized guidelines for Node.js, Express, Hono, Fastify, and TypeScript API services with Prisma / Drizzle ORM.

---

## 1. Database Singleton & Connection Pool Management
Never instantiate multiple ORM or database clients inside request handlers or middleware. Always export a singleton instance with appropriate connection pool limits:

```typescript
// db.ts: Prisma client singleton with connection pooling
import { PrismaClient } from "@prisma/client";

declare global {
  var prismaGlobal: PrismaClient | undefined;
}

export const db = globalThis.prismaGlobal ?? new PrismaClient({
  log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
});

if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = db;
}
```

---

## 2. Boot-Time Fail-Fast Environment Validation
Define all configuration variables in a single schema. Terminate the process immediately with descriptive diagnostic output if any required variable is missing:

```typescript
// config/env.ts
import { z } from "zod";

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORT: z.coerce.number().default(4000),
  DATABASE_URL: z.string().url(),
  JWT_ACCESS_SECRET: z.string().min(32),
  REDIS_URL: z.string().url().optional(),
});

export const env = EnvSchema.parse(process.env);
```

---

## 3. Strict Request Validation & Anti-Mass Assignment
Always validate inputs using `.strict()` Zod schemas to reject unauthorized columns and prevent privilege escalation:

```typescript
import { z } from "zod";

export const CreateProjectSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
}).strict(); // Never allow clients to inject 'role', 'id', or 'tenantId'
```

---

## 4. Scoped Authorization & IDOR Defense
Never query by resource ID alone when modifying or reading private tenant data. Always include the authenticated user/organization constraint directly in the query filter:

```typescript
// GET /api/projects/:id
export async function getProject(req: AuthenticatedRequest, res: Response) {
  const project = await db.project.findFirst({
    where: {
      id: req.params.id,
      organizationId: req.user.organizationId, // Enforced at DB level
    },
  });

  if (!project) {
    return res.status(404).json({ error: "Project not found" });
  }

  return res.json(project);
}
```

---

## 5. Clean Concurrency & Atomic Transactions
Protect financial and critical state mutations from race conditions using transactions and atomic database operators:

```typescript
export async function transferCredits(fromId: string, toId: string, amount: number) {
  return db.$transaction(async (tx) => {
    // 1. Deduct with balance guard
    const sender = await tx.account.updateMany({
      where: { id: fromId, credits: { gte: amount } },
      data: { credits: { decrement: amount } },
    });

    if (sender.count === 0) {
      throw new Error("INSUFFICIENT_CREDITS");
    }

    // 2. Credit recipient
    await tx.account.update({
      where: { id: toId },
      data: { credits: { increment: amount } },
    });
  });
}
```

---

## 6. Structured Error Handling & Telemetry
Catch all unhandled exceptions in centralized middleware, generate unique request IDs, and return semantic HTTP status codes without leaking internal stack traces:

```typescript
export function errorHandler(err: unknown, req: Request, res: Response, next: NextFunction) {
  const requestId = req.headers["x-request-id"] || crypto.randomUUID();

  if (err instanceof z.ZodError) {
    return res.status(400).json({
      error: "VALIDATION_FAILED",
      details: err.flatten().fieldErrors,
      requestId,
    });
  }

  logger.error({ err, requestId }, "Unhandled server error");
  return res.status(500).json({
    error: "INTERNAL_SERVER_ERROR",
    message: "A server error occurred.",
    requestId,
  });
}
```
