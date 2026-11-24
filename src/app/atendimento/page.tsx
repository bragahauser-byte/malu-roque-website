import { Atendimento, metadadosAtendimento } from "@/paginas/Atendimento";

export const metadata = metadadosAtendimento("pt");

export default function Pagina() {
  return <Atendimento l="pt" />;
}
