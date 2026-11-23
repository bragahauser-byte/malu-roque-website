"use client";

import { useMemo, useState } from "react";
import { categorias, textos, type Categoria } from "@/content/caderno";
import { CartaoTexto } from "./CartaoTexto";
import { ListaComImagem } from "./ListaComImagem";

/**
 * Índice do Caderno: filtros por categoria (como um sumário corrido),
 * contador e alternância entre "mesa" (grade de cartões variados) e
 * "lista" (títulos grandes com a imagem flutuando no hover).
 */

// Ritmo da grade: cada posição ocupa uma largura diferente (em colunas de 12).
const RITMO = ["g7", "g5", "g4", "g4", "g4", "g5", "g7", "g6", "g6", "g4", "g4", "g4"];

export function CadernoIndice() {
  const [filtro, setFiltro] = useState<Categoria | "Tudo">("Tudo");
  const [modo, setModo] = useState<"mesa" | "lista">("mesa");

  const presentes = useMemo(() => categorias.filter((c) => textos.some((t) => t.categoria === c)), []);
  const visiveis = filtro === "Tudo" ? textos : textos.filter((t) => t.categoria === filtro);

  return (
    <div className="caderno-indice">
      <div className="caderno-indice__barra envoltorio">
        <div className="caderno-indice__filtros ui" role="group" aria-label="Filtrar por categoria">
          {(["Tudo", ...presentes] as const).map((c, i, arr) => (
            <span key={c}>
              <button className={`caderno-indice__filtro ${filtro === c ? "ativo" : ""}`} aria-pressed={filtro === c} onClick={() => setFiltro(c)}>
                {c}
              </button>
              {i < arr.length - 1 && <span aria-hidden="true">, </span>}
            </span>
          ))}
        </div>
        <div className="caderno-indice__direita ui">
          <span aria-live="polite">
            {visiveis.length} {visiveis.every((t) => t.rascunho) ? (visiveis.length === 1 ? "rascunho" : "rascunhos") : visiveis.length === 1 ? "texto" : "textos"}
          </span>
          <div className="caderno-indice__modos" role="group" aria-label="Modo de visualização">
            <button aria-pressed={modo === "mesa"} onClick={() => setModo("mesa")} title="Mesa (grade)" data-cursor="mesa">
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <rect x="1" y="1" width="6" height="6" />
                <rect x="9" y="1" width="6" height="6" />
                <rect x="1" y="9" width="6" height="6" />
                <rect x="9" y="9" width="6" height="6" />
              </svg>
              <span className="sr-only">Mesa</span>
            </button>
            <button aria-pressed={modo === "lista"} onClick={() => setModo("lista")} title="Lista" data-cursor="lista">
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <rect x="1" y="2" width="14" height="2" />
                <rect x="1" y="7" width="14" height="2" />
                <rect x="1" y="12" width="14" height="2" />
              </svg>
              <span className="sr-only">Lista</span>
            </button>
          </div>
        </div>
      </div>

      {modo === "mesa" ? (
        <div className="mesa envoltorio" key={filtro}>
          {visiveis.map((t, i) => (
            <CartaoTexto key={t.slug} texto={t} indice={i} className={RITMO[i % RITMO.length]} />
          ))}
        </div>
      ) : (
        <div className="envoltorio caderno-indice__lista" key={"l" + filtro}>
          <ListaComImagem
            cursor="ler"
            itens={visiveis.map((t, i) => ({
              href: `/caderno/${t.slug}/`,
              numero: String(i + 1).padStart(2, "0"),
              titulo: t.titulo,
              sub: `${t.categoria} · rascunho`,
              imagem: t.imagem,
              cor: t.cor,
            }))}
          />
        </div>
      )}
    </div>
  );
}
