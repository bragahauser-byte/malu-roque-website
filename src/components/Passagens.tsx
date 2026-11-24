"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { quadrosDoArco, type Direcao } from "@/lib/arco";

/**
 * MOTION ENTRE PÁGINAS — "a superfície em arco que atravessa a tela".
 *
 * A página nova chega dentro da forma da identidade (laterais retas, topo em
 * semicírculo). Ao AVANÇAR, o arco entra pelo canto inferior direito, sobe em
 * diagonal para a esquerda e se amplia até cobrir a página anterior, que recua
 * um pouco para trás (camadas: a nova sobrepõe a antiga). Ao VOLTAR (botão do
 * navegador ou gesto), o mesmo arco vem espelhado, da esquerda.
 *
 * Técnica: View Transitions API (mesmo documento). O navegador fotografa a
 * página atual, o React troca a rota, e o arco é animado com Web Animations
 * no pseudo-elemento ::view-transition-new(root) — clip-path em px, calculado
 * a partir da tela. Nenhuma biblioteca.
 *
 *  · sem suporte à API: navegação normal, sem animação;
 *  · prefers-reduced-motion: só uma troca de opacidade de 180 ms;
 *  · links externos, nova aba, download, teclas modificadoras e âncoras na
 *    mesma página: comportamento nativo;
 *  · o histórico não muda: o Next continua dono do pushState/popstate.
 */

const DURACAO = 460; // ms — ver --dur-passagem
const CURVA = "cubic-bezier(0.7, 0, 0.16, 1)"; // --ease-passagem
const LIMITE = 1600; // se a rota demorar mais que isso, a passagem termina mesmo assim

export function Passagens() {
  const rota = usePathname();
  const router = useRouter();
  const chegou = useRef<(() => void) | null>(null);
  const ultimo = useRef<string>("");

  // A rota nova foi renderizada: libera a passagem.
  useEffect(() => {
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
    }, 1600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!("startViewTransition" in document)) return;
    const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
    const html = document.documentElement;
    let reemitindo = false;
    let emCurso = false;

    const esperarRota = () =>
      new Promise<void>((resolver) => {
        const t = window.setTimeout(resolver, LIMITE);
        chegou.current = () => {
          window.clearTimeout(t);
          // o efeito roda depois do commit: o DOM novo já está lá. (Não usar
          // requestAnimationFrame aqui: durante a View Transition o navegador
          // suspende os quadros até o callback terminar — travaria.)
          resolver();
        };
      });

    const passar = (atualizar: () => void, direcao: Direcao, topo = false) => {
      const reduzido = matchMedia("(prefers-reduced-motion: reduce)").matches;
      emCurso = true;
      html.classList.add("navegando");
      const t = document.startViewTransition(async () => {
        const pronto = esperarRota();
        atualizar();
        await pronto;
        // página nova começa do topo, sem a rolagem suave do html (a foto "depois" sai já no lugar)
        if (topo) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      });
      t.ready
        .then(() => {
          if (reduzido) {
            html.animate({ opacity: [0, 1] }, { duration: 180, easing: "linear", pseudoElement: "::view-transition-new(root)" });
            return;
          }
          const W = html.clientWidth;
          const H = innerHeight;
          html.animate({ clipPath: quadrosDoArco(W, H, direcao) }, { duration: DURACAO, easing: CURVA, fill: "both", pseudoElement: "::view-transition-new(root)" });
          // a página anterior recua um passo no sentido do movimento e escurece um pouco:
          // como as duas páginas têm o mesmo fundo, é isso que deixa a forma do arco legível
          const dx = direcao === "avancar" ? -3 : 3;
          html.animate(
            { transform: ["none", `translate(${dx}%, -2%) scale(0.985)`], filter: ["brightness(1)", "brightness(0.8)"] },
            { duration: DURACAO, easing: CURVA, fill: "both", pseudoElement: "::view-transition-old(root)" },
          );
        })
        .catch(() => {});
      t.finished.finally(() => {
        html.classList.remove("navegando");
        emCurso = false;
      });
    };

    // Avançar: links internos
    const clique = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element).closest?.("a");
      if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname) return; // âncoras na mesma página: rolagem nativa
      if (base && !url.pathname.startsWith(base)) return; // fora do site
      e.preventDefault();
      if (emCurso) return;
      // o router acrescenta o basePath sozinho: tirar antes de navegar
      const caminho = base ? url.pathname.slice(base.length) || "/" : url.pathname;
      passar(() => router.push(caminho + url.search + url.hash, { scroll: false }), "avancar", !url.hash);
    };

    // Voltar/avançar do navegador. O nosso ouvinte (fase de captura) roda antes do
    // do Next: seguramos o evento, deixamos o navegador fotografar a página atual e
    // só então o reemitimos, com o mesmo state, para o Next trocar a rota.
    const historico = (e: PopStateEvent) => {
      if (reemitindo) return;
      if (location.pathname === ultimo.current) return; // só mudou a âncora (#...)
      e.stopImmediatePropagation();
      const estado = e.state;
      // o botão "avançar" do navegador também usa o gesto espelhado: é movimento pelo histórico
      passar(() => {
        reemitindo = true;
        dispatchEvent(new PopStateEvent("popstate", { state: estado }));
        reemitindo = false;
      }, "voltar");
    };

    // captura: antes do onClick do <Link>, que navegaria sem a passagem
    document.addEventListener("click", clique, true);
    addEventListener("popstate", historico, { capture: true });
    return () => {
      document.removeEventListener("click", clique, true);
      removeEventListener("popstate", historico, { capture: true });
    };
  }, [router]);

  return null;
}
