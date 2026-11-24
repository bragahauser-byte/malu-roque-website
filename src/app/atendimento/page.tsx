import type { Metadata } from "next";
import Link from "next/link";
import { Palavras } from "@/components/Palavras";
import { Temas } from "@/components/Temas";
import { Obra } from "@/components/Obra";
import { BotaoWhatsapp } from "@/components/BotaoWhatsapp";
import { Arco } from "@/components/Arco";
import { creditoObra } from "@/content/arte";
import { publico, recursos } from "@/content/perfil";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Atendimento",
  description:
    "Psicoterapia individual online com Maria Luiza Roque (CRP 06/214718), para crianças, adolescentes, adultos e idosos de todo o Brasil. Abordagem: Psicologia Analítica (junguiana).",
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
  { n: "02", titulo: "Uma conversa inicial", texto: "Combinamos horários e as condições do atendimento, que acontece sempre online. Dúvidas são bem-vindas." },
  { n: "03", titulo: "O processo", texto: "Os encontros acontecem com regularidade. O ritmo e a duração da terapia são construídos ao longo do caminho." },
];

export default function Atendimento() {
  return (
    <>
      <section className="abertura grade">
        <p className="abertura__kicker rotulo">Atendimento · Psicoterapia online</p>
        <Palavras como="h1" className="abertura__titulo abertura__titulo--largo" texto="Psicoterapia,|*um lugar para escutar.*" />
        <div className="abertura__lead">
          <p className="lead revelar">
            A terapia é um espaço de escuta, com tempo e sigilo, para olhar com cuidado para aquilo que pesa, confunde ou pede mudança.
          </p>
          <p className="ui suave revelar">
            {site.nome} · {site.profissao} · CRP {site.crp}
          </p>
        </div>
      </section>

      <section className="secao secao--curta" aria-label="Informações do atendimento">
        <dl className="fatos grade">
          <div className="fatos__item revelar">
            <dt className="rotulo">Modalidade</dt>
            <dd>Psicoterapia individual</dd>
          </div>
          <div className="fatos__item revelar" style={{ "--atraso": "0.05s" } as React.CSSProperties}>
            <dt className="rotulo">Formato</dt>
            <dd>Exclusivamente online, para pessoas de todo o Brasil</dd>
          </div>
          <div className="fatos__item revelar" style={{ "--atraso": "0.1s" } as React.CSSProperties}>
            <dt className="rotulo">Para quem</dt>
            <dd>{publico.map((p, i) => (i === 0 ? p : p.toLowerCase())).join(", ")}</dd>
          </div>
          <div className="fatos__item revelar" style={{ "--atraso": "0.15s" } as React.CSSProperties}>
            <dt className="rotulo">Abordagem</dt>
            <dd>Psicologia Analítica, também chamada de abordagem junguiana</dd>
          </div>
        </dl>
      </section>

      <section className="secao" aria-labelledby="h-temas">
        <div className="secao-cabeca grade">
          <span className="secao-cabeca__num rotulo">01</span>
          <span className="secao-cabeca__nome chapeu">Temas de atuação</span>
          <Palavras id="h-temas" className="secao-cabeca__titulo" texto="O que costuma *chegar* à terapia" />
        </div>
        <Temas />
      </section>

      <section className="secao campo" aria-labelledby="h-abordagem">
        <div className="secao-cabeca grade">
          <span className="secao-cabeca__num rotulo">02</span>
          <span className="secao-cabeca__nome chapeu">A abordagem</span>
          <Palavras id="h-abordagem" className="secao-cabeca__titulo" texto="Psicologia *Analítica*" />
        </div>
        <div className="dupla grade">
          <figure className="dupla__figura revelar">
            <Arco>
              <Obra chave="redon-dream-vision" />
            </Arco>
            <figcaption className="credito">{creditoObra("redon-dream-vision")}</figcaption>
          </figure>
          <div className="dupla__texto">
            <p className="lead revelar">
              Desenvolvida por Carl Gustav Jung, a Psicologia Analítica compreende a psique como algo vivo, que se expressa também por imagens. Na
              prática clínica, isso significa escutar a história de cada pessoa considerando o que é dito e o que aparece de outros modos.
            </p>
            <ol className="notas">
              {NOTAS.map((n, i) => (
                <li key={n.titulo} className="revelar">
                  <span className="rotulo">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="chapeu">{n.titulo}</h3>
                  <p>{n.texto}</p>
                </li>
              ))}
            </ol>
            <div className="recursos revelar">
              <p className="rotulo">Recursos e referências de trabalho</p>
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
          <span className="secao-cabeca__nome chapeu">Como começar</span>
          <Palavras id="h-passos" className="secao-cabeca__titulo" texto="Três passos, *sem pressa*" />
        </div>
        <ol className="passos grade">
          {PASSOS.map((p, i) => (
            <li key={p.n} className="passos__item revelar" style={{ "--atraso": `${i * 0.06}s` } as React.CSSProperties}>
              <span className="passos__n">{p.n}</span>
              <h3 className="chapeu">{p.titulo}</h3>
              <p>{p.texto}</p>
            </li>
          ))}
        </ol>
        <div className="passos__fim grade">
          <div className="passos__cta revelar">
            <BotaoWhatsapp cheio texto="Entrar em contato" />
            <Link href="/contato/" className="ui link-linha">
              Outras formas de contato
            </Link>
          </div>
          <p className="passos__aviso ui suave revelar">
            A psicoterapia é um processo, e cada percurso é único: não há promessa de cura nem de resultados em prazo determinado. Este site tem
            caráter informativo e não substitui atendimento de urgência. Em situação de crise, procure o CVV (188, 24 horas) ou o SAMU (192).{" "}
            {site.nome} · CRP {site.crp}.
          </p>
        </div>
      </section>
    </>
  );
}
