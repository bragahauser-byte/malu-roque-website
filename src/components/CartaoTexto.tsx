import Link from "next/link";
import type { Texto } from "@/content/caderno";
import { fonteImagem } from "@/lib/imagens";

/**
 * CARTÃO DO CADERNO — um só componente para todos os textos.
 * Linguagem tirada do cartão "O que os contos de fadas sabem sobre crescer":
 *  - campo de cor + imagem que ocupa o campo;
 *  - no hover (ou foco), a imagem se recolhe num arco sobre a cor e o
 *    título ganha sublinhado; o cartão inteiro é a área clicável;
 *  - abaixo: categoria · leitura (Gotham), título (Georgia), chamada.
 * No toque não há hover: a imagem fica inteira, e tudo continua legível e clicável.
 */
export function CartaoTexto({ texto, className = "", indice = 0, tamanhos = "(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 31vw" }: { texto: Texto; className?: string; indice?: number; tamanhos?: string }) {
  const t = texto;
  const f = fonteImagem(t.imagem);
  return (
    <article className={`cartao revelar ${className}`} style={{ "--c": t.cor, "--atraso": `${(indice % 3) * 0.08}s` } as React.CSSProperties}>
      <Link href={`/caderno/${t.slug}/`} className="cartao__link">
        <div className="cartao__visual">
          <div className="cartao__img">
            <img src={f.src} srcSet={f.srcSet} sizes={tamanhos} width={f.width} height={f.height} alt="" loading="lazy" decoding="async" />
          </div>
        </div>
        <div className="cartao__texto">
          <p className="cartao__meta rotulo">
            <span>{t.categoria}</span>
            <span aria-hidden="true">·</span>
            <span>{t.leitura}</span>
            {t.rascunho && <span className="cartao__selo">rascunho</span>}
            {t.especial && <span className="cartao__selo cartao__selo--especial">especial</span>}
          </p>
          <h3 className="cartao__titulo">{t.titulo}</h3>
          <p className="cartao__chamada">{t.chamada}</p>
        </div>
      </Link>
    </article>
  );
}
