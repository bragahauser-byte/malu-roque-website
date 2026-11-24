"use client";

import { whatsappUrl } from "@/content/site";
import { useLingua } from "@/lib/useLingua";

/**
 * Botão de WhatsApp. Abre a conversa com a mensagem pré-preenchida
 * (neutra, sem pressupor gênero, idade ou motivo), no idioma da página.
 * Número e mensagens ficam em src/content/site.ts.
 */
export function BotaoWhatsapp({ cheio = false, texto }: { cheio?: boolean; texto?: string; claro?: boolean }) {
  const { l, t } = useLingua();
  const url = whatsappUrl(l);
  const classe = `botao ${cheio ? "botao--cheio" : ""}`;
  if (!url) {
    return (
      <span className={classe} aria-disabled="true">
        {t("WhatsApp em configuração", "WhatsApp coming soon")}
      </span>
    );
  }
  return (
    <a className={classe} href={url} target="_blank" rel="noopener noreferrer">
      {texto ?? t("Conversar pelo WhatsApp", "Message on WhatsApp")} <span className="seta" aria-hidden="true">↗</span>
      <span className="sr-only">{t(" (abre o WhatsApp em uma nova aba)", " (opens WhatsApp in a new tab)")}</span>
    </a>
  );
}
