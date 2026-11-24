// ─────────────────────────────────────────────────────────────
// DISCOS — referências musicais da Malu (não é um ranking).
// Capas: arquivos originais da pasta "albuns", sem alteração.
// Dados: artista, ano de lançamento e faixas conhecidas de cada disco
// (informação pública). Nenhuma opinião foi atribuída a ela além do
// que ela mesma disse (ver a observação sobre Lemonade).
// ─────────────────────────────────────────────────────────────

export type Disco = {
  capa: string;
  titulo: string;
  artista: string;
  ano: string;
  faixas: string[];
  nota?: string;
  /** cor da lombada: a cor dominante da capa (medida com sharp, stats().dominant) */
  lombada: string;
  /** texto da lombada claro ou escuro, conforme a cor */
  tinta: "claro" | "escuro";
};

/**
 * UMA SÓ COLEÇÃO: todos os discos e artistas do repertório, sem divisão por
 * época, década ou artista. A ordem segue a lista que ela enviou (os três
 * últimos vieram depois, com as capas).
 */
export const discos: Disco[] = [
  { capa: "californication", lombada: "#983808", tinta: "claro", titulo: "Californication", artista: "Red Hot Chili Peppers", ano: "1999", faixas: ["Scar Tissue", "Otherside", "Californication"] },
  { capa: "blood-sugar-sex-magik", lombada: "#f8f8f8", tinta: "escuro", titulo: "Blood Sugar Sex Magik", artista: "Red Hot Chili Peppers", ano: "1991", faixas: ["Under the Bridge", "Give It Away", "Suck My Kiss"] },
  { capa: "morning-glory", lombada: "#f8f8f8", tinta: "escuro", titulo: "(What's the Story) Morning Glory?", artista: "Oasis", ano: "1995", faixas: ["Wonderwall", "Don't Look Back in Anger", "Champagne Supernova"] },
  { capa: "definitely-maybe", lombada: "#e8c888", tinta: "escuro", titulo: "Definitely Maybe", artista: "Oasis", ano: "1994", faixas: ["Live Forever", "Supersonic", "Slide Away"] },
  { capa: "back-to-black", lombada: "#081818", tinta: "claro", titulo: "Back to Black", artista: "Amy Winehouse", ano: "2006", faixas: ["Rehab", "Back to Black", "Love Is a Losing Game"] },
  { capa: "led-zeppelin-iv", lombada: "#d8c8c8", tinta: "escuro", titulo: "Led Zeppelin IV", artista: "Led Zeppelin", ano: "1971", faixas: ["Black Dog", "Rock and Roll", "Stairway to Heaven"] },
  { capa: "abbey-road", lombada: "#181828", tinta: "claro", titulo: "Abbey Road", artista: "The Beatles", ano: "1969", faixas: ["Come Together", "Something", "Here Comes the Sun"] },
  { capa: "dark-side-of-the-moon", lombada: "#080808", tinta: "claro", titulo: "The Dark Side of the Moon", artista: "Pink Floyd", ano: "1973", faixas: ["Time", "Money", "Us and Them"] },
  { capa: "rumours", lombada: "#f8f8e8", tinta: "escuro", titulo: "Rumours", artista: "Fleetwood Mac", ano: "1977", faixas: ["Dreams", "Go Your Own Way", "The Chain"] },
  { capa: "thriller", lombada: "#d8d8c8", tinta: "escuro", titulo: "Thriller", artista: "Michael Jackson", ano: "1982", faixas: ["Billie Jean", "Beat It", "Thriller"] },
  { capa: "arrival", lombada: "#080808", tinta: "claro", titulo: "Arrival", artista: "ABBA", ano: "1976", faixas: ["Dancing Queen", "Knowing Me, Knowing You", "Money, Money, Money"] },
  {
    capa: "lemonade",
    lombada: "#181818",
    tinta: "claro",
    titulo: "Lemonade",
    artista: "Beyoncé",
    ano: "2016",
    faixas: ["Formation", "Hold Up", "Freedom"],
    nota: "Algumas faixas, mais do que o disco inteiro: ainda sem veredito sobre o álbum completo.",
  },
  { capa: "the-end", lombada: "#080808", tinta: "claro", titulo: "The E.N.D.", artista: "Black Eyed Peas", ano: "2009", faixas: ["Boom Boom Pow", "I Gotta Feeling", "Meet Me Halfway"] },
  { capa: "the-fame", lombada: "#080808", tinta: "claro", titulo: "The Fame", artista: "Lady Gaga", ano: "2008", faixas: ["Just Dance", "Poker Face", "Paparazzi"] },
  { capa: "the-fame-monster", lombada: "#080808", tinta: "claro", titulo: "The Fame Monster", artista: "Lady Gaga", ano: "2009", faixas: ["Bad Romance", "Telephone", "Alejandro"] },
];
