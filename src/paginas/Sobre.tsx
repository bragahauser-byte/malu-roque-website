import type { Metadata } from "next";
import { Palavras } from "@/components/Palavras";
import { NomeDanca } from "@/components/NomeDanca";
import { Foto } from "@/components/Foto";
import { Arco } from "@/components/Arco";
import { Obra } from "@/components/Obra";
import { creditoObra } from "@/content/arte";
import { dados, site } from "@/content/site";
import { perfilEm } from "@/content/perfil";
import { tradutor, type Lingua } from "@/lib/lingua";

export const metadadosSobre = (l: Lingua): Metadata =>
  l === "en"
    ? {
        title: "About",
        description: `Maria Luiza Roque, psychologist (CRP ${site.crp}, Brazil) trained at PUC-SP, specialist in Hospital Psychology at HCFMUSP, Jungian orientation.`,
        openGraph: { locale: "en_US" },
      }
    : {
        title: "Sobre",
        description: `Maria Luiza Roque, psicóloga (CRP ${site.crp}) formada pela PUC-SP, especialista em Psicologia Hospitalar pelo HCFMUSP, de orientação junguiana.`,
      };

export function Sobre({ l }: { l: Lingua }) {
  const t = tradutor(l);
  const s = dados(l);
  const { complementar, cursos, eventos, experiencias, formacao, linhaDoTempo } = perfilEm(l);
  return (
    <>
      <section className="abertura grade">
        <p className="abertura__kicker rotulo">{t("Sobre · Quem escuta", "About · Who listens")}</p>
        <NomeDanca como="h1" className="abertura__titulo titulo revelar" />
        <div className="abertura__lado revelar">
          <Arco>
            <Foto chave="malu-sorriso" prioridade tamanhos="(max-width: 639px) 75vw, (max-width: 1023px) 45vw, 30vw" />
          </Arco>
        </div>
        <div className="abertura__lead">
          <p className="chapeu revelar">
            {s.profissao} · CRP {site.crp}
          </p>
          <p className="lead revelar">
            {t(
              "Psicóloga clínica formada pela PUC-SP, especialista em Psicologia Hospitalar pelo Hospital das Clínicas da FMUSP e estudiosa da Psicologia Analítica.",
              "Clinical psychologist trained at PUC-SP, specialist in Hospital Psychology at Hospital das Clínicas (University of São Paulo Medical School) and a student of Analytical Psychology.",
            )}
          </p>
          <p className="revelar">
            {t(
              "Atendo, online, crianças, adolescentes, adultos e idosos, no Brasil e em outros países, em português e em inglês. Pelo caminho, passei por hospital, escola, instituições e grupos, e cada lugar ensinou um jeito de escutar.",
              "I see children, adolescents, adults and older adults online, in Brazil and abroad, in English and Portuguese. Along the way I have worked in a hospital, a school, institutions and groups, and each place taught me a way of listening.",
            )}
          </p>
        </div>
      </section>

      <section className="secao" aria-labelledby="h-abordagem">
        <div className="secao-cabeca grade">
          <span className="secao-cabeca__num rotulo">01</span>
          <span className="secao-cabeca__nome chapeu">{t("A abordagem", "The approach")}</span>
          <Palavras id="h-abordagem" className="secao-cabeca__titulo" texto={t("O que aparece *e o que se insinua.*", "What shows *and what is hinted at.*")} />
        </div>
        <div className="dupla grade">
          <figure className="dupla__figura revelar">
            <Arco>
              <Obra chave="moreau-inspiration" />
            </Arco>
            <figcaption className="credito">{creditoObra("moreau-inspiration", l)}</figcaption>
          </figure>
          <div className="dupla__texto texto-corrido">
            <p className="revelar">
              {t(
                "A Psicologia Analítica, fundada por Carl Gustav Jung, é a base teórica do meu trabalho. Me interessa o modo como ela olha para os processos inconscientes, para os sonhos, os símbolos e os arquétipos, e para aquilo que Jung chamou de processo de individuação: o caminho, sempre singular, de tornar-se quem se é.",
                "Analytical Psychology, founded by Carl Gustav Jung, is the theoretical basis of my work. I am interested in the way it looks at unconscious processes, at dreams, symbols and archetypes, and at what Jung called the individuation process: the always singular path of becoming who one is.",
              )}
            </p>
            <p className="revelar">
              {t(
                "Mas a abordagem não é um figurino. Ela convive com o que gosto de ler, ouvir e assistir. Mitologia, contos de fadas, literatura, música e cinema entram na conversa como formas de compreender o que às vezes não cabe em palavras diretas.",
                "But the approach is not a costume. It lives alongside what I like to read, listen to and watch. Mythology, fairy tales, literature, music and film come into the conversation as ways of understanding what sometimes does not fit into direct words.",
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="secao" aria-labelledby="h-trajetoria">
        <div className="secao-cabeca grade">
          <span className="secao-cabeca__num rotulo">02</span>
          <span className="secao-cabeca__nome chapeu">{t("Trajetória", "Background")}</span>
          <Palavras id="h-trajetoria" className="secao-cabeca__titulo" texto={t("De 2019 *a 2026*", "From 2019 *to 2026*")} />
        </div>
        <div className="trajetoria grade">
          <figure className="trajetoria__foto revelar">
            <Arco>
              <Foto chave="hc-instituto" tamanhos="(max-width: 1023px) 45vw, 24vw" />
            </Arco>
            <figcaption className="credito">
              {t(
                "Instituto Central do Hospital das Clínicas da FMUSP, onde fez a especialização em Psicologia Hospitalar.",
                "Central Institute of Hospital das Clínicas (University of São Paulo Medical School), where she specialized in Hospital Psychology.",
              )}
            </figcaption>
          </figure>
          <ol className="linhas trajetoria__linhas">
            {linhaDoTempo.map((x) => (
              <li key={x.ano} className="revelar">
                <div className="linha linha--estatica grade">
                  <span className="linha__ano">{x.ano}</span>
                  <span className="linha__titulo">{x.texto}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="secao" aria-labelledby="h-ficha">
        <div className="secao-cabeca grade">
          <span className="secao-cabeca__num rotulo">03</span>
          <span className="secao-cabeca__nome chapeu">{t("Ficha completa", "Full record")}</span>
          <h2 id="h-ficha" className="secao-cabeca__titulo titulo">
            {t("Formação, experiências, ", "Education, experience, ")}
            <em>{t("cursos e eventos", "courses and events")}</em>
          </h2>
        </div>
        <div className="grade">
          <details className="ficha">
            <summary className="ficha__resumo">
              <span className="chapeu">{t("Abrir a ficha", "Open the record")}</span>
              <span className="ui suave">
                {experiencias.length} {t("experiências · formação · cursos · eventos", "positions · education · courses · events")}
              </span>
              <span className="ficha__mais" aria-hidden="true" />
            </summary>
            <div className="ficha__conteudo">
              <div className="ficha__coluna">
                <h3 className="rotulo">{t("Formação", "Education")}</h3>
                <ul>
                  {formacao.map((f) => (
                    <li key={f.titulo}>
                      <strong>{f.titulo}</strong>
                      <span>{f.instituicao}</span>
                      {"periodo" in f && f.periodo && <span className="ficha__periodo">{f.periodo}</span>}
                    </li>
                  ))}
                </ul>
                <h3 className="rotulo">{t("Formação complementar", "Further training")}</h3>
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
                <h3 className="rotulo">{t("Cursos e certificações", "Courses and certificates")}</h3>
                <ul>
                  {cursos.map((f) => (
                    <li key={f.titulo}>
                      <strong>{f.titulo}</strong>
                      <span>{f.instituicao}</span>
                      <span className="ficha__periodo">{f.periodo}</span>
                    </li>
                  ))}
                </ul>
                <h3 className="rotulo">{t("Eventos e participação acadêmica", "Events and academic participation")}</h3>
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
                <h3 className="rotulo">{t("Experiências", "Experience")}</h3>
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
