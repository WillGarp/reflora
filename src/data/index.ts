import { TreePine, Leaf, ClipboardCheck, ShieldCheck, Building2, BarChart3, Users } from "lucide-react";
import { Page, Service, Client } from "../types";

export const navItems: { label: string; page: Page }[] = [
  { label: "Início", page: "home" },
  { label: "Serviços", page: "servicos" },
  { label: "Florestas e recuperação", page: "florestas" },
  { label: "Rodovias e PMIF / PPCIF", page: "fogo" },
  { label: "Projetos / Cases", page: "clientes" },
  { label: "Sobre / Experiência", page: "sobre" },
  { label: "Contato", page: "contato" }
];

export const services: Service[] = [
  { icon: TreePine, title: "Arborização Urbana e Gestão de Risco", text: "Avaliação de risco, diagnóstico fitossanitário e estrutural, inventário arbóreo, laudos, manejo e planos de arborização." },
  { icon: Leaf, title: "Licenciamento e Gestão Ambiental", text: "Estudos, licenciamento, planejamento e gestão ambiental para orientar decisões com conformidade e responsabilidade." },
  { icon: ClipboardCheck, title: "Infraestrutura Rodoviária e Portuária", text: "Atuação ambiental em obras e operações de infraestrutura, incluindo planejamento, licenciamento e acompanhamento técnico." },
  { icon: ShieldCheck, title: "Florestas, Recuperação e Carbono", text: "Planejamento florestal, recuperação ambiental, restauração, manejo e soluções relacionadas a carbono e sustentabilidade." },
];

export const clients: Client[] = [
  { icon: Building2, title: "Órgãos públicos", text: "Prefeituras, secretarias, parques e gestores de vias públicas e áreas verdes.", tag: "Setor público" },
  { icon: BarChart3, title: "Empresas e concessionárias", text: "Indústrias, empresas e operações que precisam reduzir riscos e cuidar do território.", tag: "Corporativo" },
  { icon: Users, title: "Instituições e propriedades", text: "Condomínios, fazendas, escolas e propriedades particulares.", tag: "Particular" },
];

export const portfolioItems = [
  { title: "Arborização urbana e avaliação de risco", text: "Diagnóstico fitossanitário e estrutural, inventário arbóreo, laudos, pareceres e recomendações de poda, manejo e intervenção." },
  { title: "Licenciamento e gestão ambiental", text: "Apoio técnico para organizar estudos, documentos, processos e prioridades junto aos órgãos ambientais." },
  { title: "Rodovias, portos e infraestrutura", text: "Planejamento e acompanhamento ambiental para obras, operações e empreendimentos de infraestrutura." },
  { title: "Florestas, recuperação e carbono", text: "Planejamento florestal, restauração, recuperação ambiental, monitoramento e soluções relacionadas a carbono." },
];

export const fireServices = [
  ["Mapeamento e avaliação de risco", "Classificação por combustível vegetal, uso do solo e vulnerabilidade ambiental."],
  ["Medidas preventivas", "Planejamento de aceiros, faixas de domínio e outras ações de redução de risco."],
  ["Monitoramento avançado", "FMA+, satélite, rondas, sinalização e alertas para acompanhar o perigo."],
  ["Brigadas e resposta", "Dimensionamento, capacitação, recursos e planos de emergência."],
  ["Gestão digital", "Mapas e dados para apoiar equipes, metas e decisões do PMIF e PPCIF."],
  ["Conscientização", "Campanhas de educação ambiental, comunicação e prevenção integrada."],
];

export const forestProducts = [
  { category: "Herbicidas", products: "Touchdown e Sequence", text: "Soluções para dessecação e controle de plantas daninhas na linha e entrelinha de plantações de eucalipto e pinus." },
  { category: "Fungicidas", products: "Priori Top e Priori Xtra", text: "Proteção preventiva e curativa para doenças como ferrugem e oídio em cultivos de eucalipto." },
  { category: "Inseticidas", products: "Actara e Match", text: "Manejo de pragas como cupins, vespa-da-galha e lagartas, com orientação conforme cultura, dose e modalidade." },
  { category: "Adjuvantes", products: "Agral e Ochima", text: "Produtos que ajudam no espalhamento, na distribuição e na absorção das caldas aplicadas." },
  { category: "Bioestimulante", products: "Quantis", text: "Fertilizante líquido orgânico para aplicações foliares, enraizamento, estabelecimento e redução de estresses." },
  { category: "Indutor de resistência", products: "Bion 500 WG", text: "Ativador preventivo dos mecanismos naturais de defesa das plantas contra doenças bacterianas." },
];

// Adicione isso no final do arquivo src/data/index.ts
export const partners = [
  { name: "Hospital Pequeno Príncipe", type: "Saúde" },
  { name: "Construtora Hafil", type: "Construção Civil" },
  { name: "Bidese Incorporadora", type: "Incorporação" },
  { name: "Escola Umbrella", type: "Educação" },
  { name: "Grupo Bom Jesus", type: "Educação" }
];