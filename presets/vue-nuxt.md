# Preset: Vue & Nuxt UI Craftsmanship

Specialized guidelines for Vue 3 Composition API and Nuxt 3.

---

## 1. Reactivity Tuning with shallowRef
- Use `shallowRef()` or `shallowReactive()` for large arrays or objects when deep reactivity is not required to avoid unnecessary proxy overhead.

## 2. Component Caching & Lazy Loading
- Use `<KeepAlive>` for expensive dynamic tabs or view routers to preserve DOM state without rebuilding components.
- Use `defineAsyncComponent()` for dialogs, modals, and heavy widgets so they only load when triggered.

## 3. Computed Property Purity
- Keep `computed()` getters pure without side effects.
- Avoid modifying reactive state inside computed properties or watchers.
