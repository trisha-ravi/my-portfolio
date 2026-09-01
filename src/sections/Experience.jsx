import { ROLES } from "../data";

export default function Experience() {
  return (
    <section className="exp" id="experience">
      <h2 className="section-title section-title--page">
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
        <h3 className="exp__skills-title">Stack &amp; tools</h3>
        <div className="exp__skills-grid">
          <div>
            <p className="exp__skill-label">Design &amp; UX</p>
            <p className="exp__skill-list">UX/UI Design · Visual Design · Wireframing · Prototyping · Interaction Design · Information Architecture · Usability Testing · Figma · Adobe CC (Ai · Ps · XD) · Sketch · Framer · Balsamiq</p>
          </div>
          <div>
            <p className="exp__skill-label">Languages &amp; Frameworks</p>
            <p className="exp__skill-list">React (16–18) · JavaScript (ES6+) · TypeScript · Python · Java/Kotlin · Swift (iOS) · Node.js · HTML · CSS · Android · Linux · Machine Learning · Git · Google Cloud Platform</p>
          </div>
          <div>
            <p className="exp__skill-label">Research Methods</p>
            <p className="exp__skill-list">A/B Testing · User Interviews · Journey Mapping · Affinity Mapping · Card Sorting · Tree Testing</p>
          </div>
          <div>
            <p className="exp__skill-label">Education</p>
            <p className="exp__skill-list">Georgia Institute of Technology · B.S. LMC, Human Computer Interaction · Dec 2027</p>
          </div>
        </div>
      </div>
    </section>
  );
}
