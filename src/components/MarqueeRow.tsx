interface Props {
  items: string[];
  reverse?: boolean;
}

export default function MarqueeRow({ items, reverse = false }: Props) {
  const row = [...items, ...items, ...items];
  return (
    <div className={`marquee ${reverse ? "marquee--rev" : ""}`} aria-hidden="true">
      <div className="marquee__track">
        {row.map((t, i) => (
          <span key={i} className="marquee__item">
            <span>{t}</span>
            <span className="marquee__dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
