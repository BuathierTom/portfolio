"use client";

import Image from 'next/image';
import jsonData from './data';

import LaunchIcon from '@mui/icons-material/Launch';

const CardsComponent = () => {

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
