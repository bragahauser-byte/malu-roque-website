import type { Metadata } from "next";
import { Palavras } from "@/components/Palavras";
import { FotoPendente } from "@/components/FotoPendente";
import { Janela } from "@/components/Janela";
import { Obra } from "@/components/Obra";
import { creditoObra } from "@/content/arte";
import { site } from "@/content/site";
import { complementar, cursos, eventos, experiencias, formacao, linhaDoTempo } from "@/content/perfil";

export const metadata: Metadata = {
  title: "Sobre",
  description: `Maria Luiza Roque, psicóloga (CRP ${site.crp}) formada pela PUC-SP, especialista em Psicologia Hospitalar pelo HCFMUSP, de orientação junguiana.`,
};

export default function Sobre() {
  return (
    <>
      <section className="abertura grade">
        <p className="abertura__kicker rotulo">Sobre · Quem escuta</p>
        <Palavras como="h1" className="abertura__titulo" texto="Maria Luiza|*Roque*" />
        <div className="abertura__lado revelar">
          <FotoPendente rotulo="Fotografia principal (a inserir)" />
        </div>
        <div className="abertura__lead">
          <p className="chapeu revelar">
            {site.profissao} · CRP {site.crp}
          </p>
          <p className="lead revelar">
            Psicóloga clínica formada pela PUC-SP, especialista em Psicologia Hospitalar pelo Hospital das Clínicas da FMUSP e estudiosa da
            Psicologia Analítica.
          </p>
          <p className="revelar">
            Atendo crianças, adolescentes, adultos e idosos. Pelo caminho, passei por hospital, escola, instituições e grupos, e cada lugar ensinou
            um jeito de escutar.
          </p>
        </div>
      </section>

      <section className="secao" aria-labelledby="h-abordagem">
        <div className="secao-cabeca grade">
          <span className="secao-cabeca__num rotulo">01</span>
          <span className="secao-cabeca__nome chapeu">A abordagem</span>
          <Palavras id="h-abordagem" className="secao-cabeca__titulo" texto="O que aparece *e o que se insinua.*" />
        </div>
        <div className="dupla grade">
          <figure className="dupla__figura revelar">
            <Janela simples>
              <Obra chave="moreau-inspiration" />
            </Janela>
            <figcaption className="credito">{creditoObra("moreau-inspiration")}</figcaption>
          </figure>
          <div className="dupla__texto texto-corrido">
            <p className="revelar">
              A Psicologia Analítica, fundada por Carl Gustav Jung, é a base teórica do meu trabalho. Me interessa o modo como ela olha para os
              processos inconscientes, para os sonhos, os símbolos e os arquétipos, e para aquilo que Jung chamou de processo de individuação: o
              caminho, sempre singular, de tornar-se quem se é.
            </p>
            <p className="revelar">
              Mas a abordagem não é um figurino. Ela convive com o que gosto de ler, ouvir e assistir. Mitologia, contos de fadas, literatura,
              música e cinema entram na conversa como formas de compreender o que às vezes não cabe em palavras diretas.
            </p>
          </div>
        </div>
      </section>

      <section className="secao" aria-labelledby="h-trajetoria">
        <div className="secao-cabeca grade">
          <span className="secao-cabeca__num rotulo">02</span>
          <span className="secao-cabeca__nome chapeu">Trajetória</span>
          <Palavras id="h-trajetoria" className="secao-cabeca__titulo" texto="De 2019 *a 2026*" />
        </div>
        <ol className="linhas">
          {linhaDoTempo.map((l) => (
            <li key={l.ano} className="revelar">
              <div className="linha linha--estatica grade">
                <span className="linha__ano">{l.ano}</span>
                <span className="linha__titulo">{l.texto}</span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="secao" aria-labelledby="h-ficha">
        <div className="secao-cabeca grade">
          <span className="secao-cabeca__num rotulo">03</span>
          <span className="secao-cabeca__nome chapeu">Ficha completa</span>
          <h2 id="h-ficha" className="secao-cabeca__titulo titulo">
            Formação, experiências, <em>cursos e eventos</em>
          </h2>
        </div>
        <div className="grade">
          <details className="ficha">
            <summary className="ficha__resumo">
              <span className="chapeu">Abrir a ficha</span>
              <span className="ui suave">{experiencias.length} experiências · formação · cursos · eventos</span>
              <span className="ficha__mais" aria-hidden="true" />
            </summary>
            <div className="ficha__conteudo">
              <div className="ficha__coluna">
                <h3 className="rotulo">Formação</h3>
                <ul>
                  {formacao.map((f) => (
                    <li key={f.titulo}>
                      <strong>{f.titulo}</strong>
                      <span>{f.instituicao}</span>
                      {"periodo" in f && f.periodo && <span className="ficha__periodo">{f.periodo}</span>}
                    </li>
                  ))}
                </ul>
                <h3 className="rotulo">Formação complementar</h3>
                <ul>
                  {complementar.map((f) => (
                    <li key={f.titulo}>
                      <strong>{f.titulo}</strong>
                      <span>{f.instituicao}</span>
                      {f.nota && <span>{f.nota}</span>}
                      <span className="ficha__periodo">{f.periodo}</span>
                    </li>
                  ))}
                </ul>
                <h3 className="rotulo">Cursos e certificações</h3>
                <ul>
                  {cursos.map((f) => (
                    <li key={f.titulo}>
                      <strong>{f.titulo}</strong>
                      <span>{f.instituicao}</span>
                      <span className="ficha__periodo">{f.periodo}</span>
                    </li>
                  ))}
                </ul>
                <h3 className="rotulo">Eventos e participação acadêmica</h3>
                <ul>
                  {eventos.map((f) => (
                    <li key={f.titulo}>
                      <strong>{f.titulo}</strong>
                      <span>{f.instituicao}</span>
                      <span className="ficha__periodo">{f.periodo}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ficha__coluna ficha__coluna--larga">
                <h3 className="rotulo">Experiências</h3>
                <ul>
                  {experiencias.map((e) => (
                    <li key={e.cargo + e.periodo + e.lugar}>
                      <span className="ficha__periodo">
                        {e.periodo}
                        {e.modalidade ? ` · ${e.modalidade}` : ""}
                      </span>
                      <strong>
                        {e.cargo} — {e.lugar}
                      </strong>
                      <span>{e.descricao}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </details>
        </div>
      </section>
    </>
  );
}
