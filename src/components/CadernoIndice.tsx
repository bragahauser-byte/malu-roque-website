"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { categorias, especiaisEm, nomeCategoria, textosEm, type Categoria } from "@/content/caderno";
import { rota } from "@/lib/lingua";
import { useLingua } from "@/lib/useLingua";
import { fonteImagem } from "@/lib/imagens";
import { CartaoTexto } from "./CartaoTexto";
import { Arco } from "./Arco";

/**
 * Índice do Caderno (estudo de camilarosa.net/work): filtros corridos,
 * contador e dois modos de ver.
 *  - mesa: grade de 12 colunas com ritmo fixo de larguras (8+4, 4+4+4, 6+6…)
 *  - lista: títulos grandes em réguas; o arco fixo à direita mostra a
 *    imagem do texto sob o mouse (sem nada seguindo o ponteiro).
 */

const RITMO = ["g8", "g4", "g4", "g4", "g4", "g6", "g6", "g4", "g4", "g4", "g12"];

export function CadernoIndice() {
  const { l, t: tr } = useLingua();
  const textos = useMemo(() => textosEm(l), [l]);
  const especiais = useMemo(() => especiaisEm(l), [l]);
  const [filtro, setFiltro] = useState<Categoria | "Tudo">("Tudo");
  const [modo, setModo] = useState<"mesa" | "lista">("mesa");
  const [ativo, setAtivo] = useState(0);

  const presentes = useMemo(() => categorias.filter((c) => textos.some((t) => t.categoria === c)), [textos]);
  const visiveis = filtro === "Tudo" ? textos : textos.filter((t) => t.categoria === filtro);
  const emFoco = visiveis[Math.min(ativo, visiveis.length - 1)];

  return (
    <>
    <section className="caderno-especiais" aria-labelledby="h-especiais">
      <div className="secao-cabeca grade">
        <span className="secao-cabeca__num rotulo">{String(especiais.length).padStart(2, "0")}</span>
        <span className="secao-cabeca__nome chapeu" id="h-especiais">{tr("Especiais", "Specials")}</span>
        <h2 className="secao-cabeca__titulo titulo">
          {tr("Viagens, intercâmbios ", "Travel, exchanges ")}<em>{tr("e discos", "and records")}</em>
        </h2>
      </div>
      <div className="mesa grade">
        {especiais.map((t, i) => (
          <CartaoTexto key={t.slug} texto={t} indice={i} className="g4" />
        ))}
      </div>
    </section>
    <section className="caderno-indice" aria-label={tr("Textos do caderno", "Notebook texts")}>
      <div className="caderno-indice__barra grade">
        <div className="caderno-indice__filtros ui" role="group" aria-label={tr("Filtrar por categoria", "Filter by category")}>
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
                {c === "Tudo" ? tr("Tudo", "All") : nomeCategoria(c, l)}
              </button>
              {i < arr.length - 1 && <span aria-hidden="true">, </span>}
            </span>
          ))}
        </div>
        <div className="caderno-indice__direita ui">
          <span aria-live="polite">
            {visiveis.length} {visiveis.length === 1 ? tr("rascunho", "draft") : tr("rascunhos", "drafts")}
          </span>
          <div className="caderno-indice__modos" role="group" aria-label={tr("Modo de visualização", "View mode")}>
            <button aria-pressed={modo === "mesa"} onClick={() => setModo("mesa")}>
              {tr("Mesa", "Table")}
            </button>
            <button aria-pressed={modo === "lista"} onClick={() => setModo("lista")}>
              {tr("Lista", "List")}
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
                  href={rota(l, `/caderno/${t.slug}/`)}
                  className={`caderno-lista__item ${i === ativo ? "ativo" : ""}`}
                  onPointerEnter={() => setAtivo(i)}
                  onFocus={() => setAtivo(i)}
                >
                  <span className="rotulo">{String(i + 1).padStart(2, "0")}</span>
                  <span className="caderno-lista__titulo">{t.titulo}</span>
                  <span className="caderno-lista__sub ui">
                    {nomeCategoria(t.categoria, l)} · {tr("rascunho", "draft")}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
          <div className="caderno-lista__arco" aria-hidden="true">
            <Arco style={{ "--fundo-vista": emFoco?.cor } as React.CSSProperties}>
              {visiveis.map((t, i) => { const f = fonteImagem(t.imagem); return <img key={t.slug} src={f.src} srcSet={f.srcSet} sizes="(max-width: 1023px) 0px, 25vw" alt="" loading="lazy" className={i === ativo ? "ativa" : ""} />; })}
            </Arco>
          </div>
        </div>
      )}
    </section>
    </>
  );
}
