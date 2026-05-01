import { Link } from "react-router-dom";

interface Props {
  /** Eyebrow shown on the right (e.g. "Archive · 09 pieces"). */
  meta?: string;
  /** Hide the ← Back to home link (e.g. on the home page itself). */
  showBack?: boolean;
}

export default function PageNav({ meta, showBack = true }: Props) {
  return (
    <nav className="page-nav" aria-label="Primary">
      {showBack ? (
        <Link to="/" className="page-nav__back">
          <span aria-hidden="true">←</span>
          <span>Back to home</span>
        </Link>
      ) : (
        <span className="page-nav__back" aria-hidden="true" />
      )}
      <span />
      <div className="page-nav__links">
        <Link to="/work">Work</Link>
        <Link to="/illustrations">Illustrations</Link>
        <Link to="/about">About</Link>
        {meta ? <span className="page-nav__meta">{meta}</span> : null}
        <Link to="/" className="page-nav__brand">
          Trisha R. <span className="italic">— Charcoal</span>
        </Link>
      </div>
    </nav>
  );
}
