import type { Metadata, Viewport } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { Gelasio } from "next/font/google";
import { site } from "@/content/site";
import { Cabecalho } from "@/components/Cabecalho";
import { Rodape } from "@/components/Rodape";
import { Revelador } from "@/components/Revelador";
import { asset } from "@/lib/asset";
import { scriptMundo } from "@/lib/mundo";
import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/moldura.css";
import "@/styles/inicio.css";
import "@/styles/paginas.css";
import "@/styles/caderno.css";

// Georgia vem do sistema. A Gelasio (mesmas métricas) só é baixada se ela faltar.
const gelasio = Gelasio({ subsets: ["latin"], weight: ["400", "500", "700"], style: ["normal", "italic"], variable: "--font-gelasio", preload: false, display: "swap" });

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
  icons: { icon: asset("/icon.svg") },
};

export const viewport: Viewport = { themeColor: "#fefaee" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-mundo="visivel" className={gelasio.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptMundo }} />
        {temGotham && <link rel="preload" href={asset("/fonts/gotham/GothamCond-Medium.woff2")} as="font" type="font/woff2" crossOrigin="anonymous" />}
        {temGotham && <style dangerouslySetInnerHTML={{ __html: fontesGotham }} />}
      </head>
      <body>
        <Cabecalho />
        <main id="conteudo">{children}</main>
        <Rodape />
        <Revelador />
      </body>
    </html>
  );
}
