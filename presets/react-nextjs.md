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

---

## 4. Framer Motion Standard (Living, Interactive UI)
- Install and use `framer-motion` (or `motion/react`) for fluid, declarative micro-animations.
- Isolate motion into Client Component wrappers at the leaves to preserve Server Component benefits for the surrounding layout:
```tsx
'use client';
import { motion } from 'framer-motion';

// 1. Canonical Smooth Slide-Up Headline
export function HeroHeading({ title }: { title: string }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="text-5xl md:text-7xl font-bold tracking-tight text-white"
    >
      {title}
    </motion.h1>
  );
}

// 2. Scroll-Triggered Staggered Bento Cards
export function BentoGrid({ items }: { items: BentoItem[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 }
        }
      }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
          }}
          whileHover={{ y: -3 }}
          className="rounded-lg border border-white/10 bg-[#121318] p-6"
        >
          {item.content}
        </motion.div>
      ))}
    </motion.div>
  );
}
```
- **CPU Rule**: Animate exclusively `transform` and `opacity`. Avoid animating layout-triggering properties (`height`, `width`, `margin`).
