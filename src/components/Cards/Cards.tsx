"use client";

import Image from 'next/image';
import jsonData from './data';

import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

const CardsComponent = () => {
  return (
    <div className="cards__grid">
      {jsonData.map((cardData, index) => (
        <div className="card" key={index}>
          <span className="card__image">
            <Image
              src={cardData.img}
              alt={`Card Image ${index + 1}`}
              width={300}
              height={200}
            />
          </span>

          <div className="card__title">
            <h3>{cardData.title}</h3>
          </div>

          <div className="card__techs">
            {cardData.icons.map((Icon, idx) => (
              <div className="card__tech" key={idx}>
                <Icon />
              </div>
            ))}
          </div>

          <div className="card__body">
            <div className="card__description">
              <p>{cardData.description}</p>
            </div>
          </div>

          <div className="card__footer">
            <button className="card__date">{cardData.date}</button>

            {(cardData.link_site || cardData.link_github) && (
              <span className="card__links">
                {cardData.link_github && (
                  <a
                    href={cardData.link_github}
                    target="_blank"
                    className="card__link"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon />
                  </a>
                )}
                {cardData.link_site && (
                  <a
                    href={cardData.link_site}
                    target="_blank"
                    className="card__link"
                    rel="noopener noreferrer"
                  >
                    <LaunchIcon />
                  </a>
                )}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsComponent;
