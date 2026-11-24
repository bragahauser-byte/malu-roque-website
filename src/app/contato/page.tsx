import type { Metadata } from "next";
import { Palavras } from "@/components/Palavras";
import { Postal } from "@/components/Postal";
import { BotaoWhatsapp } from "@/components/BotaoWhatsapp";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contato",
  description: `Contato com Maria Luiza Roque, psicóloga (atendimento online para todo o Brasil), CRP ${site.crp}: WhatsApp, Instagram, TikTok e LinkedIn.`,
};

/**
 * CONTATO — mesma grade das outras páginas:
 * coluna 1–6: título, texto, botão e dados; coluna 8–12: o postal.
 * Abaixo, as redes em réguas, como as listas do resto do site.
 */
export default function Contato() {
  return (
    <div className="contato">
      <section className="abertura contato__abertura grade">
        <p className="abertura__kicker rotulo">Contato · Correspondência</p>
        <div className="contato__coluna">
          <Palavras como="h1" className="contato__titulo" texto="Escreva,|*sem cerimônia.*" />
          <p className="lead revelar">
            Os atendimentos são online, para pessoas de todo o Brasil. Para saber sobre horários e como funciona, a forma mais rápida é uma
            mensagem pelo WhatsApp.
          </p>
          <div className="contato__acoes revelar">
            <BotaoWhatsapp cheio texto="Conversar pelo WhatsApp" />
          </div>
          <dl className="contato__dados revelar">
            <div>
              <dt className="rotulo">WhatsApp</dt>
              <dd>{site.whatsappLegivel}</dd>
            </div>
            <div>
              <dt className="rotulo">Atendimento</dt>
              <dd>Online, para todo o Brasil</dd>
            </div>
            <div>
              <dt className="rotulo">Registro</dt>
              <dd>
                {site.profissao} · CRP {site.crp}
              </dd>
            </div>
            <div>
              <dt className="rotulo">Atuação</dt>
              <dd>
                {site.cidade} – {site.estado}, Brasil
              </dd>
            </div>
          </dl>
        </div>
        <div className="contato__postal">
          <Postal />
        </div>
      </section>

      <section className="secao" aria-labelledby="h-redes">
        <div className="secao-cabeca grade">
          <span className="secao-cabeca__num rotulo">03</span>
          <span className="secao-cabeca__nome chapeu" id="h-redes">
            Redes
          </span>
          <h2 className="secao-cabeca__titulo titulo">
            Onde mais <em>me encontrar</em>
          </h2>
        </div>
        <ul className="linhas">
          {Object.values(site.redes).map((r) => (
            <li key={r.rotulo} className="revelar">
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="linha grade">
                <span className="linha__ano contato__rede-nome rotulo">{r.rotulo}</span>
                <span className="linha__titulo contato__usuario">{r.usuario}</span>
                <span className="linha__seta" aria-hidden="true">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
