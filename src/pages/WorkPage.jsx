import Work from "../sections/Work";
import PageNav from "../components/PageNav";

export default function WorkPage() {
  return (
    <>
      <PageNav />
      <main className="site-main">
        <Work />
      </main>
    </>
  );
}
