"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  RITMO_PAGINA,
  passar,
  passagemEmCurso,
  prepararChegada,
  pularPassagem,
  suportaPassagem,
  trajetoPagina,
  type Direcao,
} from "@/lib/passagem";
import { pintarBarra } from "@/lib/mundo";
import { langHtml, linguaDe } from "@/lib/lingua";

/**
 * MOTION ENTRE PÁGINAS — "a superfície em arco que atravessa a tela".
 * A coreografia está em lib/passagem.ts; aqui só se decide QUANDO passar.
 *
 *  · AVANÇAR (link interno): o arco entra pelo canto inferior direito e sobe
 *    para a esquerda; VOLTAR/AVANÇAR do navegador: o mesmo gesto, espelhado;
 *  · o histórico continua sendo do Next (nenhum pushState próprio);
 *  · clique durante uma passagem: a passagem em curso termina na hora e a
 *    navegação nova acontece sem animação (nada fica "preso", nada empilha);
 *  · sem suporte à API: navegação normal; "reduzir movimento": opacidade;
 *  · links externos, nova aba, download, teclas modificadoras e âncoras na
 *    mesma página: comportamento nativo.
 */

const LIMITE = 1500; // se a rota demorar mais que isso, a passagem segue mesmo assim

export function Passagens() {
  const rota = usePathname();
  const router = useRouter();
  const chegou = useRef<(() => void) | null>(null);
  const ultimo = useRef<string>("");

  // A rota nova foi aplicada (o efeito roda depois do commit): libera a passagem.
  useEffect(() => {
    // idioma e cor da barra do navegador acompanham cada página
    document.documentElement.lang = langHtml(linguaDe(rota));
    pintarBarra();
    ultimo.current = location.pathname;
    chegou.current?.();
    chegou.current = null;
  }, [rota]);

  // Entrada no site: o script do <head> marca html.entrando; aqui só tiramos a marca no fim.
  useEffect(() => {
    const html = document.documentElement;
    if (!html.classList.contains("entrando")) return;
    const t = setTimeout(() => {
      html.classList.remove("entrando");
      try {
        sessionStorage.setItem("malu-entrou", "1");
      } catch {}
    }, 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!suportaPassagem()) return;
    const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
    let reemitindo = false;

    /** Promessa resolvida quando a rota nova for aplicada (ou no limite). */
    const esperarRota = () =>
      new Promise<void>((resolver) => {
        const t = window.setTimeout(resolver, LIMITE);
        chegou.current = () => {
          window.clearTimeout(t);
          // Não usar requestAnimationFrame aqui: durante a View Transition o
          // navegador suspende os quadros até este callback terminar.
          resolver();
        };
      });

    const superficie = () => getComputedStyle(document.documentElement).getPropertyValue("--campo").trim() || "#084e32";

    const navegar = (ir: () => void, direcao: Direcao, topo: boolean) =>
      passar({
        atualizar: () => {
          const pronto = esperarRota();
          ir();
          return pronto;
        },
        preparar: async () => {
          // página nova começa do topo (sem a rolagem suave do html), já debaixo da passagem
          if (topo) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
          await prepararChegada();
        },
        trajeto: (W, H) => trajetoPagina(W, H, direcao),
        superficie: superficie(),
        ritmo: RITMO_PAGINA,
      });

    const caminhoDe = (url: URL) => (base ? url.pathname.slice(base.length) || "/" : url.pathname) + url.search + url.hash;

    const linkInterno = (alvo: EventTarget | null) => {
      const a = (alvo as Element | null)?.closest?.("a");
      if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download")) return null;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return null;
      if (base && !url.pathname.startsWith(base)) return null;
      return url;
    };

    // Avançar: links internos (fase de captura, antes do onClick do <Link>)
    const clique = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      // Durante uma View Transition o navegador entrega todo clique ao <html>
      // (a página fica "atrás" da animação). Para o clique não se perder:
      // termina a passagem, vê o que está sob o ponteiro e repete o clique ali.
      // (Também logo depois de pular, enquanto as camadas da animação saem.)
      if (e.target === document.documentElement) {
        const { clientX: x, clientY: y } = e;
        if (passagemEmCurso()) pularPassagem();
        requestAnimationFrame(() => {
          const alvo = document.elementFromPoint(x, y);
          if (alvo && alvo !== document.documentElement) alvo.closest<HTMLElement>("a, button")?.click();
        });
        return;
      }
      const url = linkInterno(e.target);
      if (!url || url.pathname === location.pathname) return; // âncoras na mesma página: rolagem nativa
      e.preventDefault();
      const caminho = caminhoDe(url);
      if (passagemEmCurso()) {
        // interação rápida: termina a passagem atual e vai direto, sem animação
        pularPassagem();
        router.push(caminho, { scroll: !url.hash });
        return;
      }
      navegar(() => router.push(caminho, { scroll: false }), "avancar", !url.hash);
    };

    // Pré-carrega a rota quando o ponteiro chega ao link: a passagem começa sem espera.
    const pedidas = new Set<string>();
    const intencao = (e: PointerEvent) => {
      const url = linkInterno(e.target);
      if (!url || url.pathname === location.pathname || pedidas.has(url.pathname)) return;
      pedidas.add(url.pathname);
      router.prefetch(caminhoDe(url).split("#")[0]);
    };

    // Voltar/avançar do navegador. O nosso ouvinte (captura) roda antes do do
    // Next: seguramos o evento, deixamos o navegador fotografar a tela atual e
    // só então o reemitimos, com o mesmo state, para o Next trocar a rota (e
    // restaurar a rolagem daquela página).
    const historico = (e: PopStateEvent) => {
      if (reemitindo) return;
      if (location.pathname === ultimo.current) return; // só mudou a âncora (#...)
      if (passagemEmCurso()) {
        pularPassagem(); // gesto rápido no histórico: o Next segue sem animação
        return;
      }
      e.stopImmediatePropagation();
      const estado = e.state;
      navegar(
        () => {
          reemitindo = true;
          dispatchEvent(new PopStateEvent("popstate", { state: estado }));
          reemitindo = false;
        },
        "voltar",
        false,
      );
    };

    document.addEventListener("click", clique, true);
    document.addEventListener("pointerover", intencao, { capture: true, passive: true });
    document.addEventListener("pointerdown", intencao, { capture: true, passive: true });
    addEventListener("popstate", historico, { capture: true });
    return () => {
      document.removeEventListener("click", clique, true);
      document.removeEventListener("pointerover", intencao, { capture: true });
      document.removeEventListener("pointerdown", intencao, { capture: true });
      removeEventListener("popstate", historico, { capture: true });
    };
  }, [router]);

  return null;
}
