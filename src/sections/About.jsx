import Scribble from "../components/Scribble";
import portrait from "../assets/portrait.jpg";
import { useReveal } from "../hooks/useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section className="about" id="about" ref={ref}>
      <h2 className="about__headline" data-reveal data-delay="1">
        I sit at the seam between <span className="italic">design</span> and
        <span className="italic"> engineering</span>, building{" "}
        <span className="about__sweep">
          products
          <Scribble />
        </span>
        <br />people actually want to use.
      </h2>

      <div className="about__top">
        <div className="about__portrait" data-reveal="left" data-delay="2">
          <div className="about__portrait-frame">
            <img src={portrait} alt="Portrait of Trisha Ravichandran" />
          </div>
        </div>

        <div className="about__intro">
          <p className="about__kicker" data-reveal data-delay="2">
            UX / UI Designer · Software Engineer
          </p>

          <div className="about-note" data-reveal data-delay="3">
            <div className="about-note__body">
              <p className="about-note__lead">
                hi! I'm Trisha, and I have a slight obsession with making things
                feel like they <span className="italic">get you</span> 🌻
              </p>
              <p>
                I'm currently at Georgia Tech studying computer science, with a
                soft spot for Human-Computer Interaction — basically the art of
                making things not just work, but feel like they actually
                understand you.
              </p>
              <p>
                I'm always sneaking in side projects whenever I get the itch to
                build something. that itch has turned into a couple of
                job-hunting tools and a tiny app called <em>Moodles</em> —
                twelve cute little faces, one tap a day, for tracking how you're
                feeling.
              </p>
              <p>
                I've got a thing for clean, editorial, slightly vintage design,
                and I'm always thinking about how to make technology feel a
                little more human — especially now that AI is changing so much
                of what this field looks like.
              </p>
              <p>
                graduating in 2027, still figuring out what's next, and
                genuinely excited about it.
              </p>
              <p className="about-note__sign">to be continued. 🤍</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
