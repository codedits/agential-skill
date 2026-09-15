# Preset: React & Next.js

Guidelines for React, Next.js App Router, and modern frontend frameworks.

---

## 1. Server Components

- Default to React Server Components (RSC). Do not add `'use client'` unless the component needs interactive DOM event handlers or state.
- Keep client components at the leaves of the component tree.

## 2. Re-render Minimization

- Wrap expensive data transformations in `useMemo()` with precise dependencies.
- Pass stable function references using `useCallback()`.
- Avoid inline object literals inside JSX loops (`style={{ ... }}`).

## 3. Images

- Use `next/image` with `priority` only for above-the-fold hero banners.
- All other images use native lazy loading.

---

## 4. Tailwind CSS Configuration

### Option A: Tailwind v4 (`app/globals.css`)

```css
@import "tailwindcss";

@theme {
  --font-display: var(--font-space-grotesk), "Space Grotesk", sans-serif;
  --font-sans: var(--font-plus-jakarta), "Plus Jakarta Sans", sans-serif;

  --color-obsidian: #0a0a0c;
  --color-obsidian-card: #121318;
  --color-slate-tech: #0b0f17;
  --color-slate-card: #111827;

  --radius-btn: 6px;
  --radius-card: 12px;
}

:root {
  --background: #f7f7f7;
  --foreground: #0a0a0a;
}

.dark {
  --background: #000000;
  --foreground: #f7f7f7;
}

.section-dark {
  background-color: #000000 !important;
  color: #f7f7f7 !important;
}

::selection {
  background-color: var(--foreground);
  color: var(--background);
}
```

### Option B: Tailwind v3 (`tailwind.config.ts`)

```ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
        sans: ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        obsidian: { DEFAULT: '#0a0a0c', card: '#121318' },
        slateTech: { DEFAULT: '#0b0f17', card: '#111827' },
      },
      borderRadius: { btn: '6px', card: '12px' },
    },
  },
  plugins: [],
};
export default config;
```

---

## 5. Motion Components

Isolate motion into client component wrappers at the leaves:

```tsx
'use client';
import { motion } from 'framer-motion';

// Slide-up headline
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

// Scroll-triggered staggered grid
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
      className="grid grid-cols-1 md:grid-cols-12 gap-6"
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
          }}
          whileHover={{ y: -3 }}
          className={`${item.spanClass || 'md:col-span-4'} rounded-xl border border-white/10 bg-[#121318] p-6`}
        >
          {item.content}
        </motion.div>
      ))}
    </motion.div>
  );
}

// Rolling link
export function RollText({ text, className = '' }: { text: string; className?: string }) {
  return (
    <span className={`relative inline-flex flex-col overflow-hidden leading-tight ${className}`}>
      <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-full">
        {text}
      </span>
      <span className="absolute top-full left-0 inline-block transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-full">
        {text}
      </span>
    </span>
  );
}

// Section eyebrow
export function BracketTag({ label, className = '' }: { label: string; className?: string }) {
  return (
    <span className={`inline-block text-xs font-mono font-bold tracking-[0.25em] uppercase text-zinc-400 ${className}`}>
      [ {label} ]
    </span>
  );
}

// Sticky stacking cards
export function StickyStackCards({ cards }: { cards: CardItem[] }) {
  return (
    <div className="relative w-full">
      {cards.map((card, index) => (
        <div
          key={card.id}
          style={{ top: `${70 + index * 32}px` }}
          className="sticky min-h-[70vh] w-full rounded-2xl border border-white/10 bg-[#121318] p-8 shadow-2xl transition-all duration-300"
        >
          <BracketTag label={card.category} />
          <h3 className="mt-4 text-3xl font-bold text-white">{card.title}</h3>
          <div className="mt-6">{card.content}</div>
        </div>
      ))}
    </div>
  );
}

// Full-bleed hero
export function FullBleedHero({
  eyebrow, title, description, ctaPrimary, ctaSecondary, centerpiece,
}: {
  eyebrow: string;
  title: string;
  description: string;
  ctaPrimary: React.ReactNode;
  ctaSecondary?: React.ReactNode;
  centerpiece?: React.ReactNode;
}) {
  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden bg-[#0a0a0c] pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-between">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_70%)] blur-3xl"
      />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <BracketTag label={eyebrow} />
        <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white max-w-4xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-zinc-400 font-sans leading-relaxed">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {ctaPrimary}
          {ctaSecondary}
        </div>
        {centerpiece && (
          <div className="mt-16 w-full max-w-5xl rounded-xl border border-white/10 bg-[#121318] p-4 shadow-2xl">
            {centerpiece}
          </div>
        )}
      </div>
    </section>
  );
}

// Card
export function ElegantCard({
  category, title, description, status, footer, className = '',
}: {
  category: string;
  title: string;
  description: string;
  status?: string;
  footer?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#121318] bg-gradient-to-b from-white/[0.04] to-transparent p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-2xl hover:shadow-blue-500/5 ${className}`}
    >
      <div>
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <BracketTag label={category} />
          {status && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {status}
            </span>
          )}
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-blue-200">
          {title}
        </h3>
        <p className="mt-3 font-sans text-sm leading-relaxed text-zinc-400">
          {description}
        </p>
      </div>
      {footer && (
        <div className="mt-8 border-t border-white/5 pt-4 text-xs text-zinc-500">
          {footer}
        </div>
      )}
    </div>
  );
}
```
