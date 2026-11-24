import Link from "next/link";
import { Arco } from "@/components/Arco";
import { Obra } from "@/components/Obra";

/** 404: uma só página para os dois idiomas (o GitHub Pages serve o mesmo arquivo para qualquer endereço). */
export default function NaoEncontrado() {
  return (
    <section className="abertura nao-encontrado grade">
      <div className="nao-encontrado__arco">
        <Arco>
          <Obra chave="hokusai-cranes" alt="" />
        </Arco>
      </div>
      <div className="nao-encontrado__texto">
        <p className="rotulo">Erro 404 · Error 404</p>
        <h1 className="abertura__titulo">
          Esta passagem <em>não abre.</em>
        </h1>
        <p className="lead">A página que você procurou não existe (ou mudou de lugar). O caminho de volta está logo ali.</p>
        <p className="lead" lang="en">
          This passage doesn’t open: the page you were looking for doesn’t exist, or has moved.
        </p>
        <div className="nao-encontrado__botoes">
          <Link href="/" className="botao botao--cheio">
            Voltar ao início <span className="seta">→</span>
          </Link>
          <Link href="/en/" className="botao" lang="en" hrefLang="en">
            Back to the start <span className="seta">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
