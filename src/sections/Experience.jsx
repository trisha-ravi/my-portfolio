import { ROLES } from "../data";

export default function Experience() {
  return (
    <section className="exp" id="experience" data-screen-label="06 Experience">
      <div className="exp__head">
        <span className="section-eyebrow">E — Experience</span>
        <span className="section-eyebrow section-eyebrow--right">Section 05 / 06</span>
      </div>

      <h2 className="section-title">
        <span>where I've </span>
        <span className="italic">worked</span>
        <br />
        <span>& what I </span>
        <span className="italic">shipped</span>
        <span className="section-title__period">.</span>
      </h2>

      <ol className="exp__list">
        {ROLES.map((r) => (
          <li key={r.no} className="exp-row">
            <div className="exp-row__top">
              <span className="exp-row__no">{r.no}</span>
              <div className="exp-row__head">
                <h3 className="exp-row__role">
                  {r.role} <span className="exp-row__at">— at</span>{" "}
                  <span className="italic">{r.org}</span>
                </h3>
                <div className="exp-row__meta">
                  <span>{r.time}</span>
                  <span className="exp-row__sep">·</span>
                  <span>{r.where}</span>
                </div>
              </div>
            </div>
            <ul className="exp-row__bullets">
              {r.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="exp__skills">
        <div className="exp__skills-head">
          <span className="section-eyebrow">Stack & tools</span>
        </div>
        <div className="exp__skills-grid">
          <div>
            <p className="exp__skill-label">Design</p>
            <p className="exp__skill-list">Figma · Sketch · Framer · Balsamiq · Adobe CC (Ai · Ps · XD)</p>
          </div>
          <div>
            <p className="exp__skill-label">Engineering</p>
            <p className="exp__skill-list">React (16–18) · TypeScript · Next.js · Node · Python · Java · Kotlin · Swift</p>
          </div>
          <div>
            <p className="exp__skill-label">Research</p>
            <p className="exp__skill-list">A/B Testing · User Interviews · Journey Mapping · Affinity · Card Sorting · Tree Testing</p>
          </div>
          <div>
            <p className="exp__skill-label">Education</p>
            <p className="exp__skill-list">Georgia Institute of Technology · B.S. CS — Human-Computer Interaction · Dec 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
