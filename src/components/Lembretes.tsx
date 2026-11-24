"use client";

import { useEffect, useRef, useState } from "react";
import { useLingua } from "@/lib/useLingua";
import type { Lingua } from "@/lib/lingua";

/**
 * OS POST-ITS — referência: guglieri.com/feed (bilhetes que aparecem na tela
 * quando ninguém mexe no site e caem quando a pessoa volta).
 *
 * Depois de 10 s sem nenhum gesto (mouse, rolagem, toque, teclado), post-its
 * começam a ser colados na tela, um de cada vez: as "tarefas do dia" de uma
 * psicóloga, com um cabeçalho escrito à mão no topo e uma data fictícia no
 * canto de baixo. Ao primeiro movimento, todos se soltam e caem.
 *
 * Nunca atrapalham: não recebem clique (pointer-events: none), não entram na
 * leitura de tela (aria-hidden), não aparecem com o menu aberto, durante uma
 * passagem ou com a aba escondida. Com "reduzir movimento", aparecem e somem
 * sem animação.
 */

type Nota = { cabeca: string; texto: string; data: string };

const NOTAS: Record<Lingua, Nota[]> = {
  pt: [
    { cabeca: "tarefa de hoje", texto: "Lembrar alguém de que sentir não é fraqueza.", data: "12 mar. 2025" },
    { cabeca: "para hoje", texto: "Escutar sem pressa. O silêncio também fala.", data: "03 jun. 2025" },
    { cabeca: "não esquecer", texto: "Perguntar como você está, e esperar a resposta de verdade.", data: "21 ago. 2025" },
    { cabeca: "lembrete", texto: "Anotar o sonho antes que ele fuja.", data: "07 out. 2025" },
    { cabeca: "tarefa de hoje", texto: "Acolher o que chegou, do jeito que chegou.", data: "15 jan. 2026" },
    { cabeca: "para hoje", texto: "Lembrar que cada pessoa tem o seu tempo.", data: "28 fev. 2026" },
    { cabeca: "não esquecer", texto: "Beber água. Respirar fundo. Começar de novo, se precisar.", data: "09 abr. 2026" },
    { cabeca: "lembrete", texto: "Ninguém precisa dar conta de tudo sozinho.", data: "19 mai. 2026" },
    { cabeca: "tarefa de hoje", texto: "Celebrar os pequenos passos. Eles contam.", data: "02 jul. 2026" },
    { cabeca: "para hoje", texto: "Deixar espaço para o que ainda não tem nome.", data: "24 ago. 2026" },
    { cabeca: "não esquecer", texto: "Pedir ajuda também é um jeito de se cuidar.", data: "11 set. 2026" },
    { cabeca: "lembrete", texto: "A gentileza começa por dentro.", data: "30 out. 2026" },
  ],
  en: [
    { cabeca: "today’s task", texto: "Remind someone that feeling is not weakness.", data: "12 Mar 2025" },
    { cabeca: "for today", texto: "Listen without hurry. Silence speaks too.", data: "3 Jun 2025" },
    { cabeca: "don’t forget", texto: "Ask how you are, and really wait for the answer.", data: "21 Aug 2025" },
    { cabeca: "reminder", texto: "Write the dream down before it slips away.", data: "7 Oct 2025" },
    { cabeca: "today’s task", texto: "Welcome what arrived, the way it arrived.", data: "15 Jan 2026" },
    { cabeca: "for today", texto: "Remember that everyone has their own pace.", data: "28 Feb 2026" },
    { cabeca: "don’t forget", texto: "Drink water. Breathe deeply. Start again, if you need to.", data: "9 Apr 2026" },
    { cabeca: "reminder", texto: "Nobody has to carry everything alone.", data: "19 May 2026" },
    { cabeca: "today’s task", texto: "Celebrate the small steps. They count.", data: "2 Jul 2026" },
    { cabeca: "for today", texto: "Leave room for what has no name yet.", data: "24 Aug 2026" },
    { cabeca: "don’t forget", texto: "Asking for help is also a way of caring for yourself.", data: "11 Sep 2026" },
    { cabeca: "reminder", texto: "Kindness begins on the inside.", data: "30 Oct 2026" },
  ],
};

const CORES = ["var(--amarelo)", "var(--rosa)", "var(--lilas)", "var(--menta)"];
const ESPERA = 10_000; // inatividade antes do primeiro post-it
const INTERVALO = 1_600; // entre um post-it e o próximo

type Colado = { id: number; nota: Nota; x: number; y: number; giro: number; cor: string; caindo: boolean; queda: { dx: number; giro: number; atraso: number; dur: number } };

/** Lugares na tela (frações da área útil), embaralhados a cada rodada para os post-its não se empilharem. */
const LUGARES = [
  [0.06, 0.18], [0.72, 0.14], [0.38, 0.52], [0.08, 0.62], [0.78, 0.58], [0.5, 0.2], [0.26, 0.3], [0.62, 0.38],
];

export function Lembretes() {
  const { l } = useLingua();
  const [colados, setColados] = useState<Colado[]>([]);
  const estado = useRef({ fila: 0, id: 0, lugares: [] as number[][], temporizador: 0, colando: 0, ativo: false, presos: 0 });

  useEffect(() => {
    const e = estado.current;
    const reduzido = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
    const maximo = () => (innerWidth < 640 ? 3 : innerWidth < 1024 ? 4 : 6);
    const bloqueado = () => document.hidden || document.documentElement.classList.contains("menu-aberto") || document.documentElement.classList.contains("em-passagem");

    const colarUm = () => {
      if (bloqueado()) return;
      if (e.presos >= maximo()) {
        window.clearInterval(e.colando);
        return;
      }
      e.presos++;
      if (!e.lugares.length) e.lugares = [...LUGARES].sort(() => Math.random() - 0.5);
      const [fx, fy] = e.lugares.pop()!;
      const lista = NOTAS[document.documentElement.lang === "en" ? "en" : "pt"];
      const nota = lista[e.fila++ % lista.length];
      const giro = (Math.random() * 2 - 1) * 7;
      const id = ++e.id;
      const novo: Colado = {
        id,
        nota,
        x: fx + (Math.random() - 0.5) * 0.06,
        y: fy + (Math.random() - 0.5) * 0.06,
        giro,
        cor: CORES[id % CORES.length],
        caindo: false,
        queda: { dx: (Math.random() - 0.5) * 160, giro: giro + (Math.random() < 0.5 ? -1 : 1) * (25 + Math.random() * 35), atraso: Math.random() * 180, dur: 900 + Math.random() * 500 },
      };
      setColados((atual) => [...atual, novo]);
    };

    const comecar = () => {
      e.ativo = true;
      // a letra manuscrita só é baixada agora
      const mao = getComputedStyle(document.documentElement).getPropertyValue("--font-mao").trim();
      if (mao) document.fonts?.load?.(`500 24px ${mao}`).catch(() => {});
      colarUm();
      e.colando = window.setInterval(colarUm, INTERVALO);
    };

    const agendar = () => {
      window.clearTimeout(e.temporizador);
      e.temporizador = window.setTimeout(comecar, ESPERA);
    };

    const acordar = () => {
      window.clearInterval(e.colando);
      if (e.ativo) {
        e.ativo = false;
        e.presos = 0;
        setColados((atual) => (atual.length ? atual.map((c) => ({ ...c, caindo: true })) : atual));
        // depois da queda, saem do DOM
        window.setTimeout(() => setColados((atual) => atual.filter((c) => !c.caindo)), reduzido() ? 0 : 1900);
      }
      agendar();
    };

    const eventos = ["pointermove", "pointerdown", "wheel", "scroll", "keydown", "touchstart"] as const;
    eventos.forEach((ev) => addEventListener(ev, acordar, { passive: true, capture: true }));
    agendar();
    return () => {
      eventos.forEach((ev) => removeEventListener(ev, acordar, { capture: true }));
      window.clearTimeout(e.temporizador);
      window.clearInterval(e.colando);
    };
  }, []);

  // trocar de idioma solta os post-its do idioma anterior
  useEffect(() => setColados([]), [l]);

  if (!colados.length) return null;
  return (
    <div className="lembretes" aria-hidden="true">
      {colados.map((c) => (
        <div
          key={c.id}
          className={`lembrete ${c.caindo ? "lembrete--caindo" : ""}`}
          style={
            {
              "--x": c.x,
              "--y": c.y,
              "--giro": `${c.giro}deg`,
              "--cor": c.cor,
              "--queda-x": `${c.queda.dx}px`,
              "--queda-giro": `${c.queda.giro}deg`,
              "--queda-atraso": `${c.queda.atraso}ms`,
              "--queda-dur": `${c.queda.dur}ms`,
            } as React.CSSProperties
          }
        >
          <span className="lembrete__fita" />
          <p className="lembrete__cabeca">{c.nota.cabeca}</p>
          <p className="lembrete__texto">{c.nota.texto}</p>
          <p className="lembrete__data">{c.nota.data}</p>
        </div>
      ))}
    </div>
  );
}
