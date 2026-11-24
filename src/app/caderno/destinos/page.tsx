import type { Metadata } from "next";
import Link from "next/link";
import { Palavras } from "@/components/Palavras";
import { VitrineDestinos } from "@/components/VitrineDestinos";
import { destinos } from "@/content/viagens";

export const metadata: Metadata = {
  title: "Doze países, doze janelas",
  description: "Os países que Maria Luiza Roque já visitou, vistos como pela janela de um avião.",
};

/**
 * DESTINOS — doze países numa vitrine com uma janela de avião por vez
 * (leitura da referência AC Concierge; ver VitrineDestinos.tsx).
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

      <section className="secao" aria-labelledby="h-vitrine">
        <div className="secao-cabeca grade">
          <span className="secao-cabeca__num rotulo">Países</span>
          <span className="secao-cabeca__nome chapeu" id="h-vitrine">
            Pela janela
          </span>
          <p className="secao-cabeca__titulo vitrine__total" aria-label={`${destinos.length} países`}>
            {destinos.length}
          </p>
        </div>
        <div className="grade">
          <div className="inteira">
            <VitrineDestinos destinos={destinos} />
          </div>
        </div>
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
