// ─────────────────────────────────────────────────────────────
// CONFIGURAÇÃO GERAL DO SITE
// Troque aqui contatos, redes, número de WhatsApp e registro profissional.
// ─────────────────────────────────────────────────────────────

import type { Lingua } from "@/lib/lingua";

export const site = {
  nome: "Maria Luiza Roque",
  nomeConselho: "Maria Luiza D. Roque",
  apelido: "Malu Roque",
  profissao: "Psicóloga",
  /** Registro no Conselho Regional de Psicologia (6ª Região, SP). */
  crp: "06/214718",
  conceito: "Entre o visível e o simbólico",
  descricao:
    "Maria Luiza Roque, psicóloga (CRP 06/214718) de orientação junguiana. Atendimento psicológico online, em português e em inglês, para pessoas em qualquer lugar do mundo.",
  /** Onde a psicóloga atua. Não há consultório físico aberto ao público. */
  cidade: "São Paulo",
  estado: "SP",
  /** Modalidade atual: exclusivamente online, para o Brasil e o exterior (v7). */
  atendimento: "Atendimento online para o Brasil e o mundo",

  /** WhatsApp profissional: só números, com país e DDD. */
  whatsapp: "5511999834047",
  whatsappLegivel: "+55 11 99983-4047",
  /** Mensagem neutra: não pressupõe gênero, idade, diagnóstico ou motivo. */
  mensagemWhatsapp:
    "Olá! Encontrei seu site e gostaria de informações sobre o atendimento psicológico. Poderia me explicar como funciona?",

  redes: {
    instagram: { rotulo: "Instagram", usuario: "@maluroque.psi", url: "https://www.instagram.com/maluroque.psi/" },
    tiktok: { rotulo: "TikTok", usuario: "@maluroque.psi", url: "https://www.tiktok.com/@maluroque.psi" },
    linkedin: { rotulo: "LinkedIn", usuario: "Maria Luiza Dias Roque", url: "https://www.linkedin.com/in/maria-luiza-dias-roque/" },
  },
} as const;

/** O que muda na versão em inglês. */
export const siteEn = {
  profissao: "Psychologist",
  conceito: "Between the visible and the symbolic",
  descricao:
    "Maria Luiza Roque, Jungian psychologist (CRP 06/214718, Brazil). Online psychotherapy in English and Portuguese for people anywhere in the world.",
  atendimento: "Online sessions for Brazil and the world",
  mensagemWhatsapp: "Hello! I found your website and would like some information about psychotherapy. Could you tell me how it works?",
} as const;

/** Dados do site no idioma da página. */
export function dados(l: Lingua) {
  return l === "en" ? { ...site, ...siteEn } : site;
}

/** Menu principal. "curto" é o nome no cabeçalho; "titulo" é o nome editorial da página. `en`: os mesmos em inglês. */
export const navegacao = [
  { href: "/sobre/", curto: "Sobre", titulo: "Quem escuta", en: { curto: "About", titulo: "Who listens" } },
  { href: "/atendimento/", curto: "Atendimento", titulo: "Psicoterapia online", en: { curto: "Therapy", titulo: "Online psychotherapy" } },
  { href: "/caderno/", curto: "Caderno", titulo: "Caderno", en: { curto: "Notebook", titulo: "Notebook" } },
  { href: "/pesquisas/", curto: "Pesquisa", titulo: "Pesquisa", en: { curto: "Research", titulo: "Research" } },
  { href: "/contato/", curto: "Contato", titulo: "Correspondência", en: { curto: "Contact", titulo: "Correspondence" } },
] as const;

/** Link do WhatsApp com a mensagem pré-preenchida (codificação igual à do link aprovado). */
export function whatsappUrl(l: Lingua = "pt") {
  if (!site.whatsapp) return null;
  const texto = encodeURIComponent(dados(l).mensagemWhatsapp).replace(/!/g, "%21");
  return `https://wa.me/${site.whatsapp}?text=${texto}`;
}
