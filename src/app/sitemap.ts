import { MetadataRoute } from "next";
import { resources } from "@/lib/resources";

type ChangeFrequency = "weekly" | "monthly" | "always" | "hourly" | "daily" | "yearly" | "never";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://liquidglass-showcase.example.com";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 1,
    },
    {
      url: `${baseUrl}/mobile`,
      lastModified: new Date(),
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/web`,
      lastModified: new Date(),
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/design`,
      lastModified: new Date(),
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 0.8,
    },
  ];

  // Resource detail pages
  const resourcePages: MetadataRoute.Sitemap = resources.map((resource) => ({
    url: `${baseUrl}/resources/${resource.slug}`,
    lastModified: new Date(resource.dateAdded),
    changeFrequency: "monthly" as ChangeFrequency,
    priority: 0.7,
  }));

  return [...staticPages, ...resourcePages];
}
