import { whatsappUrl } from "@/content/site";

/**
 * Botão de WhatsApp. Abre a conversa com a mensagem pré-preenchida
 * (neutra, sem pressupor gênero, idade ou motivo). Número e mensagem
 * ficam em src/content/site.ts.
 */
export function BotaoWhatsapp({ cheio = false, texto = "Conversar pelo WhatsApp" }: { cheio?: boolean; texto?: string; claro?: boolean }) {
  const url = whatsappUrl();
  const classe = `botao ${cheio ? "botao--cheio" : ""}`;
  if (!url) {
    return (
      <span className={classe} aria-disabled="true">
        WhatsApp em configuração
      </span>
    );
  }
  return (
    <a className={classe} href={url} target="_blank" rel="noopener noreferrer">
      {texto} <span className="seta" aria-hidden="true">↗</span>
      <span className="sr-only"> (abre o WhatsApp em uma nova aba)</span>
    </a>
  );
}
