/**
 * A PASSAGEM — o motor único do movimento entre telas.
 *
 * Usado pela navegação entre páginas (components/Passagens.tsx) e pela troca
 * de lado (lib/mundo.ts). A forma é sempre a da identidade: laterais retas,
 * topo em semicírculo, base reta, sem divisórias.
 *
 * Coreografia em três camadas, de baixo para cima (View Transitions API):
 *
 *   1. a tela ANTERIOR (::view-transition-old) — fica parada; um arco é
 *      recortado nela (clip-path com furo, regra evenodd), e por esse furo
 *      aparece a camada 2;
 *   2. a SUPERFÍCIE — um campo de cor sólida (fundo do par de imagens), o
 *      "corpo" do arco que atravessa a tela;
 *   3. a tela NOVA (::view-transition-new) — chega dentro de um segundo arco,
 *      que segue o primeiro pelo mesmo trajeto com um pequeno atraso. Entre os
 *      dois fica uma faixa de cor em forma de arco: é a superfície passando.
 *      O conteúdo novo ainda sobe alguns pixels enquanto chega.
 *
 * Fases (página, 870 ms): preparação (o arco nasce fora da tela, no canto) →
 * entrada (acelera, contida) → travessia (velocidade máxima no meio, subindo
 * em diagonal para a esquerda) → revelação (a página nova acompanha) →
 * finalização (desacelera longamente; o arco já passou de todas as bordas,
 * nada fica na tela).
 *
 * O arco é desenhado com path() — comandos de arco de verdade, então o topo é
 * sempre um semicírculo em qualquer tamanho (inset() com "round" vira um
 * retângulo arredondado quando o raio muda). O trajeto é amostrado em quadros
 * com a mesma estrutura de comandos, interpolados linearmente; a curva de
 * tempo (easing) vale para a animação inteira. Resultado: movimento contínuo,
 * sem "degraus" entre quadros-chave.
 */

export type Direcao = "avancar" | "voltar";

/** Um arco: centro do semicírculo (cx, cy), raio r e a base (y) b. */
export type Arco = { cx: number; cy: number; r: number; b: number };

type Ritmo = {
  /** duração do arco-superfície */ superficie: number;
  /** quanto a página nova espera para seguir a superfície */ atraso: number;
  /** duração do arco da página nova */ pagina: number;
  /** quanto o conteúdo novo sobe ao chegar (px) */ subida: number;
};

export const RITMO_PAGINA: Ritmo = { superficie: 720, atraso: 110, pagina: 760, subida: 40 };
export const RITMO_MUNDO: Ritmo = { superficie: 780, atraso: 130, pagina: 800, subida: 0 };

/** Curvas (ver tokens.css e MOTION.md). */
export const CURVA_PASSAGEM = "cubic-bezier(0.64, 0.02, 0.18, 1)"; // parte contida, atravessa rápido, pousa devagar
export const CURVA_CHEGADA = "cubic-bezier(0.22, 1, 0.36, 1)"; // o conteúdo assenta

const QUADROS = 36;

const n = (v: number) => Math.round(v * 10) / 10;

function caminhoArco({ cx, cy, r, b }: Arco) {
  return `M${n(cx - r)} ${n(b)} V${n(cy)} A${n(r)} ${n(r)} 0 0 1 ${n(cx + r)} ${n(cy)} V${n(b)} Z`;
}

/** Raio para o arco de centro (cx, cy) cobrir a tela inteira (cantos de cima dentro do semicírculo). */
function raioQueCobre(cx: number, cy: number, W: number, H: number) {
  const ycentro = Math.max(cy, 0);
  return Math.max(Math.hypot(cx, ycentro), Math.hypot(W - cx, ycentro), cx, W - cx, H * 0.1) * 1.04 + 8;
}

/** Ponto de uma curva de Bézier quadrática. */
const bezier = (a: number, c: number, z: number, t: number) => (1 - t) * (1 - t) * a + 2 * (1 - t) * t * c + t * t * z;

/**
 * O trajeto entre páginas: o arco nasce fora da tela, abaixo do canto
 * inferior direito, sobe em diagonal para a esquerda (curva: primeiro sobe,
 * depois varre) e cresce até passar de todas as bordas.
 */
export function trajetoPagina(W: number, H: number, direcao: Direcao): Arco[] {
  const D = Math.hypot(W, H);
  const r0 = D * 0.16;
  const ini = { cx: W * 0.9, cy: H + r0 + 8 };
  const ctl = { cx: W * 0.84, cy: H * 0.52 };
  const fim = { cx: W * 0.4, cy: H * 0.42 };
  const r1 = raioQueCobre(fim.cx, fim.cy, W, H);
  const arcos: Arco[] = [];
  for (let i = 0; i <= QUADROS; i++) {
    const t = i / QUADROS;
    const cx = bezier(ini.cx, ctl.cx, fim.cx, t);
    const cy = bezier(ini.cy, ctl.cy, fim.cy, t);
    const r = r0 + (r1 - r0) * Math.pow(t, 1.3);
    arcos.push({ cx: direcao === "voltar" ? W - cx : cx, cy, r, b: Math.max(H, cy) + r * 0.1 + 40 });
  }
  return arcos;
}

/**
 * O trajeto da troca de lado: parte EXATAMENTE do arco clicado (mesma
 * posição, largura e base) e cresce como uma cúpula: primeiro se alarga
 * mantendo o topo à vista (o semicírculo sempre legível), e só no fim sobe
 * para fora da tela. Para a amostra pequena do cabeçalho, colada no topo, a
 * cúpula não teria onde aparecer: ali vale o trajeto entre páginas.
 */
export function trajetoDeOrigem(o: DOMRect, W: number, H: number): Arco[] {
  if (o.width < 64 || o.top < 0 || o.bottom > H) return trajetoPagina(W, H, "avancar");
  const r0 = o.width / 2;
  const ini = { cx: o.left + r0, topo: o.top, b: o.bottom };
  const fimCx = W * 0.5 + (ini.cx - W * 0.5) * 0.3;
  const fimCy = H * 0.42;
  const r1 = raioQueCobre(fimCx, fimCy, W, H);
  const topoFim = fimCy - r1;
  const bFim = Math.max(H, fimCy) + r1 * 0.1 + 40;
  const suave = (a: number, z: number, t: number) => {
    const x = Math.min(1, Math.max(0, (t - a) / (z - a)));
    return x * x * (3 - 2 * x);
  };
  const arcos: Arco[] = [];
  for (let i = 0; i <= QUADROS; i++) {
    const t = i / QUADROS;
    const r = r0 + (r1 - r0) * Math.pow(t, 1.6);
    // o topo da cúpula sobe só um pouco até 45% do trajeto, depois sai pela borda de cima
    const topo = ini.topo - Math.min(ini.topo, H * 0.06) * suave(0, 0.45, t) + (topoFim - ini.topo + Math.min(ini.topo, H * 0.06)) * suave(0.45, 1, t);
    arcos.push({ cx: ini.cx + (fimCx - ini.cx) * t, cy: topo + r, r, b: ini.b + (bFim - ini.b) * suave(0, 0.6, t) });
  }
  return arcos;
}

// ── Estado: no máximo uma passagem por vez ─────────────────────
let atual: ViewTransition | null = null;

export const passagemEmCurso = () => atual !== null;

/** Termina já a passagem em curso (o conteúdo novo fica, sem animação). */
export function pularPassagem() {
  atual?.skipTransition();
  atual = null;
}

export const suportaPassagem = () => typeof document !== "undefined" && "startViewTransition" in document;
export const movimentoReduzido = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

type Opcoes = {
  /** troca o conteúdo; a passagem espera a promessa (rota nova aplicada). */
  atualizar: () => void | Promise<void>;
  /** depois da troca e antes da foto da tela nova: rolagem, imagens etc. */
  preparar?: () => void | Promise<void>;
  /** calcula o trajeto já com a tela medida */
  trajeto: (W: number, H: number) => Arco[];
  /** cor da superfície (valor CSS) */
  superficie: string;
  ritmo: Ritmo;
};

/**
 * Executa uma passagem. Sem suporte à API, só troca o conteúdo.
 * Com "reduzir movimento", troca de opacidade curta (200 ms), sem arco.
 */
export function passar({ atualizar, preparar, trajeto, superficie, ritmo }: Opcoes) {
  if (!suportaPassagem()) {
    void Promise.resolve(atualizar()).then(() => preparar?.());
    return;
  }
  const html = document.documentElement;
  html.style.setProperty("--superficie-passagem", superficie);
  html.classList.add("em-passagem");

  const t = document.startViewTransition(async () => {
    await atualizar();
    await preparar?.();
  });
  atual = t;
  const animacoes: Animation[] = [];

  const guardar = (a: Animation) => (animacoes.push(a), a);
  t.ready
    .then(() => {
      const pseudoVelha = "::view-transition-old(root)";
      const pseudoNova = "::view-transition-new(root)";
      if (movimentoReduzido()) {
        guardar(html.animate({ opacity: [0, 1] }, { duration: 200, easing: "linear", pseudoElement: pseudoNova }));
        return;
      }
      const W = html.clientWidth;
      const H = innerHeight;
      const arcos = trajeto(W, H);
      const borda = `M-60 -60 H${W + 60} V${H + 60} H-60 Z `;
      // 1. o furo em arco na tela anterior: por ele aparece a superfície
      guardar(html.animate(
        { clipPath: arcos.map((a) => `path(evenodd, "${borda}${caminhoArco(a)}")`) },
        { duration: ritmo.superficie, easing: CURVA_PASSAGEM, fill: "both", pseudoElement: pseudoVelha },
      ));
      // 3. a tela nova, dentro do arco que segue a superfície
      guardar(html.animate(
        { clipPath: arcos.map((a) => `path("${caminhoArco(a)}")`) },
        { duration: ritmo.pagina, delay: ritmo.atraso, easing: CURVA_PASSAGEM, fill: "both", pseudoElement: pseudoNova },
      ));
      if (ritmo.subida) {
        guardar(html.animate(
          { objectPosition: [`50% ${ritmo.subida}px`, "50% 0px"] },
          { duration: ritmo.pagina + 140, delay: ritmo.atraso, easing: CURVA_CHEGADA, fill: "both", pseudoElement: pseudoNova },
        ));
      }
    })
    .catch(() => {});

  t.finished.finally(() => {
    if (atual === t) atual = null;
    // as animações com fill ficariam presas ao html depois do fim: solta todas
    animacoes.forEach((a) => a.cancel());
    html.classList.remove("em-passagem");
    html.style.removeProperty("--superficie-passagem");
  });
  return t;
}

/**
 * Antes da foto da tela nova: o que está na primeira dobra já aparece
 * (sem esperar o observador de rolagem, que só roda depois da passagem) e as
 * imagens visíveis carregam antes de a página ser revelada (no máximo 320 ms
 * de espera; o navegador não desenha quadros durante esse intervalo).
 */
export async function prepararChegada() {
  const H = innerHeight;
  const naTela = (el: Element) => {
    const r = el.getBoundingClientRect();
    return r.bottom > 0 && r.top < H && r.width > 0;
  };
  document.querySelectorAll(".revelar:not(.visto)").forEach((el) => {
    if (naTela(el)) el.classList.add("visto", "visto--ja");
  });
  const pendentes: Promise<unknown>[] = [];
  document.querySelectorAll<HTMLImageElement>("main img").forEach((img) => {
    if (!naTela(img)) return;
    if (img.loading === "lazy") img.loading = "eager";
    if (!img.complete) pendentes.push(img.decode().catch(() => {}));
  });
  if (pendentes.length) await Promise.race([Promise.all(pendentes), new Promise((r) => setTimeout(r, 320))]);
}
