'use client'
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";

const templateKey: string = process.env.TEMPLATE_KEY || '';
const serviceKey: string = process.env.SERVICE_KEY || '';
const publicKey: string = process.env.PUBLIC_KEY || '';

export default function Contato() {
  const form = useRef<HTMLFormElement>(null!);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    emailjs.sendForm(serviceKey, templateKey, form.current, publicKey)
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        window.location.reload();
      })
      .catch((error) => {
        alert("Erro ao enviar a mensagem. Tente novamente.");
        console.error(error.text);
      });
  };

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <div className="min-h-screen bg-white -mt-32 flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl flex flex-col md:flex-row items-center md:items-start gap-12 p-10">
        
        {/* Imagem OAB */}
        <div className="flex-shrink-0 w-full md:w-1/2">
          <Image
            src="/oab.jpeg"
            alt="Logo OAB"
            width={600}  // largura original aproximada
            height={180} // altura aproximada mantendo proporção horizontal
            className="w-full h-auto rounded-lg object-contain"
            priority
          />
          <h1 className="mt-6 text-2xl font-semibold text-[#EFBF04] text-center md:text-left">
            Vamos conversar?
          </h1>
          <p className="mt-2 text-gray-800 text-center md:text-left leading-relaxed">
            Entre em contato com nosso escritório de advocacia e descubra como nossos advogados podem te ajudar!
          </p>
        </div>

        {/* Formulário */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold text-[#EFBF04] mb-6 text-center md:text-left">
            Entre em Contato
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Nome */}
            <div>
              <label htmlFor="user_name" className="block text-black font-semibold mb-2">
                Nome
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                required
                placeholder="Seu nome completo"
                className="
                  w-full rounded-lg border-2 border-[#EFBF04] bg-transparent
                  py-3 px-4 text-black placeholder:text-gray-400
                  focus:outline-none focus:ring-4 focus:ring-[#FFD700]/60
                  transition
                "
              />
            </div>

            {/* Celular */}
            <div>
              <label htmlFor="user_celular" className="block text-black font-semibold mb-2">
                Celular
              </label>
              <input
                type="text"
                name="user_celular"
                id="user_celular"
                required
                placeholder="(xx) xxxxx-xxxx"
                className="
                  w-full rounded-lg border-2 border-[#EFBF04] bg-transparent
                  py-3 px-4 text-black placeholder:text-gray-400
                  focus:outline-none focus:ring-4 focus:ring-[#FFD700]/60
                  transition
                "
              />
            </div>

            {/* Mensagem */}
            <div>
              <label htmlFor="message" className="block text-black font-semibold mb-2">
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                placeholder="Escreva sua mensagem aqui..."
                className="
                  w-full rounded-lg border-2 border-[#EFBF04] bg-transparent
                  py-3 px-4 text-black placeholder:text-gray-400 resize-none
                  focus:outline-none focus:ring-4 focus:ring-[#FFD700]/60
                  transition
                "
              />
            </div>

            {/* Botão */}
            <button
              type="submit"
              className="
                w-full bg-[#EFBF04] hover:bg-[#FFD700] text-black font-bold
                py-4 rounded-lg shadow-md transition
              "
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
