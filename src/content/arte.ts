// ─────────────────────────────────────────────────────────────
// ACERVO DE IMAGENS
// Todas são obras em domínio público do Art Institute of Chicago
// (Open Access, licença CC0). Arquivos em public/img/arte/<chave>.webp
// e versão pequena <chave>-p.webp. Para trocar uma imagem, substitua
// o arquivo mantendo o nome, ou adicione uma nova entrada aqui.
// ─────────────────────────────────────────────────────────────

export type Obra = {
  titulo: string;
  artista: string;
  ano: string;
  /** id da obra no Art Institute of Chicago */
  aic: number;
  /** proporção largura/altura aproximada, ajuda a reservar espaço */
  proporcao: number;
};

export const arte = {
  "redon-flower-clouds": { titulo: "Nuvens de flores", artista: "Odilon Redon", ano: "c. 1903", aic: 76395, proporcao: 1.2 },
  "redon-still-life": { titulo: "Natureza-morta com flores", artista: "Odilon Redon", ano: "1905", aic: 110982, proporcao: 0.68 },
  "redon-sita": { titulo: "Sita", artista: "Odilon Redon", ano: "c. 1893", aic: 80594, proporcao: 0.71 },
  "redon-siren": { titulo: "Sereia saindo das ondas, vestida de chamas", artista: "Odilon Redon", ano: "1883", aic: 79348, proporcao: 0.71 },
  "redon-dream-vision": { titulo: "Visão de sonho", artista: "Odilon Redon", ano: "c. 1880", aic: 79259, proporcao: 1.17 },
  "moreau-inspiration": { titulo: "Inspiração", artista: "Gustave Moreau", ano: "c. 1893", aic: 104463, proporcao: 0.74 },
  "moreau-peri": { titulo: "La Péri", artista: "Gustave Moreau", ano: "1865", aic: 89157, proporcao: 0.71 },
  "bocklin-sea": { titulo: "No mar", artista: "Arnold Böcklin", ano: "1883", aic: 110507, proporcao: 1.33 },
  "whistler-nocturne": { titulo: "Noturno: azul e dourado", artista: "James McNeill Whistler", ano: "1872", aic: 56905, proporcao: 1.51 },
  "gallen-ad-astra": { titulo: "Ad Astra", artista: "Akseli Gallen-Kallela", ano: "1894–96", aic: 234877, proporcao: 1.5 },
  "munch-window": { titulo: "A menina à janela", artista: "Edvard Munch", ano: "1893", aic: 154235, proporcao: 0.68 },
  "volaire-vesuvius": { titulo: "A erupção do Vesúvio", artista: "Pierre-Jacques Volaire", ano: "1771", aic: 57996, proporcao: 2.17 },
  "hokusai-cranes": { titulo: "Grous no pinheiro nevado", artista: "Katsushika Hokusai", ano: "c. 1834", aic: 21720, proporcao: 0.46 },
  "hokusai-iris": { titulo: "Íris e gafanhoto", artista: "Katsushika Hokusai", ano: "c. 1833/34", aic: 32276, proporcao: 1.46 },
  "manet-reading": { titulo: "Mulher lendo", artista: "Édouard Manet", ano: "1880–82", aic: 14591, proporcao: 0.81 },
  "ragamala-hindol": { titulo: "Hindol Raga, do conjunto Ragamala", artista: "Autoria desconhecida, Índia", ano: "c. 1750–70", aic: 129866, proporcao: 0.74 },
  "lakshmi-sarasvati": { titulo: "Vishnu com as deusas Lakshmi e Sarasvati", artista: "Período Pala, Índia", ano: "séc. X–XII", aic: 14845, proporcao: 0.68 },
  "caillebotte-rain": { titulo: "Rua de Paris, dia de chuva", artista: "Gustave Caillebotte", ano: "1877", aic: 20684, proporcao: 1.29 },
  "degas-star": { titulo: "A estrela", artista: "Edgar Degas", ano: "1879/81", aic: 60656, proporcao: 0.77 },
} satisfies Record<string, Obra>;

export type ChaveArte = keyof typeof arte;

export function creditoObra(chave: ChaveArte) {
  const o = arte[chave];
  return `${o.artista}, ${o.titulo} (${o.ano}). Art Institute of Chicago, CC0.`;
}

export function urlObraAIC(chave: ChaveArte) {
  return `https://www.artic.edu/artworks/${arte[chave].aic}`;
}
