import { comEndereco } from "@/lib/seo";
import { Atendimento, metadadosAtendimento } from "@/paginas/Atendimento";

export const metadata = comEndereco(metadadosAtendimento("pt"), "/atendimento/");

export default function Pagina() {
  return <Atendimento l="pt" />;
}
