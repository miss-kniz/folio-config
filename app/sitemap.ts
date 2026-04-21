import { MetadataRoute } from "next";
import { projects } from "@/config/user-data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mehak-naqvi.vercel.app";

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...projectUrls,
  ];
}
