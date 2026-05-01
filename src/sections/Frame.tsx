import { useLocation } from "react-router-dom";
import CornerLabel from "../components/CornerLabel";

export default function Frame() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  // Bottom corners are only meaningful on the home cover page.
  if (!isHome) return null;

  return (
    <div className="frame" aria-hidden="true">
      <CornerLabel className="frame__tl frame__name">Trisha</CornerLabel>
      <CornerLabel className="frame__bl">Open to internships · Summer 26</CornerLabel>
    </div>
  );
}
