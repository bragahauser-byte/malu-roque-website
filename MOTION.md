# Motion — Maria Luiza Roque

**A identidade também existe no movimento.** Todo movimento do site nasce da
forma da identidade: o **arco** (laterais retas, topo em semicírculo, base reta,
sem divisórias, cruz ou grade). Ele não é ícone nem moldura: é uma **superfície
que atravessa** e põe uma camada nova sobre a anterior, como a passagem entre o
mundo visível e o simbólico.

Versão 5 (novembro de 2026). Código: `src/components/Passagens.tsx`,
`src/lib/arco.ts`, `src/lib/mundo.ts`, `src/styles/motion.css`, tokens em
`src/styles/tokens.css`. Pesquisa: `REFERENCIAS-MOTION.md`.

## 1. Os quatro momentos

| Momento | O que acontece | Duração | Curva |
| --- | --- | ---: | --- |
| **Avançar** (link interno) | a página nova chega dentro de um arco que entra pelo canto inferior direito, sobe em diagonal para a esquerda e se amplia até passar da tela por todos os lados; a anterior recua 3 % no sentido do movimento e escurece um pouco (para a forma ficar legível) | 460 ms | `--ease-passagem` |
| **Voltar / avançar do navegador** | o mesmo gesto, **espelhado**: o arco vem do canto inferior esquerdo. O histórico tem direção, como no deslize horizontal | 460 ms | `--ease-passagem` |
| **Entrada no site** (1ª página da visita) | etapa 1, a forma: o arco do portal sobe do pé, vindo de baixo e da direita, e a imagem assenta dentro dele; etapa 2, a tipografia em hierarquia: rótulo → nome → sobrenome → apresentação → botões → legenda dos lados → navegação. No celular, onde o portal fica abaixo da dobra, a tipografia começa logo (60 ms) | 0–1,2 s (celular 0–0,9 s) | forma: `--ease-passagem`; textos: `--ease` |
| **Troca de lado** (visível ⇄ simbólico) | o novo lado cresce **a partir do próprio arco clicado** até a tela inteira | 620 ms | `--ease-passagem` |

Em escala menor, o mesmo gesto aparece:
- **ao rolar**, nas imagens: o arco se abre de baixo para cima;
- **na vitrine de destinos**: a foto nova entra na janela com a borda de ataque arredondada (o arco deitado), pela direita ao avançar e pela esquerda ao voltar (520 ms).

## 2. Curvas e durações (tokens)

| Token | Valor | Uso |
| --- | --- | --- |
| `--ease-passagem` | `cubic-bezier(0.7, 0, 0.16, 1)` | a superfície em arco: parte firme, atravessa rápido, pousa. Só para o arco. |
| `--ease` | `cubic-bezier(0.2, 0.7, 0.1, 1)` | revelações ao rolar e microinterações: chega e assenta |
| `--ease-saida` | `cubic-bezier(0.4, 0, 1, 1)` | o que sai de cena |
| `--dur-micro` | 180 ms | hover, foco, cor |
| `--dur-curta` | 280 ms | pequenos deslocamentos |
| `--dur-passagem` | 460 ms | a passagem entre páginas |
| `--dur-revelar` | 520 ms | trocas dentro de um componente (vitrine) |

**Não há uma curva para tudo.** A passagem tem personalidade própria (aceleração
forte no meio); textos e imagens usam movimentos menores, com desaceleração
longa; hover é quase instantâneo.

Intensidades ao rolar (hierarquia):
1. **textos**: sobem 12 px e aparecem (560 ms);
2. **títulos**: sobem 24 px, descobertos de baixo para cima (800 ms);
3. **imagens**: o arco se abre (800 ms, `--ease-passagem`).

## 3. Como funciona (técnica)

- **View Transitions API, mesmo documento.** Um clique num link interno é
  interceptado (fase de captura, antes do `<Link>` do Next); o navegador
  fotografa a página atual; o `router.push` troca a rota; quando a rota nova é
  aplicada, o arco é animado com Web Animations no pseudo-elemento
  `::view-transition-new(root)`, como `clip-path: inset(... round r r 0 0)` em
  pixels. Os três quadros do arco estão em `src/lib/arco.ts`.
- **Composição de camadas:** a página nova (por cima) é recortada pelo arco; a
  anterior (por baixo) só recua e escurece. O cabeçalho fixo fica fora da
  passagem entre páginas (`view-transition-name` só durante a navegação), porque
  é a mesma superfície nas duas; na troca de lado ele atravessa junto, porque
  muda de cor.
- **Voltar/avançar do navegador:** o ouvinte de `popstate` (captura) segura o
  evento, deixa o navegador fotografar a página atual e só então o reemite com
  o mesmo `state` para o Next. O histórico continua sendo do Next: nenhum
  `pushState` próprio. Testado: avançar → voltar → avançar com URLs corretas.
- **Rolagem:** ao avançar sem âncora, a página nova começa do topo
  (`behavior: "instant"`, para não brigar com a rolagem suave do html).
- **Sem biblioteca.** Nenhuma dependência nova. Só `clip-path`, `transform`,
  `opacity` e `filter` no pseudo-elemento, por 460 ms.
- **Segurança:** se a rota demorar mais de 1,6 s, a passagem termina mesmo assim.
  Durante uma passagem, novos cliques são ignorados (sem passagens empilhadas).
- **SEO e carregamento:** nada muda no HTML estático; os links continuam `<a href>`
  reais; a passagem só existe depois da hidratação.

Lição registrada (LCP): as animações de entrada partem de opacidade **0,01**, não 0. O Chrome só considera o texto pintado para o LCP quando a opacidade sai de 0, e isso empurrava o LCP do celular de ~ 50 ms para ~ 1,75 s. Com 0,01 (invisível), o LCP medido ficou em 120 ms com a entrada ligada.

Lição registrada: durante a View Transition o navegador **suspende os quadros**
(`requestAnimationFrame`) até o callback terminar. Esperar um rAF dentro do
callback trava a transição até o limite de 4 s do navegador (que então a aborta).

## 4. Regras

- Âncoras na mesma página, links externos, nova aba (`target`), download e
  teclas modificadoras (Ctrl/⌘/Shift/Alt): comportamento nativo, sem passagem.
- Nada bloqueia o clique ou o teclado. A entrada não é uma tela de carregamento:
  o conteúdo está no HTML desde o início e a interação é imediata.
- A entrada acontece **uma vez por sessão** (`sessionStorage`), só na primeira
  página aberta. Ao voltar à capa, não se repete.
- Sem movimento contínuo, parallax, elementos flutuando ou loops.
- Sem suporte à View Transitions API: navegação normal, sem animação.

## 5. Movimento reduzido (`prefers-reduced-motion: reduce`)

- **Passagem entre páginas:** só uma troca de opacidade de 180 ms, sem arco nem deslocamento.
- **Entrada:** desligada (o script do `<head>` nem marca `html.entrando`).
- **Revelações ao rolar:** desligadas, tudo visível.
- **Troca de lado:** imediata.
- **Vitrine e CDs:** trocas sem animação.
- Toda a funcionalidade continua igual.

Verificado com o Playwright (`reducedMotion: "reduce"`): entrada não marcada,
navegação funcionando.

## 6. Acessibilidade

- Foco visível em tudo (anel de 2 px, `--foco`: nanquim no claro, rosa no escuro).
- A vitrine é um `region` com `aria-roledescription="carrossel"`, setas com
  rótulo, `aria-live` no nome do país e teclado (← → Home End).
- A estante de CDs tem navegação por setas (roving tabindex) e ficha em `aria-live`.
- Nenhuma informação depende de hover: no toque, as ações aparecem como botões.
