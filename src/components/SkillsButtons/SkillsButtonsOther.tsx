"use client";

import React, { FunctionComponent } from "react";
import { VscodeOriginal, GithubOriginal, NotionOriginal, DockerPlain, AzureOriginal, VercelOriginal, FigmaOriginal, InsomniaOriginal, SwaggerOriginal } from "devicons-react";

const otherSkills = new Map<string, FunctionComponent>([
  ["VS Code", VscodeOriginal],
  ["GitHub", GithubOriginal],
  ["Notion", NotionOriginal],
  ["Docker", DockerPlain],
  ["Azure", AzureOriginal],
  ["Vercel", VercelOriginal],
  ["Figma", FigmaOriginal],
  ["Insomnia", InsomniaOriginal],
  ["Swagger", SwaggerOriginal]
]);

const SkillsButtonsOther = () => {
  return (
    <div className="skills__grid">
      {Array.from(otherSkills).map(([label, Icon], index) => (
        <button className="skills__button" key={index}>
          <div className="skills__content">
            <Icon /> {label}
          </div>
        </button>
      ))}
    </div>
  );
};

export default SkillsButtonsOther;
