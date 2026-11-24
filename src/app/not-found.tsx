import Link from "next/link";
import { Arco } from "@/components/Arco";
import { Obra } from "@/components/Obra";

export default function NaoEncontrado() {
  return (
    <section className="abertura nao-encontrado grade">
      <div className="nao-encontrado__arco">
        <Arco moldura>
          <Obra chave="hokusai-cranes" alt="" />
        </Arco>
      </div>
      <div className="nao-encontrado__texto">
        <p className="rotulo">Erro 404</p>
        <h1 className="abertura__titulo">
          Esta passagem <em>não abre.</em>
        </h1>
        <p className="lead">A página que você procurou não existe (ou mudou de lugar). O caminho de volta está logo ali.</p>
        <Link href="/" className="botao botao--cheio">
          Voltar ao início <span className="seta">→</span>
        </Link>
      </div>
    </section>
  );
}
