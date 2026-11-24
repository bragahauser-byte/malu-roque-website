# Direção de arte — Maria Luiza Roque

Registro das decisões do projeto, para continuar o trabalho em outras sessões
sem perder o fio. **Versão 5** (motion a partir da forma, grade 12/8/4, ritmo, cores tipográficas, novembro de 2026).

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

- **Escala em `tokens.css`** (a única do projeto; a antiga `--s-*` foi substituída):

| Token | px | Token | px |
| --- | ---: | --- | ---: |
| `--space-1` | 4 | `--space-10` | 40 |
| `--space-2` | 8 | `--space-12` | 48 |
| `--space-3` | 12 | `--space-16` | 64 |
| `--space-4` | 16 | `--space-20` | 80 |
| `--space-5` | 20 | `--space-24` | 96 |
| `--space-6` | 24 | `--space-32` | 128 |
| `--space-8` | 32 | `--space-40` | 160 |

- **Ritmo (papéis, não valores soltos), fluidos entre 390 e 1440 px:**

| Papel | Token | Celular → desktop |
| --- | --- | --- |
| entre grandes seções | `--secao` | 96 → 160 (128 no tablet) |
| régua/título da seção → conteúdo | `--secao-cab` | 48 → 80 |
| entre blocos de uma mesma seção | `--bloco` | 64 → 96 |

  Antes: 64 → 144 entre seções e 48/64 fixos depois do título. O respiro novo
  vale sobretudo para a passagem entre o fim de uma seção e a régua da próxima,
  e para as trocas de lado (rodapé, campos de cor).
- **Componentes:** cabeçalho 72 px (64 no celular); botões e alvos de toque 48 px; régua de seção 4 px.
- **Verificação:** `npm run auditar` (`scripts/auditar-medidas.cjs`).
- **Exceções que ficaram:** corpo 18 px e legendas 14 px (leitura; entrelinhas 28/20/16 seguem a escala); linhas finas de 1–2 px; sulcos do CD.

## Grade

Um só sistema (`.grade` em `base.css`, `--cols`/`--margem`/`--calha` em `tokens.css`). Muda a organização, não a identidade.

| Faixa | Colunas | Margem | Calha | Observação |
| --- | ---: | ---: | ---: | --- |
| Desktop ≥ 1024 px | 12 | 40 | 24 | conteúdo até **1440 px** (caixa de 1520 com as margens); em monitores maiores, centraliza |
| Tablet 640–1023 px | 8 | 32 | 20 | metades = 4 + 4 colunas; imagens em 4–5 colunas |
| Celular < 640 px | 4 | 24 | 16 | ≤ 374 px: margem 20, calha 12 |
| Dobrável aberto (2 segmentos) | 8 | 28 | ≥ 20 | ver abaixo |

- **Eixos fixos no desktop:** coluna 1 (rótulos, títulos de página, imagens) e coluna 7 (títulos de seção, textos que acompanham imagens).
- **Abertura de toda seção:** régua de 4 px, número na coluna 1, nome em Gotham Bold na coluna 2, título em Georgia na coluna 7.
- **Tablet (novo, 8 colunas):** todas as regras que eram "3 de 6" viraram "4 de 8" (metade), "4 de 6" → "5 de 8"; as janelas de viagem ficam em 2 + 2 + 2.
- **Exceção controlada (celular):** o portal "Atravessar para o outro lado" sai das margens e ocupa a tela de borda a borda (referência Camicado). É a única quebra da grade; a legenda e o botão voltam para a margem de 24 px.

### Telas dobráveis (avaliação)

- "iPhone Duo" foi tratado como **categoria** (aparelhos com tela externa compacta e tela interna dobrável), não como produto ou API.
- **Tela compacta:** cai no celular comum (4 colunas, margem 24 ou 20, calha 16/12). Nenhuma regra especial.
- **Tela interna aberta:** quando o navegador expõe a *Viewport Segments API* (`@media (horizontal-viewport-segments: 2)` e `env(viewport-segment-*)`, hoje só em navegadores Chromium em aparelhos que a suportam), a grade passa a 8 colunas (4 + 4), margem 28 px, e a calha cresce até a largura real da dobradiça (mínimo 20 px). Assim, as composições "metade + metade" do tablet caem uma em cada segmento e nada essencial atravessa o centro.
- **Sem suporte à API:** vale o layout responsivo comum pela largura (uma tela interna de ~ 700–900 px cai no tablet de 8 colunas). Nada depende da API para funcionar.
- **Não verificado em aparelho real.** Os valores (área central de 32–48 px etc.) eram hipóteses do briefing; o código usa a largura informada pelo próprio aparelho em vez de um número fixo.

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

Sem gradientes de cor: os reflexos dos CDs são faixas sólidas translúcidas.

### Cores tipográficas

A hierarquia é feita em quatro dimensões: **família** (Georgia = voz editorial; Gotham Condensed = interface, rótulos, dados), **peso**, **tamanho** e **cor**. O tom desce do nanquim ao cinza-oliva conforme a importância cai. Os componentes usam os papéis `--tx-*`, que trocam de escala sozinhos no lado simbólico, no rodapé (`.tema-escuro`) e nos campos de cor.

| Papel (`--tx-*`) | Fundo claro (creme) | contraste | Fundo escuro (verde) | contraste |
| --- | --- | ---: | --- | ---: |
| título principal | #0C0D08 | 18.7 | #FEFAEE | 9.4 |
| título secundário, `.lead`, `.chapeu` | #1D1F18 | 16.0 | #F3EDDA | 8.4 |
| texto corrido (carvão, não preto puro) | #2A2C24 | 13.6 | #E6E2CF | 7.5 |
| texto secundário (`.suave`) | #4A4C43 | 8.4 | #CFD6C6 | 6.6 |
| legendas e créditos | #5A5C52 | 6.5 | #BCCAB9 | 5.7 |
| metadados (`.meta`) | #66685E | 5.4 (4.9 sobre creme-2) | #A9BBA8 | 4.8 |
| links | #084E32 (verde) | 9.4 | #F0CE5B (amarelo) | 6.4 |
| destaques | #084E32 | 9.4 | #F0CE5B | 6.4 |
| interativo ativo/foco | anel #0C0D08 | — | #F897F0 (rosa) | 5.0 |
| desabilitado (nunca para leitura) | #8F9087 | 3.1 | #7F9B86 | 3.2 |

No campo rosa do lado simbólico, todo texto pequeno usa no mínimo #2A2C24 (7.2:1).

**Links e estados** (`.link-linha`): cor própria + sublinhado de 1 px; **hover** não depende só da cor: o campo de destaque entra por trás da palavra (o mesmo gesto do menu); **focus** anel de 2 px (`--foco`); **active** = campo de destaque; **visited** mantém a cor (o site é curto e a cor de visitado poluiria a hierarquia).

## Movimento

Ver **MOTION.md** (sistema completo: curvas, durações, regras, acessibilidade) e **REFERENCIAS-MOTION.md** (a pesquisa).

Regra: **todo movimento responde a um gesto ou acontece uma vez, e nasce da forma do arco.**

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

### Janelinha de avião e a vitrine de destinos (referência AC Concierge)

- **Forma da janela:** retângulo vertical com cantos elípticos (`border-radius: 48% / 34%`), sem moldura.
- **O que a referência tem e entrou na vitrine (v5):** uma **única janela grande no centro** (não uma grade de cards); contador "01 / 12" com filete; setas redondas; **trio de metadados** separados por filetes verticais (continente, capital, número da janela: dados públicos do país, nada sobre a viagem); nome do país em corpo grande com a bandeira ao lado; descrição em tom secundário do outro lado da janela; **filete atravessando a composição na linha de base**; grande numeral "12" à direita da cabeça da seção; índice de todas as janelas embaixo (uma por coluna no desktop), que também navega.
- **O que é da Malu:** Georgia + Gotham, creme e verde, a grade de 12, e o gesto do site: a foto nova entra na janela com a borda de ataque arredondada, pela direita ao avançar e pela esquerda ao voltar.
- **Celular:** a ordem da referência mobile: contador e setas, janela, dados, nome, descrição; índice em fileira com deslize.
- **Interação:** setas, teclado (← → Home End), deslizar no toque, clique no índice.
- **Intercâmbios:** a janela aparece na foto de abertura de cada capítulo e numa pequena sequência de viagem, com a persiana que abre ao entrar na tela.

### Bandeiras

- Feitas em SVG, porque o Windows não mostra emojis de bandeira.
- Ficam ao lado do título, como marcador.
- **Inglaterra = Cruz de São Jorge**, a bandeira da Inglaterra, e não a do
  Reino Unido.
- No Vaticano e em Malta, o brasão e a cruz aparecem simplificados, porque não
  são legíveis em 14 px.

### Estante de CDs (v5: materialidade)

- **Composição horizontal mantida**, sobre uma prateleira (plano sólido um tom abaixo do fundo).
- **Cada caixa é um objeto CSS 3D** com seis faces e espessura real (10 mm em 133): tampa transparente com borda clara em cima/esquerda e escura embaixo/direita; dobradiça fumê com frisos; encarte por baixo da tampa (capa original, sem alteração); bandeja preta; lombada com artista e título; bordas de plástico.
- **Luz de cima e da esquerda:** lombada e borda de cima iluminadas, borda direita e base na sombra; sombra de contato na prateleira.
- **Reflexos especulares:** duas faixas sólidas translúcidas na diagonal da luz (sem degradê). Quando a caixa gira para a frente, as faixas deslizam: é o único movimento além da escolha.
- **Física da fileira:** as caixas giram para longe do disco escolhido e cada uma pousa sobre a anterior, então as lombadas ficam à vista. (Antes giravam todas para o mesmo lado com a sobreposição invertida, o que achatava o 3D.)
- **Ao escolher:** a caixa vem para a frente (6°), o CD sai pela borda aberta, a ficha abaixo mostra os dados. Nada gira sozinho.
- **Técnica:** só `transform`, `opacity` e camadas; sem WebGL.
- Ordem: a da lista enviada. Não é um ranking.

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

- Imagem editorial em arco, sem batente, contorno ou arco interno.
- **v5:** no lado visível, o pastel de Redon com o arco azul e as flores (arquivo enviado, ver IMAGENS.md); no lado simbólico, *O carro de Apolo*. A rua de Caillebotte saiu da capa.
- **Celular:** exceção controlada da grade, arco de borda a borda (proporção 4:5), legenda e botão na margem, alinhados à esquerda.

### Cabeçalho no celular (referência: Camicado mobile)

- Três zonas fixas:
  - menu à esquerda (ícone);
  - nome ao centro, com "Psicóloga · CRP";
  - passagem à direita (amostra de cor).
- O menu abre a folha em tela cheia.

### Favicon

- **v5:** o arquivo enviado (`favcon.png`) contém só o **arco creme**, sem letra. Foi usado como base: o arco creme do arquivo + a letra **M** em Gotham Condensed Bold, verde #084E32 (`scripts/gerar-favicon.mjs`). **Pendente de aprovação**, porque o briefing também pede para não usar o símbolo da passagem.
- Arquivos: favicon.ico (16, 32, 48), PNG 16/32/192/512 transparentes; apple-touch-icon 180 e ícone *maskable* 512 com campo verde (iOS/Android recortam o ícone e preencheriam a transparência de preto); `site.webmanifest`. URLs com `?v=5` para furar o cache.

### Motion

Substituído na v5: ver **MOTION.md**.

## Ideia separada (não implementada): sazonalidade

A sazonalidade poderia mudar **o que se vê pelo portal** a cada estação, sem
mexer na estrutura do site. Só vale se vier com conteúdo sazonal de verdade no
Caderno.

## Pendências

- Confirmar a licença web da Gotham antes de publicá-la.
- Textos reais do Caderno (os atuais são rascunhos de demonstração).
- Aprovar o favicon (arco do arquivo + M) ou indicar outro arquivo só com o M.
- Confirmar título e acervo do pastel de Redon da capa (o arquivo não trazia a informação).

