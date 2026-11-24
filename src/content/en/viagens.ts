// ─────────────────────────────────────────────────────────────
// TRAVEL — English version of src/content/viagens.ts.
// The captions describe the photograph only, exactly as in Portuguese.
// ─────────────────────────────────────────────────────────────

import type { Bandeira } from "../viagens";

export const destinosEn: Record<Bandeira, { pais: string; continente: string; capital: string; legenda: string }> = {
  inglaterra: { pais: "England", continente: "Europe", capital: "London", legenda: "Tower Bridge seen from the bank of the Thames, under a cloudy sky." },
  dinamarca: { pais: "Denmark", continente: "Europe", capital: "Copenhagen", legenda: "A sailing boat and the Danish flag over the water, against the sun." },
  italia: { pais: "Italy", continente: "Europe", capital: "Rome", legenda: "Milan Cathedral seen through glass." },
  belgica: { pais: "Belgium", continente: "Europe", capital: "Brussels", legenda: "A bowler-hatted figure cut out of the façade of a stone building." },
  holanda: { pais: "Netherlands", continente: "Europe", capital: "Amsterdam", legenda: "Flowers in front of a brick building with pointed towers, in Amsterdam." },
  monaco: { pais: "Monaco", continente: "Europe", capital: "Monaco", legenda: "A bend in the road with red and white kerbs between the buildings." },
  vaticano: { pais: "Vatican City", continente: "Europe", capital: "Vatican City", legenda: "Raphael’s School of Athens, beneath the painted ceiling of the room." },
  marrocos: { pais: "Morocco", continente: "Africa", capital: "Rabat", legenda: "Orange sand dunes in the Sahara desert." },
  franca: { pais: "France", continente: "Europe", capital: "Paris", legenda: "The sea and the rocks of the coast at Nice, under a blue sky." },
  alemanha: { pais: "Germany", continente: "Europe", capital: "Berlin", legenda: "Old façades and café tables on a pavement." },
  malta: { pais: "Malta", continente: "Europe", capital: "Valletta", legenda: "Turquoise water and a boat by the rocky shore." },
  austria: { pais: "Austria", continente: "Europe", capital: "Vienna", legenda: "A ceiling with relief medallions and gilded ornaments." },
};

export const intercambiosEn = {
  londres: {
    lugar: "London, England",
    tipo: "English language exchange",
    texto: [
      "My first exchange took place between 2019 and 2020, in London, where I studied English and lived, for the first time, the experience of living in another country.",
      "It was a very special period, which allowed me to get to know a new culture, develop my independence and broaden my horizons.",
    ],
  },
  milao: {
    lugar: "Milan, Italy",
    tipo: "Academic exchange",
    instituicao: "Università Cattolica del Sacro Cuore — Milan, Italy — 2023",
    texto: [
      "In 2023, I had a second international experience, this time in Milan, during a semester-long academic exchange at the Università Cattolica del Sacro Cuore, where I took Psychology courses taught entirely in English.",
      "This experience was especially meaningful for my education. As well as discovering different academic perspectives and content that broadened my repertoire in Psychology, I was able to live alongside students from many parts of the world, get to know other cultures and build relationships that greatly enriched the experience.",
      "It was also a time of many discoveries beyond the university: travelling, getting to know new cities, visiting museums, encountering different artistic and cultural expressions and exploring places I had only known from books and photographs.",
    ],
    disciplinas: [
      "History of Psychology and the thought of authors such as Carl Gustav Jung and Sigmund Freud",
      "Clinical Interviewing",
      "Family Business",
      "Nonviolent and nonverbal communication",
    ],
  },
} as const;

export const fechoIntercambiosEn =
  "I look back on these experiences with great affection: both broadened my view of the world, strengthened my independence and enriched my personal and professional path. I believe that contact with different cultures, ways of thinking and ways of living also broadens how we see human beings and the diversity of their experiences.";

/** Lemonade: the only note attributed to her about a record. */
export const notasDiscosEn: Record<string, string> = {
  lemonade: "A few tracks, more than the whole record: still no verdict on the full album.",
};
