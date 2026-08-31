import { GoogleGenAI } from "@google/genai";
import { GUIDE_ADM_2026 } from "@/data/guide";

// Ce fichier s'exécute uniquement sur le serveur.
// La clé GEMINI_API_KEY n'est jamais visible par le visiteur du site.

export const runtime = "nodejs";

const REPONSE_HORS_GUIDE =
  "Désolé, cette information n'est pas présente dans le guide officiel de l'ADM. " +
  "Veuillez contacter directement le bureau via WhatsApp (+212 614-753023) pour plus de précisions.";

const SYSTEM_INSTRUCTION = `Tu es l'assistant officiel de l'Association Djiboutienne au Maroc (ADM).

Tu dois répondre aux questions des étudiants en te basant STRICTEMENT et EXCLUSIVEMENT sur les informations contenues dans le document contextuel "Guide Officiel 2026" reproduit ci-dessous.

RÈGLES ABSOLUES :
1. Interdiction absolue d'inventer des informations ou d'utiliser des connaissances externes au document.
2. Si la réponse à la question posée ne se trouve pas dans le document, réponds exactement : "${REPONSE_HORS_GUIDE}"
3. Tu as le droit de reformuler, résumer, traduire, simplifier ou expliquer autrement le contenu du guide, tant que le sens et les chiffres restent EXACTEMENT ceux du document. Ne modifie jamais un montant, une durée, un délai, un nom ou un numéro.
4. Ne donne jamais de conseil juridique, médical ou financier personnel : renvoie au contenu du guide.
5. Réponds en français, de façon claire et bienveillante, en 5 phrases maximum, sauf si l'étudiant demande une liste de documents : dans ce cas donne la liste complète du guide.
6. Si la question est vague, demande une précision courte plutôt que de deviner.
7. Si l'étudiant écrit dans une autre langue, réponds dans sa langue, mais toujours à partir du seul contenu du guide.

DOCUMENT CONTEXTUEL — GUIDE OFFICIEL 2026 DE L'ADM :
${GUIDE_ADM_2026}
FIN DU DOCUMENT CONTEXTUEL.`;

type MessageEntrant = {
  role: "user" | "model";
  text: string;
};

export async function POST(request: Request) {
  try {
    const cle = process.env.GEMINI_API_KEY;
    if (!cle) {
      return Response.json(
        { error: "La clé GEMINI_API_KEY n'est pas configurée sur le serveur." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const messages: MessageEntrant[] = Array.isArray(body?.messages)
      ? body.messages
      : [];

    if (messages.length === 0) {
      return Response.json({ error: "Aucun message reçu." }, { status: 400 });
    }

    // Garde-fous simples : on limite la taille et l'historique envoyés au modèle.
    const historique = messages.slice(-10).map((m) => ({
      role: m.role === "model" ? "model" : "user",
      parts: [{ text: String(m.text ?? "").slice(0, 1500) }],
    }));

    const ai = new GoogleGenAI({ apiKey: cle });

    const reponse = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: historique,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.2,
        maxOutputTokens: 800,
      },
    });

    const texte = reponse.text?.trim();

    return Response.json({ reply: texte && texte.length > 0 ? texte : REPONSE_HORS_GUIDE });
  } catch (erreur) {
    console.error("Erreur API chat :", erreur);
    return Response.json(
      {
        error:
          "L'assistant est momentanément indisponible. Contactez l'ADM sur WhatsApp au +212 614-753023.",
      },
      { status: 500 }
    );
  }
}
