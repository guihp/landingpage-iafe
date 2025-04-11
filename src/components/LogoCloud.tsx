import Image from 'next/image';

const logos = [
  { src: '/jastelo-logo.png', alt: 'Logo Jastelo', width: 117, height: 61 },
  { src: '/logoiafe.png', alt: 'Isotipo IAFÉ', width: 59, height: 61 },
  { src: '/grupofe.png', alt: 'Logo Grupo Fé', width: 203, height: 62 },
  { src: '/fe-representacao.png', alt: 'Logo Fé Representações', width: 130, height: 71 },
  // Adicione mais logos se tiver
];

const LogoCloud = () => {
  return (
    // Altura e padding responsivos ajustados
    <section className="relative flex w-full items-center justify-center bg-[#140421] px-6 py-10 md:px-20 md:py-0 h-[90px] md:h-[125px] border-t border-[#0F141C] overflow-hidden">
      {/* Efeito de brilho ajustado para nova altura mobile */}
      <div
        className="absolute inset-x-0 -top-4 md:-top-8 z-0 mx-auto h-[151px] w-11/12 md:w-full max-w-[1280px] rounded-[416px] bg-[#502E55] opacity-50 blur-[60px]"
        aria-hidden="true"
      />

      {/* Container principal com overflow hidden para o marquee */}
      <div className="relative z-10 w-full overflow-hidden">
        {/* Container interno com flex, nowrap e animação */}
        <div className="flex flex-nowrap items-center animate-marquee whitespace-nowrap">
          {/* Lista de logos duplicada para efeito contínuo */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={`${logo.alt}-${index}`} className="flex items-center justify-center flex-shrink-0 px-8 md:px-16"> {/* Adicionado flex items-center justify-center */}
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-auto w-auto filter grayscale opacity-60 transition-opacity duration-300 hover:opacity-100 max-h-[50px] md:max-h-[60px]" // Limita altura max para consistencia
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud; 