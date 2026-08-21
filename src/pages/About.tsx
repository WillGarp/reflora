import { Check } from "lucide-react";
import { PageIntro } from "../components/PageIntro";
import { Button } from "../components/Button";
import { goTo } from "../utils/navigation";

export function About() {
  return (
    <>
      <PageIntro eyebrow="Quem somos | Experiência" title="Experiência técnica para decisões ambientais seguras." text="A Reflora é uma empresa de Engenharia Florestal e Ambiental especializada em diagnósticos, planejamento e soluções para desafios ambientais complexos." />
      <section className="about-section">
        <div className="about-image" />
        <div className="about-copy">
          <span className="eyebrow">Nossa forma de trabalhar</span>
          <h2>Conhecimento aplicado ao território.</h2>
          <p>Desde 1990, atuamos nos setores público e privado com gestão ambiental, infraestrutura rodoviária e portuária, licenciamento, planejamento, arborização urbana e recuperação ambiental.</p>
          <ul>
            {["Formação: Engenharia Florestal pela UFPR e especializações relevantes", "Experiência acumulada desde 1990 nos setores público e privado", "Atuação: gestão ambiental, infraestrutura, licenciamento, planejamento e recuperação", "Especialidade histórica: arborização urbana e manejo de árvores em Curitiba", "Representação: participação em entidades profissionais e ambientais"].map((item) => (
              <li key={item}><Check size={18} />{item}</li>
            ))}
          </ul>
          <Button onClick={() => goTo("contato")}>Conhecer nosso trabalho</Button>
        </div>
      </section>
      <section className="content-section">
        <div className="risk-intro">
          <span className="eyebrow">Direção técnica</span>
          <h2>Uma trajetória construída em campo.</h2>
          <p className="section-copy">O Engenheiro Florestal Marco Aurélio Busch Ziliotto, CREA 23402/D, dirige tecnicamente a Reflora, reunindo experiência histórica em arborização urbana e manejo de árvores em Curitiba com atuação em grandes projetos ambientais.</p>
        </div>
        <div className="scenario-grid">
          {[
            ["Arborização urbana", "Avaliação e manejo de árvores em ruas, parques, escolas e condomínios."], 
            ["Infraestrutura", "Planejamento ambiental para rodovias, portos e empreendimentos."], 
            ["Recuperação ambiental", "Soluções para restaurar áreas e orientar o uso responsável do território."]
          ].map(([title, text]) => (
            <article key={title}>
              <span>{title}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="report-panel">
          <div>
            <span className="eyebrow">Direção técnica</span>
            <h2>Segurança para orientar escolhas.</h2>
            <p className="section-copy">A experiência do diretor técnico conecta conhecimento de campo, gestão pública e visão estratégica para diagnosticar problemas, orientar decisões e desenvolver soluções ambientalmente responsáveis.</p>
          </div>
          <strong>REFLORA | CREA 23402/D</strong>
        </div>
      </section>
    </>
  );
}