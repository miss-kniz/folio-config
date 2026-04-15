import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";
import Footer from "@/components/ui/Footer";
import Heading from "@/components/ui/Heading";
import { SimplePara } from "@/components/ui/SubHeadingContainer";
import {
  highlightTechs,
  ProjectItem,
  projects,
} from "@/config/user-data/projects";
import Link from "next/link";

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const projectIndex = projects.findIndex((p) => p.id === parseInt(id));
  const project = projects[projectIndex];
  const caseStudy = project?.caseStudy;
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  type MetaKeys = "role" | "context" | "period";

  const metaLabels: MetaKeys[] = ["role", "context", "period"];

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <Heading normalText="Project Not Found" as="h1" />
      </section>
    );
  }

  return (
    <>
      <section className="min-h-screen">
        {/* ── HERO
          IMAGE NEEDED: full-bleed product screenshot as background.
          Best choice: the memorial profile page with a real photo loaded.
          File: public/projects/case-study/cherished-lives.png
      */}
        <div
          className="h-screen bg-primary-light w-full bg-cover bg-center relative"
          style={
            caseStudy?.bgImageUrl
              ? { backgroundImage: `url(/${caseStudy.bgImageUrl})` }
              : undefined
          }
        >
          <div className="h-full w-full bg-linear-to-t text-center from-background via-background/50 to-background/50 flex flex-col items-center justify-between">
            <div className="w-full">
              <Navbar showNavLinks={false} fixed={false} navBgOpacity={""} />
            </div>

            <div className="flex flex-col items-center gap-3">
              <Heading
                normalText={project.title}
                as="h1"
                className="text-center"
              />
              <SimplePara>{project.description}</SimplePara>
            </div>

            <div className="flex items-center flex-col lg:flex-row gap-4 mb-8 justify-between w-full max-w-5xl px-4">
              {metaLabels.map((label) => {
                const value = project[label] || "Not specified";
                const displayLabel =
                  label.charAt(0).toUpperCase() + label.slice(1);
                return (
                  <div key={label} className="font-sans font-bold uppercase">
                    <span className="text-primary">{displayLabel}</span> {value}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── INTRODUCTION — no image */}
        <div className="bg-primary-light">
          <div className="max-w-7xl mx-auto px-4 py-4 relative overflow-hidden">
            <div className="my-12">
              <Heading as="h2" highlightText="Introduction" />
              <SimplePara className="max-w-2xl text-center md:text-left">
                {caseStudy?.introduction}
              </SimplePara>
              <div className="mx-auto text-center">
                <Button variant="secondary" className="my-4 md:mb-8">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit website <i className="ri-arrow-right-up-line" />
                  </a>
                </Button>
              </div>
            </div>
            <h3 className="pointer-events-none select-none absolute tracking-tight leading-none text-6xl md:text-[12rem] whitespace-nowrap font-extrabold md:-bottom-20 left-0 -bottom-5 opacity-50 text-primary-dark">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="max-w-5xl mx-auto py-16 px-4 md:grid grid-cols-2 items-center gap-12">
          <div>
            <Heading
              as="h3"
              normalText="Project overview"
              className=" uppercase"
              center={false}
            />
            <SimplePara>{caseStudy?.overview}</SimplePara>
            <div className="flex gap-2 mt-6 flex-wrap">
              {project.technologies.map((tech, index) => {
                const isHighlight = highlightTechs.includes(tech);
                return (
                  <span
                    key={index}
                    className={`text-xs font-medium px-3 py-1.5 rounded-md font-mono ${
                      isHighlight
                        ? "bg-primary-light text-primary border border-primary/20"
                        : "bg-black-light/10 text-black-light"
                    }`}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
          {caseStudy?.overviewImage && (
            <img
              src={caseStudy.overviewImage}
              alt={`${project.title} overview`}
              className="w-full rounded-xl object-cover border border-border"
            />
          )}
        </div>

        {/* ── TECHNICAL CHALLENGES — no image */}
        {caseStudy?.challenges && caseStudy.challenges.length > 0 && (
          <div className="bg-primary-light py-16">
            <div className="max-w-5xl mx-auto px-4">
              <Heading
                as="h3"
                normalText="Technical challenges"
                className=" uppercase"
              />
              <SimplePara className="max-w-xl mb-8 text-center">
                The problems that required the most thought while building this
                project.
              </SimplePara>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.challenges.map((ch, i) => (
                  <div
                    key={i}
                    className="bg-background border border-border rounded-xl p-5"
                  >
                    <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
                      {ch.title}
                    </span>
                    <SimplePara className="text-sm text-muted-foreground leading-relaxed">
                      {ch.body}
                    </SimplePara>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {caseStudy?.architecture && (
          <div className="max-w-5xl mx-auto py-16 px-4 md:grid grid-cols-2 items-center gap-12">
            <div>
              <Heading
                as="h3"
                normalText="Architecture"
                className="text-left uppercase"
              />
              <SimplePara className="mb-6">
                {caseStudy.architecture?.description}
              </SimplePara>
            </div>

            {caseStudy.architecture?.structure ? (
              <pre className="text-sm font-mono bg-primary-light border border-primary p-4 rounded-xl whitespace-pre">
                {caseStudy.architecture.structure}
              </pre>
            ) : null}
          </div>
        )}

        {/* ── DEVELOPMENT PROCESS — no image */}
        {caseStudy?.process && caseStudy.process.length > 0 && (
          <div className="bg-primary-light py-16">
            <div className="max-w-5xl mx-auto px-4">
              <Heading
                as="h3"
                normalText="Development process"
                className=" uppercase"
              />
              <SimplePara className=" text-center">
                How I approached building this from first commit to deployment.
              </SimplePara>
              <ol className="space-y-5 max-w-2xl">
                {caseStudy.process.map((step, i) => (
                  <li key={i} className="flex gap-5 items-start">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full border border-border bg-background flex items-center justify-center text-xs font-semibold text-primary mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">
                        {step.title}
                      </p>
                      <SimplePara className="text-sm text-muted-foreground leading-relaxed">
                        {step.body}
                      </SimplePara>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}

        {caseStudy?.features && caseStudy.features.length > 0 && (
          <div className="max-w-5xl mx-auto py-16 px-4">
            <Heading
              as="h3"
              normalText="Key features built"
              className=" uppercase"
            />
            <SimplePara className="max-w-xl mb-8 text-center">
              The main modules I built end-to-end on the frontend.
            </SimplePara>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy.features.map((feat, i) => (
                <div
                  key={i}
                  className="border border-border rounded-xl p-5 flex gap-4 items-start"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center text-primary text-sm font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">
                      {feat.title}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feat.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {caseStudy.featuresImage && (
              <img
                src={caseStudy.featuresImage}
                alt="Features screenshot"
                className="w-full rounded-xl object-cover mt-8"
              />
            )}
          </div>
        )}

        {/* ── OUTCOMES — no image */}
        {caseStudy?.outcomes && caseStudy.outcomes.length > 0 && (
          <div className="bg-primary-light text-center py-16">
            <div className="max-w-5xl mx-auto px-4">
              <Heading as="h3" normalText="Outcomes" className=" uppercase" />
              <SimplePara className="max-w-xl mb-8">
                What the project delivered.
              </SimplePara>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {caseStudy.outcomes.map((item, i) => (
                  <div
                    key={i}
                    className="bg-background border border-border rounded-xl p-5"
                  >
                    <p className="text-3xl font-semibold text-foreground">
                      {item.value}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── PREV / NEXT — no image */}
        {(prevProject || nextProject) && (
          <div className="border-t border-border">
            <div className="max-w-5xl mx-auto px-4 py-10 flex justify-between items-center">
              {prevProject ? (
                <Link
                  href={`/projects/${prevProject.id}`}
                  className="group flex flex-col gap-1"
                >
                  <span className="text-xs tracking-widest uppercase text-muted-foreground">
                    Previous
                  </span>
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    ← {prevProject.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {nextProject && (
                <Link
                  href={`/projects/${nextProject.id}`}
                  className="group flex flex-col gap-1 text-right"
                >
                  <span className="text-xs tracking-widest uppercase text-muted-foreground">
                    Next
                  </span>
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {nextProject.title} →
                  </span>
                </Link>
              )}
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}
