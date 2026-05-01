import { Link, useParams } from "react-router-dom";
import PageNav from "../components/PageNav";
import { PROJECTS } from "../data";
import NotFound from "./NotFound";
import apexImg from "../assets/apex-reviews.png";
import spotifyImg from "../assets/spotifywrapped.png";

const PROJECT_IMAGES = {
  "apex-reviews": apexImg,
  "spotify-wrapped": spotifyImg,
};

export default function ProjectPage() {
  const { slug } = useParams();
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  if (idx === -1) return <NotFound />;

  const project = PROJECTS[idx];
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <main className="page page--case">
      <PageNav />

      <header className="case__head">
        <div className="case__head-row">
          <span className="section-eyebrow">B — Selected works</span>
          <span className="section-eyebrow section-eyebrow--right">/work/{project.slug}</span>
        </div>
        <span className="case__no">{project.no}</span>
        <h1 className="case__title">
          <span>{project.title.split(" ")[0]}</span>{" "}
          <span className="italic">
            {project.title.split(" ").slice(1).join(" ") || project.title}
          </span>
          <span className="section-title__period">.</span>
        </h1>
        <p className="case__kicker">{project.kicker}</p>
      </header>

      {PROJECT_IMAGES[project.slug] && (
        <div className="case__cover">
          <img
            src={PROJECT_IMAGES[project.slug]}
            alt={`${project.title} cover`}
            className="case__cover-img"
          />
        </div>
      )}

      <section className="case__meta">
        <dl className="case__meta-grid">
          <div><dt>Role</dt><dd>{project.role}</dd></div>
          <div><dt>Year</dt><dd>{project.year}</dd></div>
          {project.duration && <div><dt>Duration</dt><dd>{project.duration}</dd></div>}
          {project.team && <div><dt>Team</dt><dd>{project.team}</dd></div>}
          {project.platform && <div><dt>Platform</dt><dd>{project.platform}</dd></div>}
          <div><dt>Tags</dt><dd>{project.tags.join(" · ")}</dd></div>
        </dl>
      </section>

      <section className="case__summary">
        <span className="section-eyebrow">Summary</span>
        <p className="case__summary-body">{project.summary}</p>
      </section>

      <section className="case__story">
        <article className="case__block">
          <span className="case__block-no">i.</span>
          <h2 className="case__block-title">Context</h2>
          <p>{project.context}</p>
        </article>
        <article className="case__block">
          <span className="case__block-no">ii.</span>
          <h2 className="case__block-title">Problem</h2>
          <p>{project.problem}</p>
        </article>
        <article className="case__block">
          <span className="case__block-no">iii.</span>
          <h2 className="case__block-title">Approach</h2>
          <p>{project.approach}</p>
        </article>
        <article className="case__block">
          <span className="case__block-no">iv.</span>
          <h2 className="case__block-title">Outcome</h2>
          <p>{project.outcome}</p>
        </article>
      </section>

      {project.links && project.links.length > 0 && (
        <section className="case__links">
          <span className="section-eyebrow">Links</span>
          <ul>
            {project.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noreferrer">
                  {l.label} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <nav className="case__pager" aria-label="Project pagination">
        <Link to={`/work/${prev.slug}`} className="case__pager-link case__pager-link--prev">
          <span className="case__pager-arrow" aria-hidden="true">←</span>
          <span className="case__pager-label">
            <span className="case__pager-eyebrow">Previous</span>
            <span className="case__pager-title">{prev.no} — {prev.title}</span>
          </span>
        </Link>
        <Link to="/#work" className="case__pager-index">All work</Link>
        <Link to={`/work/${next.slug}`} className="case__pager-link case__pager-link--next">
          <span className="case__pager-label case__pager-label--right">
            <span className="case__pager-eyebrow">Next</span>
            <span className="case__pager-title">{next.no} — {next.title}</span>
          </span>
          <span className="case__pager-arrow" aria-hidden="true">→</span>
        </Link>
      </nav>
    </main>
  );
}
