# Direção de arte — Malu Roque, edição nº 01

Registro das decisões tomadas no primeiro protótipo, para continuar o projeto
em outras sessões sem perder o fio.

## Conceito

**Entre o visível e o simbólico.** O site é construído em duas camadas, que
aparecem literalmente na capa:

- **O visível**: papel claro (Soft White), tinta grafite, uma rua num dia de
  chuva (Caillebotte). A rotina, a superfície, o que se vê.
- **O simbólico**: a noite azul, luzes difusas, véus iridescentes, as flores-nuvem
  de Redon e uma constelação de palavras (a sereia, o rei e a rainha, um vulcão,
  a casa da infância…). O que se sente.

A lente que segue o cursor é a ideia central do projeto: a mesma página, vista
de outro lugar. Fora da capa, o conceito volta na alternância entre seções
claras (dia) e seções noturnas (o consultório, a abordagem, o rodapé).

Formato editorial: o site é uma **revista independente** com número de edição.
O menu é o **Sumário**, o rodapé é o **Colofão**, a página inicial é a **Capa**,
a apresentação é uma **Carta da edição** e o contato se chama **Correspondência**.

## Referências e o que se aproveitou de cada uma

| Referência | O que foi observado | Como entrou no site |
| --- | --- | --- |
| claracandelot.com | O cursor é um **desenho à mão** aplicado como cursor nativo em imagem (CSS `cursor: image-set(...)`): seta azul com contorno preto e, nos links, uma mãozinha desenhada. Sem atraso, sem JavaScript. Personalidade vem de ilustração, não de efeito. | Cursor nativo desenhado (seta lavanda com contorno de nanquim; nos links vira uma estrela laranja), mais uma camada própria: **a sombra**, um duplo que segue o ponteiro com mola, estica com a velocidade, cresce nos links, mostra palavras ("ler", "virar", "arrastar") e orbita quando o mouse para. |
| camilarosa.net/work | Navegação mínima em 13–14px; filtros como uma frase corrida separada por vírgulas; contador de projetos; alternância grade/lista; no hover a imagem encolhe dentro de uma moldura colorida; no modo lista, títulos enormes. | Índice do Caderno: filtros corridos, contador ("12 rascunhos"), modos **mesa** e **lista**, cartões cuja imagem encolhe num arco sobre a cor no hover, lista com títulos grandes e a imagem flutuando junto ao ponteiro. |
| obama.org | Inspeção do código: as fontes são **Gotham Condensed Bold** (títulos, até 140px), **Gotham Medium** (menu) e **Chronicle Text G1** (serifada da Hoefler&Co., com Georgia como fallback declarado). Lista de programas com pequenos símbolos coloridos (círculo, losango, quadrado). | Par serifada + geométrica. A lista de temas do Consultório usa símbolos coloridos (círculo, losango, quadrado, estrela, meia-lua, gota) como homenagem. |
| Referências visuais (T JAPAN / EiM e as 4 imagens) | Túnel de flores com um portal ciano luminoso; véus translúcidos iridescentes com reflexos; flores no escuro com vazamentos de luz prismáticos; revista com vestido de tule laranja e a palavra "IMAGINE" em letras de cores diferentes. | O **portal** em arco (forma recorrente de molduras); luzes difusas animadas e o véu iridescente da camada simbólica; o laranja-tule e o ciano como acentos; "simbólico" composto letra a letra em cores diferentes, como o "IMAGINE". |
| Paleta anterior (documento "Site Malu") | Smoky Lavender, Soft White, Deep Slate Blue, Mist, Dusty Mauve, Soft Charcoal. | Mantida como base e expandida (abaixo). |

## Tipografia

- **Serifada (títulos, textos, tudo o que tem voz): Georgia.** Usada do próprio
  sistema (Windows, macOS e iOS têm). Onde ela não existe, Android e Linux,
  entra a **Gelasio**, desenhada com as mesmas métricas da Georgia
  (Google Fonts, OFL). A Gelasio só é baixada se a Georgia faltar.
- **Sem serifa (menu, rótulos, legendas, botões): Montserrat**, a alternativa
  livre mais próxima da Gotham (as duas vêm do letreiramento urbano geométrico).
  Pesos 400, 500 e 600. A Gotham é comercial (Hoefler&Co.) e não foi usada.
- Regras: títulos grandes com espaçamento negativo (−0,03 a −0,05em) e
  entrelinha curta (0,88–1); **itálico como gesto expressivo** (palavras-chave,
  hover, estados ativos); rótulos em caixa-alta 11px com espaçamento +0,14em;
  texto corrido em Georgia 17–18px, entrelinha 1,55.
- Escala fluida em `tokens.css` (`--t-mega` até `--t-micro`).

Se no futuro houver orçamento para fontes licenciadas, as trocas naturais são
Chronicle Text ou Georgia Pro na serifada e Gotham na sem serifa. Basta mudar
`--serif` e `--sans` em `tokens.css`.

## Cores

| Token | Hex | Papel |
| --- | --- | --- |
| `--papel` | #F7F4F1 | fundo do visível (Soft White) |
| `--tinta` | #2B2B2B | texto (Soft Charcoal) |
| `--lavanda` | #A79CB8 | cor-assinatura: seleção, faixa, véu de transição, cursor |
| `--lavanda-clara` / `--lavanda-funda` | #D6CFE2 / #6F6488 | apoio e itálicos em destaque |
| `--malva` | #C7B3BE | Dusty Mauve, etiquetas e cartões |
| `--nevoa` | #D9D5D9 | Mist, superfícies neutras |
| `--ardosia` | #465468 | Deep Slate Blue, faixa do consultório na capa |
| `--noite` | #1D2232 | o azul do simbólico, menu e rodapé |
| `--ambar` | #EAA43F | a luz amarelada da sala; acento quente |
| `--tule` | #F0844C | laranja expressivo, pontual (cursor de link, ponto final da capa) |
| `--portal` | #8FD8E2 | ciano luminoso, só no simbólico |
| `--lima` | #DFE57A | acento raríssimo |

Regra prática: lavanda, papel e tinta fazem 80% do trabalho; ardósia e noite
dão profundidade; âmbar, tule, portal e lima aparecem em pequenas doses.

## Elementos gráficos recorrentes

- **O arco/portal**: molduras com topo em semicírculo (capa, Sumário, temas,
  pesquisas, placeholders de foto).
- **Etiquetas empilhadas**: palavras em blocos de cor deslocados em escada
  (inspiradas nas referências de social media da pasta "paleta de cor").
- **A estrela de quatro pontas**: separador, marcador, cursor de link, ícone do site.
- **Grão de papel** sobre tudo, em multiplicação, a 7,5%.

## Movimento

- Entrada de página: um véu lavanda sobe e descobre a página (`template.tsx`).
- Títulos sobem palavra por palavra; imagens se abrem como cortina; blocos
  aparecem ao rolar (`Revelador.tsx`, um único IntersectionObserver).
- Curvas: `--ease-saida` (expo out) para quase tudo.
- Coisas vivas mas discretas: luzes que flutuam, letras de "simbólico" em onda,
  constelação que cintila, estrela do rodapé girando, faixa corrida de interesses.
- **Acessibilidade**: com `prefers-reduced-motion`, tudo fica estático, a lente
  não passeia sozinha e o botão "Ver o outro lado" continua abrindo o simbólico.
  O cursor e a sombra só existem com mouse; no toque, a lente segue o dedo e o
  gabinete vira uma fileira deslizante. Navegação completa por teclado, com foco
  visível, "Pular para o conteúdo" e foco preso no Sumário (Esc fecha).

## Imagens

Todas as obras são de **domínio público**, do acervo aberto do Art Institute of
Chicago (licença CC0). Lista e créditos em `src/content/arte.ts`; os créditos
também aparecem em legenda quando a obra é usada como figura. Destaques:
Odilon Redon (Nuvens de flores, Sita, Natureza-morta com flores, Sereia, Visão
de sonho), Gustave Moreau, Arnold Böcklin, Hokusai, Whistler, Munch, Manet,
Degas, Caillebotte, Volaire (o Vesúvio, para "Do Vulcão ao Guerreiro") e uma
escultura do período Pala com Lakshmi e Sarasvati (para o TCC sobre deusas hindus).

Fotografias da Malu: **pendentes**. Os espaços reservados estão sinalizados.

## O que falta / próximas ideias

- Fotografias pessoais (retrato principal e fotos para o Gabinete).
- Número do WhatsApp, CRP e link exato do LinkedIn (`site.ts`).
- Textos reais do Caderno (os atuais são rascunhos de demonstração).
- PDF do TCC, se ela quiser disponibilizar.
- Uma "playlist da sala" de verdade (link para Spotify) no Gabinete.
- Imagem de compartilhamento (Open Graph) com a capa.
- Domínio próprio, quando fizer sentido.
