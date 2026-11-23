import type { Metadata } from "next";
import { Palavras } from "@/components/Palavras";
import { Postal } from "@/components/Postal";
import { BotaoWhatsapp } from "@/components/BotaoWhatsapp";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Correspondência",
  description: "Contato e agendamento com Maria Luiza Roque (Malu Roque): WhatsApp, Instagram, TikTok e LinkedIn.",
};

export default function Contato() {
  return (
    <section className="contato envoltorio">
      <div className="contato__luz" aria-hidden="true" />
      <p className="abertura__num rotulo">05 · Correspondência</p>
      <Palavras como="h1" className="contato__titulo" texto="Escreva,|*sem cerimônia.*" />

      <div className="contato__grade">
        <div className="contato__texto revelar">
          <p className="lead">
            Para saber sobre horários, modalidades e como funciona o atendimento, a forma mais rápida é uma mensagem pelo WhatsApp.
          </p>
          <BotaoWhatsapp texto="Conversar pelo WhatsApp" />
          <ul className="contato__redes">
            {Object.values(site.redes).map((r, i) => (
              <li key={r.rotulo} className="revelar" style={{ "--atraso": `${i * 0.07}s` } as React.CSSProperties}>
                <a href={r.url} target="_blank" rel="noopener noreferrer" data-cursor="visitar">
                  <span className="rotulo">{r.rotulo}</span>
                  <span className="contato__usuario">{r.usuario}</span>
                  <span className="contato__seta" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Postal />
      </div>
    </section>
  );
}
