import { JanelaIcone } from "./Janela";

/**
 * Espaço reservado para fotografias pessoais, no formato da janela.
 * Para trocar: coloque a foto em public/img/malu/ e substitua este
 * componente por <Janela simples><img src={asset("/img/malu/retrato.webp")} alt="…" /></Janela>.
 */
export function FotoPendente({ rotulo = "Sua fotografia aqui", className = "", forma = "arco" }: { rotulo?: string; className?: string; forma?: "arco" | "retangulo" }) {
  return (
    <div className={`foto-pendente foto-pendente--${forma} ${className}`} role="img" aria-label={`Espaço reservado: ${rotulo}`}>
      <JanelaIcone className="foto-pendente__icone" />
      <span className="rotulo">{rotulo}</span>
    </div>
  );
}
