import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Association Djiboutienne au Maroc (ADM)",
  description:
    "Le guide officiel 2026 des étudiants djiboutiens au Maroc : admission, visa, carte de séjour, logement, budget, santé. Posez votre question à l'assistant de l'ADM.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-sans">{children}</body>
    </html>
  );
}
