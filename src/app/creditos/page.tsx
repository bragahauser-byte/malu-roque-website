import { comEndereco } from "@/lib/seo";
import { Creditos, metadadosCreditos } from "@/paginas/Creditos";

export const metadata = comEndereco(metadadosCreditos("pt"), "/creditos/");

export default function Pagina() {
  return <Creditos l="pt" />;
}
