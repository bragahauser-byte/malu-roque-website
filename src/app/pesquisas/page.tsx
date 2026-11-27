import { comEndereco } from "@/lib/seo";
import { Pesquisas, metadadosPesquisas } from "@/paginas/Pesquisas";

export const metadata = comEndereco(metadadosPesquisas("pt"), "/pesquisas/");

export default function Pagina() {
  return <Pesquisas l="pt" />;
}
