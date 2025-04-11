'use client'; // Necessário para manipulação do DOM (scrollTo)

import Image from 'next/image';
import Link from 'next/link'; // Se o botão levar a algum lugar

const Hero = () => {

  // Função para scroll suave (similar à do Header)
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 100; // Altura do header (ajuste se necessário)
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative bg-[#140421] text-white pt-16 lg:pt-24 pb-0 overflow-hidden">

      {/* Fundo Elipse Decorativo */}
      <div className="absolute inset-0 z-0 opacity-30 lg:opacity-40" aria-hidden="true">
        <Image
          src="/FundoElipse.png" // Certifique-se que está na pasta public
          alt=""
          layout="fill"
          objectFit="cover"
          quality={75}
        />
      </div>

      {/* Container do Conteúdo (Alterado para max-w-7xl) */}
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-12 lg:gap-16">

          {/* Coluna de Texto (Esquerda) */}
          <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start space-y-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 bg-[#160C18] border border-purple-500/50">
              <span className="text-sm text-[#B5B0B7]">IAFÉ Oficial</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Automatizando
              <br />
              ao seu estilo
            </h1>

            {/* Parágrafo */}
            <p className="text-lg text-gray-400 max-w-xl">
              Automatizamos processos repetitivos, promovendo eficiência em sua operação e ajudando sua empresa a reduzir custos, aumentar os lucros e melhorar a produtividade.
            </p>

            {/* Botão CTA */}
            {/* Use Link se for navegação interna, ou <a> para externa */}
            <button
              onClick={() => scrollToSection('contato')}
              className="mt-4 rounded-[15px] mb-10 bg-[#FC5F26] px-10 py-3 text-lg font-semibold text-[#EEF2FF] shadow-[4px_4px_16px_4px_rgba(182,60,16,0.5)] transition-opacity duration-300 hover:opacity-90"
            >
              Automatize Agora
            </button>

          </div>

          {/* Coluna da Imagem (Direita) */}
          {/* Oculta abaixo de LG, visível como flex de LG para cima */}
          {/* Reverte largura e justificação para LG */}
          <div className="hidden lg:flex w-full lg:w-1/2 justify-center lg:justify-end relative z-10">
            <Image
              src="/roboiafe.png" // Caminho da imagem na pasta public
              alt="Robô da IAFÉ representando automação"
              width={700} // Largura base
              height={480} // Altura base
              priority
              className="max-w-full h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero; 