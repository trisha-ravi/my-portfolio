import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

export default function NotFound() {
  return (
    <main className="page page--narrow">
      <PageNav />
      <section className="not-found">
        <span className="section-eyebrow">404 — page not found</span>
        <h1 className="section-title section-title--small">
          <span>nothing on </span>
          <span className="italic">this</span>
          <span> page</span>
          <span className="section-title__period">.</span>
        </h1>
        <p className="not-found__lede">
          The address you followed isn't part of the portfolio. Head back to the home page or browse the full illustration archive.
        </p>
        <div className="not-found__actions">
          <Link to="/" className="ghost-btn">← Back to home</Link>
          <Link to="/illustrations" className="ghost-btn">View illustrations →</Link>
        </div>
      </section>
    </main>
  );
}
