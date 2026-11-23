// ─────────────────────────────────────────────────────────────
// CADERNO — revista / journal
// ATENÇÃO: todos os textos abaixo são RASCUNHOS DE DEMONSTRAÇÃO,
// escritos para testar o layout. Não são artigos publicados.
// Para publicar um texto de verdade: troque `rascunho: true` por
// `rascunho: false`, revise título, chamada e corpo.
//
// formato → muda a composição do cartão no índice:
//   "capa"     imagem grande, título sobreposto
//   "retrato"  imagem vertical com legenda ao lado
//   "citacao"  só tipografia, fundo colorido
//   "disco"    um disco de vinil gira no hover
//   "postal"   cartão-postal com carimbo
//   "lista"    lista numerada
// ─────────────────────────────────────────────────────────────
import type { ChaveArte } from "./arte";

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
  formato: "capa" | "retrato" | "citacao" | "disco" | "postal" | "lista";
  imagem?: ChaveArte;
  cor: string;
  leitura: string;
  rascunho: boolean;
  corpo: string[];
  lista?: string[];
};

export const textos: Texto[] = [
  {
    slug: "o-que-os-contos-de-fadas-sabem-sobre-crescer",
    titulo: "O que os contos de fadas sabem sobre crescer",
    chamada: "Florestas escuras, provas impossíveis e a velha pergunta: quem eu me torno quando saio de casa?",
    categoria: "Sonhos e símbolos",
    formato: "capa",
    imagem: "moreau-inspiration",
    cor: "var(--lavanda)",
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
    cor: "var(--tule)",
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
    cor: "var(--nevoa)",
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
    cor: "var(--portal)",
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
    cor: "var(--ardosia)",
    leitura: "1 min",
    rascunho: true,
    corpo: ["Texto de exemplo. Notas curtas, quase aforismos, sobre a linguagem simbólica."],
  },
  {
    slug: "milao-cadernos-de-um-semestre",
    titulo: "Milão, cadernos de um semestre",
    chamada: "Um roteiro afetivo de quem morou lá estudando Psicologia, em 2023.",
    categoria: "Viagens",
    formato: "postal",
    imagem: "whistler-nocturne",
    cor: "var(--ambar)",
    leitura: "8 min",
    rascunho: true,
    corpo: ["Texto de exemplo para a seção Viagens: roteiros, fotografias e descobertas."],
  },
  {
    slug: "livros-de-cabeceira",
    titulo: "Livros de cabeceira (uma lista viva)",
    chamada: "O que está na pilha, o que foi lido e amado, o que ficou pela metade.",
    categoria: "Livros",
    formato: "lista",
    imagem: "manet-reading",
    cor: "var(--malva)",
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
    cor: "var(--lavanda-clara)",
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
    cor: "var(--tule)",
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
    cor: "var(--ambar)",
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
    imagem: "munch-window",
    cor: "var(--ardosia)",
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
    cor: "var(--lima)",
    leitura: "4 min",
    rascunho: true,
    corpo: ["Texto de exemplo. Curiosidades musicais e o que elas dizem sobre nós."],
  },
];
