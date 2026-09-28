const items=[
 ['Cajado Arcano','Arma','⚚',true],['Capuz Sombrio','Armadura','♟',false],['Manto das Sombras','Armadura','◈',false],['Botas de Exploração','Armadura','◫',false],
 ['Anel da Disciplina','Acessório','◉',false],['Amuleto do Foco','Acessório','◇',false],['Cinto do Equilíbrio','Acessório','▱',false],['Capa da Liberdade','Armadura','♜',false]
];
const itemsEl=document.querySelector('#items');
function render(filter='Tudo'){
 itemsEl.innerHTML='';
 items.filter(x=>filter==='Tudo'||x[1]===filter).forEach(([name,type,icon,equipped])=>{
  const el=document.createElement('button');el.className='item'+(equipped?' equipped':'');
  el.innerHTML=`<div class="item-art">${icon}</div>${equipped?'<span class="equip-tag">EQUIPADO</span>':''}<strong>${name}</strong><small>Nv. 1</small>`;
  el.addEventListener('click',()=>toast(name+(equipped?' está equipado.':' selecionado.')));itemsEl.appendChild(el);
 });
}
function toast(msg){const t=document.querySelector('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove('show'),1600)}
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(b.textContent.trim().replace(/^\S+\s*/,''))}));
document.querySelectorAll('.side-nav button').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.side-nav button').forEach(x=>x.classList.remove('active'));b.classList.add('active');toast(b.querySelector('b').textContent)}));
const menu=document.querySelector('#menu');document.querySelector('#menuBtn').addEventListener('click',()=>menu.classList.add('open'));document.querySelector('#closeMenu').addEventListener('click',()=>menu.classList.remove('open'));menu.addEventListener('click',e=>{if(e.target===menu)menu.classList.remove('open')});
render();
