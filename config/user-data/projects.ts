export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  categories: string[]; // instead of single serviceType
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  isClientProject?: boolean;
  result?: string;
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
};

export const projects: ProjectItem[] = [
  {
    id: 1,
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
    description: "- Coaching platform for C-level workers",
  },
  {
    id: 2,
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
    description: "- Blogging CRUD platform",
  },
  {
    id: 3,
    title: "Prep & Plate",
    categories: ["Full-stack", "SaaS"],
    imageUrl: "projects/prep-plate.webp",
    technologies: [
      TECH_STACK.tailwind,
      TECH_STACK["redux toolkit"],
      TECH_STACK["rtk thunks"],
      TECH_STACK.react,
      TECH_STACK["express js"],
      TECH_STACK.prisma,
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    isClientProject: false,
    description: "- Recipe and meal planning SaaS",
  },
  {
    id: 4,
    title: "Amazon Clone",
    categories: ["Frontend"],
    imageUrl: "projects/amazon-clone.png",
    technologies: [TECH_STACK.html, TECH_STACK.css, TECH_STACK.javascript],
    liveUrl: "https://amazon-clone-rho-steel-34.vercel.app/",
    githubUrl: "https://github.com/miss-kniz/Amazon",
    isClientProject: false,
    description: "- E-commerce UI clone",
  },
  {
    id: 5,
    title: "Cherished Lives",
    categories: ["Frontend", "Figma to Code"],
    imageUrl: "services/figma-to-code.webp",
    technologies: [
      TECH_STACK["next.js"],
      TECH_STACK.typescript,
      TECH_STACK.tailwind,
    ],
    liveUrl: "https://app.cherishedlives.com",
    githubUrl: undefined,
    isClientProject: true,
    description: "- Memorial platform, implemented pixel-perfect Figma to code",
  },
  {
    id: 6,
    title: "Movie Land",
    categories: ["Frontend"],
    imageUrl: "projects/movie-land.png",
    technologies: [TECH_STACK.react, TECH_STACK.axios],
    liveUrl: "https://movie-app-xi-steel-47.vercel.app/",
    githubUrl: "https://github.com/miss-kniz/Movie-App",
    isClientProject: false,
    description: "- Real-time movie search app",
  },
];
