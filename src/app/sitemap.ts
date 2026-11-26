import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

export const dynamic = "force-static";

/** Páginas em português e o par em inglês (hreflang). Textos do Caderno ainda em rascunho ficam de fora. */
const PARES: [string, string][] = [
  ["/", "/en/"],
  ["/sobre/", "/en/about/"],
  ["/atendimento/", "/en/therapy/"],
  ["/pesquisas/", "/en/research/"],
  ["/caderno/", "/en/notebook/"],
  ["/caderno/destinos/", "/en/notebook/destinos/"],
  ["/caderno/intercambios/", "/en/notebook/intercambios/"],
  ["/caderno/discos/", "/en/notebook/discos/"],
  ["/contato/", "/en/contact/"],
  ["/creditos/", "/en/credits/"],
];

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
