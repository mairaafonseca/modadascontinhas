// In order of the original boards. Keep this order to preserve earned piece IDs.
const collectionBoards = [
  {
    category: "dress", slot: "dress", sheet: "colecao90-vestidos", size: [1536, 1024],
    pieces: [
      {name: "Maxi floral menta", price: 1, box: [62, 13, 228, 317], placement: [97.7, 104, 118, 182]},
      {name: "Maxi marinheiro azul", price: 3, box: [362, 9, 233, 322], placement: [94.2, 104, 125, 183]},
      {name: "Maxi império pêssego", price: 7, box: [641, 12, 251, 319], placement: [97.2, 104, 119, 182]},
      {name: "Maxi xadrez amarelo", price: 1, box: [934, 12, 242, 319], placement: [96.7, 104, 120, 182]},
      {name: "Maxi de veludo ameixa", price: 2, box: [1247, 13, 231, 322], placement: [97.2, 104, 119, 183]},
      {name: "Midi coral de bolinhas", price: 1, box: [48, 352, 253, 304], placement: [101.7, 104, 110, 147]},
      {name: "Midi plissado verde-petróleo", price: 2, box: [358, 356, 239, 300], placement: [102.7, 104, 108, 147]},
      {name: "Midi creme de morangos", price: 8, box: [641, 352, 254, 307], placement: [99.2, 104, 115, 148]},
      {name: "Midi azul-marinho abotoado", price: 1, box: [938, 347, 241, 310], placement: [104.7, 104, 104, 146]},
      {name: "Midi lavanda em camadas", price: 3, box: [1231, 352, 261, 305], placement: [100.7, 104, 112, 147]},
      {name: "Vestido prateado de estrelas", price: 10, box: [27, 686, 288, 318], placement: [96.2, 104, 121, 141]},
      {name: "Vestido de cetim esmeralda", price: 3, box: [346, 686, 263, 318], placement: [103.7, 104, 106, 139]},
      {name: "Vestido rosa de babados", price: 5, box: [631, 686, 273, 314], placement: [98.2, 104, 117, 139]},
      {name: "Vestido azul com bordado dourado", price: 1, box: [923, 687, 269, 313], placement: [100.2, 104, 113, 141]},
      {name: "Vestido de lantejoulas rosé", price: 2, box: [1224, 686, 278, 317], placement: [99.2, 104, 115, 140]}
    ]
  },
  {
    category: "top", slot: "top", sheet: "colecao90-blusas", size: [1536, 1024],
    pieces: [
      {name: "Camiseta amarela de margaridas", price: 13, box: [32, 58, 262, 235], placement: [117.7, 104, 78, 62]},
      {name: "Camiseta lilás de gatinho", price: 2, box: [335, 60, 255, 233], placement: [118.7, 104, 76, 65]},
      {name: "Blusa marinheira azul", price: 6, box: [631, 55, 273, 239], placement: [115.7, 104, 82, 65]},
      {name: "Camiseta coral listrada", price: 1, box: [938, 60, 261, 231], placement: [118.7, 104, 76, 64]},
      {name: "Blusa menta de mangas bufantes", price: 3, box: [1238, 58, 272, 232], placement: [114.2, 104, 85, 63]},
      {name: "Cardigã vermelho de tricô", price: 10, box: [12, 385, 295, 226], placement: [101.2, 104, 111, 68]},
      {name: "Suéter creme de tranças", price: 3, box: [321, 385, 287, 224], placement: [101.2, 104, 111, 68]},
      {name: "Moletom lilás de estrelas", price: 7, box: [620, 386, 294, 222], placement: [100.7, 104, 112, 68]},
      {name: "Jaqueta jeans abotoada", price: 1, box: [925, 380, 290, 231], placement: [101.2, 104, 111, 69]},
      {name: "Blusa verde-oliva de gola alta", price: 2, box: [1230, 374, 290, 235], placement: [101.2, 102, 111, 70]},
      {name: "Blusa rosa com babados", price: 13, box: [53, 706, 218, 251], placement: [123.2, 104, 67, 65]},
      {name: "Colete marinheiro azul-marinho", price: 2, box: [368, 702, 199, 256], placement: [127.7, 104, 58, 65]},
      {name: "Blusa verde-petróleo sem mangas", price: 8, box: [671, 697, 197, 261], placement: [126.7, 104, 60, 66]},
      {name: "Blusa peplum pêssego", price: 1, box: [953, 709, 233, 250], placement: [124.2, 104, 65, 70]},
      {name: "Blusa floral creme sem mangas", price: 3, box: [1278, 706, 207, 251], placement: [126.2, 104, 61, 67]}
    ]
  },
  {
    category: "pants", slot: "bottom", sheet: "colecao90-calcas", size: [1536, 1024],
    pieces: [
      {name: "Jeans reto azul médio", price: 5, box: [111, 18, 144, 310], placement: [123.7, 156, 66, 137]},
      {name: "Calça reta de cotelê lavanda", price: 3, box: [406, 17, 145, 311], placement: [123.7, 156, 66, 137]},
      {name: "Calça reta floral creme", price: 5, box: [695, 17, 147, 311], placement: [123.7, 156, 66, 137]},
      {name: "Calça chino chocolate", price: 1, box: [985, 17, 146, 311], placement: [123.7, 156, 66, 136]},
      {name: "Calça preta risca de giz", price: 2, box: [1277, 18, 150, 310], placement: [123.2, 156, 67, 137]},
      {name: "Calça boca de sino coral", price: 6, box: [79, 353, 208, 311], placement: [111.2, 156, 91, 135]},
      {name: "Pantacourt plissada menta", price: 2, box: [363, 353, 230, 298], placement: [109.2, 156, 95, 112]},
      {name: "Jeans largo índigo", price: 6, box: [657, 353, 222, 311], placement: [110.7, 156, 92, 136]},
      {name: "Calça pantalona mostarda", price: 1, box: [938, 353, 239, 314], placement: [109.7, 156, 94, 138]},
      {name: "Calça marinheira azul royal", price: 3, box: [1246, 353, 210, 311], placement: [112.7, 156, 88, 137]},
      {name: "Calça cargo oliva", price: 7, box: [99, 688, 166, 317], placement: [121.2, 156, 71, 132]},
      {name: "Jogger rosa com punhos", price: 1, box: [399, 688, 158, 312], placement: [122.2, 156, 69, 132]},
      {name: "Calça xadrez cinza", price: 2, box: [693, 689, 148, 315], placement: [123.7, 156, 66, 134]},
      {name: "Jeans branco de tornozelo", price: 1, box: [984, 689, 148, 305], placement: [123.2, 156, 67, 126]},
      {name: "Calça afunilada framboesa", price: 2, box: [1273, 689, 155, 315], placement: [123.2, 156, 67, 131]}
    ]
  },
  {
    category: "shorts", slot: "bottom", sheet: "colecao90-shorts", size: [1536, 1024],
    pieces: [
      {name: "Short jeans azul com barra dobrada", price: 8, box: [31, 87, 284, 194], placement: [124.7, 156, 64, 45]},
      {name: "Short pregueado lilás", price: 1, box: [331, 87, 290, 202], placement: [124.2, 156, 65, 46]},
      {name: "Short xadrez menta", price: 3, box: [636, 88, 272, 192], placement: [124.2, 156, 65, 45]},
      {name: "Short coral de barra ondulada", price: 1, box: [930, 88, 282, 194], placement: [124.2, 156, 65, 45]},
      {name: "Short amarelo com margaridas bordadas", price: 3, box: [1228, 87, 280, 196], placement: [124.2, 156, 65, 46]},
      {name: "Short cargo oliva", price: 5, box: [27, 382, 288, 239], placement: [124.2, 156, 65, 58]},
      {name: "Short marinheiro azul", price: 1, box: [331, 383, 292, 235], placement: [124.2, 156, 65, 58]},
      {name: "Short floral pêssego", price: 2, box: [626, 384, 293, 235], placement: [123.7, 156, 66, 58]},
      {name: "Short alfaiataria creme", price: 11, box: [924, 384, 295, 233], placement: [123.7, 156, 66, 58]},
      {name: "Short jeans com listras rosa", price: 2, box: [1228, 384, 284, 235], placement: [124.2, 156, 65, 58]},
      {name: "Bermuda azul-marinho risca de giz", price: 6, box: [27, 709, 287, 250], placement: [124.2, 156, 65, 70]},
      {name: "Bermuda utilitária sálvia", price: 1, box: [333, 706, 279, 253], placement: [124.2, 156, 65, 69]},
      {name: "Bermuda jeans claro", price: 3, box: [627, 708, 288, 249], placement: [124.2, 156, 65, 69]},
      {name: "Bermuda de linho lavanda", price: 14, box: [926, 708, 288, 249], placement: [124.2, 156, 65, 69]},
      {name: "Bermuda xadrez cereja", price: 3, box: [1228, 708, 286, 248], placement: [124.2, 156, 65, 69]}
    ]
  },
  {
    category: "skirt", slot: "bottom", sheet: "colecao90-saias", size: [1536, 1024],
    pieces: [
      {name: "Minissaia plissada lilás", price: 7, box: [26, 49, 272, 208], placement: [103.2, 156, 107, 49]},
      {name: "Minissaia jeans evasê", box: [339, 49, 251, 200], placement: [110.2, 156, 93, 49]},
      {name: "Minissaia floral pêssego", box: [626, 49, 285, 207], placement: [103.2, 156, 107, 51]},
      {name: "Minissaia xadrez verde", box: [932, 49, 282, 201], placement: [104.2, 156, 105, 50]},
      {name: "Minissaia rosa de tule em camadas", box: [1233, 49, 291, 212], placement: [100.7, 156, 112, 51]},
      {name: "Saia midi mostarda abotoada", price: 1, box: [23, 330, 271, 289], placement: [99.2, 156, 115, 97]},
      {name: "Saia midi azul-marinho plissada", price: 2, box: [332, 330, 261, 290], placement: [101.2, 156, 111, 98]},
      {name: "Saia godê coral", price: 11, box: [621, 330, 295, 290], placement: [95.7, 156, 122, 97]},
      {name: "Saia envelope menta", price: 2, box: [940, 330, 259, 290], placement: [101.7, 156, 110, 97]},
      {name: "Saia midi creme de bolinhas", price: 8, box: [1235, 330, 286, 289], placement: [99.2, 156, 115, 97]},
      {name: "Saia longa azul-céu em camadas", price: 1, box: [17, 663, 285, 330], placement: [91.7, 156, 130, 130]},
      {name: "Saia longa floral lavanda", price: 3, box: [326, 663, 273, 330], placement: [95.7, 156, 122, 129]},
      {name: "Saia longa xadrez vermelha", price: 14, box: [626, 663, 283, 329], placement: [90.7, 156, 132, 130]},
      {name: "Saia longa de cetim esmeralda", price: 3, box: [928, 663, 287, 330], placement: [91.2, 156, 131, 129]},
      {name: "Saia longa bordada creme", price: 5, box: [1237, 663, 283, 331], placement: [91.7, 156, 130, 130]}
    ]
  },
  {
    category: "hair", slot: "hair", sheet: "colecao90-penteados", size: [1536, 1024],
    pieces: [
      {name: "Cabelo longo liso com risca central", price: 1, box: [32, 17, 261, 312], placement: [99.27, 13.57, 111.86, 133.71]},
      {name: "Ondas na altura dos ombros", price: 2, box: [326, 14, 278, 269], placement: [95.01, 12.73, 117.46, 113.66]},
      {name: "Bob cacheado", price: 11, box: [622, 18, 290, 226], placement: [94.13, 12.29, 124.29, 96.86]},
      {name: "Chanel com franja", price: 2, box: [933, 18, 258, 227], placement: [100.18, 10.96, 112.17, 98.7]},
      {name: "Cachos longos e soltos", price: 6, box: [1219, 10, 299, 320], placement: [92.9, 11.89, 126.34, 135.21]},
      {name: "Rabo de cavalo alto", price: 1, box: [53, 337, 249, 326], placement: [110.38, -3.65, 109.85, 143.82]},
      {name: "Rabo de cavalo lateral baixo", price: 3, box: [353, 364, 231, 303], placement: [107.57, 10.52, 100.43, 131.74]},
      {name: "Duas marias-chiquinhas altas", price: 7, box: [604, 374, 325, 228], placement: [85.56, 14.86, 139.29, 97.71]},
      {name: "Coque alto liso", price: 3, box: [967, 340, 208, 247], placement: [112.35, -2.09, 90.43, 107.39]},
      {name: "Dois coques altos", price: 7, box: [1232, 365, 276, 221], placement: [96.7, 8.78, 120.0, 96.09]},
      {name: "Trança lateral", price: 1, box: [41, 674, 238, 342], placement: [103.56, 11.43, 102.0, 146.57]},
      {name: "Duas tranças baixas", price: 2, box: [350, 675, 228, 330], placement: [107.26, 14.0, 96.34, 139.44]},
      {name: "Trança coroa", price: 8, box: [644, 668, 244, 225], placement: [104.41, 9.29, 104.57, 96.43]},
      {name: "Rabo de cavalo trançado", price: 2, box: [951, 667, 239, 326], placement: [111.7, 8.86, 102.43, 139.71]},
      {name: "Semipreso com trança", price: 3, box: [1230, 673, 291, 331], placement: [96.28, 12.73, 122.96, 139.86]}
    ]
  }
];

const princessPieces = [
  {id:236, name:'Vestido azul de cristal', category:'dress', slot:'dress', price:8, box:[40,5,280,324], placement:[76,104,162,184]},
  {id:237, name:'Vestido dourado de rosas', category:'dress', slot:'dress', price:10, box:[325,8,268,322], placement:[81,105,152,186]},
  {id:238, name:'Vestido lilás bordado', category:'dress', slot:'dress', price:10, box:[594,4,274,331], placement:[74,103,166,188]},
  {id:239, name:'Vestido de pétalas verdes', category:'dress', slot:'dress', price:8, box:[871,5,246,325], placement:[80,108,154,182]},
  {id:240, name:'Vestido turquesa de pérolas', category:'dress', slot:'dress', price:10, box:[1125,12,300,318], placement:[69,104,176,186]},
  {id:241, name:'Blusa azul de mangas rubi', category:'top', slot:'top', price:5, box:[53,358,233,159], placement:[103,103,108,59]},
  {id:242, name:'Casaco azul bordado', category:'top', slot:'top', price:6, box:[309,344,275,177], placement:[90,103,134,73]},
  {id:243, name:'Blusa turquesa com arabescos', category:'top', slot:'top', price:5, box:[605,352,225,160], placement:[104,103,106,59]},
  {id:244, name:'Blusa coral geométrica', category:'top', slot:'top', price:3, box:[880,353,232,165], placement:[105,104,104,59]},
  {id:245, name:'Blusa rosa com gola branca', category:'top', slot:'top', price:3, box:[1156,352,254,161], placement:[102,103,110,59]},
  {id:246, name:'Calça balonê turquesa', category:'pants', slot:'bottom', price:5, box:[64,541,200,256], placement:[108,156,98,133]},
  {id:247, name:'Calça azul bordada', category:'pants', slot:'bottom', price:5, box:[368,543,156,255], placement:[125,156,65,134]},
  {id:248, name:'Short coral geométrico', category:'shorts', slot:'bottom', price:3, box:[604,562,217,157], placement:[121,156,73,52]},
  {id:249, name:'Saia rosa com bordado floral', category:'skirt', slot:'bottom', price:6, box:[847,542,289,255], placement:[74,156,166,119]},
  {id:250, name:'Saia dourada de baile', category:'skirt', slot:'bottom', price:5, box:[1141,541,285,263], placement:[77,156,160,125]},
  {id:251, name:'Trança dourada com flores', category:'hair', slot:'hair', price:7, box:[30,818,172,239], placement:[105,6,120,154], overlayHair:true},
  {id:252, name:'Tiara dourada com rosa', category:'head', slot:'head', price:5, box:[235,870,215,117], placement:[105,14,104,56]},
  {id:253, name:'Presilha de flores lilás', category:'head', slot:'head', price:2, box:[485,865,193,123], placement:[175,29,35,22]},
  {id:254, name:'Tiara azul com estrela', category:'head', slot:'head', price:5, box:[695,855,238,127], placement:[105,10,105,56]},
  {id:255, name:'Sapatilhas azuis de laço', category:'shoes', slot:'shoes', price:5, box:[959,938,217,67], placement:[129,294,57,18], fittedFootwear:true},
  {id:256, name:'Sapatilhas douradas de rosa', category:'shoes', slot:'shoes', price:5, box:[1202,936,216,68], placement:[129,294,57,18], fittedFootwear:true}
];
