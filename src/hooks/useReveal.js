import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to a container ref.
 * Any child with [data-reveal] gets [data-visible] when it enters the viewport.
 * Re-scans for new [data-reveal] nodes when the subtree changes (e.g. filters).
 */
export function useReveal({ threshold = 0.15, rootMargin = "0px 0px -60px 0px" } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

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

    const observed = new WeakSet();

    const observePending = () => {
      el.querySelectorAll("[data-reveal]:not([data-visible])").forEach((target) => {
        if (observed.has(target)) return;
        observed.add(target);
        observer.observe(target);
      });
    };

    observePending();

    const mutationObserver = new MutationObserver(observePending);
    mutationObserver.observe(el, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [threshold, rootMargin]);

  return ref;
}
