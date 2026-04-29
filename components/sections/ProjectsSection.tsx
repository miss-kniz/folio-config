"use client";

import { useState, useEffect, forwardRef, Ref } from "react";
import { Lightbulb } from "phosphor-react";

import Heading from "../ui/Heading";
import SubHeadingContainer, { SimplePara } from "../ui/SubHeadingContainer";
import ProjectCard from "../ui/ProjectCard";
import { projects, ProjectItem } from "@/config/user-data/projects";
import Button from "../ui/Button";
import Loader from "../ui/Loader";
import { Reveal, Stagger, StaggerItem } from "../motion/Reveal";

const ProjectsSection = forwardRef<HTMLElement, object>(
  (props, ref: Ref<HTMLElement>) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const allCategories = Array.from(new Set(projects.flatMap((p) => p.categories)));
  const filterOptions = ["All", ...allCategories];

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(selectedFilter));

  const visibleCount = showAll ? filteredProjects.length : windowWidth >= 1024 ? 3 : 2;

  return (
    <section id="projects" ref={ref}>
      <div className="max-w-7xl mx-auto md:py-4 p-2">
        {/* Header */}
        <div className="text-center my-2">
          <Reveal delay={0.05}>
            <SubHeadingContainer>
              <div className="flex items-center gap-2 relative justify-center">
                <span className="inline-block py-1 px-2 rounded-full bg-white">
                  <Lightbulb weight="fill" className="w-4 h-4 text-yellow-500" />
                </span>
                <span className="font-medium text-gray-700 uppercase tracking-wide">
                  Projects Section
                </span>
              </div>
            </SubHeadingContainer>
          </Reveal>

          <Reveal delay={0.12}>
            <Heading
              as="h2"
              normalText="Here's My"
              highlightText="Selected Work"
            />
          </Reveal>

          <Reveal delay={0.18}>
            <SimplePara className="mt-2">
              A few examples of products and platforms I&apos;ve helped bring to life.
            </SimplePara>
          </Reveal>
        </div>

        {/* Filter Buttons */}
        <Reveal delay={0.24}>
          <div className="flex flex-wrap justify-start md:justify-center gap-2 mb-3 md:mb-6">
            {filterOptions.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedFilter(category);
                  setShowAll(false);
                }}
                className={`px-4 text-sm md:text-base py-2 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] ${
                  selectedFilter === category
                    ? "glass-btn-active text-white"
                    : "glass-btn text-black-light"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        {isNavigating && <Loader />}

        {/* Projects Grid */}
        <Stagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
          stagger={0.08}
          amount={0.15}
        >
          {filteredProjects.slice(0, visibleCount).map((project: ProjectItem) => (
            <StaggerItem key={project.id}>
              <ProjectCard
                onNavigate={() => setIsNavigating(true)}
                {...project}
              />
            </StaggerItem>
          ))}
        </Stagger>

        {/* See More / See Less Button */}
        {filteredProjects.length > (windowWidth >= 1024 ? 3 : 2) && (
          <Reveal className="flex justify-center mt-6" delay={0.28}>
            <Button onClick={() => setShowAll(!showAll)} variant="ghost">
              {showAll ? "See Less" : "See More"}
            </Button>
          </Reveal>
        )}
      </div>
    </section>
  );
});

ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection;
