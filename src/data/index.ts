import { TreePine, Leaf, ClipboardCheck, ShieldCheck, Building2, BarChart3, Users } from "lucide-react";
import { Page, Service, Client } from "../types";

export const navItems: { label: string; page: Page }[] = [
  { label: "Início", page: "home" },
  { label: "Serviços", page: "servicos" },
  { label: "Florestas plantadas", page: "florestas" },
  { label: "PMIF / PPCIF", page: "fogo" },
  { label: "Clientes", page: "clientes" },
  { label: "Sobre a Reflora", page: "sobre" }
];

export const services: Service[] = [
  { icon: TreePine, title: "Avaliação de risco de árvores", text: "Diagnósticos visuais e técnicos para orientar decisões e proteger pessoas, estruturas e patrimônio." },
  { icon: Leaf, title: "Gestão de áreas verdes", text: "Planejamento, inventário e acompanhamento para espaços urbanos, propriedades e áreas naturais." },
  { icon: ClipboardCheck, title: "Licenciamento ambiental", text: "Apoio técnico para projetos que precisam de conformidade, clareza e responsabilidade ambiental." },
  { icon: ShieldCheck, title: "Prevenção de incêndios", text: "Estratégias de prevenção e manejo para reduzir vulnerabilidades em áreas rurais e florestais." },
];

export const clients: Client[] = [
  { icon: Building2, title: "Órgãos públicos", text: "Prefeituras, secretarias, parques e gestores de vias públicas e áreas verdes.", tag: "Setor público" },
  { icon: BarChart3, title: "Empresas e concessionárias", text: "Indústrias, empresas e operações que precisam reduzir riscos e cuidar do território.", tag: "Corporativo" },
  { icon: Users, title: "Instituições e propriedades", text: "Condomínios, fazendas, escolas e propriedades particulares.", tag: "Particular" },
];

export const portfolioItems = [
  { title: "Implantação de reflorestamento", text: "Planejamento, implantação e acompanhamento de projetos de recomposição e restauração ambiental." },
  { title: "Serviços em árvores urbanas", text: "Avaliação de risco, manejo, laudos e orientações para arborização em vias públicas, parques, escolas e propriedades." },
  { title: "Licenciamento ambiental", text: "Apoio técnico para organizar estudos, documentos e processos junto aos órgãos ambientais." },
  { title: "Consultoria estratégica", text: "Consultoria sob medida para antecipar riscos, orientar decisões e dar clareza às exigências ambientais de cada projeto." },
];

export const fireServices = [
  ["Mapeamento e risco", "Classificação por combustível vegetal e vulnerabilidade ambiental."],
  ["Medidas preventivas", "Planejamento e implementação de aceiros adequados."],
  ["Monitoramento avançado", "FMA+, satélite e rondas para cálculo contínuo do perigo."],
  ["Brigadas e resposta", "Dimensionamento, capacitação e planos de emergência."],
  ["Gestão digital", "Dados e mapeamentos para apoiar equipes e decisões."],
  ["Conscientização", "Campanhas de educação ambiental e sinalização preventiva."],
];

export const forestProducts = [
  { category: "Herbicidas", products: "Touchdown e Sequence", text: "Soluções para dessecação e controle de plantas daninhas na linha e entrelinha de plantações de eucalipto e pinus." },
  { category: "Fungicidas", products: "Priori Top e Priori Xtra", text: "Proteção preventiva e curativa para doenças como ferrugem e oídio em cultivos de eucalipto." },
  { category: "Inseticidas", products: "Actara e Match", text: "Manejo de pragas como cupins, vespa-da-galha e lagartas, com orientação conforme cultura, dose e modalidade." },
  { category: "Adjuvantes", products: "Agral e Ochima", text: "Produtos que ajudam no espalhamento, na distribuição e na absorção das caldas aplicadas." },
  { category: "Bioestimulante", products: "Quantis", text: "Fertilizante líquido orgânico para aplicações foliares, enraizamento, estabelecimento e redução de estresses." },
  { category: "Indutor de resistência", products: "Bion 500 WG", text: "Ativador preventivo dos mecanismos naturais de defesa das plantas contra doenças bacterianas." },
];