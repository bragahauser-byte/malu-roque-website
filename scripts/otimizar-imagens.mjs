// Converte as imagens originais (recursos/arte-originais/*.jpg|png) em WebP leves
// para public/img/arte/<nome>.webp (1200px) e <nome>-p.webp (640px).
// Uso: npm run imagens   (ou: node scripts/otimizar-imagens.mjs <pasta-de-origem>)
import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const origem = process.argv[2] ?? "recursos/arte-originais";
const destino = "public/img/arte";
await mkdir(destino, { recursive: true });

for (const arquivo of await readdir(origem)) {
  if (!/\.(jpe?g|png|webp)$/i.test(arquivo)) continue;
  const nome = arquivo.replace(/\.[^.]+$/, "");
  const entrada = path.join(origem, arquivo);
  await sharp(entrada).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(destino, `${nome}.webp`));
  await sharp(entrada).resize({ width: 640, withoutEnlargement: true }).webp({ quality: 74 }).toFile(path.join(destino, `${nome}-p.webp`));
  console.log("✓", nome);
}
