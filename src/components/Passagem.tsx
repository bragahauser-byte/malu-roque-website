"use client";

import { atravessar } from "@/lib/mundo";
import { Arco } from "./Arco";
import { Obra } from "./Obra";

/**
 * O controle da passagem no cabeçalho, em todas as páginas.
 * A pequena amostra em arco tem sempre a cor do outro lado (não é um
 * ícone de marca: é a cor de onde se vai chegar). O texto muda conforme
 * o lado atual, via CSS.
 */
export function BotaoPassagem() {
  return (
    <button type="button" className="passagem-botao" onClick={(e) => atravessar(e.currentTarget.querySelector(".passagem-botao__amostra"))} aria-describedby="passagem-explica">
      <span className="passagem-botao__amostra" aria-hidden="true" />
      <span className="so-visivel">O outro lado</span>
      <span className="so-simbolico">Voltar ao visível</span>
      <span id="passagem-explica" className="sr-only">
        Alterna o site entre o lado visível (atendimento, formação e pesquisa) e o lado simbólico (imaginário, arte e caderno).
      </span>
    </button>
  );
}

/**
 * O PORTAL da capa. Um arco com batente (contorno afastado) e, dentro dele,
 * um segundo arco mais fundo: a vista do OUTRO lado. No visível, deixa ver o
 * verde do simbólico e O carro de Apolo, de Redon; no simbólico, deixa ver o
 * creme do visível e a rua de Caillebotte. Clicar é atravessar.
 */
export function PortalCapa() {
  return (
    <button type="button" className="portal" onClick={(e) => atravessar(e.currentTarget.querySelector(".arco__vista"))}>
      <Arco moldura className="portal__arco">
        <span className="portal__vista so-visivel">
          <Obra chave="redon-carro-apolo" prioridade alt="" tamanhos="(max-width: 1023px) 60vw, 26vw" />
        </span>
        <span className="portal__vista so-simbolico">
          <Obra chave="caillebotte-rain" alt="" tamanhos="(max-width: 1023px) 60vw, 26vw" />
        </span>
      </Arco>
      <span className="portal__legenda">
        <span className="portal__acao chapeu">
          <span className="so-visivel">Atravessar para o outro lado</span>
          <span className="so-simbolico">Voltar ao visível</span>
          <span className="portal__seta" aria-hidden="true">
            →
          </span>
        </span>
        <span className="portal__nota ui">
          <span className="so-visivel">Do outro lado: arte, sonhos, símbolos, viagens e o caderno.</span>
          <span className="so-simbolico">Do outro lado: o atendimento, a formação e a pesquisa.</span>
        </span>
      </span>
    </button>
  );
}
