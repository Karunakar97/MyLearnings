# debouncing vs throttling

## debouncing

-Debouncing ensures that a function is called only after a certain period of inactivity. If the event is triggered again before the delay period is over, the timer resets.

```javascript
function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Usage:
window.addEventListener(
  "resize",
  debounce(() => {
    console.log("Resize event handled after user stops resizing.");
  }, 300)
);
```

## Throttling

Throttling ensures that a function is called at most once every X milliseconds, no matter how many times the event is triggered.

```javascript
function throttle(fn, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Usage:
window.addEventListener(
  "scroll",
  throttle(() => {
    console.log("Scroll event throttled to once every 200ms.");
  }, 200)
);
```
