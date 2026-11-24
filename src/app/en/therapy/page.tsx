import { Atendimento, metadadosAtendimento } from "@/paginas/Atendimento";

export const metadata = metadadosAtendimento("en");

export default function Pagina() {
  return <Atendimento l="en" />;
}
