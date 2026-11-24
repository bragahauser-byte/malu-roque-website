import type { Metadata } from "next";
import { Palavras } from "@/components/Palavras";
import { arte, type ChaveArte } from "@/content/arte";

export const metadata: Metadata = {
  title: "Créditos das imagens",
  description: "Fontes, acervos e licenças das obras e fotografias usadas no site de Maria Luiza Roque.",
};

export default function Creditos() {
  const chaves = Object.keys(arte) as ChaveArte[];
  return (
    <>
      <section className="abertura grade">
        <p className="abertura__kicker rotulo">Créditos · Imagens e licenças</p>
        <Palavras como="h1" className="abertura__titulo" texto="De onde vêm|*as imagens*" />
        <div className="abertura__lead">
          <p className="lead">
            As fotografias são de Maria Luiza Roque, usadas sem retoques. As obras vêm de acervos institucionais abertos, em domínio público ou sob
            licença aberta.
          </p>
          <p className="ui suave">
            Leonora Carrington, Remedios Varo e as pinturas do Livro Vermelho de Jung são referências importantes deste projeto, mas suas obras seguem
            protegidas por direitos autorais e por isso não são reproduzidas aqui.
          </p>
        </div>
      </section>

      <section className="secao" aria-labelledby="h-obras">
        <div className="secao-cabeca grade">
          <span className="secao-cabeca__num rotulo">{chaves.length}</span>
          <span className="secao-cabeca__nome chapeu">Obras</span>
          <h2 id="h-obras" className="secao-cabeca__titulo titulo">
            Acervos <em>e licenças</em>
          </h2>
        </div>
        <ul className="linhas">
          {chaves.map((k) => {
            const o = arte[k];
            return (
              <li key={k}>
                <a className="linha creditos__linha grade" href={o.url} target="_blank" rel="noopener noreferrer">
                  <span className="creditos__licenca rotulo">{o.licenca}</span>
                  <span className="linha__titulo">
                    <em>{o.titulo}</em>, {o.artista} ({o.ano})
                  </span>
                  <span className="linha__info ui suave">{o.acervo}</span>
                  <span className="linha__seta" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="grade creditos__nota ui suave">
          <span>
            Rosarium philosophorum: Wellcome Collection, licença Creative Commons Attribution 4.0 (CC BY 4.0). As demais obras: CC0 ou domínio público,
            conforme indicado por cada acervo.
          </span>
        </p>
      </section>
    </>
  );
}
