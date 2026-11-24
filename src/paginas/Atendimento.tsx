import type { Metadata } from "next";
import Link from "next/link";
import { Palavras } from "@/components/Palavras";
import { Temas } from "@/components/Temas";
import { Obra } from "@/components/Obra";
import { BotaoWhatsapp } from "@/components/BotaoWhatsapp";
import { Arco } from "@/components/Arco";
import { creditoObra } from "@/content/arte";
import { perfilEm } from "@/content/perfil";
import { dados } from "@/content/site";
import { rota, tradutor, type Lingua } from "@/lib/lingua";

export const metadadosAtendimento = (l: Lingua): Metadata =>
  l === "en"
    ? {
        title: "Therapy",
        description:
          "Individual online psychotherapy with Maria Luiza Roque (CRP 06/214718, Brazil), in English and Portuguese, for children, adolescents, adults and older adults anywhere in the world. Approach: Analytical (Jungian) Psychology.",
        openGraph: { locale: "en_US" },
      }
    : {
        title: "Atendimento",
        description:
          "Psicoterapia individual online com Maria Luiza Roque (CRP 06/214718), em português e em inglês, para crianças, adolescentes, adultos e idosos no Brasil e em outros países. Abordagem: Psicologia Analítica (junguiana).",
      };

const NOTAS = {
  pt: [
    {
      titulo: "O inconsciente",
      texto:
        "Nem tudo o que sentimos e fazemos passa pela consciência. A Psicologia Analítica parte da ideia de que existe uma dimensão da psique que se manifesta de maneira indireta: em repetições, sintomas, afetos inesperados.",
    },
    {
      titulo: "Sonhos e símbolos",
      texto:
        "Imagens de sonhos, histórias que nos marcam e figuras que se repetem são tratadas como linguagem. Não há dicionário de significados: o sentido é construído junto, a partir da história de cada pessoa.",
    },
    {
      titulo: "Individuação",
      texto: "Jung chamou de individuação o processo de tornar-se quem se é, integrando aspectos de si que ficaram de lado. É um caminho singular, sem fórmula nem prazo.",
    },
    {
      titulo: "Recursos expressivos",
      texto:
        "Mitos, contos, literatura, música, cinema e arte podem entrar na sessão como pontes para aquilo que é difícil de dizer de forma direta. Sempre como convite, nunca como obrigação.",
    },
  ],
  en: [
    {
      titulo: "The unconscious",
      texto:
        "Not everything we feel and do passes through consciousness. Analytical Psychology starts from the idea that there is a dimension of the psyche that shows itself indirectly: in repetitions, symptoms, unexpected feelings.",
    },
    {
      titulo: "Dreams and symbols",
      texto:
        "Dream images, stories that mark us and figures that keep returning are treated as a language. There is no dictionary of meanings: the meaning is built together, from each person’s own story.",
    },
    {
      titulo: "Individuation",
      texto: "Jung called individuation the process of becoming who one is, integrating aspects of oneself that were left aside. It is a singular path, with no formula and no deadline.",
    },
    {
      titulo: "Expressive resources",
      texto:
        "Myths, tales, literature, music, film and art can come into the session as bridges to what is hard to say directly. Always as an invitation, never as an obligation.",
    },
  ],
};

const PASSOS = {
  pt: [
    { n: "01", titulo: "Uma mensagem", texto: "Você escreve pelo WhatsApp ou pelas redes contando, do jeito que conseguir, o que te trouxe até aqui." },
    { n: "02", titulo: "Uma conversa inicial", texto: "Combinamos horários, idioma e as condições do atendimento, que acontece sempre online. Dúvidas são bem-vindas." },
    { n: "03", titulo: "O processo", texto: "Os encontros acontecem com regularidade. O ritmo e a duração da terapia são construídos ao longo do caminho." },
  ],
  en: [
    { n: "01", titulo: "A message", texto: "You write on WhatsApp or social media telling me, in whatever way you can, what brought you here." },
    { n: "02", titulo: "A first conversation", texto: "We agree on times, language and the terms of the sessions, which always take place online. Questions are welcome." },
    { n: "03", titulo: "The process", texto: "Sessions take place regularly. The pace and length of therapy are built along the way." },
  ],
};

export function Atendimento({ l }: { l: Lingua }) {
  const t = tradutor(l);
  const site = dados(l);
  const { publico, recursos } = perfilEm(l);
  return (
    <>
      <section className="abertura grade">
        <p className="abertura__kicker rotulo">{t("Atendimento · Psicoterapia online", "Therapy · Online psychotherapy")}</p>
        <Palavras como="h1" className="abertura__titulo abertura__titulo--largo" texto={t("Psicoterapia,|*um lugar para escutar.*", "Psychotherapy,|*a place to listen.*")} />
        <div className="abertura__lead">
          <p className="lead revelar">
            {t(
              "A terapia é um espaço de escuta, com tempo e sigilo, para olhar com cuidado para aquilo que pesa, confunde ou pede mudança.",
              "Therapy is a space for listening, with time and confidentiality, to look carefully at what weighs on you, confuses you or asks for change.",
            )}
          </p>
          <p className="ui suave revelar">
            {site.nome} · {site.profissao} · CRP {site.crp}
          </p>
        </div>
      </section>

      <section className="secao secao--curta" aria-label={t("Informações do atendimento", "About the sessions")}>
        <dl className="fatos grade">
          <div className="fatos__item revelar">
            <dt className="rotulo">{t("Modalidade", "Format")}</dt>
            <dd>{t("Psicoterapia individual", "Individual psychotherapy")}</dd>
          </div>
          <div className="fatos__item revelar" style={{ "--atraso": "0.05s" } as React.CSSProperties}>
            <dt className="rotulo">{t("Formato", "Where")}</dt>
            <dd>{t("Exclusivamente online, em português ou inglês, para pessoas no Brasil e em outros países", "Online only, in English or Portuguese, for people in Brazil and in other countries")}</dd>
          </div>
          <div className="fatos__item revelar" style={{ "--atraso": "0.1s" } as React.CSSProperties}>
            <dt className="rotulo">{t("Para quem", "For whom")}</dt>
            <dd>{publico.map((p, i) => (i === 0 ? p : p.toLowerCase())).join(", ")}</dd>
          </div>
          <div className="fatos__item revelar" style={{ "--atraso": "0.15s" } as React.CSSProperties}>
            <dt className="rotulo">{t("Abordagem", "Approach")}</dt>
            <dd>{t("Psicologia Analítica, também chamada de abordagem junguiana", "Analytical Psychology, also known as the Jungian approach")}</dd>
          </div>
        </dl>
      </section>

      <section className="secao" aria-labelledby="h-temas">
        <div className="secao-cabeca grade">
          <span className="secao-cabeca__num rotulo">01</span>
          <span className="secao-cabeca__nome chapeu">{t("Temas de atuação", "Areas of work")}</span>
          <Palavras id="h-temas" className="secao-cabeca__titulo" texto={t("O que costuma *chegar* à terapia", "What often *brings people* to therapy")} />
        </div>
        <Temas />
      </section>

      <section className="secao campo" aria-labelledby="h-abordagem">
        <div className="secao-cabeca grade">
          <span className="secao-cabeca__num rotulo">02</span>
          <span className="secao-cabeca__nome chapeu">{t("A abordagem", "The approach")}</span>
          <Palavras id="h-abordagem" className="secao-cabeca__titulo" texto={t("Psicologia *Analítica*", "Analytical *Psychology*")} />
        </div>
        <div className="dupla grade">
          <figure className="dupla__figura revelar">
            <Arco>
              <Obra chave="redon-buque-pastel" />
            </Arco>
            <figcaption className="credito">{creditoObra("redon-buque-pastel", l)}</figcaption>
          </figure>
          <div className="dupla__texto">
            <p className="lead revelar">
              {t(
                "Desenvolvida por Carl Gustav Jung, a Psicologia Analítica compreende a psique como algo vivo, que se expressa também por imagens. Na prática clínica, isso significa escutar a história de cada pessoa considerando o que é dito e o que aparece de outros modos.",
                "Developed by Carl Gustav Jung, Analytical Psychology understands the psyche as something alive, which also expresses itself through images. In clinical practice, this means listening to each person’s story, taking into account what is said and what appears in other ways.",
              )}
            </p>
            <ol className="notas">
              {NOTAS[l].map((n, i) => (
                <li key={n.titulo} className="revelar">
                  <span className="rotulo">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="chapeu">{n.titulo}</h3>
                  <p>{n.texto}</p>
                </li>
              ))}
            </ol>
            <div className="recursos revelar">
              <p className="rotulo">{t("Recursos e referências de trabalho", "Resources and references")}</p>
              <ul className="etiquetas-linha">
                {recursos.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="secao" aria-labelledby="h-passos">
        <div className="secao-cabeca grade">
          <span className="secao-cabeca__num rotulo">03</span>
          <span className="secao-cabeca__nome chapeu">{t("Como começar", "How to begin")}</span>
          <Palavras id="h-passos" className="secao-cabeca__titulo" texto={t("Três passos, *sem pressa*", "Three steps, *no rush*")} />
        </div>
        <ol className="passos grade">
          {PASSOS[l].map((p, i) => (
            <li key={p.n} className="passos__item revelar" style={{ "--atraso": `${i * 0.06}s` } as React.CSSProperties}>
              <span className="passos__n">{p.n}</span>
              <h3 className="chapeu">{p.titulo}</h3>
              <p>{p.texto}</p>
            </li>
          ))}
        </ol>
        <div className="passos__fim grade">
          <div className="passos__cta revelar">
            <BotaoWhatsapp cheio texto={t("Entrar em contato", "Get in touch")} />
            <Link href={rota(l, "/contato/")} className="ui link-linha">
              {t("Outras formas de contato", "Other ways to get in touch")}
            </Link>
          </div>
          <p className="passos__aviso ui suave revelar">
            {t(
              "A psicoterapia é um processo, e cada percurso é único: não há promessa de cura nem de resultados em prazo determinado. Este site tem caráter informativo e não substitui atendimento de urgência. Em situação de crise, procure o serviço de emergência do lugar onde você está; no Brasil, o CVV (188, 24 horas) ou o SAMU (192).",
              "Psychotherapy is a process, and every path is unique: there is no promise of a cure or of results within a set time. This site is for information only and does not replace emergency care. In a crisis, contact the emergency services where you are; in Brazil, CVV (188, 24 hours) or SAMU (192).",
            )}{" "}
            {site.nome} · CRP {site.crp}.
          </p>
        </div>
      </section>
    </>
  );
}
