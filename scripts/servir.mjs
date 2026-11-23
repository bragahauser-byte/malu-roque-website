// Servidor estático mínimo para conferir o build (pasta out/) sem instalar nada.
// Uso: npm run build && npm run preview  → http://localhost:4173
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const raiz = path.resolve("out");
const porta = Number(process.env.PORT ?? 4173);
const tipos = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg", ".woff2": "font/woff2", ".json": "application/json", ".txt": "text/plain", ".ico": "image/x-icon" };

createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let arquivo = path.join(raiz, p);
  try {
    if ((await stat(arquivo)).isDirectory()) arquivo = path.join(arquivo, "index.html");
  } catch {
    arquivo = path.join(raiz, "404.html");
    res.statusCode = 404;
  }
  try {
    const corpo = await readFile(arquivo);
    res.setHeader("Content-Type", tipos[path.extname(arquivo)] ?? "application/octet-stream");
    res.end(corpo);
  } catch {
    res.statusCode = 404;
    res.end("não encontrado");
  }
}).listen(porta, () => console.log(`Prévia em http://localhost:${porta}`));
