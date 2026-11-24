// ─────────────────────────────────────────────────────────────
// CADERNO — revista / journal
//
// ESPECIAIS: páginas reais, com conteúdo da Malu (Destinos, Intercâmbios,
// Discos). Ficam em src/app/caderno/<slug>/page.tsx.
//
// TEXTOS: todos os textos abaixo são RASCUNHOS DE DEMONSTRAÇÃO, escritos
// para testar o layout. Não são artigos publicados. Para publicar um texto
// de verdade: troque `rascunho: true` por `rascunho: false` e revise
// título, chamada e corpo.
//
// Todos os cartões usam o mesmo componente (CartaoTexto): campo de cor,
// imagem que se recolhe num arco no hover, categoria, título e chamada.
// ─────────────────────────────────────────────────────────────

export const categorias = [
  "Psicologia e subjetividade",
  "Sonhos e símbolos",
  "Cultura e sociedade",
  "Livros",
  "Cinema e séries",
  "Música",
  "Viagens",
  "Cotidiano",
  "Reflexões",
] as const;

export type Categoria = (typeof categorias)[number];

export type Texto = {
  slug: string;
  titulo: string;
  chamada: string;
  categoria: Categoria;
  /** chave de uma obra (arte.ts) ou foto (fotos.ts, destinos, álbuns) */
  imagem: string;
  cor: string;
  leitura: string;
  rascunho: boolean;
  /** página especial (rota própria), com conteúdo real */
  especial?: boolean;
  corpo: string[];
  lista?: string[];
  /** @deprecated o cartão agora é um só; mantido só para não quebrar textos antigos */
  formato?: string;
};

/** Os especiais do Caderno: viagens, intercâmbios e discos. */
export const especiais: Texto[] = [
  {
    slug: "intercambios",
    titulo: "Dois intercâmbios: Londres e Milão",
    chamada: "Londres, 2019/2020, para estudar inglês. Milão, 2023, um semestre na Università Cattolica del Sacro Cuore.",
    categoria: "Viagens",
    imagem: "londres-malu",
    cor: "var(--rosa)",
    leitura: "especial",
    rascunho: false,
    especial: true,
    corpo: [],
  },
  {
    slug: "destinos",
    titulo: "Doze países, doze janelas",
    chamada: "Da Inglaterra à Áustria: os lugares que ficaram, vistos como pela janela de um avião.",
    categoria: "Viagens",
    imagem: "destino-vaticano",
    cor: "var(--amarelo)",
    leitura: "especial",
    rascunho: false,
    especial: true,
    corpo: [],
  },
  {
    slug: "discos",
    titulo: "Uma estante de CDs",
    chamada: "Red Hot Chili Peppers, Oasis, Amy Winehouse, Pink Floyd, ABBA e outros discos que fazem parte do repertório.",
    categoria: "Música",
    imagem: "malu-musica",
    cor: "var(--lilas)",
    leitura: "especial",
    rascunho: false,
    especial: true,
    corpo: [],
  },
];

export const textos: Texto[] = [
  {
    slug: "o-que-os-contos-de-fadas-sabem-sobre-crescer",
    titulo: "O que os contos de fadas sabem sobre crescer",
    chamada: "Florestas escuras, provas impossíveis e a velha pergunta: quem eu me torno quando saio de casa?",
    categoria: "Sonhos e símbolos",
    formato: "capa",
    imagem: "moreau-inspiration",
    cor: "var(--lilas)",
    leitura: "6 min",
    rascunho: true,
    corpo: [
      "Texto de exemplo. Nos contos, quase toda história começa com uma partida: alguém deixa a casa dos pais, atravessa a floresta, encontra um obstáculo que parece maior do que si.",
      "Esta é uma estrutura de demonstração para um ensaio sobre contos de fadas e amadurecimento, a ser escrito por Malu.",
    ],
  },
  {
    slug: "notas-sobre-uma-loja-de-discos",
    titulo: "Notas sobre uma loja de discos",
    chamada: "Entrar numa loja enquanto toca, alto, uma música que a gente ama. Por que isso mexe tanto?",
    categoria: "Música",
    formato: "disco",
    imagem: "dark-side-of-the-moon",
    cor: "var(--rosa)",
    leitura: "4 min",
    rascunho: true,
    corpo: [
      "Texto de exemplo. Um espaço para falar de álbuns, artistas e daquilo que a música faz com a memória.",
      "Rascunho de layout: aqui entram comentários sobre discos dos anos 80 e artistas atuais.",
    ],
  },
  {
    slug: "sonhar-acordado-num-dia-de-chuva",
    titulo: "Sonhar acordado num dia de chuva",
    chamada: "Guarda-chuvas, janelas embaçadas e o devaneio como pequena forma de liberdade.",
    categoria: "Cotidiano",
    formato: "retrato",
    imagem: "caillebotte-rain",
    cor: "var(--creme-2)",
    leitura: "3 min",
    rascunho: true,
    corpo: ["Texto de exemplo para a seção Cotidiano: pequenas observações sobre a vida comum."],
  },
  {
    slug: "a-sereia-a-ilha-e-o-mar",
    titulo: "A sereia, a ilha e o mar",
    chamada: "Imagens que atravessam séculos: o que as sereias ainda contam sobre desejo e perigo.",
    categoria: "Sonhos e símbolos",
    formato: "capa",
    imagem: "bocklin-sea",
    cor: "var(--lilas)",
    leitura: "7 min",
    rascunho: true,
    corpo: ["Texto de exemplo. Um ensaio sobre a figura da sereia na mitologia, na literatura e na arte."],
  },
  {
    slug: "o-simbolo-nao-se-explica",
    titulo: "Um símbolo não se explica. Se habita.",
    chamada: "Uma frase para guardar no bolso. Rascunho de nota curta.",
    categoria: "Psicologia e subjetividade",
    formato: "citacao",
    imagem: "mandala-jnanadakini",
    cor: "var(--creme-2)",
    leitura: "1 min",
    rascunho: true,
    corpo: ["Texto de exemplo. Notas curtas, quase aforismos, sobre a linguagem simbólica."],
  },
  {
    slug: "livros-de-cabeceira",
    titulo: "Livros de cabeceira (uma lista viva)",
    chamada: "O que está na pilha, o que foi lido e amado, o que ficou pela metade.",
    categoria: "Livros",
    formato: "lista",
    imagem: "manet-reading",
    cor: "var(--rosa)",
    leitura: "5 min",
    rascunho: true,
    corpo: ["Texto de exemplo. Uma lista que muda com o tempo, com comentários e impressões pessoais."],
    lista: ["Título a definir", "Título a definir", "Título a definir", "Título a definir"],
  },
  {
    slug: "flores-que-nao-murcham",
    titulo: "Flores que não murcham: Redon e os sonhos",
    chamada: "O pintor que dizia pôr a lógica do visível a serviço do invisível.",
    categoria: "Cultura e sociedade",
    formato: "retrato",
    imagem: "redon-still-life",
    cor: "var(--lilas)",
    leitura: "6 min",
    rascunho: true,
    corpo: ["Texto de exemplo. Arte e manifestações simbólicas: obras que conversam com o inconsciente."],
  },
  {
    slug: "por-que-revemos-o-mesmo-filme",
    titulo: "Por que a gente revê o mesmo filme?",
    chamada: "Repetição, conforto e aquilo que só aparece na terceira vez.",
    categoria: "Cinema e séries",
    formato: "citacao",
    imagem: "degas-star",
    cor: "var(--rosa)",
    leitura: "4 min",
    rascunho: true,
    corpo: ["Texto de exemplo para a seção Cinema e séries."],
  },
  {
    slug: "o-vulcao-como-imagem",
    titulo: "O vulcão como imagem",
    chamada: "Quando o corpo adoece, as imagens também falam. Notas a partir da clínica hospitalar.",
    categoria: "Psicologia e subjetividade",
    formato: "capa",
    imagem: "volaire-vesuvius",
    cor: "var(--amarelo)",
    leitura: "9 min",
    rascunho: true,
    corpo: ["Texto de exemplo. Um desdobramento acessível da pesquisa “Do Vulcão ao Guerreiro”."],
  },
  {
    slug: "a-janela-e-o-quarto",
    titulo: "A janela e o quarto",
    chamada: "Sobre solidão, intimidade e o tempo que a gente passa olhando para fora.",
    categoria: "Reflexões",
    formato: "retrato",
    imagem: "vermeer-jarro",
    cor: "var(--creme-2)",
    leitura: "5 min",
    rascunho: true,
    corpo: ["Texto de exemplo para a seção Reflexões pessoais."],
  },
  {
    slug: "uma-musica-para-cada-hora",
    titulo: "Uma música para cada hora do dia",
    chamada: "Os ragas indianos tinham horário certo para tocar. E as nossas playlists?",
    categoria: "Música",
    formato: "retrato",
    imagem: "ragamala-hindol",
    cor: "var(--amarelo)",
    leitura: "4 min",
    rascunho: true,
    corpo: ["Texto de exemplo. Curiosidades musicais e o que elas dizem sobre nós."],
  },
];

// ── Idioma ──────────────────────────────────────────────────
import type { Lingua } from "@/lib/lingua";
import { categoriasEn, textosEn } from "./en/caderno";

/** O texto no idioma da página (em inglês, só as palavras mudam). */
export function emLingua(t: Texto, l: Lingua): Texto {
  if (l === "pt") return t;
  const e = textosEn[t.slug];
  return e ? { ...t, titulo: e.titulo, chamada: e.chamada, corpo: e.corpo ?? t.corpo, lista: e.lista ?? t.lista, leitura: t.leitura === "especial" ? "special" : t.leitura } : t;
}

/** Nome da categoria no idioma da página. */
export const nomeCategoria = (c: Categoria, l: Lingua) => (l === "en" ? categoriasEn[c] : c);

export const especiaisEm = (l: Lingua) => especiais.map((t) => emLingua(t, l));
export const textosEm = (l: Lingua) => textos.map((t) => emLingua(t, l));
