/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Lawal Alao Adechina",
  logo_name: "lawalalao",
  nickname: "codeevangelist",
  subTitle:
    "Une personne passionnée qui s'efforce toujours de travailler sur des applications de bout en bout qui développent des systèmes sociaux , techniques durables et évolutifs pour créer un impact.",
  resumeLink:
    "https://drive.google.com/file/d/1l2SKYT89umgzS-skBxLqTmH8Y_nqdvwk/view?usp=sharing",
  portfolio_repository: "https://github.com/lawalalao/lawalalao",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/lawalalao",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "lawalalaoad@gmail.com",
  

  // twitter: "https://twitter.com/lawalalao",
  // instagram: "https://www.instagram.com/lito_adechina/"

  {
    name: "Github",
    link: "https://github.com/lawalalao",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/lawal-alao-168147188/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  
  {
    name: "Gmail",
    link: "mailto:lawalalaoad@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/lawalalao",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
 
];

const skills = {
  data: [
     {
      title: "Développeur Full Stack",
      fileName: "FullStackImg",
      skills: [
        "⚡Créer site Web responsive à l'aide de React-Redux",
        "⚡ Développement d'applications mobiles avec React Native ",
        "⚡ Creer des application Backend avec Node, Express, Symfony PHP , MongoDb & Firebase",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
          
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Symfony",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "green",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "orange",
          },
        },
      ],
    },
    
    {
      title: "UI/UX Design(basics)",
      fileName: "DesignImg",
      skills: [
        "⚡Conception d'une interface utilisateur très attractive pour les applications mobiles et Web",
        "⚡Conceptions d’identité visuelle",
        "⚡ Créer le flux de fonctionnalités applicatives pour optimiser l'expérience utilisateur",
      ],
      softwareSkills: [
        
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
          style: {
            color: "#FF7C00",
          },
        },
       
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "IBM",
      iconifyClassname: "simple-icons:ibm",
      style: {
        color: "blue",
      },
      profileLink: "https://www.youracclaim.com/users/alao-lawal-adechina/badges",
    },
   
  ],
};

const degrees = {
  degrees: [
    {
      title: "Institut des Sciences Economiques et Commerciale KOUVAHEY",
      subtitle: "Licence en Informatique de gestion",
      logo_path: "issecklogo.gif",
      alt_name: "isseck",
      duration: "2014 - 2017",
      descriptions: [
        "⚡ algorithme / programmation / langages/architecture matérielle / systèmes / réseaux.",
        "⚡ analyse / conception / développement d'applications/ web / internet / mobilité.",
        "⚡système de gestion de bases de données.",
      ],
      website_link: "www.isseck.com",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Data Science Methodotoly",
      subtitle: "Cognitive Class",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://courses.cognitiveclass.ai/certificates/904ef95491ed442dae97d4631dead951",
      alt_name: "data science",
      color_code: "#8C151599",
    },
    {
      title: "Data Science with Python",
      subtitle: "-Cognitive Class",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.youracclaim.com/badges/d8de5ed2-cd98-4124-82cc-a6414f86d149?source=linked_in_profile",
      alt_name: "Data Science",
      color_code: "#00000099",
    },
    {
      title: "Data Visualisation",
      subtitle: "- Cognitive Class",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.youracclaim.com/badges/8b9b3b88-0c7c-4208-878f-0106c05c7914?source=linked_in_profile",
      alt_name: "visualisation",
      color_code: "#0C9D5899",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Emplois, Stages et Volontariat",
  description:
    "J'ai travaillé avec de nombreuses startups en évolution en tant que développeur FullStack . J'ai également travaillé avec des entreprises bien établies, principalement en tant que développeur Web/Mobile/Charge de communication digitale. J'adore organiser des événements et c'est pourquoi je suis également impliqué dans de nombreuses communautés open source en tant que membre.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Emploi",
      experiences: [
        {
          title: "développeur Web/Mobile/Charge de communication digitale",
          company: "AMEAK GROUP",
          company_url: "https://ameak.com/",
          logo_path: "ameak.png",
          duration: "Aout 2019 - de nos jours",
          location: "Lome, TOGO",
          description:
            "je travaille a la fois en tant que Développeur du site web et de l'application mobile (en cours) d'ameak.com , du charge de communication digital et aussi graphiste en creeant tous les visuels destines au plateformes digitales..",
          color: "#0879bf",
        },
       
      ],
    },
    {
      title: "Stages",
      experiences: [
        {
          title: "Développeur d'applications",
          company: "Compagnie Energetique Electrique du TOGO",
          company_url: "http://www.ceet.tg/tg/",
          logo_path: "ceet.png",
          duration: "Novembre 2016 - Decembre 2016",
          location: "Lome, TOGO",
          description:
            "j'ai travaillé en tant que développeur d'application stagiaire tout en développant sous Windev un logiciel de gestion de couriers.",
          color: "#ee3c26",
        },
        {
          title: "Enseignant Assistant",
          company: "ISSEC-K",
          company_url:
            "http://www.isseck.com/",
          logo_path: "issecklogo.gif",
          duration: "Nov 2017 - Dec 2018",
          location: "Lome-TOGO",
          description:
            "Aide le professeur à créer des plans de cours quotidiens - Classe et organise les travaux diriges - Récolte les devoirs quotidiens auprès des étudiants -et Surveillant lors des examens.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volontariats",
      experiences: [
        {
          title: "Sensibilisateur Volontaire",
          company: "UNICEF/JVE Benin",
          company_url: "https://www.jvebenin.org/",
          logo_path: "jve.jpg",
          duration: "Juillet 2020",
          location: "cotonou, BENIN",
          description:
            "Sensibilisation porte à porte sur la COVID19 et la Rédaction de rapports.",
          color: "#4285F4",
        },
       
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projets",
  description:
    "Pour mes projets j'utilise une grande variété d'outils technologiques les plus récents. Mes prochaines experienses baseront sur la creation des projets data science et deploiement sur des applications Web à l'aide d'une infrastructure cloud.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contactez Moi",
    profile_image_path: "lawal.png",
    description:
      "Je suis disponible sur presque tous les reseaux sociaux. Vous pouvez m'envoyer un message, je vous répondrai dans les 24 heures. Je peux vous aider avec les frameworks javascript,PHP, Symfony, React...",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Pour l'autonomisation fondamentale individuelle, j'aime écrire des articles detailles,clairs pour aider des lecteurs individuellement dans le domaine de la technologie.",
    link: "https://lawaltech.hashnode.dev",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Addresse",
    subtitle:
      "Cotonou BENIN",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Cotonou/@6.3723014,2.3611588,13z/data=!3m1!4b1!4m5!3m4!1s0x102354e509f894f7:0xc8fde921f89849f6!8m2!3d6.3702928!4d2.3912362",
  },
  phoneSection: {
    title: "Telephone",
    subtitle: "+229 65972969",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
