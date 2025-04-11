'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';
import DetailsPopup from '@/components/DetailsPopup';
import { PopupContent, detailedContent } from '@/data/popupData'; // Importar interface e dados

// Interface para o valor do contexto
interface PopupContextType {
  openPopup: (contentId: string) => void;
  closePopup: () => void;
}

// Criar o Contexto
const PopupContext = createContext<PopupContextType | undefined>(undefined);

// Hook customizado para usar o contexto
export const usePopup = () => {
  const context = useContext(PopupContext);
  if (context === undefined) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
};

// Componente Provedor
interface PopupProviderProps {
  children: ReactNode;
}

export const PopupProvider: React.FC<PopupProviderProps> = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState<PopupContent | null>(null);

  const openPopup = (contentId: string) => {
    const content = detailedContent[contentId];
    if (content) {
      setSelectedContent(content);
      setIsPopupOpen(true);
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedContent(null);
  };

  // Valor a ser passado pelo contexto
  const contextValue: PopupContextType = {
    openPopup,
    closePopup,
  };

  return (
    <PopupContext.Provider value={contextValue}>
      {children} {/* Renderiza os componentes filhos envolvidos pelo provider */}
      {/* Renderiza o Popup aqui, controlado pelo estado do provider */}
      <DetailsPopup 
        isOpen={isPopupOpen} 
        onClose={closePopup} 
        content={selectedContent} 
      />
    </PopupContext.Provider>
  );
}; 