import type { JSX } from "react";
import { HomePage } from "./pages/home/HomePage";
import { JobsPage } from "./pages/jobs/JobsPage";
import { Footer } from "./shared/components/Footer";
import { Header } from "./shared/components/Header";
import { NotFoundPage } from "./shared/components/InConstruction";

function App() {
  const currentPath: string = window.location.pathname;

  let page: null | JSX.Element = null;

  switch (currentPath) {
    case ('/'):
      page = <HomePage />
      break
    case ('/search'):
      page = <JobsPage />
      break
    default:
      page = <NotFoundPage />
  }
  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  );
}

export default App;
