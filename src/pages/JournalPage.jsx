import { Link, useParams } from "react-router-dom";
import PageNav from "../components/PageNav";
import { JOURNAL, getJournalBySlug, getJournalIndexBySlug } from "../data";
import NotFound from "./NotFound";

function JournalList() {
  return (
    <>
      <header className="journal__intro">
        <h1 className="section-title section-title--page">Journal</h1>
        <p className="journal__lede">Occasional notes on design and making things.</p>
      </header>
      <ul className="journal__list">
        {JOURNAL.map((entry) => (
          <li key={entry.id}>
            <Link to={`/journal/${entry.slug}`} className="journal__entry">
              <time className="journal__date" dateTime={entry.date}>{entry.date}</time>
              <div className="journal__entry-copy">
                <h2 className="journal__title">{entry.title}</h2>
                <p className="journal__list-excerpt">{entry.excerpt}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function JournalEntry({ entry, index }) {
  const prev = index > 0 ? JOURNAL[index - 1] : null;
  const next = index < JOURNAL.length - 1 ? JOURNAL[index + 1] : null;

  return (
    <article className="journal__article">
      <Link to="/journal" className="journal__back">← All entries</Link>
      <header className="journal__article-head">
        <time className="journal__date" dateTime={entry.date}>{entry.date}</time>
        <h1 className="journal__article-title">{entry.title}</h1>
        <p className="journal__excerpt">{entry.excerpt}</p>
      </header>
      {entry.body?.split("\n\n").map((paragraph) => (
        <p key={paragraph.slice(0, 24)} className="journal__body">
          {paragraph}
        </p>
      ))}
      {(prev || next) && (
        <nav className="journal__pager" aria-label="Journal entries">
          {prev ? (
            <Link to={`/journal/${prev.slug}`} className="journal__pager-link journal__pager-link--prev">
              <span className="journal__pager-label">Previous</span>
              <span className="journal__pager-title">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to={`/journal/${next.slug}`} className="journal__pager-link journal__pager-link--next">
              <span className="journal__pager-label">Next</span>
              <span className="journal__pager-title">{next.title}</span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      )}
    </article>
  );
}

export default function JournalPage() {
  const { slug } = useParams();
  const entry = slug ? getJournalBySlug(slug) : null;
  const index = slug ? getJournalIndexBySlug(slug) : -1;

  if (slug && !entry) return <NotFound />;

  return (
    <>
      <PageNav />
      <main className="site-main site-main--journal-simple">
        {entry ? <JournalEntry entry={entry} index={index} /> : <JournalList />}
      </main>
    </>
  );
}
