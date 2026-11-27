import { comEndereco } from "@/lib/seo";
import { Creditos, metadadosCreditos } from "@/paginas/Creditos";

export const metadata = comEndereco(metadadosCreditos("en"), "/en/credits/");

export default function Pagina() {
  return <Creditos l="en" />;
}
