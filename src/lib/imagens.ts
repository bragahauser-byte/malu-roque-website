import manifesto from "@/content/imagens.json";
import { asset } from "./asset";

/**
 * Monta src + srcset a partir do manifesto gerado por `npm run imagens`.
 * O navegador escolhe a largura certa para o tamanho na tela e a
 * densidade (2x, 3x), então a imagem sai sempre na melhor nitidez disponível.
 */
type Entrada = { pasta: string; w: number; h: number; larguras: number[] };
const M = manifesto as Record<string, Entrada>;

export function fonteImagem(chave: string) {
  const m = M[chave];
  if (!m) throw new Error(`Imagem sem manifesto: ${chave}. Rode npm run imagens.`);
  const url = (l: number) => asset(`/img/${m.pasta}/${chave}-${l}.webp`);
  const padrao = m.larguras.find((l) => l >= 1024) ?? m.larguras[m.larguras.length - 1];
  return { src: url(padrao), srcSet: m.larguras.map((l) => `${url(l)} ${l}w`).join(", "), width: m.w, height: m.h };
}
