'use client';

import React from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

// Interface para o conteúdo dinâmico
export interface PopupContent {
  title: string;
  subtitle: string;
  description: string; 
}

interface DetailsPopupProps {
  isOpen: boolean;
  onClose: () => void;
  content: PopupContent | null;
}

const DetailsPopup: React.FC<DetailsPopupProps> = ({ isOpen, onClose, content }) => {

  if (!isOpen || !content) {
    return null; // Não renderiza nada se fechado ou sem conteúdo
  }

  return (
    // Overlay escuro
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4">
      {/* Container do Popup - Estilo similar ao WelcomePopup */}
      <div className="relative w-full max-w-[517px] flex-col items-center rounded-[5px] bg-white p-6 pt-10 pb-6 font-poppins shadow-xl flex">

        {/* Botão Fechar (X) no canto */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
          aria-label="Fechar popup"
        >
          <X size={24} />
        </button>

        {/* Logo */}
        <div className="mb-5 flex-shrink-0">
          <Image
            src="/logoiafe.png" // Garanta que este é o caminho correto
            alt="Logo IAFE"
            width={60} 
            height={62}
            className="h-auto"
          />
        </div>

        {/* Conteúdo de Texto Dinâmico */}  
        <div className="flex min-h-[150px] w-full flex-grow flex-col items-center justify-center text-center px-4">
          {/* Título */}
          <h2 className="text-[22px] font-bold leading-tight text-[#333333]">
            {content.title}
          </h2>
          {/* Subtítulo */}
          <h3 className="mt-1 text-[16px] font-semibold leading-snug text-[#555555]"> {/* Cor ligeiramente mais clara para subtítulo */}
            {content.subtitle}
          </h3>
          {/* Descrição */}
          <p className="mt-4 text-[14px] font-normal leading-relaxed text-[#333333]">
            {content.description}
          </p>
        </div>

        {/* Botão Fechar (Inferior) */}
        <div className="mt-6 flex w-auto flex-shrink-0 items-center justify-center">
          <button
            onClick={onClose}
            className="flex w-[195px] items-center justify-center gap-[10px] rounded-[5px] border-[1.8px] border-[#FC5F26] px-[22px] py-[10px] text-[16px] font-medium text-[#FC5F26] transition-colors hover:bg-orange-50"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};

export default DetailsPopup; 