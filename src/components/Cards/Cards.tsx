"use client";
import React, { useState, useEffect } from "react";

import { ReactOriginal, NodejsOriginal, MongodbOriginal, SassOriginal, NextjsOriginal, JavaOriginal, CsharpOriginal, BlenderOriginal, UnityOriginal  } from 'devicons-react';

import LaunchIcon from '@mui/icons-material/Launch';

const CardsComponent = () => {

  const jsonData = [
    {
      img: "/reserve.png",
      title: "ReserveTonLogis",
      description: "C'est un site de gestions de réservations de 3 chambres d’hôtes chez un particulier. Il est dynamique et permet de réserver une chambre avec des prix différents en fonction des saisons. Je me suis occupé de la partie back-end du site. ",
      icons: [ReactOriginal, SassOriginal, NodejsOriginal, MongodbOriginal],
      date: "Sept 2023 - Nov 2023",
      link: "https://github.com/BuathierTom/ReserveTonLogis/",
    },
    {
      img: "/portfolio.png",
      title: "Portfolio", 
      description: "Portfolio réalisé en Next.JS. Une vitrine en ligne mettant en valeur mes compétences, réalisations et projets, résumant mon parcours professionnel.",
      icons: [NextjsOriginal, SassOriginal],
      date: "Nov 2023 - Jan 2024",
      link: "https://github.com/BuathierTom/portfolio/",
    },
    {
      img: "/unity.png",
      title: "BioKid", 
      description: "Jeu développé sur Unity en C# pour les enfants de 5 à 14 ans. Il permet de découvrir le cycle de la pollution sur différents écosystèmes.",
      icons: [UnityOriginal, BlenderOriginal, CsharpOriginal, ],
      date: "Nov 2023 - Jan 2024",
      link: "https://github.com/anthony-eluecque/reseARch-educative-app",
    },
    {
      img: "/quarto.png",
      title: "Quarto Game", 
      description: "Jeu de société Quarto en Java, qui se joue à 2. Le joueur qui aligne 4 pièces ayant au moins un point commun entre elles gagne la partie.",
      icons: [JavaOriginal],
      date: "Sept 2022 - Avril 2023",
      link: "https://github.com/BuathierTom/quarto-game-project/",
    },
  ];

  const renderChilds = () => {
    return jsonData.map((cardData, index) => (
      <div className="container__card-single" key={index}>
        <span className="container__card-img">
          <img src={cardData.img} alt={`Card Image ${index + 1}`} />
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

            <a href={cardData.link} target="_blank" className="container__card-footer-link">
             <LaunchIcon />
            </a>
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
