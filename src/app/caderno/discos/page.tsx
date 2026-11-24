import type { Metadata } from "next";
import Link from "next/link";
import { Palavras } from "@/components/Palavras";
import { ColecaoCDs } from "@/components/ColecaoCDs";
import { discos } from "@/content/discos";

export const metadata: Metadata = {
  title: "Uma estante de CDs",
  description: "Discos que fazem parte do repertório de Maria Luiza Roque: Red Hot Chili Peppers, Oasis, Amy Winehouse, Led Zeppelin, The Beatles, Pink Floyd, Lady Gaga e outros, numa só estante.",
};

export default function Discos() {
  return (
    <>
      <section className="abertura grade">
        <p className="abertura__kicker rotulo">
          <Link href="/caderno/" className="link-linha">
            Caderno
          </Link>{" "}
          · Especial · Música
        </p>
        <Palavras como="h1" className="abertura__titulo abertura__titulo--largo" texto="Uma estante|*de CDs*" />
        <div className="abertura__lead">
          <p className="lead revelar">
            Como aquelas coleções que ficavam na estante e eram tiradas da caixa uma de cada vez. Não é um ranking: são discos que fazem parte do
            repertório.
          </p>
          <p className="ui suave revelar">Clique ou toque numa caixa para tirá-la da estante; as setas do teclado percorrem a fileira.</p>
        </div>
      </section>

      <section className="secao" aria-labelledby="h-discos">
        <div className="secao-cabeca grade">
          <span className="secao-cabeca__num rotulo">{String(discos.length).padStart(2, "0")}</span>
          <span className="secao-cabeca__nome chapeu" id="h-discos">
            Discos
          </span>
          <h2 className="secao-cabeca__titulo titulo">
            Uma só <em>coleção</em>
          </h2>
        </div>
        <div className="grade">
          <div className="inteira">
            <ColecaoCDs discos={discos} rotulo="Estante de discos" />
          </div>
        </div>
        <p className="grade creditos__nota ui suave">
          <span>As capas são reproduzidas a partir dos arquivos enviados pela Malu, sem alteração. Os direitos pertencem aos artistas e gravadoras.</span>
        </p>
      </section>

      <section className="secao" aria-label="Continue">
        <div className="grade">
          <div className="continuar">
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
