"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { Obra } from "./Obra";
import { Etiquetas } from "./Etiquetas";
import { Estrela } from "./Estrela";

/**
 * A CAPA — ENTRE O VISÍVEL E O SIMBÓLICO
 *
 * Duas capas idênticas, uma sobre a outra. A de baixo é o "visível":
 * papel claro, uma rua num dia de chuva. A de cima é o "simbólico":
 * noite, luz difusa, as flores-nuvem de Redon. Ela só aparece através
 * de uma lente circular que segue o cursor (ou o dedo, no celular).
 * Sem mouse, a lente passeia sozinha. O botão "ver o outro lado"
 * abre a camada inteira (útil para teclado e movimento reduzido).
 */

const CORES_SIMBOLICO = ["var(--lavanda-clara)", "var(--tule)", "var(--portal)", "var(--lima)", "var(--malva)", "var(--ambar)", "var(--lavanda)", "var(--portal)", "var(--tule)"];

/** Palavras que só existem na camada simbólica: onde a lente passa, algo aparece. */
const CONSTELACAO = [
  { t: "a sereia", x: 6, y: 22, cor: "var(--portal)", d: 0 },
  { t: "o rei e a rainha", x: 38, y: 16, cor: "var(--lavanda-clara)", d: 1.2 },
  { t: "a floresta", x: 63, y: 24, cor: "var(--lima)", d: 2.1 },
  { t: "um vulcão", x: 20, y: 64, cor: "var(--tule)", d: 0.6 },
  { t: "a lua", x: 52, y: 70, cor: "var(--ambar)", d: 1.7 },
  { t: "o guerreiro", x: 74, y: 82, cor: "var(--malva)", d: 2.6 },
  { t: "a casa da infância", x: 60, y: 93, cor: "var(--lavanda-clara)", d: 0.3 },
  { t: "um sonho que volta", x: 4, y: 46, cor: "var(--ambar)", d: 1.4 },
  { t: "a fada", x: 46, y: 44, cor: "var(--portal)", d: 2.3 },
  { t: "o mar", x: 88, y: 12, cor: "var(--portal)", d: 0.9 },
  { t: "a deusa", x: 84, y: 60, cor: "var(--tule)", d: 1.9 },
];

function Camada({ tipo }: { tipo: "visivel" | "simbolico" }) {
  const simb = tipo === "simbolico";
  const oculto = simb ? { "aria-hidden": true as const, inert: true } : {};
  return (
    <div className={`capa__camada capa__camada--${tipo}`} {...oculto}>
      {simb && (
        <div className="capa__luzes" aria-hidden="true">
          <i className="capa__luz capa__luz--1" />
          <i className="capa__luz capa__luz--2" />
          <i className="capa__luz capa__luz--3" />
          <i className="capa__veu-iridescente" />
          {CONSTELACAO.map((c) => (
            <span key={c.t} className="capa__astro" style={{ left: `${c.x}%`, top: `${c.y}%`, color: c.cor, "--d": `${c.d}s` } as React.CSSProperties}>
              <Estrela /> {c.t}
            </span>
          ))}
        </div>
      )}

      <div className="capa__meta">
        <span className="rotulo">Psicologia · Cultura · Subjetividade</span>
        <span className="rotulo capa__meta-centro">{simb ? "o que se sente" : "o que se vê"}</span>
        <span className="rotulo capa__meta-dir">
          {site.cidade} · presencial e online
        </span>
      </div>

      <h1 className="capa__titulo">
        <span className="capa__linha capa__linha--1">
          Entre o <span className="capa__visivel">visível</span>
        </span>
        <span className="capa__linha capa__linha--2">
          e o{" "}
          <em className="capa__simbolico">
            {simb
              ? [..."simbólico"].map((l, i) => (
                  <span key={i} style={{ color: CORES_SIMBOLICO[i], "--i": i } as React.CSSProperties}>
                    {l}
                  </span>
                ))
              : "simbólico"}
          </em>
          <span className="capa__ponto">.</span>
        </span>
      </h1>

      <div className="capa__portal">
        <Obra chave={simb ? "redon-flower-clouds" : "caillebotte-rain"} prioridade={!simb} pequena={false} />
      </div>

      <div className="capa__etiquetas">
        {simb ? (
          <Etiquetas itens={["sonhos,", "mitos,", "imagens"]} cores={["var(--portal)", "var(--tule)", "var(--lima)"]} />
        ) : (
          <Etiquetas itens={["Psicologia", "Analítica"]} cores={["var(--lavanda)", "var(--malva)"]} />
        )}
      </div>

      <p className="capa__nota">
        {simb ? (
          <>
            <Estrela className="capa__nota-estrela" /> Sonhos, mitos, contos, as imagens que insistem em voltar. Tudo isso também fala de nós.
          </>
        ) : (
          <>
            <Estrela className="capa__nota-estrela" /> A rotina, o trabalho, a cidade, as conversas de todo dia. O que aparece na superfície.
          </>
        )}
      </p>

      <div className="capa__abertura">
        <p className="capa__lead">
          <strong>Maria Luiza Roque</strong> é psicóloga clínica de orientação junguiana. Este é o seu caderno: psicologia, cultura e
          subjetividade, sem pressa.
        </p>
        <div className="capa__links ui">
          <Link href="/atendimento/" className="link-linha" tabIndex={simb ? -1 : undefined}>
            Conhecer o consultório <span className="seta">→</span>
          </Link>
          <Link href="/caderno/" className="link-linha" tabIndex={simb ? -1 : undefined}>
            Abrir o caderno <span className="seta">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function CapaLente() {
  const capa = useRef<HTMLElement>(null);
  const [inteiro, setInteiro] = useState(false);
  const inteiroRef = useRef(false);
  const [toque, setToque] = useState(false);

  useEffect(() => {
    inteiroRef.current = inteiro;
    document.documentElement.classList.toggle("capa-noturna", inteiro);
    return () => document.documentElement.classList.remove("capa-noturna");
  }, [inteiro]);

  useEffect(() => {
    const el = capa.current!;
    const reduzido = matchMedia("(prefers-reduced-motion: reduce)").matches;
    setToque(!matchMedia("(hover: hover) and (pointer: fine)").matches);

    let w = el.clientWidth;
    let h = el.clientHeight;
    let alvoX = w * 0.68;
    let alvoY = h * 0.42;
    let x = alvoX;
    let y = alvoY;
    let r = 0;
    let seguindo = false;
    let ultimoToque = 0;
    let visivelNaTela = true;
    let raf = 0;

    const raioBase = () => Math.max(110, Math.min(w, h) * 0.2);

    const aoMover = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const b = el.getBoundingClientRect();
      alvoX = e.clientX - b.left;
      alvoY = e.clientY - b.top;
      seguindo = true;
    };
    const aoSair = () => (seguindo = false);
    const aoTocar = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      const b = el.getBoundingClientRect();
      alvoX = t.clientX - b.left;
      alvoY = t.clientY - b.top;
      ultimoToque = performance.now();
    };
    const aoRedimensionar = () => {
      w = el.clientWidth;
      h = el.clientHeight;
    };

    const io = new IntersectionObserver(([e]) => (visivelNaTela = e.isIntersecting));
    io.observe(el);

    const quadro = (t: number) => {
      if (visivelNaTela) {
        const tocandoRecente = t - ultimoToque < 2200;
        if (!seguindo && !tocandoRecente && !reduzido) {
          // passeio lento em curva de Lissajous
          alvoX = w * (0.5 + 0.32 * Math.sin(t / 3100));
          alvoY = h * (0.48 + 0.24 * Math.sin(t / 2300 + 1.2));
        }
        const raioAlvo = inteiroRef.current ? Math.hypot(w, h) : reduzido && !seguindo ? 0 : seguindo ? raioBase() * 1.25 : raioBase();
        const k = reduzido ? 1 : 0.12;
        x += (alvoX - x) * k;
        y += (alvoY - y) * k;
        r += (raioAlvo - r) * (inteiroRef.current ? 0.07 : 0.1);
        el.style.setProperty("--lx", `${x.toFixed(1)}px`);
        el.style.setProperty("--ly", `${y.toFixed(1)}px`);
        el.style.setProperty("--lr", `${r.toFixed(1)}px`);
      }
      raf = requestAnimationFrame(quadro);
    };

    el.addEventListener("pointermove", aoMover, { passive: true });
    el.addEventListener("pointerleave", aoSair);
    el.addEventListener("touchstart", aoTocar, { passive: true });
    el.addEventListener("touchmove", aoTocar, { passive: true });
    addEventListener("resize", aoRedimensionar);
    raf = requestAnimationFrame(quadro);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      el.removeEventListener("pointermove", aoMover);
      el.removeEventListener("pointerleave", aoSair);
      el.removeEventListener("touchstart", aoTocar);
      el.removeEventListener("touchmove", aoTocar);
      removeEventListener("resize", aoRedimensionar);
    };
  }, []);

  return (
    <section ref={capa} className={`capa ${inteiro ? "capa--inteira" : ""}`} aria-label="Capa">
      <Camada tipo="visivel" />
      <Camada tipo="simbolico" />
      <span className="capa__aro" aria-hidden="true" />

      <div className="capa__controle">
        <button className="capa__alternar ui" aria-pressed={inteiro} onClick={() => setInteiro((v) => !v)} data-cursor={inteiro ? "voltar" : "virar"}>
          <span className="capa__alternar-icone" aria-hidden="true" />
          {inteiro ? "Voltar ao visível" : "Ver o outro lado"}
        </button>
        <span className="capa__dica rotulo" aria-hidden="true">
          {toque ? "toque e arraste: há outra camada aqui" : "mova o cursor: há outra camada aqui"}
        </span>
      </div>
    </section>
  );
}
