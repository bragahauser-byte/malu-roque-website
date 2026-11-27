import { comEndereco } from "@/lib/seo";
import { Discos, metadadosDiscos } from "@/paginas/Especiais";

export const metadata = comEndereco(metadadosDiscos("pt"), "/caderno/discos/");

export default function Pagina() {
  return <Discos l="pt" />;
}
