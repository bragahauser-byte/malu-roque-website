import type { Metadata } from "next";
import { Palavras } from "@/components/Palavras";
import { Obra } from "@/components/Obra";
import { Janela } from "@/components/Janela";
import { creditoObra } from "@/content/arte";
import { eventos, pesquisas } from "@/content/perfil";

export const metadata: Metadata = {
  title: "Pesquisa",
  description:
    "Produção acadêmica de Maria Luiza Roque: TCC sobre deusas hindus e arquétipos femininos (PUC-SP, 2024) e artigo sobre manifestações simbólicas no pós-operatório de transplante renal (HCFMUSP, 2026).",
};

export default function Pesquisas() {
  return (
    <>
      <section className="abertura grade">
        <p className="abertura__kicker rotulo">Pesquisa · Produção acadêmica</p>
        <Palavras como="h1" className="abertura__titulo abertura__titulo--largo" texto="Onde o mito|*encontra a clínica*" />
        <div className="abertura__lead">
          <p className="lead revelar">
            Dois trabalhos, dois territórios: a mitologia hindu e o hospital. Em comum, a pergunta sobre como as imagens simbólicas ajudam a
            atravessar experiências de transformação.
          </p>
        </div>
      </section>

      {pesquisas.map((p, i) => (
        <section key={p.titulo} className="secao" aria-labelledby={`pesquisa-${i}`}>
          <div className="secao-cabeca grade">
            <span className="secao-cabeca__num rotulo">{String(i + 1).padStart(2, "0")}</span>
            <span className="secao-cabeca__nome chapeu">{p.ano}</span>
            <span className="secao-cabeca__titulo rotulo suave">{p.tipo}</span>
          </div>
          <div className={`pesquisa grade ${i % 2 ? "pesquisa--inversa" : ""}`}>
            <figure className="pesquisa__figura revelar">
              <Janela simples>
                <Obra chave={p.imagem} />
              </Janela>
              <figcaption className="credito">{creditoObra(p.imagem)}</figcaption>
            </figure>
            <div className="pesquisa__texto">
              <h2 id={`pesquisa-${i}`} className="pesquisa__titulo revelar">
                {p.titulo}
              </h2>
              <dl className="pesquisa__dados revelar">
                <div>
                  <dt className="rotulo">Instituição</dt>
                  <dd>{p.instituicao}</dd>
                </div>
                <div>
                  <dt className="rotulo">{i === 0 ? "Orientação" : "Apresentação"}</dt>
                  <dd>{p.detalhe}</dd>
                </div>
              </dl>
              <p className="revelar">{p.descricao}</p>
              <ul className="etiquetas-linha revelar" aria-label="Palavras-chave">
                {p.palavras.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
              <p className="ui suave revelar">PDF disponível em breve.</p>
            </div>
          </div>
        </section>
      ))}

      <section className="secao" aria-labelledby="h-eventos">
        <div className="secao-cabeca grade">
          <span className="secao-cabeca__num rotulo">03</span>
          <span className="secao-cabeca__nome chapeu">Participação acadêmica</span>
          <h2 id="h-eventos" className="secao-cabeca__titulo titulo">
            Encontros, <em>jornadas e congressos</em>
          </h2>
        </div>
        <ul className="linhas">
          {[
            ...eventos,
            { titulo: "Moitará 2026, Sociedade Brasileira de Psicologia Analítica (SBPA)", instituicao: "Encontro multidisciplinar", periodo: "2026" },
          ].map((e) => (
            <li key={e.titulo} className="revelar">
              <div className="linha linha--estatica grade">
                <span className="linha__ano">{e.periodo}</span>
                <span className="linha__titulo">{e.titulo}</span>
                <span className="linha__info ui suave">{e.instituicao}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
