import type { Metadata } from "next";
import Link from "next/link";
import { Palavras } from "@/components/Palavras";
import { VitrineDestinos } from "@/components/VitrineDestinos";
import { ColecaoCDs } from "@/components/ColecaoCDs";
import { JanelaAviao } from "@/components/JanelaAviao";
import { Bandeira } from "@/components/Bandeira";
import { Foto } from "@/components/Foto";
import { fotos, fotosEn } from "@/content/fotos";
import { destinosEm, fechoEm, intercambiosEm } from "@/content/viagens";
import { discosEm } from "@/content/discos";
import { rota, tradutor, type Lingua } from "@/lib/lingua";

/** O caminho de migalhas do topo dos especiais: "Caderno · Especial · …". */
function Kicker({ l, tema }: { l: Lingua; tema: string }) {
  const t = tradutor(l);
  return (
    <p className="abertura__kicker rotulo">
      <Link href={rota(l, "/caderno/")} className="link-linha">
        {t("Caderno", "Notebook")}
      </Link>{" "}
      · {t("Especial", "Special")} · {tema}
    </p>
  );
}

// ── Destinos ──────────────────────────────────────────────────

export const metadadosDestinos = (l: Lingua): Metadata =>
  l === "en"
    ? { title: "Twelve countries, twelve windows", description: "The countries Maria Luiza Roque has visited, seen as if through an aeroplane window.", openGraph: { locale: "en_US" } }
    : { title: "Doze países, doze janelas", description: "Os países que Maria Luiza Roque já visitou, vistos como pela janela de um avião." };

/**
 * DESTINOS — doze países numa vitrine com uma janela de avião por vez
 * (leitura da referência AC Concierge; ver VitrineDestinos.tsx).
 */
export function Destinos({ l }: { l: Lingua }) {
  const t = tradutor(l);
  const destinos = destinosEm(l);
  return (
    <>
      <section className="abertura grade">
        <Kicker l={l} tema={t("Viagens", "Travel")} />
        <Palavras como="h1" className="abertura__titulo abertura__titulo--largo" texto={t("Doze países,|*doze janelas*", "Twelve countries,|*twelve windows*")} />
        <div className="abertura__lead">
          <p className="lead revelar">
            {t(
              "Inglaterra, Dinamarca, Itália, Bélgica, Holanda, Mônaco, Vaticano, Marrocos, França, Alemanha, Malta e Áustria. Os países por onde já passei, vistos como pela janela de um avião: um recorte de cada lugar, sem roteiro.",
              "England, Denmark, Italy, Belgium, the Netherlands, Monaco, the Vatican, Morocco, France, Germany, Malta and Austria. The countries I have passed through, seen as if through an aeroplane window: a glimpse of each place, with no itinerary.",
            )}
          </p>
          <p className="ui suave revelar">{t("As doze fotografias são minhas, uma de cada país, sem retoques.", "All twelve photographs are mine, one from each country, unretouched.")}</p>
        </div>
      </section>

      <section className="secao" aria-labelledby="h-vitrine">
        <div className="secao-cabeca grade">
          <span className="secao-cabeca__num rotulo">{t("Países", "Countries")}</span>
          <span className="secao-cabeca__nome chapeu" id="h-vitrine">
            {t("Pela janela", "Through the window")}
          </span>
          <p className="secao-cabeca__titulo vitrine__total" aria-label={t(`${destinos.length} países`, `${destinos.length} countries`)}>
            {destinos.length}
          </p>
        </div>
        <div className="grade">
          <div className="inteira">
            <VitrineDestinos destinos={destinos} />
          </div>
        </div>
      </section>

      <section className="secao" aria-label={t("Continue", "Continue")}>
        <div className="grade">
          <div className="continuar">
            <Link href={rota(l, "/caderno/intercambios/")} className="botao">
              {t("Os dois intercâmbios: Londres e Milão", "The two exchanges: London and Milan")} <span className="seta">→</span>
            </Link>
            <Link href={rota(l, "/caderno/")} className="ui link-linha">
              {t("Voltar ao caderno", "Back to the notebook")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// ── Discos ────────────────────────────────────────────────────

export const metadadosDiscos = (l: Lingua): Metadata =>
  l === "en"
    ? {
        title: "A shelf of CDs",
        description: "Records that are part of Maria Luiza Roque’s repertoire: Red Hot Chili Peppers, Oasis, Amy Winehouse, Led Zeppelin, The Beatles, Pink Floyd, Lady Gaga and others, on a single shelf.",
        openGraph: { locale: "en_US" },
      }
    : {
        title: "Uma estante de CDs",
        description: "Discos que fazem parte do repertório de Maria Luiza Roque: Red Hot Chili Peppers, Oasis, Amy Winehouse, Led Zeppelin, The Beatles, Pink Floyd, Lady Gaga e outros, numa só estante.",
      };

export function Discos({ l }: { l: Lingua }) {
  const t = tradutor(l);
  const discos = discosEm(l);
  return (
    <>
      <section className="abertura grade">
        <Kicker l={l} tema={t("Música", "Music")} />
        <Palavras como="h1" className="abertura__titulo abertura__titulo--largo" texto={t("Uma estante|*de CDs*", "A shelf|*of CDs*")} />
        <div className="abertura__lead">
          <p className="lead revelar">
            {t(
              "Como aquelas coleções que ficavam na estante e eram tiradas da caixa uma de cada vez. Não é um ranking: são discos que fazem parte do repertório.",
              "Like those collections that sat on the shelf and were taken out of their cases one at a time. It is not a ranking: these are records that are part of the repertoire.",
            )}
          </p>
          <p className="ui suave revelar">
            {t("Clique ou toque numa caixa para tirá-la da estante; as setas do teclado percorrem a fileira.", "Click or tap a case to take it off the shelf; the arrow keys move along the row.")}
          </p>
        </div>
      </section>

      <section className="secao" aria-labelledby="h-discos">
        <div className="secao-cabeca grade">
          <span className="secao-cabeca__num rotulo">{String(discos.length).padStart(2, "0")}</span>
          <span className="secao-cabeca__nome chapeu" id="h-discos">
            {t("Discos", "Records")}
          </span>
          <h2 className="secao-cabeca__titulo titulo">
            {t("Uma só ", "A single ")}
            <em>{t("coleção", "collection")}</em>
          </h2>
        </div>
        <div className="grade">
          <div className="inteira">
            <ColecaoCDs discos={discos} rotulo={t("Estante de discos", "Record shelf")} />
          </div>
        </div>
        <p className="grade creditos__nota ui suave">
          <span>
            {t(
              "As capas são reproduzidas a partir dos arquivos enviados pela Malu, sem alteração. Os direitos pertencem aos artistas e gravadoras.",
              "The covers are reproduced, unaltered, from the files provided by Malu. Rights belong to the artists and record labels.",
            )}
          </span>
        </p>
      </section>

      <section className="secao" aria-label={t("Continue", "Continue")}>
        <div className="grade">
          <div className="continuar">
            <Link href={rota(l, "/caderno/destinos/")} className="botao">
              {t("Doze países, doze janelas", "Twelve countries, twelve windows")} <span className="seta">→</span>
            </Link>
            <Link href={rota(l, "/caderno/")} className="ui link-linha">
              {t("Voltar ao caderno", "Back to the notebook")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// ── Intercâmbios ──────────────────────────────────────────────

export const metadadosIntercambios = (l: Lingua): Metadata =>
  l === "en"
    ? {
        title: "Two exchanges: London and Milan",
        description: "London, England (2019/2020), English language exchange. Milan, Italy (2023), academic exchange at the Università Cattolica del Sacro Cuore.",
        openGraph: { locale: "en_US" },
      }
    : {
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
export function Intercambios({ l }: { l: Lingua }) {
  const t = tradutor(l);
  const [londres, milao] = intercambiosEm(l);
  const f = (k: string) => (l === "en" ? fotosEn[k as keyof typeof fotos] : fotos[k as keyof typeof fotos].alt);
  return (
    <>
      <section className="abertura grade">
        <Kicker l={l} tema={t("Viagens", "Travel")} />
        <Palavras como="h1" className="abertura__titulo abertura__titulo--largo" texto={t("Dois intercâmbios,|*dois países*", "Two exchanges,|*two countries*")} />
        <div className="abertura__lead">
          <p className="lead revelar">
            {t(
              "Primeiro Londres, para estudar inglês. Anos depois, Milão, para estudar Psicologia. Duas experiências diferentes, em dois lugares diferentes.",
              "First London, to study English. Years later, Milan, to study Psychology. Two different experiences, in two different places.",
            )}
          </p>
          <ul className="indice-capitulos ui revelar">
            <li>
              <a href="#londres" className="link-linha">
                <Bandeira pais="inglaterra" decorativa className="bandeira--inline" /> {t("Londres, Inglaterra", "London, England")} · 2019/2020
              </a>
            </li>
            <li>
              <a href="#milao" className="link-linha">
                <Bandeira pais="italia" decorativa className="bandeira--inline" /> {t("Milão, Itália", "Milan, Italy")} · 2023
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
            <p className="rotulo suave revelar">{t("Disciplinas e perspectivas", "Courses and perspectives")}</p>
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
          <p className="viagem__rotulo rotulo suave">{t("Para além da universidade", "Beyond the university")}</p>
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

      <section className="secao" aria-label={t("Fechamento", "Closing")}>
        <div className="grade fecho">
          <p className="fecho__texto lead revelar">{fechoEm(l)}</p>
          <div className="fecho__links revelar">
            <Link href={rota(l, "/caderno/destinos/")} className="botao">
              {t("Doze países, doze janelas", "Twelve countries, twelve windows")} <span className="seta">→</span>
            </Link>
            <Link href={rota(l, "/caderno/")} className="ui link-linha">
              {t("Voltar ao caderno", "Back to the notebook")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
