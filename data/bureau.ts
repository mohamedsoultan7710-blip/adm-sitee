// Les membres du bureau exécutif de l'ADM.
// Pour mettre à jour le site chaque année, il suffit de modifier ce fichier.

export type Membre = {
  nom: string;
  role: string;
  ville: string;
  filiere: string;
  tel: string;
  email: string;
};

export const bureau: Membre[] = [
  {
    nom: "Zakaria Isse Abdi",
    role: "Président",
    ville: "Marrakech",
    filiere: "3e année Médecine générale",
    tel: "0644939671",
    email: "Isseabdizakaria@gmail.com",
  },
  {
    nom: "Ahmed Abdoulkader Ali",
    role: "Vice-président",
    ville: "Rabat-Salé",
    filiere: "Master Ingénierie du commerce",
    tel: "0774463332",
    email: "abdoulkaderaliahmed885@gmail.com",
  },
  {
    nom: "Ayman Abdourahman Mohamed",
    role: "Secrétaire général",
    ville: "Meknès",
    filiere: "Ingénierie financière",
    tel: "0601436411",
    email: "aymanabdourahman124@gmail.com",
  },
  {
    nom: "Daoud Adlao Mohamed",
    role: "Trésorier général",
    ville: "Fès",
    filiere: "Comptabilité, contrôle et audit",
    tel: "0679559852",
    email: "adlaod271@gmail.com",
  },
  {
    nom: "Mohamed Mohaled Soultan",
    role: "Chargé de communication",
    ville: "Settat",
    filiere: "Génie électrique et systèmes embarqués",
    tel: "0664978739",
    email: "mohamedsoultan7710@gmail.com",
  },
  {
    nom: "Bodeh Nour Awaleh",
    role: "Chargé culturel et sportif",
    ville: "Oujda",
    filiere: "Sciences",
    tel: "0632956102",
    email: "bodehnournour@gmail.com",
  },
  {
    nom: "Hodan Mahdi Abdillahi",
    role: "Chargée académique et scientifique",
    ville: "Rabat",
    filiere: "3e année Médecine dentaire",
    tel: "0684313412",
    email: "hodanmahdiabd.22@gmail.com",
  },
];

// Coordonnées officielles de l'association (utilisées dans le pied de page).
export const contactsOfficiels = {
  whatsapp: "+212 614-753023",
  whatsappLien: "https://wa.me/212614753023",
  facebook: "https://www.facebook.com/share/1HaRMxXR4Z/",
  instagram: "https://www.instagram.com/adm.ma77/",
  instagramNom: "adm.ma77",
};
