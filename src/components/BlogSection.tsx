'use client';

import React from 'react';
import Image from 'next/image';
// import Link from 'next/link'; // Link não é usado
import { usePopup } from '@/contexts/PopupContext';
// import { PopupContent } from '@/data/popupData'; // PopupContent não é usado diretamente aqui
// Dados de exemplo para os posts do blog (mantidos como antes)
const posts = [
  { id: 'IA PARA RH', imgSrc: "/blog-rh.png", category: "IAFÉ", title: "IA PARA RH", description: "Uma IA para otimizar a comunicação entre o RH e os colaboradores", buttonLabel: "Saiba Mais" },
  { id: 'IA PARA VENDAS', imgSrc: "/blog-vendas.png", category: "IAFÉ", title: "IA PARA VENDAS", description: "IA para otimizar o atendimento com seus clientes em qualquer horário.", buttonLabel: "Saiba Mais" },
  { id: 'IA PARA CLINICAS', imgSrc: "/blog-clinicas.avif", category: "IAFÉ", title: "IA PARA CLINICAS", description: "Otimiza agendamentos e melhora a gestão clínica.", buttonLabel: "Saiba Mais" },
  { id: 'IA PARA O SEU NEGÓCIO', imgSrc: "/blog-negocio.avif", category: "IAFÉ", title: "IA PARA O SEU NEGÓCIO", description: "Otimiza processos, melhora decisões com dados.", buttonLabel: "Saiba Mais" },
  { id: 'CRIAÇÃO DE WEBSITES', imgSrc: "/blog-websites.png", category: "IAFÉ", title: "CRIAÇÃO DE WEBSITES", description: "Websites ampliam a visibilidade, fortalecem a marca.", buttonLabel: "Saiba Mais" },
  { id: 'CRIAÇÃO DE APPS MOBILE', imgSrc: "/blog-apps.png", category: "IAFÉ", title: "CRIAÇÃO DE APPS MOBILE", description: "Conecta empresas e clientes de forma prática.", buttonLabel: "Saiba Mais" },
];

// Interface para as props do BlogPostCard (mantida como antes)
interface BlogPostCardProps {
  id: string; 
  imgSrc: string;
  category: string;
  title: string;
  description: string;
  buttonLabel?: string;
  onButtonClick: (contentId: string) => void; 
}

// Componente Card (mantido como antes)
const BlogPostCard: React.FC<BlogPostCardProps> = ({ 
  id,
  imgSrc, 
  category, 
  title, 
  description, 
  buttonLabel = "Saiba Mais", 
  onButtonClick 
}) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-gradient-to-b from-[#1E112A] to-[#2A0D3D] shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="aspect-[4/3] w-full flex-shrink-0">
        <Image 
          src={imgSrc} 
          alt={`Imagem para ${title}`} 
          width={400} 
          height={300} 
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <p className="text-sm font-medium text-[#FC5F26]">{category}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
          <p className="mt-3 text-base text-gray-400 line-clamp-3">{description}</p>
        </div>
        <div className="mt-6">
          <button 
            onClick={() => onButtonClick(id)}
            className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente Principal da Seção - Adaptado para usar Contexto
const BlogSection = () => {
  const descriptionText = "Explore nossas soluções e descubra como a IA pode transformar seu negócio.";
  const { openPopup } = usePopup();

  return (
    <section className="bg-[#140421] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Cabeçalho da Seção */}
        <div className="mb-16 flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:text-left lg:mb-24">
          <div className="flex-shrink-0 rounded-lg bg-gradient-to-r from-[#FF7262] to-[#8115C2] p-1 shadow-lg">
            <h2 className="whitespace-nowrap rounded bg-[#140421] px-6 py-3 text-3xl font-bold text-white md:text-4xl">
              Blog
            </h2>
          </div>
          <p className="max-w-xl text-lg text-gray-300 md:pt-3">
            {descriptionText}
          </p>
        </div>

        {/* Grid de Posts - Passa openPopup do contexto para onButtonClick */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 items-stretch">
          {posts.map((post) => (
            <BlogPostCard
              key={post.id}
              id={post.id}
              imgSrc={post.imgSrc}
              category={post.category}
              title={post.title}
              description={post.description}
              buttonLabel={post.buttonLabel}
              onButtonClick={openPopup}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 