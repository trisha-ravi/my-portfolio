import StripePlaceholder from "./StripePlaceholder";

function ProjectDuo({ images, alt, className = "" }) {
  return (
    <div className={["project-duo", className].filter(Boolean).join(" ")}>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={i === 0 ? alt : ""}
          aria-hidden={i > 0 ? true : undefined}
        />
      ))}
    </div>
  );
}

export function ProjectThumbnail({ project, cover, index = 0 }) {
  if (cover?.type === "duo") {
    return <ProjectDuo images={cover.images} alt={project.title} className="project-duo--thumb" />;
  }

  const src = cover?.type === "image" ? cover.src : project.cover;
  if (src) {
    return <img src={src} alt={project.title} />;
  }

  return (
    <StripePlaceholder
      label={project.title}
      swatch={project.swatch}
      ratio="4 / 5"
      index={index}
    />
  );
}

export function ProjectShowcaseMedia({ item, project, ratio = "16 / 10", className = "project__showcase-img" }) {
  if (item.type === "duo") {
    return (
      <ProjectDuo
        images={item.images}
        alt={project.title}
        className={className === "project__hero-img" ? "project-duo--hero" : "project-duo--showcase"}
      />
    );
  }

  if (item.type === "image") {
    return (
      <img
        src={item.src}
        alt={`${project.title} showcase`}
        className={className}
      />
    );
  }

  return (
    <StripePlaceholder
      label={item.label}
      swatch={item.swatch}
      ratio={ratio}
      index={item.index}
    />
  );
}
