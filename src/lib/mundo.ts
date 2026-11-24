/**
 * OS DOIS MUNDOS
 *
 * O site tem dois lados: o VISÍVEL (quem é, o que faz, como atende) e o
 * SIMBÓLICO (o imaginário: sonhos, mitos, livros, música, viagens).
 * O lado atual fica em <html data-mundo="visivel|simbolico"> e é
 * lembrado durante a visita (sessionStorage).
 *
 * A passagem: o novo lado aparece através do arco clicado, que
 * cresce até virar a tela inteira (View Transitions API).
 * Sem suporte, ou com "reduzir movimento", a troca é imediata.
 */

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

  const reduzido = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!("startViewTransition" in document) || reduzido || !origem) {
    aplicar();
    return;
  }

  // O arco de partida: o próprio arco clicado, nas coordenadas da tela.
  const r = origem.getBoundingClientRect();
  const W = document.documentElement.clientWidth;
  const H = innerHeight;
  const raio = r.width / 2;
  const de = `inset(${r.top}px ${W - r.right}px ${H - r.bottom}px ${r.left}px round ${raio}px ${raio}px 0px 0px)`;
  const ate = `inset(0px 0px 0px 0px round 0px 0px 0px 0px)`;

  const t = document.startViewTransition(aplicar);
  t.ready
    .then(() => {
      html.animate(
        { clipPath: [de, ate] },
        { duration: 820, easing: "cubic-bezier(0.76, 0, 0.18, 1)", pseudoElement: "::view-transition-new(root)" },
      );
    })
    .catch(() => {});
}
