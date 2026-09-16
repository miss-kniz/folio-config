"use client";

import { useState, forwardRef, Ref } from "react";
import { Lightbulb } from "phosphor-react";

import Heading from "../ui/Heading";
import SubHeadingContainer, { SimplePara } from "../ui/SubHeadingContainer";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/config/user-data/projects";
import Button from "../ui/Button";
import Loader from "../ui/Loader";


const ProjectsSection = forwardRef<HTMLElement, { showAllByDefault?: boolean }>(
  ({ showAllByDefault = false }, ref: Ref<HTMLElement>) => {
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [showAll, setShowAll] = useState(showAllByDefault);
    const [isNavigating, setIsNavigating] = useState(false);

    const allCategories = Array.from(
      new Set(projects.flatMap((p) => p.categories)),
    );

    const filterOptions = ["All", ...allCategories];

    const filteredProjects =
      selectedFilter === "All"
        ? projects
        : projects.filter((p) => p.categories.includes(selectedFilter));

    return (
      <section id="projects" ref={ref}>
        <div className="max-w-7xl mx-auto md:py-4 p-2">
          {/* HEADER */}
          <div className="text-center my-2">
            <SubHeadingContainer>
              <div className="flex items-center gap-2 justify-center">
                <span className="inline-block py-1 px-2 rounded-full bg-white">
                  <Lightbulb
                    weight="fill"
                    className="w-4 h-4 text-yellow-500"
                  />
                </span>
                <span className="font-medium text-gray-700 uppercase tracking-wide">
                  Projects Section
                </span>
              </div>
            </SubHeadingContainer>

            <Heading
              as="h2"
              normalText="Here's My"
              highlightText="Selected Work"
            />

            <SimplePara className="mt-2">
              A few examples of products and platforms I&apos;ve helped bring to
              life.
            </SimplePara>
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap justify-start md:justify-center gap-2 mb-3 md:mb-6">
            {filterOptions.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedFilter(category);
                  setShowAll(false);
                }}
                className={`px-4 py-2 text-sm md:text-base rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === category
                    ? "glass-btn-active text-white"
                    : "glass-btn text-black-light"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {isNavigating && <Loader />}

          {/* PROJECT GRID — all projects always in DOM for SEO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={
                  showAll
                    ? "block"
                    : index < 2
                      ? "block"
                      : index === 2
                        ? "hidden md:block"
                        : "hidden"
                }
              >
                <ProjectCard
                  {...project}
                  onNavigate={() => setIsNavigating(true)}
                />
              </div>
            ))}
          </div>

          {/* SEE MORE / SEE LESS */}
          {filteredProjects.length > 2 && (
            <div className="flex justify-center mt-6">
              <Button
                onClick={() => setShowAll((prev) => !prev)}
                variant="ghost"
              >
                {showAll ? "See Less" : "See More"}
              </Button>
            </div>
          )}
        </div>
      </section>
    );
  },
);

ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection;
