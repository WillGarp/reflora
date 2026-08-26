import { useEffect, useState } from "react";
import { Leaf, Menu, Phone, X } from "lucide-react";
import { Page } from "../types";
import { navItems } from "../data";
import { goTo } from "../utils/navigation";

export function Header({ page }: { page: Page }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 800) setOpen(false);
    };

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const header = document.querySelector(".site-header");
      if (header && !header.contains(target)) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("resize", closeOnResize);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  const handleNavigate = (targetPage: Page) => {
    goTo(targetPage);
    setOpen(false);
  };

  return (
    <header className="site-header">
      <button type="button" className="brand" onClick={() => handleNavigate("home")} aria-label="Ir para o início">
        <span className="brand-mark" aria-hidden="true">
          <Leaf size={17} />
        </span>
        <span className="brand-copy">
          <span className="brand-text">REFLORA<span className="accent">.</span></span>
          <small>ENGENHARIA FLORESTAL E AMBIENTAL</small>
        </span>
      </button>

      <nav id="main-navigation" className={open ? "main-nav is-open" : "main-nav"} aria-label="Navegação principal">
        {navItems.map((item) => (
          <button
            key={item.page}
            type="button"
            className={page === item.page ? "active" : ""}
            onClick={() => handleNavigate(item.page)}
          >
            {item.label}
          </button>
        ))}

        <button type="button" className="header-cta" onClick={() => handleNavigate("contato")}>
          <Phone size={16} />
          <span>Fale conosco</span>
        </button>
      </nav>

      <button
        type="button"
        className="menu-button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="main-navigation"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
}