# Beginner-Friendly Questioning Framework

A guide for AI models on asking clarifying questions that any user—even with little to no technical background—can easily understand and answer.

---

## Core Principles

1. **Speak the User's Language**: Never use framework terms, acronyms, or architectural jargon without an immediate plain-language translation.
2. **Focus on the "What It Does", Not the "How It's Coded"**: Users care about how their application behaves, looks, and feels, not internal pointers or class hierarchies.
3. **Keep Options Concrete & Limited**: Provide 2 to 3 clear choices. Avoid open-ended essays.

---

## Jargon vs. Plain-English Translation Table

| Technical Jargon (AVOID) | Plain-English Formulation (USE) |
| :--- | :--- |
| "Should we use SSR, SSG, or client-side rendering?" | "Do you want this page to show up in Google search results and load instantly, or will it be a private dashboard after login?" |
| "Do you want optimistic UI updates or a blocking spinner?" | "When someone clicks 'Save', should the screen update immediately, or should it show a small loading spinner until it's confirmed?" |
| "Do you want to normalize the schema or store denormalized JSON?" | "Will you need to search and filter by individual fields, or do you just want to save and retrieve the whole item as one piece?" |
| "What TTL should we set on the Redis cache?" | "How quickly should updates appear to other users: within seconds, a few minutes, or only when they refresh?" |

---

## The 3-Part Question Structure

When asking questions, structure each question into:
1. **The Context**: One sentence explaining what feature we are deciding.
2. **The Question**: Plain-language question.
3. **The Options**: 2-3 numbered choices with simple recommendations.

### Example:
> **Question 1: Saving Your Changes**
> When a user edits a note, how should the app save it?
> - **Option 1 (Recommended)**: Auto-save automatically a few seconds after the user stops typing.
> - **Option 2**: Require the user to click a "Save Changes" button.
