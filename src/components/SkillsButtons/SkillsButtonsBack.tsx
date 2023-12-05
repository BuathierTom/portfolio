"use client";

import React, { FunctionComponent } from "react";

import { NodejsOriginal, SymfonyOriginal, TypescriptOriginal, MongodbOriginal, PostgresqlOriginal } from 'devicons-react';

// Tema pas AntoCrack
const SwaggerLogo = "https://camo.githubusercontent.com/96e43701d83561899724a89d71187445b7b8f4fe84518a3ea5bec8f85bd207bf/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f737761676765722e737667"

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
            <img src={SwaggerLogo} width={40} height={40} /> Swagger
        </button>
    </div>
  );
};

export default SkillsButtonsBack;