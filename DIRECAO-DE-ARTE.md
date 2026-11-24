# Direção de arte — Malu Roque

Registro das decisões do projeto, para continuar o trabalho em outras sessões
sem perder o fio. **Versão 2** (revisão de direção criativa, novembro de 2026).

## Conceito

**Um site que funciona como uma janela para dois universos.**

- **O visível**: quem é Maria Luiza Roque, como atende, a formação, a trajetória,
  a pesquisa. Fundo creme, texto preto.
- **O simbólico**: o imaginário. Sonhos, mitos, livros, discos, cinema, viagens,
  o caderno. Fundo verde, texto creme, destaques em amarelo.

A passagem entre os dois é **uma janela**. Não há esferas, véus ou fundos que
mudam sozinhos: o site está parado até a pessoa decidir atravessar.

### A passagem (como foi escolhida)

Ideias consideradas: virar a página (bonito, mas já virou clichê de "revista
digital"), abrir cortinas (teatral demais), deslizar painéis (genérico de
aplicativo), **atravessar uma janela**. A janela venceu porque:

1. é arquitetura (a referência europeia pedida e o arco da Camicado);
2. é também a janelinha de avião da AC Concierge: olhar para outro lugar, viajar;
3. tem uma lógica visual clara: **a janela sempre mostra o outro lado**. No
   visível, o vidro deixa ver o verde do simbólico e as flores-nuvem de Redon;
   no simbólico, deixa ver o creme do visível e a rua de Caillebotte;
4. a transição é literal e curta: o arco clicado cresce até virar a tela
   inteira (0,82 s, uma vez, View Transitions API). Clicar de novo, volta.

Onde está: a janela grande da capa (com a legenda "Atravessar a janela") e o
botão "O outro lado" no cabeçalho, em todas as páginas. O lado escolhido é
lembrado durante a visita. Com "reduzir movimento", a troca é imediata.

O que muda de um lado para o outro: as cores do site inteiro e o conteúdo da
capa (visível: atendimento, quem escuta, pesquisa; simbólico: "Se fosse…",
caderno, a ponte com a clínica). O texto do lado simbólico vem das respostas
da Malu no documento "Site Malu" (se fosse um lugar, uma loja, um universo,
uma experiência).

## A janela como identidade

Arco romano: topo em semicírculo, laterais retas, **caixilho em linha fina**
(moldura, montante central e travessa exatamente na nascença do arco). É o
símbolo do site: aparece como marca no cabeçalho, como passagem na capa, como
moldura das obras e das fotos, e como ícone dos dois lados.
Componente: `src/components/Janela.tsx` (`<Janela>` e `<JanelaIcone>`).
Na miniatura, o vidro tem sempre a cor do outro lado.

## Referências e o que se aproveitou de cada uma

| Referência | O que foi observado | Como entrou |
| --- | --- | --- |
| claracandelot.com (cursor) | Inspecionado no código: `cursor: image-set(url(...) 1x, url(...) 2x)` com duas imagens PNG de 100 px desenhadas à mão: uma seta azul gorducha com contorno marrom-escuro e, nos links, uma mãozinha. Nativo, sem atraso, sem JavaScript, sem nada seguindo o mouse. | Mesma lógica: **um único cursor nativo** em SVG (1x e 2x), seta rosa com contorno preto grosso e, sobre links e botões, uma mão amarela apontando. 34 px. Só com mouse. A "sombra" da versão anterior foi removida. |
| claracandelot.com (cabeçalho) | Três itens centrais, minúsculos e em negrito; no hover, uma pílula de cor cheia surge atrás da palavra e o texto troca de cor. | Menu central em Gotham Condensed Medium caixa-alta; no hover a pílula (rosa no visível, amarela no simbólico) cresce do centro em 0,28 s e o texto vira preto/verde. Página atual: pílula em contorno. |
| Camicado | O arco como forma central da composição (foto em arco no meio da tela, texto pequeno ao lado); creme quente; serifada + sem serifa; cartões de cor chapada. | O arco virou a janela; fundo creme; composição com a janela como peça central da capa. |
| AC Concierge | Janelas de avião (retângulos de cantos muito redondos) emoldurando paisagens; réguas finas; índices "01 — 04"; números grandes; muito respiro; pílulas pequenas. | A ideia de viagem como passagem; réguas finas em todas as listas; numeração "01, 02, 03" nas seções; anos grandes em Gotham Light; pílulas de contorno para palavras-chave. |
| obama.org | Inspecionado no código: **Gotham Condensed Bold** nos títulos (caixa-alta), **Gotham Medium** no menu e **Chronicle Text G1** (Hoefler&Co.) no texto, com Georgia como fallback declarado. Réguas pretas grossas sobre cada seção. Lista de programas com símbolos de cor. | Georgia (voz editorial) + Gotham Condensed (interface). Régua grossa de 3 px sobre cada seção. Os símbolos de cor da lista de temas. |
| Paleta: imagem 4162 | Verde-garrafa de fundo, cartões creme, etiquetas rosa, amarela e lilás empilhadas em escada, texto preto. | Paleta inteira medida em pixels da imagem (abaixo). As etiquetas empilhadas continuam no Caderno. |

## Tipografia

- **Georgia**: títulos com caráter literário, texto corrido, citações, frases
  de destaque. Do sistema (Windows, macOS, iOS). Onde falta (Android, Linux),
  entra a **Gelasio**, que tem as mesmas métricas.
- **Gotham Condensed** (Hoefler & Co.), da pasta "tipografia gotham": menu,
  botões, rótulos, legendas, categorias, dados, pequenos títulos.
  - Pesos usados: Light 300 (anos e números grandes), Book 400 (legendas e
    interface), Book Italic 400, Medium 500 (menu, botões, rótulos) e Bold 700
    (pequenos títulos em caixa-alta, `.chapeu`).
  - Formato: WOFF2, em `public/fonts/gotham/`, declarado em `layout.tsx`.
  - **A pasta só tem Gotham _Condensed_** (18 estilos). A Gotham de largura
    normal não está lá. A Condensed é justamente a que a Obama Foundation usa
    nos títulos, então combina com a referência.
- **Montserrat foi removida.**
- Regras:
  - títulos em Georgia com espaçamento negativo (−0,02 a −0,045em);
  - itálico como gesto (a segunda metade dos títulos);
  - rótulos em Gotham 13 px caixa-alta, +0,07em;
  - menu e botões em Gotham Medium 15 px, +0,06em.

**Licença da Gotham.** Os arquivos trazem embutida a licença da Hoefler & Co.,
que proíbe distribuir a fonte ou hospedá-la fora do que a licença web permite.
Por isso `public/fonts/gotham/` está no `.gitignore`. No computador, a Gotham
aparece. No site publicado, enquanto os arquivos não forem enviados, o
cabeçalho usa a reserva (Arial Narrow ou Helvetica). Para publicar com Gotham:
confirmar que a licença cobre uso web, tirar a linha do `.gitignore`, fazer
commit e push.

## Cores

Medidas na imagem `paleta de cor/image 4162.jpg`.

| Token | Hex | Papel |
| --- | --- | --- |
| `--creme` | #FEFAEE | fundo do visível; texto do simbólico |
| `--creme-2` | #F4EDDB | blocos, fichas, espaços de foto |
| `--verde` | #084E32 | fundo do simbólico; banda de destaque e rodapé no visível |
| `--rosa` | #F897F0 | destaque principal (hover do menu e dos botões, etiquetas) |
| `--amarelo` | #F0CE5B | destaque no simbólico; avisos de rascunho |
| `--preto` | #0C0D08 | texto do visível; rodapé do simbólico |
| `--lilas` | #B8B7FB | apoio raro (etiquetas, fundos de cartão) |
| `--menta` | #5CEDA0 | reservado; raríssimo |

Papéis por mundo (`tokens.css`): `--fundo`, `--texto`, `--destaque`,
`--sobre-destaque`, `--campo` (banda de cor), `--regua`, `--linha`.

Contraste (WCAG):

| Combinação | Contraste | Uso |
| --- | --- | --- |
| Preto sobre creme | 18:1 | |
| Creme sobre verde | 9,3:1 | |
| Preto sobre rosa | 9,8:1 | |
| Amarelo sobre verde | 6,4:1 | |
| Rosa sobre verde | 4,9:1 | só em textos grandes |
| Rosa ou amarelo sobre creme | | **nunca como texto**, só como campo |

Combinações recomendadas: creme + preto + rosa (visível); verde + creme +
amarelo (simbólico); verde + creme (bandas); preto + creme + amarelo (rodapé
do simbólico).

**Sem gradientes.** Só campos de cor sólidos e réguas. O vinil do caderno é
feito com anéis sólidos, sem degradê.

## Grade

12 colunas no desktop, 6 no tablet (< 1024 px), 4 no celular (< 640 px).
Margem lateral fluida (`--margem`, 20–56 px), calha de 14–24 px, largura
máxima de 1680 px. Classe `.grade` em `base.css`.

Dois eixos: **coluna 1** (rótulos, títulos, imagens) e **coluna 7**
(títulos de seção, textos que acompanham uma imagem). Toda seção abre igual:
régua grossa, número na coluna 1, nome em Gotham Bold na coluna 2 e título
em Georgia na coluna 7. A assimetria vem de alternar imagem e texto entre os
dois eixos (Pesquisa, "Se fosse…"), nunca de posições arbitrárias.

## Movimento

Regra: **todo movimento responde a um gesto ou acontece uma vez**.

- A passagem entre os mundos (clique) é a única transição grande.
- Hover: a pílula do menu e dos botões; a janela da capa abre um pouco o arco
  interno; nos cartões do caderno, a imagem se recolhe numa janela, o vinil
  sai da capa, o postal vira.
- Ao rolar: os blocos aparecem uma vez, com 16 px de subida.
- Removido da versão anterior:
  - a lente/esfera que passeava pela capa;
  - as luzes flutuantes e o véu iridescente;
  - a constelação piscando;
  - a faixa corrida;
  - a estrela girando;
  - o véu de transição entre páginas;
  - a "sombra" do cursor;
  - a imagem que seguia o mouse nas listas;
  - os títulos que subiam palavra por palavra;
  - o grão sobre a tela.
- Com `prefers-reduced-motion`, nada se mexe e a passagem é imediata.
- Verificado no navegador: nenhuma animação infinita, nenhum gradiente nas folhas de estilo.

## Imagens

Obras em domínio público do Art Institute of Chicago (CC0), listadas com
créditos em `src/content/arte.ts`. Fotografias da Malu: **pendentes** (os
espaços em arco com "a inserir").

## Ideia separada (não implementada): sazonalidade

A "Edição nº 01 — Primavera 2026" foi retirada, porque não havia nenhuma
publicação sazonal por trás dela. Se um dia fizer sentido, a sazonalidade
poderia mudar **o que se vê pela janela**, sem mexer na estrutura do site:

- primavera: flores de Redon;
- verão: o mar de Böcklin;
- outono: folhas e fim de tarde;
- inverno: as grous na neve de Hokusai.

O destaque mudaria junto (rosa, amarelo, âmbar, lilás). Isso só vale se vier
acompanhado de conteúdo sazonal de verdade no Caderno.

## Pendências

- Fotografias pessoais (retrato principal e foto da capa do lado visível).
- Número do WhatsApp e link exato do LinkedIn (`src/content/site.ts`).
- Confirmar a licença web da Gotham antes de publicá-la.
- Textos reais do Caderno (os atuais são rascunhos de demonstração).
- PDF do TCC, se ela quiser disponibilizar.
