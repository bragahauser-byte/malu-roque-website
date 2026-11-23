import { whatsappUrl } from "@/content/site";

/**
 * Botão de WhatsApp. O número fica em src/content/site.ts (campo `whatsapp`).
 * Enquanto estiver vazio, o botão aparece desativado.
 */
export function BotaoWhatsapp({ claro = false, texto = "Conversar pelo WhatsApp" }: { claro?: boolean; texto?: string }) {
  const url = whatsappUrl();
  const classe = `botao ${claro ? "botao--claro" : ""}`;
  if (!url) {
    return (
      <span className={classe} aria-disabled="true" title="Número de WhatsApp ainda não configurado">
        WhatsApp · número em configuração
      </span>
    );
  }
  return (
    <a className={classe} href={url} target="_blank" rel="noopener noreferrer" data-cursor="oi!">
      {texto} <span className="seta" aria-hidden="true">→</span>
    </a>
  );
}
