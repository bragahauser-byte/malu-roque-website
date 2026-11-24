// ─────────────────────────────────────────────────────────────
// VIAGENS E INTERCÂMBIOS
// Países: lista informada pela Malu. As legendas descrevem só a
// fotografia (o lugar retratado), nunca o que ela fez ou quais cidades
// visitou, que não foi informado.
// Fotos dos países: todas da Malu (pasta "viagens paises", uma foto por
// país, identificada pelo nome do arquivo). Originais sem retoque.
// ─────────────────────────────────────────────────────────────

export type Bandeira =
  | "inglaterra" | "dinamarca" | "italia" | "belgica" | "holanda" | "monaco"
  | "vaticano" | "marrocos" | "franca" | "alemanha" | "malta" | "austria";

export type Destino = {
  pais: string;
  bandeira: Bandeira;
  imagem: string;
  /** dados públicos do país (não da viagem): continente e capital */
  continente: string;
  capital: string;
  /** o que a fotografia mostra (descrição da imagem, não da viagem) */
  legenda: string;
  credito: { autor: string; licenca: string; url: string } | { propria: true };
};

export const destinos: Destino[] = [
  { pais: "Inglaterra", bandeira: "inglaterra", continente: "Europa", capital: "Londres", imagem: "destino-inglaterra", legenda: "A Tower Bridge vista da margem do Tâmisa, sob um céu de nuvens.", credito: { propria: true } },
  { pais: "Dinamarca", bandeira: "dinamarca", continente: "Europa", capital: "Copenhague", imagem: "destino-dinamarca", legenda: "Um veleiro e a bandeira dinamarquesa sobre a água, contra o sol.", credito: { propria: true } },
  { pais: "Itália", bandeira: "italia", continente: "Europa", capital: "Roma", imagem: "destino-italia", legenda: "A catedral de Milão vista através de um vidro.", credito: { propria: true } },
  { pais: "Bélgica", bandeira: "belgica", continente: "Europa", capital: "Bruxelas", imagem: "destino-belgica", legenda: "Uma figura de chapéu-coco recortada na fachada de um prédio de pedra.", credito: { propria: true } },
  { pais: "Holanda", bandeira: "holanda", continente: "Europa", capital: "Amsterdã", imagem: "destino-holanda", legenda: "Flores diante de um edifício de tijolos com torres pontiagudas, em Amsterdã.", credito: { propria: true } },
  { pais: "Mônaco", bandeira: "monaco", continente: "Europa", capital: "Mônaco", imagem: "destino-monaco", legenda: "Uma curva de rua com zebras vermelhas e brancas entre os prédios.", credito: { propria: true } },
  { pais: "Vaticano", bandeira: "vaticano", continente: "Europa", capital: "Cidade do Vaticano", imagem: "destino-vaticano", legenda: "A Escola de Atenas, de Rafael, sob o teto pintado da sala.", credito: { propria: true } },
  { pais: "Marrocos", bandeira: "marrocos", continente: "África", capital: "Rabat", imagem: "destino-marrocos", legenda: "Dunas de areia alaranjada no deserto do Saara.", credito: { propria: true } },
  { pais: "França", bandeira: "franca", continente: "Europa", capital: "Paris", imagem: "destino-franca", legenda: "O mar e as rochas da costa de Nice, sob o céu azul.", credito: { propria: true } },
  { pais: "Alemanha", bandeira: "alemanha", continente: "Europa", capital: "Berlim", imagem: "destino-alemanha", legenda: "Fachadas antigas e mesas de café numa calçada.", credito: { propria: true } },
  { pais: "Malta", bandeira: "malta", continente: "Europa", capital: "Valletta", imagem: "destino-malta", legenda: "Água azul-turquesa e um barco junto à costa de pedra.", credito: { propria: true } },
  { pais: "Áustria", bandeira: "austria", continente: "Europa", capital: "Viena", imagem: "destino-austria", legenda: "Um teto com medalhões em relevo e ornamentos dourados.", credito: { propria: true } },
];

/** Os dois intercâmbios. Textos escritos pela Malu (revisão leve). */
export const intercambios = [
  {
    id: "londres",
    bandeira: "inglaterra" as Bandeira,
    lugar: "Londres, Inglaterra",
    periodo: "2019/2020",
    tipo: "Intercâmbio de inglês",
    texto: [
      "Minha primeira experiência de intercâmbio aconteceu entre 2019 e 2020, em Londres, onde estudei inglês e vivi, pela primeira vez, a experiência de morar em outro país.",
      "Foi um período muito especial, que me permitiu entrar em contato com uma nova cultura, desenvolver minha autonomia e ampliar meus horizontes.",
    ],
    fotos: ["londres-ponte", "londres-malu"],
  },
  {
    id: "milao",
    bandeira: "italia" as Bandeira,
    lugar: "Milão, Itália",
    periodo: "2023",
    tipo: "Intercâmbio acadêmico",
    instituicao: "Università Cattolica del Sacro Cuore — Milão, Itália — 2023",
    texto: [
      "Em 2023, vivi uma segunda experiência internacional, desta vez em Milão, durante um semestre de intercâmbio acadêmico na Università Cattolica del Sacro Cuore, onde cursei disciplinas de Psicologia ministradas integralmente em inglês.",
      "Essa experiência foi especialmente significativa para minha formação. Além de conhecer diferentes perspectivas acadêmicas e conteúdos que ampliaram meu repertório na Psicologia, pude conviver com estudantes de diversas partes do mundo, conhecer outras culturas e construir relações que enriqueceram muito a experiência.",
      "Também foi um período de muitas descobertas para além da universidade: viajar, conhecer novas cidades, visitar museus, entrar em contato com diferentes manifestações artísticas e culturais e explorar lugares que antes eu conhecia apenas por livros e fotografias.",
    ],
    disciplinas: [
      "História da Psicologia e o pensamento de autores como Carl Gustav Jung e Sigmund Freud",
      "Entrevista clínica (Clinical Interviewing)",
      "Negócios familiares (Family Business)",
      "Comunicação não violenta e não verbal",
    ],
    fotos: ["milao-catedral", "milao-bandeiras", "milao-museu-malu", "milao-pintura", "milao-palacio", "milao-canal", "milao-malu-ponte", "milao-costa", "milao-entardecer"],
  },
];

export const fechoIntercambios =
  "Olho para essas experiências com muito carinho: ambas ampliaram minha visão de mundo, fortaleceram minha autonomia e enriqueceram minha trajetória pessoal e profissional. Acredito que o contato com diferentes culturas, formas de pensar e modos de viver também amplia nosso olhar sobre o ser humano e sobre a diversidade de suas experiências.";

// ── Idioma ──────────────────────────────────────────────────
import type { Lingua } from "@/lib/lingua";
import { destinosEn, fechoIntercambiosEn, intercambiosEn } from "./en/viagens";

export const destinosEm = (l: Lingua): Destino[] => (l === "pt" ? destinos : destinos.map((d) => ({ ...d, ...destinosEn[d.bandeira] })));

export const intercambiosEm = (l: Lingua) =>
  l === "pt" ? intercambios : intercambios.map((x) => ({ ...x, ...intercambiosEn[x.id as keyof typeof intercambiosEn] } as unknown as (typeof intercambios)[number]));

export const fechoEm = (l: Lingua) => (l === "pt" ? fechoIntercambios : fechoIntercambiosEn);
