import { Link } from "react-router-dom";
import portrait from "../assets/portrait.jpg";
import { useReveal } from "../hooks/useReveal";

export default function Hero() {
  const ref = useReveal({ threshold: 0.05 });

  return (
    <section className="hero" data-screen-label="01 Hero" ref={ref}>
      {/* left: portrait */}
      <div className="hero__photo" data-reveal="scale">
        <img src={portrait} alt="Trisha Ravichandran" />
      </div>

      {/* right: editorial copy */}
      <div className="hero__editorial">
        <p className="hero__kicker" data-reveal="fade" data-delay="1">
          <span className="dot" /> UX / UI Designer · Software Engineer
        </p>

        <h1 className="hero__headline">
          <span className="hero__hl-line" data-reveal data-delay="2">designing</span>
          <span className="hero__hl-line hero__hl-italic" data-reveal data-delay="3">the human</span>
          <span className="hero__hl-line" data-reveal data-delay="4">
            side<em className="hero__hl-period">.</em>
          </span>
        </h1>

        <div className="hero__foot" data-reveal data-delay="5">
          <p className="hero__byline">
            <strong>Trisha Ravichandran</strong> — UX/UI designer & software engineer.
            <br />CS · HCI at <em>Georgia Tech</em>. Currently testing AI search at Google & leading iOS at GT Dev Club.
          </p>
          <Link className="hero__cta" to="/work">
            <span>See the work</span>
            <span className="hero__cta-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
