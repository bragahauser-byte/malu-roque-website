/**
 * ARCO — enquadramento editorial em arco (topo em semicírculo, laterais
 * retas, sem divisórias, sem contornos). É uma das formas de recorte das
 * imagens do site, ao lado do retângulo e da janelinha de avião. Não é um
 * símbolo da marca.
 */
export function Arco({ children, className = "", proporcao, style }: { children?: React.ReactNode; className?: string; proporcao?: string; style?: React.CSSProperties }) {
  return (
    <div className={`arco ${className}`} style={{ ...(proporcao ? { "--proporcao": proporcao } : {}), ...style } as React.CSSProperties}>
      <div className="arco__vista">{children}</div>
    </div>
  );
}
