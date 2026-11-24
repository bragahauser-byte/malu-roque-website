"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { equivalente, type Lingua } from "@/lib/lingua";
import { useLingua } from "@/lib/useLingua";

/**
 * TROCA DE IDIOMA — PT | EN, no lugar do antigo botão "O outro lado".
 *
 * Um interruptor em pílula, como os botões do site (contorno de 2 px,
 * Gotham Condensed): o idioma atual fica dentro de um campo de cor cheio que
 * desliza para o outro lado quando se escolhe o outro idioma. A escolha leva
 * à mesma página no outro idioma, com a passagem em arco de sempre (os dois
 * lados são links comuns: funcionam sem JavaScript e com o teclado).
 */
export function TrocaIdioma({ grande = false }: { grande?: boolean }) {
  const { l, t } = useLingua();
  const caminho = usePathname() || "/";
  // o campo de cor se move no clique, antes da troca de página
  const [marcado, setMarcado] = useState<Lingua>(l);
  useEffect(() => setMarcado(l), [l]);

  const outro = equivalente(caminho);
  const opcao = (lingua: Lingua, rotulo: string, nome: string) =>
    lingua === l ? (
      <span className={`idioma__opcao idioma__opcao--${lingua}`} aria-current="true" lang={lingua === "en" ? "en" : "pt-BR"}>
        <span aria-hidden="true">{rotulo}</span>
        <span className="sr-only">{nome}</span>
      </span>
    ) : (
      <Link
        href={outro}
        className={`idioma__opcao idioma__opcao--${lingua}`}
        hrefLang={lingua === "en" ? "en" : "pt-BR"}
        lang={lingua === "en" ? "en" : "pt-BR"}
        onClick={() => setMarcado(lingua)}
      >
        <span aria-hidden="true">{rotulo}</span>
        <span className="sr-only">{nome}</span>
      </Link>
    );

  return (
    <nav className={`idioma idioma--${marcado} ${grande ? "idioma--grande" : ""}`} aria-label={t("Idioma", "Language")}>
      <span className="idioma__campo" aria-hidden="true" />
      {opcao("pt", "PT", "Português")}
      {opcao("en", "EN", "English")}
    </nav>
  );
}
