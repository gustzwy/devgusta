import {
  HTML5Icon,
  CSS3Icon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NextJsIcon,
  TailwindIcon,
  ShadcnIcon,
  ReactNativeIcon,
  ExpoIcon,
  NodeJsIcon,
  PythonIcon,
  PostgreSQLIcon,
  SupabaseIcon,
  GitGitHubIcon,
  PlaywrightIcon,
  VercelIcon,
  DockerIcon,
} from "./tech-icons";
import { Layout, Smartphone, Server, Workflow } from "lucide-react";
import type { ComponentType } from "react";

export type TechItem = {
  name: string;
  icon: ComponentType<{ className?: string }>;
  color: string;
};

export type TechGroup = {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  isPrimary?: boolean;
  colSpan: string;
  rowSpan?: string;
  techs: TechItem[];
};

export const techGroups: TechGroup[] = [
  {
    id: "frontend",
    title: "Engenharia Frontend",
    description: "Interfaces modernas, responsivas e performáticas.",
    icon: Layout,
    isPrimary: true,
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    rowSpan: "lg:row-span-2",
    techs: [
      { name: "HTML5", icon: HTML5Icon, color: "#E34F26" },
      { name: "CSS3", icon: CSS3Icon, color: "#1572B6" },
      { name: "JavaScript", icon: JavaScriptIcon, color: "#F7DF1E" },
      { name: "TypeScript", icon: TypeScriptIcon, color: "#3178C6" },
      { name: "React", icon: ReactIcon, color: "#61DAFB" },
      { name: "Next.js", icon: NextJsIcon, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: TailwindIcon, color: "#38BDF8" },
      { name: "Shadcn/UI", icon: ShadcnIcon, color: "#00ff9d" },
    ],
  },
  {
    id: "mobile",
    title: "Desenvolvimento Mobile",
    description: "Apps nativos e multiplataforma.",
    icon: Smartphone,
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    techs: [
      { name: "React Native", icon: ReactNativeIcon, color: "#61DAFB" },
      { name: "Expo", icon: ExpoIcon, color: "#FFFFFF" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Dados",
    description: "APIs REST, dados e lógica de servidor.",
    icon: Server,
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    techs: [
      { name: "Node.js", icon: NodeJsIcon, color: "#5FA04E" },
      { name: "Python", icon: PythonIcon, color: "#3776AB" },
      { name: "PostgreSQL", icon: PostgreSQLIcon, color: "#4169E1" },
      { name: "Supabase", icon: SupabaseIcon, color: "#3ECF8E" },
    ],
  },
  {
    id: "tools",
    title: "DevOps, Ferramentas & Automação",
    description: "Versionamento, testes, automação e deploy.",
    icon: Workflow,
    colSpan: "col-span-1 md:col-span-2 lg:col-span-3",
    techs: [
      { name: "Git & GitHub", icon: GitGitHubIcon, color: "#F05032" },
      { name: "Playwright", icon: PlaywrightIcon, color: "#2EAD33" },
      { name: "Vercel", icon: VercelIcon, color: "#FFFFFF" },
      { name: "Docker", icon: DockerIcon, color: "#2496ED" },
    ],
  },
];
