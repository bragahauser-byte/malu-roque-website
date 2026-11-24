import type { Metadata } from "next";
import Link from "next/link";
import { PortalCapa } from "@/components/Passagem";
import { Arco } from "@/components/Arco";
import { Foto } from "@/components/Foto";
import { Frase } from "@/components/Frase";
import { CartaoTexto } from "@/components/CartaoTexto";
import { BotaoWhatsapp } from "@/components/BotaoWhatsapp";
import { Obra } from "@/components/Obra";
import { Palavras } from "@/components/Palavras";
import { NomeDanca } from "@/components/NomeDanca";
import { obra } from "@/content/arte";
import { dados } from "@/content/site";
import { especiaisEm } from "@/content/caderno";
import { perfilEm } from "@/content/perfil";
import { rota, tradutor, type Lingua } from "@/lib/lingua";

export const metadadosInicio = (l: Lingua): Metadata =>
  l === "en"
    ? { title: { absolute: "Maria Luiza Roque — Psychologist · CRP 06/214718" }, description: dados("en").descricao, openGraph: { locale: "en_US" } }
    : {};

/**
 * A CAPA tem dois lados. O conteúdo dos dois está no HTML (bom para busca e
 * leitores de tela); o CSS mostra só o lado atual (.so-visivel / .so-simbolico).
 * O portal é a passagem.
 */
export function Inicio({ l }: { l: Lingua }) {
  const t = tradutor(l);
  const h = (p: string) => rota(l, p);
  const site = dados(l);
  const { atlas, linhaDoTempo, outroLado, pesquisas, publico, recursos } = perfilEm(l);

  return (
    <>
      {/* ── Capa ─────────────────────────────────────────── */}
      <section className="capa grade" aria-label={t("Capa", "Cover")}>
        <div className="capa__texto">
          <div className="so-visivel">
            <p className="rotulo capa__kicker">
              {site.profissao} · CRP {site.crp}
            </p>
            <NomeDanca como="h1" className="capa__titulo" />
            <p className="capa__lead lead">
              {t(
                "Atendimento psicológico online, em português e em inglês, para pessoas em qualquer lugar do mundo, a partir da Psicologia Analítica de C. G. Jung. Um lugar para olhar com cuidado para o que aparece na superfície e para o que fala por imagens.",
                "Online psychotherapy, in English and Portuguese, for people anywhere in the world, grounded in C. G. Jung’s Analytical Psychology. A place to look carefully at what appears on the surface and at what speaks through images.",
              )}
            </p>
            <div className="capa__botoes">
              <BotaoWhatsapp cheio texto={t("Entrar em contato", "Get in touch")} />
              <Link href={h("/atendimento/")} className="botao">
                {t("Como funciona", "How it works")}
              </Link>
            </div>
          </div>

          <div className="so-simbolico">
            <p className="rotulo capa__kicker">{t("O outro lado", "The other side")}</p>
            <Palavras como="h1" className="capa__titulo" texto={t("O que me *atravessa*", "What moves *through me*")} />
            <p className="capa__lead lead">
              {t(
                "Sonhos, mitos e contos de fadas. Livros espalhados, discos, cinema independente, arte e viagens. O imaginário que acompanha quem escuta, e que também tem lugar na clínica.",
                "Dreams, myths and fairy tales. Books lying around, records, independent film, art and travel. The imagination that accompanies the one who listens, and that also has a place in the clinic.",
              )}
            </p>
            <div className="capa__botoes">
              <a href="#atlas" className="botao botao--cheio">
                {t("Ver o atlas", "See the atlas")} <span className="seta">↓</span>
              </a>
              <Link href={h("/caderno/")} className="botao">
                {t("Abrir o caderno", "Open the notebook")}
              </Link>
            </div>
          </div>

          <ul className="capa__lados ui" aria-label={t("Os dois lados do site", "The two sides of the site")}>
            <li className="capa__lado capa__lado--visivel">
              <span className="capa__ponto" aria-hidden="true" /> {t("Visível", "Visible")}{" "}
              <span className="suave">· {t("atendimento, formação, pesquisa", "therapy, training, research")}</span>
            </li>
            <li className="capa__lado capa__lado--simbolico">
              <span className="capa__ponto" aria-hidden="true" /> {t("Simbólico", "Symbolic")}{" "}
              <span className="suave">· {t("arte, sonhos, viagens, caderno", "art, dreams, travel, notebook")}</span>
            </li>
          </ul>
        </div>

        <div className="capa__portal">
          <PortalCapa />
        </div>
      </section>

      {/* ── Lado visível ─────────────────────────────────── */}
      <div className="so-visivel">
        <section className="manifesto grade" aria-label={t("Manifesto", "Manifesto")}>
          <Frase
            como="h2"
            className="manifesto__frase revelar"
            partes={
              l === "en"
                ? ["Between", { img: "viagem-janela", forma: "arco", largura: 1.1 }, "what we see", { img: "redon-flower-clouds", forma: "pilula", largura: 1.9 }, "and all", { img: "malu-entardecer", forma: "circulo", largura: 1 }, "that moves through us."]
                : ["Entre", { img: "viagem-janela", forma: "arco", largura: 1.1 }, "aquilo que vemos", { img: "redon-flower-clouds", forma: "pilula", largura: 1.9 }, "e tudo", { img: "malu-entardecer", forma: "circulo", largura: 1 }, "aquilo que nos atravessa."]
            }
          />
          <p className="manifesto__nota ui revelar">
            {t(
              "Psicologia, cultura, imagens e as histórias que nos constituem. É daqui que parte a escuta.",
              "Psychology, culture, images and the stories that make us who we are. This is where listening begins.",
            )}
          </p>
        </section>

        <section className="secao" aria-labelledby="h-atendimento">
          <div className="secao-cabeca grade">
            <span className="secao-cabeca__num rotulo">01</span>
            <span className="secao-cabeca__nome chapeu">{t("Atendimento", "Therapy")}</span>
            <Palavras id="h-atendimento" className="secao-cabeca__titulo" texto={t("Online, *de qualquer lugar do mundo.*", "Online, *from anywhere in the world.*")} />
          </div>
          <dl className="fatos grade">
            <div className="fatos__item revelar">
              <dt className="rotulo">{t("Modalidade", "Format")}</dt>
              <dd>{t("Psicoterapia individual", "Individual psychotherapy")}</dd>
            </div>
            <div className="fatos__item revelar" style={{ "--atraso": "0.05s" } as React.CSSProperties}>
              <dt className="rotulo">{t("Formato", "Where")}</dt>
              <dd>{t("Exclusivamente online, para pessoas no Brasil e em outros países", "Online only, for people in Brazil and in other countries")}</dd>
            </div>
            <div className="fatos__item revelar" style={{ "--atraso": "0.1s" } as React.CSSProperties}>
              <dt className="rotulo">{t("Idiomas", "Languages")}</dt>
              <dd>{t("Português e inglês", "English and Portuguese")}</dd>
            </div>
            <div className="fatos__item revelar" style={{ "--atraso": "0.15s" } as React.CSSProperties}>
              <dt className="rotulo">{t("Para quem", "For whom")}</dt>
              <dd>{publico.map((p, i) => (i === 0 ? p : p.toLowerCase())).join(", ")}</dd>
            </div>
          </dl>
          <div className="grade">
            <Link href={h("/atendimento/")} className="botao fatos__link">
              {t("Temas, abordagem e como começar", "Themes, approach and how to begin")} <span className="seta">→</span>
            </Link>
          </div>
        </section>

        <section className="secao" aria-labelledby="h-quem">
          <div className="secao-cabeca grade">
            <span className="secao-cabeca__num rotulo">02</span>
            <span className="secao-cabeca__nome chapeu">{t("Quem escuta", "Who listens")}</span>
            <Palavras id="h-quem" className="secao-cabeca__titulo" texto={t("Do hospital à clínica, *muitos jeitos de escutar.*", "From hospital to clinic, *many ways of listening.*")} />
          </div>
          <div className="quem grade">
            <figure className="quem__foto revelar">
              <Arco>
                <Foto chave="malu-retrato" tamanhos="(max-width: 639px) 75vw, (max-width: 1023px) 45vw, 30vw" />
              </Arco>
            </figure>
            <div className="quem__texto">
              <p className="lead revelar">
                {t(
                  "Psicóloga formada pela PUC-SP, especialista em Psicologia Hospitalar pelo Hospital das Clínicas da FMUSP e estudiosa da Psicologia Analítica.",
                  "Psychologist trained at PUC-SP, specialist in Hospital Psychology at Hospital das Clínicas (University of São Paulo Medical School) and a student of Analytical Psychology.",
                )}
              </p>
              <p className="revelar">
                {t(
                  "Atende crianças, adolescentes, adultos e idosos. Pelo caminho passou por hospital, escola, instituições e grupos, e cada lugar ensinou um jeito de escutar.",
                  "She works with children, adolescents, adults and older adults. Along the way she has worked in a hospital, a school, institutions and groups, and each place taught a way of listening.",
                )}
              </p>
              <ol className="quem__linha">
                {linhaDoTempo.slice(-3).map((x) => (
                  <li key={x.ano} className="revelar">
                    <span className="quem__ano">{x.ano}</span>
                    <span>{x.texto}</span>
                  </li>
                ))}
              </ol>
              <Link href={h("/sobre/")} className="botao revelar">
                {t("Trajetória completa", "Full background")} <span className="seta">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="secao" aria-labelledby="h-pesquisa">
          <div className="secao-cabeca grade">
            <span className="secao-cabeca__num rotulo">03</span>
            <span className="secao-cabeca__nome chapeu">{t("Pesquisa", "Research")}</span>
            <Palavras id="h-pesquisa" className="secao-cabeca__titulo" texto={t("Onde o mito *encontra a clínica.*", "Where myth *meets the clinic.*")} />
          </div>
          <ul className="linhas">
            {pesquisas.map((p) => (
              <li key={p.titulo} className="revelar">
                <Link href={h("/pesquisas/")} className="linha grade">
                  <span className="linha__ano">{p.ano}</span>
                  <span className="linha__titulo">{p.titulo}</span>
                  <span className="linha__info ui">
                    {p.tipo}
                    <br />
                    <span className="suave">{p.instituicao}</span>
                  </span>
                  <span className="linha__seta" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* ── Lado simbólico ───────────────────────────────── */}
      <div className="so-simbolico">
        <section className="universo" aria-labelledby="h-universo">
          <div className="grade">
            <p className="universo__rotulo rotulo" id="h-universo">
              {t("O que mora deste lado", "What lives on this side")}
            </p>
            <Frase
              className="universo__frase revelar"
              partes={
                l === "en"
                  ? ["Psychology,", { img: "viagem-museu", forma: "arco", largura: 0.8 }, "art, literature,", { img: "manet-reading", forma: "retangulo", largura: 1.1 }, "film, music,", { img: "malu-musica", forma: "circulo", largura: 0.95 }, "dreams, symbols,", { img: "redon-flower-clouds", forma: "pilula", largura: 1.6 }, "travel", { img: "viagem-arcos", forma: "arco", largura: 0.8 }, "and everyday life."]
                  : ["Psicologia,", { img: "viagem-museu", forma: "arco", largura: 0.8 }, "arte, literatura,", { img: "manet-reading", forma: "retangulo", largura: 1.1 }, "cinema, música,", { img: "malu-musica", forma: "circulo", largura: 0.95 }, "sonhos, símbolos,", { img: "redon-flower-clouds", forma: "pilula", largura: 1.6 }, "viagens", { img: "viagem-arcos", forma: "arco", largura: 0.8 }, "e o cotidiano."]
              }
            />
          </div>
          <div className="mosaico grade">
            <figure className="mosaico__a revelar">
              <Arco>
                <Foto chave="viagem-passagem" tamanhos="(max-width: 639px) 90vw, (max-width: 1023px) 60vw, 38vw" />
              </Arco>
            </figure>
            <p className="mosaico__texto lead revelar">
              {t(
                "Uma revista sem periodicidade fixa, uma sala com luz amarelada, uma loja de discos com a música alta. O outro lado é feito das coisas que despertam curiosidade e vontade de ficar.",
                "A magazine with no fixed schedule, a room with yellowish light, a record shop with the music turned up. The other side is made of the things that spark curiosity and the wish to stay.",
              )}
            </p>
            <figure className="mosaico__b revelar" style={{ "--atraso": "0.1s" } as React.CSSProperties}>
              <Foto chave="malu-festival" tamanhos="(max-width: 639px) 60vw, 22vw" />
            </figure>
            <figure className="mosaico__c revelar" style={{ "--atraso": "0.2s" } as React.CSSProperties}>
              <Foto chave="viagem-entardecer" tamanhos="(max-width: 639px) 60vw, 16vw" />
            </figure>
          </div>
        </section>

        <section className="secao" id="atlas" aria-labelledby="h-atlas">
          <div className="secao-cabeca grade">
            <span className="secao-cabeca__num rotulo">01</span>
            <span className="secao-cabeca__nome chapeu">{t("Atlas do inconsciente", "Atlas of the unconscious")}</span>
            <Palavras id="h-atlas" className="secao-cabeca__titulo" texto={t("Seis imagens *para pensar com Jung.*", "Six images *to think with Jung.*")} />
          </div>
          <p className="atlas__nota grade ui">
            <span>
              {t(
                "O Livro Vermelho, em que Jung registrou suas imagens interiores a partir de 1913, é a referência central deste lado do site. Suas pinturas não aparecem aqui porque seguem protegidas por direitos autorais: as obras abaixo vêm de acervos abertos, e algumas (as gravuras alquímicas e a mandala) são das mesmas fontes que Jung estudou.",
                "The Red Book, in which Jung recorded his inner images from 1913 onwards, is the central reference for this side of the site. Its paintings are not shown here because they are still under copyright: the works below come from open collections, and some of them (the alchemical images and the mandala) come from the very sources Jung studied.",
              )}
            </span>
          </p>
          <div className="atlas grade">
            {[0, 2, 4].map((inicio, c) => (
              <ol key={c} className={`atlas__coluna atlas__coluna--${c + 1}`} start={inicio + 1}>
                {atlas.slice(inicio, inicio + 2).map((a, k) => {
                  const i = inicio + k;
                  const o = obra(a.obra, l);
                  return (
                    <li key={a.ideia} className="atlas__item revelar">
                      <figure>
                        <div className="atlas__img">
                          <Obra chave={a.obra} tamanhos="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 30vw" />
                        </div>
                        <figcaption>
                          <span className="rotulo atlas__n">{String(i + 1).padStart(2, "0")}</span>
                          <h3 className="atlas__ideia">{a.ideia}</h3>
                          <p className="atlas__texto">{a.texto}</p>
                          <p className="credito">
                            {o.artista}, <em>{o.titulo}</em> ({o.ano}). {o.acervo}, {o.licenca}.
                          </p>
                        </figcaption>
                      </figure>
                    </li>
                  );
                })}
              </ol>
            ))}
          </div>
        </section>

        <section className="secao" id="outro-lado" aria-labelledby="h-outro">
          <div className="secao-cabeca grade">
            <span className="secao-cabeca__num rotulo">02</span>
            <span className="secao-cabeca__nome chapeu">{t("Se fosse…", "If it were…")}</span>
            <Palavras id="h-outro" className="secao-cabeca__titulo" texto={t("Quatro imagens *do outro lado.*", "Four images *from the other side.*")} />
          </div>
          <ol className="imagens">
            {outroLado.map((o, i) => (
              <li key={o.pergunta} className={`imagem grade ${i % 2 ? "imagem--inversa" : ""}`}>
                <div className="imagem__arco revelar">
                  <Arco>
                    <Obra chave={o.imagem} tamanhos="(max-width: 639px) 75vw, (max-width: 1023px) 45vw, 30vw" />
                  </Arco>
                </div>
                <div className="imagem__texto revelar" style={{ "--atraso": "0.1s" } as React.CSSProperties}>
                  <span className="rotulo">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="chapeu">{o.pergunta}</h3>
                  <p className="lead">{o.resposta}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="secao" aria-labelledby="h-caderno">
          <div className="secao-cabeca grade">
            <span className="secao-cabeca__num rotulo">03</span>
            <span className="secao-cabeca__nome chapeu">{t("Do caderno", "From the notebook")}</span>
            <Palavras id="h-caderno" className="secao-cabeca__titulo" texto={t("Viagens, intercâmbios *e discos.*", "Travel, exchanges *and records.*")} />
          </div>
          <div className="mesa grade">
            {especiaisEm(l).map((x, i) => (
              <CartaoTexto key={x.slug} texto={x} indice={i} className="g4" />
            ))}
          </div>
          <div className="grade">
            <Link href={h("/caderno/")} className="botao fatos__link">
              {t("Abrir o caderno", "Open the notebook")} <span className="seta">→</span>
            </Link>
          </div>
        </section>

        <section className="secao" aria-labelledby="h-clinica">
          <div className="secao-cabeca grade">
            <span className="secao-cabeca__num rotulo">04</span>
            <span className="secao-cabeca__nome chapeu">{t("Na clínica", "In the clinic")}</span>
            <Palavras id="h-clinica" className="secao-cabeca__titulo" texto={t("Essas imagens também *entram na sessão.*", "These images also *come into the session.*")} />
          </div>
          <div className="ponte grade">
            <p className="ponte__texto lead revelar">
              {t(
                "Mitos, contos, literatura, música, cinema e arte podem entrar na terapia como pontes para aquilo que é difícil dizer de forma direta. Sempre como convite, nunca como obrigação.",
                "Myths, tales, literature, music, film and art can come into therapy as bridges to what is hard to say directly. Always as an invitation, never as an obligation.",
              )}
            </p>
            <ul className="ponte__lista">
              {recursos.map((r, i) => (
                <li key={r} className="revelar" style={{ "--atraso": `${i * 0.04}s` } as React.CSSProperties}>
                  <span className="rotulo">{String(i + 1).padStart(2, "0")}</span> {r}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
