// ─────────────────────────────────────────────────────────────
// ACERVO DE OBRAS
// Só obras em domínio público ou sob licença aberta, de acervos
// institucionais. Cada entrada registra a fonte, a licença e o link.
// Os arquivos ficam em public/img/arte/<chave>-<largura>.webp, gerados
// por `npm run imagens` a partir de recursos/arte-originais/.
// A lista completa, com observações de direitos, está em IMAGENS.md
// e na página /creditos/ do site.
//
// v7: saíram as obras de clima pesado (Visão de sonho e Pégaso de Redon,
// Goya, A ilha dos mortos, Olhos fechados em litografia, Munch, Whistler).
// Os originais ficam em recursos/arte-antigas/. `en` guarda o título em
// inglês (o do próprio acervo) para a versão em inglês do site.
// ─────────────────────────────────────────────────────────────

import type { Lingua } from "@/lib/lingua";

export type Licenca = "CC0" | "Domínio público" | "CC BY 4.0";

export type Obra = {
  titulo: string;
  artista: string;
  ano: string;
  acervo: string;
  licenca: Licenca;
  /** página da obra no acervo; ausente quando o arquivo foi enviado pela Malu e o acervo não foi confirmado */
  url?: string;
  /** versão em inglês do que muda (título; acervo, artista e data quando estão em português) */
  en: { titulo: string; acervo?: string; artista?: string; ano?: string };
};

const AIC = (id: number) => `https://www.artic.edu/artworks/${id}`;
const MET = (id: number) => `https://www.metmuseum.org/art/collection/search/${id}`;
const MET_NOME = "The Metropolitan Museum of Art";

export const arte = {
  // ── Arquivos enviados pela Malu (domínio público: Redon morreu em 1916) ──
  "redon-perfil-flores": { titulo: "Perfil com flores (pastel)", artista: "Odilon Redon", ano: "c. 1900–1910", acervo: "Arquivo enviado pela Malu; acervo a confirmar", licenca: "Domínio público", en: { titulo: "Profile with flowers (pastel)", acervo: "File provided by Malu; collection to be confirmed" } },
  "redon-olhos-fechados-tela": { titulo: "Olhos fechados", artista: "Odilon Redon", ano: "1890", acervo: "Musée d'Orsay (óleo sobre tela); arquivo enviado pela Malu", licenca: "Domínio público", en: { titulo: "Closed Eyes", acervo: "Musée d'Orsay (oil on canvas); file provided by Malu" } },

  // ── O outro lado: o atlas e as imagens ─────────────────────────
  "redon-vaso-rosa": { titulo: "Vaso de flores (fundo rosa)", artista: "Odilon Redon", ano: "c. 1906", acervo: MET_NOME, licenca: "CC0", url: MET(437382), en: { titulo: "Vase of Flowers (Pink Background)" } },
  "seurat-parade": { titulo: "Parada de circo", artista: "Georges Seurat", ano: "1887–88", acervo: MET_NOME, licenca: "CC0", url: MET(437654), en: { titulo: "Circus Sideshow (Parade de cirque)" } },
  "hokusai-ponte-kameido": {
    titulo: "A ponte em arco do santuário Kameido Tenjin, da série Vistas notáveis de pontes de várias províncias",
    artista: "Katsushika Hokusai",
    ano: "c. 1830",
    acervo: MET_NOME,
    licenca: "CC0",
    url: MET(53792),
    en: { titulo: "The Arched Bridge at Kameido Tenjin Shrine, from the series Remarkable Views of Bridges in Various Provinces" },
  },
  "rosarium-rei-rainha": {
    titulo: "O rei e a rainha sobre o sol e a lua, do Rosarium philosophorum",
    artista: "Xilogravura anônima",
    ano: "1550",
    acervo: "Wellcome Collection",
    licenca: "CC BY 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Woodcut_depicting_the_king_%26_queen_standing_atop_a_sun_%26_moon_Wellcome_L0073562.jpg",
    en: { titulo: "The king and queen standing on the sun and moon, from the Rosarium philosophorum", artista: "Anonymous woodcut" },
  },
  "splendor-solis-sol": {
    titulo: "O sol nascente, do Splendor Solis (f. 33v)",
    artista: "Iluminura anônima",
    ano: "1582",
    acervo: "British Library, Harley MS 3469",
    licenca: "CC0",
    url: "https://commons.wikimedia.org/wiki/File:Sun_with_human_face_rising_-_Splendor_Solis_(1582),_f.33v_-_BL_Harley_MS_3469.jpg",
    en: { titulo: "The rising sun, from the Splendor Solis (f. 33v)", artista: "Anonymous illumination" },
  },
  "mandala-jnanadakini": { titulo: "Mandala de Jnanadakini", artista: "Autoria desconhecida, Tibete", ano: "fim do séc. XIV", acervo: MET_NOME, licenca: "CC0", url: MET(37802), en: { titulo: "Jnanadakini Mandala", artista: "Unknown artist, Tibet", ano: "late 14th century" } },
  "redon-pandora": { titulo: "Pandora", artista: "Odilon Redon", ano: "c. 1914", acervo: MET_NOME, licenca: "CC0", url: MET(437383), en: { titulo: "Pandora" } },
  "shahnama-festa-sada": {
    titulo: "A festa de Sada, fólio 22v do Shahnama (Livro dos Reis) de Shah Tahmasp",
    artista: "Pintura atribuída a Sultan Muhammad",
    ano: "c. 1525",
    acervo: MET_NOME,
    licenca: "CC0",
    url: MET(452111),
    en: { titulo: "“The Feast of Sada”, Folio 22v from the Shahnama (Book of Kings) of Shah Tahmasp", artista: "Painting attributed to Sultan Muhammad" },
  },
  "redon-carro-apolo": { titulo: "O carro de Apolo", artista: "Odilon Redon", ano: "1905–16", acervo: MET_NOME, licenca: "CC0", url: MET(437380), en: { titulo: "The Chariot of Apollo" } },
  "redon-buque-pastel": { titulo: "Buquê de flores", artista: "Odilon Redon", ano: "c. 1900–1905", acervo: MET_NOME, licenca: "CC0", url: MET(437379), en: { titulo: "Bouquet of Flowers" } },
  "vermeer-jarro": { titulo: "Jovem com jarro de água", artista: "Johannes Vermeer", ano: "c. 1662", acervo: MET_NOME, licenca: "CC0", url: MET(437881), en: { titulo: "Young Woman with a Water Pitcher" } },

  // ── Art Institute of Chicago (Open Access, CC0) ──────────────
  "redon-flower-clouds": { titulo: "Nuvens de flores", artista: "Odilon Redon", ano: "c. 1903", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(76395), en: { titulo: "Flower Clouds" } },
  "redon-still-life": { titulo: "Natureza-morta com flores", artista: "Odilon Redon", ano: "1905", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(110982), en: { titulo: "Still Life with Flowers" } },
  "redon-sita": { titulo: "Sita", artista: "Odilon Redon", ano: "c. 1893", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(80594), en: { titulo: "Sita" } },
  "moreau-inspiration": { titulo: "Inspiração", artista: "Gustave Moreau", ano: "c. 1893", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(104463), en: { titulo: "Inspiration" } },
  "bocklin-sea": { titulo: "No mar", artista: "Arnold Böcklin", ano: "1883", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(110507), en: { titulo: "In the Sea" } },
  "volaire-vesuvius": { titulo: "A erupção do Vesúvio", artista: "Pierre-Jacques Volaire", ano: "1771", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(57996), en: { titulo: "The Eruption of Vesuvius" } },
  "hokusai-cranes": { titulo: "Grous no pinheiro nevado", artista: "Katsushika Hokusai", ano: "c. 1834", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(21720), en: { titulo: "Cranes on Snowy Pine" } },
  "hokusai-iris": { titulo: "Íris e gafanhoto", artista: "Katsushika Hokusai", ano: "c. 1833/34", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(32276), en: { titulo: "Iris and Grasshopper" } },
  "manet-reading": { titulo: "Mulher lendo", artista: "Édouard Manet", ano: "1880–82", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(14591), en: { titulo: "Woman Reading" } },
  "ragamala-hindol": { titulo: "Hindol Raga, do conjunto Ragamala", artista: "Autoria desconhecida, Índia", ano: "c. 1750–70", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(129866), en: { titulo: "Hindol Raga, from a Ragamala set", artista: "Unknown artist, India" } },
  "lakshmi-sarasvati": { titulo: "Vishnu com as deusas Lakshmi e Sarasvati", artista: "Período Pala, Índia", ano: "séc. X–XII", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(14845), en: { titulo: "Vishnu with the goddesses Lakshmi and Sarasvati", artista: "Pala period, India", ano: "10th–12th century" } },
  "caillebotte-rain": { titulo: "Rua de Paris, dia de chuva", artista: "Gustave Caillebotte", ano: "1877", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(20684), en: { titulo: "Paris Street; Rainy Day" } },
  "degas-star": { titulo: "A estrela", artista: "Edgar Degas", ano: "1879/81", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(60656), en: { titulo: "The Star" } },
} satisfies Record<string, Obra>;

export type ChaveArte = keyof typeof arte;

const LICENCA_EN: Record<Licenca, string> = { CC0: "CC0", "Domínio público": "Public domain", "CC BY 4.0": "CC BY 4.0" };

/** A obra no idioma da página (o que não tem tradução fica como está: nomes, acervos). */
export function obra(chave: ChaveArte, l: Lingua = "pt") {
  const o: Obra = arte[chave];
  if (l === "pt") return { titulo: o.titulo, artista: o.artista, ano: o.ano, acervo: o.acervo, licenca: o.licenca as string, url: o.url };
  return { titulo: o.en.titulo, artista: o.en.artista ?? o.artista, ano: o.en.ano ?? o.ano, acervo: o.en.acervo ?? o.acervo, licenca: LICENCA_EN[o.licenca], url: o.url };
}

/** Crédito curto, para legendas. Obras CC BY levam a licença por extenso. */
export function creditoObra(chave: ChaveArte, l: Lingua = "pt") {
  const o = obra(chave, l);
  return `${o.artista}, ${o.titulo} (${o.ano}). ${o.acervo}, ${o.licenca}.`;
}
