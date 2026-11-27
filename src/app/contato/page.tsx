import { comEndereco } from "@/lib/seo";
import { Contato, metadadosContato } from "@/paginas/Contato";

export const metadata = comEndereco(metadadosContato("pt"), "/contato/");

export default function Pagina() {
  return <Contato l="pt" />;
}
