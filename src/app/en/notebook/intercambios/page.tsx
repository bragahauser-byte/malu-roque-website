import { comEndereco } from "@/lib/seo";
import { Intercambios, metadadosIntercambios } from "@/paginas/Especiais";

export const metadata = comEndereco(metadadosIntercambios("en"), "/en/notebook/intercambios/");

export default function Pagina() {
  return <Intercambios l="en" />;
}
