import { FunctionComponent } from 'react';
import {
  TypescriptOriginal,
  DotnetcoreOriginal,
  VitejsOriginal,
  ReactOriginal,
  NodejsOriginal,
  MongodbOriginal,
  SassOriginal,
  NextjsOriginal,
} from 'devicons-react';

type StackEntry = {
  label: string;
  Icon: FunctionComponent;
};

export type ProjectCard = {
  img: string;
  titleKey: string;
  descriptionKey: string;
  dateKey: string;
  link_site?: string;
  link_github?: string;
  detailsKeys?: string[];
  stack: StackEntry[];
  additionalInfoKey?: string;
};

const jsonData: ProjectCard[] = [
    {
      img: "/img/projects/apishop.png",
      titleKey: "projects.cards.apishop.title",
      descriptionKey: "projects.cards.apishop.description",
      dateKey: "projects.cards.apishop.date",
      link_site: "https://apishop.buathier-tom.fr/",
      link_github: "https://github.com/BuathierTom/ApiShop",
      detailsKeys: [
        "projects.cards.apishop.details.0",
        "projects.cards.apishop.details.1",
        "projects.cards.apishop.details.2",
      ],
      additionalInfoKey: "projects.cards.apishop.additionalInfo",
      stack: [
        { label: "Vite", Icon: VitejsOriginal },
        { label: "TypeScript", Icon: TypescriptOriginal },
        { label: ".NET Core", Icon: DotnetcoreOriginal },
      ],
    },
    {
      img: "/img/projects/taskflow.png",
      titleKey: "projects.cards.taskflow.title",
      descriptionKey: "projects.cards.taskflow.description",
      dateKey: "projects.cards.taskflow.date",
      link_site: "https://taskflow.buathier-tom.fr/",
      link_github: "https://github.com/BuathierTom/TaskFlow",
      detailsKeys: [
        "projects.cards.taskflow.details.0",
        "projects.cards.taskflow.details.1",
        "projects.cards.taskflow.details.2",
      ],
      additionalInfoKey: "projects.cards.taskflow.additionalInfo",
      stack: [
        { label: "Vite", Icon: VitejsOriginal },
        { label: "TypeScript", Icon: TypescriptOriginal },
        { label: "React", Icon: ReactOriginal },
      ],
    },
    {
      img: "/img/projects/reserve.png",
      titleKey: "projects.cards.reserve.title",
      descriptionKey: "projects.cards.reserve.description",
      dateKey: "projects.cards.reserve.date",
      link_site: "https://reserveton-logis.vercel.app/",
      link_github: "https://github.com/BuathierTom/ReserveTonLogis/",
      detailsKeys: [
        "projects.cards.reserve.details.0",
        "projects.cards.reserve.details.1",
        "projects.cards.reserve.details.2",
      ],
      additionalInfoKey: "projects.cards.reserve.additionalInfo",
      stack: [
        { label: "React", Icon: ReactOriginal },
        { label: "Sass", Icon: SassOriginal },
        { label: "Node.js", Icon: NodejsOriginal },
        { label: "MongoDB", Icon: MongodbOriginal },
      ],
    },
    {
      img: "/img/projects/portfolio.png",
      titleKey: "projects.cards.portfolio.title",
      descriptionKey: "projects.cards.portfolio.description",
      dateKey: "projects.cards.portfolio.date",
      link_site: "https://buathier-tom.fr/",
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
