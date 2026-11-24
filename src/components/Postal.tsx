"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { Obra } from "./Obra";
import { useLingua } from "@/lib/useLingua";

/**
 * Cartão-postal que vira ao clicar (ou com Enter/Espaço).
 * Frente: íris de Hokusai. Verso: o endereço da correspondência.
 */
export function Postal() {
  const { t } = useLingua();
  const [virado, setVirado] = useState(false);
  return (
    <div className="postal-wrap revelar" style={{ "--atraso": "0.2s" } as React.CSSProperties}>
      <button
        className={`postal ${virado ? "postal--virado" : ""}`}
        onClick={() => setVirado((v) => !v)}
        aria-pressed={virado}
        aria-label={virado ? t("Mostrar a frente do cartão-postal", "Show the front of the postcard") : t("Virar o cartão-postal", "Turn the postcard over")}
       
      >
        <span className="postal__face postal__frente">
          <Obra chave="hokusai-iris" alt="" />
          <span className="postal__saudacao">
            {t("Lembranças", "Greetings")}
            <br />
            {t("de", "from")} {site.cidade}
          </span>
        </span>
        <span className="postal__face postal__verso" aria-hidden={!virado}>
          <span className="postal__mensagem">
            {t("Oi, Malu!", "Hi, Malu!")}
            <br />
            {t("Gostaria de saber mais sobre o atendimento…", "I would like to know more about the sessions…")}
          </span>
          <span className="postal__endereco">
            <span className="postal__selo">
              <Obra chave="redon-sita" pequena alt="" />
            </span>
            <span className="postal__carimbo rotulo">
              {site.cidade}
              <br />
              SP
            </span>
            <span className="postal__linha">{site.nomeConselho}</span>
            <span className="postal__linha">{site.redes.instagram.usuario}</span>
            <span className="postal__linha">CRP {site.crp}</span>
          </span>
        </span>
      </button>
      <p className="ui postal__dica">{t("Clique no cartão para virar.", "Click the card to turn it over.")}</p>
    </div>
  );
}
