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
                Hi! I&apos;m Trisha. I&apos;ve always been a little obsessed
                with making technology feel more human. 🌻
              </p>
              <p>
                I&apos;m studying Literature, Media, and Communication at
                Georgia Tech, with a focus on Human Computer Interaction. I
                chose this path because I became interested in the space
                between people and technology. I kept noticing how something
                could technically work, but still feel confusing, frustrating,
                or simply not made for the person using it.
              </p>
              <p>
                LMC helped me understand how people communicate, interpret, and
                experience media. HCI gave me the tools to turn that
                understanding into things people can actually use.
              </p>
              <p>
                Eventually, I started building things of my own. I experimented
                with everything from small job hunting tools to half finished
                ideas, until I built <em>Moodles</em>: a simple mood tracker
                with twelve illustrated faces and one tap a day. I wanted
                something that made checking in with yourself feel easy rather
                than like another task to complete. It became one of my
                favorite projects because it brought together what I love most
                about design and technology: making something useful that
                people genuinely enjoy using.
              </p>
              <p>
                Now, I&apos;m exploring that same intersection in different
                ways. I test AI search at Google, work on outreach and
                partnerships as Outreach Chair for Creative Media Ambassadors,
                and keep designing and building whenever an idea catches my
                attention.
              </p>
              <p>
                I&apos;m drawn to interfaces that feel thoughtful, editorial,
                and a little nostalgic. Technology that feels approachable
                instead of overly technical. I&apos;m still figuring out
                exactly where that interest will take me, but I know I want to
                keep making things that feel like they were designed with a
                real person in mind.
              </p>
              <p>
                Graduating in 2027. Still figuring out the next chapter, and
                honestly, I&apos;m excited about that.
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
