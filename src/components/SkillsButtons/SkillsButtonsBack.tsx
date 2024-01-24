"use client";

import React, { FunctionComponent } from "react";
import Image from 'next/image';

import { NodejsOriginal, SymfonyOriginal, TypescriptOriginal, MongodbOriginal, PostgresqlOriginal } from 'devicons-react';

// Tema pas AntoCrack
const SwaggerLogo = "https://raw.githubusercontent.com/caputomarcos/node-red-contrib-swagger-js/master/icons/swagger.svg"

const SkillsElements = new Map<string, FunctionComponent>(
    [
        [`Node.JS`, NodejsOriginal ],
        [`Symfony`, SymfonyOriginal ],
        [`TypeScript`, TypescriptOriginal ],
        [`MongoDB`, MongodbOriginal ],
        [`Postgres`, PostgresqlOriginal],
    ]
)

const SkillsButtonsBack = () => {

    const renderChilds = () => {
        return Array.from(SkillsElements).map(([key, Icon],index : number) => {
            return (
                <button className='button__skills' key={index}>       
                    <div className="daron">          
                        <Icon key={index} /> {key} 
                    </div>
                </button>
            );
        });
    }

  return (
    <div className="container__button">
        { renderChilds() }
        <button className='button__skills'>
            <Image src={SwaggerLogo} alt="" width={40} height={40} /> Swagger
        </button>
    </div>
  );
};

export default SkillsButtonsBack;