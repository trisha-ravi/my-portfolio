import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Frame from "./sections/Frame";
import Home from "./pages/Home";
import WorkPage from "./pages/WorkPage";
import AboutPage from "./pages/AboutPage";
import IllustrationsPage from "./pages/IllustrationsPage";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <Frame />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/illustrations" element={<IllustrationsPage />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
