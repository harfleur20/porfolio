import project1_img from '../assets/project_1.svg'
import project2_img from '../assets/project_2.svg'
import project3_img from '../assets/project_3.svg'
import project4_img from '../assets/project_4.svg'
import project5_img from '../assets/project_5.svg'
import project6_img from '../assets/project_6.svg'

const mywork_data = [
  {
    w_img: project2_img,
    w_name: "CRM",
    w_categories: ["React", "Node.js"],
    w_status: "online",
    w_year: "2025",
    w_type: "Projet personnel",
    w_technologies: ["Nexus", "Supabase"],
    w_description: "Un CRM moderne conçu pour optimiser la gestion des absorbages, ressources humaines, comptabilité et recouvrement. La solution améliore la productrice relation client.",
    w_projectLink: "https://lien-vers-projet.com",
    w_mockupLink: "", // Laissez vide si pas de maquette
    w_images: [project3_img, project4_img, project5_img]
  },
  {
    w_img: project6_img,
    w_name: "CRM",
    w_categories: ["React", "Node.js"],
    w_status: "online",
    w_year: "2025",
    w_type: "Projet personnel",
    w_technologies: ["Nexus", "Supabase"],
    w_description: "Un CRM moderne conçu pour optimiser la gestion des absorbages, ressources humaines, comptabilité et recouvrement. La solution améliore la productrice relation client.",
    w_projectLink: "https://lien-vers-projet.com",
    w_mockupLink: "https://lien-vers-maquette-figma.com", // Laissez vide si pas de maquette
    w_images: [project3_img, project4_img, project5_img]
  },
  {
    w_img: project1_img, 
    w_name: "KMC Restaurant",
    w_categories: ["Design", "UI/UX"],
    w_status: "encours",
    w_year: "2025", 
    w_type: "Projet personnel",
    w_technologies: ["Figma", "UI/UX Design"],
    w_description: "Le projet KMC Restaurant est une maquette UI/UX conçue sur Figma afin de mettre en valeur l'identité et les services d'un restaurant moderne...",
    w_projectLink: "", // Laissez vide si pas de projet en ligne
    w_mockupLink: "https://lien-vers-maquette-figma.com",
    w_images: ["maquette1.jpg", "maquette2.jpg"]
  }
]
 
export default mywork_data;