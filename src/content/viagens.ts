// ─────────────────────────────────────────────────────────────
// VIAGENS E INTERCÂMBIOS
// Países: lista informada pela Malu. As legendas descrevem só a
// fotografia (o lugar retratado), nunca o que ela fez ou quais cidades
// visitou, que não foi informado.
// Fotos dos países: Wikimedia Commons, com autor e licença; Inglaterra e
// Itália são fotos dela (pastas "intercambio inglaterra" e "intercambio italia").
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

const COMMONS = "https://commons.wikimedia.org/wiki/File:";

export const destinos: Destino[] = [
  { pais: "Inglaterra", bandeira: "inglaterra", continente: "Europa", capital: "Londres", imagem: "destino-inglaterra", legenda: "Uma rua de pedra ao entardecer.", credito: { propria: true } },
  { pais: "Dinamarca", bandeira: "dinamarca", continente: "Europa", capital: "Copenhague", imagem: "destino-dinamarca", legenda: "A torre de dragões entrelaçados da Børsen, a antiga bolsa de Copenhague.", credito: { autor: "Jebulon", licenca: "CC0", url: COMMONS + "B%C3%B8rsen_dragon_spire_roofs_Copenhagen_Denmark.jpg" } },
  { pais: "Itália", bandeira: "italia", continente: "Europa", capital: "Roma", imagem: "destino-italia", legenda: "Buganvílias sobre uma rua em ladeira.", credito: { propria: true } },
  { pais: "Bélgica", bandeira: "belgica", continente: "Europa", capital: "Bruxelas", imagem: "destino-belgica", legenda: "Fachadas refletidas num canal de Bruges.", credito: { autor: "Marc Ryckaert (MJJR)", licenca: "CC BY 3.0", url: COMMONS + "Brugge_Langerei_R02.jpg" } },
  { pais: "Holanda", bandeira: "holanda", continente: "Europa", capital: "Amsterdã", imagem: "destino-holanda", legenda: "Casas sobre a água de Amsterdã, à noite.", credito: { autor: "Massimo Catarinella", licenca: "CC BY-SA 3.0", url: COMMONS + "OudezijdsKolkAmsterdam.jpg" } },
  { pais: "Mônaco", bandeira: "monaco", continente: "Europa", capital: "Mônaco", imagem: "destino-monaco", legenda: "O porto e a cidade, entre o mar e a encosta.", credito: { autor: "Diego Delso", licenca: "CC BY-SA 4.0", url: COMMONS + "Vista_de_M%C3%B3naco,_2016-06-23,_DD_10.jpg" } },
  { pais: "Vaticano", bandeira: "vaticano", continente: "Europa", capital: "Cidade do Vaticano", imagem: "destino-vaticano", legenda: "A escada em espiral dos Museus Vaticanos.", credito: { autor: "Alvesgaspar", licenca: "CC BY-SA 4.0", url: COMMONS + "Vatican_Museum_September_2015-1.jpg" } },
  { pais: "Marrocos", bandeira: "marrocos", continente: "África", capital: "Rabat", imagem: "destino-marrocos", legenda: "Uma escadaria azul em Chefchaouen.", credito: { autor: "Fbrandao.1963", licenca: "CC BY-SA 4.0", url: COMMONS + "2018_01_(Blue)_-_Chaouen.jpg" } },
  { pais: "França", bandeira: "franca", continente: "Europa", capital: "Paris", imagem: "destino-franca", legenda: "Uma porta azul em arco num prédio de Paris.", credito: { autor: "Jebulon", licenca: "CC0", url: COMMONS + "Porte_35_boulevard_Saint-Michel_Paris.jpg" } },
  { pais: "Alemanha", bandeira: "alemanha", continente: "Europa", capital: "Berlim", imagem: "destino-alemanha", legenda: "A antiga prefeitura de Bamberg, construída sobre o rio.", credito: { autor: "Berthold Werner", licenca: "Domínio público", url: COMMONS + "Bamberg_Altes_Rathaus_BW_1.JPG" } },
  { pais: "Malta", bandeira: "malta", continente: "Europa", capital: "Valletta", imagem: "destino-malta", legenda: "O memorial do Sino do Cerco, em Valletta, diante do mar.", credito: { autor: "MrPanyGoff", licenca: "CC BY-SA 3.0", url: COMMONS + "Siege_Bell_War_Memorial_-_Valletta.jpg" } },
  { pais: "Áustria", bandeira: "austria", continente: "Europa", capital: "Viena", imagem: "destino-austria", legenda: "Uma igreja entre o lago e as montanhas de Hallstatt.", credito: { autor: "Taxiarchos228", licenca: "CC BY 3.0", url: COMMONS + "Hallstatt_-_Evangelische_Kirche3.jpg" } },
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
