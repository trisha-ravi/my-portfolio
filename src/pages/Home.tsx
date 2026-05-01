import { useEffect } from "react";
import Hero from "../sections/Hero";
import PageNav from "../components/PageNav";

export default function Home() {
  // Lock scrolling — the home page is a single magazine-cover viewport.
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <>
      <PageNav showBack={false} />
      <main className="home-main">
        <Hero />
      </main>
    </>
  );
}
