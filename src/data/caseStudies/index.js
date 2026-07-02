import moodles from "./moodles";
import apexReviews from "./apex-reviews";
import spotifyWrapped from "./spotify-wrapped";

const CASE_STUDIES = {
  moodles,
  "apex-reviews": apexReviews,
  "spotify-wrapped": spotifyWrapped,
};

export function getCaseStudy(slug) {
  return CASE_STUDIES[slug] ?? null;
}
