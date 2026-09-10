# Preset: React & Next.js Low-CPU Optimization

Specialized guidelines for React, Next.js App Router, and modern frontend frameworks.

---

## 1. Zero Hydration Overhead & Server Components
- Default to **React Server Components (RSC)**. Do NOT add `'use client'` unless the component requires interactive DOM event handlers or state.
- Keep Client Components at the leaves of your component tree to reduce client bundle size.

## 2. Re-render Minimization & Memory Discipline
- Wrap expensive data transformations in `useMemo()` with precise dependencies.
- Pass stable function references using `useCallback()`.
- Avoid recreating inline object literals inside JSX loops (`style={{ ... }}`), which forces subtrees to re-render.

## 3. Image & Asset Lifecycle
- Use `next/image` with `priority` only for Above-The-Fold hero banners. All other images must use native lazy loading to save bandwidth and CPU decoding cycles.
