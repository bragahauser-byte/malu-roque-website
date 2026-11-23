"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { ChaveArte } from "@/content/arte";
import { img } from "@/lib/asset";

export type ItemLista = { href: string; numero: string; titulo: string; sub: string; imagem?: ChaveArte; cor?: string };

/**
 * Lista editorial: cada linha se pinta de cor no hover e a obra
 * correspondente aparece flutuando junto ao ponteiro, levemente inclinada
 * conforme a direção do movimento.
 */
export function ListaComImagem({ itens, cursor = "abrir" }: { itens: ItemLista[]; cursor?: string }) {
  const [ativo, setAtivo] = useState<number | null>(null);
  const flut = useRef<HTMLDivElement>(null);
  const ultimoX = useRef(0);

  const mover = (e: React.PointerEvent) => {
    const f = flut.current;
    if (!f) return;
    const dx = e.clientX - ultimoX.current;
    ultimoX.current = e.clientX;
    f.style.setProperty("--fx", `${e.clientX}px`);
    f.style.setProperty("--fy", `${e.clientY}px`);
    f.style.setProperty("--rot", `${Math.max(-10, Math.min(10, dx * 0.6))}deg`);
  };

  return (
    <div className="lista-imagem" onPointerMove={mover} onPointerLeave={() => setAtivo(null)}>
      {itens.map((it, i) => (
        <Link
          key={it.href}
          href={it.href}
          className="lista-imagem__item"
          style={{ "--c": it.cor ?? "var(--lavanda)" } as React.CSSProperties}
          onPointerEnter={() => setAtivo(i)}
          onFocus={() => setAtivo(i)}
          onBlur={() => setAtivo(null)}
          data-cursor={cursor}
        >
          <span className="rotulo">{it.numero}</span>
          <span className="lista-imagem__titulo">{it.titulo}</span>
          <span className="lista-imagem__sub ui">{it.sub}</span>
          <span className="lista-imagem__seta" aria-hidden="true">
            →
          </span>
        </Link>
      ))}
      <div ref={flut} className="lista-imagem__flutuante" aria-hidden="true">
        {itens.map((it, i) => (it.imagem ? <img key={it.href} src={img(it.imagem, true)} alt="" loading="lazy" className={ativo === i ? "ativa" : ""} /> : null))}
      </div>
    </div>
  );
}
