import { useState } from "react";
import { Link } from "react-router-dom";
import { PROJECTS, type Project } from "../data";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "ux/ui", label: "UX / UI" },
  { id: "coding", label: "Coding" },
  { id: "illustration", label: "Illustration" },
] as const;

type FilterId = typeof FILTERS[number]["id"];

export default function Work() {
  const [filter, setFilter] = useState<FilterId>("all");
  const list = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.type === filter);

  return (
    <section className="work" id="work" data-screen-label="03 Work">
      <div className="work__head">
        <span className="section-eyebrow">B — Selected works</span>
        <span className="section-eyebrow section-eyebrow--right">Section 02 / 04</span>
      </div>

      <h2 className="section-title">
        <span>The </span>
        <span className="italic">work</span>
        <span>, one piece</span>
        <br />
        <span>at a </span>
        <span className="italic">time</span>
        <span className="section-title__period">.</span>
      </h2>

      <div className="work__filters" role="tablist">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            role="tab"
            aria-selected={filter === f.id}
            className={`pill ${filter === f.id ? "pill--on" : ""}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
            <span className="pill__count">
              {f.id === "all"
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.type === f.id).length}
            </span>
          </button>
        ))}
      </div>

      <ol className="work__list">
        {list.map((p, i) => (
          <ProjectRow key={p.id} p={p} i={i} />
        ))}
      </ol>
    </section>
  );
}

function ProjectRow({ p, i: _i }: { p: Project; i: number }) {
  return (
    <li className="row">
      <Link to={`/work/${p.slug}`} className="row__link" aria-label={`Open ${p.title} case study`}>
        <div className="row__inner">
          <span className="row__no">{p.no}</span>
          <span className="row__title">
            {p.title}
            <span className="row__title-italic"> — {p.kicker.split(" · ")[1]}</span>
          </span>
          <span className="row__tags">
            {p.tags.slice(0, 2).map((t) => (
              <span key={t}>{t}</span>
            ))}
          </span>
          <span className="row__year">{p.year}</span>
          <span className="row__arrow" aria-hidden="true">→</span>
        </div>

      </Link>
    </li>
  );
}
