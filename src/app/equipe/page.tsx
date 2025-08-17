import { EquipeCard } from "@/components/EquipeCard";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";

interface Membro {
  id: number;
  Img: string;
  Nome: string;
  Atuacao: string;
  Telefone: string;
  hrefWpp: string;
  hrefEmail?: string;
}

const equipeData: Membro[] = [
  {
    id: 1,
    Img: "/thamicomfundo.jpeg",
    Nome: "Thamiris Oliveira",
    Atuacao: "Direito Previdenciário",
    Telefone: "(21) 96972-7164",
    hrefWpp: "https://wa.me/message/V72SURNAJ3EKD1",
    hrefEmail: "https://mail.google.com/mail/?view=cm&to=thamirisferreiraadv@gmail.com",
  },
];

export default function Equipe() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <section className="max-w-7xl mx-auto -mt-20 px-6 py-20">
      <h1 className="text-4xl font-semibold text-[#EFBF04] mb-12 text-center">
        Fale comigo agora e garanta já o seu benefício previdenciário
      </h1>

      <div className="flex justify-center">
        {equipeData.map((membro) => (
          <EquipeCard
            key={membro.id}
            Img={membro.Img}
            Nome={membro.Nome}
            Atuacao={membro.Atuacao}
            Telefone={membro.Telefone}
            hrefWpp={membro.hrefWpp}
            hrefEmail={membro.hrefEmail}
          />
        ))}
      </div>
    </section>
    <Footer/>
    </>
  );
}
