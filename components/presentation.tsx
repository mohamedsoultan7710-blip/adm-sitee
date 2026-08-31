import { Users, BookOpen, GraduationCap, ShieldCheck } from "lucide-react";

const missions = [
  {
    icone: Users,
    titre: "Accueil des nouveaux arrivants",
    texte:
      "Accueil personnalisé dès l'arrivée et orientation vers les logements vacants, ville par ville.",
  },
  {
    icone: BookOpen,
    titre: "Accompagnement méthodologique",
    texte:
      "Mentorat académique assuré par les étudiants aînés et organisation de conférences scientifiques.",
  },
  {
    icone: GraduationCap,
    titre: "Vie culturelle et sportive",
    texte:
      "Célébrations nationales, dont la fête de l'Indépendance du 27 juin, et activités entre étudiants.",
  },
  {
    icone: ShieldCheck,
    titre: "Représentation officielle",
    texte:
      "Défense des intérêts des étudiants auprès de l'AMCI, de l'Ambassade de Djibouti à Rabat et des universités.",
  },
];

// Chiffres tirés directement du guide officiel 2026.
const reperes = [
  { valeur: "90 jours", legende: "délai maximal pour demander la carte de séjour" },
  { valeur: "750 DH", legende: "montant mensuel de la bourse AMCI" },
  { valeur: "1 500 à 3 000 MAD", legende: "budget mensuel estimé d'un étudiant" },
  { valeur: "100 MAD", legende: "timbre fiscal de la carte de séjour, valable un an" },
];

export default function Presentation() {
  return (
    <section id="guide" className="mx-auto max-w-5xl px-5 py-16">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold sm:text-4xl">
          Votre premier réseau d&apos;entraide sur le sol marocain
        </h2>
        <p className="mt-5 leading-relaxed text-ardoise">
          L&apos;ADM accompagne chaque étudiant djiboutien, des préparatifs à
          Djibouti jusqu&apos;au diplôme. L&apos;association intervient à chaque
          niveau de la vie étudiante.
        </p>
      </div>

      <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {missions.map((m) => (
          <li key={m.titre} className="border-l-2 border-ciel pl-5">
            <m.icone size={20} className="text-ciel" aria-hidden />
            <h3 className="mt-2 text-lg font-semibold">{m.titre}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ardoise">
              {m.texte}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-14 rounded-3xl bg-nuit px-6 py-10 text-white sm:px-10">
        <h3 className="text-xl font-semibold">Quatre repères à retenir</h3>
        <dl className="mt-7 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {reperes.map((r) => (
            <div key={r.legende}>
              <dt className="font-display text-2xl font-semibold text-ciel">
                {r.valeur}
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-white/70">
                {r.legende}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-sm text-white/60">
          Ces informations proviennent du guide officiel 2026 de l&apos;ADM.
        </p>
      </div>
    </section>
  );
}
