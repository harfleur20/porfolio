// projet MegaQuizz
import profil1 from './projetQuiz/reference.jpg'
import megaquiz1 from './projetQuiz/1.jpg'
import megaquiz2 from './projetQuiz/2.jpg'
import megaquiz3 from './projetQuiz/3.jpg'
import megaquiz4 from './projetQuiz/4.jpg'
import megaquiz5 from './projetQuiz/5.jpg'
import megaquiz6 from './projetQuiz/6.jpg'
import megaquiz7 from './projetQuiz/7.jpg'

// projet mindset
import mindset1 from './mindset/1.jpg'
import mindset2 from './mindset/2.jpg'
import mindset3 from './mindset/3.jpg'
import mindset4 from './mindset/4.jpg'
import mindset6 from './mindset/6.jpg'

//Elsa shopping
import elsa1 from './elsashoping/shop1.jpg'
import elsa2 from './elsashoping/2.jpg'
import elsa3 from './elsashoping/4.jpg'

//KM SPORT
import km1 from './KM/page 3.jpg'
import km2 from './KM/1.jpg'
import km3 from './KM/4.jpg'
import km4 from './KM/6.jpg'
import km5 from './KM/page 2.jpg'
import km6 from './KM/page 6.jpg'
import km7 from './KM/page 7.jpg'
import km8 from './KM/page 8.jpg'
import km9 from './KM/page 9.jpg'
import km10 from './KM/2.jpg'

//academiedescreatifs
import previewac from './academiecreatifs/ac2.jpg'
import previewac2 from './academiecreatifs/ac3.jpg'
import previewac3 from './academiecreatifs/ac4.jpg'
import previewac4 from './academiecreatifs/ac5.jpg'
import previewac6 from './academiecreatifs/ac6.jpg'
import preview from './academiecreatifs/ac1.jpg'





//tous les autres
import etrack from './e-track.jpg'
import takecare from './takecare.jpg'
import porfolio from './porfolio.jpg'

//proclean
import proclean_img from './ProClean/proclean.jpg'
import proclean_ui1 from './ProClean/proclean_img1.jpeg'
import proclean_ui2 from './ProClean/proclean_img2.jpeg'
import proclean_ui3 from './ProClean/proclean_img3.jpg'
import proclean_ui4 from './ProClean/proclean_img4.jpg'

const mywork_data = [
  {
    w_img: profil1,
    w_name: "MEGA QUIZ  100",
    w_categories: ["SiteWeb", "Jeu en ligne"],
    w_status: "online",
    w_year: "2025",
    w_type: "Projet personnel",
    w_technologies: ["React JS", "Supabase"],
    w_description: "MEGA QUIZ 100 est un jeu de survi centré sur les quiz, l'objectif étant de donner un maximum de bonnes réponses en moins de temps, les scores parfaits entre dans le classement des légendes. Affronte en ligne plusieurs autres adversaires et consulte ton classement en live.",
    w_projectLink: "https://quizzgamees.netlify.app/",
    w_mockupLink: "", // Laissez vide si pas de maquette
    w_images: [megaquiz6, megaquiz1, megaquiz4, megaquiz5,megaquiz2, megaquiz3,   megaquiz7]
  },

  {
    w_img: takecare,
    w_name: "TakeCare",
    w_categories: ["SiteWeb", "Projet collaboratif", "Aide aux personnes vulnérables"],
    w_status: "encours",
    w_year: "2026",
    w_type: "Projet académique de groupe",
    w_technologies: ["React JS", "Figma", "UI/UX Design", "Node JS", "SQL", "Hebergement", "Gestion de projet", "Gitlab CI/CD"],
    w_description: "Il s'agit d'un projet de groupe académique destiné à concevoir un site internet d'aide aux personnes vulnérablen, la plateforme permet de mettra en relation les demandeurs d'assistance avec les voulant aidant, personne d'echanger ou de prêter les objets ainsi que de faire les dons",
    w_projectLink: "",
    w_mockupLink: "", // Laissez vide si pas de maquette
    w_images: [takecare]
  },

  {
    w_img: mindset1,
    w_name: "Le Mindset Du Graphiste",
    w_categories: ["SiteWeb", "Tunnel de vente"],
    w_status: "online",
    w_year: "2025",
    w_type: "Projet personnel",
    w_technologies: ["React JS", "Figma", "UI/UX Design"],
    w_description: "Le Mindset du graphiste designer est un site web du livre du même nom, qui permet de fournir les informations nécéssaires au futurs lecteurs de ce livre et les amener à finaliser l'achat du livre",
    w_projectLink: "https://mindset.academiecreatif.com/",
    w_mockupLink: "https://www.figma.com/design/XD5ocFMbd4ts5OTPWU4SvH/Maquette-Livre-Mindset-design-graphique?node-id=0-1&t=1E9zkIM0wNakV5zf-1", // Laissez vide si pas de maquette
    w_images: [mindset2,mindset3,mindset4,mindset6]
  },
  {
    w_img: elsa1,
    w_name: "Elsa Shopping",
    w_categories: ["SiteWeb", "E-commerce"],
    w_status: "encours",
    w_year: "2026",
    w_type: "Projet client",
    w_technologies: ["React JS", "Figma", "UI/UX Design", "NodesJS", "MongoDB", "JWT", "Sass", "Redux"],
    w_description: "Conception d'un siteweb de e-commerce moderne et responsible pour Madame ELSA",
    w_projectLink: "",
    w_mockupLink: "", // Laissez vide si pas de maquette
    w_images: [elsa1,elsa2,elsa3]
  },

   {
    w_img: porfolio,
    w_name: "Francis Kenne - Porfolio",
    w_categories: ["Siteweb", "Porfolio"],
    w_status: "online",
    w_year: "2026",
    w_type: "Projet personnel",
    w_technologies: ["React JS", "Javascript", "Webforms", "UI/UX Design", "Netlify"],
    w_description: "Site Web Porfolio de Francis Kenne, Developpeur FullStack Javascript, UI/UX Design & Graphiste",
    w_projectLink: "https://www.franciskenne.me",
    w_mockupLink: "", // Laissez vide si pas de maquette
    w_images: []
  },

   {
    w_img: preview,
    w_name: "Académie des Créatifs",
    w_categories: ["SiteWeb", "formation en live"],
    w_status: "online",
    w_year: "2024",
    w_type: "Projet personnel",
    w_technologies: ["Vanilla", "UI/UX Design", "Javascript", "css3", "Supabase", "Deno", "Codex", "Netlify"],
    w_description: "Conception d'un siteweb de formation moderne et responsive pour vendre les formations live et accompagner les étudiants depuis leur Dashboard, les acteurs primaires : Etudiants / Professeurs / Admin",
    w_projectLink: "https://academiecreatif.com/",
    w_mockupLink: "", // Laissez vide si pas de maquette
    w_images: [previewac, previewac2, previewac3,previewac4,previewac6]
  },

  
  
  {
    w_img: etrack,
    w_name: "E-Track Financial",
    w_categories: ["Application", "Web"],
    w_status: "encours",
    w_year: "2026",
    w_type: "Projet personnel",
    w_technologies: ["Next JS", "Figma", "UI/UX Design", "NodesJS", "Prisma", "Clerk", "Tailwind"],
    w_description: "Application de gestion financière, l'objectif est de concevoir une application pour aider dans la gestion de son budget et d'evaluer les dépenses",
    w_projectLink: "",
    w_mockupLink: "", 
    w_images: []
  },

  {
    w_img: km1,
    w_name: "KM Brand Identity",
    w_categories: ["Identité Visuelle", "Logo", "Charte graphique"],
    w_status: "online",
    w_year: "2025",
    w_type: "Projet client",
    w_technologies: ["Illustrator", "Photoshop", "UI/UX Design", "Indesign", "AfterEffect"],
    w_description: "Création complète de l'identité visuelle de la marque urbaine et sport KM",
    w_projectLink: "https://www.behance.net/gallery/224005293/KM-StreetSportWear-Identit-Visuelle",
    w_mockupLink: "", // Laissez vide si pas de maquette
    w_images: [km10,km2,km3,km4,km5,km6,km7,km8,km9,km1]
  },
  

  {
    w_img: proclean_img,
    w_name: "Proclean Solutions",
    w_categories: ["Application", "Desktop", "C#", "Projet académique"],
    w_status: "online",
    w_year: "2023",
    w_type: "Projet académique",
    w_technologies: [".NET", "C#", "UI/UX Design", "Illustrator", "Visual Studio"],
    w_description: "Création d'une application desktop de nettoyage des fichiers temporaires, doublons et fichiers caches des applications Web sur PC",
    w_projectLink: "https://github.com/harfleur20/PROCLEAN_LogicielNettoyage",
    w_mockupLink: "", // Laissez vide si pas de maquette
    w_images: [proclean_ui3, proclean_ui4, proclean_ui1, proclean_ui2]
  },
   
]
 
export default mywork_data;