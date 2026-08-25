import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://meomureuda-partners.vercel.app",
      lastModified: new Date("2026-08-25"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://meomureuda-partners.vercel.app/en",
      lastModified: new Date("2026-08-26"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
