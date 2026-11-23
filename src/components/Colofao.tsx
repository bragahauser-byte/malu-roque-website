import Link from "next/link";
import { navegacao, site } from "@/content/site";
import { Estrela } from "./Estrela";
import { BotaoWhatsapp } from "./BotaoWhatsapp";

/** Rodapé tratado como o colofão de uma revista. */
export function Colofao() {
  return (
    <footer className="colofao" data-cursor-escuro>
      <div className="colofao__luz" aria-hidden="true" />
      <div className="colofao__topo envoltorio">
        <p className="colofao__convite">
          Se algo aqui <em>te atravessou</em>,<br /> escreva.
        </p>
        <div className="colofao__cta">
          <BotaoWhatsapp claro />
          <Link href="/contato/" className="ui link-linha">
            Outras formas de contato
          </Link>
        </div>
      </div>

      <div className="colofao__grade envoltorio">
        <nav aria-label="Rodapé">
          <p className="rotulo colofao__titulo">Sumário</p>
          <ul>
            {navegacao.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="ui">
                  <span className="colofao__num">{n.numero}</span> {n.titulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="rotulo colofao__titulo">Redes</p>
          <ul>
            {Object.values(site.redes).map((r) => (
              <li key={r.rotulo}>
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="ui">
                  {r.rotulo} <span className="colofao__suave">{r.usuario}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="rotulo colofao__titulo">Colofão</p>
          <p className="ui colofao__suave">
            Edição nº {site.edicao.numero}, {site.edicao.estacao.toLowerCase()} de {site.edicao.ano}. Composto em Georgia e Montserrat.
            Imagens: obras em domínio público do Art Institute of Chicago (CC0).
          </p>
        </div>
        <div>
          <p className="rotulo colofao__titulo">Responsável técnica</p>
          <p className="ui colofao__suave">
            {site.nomeConselho} · {site.profissao}
            <br />
            {site.crp ? `CRP ${site.crp}` : "CRP: a inserir"}
          </p>
        </div>
      </div>

      <div className="colofao__marca envoltorio" aria-hidden="true">
        <span>Malu</span>
        <Estrela className="colofao__estrela" />
        <span className="italico">Roque</span>
      </div>
      <p className="colofao__nota envoltorio ui">
        Este site não substitui atendimento de urgência. Em crise, ligue para o CVV (188) ou para o SAMU (192).
      </p>
    </footer>
  );
}
