"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { categorias, textos, type Categoria } from "@/content/caderno";
import { img } from "@/lib/asset";
import { CartaoTexto } from "./CartaoTexto";
import { Janela } from "./Janela";

/**
 * Índice do Caderno (estudo de camilarosa.net/work): filtros corridos,
 * contador e dois modos de ver.
 *  - mesa: grade de 12 colunas com ritmo fixo de larguras (8+4, 4+4+4, 6+6…)
 *  - lista: títulos grandes em réguas; a janela fixa à direita mostra a
 *    imagem do texto sob o mouse (sem nada seguindo o ponteiro).
 */

const RITMO = ["g8", "g4", "g4", "g4", "g4", "g6", "g6", "g4", "g4", "g4", "g8", "g4"];

export function CadernoIndice() {
  const [filtro, setFiltro] = useState<Categoria | "Tudo">("Tudo");
  const [modo, setModo] = useState<"mesa" | "lista">("mesa");
  const [ativo, setAtivo] = useState(0);

  const presentes = useMemo(() => categorias.filter((c) => textos.some((t) => t.categoria === c)), []);
  const visiveis = filtro === "Tudo" ? textos : textos.filter((t) => t.categoria === filtro);
  const emFoco = visiveis[Math.min(ativo, visiveis.length - 1)];

  return (
    <section className="caderno-indice" aria-label="Textos do caderno">
      <div className="caderno-indice__barra grade">
        <div className="caderno-indice__filtros ui" role="group" aria-label="Filtrar por categoria">
          {(["Tudo", ...presentes] as const).map((c, i, arr) => (
            <span key={c}>
              <button
                className={`caderno-indice__filtro ${filtro === c ? "ativo" : ""}`}
                aria-pressed={filtro === c}
                onClick={() => {
                  setFiltro(c);
                  setAtivo(0);
                }}
              >
                {c}
              </button>
              {i < arr.length - 1 && <span aria-hidden="true">, </span>}
            </span>
          ))}
        </div>
        <div className="caderno-indice__direita ui">
          <span aria-live="polite">
            {visiveis.length} {visiveis.length === 1 ? "rascunho" : "rascunhos"}
          </span>
          <div className="caderno-indice__modos" role="group" aria-label="Modo de visualização">
            <button aria-pressed={modo === "mesa"} onClick={() => setModo("mesa")}>
              Mesa
            </button>
            <button aria-pressed={modo === "lista"} onClick={() => setModo("lista")}>
              Lista
            </button>
          </div>
        </div>
      </div>

      {modo === "mesa" ? (
        <div className="mesa grade" key={filtro}>
          {visiveis.map((t, i) => (
            <CartaoTexto key={t.slug} texto={t} indice={i} className={RITMO[i % RITMO.length]} />
          ))}
        </div>
      ) : (
        <div className="caderno-lista grade" key={"l" + filtro}>
          <ol className="caderno-lista__itens">
            {visiveis.map((t, i) => (
              <li key={t.slug}>
                <Link
                  href={`/caderno/${t.slug}/`}
                  className={`caderno-lista__item ${i === ativo ? "ativo" : ""}`}
                  onPointerEnter={() => setAtivo(i)}
                  onFocus={() => setAtivo(i)}
                >
                  <span className="rotulo">{String(i + 1).padStart(2, "0")}</span>
                  <span className="caderno-lista__titulo">{t.titulo}</span>
                  <span className="caderno-lista__sub ui">
                    {t.categoria} · rascunho
                  </span>
                </Link>
              </li>
            ))}
          </ol>
          <div className="caderno-lista__janela" aria-hidden="true">
            <Janela style={{ "--fundo-vista": emFoco?.cor } as React.CSSProperties}>
              {visiveis.map((t, i) => (t.imagem ? <img key={t.slug} src={img(t.imagem, true)} alt="" loading="lazy" className={i === ativo ? "ativa" : ""} /> : null))}
            </Janela>
          </div>
        </div>
      )}
    </section>
  );
}
