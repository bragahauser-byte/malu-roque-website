import { comEndereco } from "@/lib/seo";
import { Destinos, metadadosDestinos } from "@/paginas/Especiais";

export const metadata = comEndereco(metadadosDestinos("en"), "/en/notebook/destinos/");

export default function Pagina() {
  return <Destinos l="en" />;
}
