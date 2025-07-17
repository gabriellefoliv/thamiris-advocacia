"use client";

import Image from "next/image";
import Link from "next/link";

export default function DireitoPrevidenciario() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-16 max-w-7xl mx-auto -mt-16">
      <h1 className="text-4xl font-serif font-semibold text-[#EFBF04] mb-12 text-center">
        Conheça o Direito Previdenciário
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Imagem ilustrativa */}
        <div className="flex-shrink-0 w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/direito-previdenciario.jpg"
            alt="Direito Previdenciário"
            width={600}
            height={400}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Texto explicativo */}
        <div className="md:w-1/2 space-y-6 text-justify">
          <p className="text-lg leading-relaxed">
            O Direito Previdenciário é a área do Direito que trata da proteção social dos trabalhadores e suas famílias, garantindo direitos relacionados à aposentadoria, auxílios, pensões e outros benefícios oferecidos pelo sistema previdenciário. Nosso escritório oferece atendimento especializado, com foco em soluções digitais que facilitam o acesso aos seus direitos de forma rápida, segura e eficiente.
          </p>
          <p className="text-lg leading-relaxed">
            Atuamos em processos de aposentadoria, auxílios, salário maternidade e pensão por morte, serviços essenciais para garantir a tranquilidade e a segurança financeira dos nossos clientes.
          </p>
          <Link
            href="/contato"
            className="inline-block bg-[#EFBF04] text-black font-semibold px-8 py-3 rounded-lg hover:bg-[#FFD700] transition"
          >
            Agende sua consulta
          </Link>
        </div>
      </div>
    </main>
  );
}
