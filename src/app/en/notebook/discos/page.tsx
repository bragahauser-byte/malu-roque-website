import { comEndereco } from "@/lib/seo";
import { Discos, metadadosDiscos } from "@/paginas/Especiais";

export const metadata = comEndereco(metadadosDiscos("en"), "/en/notebook/discos/");

export default function Pagina() {
  return <Discos l="en" />;
}
