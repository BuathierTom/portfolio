import {
  TypescriptOriginal,
  DotnetcoreOriginal,
  VitejsOriginal,
  ReactOriginal,
  NodejsOriginal,
  MongodbOriginal,
  SassOriginal,
  NextjsOriginal,
} from 'devicons-react';

const jsonData = [
    {
      img: "/img/projects/apishop.png",
      title: "ApiShop", 
      description: "ApiShop is a full-featured e-commerce REST API built with ASP.NET Core, providing user authentication, product and category management, shopping cart functionality, and order processing.",
      date: "Jul 2025",
      link_site: "https://apishop.buathier-tom.fr/",
      link_github: "https://github.com/BuathierTom/ApiShop",
      details: [
        "Implements secure JWT authentication with role-based access for customers and administrators.",
        "Provides a full CRUD back-office for products, categories, discounts, and inventories.",
        "Includes order tracking with state transitions, payment simulation, and email notifications.",
      ],
      stack: [
        { label: "Vite", Icon: VitejsOriginal },
        { label: "TypeScript", Icon: TypescriptOriginal },
        { label: ".NET Core", Icon: DotnetcoreOriginal },
      ],
      additionalInfo: "Personal project exploring what it takes to build an end-to-end e-commerce API with .NET and TypeScript.",
    },
    {
      img: "/img/projects/taskflow.png",
      title: "TaskFlow", 
      description: "TaskFlow is a dynamic and responsive to-do list application to manage daily tasks with deadlines and status tracking.",
      date: "Jul 2025",
      link_site: "https://taskflow.buathier-tom.fr/",
      link_github: "https://github.com/BuathierTom/TaskFlow",
      details: [
        "Organises tasks by priority, deadlines, and completion status with instant filtering.",
        "Persists data locally and syncs UI state to keep the workflow consistent between sessions.",
        "Offers a responsive drag-and-drop interface optimised for mobile and desktop usage.",
      ],
      stack: [
        { label: "Vite", Icon: VitejsOriginal },
        { label: "TypeScript", Icon: TypescriptOriginal },
        { label: "React", Icon: ReactOriginal },
      ],
      additionalInfo: "Lightweight productivity app designed for day-to-day use on both mobile and desktop.",
    },
    {
      img: "/img/projects/reserve.png",
      title: "ReserveTonLogis",
      description: "Website for managing bookings for 3 guest rooms in a private home. The site is dynamic and allows you to book a room at different prices depending on the season.",
      date: "Sep 2023 - Nov 2023",
      link_site: "https://reserveton-logis.vercel.app/",
      link_github: "https://github.com/BuathierTom/ReserveTonLogis/",
      details: [
        "Integrates a custom booking calendar with seasonal pricing logic and availability checks.",
        "Stores reservations and customer data securely with validation and confirmation emails.",
        "Includes an admin dashboard to manage rooms, pricing tiers, and special offers in real time.",
      ],
      stack: [
        { label: "React", Icon: ReactOriginal },
        { label: "Sass", Icon: SassOriginal },
        { label: "Node.js", Icon: NodejsOriginal },
        { label: "MongoDB", Icon: MongodbOriginal },
      ],
      additionalInfo: "Small-team project focused on digitising the booking workflow for a multi-room guest house.",
    },
    {
      img: "/img/projects/portfolio.png",
      title: "Portfolio", 
      description: "Portfolio created in Next.JS. An online resume highlighting my skills, achievements and projects, summarising my career path.",
      date: "Nov 2023 - Jan 2024",
      link_site: "https://buathier-tom.fr/",
      details: [
        "Built with the latest Next.js app router to deliver performant, SEO-friendly pages.",
        "Features modular sections (about, skills, projects, contact) powered by reusable components.",
        "Implements responsive layouts and motion effects for a polished browsing experience.",
      ],
      stack: [
        { label: "Next.js", Icon: NextjsOriginal },
        { label: "Sass", Icon: SassOriginal },
        { label: "TypeScript", Icon: TypescriptOriginal },
      ],
      additionalInfo: "Personal visual identity centred on readability and accessibility, hosted and optimised on Vercel.",
    },
  ];


export default jsonData;
