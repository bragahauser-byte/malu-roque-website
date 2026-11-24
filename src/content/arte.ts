// ─────────────────────────────────────────────────────────────
// ACERVO DE OBRAS
// Só obras em domínio público ou sob licença aberta, de acervos
// institucionais. Cada entrada registra a fonte, a licença e o link.
// Os arquivos ficam em public/img/arte/<chave>-<largura>.webp, gerados
// por `npm run imagens` a partir de recursos/arte-originais/.
// A lista completa, com observações de direitos, está em IMAGENS.md
// e na página /creditos/ do site.
// ─────────────────────────────────────────────────────────────

export type Licenca = "CC0" | "Domínio público" | "CC BY 4.0";

export type Obra = {
  titulo: string;
  artista: string;
  ano: string;
  acervo: string;
  licenca: Licenca;
  url: string;
};

const AIC = (id: number) => `https://www.artic.edu/artworks/${id}`;
const MET = (id: number) => `https://www.metmuseum.org/art/collection/search/${id}`;

export const arte = {
  // ── O outro lado: o atlas simbólico ──────────────────────────
  "redon-olhos-fechados": { titulo: "Olhos fechados", artista: "Odilon Redon", ano: "1890", acervo: "The Metropolitan Museum of Art", licenca: "CC0", url: MET(356778) },
  "goya-sono-da-razao": {
    titulo: "O sono da razão produz monstros (Los Caprichos, prancha 43)",
    artista: "Francisco de Goya",
    ano: "1799",
    acervo: "The Metropolitan Museum of Art",
    licenca: "CC0",
    url: MET(338473),
  },
  "bocklin-ilha-dos-mortos": { titulo: "A ilha dos mortos", artista: "Arnold Böcklin", ano: "1880", acervo: "The Metropolitan Museum of Art", licenca: "CC0", url: MET(435683) },
  "rosarium-rei-rainha": {
    titulo: "O rei e a rainha sobre o sol e a lua, do Rosarium philosophorum",
    artista: "Xilogravura anônima",
    ano: "1550",
    acervo: "Wellcome Collection",
    licenca: "CC BY 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Woodcut_depicting_the_king_%26_queen_standing_atop_a_sun_%26_moon_Wellcome_L0073562.jpg",
  },
  "splendor-solis-sol": {
    titulo: "O sol nascente, do Splendor Solis (f. 33v)",
    artista: "Iluminura anônima",
    ano: "1582",
    acervo: "British Library, Harley MS 3469",
    licenca: "CC0",
    url: "https://commons.wikimedia.org/wiki/File:Sun_with_human_face_rising_-_Splendor_Solis_(1582),_f.33v_-_BL_Harley_MS_3469.jpg",
  },
  "mandala-jnanadakini": { titulo: "Mandala de Jnanadakini", artista: "Autoria desconhecida, Tibete", ano: "fim do séc. XIV", acervo: "The Metropolitan Museum of Art", licenca: "CC0", url: MET(37802) },
  "redon-pandora": { titulo: "Pandora", artista: "Odilon Redon", ano: "c. 1914", acervo: "The Metropolitan Museum of Art", licenca: "CC0", url: MET(437383) },
  "redon-pegaso": { titulo: "Pégaso e Belerofonte", artista: "Odilon Redon", ano: "c. 1888", acervo: "The Metropolitan Museum of Art", licenca: "CC0", url: MET(459400) },
  "redon-carro-apolo": { titulo: "O carro de Apolo", artista: "Odilon Redon", ano: "1905–16", acervo: "The Metropolitan Museum of Art", licenca: "CC0", url: MET(437380) },

  // ── Art Institute of Chicago (Open Access, CC0) ──────────────
  "redon-flower-clouds": { titulo: "Nuvens de flores", artista: "Odilon Redon", ano: "c. 1903", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(76395) },
  "redon-still-life": { titulo: "Natureza-morta com flores", artista: "Odilon Redon", ano: "1905", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(110982) },
  "redon-sita": { titulo: "Sita", artista: "Odilon Redon", ano: "c. 1893", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(80594) },
  "redon-dream-vision": { titulo: "Visão de sonho", artista: "Odilon Redon", ano: "c. 1880", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(79259) },
  "moreau-inspiration": { titulo: "Inspiração", artista: "Gustave Moreau", ano: "c. 1893", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(104463) },
  "bocklin-sea": { titulo: "No mar", artista: "Arnold Böcklin", ano: "1883", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(110507) },
  "whistler-nocturne": { titulo: "Noturno: azul e dourado", artista: "James McNeill Whistler", ano: "1872", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(56905) },
  "munch-window": { titulo: "A menina à janela", artista: "Edvard Munch", ano: "1893", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(154235) },
  "volaire-vesuvius": { titulo: "A erupção do Vesúvio", artista: "Pierre-Jacques Volaire", ano: "1771", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(57996) },
  "hokusai-cranes": { titulo: "Grous no pinheiro nevado", artista: "Katsushika Hokusai", ano: "c. 1834", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(21720) },
  "hokusai-iris": { titulo: "Íris e gafanhoto", artista: "Katsushika Hokusai", ano: "c. 1833/34", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(32276) },
  "manet-reading": { titulo: "Mulher lendo", artista: "Édouard Manet", ano: "1880–82", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(14591) },
  "ragamala-hindol": { titulo: "Hindol Raga, do conjunto Ragamala", artista: "Autoria desconhecida, Índia", ano: "c. 1750–70", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(129866) },
  "lakshmi-sarasvati": { titulo: "Vishnu com as deusas Lakshmi e Sarasvati", artista: "Período Pala, Índia", ano: "séc. X–XII", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(14845) },
  "caillebotte-rain": { titulo: "Rua de Paris, dia de chuva", artista: "Gustave Caillebotte", ano: "1877", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(20684) },
  "degas-star": { titulo: "A estrela", artista: "Edgar Degas", ano: "1879/81", acervo: "Art Institute of Chicago", licenca: "CC0", url: AIC(60656) },
} satisfies Record<string, Obra>;

export type ChaveArte = keyof typeof arte;

/** Crédito curto, para legendas. Obras CC BY levam a licença por extenso. */
export function creditoObra(chave: ChaveArte) {
  const o = arte[chave];
  return `${o.artista}, ${o.titulo} (${o.ano}). ${o.acervo}, ${o.licenca}.`;
}
