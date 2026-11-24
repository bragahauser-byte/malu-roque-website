// ─────────────────────────────────────────────────────────────
// CONFIGURAÇÃO GERAL DO SITE
// Troque aqui contatos, redes, número de WhatsApp e registro profissional.
// ─────────────────────────────────────────────────────────────

export const site = {
  nome: "Maria Luiza Roque",
  nomeConselho: "Maria Luiza D. Roque",
  apelido: "Malu Roque",
  profissao: "Psicóloga",
  /** Registro no Conselho Regional de Psicologia (6ª Região, SP). */
  crp: "06/214718",
  conceito: "Entre o visível e o simbólico",
  descricao:
    "Maria Luiza Roque (Malu Roque), psicóloga clínica de orientação junguiana. Um espaço editorial de psicologia, cultura e subjetividade.",
  cidade: "São Paulo",

  /**
   * WhatsApp: só números, com país e DDD. Ex.: "5511912345678".
   * Enquanto estiver vazio, o botão aparece como "número em configuração".
   */
  whatsapp: "",
  mensagemWhatsapp:
    "Olá, Malu! Encontrei seu site e gostaria de informações sobre atendimento.",

  redes: {
    instagram: { rotulo: "Instagram", usuario: "@maluroque.psi", url: "https://www.instagram.com/maluroque.psi/" },
    tiktok: { rotulo: "TikTok", usuario: "@maluroque.psi", url: "https://www.tiktok.com/@maluroque.psi" },
    // TODO: trocar pela URL exata do perfil (linkedin.com/in/...). Por enquanto, busca pelo nome.
    linkedin: {
      rotulo: "LinkedIn",
      usuario: "Maria Luiza Dias Roque",
      url: "https://www.linkedin.com/search/results/people/?keywords=Maria%20Luiza%20Dias%20Roque",
    },
  },
} as const;

/** Menu principal. "curto" é o nome no cabeçalho; "titulo" é o nome editorial da página. */
export const navegacao = [
  { href: "/sobre/", curto: "Sobre", titulo: "Quem escuta" },
  { href: "/atendimento/", curto: "Atendimento", titulo: "O consultório" },
  { href: "/caderno/", curto: "Caderno", titulo: "Caderno" },
  { href: "/pesquisas/", curto: "Pesquisa", titulo: "Pesquisa" },
  { href: "/contato/", curto: "Contato", titulo: "Correspondência" },
] as const;

export function whatsappUrl() {
  if (!site.whatsapp) return null;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.mensagemWhatsapp)}`;
}
