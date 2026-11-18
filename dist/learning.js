const learning=(()=>{
const get=id=>document.getElementById(id),key='atelie-learning-v1';
const maxCredits=3, correctPerCredit=3;
let data={credits:maxCredits,towardCredit:0,days:{}},usedHelp=false;
let testMode=false,usedTestHelp=false;
try{const stored=JSON.parse(localStorage.getItem(key));if(stored&&Number.isInteger(stored.credits)&&stored.credits>=0&&Number.isInteger(stored.towardCredit)&&stored.towardCredit>=0&&stored.towardCredit<3&&stored.days&&typeof stored.days==='object')data=stored}catch{}
data.credits=Math.min(data.credits,maxCredits);
if(data.credits===maxCredits)data.towardCredit=0;
function persist(){try{localStorage.setItem(key,JSON.stringify(data))}catch{}}
function dateKey(date=new Date()){return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`}
function emptyStats(){return {correct:0,wrong:0,helped:0,helpsUsed:0}}
function emptyDay(){return {...emptyStats(),groups:{},tables:{},logs:[]}}
function initializeTables(current){
  if(current.tables){
    for(const [table,stats] of Object.entries(current.tables)){
      if(Number.isInteger(stats.helped))continue;
      const retained=current.logs.filter(log=>log.mode==='multiply'&&log.correct&&log.question.startsWith(table+' × '));
      if(retained.length===stats.correct)stats.helped=retained.filter(log=>log.helped).length;
    }
    return;
  }
  current.tables={};
  for(const log of current.logs){
    if(log.mode!=='multiply')continue;
    const match=/^(\d+) × /.exec(log.question);
    if(match){
      const stats=current.tables[Number(match[1])]??=emptyStats();
      stats[log.correct?'correct':'wrong']++;
      if(log.correct&&log.helped)stats.helped++;
    }
  }
  const knownAttempts=Object.values(current.tables).reduce((sum,row)=>sum+row.correct+row.wrong,0);
  const multiply=current.groups.multiply??emptyStats();
  current.partialTables=knownAttempts<multiply.correct+multiply.wrong;
}
function day(){const current=data.days[dateKey()]??=emptyDay();initializeTables(current);return current}
function statsFor(current,mode,table){
  const stats=[current.groups[mode]??=emptyStats()];
  if(mode==='multiply')stats.push(current.tables[table]??=emptyStats());
  return stats;
}
function updateUI(){
  const button=get('help');
  const unavailable=!testMode&&data.credits===0&&!usedHelp;
  button.classList.toggle('help-unavailable',unavailable);
  button.setAttribute('aria-label',usedHelp?'Ver ajudinha novamente':'Ajudinha');
  button.title=unavailable?'Como ganhar ajudas':'';
  if(testMode){
    get('helpMeter').innerHTML='<span class="help-dots" role="img" aria-label="Ajudas ilimitadas"><span class="help-dot filled"></span><span class="help-dot filled"></span><span class="help-dot filled"></span></span><span class="help-meter-label">∞ ajuda</span>';
    return;
  }
  const dots=Array.from({length:correctPerCredit},(_,index)=>
    `<span class="help-dot${index<data.credits?' filled':''}"></span>`
  ).join('');
  get('helpMeter').innerHTML=`<span class="help-dots" role="img" aria-label="${data.credits} de ${maxCredits} ajudinhas disponíveis">${dots}</span><span class="help-meter-label">ajuda</span>`;
}
function begin(){usedHelp=false;usedTestHelp=false;updateUI()}
function setTestMode(enabled){testMode=enabled;updateUI()}
function useHelp(mode,table){
  if(testMode){usedTestHelp=true;return true}
  if(usedHelp)return true;
  if(data.credits<1)return false;
  data.credits--;
  data.towardCredit=0;
  usedHelp=true;
  const current=day();
  current.helpsUsed++;
  for(const stats of statsFor(current,mode,table))stats.helpsUsed=(stats.helpsUsed??0)+1;
  persist();
  updateUI();
  return true;
}
function record({mode,table,question,answer,expected,correct}){
  if(usedTestHelp)return false;
  const current=day();
  const outcome=correct?'correct':'wrong';
  for(const stats of [current,...statsFor(current,mode,table)]){
    stats[outcome]++;
    if(correct&&usedHelp&&Number.isInteger(stats.helped))stats.helped++;
  }
  let earned=false;
  if(correct&&data.credits<maxCredits&&++data.towardCredit===correctPerCredit){
    data.towardCredit=0;
    data.credits++;
    earned=true;
  }
  current.logs.push({at:new Date().toISOString(),mode,question,answer,expected,correct,helped:usedHelp});
  if(current.logs.length>100)current.logs.splice(0,current.logs.length-100);
  persist();
  updateUI();
  return earned;
}
function escape(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
const modeNames={multiply:'Tabuadas',add:'Somas',fraction:'Frações'};
function renderBreakdown(current){
  const rows=[];
  const allocated=Object.values(current.groups).reduce((sum,row)=>sum+(row.helpsUsed??0),0);
  const unallocated=current.helpsUsed-allocated;
  for(const [mode,name] of Object.entries(modeNames)){
    rows.push([mode==='multiply'?'Tabuada geral':name,current.groups[mode]??emptyStats(),false]);
    if(mode==='multiply'){
      for(const [table,stats] of Object.entries(current.tables)){
        rows.push([`Tabuada do ${table}`,stats,true]);
      }
    }
  }
  return `<div class="report-table"><table><thead><tr><th>Grupo</th><th>Tentativas</th><th>Acertos</th><th>Erros</th><th>Acertos sem ajuda</th><th>Acertos com ajuda</th><th>Ajudas usadas</th></tr></thead><tbody>${rows.map(([name,stats,detail])=>{
    const attempts=stats.correct+stats.wrong;
    const correctPct=attempts?Math.round(stats.correct/attempts*100):0;
    return `<tr${detail?' class="report-table-detail"':''}><th scope="row">${name}</th><td>${attempts}</td><td>${attempts?correctPct+'%':'—'}</td><td>${attempts?100-correctPct+'%':'—'}</td><td>${stats.helped===undefined?'—':stats.correct-stats.helped}</td><td>${stats.helped??'—'}</td><td>${stats.helpsUsed??(unallocated?'—':0)}</td></tr>`;
  }).join('')}</tbody></table></div>${unallocated>0?`<p class="small">Ajudinhas antigas sem atividade registrada: ${unallocated}</p>`:''}${current.partialTables?'<p class="small">Para este dia, os números por tabuada incluem apenas as tentativas antigas ainda disponíveis, além das novas.</p>':''}`;
}
function renderReport(date=dateKey()){
  const current=data.days[date]??emptyDay();
  initializeTables(current);
  const total=current.correct+current.wrong;
  const accuracy=total?Math.round(current.correct/total*100):0;
  const correctPct=total?Math.round(current.correct/total*100):0;
  const wrongPct=total?Math.round(current.wrong/total*100):0;
  const bar=(label,value,percent,tone)=>`<div class="report-bar-row report-bar-${tone}${Number(percent)>0?' has-value':''}"><span>${label}</span><div class="report-bar-track"><i style="--bar:${percent}%"></i></div><b>${value}</b></div>`;
  get('dailyReportContent').innerHTML=`<p>Consulte os resultados por dia. Cada envio de resposta conta como uma tentativa; campos vazios não contam.</p><label class="report-date" for="reportDate">Dia do relatório <input type="date" id="reportDate" value="${date}" max="${dateKey()}"></label><section class="report-chart" aria-label="Resumo do relatório"><div class="report-chart-head"><b>Resumo geral</b><span>${total} ${total===1?'tentativa':'tentativas'}</span></div><div class="report-bars">${bar('Acertos',current.correct,correctPct,'correct')}${bar('Erros',current.wrong,wrongPct,'wrong')}${bar('Aproveitamento',`${accuracy}%`,accuracy,'accuracy')}</div></section><p class="report-notes">Acertos sem ajuda: ${current.correct-current.helped} · Acertos com ajuda: ${current.helped} · Ajudas usadas: ${current.helpsUsed}</p>${renderBreakdown(current)}<h3>Últimas tentativas do dia</h3>${current.logs.length?`<p class="small">Mostrando até 100 tentativas recentes. Os totais incluem todas as tentativas do dia.</p><div class="report-table"><table><thead><tr><th>Hora</th><th>Grupo</th><th>Desafio</th><th>Resposta</th><th>Resultado</th></tr></thead><tbody>${current.logs.slice().reverse().map(log=>{const at=new Date(log.at),time=at.toLocaleTimeString('nl-NL',{hour:'2-digit',minute:'2-digit'});return `<tr><td>${escape(time)}</td><td>${modeNames[log.mode]||''}</td><td>${escape(log.question)}</td><td>${escape(log.answer)}</td><td><span class="${log.correct?'report-correct':'report-wrong'}">${log.correct?'✓ Acerto':'↻ Erro'}</span>${log.helped?'<small>Com ajuda</small>':''}${!log.correct?`<small>Esperado: ${escape(log.expected)}</small>`:''}</td></tr>`}).join('')}</tbody></table></div>`:'<p class="intro-message">Nenhuma tentativa registrada neste dia.</p>'}<p class="small">Os dados ficam neste navegador.</p>`;
  get('reportDate').onchange=()=>{const selected=get('reportDate').value;if(/^\d{4}-\d{2}-\d{2}$/.test(selected)&&selected<=dateKey())renderReport(selected)};
}
return {begin,useHelp,record,renderReport,setTestMode};
})();
