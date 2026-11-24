// ─────────────────────────────────────────────────────────────
// NOTEBOOK — English version of src/content/caderno.ts.
// Only the words change: slugs, images, colours, categories (as keys) and
// the draft status are read from the Portuguese file.
// ─────────────────────────────────────────────────────────────

import type { Categoria } from "../caderno";

export const categoriasEn: Record<Categoria, string> = {
  "Psicologia e subjetividade": "Psychology and subjectivity",
  "Sonhos e símbolos": "Dreams and symbols",
  "Cultura e sociedade": "Culture and society",
  Livros: "Books",
  "Cinema e séries": "Film and TV",
  Música: "Music",
  Viagens: "Travel",
  Cotidiano: "Everyday life",
  Reflexões: "Reflections",
};

type Traducao = { titulo: string; chamada: string; corpo?: string[]; lista?: string[] };

export const textosEn: Record<string, Traducao> = {
  intercambios: {
    titulo: "Two exchanges: London and Milan",
    chamada: "London, 2019/2020, to study English. Milan, 2023, a semester at the Università Cattolica del Sacro Cuore.",
  },
  destinos: {
    titulo: "Twelve countries, twelve windows",
    chamada: "From England to Austria: the places that stayed with me, seen as if through an aeroplane window.",
  },
  discos: {
    titulo: "A shelf of CDs",
    chamada: "Red Hot Chili Peppers, Oasis, Amy Winehouse, Pink Floyd, ABBA and other records that are part of the repertoire.",
  },
  "o-que-os-contos-de-fadas-sabem-sobre-crescer": {
    titulo: "What fairy tales know about growing up",
    chamada: "Dark forests, impossible trials and the old question: who do I become when I leave home?",
    corpo: [
      "Sample text. In fairy tales, almost every story begins with a departure: someone leaves their parents’ house, crosses the forest, meets an obstacle that seems bigger than themselves.",
      "This is a placeholder structure for an essay on fairy tales and growing up, to be written by Malu.",
    ],
  },
  "notas-sobre-uma-loja-de-discos": {
    titulo: "Notes on a record shop",
    chamada: "Walking into a shop while a song we love is playing loud. Why does it move us so much?",
    corpo: [
      "Sample text. A space to talk about albums, artists and what music does to memory.",
      "Layout draft: comments on 80s records and current artists go here.",
    ],
  },
  "sonhar-acordado-num-dia-de-chuva": {
    titulo: "Daydreaming on a rainy day",
    chamada: "Umbrellas, misted windows and daydreaming as a small form of freedom.",
    corpo: ["Sample text for the Everyday life section: small observations about ordinary life."],
  },
  "a-sereia-a-ilha-e-o-mar": {
    titulo: "The mermaid, the island and the sea",
    chamada: "Images that cross the centuries: what mermaids still tell us about desire and danger.",
    corpo: ["Sample text. An essay on the figure of the mermaid in mythology, literature and art."],
  },
  "o-simbolo-nao-se-explica": {
    titulo: "A symbol is not explained. It is inhabited.",
    chamada: "A sentence to keep in your pocket. Draft of a short note.",
    corpo: ["Sample text. Short notes, almost aphorisms, on symbolic language."],
  },
  "livros-de-cabeceira": {
    titulo: "Bedside books (a living list)",
    chamada: "What is on the pile, what was read and loved, what was left halfway.",
    corpo: ["Sample text. A list that changes over time, with comments and personal impressions."],
    lista: ["Title to be defined", "Title to be defined", "Title to be defined", "Title to be defined"],
  },
  "flores-que-nao-murcham": {
    titulo: "Flowers that never wilt: Redon and dreams",
    chamada: "The painter who said he put the logic of the visible at the service of the invisible.",
    corpo: ["Sample text. Art and symbolic expression: works in conversation with the unconscious."],
  },
  "por-que-revemos-o-mesmo-filme": {
    titulo: "Why do we watch the same film again?",
    chamada: "Repetition, comfort and what only shows up the third time.",
    corpo: ["Sample text for the Film and TV section."],
  },
  "o-vulcao-como-imagem": {
    titulo: "The volcano as an image",
    chamada: "When the body falls ill, images speak too. Notes from hospital practice.",
    corpo: ["Sample text. An accessible follow-up to the study “From the Volcano to the Warrior”."],
  },
  "a-janela-e-o-quarto": {
    titulo: "The window and the room",
    chamada: "On solitude, intimacy and the time we spend looking out.",
    corpo: ["Sample text for the Personal reflections section."],
  },
  "uma-musica-para-cada-hora": {
    titulo: "A song for every hour of the day",
    chamada: "Indian ragas had a set time to be played. What about our playlists?",
    corpo: ["Sample text. Musical curiosities and what they say about us."],
  },
};
