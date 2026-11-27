import { FunctionComponent } from 'react';
import {
  TypescriptOriginal,
  SassOriginal,
  NextjsOriginal,
} from 'devicons-react';

type StackEntry = {
  label: string;
  Icon: FunctionComponent;
};

export type ProjectCard = {
  titleKey: string;
  descriptionKey: string;
  dateKey: string;
  link_site?: string;
  link_github?: string;
  detailsKeys?: string[];
  stack: StackEntry[];
  additionalInfoKey?: string;
  previewUrl: string;
};

const jsonData: ProjectCard[] = [
    {
      titleKey: "projects.cards.portfolio.title",
      descriptionKey: "projects.cards.portfolio.description",
      dateKey: "projects.cards.portfolio.date",
      link_site: "https://buathier-tom.fr/",
      previewUrl: "https://buathier-tom.fr/",
      detailsKeys: [
        "projects.cards.portfolio.details.0",
        "projects.cards.portfolio.details.1",
        "projects.cards.portfolio.details.2",
      ],
      additionalInfoKey: "projects.cards.portfolio.additionalInfo",
      stack: [
        { label: "Next.js", Icon: NextjsOriginal },
        { label: "Sass", Icon: SassOriginal },
        { label: "TypeScript", Icon: TypescriptOriginal },
      ],
    },
  ];


export default jsonData;
