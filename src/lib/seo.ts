// ─────────────────────────────────────────────────────────────
// BUSCA (Google e afins)
// 1) Pares de página PT ↔ EN: canonical + hreflang de cada página.
// 2) Dados estruturados (JSON-LD): dizem ao Google que o site, o Instagram,
//    o TikTok, o LinkedIn, o TCC da PUC-SP e o artigo do HC são da MESMA
//    pessoa. É isso que monta o "painel" com nome, foto e redes na busca.
// ─────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import { site, siteEn, SITE_URL } from "@/content/site";
import { formacao, pesquisas } from "@/content/perfil";

/** Página em português → a mesma em inglês. */
export const PARES: [string, string][] = [
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

/** Foto usada na prévia de links (WhatsApp, Instagram, LinkedIn) e no painel do Google. */
export const FOTO = { url: `${SITE_URL}/malu-roque.jpg`, largura: 800 };
/** Prévia 1200×630 com nome e foto (gerada a partir do retrato). */
export const PREVIA = `${SITE_URL}/og.jpg`;

/** Acrescenta canonical, hreflang e URL da prévia à metadata de uma página. */
export function comEndereco(meta: Metadata, caminho: string): Metadata {
  const par = PARES.find(([pt, en]) => pt === caminho || en === caminho);
  const languages = par ? { "pt-BR": SITE_URL + par[0], en: SITE_URL + par[1], "x-default": SITE_URL + par[0] } : undefined;
  const en = caminho.startsWith("/en/");
  return {
    ...meta,
    alternates: { canonical: SITE_URL + caminho, languages },
    openGraph: {
      title: `${site.nome} (${site.apelido}) — ${en ? siteEn.profissao : site.profissao}`,
      description: en ? siteEn.descricao : site.descricao,
      siteName: site.nome,
      type: "website",
      locale: en ? "en_US" : "pt_BR",
      alternateLocale: en ? "pt_BR" : "en_US",
      images: [{ url: PREVIA, width: 1200, height: 630, alt: `${site.nome}, ${site.profissao.toLowerCase()}` }],
      ...meta.openGraph,
      url: SITE_URL + caminho,
    },
  };
}

const PESSOA = `${SITE_URL}/#pessoa`;

const instituicoes = {
  puc: {
    "@type": "CollegeOrUniversity",
    name: "Pontifícia Universidade Católica de São Paulo (PUC-SP)",
    alternateName: "PUC-SP",
    url: "https://www.pucsp.br/",
    sameAs: ["https://pt.wikipedia.org/wiki/Pontif%C3%ADcia_Universidade_Cat%C3%B3lica_de_S%C3%A3o_Paulo"],
  },
  hc: {
    "@type": "Hospital",
    name: "Hospital das Clínicas da Faculdade de Medicina da USP (HCFMUSP)",
    alternateName: ["HCFMUSP", "HC FMUSP", "Hospital das Clínicas de São Paulo"],
    url: "https://www.hc.fm.usp.br/",
    sameAs: ["https://pt.wikipedia.org/wiki/Hospital_das_Cl%C3%ADnicas_da_Faculdade_de_Medicina_da_Universidade_de_S%C3%A3o_Paulo"],
  },
  cattolica: {
    "@type": "CollegeOrUniversity",
    name: "Università Cattolica del Sacro Cuore",
    url: "https://www.unicatt.it/",
    sameAs: ["https://pt.wikipedia.org/wiki/Universidade_Cat%C3%B3lica_do_Sagrado_Cora%C3%A7%C3%A3o"],
  },
};

/** Grafo único: site + pessoa + serviço + pesquisas. Vai em todas as páginas (no layout). */
export function dadosEstruturados() {
  const [tcc, artigo] = pesquisas;
  const redes = Object.values(site.redes).map((r) => r.url);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#site`,
        url: `${SITE_URL}/`,
        name: site.nome,
        alternateName: [site.apelido, `${site.nome} — ${site.profissao}`],
        inLanguage: ["pt-BR", "en"],
        publisher: { "@id": PESSOA },
        about: { "@id": PESSOA },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/sobre/#perfil`,
        url: `${SITE_URL}/sobre/`,
        name: `${site.nome} — Sobre`,
        isPartOf: { "@id": `${SITE_URL}/#site` },
        mainEntity: { "@id": PESSOA },
      },
      {
        "@type": "Person",
        "@id": PESSOA,
        name: site.nome,
        givenName: "Maria Luiza",
        familyName: "Roque",
        additionalName: "Dias",
        alternateName: [site.apelido, "Maria Luiza Dias Roque", site.nomeConselho, "Malu Roque Psicóloga", "maluroque.psi"],
        jobTitle: [site.profissao, siteEn.profissao, "Psicóloga junguiana"],
        description: site.descricao,
        url: `${SITE_URL}/`,
        image: { "@type": "ImageObject", url: FOTO.url, width: FOTO.largura, height: FOTO.largura },
        sameAs: [...redes, tcc.link!.url],
        knowsLanguage: ["pt-BR", "en"],
        knowsAbout: ["Psicologia Analítica", "Psicologia junguiana", "Carl Gustav Jung", "Psicoterapia online", "Psicologia Hospitalar", "Arquétipos", "Individuação"],
        homeLocation: { "@type": "Place", name: `${site.cidade}, ${site.estado}, Brasil` },
        alumniOf: [instituicoes.puc, instituicoes.hc, instituicoes.cattolica],
        affiliation: [instituicoes.hc],
        hasOccupation: {
          "@type": "Occupation",
          name: "Psicóloga",
          occupationalCategory: "2515",
          description: "Psicoterapia de orientação junguiana, exclusivamente online, em português e inglês.",
        },
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            name: `CRP ${site.crp}`,
            credentialCategory: "Registro profissional de psicóloga",
            recognizedBy: { "@type": "Organization", name: "Conselho Regional de Psicologia de São Paulo (CRP-06)", url: "https://www.crpsp.org/" },
          },
          ...formacao.slice(0, 2).map((f, i) => ({
            "@type": "EducationalOccupationalCredential",
            name: f.titulo,
            credentialCategory: i === 0 ? "degree" : "Especialização",
            recognizedBy: i === 0 ? instituicoes.puc : instituicoes.hc,
          })),
        ],
        makesOffer: {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Psicoterapia online",
            serviceType: "Atendimento psicológico online",
            availableChannel: { "@type": "ServiceChannel", serviceUrl: `${SITE_URL}/contato/`, availableLanguage: ["pt-BR", "en"] },
            areaServed: [{ "@type": "Country", name: "Brasil" }, "Mundo"],
            provider: { "@id": PESSOA },
          },
        },
      },
      {
        "@type": "ScholarlyArticle",
        "@id": `${SITE_URL}/pesquisas/#tcc`,
        name: tcc.titulo,
        headline: tcc.titulo,
        genre: tcc.tipo,
        datePublished: tcc.ano,
        inLanguage: "pt-BR",
        author: { "@id": PESSOA },
        sourceOrganization: instituicoes.puc,
        keywords: tcc.palavras.join(", "),
        url: tcc.link!.url,
        mainEntityOfPage: `${SITE_URL}/pesquisas/`,
      },
      {
        "@type": "ScholarlyArticle",
        "@id": `${SITE_URL}/pesquisas/#hc`,
        name: artigo.titulo,
        headline: artigo.titulo,
        genre: artigo.tipo,
        datePublished: artigo.ano,
        inLanguage: "pt-BR",
        author: [
          { "@type": "Person", name: "Giovana Gatto Nogueira" },
          { "@id": PESSOA },
          { "@type": "Person", name: "Marina Guimarães da Rocha" },
        ],
        sourceOrganization: instituicoes.hc,
        keywords: artigo.palavras.join(", "),
        mainEntityOfPage: `${SITE_URL}/pesquisas/`,
      },
    ],
  };
}
