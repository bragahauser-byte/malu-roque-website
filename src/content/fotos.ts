// ─────────────────────────────────────────────────────────────
// FOTOGRAFIAS DE MARIA LUIZA ROQUE
// Originais da pasta "inspiracao site malu" (fotos da malu, fotos em
// viagens, hospital das clinicas, fotos da parte do TCC), copiadas para
// recursos/fotos/ e convertidas por `npm run imagens` sem nenhum
// retoque, filtro ou alteração (só redimensionamento e WebP).
// Resolução máxima disponível: 960×1280 (TCC: 1200×1600). Nunca ampliadas.
// ─────────────────────────────────────────────────────────────

export const fotos = {
  "malu-retrato": { alt: "Maria Luiza Roque, retrato em fundo claro", origem: "fotos da malu / 21.19.38 (2)" },
  "malu-sorriso": { alt: "Maria Luiza Roque sorrindo, de blusa branca, em luz natural", origem: "fotos da malu / 21.19.38 (1)" },
  "malu-musica": { alt: "Maria Luiza Roque com uma camiseta de banda", origem: "fotos da malu / 21.19.32 (1)" },
  "malu-festival": { alt: "Maria Luiza Roque de óculos escuros diante de um painel de cartazes coloridos", origem: "fotos da malu / 21.19.32 (2)" },
  "malu-entardecer": { alt: "Maria Luiza Roque ao entardecer, com o sol se pondo sobre a serra", origem: "fotos da malu / 21.19.40" },
  "hc-escadaria": { alt: "Maria Luiza Roque de jaleco na escadaria histórica da Faculdade de Medicina da USP", origem: "hospital das clinicas / 21.19.34 (1)" },
  "hc-instituto": { alt: "Maria Luiza Roque diante do Instituto Central do Hospital das Clínicas", origem: "hospital das clinicas / 21.19.35" },
  "tcc-banner": { alt: "Maria Luiza Roque ao lado do pôster do TCC “Deusas Hindus e os Arquétipos Femininos no Processo de Individuação”", origem: "fotos da parte do TCC / 21.18.36 (1)" },
  "viagem-janela": { alt: "Maria Luiza Roque olhando pela janela de um prédio antigo", origem: "fotos em viagens / 21.18.11" },
  "viagem-arcos": { alt: "Maria Luiza Roque sentada sob uma galeria de arcos, com um lago e montanhas ao fundo", origem: "fotos em viagens / 21.18.19" },
  "viagem-passagem": { alt: "Uma passagem em arco que se abre para um lago, com Maria Luiza Roque nos degraus", origem: "fotos em viagens / 21.18.20" },
  "viagem-museu": { alt: "Maria Luiza Roque de costas, diante de pinturas numa sala de museu", origem: "fotos em viagens / 21.18.29" },
  "viagem-entardecer": { alt: "Maria Luiza Roque sorrindo sobre uma cidade ao pôr do sol", origem: "fotos em viagens / 21.18.12" },
} as const;

export type ChaveFoto = keyof typeof fotos;
