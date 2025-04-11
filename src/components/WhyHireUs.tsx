import Image from 'next/image';
import React from 'react';

// Dados para os blocos de motivos
const reasons = [
  {
    title: "Aumento de receita e competitividade",
    text: "63% dos executivos dizem que a IA aumentou receitas, especialmente em marketing e vendas",
    imgSrc: "/produtividade.jpeg", // Substitua pelo nome real
    imgAlt: "Gráfico mostrando aumento de receita com IA",
    imgLeft: true, // Imagem na esquerda em desktop?
  },
  {
    title: "Diminuição dos custos nas operações empresariais",
    text: "A IA reduziu até 37% dos custos operacionais nas empresas.",
    imgSrc: "/operacoes.jpeg", // Substitua pelo nome real
    imgAlt: "Engrenagens simbolizando redução de custos",
    imgLeft: false, // Imagem na direita em desktop?
  },
  {
    title: "Aumento de produtividade",
    text: "Mais de 54% dos executivos afirmam que a IA elevou a produtividade nas empresas.",
    imgSrc: "/competitivade.png", // Substitua pelo nome real
    imgAlt: "Pessoas colaborando com robôs, simbolizando produtividade",
    imgLeft: true, // Imagem na esquerda em desktop?
  },
];

const WhyHireUs = () => {
  const descriptionText = "Seu empreendimento, oportunidades sem limites. Informações de quem implementa inteligência artificial nas empresas.";

  return (
    <section id="porque-contratar" className="bg-[#140421] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Cabeçalho da Seção */}
        <div className="mb-16 flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:text-left lg:mb-24">
          <div className="flex-shrink-0 rounded-lg bg-gradient-to-r from-[#FF7262] to-[#8115C2] p-1 shadow-lg">
            <h2 className="whitespace-nowrap rounded bg-[#140421] px-6 py-3 text-3xl font-bold text-white md:text-4xl">
              Por que nos contratar?
            </h2>
          </div>
          <p className="max-w-xl text-lg text-gray-300 md:pt-3">
            {descriptionText}
          </p>
        </div>

        {/* Blocos de Motivos */}
        <div className="space-y-16 lg:space-y-24">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center gap-8 md:flex-row md:gap-12 lg:gap-16 ${!reason.imgLeft ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Imagem */}
              <div className="w-full md:w-1/2 flex-shrink-0">
                <Image
                  src={reason.imgSrc}
                  alt={reason.imgAlt}
                  width={448} // Largura base do Figma
                  height={336} // Altura base do Figma
                  className="h-auto w-full rounded-[20px] object-cover shadow-[0px_5px_0px_0px_#FC5F26]"
                />
              </div>

              {/* Texto */}
              <div className="w-full text-center md:w-1/2 md:text-left">
                <h3 className="mb-4 text-3xl font-bold leading-tight text-white lg:text-4xl">
                  {reason.title}
                </h3>
                <p className="text-lg text-gray-300 lg:text-xl">
                  {reason.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireUs; 