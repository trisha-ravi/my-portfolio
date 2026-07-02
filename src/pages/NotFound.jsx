import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import LostSketch from "../components/LostSketch";

export default function NotFound() {
  return (
    <>
      <PageNav />
      <main className="site-main site-main--narrow">
        <section className="not-found">
          <LostSketch />
          <h1 className="section-title section-title--page">
            <span>nothing on </span>
            <span className="italic">this</span>
            <span> page</span>
            <span className="section-title__period">.</span>
          </h1>
          <p className="not-found__lede">
            The address you followed isn&apos;t part of the portfolio — like a doodle that wandered off the page.
            Head back home or browse the illustration archive.
          </p>
          <div className="not-found__actions">
            <Link to="/" className="hero__cta hero__cta--sm">← Back to home</Link>
            <Link to="/illustrations" className="ghost-btn">View illustrations ↗</Link>
          </div>
        </section>
      </main>
    </>
  );
}
