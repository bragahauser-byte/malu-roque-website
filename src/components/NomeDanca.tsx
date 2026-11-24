"use client";

import { Fragment, useRef, type ElementType } from "react";

/**
 * O NOME QUE DANÇA — "Maria Luiza Roque" em display (Gotham Condensed).
 *
 * Ao passar o mouse, a letra sob o ponteiro dá um pequeno salto e troca de
 * cor; as vizinhas acompanham, mais fracas e um instante depois, como uma
 * onda. As cores percorrem a paleta do site (rosa, amarelo, lilás, menta e o
 * verde, ou o creme no lado simbólico) e voltam devagar à cor do título.
 * No toque, um toque no nome faz a onda passar por todas as letras.
 * Com "reduzir movimento", só a cor muda. Nada se move sozinho.
 *
 * Acessibilidade: o título é lido inteiro (aria-label); as letras são
 * decorativas para leitores de tela.
 */

const NOME = ["Maria", "Luiza", "Roque"];
const PALETA = ["var(--rosa)", "var(--amarelo)", "var(--lilas)", "var(--menta)", "var(--danca-forte)"];

export function NomeDanca({ como: Tag = "h1", className = "" }: { como?: ElementType; className?: string }) {
  const letras = useRef<HTMLSpanElement[]>([]);
  const vez = useRef(0);
  const ultima = useRef(-1);

  const reduzido = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

  const dancar = (i: number, forca = 1, atraso = 0) => {
    const el = letras.current[i];
    if (!el) return;
    const cor = PALETA[vez.current++ % PALETA.length];
    // cor: entra rápido, sai devagar (a transição de volta está no CSS)
    el.style.setProperty("--cor-danca", cor);
    el.classList.add("nome-danca__letra--cor");
    window.clearTimeout(Number(el.dataset.t));
    el.dataset.t = String(window.setTimeout(() => el.classList.remove("nome-danca__letra--cor"), 900 + atraso));
    if (reduzido()) return;
    const giro = (i % 2 ? 1 : -1) * (5 + ((i * 7) % 5)) * forca;
    const alto = -0.16 * forca;
    el.animate(
      [
        { transform: "translate3d(0,0,0) rotate(0deg)" },
        { transform: `translate3d(0,${alto}em,0) rotate(${giro}deg) scale(${1 + 0.06 * forca})`, offset: 0.32 },
        { transform: `translate3d(0,${-alto * 0.22}em,0) rotate(${-giro * 0.4}deg)`, offset: 0.62 },
        { transform: `translate3d(0,${alto * 0.08}em,0) rotate(${giro * 0.12}deg)`, offset: 0.82 },
        { transform: "translate3d(0,0,0) rotate(0deg)" },
      ],
      { duration: 760, delay: atraso, easing: "cubic-bezier(0.22, 1, 0.36, 1)", composite: "replace" },
    );
  };

  const onda = (i: number) => {
    if (i === ultima.current) return;
    ultima.current = i;
    dancar(i, 1);
    [-1, 1].forEach((s) => {
      dancar(i + s, 0.55, 70);
      dancar(i + 2 * s, 0.25, 140);
    });
  };

  const aoMover = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const alvo = (e.target as HTMLElement).closest<HTMLElement>("[data-i]");
    if (alvo) onda(Number(alvo.dataset.i));
  };

  const aoTocar = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse") return;
    letras.current.forEach((_, i) => dancar(i, 0.8, i * 45));
  };

  let n = 0;
  return (
    <Tag className={`nome-danca ${className}`} aria-label={NOME.join(" ")} onPointerMove={aoMover} onPointerLeave={() => (ultima.current = -1)} onPointerDown={aoTocar}>
      {NOME.map((palavra, p) => (
        <Fragment key={palavra}>
        <span className="nome-danca__palavra" aria-hidden="true">
          {[...palavra].map((c) => {
            const i = n++;
            return (
              <span
                key={i}
                data-i={i}
                className="nome-danca__letra"
                ref={(el) => {
                  if (el) letras.current[i] = el;
                }}
              >
                {c}
              </span>
            );
          })}
        </span>
        {p < NOME.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </Tag>
  );
}
