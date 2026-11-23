import Link from "next/link";
import { CapaLente } from "@/components/CapaLente";
import { Estrela } from "@/components/Estrela";
import { FotoPendente } from "@/components/FotoPendente";
import { ListaComImagem } from "@/components/ListaComImagem";
import { CartaoTexto } from "@/components/CartaoTexto";
import { BotaoWhatsapp } from "@/components/BotaoWhatsapp";
import { Palavras } from "@/components/Palavras";
import { navegacao, site } from "@/content/site";
import { textos } from "@/content/caderno";

const INTERESSES = ["sonhos", "mitos e contos de fadas", "literatura", "discos", "cinema independente", "viagens", "flores", "o cotidiano", "arte", "o que nos atravessa"];

const CORES_INDICE = ["var(--lavanda)", "var(--ambar)", "var(--malva)", "var(--portal)", "var(--tule)"];

export default function Inicio() {
  const destaques = ["o-que-os-contos-de-fadas-sabem-sobre-crescer", "notas-sobre-uma-loja-de-discos", "o-simbolo-nao-se-explica"]
    .map((s) => textos.find((t) => t.slug === s)!)
    .filter(Boolean);

  return (
    <>
      <CapaLente />

      {/* Faixa corrida */}
      <div className="faixa" aria-label="Interesses: sonhos, mitos, literatura, discos, cinema, viagens, flores, cotidiano e arte">
        <div className="faixa__trilho" aria-hidden="true">
          {[0, 1].map((k) => (
            <div className="faixa__grupo" key={k}>
              {INTERESSES.map((t) => (
                <span key={t + k} style={{ display: "contents" }}>
                  <span>{t}</span>
                  <Estrela />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Carta da edição */}
      <section className="carta envoltorio grade" aria-labelledby="carta-titulo">
        <div className="carta__rotulo revelar">
          <p className="rotulo" id="carta-titulo">
            Carta da edição
          </p>
          <p className="rotulo">nº {site.edicao.numero}</p>
        </div>
        <div className="carta__texto">
          <p className="revelar">
            Este não é um site sobre psicologia do jeito que costumam ser. É mais parecido com uma sala: tem livros espalhados, discos, flores,
            fotografias de viagem, uma luz amarelada e uma música tocando um pouco alto.
          </p>
          <p className="revelar">
            Sou psicóloga clínica e trabalho a partir da Psicologia Analítica, a abordagem de Carl Gustav Jung. Isso quer dizer que levo a sério
            aquilo que aparece na superfície (a rotina, as relações, o cansaço) e também o que fala por imagens: sonhos, mitos, contos, as
            histórias que a gente insiste em contar.
          </p>
          <p className="revelar">
            Aqui você encontra o consultório, minha trajetória, pesquisas e um caderno em construção, onde psicologia, cultura e cotidiano se
            misturam. Fique à vontade para explorar.
          </p>
          <p className="carta__assinatura revelar">— Malu</p>
        </div>
        <aside className="carta__lado revelar" style={{ "--atraso": "0.2s" } as React.CSSProperties}>
          <FotoPendente rotulo="Retrato da Malu (a inserir)" />
        </aside>
      </section>

      {/* Nesta edição */}
      <section className="indice envoltorio" aria-labelledby="indice-titulo">
        <div className="indice__cabeca">
          <Palavras como="h2" texto="Nesta *edição*" />
          <p className="ui">{navegacao.length - 1} seções</p>
        </div>
        <ListaComImagem
          itens={navegacao.slice(1).map((n, i) => ({ href: n.href, numero: n.numero, titulo: n.titulo, sub: n.sub, imagem: n.imagem, cor: CORES_INDICE[i] }))}
        />
      </section>

      {/* Do caderno */}
      <section className="destaques envoltorio" aria-labelledby="destaques-titulo">
        <div className="indice__cabeca">
          <Palavras como="h2" texto="Do *caderno*" />
          <Link href="/caderno/" className="ui link-linha">
            Ver todos os rascunhos <span className="seta">→</span>
          </Link>
        </div>
        <div className="mesa mesa--tres">
          {destaques.map((t, i) => (
            <CartaoTexto key={t.slug} texto={t} indice={i} className={["g5", "g4", "g3"][i]} />
          ))}
        </div>
      </section>

      {/* Consultório */}
      <section className="noite noite--ardosia" data-cursor-escuro aria-labelledby="consultorio-titulo">
        <i className="noite__luz noite__luz--1" aria-hidden="true" />
        <i className="noite__luz noite__luz--2" aria-hidden="true" />
        <div className="consultorio-chamada envoltorio grade">
          <p className="rotulo" style={{ gridColumn: "1 / -1", opacity: 0.6 }} id="consultorio-titulo">
            02 · O consultório
          </p>
          <Palavras como="h2" className="consultorio-chamada__frase" texto="Um lugar onde dá vontade de *ser escutado.*" />
          <div className="consultorio-chamada__info revelar">
            <dl>
              <div>
                <dt className="rotulo">Atendimento</dt>
                <dd>Psicoterapia individual, presencial e online, conforme disponibilidade</dd>
              </div>
              <div>
                <dt className="rotulo">Para quem</dt>
                <dd>Crianças, adolescentes, adultos e idosos</dd>
              </div>
              <div>
                <dt className="rotulo">Abordagem</dt>
                <dd>Psicologia Analítica (junguiana)</dd>
              </div>
            </dl>
            <div className="consultorio-chamada__botoes">
              <BotaoWhatsapp claro />
              <Link href="/atendimento/" className="ui link-linha">
                Como funciona <span className="seta">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
