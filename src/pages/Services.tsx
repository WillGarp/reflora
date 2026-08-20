import { PageIntro } from "../components/PageIntro";
import { ServiceCard } from "../components/ServiceCard";
import { services, portfolioItems, fireServices } from "../data";

export function Services() {
  return (
    <>
      <PageIntro eyebrow="O que fazemos" title="Conhecimento técnico que vira ação." text="Unimos conhecimento técnico, planejamento e execução para transformar desafios ambientais em decisões mais seguras e responsáveis." />
      <section className="content-section">
        <div className="service-grid full">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <div className="method">
          <div>
            <span className="eyebrow">Nossa forma de trabalhar</span>
            <h2>Do diagnóstico à decisão.</h2>
            <p className="section-copy">Cada projeto começa com uma leitura precisa das condições ambientais, dos riscos e das necessidades específicas da área.</p>
          </div>
          <div className="method-steps">
            {["Levantamento das condições, riscos e necessidades", "Estruturação de projetos, documentos e prioridades", "Execução, monitoramento e avaliação dos resultados"].map((step, index) => (
              <div key={step}>
                <strong>0{index + 1}</strong>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="subsection">
          <span className="eyebrow">Portfólio Reflora</span>
          <h2>Soluções para cada etapa do projeto florestal.</h2>
          <p className="section-copy">Da implantação ao acompanhamento, integramos planejamento ambiental, gestão florestal e análise econômica para apoiar decisões mais sustentáveis.</p>
          <div className="portfolio-grid">
            {portfolioItems.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="fire-section">
        <div>
          <span className="eyebrow light">Gestão do fogo</span>
          <h2>Prevenção baseada em diagnóstico e resposta.</h2>
          <p>A Reflora desenvolve e executa projetos especializados em Plano de Manejo Integrado do Fogo (PMIF) e Plano de Prevenção e Combate a Incêndios Florestais (PPCIF), atendendo aos requisitos da Lei Federal nº 14.944/2024, do Código Florestal e da Lei de Crimes Ambientais.</p>
          <p>Nossa equipe técnica é liderada pelos Engenheiros Florestais Marco Aurélio Busch Ziliotto, CREA 23402/D, e Sergio Dyminski Arruda, CREA-PR 25835/D.</p>
        </div>
        <div className="pill-grid">
          {fireServices.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}