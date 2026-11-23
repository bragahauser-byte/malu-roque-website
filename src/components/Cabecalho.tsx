"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navegacao, site } from "@/content/site";
import { img } from "@/lib/asset";
import { Estrela } from "./Estrela";

/**
 * Cabeçalho fixo + Sumário (o menu, tratado como o índice de uma revista).
 * No Sumário, ao passar o mouse por um item, a obra correspondente flutua
 * perto do ponteiro. Teclado: Tab percorre, Esc fecha, o foco fica preso no menu.
 */
export function Cabecalho() {
  const rota = usePathname();
  const [aberto, setAberto] = useState(false);
  const [ativo, setAtivo] = useState<number | null>(null);
  const [rolou, setRolou] = useState(false);
  const painel = useRef<HTMLDivElement>(null);
  const botao = useRef<HTMLButtonElement>(null);
  const flutuante = useRef<HTMLDivElement>(null);

  useEffect(() => setAberto(false), [rota]);

  useEffect(() => {
    const aoRolar = () => setRolou(scrollY > 40);
    aoRolar();
    addEventListener("scroll", aoRolar, { passive: true });
    return () => removeEventListener("scroll", aoRolar);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-aberto", aberto);
    if (!aberto) return;
    const p = painel.current!;
    const focaveis = () => [...p.querySelectorAll<HTMLElement>("a, button")];
    requestAnimationFrame(() => focaveis()[1]?.focus());
    const tecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setAberto(false);
        botao.current?.focus();
      }
      if (e.key === "Tab") {
        const f = focaveis();
        const i = f.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey && i <= 0) {
          e.preventDefault();
          f[f.length - 1].focus();
        } else if (!e.shiftKey && i === f.length - 1) {
          e.preventDefault();
          f[0].focus();
        }
      }
    };
    addEventListener("keydown", tecla);
    return () => removeEventListener("keydown", tecla);
  }, [aberto]);

  const moverFlutuante = (e: React.PointerEvent) => {
    const f = flutuante.current;
    if (!f) return;
    f.style.setProperty("--fx", `${e.clientX}px`);
    f.style.setProperty("--fy", `${e.clientY}px`);
  };

  const ehAtual = (href: string) => (href === "/" ? rota === "/" : rota?.startsWith(href.replace(/\/$/, "")));

  return (
    <>
      <a className="pular" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className={`cabecalho ${rolou ? "cabecalho--rolou" : ""} ${aberto ? "cabecalho--aberto" : ""}`}>
        <Link href="/" className="assinatura" aria-label={`${site.nome}, página inicial`}>
          <span className="assinatura__nome">Malu Roque</span>
          <span className="assinatura__sub rotulo">Psicóloga</span>
        </Link>

        <p className="cabecalho__edicao rotulo" aria-hidden="true">
          Edição nº {site.edicao.numero} <Estrela className="cabecalho__estrela" /> {site.edicao.estacao} {site.edicao.ano}
        </p>

        <div className="cabecalho__acoes">
          <Link href="/contato/" className="cabecalho__agendar ui link-linha">
            Agendar
          </Link>
          <button
            ref={botao}
            className="cabecalho__menu ui"
            aria-expanded={aberto}
            aria-controls="sumario"
            onClick={() => setAberto((v) => !v)}
          >
            <span className="cabecalho__menu-texto">{aberto ? "Fechar" : "Sumário"}</span>
            <span className="cabecalho__menu-icone" aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
        </div>
      </header>

      <div
        id="sumario"
        ref={painel}
        className={`sumario ${aberto ? "sumario--aberto" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Sumário"
        aria-hidden={!aberto}
        inert={!aberto}
        onPointerMove={moverFlutuante}
        data-cursor-escuro
      >
        <div className="sumario__luz sumario__luz--1" aria-hidden="true" />
        <div className="sumario__luz sumario__luz--2" aria-hidden="true" />

        <button className="sumario__fechar ui" onClick={() => setAberto(false)}>
          Fechar
        </button>

        <p className="sumario__cabeca rotulo">Sumário · Edição nº {site.edicao.numero}</p>

        <nav aria-label="Principal">
          <ol className="sumario__lista">
            {navegacao.map((item, i) => (
              <li key={item.href} style={{ "--i": i } as React.CSSProperties}>
                <Link
                  href={item.href}
                  className={`sumario__item ${ehAtual(item.href) ? "sumario__item--atual" : ""}`}
                  aria-current={ehAtual(item.href) ? "page" : undefined}
                  onPointerEnter={() => setAtivo(i)}
                  onPointerLeave={() => setAtivo(null)}
                  onFocus={() => setAtivo(i)}
                  onBlur={() => setAtivo(null)}
                >
                  <span className="sumario__num rotulo">{item.numero}</span>
                  <span className="sumario__titulo">{item.titulo}</span>
                  <span className="sumario__sub ui">{item.sub}</span>
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        <div className="sumario__rodape ui">
          {Object.values(site.redes).map((r) => (
            <a key={r.rotulo} href={r.url} target="_blank" rel="noopener noreferrer" className="link-linha">
              {r.rotulo}
            </a>
          ))}
          <span className="sumario__lugar">{site.cidade} · presencial e online</span>
        </div>

        <div ref={flutuante} className="sumario__flutuante" aria-hidden="true">
          {navegacao.map((item, i) => (
            <img key={item.href} src={img(item.imagem, true)} alt="" className={ativo === i ? "ativa" : ""} loading="lazy" />
          ))}
        </div>
      </div>
    </>
  );
}
