import type { Metadata } from "next";
import { Palavras } from "@/components/Palavras";
import { CadernoIndice } from "@/components/CadernoIndice";
import { Etiquetas } from "@/components/Etiquetas";

export const metadata: Metadata = {
  title: "Caderno",
  description: "Caderno de Malu Roque: psicologia, sonhos, livros, música, cinema, viagens e cotidiano. Edição de demonstração.",
};

export default function Caderno() {
  return (
    <>
      <section className="abertura abertura--caderno envoltorio grade">
        <p className="abertura__num rotulo">03 · Caderno</p>
        <Palavras como="h1" className="abertura__titulo abertura__titulo--mega" texto="Caderno" />
        <div className="abertura__etiquetas revelar">
          <Etiquetas itens={["psicologia,", "cultura,", "cotidiano"]} cores={["var(--lavanda)", "var(--ambar)", "var(--portal)"]} />
        </div>
        <div className="abertura__lead revelar">
          <p className="lead">
            Uma revista sem periodicidade fixa. Aqui cabem sonhos e símbolos, livros que li e amei, discos, filmes, roteiros de viagem, dicas
            para o dia a dia e reflexões sobre o mundo.
          </p>
          <p className="aviso-rascunho ui">
            <strong>Edição de demonstração.</strong> Os textos abaixo são rascunhos ilustrativos, criados para testar o desenho do caderno.
            Ainda não são artigos publicados.
          </p>
        </div>
      </section>
      <CadernoIndice />
    </>
  );
}
