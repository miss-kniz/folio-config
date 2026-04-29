import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";
import Footer from "@/components/ui/Footer";
import Heading from "@/components/ui/Heading";
import { SimplePara } from "@/components/ui/SubHeadingContainer";
import { highlightTechs, projects } from "@/config/user-data/projects";
import Link from "next/link";

import { Metadata } from "next";
import { Reveal, Stagger, StaggerItem, TextReveal } from "@/components/motion/Reveal";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === String(id));

  if (!project) {
    return { title: "Project Not Found" };
  }

  // Ensure previewImage is a string; fallback to a default if missing
  const previewImage = project.previewImage || "/default-og.png";

  return {
    title: `${project.title} | Miss Kniz Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://mehak-naqvi.vercel.app/projects/${project.id}`,
      images: [
        {
          url: previewImage,
          width: 1200,
          height: 630,
          alt: `${project.title} Case Study`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [previewImage],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const projectIndex = projects.findIndex((p) => p.id === String(id));
  const project = projects[projectIndex];
  const caseStudy = project?.caseStudy;
  const label = project.liveUrl
    ? "Visit website"
    : project.githubUrl
      ? "View code"
      : "Visit website";

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
        {/* ── HERO */}
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
              <Navbar
                backToProjects={true}
                showNavLinks={false}
                fixed={false}
                navBgOpacity={""}
              />
            </div>

            <Reveal delay={0.12} className="flex flex-col items-center gap-3">
              <Heading
                normalText={project.title}
                as="h1"
                className="text-center"
              />
              <SimplePara>
                <TextReveal text={project.description || ""} delay={0.12} />
              </SimplePara>
            </Reveal>

            <Reveal delay={0.2} className="w-full max-w-5xl px-4">
              <Stagger className="flex items-center flex-col lg:flex-row gap-4 mb-8 justify-between w-full">
                {metaLabels.map((label) => {
                  const value = project[label] || "Not specified";
                  const displayLabel =
                    label.charAt(0).toUpperCase() + label.slice(1);
                  return (
                    <StaggerItem key={label} className="font-sans font-bold uppercase">
                      <span className="text-primary">{displayLabel}</span>{" "}
                      {value}
                    </StaggerItem>
                  );
                })}
              </Stagger>
            </Reveal>
          </div>
        </div>

        {/* ── INTRODUCTION — no image */}
        <div className="bg-primary-light">
          <div className="max-w-7xl mx-auto px-4 py-4 relative overflow-hidden">
            <Reveal className="my-12" delay={0.08}>
              <Heading as="h2" highlightText="Introduction" />
              <SimplePara className="max-w-2xl text-center md:text-left">
                <TextReveal text={caseStudy?.introduction || ""} delay={0.14} />
              </SimplePara>
              <div className="mx-auto text-center">
                <Button
                  variant="secondary"
                  className="my-4 md:mb-8"
                  disabled={!(project.liveUrl || project.githubUrl)}
                >
                  <a
                    href={project.liveUrl || project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label}
                    <i className="ri-arrow-right-up-line" />
                  </a>
                </Button>
              </div>
            </Reveal>
            <h3 className="pointer-events-none select-none absolute tracking-tight leading-none text-6xl md:text-[12rem] whitespace-nowrap font-extrabold md:-bottom-20 left-0 -bottom-5 opacity-50 text-primary-dark">
              {project.title}
            </h3>
          </div>
        </div>

        <Reveal className="max-w-5xl mx-auto py-16 px-4 md:grid grid-cols-2 items-center gap-12" delay={0.08}>
          <div>
            <Heading
              as="h3"
              normalText="Project overview"
              className=" uppercase"
              center={false}
            />
            <SimplePara>{caseStudy?.overview}</SimplePara>
            <Stagger className="flex gap-2 mt-6 flex-wrap my-4" stagger={0.04}>
              {project.technologies.map((tech, index) => {
                const isHighlight = highlightTechs.includes(tech);
                return (
                  <StaggerItem
                    key={index}
                    className={`text-xs font-medium px-3 py-1.5 rounded-md font-mono ${
                      isHighlight
                        ? "bg-primary-light text-primary border border-primary/20"
                        : "bg-black-light/10 text-black-light"
                    }`}
                  >
                    {tech}
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
          <div>
            {caseStudy?.overviewImage && (
              <img
                src={caseStudy.overviewImage}
                alt={`${project.title} overview`}
                className="w-full rounded-xl object-cover border border-border"
              />
            )}
          </div>
        </Reveal>

        {/* ── TECHNICAL CHALLENGES — no image */}
        {caseStudy?.challenges && caseStudy.challenges.length > 0 && (
          <div className="bg-primary-light py-16">
            <Reveal className="max-w-5xl mx-auto px-4" delay={0.08}>
              <Heading
                as="h3"
                normalText="Technical challenges"
                className=" uppercase"
              />
              <SimplePara className="max-w-xl mb-8 text-center">
                The problems that required the most thought while building this
                project.
              </SimplePara>
              <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-4" stagger={0.06}>
                {caseStudy.challenges.map((ch, i) => (
                  <StaggerItem
                    key={i}
                    className="bg-background border border-border rounded-xl p-5"
                  >
                    <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
                      {ch.title}
                    </span>
                    <SimplePara className="text-sm text-muted-foreground leading-relaxed">
                      {ch.body}
                    </SimplePara>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>
          </div>
        )}

        {caseStudy?.architecture && (
          <Reveal className="max-w-5xl mx-auto py-16 px-4 md:grid grid-cols-2 items-center gap-12" delay={0.08}>
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

            <div className="max-w-full">
              {caseStudy.architecture?.structure ? (
                <pre className="text-sm font-mono bg-zinc-900 text-zinc-100 p-4 rounded-xl overflow-x-auto whitespace-pre max-w-full">
                  {caseStudy.architecture.structure}
                </pre>
              ) : null}
            </div>
          </Reveal>
        )}

        {/* ── DEVELOPMENT PROCESS — no image */}
        {caseStudy?.process && caseStudy.process.length > 0 && (
          <div className="bg-primary-light py-16">
            <Reveal className="max-w-5xl mx-auto px-4" delay={0.08}>
              <Heading
                as="h3"
                normalText="Development process"
                className=" uppercase"
              />
              <SimplePara className=" text-center">
                How I approached building this from first commit to deployment.
              </SimplePara>
              <Stagger className="space-y-5 max-w-2xl" stagger={0.08}>
                {caseStudy.process.map((step, i) => (
                  <StaggerItem key={i} className="flex gap-5 items-start">
                    <span className="shrink-0 w-7 h-7 rounded-full border border-border bg-background flex items-center justify-center text-xs font-semibold text-primary mt-0.5">
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
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>
          </div>
        )}

        {caseStudy?.features && caseStudy.features.length > 0 && (
          <Reveal className="max-w-5xl mx-auto py-16 px-4" delay={0.08}>
            <Heading
              as="h3"
              normalText="Key features built"
              className=" uppercase"
            />
            <SimplePara className="max-w-xl mb-8 text-center">
              The main modules I built end-to-end on the frontend.
            </SimplePara>
            <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-4" stagger={0.06}>
              {caseStudy.features.map((feat, i) => (
                <StaggerItem
                  key={i}
                  className="border border-border rounded-xl p-5 flex gap-4 items-start"
                >
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center text-primary text-sm font-bold">
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
                </StaggerItem>
              ))}
            </Stagger>
            {caseStudy.featuresImage && (
              <img
                src={caseStudy.featuresImage}
                alt="Features screenshot"
                className="w-full rounded-xl drop-shadow-md object-cover mt-8"
              />
            )}
          </Reveal>
        )}

        {/* ── OUTCOMES — no image */}
        {caseStudy?.outcomes && caseStudy.outcomes.length > 0 && (
          <div className="bg-primary-light text-center py-16">
            <Reveal className="max-w-5xl mx-auto px-4" delay={0.08}>
              <Heading as="h3" normalText="Outcomes" className=" uppercase" />
              <SimplePara className="max-w-xl mb-8">
                What the project delivered.
              </SimplePara>
              <Stagger className="grid grid-cols-2 md:grid-cols-3 gap-4" stagger={0.06}>
                {caseStudy.outcomes.map((item, i) => (
                  <StaggerItem
                    key={i}
                    className="bg-background border border-border rounded-xl p-5"
                  >
                    <p className="text-3xl font-semibold text-foreground">
                      {item.value}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-snug">
                      {item.desc}
                    </p>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>
          </div>
        )}

        {/* ── PREV / NEXT — no image */}
        {(prevProject || nextProject) && (
          <div className="border-t border-border">
            <div className="max-w-5xl mx-auto px-4 py-10 flex justify-between items-center">
              {prevProject ? (
                <Link
                  href={`/projects/${prevProject.id}`}
                  className="group flex flex-col gap-1 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01]"
                >
                  <span className="text-xs tracking-widest uppercase text-muted-foreground">
                    Previous
                  </span>
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors underline decoration-transparent underline-offset-4 group-hover:decoration-primary/40">
                    ← {prevProject.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {nextProject && (
                <Link
                  href={`/projects/${nextProject.id}`}
                  className="group flex flex-col gap-1 text-right transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01]"
                >
                  <span className="text-xs tracking-widest uppercase text-muted-foreground">
                    Next
                  </span>
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors underline decoration-transparent underline-offset-4 group-hover:decoration-primary/40">
                    {nextProject.title} →
                  </span>
                </Link>
              )}
            </div>
          </div>
        )}
      </section>
      <Footer className="mb-0" />
    </>
  );
}
