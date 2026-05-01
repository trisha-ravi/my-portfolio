import { useEffect } from "react";
import Hero from "../sections/Hero";
import PageNav from "../components/PageNav";

export default function Home() {
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
