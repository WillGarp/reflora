import { useEffect, useState } from "react";
import { Page } from "./types";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Forests } from "./pages/Forests";
import { FirePlans } from "./pages/FirePlans";
import { Clients } from "./pages/Clients";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { goTo } from "./utils/navigation";

const pageFromHash = (): Page => { 
  const value = window.location.hash.replace("#", ""); 
  return ["servicos", "florestas", "fogo", "clientes", "sobre", "contato"].includes(value) ? value as Page : "home"; 
};

export default function App() {
  const [page, setPage] = useState<Page>(pageFromHash);
  
  useEffect(() => {
    const update = () => setPage(pageFromHash());
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  const renderPage = () => {
    switch(page) {
      case "servicos": return <Services />;
      case "florestas": return <Forests />;
      case "fogo": return <FirePlans />;
      case "clientes": return <Clients />;
      case "sobre": return <About />;
      case "contato": return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <>
      <Header page={page} />
      <main>
        {renderPage()}
      </main>
      <footer>
        <button className="brand footer-brand" onClick={() => goTo("home")}>
          REFLORA<span className="accent">.</span>
        </button>
        <span>Serviços florestais e ambientais</span>
        <span>© 2026 Reflora</span>
      </footer>
    </>
  );
}