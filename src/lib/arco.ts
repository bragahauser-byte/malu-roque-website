/**
 * A GEOMETRIA DO ARCO EM MOVIMENTO
 *
 * A forma da identidade descrita como clip-path: inset(...) com cantos
 * superiores arredondados pela metade da largura (topo em semicírculo,
 * laterais retas, base reta). Valores negativos deixam o arco passar das
 * bordas da tela. Tudo em px, para que a interpolação seja exata.
 */

export type Direcao = "avancar" | "voltar";

type Caixa = { esquerda: number; topo: number; largura: number; altura: number };

/** Um arco como clip-path, numa tela W × H. */
export function arcoClip({ esquerda, topo, largura, altura }: Caixa, W: number, H: number) {
  const r = largura / 2;
  const cima = topo;
  const direita = W - (esquerda + largura);
  const baixo = H - (topo + altura);
  return `inset(${cima}px ${direita}px ${baixo}px ${esquerda}px round ${r}px ${r}px 0px 0px)`;
}

/**
 * Os três quadros da passagem entre páginas.
 *  0 — um arco estreito, logo abaixo do canto inferior direito (fora da tela);
 *  1 — o arco subiu em diagonal e cresceu: já ocupa o centro-direita;
 *  2 — o arco passou da tela por todos os lados (o semicírculo acima do topo):
 *      a página nova está inteira, sem resíduo da forma.
 * Ao voltar, o mesmo trajeto espelhado (vem da esquerda).
 */
export function quadrosDoArco(W: number, H: number, direcao: Direcao) {
  const caixas: Caixa[] = [];
  const l0 = Math.max(W * 0.34, 140);
  caixas.push({ esquerda: W * 0.9, topo: H * 1.02, largura: l0, altura: l0 * 1.5 });
  const l1 = Math.max(W * 0.78, H * 0.62);
  caixas.push({ esquerda: W - l1 * 0.92, topo: H * 0.16, largura: l1, altura: H * 1.2 });
  const l2 = Math.max(W * 2.2, H * 1.6);
  caixas.push({ esquerda: W - l2 * 0.68, topo: -l2 / 2 - 4, largura: l2, altura: l2 / 2 + H + 8 });
  const espelhar = (c: Caixa): Caixa => (direcao === "voltar" ? { ...c, esquerda: W - (c.esquerda + c.largura) } : c);
  return caixas.map((c) => arcoClip(espelhar(c), W, H));
}
