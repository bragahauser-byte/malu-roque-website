import type { Metadata } from "next";
import Link from "next/link";
import { Palavras } from "@/components/Palavras";
import { JanelaAviao } from "@/components/JanelaAviao";
import { Bandeira } from "@/components/Bandeira";
import { Foto } from "@/components/Foto";
import { fotos } from "@/content/fotos";
import { fechoIntercambios, intercambios } from "@/content/viagens";

export const metadata: Metadata = {
  title: "Dois intercâmbios: Londres e Milão",
  description: "Londres, Inglaterra (2019/2020), intercâmbio de inglês. Milão, Itália (2023), intercâmbio acadêmico na Università Cattolica del Sacro Cuore.",
};

/**
 * INTERCÂMBIOS — duas experiências, dois países, nunca misturadas.
 * Cada capítulo abre com o lugar, a bandeira e a data. A janela de avião
 * aparece só na foto de abertura e numa pequena sequência de viagem;
 * as outras fotos seguem o formato editorial normal.
 * Fotos: pastas "intercambio inglaterra" e "intercambio italia". As legendas
 * não nomeiam lugares que não foram confirmados.
 */
export default function Intercambios() {
  const [londres, milao] = intercambios;
  const f = (k: string) => fotos[k as keyof typeof fotos].alt;
  return (
    <>
      <section className="abertura grade">
        <p className="abertura__kicker rotulo">
          <Link href="/caderno/" className="link-linha">
            Caderno
          </Link>{" "}
          · Especial · Viagens
        </p>
        <Palavras como="h1" className="abertura__titulo abertura__titulo--largo" texto="Dois intercâmbios,|*dois países*" />
        <div className="abertura__lead">
          <p className="lead revelar">Primeiro Londres, para estudar inglês. Anos depois, Milão, para estudar Psicologia. Duas experiências diferentes, em dois lugares diferentes.</p>
          <ul className="indice-capitulos ui revelar">
            <li>
              <a href="#londres" className="link-linha">
                <Bandeira pais="inglaterra" decorativa className="bandeira--inline" /> Londres, Inglaterra · 2019/2020
              </a>
            </li>
            <li>
              <a href="#milao" className="link-linha">
                <Bandeira pais="italia" decorativa className="bandeira--inline" /> Milão, Itália · 2023
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* ── Londres ─────────────────────────────────────── */}
      <section className="secao capitulo" id="londres" aria-labelledby="h-londres">
        <header className="capitulo__cabeca grade">
          <span className="rotulo capitulo__n">01</span>
          <h2 id="h-londres" className="capitulo__lugar">
            <Bandeira pais={londres.bandeira} className="capitulo__bandeira" /> {londres.lugar}
          </h2>
          <p className="capitulo__data rotulo">
            {londres.periodo} · {londres.tipo}
          </p>
        </header>
        <div className="capitulo__abertura grade">
          <figure className="capitulo__janela revelar">
            <JanelaAviao imagem={londres.fotos[0]} alt={f(londres.fotos[0])} tamanhos="(max-width: 639px) 80vw, (max-width: 1023px) 50vw, 34vw" />
          </figure>
          <div className="capitulo__texto texto-corrido">
            {londres.texto.map((p, i) => (
              <p key={i} className={`revelar ${i === 0 ? "lead" : ""}`}>
                {p}
              </p>
            ))}
          </div>
          <figure className="capitulo__foto capitulo__foto--londres revelar">
            <Foto chave="londres-malu" tamanhos="(max-width: 639px) 70vw, (max-width: 1023px) 40vw, 24vw" />
          </figure>
        </div>
      </section>

      {/* ── Milão ───────────────────────────────────────── */}
      <section className="secao capitulo" id="milao" aria-labelledby="h-milao">
        <header className="capitulo__cabeca grade">
          <span className="rotulo capitulo__n">02</span>
          <h2 id="h-milao" className="capitulo__lugar">
            <Bandeira pais={milao.bandeira} className="capitulo__bandeira" /> {milao.lugar}
          </h2>
          <p className="capitulo__data rotulo">
            {milao.periodo} · {milao.tipo}
          </p>
        </header>

        <div className="capitulo__abertura capitulo__abertura--inversa grade">
          <figure className="capitulo__janela revelar">
            <JanelaAviao imagem="milao-catedral" alt={f("milao-catedral")} tamanhos="(max-width: 639px) 80vw, (max-width: 1023px) 50vw, 34vw" />
          </figure>
          <div className="capitulo__texto texto-corrido">
            <p className="capitulo__instituicao rotulo revelar">{milao.instituicao}</p>
            {milao.texto.slice(0, 2).map((p, i) => (
              <p key={i} className={`revelar ${i === 0 ? "lead" : ""}`}>
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* sequência: a cidade, o museu, a pintura */}
        <div className="sequencia grade">
          <figure className="sequencia__a revelar">
            <Foto chave="milao-bandeiras" tamanhos="(max-width: 639px) 45vw, 22vw" />
          </figure>
          <figure className="sequencia__b revelar" style={{ "--atraso": "0.08s" } as React.CSSProperties}>
            <Foto chave="milao-museu-malu" tamanhos="(max-width: 639px) 90vw, 34vw" />
          </figure>
          <figure className="sequencia__c revelar" style={{ "--atraso": "0.16s" } as React.CSSProperties}>
            <Foto chave="milao-pintura" tamanhos="(max-width: 639px) 45vw, 22vw" />
          </figure>
        </div>

        {/* o que estudei */}
        <div className="disciplinas grade">
          <figure className="disciplinas__foto revelar">
            <Foto chave="milao-palacio" tamanhos="(max-width: 1023px) 60vw, 30vw" />
          </figure>
          <div className="disciplinas__texto">
            <p className="rotulo suave revelar">Disciplinas e perspectivas</p>
            <ul className="disciplinas__lista">
              {milao.disciplinas!.map((d, i) => (
                <li key={d} className="revelar" style={{ "--atraso": `${i * 0.05}s` } as React.CSSProperties}>
                  <span className="rotulo">{String(i + 1).padStart(2, "0")}</span> {d}
                </li>
              ))}
            </ul>
            <p className="revelar">{milao.texto[2]}</p>
          </div>
        </div>

        {/* fora da universidade: pequenas janelas de viagem */}
        <div className="viagem grade">
          <p className="viagem__rotulo rotulo suave">Para além da universidade</p>
          {["milao-canal", "milao-costa", "milao-entardecer"].map((k, i) => (
            <figure key={k} className={`viagem__janela viagem__janela--${i + 1} revelar`} style={{ "--atraso": `${i * 0.08}s` } as React.CSSProperties}>
              <JanelaAviao imagem={k} alt={f(k)} tamanhos="(max-width: 639px) 60vw, 18vw" />
            </figure>
          ))}
          <figure className="viagem__foto revelar">
            <Foto chave="milao-malu-ponte" tamanhos="(max-width: 639px) 80vw, 30vw" />
          </figure>
        </div>
      </section>

      <section className="secao" aria-label="Fechamento">
        <div className="grade fecho">
          <p className="fecho__texto lead revelar">{fechoIntercambios}</p>
          <div className="fecho__links revelar">
            <Link href="/caderno/destinos/" className="botao">
              Doze países, doze janelas <span className="seta">→</span>
            </Link>
            <Link href="/caderno/" className="ui link-linha">
              Voltar ao caderno
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
