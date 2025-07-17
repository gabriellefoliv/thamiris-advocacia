import { ReactNode } from "react";
import WppButton from "../WppButton";

type LPBannerProps = {
  backgroundImageUrl: string;
  officeName: string;
  description: string;
  children?: ReactNode;
};

export function LPBanner({
  backgroundImageUrl,
  officeName,
  description,
  children,
}: LPBannerProps) {
  return (
    <div
      className="w-screen max-w-none h-[70vh] bg-cover bg-center flex items-center justify-center relative text-white overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="z-10 max-w-3xl text-center px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          {officeName}
        </h1>
        <p className="text-md sm:text-lg lg:text-xl mb-6">{description}</p>
        <WppButton
          title="Converse com um especialista"
        />
      </div>
    </div>
  );
}
