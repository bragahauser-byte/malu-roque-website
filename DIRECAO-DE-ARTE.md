# Direção de arte — Maria Luiza Roque

Registro das decisões do projeto, para continuar o trabalho em outras sessões
sem perder o fio. **Versão 4** (viagens, música, intercâmbios e motion, novembro de 2026).

## Conceito

**Um site que funciona como uma passagem entre dois universos.**

- **O visível**: quem é Maria Luiza Roque, como atende (online, para todo o
  Brasil), formação, trajetória e pesquisa. Fundo creme, texto preto, destaque rosa.
- **O simbólico**: o imaginário. Arte, sonhos, símbolos, viagens, o caderno.
  Fundo verde, texto creme, destaque amarelo.

O site fica parado até a pessoa decidir atravessar. Não há esferas, véus nem
fundos que mudam sozinhos.

## Identidade × metáfora (correção definitiva)

- **A identidade é tipográfica.** A assinatura é o nome em Georgia, com
  "Psicóloga · CRP 06/214718" em Gotham. **Não existe símbolo de marca**: o
  ícone de janela que existia foi removido do cabeçalho, do rodapé e das
  legendas.
- **A passagem é uma metáfora e um recurso de interação, não um logotipo.**
  Sua forma é um **arco arquitetônico**:
  - topo em semicírculo e laterais retas;
  - **sem divisórias internas**: nada de cruz, grade, montante ou travessa;
  - profundidade com dois recursos: um contorno afastado 12 px (como o batente
    de uma porta) e um segundo arco, mais fundo, dentro do primeiro.
  - Componente: `src/components/Arco.tsx`.
- O mesmo arco emoldura algumas fotos e obras. Isso não o torna um símbolo:
  é uma forma de enquadrar, que aparece também retangular e redonda.

### A passagem

- **Onde fica:** o portal da capa ("Atravessar para o outro lado") e o botão do
  cabeçalho, em todas as páginas.
  - No visível, o botão diz "O outro lado"; no simbólico, "Voltar ao visível".
  - A pequena amostra em arco no botão tem a **cor do lugar aonde se vai**.
- **O que se vê pelo portal:** sempre o outro lado. No visível, o verde e
  *O carro de Apolo*, de Redon; no simbólico, o creme e a rua de Caillebotte.
- **A transição:** o arco clicado cresce até virar a tela inteira, uma vez
  só, em 0,82 s (View Transitions API).
  - Com `prefers-reduced-motion`, a troca é imediata.
  - O lado escolhido é lembrado durante a visita.

## Referências e o que se aproveitou

| Referência | Como entrou |
| --- | --- |
| claracandelot.com, **cursor** | Inspecionado no código: imagem desenhada à mão em `cursor: image-set(1x, 2x)`, sem nada seguindo o mouse. O site tem um único cursor nativo: seta rosa com contorno preto e, em links, uma mão amarela. |
| claracandelot.com, **cabeçalho** | Poucos itens centrais. No hover, uma pílula de cor cheia surge atrás da palavra e o texto troca de cor. A página atual aparece em contorno. |
| obama.org | Inspecionado no código: Chronicle Text G1 (serifada, com Georgia como fallback), Gotham Condensed Bold nos títulos e Gotham Medium no menu. Daí vieram o par Georgia + Gotham Condensed, a régua grossa sobre cada seção e os símbolos de cor da lista de temas. |
| Camicado (pasta "camicado") | O arco como forma central da composição, o creme quente e os cartões de cor chapada. |
| AC Concierge | A janela de avião como passagem e viagem (traduzida aqui em arco, sem divisórias), réguas finas, numeração 01/02/03, números grandes em Gotham Light e muito respiro. |
| Paleta 4162 | Cores medidas em pixels da imagem. As etiquetas empilhadas em escada vêm daí. |
| Referências de composição texto + imagem + texto | As duas imagens mencionadas como anexo **não chegaram** (nem na mensagem, nem na pasta). Foram interpretadas a partir da descrição: veja "Composições editoriais". |
| Leonora Carrington, Remedios Varo, Livro Vermelho, Redon | Pesquisados. Só Redon está em domínio público. Ver IMAGENS.md. |

## Composições editoriais (texto + imagem + texto)

1. **Frase-manifesto** (capa, lado visível).
   - Texto: "ENTRE aquilo que vemos E TUDO aquilo que nos atravessa."
   - Tipo: Gotham Condensed Bold em caixa-alta, de 48 a 160 px.
   - Três imagens entram entre as palavras, cada uma com 0,72 do corpo do
     texto, em formas diferentes: arco, pílula e círculo.
2. **Frase "universo"** (capa, lado simbólico).
   - Texto: "Psicologia, arte, literatura, cinema, música, sonhos, símbolos,
     viagens e o cotidiano".
   - Tipo: Georgia no tamanho H1, com miniaturas entre as palavras (fotos da
     Malu e obras).
3. **Mosaico**: logo depois da frase "universo", uma foto grande no arco com
   batente, um bloco de texto e duas fotos menores, em escalas diferentes e
   alinhadas à grade.
4. **Atlas do inconsciente**: seis obras em três colunas desencontradas,
   como uma página de revista, cada uma ligada a uma ideia junguiana (sonho,
   sombra, travessia, união dos opostos, transformação, centro).

Nada disso é animado: a brincadeira está na composição.

## Tipografia

**Georgia**: voz editorial (títulos, texto, citações). A Gelasio, que tem as
mesmas métricas, entra só onde falta Georgia.

**Gotham Condensed** (arquivos locais da pasta "tipografia gotham"): interface,
navegação, rótulos, legendas, dados e a frase-manifesto.
- Pesos: Light 300, Book 400, Book Italic 400, Medium 500, Bold 700.
- A pasta não tem a Gotham de largura normal, só a Condensed.

| Papel | Fonte | Tamanho / entrelinha | Observações |
| --- | --- | --- | --- |
| Display | Georgia | 56→128 / 0,92 | espaçamento −0,035 a −0,04em |
| Frase-manifesto | Gotham Cond Bold | 48→160 / 0,92 | caixa-alta |
| H1 | Georgia | 40→80 / 1,0 | |
| H2 | Georgia | 32→56 / 1,08 | títulos de seção, coluna 7 |
| H3 | Georgia | 24→32 / 1,2 | itálico nos títulos do atlas |
| H4 | Georgia | 20 / 28 | dados (fatos, créditos) |
| Corpo grande | Georgia | 20→24 / 1,4 | máx. 32rem |
| Corpo | Georgia | 18 / 28 | máx. 36rem (≈65 caracteres) |
| Corpo pequeno | Georgia | 16 / 24 | |
| Legenda e metadados | Gotham Book | 14 / 20 | caixa normal |
| Eyebrow e rótulo | Gotham Medium | 14 / 16, +0,08em | caixa-alta |
| Chapéu (pequeno título) | Gotham Bold | 24 / 24 | caixa-alta |
| Navegação | Gotham Medium | 16 / 16, +0,06em | caixa-alta |
| Botões | Gotham Medium | 16 / 24 | **caixa normal**, 48 px de altura |

Os tamanhos fluidos vão de 390 a 1440 px de tela, e os dois extremos são
múltiplos de 4 (`tokens.css`).

Decisões da auditoria:
- **Caixa-alta**: ficou só em rótulos, navegação, chapéus e na frase-manifesto.
  Os botões passaram para caixa normal.
- **Itálico**: usado como gesto (a segunda metade dos títulos, o título atual
  no menu do celular e os nomes de obras), nunca em texto corrido.
- **Comprimento de linha**: texto corrido limitado a 36rem e corpo grande a 32rem.
- **Contraste** (WCAG):

  | Combinação | Contraste |
  | --- | --- |
  | Preto sobre creme | ≈19:1 |
  | Creme sobre verde | 9,3:1 |
  | Preto sobre rosa | 9,8:1 |
  | Amarelo sobre verde | 6,4:1 |
  | Rosa ou amarelo sobre creme | nunca como texto, só como campo de cor |

**Licença da Gotham**: os arquivos trazem a licença da Hoefler & Co. Eles
ficam fora do repositório público (`.gitignore`) até a confirmação da licença
web. Online, a interface usa a reserva (Arial Narrow ou Helvetica). Ver README.

## Espaçamento: múltiplos de 4

- **Escala em `tokens.css`:** `--s-1` a `--s-10` = 4, 8, 12, 16, 24, 32, 48,
  64, 96 e 128 px.
- **Fluidos (extremos múltiplos de 4):**
  - margem lateral: 20→56;
  - calha: 16→24;
  - espaço entre seções: 64→144.
- **Componentes:**
  - cabeçalho: 72 px (64 no celular);
  - botões e alvos de toque: 48 px;
  - régua de seção: 4 px.
- **Verificação:** `npm run auditar` (`scripts/auditar-medidas.cjs`) varre
  todas as folhas de estilo.
- **Exceções que ficaram:**
  - corpo de texto em 18 px e legendas/rótulos em 14 px: medidas clássicas de
    leitura, mantidas por legibilidade (as entrelinhas, 28, 20 e 16 px, seguem
    a escala de 4);
  - breakpoints em `max-width` (479/639/1023 px);
  - linhas finas de 1 a 2 px;
  - os sulcos do vinil desenhado.

## Grade

- **Colunas:** 12 no desktop, 6 no tablet (< 1024 px) e 4 no celular (< 640 px).
  - Classe `.grade` em `base.css`, com `--cols`.
  - **Margem lateral global `--margem`: 40 px no desktop**, diminuindo até 20 px
    no celular (fluida entre 390 e 1440 px).
  - Largura máxima de 1920 px, para os 40 px valerem também em telas grandes.
  - Verificado: cabeçalho, títulos, réguas e rodapé começam todos a 40 px da borda.
- **Dois eixos fixos:**
  - **coluna 1**: rótulos, títulos de página, imagens;
  - **coluna 7**: títulos de seção e textos que acompanham uma imagem.
- **Abertura de toda seção:** régua de 4 px, número na coluna 1, nome em
  Gotham Bold na coluna 2 e título em Georgia na coluna 7.
- **De onde vem a variação:** imagem e texto alternam entre os dois eixos
  (Pesquisa, "Se fosse…"), há escalas diferentes (mosaico) e colunas
  desencontradas (atlas). Nunca posições arbitrárias.
- **No tablet e no celular:** os blocos ocupam a largura toda, e as imagens
  ficam com 3 de 6 ou 3 de 4 colunas, para não ampliar as fotos além da
  resolução original.

## Cores

Medidas na imagem `paleta de cor/image 4162.jpg`:

| Token | Cor |
| --- | --- |
| `--creme` | #FEFAEE |
| `--creme-2` | #F4EDDB |
| `--verde` | #084E32 |
| `--verde-2` | #0A5838 |
| `--rosa` | #F897F0 |
| `--amarelo` | #F0CE5B |
| `--preto` | #0C0D08 |
| `--lilas` | #B8B7FB |

Sem gradientes: verificado no navegador, com zero regras `gradient()`.

## Movimento

Regra: **todo movimento responde a um gesto ou acontece uma vez.**

- A passagem entre os lados (clique) é a única transição grande.
- Hover:
  - pílula no menu e nos botões;
  - o arco interno do portal se abre um pouco;
  - nos cartões do caderno, a imagem se recolhe num arco, o vinil sai da capa e o postal vira.
- Ao rolar, os blocos aparecem uma vez, com 16 px de subida.
- Verificado: zero animações contínuas. Com movimento reduzido, nada se mexe.

## Imagens

Ver **IMAGENS.md** (fontes, licenças, recortes e onde cada foto aparece) e a
página `/creditos/`. Princípios:
- fotos da Malu sem retoques, no tamanho nativo, nunca ampliadas, e cada uma em um só lugar;
- três recortes, cada um com função: retângulo (padrão), arco (retratos e obras) e **janelinha de avião** (só para viagem, como recurso narrativo).
- obras só de acervos abertos;
- `srcset` em todas as imagens, para a melhor nitidez possível em cada tela.


## Rodada 4

### Especiais do Caderno

Viagens, intercâmbios e música entraram como **especiais do Caderno**, com
conteúdo real:

| Rota | Conteúdo |
| --- | --- |
| `/caderno/destinos/` | 12 países em janelas de avião |
| `/caderno/intercambios/` | Londres 2019/2020 e Milão 2023, em capítulos separados |
| `/caderno/discos/` | estante de CDs em 3D |

- No índice do Caderno, os especiais vêm antes dos rascunhos.
- Na capa (lado simbólico), aparecem em "Do caderno".

### Janelinha de avião (referência AC Concierge)

- **Forma:** retângulo vertical com cantos elípticos (`border-radius: 48% / 34%`),
  sem moldura.
- **A persiana:**
  - fica fechada até a janela entrar na tela e então sobe (o mesmo gesto de
    abertura do motion);
  - termina de subir no hover;
  - no toque, abre por completo.
- **Destinos:**
  - no desktop, quatro colunas com alturas desencontradas;
  - no celular, fileira horizontal com encaixe.
- **Intercâmbios:** aparece só na foto de abertura de cada capítulo e numa
  pequena sequência de viagem. As outras fotos seguem o formato editorial.

### Bandeiras

- Feitas em SVG, porque o Windows não mostra emojis de bandeira.
- Ficam ao lado do título, como marcador.
- **Inglaterra = Cruz de São Jorge**, a bandeira da Inglaterra, e não a do
  Reino Unido.
- No Vaticano e em Malta, o brasão e a cruz aparecem simplificados, porque não
  são legíveis em 14 px.

### Estante de CDs

- **Composição horizontal:**
  - as caixas ficam lado a lado, giradas 38° em 3D;
  - têm lombada (com artista e título), dobradiça e um reflexo **sólido** no
    plástico, sem degradê;
  - o disco é prateado sólido, com sulcos.
- **Ao escolher um disco:**
  - a caixa vira de frente e o CD sai um pouco;
  - a ficha abaixo, na grade, mostra título, artista, ano de lançamento,
    faixas conhecidas e a observação sobre Lemonade.
- **Interação:** mouse, toque ou teclado (setas, Home, End). Depois de usar o
  teclado, o mouse parado não "rouba" a seleção. Nada se move sozinho.
- **Celular:** fileira com encaixe, um disco em destaque por vez.
- **Referência:** as imagens de CDs em 3D citadas como anexo **não chegaram**.
  A composição seguiu a descrição: mais horizontal, menos diagonal.
- **Ordem:** a mesma da lista enviada. Não é um ranking.

### Cartões do Caderno: um só componente

- Todos seguem o cartão de referência ("O que os contos de fadas sabem sobre
  crescer"):
  - campo de cor com imagem;
  - no hover ou no foco, a imagem se recolhe num arco e o título ganha sublinhado;
  - embaixo, categoria · leitura · selo, título em Georgia e chamada;
  - o cartão inteiro é clicável.
- No toque não há hover, e o cartão continua completo.
- Os formatos antigos (citação, disco, postal, lista) foram retirados.

### Contato

- Mesma grade das outras páginas:
  - colunas 1–6: título, texto, botão e dados (WhatsApp, atendimento, registro, atuação);
  - colunas 8–12: o postal.
- As redes ficam em réguas, como as listas do site.

### Portal "Atravessar para o outro lado"

- Agora é uma imagem editorial em arco, como as outras: sem batente, contorno
  ou arco interno.
- A força está na imagem e na passagem.

### Cabeçalho no celular (referência: Camicado mobile)

- Três zonas fixas:
  - menu à esquerda (ícone);
  - nome ao centro, com "Psicóloga · CRP";
  - passagem à direita (amostra de cor).
- O menu abre a folha em tela cheia.

### Favicon

- Letra **M** em Gotham Condensed Bold, renderizada a partir do arquivo local
  da fonte, em verde #084E32.
- Arquivos: favicon.ico (16, 32 e 48), PNG 16/32/192/512 e apple-touch-icon
  180, este com fundo creme.
- Não tem nenhum outro desenho.

### Motion: "o arco que atravessa a tela"

Um único elemento recorrente: um arco (topo em semicírculo) que sobe para
cobrir e continua subindo para revelar.

| Momento | O que acontece | Duração |
| --- | --- | --- |
| Entrada (uma vez por visita) | o nome aparece e o arco sobe revelando a página; clique ou tecla pulam | ≈1,3 s |
| Navegação | o arco sobe cobrindo a tela, com o nome do destino em Gotham; a página troca; o arco continua subindo e revela | 0,42 s + 0,56 s |
| Voltar (navegador) | o mesmo arco, invertido: desce e revela | 0,56 s |
| Troca de lado | o arco cresce a partir do portal clicado | 0,82 s |

Ao rolar, as entradas seguem a hierarquia:
- **textos:** sobem 12 px;
- **títulos:** sobem 24 px e se descobrem de baixo para cima;
- **imagens:** o arco se abre, o mesmo gesto em pequena escala.

Regras:
- âncoras na mesma página não acionam a cortina;
- o teclado e o Enter funcionam normalmente;
- nada bloqueia a navegação;
- com "reduzir movimento", tudo é imediato.

Não há parallax, nem elementos flutuando ou movimento contínuo.

Código: `src/components/Passagens.tsx`, `src/styles/motion.css` e `src/lib/mundo.ts`.

## Ideia separada (não implementada): sazonalidade

A sazonalidade poderia mudar **o que se vê pelo portal** a cada estação, sem
mexer na estrutura do site. Só vale se vier com conteúdo sazonal de verdade no
Caderno.

## Pendências

- Confirmar a licença web da Gotham antes de publicá-la.
- Textos reais do Caderno (os atuais são rascunhos de demonstração).
- Rever as duas referências de composição que não chegaram, se ela quiser
  comparar com a interpretação feita.
