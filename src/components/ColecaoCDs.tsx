"use client";

import { useRef, useState } from "react";
import type { Disco } from "@/content/discos";
import { fonteImagem } from "@/lib/imagens";

/**
 * ESTANTE DE CDs — coleção física, anos 2000, acabamento atual.
 * As caixas ficam numa linha horizontal sobre uma prateleira, giradas em 3D:
 * seis faces com espessura real, tampa transparente com dobradiça, encarte,
 * bandeja, lombada, reflexos especulares e sombra de contato (ver
 * especiais.css). Passar o mouse, focar com o
 * teclado ou tocar destaca um disco: a caixa vira de frente, o CD sai um
 * pouco da caixa e a ficha ao lado mostra título, artista, ano e faixas.
 * Setas do teclado percorrem a estante. Nada se move sozinho.
 */
export function ColecaoCDs({ discos, rotulo }: { discos: Disco[]; rotulo: string }) {
  const [ativo, setAtivo] = useState(0);
  const botoes = useRef<(HTMLButtonElement | null)[]>([]);
  // depois de usar o teclado, o mouse parado não deve "roubar" a seleção quando a estante se move
  const ultimaTecla = useRef(0);
  const d = discos[ativo];

  const teclas = (e: React.KeyboardEvent, i: number) => {
    const alvo = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : e.key === "Home" ? 0 : e.key === "End" ? discos.length - 1 : null;
    if (alvo === null) return;
    e.preventDefault();
    ultimaTecla.current = Date.now();
    const j = (alvo + discos.length) % discos.length;
    setAtivo(j);
    botoes.current[j]?.focus();
    botoes.current[j]?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  };

  return (
    <div className="colecao">
      <div className="estante" role="group" aria-label={rotulo}>
        {discos.map((disco, i) => {
          const f = fonteImagem(disco.capa);
          return (
            <button
              key={disco.capa}
              ref={(el) => {
                botoes.current[i] = el;
              }}
              type="button"
              className={`cd ${i === ativo ? "cd--ativo" : ""}`}
              style={{ "--i": i, "--d": Math.abs(i - ativo), "--lado": i < ativo ? -1 : 1 } as React.CSSProperties}
              aria-pressed={i === ativo}
              aria-label={`${disco.titulo}, ${disco.artista}, ${disco.ano}`}
              tabIndex={i === ativo ? 0 : -1}
              onClick={() => setAtivo(i)}
              onPointerEnter={(e) => e.pointerType === "mouse" && Date.now() - ultimaTecla.current > 800 && setAtivo(i)}
              onFocus={() => setAtivo(i)}
              onKeyDown={(e) => teclas(e, i)}
            >
              <span className="cd__sombra" aria-hidden="true" />
              <span className="cd__caixa" aria-hidden="true">
                <span className="cd__face cd__fundo" />
                <span className="cd__disco">
                  <span className="cd__furo" />
                </span>
                <span className="cd__face cd__frente">
                  <img src={f.src} srcSet={f.srcSet} sizes="(max-width: 639px) 60vw, 240px" alt="" loading="lazy" decoding="async" />
                  <span className="cd__dobradica" />
                  <span className="cd__brilho cd__brilho--1" />
                  <span className="cd__brilho cd__brilho--2" />
                </span>
                <span className="cd__face cd__lombada">
                  <span>
                    {disco.artista} · {disco.titulo}
                  </span>
                </span>
                <span className="cd__face cd__borda--direita" />
                <span className="cd__face cd__borda--topo" />
                <span className="cd__face cd__borda--base" />
              </span>
            </button>
          );
        })}
      </div>

      <div className="ficha-disco" aria-live="polite">
        <p className="rotulo suave">
          {String(ativo + 1).padStart(2, "0")} / {String(discos.length).padStart(2, "0")}
        </p>
        <h3 className="ficha-disco__titulo">{d.titulo}</h3>
        <p className="chapeu ficha-disco__artista">{d.artista}</p>
        <p className="ui suave">Lançado em {d.ano}</p>
        <div className="ficha-disco__faixas">
          <p className="rotulo suave">Faixas conhecidas do disco</p>
          <ol>
            {d.faixas.map((faixa) => (
              <li key={faixa}>{faixa}</li>
            ))}
          </ol>
        </div>
        {d.nota && <p className="ficha-disco__nota">{d.nota}</p>}
      </div>
    </div>
  );
}
