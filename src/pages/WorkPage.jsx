import Work from "../sections/Work";
import Coding from "../sections/Coding";
import PageNav from "../components/PageNav";

export default function WorkPage() {
  return (
    <>
      <PageNav />
      <main className="site-main">
        <Work />
        <Coding />
      </main>
    </>
  );
}
