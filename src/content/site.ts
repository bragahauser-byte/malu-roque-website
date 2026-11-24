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
    "Maria Luiza Roque, psicóloga (CRP 06/214718) de orientação junguiana. Atendimento psicológico online para pessoas de todo o Brasil.",
  /** Onde a psicóloga atua. Não há consultório físico aberto ao público. */
  cidade: "São Paulo",
  estado: "SP",
  /** Modalidade atual: exclusivamente online. */
  atendimento: "Atendimento online para todo o Brasil",

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

/** Menu principal. "curto" é o nome no cabeçalho; "titulo" é o nome editorial da página. */
export const navegacao = [
  { href: "/sobre/", curto: "Sobre", titulo: "Quem escuta" },
  { href: "/atendimento/", curto: "Atendimento", titulo: "Psicoterapia online" },
  { href: "/caderno/", curto: "Caderno", titulo: "Caderno" },
  { href: "/pesquisas/", curto: "Pesquisa", titulo: "Pesquisa" },
  { href: "/contato/", curto: "Contato", titulo: "Correspondência" },
] as const;

/** Link do WhatsApp com a mensagem pré-preenchida (codificação igual à do link aprovado). */
export function whatsappUrl() {
  if (!site.whatsapp) return null;
  const texto = encodeURIComponent(site.mensagemWhatsapp).replace(/!/g, "%21");
  return `https://wa.me/${site.whatsapp}?text=${texto}`;
}
