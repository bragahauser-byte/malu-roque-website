"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { Obra } from "./Obra";

/**
 * Cartão-postal que vira ao clicar (ou com Enter/Espaço).
 * Frente: íris de Hokusai. Verso: o endereço da correspondência.
 */
export function Postal() {
  const [virado, setVirado] = useState(false);
  return (
    <div className="postal-wrap revelar" style={{ "--atraso": "0.2s" } as React.CSSProperties}>
      <button
        className={`postal ${virado ? "postal--virado" : ""}`}
        onClick={() => setVirado((v) => !v)}
        aria-pressed={virado}
        aria-label={virado ? "Mostrar a frente do cartão-postal" : "Virar o cartão-postal"}
        data-cursor="virar"
      >
        <span className="postal__face postal__frente">
          <Obra chave="hokusai-iris" alt="" />
          <span className="postal__saudacao">
            Lembranças
            <br />
            de {site.cidade}
          </span>
        </span>
        <span className="postal__face postal__verso" aria-hidden={!virado}>
          <span className="postal__mensagem">
            Oi, Malu!
            <br />
            Gostaria de saber mais sobre o atendimento…
          </span>
          <span className="postal__endereco">
            <span className="postal__selo">
              <Obra chave="redon-sita" pequena alt="" />
            </span>
            <span className="postal__carimbo rotulo">
              {site.cidade}
              <br />
              {site.edicao.ano}
            </span>
            <span className="postal__linha">{site.nomeConselho}</span>
            <span className="postal__linha">{site.redes.instagram.usuario}</span>
            <span className="postal__linha">Psicologia Analítica</span>
          </span>
        </span>
      </button>
      <p className="ui postal__dica">Clique no cartão para virar.</p>
    </div>
  );
}
