"use client";

import type { Bandeira as Chave } from "@/content/viagens";
import { destinosEn } from "@/content/en/viagens";
import { useLingua } from "@/lib/useLingua";

/**
 * Bandeiras em SVG (os emojis de bandeira não aparecem no Windows).
 * Proporção única 3:2, pequenas, como marcador editorial ao lado do texto.
 * Inglaterra = Cruz de São Jorge (a bandeira da Inglaterra, não a do Reino Unido).
 * Vaticano e Malta: o brasão e a Cruz de São Jorge maltesa aparecem simplificados,
 * porque não são legíveis no tamanho de um marcador.
 */
const NOMES: Record<Chave, string> = {
  inglaterra: "Inglaterra", dinamarca: "Dinamarca", italia: "Itália", belgica: "Bélgica", holanda: "Holanda", monaco: "Mônaco",
  vaticano: "Vaticano", marrocos: "Marrocos", franca: "França", alemanha: "Alemanha", malta: "Malta", austria: "Áustria",
};

function Desenho({ pais }: { pais: Chave }) {
  switch (pais) {
    case "inglaterra":
      return (<><rect width="30" height="20" fill="#fff" /><rect x="12.5" width="5" height="20" fill="#ce1124" /><rect y="7.5" width="30" height="5" fill="#ce1124" /></>);
    case "dinamarca":
      return (<><rect width="30" height="20" fill="#c8102e" /><rect x="9" width="3.5" height="20" fill="#fff" /><rect y="8.25" width="30" height="3.5" fill="#fff" /></>);
    case "italia":
      return (<><rect width="10" height="20" fill="#009246" /><rect x="10" width="10" height="20" fill="#fff" /><rect x="20" width="10" height="20" fill="#ce2b37" /></>);
    case "belgica":
      return (<><rect width="10" height="20" fill="#000" /><rect x="10" width="10" height="20" fill="#fdda24" /><rect x="20" width="10" height="20" fill="#ef3340" /></>);
    case "holanda":
      return (<><rect width="30" height="6.67" fill="#ae1c28" /><rect y="6.67" width="30" height="6.67" fill="#fff" /><rect y="13.33" width="30" height="6.67" fill="#21468b" /></>);
    case "monaco":
      return (<><rect width="30" height="10" fill="#ce1126" /><rect y="10" width="30" height="10" fill="#fff" /></>);
    case "vaticano":
      return (<><rect width="15" height="20" fill="#ffe000" /><rect x="15" width="15" height="20" fill="#fff" /><circle cx="22.5" cy="10" r="3" fill="none" stroke="#c9a227" strokeWidth="1.2" /></>);
    case "marrocos":
      return (<><rect width="30" height="20" fill="#c1272d" /><path d="M15 5.2 16.4 9.6 21 9.6 17.3 12.3 18.7 16.7 15 14 11.3 16.7 12.7 12.3 9 9.6 13.6 9.6Z" fill="none" stroke="#006233" strokeWidth="1.1" strokeLinejoin="round" /></>);
    case "franca":
      return (<><rect width="10" height="20" fill="#0055a4" /><rect x="10" width="10" height="20" fill="#fff" /><rect x="20" width="10" height="20" fill="#ef4135" /></>);
    case "alemanha":
      return (<><rect width="30" height="6.67" fill="#000" /><rect y="6.67" width="30" height="6.67" fill="#dd0000" /><rect y="13.33" width="30" height="6.67" fill="#ffce00" /></>);
    case "malta":
      return (<><rect width="15" height="20" fill="#fff" /><rect x="15" width="15" height="20" fill="#cf142b" /><rect x="2" y="2" width="4" height="4" fill="none" stroke="#9a9a9a" strokeWidth="0.8" /></>);
    case "austria":
      return (<><rect width="30" height="6.67" fill="#ed2939" /><rect y="6.67" width="30" height="6.67" fill="#fff" /><rect y="13.33" width="30" height="6.67" fill="#ed2939" /></>);
  }
}

export function Bandeira({ pais, className = "", decorativa = false }: { pais: Chave; className?: string; decorativa?: boolean }) {
  const { l } = useLingua();
  const rotulo = l === "en" ? `Flag: ${destinosEn[pais].pais}` : `Bandeira: ${NOMES[pais]}`;
  return (
    <svg className={`bandeira ${className}`} viewBox="0 0 30 20" role={decorativa ? undefined : "img"} aria-label={decorativa ? undefined : rotulo} aria-hidden={decorativa || undefined} focusable="false">
      <Desenho pais={pais} />
      <rect width="30" height="20" fill="none" stroke="rgb(12 13 8 / 0.25)" strokeWidth="0.6" />
    </svg>
  );
}
