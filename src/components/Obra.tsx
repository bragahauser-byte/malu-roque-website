"use client";

import { creditoObra, obra, type ChaveArte } from "@/content/arte";
import { fonteImagem } from "@/lib/imagens";
import { useLingua } from "@/lib/useLingua";

/**
 * Obra do acervo, com srcset (a melhor resolução para cada tela) e crédito
 * no idioma da página. `tamanhos` descreve a largura na tela, para o
 * navegador escolher a versão.
 */
export function Obra({
  chave,
  className = "",
  prioridade = false,
  legenda = false,
  alt,
  tamanhos = "(max-width: 1023px) 100vw, 50vw",
}: {
  chave: ChaveArte;
  className?: string;
  prioridade?: boolean;
  legenda?: boolean;
  alt?: string;
  tamanhos?: string;
  /** @deprecated mantido por compatibilidade; o srcset já resolve. */
  pequena?: boolean;
}) {
  const { l } = useLingua();
  const o = obra(chave, l);
  const f = fonteImagem(chave);
  const imagem = (
    <img
      src={f.src}
      srcSet={f.srcSet}
      sizes={tamanhos}
      width={f.width}
      height={f.height}
      alt={alt ?? `${o.titulo}, ${o.artista} (${o.ano})`}
      loading={prioridade ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={prioridade ? "high" : undefined}
      className={legenda ? "" : className}
    />
  );
  if (!legenda) return imagem;
  return (
    <figure className={className}>
      {imagem}
      <figcaption className="credito">{creditoObra(chave, l)}</figcaption>
    </figure>
  );
}
