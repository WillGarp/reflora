import { useState } from "react";
import { ArrowRight, Mail, Phone, CheckCircle2 } from "lucide-react";
import { PageIntro } from "../components/PageIntro";

export function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    // O SEGREDO ESTÁ AQUI: Salvamos o formulário na memória antes do "await"
    const formElement = event.currentTarget; 
    
    const formData = new FormData(formElement);
    formData.append("access_key", "9be48e3e-0914-46bc-ab24-694ef4ed1165");
    formData.append("subject", "Novo contato pelo site Reflora");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: json
      });

      if (response.ok) {
        setStatus("success");
        formElement.reset(); // Agora ele consegue limpar os campos sem dar erro
        setTimeout(() => setStatus("idle"), 5000); 
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Erro no envio:", error);
      setStatus("error");
    }
  };

  return (
    <>
      <PageIntro eyebrow="Contato" title="Vamos orientar sua decisão ambiental." text="Fale com a equipe Reflora sobre arborização urbana, licenciamento, infraestrutura, florestas, recuperação ambiental ou PMIF / PPCIF." />
      <section className="contact-section">
        <div className="contact-info">
          <span className="eyebrow light">Canais diretos</span>
          <h2>Experiência para o seu próximo projeto.</h2>
          <a href="tel:+5541999917280"><Phone size={19} />(41) 99991-7280</a>
          <a href="mailto:contato@reflora.eng.br"><Mail size={19} />contato@reflora.eng.br</a>
          <p>Atendimento técnico para poder público, empresas, empreendimentos, escolas, condomínios e propriedades.</p>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Seu nome
            <input type="text" name="nome" required placeholder="Como podemos chamar você?" />
          </label>
          <label>
            E-mail ou telefone
            <input type="text" name="contato" required placeholder="Para retornarmos o contato" />
          </label>
          <label>
            Conte sobre o projeto
            <textarea name="mensagem" required rows={4} placeholder="Área, cidade e o que você precisa avaliar" />
          </label>
          
          <button className="button" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Enviando..." : "Enviar mensagem"} 
            {status !== "loading" && <ArrowRight size={17} />}
          </button>

          {status === "success" && (
            <p style={{ color: "#4e9b51", marginTop: "10px", display: "flex", alignItems: "center", gap: "8px", fontWeight: "bold" }}>
              <CheckCircle2 size={18} /> Mensagem enviada com sucesso!
            </p>
          )}
          
          {status === "error" && (
            <p style={{ color: "#b84a45", marginTop: "10px", fontWeight: "bold" }}>
              Ocorreu um erro ao enviar. Tente novamente.
            </p>
          )}
        </form>
      </section>
    </>
  );
}