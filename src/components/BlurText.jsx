import { Fragment } from "react";

/**
 * Reveals text with a staggered blur-to-sharp animation (typing-style).
 */
export default function BlurText({
  text,
  as: Tag = "span",
  className = "",
  by = "word",
  delay = 0,
  stagger = 0.035,
}) {
  if (by === "char") {
    return (
      <Tag className={["blur-text", className].filter(Boolean).join(" ")}>
        {[...text].map((char, i) => (
          <span
            key={i}
            className={`blur-text__unit${char === " " ? " blur-text__unit--space" : ""}`}
            style={{ animationDelay: `${delay + i * stagger}s` }}
          >
            {char === " " ? "\u00a0" : char}
          </span>
        ))}
      </Tag>
    );
  }

  const words = text.split(/\s+/).filter(Boolean);

  return (
    <Tag className={["blur-text", className].filter(Boolean).join(" ")}>
      {words.map((word, i) => (
        <Fragment key={i}>
          {i > 0 ? " " : null}
          <span
            className="blur-text__unit"
            style={{ animationDelay: `${delay + i * stagger}s` }}
          >
            {word}
          </span>
        </Fragment>
      ))}
    </Tag>
  );
}
