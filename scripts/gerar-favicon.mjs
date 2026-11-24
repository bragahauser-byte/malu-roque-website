// FAVICON — o M em Gotham Condensed Bold, verde da paleta, sobre o arco creme
// do arquivo enviado (recursos/favicon/arco.png = "favcon.png").
//
//   favicon-16/32.png, favicon.ico (16+32+48)  → fundo transparente
//   icon-192/512.png                           → fundo transparente (navegadores, PWA "any")
//   icon-maskable-512.png, apple-touch-icon    → campo verde cheio (iOS e Android
//                                                recortam o ícone; transparência viraria preto)
//
// Uso: node scripts/gerar-favicon.mjs <caminho do playwright>
// (o Playwright não é dependência do projeto: usa-se o do cache do npx)
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";
import sharp from "sharp";

const pwMod = await import(pathToFileURL(path.join(process.argv[2], "index.js")).href);
const pw = pwMod.chromium ? pwMod : pwMod.default;
const raiz = process.cwd();
const fonte = pathToFileURL(path.join(raiz, "public/fonts/gotham/GothamCond-Bold.woff2")).href;

// o arco do arquivo, recortado justo (sem a área transparente em volta)
const arco = await sharp("recursos/favicon/arco.png").trim({ threshold: 1 }).png().toBuffer();
const { width: aw, height: ah } = await sharp(arco).metadata();
const arcoUrl = `data:image/png;base64,${arco.toString("base64")}`;

const VERDE = "#084e32";

/** fundo: null (transparente) ou cor; escala: altura do arco em relação ao quadrado */
const html = (lado, fundo, escala) => {
  const h = lado * escala;
  const w = (h * aw) / ah;
  return `<!doctype html><html><head><style>
  @font-face { font-family: G; src: url("${fonte}") format("woff2"); font-weight: 700; }
  html, body { margin: 0; width: ${lado}px; height: ${lado}px; background: ${fundo ?? "transparent"}; }
  .a { position: absolute; left: ${(lado - w) / 2}px; top: ${(lado - h) / 2}px; width: ${w}px; height: ${h}px; background: url(${arcoUrl}) center / 100% 100% no-repeat; }
  .m { position: absolute; left: 0; right: 0; top: ${(lado - h) / 2 + h * 0.27}px; height: ${h * 0.66}px; display: grid; place-items: center;
       font: 700 ${h * 0.68}px / 1 G; color: ${VERDE}; letter-spacing: 0; }
  </style></head><body><div class="a"></div><div class="m">M</div></body></html>`;
};

const nav = await pw.chromium.launch();
const pagina = await nav.newPage({ deviceScaleFactor: 1 });
const tmp = path.join(raiz, "out-favicon.html");
async function render(lado, fundo, escala) {
  await pagina.setViewportSize({ width: lado, height: lado });
  await writeFile(tmp, html(lado, fundo, escala));
  await pagina.goto(pathToFileURL(tmp).href);
  await pagina.evaluate(() => document.fonts.ready);
  return pagina.screenshot({ omitBackground: !fundo, type: "png" });
}

await mkdir("public", { recursive: true });
// tamanhos pequenos: renderiza grande e reduz (traço mais limpo que renderizar em 16 px)
const grande = await render(512, null, 0.96);
const reduz = (l) => sharp(grande).resize(l, l, { kernel: "lanczos3" }).png().toBuffer();
const p16 = await reduz(16), p32 = await reduz(32), p48 = await reduz(48);
await writeFile("public/favicon-16.png", p16);
await writeFile("public/favicon-32.png", p32);
await writeFile("public/icon-192.png", await reduz(192));
await writeFile("public/icon-512.png", grande);
await writeFile("public/icon-maskable-512.png", await render(512, VERDE, 0.62)); // área segura de 80%
await writeFile("public/apple-touch-icon.png", await sharp(await render(512, VERDE, 0.7)).resize(180, 180, { kernel: "lanczos3" }).png().toBuffer());

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
await nav.close();
await (await import("node:fs/promises")).rm(tmp);
console.log("favicons gerados");
