import { comEndereco } from "@/lib/seo";
import { Inicio, metadadosInicio } from "@/paginas/Inicio";

export const metadata = comEndereco(metadadosInicio("pt"), "/");

export default function Pagina() {
  return <Inicio l="pt" />;
}
