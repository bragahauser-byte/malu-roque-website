"use client";

import { useEffect, useRef } from "react";

/**
 * O CURSOR E SUA SOMBRA
 *
 * Inspirado no site da Clara Candelot, onde o ponteiro é um desenho feito à mão
 * (cursor nativo em imagem, sem atraso). Aqui a seta lavanda e a estrela dos links
 * são cursores nativos (ver base.css). Este componente acrescenta a "sombra":
 * um pequeno duplo que segue o ponteiro com uma mola, estica com a velocidade,
 * cresce sobre links e mostra uma palavra quando o elemento tem data-cursor="...".
 * Parado por alguns segundos, ela passa a orbitar devagar, como quem espera.
 *
 * Só funciona com mouse/trackpad. Em telas de toque e com movimento reduzido,
 * fica desligado (a seta desenhada continua, sem animação).
 */
export function Cursor() {
  const sombra = useRef<HTMLDivElement>(null);
  const rotulo = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fino = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduzido = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fino.matches) return;

    const html = document.documentElement;
    html.classList.add("tem-cursor");
    if (reduzido.matches) return () => html.classList.remove("tem-cursor");

    const el = sombra.current!;
    const txt = rotulo.current!;
    let alvoX = innerWidth / 2;
    let alvoY = innerHeight / 2;
    let x = alvoX;
    let y = alvoY;
    let vx = 0;
    let vy = 0;
    let escala = 1;
    let escalaAlvo = 1;
    let ultimoMovimento = performance.now();
    let visivel = false;
    let raf = 0;

    const mover = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      alvoX = e.clientX;
      alvoY = e.clientY;
      ultimoMovimento = performance.now();
      if (!visivel) {
        visivel = true;
        x = alvoX;
        y = alvoY;
        el.classList.add("sombra--on");
      }
    };

    const sobre = (e: PointerEvent) => {
      const alvo = (e.target as Element).closest<HTMLElement>("[data-cursor], a, button, summary, label, [role='button']");
      const palavra = alvo?.dataset.cursor ?? "";
      el.classList.toggle("sombra--link", !!alvo && !palavra);
      el.classList.toggle("sombra--palavra", !!palavra);
      el.classList.toggle("sombra--escura", !!(e.target as Element).closest("[data-cursor-escuro]"));
      txt.textContent = palavra;
      escalaAlvo = palavra ? 1 : alvo ? 2.6 : 1;
    };

    const sair = () => {
      visivel = false;
      el.classList.remove("sombra--on");
    };
    const apertar = () => el.classList.add("sombra--apertada");
    const soltar = () => el.classList.remove("sombra--apertada");

    const quadro = (t: number) => {
      // Parada há mais de 2,5 s: a sombra orbita em volta do ponteiro.
      const parado = t - ultimoMovimento > 2500;
      const ox = parado ? Math.cos(t / 900) * 22 : 0;
      const oy = parado ? Math.sin(t / 1200) * 16 : 0;

      // Mola amortecida
      const ax = (alvoX + ox - x) * 0.16;
      const ay = (alvoY + oy - y) * 0.16;
      vx = (vx + ax) * 0.62;
      vy = (vy + ay) * 0.62;
      x += vx;
      y += vy;
      escala += (escalaAlvo - escala) * 0.18;

      const vel = Math.min(Math.hypot(vx, vy), 40);
      const ang = Math.atan2(vy, vx);
      const estica = 1 + vel / 60;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${ang}rad) scale(${escala * estica}, ${escala / estica})`;
      txt.style.transform = `rotate(${-ang}rad) scale(${1 / estica}, ${estica})`;
      raf = requestAnimationFrame(quadro);
    };

    addEventListener("pointermove", mover, { passive: true });
    document.addEventListener("pointerover", sobre, { passive: true });
    document.documentElement.addEventListener("pointerleave", sair);
    addEventListener("pointerdown", apertar);
    addEventListener("pointerup", soltar);
    raf = requestAnimationFrame(quadro);

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("pointermove", mover);
      document.removeEventListener("pointerover", sobre);
      document.documentElement.removeEventListener("pointerleave", sair);
      removeEventListener("pointerdown", apertar);
      removeEventListener("pointerup", soltar);
      html.classList.remove("tem-cursor");
    };
  }, []);

  return (
    <div ref={sombra} className="sombra" aria-hidden="true">
      <span ref={rotulo} className="sombra__rotulo" />
    </div>
  );
}
