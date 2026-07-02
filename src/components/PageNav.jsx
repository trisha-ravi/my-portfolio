import { Link, useLocation } from "react-router-dom";

const LINKS = [
  { to: "/work", label: "Work" },
  { to: "/illustrations", label: "Illustrations" },
  { to: "/journal", label: "Journal" },
  { to: "/about", label: "About" },
];

export default function PageNav() {
  const { pathname } = useLocation();

  return (
    <nav className="page-nav" aria-label="Primary">
      <Link to="/" className="page-nav__logo">
        trisha
      </Link>
      <div className="page-nav__links">
        {LINKS.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={pathname === link.to ? "page-nav__link page-nav__link--active" : "page-nav__link"}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
