import { FunctionComponent } from "react";
import {
  JavascriptOriginal,
  TypescriptOriginal,
  Html5Original,
  Css3Original,
  PhpOriginal,
  JavaOriginal,
  ReactOriginal,
  NextjsOriginal,
  VitejsOriginal,
  SassOriginal,
  BootstrapOriginal,
  TailwindcssOriginal,
  NodejsOriginal,
  DotnetcoreOriginal,
  MongodbOriginal,
  PostgresqlOriginal,
  SymfonyOriginal,
  KubernetesOriginal,
  DockerOriginal,
  GithubOriginal,
  VscodeOriginal,
  FigmaOriginal,
  AzureOriginal,
  VercelOriginal,
  NotionOriginal,
  InsomniaOriginal,
  SwaggerOriginal,
} from "devicons-react";

export type SkillItem = {
  labelKey: string;
  Icon: FunctionComponent;
};

export type SkillCategory = {
  key: string;
  items: SkillItem[];
};

export const skillCategories: SkillCategory[] = [
  {
    key: "skills.categories.languages",
    items: [
      { labelKey: "skills.items.html", Icon: Html5Original },
      { labelKey: "skills.items.css", Icon: Css3Original },
      { labelKey: "skills.items.javascript", Icon: JavascriptOriginal },
      { labelKey: "skills.items.typescript", Icon: TypescriptOriginal },
      { labelKey: "skills.items.php", Icon: PhpOriginal },
      { labelKey: "skills.items.java", Icon: JavaOriginal },
    ],
  },
  {
    key: "skills.categories.frontend",
    items: [
      { labelKey: "skills.items.react", Icon: ReactOriginal },
      { labelKey: "skills.items.nextjs", Icon: NextjsOriginal },
      { labelKey: "skills.items.vite", Icon: VitejsOriginal },
      { labelKey: "skills.items.sass", Icon: SassOriginal },
      { labelKey: "skills.items.bootstrap", Icon: BootstrapOriginal },
      { labelKey: "skills.items.tailwind", Icon: TailwindcssOriginal },
    ],
  },
  {
    key: "skills.categories.backend",
    items: [
      { labelKey: "skills.items.node", Icon: NodejsOriginal },
      { labelKey: "skills.items.dotnet", Icon: DotnetcoreOriginal },
      { labelKey: "skills.items.symfony", Icon: SymfonyOriginal },
      { labelKey: "skills.items.mongodb", Icon: MongodbOriginal },
      { labelKey: "skills.items.postgresql", Icon: PostgresqlOriginal },
    ],
  },
  {
    key: "skills.categories.devops",
    items: [
      { labelKey: "skills.items.kubernetes", Icon: KubernetesOriginal },
      { labelKey: "skills.items.docker", Icon: DockerOriginal },
      { labelKey: "skills.items.azure", Icon: AzureOriginal },
      { labelKey: "skills.items.vercel", Icon: VercelOriginal },
      { labelKey: "skills.items.swagger", Icon: SwaggerOriginal },
      { labelKey: "skills.items.insomnia", Icon: InsomniaOriginal },
    ],
  },
  {
    key: "skills.categories.tools",
    items: [
      { labelKey: "skills.items.vscode", Icon: VscodeOriginal },
      { labelKey: "skills.items.github", Icon: GithubOriginal },
      { labelKey: "skills.items.notion", Icon: NotionOriginal },
      { labelKey: "skills.items.figma", Icon: FigmaOriginal },
    ],
  },
];
