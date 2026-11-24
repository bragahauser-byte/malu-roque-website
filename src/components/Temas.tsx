"use client";

import { useState } from "react";
import { temas } from "@/content/perfil";
import { Obra } from "./Obra";
import { arte } from "@/content/arte";
import { Arco } from "./Arco";

/**
 * Temas de atuação: lista com pequenos símbolos de cor (homenagem à lista
 * de programas da Obama Foundation). Ao passar o mouse, focar ou tocar,
 * o tema se abre e o arco ao lado troca de obra.
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
      <div className="temas__arco" aria-hidden="true">
        <Arco>
          {temas.map((t, i) => (
            <Obra key={t.titulo} chave={t.imagem} alt="" className={i === ativo ? "ativa" : ""} tamanhos="(max-width: 1023px) 0px, 30vw" />
          ))}
        </Arco>
        <p className="credito">
          {obra.artista}, <em>{obra.titulo}</em> ({obra.ano})
        </p>
      </div>
    </div>
  );
}
