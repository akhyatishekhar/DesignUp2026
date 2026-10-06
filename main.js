(function(){
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const IC={
 judge:'<svg class="ic" viewBox="0 0 48 48"><path d="M8 12h12M8 20h16M8 28h10"/><path class="a" d="M8 37h32"/></svg>',
 bucket:'<svg class="ic" viewBox="0 0 48 48"><path d="M5 18h10l-1.5 18h-7zM19 18h10l-1.5 18h-7zM33 18h10l-1.5 18h-7z"/><path class="a" d="M35 30h6M35 26h6"/></svg>',
 agent:'<svg class="ic" viewBox="0 0 48 48"><circle cx="24" cy="24" r="14"/><circle class="f" cx="24" cy="10" r="3"/><circle cx="36" cy="17" r="1.6"/><circle cx="36" cy="31" r="1.6"/><circle cx="24" cy="38" r="1.6"/><circle cx="12" cy="31" r="1.6"/><circle cx="12" cy="17" r="1.6"/></svg>',
 lanes:'<svg class="ic" viewBox="0 0 48 48"><path d="M6 16h36"/><circle cx="6" cy="16" r="2"/><circle cx="18" cy="16" r="2"/><circle cx="30" cy="16" r="2"/><circle cx="42" cy="16" r="2"/><path class="a" d="M6 32h22m-5-5 5 5-5 5"/></svg>',
 loop:'<svg class="ic" viewBox="0 0 48 48"><path d="M12 30a13 13 0 1 1 8 10"/><path d="M8 28l4 3 3-4"/><circle class="f" cx="24" cy="24" r="3"/></svg>',
 cube:'<svg class="ic" viewBox="0 0 48 48"><path d="M24 7l15 8v18l-15 8-15-8V15z"/><path d="M9 15l15 8M24 23v18"/><path class="a" d="M24 23l15-8"/></svg>',
 sound:'<svg class="ic" viewBox="0 0 48 48"><circle class="f" cx="14" cy="24" r="3.5"/><path d="M22 16a11 11 0 0 1 0 16M28 11a18 18 0 0 1 0 26"/><path class="a" d="M34 6a25 25 0 0 1 0 36"/></svg>',
 voices:'<svg class="ic" viewBox="0 0 48 48"><circle cx="14" cy="16" r="4"/><circle cx="34" cy="14" r="3"/><circle class="f" cx="35" cy="32" r="4.5"/><circle cx="15" cy="34" r="3"/><path d="M14 16l20-2 1 18-20 2z" stroke-dasharray="2 3"/></svg>'};

const D=[
 {ic:"judge",t:"Making is cheap. <em>Judgement</em> isn't.",who:"Justin Maguire · Atlassian",img:"7614",
  idea:'<b>AI shrinks research, design and build.</b> <span>Deciding what\'s right is now the slow part. Design moves from producing artifacts to making decisions.</span>',
  detail:[["A judgement workflow",[["Frame the problem","Agree the criteria first"],["Demo before memo","Prototype, not document"],["Reward judgement","Impact over deliverables"],["Record learnings","What changed our mind"]]],["The invisible skills · Tey Bannerman",[["Explain the process"],["Defend the decision"],["Show the value"]]]],
  slides:[["7614","Making is cheap"],["7612","Artifact → decision"],["7618","Loredana Crisan, Figma"],["7620","Judgement workflow"],["7622","Frame the problem"],["7627","Demo before memo"],["7628","Reward judgement"]]},
 {ic:"bucket",t:"AI <em>or</em> me?",who:"Tey Bannerman",img:"7597",
  idea:'<b>Three buckets.</b> <span>What AI does well, what it only looks like it does, and what it can\'t do at all.</span>',
  detail:[["The buckets",[["AI does it as well","First-draft UI, copy edits, specs, benchmarks"],["Looks like AI does it","Domain IA, synthesis, personas, error states"],["AI can't do it","User contact, deciding what matters, accountability, saying no"]]],["When AI writes every application",[["−19%","best freelancers hired"],["+14%","worst freelancers hired"],["−5%","average wages"]]],["Write down every decision",[["Who it's for"],["What we decided"],["What we're not doing"],["What we expect"]]]],
  slides:[["7597","The three buckets"],["7598","Technology can't do it"],["7594","Hiring signal"],["7605","Decision record"]]},
 {ic:"agent",t:"Agents need <em>manners</em>",who:"Jay Demetillo · Microsoft · Atlassian",img:"7785",
  idea:'<b>Design the states, not just the screens.</b> <span>People feel six things with an AI. Each needs its own behaviour.</span>',
  detail:[["Six emotional states",[["Idle","Findable, not pushy"],["Exploring","Draft beside, not over"],["Uncertain","Show the inputs"],["Confident","Cut the confirmations"],["Corrective","Keep their fixes"],["Escalated","Exit to a human"]]],["Minimum Trustworthy Experience · Microsoft",[["Understandable"],["Efficient"],["Habituating"],["Discreet"],["Beautiful"],["Pop the hood","Atlassian"]]],["The egg principle",[["1947","Cake mix flops"],["1949","Add a fresh egg"],["Lesson","People trust what they help make"]]]],
  slides:[["7785","Six states"],["7625","MTE"],["7783","Cake mix"],["7782","India AI Governance"],["7784","Speak for who isn't there"],["7781","AI brought its own map"],["7777","Moving goalposts"],["7780","The economics"],["7790","Four takeaways"]]},
 {ic:"lanes",t:"Strategic designer, <em>two lanes</em>",who:"Oded Klimer & Mukul Bisht · Rubrik",img:"7707",
  idea:'<b>Not a design engineer. A strategic designer.</b> <span>Shift left to the problem and the customer. Size the work into two lanes.</span>',
  detail:[["Two lanes",[["XL · L · M","Research → PRD → concept → design → code"],["XS · S","Whiteboard → develop → code"]]],["42 AI skills across",[["Product design"],["UX research"],["Design systems"],["UX writing"],["Tech pubs"]]],["10x differentiation",[["Right problem"],["Simplicity"],["Ease of use"],["A car, not a faster horse"]]]],
  slides:[["7694","CTO: deliver 10x design"],["7701","Sketch → 3D → prompt"],["7699","Are we all makers?"],["7705","10x differentiation"],["7707","Strategic designer"],["7710","Shift left"],["7711","First principles"],["7714","Two lanes"],["7716","Skills by function"],["7718","Persona Skill"],["7719","What's next"]]},
 {ic:"loop",t:"Disruption <em>déjà vu</em>",who:"Kara Pernice · NN/g",img:"7768",
  idea:'<b>We\'ve been here before.</b> <span>Mobile, Lean and Agile each brought the same myths. Don\'t succumb. Adapt.</span>',
  detail:[["Every disruption",[["~1999","Design = polish"],["Early 2000s","Early mobile"],["~2001","Lean & Agile"],["2022 →","AI"]]],["AI-style design",[["Decorative images"],["Card & badge soup"],["Fake specificity"],["'Read more' links"]]],["Unique to AI",[["Adoption pressure"],["Trust & accuracy"],["Ethical & environmental concerns"]]]],
  slides:[["kara0","Defied best practices"],["7754","Design = polish"],["7756","Mobile (early)"],["7757","Made the business case"],["7761","Common issues"],["7762","Married UX + Lean"],["7763","Design thinking"],["7765","Growth of UX"],["7768","AI-style design"],["7771","Unique to AI"],["7769","Easy to give up"],["7772","Then → now"],["7774","Create first"]]},
 {ic:"cube",t:"Spatial <em>computing</em>",who:"Oliver Weidlich · Contxtual",img:"7795",
  idea:'<b>Beyond the flat rectangle.</b> <span>Computers that understand the room need a different approach to design.</span>',
  detail:[["Elements of spatial computing",[["Digital worlds"],["XR glasses"],["Artificial intelligence"],["Computer vision"],["Conversational UI"],["Intelligent agents"],["Internet of things"]]]],
  slides:[["7795","Elements of spatial computing"],["7796","A different approach"]]},
 {ic:"sound",t:"Sonic <em>identity</em>",who:"Rajeev Raja · DDB India",img:"7802",
  idea:'<b>If the whole world were blind, how would your brand be recognised?</b> <span>Sound is part of the system.</span>',
  detail:[["Mastercard Rasas",[["Shringara","Love"],["Hasya","Joy"],["Karuna","Empathy"],["Veera","Courage"],["Shanta","Peace"],["Raudra","Anger"],["Bhaya","Fear"],["Bhibhitsya","Dissatisfaction"]]]],
  slides:[["7802","If the world were blind"],["7810","Mastercard Rasas"]]},
 {ic:"voices",t:"Also <em>on stage</em>",who:"Four more talks",img:"7589",
  idea:'<b>Design beyond screens.</b> <span>Social contracts, civic systems, careers and care.</span>',
  detail:[["Talks",[["A new social contract","George Aye · Greater Good Studio"],["Garbage is a blind spot","Jyothish VM · NammaKasa"],["Career as a novel","Barry Fiske · Dentsu"],["Fighting for the box","Meru Vashisht · IRC"]]]],
  slides:[["7585","A new social contract"],["7589","Garbage is a blind spot"],["7821","Today's great designers need…"],["7836","Fighting for the box"]]}
];
const plain=h=>h.replace(/<[^>]+>/g,"");

$("#cards").innerHTML=D.map((d,i)=>`<button class="card" data-i="${i}" aria-label="Open: ${plain(d.t)}"><img class="bgimg" src="${d.img}.jpg" alt="" loading="lazy"><span class="shade"></span><span class="hd"><span class="num">0${i+1}</span><span class="go">→</span></span>${IC[d.ic]}<span><h3>${d.t}</h3><span class="who">${d.who}</span></span></button>`).join("");

(function(){const W=1100,H=420;const pts=[[90,330],[230,250],[360,310],[480,170],[620,240],[760,110],[900,200],[1020,100]];
 let st="";for(let x=60;x<W;x+=130)st+=`<path class="street" d="M${x} 0 L${x+((x*7)%60)-30} ${H}"/>`;for(let y=40;y<H;y+=90)st+=`<path class="street" d="M0 ${y} L${W} ${y+((y*3)%50)-25}"/>`;
 st+=`<path class="street" d="M0 380 C300 300 500 420 1100 260"/><path class="street" d="M150 0 C260 160 120 260 340 420"/>`;
 let d=`M${pts[0][0]} ${H}L${pts[0][0]} ${pts[0][1]}`;for(let i=1;i<pts.length;i++){const[a,b]=pts[i-1],[c,e]=pts[i];d+=` C${(a+c)/2} ${b} ${(a+c)/2} ${e} ${c} ${e}`}d+=` L${pts[7][0]} 0`;
 const nodes=pts.map((p,i)=>{const lbl=plain(D[i].t).split(/[.,]/)[0];const up=i%2;return `<g class="node" tabindex="0" role="button" data-i="${i}" aria-label="Open: ${plain(D[i].t)}"><circle cx="${p[0]}" cy="${p[1]}" r="9"/><text x="${p[0]}" y="${p[1]+(up?-20:30)}" text-anchor="middle">0${i+1} ${lbl}</text></g>`}).join("");
 $("#map").innerHTML=`<svg viewBox="0 0 ${W} ${H}" role="group" aria-label="Route through the eight takeaways">${st}<path class="routeline" id="rl" d="${d}"/>${nodes}<g class="tagbox"><rect x="40" y="24" width="196" height="30" rx="4"/><text x="56" y="44">DESIGN AT CROSSROADS</text></g></svg>`;
 const rl=$("#rl"),L=rl.getTotalLength();rl.style.strokeDasharray=L;
 const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
 if(reduce||!("IntersectionObserver" in window)){rl.style.strokeDashoffset=0}else{rl.style.strokeDashoffset=L;rl.style.transition="stroke-dashoffset 2.6s cubic-bezier(.6,0,.2,1)";new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){rl.style.strokeDashoffset=0;o.disconnect()}}),{threshold:.3}).observe($("#map"))}
})();

if("IntersectionObserver" in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.style.animationDelay=(+e.target.dataset.i%4)*70+"ms";e.target.classList.add("reveal");io.unobserve(e.target)}}),{threshold:.15});$$(".card").forEach(c=>io.observe(c))}

const dlg=$("#dlg");let cur=0;
function pane(t){$$(".tab").forEach(b=>b.setAttribute("aria-selected",b.dataset.t===t));const d=D[cur];let h="";
 if(t==="idea")h=`<div class="idea"><p class="big">${d.idea}</p><figure><img src="${d.img}.jpg" alt="${plain(d.t)} slide"></figure></div>`;
 if(t==="detail")h=d.detail.map(([title,items])=>`<p class="sub">${title}</p><div class="blocks">${items.map((it,i)=>`<div class="blk ${i===0?'on':''}"><span class="n">0${i+1}</span><b>${it[0]}</b>${it[1]?`<span>${it[1]}</span>`:""}</div>`).join("")}</div>`).join("");
 if(t==="slides")h=`<div class="gal">${d.slides.map(s=>`<figure><img src="${s[0]}.jpg" alt="${s[1]}" loading="lazy"><figcaption>${s[1]}</figcaption></figure>`).join("")}</div>`;
 $("#pane").innerHTML=`<div class="pane">${h}</div>`}
function open(i){cur=i;const d=D[i];$("#mt").innerHTML=d.t;$("#mwho").textContent=`0${i+1} · ${d.who}`;pane("idea");
 if(typeof dlg.showModal==="function")dlg.showModal();else dlg.setAttribute("open","");dlg.scrollTop=0}
$$(".tab").forEach(b=>b.onclick=()=>pane(b.dataset.t));
document.addEventListener("click",e=>{const t=e.target.closest(".card,.node");if(t)open(+t.dataset.i)});
document.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.classList&&e.target.classList.contains("node")){e.preventDefault();open(+e.target.dataset.i)}});
$("#mx").onclick=()=>dlg.close();dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});
})();
