import type { Metadata } from "next";
import { Palavras } from "@/components/Palavras";
import { CadernoIndice } from "@/components/CadernoIndice";
import { Etiquetas } from "@/components/Etiquetas";

export const metadata: Metadata = {
  title: "Caderno",
  description: "Caderno de Malu Roque: psicologia, sonhos, livros, música, cinema, viagens e cotidiano. Textos de demonstração.",
};

export default function Caderno() {
  return (
    <>
      <section className="abertura grade">
        <p className="abertura__kicker rotulo">Caderno · Psicologia, cultura e cotidiano</p>
        <Palavras como="h1" className="abertura__titulo abertura__titulo--mega" texto="Caderno" />
        <div className="abertura__lado abertura__lado--etiquetas revelar">
          <Etiquetas itens={["psicologia,", "cultura,", "cotidiano"]} cores={["var(--rosa)", "var(--amarelo)", "var(--lilas)"]} />
        </div>
        <div className="abertura__lead">
          <p className="lead revelar">
            Uma revista sem periodicidade fixa. Aqui cabem sonhos e símbolos, livros que li e amei, discos, filmes, roteiros de viagem, dicas para
            o dia a dia e reflexões sobre o mundo.
          </p>
          <p className="aviso-rascunho ui revelar">
            <strong>Textos de demonstração.</strong> Os textos abaixo são rascunhos ilustrativos, criados para testar o desenho do caderno. Ainda
            não são artigos publicados.
          </p>
        </div>
      </section>
      <CadernoIndice />
    </>
  );
}
