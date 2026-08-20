import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Page } from "../types";
import { navItems } from "../data";
import { goTo } from "../utils/navigation";

export function Header({ page }: { page: Page }) {
  const [open, setOpen] = useState(false);
  
  return (
    <header className="site-header">
      <button className="brand" onClick={() => goTo("home")} aria-label="Ir para o início">
        <span>REFLORA<span className="accent">.</span></span>
        <small>Serviços florestais e ambientais</small>
      </button>
      <nav className={open ? "main-nav is-open" : "main-nav"}>
        {navItems.map((item) => (
          <button 
            key={item.page} 
            className={page === item.page ? "active" : ""} 
            onClick={() => { goTo(item.page); setOpen(false); }}
          >
            {item.label}
          </button>
        ))}
        <button className="header-cta" onClick={() => { goTo("contato"); setOpen(false); }}>
          <Phone size={16} /> Fale conosco
        </button>
      </nav>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Abrir menu">
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}