import { ChevronRight } from "lucide-react";
import { Button } from "../components/Button";
import { ServiceCard } from "../components/ServiceCard";
import { services } from "../data";
import { goTo } from "../utils/navigation";

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-image" />
        <div className="hero-content">
          <span className="eyebrow light">REFLORA | Engenharia Florestal e Ambiental</span>
          <h1>Engenharia Florestal e Ambiental com experiência, técnica e visão estratégica.</h1>
          <p>Experiência técnica para decisões ambientais seguras em engenharia florestal, gestão ambiental, arborização urbana, licenciamento, infraestrutura e recuperação ambiental, sob direção técnica do Engenheiro Florestal Marco Aurélio Busch Ziliotto.</p>
          <div className="hero-actions">
            <Button onClick={() => goTo("servicos")}>Conheça nossos serviços</Button>
            <Button secondary onClick={() => goTo("contato")}>Fale com a equipe</Button>
          </div>
        </div>
        <div className="hero-note">
          <span>01</span>
          <p>Experiência técnica<br /><strong>para decidir com segurança.</strong></p>
        </div>
      </section>
      
      <section className="quick-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Visão geral</span>
            <h2>Conhecimento para decisões complexas.</h2>
          </div>
          <button className="text-link" onClick={() => goTo("sobre")}>
            Conheça a Reflora <ChevronRight size={16} />
          </button>
        </div>
        <div className="quick-grid">
          <article className="feature-panel">
            <div className="feature-number">01</div>
            <h3>Experiência que sustenta nosso trabalho</h3>
            <p>Sob direção técnica do Engenheiro Florestal Marco Aurélio Busch Ziliotto, transformamos diagnóstico e planejamento em soluções tecnicamente fundamentadas.</p>
            <Button onClick={() => goTo("servicos")}>Ver serviços</Button>
          </article>
          <div className="stat-list">
            <div><strong>Desde 1990</strong><span>experiência nos setores público e privado</span></div>
            <div><strong>4 áreas</strong><span>de atuação especializada</span></div>
            <div><strong>1 propósito</strong><span>orientar decisões ambientais seguras</span></div>
          </div>
        </div>
      </section>

      <section className="service-preview">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Atuação</span>
            <h2>Especialidades da Reflora.</h2>
          </div>
          <button className="text-link" onClick={() => goTo("servicos")}>
            Todos os serviços <ChevronRight size={16} />
          </button>
        </div>
        <div className="service-grid">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="home-callout">
        <div>
          <span className="eyebrow light">Próximo passo</span>
          <h2>Precisa orientar uma decisão ambiental?</h2>
          <p>Conte sobre seu desafio. A Reflora ajuda a diagnosticar o problema e definir o escopo técnico adequado.</p>
        </div>
        <Button onClick={() => goTo("contato")}>Iniciar conversa</Button>
      </section>
    </>
  );
}