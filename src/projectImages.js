import apexImg from "./assets/apex-reviews.png";
import spotifyImg from "./assets/spotifywrapped.png";
import moodlesPortfolio from "./assets/moodles-portfolio.png";

export const PROJECT_IMAGES = {
  "apex-reviews": [apexImg],
  "spotify-wrapped": [spotifyImg],
  moodles: [moodlesPortfolio],
};

const PLACEHOLDER_COUNTS = {};

export function getProjectCover(slug) {
  const entry = PROJECT_IMAGES[slug]?.[0];
  if (!entry) return null;
  return typeof entry === "string" ? entry : entry.images?.[0] ?? null;
}

export function getProjectMedia(slug, project) {
  const images = PROJECT_IMAGES[slug] ?? [];

  if (images.length > 0) {
    return images.map((entry) =>
      typeof entry === "string" ? { type: "image", src: entry } : entry
    );
  }

  const count = PLACEHOLDER_COUNTS[slug] ?? 0;
  return Array.from({ length: count }, (_, index) => ({
    type: "placeholder",
    index,
    label: project?.title ?? slug,
    swatch: project?.swatch ?? "#2a2622",
  }));
}
