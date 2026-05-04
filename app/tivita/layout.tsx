import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CADU × Tivita — Mais valor para sua plataforma",
  description:
    "O Cadu adiciona uma camada de inteligência clínica à Tivita — estrutura, continuidade e visão evolutiva do paciente em neurodesenvolvimento.",
};

export default function TivitaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
