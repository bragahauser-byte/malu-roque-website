"use client";

import { useEffect, useRef, useState } from "react";
import type { Disco } from "@/content/discos";
import { fonteImagem } from "@/lib/imagens";

/**
 * A ESTANTE — uma só coleção de CDs, como numa loja de discos dos anos 2000.
 *
 * Referência principal: "referencias cd!/principal.mp4" (fileira de caixas em
 * projeção axonométrica: sem ponto de fuga, a caixa escolhida sai da fileira).
 * Aqui a fileira é horizontal. Cada caixa é um objeto em CSS 3D com as medidas
 * de uma jewel case (142 × 125 × 10 mm): bandeja preta, encarte quadrado
 * (120 mm) sob a tampa de acrílico, dobradiça frisada, abas que prendem o
 * encarte, lombada com a cor da capa e o nome, borda de cima transparente e
 * sombra de contato. O disco (referência "65a675…mp4": face de dados com o
 * brilho furta-cor) sai pela lateral quando a caixa é escolhida.
 *
 * Interação: o mouse levanta a caixa um pouco (sem trocar a escolha, para a
 * fileira não "fugir" do cursor); clique, toque ou teclado (← → Home End)
 * escolhem. A escolhida vira de frente e sai da fileira, que se abre em volta
 * dela (como folhear discos numa caixa). Nada se move sozinho.
 */

/** Geometria da fileira, em unidades de caixa (1 u = 1 mm da caixa real; o CSS converte). */
const PASSO = 36; // distância entre caixas na fileira
const ABRE_ANTES = 44; // quanto as caixas anteriores se afastam da escolhida
const ABRE_DEPOIS = 78; // e as seguintes (deixam lugar para o disco)

export function ColecaoCDs({ discos, rotulo }: { discos: Disco[]; rotulo: string }) {
  const [ativo, setAtivo] = useState(0);
  const botoes = useRef<(HTMLButtonElement | null)[]>([]);
  const estante = useRef<HTMLDivElement>(null);
  const primeira = useRef(true);
  const d = discos[ativo];

  // No celular a fileira rola de lado: a caixa escolhida vem para o centro
  // (só a fileira rola; a página fica onde está). Roda depois que a caixa
  // já ocupou o novo lugar na fileira.
  useEffect(() => {
    const e = estante.current;
    const b = botoes.current[ativo];
    if (!e || !b || e.scrollWidth <= e.clientWidth) return;
    const t = window.setTimeout(() => {
      const r = b.getBoundingClientRect();
      const re = e.getBoundingClientRect();
      const alvo = e.scrollLeft + (r.left + r.width / 2) - (re.left + re.width / 2);
      const suave = !primeira.current && !matchMedia("(prefers-reduced-motion: reduce)").matches;
      e.scrollTo({ left: alvo, behavior: suave ? "smooth" : "auto" });
      primeira.current = false;
    }, primeira.current ? 0 : 120);
    return () => window.clearTimeout(t);
  }, [ativo]);

  const escolher = (j: number, focar = false) => {
    setAtivo(j);
    if (focar) botoes.current[j]?.focus({ preventScroll: true });
  };

  const teclas = (e: React.KeyboardEvent, i: number) => {
    const alvo = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : e.key === "Home" ? 0 : e.key === "End" ? discos.length - 1 : null;
    if (alvo === null) return;
    e.preventDefault();
    escolher((alvo + discos.length) % discos.length, true);
  };

  return (
    <div className="colecao">
      <div className="estante" role="group" aria-label={rotulo} ref={estante}>
        <div className="estante__cena">
          {discos.map((disco, i) => {
            const f = fonteImagem(disco.capa);
            const x = i * PASSO + (i < ativo ? -ABRE_ANTES : i > ativo ? ABRE_DEPOIS : 0);
            return (
              <button
                key={disco.capa}
                ref={(el) => {
                  botoes.current[i] = el;
                }}
                type="button"
                className={`cd ${i === ativo ? "cd--ativo" : ""} cd--tinta-${disco.tinta}`}
                style={{ "--x": x, "--lombada": disco.lombada } as React.CSSProperties}
                aria-pressed={i === ativo}
                aria-label={`${disco.titulo}, ${disco.artista}, ${disco.ano}`}
                tabIndex={i === ativo ? 0 : -1}
                onClick={() => escolher(i)}
                onKeyDown={(e) => teclas(e, i)}
              >
                <span className="cd__sombra" aria-hidden="true" />
                <span className="cd__disco" aria-hidden="true" />
                <span className="cd__face cd__frente" aria-hidden="true">
                  <span className="cd__dobradica" />
                  <img className="cd__capa" src={f.src} srcSet={f.srcSet} sizes="(max-width: 639px) 40vw, 320px" alt="" loading="lazy" decoding="async" draggable={false} />
                  <span className="cd__tampa" />
                </span>
                <span className="cd__face cd__lombada" aria-hidden="true">
                  <span>
                    {disco.artista} <i>·</i> {disco.titulo}
                  </span>
                </span>
                <span className="cd__face cd__topo" aria-hidden="true" />
              </button>
            );
          })}
        </div>
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
