"use client";

import React, { FunctionComponent } from "react";

import { Html5Original, Css3Original, JavascriptOriginal, NextjsOriginal, SassOriginal, VitejsOriginal, BootstrapPlain, TailwindcssOriginal, ReactOriginal} from 'devicons-react';

const SkillsElements = new Map<string, FunctionComponent>(
    [
        [`HTML`, Html5Original],
        [`CSS`, Css3Original],
        [`JavaScript`, JavascriptOriginal],
        [`React`, ReactOriginal],
        [`Next.JS`, NextjsOriginal],
        [`Vite.JS`, VitejsOriginal],
        [`SASS`, SassOriginal],
        [`Bootstrap`, BootstrapPlain],
        [`Tailwind`, TailwindcssOriginal],
    ]
)

const SkillsButtonsFront = () => {

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

export default SkillsButtonsFront;