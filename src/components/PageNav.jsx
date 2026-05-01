import { Link } from "react-router-dom";

export default function PageNav({ showBack = true }) {
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
        <Link to="/" className="page-nav__brand">
          Trisha R. <span className="italic">— Charcoal</span>
        </Link>
      </div>
    </nav>
  );
}
