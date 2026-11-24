# Maria Luiza Roque — entre o visível e o simbólico

Site editorial de **Malu Roque**, psicóloga clínica de orientação junguiana.
Atendimento psicológico online, em português e em inglês, para o Brasil e o mundo. O site existe em português (raiz) e em inglês (`/en/`). Um site com dois lados, o
**visível** (atendimento, formação, trajetória, pesquisa) e o **simbólico**
(arte, sonhos, símbolos, viagens e o caderno). Entre eles, uma passagem.

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

| Quero mudar…                                 | Arquivo                                            |
| -------------------------------------------- | -------------------------------------------------- |
| WhatsApp, mensagem, redes, CRP, cidade, menu | `src/content/site.ts`                              |
| Formação, experiências, temas, pesquisas     | `src/content/perfil.ts`                            |
| Atlas do inconsciente e "Se fosse…"          | `src/content/perfil.ts` (`atlas`, `outroLado`)     |
| Textos e especiais do Caderno                | `src/content/caderno.ts`                           |
| Países, intercâmbios (textos e fotos)        | `src/content/viagens.ts`                           |
| Discos da estante de CDs                     | `src/content/discos.ts`                            |
| Motion (entrada, navegação, retorno)         | `src/components/Passagens.tsx`, `src/styles/motion.css` |
| Obras (créditos, acervo, licença)            | `src/content/arte.ts`                              |
| Fotografias (texto alternativo)              | `src/content/fotos.ts`                             |
| Texto da capa (os dois lados)                | `src/app/page.tsx`                                 |
| A passagem entre os lados                    | `src/components/Passagem.tsx`, `src/lib/mundo.ts`  |
| O arco (moldura sem divisórias)              | `src/components/Arco.tsx`                          |
| Frases com imagens entre as palavras         | `src/components/Frase.tsx`                         |
| Cores, escala tipográfica, espaçamentos      | `src/styles/tokens.css`                            |
| Cursor desenhado (seta e mão)                | `src/styles/base.css` (bloco "Cursor")             |

Páginas: `/` início (dois lados) · `/sobre` · `/atendimento` · `/caderno` (com os
especiais `/caderno/destinos`, `/caderno/intercambios` e `/caderno/discos`) ·
`/pesquisas` · `/contato` · `/creditos`.

### Dados profissionais e contato

Em `src/content/site.ts`:

- `crp`: 06/214718. Aparece na capa, no Sobre, no Atendimento, no Contato e no rodapé.
- `atendimento`: exclusivamente online, em português e em inglês, para o Brasil e o mundo. Não há endereço de
  consultório. Atuação em São Paulo – SP.
- `whatsapp`: 5511999834047.
- `mensagemWhatsapp`: a mensagem pré-preenchida, neutra (a versão em inglês fica em `siteEn`). O link gerado é
  idêntico ao aprovado (`https://wa.me/5511999834047?text=Ol%C3%A1%21%20…`).
- `redes`: Instagram e TikTok @maluroque.psi, e LinkedIn
  linkedin.com/in/maria-luiza-dias-roque.

### Imagens (sempre na melhor resolução disponível)

1. Coloque o original **na maior resolução que tiver** em
   `recursos/arte-originais/` (obras), `recursos/fotos/` (fotografias),
   `recursos/destinos/` (países) ou `recursos/albuns/` (capas).
   Use um nome curto, por exemplo `malu-retrato.jpg`.
2. Rode `npm run imagens`. Ele gera WebP em 640, 1024, 1600 e 2400 px, até a
   largura do original e nunca ampliando, mais o manifesto
   `src/content/imagens.json`.
3. Registre a imagem: obras em `src/content/arte.ts` (com acervo, licença e
   link) e fotos em `src/content/fotos.ts` (com texto alternativo).
4. Use com `<Obra chave="…" />` ou `<Foto chave="…" />`, que montam o `srcset`.
   Para a moldura em arco: `<Arco><Foto chave="…" /></Arco>`.

Recortes servem só para tirar margens de papel e são declarados no próprio
script. Fontes e licenças de tudo: **IMAGENS.md**. A pasta `recursos/` fica
fora do Git.

### Favicon

Os arquivos (`public/favicon.ico`, `favicon-16/32.png`, `icon-192/512.png` e
`apple-touch-icon.png`) são o arquivo enviado pela Malu (`favcon.png`: o arco
creme), sem letra nem acréscimo. Nos ícones do iOS e Android, que exigem fundo
opaco, o arco fica sobre o verde #084E32.

### Auditoria de medidas

`npm run auditar` lista medidas fora da escala de 4 px nas folhas de estilo.

### Publicar um texto no Caderno

Em `src/content/caderno.ts`, cada texto tem `rascunho: true`. Hoje todos são
rascunhos de demonstração, escritos só para testar o layout. Para publicar um
texto de verdade: escreva título, chamada e corpo, mude para `rascunho: false`
e escolha uma `imagem` (chave de obra ou foto) e uma `cor` de fundo para o cartão.
Todos os cartões usam o mesmo componente e a mesma interação.

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

As decisões de direção de arte (grade 12/8/4, espaçamento, cores tipográficas) estão em [`DIRECAO-DE-ARTE.md`](DIRECAO-DE-ARTE.md), o sistema de movimento em [`MOTION.md`](MOTION.md), a pesquisa de referências em [`REFERENCIAS-MOTION.md`](REFERENCIAS-MOTION.md) e as fontes das imagens em [`IMAGENS.md`](IMAGENS.md).

Favicon: `node scripts/gerar-favicon.mjs` (precisa de `recursos/favicon/arco.png`, cópia de `favcon.png`).
