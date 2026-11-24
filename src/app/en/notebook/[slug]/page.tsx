import type { Metadata } from "next";
import { TextoCaderno, metadadosTexto, paramsTexto } from "@/paginas/Caderno";

export const dynamicParams = false;
export const generateStaticParams = paramsTexto;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return metadadosTexto("en", (await params).slug);
}

export default async function Pagina({ params }: { params: Promise<{ slug: string }> }) {
  return <TextoCaderno l="en" slug={(await params).slug} />;
}
