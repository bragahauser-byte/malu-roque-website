import { comEndereco } from "@/lib/seo";
import { Sobre, metadadosSobre } from "@/paginas/Sobre";

export const metadata = comEndereco(metadadosSobre("pt"), "/sobre/");

export default function Pagina() {
  return <Sobre l="pt" />;
}
