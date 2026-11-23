"use client";

import { useEffect, useRef } from "react";
import type { ChaveArte } from "@/content/arte";
import { Obra } from "./Obra";
import { Estrela } from "./Estrela";

/**
 * GABINETE DE CURIOSIDADES
 * Cartões espalhados sobre a mesa, que podem ser arrastados com o mouse.
 * No celular viram uma fileira que desliza para o lado.
 * Para editar os itens, mude a lista ITENS abaixo.
 */

type Item = {
  titulo: string;
  texto: string;
  imagem?: ChaveArte;
  cor: string;
  /** posição inicial em % da mesa e rotação em graus */
  x: number;
  y: number;
  r: number;
  tipo?: "imagem" | "tipo" | "disco";
};

const ITENS: Item[] = [
  { titulo: "Livros", texto: "Pilhas espalhadas, estantes e revistas por todos os lados.", imagem: "manet-reading", cor: "var(--malva)", x: 4, y: 6, r: -6, tipo: "imagem" },
  { titulo: "Playlist da sala", texto: "Anos 80 misturados com artistas de agora. Rock, pop e aquelas de cantar junto.", cor: "var(--tule)", x: 27, y: 2, r: 4, tipo: "disco" },
  { titulo: "Mitos e contos", texto: "Príncipes, sereias, fadas, reis e rainhas. E também gente comum, filhos, filhas e famílias.", imagem: "bocklin-sea", cor: "var(--portal)", x: 52, y: 8, r: -3, tipo: "imagem" },
  { titulo: "Viagens", texto: "Objetos trazidos de longe e um semestre de estudos em Milão.", imagem: "whistler-nocturne", cor: "var(--ardosia)", x: 76, y: 0, r: 7, tipo: "imagem" },
  { titulo: "Lavanda", texto: "Flores pela casa e um cheirinho de lavanda no ar.", imagem: "redon-still-life", cor: "var(--lavanda)", x: 10, y: 50, r: 5, tipo: "imagem" },
  { titulo: "Luz amarelada", texto: "Iluminação ambiente, mais amarelada. Do tipo que dá vontade de ficar.", cor: "var(--ambar)", x: 34, y: 54, r: -8, tipo: "tipo" },
  { titulo: "Cinema independente", texto: "Narrativas sensíveis, poéticas e um pouco misteriosas.", imagem: "degas-star", cor: "var(--noite)", x: 56, y: 50, r: 3, tipo: "imagem" },
  { titulo: "Com as mãos", texto: "Argila, pintura, lego, crochê: coisinhas para passar o tempo.", cor: "var(--lima)", x: 80, y: 52, r: -4, tipo: "tipo" },
  { titulo: "Internet boa", texto: "Psicologia num minuto, um meme no outro, um mini vlog de viagem depois.", cor: "var(--lavanda-clara)", x: 44, y: 30, r: 10, tipo: "tipo" },
];

export function Gabinete() {
  const mesa = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const m = mesa.current!;
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let z = 10;
    let arrastando: HTMLElement | null = null;
    let inicioX = 0;
    let inicioY = 0;
    let baseX = 0;
    let baseY = 0;

    const baixo = (e: PointerEvent) => {
      const c = (e.target as Element).closest<HTMLElement>(".curio");
      if (!c || e.button !== 0) return;
      arrastando = c;
      c.setPointerCapture(e.pointerId);
      inicioX = e.clientX;
      inicioY = e.clientY;
      baseX = Number(c.dataset.dx ?? 0);
      baseY = Number(c.dataset.dy ?? 0);
      c.style.zIndex = String(++z);
      c.classList.add("curio--arrastando");
    };
    const mover = (e: PointerEvent) => {
      if (!arrastando) return;
      const dx = baseX + e.clientX - inicioX;
      const dy = baseY + e.clientY - inicioY;
      arrastando.dataset.dx = String(dx);
      arrastando.dataset.dy = String(dy);
      arrastando.style.translate = `${dx}px ${dy}px`;
    };
    const cima = () => {
      arrastando?.classList.remove("curio--arrastando");
      arrastando = null;
    };

    m.addEventListener("pointerdown", baixo);
    m.addEventListener("pointermove", mover);
    m.addEventListener("pointerup", cima);
    m.addEventListener("pointercancel", cima);
    return () => {
      m.removeEventListener("pointerdown", baixo);
      m.removeEventListener("pointermove", mover);
      m.removeEventListener("pointerup", cima);
      m.removeEventListener("pointercancel", cima);
    };
  }, []);

  return (
    <div ref={mesa} className="mesa-gabinete">
      {ITENS.map((it, i) => (
        <article
          key={it.titulo}
          className={`curio curio--${it.tipo ?? "imagem"}`}
          style={{ "--x": `${it.x}%`, "--y": `${it.y}%`, "--r": `${it.r}deg`, "--c": it.cor, "--i": i } as React.CSSProperties}
          data-cursor="arrastar"
        >
          {it.tipo === "imagem" && it.imagem && (
            <div className="curio__img">
              <Obra chave={it.imagem} pequena />
            </div>
          )}
          {it.tipo === "disco" && (
            <div className="curio__disco" aria-hidden="true">
              <span />
            </div>
          )}
          {it.tipo === "tipo" && <Estrela className="curio__estrela" />}
          <h3 className="curio__titulo">{it.titulo}</h3>
          <p className="curio__texto">{it.texto}</p>
        </article>
      ))}
    </div>
  );
}
