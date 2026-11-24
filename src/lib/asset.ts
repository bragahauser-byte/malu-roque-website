/** Prefixa caminhos de /public com o basePath (necessário no GitHub Pages). */
export function asset(caminho: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${caminho}`;
}
