export interface ProjectItem
{
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

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "LeadLyft",
    categories: ["Full-stack", "SaaS"],
    imageUrl: "projects/leadlyft.webp",
    technologies: ["React", "Redux Toolkit", "RTK Query", "Pusher", "CSS", "Prisma"],
    liveUrl: "https://app.leadlyft.com",
    githubUrl: undefined,
    isClientProject: true,
    description: "- Coaching platform for C-level workers",
  },
  {
    id: 2,
    title: "LinkSpire",
    categories: ["Full-stack"],
    imageUrl: "projects/linkspire.webp",
    technologies: ["HTML", "Bootstrap", "JavaScript", "Node.js", "Express", "PostgreSQL", "REST API", "UI design"],
    liveUrl: undefined,
    githubUrl: "https://github.com/kaniz-naqvi/LikhSpire",
    isClientProject: false,
    description: "- Blogging CRUD platform",
  },
  {
    id: 3,
    title: "Prep & Plate",
    categories: ["Full-stack", "SaaS"],
    imageUrl: "projects/prep-plate.webp",
    technologies: ["Tailwind", "Redux Toolkit", "RTK Thunks", "React", "Express js", "Prisma"],
    liveUrl: undefined,
    githubUrl: undefined,
    isClientProject: false,
    description: "- Recipe and meal planning SaaS",
  },
  {
    id: 4,
    title: "Amazon Clone",
    categories: ["Frontend"],
    imageUrl: "projects/amazon-clone.webp",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://kaniz-naqvi.github.io/Amazon/",
    githubUrl: "https://github.com/kaniz-naqvi/Amazon",
    isClientProject: false,
    description: "- E-commerce UI clone",
  },
  {
    id: 5,
    title: "Cherished Lives",
    categories: ["Frontend", "Figma to Code"],
    imageUrl: "services/figma-to-code.webp",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://app.cherishedlives.com",
    githubUrl: undefined,
    isClientProject: true,
    description: "- Memorial platform, implemented pixel-perfect Figma to code",
  },
  {
    id: 6,
    title: "Movie Land",
    categories: ["Frontend"],
    imageUrl: "projects/movie-land.webp",
    technologies: ["React", "Axios"],
    liveUrl: "https://movie-app-xi-steel-47.vercel.app/",
    githubUrl: "https://github.com/kaniz-naqvi/Movie-App",
    isClientProject: false,
    description: "- Real-time movie search app",
  },
];