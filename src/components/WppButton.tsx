import Image from "next/image";

type WppButtonProps = {
    title: string;
}

function WppButton({ title }: WppButtonProps) {
  return (
    <div className="w-full flex justify-center mt-10 px-4">
      <div className="px-4 max-w-xl">
        <a
          href="https://wa.me/message/V72SURNAJ3EKD1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir conversa no WhatsApp"
        >
          <div className="bg-lime-600 hover:bg-lime-500 transition-all duration-300 rounded-xl flex items-center justify-center gap-3 px-8 py-2 shadow-lg hover:shadow-xl">
            <Image 
              src="/whatsapp-icon.png"
              alt="Ícone do WhatsApp"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <p className="text-white font-semibold text-base md:text-lg text-center">
              {title}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default WppButton;
