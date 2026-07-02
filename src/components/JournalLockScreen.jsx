import { useCallback, useEffect, useState } from "react";
import { JOURNAL } from "../data";
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

function CalendarWidget({ activeIndex, onSelect, now }) {
  const monthIndex = now.getMonth();
  const year = now.getFullYear();
  const month = MONTHS[monthIndex];
  const today = now.getDate();
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  const entryDayMap = JOURNAL.reduce((acc, entry, index) => {
    const [entryMonth, yearStr] = entry.date.split(" ");
    const entryMonthIndex = MONTHS.indexOf(entryMonth);
    if (entryMonthIndex === monthIndex && Number(yearStr) === year) {
      acc[(index + 1) * 7] = index;
    }
    return acc;
  }, {});

  const cells = [];
  for (let i = 0; i < firstDay; i += 1) cells.push(null);
  for (let day = 1; day <= daysInMonth; day += 1) cells.push(day);

  return (
    <div className="journal-lock__widget journal-lock__widget--calendar">
      <p className="journal-lock__widget-label">{month}</p>
      <div className="journal-lock__calendar-grid">
        {cells.map((day, i) => {
          if (!day) {
            return <span key={`empty-${i}`} className="journal-lock__calendar-cell journal-lock__calendar-cell--empty" />;
          }

          const entryIndex = entryDayMap[day];
          const hasEntry = entryIndex !== undefined;
          const isActive = entryIndex === activeIndex;
          const isToday = day === today;

          return (
            <button
              key={day}
              type="button"
              className={[
                "journal-lock__calendar-cell",
                isToday ? "journal-lock__calendar-cell--today" : "",
                hasEntry ? "journal-lock__calendar-cell--entry" : "",
                isActive ? "journal-lock__calendar-cell--active" : "",
              ].filter(Boolean).join(" ")}
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

/** iPad lock screen journal — set SHOW_IPAD_JOURNAL in JournalPage to enable. */
export default function JournalLockScreen() {
  const now = useLiveNow(1000);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sheetOpen, setSheetOpen] = useState(false);
  const active = JOURNAL[activeIndex];

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
      if (event.key === "Escape") setSheetOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [step]);

  return (
    <div className="journal-lock">
      <div className="journal-lock__ipad" role="img" aria-label="iPad lock screen showing journal">
        <div className="journal-lock__camera" aria-hidden="true" />
        <div className="journal-lock__device">
          <img className="journal-lock__bg" src={lockBg} alt="" aria-hidden="true" />

          <p className="journal-lock__date">{formatLockDate(now)}</p>

          <aside className="journal-lock__widgets" aria-label="Journal widgets">
            <CalendarWidget activeIndex={activeIndex} onSelect={setActiveIndex} now={now} />

            <button
              type="button"
              className="journal-lock__widget journal-lock__widget--now"
              onClick={() => setSheetOpen(true)}
            >
              <div className="journal-lock__now-art" aria-hidden="true">
                <span>{String(activeIndex + 1).padStart(2, "0")}</span>
              </div>
              <div className="journal-lock__now-meta">
                <p className="journal-lock__now-kicker">Now reading</p>
                <p className="journal-lock__now-title">{active.title}</p>
                <p className="journal-lock__now-sub">{active.excerpt}</p>
              </div>
              <span className="journal-lock__now-icon" aria-hidden="true">▶</span>
            </button>

            <div className="journal-lock__widget journal-lock__widget--status">
              <span className="journal-lock__status-icon" aria-hidden="true">✎</span>
              <div className="journal-lock__status-copy">
                <span className="journal-lock__status-label">Journal</span>
                <span className="journal-lock__status-value">{JOURNAL.length} entries</span>
              </div>
              <div className="journal-lock__status-bar" aria-hidden="true">
                <span style={{ width: `${((activeIndex + 1) / JOURNAL.length) * 100}%` }} />
              </div>
            </div>
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
              onClick={() => setSheetOpen(false)}
              aria-label="Close entry"
            />
          )}

          <div className={`journal-lock__sheet${sheetOpen ? " journal-lock__sheet--open" : ""}`}>
            <button
              type="button"
              className="journal-lock__sheet-grabber"
              onClick={() => setSheetOpen(false)}
              aria-label="Close entry"
            />
            <section className="journal-lock__sheet-inner" aria-labelledby="journal-entry-title">
              <div className="journal-lock__sheet-nav">
                <button type="button" onClick={() => step("prev")} disabled={activeIndex === 0} aria-label="Previous entry">
                  ←
                </button>
                <span>{activeIndex + 1} / {JOURNAL.length}</span>
                <button type="button" onClick={() => step("next")} disabled={activeIndex === JOURNAL.length - 1} aria-label="Next entry">
                  →
                </button>
              </div>
              <time className="journal-lock__sheet-date" dateTime={active.date}>{active.date}</time>
              <h1 id="journal-entry-title" className="journal-lock__sheet-title">{active.title}</h1>
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
            onClick={() => setSheetOpen(true)}
            aria-label="Open journal entry"
          />
        </div>
      </div>
    </div>
  );
}
