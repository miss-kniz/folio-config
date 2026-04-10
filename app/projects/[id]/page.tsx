import Navbar from "@/components/Navbar";
import Heading from "@/components/ui/Heading";
import { SimplePara } from "@/components/ui/SubHeadingContainer";
import { ProjectItem, projects } from "@/config/user-data/projects";

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id));
  const labels: (keyof ProjectItem)[] = ["role", "context", "period"];

  return (
    <section className=" ">
      <div
        className="h-screen place-items-center bg-primary-light w-full bg-cover bg-center relative"
        style={
          project?.bgImageUrl
            ? { backgroundImage: `url(/${project.bgImageUrl})` }
            : undefined
        }
      >
        <div className="h-full w-full bg-linear-to-t from-background via-background/50 to-background/50 flex flex-col items-center justify-between py-10">
          <div className="w-full">
            <Navbar showNavLinks={false} navBgOpacity={""} />
          </div>
          <div>
            <Heading
              normalText={project?.title || "Project Not Found"}
              as="h1"
              className="text-center"
            />
            <p className=" tracking-wider text-lg">
              {project?.description || "No description available."}
            </p>
          </div>
          <div className="flex items-center justify-between w-full max-w-7xl px-4">
            {labels.map((label) => {
              const value = project?.[label] || "Not specified";
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

      <div className="max-w-7xl"></div>
    </section>
  );
}
