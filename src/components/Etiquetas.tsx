/** Palavras em blocos de cor, empilhadas em escada (motivo gráfico do site). */
export function Etiquetas({ itens, cores, className = "" }: { itens: string[]; cores?: string[]; className?: string }) {
  const paleta = cores ?? ["var(--lavanda)", "var(--malva)", "var(--ambar)"];
  return (
    <span className={`etiquetas ${className}`}>
      {itens.map((t, i) => (
        <span key={t + i} style={{ "--c": paleta[i % paleta.length] } as React.CSSProperties}>
          {t}
        </span>
      ))}
    </span>
  );
}
