# Guia de encaixe das roupas no Contas & Looks

Use a boneca do jogo e uma peça aprovada da mesma categoria como referência. A coleção Princesas registra os ajustes feitos para que cada item funcionasse tanto na miniatura quanto vestido. Os percentuais abaixo descrevem essa coleção. Para uma nova coleção, determine a escala e o posicionamento na boneca antes de aprovar a arte.

## Preparar e exportar a arte

Exporte cada peça isolada, de frente, com fundo transparente. Use a mesma perspectiva da boneca, sem incluir partes do corpo na imagem. Confira o recorte em fundo claro e escuro, em tamanho ampliado e no tamanho do card. Se as peças compartilharem uma prancha, deixe margem transparente entre elas e confira que cada retângulo de recorte contém só uma peça.

| Peça | O que conferir na arte e na boneca |
| --- | --- |
| Blusas e casacos | Mantenha a frente da gola e dos punhos. Remova o verso do colarinho e o interior das mangas onde o braço deve aparecer. Confira se a saída da manga encontra o braço e se a barra conversa com o cós da peça de baixo. |
| Vestidos | Confira decote, ombros, mangas e barra. Remova o forro ou o verso que apareça por baixo e siga o contorno da frente para que as dobras terminem de forma contínua. Teste com sapatos e com as pernas à mostra. |
| Calças, shorts e saias | Use o cós dianteiro e alinhe-o à cintura. Confira se a roupa de banho aparece pelo cós ou entre as pernas. Nas calças, alinhe cada punho à perna correspondente, preservando o volume previsto. |
| Sapatos | Use a perspectiva frontal do pé. A abertura deve ser transparente, sem calcanhar traseiro ou partes da perna na arte. Confira a sola, a frente e o alinhamento de cada sapato com o pé. |
| Cabelos e acessórios | Exporte cabelo, tiaras e presilhas como peças separadas. Confira cada item sozinho e combinado. Mantenha olhos e boca visíveis e verifique se sobrou algum trecho do cabelo original ao equipar outro penteado. |

## Aplicar e ajustar no jogo

1. Cadastre a peça em [dist/collection.js](../dist/collection.js). Use `box` para o retângulo em pixels da prancha e `placement` para a posição e o tamanho na boneca. Ambos seguem a ordem `[x, y, largura, altura]`, em sistemas de coordenadas diferentes. Preserve o ID de uma peça já publicada para manter compras e looks salvos.
2. Em [dist/app.js](../dist/app.js), `garmentSprite()` recorta o retângulo da peça antes de dimensioná-la. Esse recorte também vale para cards com espaço vazio ao redor da arte. Use `dollPiecePlacement()` para ajustar o encaixe na boneca sem mudar o tamanho reservado para os cards. Ancore a escala no ponto que precisa permanecer no lugar, como a gola, o cós ou a sola.
3. Verifique a peça sozinha antes de combinar. Corrija o posicionamento quando a peça inteira estiver deslocada. Quando o problema estiver só em uma parte, como os punhos de uma calça ou as pontas de um sapato, ajuste essa parte da arte. Se a roupa de banho aparecer por uma abertura pequena, ajuste a máscara da boneca para aquela região e confira se a pele exposta continua visível.
4. Atualize a versão da prancha quando substituir a arte e a versão dos arquivos alterados no [HTML](../dist/index.html) conforme necessário. Recarregue a prévia para confirmar que ela usa os arquivos novos.

## Ajustes aplicados na coleção Princesas

| Ajuste | Decisão aplicada |
| --- | --- |
| Escala inicial | As 21 peças foram reduzidas em 10% na boneca. As miniaturas mantiveram o tamanho reservado nos cards. |
| Cinco peças de cima | Casaco azul bordado e blusas turquesa, de mangas rubi, coral geométrica e rosa foram deslocados para baixo em 5% da altura renderizada de cada peça. |
| Calça azul bordada e short coral geométrico | Voltaram ao tamanho original na boneca, com `dollScale: 1`. |
| Blusa rosa e casaco azul | Os punhos foram refeitos para acompanhar a saída dos braços. Na blusa rosa, também foi removido o verso do colarinho. |
| Vestidos dourado e turquesa | A barra foi recortada pelo contorno da frente para retirar o verso aparente das dobras. |
| Calça balonê turquesa | Foi removido o verso do cós. No ajuste final, o cós ficou na mesma altura, os punhos foram aproximados para alinhar com as pernas e uma máscara localizada escondeu a roupa de banho que aparecia entre as pernas. |
| Sapatilhas azuis e douradas | As pontas superiores foram encurtadas em 10%, mantendo a frente e a sola nas posições anteriores. A frente foi comparada pixel a pixel. |
| Trança dourada, tiaras e presilha | As peças foram separadas e reposicionadas para manter o rosto visível. Foram conferidas sozinhas e em combinações. |

## Validar no guarda-roupa

1. Na prévia local, abra o **Guarda-roupa** e clique **cinco vezes no ícone do cabeçalho do modal**. O modo de teste abre a categoria **Todas**, com as peças bloqueadas disponíveis para experimentar.
2. Confira cada miniatura no guarda-roupa e nas ofertas. Procure recortes de peças vizinhas, halos e partes faltando. Depois equipe cada peça e observe seu contorno, o encaixe e as camadas em torno da boneca.
3. Monte pelo menos um look de cada combinação aplicável, como blusa com calça ou saia, vestido com sapatos e cabelo com acessório. Inspecione o encaixe em tamanho normal e ampliado e confira os cards em uma janela estreita.
4. Clique **mais cinco vezes no mesmo ícone** para encerrar o teste e voltar ao look salvo. As trocas feitas em teste não gastam estrelas nem alteram o progresso salvo. Fora do modo de teste, confira separadamente a compra, a remoção de uma peça e a persistência do look ao recarregar.

Finalize com o [checklist do projeto](../AGENTS.md).
