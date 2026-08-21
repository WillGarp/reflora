import { PageIntro } from "../components/PageIntro";

export function FirePlans() {
  return (
    <>
      <PageIntro eyebrow="Rodovias, infraestrutura e PMIF / PPCIF" title="Prevenção e manejo integrado do fogo com base técnica." text="Desenvolvemos PMIF e PPCIF para propriedades, empreendimentos e estruturas de infraestrutura, com diagnóstico de risco, prevenção, resposta e gestão territorial." />
      <section className="content-section">
        <div className="fire-overview">
          <div>
            <span className="eyebrow">Legislação aplicada</span>
            <h2>Planejamento alinhado à legislação.</h2>
            <p className="section-copy">A Política Nacional de Manejo Integrado do Fogo, instituída pela Lei nº 14.944/2024, orienta o PMIF e suas etapas em conjunto com o Código Florestal e a Lei de Crimes Ambientais.</p>
          </div>
          <div className="credentials">
            <strong>Responsáveis técnicos</strong>
            <span>Eng. Florestal Sergio Dyminski Arruda<br />CREA-PR 25835/D</span>
            <span>Eng. Florestal Marco Aurélio Busch Ziliotto<br />CREA 23402/D</span>
          </div>
        </div>
        <div className="subsection">
          <span className="eyebrow">Etapas do PMIF</span>
          <h2>Da leitura do território às metas.</h2>
          <div className="plan-steps">
            {["Diagnóstico ambiental", "Objetivos e diretrizes", "Mapeamento de risco", "Manejo do fogo", "Estratégias de prevenção"].map((step, index) => (
              <article key={step}>
                <strong>0{index + 1}</strong>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </div>
        <div className="risk-method">
          <span className="eyebrow">Método DYMINSKI</span>
          <h2>Potencial de risco, severidade e frequência.</h2>
          <p className="section-copy">O potencial de risco é avaliado a partir do tipo de uso e ocupação do solo, da presença de combustível vegetal e do fator humano. A matriz combinada cruza gravidade ou severidade com probabilidade ou frequência para identificar pontos de atenção, também chamados de hotspots.</p>
          <div className="risk-levels">
            <span>Muito baixo</span><span>Baixo</span><span>Médio</span><span>Alto</span><span>Crítico</span>
          </div>
        </div>
        <div className="prevention-list">
          <span className="eyebrow">Estratégias de prevenção</span>
          <h2>Ações recomendadas pelo PMIF / PPCIF.</h2>
          {["Aceiros e faixas de domínio", "Campanhas, educação e materiais", "Monitoramento, ronda, satélite, FMA+, grau de perigo, sinalização e alertas", "Brigada florestal, capacitação, recursos e ajustes documentais", "Metas, avaliação de resultados e planos de resposta"].map((item, index) => (
            <div key={item}>
              <strong>{index + 1}</strong>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="notice-panel">
          <h2>Mapas e dados para a gestão direta.</h2>
          <p>As considerações gerais, estratégias e metas são estruturadas com base nos dados gerados pelo mapeamento do potencial e do nível de risco. Os mapas digitais entregues fazem parte da ferramenta de gestão das ações do PMIF e PPCIF.</p>
        </div>
      </section>
    </>
  );
}