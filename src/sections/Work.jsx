import { useState } from "react";
import { Link } from "react-router-dom";
import { getVisibleProjects } from "../data";
import { useReveal } from "../hooks/useReveal";
import { ProjectThumbnail } from "../components/ProjectMedia";
import { getProjectMedia } from "../data/projectImages";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "ux/ui", label: "UX / UI" },
  { id: "coding", label: "Coding" },
];

export default function Work() {
  const [filter, setFilter] = useState("all");
  const projects = getVisibleProjects();
  const list = filter === "all" ? projects : projects.filter((p) => p.type === filter);
  const ref = useReveal();

  return (
    <section className="work" id="work" ref={ref}>
      <h1 className="section-title section-title--page" data-reveal data-delay="1">
        <span>Selected </span>
        <span className="italic">work</span>
        <span className="section-title__period">.</span>
      </h1>

      <div className="work__filters" role="tablist">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={filter === f.id}
            className={`pill ${filter === f.id ? "pill--on" : ""}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
            <span className="pill__count">
              {f.id === "all"
                ? projects.length
                : projects.filter((p) => p.type === f.id).length}
            </span>
          </button>
        ))}
      </div>

      <div className="home-projects__grid work__grid">
        {list.map((project, i) => {
          const [cover] = getProjectMedia(project.slug, project);
          if (!cover) return null;

          return (
            <Link
              key={project.id}
              to={`/work/${project.slug}`}
              className={`home-projects__card work__card home-projects__card--${project.slug}`}
              data-reveal
              data-delay={String(Math.min(i + 1, 6))}
            >
              <div className="home-projects__media">
                <ProjectThumbnail project={project} cover={cover} index={i} />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
