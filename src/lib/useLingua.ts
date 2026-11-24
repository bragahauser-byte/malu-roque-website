"use client";

import { usePathname } from "next/navigation";
import { linguaDe, tradutor, type Lingua } from "./lingua";

/** O idioma da página atual, para componentes do navegador (vem do endereço). */
export function useLingua(): { l: Lingua; t: ReturnType<typeof tradutor> } {
  const l = linguaDe(usePathname());
  return { l, t: tradutor(l) };
}
