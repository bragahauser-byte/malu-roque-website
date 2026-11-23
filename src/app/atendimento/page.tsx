import type { Metadata } from "next";
import Link from "next/link";
import { Palavras } from "@/components/Palavras";
import { Temas } from "@/components/Temas";
import { Obra } from "@/components/Obra";
import { BotaoWhatsapp } from "@/components/BotaoWhatsapp";
import { Estrela } from "@/components/Estrela";
import { publico, recursos } from "@/content/perfil";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "O consultório",
  description:
    "Psicoterapia individual com Maria Luiza Roque, presencial e online, para crianças, adolescentes, adultos e idosos. Abordagem: Psicologia Analítica (junguiana).",
};

const NOTAS = [
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
    texto:
      "Jung chamou de individuação o processo de tornar-se quem se é, integrando aspectos de si que ficaram de lado. É um caminho singular, sem fórmula nem prazo.",
  },
  {
    titulo: "Recursos expressivos",
    texto:
      "Mitos, contos, literatura, música, cinema e arte podem entrar na sessão como pontes para aquilo que é difícil de dizer de forma direta. Sempre como convite, nunca como obrigação.",
  },
];

const PASSOS = [
  { n: "01", titulo: "Uma mensagem", texto: "Você escreve pelo WhatsApp ou pelas redes contando, do jeito que conseguir, o que te trouxe até aqui." },
  { n: "02", titulo: "Uma conversa inicial", texto: "Combinamos horários, modalidade (presencial ou online) e as condições do atendimento. Dúvidas são bem-vindas." },
  { n: "03", titulo: "O processo", texto: "Os encontros acontecem com regularidade. O ritmo e a duração da terapia são construídos ao longo do caminho." },
];

export default function Atendimento() {
  return (
    <>
      <section className="abertura envoltorio grade">
        <p className="abertura__num rotulo">02 · O consultório</p>
        <Palavras como="h1" className="abertura__titulo abertura__titulo--largo" texto="Psicoterapia,|*um lugar para escutar.*" />
        <div className="abertura__lead revelar">
          <p className="lead">
            A terapia é um espaço de escuta, com tempo e sigilo, para olhar com cuidado para aquilo que pesa, confunde ou pede mudança.
          </p>
        </div>
      </section>

      <section className="ficha-atendimento envoltorio" aria-label="Informações do atendimento">
        <dl className="ficha-atendimento__grade">
          <div className="revelar">
            <dt className="rotulo">Modalidade</dt>
            <dd>Psicoterapia individual</dd>
          </div>
          <div className="revelar" style={{ "--atraso": "0.06s" } as React.CSSProperties}>
            <dt className="rotulo">Formato</dt>
            <dd>Presencial e online, conforme disponibilidade</dd>
          </div>
          <div className="revelar" style={{ "--atraso": "0.12s" } as React.CSSProperties}>
            <dt className="rotulo">Para quem</dt>
            <dd>
              {publico.map((p, i) => (i === 0 ? p : p.toLowerCase())).join(", ")}
            </dd>
          </div>
          <div className="revelar" style={{ "--atraso": "0.18s" } as React.CSSProperties}>
            <dt className="rotulo">Abordagem</dt>
            <dd>Psicologia Analítica, também chamada de abordagem junguiana</dd>
          </div>
        </dl>
      </section>

      <section className="secao-temas envoltorio" aria-labelledby="temas-titulo">
        <div className="secao-cabeca">
          <p className="rotulo" id="temas-titulo">
            Temas de atuação
          </p>
          <Palavras como="h2" texto="O que costuma *chegar* ao consultório" />
        </div>
        <Temas />
      </section>

      <section className="noite abordagem" data-cursor-escuro aria-labelledby="abordagem-titulo">
        <i className="noite__luz noite__luz--1" aria-hidden="true" />
        <i className="noite__luz noite__luz--2" aria-hidden="true" />
        <div className="envoltorio grade abordagem__grade">
          <div className="abordagem__cabeca">
            <p className="rotulo" id="abordagem-titulo">
              A abordagem, em poucas palavras
            </p>
            <Palavras como="h2" texto="Psicologia *Analítica*" />
            <p className="revelar">
              Desenvolvida por Carl Gustav Jung, a Psicologia Analítica compreende a psique como algo vivo, que se expressa também por imagens.
              Na prática clínica, isso significa escutar a história de cada pessoa considerando o que é dito e o que aparece de outros modos.
            </p>
            <div className="abordagem__img cortina">
              <Obra chave="redon-dream-vision" legenda />
            </div>
          </div>
          <ol className="abordagem__notas">
            {NOTAS.map((n, i) => (
              <li key={n.titulo} className="revelar" style={{ "--atraso": `${i * 0.06}s` } as React.CSSProperties}>
                <span className="abordagem__n rotulo">{String(i + 1).padStart(2, "0")}</span>
                <h3>{n.titulo}</h3>
                <p>{n.texto}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="envoltorio abordagem__recursos">
          <p className="rotulo">Recursos e referências de trabalho</p>
          <ul>
            {recursos.map((r) => (
              <li key={r}>
                <Estrela /> {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="passos envoltorio" aria-labelledby="passos-titulo">
        <div className="secao-cabeca">
          <p className="rotulo" id="passos-titulo">
            Como começar
          </p>
          <Palavras como="h2" texto="Três passos, *sem pressa*" />
        </div>
        <ol className="passos__lista">
          {PASSOS.map((p, i) => (
            <li key={p.n} className="revelar" style={{ "--atraso": `${i * 0.08}s` } as React.CSSProperties}>
              <span className="passos__n">{p.n}</span>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </li>
          ))}
        </ol>
        <div className="passos__cta revelar">
          <BotaoWhatsapp texto="Solicitar informações" />
          <Link href="/contato/" className="ui link-linha">
            Outras formas de contato <span className="seta">→</span>
          </Link>
        </div>
        <p className="passos__aviso ui revelar">
          A psicoterapia é um processo, e cada percurso é único: não há promessa de cura nem de resultados em prazo determinado. Este site tem
          caráter informativo e não substitui atendimento de urgência. Em situação de crise, procure o CVV (188, 24 horas) ou o SAMU (192).
          {site.crp ? ` ${site.nomeConselho} · CRP ${site.crp}.` : ""}
        </p>
      </section>
    </>
  );
}
