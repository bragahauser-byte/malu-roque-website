// IMAGENS — dos originais em resolução máxima para WebP responsivo.
//
//   recursos/arte-originais/*.jpg  →  public/img/arte/<chave>-<largura>.webp
//   recursos/fotos/*.jpg           →  public/img/fotos/<chave>-<largura>.webp
//   recursos/destinos/*.jpg        →  public/img/destinos/…   (créditos em recursos/destinos/creditos.json)
//   recursos/albuns/*.jpg|png      →  public/img/albuns/…     (capas originais, sem alteração)
//
// Para cada imagem são geradas várias larguras (até a largura nativa, nunca
// ampliando) e um manifesto (src/content/imagens.json) com dimensões e
// larguras disponíveis. Os componentes montam o srcset a partir dele, então o
// navegador sempre escolhe a versão mais nítida para a tela e a densidade.
//
// Recortes: só para tirar margens de papel ou molduras de digitalização
// (nunca para alterar a obra ou a fotografia). Ficam registrados em RECORTES.
//
// Uso: npm run imagens
import sharp from "sharp";
import { readdir, mkdir, writeFile, rm } from "node:fs/promises";
import path from "node:path";

const LARGURAS = [640, 1024, 1600, 2400];
const QUALIDADE = { arte: 86, fotos: 88, destinos: 86, albuns: 92 };
const ORIGEM = { arte: "recursos/arte-originais", fotos: "recursos/fotos", destinos: "recursos/destinos", albuns: "recursos/albuns" };

/** Recortes em frações da imagem original: [esquerda, topo, direita, base]. */
const RECORTES = {
  "goya-sono-da-razao": [0.235, 0.115, 0.815, 0.745], // só a gravura, sem a margem do papel
  "rosarium-rei-rainha": [0.1, 0.085, 0.825, 0.665], // só a xilogravura, sem o texto da página
  "splendor-solis-sol": [0.155, 0.085, 0.885, 0.855], // a iluminura com sua borda floral
  "bocklin-ilha-dos-mortos": "aparar", // tira a borda preta da digitalização
  "mandala-jnanadakini": "aparar",
  "redon-pandora": "aparar", // tira a faixa preta das laterais
  "redon-pegaso": [0.035, 0.025, 0.968, 0.975], // tira a margem da digitalização
};

const manifesto = {};

for (const tipo of Object.keys(ORIGEM)) {
  const origem = ORIGEM[tipo];
  const destino = `public/img/${tipo}`;
  await rm(destino, { recursive: true, force: true });
  await mkdir(destino, { recursive: true });

  for (const arquivo of (await readdir(origem)).sort()) {
    if (!/\.(jpe?g|png|webp|tiff?)$/i.test(arquivo)) continue;
    const chave = arquivo.replace(/\.[^.]+$/, "");
    let base = sharp(path.join(origem, arquivo)).rotate();
    const recorte = RECORTES[chave];
    if (recorte === "aparar") {
      base = sharp(await base.trim({ threshold: 40 }).toBuffer());
    } else if (recorte) {
      const m = await base.metadata();
      const [e, t, d, b] = recorte;
      base = sharp(await base.extract({ left: Math.round(e * m.width), top: Math.round(t * m.height), width: Math.round((d - e) * m.width), height: Math.round((b - t) * m.height) }).toBuffer());
    }
    const { width: w, height: h } = await base.metadata();
    const larguras = LARGURAS.filter((l) => l < w);
    if (!larguras.length || w <= 2400) larguras.push(Math.min(w, 2400));
    const unicas = [...new Set(larguras)].sort((a, b) => a - b);
    for (const l of unicas) {
      await base
        .clone()
        .resize({ width: l, withoutEnlargement: true })
        .webp({ quality: QUALIDADE[tipo], effort: 6, smartSubsample: true })
        .toFile(path.join(destino, `${chave}-${l}.webp`));
    }
    manifesto[chave] = { pasta: tipo, w, h, larguras: unicas };
    console.log(`✓ ${tipo}/${chave}  ${w}×${h}  →  ${unicas.join(", ")}`);
  }
}

await writeFile("src/content/imagens.json", JSON.stringify(manifesto, null, 1) + "\n");
console.log(`manifesto: ${Object.keys(manifesto).length} imagens`);
