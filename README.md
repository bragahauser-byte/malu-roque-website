# Maria Luiza Roque — entre o visível e o simbólico

Site editorial de **Malu Roque**, psicóloga clínica de orientação junguiana.
Um site com dois lados, o **visível** (atendimento, formação, trajetória,
pesquisa) e o **simbólico** (o imaginário e o caderno). Entre eles, uma janela.

> Primeiro protótipo. Tudo aqui foi feito para ser trocado, ampliado e refinado.

---

## Rodar no seu computador

Precisa do [Node.js](https://nodejs.org) 20 ou mais recente.

```bash
npm install        # instala as dependências (só na primeira vez)
npm run dev        # abre em http://localhost:3333 e recarrega a cada alteração
```

Para conferir a versão final, igual à publicada:

```bash
npm run build      # gera o site estático na pasta out/ (e ajusta os arquivos de pré-carregamento)
npm run preview    # serve a pasta out/ em http://localhost:4173
```

## Onde mexer

| Quero mudar…                               | Arquivo                                   |
| ------------------------------------------ | ----------------------------------------- |
| WhatsApp, redes, CRP, cidade, menu         | `src/content/site.ts`                     |
| Formação, experiências, temas, pesquisas   | `src/content/perfil.ts`                   |
| Textos do Caderno (revista)                | `src/content/caderno.ts`                  |
| Lista de obras/imagens e créditos          | `src/content/arte.ts`                     |
| Texto da capa (os dois lados)              | `src/app/page.tsx` |
| A janela e a passagem entre os mundos      | `src/components/Passagem.tsx`, `src/lib/mundo.ts` |
| O desenho da janela                         | `src/components/Janela.tsx`               |
| Texto das páginas                          | `src/app/<página>/page.tsx`               |
| Cores, fontes, tamanhos, espaçamentos      | `src/styles/tokens.css`                   |
| Cursor desenhado (seta e mão)              | `src/styles/base.css` (bloco "Cursor")    |
| Lado simbólico ("Se fosse…")               | `src/content/perfil.ts` (lista `outroLado`) |

Páginas: `/` início (dois lados) · `/sobre` · `/atendimento` · `/caderno` ·
`/pesquisas` · `/contato`.

### Configurar o WhatsApp

Em `src/content/site.ts`, preencha `whatsapp` só com números, com país e DDD:

```ts
whatsapp: "5511999999999",
```

Enquanto estiver vazio, todos os botões aparecem como
"WhatsApp · número em configuração". A mensagem inicial fica em `mensagemWhatsapp`.

O CRP (06/214718) está no campo `crp` e aparece no cabeçalho da capa, no
Sobre, no Atendimento, no Contato e no rodapé. Ainda falta o **link exato do
LinkedIn** (hoje é uma busca pelo nome).

### Trocar imagens

**Suas fotografias.** Os espaços com listras lilases e a frase "a inserir" são
lugares reservados (componente `FotoPendente`). Coloque as fotos em
`public/img/malu/` (por exemplo `retrato.webp`) e troque o `<FotoPendente … />`
correspondente por:

```tsx
// no topo do arquivo: import { asset } from "@/lib/asset";
<img src={asset("/img/malu/retrato.webp")} alt="Retrato de Maria Luiza Roque" />
```

Eles aparecem na capa, seção "Quem escuta" (`src/app/page.tsx`), e na
abertura da página Sobre (`src/app/sobre/page.tsx`). Para manter o formato
da janela, use `<Janela simples><img … /></Janela>`.

**Obras do acervo.** As imagens ficam em `public/img/arte/<nome>.webp` (1200px)
e `<nome>-p.webp` (640px). Para trocar uma imagem por outra com o mesmo nome,
basta substituir os dois arquivos. Para adicionar uma nova:

1. coloque o original (jpg/png) em `recursos/arte-originais/`;
2. rode `npm run imagens`, que gera as versões WebP leves;
3. registre o nome e os créditos em `src/content/arte.ts`.

A pasta `recursos/` fica fora do Git (é o seu material bruto).

### Publicar um texto no Caderno

Em `src/content/caderno.ts`, cada texto tem `rascunho: true`. Hoje todos são
rascunhos de demonstração, escritos só para testar o layout. Para publicar um
texto de verdade: escreva título, chamada e corpo, mude para `rascunho: false`
e escolha um `formato` (capa, retrato, citacao, disco, postal ou lista).
Cada formato tem uma composição e um hover próprios.

## Publicação

O site é publicado no **GitHub Pages** automaticamente a cada `git push` na
branch `main` (ver `.github/workflows/pages.yml`).

```bash
git add .
git commit -m "Descreva a alteração"
git push
```

Em cerca de 1 minuto a nova versão aparece no ar. O andamento fica na aba
**Actions** do repositório.

> Para usar a Vercel no lugar (ou junto), importe o repositório em
> vercel.com/new: o projeto é Next.js com exportação estática e funciona sem
> configuração extra.

## Tecnologia

- **Next.js 16** (App Router, exportação estática) + **React 19** + **TypeScript**
- CSS próprio, sem framework: tokens em `tokens.css`, um arquivo por área
- Nenhuma biblioteca de animação: o movimento é CSS + alguns `requestAnimationFrame`
- Fontes: **Georgia** (do sistema, com Gelasio como reserva métrica, OFL) e
  **Gotham Condensed** (Hoefler & Co., arquivos locais em `public/fonts/gotham/`)

### A Gotham e o repositório público

Os arquivos da Gotham trazem embutida a licença da Hoefler & Co., que proíbe
distribuí-los ou hospedá-los fora do que a licença web permite. Por isso a
pasta `public/fonts/gotham/` está no `.gitignore`: no seu computador o site
usa a Gotham; no site publicado, enquanto os arquivos não forem enviados, o
texto de interface cai para Arial Narrow ou Helvetica.

Se a licença cobrir uso web: apague a linha `public/fonts/gotham/` do
`.gitignore` e rode `git add public/fonts/gotham && git commit -m "Gotham" && git push`.
O build detecta os arquivos sozinho (`layout.tsx`).

Para colocar a fonte no projeto num computador novo, copie os `.woff2` de
"inspiracao site malu/tipografia gotham" (Light, Book, BookItalic, Medium e
Bold) para `public/fonts/gotham/`.

As decisões de direção de arte estão em [`DIRECAO-DE-ARTE.md`](DIRECAO-DE-ARTE.md).
