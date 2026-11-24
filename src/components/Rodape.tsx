"use client";

import Link from "next/link";
import { dados, navegacao, site } from "@/content/site";
import { rota } from "@/lib/lingua";
import { useLingua } from "@/lib/useLingua";
import { BotaoWhatsapp } from "./BotaoWhatsapp";
import { BotaoPassagem } from "./Passagem";

/** Rodapé: um campo de cor sólida, a grade de sempre, o registro profissional e a troca de lado. */
export function Rodape() {
  const { l, t } = useLingua();
  const s = dados(l);
  return (
    <footer className="rodape tema-escuro">
      <div className="rodape__topo grade">
        <p className="rodape__convite">
          {t("Para agendar ou tirar dúvidas, ", "To book a session or ask a question, ")}
          <em>{t("escreva.", "write.")}</em>
        </p>
        <div className="rodape__cta">
          <BotaoWhatsapp claro />
          <Link href={rota(l, "/contato/")} className="ui link-linha">
            {t("Outras formas de contato", "Other ways to get in touch")}
          </Link>
        </div>
      </div>

      <div className="rodape__grade grade">
        <div className="rodape__col rodape__col--id">
          <p className="rodape__nome">{site.nome}</p>
          <p className="ui">
            {s.profissao} · CRP {site.crp}
            <br />
            {t("Psicologia Analítica", "Analytical Psychology")} · {s.atendimento}
            <br />
            {t(`Em português e em inglês · Base em ${site.cidade} – ${site.estado}, Brasil`, `In English and Portuguese · Based in ${site.cidade}, Brazil`)}
          </p>
          <div className="rodape__lado">
            <BotaoPassagem />
          </div>
        </div>
        <nav className="rodape__col" aria-label={t("Rodapé", "Footer")}>
          <p className="rotulo rodape__titulo">{t("Páginas", "Pages")}</p>
          <ul className="ui">
            <li>
              <Link href={rota(l, "/")}>{t("Início", "Home")}</Link>
            </li>
            {navegacao.map((n) => (
              <li key={n.href}>
                <Link href={rota(l, n.href)}>{l === "en" ? n.en.curto : n.curto}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="rodape__col">
          <p className="rotulo rodape__titulo">{t("Redes", "Social")}</p>
          <ul className="ui">
            {Object.values(site.redes).map((r) => (
              <li key={r.rotulo}>
                <a href={r.url} target="_blank" rel="noopener noreferrer">
                  {r.rotulo} <span className="rodape__suave">{r.usuario}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="rodape__col">
          <p className="rotulo rodape__titulo">{t("Créditos", "Credits")}</p>
          <p className="ui rodape__suave">
            {t(
              "Composto em Georgia e Gotham Condensed. Obras de acervos abertos (Met, Art Institute of Chicago, British Library, Wellcome Collection).",
              "Set in Georgia and Gotham Condensed. Artworks from open collections (Met, Art Institute of Chicago, British Library, Wellcome Collection).",
            )}
          </p>
          <p className="ui">
            <Link href={rota(l, "/creditos/")} className="link-linha">
              {t("Créditos e licenças das imagens", "Image credits and licences")}
            </Link>
          </p>
        </div>
      </div>

      <div className="rodape__nota grade ui">
        <p>
          {t(
            "Este site tem caráter informativo e não substitui atendimento de urgência. Em crise, procure o serviço de emergência do lugar onde você está; no Brasil, o CVV (188) ou o SAMU (192).",
            "This site is for information only and does not replace emergency care. In a crisis, contact the emergency services where you are; in Brazil, CVV (188) or SAMU (192).",
          )}
        </p>
        <p className="rodape__autoria">
          {t("Site concebido e desenvolvido por ", "Website designed and developed by ")}
          <a href="https://bragahouser.com.br/" target="_blank" rel="noopener" className="link-linha">
            Gabriel Braga
          </a>
        </p>
      </div>
    </footer>
  );
}
