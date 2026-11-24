import { Discos, metadadosDiscos } from "@/paginas/Especiais";

export const metadata = metadadosDiscos("en");

export default function Pagina() {
  return <Discos l="en" />;
}
