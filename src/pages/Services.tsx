import { PageIntro } from "../components/PageIntro";
import { ServiceCard } from "../components/ServiceCard";
import { services, portfolioItems, fireServices } from "../data";

export function Services() {
  return (
    <>
      <PageIntro eyebrow="Competências" title="Quatro áreas para orientar decisões ambientais." text="A Reflora reúne Engenharia Florestal e Ambiental, experiência de campo e visão estratégica para diagnosticar problemas e desenvolver soluções tecnicamente fundamentadas." />
      <section className="content-section">
        <div className="service-grid full">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <div className="method">
          <div>
            <span className="eyebrow">Nossa forma de trabalhar</span>
            <h2>Da análise técnica à solução.</h2>
            <p className="section-copy">Cada projeto começa com a leitura das condições ambientais, dos riscos, da legislação e das necessidades específicas do território.</p>
          </div>
          <div className="method-steps">
            {["Diagnóstico técnico do território e dos riscos", "Planejamento, licenciamento e definição de prioridades", "Acompanhamento, monitoramento e avaliação dos resultados"].map((step, index) => (
              <div key={step}>
                <strong>0{index + 1}</strong>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="subsection">
          <span className="eyebrow">Arborização Urbana e Avaliação de Risco</span>
          <h2>Diagnóstico para proteger pessoas, árvores e patrimônio.</h2>
          <p className="section-copy">Atendemos escolas, condomínios, empresas, empreendimentos e poder público com avaliação preventiva e análise de risco de árvores e galhos.</p>
          <div className="portfolio-grid">
            {[
              ["Avaliação e diagnóstico", "Análise de risco, diagnóstico fitossanitário e estrutural para identificar prioridades."],
              ["Inventário e documentação", "Inventário e cadastro arbóreo, laudos e pareceres técnicos para apoiar decisões."],
              ["Manejo e planejamento", "Recomendações de poda, manejo e intervenções, além de planos de arborização."],
              ["Acompanhamento técnico", "Monitoramento das condições das árvores e orientação para intervenções seguras."],
            ].map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="subsection">
          <span className="eyebrow">Portfólio Reflora</span>
          <h2>Arborização, licenciamento e recuperação ambiental.</h2>
          <p className="section-copy">Integramos planejamento ambiental, gestão florestal e análise técnica para apoiar empreendimentos, propriedades, empresas e poder público.</p>
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
          <span className="eyebrow light">Infraestrutura Rodoviária e Portuária | PMIF / PPCIF</span>
          <h2>Prevenção, manejo integrado do fogo e segurança territorial.</h2>
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