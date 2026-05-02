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
    const [showAll, setShowAll] = useState(false);
    const [isNavigating, setIsNavigating] = useState(false);

    // client-only responsive state (safe)
    const [windowWidth, setWindowWidth] = useState<number | null>(null);

    // -----------------------------
    // Window tracking (client only)
    // -----------------------------
    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    // -----------------------------
    // Reset on navigation to projects
    // -----------------------------
    useEffect(() => {
      if (window.location.hash === "#projects") {
        setShowAll(false);
      }
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
    // SSR-safe default count
    // -----------------------------
    const defaultCount = windowWidth !== null && windowWidth >= 1024 ? 3 : 2;

    const visibleProjects = showAll
      ? filteredProjects
      : filteredProjects.slice(0, defaultCount);

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const isHidden = !showAll && index >= defaultCount;

              return (
                <div
                  key={project.id}
                  className={isHidden ? "sr-only" : "block"} // sr-only keeps it in DOM but invisible
                >
                  <ProjectCard {...project} />
                </div>
              );
            })}
          </div>

          {/* SEE MORE BUTTON */}
          {filteredProjects.length > defaultCount && (
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
