'use client'; // Necessário para useState

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react'; // Importa hooks necessários
import { FaInstagram } from 'react-icons/fa'; // Ícones sociais

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSocialDropdownOpen, setIsSocialDropdownOpen] = useState(false);
  const socialDropdownRef = useRef<HTMLDivElement>(null); // Ref para o dropdown

  // Ícone Menu Hambúrguer (Barras)
  const Bars3Icon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
  );

    // Ícone Fechar (X)
  const XMarkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );

  // Dados para Redes Sociais (reutilizados do Footer)
  const socialLinks = [
    // { href: '#', icon: FaFacebookF, label: 'Facebook' },
    { href: 'https://www.instagram.com/iafetech/', icon: FaInstagram, label: 'Instagram' },
    // { href: '#', icon: FaTwitter, label: 'Twitter' },
    // { href: '#', icon: FaLinkedinIn, label: 'LinkedIn' },
  ];

  // Função para scroll suave
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 100; // Altura do header
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false); // Fecha menu mobile após clique
    setIsSocialDropdownOpen(false); // Fecha dropdown social após clique (se aplicável)
  };

  // Fechar dropdown social ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (socialDropdownRef.current && !socialDropdownRef.current.contains(event.target as Node)) {
        setIsSocialDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Componente botão/link reutilizável para navegação
  const NavButton = ({ label, targetId }: { label: string; targetId: string }) => (
    <button
      onClick={() => scrollToSection(targetId)}
      className="text-white hover:text-gray-300"
    >
      {label}
    </button>
  );

  // Componente botão/link reutilizável para o Drawer mobile
  const DrawerButton = ({ label, targetId }: { label: string; targetId: string }) => (
    <button
      onClick={() => scrollToSection(targetId)}
      className="block w-full rounded px-2 py-1 text-left text-white hover:bg-gray-700"
    >
      {label}
    </button>
  );

  return (
    // Header principal: Fixo, fundo roxo, sombra, largura total, altura definida
    <header className="fixed z-50 h-[100px] w-full bg-[#140421] shadow-[0_4px_4px_0_rgba(0,0,0,0.5)]">
      {/* Container centralizado com largura máxima */}
      <div className="mx-auto flex h-full max-w-7xl items-center px-4 lg:px-20">

        {/* Logo (Esquerda) */}
        <div className="flex-shrink-0">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
             <Image src="/logoiafe.png" alt="Logo IAFE" width={60} height={62} priority />
          </Link>
        </div>

        {/* Navegação (Centro - Desktop) */}
        {/* Este div ocupa o espaço restante e centraliza a nav */}
        <div className="hidden flex-grow justify-center lg:flex">
          <nav className="flex items-center space-x-10">
            <NavButton label="Serviços" targetId="servicos" />
            {/* Dropdown Redes Sociais */}
            <div className="relative" ref={socialDropdownRef}>
              <button
                onClick={() => setIsSocialDropdownOpen(!isSocialDropdownOpen)}
                className="flex items-center space-x-1 text-white hover:text-gray-300"
              >
                <span>Redes Sociais</span>
              </button>
              {isSocialDropdownOpen && (
                <div className="absolute right-0 mt-2 w-auto min-w-[3rem] origin-top-right rounded-md bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="flex justify-center py-1">
                    {socialLinks.map((social) => (
                      <Link
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="text-gray-700 hover:text-indigo-600"
                        onClick={() => setIsSocialDropdownOpen(false)}
                      >
                        <social.icon size={20} />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <NavButton label="Sobre nós" targetId="sobre-nos" />
            <NavButton label="Carreira" targetId="porque-contratar" />
            {/* <Link href="#" className="text-[#FC5F26] hover:opacity-80">
              IAFÉ TECH USA
            </Link> */}
          </nav>
        </div>

        {/* Botão CTA (Direita - Desktop) */}
        <div className="hidden flex-shrink-0 lg:block">
          <button
            onClick={() => scrollToSection('contato')}
            className="rounded-[16px] bg-[#FC5F26] px-[26.5px] py-[12px] text-[#EEF2FF] shadow-[4px_4px_16px_4px_rgba(182,60,16,0.5)] hover:opacity-90"
          >
            Automatize Agora
          </button>
        </div>

        {/* Botão Menu Hambúrguer (Direita - Mobile) */}
        <div className="lg:hidden ml-auto">
          <button onClick={() => setIsMobileMenuOpen(true)} className="text-white focus:outline-none" aria-label="Abrir menu">
            <Bars3Icon />
          </button>
        </div>

      </div> {/* Fim do Container centralizado */}

      {/* Menu Lateral (Drawer) */}
      <div className={`fixed inset-y-0 right-0 z-[101] w-64 transform bg-[#140421] p-4 shadow-lg transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
         {/* Cabeçalho do Drawer */}
        <div className="mb-6 flex items-center justify-between">
           <div className="flex-shrink-0">
             <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
               <Image src="/logoiafe.png" alt="Logo IAFE" width={45} height={47} priority />
             </Link>
           </div>
           <button onClick={() => setIsMobileMenuOpen(false)} className="text-white focus:outline-none" aria-label="Fechar menu">
             <XMarkIcon />
           </button>
        </div>

        {/* Navegação Mobile */}
        <nav className="flex flex-col space-y-2">
           <DrawerButton label="Serviços" targetId="servicos" />
           {/* Redes Sociais Mobile */}
           <div className="border-t border-gray-700 pt-2 mt-2">
              <p className="px-2 pb-1 text-sm font-semibold text-gray-400">Redes Sociais</p>
              <div className="flex justify-center px-2 py-1">
                  {socialLinks.map((social) => (
                      <Link
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="text-gray-300 hover:text-white"
                          onClick={() => setIsMobileMenuOpen(false)}
                      >
                          <social.icon size={20} />
                      </Link>
                  ))}
              </div>
           </div>
           <DrawerButton label="Sobre nós" targetId="sobre-nos" />
           <DrawerButton label="Carreira" targetId="porque-contratar" />
           {/* <Link href="#" className="rounded px-2 py-1 text-[#FC5F26] hover:bg-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
             IAFÉ TECH USA
           </Link> */}
        </nav>

        {/* Language Selector Mobile
        <div className="mt-6 flex items-center justify-center space-x-3 border-t border-gray-700 pt-4">
           <button className="rounded-full ring-2 ring-orange-500 ring-offset-2 ring-offset-[#140421]">
              <Image src="/flag-br.png" alt="Brasil" width={32} height={32} className="rounded-full object-cover" />
           </button>
           <button className="rounded-full">
              <Image src="/flag-us.png" alt="USA" width={32} height={32} className="rounded-full object-cover" />
           </button>
           <button className="rounded-full">
              <Image src="/flag-es.png" alt="España" width={32} height={32} className="rounded-full object-cover" />
           </button>
        </div> */}

         {/* Botão Automatize Agora (Mobile) */}
         <div className="mt-6">
             <button
                onClick={() => scrollToSection('contato')}
                className="w-full rounded-[16px] bg-[#FC5F26] py-2 text-[#EEF2FF] shadow-[4px_4px_16px_4px_rgba(182,60,16,0.5)] hover:opacity-90"
             >
              Automatize Agora
            </button>
         </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black opacity-50 lg:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}

    </header>
  );
};

export default Header; 