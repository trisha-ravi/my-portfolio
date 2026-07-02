import { useCallback, useEffect, useState } from "react";
import PageNav from "../components/PageNav";
import JournalLockScreen from "../components/JournalLockScreen";
import { JOURNAL } from "../data";
import portrait from "../assets/portrait.jpg";
import portraitCutout from "../assets/portrait-cutout.png";
import apexImg from "../assets/apex-reviews.png";
import spotifyImg from "../assets/spotifywrapped.png";

const SHOW_IPAD_JOURNAL = false;

const WEEKDAYS = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const PALETTE = [
  { name: "Ink", color: "#1a2744" },
  { name: "Clay", color: "#c4693a" },
  { name: "Mist", color: "#c8c8c8" },
];

function parseSpread(entry, index) {
  const [month, year] = entry.date.split(" ");
  const monthIndex = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].indexOf(month);
  const day = (index + 1) * 7;
  const weekday = WEEKDAYS[(monthIndex + index + 2) % 7];
  const outline = entry.title
    .replace(/^On /i, "")
    .split(/\s+/)[0]
    .toLowerCase()
    .replace(/[^a-z]/g, "");

  return {
    weekday,
    outline: outline || "notes",
    dateline: `${MONTHS[monthIndex] ?? month} ${day} · ${year}`,
    page: String(index + 1).padStart(2, "0"),
  };
}

function highlightBody(text) {
  const words = text.split(/(\s+)/);
  let highlight = 0;
  return words.map((word) => {
    if (!word.trim()) return word;
    if (word.length < 5) return word;
    highlight += 1;
    if (highlight % 5 === 0) {
      return `<mark class="journal-scrap__mark journal-scrap__mark--blue">${word}</mark>`;
    }
    if (highlight % 7 === 0) {
      return `<mark class="journal-scrap__mark journal-scrap__mark--clay">${word}</mark>`;
    }
    return word;
  }).join("");
}

function Playlist({ activeIndex }) {
  const items = JOURNAL.filter((_, i) => i !== activeIndex).slice(0, 2).map((entry, i) => ({
    title: entry.title,
    meta: entry.date,
    art: i === 0 ? apexImg : spotifyImg,
  }));

  items.push({
    title: "Sketchbook hours",
    meta: "Always on loop",
    art: portrait,
  });

  return (
    <div className="journal-scrap__playlist">
      <div className="journal-scrap__playlist-head">
        <span className="journal-scrap__label journal-scrap__label--solid">WHAT&apos;S</span>
        <span className="journal-scrap__label journal-scrap__label--outline">on my mind?</span>
      </div>
      <ul className="journal-scrap__tracks">
        {items.map((item) => (
          <li key={item.title}>
            <img src={item.art} alt="" />
            <div>
              <strong>{item.title}</strong>
              <span>{item.meta}</span>
            </div>
            <span className="journal-scrap__star" aria-hidden="true">✦</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ScrapbookSpread({ entry, index, total }) {
  const spread = parseSpread(entry, index);
  const bodyText = entry.body?.split("\n\n")[0] ?? entry.excerpt;
  const bodyHtml = highlightBody(bodyText);

  return (
    <article className="journal-scrap__spread">
      <header className="journal-scrap__meta">
        <p>Timeline on Journal</p>
        <p>page {spread.page}</p>
      </header>

      <div className="journal-scrap__grid">
        <div className="journal-scrap__left">
          <div className="journal-scrap__dayline">
            <div>
              <p className="journal-scrap__weekday">{spread.weekday}</p>
              <p className="journal-scrap__outline">{spread.outline}</p>
            </div>
            <span className="journal-scrap__bar" aria-hidden="true" />
          </div>

          <p className="journal-scrap__dateline">{spread.dateline}</p>
          <p
            className="journal-scrap__copy"
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />
          <p className="journal-scrap__social">
            <span className="journal-scrap__heart" aria-hidden="true">♥</span>
            Liked by future me
          </p>
        </div>

        <Playlist activeIndex={index} />

        <div className="journal-scrap__center" aria-hidden="true">
          <span className="journal-scrap__glyph journal-scrap__glyph--left">Aa.</span>
          <span className="journal-scrap__glyph journal-scrap__glyph--right">Ee.</span>

          <div className="journal-scrap__sparkles" />
          <div className="journal-scrap__blob" />
          <img className="journal-scrap__portrait" src={portraitCutout} alt="" />
          <img className="journal-scrap__sticker journal-scrap__sticker--apex" src={apexImg} alt="" />
          <img className="journal-scrap__sticker journal-scrap__sticker--spotify" src={spotifyImg} alt="" />

          <span className="journal-scrap__star journal-scrap__star--1">✦</span>
          <span className="journal-scrap__star journal-scrap__star--2">✦</span>
          <span className="journal-scrap__star journal-scrap__star--3">✦</span>

          <svg className="journal-scrap__doodle journal-scrap__doodle--petals" viewBox="0 0 80 80" aria-hidden="true">
            <ellipse cx="18" cy="40" rx="10" ry="22" transform="rotate(-35 18 40)" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <ellipse cx="34" cy="28" rx="10" ry="22" transform="rotate(10 34 28)" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <ellipse cx="50" cy="40" rx="10" ry="22" transform="rotate(35 50 40)" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <ellipse cx="34" cy="54" rx="10" ry="22" transform="rotate(-10 34 54)" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>

          <svg className="journal-scrap__doodle journal-scrap__doodle--heart" viewBox="0 0 48 48" aria-hidden="true">
            <path d="M24 36c-8-6-14-11-14-18a8 8 0 0 1 14-5 8 8 0 0 1 14 5c0 7-6 12-14 18z" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>

          <svg className="journal-scrap__doodle journal-scrap__doodle--arrow" viewBox="0 0 60 60" aria-hidden="true">
            <path d="M10 42c12-18 24-24 38-28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M34 10l12 6-8 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <blockquote className="journal-scrap__quote">
          {entry.excerpt}
          <cite>posted in the margins</cite>
        </blockquote>

        <div className="journal-scrap__palette">
          <p className="journal-scrap__palette-label">Pantone Feels</p>
          <ul>
            {PALETTE.map((swatch) => (
              <li key={swatch.name}>
                <span style={{ background: swatch.color }} />
                <small>{swatch.name}</small>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="journal-scrap__footer">
        <p>{entry.title}</p>
        <p>Trisha Ravichandran · {index + 1} / {total}</p>
      </footer>
    </article>
  );
}

export default function JournalPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const step = useCallback((dir) => {
    setActiveIndex((i) => {
      const next = i + (dir === "next" ? 1 : -1);
      if (next < 0 || next >= JOURNAL.length) return i;
      return next;
    });
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "ArrowRight") step("next");
      if (event.key === "ArrowLeft") step("prev");
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [step]);

  if (SHOW_IPAD_JOURNAL) {
    return (
      <>
        <PageNav />
        <main className="site-main site-main--journal">
          <JournalLockScreen />
        </main>
      </>
    );
  }

  const entry = JOURNAL[activeIndex];

  return (
    <>
      <PageNav />
      <main className="site-main site-main--scrap">
        <div className="journal-scrap">
          <ScrapbookSpread entry={entry} index={activeIndex} total={JOURNAL.length} />

          <div className="journal-scrap__nav">
            <button type="button" className="ghost-btn" onClick={() => step("prev")} disabled={activeIndex === 0}>
              ← Prev
            </button>
            <div className="journal-scrap__dots" role="tablist" aria-label="Journal pages">
              {JOURNAL.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  className={i === activeIndex ? "is-active" : ""}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              className="ghost-btn"
              onClick={() => step("next")}
              disabled={activeIndex === JOURNAL.length - 1}
            >
              Next →
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
