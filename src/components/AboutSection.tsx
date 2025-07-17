import Image from "next/image";

export function AboutSection() {
  return (
    <section className="bg-[#f9f9f9] text-black py-20 px-6 mt-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Texto */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-6 text-[#EFBF04]">
            Quem somos
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Com mais de 200 processos judiciais em andamento e já finalizados, 
            o nosso escritório atua em todo território Brasileiro, tanto de forma presencial 
            quanto digital, por videoconferência, visando agilizar a resolução processual e garantir 
            o conforto dos nossos clientes. Com uma trajetória excepcional e atuação em centenas de processos judiciais, 
            diligências e serviços jurídicos, somos totalmente comprometidos com a transparência e agilidade, utilizando 
            todos os recursos disponíveis para alcançar o melhor resultado para os nossos clientes.
          </p>
        </div>

        {/* Imagem */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/sobreescritorio.jpeg"
            alt="Advogada digital"
            width={320}
            height={400}
            className="rounded-xl shadow-lg object-cover max-w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
