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
};

/** A ordem segue a lista que ela enviou. */
export const discos: Disco[] = [
  { capa: "californication", titulo: "Californication", artista: "Red Hot Chili Peppers", ano: "1999", faixas: ["Scar Tissue", "Otherside", "Californication"] },
  { capa: "blood-sugar-sex-magik", titulo: "Blood Sugar Sex Magik", artista: "Red Hot Chili Peppers", ano: "1991", faixas: ["Under the Bridge", "Give It Away", "Suck My Kiss"] },
  { capa: "morning-glory", titulo: "(What's the Story) Morning Glory?", artista: "Oasis", ano: "1995", faixas: ["Wonderwall", "Don't Look Back in Anger", "Champagne Supernova"] },
  { capa: "definitely-maybe", titulo: "Definitely Maybe", artista: "Oasis", ano: "1994", faixas: ["Live Forever", "Supersonic", "Slide Away"] },
  { capa: "back-to-black", titulo: "Back to Black", artista: "Amy Winehouse", ano: "2006", faixas: ["Rehab", "Back to Black", "Love Is a Losing Game"] },
  { capa: "led-zeppelin-iv", titulo: "Led Zeppelin IV", artista: "Led Zeppelin", ano: "1971", faixas: ["Black Dog", "Rock and Roll", "Stairway to Heaven"] },
  { capa: "abbey-road", titulo: "Abbey Road", artista: "The Beatles", ano: "1969", faixas: ["Come Together", "Something", "Here Comes the Sun"] },
  { capa: "dark-side-of-the-moon", titulo: "The Dark Side of the Moon", artista: "Pink Floyd", ano: "1973", faixas: ["Time", "Money", "Us and Them"] },
  { capa: "rumours", titulo: "Rumours", artista: "Fleetwood Mac", ano: "1977", faixas: ["Dreams", "Go Your Own Way", "The Chain"] },
  { capa: "thriller", titulo: "Thriller", artista: "Michael Jackson", ano: "1982", faixas: ["Billie Jean", "Beat It", "Thriller"] },
  { capa: "arrival", titulo: "Arrival", artista: "ABBA", ano: "1976", faixas: ["Dancing Queen", "Knowing Me, Knowing You", "Money, Money, Money"] },
  {
    capa: "lemonade",
    titulo: "Lemonade",
    artista: "Beyoncé",
    ano: "2016",
    faixas: ["Formation", "Hold Up", "Freedom"],
    nota: "Algumas faixas, mais do que o disco inteiro: ainda sem veredito sobre o álbum completo.",
  },
];

/** Outros artistas que fazem parte do repertório (capas também enviadas). */
export const outrosArtistas: Disco[] = [
  { capa: "the-end", titulo: "The E.N.D.", artista: "Black Eyed Peas", ano: "2009", faixas: ["Boom Boom Pow", "I Gotta Feeling", "Meet Me Halfway"] },
  { capa: "the-fame", titulo: "The Fame", artista: "Lady Gaga", ano: "2008", faixas: ["Just Dance", "Poker Face", "Paparazzi"] },
  { capa: "the-fame-monster", titulo: "The Fame Monster", artista: "Lady Gaga", ano: "2009", faixas: ["Bad Romance", "Telephone", "Alejandro"] },
];
