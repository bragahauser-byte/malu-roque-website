import Link from "next/link";
import { PortalCapa } from "@/components/Passagem";
import { Arco } from "@/components/Arco";
import { Foto } from "@/components/Foto";
import { Frase } from "@/components/Frase";
import { CartaoTexto } from "@/components/CartaoTexto";
import { BotaoWhatsapp } from "@/components/BotaoWhatsapp";
import { Obra } from "@/components/Obra";
import { Palavras } from "@/components/Palavras";
import { arte } from "@/content/arte";
import { site } from "@/content/site";
import { textos } from "@/content/caderno";
import { atlas, linhaDoTempo, outroLado, pesquisas, publico, recursos } from "@/content/perfil";

/**
 * A CAPA tem dois lados. O conteúdo dos dois está no HTML (bom para busca e
 * leitores de tela); o CSS mostra só o lado atual (.so-visivel / .so-simbolico).
 * O portal é a passagem.
 */
export default function Inicio() {
  const destaques = ["o-que-os-contos-de-fadas-sabem-sobre-crescer", "notas-sobre-uma-loja-de-discos", "o-simbolo-nao-se-explica"]
    .map((s) => textos.find((t) => t.slug === s)!)
    .filter(Boolean);

  return (
    <>
      {/* ── Capa ─────────────────────────────────────────── */}
      <section className="capa grade" aria-label="Capa">
        <div className="capa__texto">
          <div className="so-visivel">
            <p className="rotulo capa__kicker">
              {site.profissao} · CRP {site.crp}
            </p>
            <h1 className="capa__titulo">
              Maria Luiza <em>Roque</em>
            </h1>
            <p className="capa__lead lead">
              Atendimento psicológico online para pessoas de todo o Brasil, a partir da Psicologia Analítica de C. G. Jung. Um lugar para olhar com
              cuidado para o que aparece na superfície e para o que fala por imagens.
            </p>
            <div className="capa__botoes">
              <BotaoWhatsapp cheio texto="Entrar em contato" />
              <Link href="/atendimento/" className="botao">
                Como funciona
              </Link>
            </div>
          </div>

          <div className="so-simbolico">
            <p className="rotulo capa__kicker">O outro lado</p>
            <h1 className="capa__titulo">
              O que me <em>atravessa</em>
            </h1>
            <p className="capa__lead lead">
              Sonhos, mitos e contos de fadas. Livros espalhados, discos, cinema independente, arte e viagens. O imaginário que acompanha quem
              escuta, e que também tem lugar na clínica.
            </p>
            <div className="capa__botoes">
              <a href="#atlas" className="botao botao--cheio">
                Ver o atlas <span className="seta">↓</span>
              </a>
              <Link href="/caderno/" className="botao">
                Abrir o caderno
              </Link>
            </div>
          </div>

          <ul className="capa__lados ui" aria-label="Os dois lados do site">
            <li className="capa__lado capa__lado--visivel">
              <span className="capa__ponto" aria-hidden="true" /> Visível <span className="suave">· atendimento, formação, pesquisa</span>
            </li>
            <li className="capa__lado capa__lado--simbolico">
              <span className="capa__ponto" aria-hidden="true" /> Simbólico <span className="suave">· arte, sonhos, viagens, caderno</span>
            </li>
          </ul>
        </div>

        <div className="capa__portal">
          <PortalCapa />
        </div>
      </section>

      {/* ── Lado visível ─────────────────────────────────── */}
      <div className="so-visivel">
        <section className="manifesto grade" aria-label="Manifesto">
          <Frase
            como="h2"
            className="manifesto__frase revelar"
            partes={[
              "Entre",
              { img: "viagem-janela", forma: "arco", largura: 1.1 },
              "aquilo que vemos",
              { img: "redon-flower-clouds", forma: "pilula", largura: 1.9 },
              "e tudo",
              { img: "malu-entardecer", forma: "circulo", largura: 1 },
              "aquilo que nos atravessa.",
            ]}
          />
          <p className="manifesto__nota ui revelar">Psicologia, cultura, imagens e as histórias que nos constituem. É daqui que parte a escuta.</p>
        </section>

        <section className="secao" aria-labelledby="h-atendimento">
          <div className="secao-cabeca grade">
            <span className="secao-cabeca__num rotulo">01</span>
            <span className="secao-cabeca__nome chapeu">Atendimento</span>
            <Palavras id="h-atendimento" className="secao-cabeca__titulo" texto="Online, para *todo o Brasil.*" />
          </div>
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
              <dd>Psicologia Analítica (junguiana)</dd>
            </div>
          </dl>
          <div className="grade">
            <Link href="/atendimento/" className="botao fatos__link">
              Temas, abordagem e como começar <span className="seta">→</span>
            </Link>
          </div>
        </section>

        <section className="secao" aria-labelledby="h-quem">
          <div className="secao-cabeca grade">
            <span className="secao-cabeca__num rotulo">02</span>
            <span className="secao-cabeca__nome chapeu">Quem escuta</span>
            <Palavras id="h-quem" className="secao-cabeca__titulo" texto="Do hospital à clínica, *muitos jeitos de escutar.*" />
          </div>
          <div className="quem grade">
            <figure className="quem__foto revelar">
              <Arco>
                <Foto chave="malu-retrato" tamanhos="(max-width: 639px) 75vw, (max-width: 1023px) 45vw, 30vw" />
              </Arco>
            </figure>
            <div className="quem__texto">
              <p className="lead revelar">
                Psicóloga formada pela PUC-SP, especialista em Psicologia Hospitalar pelo Hospital das Clínicas da FMUSP e estudiosa da Psicologia
                Analítica.
              </p>
              <p className="revelar">
                Atende crianças, adolescentes, adultos e idosos. Pelo caminho passou por hospital, escola, instituições e grupos, e cada lugar
                ensinou um jeito de escutar.
              </p>
              <ol className="quem__linha">
                {linhaDoTempo.slice(-3).map((l) => (
                  <li key={l.ano} className="revelar">
                    <span className="quem__ano">{l.ano}</span>
                    <span>{l.texto}</span>
                  </li>
                ))}
              </ol>
              <Link href="/sobre/" className="botao revelar">
                Trajetória completa <span className="seta">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="secao" aria-labelledby="h-pesquisa">
          <div className="secao-cabeca grade">
            <span className="secao-cabeca__num rotulo">03</span>
            <span className="secao-cabeca__nome chapeu">Pesquisa</span>
            <Palavras id="h-pesquisa" className="secao-cabeca__titulo" texto="Onde o mito *encontra a clínica.*" />
          </div>
          <ul className="linhas">
            {pesquisas.map((p) => (
              <li key={p.titulo} className="revelar">
                <Link href="/pesquisas/" className="linha grade">
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
              O que mora deste lado
            </p>
            <Frase
              className="universo__frase revelar"
              partes={[
                "Psicologia,",
                { img: "viagem-museu", forma: "arco", largura: 0.8 },
                "arte, literatura,",
                { img: "manet-reading", forma: "retangulo", largura: 1.1 },
                "cinema, música,",
                { img: "malu-musica", forma: "circulo", largura: 0.95 },
                "sonhos, símbolos,",
                { img: "redon-flower-clouds", forma: "pilula", largura: 1.6 },
                "viagens",
                { img: "viagem-arcos", forma: "arco", largura: 0.8 },
                "e o cotidiano.",
              ]}
            />
          </div>
          <div className="mosaico grade">
            <figure className="mosaico__a revelar">
              <Arco moldura>
                <Foto chave="viagem-passagem" tamanhos="(max-width: 639px) 90vw, (max-width: 1023px) 60vw, 38vw" />
              </Arco>
            </figure>
            <p className="mosaico__texto lead revelar">
              Uma revista sem periodicidade fixa, uma sala com luz amarelada, uma loja de discos com a música alta. O outro lado é feito das coisas
              que despertam curiosidade e vontade de ficar.
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
            <span className="secao-cabeca__nome chapeu">Atlas do inconsciente</span>
            <Palavras id="h-atlas" className="secao-cabeca__titulo" texto="Seis imagens *que Jung reconheceria.*" />
          </div>
          <p className="atlas__nota grade ui">
            <span>
              O Livro Vermelho, em que Jung registrou suas imagens interiores a partir de 1913, é a referência central deste lado do site. Suas
              pinturas não aparecem aqui porque seguem protegidas por direitos autorais: as obras abaixo vêm de acervos abertos e das mesmas fontes que
              Jung estudou, da alquimia às mandalas.
            </span>
          </p>
          <div className="atlas grade">
            {[0, 2, 4].map((inicio, c) => (
              <ol key={c} className={`atlas__coluna atlas__coluna--${c + 1}`} start={inicio + 1}>
                {atlas.slice(inicio, inicio + 2).map((a, k) => {
                  const i = inicio + k;
                  const o = arte[a.obra];
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
            <span className="secao-cabeca__nome chapeu">Se fosse…</span>
            <Palavras id="h-outro" className="secao-cabeca__titulo" texto="Quatro imagens *do outro lado.*" />
          </div>
          <ol className="imagens">
            {outroLado.map((o, i) => (
              <li key={o.pergunta} className={`imagem grade ${i % 2 ? "imagem--inversa" : ""}`}>
                <div className="imagem__arco revelar">
                  <Arco moldura>
                    {o.imagem ? (
                      <Obra chave={o.imagem} tamanhos="(max-width: 639px) 75vw, (max-width: 1023px) 45vw, 30vw" />
                    ) : (
                      <span className="disco" aria-hidden="true">
                        <span className="disco__vinil">
                          <span className="disco__selo" />
                        </span>
                      </span>
                    )}
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
            <span className="secao-cabeca__nome chapeu">Do caderno</span>
            <Palavras id="h-caderno" className="secao-cabeca__titulo" texto="Psicologia, cultura *e cotidiano.*" />
          </div>
          <div className="mesa grade">
            {destaques.map((t, i) => (
              <CartaoTexto key={t.slug} texto={t} indice={i} className="g4" />
            ))}
          </div>
          <div className="grade">
            <Link href="/caderno/" className="botao fatos__link">
              Ver todos os rascunhos <span className="seta">→</span>
            </Link>
          </div>
        </section>

        <section className="secao" aria-labelledby="h-clinica">
          <div className="secao-cabeca grade">
            <span className="secao-cabeca__num rotulo">04</span>
            <span className="secao-cabeca__nome chapeu">Na clínica</span>
            <Palavras id="h-clinica" className="secao-cabeca__titulo" texto="Essas imagens também *entram na sessão.*" />
          </div>
          <div className="ponte grade">
            <p className="ponte__texto lead revelar">
              Mitos, contos, literatura, música, cinema e arte podem entrar na terapia como pontes para aquilo que é difícil dizer de forma direta.
              Sempre como convite, nunca como obrigação.
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
