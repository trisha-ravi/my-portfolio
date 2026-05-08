import Scribble from "../components/Scribble";
import portrait from "../assets/portrait.jpg";
import { useReveal } from "../hooks/useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section className="about" id="about" data-screen-label="02 About" ref={ref}>
      <div className="about__head">
        <span className="section-eyebrow" data-reveal="fade" data-delay="1">A — About</span>
        <span className="section-eyebrow section-eyebrow--right" data-reveal="fade" data-delay="1">Section 01 / 04</span>
      </div>

      <div className="about__grid">
        <div className="about__portrait" data-reveal="left" data-delay="2">
          <div className="about__portrait-frame">
            <img src={portrait} alt="Portrait of Trisha Ravichandran" />
            <span className="about__portrait-tag">
              <span>○</span> on the call · tuesday
            </span>
          </div>
        </div>

        <div className="about__copy">
          <p className="about__kicker" data-reveal data-delay="2">
            <span className="dot" /> UX / UI Designer · Software Engineer
          </p>
          <h2 className="about__headline" data-reveal data-delay="3">
            I sit at the seam between <span className="italic">design</span> and
            <span className="italic"> engineering</span> — building{" "}
            <span className="about__sweep">
              products
              <Scribble />
            </span>
            <br />people actually want to use.
          </h2>

          <div className="about__bio" data-reveal data-delay="4">
            <p>
              I'm a CS · HCI student at Georgia Tech (B.S. expected Dec 2026), a Senior iOS Designer at the GT iOS Dev Club, and an AI tester for Google's Search Priority User Program — evaluating early AI-powered discovery features and feeding structured insights back to product and research teams.
            </p>
            <p>
              I co-founded <em>Apex Reviews</em> through Georgia Tech's CREATE-X accelerator, shipped 5+ production features as a SWE intern at Narb, and led a research thread at PARCE-Lab on user trust in AI agents — moving perceived reliability up 15%. Outside the studio, I run brand & creative for AI @ GT.
            </p>
          </div>

          <dl className="about__facts" data-reveal data-delay="5">
            <div><dt>Based</dt><dd>Atlanta, GA</dd></div>
            <div><dt>School</dt><dd>Georgia Tech · CS · HCI · '26</dd></div>
            <div><dt>Design</dt><dd>Figma · Sketch · Framer · Adobe CC</dd></div>
            <div><dt>Stack</dt><dd>React · TypeScript · Swift · Kotlin · Python</dd></div>
            <div><dt>Research</dt><dd>A/B · Interviews · Journey · Affinity</dd></div>
            <div><dt>Now</dt><dd>Google · GT iOS Club · Apex Reviews</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
