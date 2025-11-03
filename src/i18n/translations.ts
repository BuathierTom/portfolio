const translations = {
  en: {
    language: {
      current: "English",
      switch: "FR",
      toggleLabel: "Switch language to French",
    },
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    home: {
      greeting: "Hello 👋,",
      nameIntro: "My name is <span class='highlight'>BUATHIER Tom</span>",
      role: "I'm an IT student, <span class='highlight'>a fullstack developer</span>",
      resumeButton: "MY RESUME",
    },
    about: {
      title: "About <span class='highlight'>Me</span>",
      description: `I'm a computer science student at the University of Calais, and I'm about to start my master's degree in Free Software Engineering (I2L). I'm passionate about web development, and I've built many personal projects outside of my coursework, alongside my academic projects.<br /><br />
In the Projects section of my portfolio, you'll find a selection of my most important and interesting work. This includes major projects I've completed during my three years of study at the University of Calais, as well as several personal projects I've developed on my own initiative. These projects cover a wide range of topics, from fullstack web applications and API development to more experimental or passion-driven ideas. Each project reflects both my technical skills and my curiosity to explore new technologies outside the classroom. Feel free to explore this section to get a better idea of my experience and my approach to problem-solving.<br /><br />
After completing my master's degree, my goal is to work as a fullstack web developer.`,
      skillsTitle: "My <span class='highlight'>Skills</span>",
      frontTitle: "<span class='highlight'>Front-End</span> tools",
      backTitle: "<span class='highlight'>Back-End</span> tools",
      otherTitle: "<span class='highlight'>Other</span> tools",
    },
    projects: {
      title: "My <span class='projects__title-highlight'>Projects</span>",
      description: `Here's my projects section, where you can see my biggest projects from my student years. If you'd like to see more projects, please visit my <a href="https://github.com/BuathierTom" target="_blank" rel="noopener noreferrer">Github</a>.`,
      cards: {
        apishop: {
          title: "ApiShop",
          description:
            "ApiShop is a full-featured e-commerce REST API built with ASP.NET Core, providing user authentication, product and category management, shopping cart functionality, and order processing.",
          date: "Jul 2025",
          additionalInfo:
            "Personal project exploring what it takes to build an end-to-end e-commerce API with .NET and TypeScript.",
          details: [
            "Implements secure JWT authentication with role-based access for customers and administrators.",
            "Provides a full CRUD back-office for products, categories, discounts, and inventories.",
            "Includes order tracking with state transitions, payment simulation, and email notifications.",
          ],
        },
        taskflow: {
          title: "TaskFlow",
          description:
            "TaskFlow is a dynamic and responsive to-do list application to manage daily tasks with deadlines and status tracking.",
          date: "Jul 2025",
          additionalInfo:
            "Lightweight productivity app designed for day-to-day use on both mobile and desktop.",
          details: [
            "Organises tasks by priority, deadlines, and completion status with instant filtering.",
            "Persists data locally and syncs UI state to keep the workflow consistent between sessions.",
            "Offers a responsive drag-and-drop interface optimised for mobile and desktop usage.",
          ],
        },
        reserve: {
          title: "ReserveTonLogis",
          description:
            "Website for managing bookings for 3 guest rooms in a private home. The site is dynamic and allows you to book a room at different prices depending on the season.",
          date: "Sep 2023 - Nov 2023",
          additionalInfo:
            "Small-team project focused on digitising the booking workflow for a multi-room guest house.",
          details: [
            "Integrates a custom booking calendar with seasonal pricing logic and availability checks.",
            "Stores reservations and customer data securely with validation and confirmation emails.",
            "Includes an admin dashboard to manage rooms, pricing tiers, and special offers in real time.",
          ],
        },
        portfolio: {
          title: "Portfolio",
          description:
            "Portfolio created in Next.JS. An online resume highlighting my skills, achievements and projects, summarising my career path.",
          date: "Nov 2023 - Jan 2024",
          additionalInfo:
            "Personal visual identity centred on readability and accessibility, hosted and optimised on Vercel.",
          details: [
            "Built with the latest Next.js app router to deliver performant, SEO-friendly pages.",
            "Features modular sections (about, skills, projects, contact) powered by reusable components.",
            "Implements responsive layouts and motion effects for a polished browsing experience.",
          ],
        },
      },
    },
    cards: {
      details: "Details",
      overlay: "Visit site",
      techStack: "Tech stack",
      highlights: "Project highlights",
      viewLive: "View live site",
      viewSource: "View source",
      closeDialog: "Close project details dialog",
    },
    contact: {
      title: "Contact <span class='highlight'>Me</span>",
      nameLabel: "Name",
      namePlaceholder: "Full Name",
      emailLabel: "Email",
      emailPlaceholder: "example@gmail.com",
      messageLabel: "Message",
      messagePlaceholder: "Hello Tom,",
      submit: "Send",
      success: "Message sent successfully",
    },
  },
  fr: {
    language: {
      current: "Français",
      switch: "EN",
      toggleLabel: "Passer le site en anglais",
    },
    nav: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      contact: "Contact",
    },
    home: {
      greeting: "Bonjour 👋,",
      nameIntro: "Je m'appelle <span class='highlight'>BUATHIER Tom</span>",
      role: "Je suis étudiant en informatique, <span class='highlight'>développeur fullstack</span>",
      resumeButton: "MON CV",
    },
    about: {
      title: "À propos <span class='highlight'>de moi</span>",
      description: `Je suis étudiant en informatique à l’Université de Calais et je m’apprête à commencer un master en Ingénierie des Logiciels Libres (I2L). Passionné par le développement web, j’ai réalisé de nombreux projets personnels en parallèle de mes travaux universitaires.<br /><br />
Dans la section Projets de mon portfolio, vous trouverez une sélection de mes réalisations les plus importantes et les plus intéressantes. Elle regroupe autant les projets majeurs menés durant mes trois années d’études à l’Université de Calais que plusieurs projets personnels développés de ma propre initiative. Ces expériences couvrent un large éventail de sujets, allant des applications web fullstack et du développement d’API à des idées plus expérimentales ou guidées par la passion. Chaque projet reflète mes compétences techniques ainsi que ma curiosité pour de nouvelles technologies en dehors des cours.<br /><br />
Après mon master, mon objectif est de devenir développeur web fullstack.`,
      skillsTitle: "Mes <span class='highlight'>compétences</span>",
      frontTitle: "Outils <span class='highlight'>Front-End</span>",
      backTitle: "Outils <span class='highlight'>Back-End</span>",
      otherTitle: "Autres <span class='highlight'>outils</span>",
    },
    projects: {
      title: "Mes <span class='projects__title-highlight'>Projets</span>",
      description: `Voici ma section projets, où vous trouverez mes réalisations les plus marquantes de ces dernières années. Pour découvrir davantage de projets, n'hésitez pas à visiter mon <a href="https://github.com/BuathierTom" target="_blank" rel="noopener noreferrer">Github</a>.`,
      cards: {
        apishop: {
          title: "ApiShop",
          description:
            "ApiShop est une API REST e-commerce complète réalisée avec ASP.NET Core : authentification, gestion des produits et catégories, panier et suivi des commandes.",
          date: "Juil. 2025",
          additionalInfo:
            "Projet personnel visant à explorer la construction d'une API e-commerce de bout en bout avec .NET et TypeScript.",
          details: [
            "Implémente une authentification JWT sécurisée avec gestion des rôles pour clients et administrateurs.",
            "Fournit un back-office complet (produits, catégories, remises, stocks) avec opérations CRUD.",
            "Inclut un suivi des commandes avec états, simulation de paiement et notifications e-mail.",
          ],
        },
        taskflow: {
          title: "TaskFlow",
          description:
            "TaskFlow est une application de to-do list responsive pour gérer les tâches quotidiennes avec priorités, deadlines et suivi d'avancement.",
          date: "Juil. 2025",
          additionalInfo:
            "Application de productivité conçue pour un usage quotidien sur mobile comme sur desktop.",
          details: [
            "Organise les tâches par priorité, échéance et statut avec un filtrage instantané.",
            "Sauvegarde les données localement et synchronise l’interface pour conserver le contexte d’une session à l’autre.",
            "Propose une interface responsive avec glisser-déposer optimisée pour les usages tactile et souris.",
          ],
        },
        reserve: {
          title: "ReserveTonLogis",
          description:
            "Site de réservation pour 3 chambres d'hôtes permettant de gérer les disponibilités et tarifs variables selon la saison.",
          date: "Sept. 2023 - Nov. 2023",
          additionalInfo:
            "Projet mené en petite équipe pour digitaliser la gestion des réservations d’une maison d’hôtes.",
          details: [
            "Intègre un calendrier de réservation avec logique tarifaire saisonnière et vérification des disponibilités.",
            "Stocke les réservations et données clients de manière sécurisée avec validations et e-mails de confirmation.",
            "Inclut un tableau de bord administrateur pour gérer chambres, grilles tarifaires et offres spéciales en temps réel.",
          ],
        },
        portfolio: {
          title: "Portfolio",
          description:
            "Portfolio développé avec Next.js. Un CV en ligne qui met en avant mes compétences, réalisations et mon parcours.",
          date: "Nov. 2023 - Jan. 2024",
          additionalInfo:
            "Identité visuelle personnelle axée sur la lisibilité et l’accessibilité, hébergée et optimisée sur Vercel.",
          details: [
            "Construit avec le nouvel App Router de Next.js pour des pages performantes et optimisées SEO.",
            "Dispose de sections modulaires (à propos, compétences, projets, contact) basées sur des composants réutilisables.",
            "Propose des mises en page responsives et des effets de mouvement pour une expérience soignée.",
          ],
        },
      },
    },
    cards: {
      details: "Détails",
      overlay: "Voir le site",
      techStack: "Stack technique",
      highlights: "Points clés du projet",
      viewLive: "Voir le site",
      viewSource: "Voir le code",
      closeDialog: "Fermer la fenêtre des détails du projet",
    },
    contact: {
      title: "Contactez <span class='highlight'>moi</span>",
      nameLabel: "Nom",
      namePlaceholder: "Nom complet",
      emailLabel: "Email",
      emailPlaceholder: "exemple@gmail.com",
      messageLabel: "Message",
      messagePlaceholder: "Bonjour Tom,",
      submit: "Envoyer",
      success: "Message envoyé avec succès",
    },
  },
} as const;

export default translations;
