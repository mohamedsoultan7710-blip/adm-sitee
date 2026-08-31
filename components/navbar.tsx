import { contactsOfficiels } from "@/data/bureau";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-nuit/10 bg-white/90 backdrop-blur">
      <div className="bande-djibouti h-1 w-full" />
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
        <a href="#accueil" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-nuit font-display text-sm font-semibold text-white">
            ADM
          </span>
          <span className="hidden text-sm leading-tight text-ardoise sm:block">
            Association Djiboutienne
            <br />
            au Maroc
          </span>
        </a>

        <div className="flex items-center gap-5 text-sm">
          <a href="#guide" className="hidden text-ardoise hover:text-nuit md:block">
            Le guide
          </a>
          <a href="#bureau" className="hidden text-ardoise hover:text-nuit md:block">
            Le bureau
          </a>
          <a
            href={contactsOfficiels.whatsappLien}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-palme px-4 py-2 font-medium text-white hover:bg-palme/90"
          >
            Nous écrire
          </a>
        </div>
      </nav>
    </header>
  );
}
