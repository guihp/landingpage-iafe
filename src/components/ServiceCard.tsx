'use client'; // Necessário para useState

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'; // Importa useState

// Ícone de Seta - Lógica de rotação agora usa isActive OU group-hover
const ArrowIcon = ({ isActive }: { isActive: boolean }) => (
  <svg 
    className={`h-5 w-5 text-[#F96F66] transition-transform duration-300 ease-in-out ${isActive ? '-rotate-35' : 'group-hover:-rotate-35'}`}
    fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
  </svg>
);

interface ServiceCardProps {
  titleParts: string[];
  description: string;
  iconSrc: string;
  iconAlt: string;
  linkHref: string;
  linkLabel?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  titleParts,
  description,
  iconSrc,
  iconAlt,
  linkHref,
  linkLabel = "Saiba Mais"
}) => {
  const [isActive, setIsActive] = useState(false);

  // Handler para alternar o estado ativo
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    // Adicionado onClick e classe condicional para translate
    <div 
      className={`group relative flex min-h-[330px] flex-col justify-between overflow-hidden rounded-[46px] border border-[#90368F] bg-gradient-to-b from-[#2E1056]/50 to-[#120325]/50 p-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-[#90368f]/20 ${isActive ? 'translate-y-2 shadow-xl shadow-[#90368f]/20' : 'hover:translate-y-2'}`}
      onClick={handleClick} // Alterna o estado no clique
    >
      {/* Ícone decorativo - Posicionamento revertido e opacidade condicional */}
      <div className={`absolute -right-1 pr-10 top-18 z-0 transition-opacity duration-300 ${isActive ? 'opacity-1' : 'opacity-10 group-hover:opacity-5'}`}>
        <Image 
          src={iconSrc}
          alt=""
          width={110} // Mantido o tamanho que você definiu
          height={110} // Mantido o tamanho que você definiu
          className="object-contain filter grayscale brightness-0 invert"
          aria-hidden="true"
        />
      </div>
      
      <div className="relative z-10 flex flex-grow flex-col">
        {/* Títulos em Labels */}
        <div className="mb-4 space-y-2">
          {titleParts.map((part, index) => (
            <div key={index} className="block rounded-lg bg-gradient-to-r from-[#FF6600] to-[#8A2219] px-3 py-1 w-fit">
              <span className="text-xl font-semibold text-white md:text-2xl">{part}</span>
            </div>
          ))}
        </div>

        {/* Descrição - Visibilidade condicional */}
        <p 
          className={`font-poppins text-xl text-gray-300 md:text-2xl max-w-sm transition-all duration-300 ease-in-out ${isActive ? 'visible max-h-40 opacity-100' : 'invisible max-h-0 opacity-0 group-hover:visible group-hover:max-h-40 group-hover:opacity-100'}`}
        >
          {description}
        </p>
      </div>

      {/* "Saiba Mais" - Alterado para button, chama handleClick */}
      <button
        className="relative z-10 mt-4 inline-flex items-center gap-2 self-start text-white hover:text-[#F96F66]"
        onClick={handleClick} // Chama o mesmo handler do card para alternar o estado
        aria-expanded={isActive} // Adiciona atributo de acessibilidade
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F96F66] transition-colors hover:bg-[#F96F66]/10">
          <ArrowIcon isActive={isActive} /> {/* Passa o estado para o ícone */}
        </div>
        <span className="text-lg font-medium">{linkLabel}</span>
      </button>
    </div>
  );
};

export default ServiceCard; 