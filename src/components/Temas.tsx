"use client";

import { useState } from "react";
import { temas } from "@/content/perfil";
import { img } from "@/lib/asset";
import { arte } from "@/content/arte";

/**
 * Temas de atuação: uma lista com pequenos símbolos coloridos
 * (homenagem à lista de programas do Obama.org). Ao passar o mouse,
 * focar com o teclado ou tocar, o tema se abre e a moldura ao lado troca de obra.
 */
export function Temas() {
  const [ativo, setAtivo] = useState(0);
  return (
    <div className="temas">
      <div className="temas__moldura" aria-hidden="true">
        {temas.map((t, i) => (
          <img key={t.titulo} src={img(t.imagem)} alt="" className={i === ativo ? "ativa" : ""} loading="lazy" />
        ))}
        <span className="temas__legenda rotulo">
          {arte[temas[ativo].imagem].artista}, {arte[temas[ativo].imagem].ano}
        </span>
      </div>
      <ul className="temas__lista">
        {temas.map((t, i) => (
          <li key={t.titulo}>
            <button
              className={`temas__item ${i === ativo ? "temas__item--ativo" : ""}`}
              aria-expanded={i === ativo}
              onPointerEnter={(e) => e.pointerType === "mouse" && setAtivo(i)}
              onFocus={() => setAtivo(i)}
              onClick={() => setAtivo(i)}
              style={{ "--c": t.cor } as React.CSSProperties}
            >
              <span className={`temas__forma temas__forma--${t.forma}`} aria-hidden="true" />
              <span className="temas__titulo">{t.titulo}</span>
            </button>
            <div className="temas__texto" hidden={i !== ativo}>
              <p>{t.texto}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
