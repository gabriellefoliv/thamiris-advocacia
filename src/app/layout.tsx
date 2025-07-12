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
  description: "Quando uma pessoa falece e deixa dependentes, é possível solicitar a pensão por morte para garantir a segurança financeira daqueles que ficaram.",
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
