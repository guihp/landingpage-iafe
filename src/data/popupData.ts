// src/data/popupData.ts

// Interface para o conteúdo dinâmico
export interface PopupContent {
  title: string;
  subtitle: string;
  description: string; 
}

// Conteúdo detalhado para cada post/serviço
export const detailedContent: { [key: string]: PopupContent } = {
  'IA PARA RH': {
    title: "Uma IA para o seu RH",
    subtitle: "Transformamos a gestão de pessoas com Inteligência Artificial",
    description: "Desenvolvemos soluções de IA personalizadas para Recursos Humanos, otimizando processos como recrutamento, análise de desempenho, clima organizacional e desenvolvimento de talentos. Nossas IAs facilitam a tomada de decisões, aumentam a eficiência e promovem uma gestão mais estratégica e humanizada.\n\nConheça nossas soluções na seção Automatize Já — experimente nossas ferramentas de IA para RH e agende uma reunião com nossos especialistas!"
  },
  'IA PARA VENDAS': {
    title: "Uma IA para suas Vendas",
    subtitle: "Impulsione seus resultados com Inteligência Artificial",
    description: "Criamos IAs sob medida para acelerar seu processo comercial: automação de funis de vendas, qualificação inteligente de leads, previsões de demanda e análise de comportamento de clientes. Nossas soluções tornam sua equipe mais produtiva e suas estratégias mais assertivas.\n\nAcesse a seção Automatize Já — teste nossa IA para vendas em ação e agende sua reunião com a gente!"
  },
  'IA PARA CLINICAS': {
    title: "Uma IA para sua Clínica",
    subtitle: "Tecnologia que cuida da gestão, para você focar no paciente",
    description: "Desenvolvemos soluções de inteligência artificial para clínicas e consultórios: automação de agendamentos, triagem inteligente, análise de prontuários, otimização de fluxo de atendimento e muito mais. Reduza custos operacionais e melhore a experiência do paciente com uma IA personalizada para a sua rotina.\n\nConheça na seção Automatize Já — experimente nossa IA para clínicas e agende uma conversa com nossos especialistas!"
  },
  'IA PARA O SEU NEGÓCIO': {
     title: "Uma IA para o seu Negócio",
     subtitle: "Soluções inteligentes para transformar seus resultados",
     description: "Desenvolvemos soluções de inteligência artificial sob medida para empresas de todos os portes. Aplicamos tecnologias como visão computacional, automação inteligente e bots humanizados para otimizar processos, reduzir custos e potencializar a tomada de decisões baseada em dados.\n\nExplore nossos projetos na seção Automatize Já — experimente nossas IAs em ação e agende uma reunião personalizada com a nossa equipe!"
  },
  'CRIAÇÃO DE WEBSITES': {
    title: "Um Site para o seu Negócio",
    subtitle: "Presença digital profissional, do seu jeito",
    description: "Criamos sites personalizados, responsivos e com foco em performance para destacar sua marca na internet. Do design à programação, entregamos soluções completas: sites institucionais, landing pages, portfólios, e-commerces e muito mais — tudo com identidade visual única e otimizada para resultados.\n\nConheça nossos projetos na seção Automatize Já — veja exemplos, navegue pelos nossos sites e agende sua reunião com a gente!"
  },
  'CRIAÇÃO DE APPS MOBILE': {
    title: "Um App para o seu Negócio",
    subtitle: "Transformamos suas ideias em aplicativos incríveis",
    description: "Desenvolvemos aplicativos mobile sob medida, com design moderno, performance otimizada e foco na melhor experiência do usuário. Criamos apps Android, iOS ou híbridos — seja para vendas, atendimento, agendamentos, entregas ou qualquer outra funcionalidade que o seu negócio precise.\n\nConfira nossos cases na seção Automatize Já — explore nossos apps prontos e agende uma conversa com nossa equipe!"
  }
}; 