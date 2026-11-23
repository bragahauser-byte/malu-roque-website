import type { ChaveArte } from "@/content/arte";

/** Prefixa caminhos de /public com o basePath (necessário no GitHub Pages). */
export function asset(caminho: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${caminho}`;
}

/** URL da obra do acervo. `pequena` usa a versão de 640px. */
export function img(chave: ChaveArte, pequena = false) {
  return asset(`/img/arte/${chave}${pequena ? "-p" : ""}.webp`);
}
