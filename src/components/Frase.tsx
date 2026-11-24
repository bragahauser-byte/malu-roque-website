import type { ChaveArte } from "@/content/arte";
import type { ChaveFoto } from "@/content/fotos";
import { fonteImagem } from "@/lib/imagens";

/**
 * TEXTO + IMAGEM + TEXTO
 * Uma frase em que pequenas imagens entram entre as palavras e fazem parte
 * da composição tipográfica. As imagens são decorativas dentro da frase
 * (alt vazio): a frase é lida normalmente por leitores de tela.
 *
 * Partes: string = palavras; { img, forma } = imagem intercalada.
 * Formas: "arco" (topo redondo), "pilula", "circulo", "retangulo".
 */
export type ParteFrase = string | { img: ChaveFoto | ChaveArte; forma?: "arco" | "pilula" | "circulo" | "retangulo"; largura?: number };

export function Frase({ partes, como: Tag = "p", className = "", id }: { partes: ParteFrase[]; como?: "p" | "h2" | "h3"; className?: string; id?: string }) {
  return (
    <Tag className={`frase ${className}`} id={id}>
      {partes.map((p, i) =>
        typeof p === "string" ? (
          <span key={i}>{p} </span>
        ) : (
          <span key={i}>
            <Miniatura chave={p.img} forma={p.forma ?? "pilula"} largura={p.largura} />{" "}
          </span>
        ),
      )}
    </Tag>
  );
}

function Miniatura({ chave, forma, largura = 1.6 }: { chave: string; forma: string; largura?: number }) {
  const f = fonteImagem(chave);
  return (
    <span className={`frase__img frase__img--${forma}`} style={{ "--l": `${largura}em` } as React.CSSProperties} aria-hidden="true">
      <img src={f.src} srcSet={f.srcSet} sizes="240px" alt="" loading="lazy" decoding="async" />
    </span>
  );
}
