import MarqueeRow from "../components/MarqueeRow";

export default function Footer() {
  return (
    <footer className="foot" data-screen-label="07 Contact">
      <MarqueeRow
        items={[
          "Open to summer 26 internships",
          "Atlanta · Remote",
          "Say hi",
          "Currently @ Google + GT",
        ]}
      />

      <div className="foot__main">
        <div className="foot__l">
          <span className="section-eyebrow">F — Get in touch</span>
          <h2 className="foot__display">
            let's build
            <br />
            <span className="italic">something</span>
            <br />
            thoughtful
            <span className="foot__period">.</span>
          </h2>
        </div>

        <div className="foot__r">
          <ul className="foot__links">
            <li>
              <a href="https://www.linkedin.com/in/trisha-ravichandran" target="_blank" rel="noreferrer">LinkedIn</a>
              <span>/in/trisha-ravichandran</span>
            </li>
            <li>
              <a href="https://www.instagram.com/trisha.ravichandran/" target="_blank" rel="noreferrer">Instagram</a>
              <span>/trisha.ravichandran</span>
            </li>
            <li>
              <a href="#">GitHub</a>
              <span>/trisha-r</span>
            </li>
            <li>
              <a href="#">Read.cv</a>
              <span>/trisha</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="foot__bottom">
        <span>© 2026 — Trisha Ravichandran</span>
        <span>Designed & built in Atlanta, GA</span>
        <span>v.4 · Spring</span>
      </div>
    </footer>
  );
}
