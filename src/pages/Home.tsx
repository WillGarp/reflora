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
          <span className="eyebrow light">Serviços florestais e ambientais</span>
          <h1>Decisões mais seguras para árvores e territórios.</h1>
          <p>A Reflora transforma análise técnica em cuidado prático para pessoas, meio ambiente e patrimônios.</p>
          <div className="hero-actions">
            <Button onClick={() => goTo("servicos")}>Conheça nossos serviços</Button>
            <Button secondary onClick={() => goTo("contato")}>Fale com a equipe</Button>
          </div>
        </div>
        <div className="hero-note">
          <span>01</span>
          <p>Avaliação técnica<br /><strong>para agir com clareza.</strong></p>
        </div>
      </section>
      
      <section className="quick-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Visão geral</span>
            <h2>O essencial para começar.</h2>
          </div>
          <button className="text-link" onClick={() => goTo("sobre")}>
            Conheça a Reflora <ChevronRight size={16} />
          </button>
        </div>
        <div className="quick-grid">
          <article className="feature-panel">
            <div className="feature-number">01</div>
            <h3>Diagnóstico antes da decisão</h3>
            <p>Observamos cada contexto para identificar riscos, prioridades e caminhos de manejo.</p>
            <Button onClick={() => goTo("servicos")}>Ver serviços</Button>
          </article>
          <div className="stat-list">
            <div><strong>5 etapas</strong><span>do diagnóstico à orientação</span></div>
            <div><strong>3 públicos</strong><span>atendidos pela nossa equipe</span></div>
            <div><strong>1 propósito</strong><span>cuidar com responsabilidade</span></div>
          </div>
        </div>
      </section>

      <section className="service-preview">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Atuação</span>
            <h2>Onde podemos ajudar.</h2>
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
          <h2>Tem uma área que precisa de atenção?</h2>
          <p>Conte um pouco sobre o seu desafio. A equipe Reflora ajuda a encontrar o escopo certo.</p>
        </div>
        <Button onClick={() => goTo("contato")}>Iniciar conversa</Button>
      </section>
    </>
  );
}