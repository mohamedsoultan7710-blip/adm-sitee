import { MapPin, Phone, Mail } from "lucide-react";
import { bureau } from "@/data/bureau";

// Construit un lien téléphonique au format international marocain.
function lienTelephone(tel: string) {
  return "tel:+212" + tel.replace(/\D/g, "").replace(/^0/, "");
}

export default function BureauExecutif() {
  return (
    <section id="bureau" className="border-y border-nuit/10 bg-brume">
      <div className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="text-3xl font-semibold sm:text-4xl">Le bureau exécutif</h2>
        <p className="mt-4 max-w-xl leading-relaxed text-ardoise">
          Sept étudiants, sept villes. Contactez directement la personne
          responsable de votre question.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bureau.map((m) => (
            <li
              key={m.email}
              className="flex flex-col rounded-2xl border border-nuit/10 bg-white p-5"
            >
              <p className="text-sm font-medium text-ciel">{m.role}</p>
              <h3 className="mt-1 text-lg font-semibold leading-snug">
                {m.nom}
              </h3>

              <p className="mt-2 flex items-start gap-2 text-sm text-ardoise">
                <MapPin size={15} className="mt-0.5 shrink-0" aria-hidden />
                <span>
                  {m.ville} — {m.filiere}
                </span>
              </p>

              <div className="mt-4 flex flex-col gap-2 border-t border-nuit/10 pt-4 text-sm">
                <a
                  href={lienTelephone(m.tel)}
                  className="flex items-center gap-2 text-ardoise hover:text-nuit"
                >
                  <Phone size={15} className="shrink-0" aria-hidden />
                  {m.tel}
                </a>
                <a
                  href={`mailto:${m.email}`}
                  className="flex items-center gap-2 break-all text-ardoise hover:text-nuit"
                >
                  <Mail size={15} className="shrink-0" aria-hidden />
                  {m.email}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
