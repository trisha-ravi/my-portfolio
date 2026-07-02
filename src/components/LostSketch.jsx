/** Hand-drawn doodle that draws itself, then drifts away — 404 illustration. */
export default function LostSketch() {
  return (
    <div className="lost-sketch" aria-hidden="true">
      <svg className="lost-sketch__svg" viewBox="0 0 280 200" fill="none">
        <path
          className="lost-sketch__paper"
          d="M38 28c2-3 8-2 12-1l178 6c6 1 10 5 9 12l4 128c1 8-4 14-12 13L44 172c-8-1-12-7-10-15L38 28z"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
        <path
          className="lost-sketch__stroke lost-sketch__stroke--1"
          d="M96 78c-8-18 18-28 36-16c14 10 8 34-10 36c-16 2-30-8-26-20"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          className="lost-sketch__stroke lost-sketch__stroke--2"
          d="M88 62c6-14 28-18 42-8c10 8 6 22-4 24"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          className="lost-sketch__stroke lost-sketch__stroke--3"
          d="M102 94c4 6 14 6 20 0"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          className="lost-sketch__stroke lost-sketch__stroke--4"
          d="M98 84l2 4M118 84l2 4"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          className="lost-sketch__stroke lost-sketch__stroke--5"
          d="M168 92c8-16 28-8 24 12c-2 12-16 18-24 10"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <path
          className="lost-sketch__stroke lost-sketch__stroke--6"
          d="M52 148c36 8 72 4 108-6c28-8 56-4 72 8"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.45"
        />
      </svg>
      <p className="lost-sketch__caption">lost sketch</p>
    </div>
  );
}
