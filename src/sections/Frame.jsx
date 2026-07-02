import { useLocation } from "react-router-dom";

export default function Frame() {
  const { pathname } = useLocation();
  if (pathname === "/") return null;
  return null;
}
