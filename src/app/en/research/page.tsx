import { comEndereco } from "@/lib/seo";
import { Pesquisas, metadadosPesquisas } from "@/paginas/Pesquisas";

export const metadata = comEndereco(metadadosPesquisas("en"), "/en/research/");

export default function Pagina() {
  return <Pesquisas l="en" />;
}
