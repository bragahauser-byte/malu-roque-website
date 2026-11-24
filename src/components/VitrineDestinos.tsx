"use client";

import { useRef, useState } from "react";
import type { Destino } from "@/content/viagens";
import { fonteImagem } from "@/lib/imagens";
import { Bandeira } from "./Bandeira";
import { useLingua } from "@/lib/useLingua";

/**
 * VITRINE DE DESTINOS — leitura da referência AC Concierge.
 *
 * O que vem da referência: uma única janela grande no centro (não uma grade
 * de cards); contador "01 / 12" e setas redondas; um trio de metadados com
 * filetes verticais; o nome do país em corpo grande, com a bandeira ao lado;
 * a descrição em tom secundário do outro lado da janela; um filete que
 * atravessa a composição na linha de base; e, embaixo, o índice de todas as
 * janelas, que também navega.
 *
 * O que é da Malu: Georgia + Gotham Condensed, creme e verde, a grade de 12
 * colunas, e o gesto do site — a foto nova entra na janela como a página nova
 * entra no arco: pela direita ao avançar, pela esquerda ao voltar.
 *
 * Teclado: setas ← → na vitrine; Home/End. Toque: deslizar para os lados.
 * Sem JavaScript, o primeiro destino aparece e o índice lista os doze.
 */
export function VitrineDestinos({ destinos }: { destinos: Destino[] }) {
  const { t } = useLingua();
  const [atual, setAtual] = useState(0);
  const [anterior, setAnterior] = useState<number | null>(null);
  const [sentido, setSentido] = useState<"avancar" | "voltar">("avancar");
  const toque = useRef<number | null>(null);
  const indice = useRef<(HTMLButtonElement | null)[]>([]);
  const total = destinos.length;
  const d = destinos[atual];

  const ir = (j: number, s?: "avancar" | "voltar") => {
    const alvo = (j + total) % total;
    if (alvo === atual) return;
    setSentido(s ?? (alvo > atual ? "avancar" : "voltar"));
    setAnterior(atual);
    setAtual(alvo);
    indice.current[alvo]?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  };

  const teclas = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") ir(atual + 1, "avancar");
    else if (e.key === "ArrowLeft") ir(atual - 1, "voltar");
    else if (e.key === "Home") ir(0, "voltar");
    else if (e.key === "End") ir(total - 1, "avancar");
    else return;
    e.preventDefault();
  };

  const n = (i: number) => String(i + 1).padStart(2, "0");
  const f = fonteImagem(d.imagem);
  const fa = anterior !== null ? fonteImagem(destinos[anterior].imagem) : null;
  const tamanhos = "(max-width: 639px) 64vw, (max-width: 1023px) 40vw, 30vw";

  return (
    <div className="vitrine" role="region" aria-roledescription={t("carrossel", "carousel")} aria-label={t("Destinos", "Destinations")} onKeyDown={teclas}>
      {/* contador e setas (no celular, ficam acima da janela, como na referência) */}
      <div className="vitrine__controles">
        <p className="vitrine__contador rotulo" aria-hidden="true">
          <span>{n(atual)}</span>
          <span className="vitrine__contador-total">{String(total).padStart(2, "0")}</span>
        </p>
        <div className="vitrine__setas">
          <button type="button" className="vitrine__seta" onClick={() => ir(atual - 1, "voltar")} aria-label={t("Destino anterior", "Previous destination")}>
            ←
          </button>
          <button type="button" className="vitrine__seta" onClick={() => ir(atual + 1, "avancar")} aria-label={t("Próximo destino", "Next destination")}>
            →
          </button>
        </div>
      </div>

      {/* a janela */}
      <figure
        className="vitrine__janela"
        onDragStart={(e) => e.preventDefault()}
        onPointerDown={(e) => {
          toque.current = e.clientX;
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerCancel={() => (toque.current = null)}
        onPointerUp={(e) => {
          if (toque.current === null) return;
          const dx = e.clientX - toque.current;
          toque.current = null;
          if (Math.abs(dx) > 40) ir(atual + (dx < 0 ? 1 : -1), dx < 0 ? "avancar" : "voltar");
        }}
      >
        <div className="aviao vitrine__aviao">
          {fa && anterior !== null && (
            <img key={`a-${anterior}-${atual}`} className={`vitrine__foto vitrine__foto--sai vitrine__foto--${sentido}`} src={fa.src} srcSet={fa.srcSet} sizes={tamanhos} alt="" aria-hidden="true" draggable={false} />
          )}
          <img
            key={`f-${atual}`}
            className={`vitrine__foto ${anterior !== null ? `vitrine__foto--entra vitrine__foto--${sentido}` : ""}`}
            src={f.src}
            srcSet={f.srcSet}
            sizes={tamanhos}
            width={f.width}
            height={f.height}
            alt={d.legenda}
            draggable={false}
            onAnimationEnd={() => setAnterior(null)}
          />
        </div>
        <figcaption className="credito vitrine__credito">
          {"propria" in d.credito ? (
            t("Foto: Maria Luiza Roque", "Photo: Maria Luiza Roque")
          ) : (
            <a href={d.credito.url} target="_blank" rel="noopener noreferrer" className="link-linha">
              Foto: {d.credito.autor}, {d.credito.licenca}
            </a>
          )}
        </figcaption>
      </figure>

      {/* o país: metadados, nome, bandeira */}
      <div className="vitrine__pais" aria-live="polite" key={`p-${atual}`}>
        <dl className="vitrine__dados">
          <div>
            <dt className="meta">{t("Continente", "Continent")}</dt>
            <dd>{d.continente}</dd>
          </div>
          <div>
            <dt className="meta">Capital</dt>
            <dd>{d.capital}</dd>
          </div>
          <div>
            <dt className="meta">{t("Janela", "Window")}</dt>
            <dd>
              {n(atual)} {t("de", "of")} {total}
            </dd>
          </div>
        </dl>
        <h2 className="vitrine__nome">
          <span>{d.pais}</span>
          <Bandeira pais={d.bandeira} className="vitrine__bandeira" />
        </h2>
      </div>

      {/* a descrição, do outro lado da janela */}
      <p className="vitrine__descricao" key={`d-${atual}`}>
        {d.legenda}
      </p>

      {/* índice: todas as janelas */}
      <ol className="vitrine__indice" aria-label={t("Todos os destinos", "All destinations")}>
        {destinos.map((x, i) => {
          const t = fonteImagem(x.imagem);
          return (
            <li key={x.bandeira}>
              <button
                type="button"
                ref={(el) => {
                  indice.current[i] = el;
                }}
                className={`vitrine__item ${i === atual ? "vitrine__item--atual" : ""}`}
                aria-current={i === atual ? "true" : undefined}
                onClick={() => ir(i)}
              >
                <span className="aviao vitrine__mini">
                  <img src={t.src} srcSet={t.srcSet} sizes="96px" alt="" loading="lazy" decoding="async" />
                </span>
                <span className="vitrine__item-n meta">{n(i)}</span>
                <span className="vitrine__item-pais">{x.pais}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
