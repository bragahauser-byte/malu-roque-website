import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { especiais, textos } from "@/content/caderno";
import { Obra } from "@/components/Obra";
import { Arco } from "@/components/Arco";
import { arte, creditoObra, type ChaveArte } from "@/content/arte";
import { Palavras } from "@/components/Palavras";
import { CartaoTexto } from "@/components/CartaoTexto";

export const dynamicParams = false;

export function generateStaticParams() {
  return textos.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = textos.find((x) => x.slug === slug);
  return t ? { title: t.titulo, description: t.chamada, robots: t.rascunho ? { index: false } : undefined } : {};
}

export default async function TextoPagina({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = textos.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const t = textos[i];
  const outros = [textos[(i + 1) % textos.length], especiais[i % especiais.length]];

  return (
    <article className="texto-pagina">
      {t.rascunho && (
        <div className="grade"><p className="texto-pagina__aviso ui inteira" role="note">
          <strong>Rascunho de demonstração.</strong> Este texto existe só para testar o layout do caderno e ainda não foi escrito pela autora.
        </p></div>
      )}
      <header className="texto-pagina__cabeca grade">
        <Link href="/caderno/" className="texto-pagina__voltar ui link-linha">
          ← Caderno
        </Link>
        <div className="texto-pagina__meta">
          <span className="rotulo">{t.categoria}</span>
          <span className="ui">{t.leitura} de leitura</span>
        </div>
        <Palavras como="h1" className="texto-pagina__titulo" texto={t.titulo} />
        <p className="texto-pagina__chamada lead revelar">{t.chamada}</p>
      </header>

      <div className="grade">
        {t.imagem in arte && (
          <div className="texto-pagina__figura revelar">
            <Arco>
              <Obra chave={t.imagem as ChaveArte} prioridade tamanhos="(max-width: 1023px) 90vw, 40vw" />
            </Arco>
            <p className="credito">{creditoObra(t.imagem as ChaveArte)}</p>
          </div>
        )}
        <div className="texto-pagina__corpo">
          {t.corpo.map((p, k) => (
            <p key={k} className="revelar">
              {p}
            </p>
          ))}
          {t.lista && (
            <ol className="texto-pagina__lista">
              {t.lista.map((l, k) => (
                <li key={k}>{l}</li>
              ))}
            </ol>
          )}
        </div>
        <div className="texto-pagina__fim ui">
          <span>Malu Roque · Caderno</span>
          <Link href="/contato/" className="link-linha">
            Comentar por mensagem <span className="seta">→</span>
          </Link>
        </div>
      </div>

      <section className="texto-pagina__mais" aria-label="Continue lendo">
        <p className="rotulo envoltorio">Continue folheando</p>
        <div className="mesa grade">
          {outros.map((o, k) => (
            <CartaoTexto key={o.slug} texto={o} indice={k} className="g6" />
          ))}
        </div>
      </section>
    </article>
  );
}
