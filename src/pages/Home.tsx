import { ChevronRight, Play } from "lucide-react";
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
          <h1>Engenharia Florestal e Ambiental para decisões técnicas seguras.</h1>
          <p>Soluções especializadas em arborização urbana, avaliação de risco de árvores, licenciamento e estudos ambientais, restauração, manejo florestal, prevenção de incêndios, carbono e projetos ambientais, sob direção técnica do Engenheiro Florestal Marco Aurélio Busch Ziliotto.</p>
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

      <section className="institutional-section">
        <div className="institutional-grid">

          <div className="institutional-text">
            <span className="eyebrow">Apresentação institucional</span>
            <h2>Engenharia aplicada às necessidades de cada projeto.</h2>

            <div className="institutional-content">
              <p>
                A Reflora desenvolve soluções de engenharia florestal e ambiental
                para empreendimentos públicos e privados, combinando experiência de
                campo, conhecimento técnico, planejamento e responsabilidade
                profissional.
              </p>

              <p>
                Nossa atuação parte de um princípio simples: questões ambientais
                complexas exigem diagnósticos consistentes e soluções tecnicamente
                viáveis. Por isso, cada trabalho é desenvolvido de acordo com as
                características do empreendimento, do território, da vegetação e
                das exigências dos órgãos competentes.
              </p>

              <p>
                Atuamos tanto em demandas específicas quanto em projetos
                multidisciplinares, apoiando clientes na tomada de decisões, no
                atendimento à legislação e na implantação de soluções
                ambientalmente adequadas.
              </p>
            </div>
          </div>

          <a
            className="podcast-card"
            href="https://www.instagram.com/reel/Db-4enxDU2h/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="podcast-card-top">
              <span className="podcast-label">
                Podcast
              </span>

              <span className="podcast-number">02</span>
            </div>

            <div className="podcast-card-content">
              <div className="podcast-play">
                <Play size={24} fill="currentColor" />
              </div>

              <span className="eyebrow">Reflora em destaque</span>

              <h3>
                Conheça mais sobre nossa atuação e experiência profissional.
              </h3>

              <p>
                Acompanhe esta participação e conheça um pouco mais sobre o trabalho
                desenvolvido pela Reflora.
              </p>

              <span className="podcast-link">
                Assistir no Instagram
                <ChevronRight size={16} />
              </span>
            </div>
          </a>

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
            <div><strong>Desde 2001</strong><span>experiência nos setores público e privado</span></div>
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