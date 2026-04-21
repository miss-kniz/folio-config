"use client";
import { useState, useEffect, forwardRef, Ref } from "react";
import Heading from "../ui/Heading";
import SubHeadingContainer, { SimplePara } from "../ui/SubHeadingContainer";
import { Lightbulb } from "phosphor-react";
import ProjectCard from "../ui/ProjectCard";
import { projects, ProjectItem } from "@/config/user-data/projects";
import Button from "../ui/Button";

const ProjectsSection = forwardRef<HTMLElement, {}>(
  (props, ref: Ref<HTMLElement>) => {
    const [selectedFilter, setSelectedFilter] = useState<string>("All");
    const [visibleCount, setVisibleCount] = useState<number>(2); // default for mobile
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [showAll, setShowAll] = useState<boolean>(false);

    // Detect window width for responsive default visible count
    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      handleResize(); // initialize
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
      if (!showAll) {
        if (windowWidth >= 1024)
          setVisibleCount(3); // lg
        else setVisibleCount(2); // md & sm
      } else {
        setVisibleCount(filteredProjects.length);
      }
    }, [windowWidth, showAll]);

    // Gather unique categories from all projects
    const allCategories = Array.from(
      new Set(projects.flatMap((p) => p.categories)),
    );
    const filterOptions = ["All", ...allCategories];

    // Filter projects based on selected category
    const filteredProjects =
      selectedFilter === "All"
        ? projects
        : projects.filter((p) => p.categories.includes(selectedFilter));

    const handleCardClick = (projectId: number) => {
      console.log("Clicked project:", projectId);
      // Later: Open modal or navigate to case study page
    };

    return (
      <section id="projects" ref={ref}>
        <div className="max-w-7xl mx-auto md:py-4 p-2">
          {/* Header */}
          <div className="text-center my-2">
            <SubHeadingContainer>
              <div className="flex items-center gap-2 relative justify-center">
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
              A few examples of products and platforms I’ve helped bring to
              life.
            </SimplePara>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-start md:justify-center gap-2 mb-3 md:mb-6">
            {filterOptions.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedFilter(category);
                  setShowAll(false); // reset "see more" when filter changes
                }}
                className={`px-4 text-sm md:text-base py-2 rounded-full font-medium ${
                  selectedFilter === category
                    ? "glass-btn-active text-white"
                    : "glass-btn text-black-light"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {filteredProjects
              .slice(0, visibleCount)
              .map((project: ProjectItem) => (
                <ProjectCard key={project.id} {...project} />
              ))}
          </div>

          {/* See More / See Less Button */}
          {filteredProjects.length > (windowWidth >= 1024 ? 3 : 2) && (
            <div className="flex justify-center mt-6">
              <Button onClick={() => setShowAll(!showAll)} variant="ghost">
                {showAll ? "See Less" : "See More"}
              </Button>
            </div>
          )}
        </div>
      </section>
    );
  },
);

export default ProjectsSection;
