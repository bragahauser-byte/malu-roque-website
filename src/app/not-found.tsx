import Link from "next/link";
import { Obra } from "@/components/Obra";

export default function NaoEncontrado() {
  return (
    <section className="nao-encontrado envoltorio">
      <div className="nao-encontrado__img">
        <Obra chave="hokusai-cranes" />
      </div>
      <div>
        <p className="rotulo">Erro 404</p>
        <h1>
          Esta página <em>se perdeu</em> na floresta.
        </h1>
        <p className="lead">Acontece nos melhores contos. O caminho de volta está logo ali.</p>
        <Link href="/" className="botao">
          Voltar à capa <span className="seta">→</span>
        </Link>
      </div>
    </section>
  );
}
