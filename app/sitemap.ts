import { MetadataRoute } from "next";
import { projects } from "@/config/user-data/projects";
import { BASE_URL } from "./layout";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BASE_URL;

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...projectUrls,
  ];
}
