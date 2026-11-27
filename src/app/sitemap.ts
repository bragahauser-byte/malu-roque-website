import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";
import { PARES } from "@/lib/seo";

export const dynamic = "force-static";


export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();
  return PARES.flatMap(([pt, en]) => {
    const languages = { "pt-BR": SITE_URL + pt, en: SITE_URL + en };
    return [
      { url: SITE_URL + pt, lastModified: agora, alternates: { languages } },
      { url: SITE_URL + en, lastModified: agora, alternates: { languages } },
    ];
  });
}
