"use client";

import { atravessar } from "@/lib/mundo";
import { useLingua } from "@/lib/useLingua";
import { Arco } from "./Arco";
import { Obra } from "./Obra";

/**
 * A troca de lado (visível ⇄ simbólico), em texto, no rodapé (v7: saiu do
 * cabeçalho, onde agora fica a troca de idioma). A pequena amostra em arco
 * tem sempre a cor do outro lado. O texto muda conforme o lado atual, via CSS.
 */
export function BotaoPassagem() {
  const { t } = useLingua();
  return (
    <button type="button" className="passagem-botao" onClick={(e) => atravessar(e.currentTarget.querySelector(".passagem-botao__amostra"))} aria-describedby="passagem-explica">
      <span className="passagem-botao__amostra" aria-hidden="true" />
      <span className="so-visivel">{t("Atravessar para o outro lado", "Cross to the other side")}</span>
      <span className="so-simbolico">{t("Voltar ao visível", "Back to the visible")}</span>
      <span id="passagem-explica" className="sr-only">
        {t(
          "Alterna o site entre o lado visível (atendimento, formação e pesquisa) e o lado simbólico (imaginário, arte e caderno).",
          "Switches the site between the visible side (therapy, training and research) and the symbolic side (imagination, art and notebook).",
        )}
      </span>
    </button>
  );
}

/**
 * O PORTAL da capa: uma imagem editorial em arco, como as outras do site,
 * sem bordas nem molduras próprias. Mostra sempre o OUTRO lado (no visível,
 * o pastel de Redon com o arco azul e as flores; no simbólico, O carro de Apolo). Clicar é
 * atravessar: o novo lado se abre a partir deste arco.
 */
export function PortalCapa() {
  const { t } = useLingua();
  return (
    <button type="button" className="portal" onClick={(e) => atravessar(e.currentTarget.querySelector(".arco__vista"))}>
      <Arco className="portal__arco">
        <span className="portal__vista so-visivel">
          <Obra chave="redon-perfil-flores" prioridade alt="" tamanhos="(max-width: 639px) 100vw, (max-width: 1023px) 60vw, 30vw" />
        </span>
        <span className="portal__vista so-simbolico">
          <Obra chave="redon-carro-apolo" alt="" tamanhos="(max-width: 639px) 100vw, (max-width: 1023px) 60vw, 30vw" />
        </span>
      </Arco>
      <span className="portal__legenda">
        <span className="portal__acao chapeu">
          <span className="so-visivel">{t("Atravessar para o outro lado", "Cross to the other side")}</span>
          <span className="so-simbolico">{t("Voltar ao visível", "Back to the visible")}</span>
          <span className="portal__seta" aria-hidden="true">
            →
          </span>
        </span>
        <span className="portal__nota ui">
          <span className="so-visivel">{t("Do outro lado: arte, sonhos, símbolos, viagens e o caderno.", "On the other side: art, dreams, symbols, travel and the notebook.")}</span>
          <span className="so-simbolico">{t("Do outro lado: o atendimento, a formação e a pesquisa.", "On the other side: therapy, training and research.")}</span>
        </span>
      </span>
    </button>
  );
}
