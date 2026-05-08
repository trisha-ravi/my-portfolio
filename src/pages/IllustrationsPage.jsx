import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import { ILLUSTRATIONS } from "../data";
import aigt from "../assets/aigt.png";
import cafeDoodle from "../assets/cafe_doodle.png";
import { useReveal } from "../hooks/useReveal";

const ILLO_IMAGES = {
  "i00a": aigt,
  "i00b": cafeDoodle,
};

const SERIES = ["All", "Identity", "Editorial", "Marks", "Charcoal", "Print"];

export default function IllustrationsPage() {
  const [series, setSeries] = useState("All");
  const list = useMemo(
    () =>
      series === "All"
        ? ILLUSTRATIONS
        : ILLUSTRATIONS.filter((it) => it.series === series),
    [series]
  );
  const ref = useReveal({ threshold: 0.05 });

  return (
    <main className="page page--archive" ref={ref}>
      <PageNav />

      <h1 className="section-title">
        <span data-reveal data-delay="1">the </span>
        <span className="italic" data-reveal data-delay="2">archive</span>
        <br />
        <span data-reveal data-delay="3">of </span>
        <span className="italic" data-reveal data-delay="4">drawn</span>
        <span data-reveal data-delay="4"> things.</span>
      </h1>

      <p className="archive__lede" data-reveal data-delay="5">
        A long-running notebook of identity work, editorial spots, and personal charcoal studies — kept loose so it can stay honest. Filters below.
      </p>

      <div className="archive__head" data-reveal="fade" data-delay="5">
        <span className="section-eyebrow">D — Drawn things</span>
        <span className="section-eyebrow section-eyebrow--right">/illustrations · 2024 — 2026</span>
      </div>

      <div className="archive__filters" role="tablist" data-reveal data-delay="6">
        {SERIES.map((s) => {
          const count =
            s === "All"
              ? ILLUSTRATIONS.length
              : ILLUSTRATIONS.filter((it) => it.series === s).length;
          return (
            <button
              key={s}
              role="tab"
              aria-selected={series === s}
              className={`pill ${series === s ? "pill--on" : ""}`}
              onClick={() => setSeries(s)}
            >
              {s}
              <span className="pill__count">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="archive__grid">
        {list.map((it, i) => (
          <figure
            key={it.id}
            className={`archive__item${!ILLO_IMAGES[it.id] ? " archive__item--no-img" : ""}`}
            data-reveal="scale"
            data-delay={String(Math.min(i + 1, 6))}
          >
            {ILLO_IMAGES[it.id] && (
              <div className="archive__real-img" style={{ aspectRatio: it.ratio }}>
                <img src={ILLO_IMAGES[it.id]} alt={it.label} />
              </div>
            )}
            <figcaption className="archive__caption">
              <span className="archive__caption-no">{it.no}</span>
              <div className="archive__caption-body">
                <span className="archive__caption-label">{it.label}</span>
                <span className="archive__caption-meta">
                  {it.series} · {it.year}
                </span>
              </div>
            </figcaption>
            <p className="archive__note">{it.note}</p>
          </figure>
        ))}
      </div>

      <footer className="archive__foot" data-reveal data-delay="2">
        <p className="archive__foot-line">
          Want a print or a commission? <Link to="/#contact">say hi →</Link>
        </p>
        <Link to="/" className="ghost-btn">← Back to home</Link>
      </footer>
    </main>
  );
}
