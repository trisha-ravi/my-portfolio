import type { CSSProperties } from "react";

interface Props {
  className?: string;
  style?: CSSProperties;
}

export default function Scribble({ className = "", style }: Props) {
  return (
    <svg
      className={`scribble ${className}`}
      viewBox="0 0 220 90"
      style={style}
      aria-hidden="true"
    >
      <ellipse cx="110" cy="45" rx="100" ry="32" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="112" cy="46" rx="96" ry="29" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
    </svg>
  );
}
