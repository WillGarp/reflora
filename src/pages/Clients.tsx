import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { PageIntro } from "../components/PageIntro";
import { clients, partners } from "../data";
import { goTo } from "../utils/navigation";

export function Clients() {
  return (
    <>
      <PageIntro eyebrow="Projetos e parceiros" title="Experiência técnica para diferentes realidades." text="Atendemos poder público, empresas, empreendimentos, escolas, condomínios e propriedades que precisam diagnosticar riscos e orientar decisões ambientais com segurança." />
      <section className="content-section">
        
        {/* Nova Seção Interativa de Clientes Reais */}
        <div className="partners-section" style={{ borderTop: "none", paddingTop: 0, marginTop: 0, marginBottom: "100px" }}>
          <span className="eyebrow">Projetos realizados e parceiros</span>
          <h2>Experiência aplicada em diferentes setores.</h2>
          <p className="section-copy">Os projetos e parcerias da Reflora aproximam a engenharia florestal e ambiental de decisões reais em saúde, construção, incorporação e educação.</p>
          
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="partner-card"
                // Animação de entrada (Surgindo de baixo pra cima em cascata)
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                // Animação de interação (Aumentando levemente com o mouse)
                whileHover={{ scale: 1.05 }}
              >
                <span>{partner.type}</span>
                <h3>{partner.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>

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