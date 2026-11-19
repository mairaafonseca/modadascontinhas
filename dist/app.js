const $=id=>document.getElementById(id);
const closetCategories = {
  all: 'Todas', new: 'Novidades', dress: 'Vestidos', top: 'Blusas', pants: 'Calças',
  shorts: 'Shorts', skirt: 'Saias', hair: 'Penteados', head: 'Acessórios de cabelo', shoes: 'Sapatos'
};
const newShoes = [
  {
    "name": "Sapatos rosa com tira",
    "price": 1,
    "box": [
      41,
      102,
      231,
      141
    ],
    "placement": [
      119,
      285,
      75,
      30
    ]
  },
  {
    "name": "Sapatos creme com margaridas",
    "price": 3,
    "box": [
      355,
      104,
      230,
      141
    ],
    "placement": [
      119,
      285,
      75,
      30
    ]
  },
  {
    "name": "Pantufas de pompom",
    "price": 7,
    "box": [
      661,
      106,
      245,
      138
    ],
    "placement": [
      119,
      287,
      75,
      28
    ]
  },
  {
    "name": "Sapatilhas rosa com fitas",
    "price": 1,
    "box": [
      983,
      82,
      229,
      168
    ],
    "placement": [
      119,
      275,
      75,
      40
    ]
  },
  {
    "name": "Sapatilhas douradas com laço",
    "price": 2,
    "box": [
      41,
      393,
      232,
      179
    ],
    "placement": [
      119,
      274,
      75,
      41
    ]
  },
  {
    "name": "Galochas rosa com corações",
    "price": 15,
    "box": [
      358,
      378,
      224,
      196
    ],
    "placement": [
      119,
      264,
      75,
      51
    ]
  },
  {
    "name": "Botas marrons com fivela",
    "price": 2,
    "box": [
      665,
      396,
      237,
      176
    ],
    "placement": [
      119,
      271,
      75,
      44
    ]
  },
  {
    "name": "Tênis branco com listras rosa",
    "price": 8,
    "box": [
      979,
      389,
      237,
      183
    ],
    "placement": [
      119,
      273,
      75,
      42
    ]
  },
  {
    "name": "Sapatilhas vermelhas com laço",
    "price": 1,
    "box": [
      36,
      719,
      242,
      154
    ],
    "placement": [
      119,
      284,
      75,
      31
    ]
  },
  {
    "name": "Sapatilhas creme com laço",
    "price": 3,
    "box": [
      350,
      719,
      241,
      155
    ],
    "placement": [
      119,
      284,
      75,
      31
    ]
  },
  {
    "name": "Sapatos amarelos com laços",
    "price": 12,
    "box": [
      662,
      718,
      244,
      155
    ],
    "placement": [
      119,
      283,
      75,
      32
    ]
  },
  {
    "name": "Pantufas felpudas rosa",
    "price": 3,
    "box": [
      970,
      727,
      253,
      142
    ],
    "placement": [
      119,
      287,
      75,
      28
    ]
  },
  {
    "name": "Tênis rosa com cadarço",
    "price": 5,
    "box": [
      36,
      1013,
      241,
      187
    ],
    "placement": [
      119,
      273,
      75,
      42
    ]
  },
  {
    "name": "Tênis creme com velcro",
    "price": 1,
    "box": [
      349,
      1011,
      244,
      188
    ],
    "placement": [
      119,
      273,
      75,
      42
    ]
  },
  {
    "name": "Tênis rosa com margaridas",
    "price": 2,
    "box": [
      660,
      1042,
      247,
      156
    ],
    "placement": [
      119,
      281,
      75,
      34
    ]
  },
  {
    "name": "Botas rosa com cadarço",
    "price": 15,
    "box": [
      976,
      1019,
      243,
      181
    ],
    "placement": [
      119,
      270,
      75,
      45
    ]
  }
];
// Shoe IDs are retained so previously earned pairs remain unlocked.
const featuredPieces = [
  {"name": "Vestido lilás em camadas", "price": 2, "category": "dress", "slot": "dress", "sheet": "colecao-vestidos", "box": [34, 151, 399, 447], "size": [2172, 724], "placement": [103.89, 103, 106.22, 119]},
  {"name": "Vestido de moranguinhos", "price": 6, "category": "dress", "slot": "dress", "sheet": "colecao-vestidos", "box": [468, 149, 387, 448], "size": [2172, 724], "placement": [106.47, 103, 101.07, 117]},
  {"name": "Jardineira de nuvem", "price": 1, "category": "dress", "slot": "dress", "sheet": "colecao-vestidos", "box": [898, 149, 371, 442], "size": [2172, 724], "placement": [109.58, 103, 94.85, 113]},
  {"name": "Vestido floral pêssego", "price": 3, "category": "dress", "slot": "dress", "sheet": "colecao-vestidos", "box": [1311, 149, 388, 451], "size": [2172, 724], "placement": [105.38, 103, 103.24, 120]},
  {"name": "Vestido verde com gola branca", "price": 12, "category": "dress", "slot": "dress", "sheet": "colecao-vestidos", "box": [1739, 147, 399, 446], "size": [2172, 724], "placement": [104.66, 103, 104.67, 117]},
  {"name": "Cardigã de margaridas", "category": "top", "slot": "top", "sheet": "colecao-blusas", "box": [34, 197, 402, 322], "size": [2172, 724], "placement": [112.06, 103, 89.89, 72]},
  {"name": "Camiseta de gatinho", "price": 3, "category": "top", "slot": "top", "sheet": "colecao-blusas", "box": [492, 197, 336, 322], "size": [2172, 724], "placement": [121.0, 103, 72.0, 69]},
  {"name": "Blusa marinheira", "price": 7, "category": "top", "slot": "top", "sheet": "colecao-blusas", "box": [910, 197, 353, 321], "size": [2172, 724], "placement": [121.26, 103, 71.48, 65]},
  {"name": "Suéter listrado", "category": "top", "slot": "top", "sheet": "colecao-blusas", "box": [1314, 197, 402, 319], "size": [2172, 724], "placement": [112.27, 103, 89.47, 71]},
  {"name": "Blusa verde com babados", "category": "top", "slot": "top", "sheet": "colecao-blusas", "box": [1747, 197, 406, 319], "size": [2172, 724], "placement": [111.82, 103, 90.36, 71]},
  {"name": "Calça jeans reta", "category": "pants", "slot": "bottom", "sheet": "colecao-calcas", "box": [110, 61, 252, 598], "size": [2172, 724], "placement": [127.71, 156, 58.58, 139]},
  {"name": "Calça de veludo lilás", "category": "pants", "slot": "bottom", "sheet": "colecao-calcas", "box": [525, 60, 268, 602], "size": [2172, 724], "placement": [126.06, 156, 61.88, 139]},
  {"name": "Calça cargo verde", "category": "pants", "slot": "bottom", "sheet": "colecao-calcas", "box": [946, 60, 282, 601], "size": [2172, 724], "placement": [124.39, 156, 65.22, 139]},
  {"name": "Calça flare coral", "category": "pants", "slot": "bottom", "sheet": "colecao-calcas", "box": [1338, 60, 347, 606], "size": [2172, 724], "placement": [117.2, 156, 79.59, 139]},
  {"name": "Calça floral creme", "category": "pants", "slot": "bottom", "sheet": "colecao-calcas", "box": [1810, 60, 252, 602], "size": [2172, 724], "placement": [127.91, 156, 58.19, 139]},
  {"name": "Short jeans", "price": 1, "category": "shorts", "slot": "bottom", "sheet": "colecao-shorts", "box": [59, 227, 349, 255], "size": [2172, 724], "placement": [124.16, 156, 65.69, 48]},
  {"name": "Short lilás dobrado", "price": 2, "category": "shorts", "slot": "bottom", "sheet": "colecao-shorts", "box": [484, 227, 353, 254], "size": [2172, 724], "placement": [123.65, 156, 66.71, 48]},
  {"name": "Short xadrez verde", "price": 8, "category": "shorts", "slot": "bottom", "sheet": "colecao-shorts", "box": [909, 227, 352, 258], "size": [2172, 724], "placement": [124.25, 156, 65.49, 48]},
  {"name": "Short pêssego ondulado", "price": 2, "category": "shorts", "slot": "bottom", "sheet": "colecao-shorts", "box": [1330, 227, 365, 253], "size": [2172, 724], "placement": [122.38, 156, 69.25, 48]},
  {"name": "Short amarelo de margaridas", "price": 8, "category": "shorts", "slot": "bottom", "sheet": "colecao-shorts", "box": [1762, 227, 354, 258], "size": [2172, 724], "placement": [124.07, 156, 65.86, 48]},
  {"name": "Saia plissada lilás", "price": 1, "category": "skirt", "slot": "bottom", "sheet": "colecao-saias", "box": [34, 212, 383, 316], "size": [2172, 724], "placement": [117.0, 156, 79.99, 66]},
  {"name": "Saia jeans evasê", "price": 3, "category": "skirt", "slot": "bottom", "sheet": "colecao-saias", "box": [465, 213, 379, 310], "size": [2172, 724], "placement": [117.88, 156, 78.25, 64]},
  {"name": "Saia floral pêssego", "price": 5, "category": "skirt", "slot": "bottom", "sheet": "colecao-saias", "box": [880, 210, 410, 318], "size": [2172, 724], "placement": [113.81, 156, 86.38, 67]},
  {"name": "Saia xadrez menta", "price": 3, "category": "skirt", "slot": "bottom", "sheet": "colecao-saias", "box": [1310, 211, 396, 314], "size": [2172, 724], "placement": [115.38, 156, 83.24, 66]},
  {"name": "Saia de tule rosa", "price": 5, "category": "skirt", "slot": "bottom", "sheet": "colecao-saias", "box": [1735, 210, 413, 324], "size": [2172, 724], "placement": [111.11, 156, 91.78, 72]},
  {"name": "Presilha de laço lilás", "price": 1, "category": "head", "slot": "head", "sheet": "colecao-acessorios-cabelo", "box": [74, 249, 289, 184], "size": [2172, 724], "placement": [176, 24, 38, 23]},
  {"name": "Tiara de margaridas", "price": 2, "category": "head", "slot": "head", "sheet": "colecao-acessorios-cabelo", "box": [465, 208, 367, 268], "size": [2172, 724], "placement": [101.42625, 11.894, 109.1475, 58.212]},
  {"name": "Presilhas de estrela", "price": 6, "category": "head", "slot": "head", "sheet": "colecao-acessorios-cabelo", "box": [929, 215, 295, 269], "size": [2172, 724], "placement": [175, 30, 29, 27]},
  {"name": "Elástico xadrez coral", "price": 1, "category": "head", "slot": "head", "sheet": "colecao-acessorios-cabelo", "box": [1304, 226, 382, 236], "size": [2172, 724], "placement": [176, 11, 43, 24]},
  {"name": "Tiara azul acolchoada", "price": 3, "category": "head", "slot": "head", "sheet": "colecao-acessorios-cabelo", "box": [1764, 228, 361, 229], "size": [2172, 724], "placement": [104.025, 13.59, 103.95, 50.82]}
];
const collectionPieces = collectionBoards.flatMap(({pieces, ...board}) =>
  pieces.map(piece => ({...board, ...piece, fitted: true}))
);
// Keep the original IDs so saved outfits and rewards still refer to the same pieces.
const retiredPieceIds = new Set([111, 114, 115, 116, 117, 118, 119, 120, 197, 198, 199, 200]);
const christmasPieces = [
  [226, {price:1, name:'Vestido de Natal com estrelas', category:'dress', slot:'dress', box:[27,48,297,370], placement:[97,103,120,147]}],
  [227, {price:3, name:'Suéter de rena', category:'top', slot:'top', box:[377,101,320,214], placement:[100,104,114,71]}],
  [228, {price:5, name:'Saia xadrez de Natal', category:'skirt', slot:'bottom', box:[739,116,292,222], placement:[104,157,106,67]}],
  [229, {price:1, name:'Blusa de flocos de neve', category:'top', slot:'top', box:[1085,108,312,208], placement:[100,104,114,71]}],
  [230, {price:2, name:'Sapatilhas de azevinho', category:'shoes', slot:'shoes', box:[1476,144,243,183], placement:[119,285,75,30]}],
  [231, {price:1, name:'Tiara verde de estrelas', category:'head', slot:'head', box:[46,555,267,190], placement:[105,10,102,69]}],
  [232, {price:2, name:'Casaco vermelho de Natal', category:'top', slot:'top', box:[375,476,322,356], placement:[100,102,114,116]}],
  [233, {price:6, name:'Calça verde de azevinho', category:'pants', slot:'bottom', box:[793,468,186,377], placement:[123,156,68,135]}],
  [234, {price:1, name:'Short de veludo vermelho', category:'shorts', slot:'bottom', box:[1083,533,307,243], placement:[122,156,70,54]}],
  [235, {price:3, name:'Coque lateral com trança em coroa', category:'hair', slot:'hair', box:[1445,509,314,287], placement:[103,1,118,108]}]
].map(([id, piece]) => [id, {...piece, sheet:'colecao-natal', size:[1774,887], fitted:true, collection:'natal'}]);
const collections = {
  natal: { id:'natal', name:'Coleção de Natal', launchId:'natal-2026' }
};
const catalog = new Map([
  ...newShoes.map((shoe, index) => [90 + index, {
    ...shoe, slot: 'shoes', category: 'shoes', sheet: 'shoes', size: [1254, 1254]
  }]),
  ...featuredPieces.map((piece, index) => [106 + index, piece]),
  ...collectionPieces.map((piece, index) => [136 + index, piece]),
  ...christmasPieces
].filter(([id]) => !retiredPieceIds.has(id)));
const catalogIds = [...catalog.keys()];
const activePieceIds = new Set(catalogIds);
const slotFor = id => catalog.get(id)?.slot;
let worn={},closetCategory='all',savedTestOutfit=null;
const canWear = id => savedTestOutfit !== null || owned.includes(id);
const supportedTables = Array.from({length: 10}, (_, index) => index + 1);
const defaults={groups:{multiply:true,add:true,fraction:true},tables:[1,2,3,4,5],digits:2};
const saveKey = 'atelie-pieces-v2';
function loadProgress(key) {
  try { return JSON.parse(localStorage.getItem(key)); } catch { return null; }
}
const saved = loadProgress(saveKey) || loadProgress('atelie-v1') || {};
const savedOwned = Array.isArray(saved.owned) ? saved.owned : [];
const owned = [...new Set(savedOwned.filter(id => activePieceIds.has(id)))];
const archivedOwned = savedOwned.filter(id => !activePieceIds.has(id));
const discovered = new Set(Array.isArray(saved.discovered) ? saved.discovered.filter(id => activePieceIds.has(id)) : []);
let previousOffers = Array.isArray(saved.previousOffers) ? saved.previousOffers.filter(id => activePieceIds.has(id)) : [];
let economyCorrect = Math.max(0, Number(saved.economyCorrect) || 0);
let stars = Math.max(0, Number(saved.stars) || 0);
const seenCollectionReleases = Array.isArray(saved.seenCollectionReleases) ? saved.seenCollectionReleases : [];
let config = saved.config?.groups && Array.isArray(saved.config.tables) && [1,2,3].includes(saved.config.digits)
  ? saved.config : JSON.parse(JSON.stringify(defaults));
worn = Object.fromEntries(Object.entries(saved.worn || {}).filter(([slot,id]) => owned.includes(id) && slotFor(id) === slot));
if (worn.dress !== undefined) {
  delete worn.top;
  delete worn.bottom;
}
config.tables = supportedTables.filter(table => config.tables.includes(table));
if (!config.tables.length) config.tables = [...defaults.tables];
let mode=Object.keys(defaults.groups).find(k=>config.groups[k])||'multiply',a=5,b=3,den=4,num=1,food='pizza',round=1,solved=false,rewardPending=false,offers=[],helpStep=-1,dialogKind='',lastFocus,deck=[];
function save() {
  try {
    localStorage.setItem(saveKey, JSON.stringify({
      ...saved, piecesVersion: 2, config, owned: [...owned, ...archivedOwned],
      worn: savedTestOutfit ?? worn, stars, seenCollectionReleases,
      discovered: [...discovered], previousOffers, economyCorrect
    }));
  } catch {}
}
function outfitName(id) {
  return catalog.get(id).name;
}

const priceFor = id => catalog.get(id)?.price;
const pieceState = id => owned.includes(id) ? 'owned' : discovered.has(id) ? 'discovered' : 'undiscovered';
const starAmount = amount => `${amount} estrelinha${amount === 1 ? '' : 's'}`;
const missingStars = amount => `Falta${amount === 1 ? '' : 'm'} ${starAmount(amount)} para esta peça.`;

function isNewCollectionPiece(id) {
  return Boolean(catalog.get(id)?.collection);
}

function buyPiece(id) {
  const price = priceFor(id);
  if (pieceState(id) !== 'discovered' || stars < price) return false;
  stars -= price;
  owned.push(id);
  save();
  renderWardrobe();
  return true;
}

function fittedShoePlacement({placement: [x, y, width, height], box: [, , artworkWidth, artworkHeight]}) {
  const fittedWidth = width * 0.7752;
  const fittedHeight = fittedWidth * artworkHeight / artworkWidth;
  return [x + (width - fittedWidth) / 2, y + height - fittedHeight, fittedWidth, fittedHeight];
}

function garmentSprite(id, preview = false) {
  const piece = catalog.get(id);
  const [x, y, width, height] = preview ? [8, 8, 134, 134] :
    (piece.slot === 'shoes' ? fittedShoePlacement(piece) : piece.placement);
  const fit = preview || piece.slot === 'shoes' || !piece.fitted ? 'xMidYMid meet' : 'none';
  return `<svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${piece.box.join(' ')}" preserveAspectRatio="${fit}"><image href="assets/${piece.sheet}.png" width="${piece.size[0]}" height="${piece.size[1]}"/></svg>`;
}

function pieceHTML(id) {
  return `<svg class="piece-preview" viewBox="0 0 150 150" role="img" aria-label="${outfitName(id)}">${garmentSprite(id, true)}</svg>`;
}
const dollImage = '<image href="assets/doll-polka.png" x="53" y="5" width="215" height="312" preserveAspectRatio="none"/>';
let dollRenderId=0;
function originalFace(renderId) {
  const mask = 'doll-face-' + renderId;
  const edge = 'doll-face-edge-' + renderId;
  return `<defs>
    <filter id="${edge}" x="110" y="53" width="95" height="60" filterUnits="userSpaceOnUse">
      <feGaussianBlur stdDeviation="2"/>
    </filter>
    <mask id="${mask}" x="110" y="53" width="95" height="60" maskUnits="userSpaceOnUse">
      <path d="M128 66Q136 62 145 64Q156 66 167 64Q177 62 185 67L185 82Q183 96 166 101Q157 104 148 101Q131 96 128 84Z"
        fill="white" filter="url(#${edge})"/>
    </mask>
  </defs><g mask="url(#${mask})">${dollImage}</g>`;
}
function dollHTML(){
const maskId='doll-occlusion-'+(++dollRenderId);
let exclusions='';
// Only hide body regions actually covered by a garment. Exposed arms, neck,
// belly and legs remain part of the base doll and return when clothes are removed.
const hasNarrowDress = [108, 136, 147].includes(worn.dress);
if(worn.bottom!==undefined||(worn.dress!==undefined&&!hasNarrowDress))exclusions+='<path d="M123 162H192V197H123Z" fill="black"/>';
if(worn.top!==undefined||(worn.dress!==undefined&&!hasNarrowDress))exclusions+='<path d="M137 116H179L183 162H131Z" fill="black"/>';
// Follow the transparent gap between the ponytail and the right shoulder.
if(worn.hair!==undefined)exclusions+='<path d="M55 0H265V130H193L191 124L187 115L181 111L174 106H55Z" fill="black"/>';
// The replacement head overlaps the top of the original neck.
if(worn.hair!==undefined)exclusions+='<path d="M148 102Q156.7 104 165.5 102L166 108H147.5Z" fill="white"/>';
if(hasNarrowDress)exclusions+='<path d="M142 128H171V157H142Z M133 175H181V196H133Z" fill="black"/>';
if(worn.shoes!==undefined)exclusions+='<path d="M128 298H185V314H128Z" fill="black"/>';
let html='<svg class="layered-doll" viewBox="55 0 210 320" role="img" aria-label="Boneca de traje de banho com peças escolhidas separadamente">';
if(exclusions)html+=`<defs><mask id="${maskId}" maskUnits="userSpaceOnUse" x="55" y="0" width="210" height="320"><rect x="55" y="0" width="210" height="320" fill="white"/>${exclusions}</mask></defs><g mask="url(#${maskId})">`;
html+=dollImage;
const necklineId = 'swim-neckline-' + dollRenderId;
const silhouetteId = 'swim-silhouette-' + dollRenderId;
html+=`<defs>
  <clipPath id="${necklineId}">
    <path d="M138 106H173L177 113L176 130Q159 136 138 130L137 114Z"/>
  </clipPath>
  <mask id="${silhouetteId}" mask-type="alpha" maskUnits="userSpaceOnUse" x="53" y="5" width="215" height="312">${dollImage}</mask>
</defs>
<g mask="url(#${silhouetteId})" clip-path="url(#${necklineId})">
  <image href="assets/decote-alcas.png" x="53" y="5" width="215" height="312" preserveAspectRatio="none"/>
</g>`;
if(exclusions)html+='</g>';
for(const slot of ['shoes','bottom','top','dress','hair','head','bag']){const id=worn[slot];if(id!==undefined){html+=garmentSprite(id);if(slot==='hair')html+=originalFace(dollRenderId)}}
return html+'</svg>';
}
function wearPiece(outfit, id) {
  const slot = slotFor(id);
  if (slot === 'dress') {
    delete outfit.top;
    delete outfit.bottom;
  } else if (slot === 'top' || slot === 'bottom') {
    delete outfit.dress;
  }
  outfit[slot] = id;
}

function equip(id) {
  if (!canWear(id)) return;
  wearPiece(worn, id);
  save();
  renderWardrobe();
}
function renderWardrobe() {
  $('stars').textContent = stars;
  $('doll').innerHTML = dollHTML();
  $('count').textContent = '';
}

const activityTabs = {
  multiply: 'Tabuada',
  add: 'Soma',
  fraction: 'Fração'
};

function activityIconPath(activity) {
  return ({
    multiply: 'assets/figma-tab-multiply.png',
    add: 'assets/figma-tab-add.png',
    fraction: 'assets/figma-tab-fraction.png'
  })[activity];
}

function renderModes() {
  $('modes').innerHTML = Object.entries(activityTabs)
    .filter(([key]) => config.groups[key])
    .map(([key, title]) => `
      <button type="button" class="mode ${mode === key ? 'active' : ''}" data-mode="${key}"
              aria-pressed="${mode === key}" ${rewardPending ? 'disabled' : ''}>
        <span class="mode-icon"><img src="${activityIconPath(key)}" width="33" height="33" alt=""></span>
        <span><b>${title}</b></span>
      </button>`).join('');
  document.querySelectorAll('[data-mode]').forEach(button => {
    button.onclick = () => {
      mode = button.dataset.mode;
      round = 1;
      newProblem();
    };
  });
}
function shuffled(arr){return arr.map(v=>({v,r:Math.random()})).sort((x,y)=>x.r-y.r).map(x=>x.v)}
function newProblem(){solved=false;rewardPending=false;offers=[];helpStep=-1;$('help').hidden=false;$('check').hidden=false;$('earned').hidden=true;$('feedback').textContent='';if(mode==='multiply'){if(!deck.length)deck=shuffled(config.tables.flatMap(t=>Array.from({length:11},(_,i)=>[t,i])));[a,b]=deck.pop()}else if(mode==='add'){const min=10**(config.digits-1),max=10**config.digits-1;a=min+Math.floor(Math.random()*(max-min+1));b=min+Math.floor(Math.random()*(max-min+1))}else{den=[2,3,4,6,8][Math.floor(Math.random()*5)];num=1+Math.floor(Math.random()*(den-1));food=Math.random()<.5?'pizza':'torta'}renderModes();renderExercise();learning.begin()}
const keypad = $('keypad');
keypad.innerHTML = [7,8,9,4,5,6,1,2,3,'erase',0].map(key => key === 'erase'
  ? '<button type="button" data-key="erase" aria-label="Apagar" title="Apagar"><img src="assets/figma-backspace-figma.png" alt=""></button>'
  : `<button type="button" data-key="${key}">${key}</button>`).join('');

let activeAnswer;
function selectAnswer(input) {
  activeAnswer?.classList.remove('answer-active');
  activeAnswer = input;
  activeAnswer?.classList.add('answer-active');
}
$('exercise').addEventListener('focusin', event => {
  if (event.target.matches('input.answer')) selectAnswer(event.target);
});
keypad.addEventListener('click', event => {
  const button = event.target.closest('[data-key]');
  if (!button || solved || !activeAnswer) return;
  let input = activeAnswer;
  if (button.dataset.key === 'erase' && !input.value && mode === 'add') {
    const previous = $('digit' + (Number(input.dataset.digit) - 1));
    if (previous) input = previous;
  }
  input.focus({preventScroll: true});
  if (button.dataset.key === 'erase') {
    input.value = input.value.slice(0, -1);
  } else if (mode === 'add') {
    input.value = button.dataset.key;
    input.dispatchEvent(new Event('input', {bubbles: true}));
  } else if (input.value.length < input.maxLength) {
    input.value += button.dataset.key;
    if (mode === 'fraction' && input.id === 'numerator') $('denominator').focus({preventScroll: true});
  }
});
function renderExercise(){
  $('exerciseHeader').dataset.mode=mode;
  $('exerciseIcon').src=activityIconPath(mode);
  $('lesson').textContent=activityTabs[mode];
  $('round').textContent='Desafio '+round;
if(mode==='multiply'){$('exercise').innerHTML=`<div class="equation"><span>${a} × ${b} =</span><input class="answer" id="answer" aria-label="Sua resposta" inputmode="none" autocomplete="off" maxlength="3" placeholder="?"></div>`}
else if(mode==='add'){const cols=config.digits+1;let html=`<div class="sumboard" style="--cols:${cols}"><span></span>`;const places=['U','D','C','M'];for(let c=cols-1;c>=0;c--)html+=`<span class="place">${places[c]}</span>`;html+='<span></span>';for(let c=cols-1;c>=0;c--)html+=c>0?`<button type="button" class="carry" data-carry="${c}" aria-label="Marcar vai um na coluna ${places[c]}" aria-pressed="false">+</button>`:'<span></span>';for(let r=0;r<2;r++){html+=`<span>${r?'+':''}</span>`;for(let c=cols-1;c>=0;c--)html+=`<span>${digitAt(r?b:a,c)}</span>`}html+='<div class="sum-rule"></div><span></span>';for(let c=cols-1;c>=0;c--)html+=`<input class="answer" data-digit="${c}" id="digit${c}" aria-label="${['Unidades','Dezenas','Centenas','Milhares'][c]} da resposta" inputmode="none" autocomplete="off" maxlength="1" placeholder="${c===cols-1?'·':'?'}">`;html+='</div>';$('exercise').innerHTML=html;document.querySelectorAll('[data-carry]').forEach(btn=>btn.onclick=()=>{const on=btn.getAttribute('aria-pressed')!=='true';btn.setAttribute('aria-pressed',on);btn.textContent=on?'1':'+'});document.querySelectorAll('[data-digit]').forEach(input=>input.oninput=()=>{input.value=input.value.replace(/\D/g,'');let next=Number(input.dataset.digit)+1;if(input.value&&next<cols)$('digit'+next).focus({preventScroll:true})})}
else{$('exercise').innerHTML=`<div class="fraction-exercise">${pizzaSVG(num,den,food)}<div class="fraction-input"><input class="answer" id="numerator" aria-label="Numerador: partes coloridas" inputmode="none" autocomplete="off" maxlength="2" placeholder="?"><span></span><input class="answer" id="denominator" aria-label="Denominador: total de partes" inputmode="none" autocomplete="off" maxlength="2" placeholder="?"></div></div>`}
  selectAnswer($('answer') || $('digit0') || $('numerator'));
  keypad.querySelectorAll('button').forEach(button => button.disabled = false);
}
function digitAt(n,c){return c>=String(n).length?'':Math.floor(n/10**c)%10}
let pizzaVisualCounter=0;
function pizzaSVG(n,d,kind='pizza',limit=d,countAll=false){
  const uid=`pizza-${++pizzaVisualCounter}`;
  const cx=180,cy=175,r=133,span=2*Math.PI/d;
  let slices='',toppings='';
  for(let i=0;i<d;i++){
    const t1=i*span-Math.PI/2,t2=(i+1)*span-Math.PI/2,mid=(t1+t2)/2;
    const p1=[cx+r*Math.cos(t1),cy+r*Math.sin(t1)],p2=[cx+r*Math.cos(t2),cy+r*Math.sin(t2)];
    const colored=!countAll&&i<n;
    const visible=i<limit;
    slices+=`<path class="fraction-piece" style="animation-delay:${i*.08}s;opacity:${visible?1:.2}" d="M${cx} ${cy} L${p1[0].toFixed(1)} ${p1[1].toFixed(1)} A${r} ${r} 0 ${span>Math.PI?1:0} 1 ${p2[0].toFixed(1)} ${p2[1].toFixed(1)} Z" fill="url(#${uid}-${colored?'pink':'yellow'})"/>`;
    if(visible){
      const color=colored?'#F65861':'#FBAB49';
      for(const [distance,offset,scale] of [[78,-.16,.76],[103,.2,.96]]){
        const t=mid+offset;
        toppings+=`<use href="#${uid}-dot" transform="translate(${(cx+distance*Math.cos(t)).toFixed(1)} ${(cy+distance*Math.sin(t)).toFixed(1)}) scale(${scale})" style="color:${color}"/>`;
      }
    }
  }
  return `<svg class="pizza pizza-dress-up" viewBox="0 0 360 360" role="img" aria-label="${kind} dividida em ${d} partes iguais${countAll?'':`, ${n} coloridas`}" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="${uid}-crust" x1="15%" y1="5%" x2="72%" y2="96%"><stop stop-color="#ffe399"/><stop offset=".52" stop-color="#f7b951"/><stop offset="1" stop-color="#cd713d"/></linearGradient><linearGradient id="${uid}-yellow" x2="72%" y2="100%"><stop stop-color="#fff1a2"/><stop offset="1" stop-color="#ffc554"/></linearGradient><linearGradient id="${uid}-pink" x2="74%" y2="100%"><stop stop-color="#ffc6d6"/><stop offset="1" stop-color="#eb779d"/></linearGradient><filter id="${uid}-shadow" x="-15%" y="-15%" width="130%" height="140%"><feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#65203d" flood-opacity=".18"/></filter><g id="${uid}-dot"><circle r="9.2" cy="1.7" fill="#833d4d" opacity=".18"/><circle r="9" fill="currentColor" stroke="#743348" stroke-width="1.65"/><path d="M-5-1.7Q-4.2-5-1-5.4" fill="none" stroke="#fff8e8" stroke-width="2" stroke-linecap="round" opacity=".64"/></g></defs><g stroke="#743348" stroke-linecap="round" stroke-linejoin="round"><path d="M180 19C270 18 338 88 339 175C341 266 273 337 182 339C92 340 22 271 21 182C19 92 89 21 180 19Z" fill="#b45c41" stroke-width="5" filter="url(#${uid}-shadow)"/><path d="M180 17C268 16 337 84 337 172C339 259 271 330 181 331C93 333 23 264 23 177C21 88 91 19 180 17Z" fill="url(#${uid}-crust)" stroke-width="4.5"/><path d="M42 142C54 90 91 52 142 37M154 34Q165 31 176 31" fill="none" stroke="#fff5c1" stroke-width="5" opacity=".77"/><path d="M314 226C298 272 261 303 218 315" fill="none" stroke="#ac5341" stroke-width="3" opacity=".33"/></g><g stroke="#743348" stroke-width="3.5" stroke-linejoin="round">${slices}</g><g fill="none" stroke="#fff9d8" stroke-width="3" stroke-linecap="round" opacity=".46"><path d="M192 51Q244 54 275 89M300 124Q315 153 310 179M290 251Q264 289 215 300M164 298Q115 292 86 258M59 224Q45 188 53 153M76 105Q106 62 160 52"/></g><g>${toppings}</g></svg>`;
}
$('form').onsubmit=e=>{e.preventDefault();if(solved)return;let correct=false,submitted='';if(mode==='fraction'){const n=$('numerator').value.trim(),d=$('denominator').value.trim();if(!/^\d+$/.test(n)||!/^\d+$/.test(d)||!Number(d))return feedback('Preencha as duas partes da fração.');submitted=n+'/'+d;correct=Number(n)*den===num*Number(d)}else{let value=mode==='add'?Array.from({length:config.digits+1},(_,i)=>$('digit'+(config.digits-i)).value).join(''):$('answer').value.trim();if(!/^\d+$/.test(value))return feedback('Digite sua resposta para conferir.');if(mode==='add'&&Array.from({length:config.digits},(_,i)=>$('digit'+i).value).some(v=>v===''))return feedback('Preencha cada coluna da resposta.');submitted=value;correct=Number(value)===(mode==='add'?a+b:a*b)}const earnedHelp=learning.record({mode,table:a,question:mode==='fraction'?`${num}/${den} da ${food}`:`${a} ${mode==='add'?'+':'×'} ${b}`,answer:submitted,expected:mode==='fraction'?`${num}/${den}`:String(mode==='add'?a+b:a*b),correct});if(!correct)return feedback('Vamos tentar de novo? Você consegue 💛');solved=true;rewardPending=true;$('help').hidden=true;$('check').hidden=true;document.querySelectorAll('#exercise input,#exercise button,#keypad button').forEach(x=>x.disabled=true);feedback('Você acertou! +1 estrelinha!'+(earnedHelp?' +1 ajudinha!':''));earnReward();renderModes();showReward()};
function feedback(t){$('feedback').textContent=t}
function openDialog(kind,title,body){lastFocus=document.activeElement;dialogKind=kind;$('modal').dataset.view=kind;$('dialogTitle').textContent=title;$('dialogBody').innerHTML=body;$('dialogActions').innerHTML='';$('modal').hidden=false;$('close').focus()}
function closeDialog() {
  $('modal').hidden = true;
  if (dialogKind === 'reward') $('continueRound')?.focus();
  else lastFocus?.focus();
}
$('close').onclick=closeDialog;
document.addEventListener('keydown',e=>{if($('modal').hidden)return;if(e.key==='Escape')closeDialog();if(e.key==='Tab'){let nodes=[...$('modal').querySelectorAll('button,input,select,summary,[tabindex="0"]')].filter(x=>!x.disabled&&!x.hidden);let visible=nodes.filter(node=>node.getClientRects().length);let f=visible[0],l=visible.at(-1);if(e.shiftKey&&document.activeElement===f){e.preventDefault();l.focus()}else if(!e.shiftKey&&document.activeElement===l){e.preventDefault();f.focus()}}});
function showCollectionLaunch() {
  if (!$('modal').hidden || solved) return;
  const collection = Object.values(collections).find(item => !seenCollectionReleases.includes(item.launchId));
  if (!collection) return;
  seenCollectionReleases.push(collection.launchId);
  save();
  openDialog('collection-launch', 'Nova coleção lançada', `<div class="collection-launch"><p>Faça continhas para receber novas peças.</p></div>`);
  $('dialogActions').innerHTML = '<button type="button" class="primary" id="viewNewCollection">Ver novidades</button><button type="button" class="secondary" id="collectionLater">Depois</button>';
  $('viewNewCollection').onclick = () => {
    closetCategory = 'new';
    openDialog('closet', 'Guarda-roupa', '');
    renderClosetBody();
  };
  $('collectionLater').onclick = closeDialog;
}
function continuePlaying() {
  $('modal').hidden = true;
  round++;
  newProblem();
  $('exercise').querySelector('input')?.focus();
}

$('gameHelp').onclick = () => {
  openDialog('game-help', 'Como funciona?', `<ul class="game-help-list">
    <li>Acerte uma conta e ganhe 1 estrelinha!</li>
    <li>Todas as peças custam estrelinhas.</li>
    <li>Descubra novas peças enquanto joga.</li>
    <li>Compre as peças que você descobriu no guarda-roupa.</li>
    <li>Guarde estrelinhas para comprar peças especiais!</li>
  </ul>`);
};

function rewardCandidates() {
  const unowned = shuffled(catalogIds.filter(id => pieceState(id) !== 'owned'));
  if (unowned.length <= 3) return unowned.sort((a, b) => priceFor(a) - priceFor(b));

  const guaranteeBasic = economyCorrect <= 3 && unowned.some(id => priceFor(id) === 1);
  const affordable = id => priceFor(id) <= stars;
  const hasAffordable = unowned.some(affordable);
  const tier = price => price >= 10 ? 4 : price >= 5 ? 3 : price >= 2 ? 2 : 1;

  function select(ids) {
    const lowestPrice = Math.min(...ids.map(priceFor));
    const first = ids.find(guaranteeBasic ? id => priceFor(id) === 1 : affordable)
      ?? ids.find(id => priceFor(id) === lowestPrice);

    const remaining = ids.filter(id => id !== first);
    const highestTier = Math.max(...remaining.map(id => tier(priceFor(id))));
    const last = remaining.find(id => tier(priceFor(id)) === highestTier && slotFor(id) !== slotFor(first))
      ?? remaining.find(id => tier(priceFor(id)) === highestTier);
    const middleOptions = remaining.filter(id => id !== last);
    const between = middleOptions.filter(id => priceFor(id) > priceFor(first) && priceFor(id) < priceFor(last));
    const middlePool = between.length ? between : middleOptions;
    const middle = middlePool.find(id => slotFor(id) !== slotFor(first) && slotFor(id) !== slotFor(last))
      ?? middlePool[0];
    return [first, middle, last].sort((a, b) => priceFor(a) - priceFor(b));
  }

  const selected = select(unowned);
  if (previousOffers.length !== selected.length || selected.some(id => !previousOffers.includes(id))) return selected;
  for (const repeated of selected) {
    const alternatives = unowned.filter(id => id !== repeated);
    if (guaranteeBasic && !alternatives.some(id => priceFor(id) === 1)) continue;
    if (hasAffordable && !alternatives.some(affordable)) continue;
    return select(alternatives);
  }
  return selected;
}

function earnReward() {
  stars++;
  economyCorrect++;
  offers = rewardCandidates();
  previousOffers = offers;
  offers.forEach(id => discovered.add(id));
  save();
  renderWardrobe();
  $('earned').hidden = false;
  $('earned').innerHTML = '<div class="actions"><button type="button" class="primary" id="continueRound">Continuar jogando</button><button type="button" class="secondary" id="showOffers">Ver ofertas</button></div>';
  $('continueRound').onclick = continuePlaying;
  $('showOffers').onclick = showReward;
}

function rewardCard(id) {
  const price = priceFor(id);
  const affordable = stars >= price;
  return `<div class="outfit-card" data-reward-piece="${id}">
    ${pieceHTML(id)}<span>${outfitName(id)}</span>
    <small class="reward-price">⭐ ${starAmount(price)}</small>
    <button type="button" class="${affordable ? 'primary' : 'secondary'} reward-buy" data-reward="${id}" aria-label="${affordable ? 'Comprar' : 'Economizar'} · ${outfitName(id)} · ${starAmount(price)}" ${affordable ? '' : 'disabled'}>${affordable ? 'Comprar' : 'Economizar'}</button>
  </div>`;
}

function renderRewardOffers() {
  const available = offers.filter(id => pieceState(id) !== 'owned');
  $('rewardBalance').textContent = `Saldo: ${starAmount(stars)}`;
  $('rewardGrid').innerHTML = available.map(rewardCard).join('');
  $('rewardGrid').hidden = available.length === 0;
  $('rewardComplete').hidden = owned.length !== catalogIds.length;
  $('rewardGrid').querySelectorAll('[data-reward]:enabled').forEach(button => {
    button.onclick = () => {
      if (!buyPiece(Number(button.dataset.reward))) return;
      renderRewardOffers();
      $('rewardStatus').textContent = 'Peça comprada! Agora ela é sua.';
      $('continueReward').focus();
    };
  });
}

function showReward() {
  openDialog('reward', 'Você acertou!', `
    <p class="intro-message reward-balance" id="rewardBalance" aria-live="polite"></p>
    <div class="reward-grid" id="rewardGrid"></div>
    <p class="intro-message" id="rewardComplete" role="status" hidden>Sua coleção está completa!</p>
    <p class="reward-status" id="rewardStatus" role="status"></p>`);
  $('dialogActions').innerHTML = '<button type="button" class="primary" id="continueReward">Continuar jogando</button>';
  $('continueReward').onclick = continuePlaying;
  renderRewardOffers();
}

let closetSelection = null;

function updateClosetOutfit() {
  $('closetDoll').innerHTML = dollHTML();

  for (const card of $('closetItems').querySelectorAll('[data-wear]')) {
    const id = Number(card.dataset.wear);
    const selected = worn[slotFor(id)] === id;
    const pressed = String(selected);
    if (card.getAttribute('aria-pressed') === pressed) continue;
    card.classList.toggle('selected', selected);
    card.setAttribute('aria-pressed', pressed);
  }
}

function renderClosetItems({ preserveScroll = false } = {}) {
  const closetItems = $('closetItems');
  const scrollTop = preserveScroll ? closetItems.scrollTop : 0;
  const items = catalogIds.filter(id => closetCategory === 'all' || (closetCategory === 'new' ? isNewCollectionPiece(id) : catalog.get(id).category === closetCategory))
    .sort((a,b) => Number(owned.includes(b)) - Number(owned.includes(a)) || a - b);
  closetItems.innerHTML = items.length ? `<div class="closet-grid">${items.map(id => {
    const state = canWear(id) ? 'owned' : pieceState(id);
    if (state === 'undiscovered') {
      return '<button type="button" class="outfit-card locked" disabled><span class="piece-preview mystery-piece" aria-hidden="true">?</span><span>Peça surpresa</span></button>';
    }
    const forSale = state === 'discovered';
    const selected = forSale ? closetSelection === id : worn[slotFor(id)] === id;
    const price = priceFor(id);
    const priceLabel = forSale ? `<small class="price-tag">⭐ ${starAmount(price)}</small>` : '';
    const missing = forSale && price > stars ? `<small>${missingStars(price - stars)}</small>` : '';
    return `<button type="button" class="outfit-card ${forSale ? 'for-sale' : ''} ${selected ? 'selected' : ''}" ${forSale ? 'data-shop' : 'data-wear'}="${id}" aria-pressed="${selected}">${pieceHTML(id)}<span>${outfitName(id)}</span>${priceLabel}${missing}</button>`;
  }).join('')}</div>${savedTestOutfit ? '<p class="unlock-note">Todas as peças estão disponíveis para teste.</p>' : ''}` : '<p class="intro-message">Ainda não há peças nesta categoria. Acerte desafios para escolher novidades!</p>';
  closetItems.scrollTop = scrollTop;
}

function updateClosetProgress() {
  $('closetCount').textContent = `${owned.length}/${catalogIds.length} peças`;
  $('closetProgress').value = owned.length;
}

function renderClosetPurchase() {
  const panel = $('closetPurchase');
  panel.hidden = closetSelection === null;
  if (panel.hidden) return;

  const id = closetSelection;
  const price = priceFor(id);
  panel.innerHTML = `<span class="price-tag">⭐ ${starAmount(price)}</span>
    <button type="button" class="primary" id="buyClosetPiece" aria-label="Comprar · ${outfitName(id)} · ${starAmount(price)}" ${stars < price ? 'disabled' : ''}>Comprar</button>`;
  $('buyClosetPiece').onclick = () => {
    if (!buyPiece(id)) return;
    closetSelection = null;
    renderClosetPurchase();
    renderClosetItems({ preserveScroll: true });
    updateClosetProgress();
    $('closetStatus').textContent = owned.length === catalogIds.length
      ? 'Peça comprada! Agora ela é sua. Sua coleção está completa!'
      : 'Peça comprada! Agora ela é sua.';
    $('closetItems').querySelector(`[data-wear="${id}"]`)?.focus({preventScroll:true});
  };
}

function categoryHasWornPiece(category) {
  return category !== 'all' && Object.values(worn).some(id => category === 'new' ? isNewCollectionPiece(id) : catalog.get(id)?.category === category);
}

function closetCategoryButton(key, label) {
  const active = closetCategory === key;
  const equipped = categoryHasWornPiece(key);
  return `<button type="button" class="${active ? 'primary' : 'secondary'}${equipped ? ' equipped' : ''}" data-category="${key}" aria-pressed="${active}" aria-label="${label}" title="${label}">${wardrobeIcon(key)}${equipped ? '<span class="category-state" aria-hidden="true">×</span>' : ''}</button>`;
}

function syncClosetCategoryStates() {
  document.querySelectorAll('[data-category]').forEach(button => {
    const equipped = categoryHasWornPiece(button.dataset.category);
    button.classList.toggle('equipped', equipped);
    button.querySelector('.category-state')?.remove();
    if (equipped) button.insertAdjacentHTML('beforeend', '<span class="category-state" aria-hidden="true">×</span>');
  });
}

function renderClosetBody() {
  closetSelection = null;
  $('dialogBody').innerHTML = `<div class="closet-layout">
    <div class="closet-catalog">
      <div class="closet-tabs" aria-label="Categorias de roupas">${Object.entries(closetCategories).map(([key,label]) => closetCategoryButton(key, label)).join('')}</div>
      <div class="closet-items" id="closetItems" tabindex="0" role="region" aria-label="Peças do guarda-roupa"></div>
      <div class="closet-purchase" id="closetPurchase" hidden></div>
      <p class="closet-status" id="closetStatus" aria-live="polite"></p>
      <progress class="closet-progress" id="closetProgress" max="${catalogIds.length}" aria-label="Peças adquiridas"></progress>
      <p class="closet-count" id="closetCount"></p>
    </div>
    <div class="closet-preview">
      <div class="closet-prover" id="closetDoll"></div>
      <button type="button" class="secondary closet-reset" id="resetOutfit" aria-label="Remover a roupa e voltar à roupa de banho" title="Voltar à roupa de banho"><img class="wardrobe-icon" src="assets/figma-icons/guard_hanger.png" alt=""><span aria-hidden="true">↩</span></button>
    </div>
  </div>`;

  renderClosetItems();
  updateClosetProgress();
  updateClosetOutfit();

  $('closetItems').onclick = event => {
    const card = event.target.closest('[data-wear], [data-shop]');
    if (!card) return;
    $('closetStatus').textContent = '';
    if (card.dataset.shop !== undefined) {
      const id = Number(card.dataset.shop);
      closetSelection = closetSelection === id ? null : id;
      $('closetItems').querySelectorAll('[data-shop]').forEach(button => {
        const selected = Number(button.dataset.shop) === closetSelection;
        button.classList.toggle('selected', selected);
        button.setAttribute('aria-pressed', selected);
      });
      renderClosetPurchase();
      return;
    }
    closetSelection = null;
    renderClosetPurchase();
    const id = Number(card.dataset.wear);
    const slot = slotFor(id);
    if (worn[slot] === id) {
      delete worn[slot];
      save();
      renderWardrobe();
    } else {
      equip(id);
    }
    $('closetItems').querySelectorAll('[data-shop].selected').forEach(button => {
      button.classList.remove('selected');
      button.setAttribute('aria-pressed', 'false');
    });
    updateClosetOutfit();
    syncClosetCategoryStates();
  };

  $('dialogBody').querySelectorAll('[data-category]').forEach(button => {
    button.onclick = () => {
      if (closetCategory === button.dataset.category) return;
      const previous = button.parentElement.querySelector('[aria-pressed="true"]');
      previous.className = 'secondary';
      previous.setAttribute('aria-pressed', 'false');
      closetCategory = button.dataset.category;
      button.className = 'primary';
      button.setAttribute('aria-pressed', 'true');
      closetSelection = null;
      renderClosetPurchase();
      $('closetStatus').textContent = '';
      renderClosetItems();
    };
  });

  $('resetOutfit').onclick = () => {
    worn = {};
    save();
    renderWardrobe();
    renderClosetItems({ preserveScroll: true });
    updateClosetOutfit();
    syncClosetCategoryStates();
  };

}
$('closet').onclick=()=>{openDialog('closet','Guarda-roupa','');renderClosetBody()};
function showReport(){
  openDialog('report','Relatório diário','<div id="dailyReportContent"></div>');
  learning.renderReport();
  $('dialogActions').innerHTML='<button class="primary" id="reportBack">Voltar</button>';
  $('reportBack').onclick=()=>{ $('modal').hidden=true; $('settings').click(); };
}
$('settings').onclick=()=>{openDialog('settings','Ajustes',`<div class="settings-group settings-language"><b>🌐 Idioma</b><div id="settingsLanguage"></div></div><div class="settings-group"><label><input type="checkbox" id="groupMultiply" ${config.groups.multiply?'checked':''}> 🧮 Tabuadas</label><p class="small">Escolha as tabuadas</p><div class="table-options">${supportedTables.map(t=>`<label class="table-option"><input type="checkbox" data-table="${t}" ${config.tables.includes(t)?'checked':''}>${t}</label>`).join('')}</div></div><div class="settings-group"><label><input type="checkbox" id="groupAdd" ${config.groups.add?'checked':''}> ➕ Soma</label><label class="small" for="digits">Dígitos</label><select id="digits">${[1,2,3].map(d=>`<option value="${d}" ${config.digits===d?'selected':''}>${d} dígitos</option>`).join('')}</select></div><div class="settings-group"><label><input type="checkbox" id="groupFraction" ${config.groups.fraction?'checked':''}> ◔ Frações</label><p class="small">Pizzas e tortas</p></div><button type="button" class="settings-group" id="openReport"><b>▂▅▇ Relatório diário</b><span>›</span></button><div id="wardrobeTest" hidden></div><p id="settingsError" class="settings-error" role="alert"></p>`);setupSettingsTools();$('openReport').onclick=showReport;$('dialogActions').innerHTML='<button class="primary" id="saveSettings">Salvar</button>';$('saveSettings').onclick=()=>{const groups={multiply:$('groupMultiply').checked,add:$('groupAdd').checked,fraction:$('groupFraction').checked},tables=[...document.querySelectorAll('[data-table]:checked')].map(x=>Number(x.dataset.table));if(!Object.values(groups).some(Boolean))return $('settingsError').textContent='Ative pelo menos um grupo de aventuras.';if(groups.multiply&&!tables.length)return $('settingsError').textContent='Escolha pelo menos uma tabuada.';config={groups,tables:tables.length?tables:config.tables,digits:Number($('digits').value)};deck=[];if(!groups[mode])mode=Object.keys(groups).find(k=>groups[k]);round=1;save();$('modal').hidden=true;newProblem()}};
function setupSettingsTools() {
  mountSettingsIcons();
  atelieLanguage.mount($('settingsLanguage'));
  const tools = $('wardrobeTest');
  const title = $('dialogTitle');
  title.innerHTML = '<button type="button" class="settings-title-button">Ajustes</button>';
  let taps = 0;
  title.firstElementChild.onclick = () => {
    taps++;
    if (taps === 5) showTestControls();
  };

  function showTestControls() {
    tools.hidden = false;
    tools.className = 'settings-group';
    tools.innerHTML = `<button type="button" class="secondary" id="toggleWardrobeTest">${savedTestOutfit ? 'Encerrar teste de roupas' : 'Ativar teste de roupas'}</button>`;
    $('toggleWardrobeTest').onclick = () => {
      if (savedTestOutfit) {
        worn = savedTestOutfit;
        savedTestOutfit = null;
      } else {
        savedTestOutfit = {...worn};
      }
      learning.setTestMode(savedTestOutfit !== null);
      renderWardrobe();
      showTestControls();
      $('toggleWardrobeTest').focus();
    };
  }

  if (savedTestOutfit) showTestControls();
}

function mountSettingsIcons() {
  const replaceControlLabel = (id, icon, label) => {
    const control = $(id);
    if (!control) return;
    control.parentElement.innerHTML = `${control.outerHTML}<img class="settings-row-icon" src="${icon}" alt="">${label}`;
  };
  replaceControlLabel('groupMultiply', 'assets/figma-tab-multiply.png', 'Tabuadas');
  replaceControlLabel('groupAdd', 'assets/figma-tab-add.png', 'Soma');
  replaceControlLabel('groupFraction', 'assets/figma-tab-fraction.png', 'Frações');

  const fractionControl = $('groupFraction');
  if (fractionControl) {
    const fractionLabel = fractionControl.parentElement;
    fractionLabel.htmlFor = 'groupFraction';
    fractionControl.remove();
    fractionLabel.parentElement.append(fractionControl);
  }

  const languageTitle = document.querySelector('.settings-language > b');
  if (languageTitle) languageTitle.innerHTML = '<img class="settings-row-icon" src="assets/figma-icons/globe.png" alt="">Idioma';

  const reportTitle = $('openReport')?.querySelector('b');
  if (reportTitle) reportTitle.innerHTML = '<img class="settings-row-icon" src="assets/figma-icons/bars.png" alt="">Relatório diário';
}

function circles(n){return Array.from({length:n},(_,i)=>`<span class="count-circle" style="animation-delay:${i*.07}s" aria-hidden="true"></span>`).join('')}
function columnData(){let rows=[],carry=0;for(let c=0;c<config.digits;c++){let x=Number(digitAt(a,c)),y=Number(digitAt(b,c)),total=x+y+carry;rows.push({x,y,carry,total,result:total%10,out:Math.floor(total/10)});carry=Math.floor(total/10)}return rows}
function helpSumColumn(column, phase, done, rows) {
  const cols = config.digits + 1;
  let html = `<div class="help-column" style="--cols:${cols}">`;
  if (!done) html += `<span class="column-focus" style="grid-column:${cols + 1 - column}" aria-hidden="true"></span>`;
  for (const [index, row] of rows.entries()) {
    const moving = !done && index === column && phase === 'carry';
    if (row.out && (done || index < column || moving)) {
      html += `<span class="small-carry${moving ? ' carry-moving' : ''}" style="grid-row:1;grid-column:${cols - index}" aria-label="Vai um">1</span>`;
    }
  }
  for (const [index, number] of [a,b].entries()) {
    for (let col = 0; col < cols; col++) {
      html += `<span class="digit" style="grid-row:${index + 2};grid-column:${cols + 1 - col}">${digitAt(number,col)}</span>`;
    }
  }
  html += '<span style="grid-column:1;grid-row:3">+</span><span class="sum-rule" style="grid-row:4"></span>';
  for (let col = 0; col < cols; col++) {
    if (done || col < column || (col === column && phase !== 'dots')) {
      html += `<span class="result-digit" style="grid-row:5;grid-column:${cols + 1 - col}">${done ? digitAt(a+b,col) : rows[col].result}</span>`;
    }
  }
  return html + '</div>';
}

function helpAddition(step) {
  const rows = columnData();
  const steps = rows.flatMap((row, index) => (row.out ? ['dots','result','carry'] : ['dots','result'])
    .map(phase => ({index,phase})));
  const stage = steps[step];
  if (!stage) {
    return {
      content: helpSumColumn(0, '', true, rows),
      caption: `Deu ${a+b}! Agora é sua vez.`,
      done: true
    };
  }
  const {index,phase} = stage;
  const row = rows[index];
  const content = helpSumColumn(index, phase, false, rows);
  let illustration = '';
  let caption;
  if (phase !== 'carry') {
    const revealed = phase === 'result';
    illustration = `<div class="quantity-sum">
        <span></span><span>${row.x}</span><div class="circle-row">${circles(row.x)}</div>
        <span>+</span><span>${row.y}</span><div class="circle-row">${circles(row.y)}</div>
        ${row.carry ? '<span>+</span><span>1</span><div class="circle-row">'+circles(1)+'</div>' : ''}
      </div>`;
    illustration += `<div class="step-title">${row.x} + ${row.y}${row.carry ? ' + 1' : ''} =${revealed ? ' ' + row.total : ''}</div>`;
    caption = revealed ? `Escreva ${row.result} embaixo.` : 'Conte as bolinhas de cada linha.';
  } else {
    caption = 'O 1 pula para a esquerda!';
  }
  return {content,caption,illustration,done:false};
}

function renderHelp() {
  let content='',caption='',illustration='',done=false;
  const step=Math.max(0,helpStep);
  if (mode==='add') {
    ({content,caption,illustration='',done}=helpAddition(step));
  } else if (mode==='multiply') {
    const shown=Math.min(b,step);
    content=`<div class="step-title">${shown} ${shown===1?'grupo':'grupos'} de ${a}</div><div class="groups">`;
    for(let i=0;i<shown;i++){
      content+=`<div class="group${i===shown-1?' group-new':''}"><span class="help-count-dots" aria-label="${a} bolinhas">${'<i class="help-count-dot" aria-hidden="true"></i>'.repeat(a)}</span><small>${(i+1)*a}</small></div>`;
    }
    content+='</div>';
    done=shown===b;
    if(done)caption=`${a} × ${b} = ${a*b}. Sua vez!`;
    else caption=shown?`${Array.from({length:shown},()=>a).join(' + ')} = ${shown*a}.`:'Vamos contar as bolinhas?';
  } else {
    content=pizzaSVG(num,den,food,den,step===0);
    if(step===0){
      content+=`<div class="step-title">${den} partes iguais ao todo</div>`;
      caption=`Conte todas. ${den} embaixo!`;
    } else if(step===1){
      content+=`<div class="step-title">${num} ${num===1?'parte colorida':'partes coloridas'}</div>`;
      caption=`Só as coloridas. ${num} em cima!`;
    } else {
      content+=`<div class="fraction-input" style="font-size:34px;font-weight:bold"><span style="border:0">${num}</span><span></span><span style="border:0">${den}</span></div>`;
      caption=`Deu ${num}/${den}! Agora é sua vez.`;
      done=true;
    }
  }
  $('dialogBody').innerHTML=`<div class="stage help-stage" aria-live="polite"><div class="help-example">${content}</div><div class="help-explanation">${illustration}<p class="caption">${caption}</p></div></div>`;
  $('dialogActions').innerHTML=`<button class="primary" id="helpNext">${done?'Voltar à conta ✓':'Próximo passo →'}</button><button class="secondary" id="replay">↻ Ver de novo</button>`;
  $('helpNext').onclick=()=>{
    if(done){closeDialog();return}
    helpStep++;
    renderHelp();
    $('helpNext').focus();
  };
  $('replay').onclick=()=>{
    helpStep=mode==='multiply'?1:0;
    renderHelp();
    $('helpNext').focus();
  };
}
$('help').onclick=()=>{
  if(solved)return;
  if(!learning.useHelp(mode,a)){
    openDialog('help-empty','Ajudas','<p>Para ganhar ajudas, acerte três desafios</p>');
    $('dialogActions').innerHTML='<button type="button" class="primary" id="helpEmptyBack">Voltar à conta</button>';
    $('helpEmptyBack').onclick=closeDialog;
    return;
  }
  helpStep=mode==='multiply'?1:0;
  openDialog('help','Vamos descobrir no ateliê','');
  renderHelp();
};
renderWardrobe();
newProblem();
window.setTimeout(showCollectionLaunch, 280);
