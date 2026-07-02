import PageNav from "../components/PageNav";
import JournalLockScreen from "../components/JournalLockScreen";

/** Swap JournalPage for this in App.jsx (both /journal and /journal/:slug routes). */
export default function JournalIpadPage() {
  return (
    <>
      <PageNav />
      <main className="site-main site-main--journal">
        <JournalLockScreen />
      </main>
    </>
  );
}
