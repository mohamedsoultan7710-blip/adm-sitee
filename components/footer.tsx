import { contactsOfficiels } from "@/data/bureau";

// Lucide ne fournit plus les logos de marques : on les dessine ici.
function IconeFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.24 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06Z" />
    </svg>
  );
}

function IconeInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.28a6.56 6.56 0 1 0 0 13.12 6.56 6.56 0 0 0 0-13.12Zm0 10.82a4.26 4.26 0 1 1 0-8.52 4.26 4.26 0 0 1 0 8.52Zm8.35-11.08a1.53 1.53 0 1 1-3.06 0 1.53 1.53 0 0 1 3.06 0Z" />
    </svg>
  );
}

function IconeWhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.16-1.35a9.93 9.93 0 0 0 4.88 1.27h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2Zm5.83 14.06c-.25.7-1.45 1.34-2 1.42-.53.08-1.18.11-1.9-.12-.44-.14-1-.32-1.72-.63-3.03-1.31-5-4.36-5.16-4.56-.15-.2-1.23-1.63-1.23-3.11 0-1.48.78-2.21 1.05-2.51.27-.3.59-.38.79-.38h.56c.18 0 .43-.7.66.5.25.6.83 2.08.9 2.23.08.15.13.33.03.53-.1.2-.15.33-.3.5-.15.18-.31.4-.45.53-.15.15-.3.31-.13.61.17.3.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.35 1.45.3.15.47.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.66-.15.27.1 1.7.8 1.99.95.3.15.5.22.57.35.08.13.08.73-.17 1.43Z" />
    </svg>
  );
}

const liens = [
  {
    nom: "Facebook",
    url: contactsOfficiels.facebook,
    icone: IconeFacebook,
    detail: "Page officielle de l'ADM",
  },
  {
    nom: "Instagram",
    url: contactsOfficiels.instagram,
    icone: IconeInstagram,
    detail: contactsOfficiels.instagramNom,
  },
  {
    nom: "WhatsApp",
    url: contactsOfficiels.whatsappLien,
    icone: IconeWhatsApp,
    detail: contactsOfficiels.whatsapp,
  },
];

export default function Footer() {
  return (
    <footer className="bg-nuit text-white">
      <div className="mx-auto max-w-5xl px-5 py-14">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="font-display text-xl font-semibold">
              Association Djiboutienne au Maroc
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
              L&apos;ADM reste votre famille au Maroc. Vivez vos études avec
              ambition et passion.
            </p>
            <a
              href="/guide-adm-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full border border-white/25 px-4 py-2 text-sm hover:border-white/60"
            >
              Télécharger le guide officiel 2026
            </a>
          </div>

          <div>
            <p className="text-sm text-white/50">Nous suivre</p>
            <ul className="mt-4 space-y-3">
              {liens.map((l) => (
                <li key={l.nom}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm hover:text-ciel"
                  >
                    <l.icone />
                    <span>
                      {l.nom}
                      <span className="text-white/50"> — {l.detail}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-white/15 pt-6 text-xs text-white/50">
          Association Djiboutienne au Maroc (ADM) — Guide officiel 2026. Les
          informations de ce site sont issues du guide et peuvent évoluer :
          vérifiez toujours auprès du bureau ou de l&apos;AMCI.
        </p>
      </div>
      <div className="bande-djibouti h-1 w-full" />
    </footer>
  );
}
