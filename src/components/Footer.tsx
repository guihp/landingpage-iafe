'use client'; // Necessário para useContext

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Importe ícones (exemplo usando react-icons, instale com: npm install react-icons)
// Se não quiser usar react-icons, substitua por SVGs ou outros componentes
import { FaInstagram } from 'react-icons/fa';
import { usePopup } from '@/contexts/PopupContext'; // Importar hook do contexto

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Para o copyright dinâmico
  const { openPopup } = usePopup(); // Pegar a função para abrir o popup

  // Dados dos links para facilitar a manutenção
  const menuLinks = [
    { href: '#sobre-nos', label: 'Sobre nós' },
    { href: '#carreira', label: 'Carreira' },
    { href: 'https://grupofeoficial.com/', label: 'Grupo Fé', external: true },
    { href: 'https://ferepresentacoes.com/', label: 'Fé Representações', external: true },
  ];

  // Adicionar IDs correspondentes às chaves de detailedContent
  const serviceLinks = [
    { id: 'IA PARA VENDAS', href: '#', label: 'Ia para vendas' },
    { id: 'IA PARA RH', href: '#', label: 'IA para RH' },
    { id: 'IA PARA CLINICAS', href: '#', label: 'IA para Clinica' },
    { id: 'IA PARA O SEU NEGÓCIO', href: '#', label: 'Ia para Negócios' },
    // Adicionar IDs para criação de websites e apps se também devem abrir o popup
    { id: 'CRIAÇÃO DE WEBSITES', href: '#', label: 'Criação de Websites' },
    { id: 'CRIAÇÃO DE APPS MOBILE', href: '#', label: 'Criação de Apps Mobile' },
  ];

  const socialLinks = [
    // { href: '#', icon: FaFacebookF, label: 'Facebook' },
    { href: 'https://www.instagram.com/iafetech/', icon: FaInstagram, label: 'Instagram' },
    // { href: '#', icon: FaTwitter, label: 'Twitter' },
    // { href: '#', icon: FaLinkedinIn, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-[#080014] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">

          {/* Colunas de Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:gap-16 lg:flex lg:gap-24">
            {/* Coluna Menu */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Menu</h3>
              <ul className="space-y-3">
                {menuLinks.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-gray-300 transition hover:text-white"
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna Serviços - Transformada em botões */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Serviços</h3>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <button 
                      onClick={() => openPopup(link.id)} 
                      className="text-left text-sm text-gray-300 transition hover:text-white"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Logo */}
          <div className="mt-8 flex justify-center md:mt-0 md:items-start">
             <div className="relative h-24 w-24 flex-shrink-0"> {/* Ajuste tamanho conforme necessário */}
               <Image
                 // Assumindo que o logo está em /public/logoiafe.png
                 src="/logoiafe.png"
                 alt="Logo IAFE"
                 fill
                 className="object-contain"
                 sizes="96px"
               />
             </div>
          </div>

        </div>

        {/* Seção de Créditos */}
        <div className="mt-16 border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            {/* Copyright */}
            <p className="text-center text-xs text-gray-400 sm:text-left">
              &copy; {currentYear} IAFE. Todos os Direitos Reservados.
            </p>

            {/* Ícones Sociais */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank" // Abrir em nova aba
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-400 transition hover:text-white"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 