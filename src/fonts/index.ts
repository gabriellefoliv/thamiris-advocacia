import localFont from "next/font/local";

export const trajanPro = localFont({
  src: [
    {
      path: "../assets/fonts/TrajanPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    // {
    //   path: "../assets/fonts/tajanpro/TajanPro-Bold.ttf",
    //   weight: "700",
    //   style: "normal",
    // },
  ],
  variable: "--font-trajanpro",
  display: "swap",
});

export const cinzel = localFont({
  src: [
    {
      path: "../assets/fonts/Cinzel-VariableFont_wght.ttf",
      weight: "400",
      style: "normal",
    },
    // {
    //   path: "../assets/fonts/cinzel/Cinzel-Bold.ttf",
    //   weight: "700",
    //   style: "normal",
    // },
  ],
  variable: "--font-cinzel",
  display: "swap",
});
