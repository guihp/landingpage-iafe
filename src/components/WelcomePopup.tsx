'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

// Interface para a estrutura da resposta da API (simplificada)
interface BibleVerse {
  text: string;
  reference: string;
}

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(true); // Popup abre por padrão
  const [verseData, setVerseData] = useState<BibleVerse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVerse = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Usar a API bible-api.com com tradução Almeida (PT-BR)
        const response = await fetch('https://bible-api.com/?random=verse&translation=almeida');
        if (!response.ok) {
          throw new Error(`Erro ao buscar versículo: ${response.statusText}`);
        }
        const data = await response.json();
        // Esta API retorna text e reference diretamente
        setVerseData({
          text: data.text.trim(),
          reference: data.reference,
        });
      } catch (err) {
        console.error(err);
        setError('Não foi possível carregar o versículo (Almeida). Tente novamente mais tarde.');
        // Resetar ou definir verso padrão PT-BR se desejado
        // setVerseData({ text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.", reference: "João 3:16" });
      } finally {
        setIsLoading(false);
      }
    };

    if (isOpen) { 
        fetchVerse();
    }

  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null; 
  }

  return (
    // Overlay escuro
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4">
      {/* Container do Popup - Ajustado: sem altura fixa, padding ajustado */}
      <div className="relative w-full max-w-[517px] flex-col items-center rounded-[5px] bg-white p-6 pt-10 pb-6 font-poppins shadow-xl flex">

        {/* Botão Fechar (X) no canto */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
          aria-label="Fechar popup"
        >
          <X size={24} />
        </button>

        {/* Logo */}
        <div className="mb-5 flex-shrink-0">
          <Image
            src="/logoiafe.png"
            alt="Logo IAFE"
            width={60} 
            height={62}
            className="h-auto"
          />
        </div>

        {/* Conteúdo de Texto Dinâmico */}  
        <div className="flex min-h-[100px] flex-grow flex-col items-center justify-center text-center">
          {isLoading && (
            <p className="text-[16px] text-gray-500">Carregando versículo...</p>
          )}
          {error && (
             <p className="text-[16px] text-red-600">{error}</p>
          )}
          {!isLoading && !error && verseData && (
            <>
              {/* Texto Principal (Versículo) */}
              <p className="text-[20px] font-semibold leading-[130%] text-[#333333]">
                {verseData.text}
              </p>
              {/* Texto Secundário (Referência) */}
              <p className="mt-2 text-[16px] font-medium leading-[130%] text-[#333333]">
                {verseData.reference}
              </p>
            </>
          )}
        </div>

        {/* Botão Fechar (Inferior) - Margem ajustada */}
        <div className="mt-5 flex w-auto flex-shrink-0 items-center justify-center">
          <button
            onClick={handleClose}
            className="flex w-[195px] items-center justify-center gap-[10px] rounded-[5px] border-[1.8px] border-[#FC5F26] px-[22px] py-[10px] text-[16px] font-medium text-[#FC5F26] transition-colors hover:bg-orange-50"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};

export default WelcomePopup; 