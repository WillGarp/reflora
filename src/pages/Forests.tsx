import { PageIntro } from "../components/PageIntro";
import { forestProducts } from "../data";

export function Forests() {
  return (
    <>
      <PageIntro eyebrow="Florestas, recuperação e carbono" title="Planejamento florestal para territórios resilientes." text="Atuamos em florestas plantadas, recuperação ambiental, restauração e soluções relacionadas a carbono, conectando planejamento, manejo e acompanhamento técnico." />
      <section className="content-section">
        <div className="document-intro">
          <span className="eyebrow">Portfólio técnico</span>
          <h2>Conheça as frentes de atuação florestal.</h2>
          <p className="section-copy">A Reflora apoia o planejamento, a implantação, o manejo e o monitoramento de projetos florestais, além de desenvolver estratégias para recuperação de áreas e gestão responsável dos recursos naturais.</p>
        </div>
        <div className="forest-grid">
          {forestProducts.map((item) => (
            <article key={item.category}>
              <span className="eyebrow">{item.category}</span>
              <h2>{item.products}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="notice-panel">
          <h2>Planejamento com responsabilidade ambiental.</h2>
          <p>Cada recomendação considera as características da área, os objetivos do projeto, a legislação aplicável e a necessidade de acompanhamento técnico.</p>
          <p>Em recuperação ambiental e projetos de carbono, o diagnóstico do território orienta metas, indicadores, monitoramento e resultados verificáveis.</p>
        </div>
      </section>
    </>
  );
}