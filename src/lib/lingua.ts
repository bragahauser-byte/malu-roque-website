/**
 * OS DOIS IDIOMAS — português (padrão, na raiz) e inglês (em /en/).
 *
 * Cada página existe nos dois idiomas, com o mesmo conteúdo. As rotas em
 * inglês têm nomes em inglês (/en/about/, /en/therapy/…); as páginas
 * internas do Caderno mantêm o mesmo endereço depois do prefixo
 * (/caderno/discos/ ⇄ /en/notebook/discos/).
 *
 * O controle PT | EN do cabeçalho leva sempre à página equivalente.
 */

export type Lingua = "pt" | "en";

/** pares de prefixos: português → inglês (do mais específico ao mais geral) */
const PARES: [string, string][] = [
  ["/sobre/", "/en/about/"],
  ["/atendimento/", "/en/therapy/"],
  ["/caderno/", "/en/notebook/"],
  ["/pesquisas/", "/en/research/"],
  ["/contato/", "/en/contact/"],
  ["/creditos/", "/en/credits/"],
];

const comBarra = (c: string) => (c.endsWith("/") ? c : c + "/");

/** Idioma de um caminho (sem o basePath). */
export function linguaDe(caminho: string | null | undefined): Lingua {
  return caminho === "/en" || caminho?.startsWith("/en/") ? "en" : "pt";
}

/** Endereço de uma página no idioma pedido, a partir do endereço em português. */
export function rota(l: Lingua, pt: string): string {
  if (l === "pt" || !pt.startsWith("/")) return pt;
  const [caminho, resto = ""] = pt.split(/(?=[#?])/);
  if (caminho === "/") return "/en/" + resto;
  for (const [p, e] of PARES) if (comBarra(caminho).startsWith(p)) return e + comBarra(caminho).slice(p.length) + resto;
  return "/en" + caminho + resto;
}

/** A mesma página no outro idioma. */
export function equivalente(caminho: string): string {
  const c = comBarra(caminho || "/");
  if (linguaDe(c) === "pt") return rota("en", c);
  if (c === "/en/") return "/";
  for (const [p, e] of PARES) if (c.startsWith(e)) return p + c.slice(e.length);
  return c.slice(3) || "/";
}

/** Escolhe o texto do idioma: t("Olá", "Hello"). */
export const tradutor = (l: Lingua) => <T,>(pt: T, en: T): T => (l === "en" ? en : pt);

/** Atributo lang do <html>. */
export const langHtml = (l: Lingua) => (l === "en" ? "en" : "pt-BR");
