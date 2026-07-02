export default function Ipad({ children, ariaLabel = "iPad" }) {
  return (
    <div className="journal-lock__ipad" role="img" aria-label={ariaLabel}>
      <div className="journal-lock__device">{children}</div>
    </div>
  );
}
