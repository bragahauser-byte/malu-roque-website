import { fonteImagem } from "@/lib/imagens";

/**
 * JANELINHA DE AVIÃO (referência AC Concierge)
 * Um recorte arredondado, como a janela de uma aeronave, com uma persiana
 * que se abre quando a janela entra na tela (o mesmo gesto de "abertura"
 * do resto do site) e termina de subir no hover/foco.
 * Recurso narrativo de viagem: não é usado em todas as imagens.
 */
export function JanelaAviao({
  imagem,
  alt,
  tamanhos = "(max-width: 639px) 70vw, (max-width: 1023px) 40vw, 22vw",
  className = "",
  prioridade = false,
}: {
  imagem: string;
  alt: string;
  tamanhos?: string;
  className?: string;
  prioridade?: boolean;
}) {
  const f = fonteImagem(imagem);
  return (
    <div className={`aviao ${className}`}>
      <img src={f.src} srcSet={f.srcSet} sizes={tamanhos} width={f.width} height={f.height} alt={alt} loading={prioridade ? "eager" : "lazy"} decoding="async" />
      <span className="aviao__persiana" aria-hidden="true" />
    </div>
  );
}
