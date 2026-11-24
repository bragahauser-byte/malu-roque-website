// Auditoria da escala de 4 px: lista medidas em px/rem fora dos múltiplos de 4
// (ignora clamp, vw, %, em, linhas de 1-2 px e entrelinhas sem unidade).
// Uso: npm run auditar   (breakpoints em max-width e os sulcos do vinil são exceções esperadas)
const fs = require("fs");
const tol = (px) => Math.abs(px / 4 - Math.round(px / 4)) < 0.01;
let total = 0;
const path = require("path");
const arquivos = process.argv.length > 2 ? process.argv.slice(2) : fs.readdirSync("src/styles").filter((f) => f.endsWith(".css")).map((f) => path.join("src/styles", f));
for (const arq of arquivos) {
  const linhas = fs.readFileSync(arq, "utf8").split("\n");
  linhas.forEach((l, i) => {
    if (/clamp\(|^\s*\/\*|--cursor/.test(l)) return;
    const ruins = [];
    for (const m of l.matchAll(/(-?\d*\.?\d+)(rem|px)\b/g)) {
      const px = m[2] === "rem" ? parseFloat(m[1]) * 16 : parseFloat(m[1]);
      if (Math.abs(px) <= 2 || px === 9999 || px === 999) continue;
      if (!tol(px)) ruins.push(m[0] + "=" + +px.toFixed(2) + "px");
    }
    if (ruins.length) { total++; console.log(`${arq.split(/[\\/]/).pop()}:${i + 1}  ${ruins.join(", ")}`); }
  });
}
console.log("linhas com medidas fora da escala de 4:", total);
