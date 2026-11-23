import { arte, creditoObra, type ChaveArte } from "@/content/arte";
import { img } from "@/lib/asset";

/** Imagem do acervo com crédito acessível. */
export function Obra({
  chave,
  className = "",
  pequena = false,
  prioridade = false,
  legenda = false,
  alt,
}: {
  chave: ChaveArte;
  className?: string;
  pequena?: boolean;
  prioridade?: boolean;
  legenda?: boolean;
  alt?: string;
}) {
  const o = arte[chave];
  const texto = alt ?? `${o.titulo}, ${o.artista} (${o.ano})`;
  const imagem = (
    <img
      src={img(chave, pequena)}
      alt={texto}
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
      <figcaption className="credito">{creditoObra(chave)}</figcaption>
    </figure>
  );
}
