import type { Metadata } from "next";
import { Cinzel, Cinzel_Decorative, Geist_Mono } from "next/font/google";
import "@/app/globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Pensão por Morte - Thamiris F. de Oliveira Advocacia",
  description: "Perdeu alguém querido? Não perca também o seu direito à pensão por morte. Fale com quem entende do assunto!",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${cinzelDecorative.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
