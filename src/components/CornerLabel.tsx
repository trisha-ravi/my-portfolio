import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function CornerLabel({ children, className = "" }: Props) {
  return <span className={`corner-label ${className}`}>{children}</span>;
}
