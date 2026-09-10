# Ultra-Low CPU & Resource Optimization Guide (Web & Software)

Practical rules to guarantee that web applications and software run silky-smooth with almost 0% idle CPU usage and zero battery drain.

---

## 1. Web Applications & Frontend Optimization (Primary Focus)

### Rule 1: Eliminate DOM Layout Thrashing (Forced Reflows)
- **Problem**: Reading a layout property (`offsetWidth`, `clientHeight`, `scrollTop`, `getBoundingClientRect`) immediately after writing a style forces the browser CPU to recalculate the entire page geometry synchronously.
- **Rule**: Read all measurements first. Batch all DOM/style modifications together or schedule them inside `requestAnimationFrame`.

### Rule 2: GPU-Accelerated Animations (Zero CPU Reflow)
- **Problem**: Animating `top`, `left`, `margin`, `width`, or `height` forces the CPU to recalculate layout every frame (60–120 times/sec), causing noticeable lag and fan spin on laptops and phones.
- **Rule**: Animate **exclusively** with `transform` (`translate3d`, `scale`) and `opacity`. These are processed entirely on the GPU compositor thread without touching the CPU.

### Rule 3: Passive Event Listeners & Input Debouncing
- **Scroll/Wheel**: Always add `{ passive: true }` so the browser can scroll immediately without waiting for JavaScript execution:
  ```javascript
  window.addEventListener('scroll', handleScroll, { passive: true });
  ```
- **Typing Inputs**: Debounce text input handlers by 200–300ms so database/filter logic does not run on every single keystroke.

### Rule 4: DOM Virtualization & Lazy Loading
- **Never dump 1,000+ items into the DOM**: Virtualize long lists (render only the 20–50 items visible in the viewport).
- **Media**: Always add `loading="lazy"` and `decoding="async"` to images and video embeds.

### Rule 5: Zero-Bloat Dependencies
- Before installing an npm package, check if modern native Web APIs can do it with 0 bytes of extra overhead:
  - Use native `<dialog>` instead of heavy modal libraries.
  - Use native CSS Grid/Flexbox instead of large layout frameworks.
  - Use native `fetch` / `URLSearchParams` instead of external HTTP utilities.

---

## 2. Software & Backend Applications

### Rule 1: No Busy-Waiting or Polling
- Never write `while (condition) { /* spin */ }`.
- Use async/await, event listeners, promises, or thread condition variables to keep CPU consumption at 0% while waiting.

### Rule 2: Fast Lookups ($O(1)$ vs $O(n)$)
- Avoid repeatedly searching through arrays inside loops. Use `Set` or `Map` (or Python `dict` / `set`) for instantaneous $O(1)$ lookups.

### Rule 3: Automatic Teardown
- Always remove event listeners when components unmount.
- Always clear `setInterval` / `setTimeout` timers to prevent background memory leaks.
