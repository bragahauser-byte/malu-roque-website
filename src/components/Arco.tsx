/**
 * ARCO — moldura arquitetônica para imagens e para a passagem.
 * Topo em semicírculo, laterais retas, sem divisórias internas.
 * `moldura` acrescenta um contorno afastado (como o batente de uma
 * porta), que dá profundidade. Não é um símbolo da marca: é uma forma
 * de enquadrar, e a metáfora da passagem entre os dois lados.
 */
export function Arco({
  children,
  className = "",
  moldura = false,
  proporcao,
  style,
}: {
  children?: React.ReactNode;
  className?: string;
  moldura?: boolean;
  proporcao?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`arco ${moldura ? "arco--moldura" : ""} ${className}`} style={{ ...(proporcao ? { "--proporcao": proporcao } : {}), ...style } as React.CSSProperties}>
      <div className="arco__vista">{children}</div>
    </div>
  );
}
