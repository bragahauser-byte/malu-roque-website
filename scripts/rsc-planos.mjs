// Pós-build: o Next 16, na exportação estática, grava os dados de pré-carregamento
// em subpastas (ex.: sobre/__next.sobre/__PAGE__.txt), mas o navegador pede o nome
// "achatado" (sobre/__next.sobre.__PAGE__.txt). Sem isso, o GitHub Pages responde 404
// e cada clique vira um carregamento completo. Este script cria as cópias achatadas.
import { readdir, copyFile, stat } from "node:fs/promises";
import path from "node:path";

const raiz = path.resolve("out");
let n = 0;

async function arquivos(dir) {
  const lista = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) lista.push(...(await arquivos(p)));
    else lista.push(p);
  }
  return lista;
}

async function percorrer(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (!e.isDirectory()) continue;
    const p = path.join(dir, e.name);
    if (e.name.startsWith("__next.")) {
      for (const f of await arquivos(p)) {
        const rel = path.relative(p, f).split(path.sep).join(".");
        await copyFile(f, path.join(dir, `${e.name}.${rel}`));
        n++;
      }
    } else {
      await percorrer(p);
    }
  }
}

await stat(raiz);
await percorrer(raiz);
console.log(`rsc-planos: ${n} arquivos de pré-carregamento achatados`);
