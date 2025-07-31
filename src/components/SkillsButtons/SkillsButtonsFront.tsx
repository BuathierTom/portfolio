"use client";

import React, { FunctionComponent } from "react";
import { Html5Original, Css3Original, JavascriptOriginal, ReactOriginal, NextjsOriginal, VitejsOriginal, SassOriginal, BootstrapPlain, TailwindcssOriginal } from "devicons-react";

const frontEndSkills = new Map<string, FunctionComponent>([
  ["HTML", Html5Original],
  ["CSS", Css3Original],
  ["JavaScript", JavascriptOriginal],
  ["React", ReactOriginal],
  ["Next.JS", NextjsOriginal],
  ["Vite.JS", VitejsOriginal],
  ["SASS", SassOriginal],
  ["Bootstrap", BootstrapPlain],
  ["Tailwind", TailwindcssOriginal]
]);

const SkillsButtonsFront = () => {
  return (
    <div className="skills__grid">
      {Array.from(frontEndSkills).map(([label, Icon], index) => (
        <button className="skills__button" key={index}>
          <div className="skills__content">
            <Icon /> {label}
          </div>
        </button>
      ))}
    </div>
  );
};

export default SkillsButtonsFront;
