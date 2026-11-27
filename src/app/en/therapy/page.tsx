import { comEndereco } from "@/lib/seo";
import { Atendimento, metadadosAtendimento } from "@/paginas/Atendimento";

export const metadata = comEndereco(metadadosAtendimento("en"), "/en/therapy/");

export default function Pagina() {
  return <Atendimento l="en" />;
}
