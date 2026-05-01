import { Link } from "react-router-dom";
import StripePlaceholder from "../components/StripePlaceholder";
import { ILLUSTRATIONS } from "../data";

export default function Illustrations() {
  const teaser = ILLUSTRATIONS.slice(0, 5);
  return (
    <section className="illos" id="illustrations" data-screen-label="05 Illustrations">
      <div className="illos__head">
        <span className="section-eyebrow">D — Drawn things</span>
        <span className="section-eyebrow section-eyebrow--right">Section 04 / 04</span>
      </div>

      <h2 className="section-title">
        <span>and a small </span>
        <span className="italic">archive</span>
        <br />
        <span>of </span>
        <span className="italic">drawn</span>
        <span> things.</span>
      </h2>

      <p className="illos__lede">
        A rolling notebook of identity work, editorial spots, and personal charcoal
        studies. The five below are recent — the full archive lives on its own page.
      </p>

      <div className="illos__grid">
        {teaser.map((it, i) => (
          <figure key={it.id} className={`illo illo--${i}`}>
            <StripePlaceholder
              label={it.label}
              ratio={it.ratio}
              swatch={it.swatch}
              index={i + 4}
            />
            <figcaption>
              <span>{String(i + 1).padStart(2, "0")} — {it.label}</span>
              <span>{it.year}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="illos__cta">
        <Link to="/illustrations" className="ghost-btn ghost-btn--lg">
          <span>View full archive</span>
          <span aria-hidden="true">→</span>
        </Link>
        <span className="illos__cta-meta">
          {ILLUSTRATIONS.length} pieces · 2024 — 2026
        </span>
      </div>
    </section>
  );
}
