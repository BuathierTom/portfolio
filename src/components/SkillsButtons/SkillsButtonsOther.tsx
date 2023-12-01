"use client";

import React, { FunctionComponent } from "react";

import { JavaOriginal, GithubOriginal, DockerPlain, VscodeOriginal, FigmaOriginal, BootstrapPlain } from 'devicons-react';

const SkillsElements = new Map<string, FunctionComponent>(
    [
        [`Java`, JavaOriginal],
        [`GitHub`, GithubOriginal],
        [`Docker`, DockerPlain],
        [`VS Code`, VscodeOriginal],
        [`Figma`, FigmaOriginal],
        [`Bootstrap`, BootstrapPlain],
    ]
)

const SkillsButtonsOther = () => {

    const renderChilds = () => {
        return Array.from(SkillsElements).map(([key, Icon],index : number) => {
            return (
                <button className='button__skills' key={index}>                    
                        <Icon key={index} size={40} /> {key} 
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