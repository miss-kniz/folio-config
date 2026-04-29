import { highlightTechs } from "@/config/user-data/projects";
import Heading from "./Heading";
import { NavigationArrow } from "phosphor-react";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description?: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  id: string;
  githubUrl?: string;
  onNavigate?: () => void;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
  liveUrl,
  id,
  githubUrl,
  onNavigate,
}: ProjectCardProps) {
  const router = useRouter();
  const reduceMotion = useReducedMotion() ?? false;

  const navigateToProject = (id: string) => {
    onNavigate?.();

    setTimeout(() => {
      router.push(`/projects/${id}`);
    }, 150);
  };

  return (
    <motion.div
      className="group relative bg-glass rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full flex flex-col items-start cursor-pointer"
      onClick={() => navigateToProject(id)}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      whileTap={reduceMotion ? undefined : { scale: 0.995 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Image */}
      <div className="relative w-full h-fit px-2 m-2 overflow-hidden rounded-lg group mx-auto">
        {(liveUrl || githubUrl) && (
          <a
            href={liveUrl ? liveUrl : githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View Live Project"
            className="absolute text-white right-3 top-3 z-10 flex h-9 w-9 items-center flex-col justify-center rounded-md py-1 bg-primary shadow-md transition-transform duration-200 hover:scale-110"
            onClick={(e) => e.stopPropagation()}
          >
            <NavigationArrow weight="bold" className="h-5 w-5" />
            <span className="text-xs">{liveUrl ? "Live" : "Code"}</span>
          </a>
        )}
        <div className="overflow-hidden rounded-xl">
          <img
            src={imageUrl}
            alt={`Mehak Fatima naqvi (miss kniz)'s Project ${title}`}
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
        <div className="flex gap-2 mb-1 flex-wrap">
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

        <div className="mb-4 flex items-center justify-between w-full">
          <span className="text-xs font-medium bg-primary text-white rounded-md p-1 flex items-start gap-1">
            Click to explore <i className="ri-arrow-right-long-fill"></i>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
