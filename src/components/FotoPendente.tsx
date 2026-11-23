/**
 * Espaço reservado para fotografias pessoais.
 * Para trocar: substitua este componente por <img src="/img/malu/retrato.webp" ... />
 * (coloque o arquivo em public/img/malu/).
 */
export function FotoPendente({ rotulo = "Sua fotografia aqui", className = "", forma = "arco" }: { rotulo?: string; className?: string; forma?: "arco" | "retangulo" | "circulo" }) {
  return (
    <div className={`foto-pendente foto-pendente--${forma} ${className}`} role="img" aria-label={`Espaço reservado: ${rotulo}`}>
      <svg className="foto-pendente__estrela" viewBox="0 0 34 34" aria-hidden="true">
        <path d="M17 2.6c.9 8.4 2.7 12.4 13.6 14.4-10.9 1.8-12.7 5.8-13.6 14.4-.9-8.6-2.7-12.6-13.6-14.4C14.3 15 16.1 11 17 2.6z" />
      </svg>
      <span className="rotulo">{rotulo}</span>
    </div>
  );
}
