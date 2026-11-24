import type { Metadata } from "next";
import { Palavras } from "@/components/Palavras";
import { Obra } from "@/components/Obra";
import { Foto } from "@/components/Foto";
import { Arco } from "@/components/Arco";
import { creditoObra } from "@/content/arte";
import { perfilEm } from "@/content/perfil";
import { tradutor, type Lingua } from "@/lib/lingua";

export const metadadosPesquisas = (l: Lingua): Metadata =>
  l === "en"
    ? {
        title: "Research",
        description:
          "Academic work by Maria Luiza Roque: undergraduate thesis on Hindu goddesses and feminine archetypes (PUC-SP, 2024) and a case study on symbolic manifestations after a kidney transplant (HCFMUSP, 2026).",
        openGraph: { locale: "en_US" },
      }
    : {
        title: "Pesquisa",
        description:
          "Produção acadêmica de Maria Luiza Roque: TCC sobre deusas hindus e arquétipos femininos (PUC-SP, 2024) e estudo de caso sobre manifestações simbólicas no pós-operatório de transplante renal (HCFMUSP, 2026).",
      };

export function Pesquisas({ l }: { l: Lingua }) {
  const t = tradutor(l);
  const { eventos, pesquisas } = perfilEm(l);
  const moitara = t(
    { titulo: "Moitará 2026, Sociedade Brasileira de Psicologia Analítica (SBPA)", instituicao: "Encontro multidisciplinar", periodo: "2026" },
    { titulo: "Moitará 2026, Brazilian Society of Analytical Psychology (SBPA)", instituicao: "Multidisciplinary gathering", periodo: "2026" },
  );
  return (
    <>
      <section className="abertura grade">
        <p className="abertura__kicker rotulo">{t("Pesquisa · Produção acadêmica", "Research · Academic work")}</p>
        <Palavras como="h1" className="abertura__titulo abertura__titulo--largo" texto={t("Onde o mito|*encontra a clínica*", "Where myth|*meets the clinic*")} />
        <div className="abertura__lead">
          <p className="lead revelar">
            {t(
              "Dois trabalhos, dois territórios: a mitologia hindu e o hospital. Em comum, a pergunta sobre como as imagens simbólicas ajudam a atravessar experiências de transformação.",
              "Two pieces of work, two territories: Hindu mythology and the hospital. What they share is the question of how symbolic images help us through experiences of transformation.",
            )}
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
            <div className="pesquisa__imagens">
              <figure className="pesquisa__foto revelar">
                <Arco>
                  <Foto chave={p.foto} tamanhos="(max-width: 639px) 75vw, (max-width: 1023px) 45vw, 30vw" />
                </Arco>
              </figure>
              <figure className="pesquisa__obra revelar" style={{ "--atraso": "0.12s" } as React.CSSProperties}>
                <Obra chave={p.imagem} tamanhos="(max-width: 639px) 50vw, 16vw" />
                <figcaption className="credito">{creditoObra(p.imagem, l)}</figcaption>
              </figure>
            </div>
            <div className="pesquisa__texto">
              <h2 id={`pesquisa-${i}`} className="pesquisa__titulo revelar">
                {p.titulo}
              </h2>
              <dl className="pesquisa__dados revelar">
                <div>
                  <dt className="rotulo">{t("Autoria", "Authors")}</dt>
                  <dd>{p.autoria}</dd>
                </div>
                <div>
                  <dt className="rotulo">{t("Instituição", "Institution")}</dt>
                  <dd>{p.instituicao}</dd>
                </div>
                <div>
                  <dt className="rotulo">{p.detalheRotulo}</dt>
                  <dd>{p.detalhe}</dd>
                </div>
              </dl>
              <p className="revelar">{p.descricao}</p>
              <ul className="etiquetas-linha revelar" aria-label={t("Palavras-chave", "Keywords")}>
                {p.palavras.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
              {p.link ? (
                <a className="botao botao--cheio revelar" href={p.link.url} target="_blank" rel="noopener noreferrer">
                  {p.link.rotulo} <span className="seta" aria-hidden="true">↗</span>
                </a>
              ) : (
                <p className="ui suave revelar">{t("O texto completo não está disponível online.", "The full text is not available online.")}</p>
              )}
            </div>
          </div>
        </section>
      ))}

      <section className="secao" aria-labelledby="h-eventos">
        <div className="secao-cabeca grade">
          <span className="secao-cabeca__num rotulo">03</span>
          <span className="secao-cabeca__nome chapeu">{t("Participação acadêmica", "Academic participation")}</span>
          <h2 id="h-eventos" className="secao-cabeca__titulo titulo">
            {t("Encontros, ", "Meetings, ")}
            <em>{t("jornadas e congressos", "seminars and conferences")}</em>
          </h2>
        </div>
        <ul className="linhas">
          {[...eventos, moitara].map((e) => (
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
