# Onboarding Question Framework

A guide for asking clarifying questions that any user — especially non-developers — can understand and answer.

---

## Principles

1. **Use everyday language.** Never ask about SSR, state hydration, web workers, or debouncing. Ask about what the user sees on screen.
2. **Offer 2–3 simple choices.** Mark one as **(Recommended)** so the user can reply with a single number.
3. **Limit to 1–3 questions.** Focus on the most important decisions first.

---

## Translation Guide

| Technical (do not ask) | Plain English (use this) |
|:---|:---|
| "Should we use Client-Side Routing or MPA architecture?" | "When navigating between pages, should the screen transition instantly without a reload, or load as standard pages?" |
| "Do you want optimistic UI updates or an async spinner?" | "When someone submits a form, should the change appear immediately, or show a loading spinner until saved?" |
| "Should animations run on requestAnimationFrame or CSS keyframes?" | "Would you prefer smooth, lightweight animations that won't lag on older devices?" |
| "What color theme and design tokens?" | "What visual style: (A) Modern dark mode with subtle accents, or (B) Clean, bright minimalist light mode?" |
| "How should the search input query the backend?" | "Should search results update as the user types, or only after pressing Enter?" |

---

## Question Format

> **Question 1: [Feature Name]**
> *One plain sentence explaining what this controls.*
> - **Option 1 (Recommended)**: [Simple description of the default]
> - **Option 2**: [Alternative for specific use cases]
