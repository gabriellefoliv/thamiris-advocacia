import { InstagramIcon, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white text-black py-10 px-6 w-full border-t border-gray-300 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-[1200px] mx-auto gap-10">
        
        {/* Seção de links */}
        <div className="w-full md:w-auto text-center md:text-left space-y-2">
          <h4 className="text-gray-500 font-semibold text-lg tracking-wide">
            Todos os direitos reservados <br/>Ⓒ Desenvolvido por Gabrielle Oliveira
          </h4>
          
        </div>

        {/* Seção de contato */}
        <div className="w-full md:w-auto text-center md:text-right space-y-4">
          <h4 className="text-red-500 font-bold text-lg uppercase tracking-wide">
            Entre em Contato
          </h4>

          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="mailto:thamirisfoliveira3@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-red-100 hover:bg-red-200 transition duration-200"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-red-500" />
            </a>
            <a
              href="https://www.instagram.com/thamirisferreiraadv/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-red-100 hover:bg-red-200 transition duration-200"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-6 h-6 text-red-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}