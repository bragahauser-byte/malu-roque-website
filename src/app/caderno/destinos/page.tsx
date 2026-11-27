import { comEndereco } from "@/lib/seo";
import { Destinos, metadadosDestinos } from "@/paginas/Especiais";

export const metadata = comEndereco(metadadosDestinos("pt"), "/caderno/destinos/");

export default function Pagina() {
  return <Destinos l="pt" />;
}
