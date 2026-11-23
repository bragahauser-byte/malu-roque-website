import type { ElementType } from "react";

/**
 * Título que sobe palavra por palavra ao entrar na tela.
 * Use *asteriscos* para itálico: "Entre o *visível*".
 * Use | para quebra de linha forçada.
 */
export function Palavras({
  texto,
  como: Tag = "h2",
  className = "",
  atraso = 0,
}: {
  texto: string;
  como?: ElementType;
  className?: string;
  atraso?: number;
}) {
  let i = 0;
  const linhas = texto.split("|");
  return (
    <Tag className={`palavras ${className}`} style={{ "--atraso": `${atraso}s` } as React.CSSProperties} aria-label={texto.replace(/[*|]/g, " ").replace(/\s+/g, " ").trim()}>
      {linhas.map((linha, li) => (
        <span key={li} aria-hidden="true" style={{ display: "block" }}>
          {linha
            .trim()
            .split(/\s+/)
            .map((p, pi) => {
              const italico = /^\*.*\*[.,;:!?…]*$/.test(p);
              const limpo = p.replace(/\*/g, "");
              const idx = i++;
              return (
                <span key={pi}>
                  <span className="palavra">
                    <span style={{ "--i": idx } as React.CSSProperties}>{italico ? <em>{limpo}</em> : limpo}</span>
                  </span>{" "}
                </span>
              );
            })}
        </span>
      ))}
    </Tag>
  );
}
