"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navegacao, site } from "@/content/site";
import { BotaoPassagem } from "./Passagem";

/**
 * CABEÇALHO
 * Estudo do cabeçalho da claracandelot.com: poucos itens, bem espaçados,
 * e no hover uma pílula de cor cheia aparece atrás da palavra, que troca
 * de cor. Assinatura à esquerda, menu ao centro, a passagem à direita.
 * Abaixo de 1024px o menu vira uma folha em tela cheia (Esc fecha,
 * foco preso enquanto aberta).
 */
export function Cabecalho() {
  const rota = usePathname();
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);
  const folha = useRef<HTMLDivElement>(null);
  const botao = useRef<HTMLButtonElement>(null);

  useEffect(() => setAberto(false), [rota]);

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
        const l = focaveis();
        const i = l.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey && i <= 0) {
          e.preventDefault();
          l[l.length - 1].focus();
        } else if (!e.shiftKey && i === l.length - 1) {
          e.preventDefault();
          l[0].focus();
        }
      }
    };
    addEventListener("keydown", tecla);
    return () => removeEventListener("keydown", tecla);
  }, [aberto]);

  const ehAtual = (href: string) => rota?.startsWith(href.replace(/\/$/, ""));

  return (
    <>
      <a className="pular" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className={`cabecalho ${rolou ? "cabecalho--rolou" : ""} ${aberto ? "cabecalho--aberto" : ""}`}>
        <div className="cabecalho__barra grade">
          <Link href="/" className="assinatura" aria-label={`${site.nome}, página inicial`}>
            <span className="assinatura__nome">Maria Luiza Roque</span>
            <span className="assinatura__sub">Psicóloga · CRP {site.crp}</span>
          </Link>

          <nav className="menu" aria-label="Principal">
            <ul>
              {navegacao.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className={`menu__item ${ehAtual(n.href) ? "menu__item--atual" : ""}`} aria-current={ehAtual(n.href) ? "page" : undefined}>
                    <span>{n.curto}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button ref={botao} className="cabecalho__abrir" aria-expanded={aberto} aria-controls="folha-menu" onClick={() => setAberto((v) => !v)}>
            <span className="cabecalho__abrir-icone" aria-hidden="true">
              <i />
              <i />
            </span>
            <span className="cabecalho__abrir-texto">{aberto ? "Fechar" : "Menu"}</span>
          </button>

          <div className="cabecalho__acoes">
            <BotaoPassagem />
          </div>
        </div>
      </header>

      <div id="folha-menu" ref={folha} className={`folha ${aberto ? "folha--aberta" : ""}`} role="dialog" aria-modal="true" aria-label="Menu" inert={!aberto}>
        <nav aria-label="Principal (celular)" className="folha__nav">
          <ul>
            <li>
              <Link href="/" className="folha__item">
                <span className="rotulo">00</span> Início
              </Link>
            </li>
            {navegacao.map((n, i) => (
              <li key={n.href}>
                <Link href={n.href} className="folha__item" aria-current={ehAtual(n.href) ? "page" : undefined}>
                  <span className="rotulo">{String(i + 1).padStart(2, "0")}</span> {n.curto}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="folha__rodape ui">
          {Object.values(site.redes).map((r) => (
            <a key={r.rotulo} href={r.url} target="_blank" rel="noopener noreferrer" className="link-linha">
              {r.rotulo}
            </a>
          ))}
          <button className="link-linha" onClick={() => setAberto(false)}>
            Fechar
          </button>
        </div>
      </div>
    </>
  );
}
