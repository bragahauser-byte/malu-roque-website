import type { Metadata } from "next";
import { Palavras } from "@/components/Palavras";
import { Postal } from "@/components/Postal";
import { BotaoWhatsapp } from "@/components/BotaoWhatsapp";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contato",
  description: `Contato e agendamento com Maria Luiza Roque (Malu Roque), psicóloga, CRP ${site.crp}: WhatsApp, Instagram, TikTok e LinkedIn.`,
};

export default function Contato() {
  return (
    <div className="contato">
      <section className="abertura grade">
        <p className="abertura__kicker rotulo">Contato · Correspondência</p>
        <Palavras como="h1" className="abertura__titulo abertura__titulo--largo" texto="Escreva,|*sem cerimônia.*" />
        <div className="abertura__lead">
          <p className="lead revelar">
            Para saber sobre horários, modalidades e como funciona o atendimento, a forma mais rápida é uma mensagem pelo WhatsApp.
          </p>
          <div className="revelar">
            <BotaoWhatsapp texto="Conversar pelo WhatsApp" />
          </div>
          <p className="ui suave revelar">
            {site.nome} · {site.profissao} · CRP {site.crp} · {site.cidade}, presencial e online
          </p>
        </div>
      </section>

      <section className="secao contato__corpo grade" aria-label="Redes e cartão-postal">
        <ul className="contato__redes">
          {Object.values(site.redes).map((r) => (
            <li key={r.rotulo} className="revelar">
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="contato__rede">
                <span className="rotulo">{r.rotulo}</span>
                <span className="contato__usuario">{r.usuario}</span>
                <span className="contato__seta" aria-hidden="true">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="contato__postal">
          <Postal />
        </div>
      </section>
    </div>
  );
}
