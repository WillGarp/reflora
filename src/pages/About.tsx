import { Check } from "lucide-react";
import { PageIntro } from "../components/PageIntro";
import { Button } from "../components/Button";
import { goTo } from "../utils/navigation";

export function About() {
  return (
    <>
      <PageIntro eyebrow="Sobre a Reflora" title="Conhecimento técnico para cuidar do território." text="A Reflora Serviços Ambientais desenvolve projetos e consultorias para unir conservação, segurança e viabilidade. Nossa atuação conecta o campo, a análise técnica e a tomada de decisão." />
      <section className="about-section">
        <div className="about-image" />
        <div className="about-copy">
          <span className="eyebrow">Nossa forma de trabalhar</span>
          <h2>Clareza para quem precisa agir.</h2>
          <p>Em cada projeto, olhamos para a árvore, a área e o entorno. O resultado é uma recomendação compreensível, tecnicamente responsável e conectada à realidade de quem vai colocá-la em prática.</p>
          <ul>
            {["Diagnóstico: leitura precisa das condições ambientais", "Estratégia: planos claros para cada necessidade", "Responsabilidade: execução com segurança e conformidade"].map((item) => (
              <li key={item}><Check size={18} />{item}</li>
            ))}
          </ul>
          <Button onClick={() => goTo("contato")}>Conhecer nosso trabalho</Button>
        </div>
      </section>
      <section className="content-section">
        <div className="risk-intro">
          <span className="eyebrow">Método Reflora</span>
          <h2>Uma avaliação que considera o contexto.</h2>
          <p className="section-copy">Uma árvore saudável não é necessariamente uma árvore segura. A condição e a estrutura precisam ser analisadas junto da localização, exposição, circulação, ocupação, estruturas e bens ao redor.</p>
        </div>
        <div className="scenario-grid">
          {[
            ["Cenário 01", "Árvore em área isolada, sem trânsito constante."], 
            ["Cenário 02", "Árvore próxima a uma residência ou estrutura."], 
            ["Cenário 03", "Árvore em área de grande circulação de pessoas."]
          ].map(([title, text]) => (
            <article key={title}>
              <span>{title}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="report-panel">
          <div>
            <span className="eyebrow">Resultado da avaliação</span>
            <h2>Registro técnico para a tomada de decisão.</h2>
            <p className="section-copy">Cada árvore avaliada gera um registro técnico detalhado, organizando informações cruciais para planejar medidas, monitoramento e prioridades.</p>
          </div>
          <strong>ÁRVORE #024</strong>
        </div>
      </section>
    </>
  );
}