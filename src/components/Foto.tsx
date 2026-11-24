import { fotos, type ChaveFoto } from "@/content/fotos";
import { fonteImagem } from "@/lib/imagens";

/** Fotografia da Malu, sem retoques, com srcset e texto alternativo descritivo. */
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
  const f = fonteImagem(chave);
  return (
    <img
      src={f.src}
      srcSet={f.srcSet}
      sizes={tamanhos}
      width={f.width}
      height={f.height}
      alt={alt ?? fotos[chave].alt}
      loading={prioridade ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={prioridade ? "high" : undefined}
      className={className}
    />
  );
}
