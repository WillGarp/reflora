import { ChevronRight } from "lucide-react";
import { PageIntro } from "../components/PageIntro";
import { clients } from "../data";
import { goTo } from "../utils/navigation";

export function Clients() {
  return (
    <>
      <PageIntro eyebrow="Clientes e parceiros" title="Uma solução para cada realidade ambiental." text="Atendemos organizações que precisam de diagnóstico técnico, planejamento ambiental e apoio para tomar decisões com mais segurança e conformidade." />
      <section className="content-section">
        <div className="client-grid">
          {clients.map(({ icon: Icon, ...client }) => (
            <article className="client-card" key={client.title}>
              <span className="client-tag">{client.tag}</span>
              <Icon size={30} />
              <h2>{client.title}</h2>
              <p>{client.text}</p>
              <button className="text-link" onClick={() => goTo("contato")}>
                Conversar sobre um projeto <ChevronRight size={16} />
              </button>
            </article>
          ))}
        </div>
        <div className="audience-grid">
          <article>
            <span className="eyebrow">Setor público</span>
            <h2>Gestão da arborização urbana também é gestão de segurança.</h2>
            <p>A avaliação técnica auxilia gestores públicos no planejamento e na segurança de prefeituras, parques e vias públicas. Mais informação para melhores decisões.</p>
          </article>
          <article>
            <span className="eyebrow">Setor privado</span>
            <h2>Sua propriedade também precisa de uma avaliação.</h2>
            <p>Identificamos riscos em condomínios, empresas e fazendas para ajudar a proteger pessoas e patrimônio.</p>
          </article>
          <article>
            <span className="eyebrow">Escolas</span>
            <h2>Em uma escola, prevenção não pode esperar.</h2>
            <p>A circulação constante de crianças exige monitoramento preventivo rigoroso, registro técnico e acompanhamento periódico.</p>
          </article>
        </div>
      </section>
    </>
  );
}