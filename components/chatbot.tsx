"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MessageSquare, X, Send, LoaderCircle } from "lucide-react";
import { contactsOfficiels } from "@/data/bureau";

type Message = { role: "user" | "model"; text: string };

const MESSAGE_ACCUEIL: Message = {
  role: "model",
  text:
    "Bonjour ! Je suis l'assistant de l'ADM. Je réponds uniquement à partir du Guide officiel 2026. Posez-moi votre question sur l'admission, le visa, la carte de séjour, le logement, le budget ou la bourse AMCI.",
};

export default function Chatbot() {
  const [ouvert, setOuvert] = useState(false);
  const [messages, setMessages] = useState<Message[]>([MESSAGE_ACCUEIL]);
  const [saisie, setSaisie] = useState("");
  const [chargement, setChargement] = useState(false);

  const messagesRef = useRef<Message[]>([MESSAGE_ACCUEIL]);
  const chargementRef = useRef(false);
  const finListeRef = useRef<HTMLDivElement | null>(null);
  const champRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    messagesRef.current = messages;
    finListeRef.current?.scrollIntoView({ block: "end" });
  }, [messages, chargement]);

  const envoyer = useCallback(async (texte: string) => {
    const question = texte.trim();
    if (!question || chargementRef.current) return;

    const avecQuestion: Message[] = [
      ...messagesRef.current,
      { role: "user", text: question },
    ];
    messagesRef.current = avecQuestion;
    setMessages(avecQuestion);
    setSaisie("");
    chargementRef.current = true;
    setChargement(true);

    try {
      const reponse = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // On n'envoie pas le message d'accueil au modèle.
          messages: avecQuestion.filter((m) => m.text !== MESSAGE_ACCUEIL.text),
        }),
      });

      const donnees = await reponse.json();
      const texteReponse: string =
        donnees.reply ||
        donnees.error ||
        "L'assistant n'a pas pu répondre. Réessayez dans un instant.";

      const avecReponse: Message[] = [
        ...messagesRef.current,
        { role: "model", text: texteReponse },
      ];
      messagesRef.current = avecReponse;
      setMessages(avecReponse);
    } catch {
      const avecErreur: Message[] = [
        ...messagesRef.current,
        {
          role: "model",
          text: `Connexion impossible. Vérifiez votre réseau, ou écrivez à l'ADM sur WhatsApp au ${contactsOfficiels.whatsapp}.`,
        },
      ];
      messagesRef.current = avecErreur;
      setMessages(avecErreur);
    } finally {
      chargementRef.current = false;
      setChargement(false);
    }
  }, []);

  // Permet au reste du site (barre de question, questions fréquentes)
  // d'ouvrir l'assistant et de lui transmettre une question.
  useEffect(() => {
    function surOuverture(evenement: Event) {
      const question = (evenement as CustomEvent<{ question?: string }>).detail
        ?.question;
      setOuvert(true);
      window.setTimeout(() => champRef.current?.focus(), 120);
      if (question) void envoyer(question);
    }

    window.addEventListener("adm:ouvrir-assistant", surOuverture);
    return () =>
      window.removeEventListener("adm:ouvrir-assistant", surOuverture);
  }, [envoyer]);

  useEffect(() => {
    function surEchap(e: KeyboardEvent) {
      if (e.key === "Escape") setOuvert(false);
    }
    window.addEventListener("keydown", surEchap);
    return () => window.removeEventListener("keydown", surEchap);
  }, []);

  return (
    <>
      {!ouvert && (
        <button
          type="button"
          onClick={() => setOuvert(true)}
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-nuit px-5 py-3.5 text-sm font-medium text-white shadow-lg hover:bg-nuit/90"
        >
          <MessageSquare size={18} />
          Poser une question
        </button>
      )}

      {ouvert && (
        <div
          role="dialog"
          aria-label="Assistant de l'ADM"
          className="fixed inset-0 z-50 flex flex-col bg-white sm:inset-auto sm:bottom-5 sm:right-5 sm:h-[600px] sm:max-h-[85vh] sm:w-[400px] sm:rounded-3xl sm:border sm:border-nuit/15 sm:shadow-2xl"
        >
          <div className="flex items-start justify-between gap-3 border-b border-nuit/10 px-5 py-4 sm:rounded-t-3xl">
            <div>
              <p className="font-display text-base font-semibold">
                Assistant de l&apos;ADM
              </p>
              <p className="mt-0.5 text-xs text-ardoise">
                Réponses issues du Guide officiel 2026
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOuvert(false)}
              aria-label="Fermer l'assistant"
              className="rounded-full p-1.5 text-ardoise hover:bg-brume"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-nuit px-4 py-2.5 text-sm text-white"
                    : "max-w-[90%] whitespace-pre-line rounded-2xl rounded-bl-sm bg-brume px-4 py-3 text-sm leading-relaxed text-nuit"
                }
              >
                {m.text}
              </div>
            ))}

            {chargement && (
              <div className="flex items-center gap-2 text-sm text-ardoise">
                <LoaderCircle size={16} className="animate-spin" />
                L&apos;assistant consulte le guide...
              </div>
            )}
            <div ref={finListeRef} />
          </div>

          <div className="border-t border-nuit/10 px-4 py-3 sm:rounded-b-3xl">
            <div className="flex items-center gap-2">
              <input
                ref={champRef}
                type="text"
                value={saisie}
                onChange={(e) => setSaisie(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") void envoyer(saisie);
                }}
                placeholder="Votre question..."
                aria-label="Votre question"
                className="w-full rounded-xl border border-nuit/15 px-3.5 py-2.5 text-sm outline-none focus:border-ciel"
              />
              <button
                type="button"
                onClick={() => void envoyer(saisie)}
                disabled={chargement || saisie.trim().length === 0}
                aria-label="Envoyer la question"
                className="shrink-0 rounded-xl bg-nuit p-2.5 text-white disabled:opacity-40"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="mt-2 text-center text-xs text-ardoise">
              Information absente du guide ?{" "}
              <a
                href={contactsOfficiels.whatsappLien}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-palme underline"
              >
                Écrire au bureau
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
