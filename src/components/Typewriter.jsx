import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";

/**
 * Types out text character-by-character once the element enters view.
 */
export default function Typewriter({
  text,
  as: Tag = "span",
  className = "",
  speed = 70,
  startDelay = 350,
}) {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView) return;

    const chars = [...text];
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setShown(text);
      setDone(true);
      return;
    }

    let i = 0;
    let intervalId;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1;
        setShown(chars.slice(0, i).join(""));
        if (i >= chars.length) {
          clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [inView, text, speed, startDelay]);

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">{shown}</span>
      <span
        className={`typewriter__cursor${done ? " typewriter__cursor--done" : ""}`}
        aria-hidden="true"
      />
    </Tag>
  );
}
