"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navegacao } from "@/content/site";

/**
 * MOTION DO SITE — "o arco que atravessa a tela".
 * Uma só linguagem para entrada, navegação, retorno e troca de lado:
 *
 *  · ir para outra página: um arco sobe e cobre a tela (com o nome do
 *    destino), a página troca, e o arco continua subindo e a revela;
 *  · voltar (botão do navegador): o mesmo arco, no sentido inverso (desce);
 *  · entrada no site: o nome aparece e o arco sobe revelando a página
 *    (uma vez por visita; clique ou tecla pulam);
 *  · troca de lado (visível ⇄ simbólico): o arco cresce a partir do portal
 *    (ver lib/mundo.ts).
 *
 * Curto (≈0,4 s para cobrir, ≈0,55 s para revelar), nunca bloqueia o
 * teclado, e é desligado com prefers-reduced-motion.
 */

type Fase = "parado" | "cobrindo" | "coberto" | "revelando" | "voltando";

const COBRIR = 420;
const REVELAR = 560;

function nomeDaRota(caminho: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const p = caminho.replace(base, "") || "/";
  if (p === "/") return "Início";
  if (p.startsWith("/caderno/intercambios")) return "Intercâmbios";
  if (p.startsWith("/caderno/destinos")) return "Destinos";
  if (p.startsWith("/caderno/discos")) return "Discos";
  if (p.startsWith("/creditos")) return "Créditos";
  const item = navegacao.find((n) => p.startsWith(n.href.replace(/\/$/, "")));
  return item?.curto ?? "";
}

export function Passagens() {
  const rota = usePathname();
  const router = useRouter();
  const [fase, setFase] = useState<Fase>("parado");
  const [destino, setDestino] = useState("");
  const esperando = useRef<string | null>(null);
  const reduzido = useRef(false);

  // Entrada: o script do <head> marca html.entrando; aqui só tiramos a marca no fim.
  useEffect(() => {
    const html = document.documentElement;
    if (!html.classList.contains("entrando")) return;
    const fim = () => {
      html.classList.remove("entrando");
      try {
        sessionStorage.setItem("malu-entrou", "1");
      } catch {}
    };
    const t = setTimeout(fim, 1400);
    const pular = () => fim();
    addEventListener("pointerdown", pular, { once: true });
    addEventListener("keydown", pular, { once: true });
    return () => {
      clearTimeout(t);
      removeEventListener("pointerdown", pular);
      removeEventListener("keydown", pular);
    };
  }, []);

  // Links internos: cobre, navega, revela.
  useEffect(() => {
    reduzido.current = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let ultimo = location.pathname;
    const clique = (e: MouseEvent) => {
      if (reduzido.current || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element).closest?.("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname) return; // âncoras na mesma página: rolagem normal
      e.preventDefault();
      ultimo = url.pathname;
      setDestino(nomeDaRota(url.pathname));
      setFase("cobrindo");
      esperando.current = url.pathname;
      window.setTimeout(() => {
        setFase("coberto");
        // o router acrescenta o basePath sozinho: tirar antes de navegar
        const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
        const caminho = base && url.pathname.startsWith(base) ? url.pathname.slice(base.length) || "/" : url.pathname;
        router.push(caminho + url.search + url.hash);
      }, COBRIR);
    };
    const voltar = () => {
      // popstate também dispara em mudanças de âncora (#...): só anima se a página mudou
      if (location.pathname === ultimo) return;
      ultimo = location.pathname;
      if (reduzido.current) return;
      esperando.current = null;
      setFase("voltando");
      window.setTimeout(() => setFase("parado"), REVELAR);
    };
    document.addEventListener("click", clique, true);
    addEventListener("popstate", voltar);
    return () => {
      document.removeEventListener("click", clique, true);
      removeEventListener("popstate", voltar);
    };
  }, [router]);

  // A nova página chegou: revela.
  useEffect(() => {
    if (!esperando.current) return;
    esperando.current = null;
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      setFase("revelando");
      window.setTimeout(() => setFase("parado"), REVELAR);
    });
  }, [rota]);

  // Rede de segurança: se a navegação demorar, revela mesmo assim.
  useEffect(() => {
    if (fase !== "coberto") return;
    const t = setTimeout(() => {
      esperando.current = null;
      setFase("revelando");
      setTimeout(() => setFase("parado"), REVELAR);
    }, 2500);
    return () => clearTimeout(t);
  }, [fase]);

  return (
    <div className={`passagem passagem--${fase}`} aria-hidden="true">
      <span className="passagem__nome">{destino}</span>
    </div>
  );
}
