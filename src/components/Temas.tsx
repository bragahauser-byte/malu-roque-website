"use client";

import { useState } from "react";
import { temas } from "@/content/perfil";
import { img } from "@/lib/asset";
import { arte } from "@/content/arte";
import { Janela } from "./Janela";

/**
 * Temas de atuação: lista com pequenos símbolos de cor (homenagem à lista
 * de programas da Obama Foundation). Ao passar o mouse, focar ou tocar,
 * o tema se abre e a janela ao lado troca de obra.
 */
export function Temas() {
  const [ativo, setAtivo] = useState(0);
  const obra = arte[temas[ativo].imagem];
  return (
    <div className="temas grade">
      <ul className="temas__lista">
        {temas.map((t, i) => (
          <li key={t.titulo} className={i === ativo ? "temas__li--ativo" : ""}>
            <button
              className="temas__item"
              aria-expanded={i === ativo}
              onPointerEnter={(e) => e.pointerType === "mouse" && setAtivo(i)}
              onFocus={() => setAtivo(i)}
              onClick={() => setAtivo(i)}
              style={{ "--c": t.cor } as React.CSSProperties}
            >
              <span className="rotulo temas__n">{String(i + 1).padStart(2, "0")}</span>
              <span className={`temas__forma temas__forma--${t.forma}`} aria-hidden="true" />
              <span className="temas__titulo">{t.titulo}</span>
            </button>
            <div className="temas__texto" hidden={i !== ativo}>
              <p>{t.texto}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="temas__janela" aria-hidden="true">
        <Janela simples>
          {temas.map((t, i) => (
            <img key={t.titulo} src={img(t.imagem)} alt="" className={i === ativo ? "ativa" : ""} loading="lazy" />
          ))}
        </Janela>
        <p className="credito">
          {obra.artista}, <em>{obra.titulo}</em> ({obra.ano})
        </p>
      </div>
    </div>
  );
}
