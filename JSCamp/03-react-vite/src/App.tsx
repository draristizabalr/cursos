import { JobsPage } from "./pages/jobs/JobsPage";
import { Footer } from "./shared/components/Footer";
import { Header } from "./shared/components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <JobsPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
