import type { Metadata } from "next";
import { Palavras } from "@/components/Palavras";
import { arte, obra, type ChaveArte } from "@/content/arte";
import { destinosEm } from "@/content/viagens";
import { tradutor, type Lingua } from "@/lib/lingua";

export const metadadosCreditos = (l: Lingua): Metadata =>
  l === "en"
    ? { title: "Image credits", description: "Sources, collections and licences of the artworks and photographs used on Maria Luiza Roque’s website.", openGraph: { locale: "en_US" } }
    : { title: "Créditos das imagens", description: "Fontes, acervos e licenças das obras e fotografias usadas no site de Maria Luiza Roque." };

export function Creditos({ l }: { l: Lingua }) {
  const t = tradutor(l);
  const chaves = Object.keys(arte) as ChaveArte[];
  const destinos = destinosEm(l);
  return (
    <>
      <section className="abertura grade">
        <p className="abertura__kicker rotulo">{t("Créditos · Imagens e licenças", "Credits · Images and licences")}</p>
        <Palavras como="h1" className="abertura__titulo" texto={t("De onde vêm|*as imagens*", "Where the images|*come from*")} />
        <div className="abertura__lead">
          <p className="lead">
            {t(
              "As fotografias são de Maria Luiza Roque, usadas sem retoques. As obras vêm de acervos institucionais abertos, em domínio público ou sob licença aberta.",
              "The photographs are by Maria Luiza Roque, used unretouched. The artworks come from open institutional collections, in the public domain or under an open licence.",
            )}
          </p>
          <p className="ui suave">
            {t(
              "Leonora Carrington, Remedios Varo e as pinturas do Livro Vermelho de Jung são referências importantes deste projeto, mas suas obras seguem protegidas por direitos autorais e por isso não são reproduzidas aqui.",
              "Leonora Carrington, Remedios Varo and the paintings of Jung’s Red Book are important references for this project, but their works are still under copyright and are therefore not reproduced here.",
            )}
          </p>
        </div>
      </section>

      <section className="secao" aria-labelledby="h-obras">
        <div className="secao-cabeca grade">
          <span className="secao-cabeca__num rotulo">{chaves.length}</span>
          <span className="secao-cabeca__nome chapeu">{t("Obras", "Artworks")}</span>
          <h2 id="h-obras" className="secao-cabeca__titulo titulo">
            {t("Acervos ", "Collections ")}
            <em>{t("e licenças", "and licences")}</em>
          </h2>
        </div>
        <ul className="linhas">
          {chaves.map((k) => {
            const o = obra(k, l);
            const conteudo = (
              <>
                <span className="creditos__licenca rotulo">{o.licenca}</span>
                <span className="linha__titulo">
                  <em>{o.titulo}</em>, {o.artista} ({o.ano})
                </span>
                <span className="linha__info ui suave">{o.acervo}</span>
                <span className="linha__seta" aria-hidden="true">
                  {o.url ? "↗" : ""}
                </span>
              </>
            );
            return (
              <li key={k}>
                {o.url ? (
                  <a className="linha creditos__linha grade" href={o.url} target="_blank" rel="noopener noreferrer">
                    {conteudo}
                  </a>
                ) : (
                  <div className="linha linha--estatica creditos__linha grade">{conteudo}</div>
                )}
              </li>
            );
          })}
        </ul>
        <p className="grade creditos__nota ui suave">
          <span>
            {t(
              "Rosarium philosophorum: Wellcome Collection, licença Creative Commons Attribution 4.0 (CC BY 4.0). As demais obras: CC0 ou domínio público, conforme indicado por cada acervo.",
              "Rosarium philosophorum: Wellcome Collection, Creative Commons Attribution 4.0 licence (CC BY 4.0). All other works: CC0 or public domain, as stated by each collection.",
            )}
          </span>
        </p>
      </section>
      <section className="secao" aria-labelledby="h-destinos">
        <div className="secao-cabeca grade">
          <span className="secao-cabeca__num rotulo">{destinos.length}</span>
          <span className="secao-cabeca__nome chapeu">{t("Destinos", "Destinations")}</span>
          <h2 id="h-destinos" className="secao-cabeca__titulo titulo">
            {t("Fotografias ", "Photographs ")}
            <em>{t("dos países", "of the countries")}</em>
          </h2>
        </div>
        <ul className="linhas">
          {destinos.map((d) => (
            <li key={d.bandeira}>
              {"propria" in d.credito ? (
                <div className="linha linha--estatica creditos__linha grade">
                  <span className="creditos__licenca rotulo">{t("Própria", "Own")}</span>
                  <span className="linha__titulo">
                    {d.pais}: {d.legenda}
                  </span>
                  <span className="linha__info ui suave">{t("Foto de Maria Luiza Roque", "Photo by Maria Luiza Roque")}</span>
                </div>
              ) : (
                <a className="linha creditos__linha grade" href={d.credito.url} target="_blank" rel="noopener noreferrer">
                  <span className="creditos__licenca rotulo">{d.credito.licenca}</span>
                  <span className="linha__titulo">
                    {d.pais}: {d.legenda}
                  </span>
                  <span className="linha__info ui suave">{d.credito.autor}, Wikimedia Commons</span>
                  <span className="linha__seta" aria-hidden="true">
                    ↗
                  </span>
                </a>
              )}
            </li>
          ))}
        </ul>
        <p className="grade creditos__nota ui suave">
          <span>
            {t(
              "As doze fotografias dos países são de Maria Luiza Roque, usadas sem retoques. As capas de discos da estante de CDs vêm dos arquivos enviados pela Malu; os direitos pertencem aos artistas e gravadoras.",
              "The twelve photographs of the countries are by Maria Luiza Roque, used unretouched. The record covers on the CD shelf come from files provided by Malu; rights belong to the artists and record labels.",
            )}
          </span>
        </p>
      </section>
    </>
  );
}
