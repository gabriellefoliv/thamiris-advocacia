"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const svgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!svgRef.current) return;
      const scrollY = window.scrollY;
      svgRef.current.style.transform = `translateY(${scrollY * 0.2}px)`; // Parallax suave
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-[90vh] bg-black text-white overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video-hero.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* SVG curva dourada com efeito parallax */}
      <Image
        ref={svgRef}
        src="/wavy.svg"
        alt="Curva dourada"
        fill
        priority
        className="absolute inset-0 w-full h-full object-cover z-20 pointer-events-none transition-transform duration-300 ease-linear"
      />

      {/* Conteúdo principal */}
      <div className="relative pt-20 z-30 flex flex-col md:flex-row items-center justify-center h-full text-center px-6 gap-8 max-w-7xl mx-auto">
        {/* Logo sempre visível, centralizada */}
        <div className="max-w-xs md:max-w-sm lg:max-w-md flex-shrink-0">
          <Image
            src="/thamiris-adv-logo.png"
            alt="Logo Thamiris Advocacia"
            width={500}
            height={500}
            className="h-auto object-contain mx-auto"
            priority
          />
        </div>

        {/* Texto + botões - escondido em telas muito pequenas */}
        <div className="hidden sm:flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold drop-shadow-xl">
            Escritório de Advocacia Digital
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl max-w-prose">
            Atendimento jurídico especializado em previdenciário, 100% online.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:justify-start justify-center items-center">
            <Link
              href="/contato"
              className="bg-[#FFD700] text-black font-semibold px-6 py-3 rounded-xl text-center hover:bg-[#EFBF04] transition"
            >
              Agendar Consulta
            </Link>
            <Link
              href="https://wa.me/message/V72SURNAJ3EKD1"
              target="_blank"
              className="border border-white text-white px-6 py-3 rounded-xl text-center hover:bg-white hover:text-black transition"
            >
              Fale com um Especialista
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
