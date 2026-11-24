import type { Metadata } from "next";
import Link from "next/link";
import { Palavras } from "@/components/Palavras";
import { JanelaAviao } from "@/components/JanelaAviao";
import { Bandeira } from "@/components/Bandeira";
import { destinos } from "@/content/viagens";

export const metadata: Metadata = {
  title: "Doze países, doze janelas",
  description: "Os países que Maria Luiza Roque já visitou, vistos como pela janela de um avião.",
};

/**
 * DESTINOS — doze janelas de avião, uma por país.
 * Desktop: coleção em 4 colunas com alturas desencontradas (como as janelas
 * de uma cabine vistas em sequência). Celular: fileira horizontal com encaixe.
 * Cada janela tem a própria fotografia; a legenda descreve só a imagem.
 */
export default function Destinos() {
  return (
    <>
      <section className="abertura grade">
        <p className="abertura__kicker rotulo">
          <Link href="/caderno/" className="link-linha">
            Caderno
          </Link>{" "}
          · Especial · Viagens
        </p>
        <Palavras como="h1" className="abertura__titulo abertura__titulo--largo" texto="Doze países,|*doze janelas*" />
        <div className="abertura__lead">
          <p className="lead revelar">
            Inglaterra, Dinamarca, Itália, Bélgica, Holanda, Mônaco, Vaticano, Marrocos, França, Alemanha, Malta e Áustria. Os países por onde já
            passei, vistos como pela janela de um avião: um recorte de cada lugar, sem roteiro.
          </p>
          <p className="ui suave revelar">
            Inglaterra e Itália: fotos minhas. Os demais: fotografias do Wikimedia Commons, com autoria e licença em cada janela.
          </p>
        </div>
      </section>

      <section className="secao" aria-label="Destinos">
        <ol className="destinos grade">
          {destinos.map((d, i) => (
            <li key={d.pais} className={`destino destino--${(i % 4) + 1} revelar`} style={{ "--atraso": `${(i % 4) * 0.06}s` } as React.CSSProperties}>
              <figure>
                <JanelaAviao imagem={d.imagem} alt={d.legenda} />
                <figcaption className="destino__legenda">
                  <span className="destino__linha">
                    <span className="rotulo destino__n">{String(i + 1).padStart(2, "0")}</span>
                    <Bandeira pais={d.bandeira} className="destino__bandeira" />
                  </span>
                  <span className="destino__pais">{d.pais}</span>
                  <span className="destino__descricao">{d.legenda}</span>
                  <span className="credito destino__credito">
                    {"propria" in d.credito ? (
                      "Foto: Maria Luiza Roque"
                    ) : (
                      <a href={d.credito.url} target="_blank" rel="noopener noreferrer" className="link-linha">
                        {d.credito.autor}, {d.credito.licenca}
                      </a>
                    )}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ol>
        <p className="destinos__dica ui suave grade">
          <span>Deslize para o lado para ver todas as janelas.</span>
        </p>
      </section>

      <section className="secao" aria-label="Continue">
        <div className="grade">
          <div className="continuar">
          <Link href="/caderno/intercambios/" className="botao">
            Os dois intercâmbios: Londres e Milão <span className="seta">→</span>
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
