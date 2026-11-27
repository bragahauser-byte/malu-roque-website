import { comEndereco } from "@/lib/seo";
import { Caderno, metadadosCaderno } from "@/paginas/Caderno";

export const metadata = comEndereco(metadadosCaderno("pt"), "/caderno/");

export default function Pagina() {
  return <Caderno l="pt" />;
}
