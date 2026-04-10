import { TECH_STACK } from "@/config/user-data/projects";
import Heading from "./Heading";
import { NavigationArrow } from "phosphor-react";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  title: string;
  description?: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  id: number;
}

// Highlight important techs
const highlightTechs = [
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

export default function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
  liveUrl,
  id,
}: ProjectCardProps) {
  const router = useRouter();
  const navigateToProject = (id: number) => {
    router.push(`/projects/${id}`);
  };
  return (
    <div
      className="group relative bg-glass rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full flex flex-col items-start cursor-pointer"
      onClick={() => navigateToProject(id)}
    >
      {/* Image */}
      <div className="relative w-full h-fit px-2 m-2 overflow-hidden rounded-lg group mx-auto">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View Live Project"
            className="absolute text-white right-3 top-3 z-10 flex h-9 w-9 items-center flex-col justify-center rounded-md py-1 bg-primary shadow-md transition-transform duration-200 hover:scale-110"
            onClick={(e) => e.stopPropagation()}
          >
            <NavigationArrow weight="bold" className="h-5 w-5" />
            <span className="text-xs">Live</span>
          </a>
        )}
        <div className="overflow-hidden rounded-xl">
          <img
            src={imageUrl}
            alt={title}
            className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-start gap-2 flex-1 px-6 w-full">
        <Heading as="h4" normalText={title} center={false} />
        {description && (
          <p className="text-sm text-black-light flex-1">
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>
        )}

        {/* Technologies as small text chips */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {technologies.map((tech, index) => {
            const isHighlight = highlightTechs.includes(tech);
            return (
              <span
                key={index}
                className={`text-xs font-medium px-2 py-1 rounded-md ${
                  isHighlight
                    ? "bg-primary-light text-primary"
                    : "bg-black-light/10 text-black-light"
                }`}
                title={tech}
              >
                {tech}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
