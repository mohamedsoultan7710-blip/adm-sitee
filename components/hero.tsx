"use client";

import { useState } from "react";
import { Send } from "lucide-react";

// Questions réellement traitées dans le guide officiel 2026.
const questionsFrequentes = [
  "Quels documents pour la carte de séjour ?",
  "Combien coûte la vie par mois au Maroc ?",
  "Comment renouveler ma bourse AMCI ?",
  "Que mettre dans mon dossier de visa ?",
];

// Ouvre le panneau de l'assistant et lui transmet la question.
export function ouvrirAssistant(question?: string) {
  window.dispatchEvent(
    new CustomEvent("adm:ouvrir-assistant", { detail: { question } })
  );
}

export default function Hero() {
  const [question, setQuestion] = useState("");

  function envoyer() {
    ouvrirAssistant(question.trim() || undefined);
    setQuestion("");
  }

  return (
    <section id="accueil" className="border-b border-nuit/10 bg-brume">
      <div className="mx-auto max-w-3xl px-5 pb-14 pt-16 sm:pt-20">
        <p className="text-sm text-ardoise">Guide officiel 2026</p>
        <h1 className="mt-3 text-4xl font-semibold leading-[1.1] sm:text-5xl">
          Étudier au Maroc, sans se perdre dans les démarches.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ardoise">
          Posez votre question. L&apos;assistant de l&apos;ADM répond uniquement
          avec le contenu du guide officiel rédigé par le bureau, pour les
          étudiants djiboutiens au Maroc.
        </p>

        <div className="mt-8 flex items-center gap-2 rounded-2xl border border-nuit/15 bg-white p-2 shadow-sm">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") envoyer();
            }}
            placeholder="Par exemple : combien coûte le loyer à Settat ?"
            aria-label="Votre question sur les études au Maroc"
            className="w-full bg-transparent px-3 py-2.5 text-base outline-none placeholder:text-ardoise/60"
          />
          <button
            type="button"
            onClick={envoyer}
            className="flex shrink-0 items-center gap-2 rounded-xl bg-nuit px-4 py-2.5 text-sm font-medium text-white hover:bg-nuit/90"
          >
            <Send size={16} />
            <span className="hidden sm:inline">Demander</span>
          </button>
        </div>

        <ul className="mt-4 flex flex-wrap gap-2">
          {questionsFrequentes.map((q) => (
            <li key={q}>
              <button
                type="button"
                onClick={() => ouvrirAssistant(q)}
                className="rounded-full border border-nuit/15 bg-white px-3.5 py-1.5 text-sm text-ardoise hover:border-ciel hover:text-nuit"
              >
                {q}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
