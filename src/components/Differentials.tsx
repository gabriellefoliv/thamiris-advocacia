import { ShieldCheck, Clock, Laptop } from "lucide-react";

const items = [
  {
    icon: <Laptop className="w-8 h-8 text-[#FFD700]" />,
    title: "100% Online",
    description: "Atendimento completo sem precisar sair de casa.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#FFD700]" />,
    title: "Especialistas em INSS",
    description: "Equipe com foco exclusivo em previdenciário.",
  },
  {
    icon: <Clock className="w-8 h-8 text-[#FFD700]" />,
    title: "Agilidade e Praticidade",
    description: "Respostas rápidas e processo simplificado.",
  },
];

export function Differentials() {
  return (
    <section className="bg-white text-black py-16 px-6 -mt-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-serif font-semibold mb-12">
          Por que nos escolher?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {item.icon}
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="mt-2 text-gray-700 max-w-xs">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
