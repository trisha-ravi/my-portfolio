import { Link } from "react-router-dom";
import portrait from "../assets/portrait.jpg";

export default function Hero() {
  return (
    <section className="hero" data-screen-label="01 Hero">
      {/* ── left: portrait ── */}
      <div className="hero__photo">
        <img src={portrait} alt="Trisha Ravichandran" />
      </div>

      {/* ── right: editorial copy ── */}
      <div className="hero__editorial">
        <p className="hero__kicker">
          <span className="dot" /> UX / UI Designer · Software Engineer
        </p>

        <h1 className="hero__headline">
          <span className="hero__hl-line">designing</span>
          <span className="hero__hl-line hero__hl-italic">the human</span>
          <span className="hero__hl-line">
            side<em className="hero__hl-period">.</em>
          </span>
        </h1>

        <div className="hero__foot">
          <p className="hero__byline">
            <strong>Trisha Ravichandran</strong> — UX/UI designer &amp; software engineer.
            <br />
            CS · HCI at <em>Georgia Tech</em>. Currently testing AI&nbsp;search
            at Google &amp; leading iOS at GT Dev Club.
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
