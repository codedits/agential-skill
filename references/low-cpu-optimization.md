# Ultra-Low CPU & Resource Optimization Guide

Actionable rules to ensure both web applications and software programs run with minimal CPU load, battery drain, and memory pressure.

---

## 1. Web Applications (Frontend)

### Rule 1: Eliminate DOM Layout Thrashing
- Reading layout properties (e.g., `offsetWidth`, `clientHeight`, `scrollTop`) right after mutating styles triggers forced synchronous reflows.
- **Remedy**: Read all values first, then batch all style/DOM updates in a single pass or use `requestAnimationFrame`.

### Rule 2: Hardware-Accelerated Animations
- **Bad (CPU Reflow)**: Animating `top`, `left`, `margin`, `width`, or `height`. These force the browser CPU to re-calculate layouts 60 times per second.
- **Good (GPU Compositor)**: Animate exclusively using `transform` (`translate3d`, `scale`) and `opacity`.

### Rule 3: Passive Event Listeners & Throttling
- For scroll, resize, or mousemove handlers, always pass `{ passive: true }` so the browser does not block scrolling waiting for JavaScript execution:
  ```javascript
  window.addEventListener('scroll', onScroll, { passive: true });
  ```
- Debounce search inputs (e.g. 250ms–300ms) to prevent executing queries on every single keystroke.

### Rule 4: Virtualization & Lazy Loading
- Never insert more than 50–100 visible items into the DOM at once. Use virtual scrolling (`react-window`, `IntersectionObserver`) for large datasets.
- Use `loading="lazy"` on images and iframes.

---

## 2. Software & Backend Applications

### Rule 1: Never Use Busy-Waiting Loops
- **Anti-pattern**: Polling variables in a tight loop:
  ```python
  # BAD: Consumes 100% CPU on a core
  while not task.is_ready():
      pass
  ```
- **Good**: Use thread synchronization primitives (`threading.Event`, async promises, channels, or signals):
  ```python
  # GOOD: 0% CPU while waiting
  task.wait_event.wait(timeout=5.0)
  ```

### Rule 2: Algorithmic Efficiency ($O(1)$ vs $O(n^2)$)
- Avoid checking membership in lists inside a loop (`if item in my_list:` where `my_list` is a list). Convert the collection to a `Set` or `Dict` for $O(1)$ lookups.
- Pre-allocate buffer sizes when working with binary streams or arrays.

### Rule 3: Graceful Teardown & Garbage Collection
- Deregister event listeners, cancel `setInterval` timers, and close network sockets when tearing down components or handlers.
