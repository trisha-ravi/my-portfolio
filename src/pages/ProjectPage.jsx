import { Link, useParams } from "react-router-dom";
import BlurText from "../components/BlurText";
import { ProjectShowcaseMedia } from "../components/ProjectMedia";
import PageNav from "../components/PageNav";
import { getVisibleProjects } from "../data";
import NotFound from "./NotFound";
import { getProjectMedia } from "../data/projectImages";
import { getCaseStudy } from "../data/caseStudies";
import ProjectCaseStudy from "../components/ProjectCaseStudy";

const CONTACT_URL = "https://www.linkedin.com/in/trisha-ravichandran";

export default function ProjectPage() {
  const { slug } = useParams();
  const projects = getVisibleProjects();
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return <NotFound />;

  const project = projects[idx];
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1 + projects.length) % projects.length];
  const liveLink = project.links?.[0];
  const media = getProjectMedia(project.slug, project);
  const cover = media[0];
  const gallery = media.slice(1);
  const caseStudy = getCaseStudy(project.slug);

  return (
    <main className="site-main">
      <PageNav />

      <article className={`project project--${project.slug}`} key={slug}>
        <header className="project__header">
          <div className="project__top">
            <div className="project__intro">
              <BlurText
                as="h1"
                className="project__title"
                text={project.title}
                by="char"
                delay={0.15}
                stagger={0.022}
              />
              <BlurText
                as="p"
                className="project__desc"
                text={project.summary}
                delay={0.45}
                stagger={0.028}
              />
            </div>

            <div className="project__tags" aria-label="Project tags">
              {project.tags.map((tag, i) => (
                <span
                  key={tag}
                  className="project__tag project__tag--blur"
                  style={{ animationDelay: `${0.7 + i * 0.08}s` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {cover && (
            <div
              className="project__hero project__hero--blur"
              style={{ animationDelay: "0.55s" }}
            >
              <ProjectShowcaseMedia
                item={cover}
                project={project}
                className="project__hero-img"
              />
            </div>
          )}

          <div className="project__actions project__actions--blur" style={{ animationDelay: "0.9s" }}>
            {liveLink && (
              <a
                className="hero__cta hero__cta--sm"
                href={liveLink.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>Live Link</span>
                <span className="hero__cta-icon" aria-hidden="true">↗</span>
              </a>
            )}
            <a
              className="ghost-btn"
              href={CONTACT_URL}
              target="_blank"
              rel="noreferrer"
            >
              Contact me
            </a>
          </div>
        </header>

        {(project.problem || project.approach) && (
          <section
            className="project__story project__story--blur"
            style={{ animationDelay: "1s" }}
            aria-label="Problem and solution"
          >
            {project.problem && (
              <div className="project__story-block">
                <h2 className="project__story-label">Problem</h2>
                <p className="project__story-text">{project.problem}</p>
              </div>
            )}
            {project.approach && (
              <div className="project__story-block">
                <h2 className="project__story-label">Solution</h2>
                <p className="project__story-text">{project.approach}</p>
              </div>
            )}
          </section>
        )}

        {caseStudy && <ProjectCaseStudy study={caseStudy} project={project} />}

        {gallery.length > 0 && (
          <div className="project__gallery">
            {gallery.map((item, i) => (
              <div
                key={`${item.type}-${item.index ?? i}`}
                className="project__showcase project__showcase--blur"
                style={{ animationDelay: `${1.1 + i * 0.12}s` }}
              >
                <ProjectShowcaseMedia item={item} project={project} ratio="4 / 5" />
              </div>
            ))}
          </div>
        )}

        <nav className="project__pager" aria-label="Project navigation">
          <Link to={`/work/${prev.slug}`} className="project__pager-link">
            ← {prev.title}
          </Link>
          <Link to="/work" className="project__pager-index">All work</Link>
          <Link to={`/work/${next.slug}`} className="project__pager-link project__pager-link--next">
            {next.title} →
          </Link>
        </nav>
      </article>
    </main>
  );
}
