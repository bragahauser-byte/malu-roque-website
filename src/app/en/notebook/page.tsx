import { comEndereco } from "@/lib/seo";
import { Caderno, metadadosCaderno } from "@/paginas/Caderno";

export const metadata = comEndereco(metadadosCaderno("en"), "/en/notebook/");

export default function Pagina() {
  return <Caderno l="en" />;
}
