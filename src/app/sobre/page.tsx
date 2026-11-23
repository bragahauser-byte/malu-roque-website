import type { Metadata } from "next";
import { Palavras } from "@/components/Palavras";
import { FotoPendente } from "@/components/FotoPendente";
import { Etiquetas } from "@/components/Etiquetas";
import { Obra } from "@/components/Obra";
import { Gabinete } from "@/components/Gabinete";
import { complementar, cursos, eventos, experiencias, formacao, linhaDoTempo } from "@/content/perfil";

export const metadata: Metadata = {
  title: "Quem escuta",
  description: "Maria Luiza Roque: psicóloga formada pela PUC-SP, especialista em Psicologia Hospitalar pelo HCFMUSP, de orientação junguiana.",
};

export default function Sobre() {
  return (
    <>
      <section className="abertura envoltorio grade">
        <p className="abertura__num rotulo">01 · Quem escuta</p>
        <Palavras como="h1" className="abertura__titulo" texto="Maria Luiza|*Roque*" />
        <div className="sobre-retrato revelar">
          <FotoPendente rotulo="Fotografia principal (a inserir)" />
          <Etiquetas className="sobre-retrato__etiquetas" itens={["também", "Malu Roque"]} cores={["var(--ambar)", "var(--lavanda)"]} />
        </div>
        <div className="abertura__lead revelar" style={{ "--atraso": "0.15s" } as React.CSSProperties}>
          <p className="lead">
            Psicóloga clínica formada pela PUC-SP, especialista em Psicologia Hospitalar pelo Hospital das Clínicas da FMUSP e estudiosa da
            Psicologia Analítica.
          </p>
          <p>
            Atendo crianças, adolescentes, adultos e idosos. Pelo caminho, passei por hospital, escola, instituições e grupos, e cada lugar
            ensinou um jeito de escutar. Fora do consultório, sou alguém que gosta de livros espalhados, lojas de discos, flores e fotografias de viagem, e de
            uma internet que mistura profundidade e leveza.
          </p>
        </div>
      </section>

      {/* Relação com a Psicologia Analítica */}
      <section className="jung envoltorio grade">
        <div className="jung__img cortina">
          <Obra chave="moreau-inspiration" legenda />
        </div>
        <div className="jung__texto">
          <p className="rotulo">A abordagem</p>
          <Palavras como="h2" texto="O que aparece *e o que se insinua.*" />
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
      </section>

      {/* Linha do tempo */}
      <section className="trajetoria envoltorio" aria-labelledby="trajetoria-titulo">
        <div className="trajetoria__cabeca">
          <Palavras como="h2" texto="Trajetória, *em seis anos*" />
          <p className="ui">2019 — 2026</p>
        </div>
        <ol className="trajetoria__lista">
          {linhaDoTempo.map((l, i) => (
            <li key={l.ano} className="trajetoria__item revelar" style={{ "--atraso": `${i * 0.05}s` } as React.CSSProperties}>
              <span className="trajetoria__ano">{l.ano}</span>
              <p>{l.texto}</p>
            </li>
          ))}
        </ol>

        <details className="ficha">
          <summary className="ficha__resumo" data-cursor="abrir">
            <span>Ficha completa</span>
            <span className="ui">Formação, experiências, cursos e eventos</span>
            <span className="ficha__mais" aria-hidden="true" />
          </summary>
          <div className="ficha__conteudo grade">
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
      </section>

      {/* Gabinete de curiosidades */}
      <section className="gabinete-secao" aria-labelledby="gabinete-titulo">
        <div className="envoltorio gabinete-secao__cabeca">
          <p className="rotulo">Gabinete de curiosidades</p>
          <Palavras como="h2" texto="Coisas que *moram* comigo" />
          <p className="ui gabinete-secao__dica">Arraste os cartões. Eles não se importam.</p>
        </div>
        <Gabinete />
      </section>
    </>
  );
}
