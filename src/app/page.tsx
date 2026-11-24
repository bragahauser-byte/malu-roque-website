import Link from "next/link";
import { JanelaCapa } from "@/components/Passagem";
import { Janela, JanelaIcone } from "@/components/Janela";
import { FotoPendente } from "@/components/FotoPendente";
import { CartaoTexto } from "@/components/CartaoTexto";
import { Obra } from "@/components/Obra";
import { Palavras } from "@/components/Palavras";
import { site } from "@/content/site";
import { textos } from "@/content/caderno";
import { linhaDoTempo, outroLado, pesquisas, publico, recursos } from "@/content/perfil";

/**
 * A CAPA tem dois lados. O conteúdo de cada um está no HTML desde o início
 * (bom para busca e para leitores de tela); o CSS mostra só o lado atual
 * (.so-visivel / .so-simbolico). A janela grande é a passagem.
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
              {site.profissao} clínica · CRP {site.crp}
            </p>
            <h1 className="capa__titulo">
              Maria Luiza <em>Roque</em>
            </h1>
            <p className="capa__lead lead">
              Psicoterapia individual, presencial e online, a partir da Psicologia Analítica de C. G. Jung. Um lugar para olhar com cuidado para o
              que aparece na superfície e para o que fala por imagens.
            </p>
            <div className="capa__botoes">
              <Link href="/atendimento/" className="botao botao--cheio">
                Como funciona o atendimento <span className="seta">→</span>
              </Link>
              <Link href="/contato/" className="botao">
                Contato
              </Link>
            </div>
          </div>

          <div className="so-simbolico">
            <p className="rotulo capa__kicker">O outro lado</p>
            <h1 className="capa__titulo">
              O que me <em>atravessa</em>
            </h1>
            <p className="capa__lead lead">
              Sonhos, mitos e contos de fadas. Livros espalhados, discos, cinema independente, flores e viagens. O imaginário que acompanha quem
              escuta, e que também tem lugar no consultório.
            </p>
            <div className="capa__botoes">
              <Link href="/caderno/" className="botao botao--cheio">
                Abrir o caderno <span className="seta">→</span>
              </Link>
              <a href="#outro-lado" className="botao">
                Se fosse um lugar…
              </a>
            </div>
          </div>

          <ul className="capa__lados ui" aria-label="Lados do site">
            <li className="capa__lado capa__lado--visivel">
              <JanelaIcone /> Visível <span className="suave">· atendimento, trajetória, pesquisa</span>
            </li>
            <li className="capa__lado capa__lado--simbolico">
              <JanelaIcone /> Simbólico <span className="suave">· imaginário, caderno</span>
            </li>
          </ul>
        </div>

        <div className="capa__janela">
          <JanelaCapa />
        </div>
      </section>

      {/* ── Lado visível ─────────────────────────────────── */}
      <div className="so-visivel">
        <section className="secao" aria-labelledby="h-atendimento">
          <div className="secao-cabeca grade">
            <span className="secao-cabeca__num rotulo">01</span>
            <span className="secao-cabeca__nome chapeu">Atendimento</span>
            <Palavras id="h-atendimento" className="secao-cabeca__titulo" texto="Um lugar para ser *escutado.*" />
          </div>
          <dl className="fatos grade">
            <div className="fatos__item revelar">
              <dt className="rotulo">Modalidade</dt>
              <dd>Psicoterapia individual</dd>
            </div>
            <div className="fatos__item revelar" style={{ "--atraso": "0.05s" } as React.CSSProperties}>
              <dt className="rotulo">Formato</dt>
              <dd>Presencial e online, conforme disponibilidade</dd>
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
            <div className="quem__foto revelar">
              <FotoPendente rotulo="Retrato de Maria Luiza (a inserir)" />
            </div>
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
        <section className="secao" id="outro-lado" aria-labelledby="h-outro">
          <div className="secao-cabeca grade">
            <span className="secao-cabeca__num rotulo">01</span>
            <span className="secao-cabeca__nome chapeu">Se fosse…</span>
            <Palavras id="h-outro" className="secao-cabeca__titulo" texto="Quatro imagens *do outro lado.*" />
          </div>
          <ol className="imagens">
            {outroLado.map((o, i) => (
              <li key={o.pergunta} className={`imagem grade ${i % 2 ? "imagem--inversa" : ""}`}>
                <div className="imagem__janela revelar">
                  <Janela simples={false} style={{ "--cor-caixilho": "var(--creme)" } as React.CSSProperties}>
                    {o.imagem ? (
                      <Obra chave={o.imagem} />
                    ) : (
                      <span className="disco" aria-hidden="true">
                        <span className="disco__vinil">
                          <span className="disco__selo" />
                        </span>
                      </span>
                    )}
                  </Janela>
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
            <span className="secao-cabeca__num rotulo">02</span>
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
            <span className="secao-cabeca__num rotulo">03</span>
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
