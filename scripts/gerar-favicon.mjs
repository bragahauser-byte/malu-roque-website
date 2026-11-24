// FAVICON — o arquivo enviado pela Malu ("favcon.png", copiado para
// recursos/favicon/arco.png), sem nenhum acréscimo: o arco creme, sem letra.
// O script só recorta a área transparente em volta, centraliza num quadrado e
// gera os tamanhos.
//
//   favicon-16/32.png, favicon.ico (16+32+48)  → fundo transparente
//   icon-192/512.png                           → fundo transparente (navegadores, PWA "any")
//   icon-maskable-512.png, apple-touch-icon    → arco sobre o verde da paleta. iOS e
//                                                Android exigem ícone opaco (transparência
//                                                viraria preto); o arco creme não muda.
//
// Uso: node scripts/gerar-favicon.mjs
import { writeFile, mkdir } from "node:fs/promises";
import sharp from "sharp";

const ORIGEM = "recursos/favicon/arco.png";
const VERDE = { r: 8, g: 78, b: 50, alpha: 1 };
const TRANSPARENTE = { r: 0, g: 0, b: 0, alpha: 0 };

const arco = await sharp(ORIGEM).trim({ threshold: 1 }).png().toBuffer();
const { width: aw, height: ah } = await sharp(arco).metadata();

/** o arco centralizado num quadrado de `lado` px, ocupando `escala` da altura */
async function icone(lado, fundo, escala) {
  const h = Math.round(lado * escala);
  const w = Math.max(1, Math.round((h * aw) / ah));
  const peca = await sharp(arco).resize(w, h, { kernel: "lanczos3" }).png().toBuffer();
  return sharp({ create: { width: lado, height: lado, channels: 4, background: fundo } })
    .composite([{ input: peca, left: Math.round((lado - w) / 2), top: Math.round((lado - h) / 2) }])
    .png()
    .toBuffer();
}

await mkdir("public", { recursive: true });
// 16 px: o arco ocupa a altura toda (cada pixel conta); nos maiores, um respiro mínimo
const p16 = await icone(16, TRANSPARENTE, 1);
const p32 = await icone(32, TRANSPARENTE, 0.94);
const p48 = await icone(48, TRANSPARENTE, 0.94);
await writeFile("public/favicon-16.png", p16);
await writeFile("public/favicon-32.png", p32);
await writeFile("public/icon-192.png", await icone(192, TRANSPARENTE, 0.92));
await writeFile("public/icon-512.png", await icone(512, TRANSPARENTE, 0.92));
await writeFile("public/icon-maskable-512.png", await icone(512, VERDE, 0.58)); // área segura de 80%
await writeFile("public/apple-touch-icon.png", await icone(180, VERDE, 0.66));

// ICO com PNGs embutidos (16, 32, 48)
const imgs = [[16, p16], [32, p32], [48, p48]];
const cab = Buffer.alloc(6 + 16 * imgs.length);
cab.writeUInt16LE(0, 0); cab.writeUInt16LE(1, 2); cab.writeUInt16LE(imgs.length, 4);
let deslocamento = cab.length;
imgs.forEach(([l, b], i) => {
  const o = 6 + 16 * i;
  cab.writeUInt8(l, o); cab.writeUInt8(l, o + 1); cab.writeUInt8(0, o + 2); cab.writeUInt8(0, o + 3);
  cab.writeUInt16LE(1, o + 4); cab.writeUInt16LE(32, o + 6);
  cab.writeUInt32LE(b.length, o + 8); cab.writeUInt32LE(deslocamento, o + 12);
  deslocamento += b.length;
});
await writeFile("public/favicon.ico", Buffer.concat([cab, ...imgs.map(([, b]) => b)]));
console.log(`favicons gerados a partir de ${ORIGEM} (${aw}×${ah} após recorte)`);
