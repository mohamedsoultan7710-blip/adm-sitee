# Site web de l'Association Djiboutienne au Maroc (ADM)

Site vitrine + assistant IA basé strictement sur le Guide officiel 2026.
Technologies : Next.js 15, Tailwind CSS, Google Gemini (`gemini-2.5-flash`).

---

## Ce que tu dois faire, dans l'ordre

Tu n'as **pas besoin d'installer Node.js ni Git** sur ton PC. Tout se fait
depuis le navigateur.

### Étape 1 — Obtenir la clé Gemini

1. Va sur https://aistudio.google.com/apikey
2. Connecte-toi avec ton compte Google.
3. Clique sur **Create API key**.
4. Copie la clé (elle commence par `AIza...`) et colle-la dans un bloc-notes.
   Ne la partage avec personne et ne la mets jamais dans un fichier envoyé
   sur GitHub.

### Étape 2 — Créer le dépôt sur GitHub

1. Va sur https://github.com/new
2. Repository name : `adm-site`
3. Coche **Private** (recommandé) ou Public.
4. Ne coche rien d'autre. Clique **Create repository**.

### Étape 3 — Envoyer les fichiers

1. Sur la page du dépôt vide, clique sur le lien **uploading an existing file**.
2. Décompresse le fichier `adm-site.zip` sur ton PC (clic droit → Extraire tout).
3. Ouvre le dossier `adm-site` obtenu, sélectionne **tout ce qu'il contient**
   (Ctrl + A) et fais un glisser-déposer dans la fenêtre GitHub.
4. En bas, clique **Commit changes**.

Vérifie que GitHub affiche bien les dossiers `app`, `components`, `data`,
`public` et le fichier `package.json`.

### Étape 4 — Déployer sur Vercel

1. Va sur https://vercel.com et connecte-toi **avec ton compte GitHub**.
2. Clique **Add New… → Project**.
3. En face de `adm-site`, clique **Import**.
4. Avant de valider, ouvre la section **Environment Variables** et ajoute :
   - Name : `GEMINI_API_KEY`
   - Value : la clé copiée à l'étape 1
5. Clique **Deploy** et attends 1 à 2 minutes.

Ton site est en ligne à une adresse du type `adm-site.vercel.app`.

### Étape 5 — Tester

Ouvre le site, clique sur **Poser une question** et essaie :
- « Quels documents pour la carte de séjour ? » → doit répondre la liste du guide.
- « Quelle est la capitale de la France ? » → doit répondre qu'il n'a pas
  l'information et renvoyer vers le WhatsApp de l'ADM.

---

## Modifier le site plus tard

| Ce que tu veux changer | Fichier à modifier |
| --- | --- |
| Membres du bureau, téléphones, e-mails | `data/bureau.ts` |
| Liens Facebook / Instagram / WhatsApp | `data/bureau.ts` (bas du fichier) |
| Contenu du guide utilisé par l'assistant | `data/guide.ts` |
| Comportement de l'assistant | `app/api/chat/route.ts` |
| Textes de la page d'accueil | `components/Hero.tsx`, `components/Presentation.tsx` |

Après chaque modification sur GitHub, Vercel redéploie automatiquement.

---

## Sécurité

- La clé `GEMINI_API_KEY` reste sur le serveur Vercel. Elle n'est jamais
  envoyée au navigateur du visiteur.
- Le fichier `.env.local` est ignoré par Git (voir `.gitignore`). Ne le
  renomme pas et ne le force jamais sur GitHub.
- Les numéros et e-mails du bureau sont publics sur le site. Si un membre
  ne le souhaite pas, retire sa ligne `tel` ou `email` de `data/bureau.ts`.

---

## Faire tourner le site sur ton PC (facultatif)

Seulement si tu installes Node.js (https://nodejs.org, version LTS) :

```
npm install
npm run dev
```

Crée d'abord un fichier `.env.local` à la racine contenant :

```
GEMINI_API_KEY=ta_cle_ici
```

Puis ouvre http://localhost:3000
