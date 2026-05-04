import type { Metadata } from "next";
import { DM_Mono, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import "./cadu.css";

const montserratAlternates = Montserrat_Alternates({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["900"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "CADU × Ameplan — Piloto",
  description:
    "Material CADU × Ameplan: visibilidade e controle no cuidado em TEA — dados estruturados e piloto sem troca de sistemas core.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserratAlternates.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col cadu-body">{children}</body>
    </html>
  );
}
