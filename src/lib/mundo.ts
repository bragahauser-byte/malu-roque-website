/**
 * OS DOIS MUNDOS
 *
 * O site tem dois lados: o VISÍVEL (quem é, o que faz, como atende) e o
 * SIMBÓLICO (o imaginário: sonhos, mitos, livros, música, viagens).
 * O lado atual fica em <html data-mundo="visivel|simbolico"> e é
 * lembrado durante a visita (sessionStorage).
 *
 * A passagem: o arco clicado (o portal da capa ou a pequena amostra do
 * cabeçalho) cresce a partir da própria forma, com a superfície rosa à
 * frente e o novo lado logo atrás, até cobrir a tela (lib/passagem.ts).
 * Sem suporte, ou com "reduzir movimento", a troca é imediata.
 */

import { RITMO_MUNDO, passar, passagemEmCurso, pularPassagem, suportaPassagem, movimentoReduzido, trajetoDeOrigem } from "./passagem";

export type Mundo = "visivel" | "simbolico";

export const CHAVE_MUNDO = "malu-mundo";

/** Script curto, rodado antes da pintura, para não piscar o mundo errado. */
export const scriptMundo = `try{if(sessionStorage.getItem("${CHAVE_MUNDO}")==="simbolico")document.documentElement.dataset.mundo="simbolico"}catch(e){}`;

export function mundoAtual(): Mundo {
  return document.documentElement.dataset.mundo === "simbolico" ? "simbolico" : "visivel";
}

export function atravessar(origem?: Element | null) {
  const html = document.documentElement;
  const proximo: Mundo = mundoAtual() === "simbolico" ? "visivel" : "simbolico";

  const aplicar = () => {
    html.dataset.mundo = proximo;
    try {
      sessionStorage.setItem(CHAVE_MUNDO, proximo);
    } catch {}
    window.dispatchEvent(new CustomEvent<Mundo>("mundo", { detail: proximo }));
  };

  // cliques repetidos: a passagem em curso termina e a troca é imediata
  if (passagemEmCurso()) {
    pularPassagem();
    aplicar();
    return;
  }
  if (!suportaPassagem() || movimentoReduzido() || !origem) {
    aplicar();
    return;
  }

  // o arco de partida: o próprio arco clicado, medido antes da troca
  const caixa = origem.getBoundingClientRect();
  passar({
    atualizar: aplicar,
    trajeto: (W, H) => trajetoDeOrigem(caixa, W, H),
    // a cor da passagem entre os mundos: o rosa, que contrasta com o creme e com o verde
    superficie: "#f897f0",
    ritmo: RITMO_MUNDO,
  });
}
