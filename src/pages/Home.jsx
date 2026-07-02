import Hero from "../sections/Hero";
import HomeProjects from "../sections/HomeProjects";
import PageNav from "../components/PageNav";

export default function Home() {
  return (
    <div className="home">
      <PageNav />
      <main className="home-main site-main site-main--home">
        <Hero />
        <HomeProjects />
      </main>
    </div>
  );
}
