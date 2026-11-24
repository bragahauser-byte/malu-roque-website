# Imagens — fontes, licenças e decisões

Registro de todas as imagens do site, de onde vieram e em que condições
podem ser usadas. A mesma lista (só as obras) está publicada em `/creditos/`.

## Como as imagens são preparadas

- Originais na resolução máxima obtida ficam em `recursos/arte-originais/` e
  `recursos/fotos/`. A pasta `recursos/` está fora do Git.
- `npm run imagens` (`scripts/otimizar-imagens.mjs`) gera WebP em várias
  larguras (640, 1024, 1600 e 2400 px), **nunca ampliando**, e o manifesto
  `src/content/imagens.json`.
  - Qualidade: 86 nas obras, 88 nas fotos, com subamostragem de cor inteligente.
- Os componentes `Obra` e `Foto` montam `srcset` + `sizes`: o navegador
  escolhe a versão mais nítida para o tamanho na tela e a densidade (2x, 3x).
- Recortes só tiram margens de papel ou bordas de digitalização. Estão listados
  no próprio script (`RECORTES`), com o motivo de cada um. Nenhuma obra ou foto
  é retocada, colorizada ou alterada por IA.

## Fotografias de Maria Luiza Roque

Origem: pasta `Desktop/inspiracao site malu`. São usadas sem retoque.
Resolução original: 960×1280; a foto do TCC tem 1200×1600. É o máximo
disponível, e por isso elas aparecem em tamanhos que não exigem ampliação.

| Chave | Arquivo de origem | Onde aparece |
| --- | --- | --- |
| `malu-retrato` | fotos da malu / 21.19.38 (2) | Capa (visível), "Quem escuta" |
| `malu-sorriso` | fotos da malu / 21.19.38 (1) | Sobre, abertura |
| `malu-entardecer` | fotos da malu / 21.19.40 | Capa (visível), frase-manifesto |
| `malu-musica` | fotos da malu / 21.19.32 (1) | Capa (simbólico), frase "universo" |
| `malu-festival` | fotos da malu / 21.19.32 (2) | Capa (simbólico), mosaico |
| `hc-escadaria` | hospital das clinicas / 21.19.34 (1) | Pesquisa, artigo do HC |
| `hc-instituto` | hospital das clinicas / 21.19.35 | Sobre, trajetória |
| `tcc-banner` | fotos da parte do TCC / 21.18.36 (1) | Pesquisa, TCC |
| `viagem-janela` | fotos em viagens / 21.18.11 | Capa (visível), frase-manifesto |
| `viagem-arcos` | fotos em viagens / 21.18.19 | Capa (simbólico), frase "universo" |
| `viagem-passagem` | fotos em viagens / 21.18.20 | Capa (simbólico), mosaico (foto grande) |
| `viagem-museu` | fotos em viagens / 21.18.29 | Capa (simbólico), frase "universo" |
| `viagem-entardecer` | fotos em viagens / 21.18.12 | Capa (simbólico), mosaico |

Cada foto aparece em um só lugar. Ficaram de fora, por cautela:
- as fotos em que aparece o crachá do hospital com dados legíveis;
- a foto em ambiente que poderia ser lido como consultório físico (o atendimento é só online).

As legendas evitam nomear cidades e lugares que não foram confirmados.

## Obras

### Atlas do inconsciente e o lado simbólico

| Obra | Acervo | Licença | Fonte |
| --- | --- | --- | --- |
| Odilon Redon, *Olhos fechados* (1890) | The Metropolitan Museum of Art | CC0 | metmuseum.org/art/collection/search/356778 |
| Francisco de Goya, *O sono da razão produz monstros*, Los Caprichos 43 (1799) | The Metropolitan Museum of Art | CC0 | …/338473 |
| Arnold Böcklin, *A ilha dos mortos* (1880) | The Metropolitan Museum of Art | CC0 | …/435683 |
| *Rosarium philosophorum*, o rei e a rainha sobre o sol e a lua (1550) | Wellcome Collection, via Wikimedia Commons | **CC BY 4.0**: exige crédito, que aparece na legenda e em /creditos/ | Wellcome L0073562 |
| *Splendor Solis*, f. 33v, o sol nascente (1582) | British Library, Harley MS 3469 | CC0 | Wikimedia Commons |
| *Mandala de Jnanadakini*, Tibete (fim do séc. XIV) | The Metropolitan Museum of Art | CC0 | …/37802 |
| Odilon Redon, *Pandora* (c. 1914) | The Metropolitan Museum of Art | CC0 | …/437383 |
| Odilon Redon, *Pégaso e Belerofonte* (c. 1888) | The Metropolitan Museum of Art | CC0 | …/459400 |
| Odilon Redon, *O carro de Apolo* (1905–16) | The Metropolitan Museum of Art | CC0 | …/437380 |

Por que estas obras:
- O **Rosarium philosophorum** é o tratado cujas xilogravuras Jung comentou
  em *A psicologia da transferência* (1946).
- O **Splendor Solis** e as **mandalas** pertencem ao repertório que Jung
  estudou e reproduziu (alquimia e simbolismo do centro).
- **Redon** é uma das quatro referências pedidas e está em domínio público.
- **Goya** e **Böcklin** completam as ideias de sombra e de travessia.

### Do Art Institute of Chicago (CC0)

Usadas no Sobre, no Atendimento, no Caderno, no postal, no 404 e no portal.

| Artista | Obra |
| --- | --- |
| Redon | *Nuvens de flores*, *Natureza-morta com flores*, *Sita*, *Visão de sonho* |
| Moreau | *Inspiração* |
| Böcklin | *No mar* |
| Whistler | *Noturno: azul e dourado* |
| Munch | *A menina à janela* |
| Volaire | *A erupção do Vesúvio* |
| Hokusai | *Grous no pinheiro nevado*, *Íris e gafanhoto* |
| Manet | *Mulher lendo* |
| Autoria desconhecida | *Hindol Raga* |
| Período Pala | *Vishnu com as deusas Lakshmi e Sarasvati* |
| Caillebotte | *Rua de Paris, dia de chuva* |
| Degas | *A estrela* |

Estas foram baixadas em 2026 a 1200 px (a maior largura oferecida para
download na época). Hoje a API do AIC exige um desafio anti-robô
(Cloudflare), que não foi contornado. Por isso essas obras aparecem em
tamanhos médios ou pequenos, e as imagens grandes do site vêm do Met, em
resolução máxima.

## Referências pesquisadas e não reproduzidas

- **Leonora Carrington** (1917–2011) e **Remedios Varo** (1908–1963): obras
  protegidas por direitos autorais. Inspiraram a direção (o fantástico, o
  alquímico, o humano e o animal), mas nenhuma imagem delas foi usada, imitada
  ou gerada.
- **C. G. Jung, *O Livro Vermelho*** (publicado em 2009): reproduções
  protegidas pelos detentores dos direitos da obra de Jung. É citado no texto
  do atlas como referência, sem imagens. As obras escolhidas vêm das mesmas
  tradições que Jung estudou.
- **Odilon Redon** (1840–1916): domínio público. Está no site com cinco obras.
