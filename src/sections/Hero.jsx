import { Link } from "react-router-dom";
import portrait from "../assets/portrait.jpg";
import apexImg from "../assets/apex-reviews.png";
import spotifyImg from "../assets/spotifywrapped.png";
import { useReveal } from "../hooks/useReveal";

function HeroPill({ src, alt = "", wide = false }) {
  return (
    <span className={`hero__pill-wrap${wide ? " hero__pill-wrap--wide" : ""}`}>
      <img src={src} alt={alt} />
    </span>
  );
}

export default function Hero() {
  const ref = useReveal({ threshold: 0.05 });

  return (
    <section className="hero" data-screen-label="01 Hero" ref={ref}>
      <div className="hero__center">
        <h1 className="hero__headline">
          <span className="hero__line" data-reveal data-delay="1">
            <span className="hero__bold">I&apos;m </span>
            <span className="hero__italic">Trisha</span>
            <HeroPill src={portrait} wide />
          </span>
          <span className="hero__line" data-reveal data-delay="2">
            <span className="hero__bold">a UX/Product </span>
            <HeroPill src={apexImg} />
            <span className="hero__italic">Designer</span>
          </span>
          <span className="hero__line" data-reveal data-delay="3">
            <span className="hero__bold">based in </span>
            <span className="hero__italic">Atlanta</span>
            <HeroPill src={spotifyImg} />
          </span>
        </h1>

        <p className="hero__sub" data-reveal data-delay="4">
          <strong>Trisha Ravichandran</strong> — UX/UI designer &amp; software engineer.
          <br />
          CS · HCI at <em>Georgia Tech</em>. Currently testing AI search at Google &amp; leading iOS at GT Dev Club.
        </p>

        <Link className="hero__cta" to="/work" data-reveal data-delay="5">
          <span>See the work</span>
          <span className="hero__cta-icon" aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
