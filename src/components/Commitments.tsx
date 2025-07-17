import { Handshake, Eye, Clock } from "lucide-react";

const commitments = [
  {
    title: "Atendimento Humanizado",
    description: "Cada cliente é único e tratado com empatia e respeito.",
    icon: Handshake,
  },
  {
    title: "Transparência",
    description: "Você saberá cada etapa do seu processo, sem surpresas.",
    icon: Eye,
  },
  {
    title: "Agilidade",
    description: "Compromisso com respostas rápidas e processos eficientes.",
    icon: Clock,
  },
];

export function Commitments() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Compromissos com o <span className="text-yellow-400">cliente</span>
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mb-12 text-sm">
            Nossos princípios são a base de cada atendimento que oferecemos.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {commitments.map(({ title, description, icon: Icon }, index) => (
            <div
              key={index}
              className="group [perspective:1000px] h-64"
            >
              <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front */}
                <div className="absolute inset-0 bg-white/10 text-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center [backface-visibility:hidden]">
                  <Icon className="h-12 w-12 mb-4 text-yellow-400" />
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-sm">{description}</p>
                </div>

                {/* Back */}
                <div className="absolute inset-0 bg-yellow-400 text-black rounded-xl shadow-md flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <Icon className="h-14 w-14" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
