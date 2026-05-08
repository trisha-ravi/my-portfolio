import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to a container ref.
 * Any child with [data-reveal] gets [data-visible] when it enters the viewport.
 * Pass `threshold` (0–1) and `rootMargin` to tune timing.
 */
export function useReveal({ threshold = 0.15, rootMargin = "0px 0px -60px 0px" } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll("[data-reveal]");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
