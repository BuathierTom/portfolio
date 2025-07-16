"use client";

import React, { FunctionComponent } from "react";

import { GithubOriginal, DockerPlain, VscodeOriginal, FigmaOriginal, InsomniaOriginal, AzureOriginal, NotionOriginal, SwaggerOriginal, VercelOriginal } from 'devicons-react';

const SkillsElements = new Map<string, FunctionComponent>(
    [ 
        [`VS Code`, VscodeOriginal],
        [`GitHub`, GithubOriginal],
        [`Notion`, NotionOriginal],
        [`Docker`, DockerPlain],
        [`Azure`, AzureOriginal],
        [`Vercel`, VercelOriginal],
        [`Figma`, FigmaOriginal],
        [`Insomnia`, InsomniaOriginal],
        [`Swagger`, SwaggerOriginal],
    ]
)

const SkillsButtonsOther = () => {

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

export default SkillsButtonsOther;