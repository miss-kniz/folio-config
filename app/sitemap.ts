import { MetadataRoute } from "next";
import { projects } from "@/config/user-data/projects";
import { BASE_URL } from "./layout";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BASE_URL;

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
