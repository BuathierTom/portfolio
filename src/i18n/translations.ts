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
      description: `<p>I am a computer science student at the University of Calais, preparing to begin a master's degree in Free Software Engineering (I2L). I enjoy designing interfaces that feel simple, building solid APIs, and keeping accessibility in mind.</p>
<p>Over the past few years I have balanced classes with personal projects and internships. They led me to experiment with React and Next.js on the front end, Node.js and .NET on the back end, and to deploy services with Docker and managed databases. The projects highlighted here reflect those experiences and the way I collaborate with teammates.</p>
<p>Once I complete my master's degree I want to join a product team as a fullstack developer, keep refining delivery pipelines, and continue sharing what I learn.</p>`,
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
    skills: {
      categories: {
        languages: "Core languages",
        frontend: "Front-end frameworks",
        backend: "Back-end & databases",
        devops: "DevOps & versioning",
        tools: "Productivity tools",
      },
      items: {
        javascript: "JavaScript",
        typescript: "TypeScript",
        html: "HTML5",
        css: "CSS3",
        php: "PHP",
        java: "Java",
        react: "React",
        nextjs: "Next.js",
        vite: "Vite",
        sass: "Sass",
        bootstrap: "Bootstrap",
        tailwind: "Tailwind CSS",
        node: "Node.js",
        dotnet: ".NET Core",
        symfony: "Symfony",
        mongodb: "MongoDB",
        postgresql: "PostgreSQL",
        kubernetes: "Kubernetes",
        docker: "Docker",
        azure: "Azure",
        vercel: "Vercel",
        swagger: "Swagger",
        insomnia: "Insomnia",
        vscode: "VS Code",
        github: "GitHub",
        notion: "Notion",
        figma: "Figma",
      },
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
      description: `<p>Je suis étudiant en informatique à l’Université de Calais et je m’apprête à commencer un master en Ingénierie des Logiciels Libres (I2L). J’aime concevoir des interfaces claires, développer des API fiables et garder l’accessibilité au cœur du projet.</p>
<p>Ces dernières années, j’ai mené de front cours, projets personnels et stages. Cela m’a permis d’expérimenter React et Next.js côté front, Node.js et .NET côté back, mais aussi de déployer des services avec Docker et différentes bases de données managées. Les projets présentés ici illustrent ces expériences et la façon dont je travaille avec mes camarades.</p>
<p>Une fois mon master terminé, je souhaite rejoindre une équipe produit comme développeur fullstack, continuer à améliorer les pipelines de livraison et transmettre ce que j’apprends.</p>`,
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
    skills: {
      categories: {
        languages: "Langages principaux",
        frontend: "Frameworks front-end",
        backend: "Back-end & bases de données",
        devops: "DevOps & versioning",
        tools: "Outils de productivité",
      },
      items: {
        javascript: "JavaScript",
        typescript: "TypeScript",
        html: "HTML5",
        css: "CSS3",
        php: "PHP",
        java: "Java",
        react: "React",
        nextjs: "Next.js",
        vite: "Vite",
        sass: "Sass",
        bootstrap: "Bootstrap",
        tailwind: "Tailwind CSS",
        node: "Node.js",
        dotnet: ".NET Core",
        symfony: "Symfony",
        mongodb: "MongoDB",
        postgresql: "PostgreSQL",
        kubernetes: "Kubernetes",
        docker: "Docker",
        azure: "Azure",
        vercel: "Vercel",
        swagger: "Swagger",
        insomnia: "Insomnia",
        vscode: "VS Code",
        github: "GitHub",
        notion: "Notion",
        figma: "Figma",
      },
    },
  },
} as const;

export default translations;
