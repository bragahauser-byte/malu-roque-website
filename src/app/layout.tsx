import type { Metadata, Viewport } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { Barlow_Condensed, Caveat, Gelasio } from "next/font/google";
import { site } from "@/content/site";
import { Cabecalho } from "@/components/Cabecalho";
import { Rodape } from "@/components/Rodape";
import { Revelador } from "@/components/Revelador";
import { Passagens } from "@/components/Passagens";
import { Lembretes } from "@/components/Lembretes";
import { asset } from "@/lib/asset";
import { scriptMundo } from "@/lib/mundo";

/** Idioma: as páginas em /en/ marcam <html lang="en"> antes da pintura (o layout é um só para os dois idiomas). */
const scriptIdioma = `try{var b=${JSON.stringify(process.env.NEXT_PUBLIC_BASE_PATH ?? "")};var p=location.pathname.slice(b.length);if(p==="/en"||p.indexOf("/en/")===0)document.documentElement.lang="en"}catch(e){}`;

/** Entrada (forma → tipografia, ver motion.css): só na primeira página da visita e sem "reduzir movimento". */
const scriptEntrada = `try{if(!sessionStorage.getItem("malu-entrou")&&!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("entrando")}catch(e){}`;
import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/moldura.css";
import "@/styles/inicio.css";
import "@/styles/paginas.css";
import "@/styles/caderno.css";
import "@/styles/especiais.css";
import "@/styles/interacoes.css";
import "@/styles/motion.css";

// Georgia vem do sistema. A Gelasio (mesmas métricas) só é baixada se ela faltar.
const gelasio = Gelasio({ subsets: ["latin"], weight: ["400", "500", "700"], style: ["normal", "italic"], variable: "--font-gelasio", preload: false, display: "swap" });

/**
 * Substituta da Gotham Condensed enquanto a licença web não é confirmada:
 * Barlow Condensed (licença aberta, SIL OFL), a condensada livre mais próxima
 * no desenho e na largura. Só aparece onde a Gotham não está instalada no
 * build (o site publicado); com os arquivos da Gotham, ela nunca é usada.
 */
const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["300", "400", "500", "700"], style: ["normal", "italic"], variable: "--font-condensada", display: "swap" });

/** Letra manuscrita dos post-its (Caveat, SIL OFL). Só é baixada quando o primeiro post-it aparece. */
const caveat = Caveat({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-mao", preload: false, display: "swap" });

/**
 * Gotham Condensed (Hoefler & Co.), arquivos em public/fonts/gotham/.
 * Declarada aqui, e não no CSS, para respeitar o basePath do GitHub Pages.
 * Se os arquivos não estiverem presentes no build, nada é declarado e a
 * pilha cai para Arial Narrow/Helvetica (ver --gotham em tokens.css).
 */
const temGotham = existsSync(join(process.cwd(), "public/fonts/gotham/GothamCond-Medium.woff2"));
const GOTHAM = [
  ["Light", 300, "normal"],
  ["Book", 400, "normal"],
  ["BookItalic", 400, "italic"],
  ["Medium", 500, "normal"],
  ["Bold", 700, "normal"],
] as const;
const fontesGotham = GOTHAM.map(
  ([arquivo, peso, estilo]) =>
    `@font-face{font-family:"Gotham Cond";src:url("${asset(`/fonts/gotham/GothamCond-${arquivo}.woff2`)}") format("woff2");font-weight:${peso};font-style:${estilo};font-display:swap}`,
).join("");

export const metadata: Metadata = {
  title: { default: `${site.nome} — Psicóloga · CRP ${site.crp}`, template: `%s · ${site.apelido}` },
  description: site.descricao,
  openGraph: { title: `${site.nome} — ${site.conceito}`, description: site.descricao, locale: "pt_BR", type: "website" },
  // ?v=6: força o navegador a trocar o favicon antigo (ícones ficam muito tempo em cache)
  manifest: asset("/site.webmanifest"),
  icons: {
    icon: [
      { url: asset("/favicon.ico?v=6"), sizes: "16x16 32x32 48x48" },
      { url: asset("/favicon-32.png?v=6"), sizes: "32x32", type: "image/png" },
      { url: asset("/favicon-16.png?v=6"), sizes: "16x16", type: "image/png" },
      { url: asset("/icon-192.png?v=6"), sizes: "192x192", type: "image/png" },
      { url: asset("/icon-512.png?v=6"), sizes: "512x512", type: "image/png" },
    ],
    apple: { url: asset("/apple-touch-icon.png?v=6"), sizes: "180x180" },
  },
};

export const viewport: Viewport = { themeColor: "#fefaee" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-mundo="visivel" className={`${gelasio.variable} ${barlow.variable} ${caveat.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptMundo + scriptEntrada + scriptIdioma }} />
        {temGotham && <link rel="preload" href={asset("/fonts/gotham/GothamCond-Medium.woff2")} as="font" type="font/woff2" crossOrigin="anonymous" />}
        {temGotham && <style dangerouslySetInnerHTML={{ __html: fontesGotham }} />}
      </head>
      <body>
        <Cabecalho />
        <main id="conteudo">{children}</main>
        <Rodape />
        <Revelador />
        <Passagens />
        <Lembretes />
      </body>
    </html>
  );
}
