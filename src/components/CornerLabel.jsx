export default function CornerLabel({ children, className = "" }) {
  return <span className={`corner-label ${className}`}>{children}</span>;
}
