import type { Metadata } from "next";
import { Palavras } from "@/components/Palavras";
import { arte, type ChaveArte } from "@/content/arte";
import { destinos } from "@/content/viagens";

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
            const o: { titulo: string; artista: string; ano: string; acervo: string; licenca: string; url?: string } = arte[k];
            const conteudo = (
              <>
                <span className="creditos__licenca rotulo">{o.licenca}</span>
                <span className="linha__titulo">
                  <em>{o.titulo}</em>, {o.artista} ({o.ano})
                </span>
                <span className="linha__info ui suave">{o.acervo}</span>
                <span className="linha__seta" aria-hidden="true">
                  {o.url ? "↗" : ""}
                </span>
              </>
            );
            return (
              <li key={k}>
                {o.url ? (
                  <a className="linha creditos__linha grade" href={o.url} target="_blank" rel="noopener noreferrer">
                    {conteudo}
                  </a>
                ) : (
                  <div className="linha linha--estatica creditos__linha grade">{conteudo}</div>
                )}
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
      <section className="secao" aria-labelledby="h-destinos">
        <div className="secao-cabeca grade">
          <span className="secao-cabeca__num rotulo">{destinos.length}</span>
          <span className="secao-cabeca__nome chapeu">Destinos</span>
          <h2 id="h-destinos" className="secao-cabeca__titulo titulo">
            Fotografias <em>dos países</em>
          </h2>
        </div>
        <ul className="linhas">
          {destinos.map((d) => (
            <li key={d.pais}>
              {"propria" in d.credito ? (
                <div className="linha linha--estatica creditos__linha grade">
                  <span className="creditos__licenca rotulo">Própria</span>
                  <span className="linha__titulo">{d.pais}: {d.legenda}</span>
                  <span className="linha__info ui suave">Foto de Maria Luiza Roque</span>
                </div>
              ) : (
                <a className="linha creditos__linha grade" href={d.credito.url} target="_blank" rel="noopener noreferrer">
                  <span className="creditos__licenca rotulo">{d.credito.licenca}</span>
                  <span className="linha__titulo">{d.pais}: {d.legenda}</span>
                  <span className="linha__info ui suave">{d.credito.autor}, Wikimedia Commons</span>
                  <span className="linha__seta" aria-hidden="true">↗</span>
                </a>
              )}
            </li>
          ))}
        </ul>
        <p className="grade creditos__nota ui suave">
          <span>
            As doze fotografias dos países são de Maria Luiza Roque, usadas sem retoques. As capas de discos da estante de CDs vêm dos arquivos
            enviados pela Malu; os direitos pertencem aos artistas e gravadoras.
          </span>
        </p>
      </section>
    </>
  );
}
