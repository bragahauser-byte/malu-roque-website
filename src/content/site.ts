// ─────────────────────────────────────────────────────────────
// CONFIGURAÇÃO GERAL DO SITE
// Troque aqui contatos, redes, número de WhatsApp e dados da edição.
// ─────────────────────────────────────────────────────────────

export const site = {
  nome: "Maria Luiza Roque",
  nomeConselho: "Maria Luiza D. Roque",
  apelido: "Malu Roque",
  profissao: "Psicóloga",
  /** Número do CRP. Deixe "" enquanto não quiser exibir. Ex.: "06/123456" */
  crp: "",
  conceito: "Entre o visível e o simbólico",
  descricao:
    "Maria Luiza Roque (Malu Roque), psicóloga clínica de orientação junguiana. Um espaço editorial de psicologia, cultura e subjetividade.",
  edicao: { numero: "01", estacao: "Primavera", ano: "2026" },
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

export const navegacao = [
  { href: "/", numero: "00", titulo: "Capa", sub: "Entre o visível e o simbólico", imagem: "redon-flower-clouds" },
  { href: "/sobre/", numero: "01", titulo: "Quem escuta", sub: "Sobre Maria Luiza Roque", imagem: "munch-window" },
  { href: "/atendimento/", numero: "02", titulo: "O consultório", sub: "Psicoterapia e abordagem junguiana", imagem: "redon-still-life" },
  { href: "/caderno/", numero: "03", titulo: "Caderno", sub: "Psicologia, cultura e cotidiano", imagem: "manet-reading" },
  { href: "/pesquisas/", numero: "04", titulo: "Pesquisa", sub: "Produção acadêmica", imagem: "redon-sita" },
  { href: "/contato/", numero: "05", titulo: "Correspondência", sub: "Contato e agendamento", imagem: "hokusai-iris" },
] as const;

export function whatsappUrl() {
  if (!site.whatsapp) return null;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.mensagemWhatsapp)}`;
}
