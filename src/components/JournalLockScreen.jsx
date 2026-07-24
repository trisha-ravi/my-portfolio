import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Ipad from "./Ipad";
import { JOURNAL, getJournalIndexBySlug } from "../data";
import lockBg from "../assets/journal-lock-bg.png";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function useLiveNow(tickMs = 1000) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), tickMs);
    return () => window.clearInterval(id);
  }, [tickMs]);

  return now;
}

function formatLockDate(date) {
  return `${WEEKDAYS[date.getDay()]} ${date.getDate()} ${MONTHS[date.getMonth()]}`;
}

function formatLockClock(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${String(minutes).padStart(2, "0")}`;
}

function parseEntryCursor(dateStr) {
  const [month, yearStr] = dateStr.split(" ");
  return {
    monthIndex: MONTHS.indexOf(month),
    year: Number(yearStr),
  };
}

function buildEntryDayMap(monthIndex, year) {
  const entries = JOURNAL
    .map((entry, index) => ({ entry, index, ...parseEntryCursor(entry.date) }))
    .filter((item) => item.monthIndex === monthIndex && item.year === year);

  const map = {};
  entries.forEach((item, localIndex) => {
    const day = Math.min(28, (localIndex + 1) * 7);
    map[day] = item.index;
  });
  return map;
}

function CalendarWidget({ activeIndex, onSelect, cursor, onShiftMonth }) {
  const { monthIndex, year } = cursor;
  const month = MONTHS[monthIndex];
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const entryDayMap = useMemo(
    () => buildEntryDayMap(monthIndex, year),
    [monthIndex, year]
  );

  const cells = [];
  for (let i = 0; i < firstDay; i += 1) cells.push(null);
  for (let day = 1; day <= daysInMonth; day += 1) cells.push(day);

  return (
    <div className="journal-lock__widget journal-lock__widget--calendar">
      <div className="journal-lock__calendar-head">
        <button
          type="button"
          className="journal-lock__calendar-shift"
          onClick={() => onShiftMonth(-1)}
          aria-label="Previous month"
        >
          ‹
        </button>
        <p className="journal-lock__widget-label">{month} {year}</p>
        <button
          type="button"
          className="journal-lock__calendar-shift"
          onClick={() => onShiftMonth(1)}
          aria-label="Next month"
        >
          ›
        </button>
      </div>
      <div className="journal-lock__calendar-grid">
        {cells.map((day, i) => {
          if (!day) {
            return (
              <span
                key={`empty-${i}`}
                className="journal-lock__calendar-cell journal-lock__calendar-cell--empty"
              />
            );
          }

          const entryIndex = entryDayMap[day];
          const hasEntry = entryIndex !== undefined;
          const isActive = entryIndex === activeIndex;

          return (
            <button
              key={day}
              type="button"
              className={[
                "journal-lock__calendar-cell",
                hasEntry ? "journal-lock__calendar-cell--entry" : "",
                isActive ? "journal-lock__calendar-cell--active" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => hasEntry && onSelect(entryIndex)}
              disabled={!hasEntry}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function JournalLockScreen() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const now = useLiveNow(1000);

  const slugIndex = slug ? getJournalIndexBySlug(slug) : -1;
  const [activeIndex, setActiveIndex] = useState(() => (slugIndex >= 0 ? slugIndex : 0));
  const [sheetOpen, setSheetOpen] = useState(() => slugIndex >= 0);
  const [cursor, setCursor] = useState(() => {
    const seed = JOURNAL[slugIndex >= 0 ? slugIndex : 0];
    return parseEntryCursor(seed.date);
  });

  const active = JOURNAL[activeIndex];

  const openEntry = useCallback(
    (index, { push = true } = {}) => {
      setActiveIndex(index);
      setSheetOpen(true);
      setCursor(parseEntryCursor(JOURNAL[index].date));
      if (push) navigate(`/journal/${JOURNAL[index].slug}`);
    },
    [navigate]
  );

  const closeSheet = useCallback(() => {
    setSheetOpen(false);
    if (slug) navigate("/journal");
  }, [navigate, slug]);

  const step = useCallback(
    (dir) => {
      setActiveIndex((i) => {
        const next = i + (dir === "next" ? 1 : -1);
        if (next < 0 || next >= JOURNAL.length) return i;
        setCursor(parseEntryCursor(JOURNAL[next].date));
        navigate(`/journal/${JOURNAL[next].slug}`);
        return next;
      });
    },
    [navigate]
  );

  const shiftMonth = useCallback((delta) => {
    setCursor((prev) => {
      const date = new Date(prev.year, prev.monthIndex + delta, 1);
      return { monthIndex: date.getMonth(), year: date.getFullYear() };
    });
  }, []);

  useEffect(() => {
    if (!slug) {
      setSheetOpen(false);
      return;
    }

    const index = getJournalIndexBySlug(slug);
    if (index >= 0) {
      setActiveIndex(index);
      setSheetOpen(true);
      setCursor(parseEntryCursor(JOURNAL[index].date));
    }
  }, [slug]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "ArrowRight") step("next");
      if (event.key === "ArrowLeft") step("prev");
      if (event.key === "Escape") closeSheet();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [step, closeSheet]);

  return (
    <div className="journal-lock">
      <Ipad ariaLabel="iPad showing journal lock screen">
        <img className="journal-lock__bg" src={lockBg} alt="" aria-hidden="true" />

        <p className="journal-lock__date">{formatLockDate(now)}</p>

        <aside className="journal-lock__widgets" aria-label="Journal widgets">
          <CalendarWidget
            activeIndex={activeIndex}
            onSelect={openEntry}
            cursor={cursor}
            onShiftMonth={shiftMonth}
          />

          <button
            type="button"
            className="journal-lock__widget journal-lock__widget--now"
            onClick={() => openEntry(activeIndex)}
          >
            <div className="journal-lock__now-art" aria-hidden="true">
              <span>{String(activeIndex + 1).padStart(2, "0")}</span>
            </div>
            <div className="journal-lock__now-meta">
              <p className="journal-lock__now-kicker">Now reading</p>
              <p className="journal-lock__now-title">{active.title}</p>
              <p className="journal-lock__now-sub">{active.excerpt}</p>
            </div>
            <span className="journal-lock__now-icon" aria-hidden="true">
              ▶
            </span>
          </button>

          <button
            type="button"
            className="journal-lock__widget journal-lock__widget--status"
            onClick={() => openEntry(activeIndex)}
          >
            <span className="journal-lock__status-icon" aria-hidden="true">
              ✎
            </span>
            <div className="journal-lock__status-copy">
              <span className="journal-lock__status-label">Journal</span>
              <span className="journal-lock__status-value">{JOURNAL.length} entries</span>
            </div>
            <div className="journal-lock__status-bar" aria-hidden="true">
              <span style={{ width: `${((activeIndex + 1) / JOURNAL.length) * 100}%` }} />
            </div>
          </button>
        </aside>

        <div className="journal-lock__clock-zone" aria-hidden="true">
          <p className="journal-lock__clock">{formatLockClock(now)}</p>
        </div>

        <div
          className="journal-lock__depth"
          style={{ backgroundImage: `url(${lockBg})` }}
          aria-hidden="true"
        />

        <div className="journal-lock__shortcuts" aria-hidden="true">
          <span className="journal-lock__shortcut" />
          <span className="journal-lock__shortcut" />
        </div>

        {sheetOpen && (
          <button
            type="button"
            className="journal-lock__sheet-backdrop"
            onClick={closeSheet}
            aria-label="Close entry"
          />
        )}

        <div className={`journal-lock__sheet${sheetOpen ? " journal-lock__sheet--open" : ""}`}>
          <button
            type="button"
            className="journal-lock__sheet-grabber"
            onClick={closeSheet}
            aria-label="Close entry"
          />
          <section className="journal-lock__sheet-inner" aria-labelledby="journal-entry-title">
            <div className="journal-lock__sheet-nav">
              <button
                type="button"
                onClick={() => step("prev")}
                disabled={activeIndex === 0}
                aria-label="Previous entry"
              >
                ←
              </button>
              <span>
                {activeIndex + 1} / {JOURNAL.length}
              </span>
              <button
                type="button"
                onClick={() => step("next")}
                disabled={activeIndex === JOURNAL.length - 1}
                aria-label="Next entry"
              >
                →
              </button>
            </div>
            <time className="journal-lock__sheet-date" dateTime={active.date}>
              {active.date}
            </time>
            <h1 id="journal-entry-title" className="journal-lock__sheet-title">
              {active.title}
            </h1>
            <p className="journal-lock__sheet-excerpt">{active.excerpt}</p>
            {active.body?.split("\n\n").map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="journal-lock__sheet-body">
                {paragraph}
              </p>
            ))}
          </section>
        </div>

        <button
          type="button"
          className="journal-lock__home-bar"
          onClick={() => openEntry(activeIndex)}
          aria-label="Open journal entry"
        />
      </Ipad>
    </div>
  );
}
