function CaseList({ items }) {
  if (!items?.length) return null;
  return (
    <ul className="case__list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function CaseImages({ images }) {
  if (!images?.length) return null;
  return (
    <div className={`case__figures${images.length > 1 ? " case__figures--grid" : ""}`}>
      {images.map((img) => (
        <figure key={img.alt} className="case__figure">
          <img src={img.src} alt={img.alt} loading="lazy" className="case__figure-img" />
          {img.caption && <figcaption className="case__caption">{img.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

function CaseFlow({ steps }) {
  if (!steps?.length) return null;

  return (
    <div className="case__flow-wrap">
      <ol className="case__flow">
        {steps.map((step, i) => {
          const isOptional = step.startsWith("(Optional)");
          const label = isOptional ? step.replace(/^\(Optional\)\s*/, "") : step;

          return (
            <li key={step} className="case__flow-group">
              <div
                className={`case__flow-node${isOptional ? " case__flow-node--optional" : ""}`}
              >
                <span className="case__flow-num" aria-hidden="true">
                  {i + 1}
                </span>
                {isOptional && (
                  <span className="case__flow-tag">Optional</span>
                )}
                <p className="case__flow-label">{label}</p>
              </div>
              {i < steps.length - 1 && (
                <span className="case__flow-link" aria-hidden="true">
                  <svg
                    className="case__flow-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function CaseSubsection({ sub }) {
  return (
    <div className="case__block">
      <h3 className="case__subheading">{sub.title}</h3>
      {sub.bodies?.map((paragraph) => (
        <p key={paragraph.slice(0, 48)} className="case__text">
          {paragraph}
        </p>
      ))}
      {sub.body && <p className="case__text">{sub.body}</p>}
      {sub.lists?.map((group) => (
        <div key={group.label} className="case__list-group">
          <p className="case__list-label">{group.label}</p>
          <CaseList items={group.items} />
        </div>
      ))}
      {sub.quotes?.map((quote) => (
        <blockquote key={quote} className="case__quote">
          {quote}
        </blockquote>
      ))}
      {sub.after && <p className="case__text case__text--after">{sub.after}</p>}
      {sub.list && <CaseList items={sub.list} />}
      {sub.steps && <CaseFlow steps={sub.steps} />}
      {sub.images && <CaseImages images={sub.images} />}
    </div>
  );
}

function CasePersonas({ personas }) {
  return (
    <div className="case__personas">
      {personas.map((persona) => (
        <article key={persona.name} className="case__persona">
          <h3 className="case__subheading">{persona.name}</h3>
          <p className="case__text">{persona.description}</p>
          {persona.needs && (
            <>
              <p className="case__list-label">Needs</p>
              <CaseList items={persona.needs} />
            </>
          )}
          {persona.painPoints && (
            <>
              <p className="case__list-label">Pain points</p>
              <CaseList items={persona.painPoints} />
            </>
          )}
          {persona.motivations && (
            <>
              <p className="case__list-label">Motivations</p>
              <CaseList items={persona.motivations} />
            </>
          )}
        </article>
      ))}
    </div>
  );
}

function CaseRejected({ items }) {
  return (
    <div className="case__rejected">
      {items.map((item) => (
        <p key={item.concept} className="case__principle">
          <strong>{item.concept}</strong> — {item.reason}
        </p>
      ))}
    </div>
  );
}

function CaseScreens({ screens }) {
  return (
    <div className="case__screens">
      {screens.map((screen) => (
        <div key={screen.title} className="case__screen">
          <h3 className="case__subheading case__subheading--small">{screen.title}</h3>
          <p className="case__text">{screen.body}</p>
        </div>
      ))}
    </div>
  );
}

function CaseFindings({ findings }) {
  return (
    <>
      {findings.map((group) => (
        <div key={group.label} className="case__list-group">
          <p className="case__list-label">{group.label}</p>
          <CaseList items={group.items} />
        </div>
      ))}
    </>
  );
}

function CaseReflection({ reflection }) {
  const entries = [
    { label: "What worked", key: "worked" },
    { label: "What didn't", key: "didnt" },
    { label: "What surprised me", key: "surprised" },
    { label: "What I'd improve", key: "improve" },
    { label: "What I learned", key: "learned" },
  ];

  return (
    <div className="case__reflection">
      {entries.map(({ label, key }) =>
        reflection[key] ? (
          <div key={key} className="case__reflection-item">
            <p className="case__list-label">{label}</p>
            <p className="case__text">{reflection[key]}</p>
          </div>
        ) : null
      )}
    </div>
  );
}

function CaseSection({ section }) {
  return (
    <section className="case__section" id={section.id}>
      <h2 className="case__heading">{section.title}</h2>

      {section.subtitle && (
        <h3 className="case__subheading case__subheading--solution">{section.subtitle}</h3>
      )}

      {section.bodies?.map((paragraph) => (
        <p key={paragraph.slice(0, 48)} className="case__text">
          {paragraph}
        </p>
      ))}

      {section.body && <p className="case__text">{section.body}</p>}

      {section.subsections?.map((sub) => (
        <CaseSubsection key={sub.title} sub={sub} />
      ))}

      {section.personas && <CasePersonas personas={section.personas} />}

      {section.challenge && (
        <blockquote className="case__quote case__quote--challenge">
          {section.challenge}
        </blockquote>
      )}

      {section.items?.map((item) => (
        <p key={item.label} className="case__principle">
          <strong>{item.label}</strong> — {item.text}
        </p>
      ))}

      {section.rejected && <CaseRejected items={section.rejected} />}

      {section.list && <CaseList items={section.list} />}

      {section.steps && <CaseFlow steps={section.steps} />}

      {section.screens && <CaseScreens screens={section.screens} />}

      {section.images && <CaseImages images={section.images} />}

      {section.findings && <CaseFindings findings={section.findings} />}

      {section.reflection && <CaseReflection reflection={section.reflection} />}

      {section.metricGroups?.map((group) => (
        <div key={group.title} className="case__metric-group">
          <h3 className="case__subheading case__subheading--small">{group.title}</h3>
          <CaseList items={group.items} />
        </div>
      ))}

      {section.footer && <p className="case__text case__text--after">{section.footer}</p>}
    </section>
  );
}

export default function ProjectCaseStudy({ study, project }) {
  const { overview, sections } = study;
  const team = overview.team ?? project.team;
  const role = overview.role ?? project.role;
  const timeline = overview.timeline ?? project.duration;

  return (
    <div className={`case case--${project.slug}`}>
      <section className="case__section case__section--overview" id="overview">
        <h2 className="case__heading">{overview.title ?? "Overview"}</h2>
        {overview.bodies?.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className="case__text">
            {paragraph}
          </p>
        ))}
        {overview.what && <p className="case__text">{overview.what}</p>}

        <dl className="case__meta">
          <div>
            <dt>Project</dt>
            <dd>{project.title}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>{role}</dd>
          </div>
          <div>
            <dt>Timeline</dt>
            <dd>{timeline}</dd>
          </div>
          <div>
            <dt>Team</dt>
            <dd>{team}</dd>
          </div>
        </dl>
      </section>

      {sections.map((section) => (
        <CaseSection key={section.id} section={section} />
      ))}
    </div>
  );
}
