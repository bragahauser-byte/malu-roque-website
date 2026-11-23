import type { Metadata, Viewport } from "next";
import { Gelasio, Montserrat } from "next/font/google";
import { site } from "@/content/site";
import { Cabecalho } from "@/components/Cabecalho";
import { Colofao } from "@/components/Colofao";
import { Cursor } from "@/components/Cursor";
import { Revelador } from "@/components/Revelador";
import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/moldura.css";
import "@/styles/capa.css";
import "@/styles/paginas.css";
import "@/styles/caderno.css";

// Gelasio só é baixada se a Georgia não existir no aparelho (ver tokens.css).
const gelasio = Gelasio({ subsets: ["latin"], weight: ["400", "500", "700"], style: ["normal", "italic"], variable: "--font-gelasio", preload: false, display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-montserrat", display: "swap" });

export const metadata: Metadata = {
  title: { default: `${site.nome} — ${site.conceito}`, template: `%s · ${site.apelido}` },
  description: site.descricao,
  openGraph: { title: `${site.nome} — ${site.conceito}`, description: site.descricao, locale: "pt_BR", type: "website" },
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/icon.svg` },
};

export const viewport: Viewport = { themeColor: "#f7f4f1" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${gelasio.variable} ${montserrat.variable}`}>
      <body>
        <Cabecalho />
        <main id="conteudo">{children}</main>
        <Colofao />
        <div className="grao" aria-hidden="true" />
        <Cursor />
        <Revelador />
      </body>
    </html>
  );
}
