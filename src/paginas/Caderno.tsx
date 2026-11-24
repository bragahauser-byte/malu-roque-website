import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Palavras } from "@/components/Palavras";
import { CadernoIndice } from "@/components/CadernoIndice";
import { Etiquetas } from "@/components/Etiquetas";
import { Obra } from "@/components/Obra";
import { Arco } from "@/components/Arco";
import { CartaoTexto } from "@/components/CartaoTexto";
import { arte, creditoObra, type ChaveArte } from "@/content/arte";
import { especiaisEm, nomeCategoria, textos, textosEm } from "@/content/caderno";
import { rota, tradutor, type Lingua } from "@/lib/lingua";

// ── Índice do Caderno ────────────────────────────────────────

export const metadadosCaderno = (l: Lingua): Metadata =>
  l === "en"
    ? {
        title: "Notebook",
        description: "Maria Luiza Roque’s notebook: exchanges, destinations and records, plus drafts on psychology, dreams, books, film and everyday life.",
        openGraph: { locale: "en_US" },
      }
    : {
        title: "Caderno",
        description: "Caderno de Maria Luiza Roque: intercâmbios, destinos e discos, além de rascunhos sobre psicologia, sonhos, livros, cinema e cotidiano.",
      };

export function Caderno({ l }: { l: Lingua }) {
  const t = tradutor(l);
  return (
    <>
      <section className="abertura grade">
        <p className="abertura__kicker rotulo">{t("Caderno · Psicologia, cultura e cotidiano", "Notebook · Psychology, culture and everyday life")}</p>
        <Palavras como="h1" className="abertura__titulo abertura__titulo--mega" texto={t("Caderno", "Notebook")} />
        <div className="abertura__lado abertura__lado--etiquetas revelar">
          <Etiquetas itens={t(["psicologia,", "cultura,", "cotidiano"], ["psychology,", "culture,", "everyday life"])} cores={["var(--rosa)", "var(--amarelo)", "var(--lilas)"]} />
        </div>
        <div className="abertura__lead">
          <p className="lead revelar">
            {t(
              "Uma revista sem periodicidade fixa. Aqui cabem sonhos e símbolos, livros que li e amei, discos, filmes, roteiros de viagem, dicas para o dia a dia e reflexões sobre o mundo.",
              "A magazine with no fixed schedule. There is room here for dreams and symbols, books I have read and loved, records, films, travel notes, everyday tips and reflections on the world.",
            )}
          </p>
          <p className="aviso-rascunho ui revelar">
            <strong>{t("Especiais e rascunhos.", "Specials and drafts.")}</strong>{" "}
            {t(
              "Os três especiais (intercâmbios, destinos e discos) têm conteúdo real. Os demais textos são rascunhos ilustrativos, criados para testar o desenho do caderno, e ainda não são artigos publicados.",
              "The three specials (exchanges, destinations and records) have real content. The other texts are illustrative drafts, created to test the notebook’s design, and are not yet published articles.",
            )}
          </p>
        </div>
      </section>
      <CadernoIndice />
    </>
  );
}

// ── Um texto do Caderno ──────────────────────────────────────

export const paramsTexto = () => textos.map((x) => ({ slug: x.slug }));

export function metadadosTexto(l: Lingua, slug: string): Metadata {
  const x = textosEm(l).find((y) => y.slug === slug);
  return x ? { title: x.titulo, description: x.chamada, robots: x.rascunho ? { index: false } : undefined, openGraph: l === "en" ? { locale: "en_US" } : undefined } : {};
}

export function TextoCaderno({ l, slug }: { l: Lingua; slug: string }) {
  const t = tradutor(l);
  const lista = textosEm(l);
  const esp = especiaisEm(l);
  const i = lista.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const x = lista[i];
  const outros = [lista[(i + 1) % lista.length], esp[i % esp.length]];

  return (
    <article className="texto-pagina">
      {x.rascunho && (
        <div className="grade">
          <p className="texto-pagina__aviso ui inteira" role="note">
            <strong>{t("Rascunho de demonstração.", "Demonstration draft.")}</strong>{" "}
            {t("Este texto existe só para testar o layout do caderno e ainda não foi escrito pela autora.", "This text exists only to test the notebook layout and has not yet been written by the author.")}
          </p>
        </div>
      )}
      <header className="texto-pagina__cabeca grade">
        <Link href={rota(l, "/caderno/")} className="texto-pagina__voltar ui link-linha">
          ← {t("Caderno", "Notebook")}
        </Link>
        <div className="texto-pagina__meta">
          <span className="rotulo">{nomeCategoria(x.categoria, l)}</span>
          <span className="ui">{t(`${x.leitura} de leitura`, `${x.leitura} read`)}</span>
        </div>
        <Palavras como="h1" className="texto-pagina__titulo" texto={x.titulo} />
        <p className="texto-pagina__chamada lead revelar">{x.chamada}</p>
      </header>

      <div className="grade">
        {x.imagem in arte && (
          <div className="texto-pagina__figura revelar">
            <Arco>
              <Obra chave={x.imagem as ChaveArte} prioridade tamanhos="(max-width: 1023px) 90vw, 40vw" />
            </Arco>
            <p className="credito">{creditoObra(x.imagem as ChaveArte, l)}</p>
          </div>
        )}
        <div className="texto-pagina__corpo">
          {x.corpo.map((p, k) => (
            <p key={k} className="revelar">
              {p}
            </p>
          ))}
          {x.lista && (
            <ol className="texto-pagina__lista">
              {x.lista.map((y, k) => (
                <li key={k}>{y}</li>
              ))}
            </ol>
          )}
        </div>
        <div className="texto-pagina__fim ui">
          <span>Malu Roque · {t("Caderno", "Notebook")}</span>
          <Link href={rota(l, "/contato/")} className="link-linha">
            {t("Comentar por mensagem", "Reply by message")} <span className="seta">→</span>
          </Link>
        </div>
      </div>

      <section className="texto-pagina__mais" aria-label={t("Continue lendo", "Keep reading")}>
        <p className="rotulo envoltorio">{t("Continue folheando", "Keep leafing through")}</p>
        <div className="mesa grade">
          {outros.map((o, k) => (
            <CartaoTexto key={o.slug} texto={o} indice={k} className="g6" />
          ))}
        </div>
      </section>
    </article>
  );
}
