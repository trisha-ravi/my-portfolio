import { useEffect, useRef } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Makes an element gently drift toward the pointer while hovered, easing
 * back to center on leave. `strength` scales how far it travels.
 */
export function useMagnetic({ strength = 0.35 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;
    if (window.matchMedia && !window.matchMedia("(hover: hover)").matches) return;

    let raf = 0;

    const handleMove = (event) => {
      const rect = el.getBoundingClientRect();
      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        // important: the scroll-reveal system sets `transform: none !important`
        // on revealed elements, so we need to win that specificity battle.
        el.style.setProperty(
          "transform",
          `translate(${x * strength}px, ${y * strength}px)`,
          "important"
        );
      });
    };

    const reset = () => {
      cancelAnimationFrame(raf);
      el.style.removeProperty("transform");
    };

    el.addEventListener("pointermove", handleMove);
    el.addEventListener("pointerleave", reset);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", handleMove);
      el.removeEventListener("pointerleave", reset);
    };
  }, [strength]);

  return ref;
}
