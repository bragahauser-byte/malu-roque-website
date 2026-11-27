import { comEndereco } from "@/lib/seo";
import { Intercambios, metadadosIntercambios } from "@/paginas/Especiais";

export const metadata = comEndereco(metadadosIntercambios("pt"), "/caderno/intercambios/");

export default function Pagina() {
  return <Intercambios l="pt" />;
}
