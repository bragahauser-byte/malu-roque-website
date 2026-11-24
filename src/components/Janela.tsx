/**
 * A JANELA — símbolo do site.
 * Arco romano com caixilho em linha fina (montante e travessa na
 * nascença do arco). Dentro dela, qualquer conteúdo: uma obra, uma foto,
 * um campo de cor. `simples` tira o caixilho e deixa só o arco.
 */
export function Janela({
  children,
  className = "",
  simples = false,
  proporcao,
  style,
}: {
  children?: React.ReactNode;
  className?: string;
  simples?: boolean;
  proporcao?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`janela ${simples ? "janela--simples" : ""} ${className}`}
      style={{ ...(proporcao ? { "--proporcao": proporcao } : {}), ...style } as React.CSSProperties}
    >
      <div className="janela__vista">{children}</div>
      <span className="janela__caixilho" aria-hidden="true" />
    </div>
  );
}

/** A janela em miniatura, desenhada em SVG (cabeçalho, marca, ícones). */
export function JanelaIcone({ className = "" }: { className?: string }) {
  return (
    <svg className={`janela-icone ${className}`} viewBox="0 0 20 26" aria-hidden="true" focusable="false">
      <path className="janela-icone__vidro" d="M1 25V10a9 9 0 0 1 18 0v15z" />
      <path className="janela-icone__caixilho" d="M1 25V10a9 9 0 0 1 18 0v15zM10 1v24M1 10h18" />
    </svg>
  );
}
