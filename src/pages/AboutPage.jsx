import About from "../sections/About";
import Experience from "../sections/Experience";
import Footer from "../sections/Footer";
import PageNav from "../components/PageNav";

export default function AboutPage() {
  return (
    <>
      <PageNav />
      <main>
        <About />
        <Experience />
        <Footer />
      </main>
    </>
  );
}
