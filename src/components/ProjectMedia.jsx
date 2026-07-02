import StripePlaceholder from "./StripePlaceholder";

export function ProjectThumbnail({ project, index = 0 }) {
  if (project.cover) {
    return <img src={project.cover} alt={project.title} />;
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
