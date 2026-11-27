import { comEndereco } from "@/lib/seo";
import { Sobre, metadadosSobre } from "@/paginas/Sobre";

export const metadata = comEndereco(metadadosSobre("en"), "/en/about/");

export default function Pagina() {
  return <Sobre l="en" />;
}
