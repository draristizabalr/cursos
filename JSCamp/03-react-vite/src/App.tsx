import { HomePage } from "./pages/home/HomePage";
import { JobsPage } from "./pages/jobs/JobsPage";
import { Footer } from "./layout/components/Footer";
import { Header } from "./layout/components/Header";
import { NotFoundPage } from "./pages/not-found/NotFoundPage";
import { Router } from "./shared/components/Route";
import { ContactPage } from "./pages/contact/ContactPage";

function App() {
  return (
    <>
      <Header />
      <Router path="/" component={HomePage} />
      <Router path="/search" component={JobsPage} />
      <Router path="/contact" component={ContactPage} />
      <Router path="*" component={NotFoundPage} />
      <Footer />
    </>
  );
}

export default App;
