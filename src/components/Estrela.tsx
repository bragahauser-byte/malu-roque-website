/** A pequena estrela de quatro pontas, assinatura gráfica do site. */
export function Estrela({ className = "", cor = "currentColor" }: { className?: string; cor?: string }) {
  return (
    <svg className={`estrela ${className}`} viewBox="0 0 34 34" aria-hidden="true" focusable="false">
      <path fill={cor} d="M17 2.6c.9 8.4 2.7 12.4 13.6 14.4-10.9 1.8-12.7 5.8-13.6 14.4-.9-8.6-2.7-12.6-13.6-14.4C14.3 15 16.1 11 17 2.6z" />
    </svg>
  );
}
