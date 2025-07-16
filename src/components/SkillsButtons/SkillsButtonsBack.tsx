"use client";

import React, { FunctionComponent } from "react";

import { NodejsOriginal, SymfonyOriginal, TypescriptOriginal, MongodbOriginal, PostgresqlOriginal, PhpOriginal, DotnetcoreOriginal, JavaOriginal, KubernetesOriginal } from 'devicons-react';

const SkillsElements = new Map<string, FunctionComponent>(
    [
        [`Node.JS`, NodejsOriginal ],
        [`.NET`, DotnetcoreOriginal ],
        [`PHP`, PhpOriginal],
        [`Java`, JavaOriginal],
        [`Symfony`, SymfonyOriginal ],
        [`TypeScript`, TypescriptOriginal ],
        [`MongoDB`, MongodbOriginal ],
        [`Postgres`, PostgresqlOriginal],
        [`Kubernetes`, KubernetesOriginal],
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
    </div>
  );
};

export default SkillsButtonsBack;