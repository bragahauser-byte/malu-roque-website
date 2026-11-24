import type { Metadata } from "next";
import { Palavras } from "@/components/Palavras";
import { Postal } from "@/components/Postal";
import { BotaoWhatsapp } from "@/components/BotaoWhatsapp";
import { dados, site } from "@/content/site";
import { tradutor, type Lingua } from "@/lib/lingua";

export const metadadosContato = (l: Lingua): Metadata =>
  l === "en"
    ? {
        title: "Contact",
        description: `Get in touch with Maria Luiza Roque, psychologist (online sessions in English and Portuguese, anywhere in the world), CRP ${site.crp}: WhatsApp, Instagram, TikTok and LinkedIn.`,
        openGraph: { locale: "en_US" },
      }
    : {
        title: "Contato",
        description: `Contato com Maria Luiza Roque, psicóloga (atendimento online, em português e em inglês, para o Brasil e o mundo), CRP ${site.crp}: WhatsApp, Instagram, TikTok e LinkedIn.`,
      };

/**
 * CONTATO — mesma grade das outras páginas:
 * coluna 1–6: título, texto, botão e dados; coluna 8–12: o postal.
 * Abaixo, as redes em réguas, como as listas do resto do site.
 */
export function Contato({ l }: { l: Lingua }) {
  const t = tradutor(l);
  const s = dados(l);
  return (
    <div className="contato">
      <section className="abertura contato__abertura grade">
        <p className="abertura__kicker rotulo">{t("Contato · Correspondência", "Contact · Correspondence")}</p>
        <div className="contato__coluna">
          <Palavras como="h1" className="contato__titulo" texto={t("Escreva,|*sem cerimônia.*", "Write,|*no need for ceremony.*")} />
          <p className="lead revelar">
            {t(
              "Os atendimentos são online, em português ou em inglês, para pessoas em qualquer lugar do mundo. Para saber sobre horários e como funciona, a forma mais rápida é uma mensagem pelo WhatsApp.",
              "Sessions are online, in English or Portuguese, for people anywhere in the world. To ask about times and how it works, the quickest way is a WhatsApp message.",
            )}
          </p>
          <div className="contato__acoes revelar">
            <BotaoWhatsapp cheio />
          </div>
          <dl className="contato__dados revelar">
            <div>
              <dt className="rotulo">WhatsApp</dt>
              <dd>{site.whatsappLegivel}</dd>
            </div>
            <div>
              <dt className="rotulo">{t("Atendimento", "Sessions")}</dt>
              <dd>{t("Online, para o Brasil e o mundo", "Online, for Brazil and the world")}</dd>
            </div>
            <div>
              <dt className="rotulo">{t("Idiomas", "Languages")}</dt>
              <dd>{t("Português e inglês", "English and Portuguese")}</dd>
            </div>
            <div>
              <dt className="rotulo">{t("Registro", "Registration")}</dt>
              <dd>
                {s.profissao} · CRP {site.crp}
              </dd>
            </div>
            <div>
              <dt className="rotulo">{t("Base", "Based in")}</dt>
              <dd>
                {site.cidade} – {site.estado}, {t("Brasil", "Brazil")}
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
            {t("Redes", "Social media")}
          </span>
          <h2 className="secao-cabeca__titulo titulo">
            {t("Onde mais ", "Where else ")}
            <em>{t("me encontrar", "to find me")}</em>
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
