"use client";

import React, { FunctionComponent } from "react";
import { NodejsOriginal, SymfonyOriginal, TypescriptOriginal, MongodbOriginal, PostgresqlOriginal, PhpOriginal, DotnetcoreOriginal, JavaOriginal, KubernetesOriginal } from "devicons-react";

const skillsMap = new Map<string, FunctionComponent>([
  ["Node.JS", NodejsOriginal],
  [".NET", DotnetcoreOriginal],
  ["PHP", PhpOriginal],
  ["Java", JavaOriginal],
  ["Symfony", SymfonyOriginal],
  ["TypeScript", TypescriptOriginal],
  ["MongoDB", MongodbOriginal],
  ["Postgres", PostgresqlOriginal],
  ["Kubernetes", KubernetesOriginal]
]);

const SkillsButtonsBack = () => {
  return (
    <div className="skills__grid">
      {Array.from(skillsMap).map(([name, Icon], index) => (
        <button className="skills__button" key={index}>
          <div className="skills__content">
            <Icon /> {name}
          </div>
        </button>
      ))}
    </div>
  );
};

export default SkillsButtonsBack;
