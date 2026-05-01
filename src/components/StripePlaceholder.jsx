import { shade } from "../utils";

export default function StripePlaceholder({
  label,
  ratio = "4 / 5",
  swatch = "#2a2622",
  index = 0,
}) {
  const stripeAngle = (index * 23) % 180;
  return (
    <div
      className="stripe-ph"
      style={{
        aspectRatio: ratio,
        background: `repeating-linear-gradient(${stripeAngle}deg, ${swatch} 0 12px, ${shade(swatch, -6)} 12px 24px)`,
      }}
    >
      <span className="stripe-ph__label">{label}</span>
    </div>
  );
}
