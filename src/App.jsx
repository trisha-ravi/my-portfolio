import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import WorkPage from "./pages/WorkPage";
import AboutPage from "./pages/AboutPage";
import IllustrationsPage from "./pages/IllustrationsPage";
import JournalPage from "./pages/JournalPage";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const scrollToTarget = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return true;
        }
        return false;
      };

      if (!scrollToTarget()) {
        const timer = window.setTimeout(scrollToTarget, 100);
        return () => window.clearTimeout(timer);
      }
      return undefined;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/illustrations" element={<IllustrationsPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
