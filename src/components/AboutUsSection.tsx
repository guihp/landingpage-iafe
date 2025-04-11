import React from 'react';

// Componente reutilizável para os cards de Visão/Missão/Valores
interface ValueCardProps {
  title: string;
  text: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, text }) => {
  return (
    <div className={
      `flex h-[292px] w-full max-w-sm flex-col items-center justify-center rounded-[20px] 
      border-[2.152px] border-white/50 
      bg-[linear-gradient(138deg,rgba(81,245,255,0.15)_-9.3%,rgba(163,63,255,0.15)_105.94%)] 
      p-6 text-center 
      shadow-[0px_5.163px_0px_0px_#FC5F26,0px_3.115px_38.159px_0px_rgba(0,7,72,0.12)] 
      backdrop-blur-[5.38px] 
      md:max-w-[344px] 
      transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2`
    }>
      <h3 className="mb-4 text-3xl font-bold text-white">
        {title}
      </h3>
      <p className="text-gray-300">
        {text}
      </p>
    </div>
  );
};

// Componente principal da Seção Sobre Nós
const AboutUsSection = () => {
  const visionText = "Ser a principal referência em tecnologia e inovação digital no Maranhão";
  const missionText = "Oferecer um atendimento de excelência, garantindo qualidade em cada serviço prestado.";
  const valuesText = "Confiança em Deus, humildade, honestidade, respeito, foco e determinação com nossos clientes.";
  const descriptionText = "Transforme sua empresa com a IAFÉ: especialistas em criar soluções de IA para WhatsApp, Facebook, Instagram, sites, apps mobile inovadores e automações inteligentes para levar seu negócio ao próximo nível!";

  return (
    <section id="sobre-nos" className="bg-[#140421] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Cabeçalho da Seção */}
        <div className="mb-12 flex flex-col items-center gap-4 md:flex-row md:items-start lg:mb-16">
          <div className="flex-shrink-0 rounded-lg bg-gradient-to-r from-[#FF7262] to-[#8115C2] p-1 shadow-lg">
            <h2 className="rounded bg-[#140421] px-6 py-3 text-3xl font-bold text-white md:text-4xl">
              Sobre nós
            </h2>
          </div>
          <p className="max-w-xl text-center text-lg text-gray-300 md:pt-1 md:text-left">
            {descriptionText}
          </p>
        </div>

        {/* Grid Visão/Missão/Valores */}
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-stretch lg:justify-center">
          <ValueCard title="Nossa Visão" text={visionText} />
          <ValueCard title="Nossa Missão" text={missionText} />
          <ValueCard title="Nossos Valores" text={valuesText} />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection; 