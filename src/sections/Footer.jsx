import { useReveal } from "../hooks/useReveal";

export default function Footer() {
  const ref = useReveal();

  return (
    <footer className="foot" ref={ref}>
      <div className="foot__main">
        <div className="foot__l">
          <h2 className="foot__display" data-reveal data-delay="2">
            let's build
            <br />
            <span className="italic">something</span>
            <br />
            thoughtful
            <span className="foot__period">.</span>
          </h2>
        </div>

        <div className="foot__r" data-reveal="right" data-delay="3">
          <ul className="foot__links">
            <li>
              <a href="https://www.linkedin.com/in/trisha-ravichandran" target="_blank" rel="noreferrer">LinkedIn</a>
              <span>/in/trisha-ravichandran</span>
            </li>
            <li>
              <a href="https://www.instagram.com/trisha.ravichandran/" target="_blank" rel="noreferrer">Instagram</a>
              <span>/trisha.ravichandran</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="foot__bottom" data-reveal="fade" data-delay="4">
        <span>© 2026 — Trisha Ravichandran</span>
        <span>Designed & built in Atlanta, GA</span>
        <span>v.4 · Spring</span>
      </div>
    </footer>
  );
}
