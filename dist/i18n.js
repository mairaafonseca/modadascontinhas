// Live localization preserves answers, reward choices and unsaved settings.
const atelieLanguage=(()=>{
let language='pt-BR';try{if(localStorage.getItem('atelie-language')==='nl-NL')language='nl-NL'}catch{}
const brands={
  'pt-BR':{name:'Contas & Looks',logo:'assets/logo-contas-looks.png'},
  'nl-NL':{name:'Rekenen & Verkleden',logo:'assets/logo-rekenen-verkleden.png'},
  'en':{name:'Solve & Style',logo:'assets/logo-solve-style.png'}
};
const entries={
'Voltar à conta':'Terug naar de oefening',
'Como ganhar ajudas':'Hoe verdien je hulpbeurten?', 'Acerte 3 desafios para ganhar 1 ajudinha!':'Los 3 oefeningen goed op en verdien 1 hulpbeurt!', 'Ajudas':'Hulpbeurten', 'Para ganhar ajudas, acerte três desafios':'Verdien hulpbeurten door drie oefeningen goed op te lossen',
'💡 Ajudas ilimitadas':'💡 Onbeperkte hulpbeurten',
'Vamos contar os laços?':'Zullen we de strikjes tellen?', 'O 1 pula para a esquerda!':'De 1 springt naar links!', 'Sua vez!':'Jouw beurt!',
'Sem ajudas agora':'Even geen hulpbeurten','💡 Ajudas:':'💡 Hulpbeurten:','Máximo de 3 ajudas. Use uma para ganhar outra.':'Maximaal 3 hulpbeurten. Gebruik er één om een nieuwe te verdienen.','acertos para ganhar uma ajuda':'goede antwoorden om een hulpbeurt te verdienen','↻ Ver de novo':'↻ Opnieuw bekijken','Conte as bolinhas de cada linha.':'Tel de bolletjes op elke rij.','Acertos sem ajuda':'Goed zonder hulp','Acertos com ajuda':'Goed met hulp','Ajudas usadas':'Gebruikte hulpbeurten',
'Teclado numérico':'Numeriek toetsenblok','Apagar':'Wissen',
'Tabuada geral':'Alle tafels','Tentativas':'Pogingen','Ajudinhas usadas':'Gebruikte hulpbeurten','Ajudinhas antigas sem atividade registrada':'Eerdere hulpbeurten zonder geregistreerde activiteit','Para este dia, os números por tabuada incluem apenas as tentativas antigas ainda disponíveis, além das novas.':'Voor deze dag bevatten de cijfers per tafel de nog beschikbare eerdere pogingen en de nieuwe pogingen.','Os dados ficam neste navegador.':'De gegevens blijven in deze browser.',
'Idioma':'Taal',
'pontos':'punten','Peças do guarda-roupa':'Kledingstukken in de kast',
'Novidades':'Nieuw', 'Nova coleção lançada':'Nieuwe collectie uit', 'Faça continhas para receber novas peças.':'Maak sommen om nieuwe kleding te krijgen.', 'Ver novidades':'Bekijk nieuw', 'Depois':'Later', 'Grátis':'Gratis', 'Peça comprada! Agora ela é sua.':'Gekocht! Dit kledingstuk is nu van jou.', 'Peças novas custam 5 estrelinhas cada.':'Nieuwe kledingstukken kosten elk 5 sterren.',
'Provador de teste':'Testpaskamer','Ativar teste de roupas':'Kledingtest starten','Encerrar teste de roupas':'Kledingtest beëindigen','Todas as peças estão disponíveis para teste.':'Alle kledingstukken zijn beschikbaar om te testen.',
'Ajustes':'Instellingen','Responder':'Antwoorden','Atividades':'Oefeningen','Guarda-roupa':'Kledingkast','Tabuada':'Tafels','Grupos iguais':'Gelijke groepen','Continhas de mais':'Optellen','Coluna por coluna':'Kolom voor kolom','Pizzas e tortas':'Pizza’s en taarten',
"Penteados": "Kapsels",
"Maxi floral menta": "Mintgroene maxi-bloemenjurk",
"Maxi marinheiro azul": "Blauwe maxi-matrozenjurk",
"Maxi império pêssego": "Perzikkleurige maxi-empirejurk",
"Maxi xadrez amarelo": "Gele geruite maxijurk",
"Maxi de veludo ameixa": "Pruimkleurige fluwelen maxijurk",
"Midi coral de bolinhas": "Koraalkleurige midi-jurk met stippen",
"Midi plissado verde-petróleo": "Petrolblauwe geplooide midi-jurk",
"Midi creme de morangos": "Crèmekleurige midi-jurk met aardbeien",
"Midi azul-marinho abotoado": "Marineblauwe midi-jurk met knopen",
"Midi lavanda em camadas": "Lavendelkleurige midi-jurk met laagjes",
"Vestido prateado de estrelas": "Zilveren feestjurk met sterren",
"Vestido de cetim esmeralda": "Smaragdgroene satijnen jurk",
"Vestido rosa de babados": "Roze feestjurk met ruches",
"Vestido azul com bordado dourado": "Blauwe jurk met goudborduursel",
"Vestido de lantejoulas rosé": "Roségouden jurk met pailletten",
"Camiseta amarela de margaridas": "Geel shirt met madeliefjes",
"Camiseta lilás de gatinho": "Lila kattenshirt",
"Blusa marinheira azul": "Blauwe matrozenblouse",
"Camiseta coral listrada": "Koraalkleurig gestreept shirt",
"Blusa menta de mangas bufantes": "Mintgroene blouse met pofmouwen",
"Cardigã vermelho de tricô": "Rood gebreid vest",
"Suéter creme de tranças": "Crèmekleurige kabeltrui",
"Moletom lilás de estrelas": "Lila sweater met sterren",
"Jaqueta jeans abotoada": "Spijkerjasje met knopen",
"Blusa verde-oliva de gola alta": "Olijfgroene coltrui",
"Blusa rosa com babados": "Roze blouse met ruches",
"Colete marinheiro azul-marinho": "Marineblauw matrozenvest",
"Blusa verde-petróleo sem mangas": "Mouwloze petrolblauwe blouse",
"Blusa peplum pêssego": "Perzikkleurige peplumtop",
"Blusa floral creme sem mangas": "Mouwloze crèmekleurige bloemenblouse",
"Jeans reto azul médio": "Rechte middenblauwe jeans",
"Calça reta de cotelê lavanda": "Rechte lavendelkleurige ribbroek",
"Calça reta floral creme": "Rechte crèmekleurige bloemenbroek",
"Calça chino chocolate": "Chocoladebruine chino",
"Calça preta risca de giz": "Zwarte krijtstreepbroek",
"Calça boca de sino coral": "Koraalkleurige broek met wijde pijpen",
"Pantacourt plissada menta": "Mintgroene geplooide culotte",
"Jeans largo índigo": "Wijde indigo jeans",
"Calça pantalona mostarda": "Mosterdgele palazzobroek",
"Calça marinheira azul royal": "Koningsblauwe matrozenbroek",
"Calça cargo oliva": "Olijfgroene cargobroek",
"Jogger rosa com punhos": "Roze jogger met boorden",
"Calça xadrez cinza": "Grijze geruite broek",
"Jeans branco de tornozelo": "Witte enkeljeans",
"Calça afunilada framboesa": "Framboosrode taps toelopende broek",
"Short jeans azul com barra dobrada": "Blauwe spijkershort met omslag",
"Short pregueado lilás": "Lila short met plooien",
"Short xadrez menta": "Mintgroen geruite short",
"Short coral de barra ondulada": "Koraalkleurige short met schulprand",
"Short amarelo com margaridas bordadas": "Gele short met geborduurde madeliefjes",
"Short cargo oliva": "Olijfgroene cargoshort",
"Short marinheiro azul": "Blauwe matrozenshort",
"Short floral pêssego": "Perzikkleurige bloemenshort",
"Short alfaiataria creme": "Crèmekleurige geklede short",
"Short jeans com listras rosa": "Spijkershort met roze strepen",
"Bermuda azul-marinho risca de giz": "Marineblauwe krijtstreepbermuda",
"Bermuda utilitária sálvia": "Saliegroene cargobermuda",
"Bermuda jeans claro": "Lichtblauwe jeansbermuda",
"Bermuda de linho lavanda": "Lavendelkleurige linnen bermuda",
"Bermuda xadrez cereja": "Kersenrode geruite bermuda",
"Minissaia plissada lilás": "Lila geplooide minirok",
"Minissaia jeans evasê": "A-lijn spijkerminirok",
"Minissaia floral pêssego": "Perzikkleurige bloemenminirok",
"Minissaia xadrez verde": "Groen geruite minirok",
"Minissaia rosa de tule em camadas": "Roze tule minirok met laagjes",
"Saia midi mostarda abotoada": "Mosterdgele midi-rok met knopen",
"Saia midi azul-marinho plissada": "Marineblauwe geplooide midi-rok",
"Saia godê coral": "Koraalkleurige cirkelrok",
"Saia envelope menta": "Mintgroene wikkelrok",
"Saia midi creme de bolinhas": "Crèmekleurige midi-rok met stippen",
"Saia longa azul-céu em camadas": "Hemelsblauwe maxirok met laagjes",
"Saia longa floral lavanda": "Lavendelkleurige bloemenmaxirok",
"Saia longa xadrez vermelha": "Rode geruite maxirok",
"Saia longa de cetim esmeralda": "Smaragdgroene satijnen maxirok",
"Saia longa bordada creme": "Crèmekleurige geborduurde maxirok",
"Cabelo longo liso com risca central": "Lang steil haar met middenscheiding",
"Ondas na altura dos ombros": "Golven op schouderlengte",
"Bob cacheado": "Krullende bob",
"Chanel com franja": "Korte bob met pony",
"Cachos longos e soltos": "Lange losse krullen",
"Rabo de cavalo alto": "Hoge paardenstaart",
"Rabo de cavalo lateral baixo": "Lage zijstaart",
"Duas marias-chiquinhas altas": "Twee hoge staartjes",
"Coque alto liso": "Strakke hoge knot",
"Dois coques altos": "Twee hoge knotjes",
"Trança lateral": "Zijvlecht",
"Duas tranças baixas": "Twee lage vlechten",
"Trança coroa": "Kroonvlecht",
"Rabo de cavalo trançado": "Gevlochten paardenstaart",
"Semipreso com trança": "Half opgestoken haar met vlecht",
"Calças":"Broeken",
"Shorts":"Korte broeken",
"Saias":"Rokken",
"Vestido lilás em camadas":"Lila jurk met laagjes",
"Vestido de moranguinhos":"Aardbeienjurk",
"Jardineira de nuvem":"Overgooier met wolkje",
"Vestido floral pêssego":"Perzikkleurige bloemenjurk",
"Vestido verde com gola branca":"Groene jurk met witte kraag",
"Cardigã de margaridas":"Vest met madeliefjes",
"Camiseta de gatinho":"Kattenshirt",
"Blusa marinheira":"Matrozenblouse",
"Suéter listrado":"Gestreepte trui",
"Blusa verde com babados":"Groene blouse met ruches",
"Calça jeans reta":"Rechte spijkerbroek",
"Calça de veludo lilás":"Lila ribbroek",
"Calça cargo verde":"Groene cargobroek",
"Calça flare coral":"Koraalkleurige flared broek",
"Calça floral creme":"Crèmekleurige bloemenbroek",
"Short jeans":"Spijkershort",
"Short lilás dobrado":"Lila short met omslag",
"Short xadrez verde":"Groen geruite short",
"Short pêssego ondulado":"Perzikkleurige short met schulprand",
"Short amarelo de margaridas":"Gele short met madeliefjes",
"Saia plissada lilás":"Lila plooirok",
"Saia jeans evasê":"A-lijn spijkerrok",
"Saia floral pêssego":"Perzikkleurige bloemenrok",
"Saia xadrez menta":"Mintgroen geruite rok",
"Saia de tule rosa":"Roze tule rok",
"Presilha de laço lilás":"Lila strikspeld",
"Tiara de margaridas":"Haarband met madeliefjes",
"Presilhas de estrela":"Sterrenclipjes",
"Elástico xadrez coral":"Koraalkleurige geruite scrunchie",
"Tiara azul acolchoada":"Blauwe gewatteerde haarband",
"Sapatos rosa com tira":"Roze bandschoenen",
"Sapatos creme com margaridas":"Crèmekleurige bandschoenen met madeliefjes",
"Pantufas de pompom":"Pantoffels met pompons",
"Sapatilhas rosa com fitas":"Roze balletschoenen met linten",
"Sapatilhas douradas com laço":"Gouden balletschoenen met strik",
"Galochas rosa com corações":"Roze regenlaarzen met hartjes",
"Botas marrons com fivela":"Bruine laarsjes met gesp",
"Tênis branco com listras rosa":"Witte sneakers met roze strepen",
"Sapatilhas vermelhas com laço":"Rode ballerina’s met strik",
"Sapatilhas creme com laço":"Crèmekleurige ballerina’s met strik",
"Sapatos amarelos com laços":"Gele bandschoenen met strikjes",
"Pantufas felpudas rosa":"Roze pluizige pantoffels",
"Tênis rosa com cadarço":"Roze vetersneakers",
"Tênis creme com velcro":"Crèmekleurige klittenbandsneakers",
"Tênis rosa com margaridas":"Roze sneakers met madeliefjes",
"Botas rosa com cadarço":"Roze veterlaarzen",
"Vestido de Natal com estrelas":"Kerstjurk met sterren", "Suéter de rena":"Rendiertrui", "Saia xadrez de Natal":"Geruite kerstrok", "Blusa de flocos de neve":"Sneeuwvlokkenblouse", "Sapatilhas de azevinho":"Hulstballerina’s", "Tiara verde de estrelas":"Groene sterrenhaarband", "Casaco vermelho de Natal":"Rode kerstjas", "Calça verde de azevinho":"Groene hulstbroek", "Short de veludo vermelho":"Rode fluwelen short", "Coque lateral com trança em coroa":"Zij-knot met kroonvlecht",

'Relatório diário':'Dagrapport','Ver ajudinha novamente':'Uitleg opnieuw bekijken','Vamos tentar de novo? Você consegue 💛':'Probeer het nog eens. Je kunt het 💛','+1 ajudinha!':'+1 hulpbeurt!','Suas ajudas acabaram. Acerte mais desafios para ganhar outra!':'Je hulpbeurten zijn op. Los meer oefeningen goed op om er één te verdienen!','Consulte os resultados por dia. Cada envio de resposta conta como uma tentativa; campos vazios não contam.':'Bekijk de resultaten per dag. Elk ingediend antwoord telt als een poging; lege velden tellen niet mee.','Dia do relatório':'Datum van het rapport','Acertos':'Goed','Erros':'Fout','Aproveitamento':'Goed beantwoord','Grupo':'Soort oefening','Com ajuda':'Met hulp','Últimas tentativas do dia':'Laatste pogingen van de dag','Mostrando até 100 tentativas recentes. Os totais incluem todas as tentativas do dia.':'De laatste 100 pogingen worden getoond. De totalen tellen alle pogingen van deze dag mee.','Hora':'Tijd','Desafio':'Oefening','Resposta':'Antwoord','Resultado':'Resultaat','✓ Acerto':'✓ Goed','↻ Erro':'↻ Fout','Esperado:':'Juiste antwoord:','Nenhuma tentativa registrada neste dia.':'Er zijn geen pogingen geregistreerd op deze dag.','Os dados ficam neste navegador. O relatório começa a contar a partir desta atualização.':'De gegevens blijven in deze browser. Het rapport telt vanaf deze update.',

'Para desbloquear peças vença desafios':'Los oefeningen op om kleding vrij te spelen',
'APRENDER É SEMPRE UM BOM LOOK':'LEREN STAAT JE GOED','Uma descoberta. Um novo visual.':'Iets nieuws leren. Een nieuwe look.','Resolva, escolha uma peça e invente suas combinações.':'Reken, kies een kledingstuk en maak je eigen combinaties.','acertos':'keer goed','Configurações':'Instellingen','SUAS AVENTURAS':'JOUW AVONTUREN','Tabuadas':'Tafels','Multiplique suas descobertas':'Ontdek de tafels','Somas':'Optellen','Uma coluna de cada vez':'Kolom voor kolom','Frações':'Breuken','Pizzas e tortas em partes':'Pizza’s en taarten verdelen','No seu ritmo.':'Op jouw tempo.','Você pode tentar de novo e pedir ajuda sempre que precisar.':'Je mag het opnieuw proberen en om hulp vragen wanneer je wilt.','Vamos multiplicar?':'Zullen we vermenigvuldigen?','Vamos juntar esses números?':'Zullen we deze getallen optellen?','Que fração está colorida?':'Welk deel is gekleurd?','Comece pelas unidades, à direita.':'Begin bij de eenheden, aan de rechterkant.','Sua resposta':'Jouw antwoord','Conferir resposta ✓':'Antwoord nakijken ✓','Ajudinha':'Hulp','Próximo desafio →':'Volgende oefening →','Cada acerto vale uma peça nova para combinar.':'Met elk goed antwoord verdien je een nieuw kledingstuk.','MEU PROVADOR':'MIJN PASKAMER','Pronta para vestir':'Klaar om aan te kleden','Seu look, peça por peça':'Jouw look, kledingstuk voor kledingstuk','Abrir guarda-roupa':'Kledingkast openen','Seu progresso fica salvo neste navegador.':'Je voortgang wordt in deze browser opgeslagen.','Fechar janela':'Venster sluiten',
'Boneca de traje de banho com peças escolhidas separadamente':'Pop in badkleding met apart gekozen kledingstukken','Boneca com peças escolhidas individualmente':'Pop met apart gekozen kledingstukken','Sua boneca com a roupa escolhida':'Jouw pop met de gekozen kleding',
'Blusa cisne':'Zwanenblouse','Moletom unicórnio':'Eenhoorntrui','Camiseta arco-íris':'Regenboogshirt','Short floral':'Bloemenshort','Saia rosé':'Roze rok','Calça azul':'Blauwe broek','Vestido floral':'Bloemenjurk','Vestido pêssego':'Perzikkleurige jurk','Sapatilhas rosa':'Roze ballerina’s','Sapatos de boneca':'Bandschoentjes','Tênis azul':'Blauwe sneakers','Laço rosa':'Roze strik','Gorro de tricô':'Gebreide muts','Bolsa floral':'Bloementasje','Tiara de renda':'Kanten haarband',
'Blusas':'Bovenkleding','Partes de baixo':'Broeken en rokken','Vestidos':'Jurken','Sapatos':'Schoenen','Acessórios de cabelo':'Haaraccessoires','Bolsas':'Tassen','Original':'Origineel','Lavanda':'Lavendel','Menta':'Mint','Dourado':'Goud','Azul':'Blauw','Coral':'Koraal','Todas':'Alles','Categorias de roupas':'Kledingcategorieën',
'Preencha as duas partes da fração.':'Vul de teller en de noemer in.','Digite sua resposta para conferir.':'Vul je antwoord in om het na te kijken.','Preencha cada coluna da resposta.':'Vul elke kolom van het antwoord in.','Vamos tentar de novo? A ajudinha está aqui para você 💛':'Probeer je het nog eens? Je kunt altijd om hulp vragen 💛','Você acertou! Escolha uma peça para a sua boneca ✨':'Goed gedaan! Kies een kledingstuk voor je pop ✨','Escolher minha peça 🎁':'Mijn kledingstuk kiezen 🎁','Sua coleção está completa!':'Je verzameling is compleet!','Acertou! Escolha uma peça nova':'Goed zo! Kies een nieuw kledingstuk','Escolha uma peça para vestir agora.':'Kies een kledingstuk om nu aan te trekken.','Escolha uma das três peças para guardar e vestir. Combine com as outras roupas que você já tem!':'Kies één van de drie kledingstukken. Bewaar het en combineer het met de kleding die je al hebt!','Escolha uma das últimas novidades da coleção!':'Kies één van de laatste nieuwe kledingstukken!','Escolher e vestir':'Kiezen en aantrekken','Sua peça nova já está no provador! ✨':'Je nieuwe kledingstuk is al aangetrokken! ✨',
'Meu guarda-roupa · peça por peça':'Mijn kledingkast · kledingstuk voor kledingstuk','Vista cada peça separadamente. Toque de novo para tirar. Um vestido substitui blusa e parte de baixo.':'Kies elk kledingstuk apart. Tik nog eens om het uit te trekken. Een jurk vervangt het bovenstuk en de broek of rok.','Voltar à roupa de banho':'Terug naar badkleding','Ainda não há peças nesta categoria. Acerte desafios para escolher novidades!':'Je hebt nog geen kleding in deze categorie. Los oefeningen op om nieuwe kleding te kiezen!',
'Configurações de aprendizagem':'Leerinstellingen','Escolha o que aparece nas aventuras. As escolhas ficam salvas neste navegador.':'Kies welke oefeningen verschijnen. Je keuzes worden in deze browser opgeslagen.','Selecione uma ou mais tabuadas:':'Kies één of meer tafels:','Dígitos em cada número':'Aantal cijfers per getal','dígito (ex.: 4 + 7)':'cijfer (bijv. 4 + 7)','dígitos (ex.: 27 + 38)':'cijfers (bijv. 27 + 38)','dígitos (ex.: 245 + 378)':'cijfers (bijv. 245 + 378)','Frações com pizzas e tortas':'Breuken met pizza’s en taarten','Partes iguais: meios, terços, quartos, sextos e oitavos.':'Gelijke delen: helften, derden, kwarten, zesden en achtsten.','Salvar configurações ✓':'Instellingen opslaan ✓','Ative pelo menos um grupo de aventuras.':'Zet minstens één soort oefening aan.','Escolha pelo menos uma tabuada.':'Kies minstens één tafel.',
'Numerador: partes coloridas':'Teller: gekleurde delen','Denominador: total de partes':'Noemer: totaal aantal delen','Unidades da resposta':'Eenheden van het antwoord','Dezenas da resposta':'Tientallen van het antwoord','Centenas da resposta':'Honderdtallen van het antwoord','Milhares da resposta':'Duizendtallen van het antwoord','Vai um':'Onthoud 1',
'Vamos descobrir no ateliê ✨':'Laten we het samen ontdekken ✨','Vamos descobrir, um passo de cada vez.':'We doen het stap voor stap.','Uma coluna de cada vez. Você conseguiu!':'Kolom voor kolom. Het is je gelukt!','Podemos trocar 10 delas por 1 na próxima coluna!':'We kunnen er 10 ruilen voor 1 in de volgende kolom!','Elas ficam nesta coluna.':'Die blijven in deze kolom.','Vai um para a próxima coluna!':'Onthoud 1 voor de volgende kolom!','Escreva o resultado nesta coluna':'Schrijf de uitkomst in deze kolom','Trocamos 10 por 1, que vai para a coluna à esquerda. Some esse 1 no próximo passo.':'We ruilen 10 voor 1 in de kolom links. Tel die 1 bij de volgende stap mee.','Agora podemos seguir para a próxima coluna.':'Nu gaan we naar de volgende kolom.','Voltar à conta ✓':'Terug naar de oefening ✓','Começar animação ▶':'Animatie starten ▶','Próximo passo →':'Volgende stap →','Recomeçar':'Opnieuw beginnen'
};
entries['Vamos descobrir no ateliê']='Laten we het samen ontdekken';
entries['Vamos contar as bolinhas?']='Zullen we de bolletjes tellen?';
Object.assign(entries, {
  'Você acertou! +1 estrelinha!':'Goed gedaan! +1 ster!',
  'Ver ofertas':'Bekijk aanbiedingen',
  'Continuar jogando':'Verder spelen',
  'Acerte continhas para descobrir novas peças.':'Los sommen goed op om nieuwe kledingstukken te ontdekken.',
  'Comprar':'Kopen',
  'Economizar':'Sparen',
  'Nova!':'Nieuw!',
  'Já é sua':'Al van jou',
  'Esta peça já é sua.':'Dit kledingstuk is al van jou.',
  'Descubra esta peça jogando.':'Ontdek dit kledingstuk tijdens het spelen.',
  'Peça surpresa':'Verrassingsstuk',
  'Não foi possível salvar o progresso. Tente de novo.':'Je voortgang kon niet worden opgeslagen. Probeer het opnieuw.'
});
const replacements=Object.entries(entries).sort((a,b)=>b[0].length-a[0].length);
const unit={unidades:'eenheden',dezenas:'tientallen',centenas:'honderdtallen'};
function nl(source){let t=source;
t=t.replace(/Faltam? (\d+) estrelinhas? para esta peça\./g,(_,amount)=>`Je hebt nog ${amount} ${amount === '1' ? 'ster' : 'sterren'} nodig voor dit kledingstuk.`)
  .replace(/(\d+) estrelinhas?(?=\s|$)/g,(_,amount)=>`${amount} ${amount === '1' ? 'ster' : 'sterren'}`);
// Full dynamic phrases are translated before reusable labels.
t=t.replace(/Tabuada do (\d+)/g,'Tafel van $1').replace(/Pedir ajuda\. Saldo: (\d+)/g,'Om hulp vragen. Beschikbaar: $1').replace(/Acertos sem ajuda: (\d+) · Acertos com ajuda: (\d+) · Ajudas usadas: (\d+)/g,'Goed zonder hulp: $1 · Goed met hulp: $2 · Gebruikte hulpbeurten: $3');
t=t.replace(/Uma descoberta na tabuada do (\d+)\./g,'Ontdek de tafel van $1.').replace(/Desafio (\d+)/g,'Oefening $1').replace(/\((\d+) peças\)/g,'($1 kledingstukken)').replace(/Conte as partes coloridas desta (pizza|torta)\./g,(_,f)=>`Tel de gekleurde delen van deze ${f==='torta'?'taart':'pizza'}.`).replace(/(pizza|torta) dividida em (\d+) partes iguais(?:, (\d+) coloridas)?/g,(_,f,d,n)=>`${f==='torta'?'Taart':'Pizza'} verdeeld in ${d} gelijke delen${n?`, waarvan ${n} gekleurd`:''}`)
.replace(/Marcar vai um na coluna ([UDCM])/g,(_,c)=>`Onthoud 1 in de kolom ${{U:'E',D:'T',C:'H',M:'D'}[c]}`)
.replace(/Deu (\d+(?:\/\d+)?)! Agora é sua vez\./g,'Het is $1! Nu jij.')
.replace(/Vamos contar as (unidades|dezenas|centenas)\?/g,(_,place)=>`Zullen we de ${unit[place]} tellen?`)
.replace(/Escreva (\d+) embaixo\./g,'Schrijf $1 onderaan.')
.replace(/Conte todas\. (\d+) embaixo!/g,'Tel ze allemaal. $1 onderaan!')
.replace(/Só as coloridas\. (\d+) em cima!/g,'Alleen de gekleurde. $1 bovenaan!')
.replace(/O resultado é (\d+)\. Agora você pode voltar à conta e tentar!/g,'De uitkomst is $1. Ga terug naar de oefening en probeer het zelf!')
.replace(/(Primeiro|Agora), as (unidades|dezenas|centenas)/g,(_,p,u)=>`${p==='Primeiro'?'Eerst':'Nu'} de ${unit[u]}`)
.replace(/Temos (\d+) (unidades|dezenas|centenas)\./g,(_,n,u)=>`We hebben ${n} ${unit[u]}.`)
.replace(/O (\d+) fica embaixo das (unidades|dezenas|centenas)\./g,(_,n,u)=>`Schrijf de ${n} onder de ${unit[u]}.`)
.replace(/(\d+) mais (\d+)( mais 1)? é igual a (\d+)/g,(_,a,b,c,d)=>`${a} plus ${b}${c?' plus 1':''} is gelijk aan ${d}`)
.replace(/(\d+) (grupo|grupos) de (\d+)/g,(_,n,g,a)=>`${n} ${g==='grupo'?'groep':'groepen'} van ${a}`)
.replace(/Cada grupo tem (\d+) laços\. Vamos contar (\d+) grupos!/g,'Elke groep heeft $1 strikken. Laten we $2 groepen tellen!')
.replace(/Então, (\d+) × (\d+) = (\d+)\./g,'Dus $1 × $2 = $3.')
.replace(/(\d+) partes iguais ao todo/g,'$1 gelijke delen in totaal')
.replace(/Conte todas as fatias, inclusive as claras\. O (\d+) fica embaixo: é o denominador\./g,'Tel alle stukken, ook de lichte. De $1 staat onder de streep: dat is de noemer.')
.replace(/(\d+) (parte colorida|partes coloridas)/g,(_,n)=>`${n} ${Number(n)===1?'gekleurd deel':'gekleurde delen'}`)
.replace(/Conte só as partes coloridas\. O (\d+) fica em cima: é o numerador\./g,'Tel alleen de gekleurde delen. De $1 staat boven de streep: dat is de teller.')
.replace(/São (\d+) de (\d+) partes iguais: (\d+)\/(\d+) da (pizza|torta)\./g,(_,n,d,a,b,f)=>`Dit zijn ${n} van de ${d} gelijke delen: ${a}/${b} van de ${f==='torta'?'taart':'pizza'}.`)
.replace(/^Tirar /,'Uittrekken: ');
t=t.replace(/(\d+)\/(\d+) da torta/g,'$1/$2 van de taart').replace(/(\d+)\/(\d+) da pizza/g,'$1/$2 van de pizza');
for(const [pt,dutch] of replacements)t=t.split(pt).join(dutch);
return t}
const textState=new WeakMap(),attrState=new WeakMap();
function updateText(node){if(node.parentElement?.closest('script,style,[data-i18n-skip]'))return;const current=node.nodeValue,record=textState.get(node);let source=record&&current===record.output?record.source:current;let output=language==='nl-NL'?nl(source):source;
if(language==='nl-NL'&&node.parentElement?.classList.contains('place'))output={U:'E',D:'T',C:'H',M:'D'}[source]||output;
textState.set(node,{source,output});if(current!==output)node.nodeValue=output}
function updateAttrs(el){if(el.closest('[data-i18n-skip]'))return;let records=attrState.get(el)||{};for(const name of ['aria-label','title','alt','placeholder']){if(!el.hasAttribute(name))continue;const value=el.getAttribute(name),record=records[name],source=record&&record.output===value?record.source:value,output=language==='nl-NL'?nl(source):source;records[name]={source,output};if(value!==output)el.setAttribute(name,output)}attrState.set(el,records)}
function walk(root){if(root.nodeType===3){updateText(root);return}if(root.nodeType!==1&&root.nodeType!==9)return;if(root.nodeType===1){if(root.matches('script,style,[data-i18n-skip]'))return;updateAttrs(root)}for(const child of root.childNodes)walk(child)}
const button=document.createElement('button');button.id='language';button.className='secondary language-button';button.type='button';button.setAttribute('data-i18n-skip','');
function applyBrand(){const brand=brands[language]||brands.en,link=document.querySelector('.brand'),logo=link?.querySelector('img'),appleTitle=document.querySelector('meta[name="apple-mobile-web-app-title"]');document.title=brand.name;if(appleTitle)appleTitle.content=brand.name;if(link)link.setAttribute('aria-label',brand.name);if(logo){logo.src=brand.logo;logo.alt=brand.name}}
function apply(){document.documentElement.lang=language;applyBrand();button.innerHTML = `<span class="${language === 'pt-BR' ? 'current-language' : ''}">🇧🇷 BR</span><span aria-hidden="true">↔</span><span class="${language === 'nl-NL' ? 'current-language' : ''}">🇳🇱 NL</span>`;button.setAttribute('aria-label',language==='pt-BR'?'Mudar para neerlandês':'Naar Braziliaans-Portugees schakelen');button.title=language==='pt-BR'?'Português do Brasil → Nederlands':'Nederlands → Português do Brasil';walk(document)}
button.onclick=()=>{language=language==='pt-BR'?'nl-NL':'pt-BR';try{localStorage.setItem('atelie-language',language)}catch{}apply()};
const observer=new MutationObserver(records=>{for(const record of records){if(record.type==='characterData')updateText(record.target);else if(record.type==='attributes')updateAttrs(record.target);else for(const child of record.addedNodes)walk(child)}});
observer.observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','title','alt','placeholder']});apply();
return {mount(container) { container.append(button); }};
})();
