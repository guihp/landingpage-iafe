'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Popup Component (pode ser movido para um arquivo separado se preferir)
const ThankYouPopup = ({ message, onClose }: { message: string; onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 10000); // Fecha após 10 segundos

    return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado ou fechado manualmente
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
      <div className="rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 p-6 text-center shadow-xl md:p-8">
        <p className="mb-4 text-lg font-semibold text-white">{message}</p>
        <button
          onClick={onClose}
          className="rounded-md bg-white px-4 py-2 text-sm font-medium text-indigo-700 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

const ContactSection = () => {
  // Descrição extraída do JSON (ou use uma mais apropriada)
  const descriptionText = "Entre em contato para automatizar seus processos e impulsionar seu negócio com nossas soluções de IA."; // Ajuste conforme necessário

  // Estados para o formulário e popup
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setPopupMessage(''); // Limpa mensagens anteriores

    const webhookUrl = 'https://n8n-sgo8ksokg404ocg8sgc4sooc.vemprajogo.com/webhook/first-mensage';

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Se a resposta não for OK (ex: erro 4xx, 5xx)
        throw new Error(`Erro no servidor: ${response.status} ${response.statusText}`);
      }

      // Sucesso!
      setPopupMessage("Obrigado! Nossa IA entrará em contato em breve.");
      setShowPopup(true);
      setFormData({ name: '', email: '', phone: '' }); // Limpa o formulário

    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setPopupMessage("Ocorreu um erro ao enviar. Tente novamente mais tarde."); // Mensagem de erro
      setShowPopup(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section id="contato" className="relative bg-[#140421] py-16 lg:py-24">
      {/* Popup de Agradecimento/Erro */}
      {showPopup && <ThankYouPopup message={popupMessage} onClose={closePopup} />}

      <div className="mx-auto max-w-7xl px-4">
        {/* Cabeçalho da Seção */}
        <div className="mb-16 flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:text-left lg:mb-24">
          <div className="flex-shrink-0 rounded-lg bg-gradient-to-r from-[#FF7262] to-[#8115C2] p-1 shadow-lg">
            {/* Container interno para o background da seção, mantendo o padding do gradiente */}
            <div className="rounded bg-[#140421] px-6 py-3">
              <h2 className="whitespace-nowrap text-3xl font-bold text-white md:text-4xl">
                Contato
              </h2>
            </div>
          </div>
          <p className="max-w-xl text-lg text-gray-300 md:ml-6 md:pt-3">
            {descriptionText}
          </p>
        </div>

        {/* Conteúdo Principal: Formulário e Imagem */}
        <div className="flex flex-col items-center justify-center gap-12 rounded-[20px] bg-gradient-to-br from-cyan-400/5 via-purple-500/5 to-purple-600/5 p-8 md:flex-row md:items-center md:gap-16 lg:p-12">

          {/* Formulário */}
          <div className="w-full max-w-md flex-1">
            <h3 className="mb-8 text-center text-[40px] font-bold leading-[130%] text-white md:text-left">
              Automatize Já!
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Campo Nome */}
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Seu nome completo"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="block w-full rounded-xl border border-gray-600 bg-white p-3.5 text-gray-900 shadow-sm placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                  disabled={isSubmitting}
                />
              </div>

              {/* Campo Email */}
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="seu.email@exemplo.com"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full rounded-xl border border-gray-600 bg-white p-3.5 text-gray-900 shadow-sm placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                  disabled={isSubmitting}
                />
              </div>

              {/* Campo Telefone */}
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-white">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(11) 99999-9999"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="block w-full rounded-xl border border-gray-600 bg-white p-3.5 text-gray-900 shadow-sm placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                  disabled={isSubmitting}
                />
              </div>

              {/* Botão Enviar */}
              <div>
                <button
                  type="submit"
                  className={`mt-4 w-full rounded-xl bg-[#FA5F26] px-8 py-3.5 text-center text-base font-semibold text-white shadow-sm transition hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 md:w-auto ${isSubmitting ? 'cursor-not-allowed opacity-70' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Automatize Agora'}
                </button>
              </div>
            </form>
          </div>

          {/* Imagem Lateral */}
          <div className="hidden w-full max-w-sm flex-shrink-0 md:block lg:max-w-md">
             <div className="relative h-[400px] w-full lg:h-[450px]"> {/* Ajuste altura conforme necessário */}
               <Image
                // IMPORTANTE: Certifique-se que a imagem '/isotipo-iafe.png' existe na pasta /public
                src="/logoiafe.png"
                alt="Ilustração IAFE"
                fill
                className="object-contain" // ou object-cover, dependendo do efeito desejado
                sizes="(max-width: 768px) 0vw, (max-width: 1200px) 40vw, 30vw" // Esconde em telas pequenas, ajusta em médias/grandes
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 