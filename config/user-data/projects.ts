import { amazonCaseStudy } from "./case-study/amazon-clone";
import {
  CaseStudy,
  cherishedLivesCaseStudy,
} from "./case-study/cherished-lives";
import { leadlyftCaseStudy } from "./case-study/leadlyft";
import { likhSpireCaseStudy } from "./case-study/likhSpire";
import { movieLandCaseStudy } from "./case-study/movie-app";
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
};

export const projects: ProjectItem[] = [
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
    liveUrl: "https://app.leadlyft.com",
    githubUrl: undefined,
    isClientProject: true,
    description:
      "A coaching platform for executives to improve work and life performance.",
    role: "Frontend-focused full-stack Developer",
    context: "Website development",
    period: "Early 2025",
    caseStudy: leadlyftCaseStudy,
  },
  {
    id: "cherished-lives",
    title: "Cherished Lives",
    categories: ["Frontend", "Figma to Code"],
    imageUrl: "projects/cherished-lives.png",
    technologies: [
      TECH_STACK["next.js"],
      TECH_STACK.typescript,
      TECH_STACK.tailwind,
      TECH_STACK.shadcn,
      TECH_STACK.react,
    ],
    liveUrl:
      "https://app.cherishedlives.com/dashboard/profiles/6981db020d6f16bc1fa6dc15",
    githubUrl: undefined,
    isClientProject: true,
    description:
      "An online memorial platform where users can keep the memories of loved ones.",
    role: "Frontend Developer",
    context: "Website development",
    period: "Late 2025",
    caseStudy: cherishedLivesCaseStudy,
  },

  {
    id: "prep-and-plate",
    title: "Prep & Plate",
    categories: ["Frontend", "SaaS"],
    imageUrl: "projects/prep-plate.webp",
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
      "A web app that helps users plan daily meals and recipes easily.",
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
    isClientProject: false,
    role: "Full-stack Developer",
    period: "Mid 2025",
    context: "Blogging platform",
    description:
      "A blogging platform where users can write, edit, and share posts.",
    caseStudy: likhSpireCaseStudy,
  },
  {
    id: "amazon-clone",
    title: "Amazon Clone",
    categories: ["Frontend"],
    imageUrl: "projects/amazon-clone.png",
    technologies: [TECH_STACK.html, TECH_STACK.css, TECH_STACK.javascript],
    liveUrl: "https://amazon-clone-rho-steel-34.vercel.app/",
    githubUrl: "https://github.com/miss-kniz/Amazon",
    isClientProject: false,
    description: "A demo website that mimics Amazon’s layout",
    role: "Frontend Developer",
    period: "Mid 2024",
    context: "E-commerce platform clone",
    caseStudy: amazonCaseStudy,
  },
  {
    id: "movie-land",
    title: "Movie Land",
    categories: ["Frontend"],
    imageUrl: "projects/movie-land.png",
    technologies: [TECH_STACK.react, TECH_STACK.axios],
    liveUrl: "https://movie-app-xi-steel-47.vercel.app/",
    githubUrl: "https://github.com/miss-kniz/Movie-App",
    isClientProject: false,
    description: "A web app to search and browse movies in real-time.",
    role: "Frontend Developer",
    period: "Early 2024",
    context: "Movie search platform",
    caseStudy: movieLandCaseStudy,
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
