import { LetterText, Mail, Phone, Text } from "lucide-react";

interface CardProps {
  Img: string;
  Nome: string;
  Atuacao: string;
  Telefone: string;
  hrefWpp: string;
  hrefEmail?: string; // opcional, pois não estava no seu componente original
}

export function EquipeCard({ Img, Nome, Atuacao, Telefone, hrefWpp, hrefEmail }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-[1.01] flex flex-col items-center p-6 max-w-xs mx-auto">
      
      <img
        src={Img}
        alt={`Foto de ${Nome}`}
        className="w-48 h-48 rounded-lg object-cover mb-4"
      />
      
      <h3 className="text-xl font-serif font-semibold text-[#EFBF04] mb-1 text-center">{Nome}</h3>
      
      <p className="text-center text-gray-800 font-medium mb-2">
        <span className="font-bold">Atuação: </span>{Atuacao}
      </p>
      
      <p className="text-center text-gray-800 font-medium mb-4">
        <span className="font-bold">Telefone: </span>{Telefone}
      </p>
      
      <div className="flex gap-4">
        <a
          href={hrefWpp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-[#EFBF04] text-black font-semibold px-3 py-1 rounded-lg shadow-md hover:bg-[#FFD700] transition"
        >
          <Phone className="inline-block mr-2" />
          WhatsApp
        </a>

        {hrefEmail && (
          <a
            href={`mailto:${hrefEmail}`}
            className="flex items-center justify-center border border-[#EFBF04] text-[#EFBF04] font-semibold px-3 py-1 rounded-lg shadow-md hover:bg-[#EFBF04] hover:text-black transition"
          >
            <Mail className="inline-block mr-2" />
            Email
          </a>
        )}
      </div>
    </div>
  );
}
