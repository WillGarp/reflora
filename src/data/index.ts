import { TreePine, Leaf, ClipboardCheck, ShieldCheck, Building2, BarChart3, Users } from "lucide-react";
import { Page, Service, Client } from "../types";

export const navItems: { label: string; page: Page }[] = [
  { label: "Início", page: "home" },
  { label: "Serviços", page: "servicos" },
  { label: "Florestas e recuperação", page: "florestas" },
  { label: "Rodovias e PMIF", page: "fogo" },
  { label: "Projetos e Cases", page: "clientes" },
  { label: "Sobre e Experiência", page: "sobre" }
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
  { category: "Herbicidas", products: "Manejo de plantas daninhas", text: "Produtos para dessecação e controle de plantas daninhas; a escolha depende da cultura, estágio de desenvolvimento e condicionantes ambientais." },
  { category: "Fungicidas", products: "Proteção fitossanitária", text: "Produtos para proteção preventiva e curativa contra doenças foliares e sistêmicas; aplicação conforme diagnóstico técnico e recomendações agronômicas." },
  { category: "Inseticidas", products: "Controle de pragas", text: "Produtos para o controle de insetos-praga; uso técnico deve considerar espécie alvo, modo de ação e orientações de dose." },
  { category: "Adjuvantes", products: "Otimização de caldas", text: "Aditivos e coadjuvantes que melhoram a eficiência da calda, espalhamento e absorção nas aplicações." },
  { category: "Bioestimulante", products: "Estímulo ao vigor", text: "Produtos para promover estabelecimento, vigor e resistência a estresses abióticos; recomenda-se avaliação técnica prévia." },
  { category: "Indutor de resistência", products: "Ativação de defesa natural", text: "Ativador preventivo dos mecanismos naturais de defesa das plantas contra agentes fitopatogênicos." },
];

export const partners = [
  { name: "Hospital Pequeno Príncipe", type: "Saúde", logo: "/images/logo/hospital_pequeno_principe.png" },
  { name: "Construtora Hafil", type: "Construção Civil", logo: "/images/logo/grupo_hafil_logo.png" },
  { name: "Bidese Incorporadora", type: "Incorporação", logo: "/images/logo/bidese.png" },
  { name: "Escola Umbrella", type: "Educação", logo: "/images/logo/umbrella_logo.png" },
  { name: "Grupo Bom Jesus", type: "Educação", logo: "/images/logo/grupo_bom_jesus.png" }
];