import {
  CaseStudy,
  cherishedLivesCaseStudy,
} from "./case-study/cherished-lives";
import { echomeCaseStudy } from "./case-study/echome";
import { leadlyftCaseStudy } from "./case-study/leadlyft";
import { likhSpireCaseStudy } from "./case-study/likhSpire";
import { prepAndPlateCaseStudy } from "./case-study/prep&plate";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  categories: string[];
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  isClientProject?: boolean;
  result?: string;
  bgImageUrl?: string;
  role?: string;
  context?: string;
  period?: string;
  introduction?: string;
  caseStudy?: CaseStudy;
  previewImage?: string;
}

export const TECH_STACK = {
  react: "React",
  "redux toolkit": "Redux Toolkit",
  "rtk query": "RTK Query",
  "rtk thunks": "RTK Thunks",
  prisma: "Prisma",
  "next.js": "Next.js",
  nodejs: "Node.js",
  "express js": "Express",
  express: "Express",
  postgresql: "PostgreSQL",
  tailwind: "Tailwind",
  css: "CSS",
  html: "HTML",
  javascript: "JavaScript",
  typescript: "TypeScript",
  axios: "Axios",
  mui: "MUI",
  pusher: "Pusher",
  bootstrap: "Bootstrap",
  shadcn: "Shadcn UI",
  nextauth: "NextAuth.js",
  nextjs: "Next.js",
  mongodb: "MongoDB",
};

export const projects: ProjectItem[] = [
  {
    id: "echome",
    title: "EchoMe",
    categories: ["Full-stack", "SaaS"],
    imageUrl: "projects/echome-preview.png",
    technologies: [
      TECH_STACK.nextjs,
      TECH_STACK.react,
      TECH_STACK["redux toolkit"],
      TECH_STACK["rtk query"],
      TECH_STACK.typescript,
      TECH_STACK.tailwind,
      TECH_STACK.prisma,
      TECH_STACK.postgresql,
      TECH_STACK.nextauth,
      TECH_STACK.shadcn,
    ],
    liveUrl: "https://echo-me-brown.vercel.app",
    githubUrl: undefined,
    previewImage: "projects/echome-preview.png",
    isClientProject: false,
    role: "Lead Full-Stack Developer",
    period: "2026 – Present",
    context: "SaaS Product",
    description:
      "A resume builder that turns a blank page into a polished, shareable resume in minutes, built for job seekers who need to make a strong first impression.",
    caseStudy: echomeCaseStudy,
  },
  {
    id: "cherished-lives",
    title: "Cherished Lives",
    categories: ["Full-stack", "SaaS"],
    imageUrl: "projects/cherished-lives.png",
    technologies: [
      TECH_STACK.nextjs,
      TECH_STACK.react,
      TECH_STACK["redux toolkit"],
      TECH_STACK["rtk query"],
      TECH_STACK.typescript,
      TECH_STACK.tailwind,
      TECH_STACK.prisma,
      TECH_STACK.mongodb,
      TECH_STACK.nextauth,
      TECH_STACK.express,
    ],
    liveUrl:
      "https://app.cherishedlives.com/dashboard/profiles/6981db020d6f16bc1fa6dc15",
    githubUrl: undefined,
    previewImage: "projects/cherished-lives-preview.png",
    isClientProject: true,
    description:
      "A multi-tenant memorial platform built sole-developer across 3 apps (public site, admin UI, and admin API) with multilingual support and white-label architecture.",
    role: "Full-stack Developer",
    context: "Web application development",
    period: "2025 – Present",
    caseStudy: cherishedLivesCaseStudy,
  },
  {
    id: "leadlyft",
    title: "LeadLyft",
    categories: ["Full-stack", "SaaS"],
    imageUrl: "projects/3.webp",
    technologies: [
      TECH_STACK.react,
      TECH_STACK["redux toolkit"],
      TECH_STACK["rtk query"],
      TECH_STACK.pusher,
      TECH_STACK.css,
      TECH_STACK.prisma,
      TECH_STACK.mui,
      TECH_STACK.tailwind,
      TECH_STACK.nodejs,
      TECH_STACK.express,
    ],
    liveUrl: "https://leadlyft.com/",
    githubUrl: undefined,
    previewImage: "projects/leadlyft-preview-v3.png",
    isClientProject: true,
    description:
      "A coaching SaaS built for a life coach who needed a real product to manage 500+ clients and sell enterprise plans to companies.",
    role: "Frontend-focused full-stack Developer",
    context: "Website development",
    period: "Early 2025",
    caseStudy: leadlyftCaseStudy,
  },
  {
    id: "prep-and-plate",
    title: "Prep & Plate",
    categories: ["Frontend", "SaaS"],
    imageUrl: "projects/prep-plate.webp",
    previewImage: "projects/prep-plate-preview.png",
    technologies: [
      TECH_STACK.tailwind,
      TECH_STACK["redux toolkit"],
      TECH_STACK["rtk thunks"],
      TECH_STACK.react,
    ],
    role: "Responsive Frontend",
    period: "Late 2024",
    context: "Desktop → Mobile UX",
    description:
      "Contract frontend role: transformed a desktop-only meal planning SaaS into a fully responsive mobile experience.",
    caseStudy: prepAndPlateCaseStudy,
  },
  {
    id: "linkspire",
    title: "LinkSpire",
    categories: ["Full-stack"],
    imageUrl: "projects/likhspire.webp",
    technologies: [
      TECH_STACK.html,
      TECH_STACK.bootstrap,
      TECH_STACK.javascript,
      TECH_STACK.nodejs,
      TECH_STACK.express,
      TECH_STACK.postgresql,
      "REST API",
      "UI design",
    ],
    liveUrl: undefined,
    githubUrl:
      "https://github.com/miss-kniz/LikhSpire/blob/main/screenshots/demo.gif",
    previewImage: "projects/likhspire-preview.png",
    isClientProject: false,
    role: "Full-stack Developer",
    period: "Mid 2025",
    context: "Blogging platform",
    description:
      "Personal full-stack project: a blogging platform built from scratch with Express, PostgreSQL, and a hand-crafted Bootstrap frontend.",
    caseStudy: likhSpireCaseStudy,
  },
];

// Highlight important techs
export const highlightTechs = [
  TECH_STACK.react,
  TECH_STACK.prisma,
  TECH_STACK["next.js"],
  TECH_STACK["redux toolkit"],
  TECH_STACK["rtk query"],
  TECH_STACK.nodejs,
  TECH_STACK.postgresql,
  TECH_STACK.express,
  TECH_STACK.typescript,
  TECH_STACK["express js"],
  "UI design",
];
