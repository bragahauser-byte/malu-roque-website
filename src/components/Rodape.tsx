import Link from "next/link";
import { navegacao, site } from "@/content/site";
import { BotaoWhatsapp } from "./BotaoWhatsapp";
import { JanelaIcone } from "./Janela";

/** Rodapé: um campo de cor sólida, a grade de sempre, o registro profissional. */
export function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape__topo grade">
        <p className="rodape__convite">
          Para agendar ou tirar dúvidas, <em>escreva.</em>
        </p>
        <div className="rodape__cta">
          <BotaoWhatsapp claro />
          <Link href="/contato/" className="ui link-linha">
            Outras formas de contato
          </Link>
        </div>
      </div>

      <div className="rodape__grade grade">
        <div className="rodape__col rodape__col--id">
          <JanelaIcone className="rodape__janela" />
          <p className="rodape__nome">{site.nome}</p>
          <p className="ui">
            {site.profissao} · CRP {site.crp}
            <br />
            Psicologia Analítica · {site.cidade}, presencial e online
          </p>
        </div>
        <nav className="rodape__col" aria-label="Rodapé">
          <p className="rotulo rodape__titulo">Páginas</p>
          <ul className="ui">
            <li>
              <Link href="/">Início</Link>
            </li>
            {navegacao.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.curto}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="rodape__col">
          <p className="rotulo rodape__titulo">Redes</p>
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
          <p className="rotulo rodape__titulo">Créditos</p>
          <p className="ui rodape__suave">
            Composto em Georgia e Gotham Condensed. Imagens: obras em domínio público do Art Institute of Chicago (CC0).
          </p>
        </div>
      </div>

      <p className="rodape__nota grade ui">
        <span>Este site tem caráter informativo e não substitui atendimento de urgência. Em crise, ligue para o CVV (188) ou para o SAMU (192).</span>
      </p>
    </footer>
  );
}
