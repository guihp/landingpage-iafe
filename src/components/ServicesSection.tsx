import ServiceCard from './ServiceCard';

const services = [
  {
    titleParts: ['Inteligência Artificial', 'Personalizada'],
    description: 'IA personalizada aumenta eficiência, reduz custos e melhora a experiência do cliente.',
    iconSrc: '/icon-card-ia.png', // Substituir pelo nome real
    iconAlt: 'Ícone Inteligência Artificial',
    linkHref: '/servicos/ia',
  },
  {
    titleParts: ['Análise de', 'Dados'],
    description: 'Os dados são analisados com cuidado e altamente protegidos.',
    iconSrc: '/AnaliseIcone.png', // Substituir pelo nome real
    iconAlt: 'Ícone Análise de Dados',
    linkHref: '/servicos/analise-dados',
  },
  {
    titleParts: ['Humanização', 'com IA'],
    description: 'A IA humanizada melhora a interação e a experiência do cliente.',
    iconSrc: '/HumanizacaocomIA.png', // Substituir pelo nome real
    iconAlt: 'Ícone Humanização com IA',
    linkHref: '/servicos/humanizacao-ia',
  },
  {
    titleParts: ['Automação', 'Inteligente'],
    description: 'A automação inteligente otimiza processos e aumenta a eficiência.',
    iconSrc: '/Automacao.png', // Substituir pelo nome real
    iconAlt: 'Ícone Automação Inteligente',
    linkHref: '/servicos/automacao',
  },
  {
    titleParts: ['Consultoria de', 'Negócios'],
    description: 'A consultoria de negócios impulsiona estratégias e resultados.',
    iconSrc: '/CONSULTORIA.png', // Substituir pelo nome real
    iconAlt: 'Ícone Consultoria de Negócios',
    linkHref: '/servicos/consultoria',
  },
  {
    titleParts: ['Visão', 'Computacional'],
    description: 'A visão computacional transforma imagens em insights valiosos.',
    iconSrc: '/vISAO.png', // Substituir pelo nome real
    iconAlt: 'Ícone Visão Computacional',
    linkHref: '/servicos/visao-computacional',
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="bg-[#140421] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Cabeçalho da Seção */}
        <div className="mb-12 flex flex-col items-center gap-4 md:flex-row md:items-start lg:mb-16">
          <div className="flex-shrink-0 rounded-lg bg-gradient-to-r from-[#FF7262] to-[#8115C2] p-1 shadow-lg">
            <h2 className="rounded bg-[#140421] px-6 py-3 text-3xl font-bold text-white md:text-4xl">
              Serviços
            </h2>
          </div>
          <p className="max-w-xl text-center text-lg text-gray-300 md:pt-3 md:text-left">
          Soluções inteligentes que conectam sua empresa ao futuro: automações, atendimento com IA, integração em redes sociais, sites e aplicativos — tudo pensado para escalar seu negócio com tecnologia de verdade.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              titleParts={service.titleParts}
              description={service.description}
              iconSrc={service.iconSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 