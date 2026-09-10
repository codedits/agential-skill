# Security Review Checklist

Use this checklist during Phase 3 of the Code Review process to audit security-critical code paths across languages and frameworks.

---

## 1. Injection Vulnerabilities

### SQL / NoSQL Injection
- [ ] Are parameter bindings / parameterized queries used consistently?
- [ ] Are raw string interpolations, concatenations, or `f-strings` in query definitions strictly absent?
- [ ] Are ORM raw queries (`raw()`, `sequelize.literal()`, `prisma.$queryRawUnsafe`) validated and parameterized?

### Command & Code Injection
- [ ] Are `eval()`, `exec()`, `Function()`, `subprocess.Popen(..., shell=True)` avoided?
- [ ] If system execution is required, are arguments passed as arrays without shell invocation?

### Path Traversal
- [ ] Are file uploads, downloads, and storage operations restricted to resolved, whitelisted paths?
- [ ] Are `../` sequences or absolute paths sanitized with `path.resolve()` and prefix checks?

---

## 2. Authentication & Session Management

- [ ] Are passwords hashed using modern algorithms (Argon2id, bcrypt with sufficient work factor, PBKDF2)?
- [ ] Are JWTs validated with explicit algorithms (prohibiting `alg: "none"`) and short expiration times?
- [ ] Are sensitive tokens stored in `HttpOnly`, `Secure`, `SameSite=Lax/Strict` cookies rather than local storage?
- [ ] Are rate limits implemented on authentication, password reset, and sensitive endpoints?

---

## 3. Authorization & Access Control

- [ ] Is access control checked on every individual endpoint, not just at the UI routing level?
- [ ] Are Broken Object Level Authorization (BOLA/IDOR) attacks prevented by validating that the authenticated user owns the requested resource ID?
- [ ] Are role checks granular and server-enforced?

---

## 4. Cryptography & Secrets

- [ ] Are hardcoded keys, passwords, client secrets, or tokens absent from source code?
- [ ] Are environment variables used for secret management?
- [ ] Is strong entropy used for random number generation (e.g. `crypto.randomBytes()`, `secrets.token_bytes()`) rather than `Math.random()`?

---

## 5. Client-Side & API Security

- [ ] **XSS**: Are HTML renders escaping user-generated content? Are `dangerouslySetInnerHTML` / `v-html` disallowed unless strictly sanitized?
- [ ] **CORS**: Is `Access-Control-Allow-Origin` restricted to trusted domains rather than wildcard `*` with credentials?
- [ ] **SSRF**: Are user-supplied URLs fetched through internal proxies with private IP (10.x, 192.168.x, 127.x, 169.254.x) blocking?
- [ ] **PII**: Are logs free from customer credit cards, tokens, SSNs, and passwords?
