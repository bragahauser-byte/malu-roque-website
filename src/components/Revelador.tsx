"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Observa elementos com .revelar, .palavras e .cortina e adiciona .visto
 * quando entram na tela. Montado uma vez no layout; refaz a busca a cada rota.
 */
export function Revelador() {
  const rota = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("js");
    const io = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) {
            e.target.classList.add("visto");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const observar = () =>
      document.querySelectorAll(".revelar:not(.visto), .palavras:not(.visto), .cortina:not(.visto)").forEach((el) => io.observe(el));

    observar();
    const mo = new MutationObserver(observar);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [rota]);

  return null;
}
