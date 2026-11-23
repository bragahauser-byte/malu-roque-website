import type { Metadata } from "next";
import { Palavras } from "@/components/Palavras";
import { Obra } from "@/components/Obra";
import { eventos, pesquisas } from "@/content/perfil";

export const metadata: Metadata = {
  title: "Pesquisa",
  description:
    "Produção acadêmica de Maria Luiza Roque: TCC sobre deusas hindus e arquétipos femininos (PUC-SP, 2024) e artigo sobre manifestações simbólicas no pós-operatório de transplante renal (HCFMUSP, 2026).",
};

export default function Pesquisas() {
  return (
    <>
      <section className="abertura envoltorio grade">
        <p className="abertura__num rotulo">04 · Pesquisa</p>
        <Palavras como="h1" className="abertura__titulo abertura__titulo--largo" texto="Onde o mito|*encontra a clínica*" />
        <div className="abertura__lead revelar">
          <p className="lead">
            Dois trabalhos, dois territórios: a mitologia hindu e o hospital. Em comum, a pergunta sobre como as imagens simbólicas ajudam a
            atravessar experiências de transformação.
          </p>
        </div>
      </section>

      {pesquisas.map((p, i) => (
        <section key={p.titulo} className={`pesquisa envoltorio grade ${i % 2 ? "pesquisa--inversa" : ""}`} aria-labelledby={`pesquisa-${i}`}>
          <div className="pesquisa__imagens">
            <div className="pesquisa__img pesquisa__img--1 cortina">
              <Obra chave={p.imagem} />
            </div>
            <div className="pesquisa__img pesquisa__img--2 cortina" style={{ "--atraso": "0.25s" } as React.CSSProperties}>
              <Obra chave={p.imagem2} pequena />
            </div>
            <span className="pesquisa__ano" aria-hidden="true">
              {p.ano}
            </span>
          </div>
          <div className="pesquisa__texto">
            <p className="rotulo">{p.tipo}</p>
            <h2 id={`pesquisa-${i}`} className="pesquisa__titulo revelar">
              {p.titulo}
            </h2>
            <dl className="pesquisa__dados ui revelar">
              <div>
                <dt className="rotulo">Instituição</dt>
                <dd>{p.instituicao}</dd>
              </div>
              <div>
                <dt className="rotulo">Ano</dt>
                <dd>{p.ano}</dd>
              </div>
              <div>
                <dt className="rotulo">{i === 0 ? "Orientação" : "Apresentação"}</dt>
                <dd>{p.detalhe}</dd>
              </div>
            </dl>
            <p className="pesquisa__descricao revelar">{p.descricao}</p>
            <ul className="pesquisa__palavras ui revelar" aria-label="Palavras-chave">
              {p.palavras.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
            <p className="pesquisa__pdf ui revelar">PDF disponível em breve</p>
          </div>
        </section>
      ))}

      <section className="envoltorio eventos-academicos" aria-labelledby="eventos-titulo">
        <p className="rotulo" id="eventos-titulo">
          Participação acadêmica
        </p>
        <ul>
          {[
            ...eventos,
            { titulo: "Moitará 2026, Sociedade Brasileira de Psicologia Analítica (SBPA)", instituicao: "Encontro multidisciplinar", periodo: "2026" },
          ].map((e) => (
            <li key={e.titulo} className="revelar">
              <span className="ui eventos-academicos__data">{e.periodo}</span>
              <span className="eventos-academicos__titulo">{e.titulo}</span>
              <span className="ui eventos-academicos__lugar">{e.instituicao}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
