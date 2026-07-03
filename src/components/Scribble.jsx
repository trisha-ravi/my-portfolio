import { useInView } from "../hooks/useInView";

export default function Scribble({ className = "", style }) {
  const [ref, inView] = useInView({ threshold: 0.6 });

  return (
    <svg
      ref={ref}
      className={`scribble ${inView ? "scribble--drawn" : ""} ${className}`.trim()}
      viewBox="0 0 220 90"
      style={style}
      aria-hidden="true"
    >
      <ellipse
        className="scribble__loop scribble__loop--1"
        cx="110"
        cy="45"
        rx="100"
        ry="32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <ellipse
        className="scribble__loop scribble__loop--2"
        cx="112"
        cy="46"
        rx="96"
        ry="29"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.55"
      />
    </svg>
  );
}
