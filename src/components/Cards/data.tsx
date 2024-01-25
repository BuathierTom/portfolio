import { ReactOriginal, NodejsOriginal, MongodbOriginal, SassOriginal, NextjsOriginal, JavaOriginal, CsharpOriginal, BlenderOriginal, UnityOriginal  } from 'devicons-react';

const jsonData = [
    {
      img: "/img/projects/reserve.png",
      title: "ReserveTonLogis",
      description: "Website for managing bookings for 3 guest rooms in a private home. The site is dynamic and allows you to book a room at different prices depending on the season.",
      icons: [ReactOriginal, SassOriginal, NodejsOriginal, MongodbOriginal],
      date: "Sept 2023 - Nov 2023",
      link: "https://github.com/BuathierTom/ReserveTonLogis/",
    },
    {
      img: "/img/projects/portfolio.png",
      title: "Portfolio", 
      description: "Portfolio created in Next.JS. An online resume highlighting my skills, achievements and projects, summarising my career path.",
      icons: [NextjsOriginal, SassOriginal],
      date: "Nov 2023 - Jan 2024",
    },
    {
      img: "/img/projects/unity.png",
      title: "BioKid", 
      description: "Game developed on Unity in C# for children aged 5 to 14. It shows the pollution cycle in different ecosystems. It's a little AR game to help children better understand this cycle.",
      icons: [UnityOriginal, BlenderOriginal, CsharpOriginal, ],
      date: "Nov 2023 - Jan 2024",
      // link: "https://github.com/anthony-eluecque/reseARch-educative-app",
    },
    {
      img: "/img/projects/quarto.png",
      title: "Quarto Game", 
      description: "Quarto board game in Java, played by 2 players. The player who lines up 4 pieces with at least one in common wins the game.",
      icons: [JavaOriginal],
      date: "Sept 2022 - Avril 2023",
      link: "https://github.com/BuathierTom/quarto-game-project/",
    },
  ];


export default jsonData;