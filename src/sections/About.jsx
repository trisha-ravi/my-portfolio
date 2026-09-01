import Scribble from "../components/Scribble";
import Typewriter from "../components/Typewriter";
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
                hi! I'm Trisha, and this whole thing started with a soft
                obsession: making products feel like they{" "}
                <span className="italic">get you</span> 🌻
              </p>
              <p>
                I landed at Georgia Tech studying Literature, Media, and
                Communication with a focus on Human Computer Interaction,
                because I kept noticing the same gap everywhere. Tools that
                worked fine on paper, then fell apart the moment a real person
                tried to live with them. LMC gave me the language for that gap.
                HCI gave me a way to close it.
              </p>
              <p>
                Somewhere along the way the itch to build stopped being optional.
                Side projects piled up: little job hunting tools, unfinished
                experiments, and then <em>Moodles</em>: twelve illustrated
                faces, one tap a day, for tracking how you feel without turning
                wellness into homework. That one stuck, because it was the first
                time the design and the code were answering the same question:
                how do you make something people will actually come back to?
              </p>
              <p>
                These days I'm testing AI search at Google and building partnerships
                as outreach chair at Creative Media Ambassadors, still chasing that same thread. Clean,
                editorial, slightly vintage interfaces that feel human even as
                the tech underneath gets stranger. Graduating in 2027, still
                figuring out the next chapter, and honestly pretty excited about
                not knowing it yet.
              </p>
              <Typewriter
                as="p"
                className="about-note__sign"
                text="to be continued. 🤍"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
