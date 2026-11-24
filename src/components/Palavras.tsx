import type { ElementType } from "react";

/**
 * Título editorial em Georgia.
 * Use *asteriscos* para itálico ("Entre o *visível*") e | para quebrar a linha.
 * Aparece uma vez, com a mesma revelação discreta do resto do site.
 */
export function Palavras({ texto, como: Tag = "h2", className = "", id }: { texto: string; como?: ElementType; className?: string; id?: string }) {
  const linhas = texto.split("|");
  return (
    <Tag className={`titulo revelar ${className}`} id={id}>
      {linhas.map((linha, i) => (
        <span key={i} className="titulo__linha">
          {linha
            .trim()
            .split(/(\*[^*]+\*)/)
            .filter(Boolean)
            .map((parte, k) => (parte.startsWith("*") ? <em key={k}>{parte.slice(1, -1)}</em> : <span key={k}>{parte}</span>))}
        </span>
      ))}
    </Tag>
  );
}
