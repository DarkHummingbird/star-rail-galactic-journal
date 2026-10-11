(() => {
'use strict';
const $=s=>document.querySelector(s), worlds=['herta','jarilo','luofu','penacony'];
const themes={herta:['探索未知','从轨道远景，走进收藏未知的舱段。'],jarilo:['同一座城，两种守护','布洛妮娅与希儿，把地上和地下的故事连在一起。'],luofu:['因相遇而交汇','循着同一张画面，认识同行者之间的联系。'],penacony:['穿过梦的另一面','每一扇画框，都是另一段梦境的入口。']};
const records={visited:new Set(),discoveries:new Set()};
function button(src,label,fn){const b=document.createElement('button');b.className='story-card';b.innerHTML='<img alt="" decoding="async" loading="lazy"><span></span>';b.querySelector('img').src=src;b.querySelector('span').textContent=label;b.setAttribute('aria-label',label);b.addEventListener('click',fn);return b;}
for(const id of worlds){const el=$('#'+id),card=el.querySelector('.world-card'),title=document.createElement('div'),tray=document.createElement('div');title.className='world-story';title.innerHTML='<strong></strong><span></span>';title.querySelector('strong').textContent=themes[id][0];title.querySelector('span').textContent=themes[id][1];tray.className='story-tray';tray.setAttribute('aria-label',themes[id][0]);card.append(title,tray);
 if(id==='jarilo'){
 [['assets/gallery-jarilo-03.webp','上层区 · 行政区'],['assets/gallery-jarilo-08.webp','下层区 · 磐岩镇']].forEach(([src,label])=>tray.append(button(src,label,()=>window.JourneyGallery.select(id,src))));
 }else if(id==='luofu'){
 tray.remove();
 }else{
 const slides=window.JOURNEY_SLIDES[id].filter(s=>!s.small);const chosen=id==='herta'?['assets/gallery-herta-04.webp','assets/gallery-herta-01.webp']:['assets/gallery-penacony-10.webp','assets/gallery-penacony-08.webp'];for(const src of chosen){const s=slides.find(s=>s.src===src);tray.append(button(s.src,s.label,()=>window.JourneyGallery.select(id,s.src)));}
 }
}
function recap(){const n=records.visited.size,d=records.discoveries.size;let saved=[];try{saved=JSON.parse(localStorage.getItem('astral-memories-v1')||'[]');}catch{}$('.journey-recap').textContent=`这段旅途，走过 ${n} 站，读过 ${d} 份档案，留下 ${saved.length} 张相片。`;$('.depart').dataset.recordCount=String(saved.length);}
function visit(id){if(worlds.includes(id)){records.visited.add(id);recap();}}
document.addEventListener('journeychange',()=>{if(document.body.dataset.worldMode==='scene')visit(document.body.dataset.chapter);});
const observe=new IntersectionObserver(entries=>{if(document.body.classList.contains('cinematic'))return;for(const e of entries)if(e.isIntersecting)visit(e.target.id);},{threshold:.55});worlds.forEach(id=>observe.observe($('#'+id)));
document.addEventListener('discovery',e=>{records.discoveries.add(e.detail.world+':'+e.detail.name);recap();});
document.addEventListener('memorysaved',e=>{recap();const item=e.detail;if(!item||document.body.classList.contains('motion-off')||matchMedia('(prefers-reduced-motion:reduce)').matches)return;const photo=document.createElement('div');photo.className='captured-card';photo.innerHTML='<img alt=""><span></span>';photo.querySelector('img').src=item.src;photo.querySelector('span').textContent=item.label;document.body.append(photo);const dest=$('.frame nav a[href="#memories"]').getBoundingClientRect();gsap.fromTo(photo,{x:innerWidth*.53,y:innerHeight*.32,rotation:-6,scale:1,opacity:0},{opacity:1,y:innerHeight*.27,duration:.35,ease:'power2.out',onComplete:()=>gsap.to(photo,{x:dest.left,y:dest.top,scale:.06,rotation:0,opacity:0,delay:.3,duration:.8,ease:'power3.inOut',onComplete:()=>photo.remove()})});});
document.addEventListener('slidechange',e=>{const {id,index,label}=e.detail;const el=$('#'+id);el.dataset.sceneIndex=String(index);el.dataset.layer=window.JOURNEY_SLIDES[id].filter(s=>!s.small)[index].layer||'upper';el.querySelector('.world-story strong').textContent=themes[id][0];if(!document.body.classList.contains('scan-open')&&document.body.dataset.chapter===id)$('.terminal-status').textContent=`${themes[id][0]} / ${label} · 已到访 ${records.visited.size} 站`;});
recap();
})();
