import { Link } from "react-router-dom";

const CODE_PROJECTS = [
  {
    n: "i.",
    name: "narb (intern)",
    stack: "TypeScript · Next.js · Node",
    desc: "Shipped 5+ production features touching 10k+ users. Redis caching cut response times 20%.",
    metric: "+30% test cov.",
    href: "https://www.narb.cc/",
    external: true,
    cta: "company site ↗",
  },
  {
    n: "ii.",
    name: "apex-reviews",
    stack: "React 18 · micro-frontend",
    desc: "AI gaming-feedback platform from CREATE-X. 47-component library, sub-2s loads.",
    metric: "−45% bundle",
    href: "/work/apex-reviews",
    external: false,
    cta: "view case study →",
  },
  {
    n: "iii.",
    name: "spotify-wrapped",
    stack: "Java/Kotlin · Firebase · M3",
    desc: "Native Android app with realtime sync, supporting 1k+ concurrent users.",
    metric: "−40% load",
    href: "https://mewkat36.wixstudio.com/spotifywrapped",
    external: true,
    cta: "view project ↗",
  },
];

function CodeCard({ n, name, stack, desc, metric, href, external, cta }) {
  const content = (
    <>
      <header>
        <span className="code-card__n">{n}</span>
        <span className="code-card__metric">{metric}</span>
      </header>
      <h3 className="code-card__name">{name}</h3>
      <p className="code-card__stack">{stack}</p>
      <p className="code-card__desc">{desc}</p>
      <span className="code-card__link">{cta}</span>
    </>
  );

  if (external) {
    return (
      <a className="code-card" href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link className="code-card" to={href}>
      {content}
    </Link>
  );
}

export default function Coding() {
  return (
    <section className="coding" id="coding">
      <div className="coding__top">
        <h2 className="section-title section-title--page">
          <span>shipping </span>
          <span className="italic">production</span>
          <br />
          <span>code, </span>
          <span className="italic">too</span>
          <span>.</span>
        </h2>
        <p className="coding__lede">
          From React micro-frontends and TypeScript APIs to native Android in Kotlin — a sample of the engineering work I do when prototypes deserve to be real.
        </p>
      </div>

      <div className="coding__grid">
        {CODE_PROJECTS.map((project) => (
          <CodeCard key={project.name} {...project} />
        ))}
      </div>

      <div className="coding__terminal">
        <div className="term__bar">
          <span className="term__dot" />
          <span className="term__dot" />
          <span className="term__dot" />
          <span className="term__title">~/apex-reviews — zsh</span>
        </div>
        <pre className="term__body">{`$ pnpm dev
  ▲ next dev --turbo
  ─ ready  in 318ms
  ─ local  http://localhost:3000

$ git log --oneline -3
  9f2a1c3  feat(library): add 47th component (Toast)
  4b81de0  perf: split-bundle vendor chunks (-45%)
  a02f7e1  test: jest coverage +30%

$ trisha — gatech.edu
  ↳ status   building
  ↳ ship-it  ✓`}</pre>
      </div>
    </section>
  );
}
