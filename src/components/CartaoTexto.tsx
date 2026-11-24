import Link from "next/link";
import type { Texto } from "@/content/caderno";
import { Obra } from "./Obra";

/**
 * Cartão editorial do Caderno. Cada `formato` tem uma composição própria
 * e um comportamento de hover diferente (ver caderno.css).
 */
export function CartaoTexto({ texto, className = "", indice = 0 }: { texto: Texto; className?: string; indice?: number }) {
  const t = texto;
  return (
    <article className={`cartao cartao--${t.formato} revelar ${className}`} style={{ "--c": t.cor, "--atraso": `${(indice % 3) * 0.08}s` } as React.CSSProperties}>
      <Link href={`/caderno/${t.slug}/`} className="cartao__link">
        <div className="cartao__visual">
          {t.formato === "capa" && t.imagem && (
            <div className="cartao__img">
              <Obra chave={t.imagem} pequena />
            </div>
          )}

          {t.formato === "retrato" && t.imagem && (
            <div className="cartao__img">
              <Obra chave={t.imagem} pequena />
            </div>
          )}

          {t.formato === "citacao" && (
            <blockquote className="cartao__citacao">
              <span className="cartao__aspas" aria-hidden="true">“</span>
              <p>{t.titulo}</p>
            </blockquote>
          )}

          {t.formato === "disco" && (
            <div className="cartao__disco" aria-hidden="true">
              <div className="cartao__capa-disco">
                <span className="rotulo">Lado A</span>
                <span className="cartao__capa-disco-titulo">{t.titulo}</span>
              </div>
              <div className="cartao__vinil">
                <span className="cartao__vinil-selo" />
              </div>
            </div>
          )}

          {t.formato === "postal" && (
            <div className="cartao__postal">
              <div className="cartao__postal-frente">
                {t.imagem && <Obra chave={t.imagem} pequena />}
                <span className="cartao__postal-saudacao">Saudações de Milão</span>
              </div>
              <div className="cartao__postal-verso" aria-hidden="true">
                <span className="cartao__selo">
                  <span>MI</span>
                </span>
                <span className="cartao__carimbo">45°28′N · 9°11′E · 2023</span>
                <span className="cartao__postal-linhas" />
              </div>
            </div>
          )}

          {t.formato === "lista" && (
            <div className="cartao__lista">
              {t.imagem && (
                <div className="cartao__lista-img">
                  <Obra chave={t.imagem} pequena />
                </div>
              )}
              <ol>
                {(t.lista ?? []).map((item, i) => (
                  <li key={i}>
                    <span className="rotulo">{String(i + 1).padStart(2, "0")}</span> {item}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>

        <div className="cartao__texto">
          <p className="cartao__meta rotulo">
            <span>{t.categoria}</span>
            <span aria-hidden="true">·</span>
            <span>{t.leitura}</span>
            {t.rascunho && <span className="cartao__rascunho">rascunho</span>}
          </p>
          {t.formato !== "citacao" && <h3 className="cartao__titulo">{t.titulo}</h3>}
          <p className="cartao__chamada">{t.chamada}</p>
        </div>
      </Link>
    </article>
  );
}
