"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navegacao, site } from "@/content/site";
import { rota } from "@/lib/lingua";
import { useLingua } from "@/lib/useLingua";
import { TrocaIdioma } from "./TrocaIdioma";

/**
 * CABEÇALHO (v7)
 * Desktop: o nome à esquerda (Gotham Condensed, sem subtítulo), o menu ao
 * centro (a pílula de cor cheia da claracandelot.com) e, à direita, a troca
 * de idioma PT | EN.
 * Abaixo de 1024 px: só o nome à esquerda e o botão de menu à direita; a
 * troca de idioma vai para dentro da folha do menu (Esc fecha, foco preso
 * enquanto aberta).
 * A troca de lado (visível ⇄ simbólico) saiu do cabeçalho: fica no portal
 * da capa e no rodapé.
 */
export function Cabecalho() {
  const rotaAtual = usePathname();
  const { l, t } = useLingua();
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);
  const folha = useRef<HTMLDivElement>(null);
  const botao = useRef<HTMLButtonElement>(null);

  useEffect(() => setAberto(false), [rotaAtual]);

  useEffect(() => {
    const aoRolar = () => setRolou(scrollY > 8);
    aoRolar();
    addEventListener("scroll", aoRolar, { passive: true });
    return () => removeEventListener("scroll", aoRolar);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-aberto", aberto);
    if (!aberto) return;
    const f = folha.current!;
    const focaveis = () => [...f.querySelectorAll<HTMLElement>("a, button")];
    requestAnimationFrame(() => focaveis()[0]?.focus());
    const tecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setAberto(false);
        botao.current?.focus();
      }
      if (e.key === "Tab") {
        const lista = focaveis();
        const i = lista.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey && i <= 0) {
          e.preventDefault();
          lista[lista.length - 1].focus();
        } else if (!e.shiftKey && i === lista.length - 1) {
          e.preventDefault();
          lista[0].focus();
        }
      }
    };
    addEventListener("keydown", tecla);
    return () => removeEventListener("keydown", tecla);
  }, [aberto]);

  const ehAtual = (href: string) => rotaAtual?.startsWith(rota(l, href).replace(/\/$/, ""));
  const nome = (n: (typeof navegacao)[number]) => (l === "en" ? n.en.curto : n.curto);

  return (
    <>
      <a className="pular" href="#conteudo">
        {t("Pular para o conteúdo", "Skip to content")}
      </a>
      <header className={`cabecalho ${rolou ? "cabecalho--rolou" : ""} ${aberto ? "cabecalho--aberto" : ""}`}>
        <div className="cabecalho__barra grade">
          <Link href={rota(l, "/")} className="assinatura" aria-label={t(`${site.nome}, página inicial`, `${site.nome}, home page`)}>
            <span className="assinatura__nome">Maria Luiza Roque</span>
          </Link>

          <nav className="menu" aria-label={t("Principal", "Main")}>
            <ul>
              {navegacao.map((n) => (
                <li key={n.href}>
                  <Link href={rota(l, n.href)} className={`menu__item ${ehAtual(n.href) ? "menu__item--atual" : ""}`} aria-current={ehAtual(n.href) ? "page" : undefined}>
                    <span>{nome(n)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="cabecalho__acoes">
            <TrocaIdioma />
          </div>

          <button ref={botao} className="cabecalho__abrir" aria-expanded={aberto} aria-controls="folha-menu" onClick={() => setAberto((v) => !v)}>
            <span className="cabecalho__abrir-texto">{aberto ? t("Fechar", "Close") : "Menu"}</span>
            <span className="cabecalho__abrir-icone" aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
        </div>
      </header>

      <div id="folha-menu" ref={folha} className={`folha ${aberto ? "folha--aberta" : ""}`} role="dialog" aria-modal="true" aria-label="Menu" inert={!aberto}>
        <nav aria-label={t("Principal (celular)", "Main (mobile)")} className="folha__nav">
          <ul>
            <li>
              <Link href={rota(l, "/")} className="folha__item">
                <span className="rotulo">00</span> {t("Início", "Home")}
              </Link>
            </li>
            {navegacao.map((n, i) => (
              <li key={n.href}>
                <Link href={rota(l, n.href)} className="folha__item" aria-current={ehAtual(n.href) ? "page" : undefined}>
                  <span className="rotulo">{String(i + 1).padStart(2, "0")}</span> {nome(n)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="folha__idioma">
          <p className="rotulo suave">{t("Idioma", "Language")}</p>
          <TrocaIdioma grande />
        </div>
        <div className="folha__rodape ui">
          {Object.values(site.redes).map((r) => (
            <a key={r.rotulo} href={r.url} target="_blank" rel="noopener noreferrer" className="link-linha">
              {r.rotulo}
            </a>
          ))}
          <button className="link-linha" onClick={() => setAberto(false)}>
            {t("Fechar", "Close")}
          </button>
        </div>
      </div>
    </>
  );
}
