import type { Metadata } from "next";
import { Cinzel, Cinzel_Decorative, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Thamiris F. de Oliveira - Advocacia Previdenciária",
  description: "Escritório especializado em Direito Previdenciário Digital (INSS). Consultoria e assessoria jurídica para garantir seus direitos.",
};

export default function RootLayout({
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
