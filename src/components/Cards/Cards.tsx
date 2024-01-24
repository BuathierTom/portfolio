"use client";

import Image from 'next/image';
import { ReactOriginal, NodejsOriginal, MongodbOriginal, SassOriginal, NextjsOriginal, JavaOriginal, CsharpOriginal, BlenderOriginal, UnityOriginal  } from 'devicons-react';

import LaunchIcon from '@mui/icons-material/Launch';

const CardsComponent = () => {

  const jsonData = [
    {
      img: "/reserve.png",
      title: "ReserveTonLogis",
      description: "Website for managing bookings for 3 guest rooms in a private home. The site is dynamic and allows you to book a room at different prices depending on the season.",
      icons: [ReactOriginal, SassOriginal, NodejsOriginal, MongodbOriginal],
      date: "Sept 2023 - Nov 2023",
      link: "https://github.com/BuathierTom/ReserveTonLogis/",
    },
    {
      img: "/portfolio.png",
      title: "Portfolio", 
      description: "Portfolio created in Next.JS. An online resume highlighting my skills, achievements and projects, summarising my career path.",
      icons: [NextjsOriginal, SassOriginal],
      date: "Nov 2023 - Jan 2024",
    },
    {
      img: "/unity.png",
      title: "BioKid", 
      description: "Game developed on Unity in C# for children aged 5 to 14. It shows the pollution cycle in different ecosystems.",
      icons: [UnityOriginal, BlenderOriginal, CsharpOriginal, ],
      date: "Nov 2023 - Jan 2024",
      // link: "https://github.com/anthony-eluecque/reseARch-educative-app",
    },
    {
      img: "/quarto.png",
      title: "Quarto Game", 
      description: "Quarto board game in Java, played by 2 players. The player who lines up 4 pieces with at least one in common wins the game.",
      icons: [JavaOriginal],
      date: "Sept 2022 - Avril 2023",
      link: "https://github.com/BuathierTom/quarto-game-project/",
    },
  ];

  const renderChilds = () => {
    return jsonData.map((cardData, index) => (
      <div className="container__card-single" key={index}>
        <span className="container__card-img">
          <Image src={cardData.img} alt={`Card Image ${index + 1}`} width={300} height={200} />
        </span>

        <div className="container__card-title">
          <h3>{cardData.title}</h3>
        </div>

        <div className="container__card-chip">

          {cardData.icons.map((Icon, index) => (
            <div className="container__card-chip-single" key={index}>
              <Icon key={index}/> 
            </div>
          ))}

        </div>

        <div className="container__card-body">


          <div className="container__card-body-desc">
            <p>{cardData.description}</p>
          </div>

        </div>
        <div className="container__card-footer">
            <button className="container__card-footer-date">
              {cardData.date}
            </button>

          {cardData.link ? (
            <a href={cardData.link} target="_blank" className="container__card-footer-link">
              <LaunchIcon />
            </a> ) : ( null )}
        </div>
      </div>
    ));
  };

  return (
    <div className="container__cards">
        {renderChilds()}
    </div>     
  );
};

export default CardsComponent;
