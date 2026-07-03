import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function IllustrationLightbox({
  item,
  src,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.classList.add("illo-lightbox-open");
    document.body.style.overflow = "hidden";

    return () => {
      document.body.classList.remove("illo-lightbox-open");
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight" && hasNext) onNext();
      if (event.key === "ArrowLeft" && hasPrev) onPrev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, onNext, onPrev, hasNext, hasPrev]);

  if (!item || !src) return null;

  return createPortal(
    <div
      className="illo-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.label} — full size`}
    >
      <header className="illo-lightbox__toolbar">
        <p className="illo-lightbox__meta">
          <span className="illo-lightbox__no">{item.no}</span>
          <span>{item.series} · {item.year}</span>
        </p>
        <button
          type="button"
          className="illo-lightbox__close"
          onClick={onClose}
          aria-label="Close"
        >
          Close
        </button>
      </header>

      <div className="illo-lightbox__panel">
        <button
          type="button"
          className="illo-lightbox__stage"
          onClick={onClose}
          aria-label="Close full-size view"
        >
          <img className="illo-lightbox__img" src={src} alt={item.label} />
        </button>

        <div className="illo-lightbox__footer">
          <figcaption className="illo-lightbox__caption">
            <span className="illo-lightbox__label">{item.label}</span>
            {item.note && <p className="illo-lightbox__note">{item.note}</p>}
          </figcaption>

          {(hasPrev || hasNext) && (
            <div className="illo-lightbox__nav" aria-label="Browse illustrations">
              <button type="button" className="illo-lightbox__nav-btn" onClick={onPrev}>
                ← Previous
              </button>
              <button type="button" className="illo-lightbox__nav-btn" onClick={onNext}>
                Next →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
