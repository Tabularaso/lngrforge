import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  // Legal placeholders are intentionally not submitted for indexing.
  return [{ url: `${site.url}/`, changeFrequency: "monthly", priority: 1 }];
}
