import { PageIntro } from "../components/PageIntro";
import { forestProducts } from "../data";

export function Forests() {
  return (
    <>
      <PageIntro eyebrow="Florestas plantadas" title="Soluções completas para eucalipto e pinus." text="A Reflora apoia todas as etapas dos cultivos florestais, do planejamento e implantação ao manejo, monitoramento e planejamento da produção." />
      <section className="content-section">
        <div className="document-intro">
          <span className="eyebrow">Portfólio técnico</span>
          <h2>Conheça as frentes de cuidado para sua floresta.</h2>
          <p className="section-copy">O portfólio apresentado nos documentos reúne herbicidas, fungicidas, inseticidas, adjuvantes, bioestimulantes e indutores de resistência. A recomendação deve considerar cultura, modalidade, dose, modo de uso e as exigências do rótulo e da bula.</p>
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
          <h2>Uso responsável e orientação técnica.</h2>
          <p>Consulte sempre um engenheiro agrônomo. Produto de uso agrícola, com venda sob receituário agronômico. Utilize equipamentos de proteção individual, aplique somente as doses recomendadas e descarte corretamente embalagens e restos de produtos.</p>
          <p>As informações de classificação toxicológica e de periculosidade ambiental devem ser verificadas no rótulo, na bula e na receita do produto. Para restrições de uso em determinados Estados, consulte a bula.</p>
        </div>
      </section>
    </>
  );
}