import { FunctionComponent } from 'react';
import {
  TypescriptOriginal,
  SassOriginal,
  NextjsOriginal,
  JavaOriginal,
  KotlinOriginal,
  GradleOriginal,
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
  link_modrinth?: string;
  detailsKeys?: string[];
  stack: StackEntry[];
  additionalInfoKey?: string;
  previewUrl: string;
};

const jsonData: ProjectCard[] = [
    {
      titleKey: "projects.cards.xenaddons.title",
      descriptionKey: "projects.cards.xenaddons.description",
      dateKey: "projects.cards.xenaddons.date",
      link_site: "https://addons.xenus.fr/",
      link_github: "https://github.com/BuathierTom/XenAddons",
      link_modrinth: "https://modrinth.com/mod/xenaddons",
      previewUrl: "https://addons.xenus.fr/",
      detailsKeys: [
        "projects.cards.xenaddons.details.0",
        "projects.cards.xenaddons.details.1",
        "projects.cards.xenaddons.details.2",
        "projects.cards.xenaddons.details.3",
      ],
      additionalInfoKey: "projects.cards.xenaddons.additionalInfo",
      stack: [
        { label: "Java", Icon: JavaOriginal },
        { label: "Kotlin", Icon: KotlinOriginal },
        { label: "Gradle", Icon: GradleOriginal },
      ],
    },
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
