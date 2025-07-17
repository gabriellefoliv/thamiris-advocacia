import Image from "next/image";
import WppButton from "../WppButton";

type LPCalloutProps = {
  image: string;
  title: string;
  description: string;
};

export function LPCallout({ image, title, description }: LPCalloutProps) {
  return (
    <>
    <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl shadow-md bg-white max-w-4xl w-full mx-auto">
      <div className="flex-shrink-0">
        <Image
          src={image}
          alt="Ilustração do benefício"
          width={100}
          height={100}
          className="rounded-xl object-contain"
        />
      </div>
      <div className="text-center md:text-left space-y-2">
        <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
        <p className="text-black text-base leading-relaxed">{description}</p>
      </div>
    </div>
      <WppButton
        title="Quero solicitar a pensão por morte"
      />
      </>
  );
}
