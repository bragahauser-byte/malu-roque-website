import { comEndereco } from "@/lib/seo";
import { Contato, metadadosContato } from "@/paginas/Contato";

export const metadata = comEndereco(metadadosContato("en"), "/en/contact/");

export default function Pagina() {
  return <Contato l="en" />;
}
