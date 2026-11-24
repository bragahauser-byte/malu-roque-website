"use client";

import { fotos, fotosEn, type ChaveFoto } from "@/content/fotos";
import { fonteImagem } from "@/lib/imagens";
import { useLingua } from "@/lib/useLingua";

/** Fotografia da Malu, sem retoques, com srcset e texto alternativo descritivo (no idioma da página). */
export function Foto({
  chave,
  className = "",
  prioridade = false,
  tamanhos = "(max-width: 1023px) 100vw, 40vw",
  alt,
}: {
  chave: ChaveFoto;
  className?: string;
  prioridade?: boolean;
  tamanhos?: string;
  alt?: string;
}) {
  const { l } = useLingua();
  const f = fonteImagem(chave);
  return (
    <img
      src={f.src}
      srcSet={f.srcSet}
      sizes={tamanhos}
      width={f.width}
      height={f.height}
      alt={alt ?? (l === "en" ? fotosEn[chave] : fotos[chave].alt)}
      loading={prioridade ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={prioridade ? "high" : undefined}
      className={className}
    />
  );
}
