import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hilltoneresortmanali.in",
      lastModified: new Date(),
    },
  ];
}