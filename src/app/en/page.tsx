import { comEndereco } from "@/lib/seo";
import { Inicio, metadadosInicio } from "@/paginas/Inicio";

export const metadata = comEndereco(metadadosInicio("en"), "/en/");

export default function Pagina() {
  return <Inicio l="en" />;
}
