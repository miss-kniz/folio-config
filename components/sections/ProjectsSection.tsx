"use client";

import { useState, useEffect, forwardRef, Ref } from "react";
import { Lightbulb } from "phosphor-react";

import Heading from "../ui/Heading";
import SubHeadingContainer, { SimplePara } from "../ui/SubHeadingContainer";
import ProjectCard from "../ui/ProjectCard";
import { projects, ProjectItem } from "@/config/user-data/projects";
import Button from "../ui/Button";
import Loader from "../ui/Loader";

const ProjectsSection = forwardRef<HTMLElement, object>(
  (props, ref: Ref<HTMLElement>) => {
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [windowWidth, setWindowWidth] = useState(0);
    const [showAll, setShowAll] = useState(false);
    const [isNavigating, setIsNavigating] = useState(false);

    // -----------------------------
    // Window resize tracking
    // -----------------------------
    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    // -----------------------------
    // Reset when coming via hash navigation
    // -----------------------------
    useEffect(() => {
      const handleHashChange = () => {
        if (window.location.hash === "#projects") {
          setShowAll(false);
        }
      };

      window.addEventListener("hashchange", handleHashChange);
      handleHashChange();

      return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    // -----------------------------
    // Categories
    // -----------------------------
    const allCategories = Array.from(
      new Set(projects.flatMap((p) => p.categories)),
    );

    const filterOptions = ["All", ...allCategories];

    const filteredProjects =
      selectedFilter === "All"
        ? projects
        : projects.filter((p) => p.categories.includes(selectedFilter));

    // -----------------------------
    // Responsive default count
    // -----------------------------
    const getDefaultCount = () => {
      if (windowWidth >= 1024) return 3; // desktop
      return 2; // mobile + tablet
    };

    const visibleProjects = showAll
      ? filteredProjects
      : filteredProjects.slice(0, getDefaultCount());

    // -----------------------------
    // UI
    // -----------------------------
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

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {filteredProjects.map((project: ProjectItem, index) => {
              const defaultCount = windowWidth >= 1024 ? 3 : 2;

              // ONLY render limited items unless showAll is true
              if (!showAll && index >= defaultCount) return null;

              return (
                <div key={project.id}>
                  <ProjectCard
                    {...project}
                    onNavigate={() => setIsNavigating(true)}
                  />
                </div>
              );
            })}
          </div>

          {/* SEE MORE BUTTON */}
          {filteredProjects.length > getDefaultCount() && (
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
