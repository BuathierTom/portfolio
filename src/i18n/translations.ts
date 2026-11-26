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
      projectsButton: "MY PROJECTS",
    },
    about: {
      title: "About <span class='highlight'>Me</span>",
      description: `<p>I'm a computer science student at the University of Calais, and I'm about to start my master's degree in Free Software Engineering (I2L). I'm passionate about web development, and I've built many personal projects outside of my coursework, alongside my academic projects.</p>
<p>In the Projects section of my portfolio, you'll find a selection of my most important and interesting work. This includes major projects I've completed during my three years of study at the University of Calais, as well as several personal projects I've developed on my own initiative. These projects cover a wide range of topics, from fullstack web applications and API development to more experimental or passion-driven ideas. Each project reflects both my technical skills and my curiosity to explore new technologies outside the classroom. Feel free to explore this section to get a better idea of my experience and my approach to problem-solving.</p>
<p>After completing my master's degree, my goal is to work as a fullstack web developer.</p>`,
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
        qaPortfolio: {
          title: "QA Tester Portfolio",
          description:
            "Portfolio site highlighting the QA and automation expertise of fictional tester Alex Dupont, available as an open-access reference for hiring teams.",
          date: "Feb 2025",
          additionalInfo:
            "Public showcase detailing manual testing practices, automation tooling, and reporting workflows tailored to QA roles.",
          details: [
            "Presents case studies covering exploratory testing, automation strategy, and KPI dashboards for quality reporting.",
            "Built with Vite, React, TypeScript, Tailwind CSS, and Radix UI primitives to ensure accessible, component-driven layouts.",
            "Includes clear calls to action for contacting Alex, booking discovery calls, and reviewing certification highlights.",
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
      projectsButton: "MES PROJETS",
    },
    about: {
      title: "À propos <span class='highlight'>de moi</span>",
      description: `<p>Je suis étudiant en informatique à l'Université de Calais, et je m'apprête à commencer mon master en Ingénierie du Logiciel Libre (I2L). Je suis passionné par le développement web, et j'ai réalisé de nombreux projets personnels en dehors de mes cours, en plus de mes projets universitaires.</p>
<p>Dans la section Projets de mon portfolio, vous trouverez une sélection de mes réalisations les plus importantes et les plus intéressantes. Cela inclut les projets majeurs que j'ai réalisés au cours de mes trois années d'études à l'Université de Calais, ainsi que plusieurs projets personnels que j'ai développés de ma propre initiative. Ces projets couvrent un large éventail de sujets, allant d'applications web fullstack et de développement d'API à des idées plus expérimentales ou motivées par la passion. Chaque projet reflète à la fois mes compétences techniques et ma curiosité pour explorer de nouvelles technologies en dehors du cadre académique. N'hésitez pas à parcourir cette section pour mieux comprendre mon expérience et ma manière d'aborder la résolution de problèmes.</p>
<p>Après l'obtention de mon master, mon objectif est de travailler en tant que développeur web fullstack.</p>`,
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
        qaPortfolio: {
          title: "Portfolio QA",
          description:
            "Portfolio mettant en avant l'expertise QA et l'automatisation du testeur fictif Alex Dupont, pensé comme vitrine accessible pour les recruteurs.",
          date: "Fév. 2025",
          additionalInfo:
            "Présentation publique des méthodologies de tests manuels, des outils d'automatisation et des workflows de reporting dédiés aux équipes QA.",
          details: [
            "Présente des études de cas couvrant test exploratoire, stratégie d'automatisation et tableaux de bord d'indicateurs de qualité.",
            "Construit avec Vite, React, TypeScript, Tailwind CSS et les primitives Radix UI pour une interface component-driven et accessible.",
            "Inclut des appels à l'action clairs pour contacter Alex, planifier un échange et consulter ses certifications.",
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
