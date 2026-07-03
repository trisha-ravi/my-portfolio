import { Link } from "react-router-dom";
import { getVisibleProjects } from "../data";
import { useReveal } from "../hooks/useReveal";
import { ProjectThumbnail } from "../components/ProjectMedia";
import { getProjectMedia } from "../data/projectImages";

export default function HomeProjects() {
  const ref = useReveal({ threshold: 0.08 });
  const projects = getVisibleProjects();

  return (
    <section className="home-projects" aria-label="Selected work" ref={ref}>
      <div className="home-projects__grid home-projects__grid--bento">
        {projects.map((project, i) => {
          const [cover] = getProjectMedia(project.slug, project);
          if (!cover) return null;

          return (
            <Link
              key={project.id}
              to={`/work/${project.slug}`}
              className={`home-projects__card home-projects__card--${i} home-projects__card--${project.slug}`}
              data-reveal
              data-delay={String(i + 1)}
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
