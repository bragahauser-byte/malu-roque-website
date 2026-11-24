"use client";

import { atravessar } from "@/lib/mundo";
import { Janela, JanelaIcone } from "./Janela";
import { Obra } from "./Obra";

/**
 * O controle da passagem no cabeçalho: uma pequena janela + o nome do
 * outro lado. Está em todas as páginas. O texto muda conforme o mundo
 * (via CSS, sem esperar o JavaScript).
 */
export function BotaoPassagem() {
  return (
    <button
      type="button"
      className="passagem-botao"
      onClick={(e) => atravessar(e.currentTarget.querySelector(".janela-icone"))}
      aria-describedby="passagem-explica"
    >
      <JanelaIcone />
      <span className="so-visivel">O outro lado</span>
      <span className="so-simbolico">O visível</span>
      <span id="passagem-explica" className="sr-only">
        Alterna o site entre o lado visível (atendimento e trajetória) e o lado simbólico (imaginário e caderno).
      </span>
    </button>
  );
}

/**
 * A grande janela da capa. Ela sempre mostra o OUTRO lado: no visível,
 * deixa ver o verde do simbólico e as flores-nuvem de Redon; no simbólico,
 * deixa ver o creme do visível e a rua de Caillebotte. Clicar é atravessar.
 */
export function JanelaCapa() {
  return (
    <button
      type="button"
      className="janela-capa"
      onClick={(e) => atravessar(e.currentTarget.querySelector(".janela"))}
    >
      <Janela className="janela-capa__arco">
        <span className="janela-capa__vista janela-capa__vista--simbolico so-visivel">
          <Obra chave="redon-flower-clouds" prioridade alt="" />
        </span>
        <span className="janela-capa__vista janela-capa__vista--visivel so-simbolico">
          <Obra chave="caillebotte-rain" alt="" />
        </span>
      </Janela>
      <span className="janela-capa__legenda">
        <span className="janela-capa__acao chapeu">
          <span className="so-visivel">Atravessar a janela</span>
          <span className="so-simbolico">Voltar ao visível</span>
          <span className="janela-capa__seta" aria-hidden="true">
            →
          </span>
        </span>
        <span className="janela-capa__nota ui">
          <span className="so-visivel">Do outro lado: o imaginário, os livros, a música, as viagens e o caderno.</span>
          <span className="so-simbolico">Do outro lado: o consultório, a formação e a trajetória.</span>
        </span>
      </span>
    </button>
  );
}
