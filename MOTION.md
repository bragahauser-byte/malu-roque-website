# Motion — Maria Luiza Roque

**A identidade também existe no movimento.** Todo movimento do site nasce da
forma da identidade: o **arco** (laterais retas, topo em semicírculo, base reta,
sem divisórias, cruz ou grade). Ele não é ícone nem moldura: é uma **superfície
que atravessa** e põe uma camada nova sobre a anterior, como a passagem entre o
mundo visível e o simbólico.

Versão 6 (novembro de 2026). Código: `src/lib/passagem.ts` (o motor),
`src/components/Passagens.tsx` (quando passar), `src/lib/mundo.ts` (troca de
lado), `src/styles/motion.css`, tokens em `src/styles/tokens.css`. Pesquisa:
`REFERENCIAS-MOTION.md`.

## 1. O que mudou na v6 (e por quê)

A v5 tinha a ideia certa, mas a execução parecia instantânea e tinha bugs.
Gravamos a passagem quadro a quadro (screencast do Chrome, 1440 × 900) antes de
mexer, e a auditoria encontrou:

| Problema (v5) | Causa | Correção (v6) |
| --- | --- | --- |
| Passagem "instantânea": ~250 ms de tela parada, depois o arco aparecia já grande e tudo acabava em ~100 ms | rota carregada só no clique; arco com 3 quadros-chave e uma curva muito agressiva; 460 ms no total | pré-carga da rota quando o ponteiro chega ao link; trajeto contínuo de 37 quadros; 870 ms divididos em fases |
| Na troca de lado o arco virava **retângulo** | `inset(... round r)` com o raio indo de 6 px a 0: no meio era um retângulo arredondado | o arco é desenhado com `path()` e comando de arco (`A`): o topo é semicírculo em qualquer tamanho |
| **Faixa branca** nas bordas durante a troca de lado | a página anterior era deslocada/reduzida e deixava o fundo vazio à mostra | a página anterior não se move; nada deixa buraco |
| Títulos **sumiam** na página nova durante a passagem e só apareciam depois | a revelação ao rolar (IntersectionObserver) não roda enquanto a View Transition está em curso, então o que tinha `.revelar` chegava invisível | antes da foto da página nova, o que está na primeira dobra já é marcado como visto (sem transição) |
| Imagens chegavam em branco e "pipocavam" depois | imagens com `loading="lazy"` só começam a carregar depois da passagem | antes da foto, as imagens da primeira dobra viram `eager` e a passagem espera a decodificação (no máximo 320 ms) |
| Cliques durante a passagem **se perdiam** | durante uma View Transition o navegador entrega todo clique ao `<html>` | o clique termina a passagem, encontra o elemento sob o ponteiro e repete o clique nele |
| Duas passagens podiam se cruzar (navegação + troca de lado) | dois códigos independentes, cada um com seu `startViewTransition` | um só motor, uma passagem por vez (`passagemEmCurso` / `pularPassagem`) |
| Animações presas ao `<html>` depois do fim | `fill: "both"` mantinha as animações vivas | todas são canceladas no fim da passagem |
| O cabeçalho fixo ficava "preso" por cima do arco | ele tinha um `view-transition-name` próprio durante a navegação | agora atravessa junto com a página |
| LCP de 2,1 s na entrada da capa (detectado na v6, durante o refinamento) | a imagem do portal começava 100 % recortada e o Chrome só a contava no fim | começa 99 % recortada (um fio pintado no primeiro quadro): LCP medido 104 ms |

## 2. Os quatro momentos

| Momento | O que acontece | Duração | Curva |
| --- | --- | ---: | --- |
| **Avançar** (link interno) | ver §3 | 870 ms | `--ease-passagem` |
| **Voltar / avançar do navegador** | o mesmo gesto **espelhado**: o arco vem do canto inferior esquerdo e sobe para a direita (o histórico tem direção) | 870 ms | `--ease-passagem` |
| **Troca de lado** (visível ⇄ simbólico) | parte **exatamente do arco clicado**. No portal da capa, o outro lado já aparece dentro dele no primeiro quadro; depois o arco cresce como uma cúpula, com o topo à vista, e só no fim sai pela borda de cima. A superfície é **rosa** (contrasta com o creme e com o verde). Pela amostra pequena do cabeçalho, colada no topo, não há onde a cúpula aparecer: ali vale o trajeto entre páginas | 930 ms | `--ease-passagem` |
| **Entrada no site** (1ª página da visita) | ver §4 | ~1,6 s, sem bloquear | — |

## 3. A passagem entre páginas, fase por fase

Três camadas (de baixo para cima):
1. a **página anterior**, parada, com um furo em arco (`clip-path: path(evenodd, ...)`);
2. a **superfície**, um campo de cor sólida (`--campo`: verde no lado visível, rosa no simbólico), que aparece pelo furo;
3. a **página nova**, dentro de um segundo arco que segue o primeiro pelo mesmo trajeto, 110 ms atrás.

Entre os dois arcos fica uma **faixa de cor em forma de arco**: é a superfície
passando. A página anterior e a nova se veem ao mesmo tempo, ligadas por essa
faixa: sem flash, sem tela vazia, sem corte.

| Fase | Tempo | O que se vê |
| --- | --- | --- |
| Preparação | 0 ms | o arco nasce fora da tela, abaixo do canto inferior direito (nada pisca: o primeiro quadro é igual à página anterior) |
| Entrada | 0–250 ms | o arco verde desponta no canto e acelera, contido |
| Travessia | 250–550 ms | velocidade máxima: sobe em diagonal para a esquerda, numa curva (primeiro sobe, depois varre) e se alarga |
| Revelação | 110–870 ms | a página nova acompanha dentro do segundo arco; o conteúdo novo sobe 40 px até o lugar (`object-position`, sem mover o recorte) |
| Finalização | 550–870 ms | desaceleração longa; os dois arcos já passaram de todas as bordas; as camadas da animação somem sem resíduo |

**Curvas.** `--ease-passagem: cubic-bezier(0.64, 0.02, 0.18, 1)`: parte firme,
atravessa rápido, pousa devagar. Sem bounce, sem elasticidade. O conteúdo que
assenta usa `cubic-bezier(0.22, 1, 0.36, 1)`.

**Continuidade.** O trajeto (posição numa curva de Bézier quadrática + raio
crescente) é amostrado em 37 quadros com a mesma estrutura de comandos `path()`,
interpolados linearmente; a curva de tempo vale para a animação inteira. Assim o
arco não "pula" entre posições.

## 4. A entrada no site

A passagem em miniatura, parada no lugar:
1. **a forma** (0–760 ms): o arco do portal nasce do chão como superfície verde e cresce até o semicírculo;
2. **a imagem** (300–1160 ms): o pastel de Redon sobe dentro dele, num segundo arco que segue o primeiro (a mesma faixa de cor da passagem);
3. **a tipografia** (de 520 ms no desktop; de 60 ms no celular, onde o portal fica abaixo da dobra): rótulo, nome, sobrenome, apresentação, chamadas, os lados e, por último, a navegação.

Uma vez por sessão (`sessionStorage`), nada bloqueia o clique, o conteúdo está
no HTML desde o início. Medido: LCP 104 ms (desktop) e 72 ms (celular), CLS 0.

## 5. No resto da interface (cada movimento com uma função)

- **Ao rolar**, três intensidades: textos sobem 12 px e aparecem; títulos sobem 24 px descobertos de baixo para cima; imagens em arco se abrem com o mesmo gesto do arco.
- **Vitrine de destinos** (aprovada, não mudou): a foto nova entra na janela pela direção escolhida.
- **Estante de CDs**: a caixa escolhida sai da fileira e vira de frente (760 ms), a fileira se abre em volta, o disco desliza para fora (900 ms, 220 ms depois) e o reflexo do acrílico atravessa a tampa (1100 ms). No mouse, a caixa só levanta 10 mm. Nada se move sozinho.
- **Hover**: 180 ms, só cor.

## 6. Como funciona (técnica)

- **View Transitions API, mesmo documento**, com Web Animations nos pseudo-elementos `::view-transition-old/new(root)`; a cor da superfície é o fundo de `::view-transition-image-pair(root)`. Sem biblioteca.
- **Histórico**: o Next continua dono do `pushState`/`popstate`. O `popstate` é segurado (fase de captura), o navegador fotografa a página atual e o evento é reemitido com o mesmo `state`. A rolagem é restaurada pelo Next ao voltar (testado: 1600 px → volta em 1600 px).
- **Rolagem ao avançar**: a página nova começa do topo (`behavior: "instant"`), já debaixo da passagem.
- **Interação rápida**: clique durante a passagem → ela termina na hora e o clique é repetido no lugar certo; voltar/avançar rápido → a passagem em curso termina e o Next segue sem animação. Nunca há duas passagens ao mesmo tempo.
- **Falhas**: se a rota demorar mais de 1,5 s, a passagem segue mesmo assim; sem suporte à API, navegação normal.
- **Lições registradas**: (1) durante a View Transition o navegador suspende os quadros, então nada dentro do callback pode esperar `requestAnimationFrame`; (2) `mask` num elemento dentro de `preserve-3d` o tira da ordenação 3D (o disco do CD passava por trás das caixas vizinhas): a máscara fica num pseudo-elemento; (3) entradas partem de opacidade 0,01 e recortes de 99 %, para o LCP contar o primeiro quadro.

## 7. Regras

- Âncoras na mesma página, links externos, nova aba, download e teclas modificadoras: comportamento nativo.
- Sem movimento contínuo, parallax, elementos flutuando ou loops.

## 8. Movimento reduzido (`prefers-reduced-motion: reduce`)

- Passagem entre páginas: troca de opacidade de 200 ms, sem arco.
- Entrada, revelações ao rolar e troca de lado: desligadas (troca imediata).
- Estante de CDs e vitrine: trocas sem animação.
- Toda a funcionalidade continua igual (testado).

## 9. Testes (v6)

Playwright com o Chromium, sobre o build de produção (`npm run preview`):
- **quadro a quadro** (screencast): passagem entre páginas, troca de lado pelo portal e pelo cabeçalho, entrada no desktop e no celular;
- **robustez** (24 verificações, todas passaram):
  - avançar → voltar → avançar com URL e rolagem corretas;
  - nada escondido na primeira dobra ao chegar;
  - cliques rápidos em links diferentes, clique repetido no mesmo link, voltar duas vezes rápido;
  - troca de lado ida e volta, três cliques seguidos, troca de lado durante uma navegação;
  - movimento reduzido;
  - celular (menu → página, voltar, sem rolagem lateral);
  - CDs por toque e por teclado;
  - nenhum erro de console, nenhuma classe ou animação residual.
