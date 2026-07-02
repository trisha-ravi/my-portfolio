import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import { ILLUSTRATIONS, ILLUSTRATION_SERIES } from "../data";
import aigt from "../assets/aigt.png";
import cafeDoodle from "../assets/cafe_doodle.png";
import mAnimated from "../assets/manimated.png";
import { useReveal } from "../hooks/useReveal";

const ILLO_IMAGES = {
  "i00a": aigt,
  "i00b": cafeDoodle,
};

const SERIES = ["All", ...ILLUSTRATION_SERIES];

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
    <main className="site-main" ref={ref}>
      <PageNav />

      <header className="archive__intro">
        <h1 className="section-title section-title--page archive__title">
          <span className="archive__title-line">
            <span data-reveal data-delay="1">
              the <span className="italic">archive</span>
            </span>
            <span className="archive__intro-art" data-reveal="scale" data-delay="3">
              <img src={mAnimated} alt="3D character illustration" />
            </span>
            <span data-reveal data-delay="4">
              of <span className="italic">drawn</span> things.
            </span>
          </span>
        </h1>

        <p className="archive__lede" data-reveal data-delay="5">
          A long-running notebook of identity work, editorial spots, and personal charcoal studies — kept loose so it can stay honest.
        </p>
      </header>

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
          Want a print or a commission? <Link to="/about#contact">say hi →</Link>
        </p>
        <Link to="/" className="hero__cta hero__cta--sm">← Back to home</Link>
      </footer>
    </main>
  );
}
