var $=function(i){return document.getElementById(i)},RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
/* skyline */
var H=[130,200,160,250,180,220,150,190,140,210],s="",x=40;
H.forEach(function(h,i){var w=82+(i%3)*14;s+='<rect class="bld" style="--i:'+i+'" x="'+x+'" y="'+(300-h)+'" width="'+w+'" height="'+h+'"/>';
for(var r=0;r<Math.floor(h/34);r++)for(var c=0;c<Math.floor(w/26);c++)if((r*7+c*3+i)%4)s+='<rect class="win" x="'+(x+10+c*26)+'" y="'+(300-h+12+r*34)+'" width="8" height="12" opacity=".75"/>';x+=w+14});
$("sky").innerHTML=s;
/* services */
var IC=["M3 11l9-8 9 8M5 10v10h14V10M10 20v-6h4v6","M3 12V4h8l10 10-8 8L3 12zM7.5 8.5h.01","M7 14a4 4 0 1 1 3.900-5H21v4h-3v3h-3v-3h-4.100A4 4 0 0 1 7 14z","M4 21V4h10v17M14 9h6v12M8 8h2M8 12h2M8 16h2M3 21h18","M3 20h18M5 16l4-5 4 3 6-8M15 6h4v4","M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h7"],
SV=[["Buying","Find the right home or plot with shortlists matched to your budget and lifestyle."],["Selling","Professional pricing, marketing and qualified buyers to sell at the best value."],["Renting","Verified tenants and landlords with clear agreements for both sides."],["Property management","Rent collection, maintenance and upkeep while you stay worry-free."],["Investment advisory","Data-backed guidance on plots, files and rental yield across Lahore."],["Legal and documentation","Verification, transfer, registry and tax paperwork handled end to end."]];
$("svc").innerHTML=SV.map(function(v,i){return'<div class="svc rv" style="--d:'+(i%3)*.12+'s"><svg viewBox="0 0 24 24"><path d="'+IC[i]+'"/></svg><h3>'+v[0]+'</h3><p>'+v[1]+'</p></div>'}).join("");
/* listings */
/* Sample photos: replace with your own files, e.g. "images/house-1.jpg" */
var SPH=["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80"];
var D=[{t:"Modern 10 Marla House",a:"DHA Phase 6",c:"House",p:"PKR 21.5 Crore",z:"10 Marla",b:5,f:"For sale"},{t:"1 Kanal Corner Plot",a:"Bahria Town",c:"Plot",p:"PKR 9.8 Crore",z:"1 Kanal",b:0,f:"For sale"},{t:"Luxury 2 Bed Apartment",a:"Gulberg III",c:"Flat",p:"PKR 5.2 Crore",z:"1,050 sq ft",b:2,f:"For sale"},{t:"5 Marla Double Story",a:"Johar Town",c:"House",p:"PKR 4.8 Crore",z:"5 Marla",b:4,f:"For sale"},{t:"8 Marla Residential Plot",a:"Bahria Town",c:"Plot",p:"PKR 3.1 Crore",z:"8 Marla",b:0,f:"For sale"},{t:"Furnished 1 Bed Flat",a:"Gulberg III",c:"Flat",p:"PKR 65,000 / month",z:"650 sq ft",b:1,f:"For rent"}],
PAL=["#2A2E35,#6B7480","#3A3F47,#B8861B","#23272D,#8A929E","#2F343C,#8A6A1F"],cat="All";
D.forEach(function(d,i){d.img=SPH[i]});
$("tabs").innerHTML=["All","House","Plot","Flat"].map(function(c){return'<button class="tab" data-c="'+c+'" aria-pressed="'+(c=="All")+'">'+(c=="All"?"All":c+"s")+'</button>'}).join("");
function draw(){$("grid").innerHTML=D.filter(function(d){return cat=="All"||d.c==cat}).map(function(d,i){
return'<article class="card" style="animation:rise .6s '+i*.08+'s both"><div class="pic" style="background:linear-gradient(135deg,'+PAL[i%4]+')"><span class="tag">'+d.f+'</span></div><div class="cb"><div class="pr">'+d.p+'</div><h3>'+d.t+'</h3><div class="lc">'+d.a+', Lahore</div><div class="mt"><span>'+d.z+'</span>'+(d.b?'<span>'+d.b+' beds</span>':'<span>'+d.c+'</span>')+'</div><a class="inq" target="_blank" rel="noopener" href="https://wa.me/923234083930?text='+encodeURIComponent("Salam, I am interested in: "+d.t+", "+d.a)+'">Enquire now</a></div></article>'}).join("")}
$("tabs").onclick=function(e){var b=e.target.closest(".tab");if(!b)return;cat=b.dataset.c;document.querySelectorAll(".tab").forEach(function(t){t.setAttribute("aria-pressed",t==b)});draw()};
draw();
/* testimonials */
var T=[["We bought our first home in DHA without a single paperwork worry. The team checked everything twice.","Imran &amp; Sadia Khan","Bought a 10 Marla house"],["They sold my plot in three weeks at a price better than I expected. Honest and quick.","Tariq Mehmood","Sold a 1 Kanal plot"],["As an overseas Pakistani, I needed people I could trust. Ali Estate managed everything for me.","Farah Nadeem","Investor from the UK"]],ti=0;
function tshow(n){ti=n;var q=$("tq");q.innerHTML="&ldquo;"+T[n][0]+"&rdquo;";$("tn").innerHTML=T[n][1];$("tr").textContent=T[n][2];
$("dots").innerHTML=T.map(function(_,i){return'<button data-i="'+i+'" aria-label="Review '+(i+1)+'" aria-current="'+(i==n)+'"></button>'}).join("");
[q,$("tn"),$("tr")].forEach(function(e){e.style.animation="none";e.offsetWidth;e.style.animation=""})}
$("dots").onclick=function(e){var b=e.target.closest("button");if(b){tshow(+b.dataset.i);clearInterval(tt)}};
tshow(0);var tt=setInterval(function(){tshow((ti+1)%T.length)},6000);
/* nav */
function sc(){$("nav").classList.toggle("s",scrollY>40)}addEventListener("scroll",sc);sc();
$("bg").onclick=function(){var o=$("lk").classList.toggle("o");this.setAttribute("aria-expanded",o)};
$("lk").onclick=function(e){if(e.target.tagName=="A")$("lk").classList.remove("o")};
/* form */
$("fm").onsubmit=function(e){e.preventDefault();var m="Salam, I am "+$("n").value+" ("+$("p").value+"). I want to: "+$("i").value+". Budget: "+($("b").value||"not decided")+". "+$("m").value;var u="https://wa.me/923234083930?text="+encodeURIComponent(m),w=open(u,"_blank");$("fs").innerHTML='Your message is ready. <a href="'+u+'" target="_blank" rel="noopener" style="color:var(--brass);font-weight:600">Tap here if WhatsApp did not open</a>.'};
$("yr").textContent=new Date().getFullYear();
/* reveal + counters */
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.12});
document.querySelectorAll(".rv").forEach(function(el){io.observe(el)});
if(!RM){var co=new IntersectionObserver(function(es){es.forEach(function(x){if(!x.isIntersecting)return;co.unobserve(x.target);var el=x.target,n=+el.dataset.n,sf=el.dataset.s,t0=performance.now();
(function st(t){var k=Math.min((t-t0)/1800,1),v=Math.round(n*(1-Math.pow(1-k,3)));el.textContent=v.toLocaleString("en-US")+(k==1?sf:"");if(k<1)requestAnimationFrame(st)})(t0)})},{threshold:.6});
document.querySelectorAll("[data-n]").forEach(function(el){co.observe(el)})}
/* gallery */
var GR=[],gcat="All",AS=null,DB=null;
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return"&#"+c.charCodeAt(0)+";"})}
function gdraw(){var cs=["All"].concat(Array.from(new Set(GR.map(function(g){return g.cat}))));if(cs.indexOf(gcat)<0)gcat="All";
$("gtabs").innerHTML=cs.length>2?cs.map(function(c){return'<button class="tab" data-c="'+esc(c)+'" aria-pressed="'+(c==gcat)+'">'+esc(c)+'</button>'}).join(""):"";
var L=GR.filter(function(g){return gcat=="All"||g.cat==gcat});
$("gempty").hidden=!!L.length;$("gempty").textContent=AS?"No photos or videos yet. Use the box above to add your first ones.":"Photos and videos are coming soon.";
$("gg").innerHTML=L.map(function(g,i){var u="/_blob/"+g.aid;return'<figure class="gi" style="animation:rise .6s '+i*.06+'s both" data-k="'+g.id+'">'+(g.kind=="video"?'<video src="'+u+'#t=0.1" preload="metadata" muted playsinline></video><span class="pl">Video</span>':'<img src="'+u+'" alt="'+esc(g.title||g.cat)+'" loading="lazy">')+(g.title?'<figcaption class="cap">'+esc(g.title)+'</figcaption>':'')+(AS&&ISA()?'<button class="del" data-k="'+g.id+'" aria-label="Delete">&times;</button>':'')+'</figure>'}).join("")}
$("gtabs").onclick=function(e){var b=e.target.closest(".tab");if(b){gcat=b.dataset.c;gdraw()}};
async function gup(files){var ok=["image/jpeg","image/png","image/webp","image/gif","video/mp4","video/webm"],P=$("prog");
if(!DB){P.textContent="Database is not available. Reload the page and try again.";return}
for(var f of files){var row=document.createElement("div");P.appendChild(row);
if(ok.indexOf(f.type)<0){row.textContent=f.name+": unsupported file. Use JPG, PNG, WebP, MP4 or WebM.";continue}
if(f.size>20971520){row.textContent=f.name+": larger than 20 MB. Compress it and try again.";continue}
row.textContent=f.name+": uploading...";
try{var r=await AS.upload(f);await DB.collection("gallery").doc("g"+Date.now()+Math.floor(Math.random()*999)).set({aid:r.id,kind:f.type.indexOf("video")==0?"video":"image",title:$("gt").value.trim(),cat:$("gc").value,ts:Date.now()});row.textContent=f.name+": uploaded"}
catch(e){row.textContent=f.name+": failed ("+((e&&e.code)||"error")+")"}}
$("gt").value=""}
$("drop").onclick=function(){$("fi").click()};
$("drop").onkeydown=function(e){if(e.key=="Enter"||e.key==" "){e.preventDefault();$("fi").click()}};
$("fi").onchange=function(){var a=Array.from(this.files);this.value="";gup(a)};
["dragover","dragenter"].forEach(function(n){$("drop").addEventListener(n,function(e){e.preventDefault();this.classList.add("d")})});
["dragleave","drop"].forEach(function(n){$("drop").addEventListener(n,function(e){e.preventDefault();this.classList.remove("d");if(n=="drop")gup(Array.from(e.dataTransfer.files))})});
function lbc(){$("lb").hidden=true;$("lc").innerHTML=""}
$("lx").onclick=lbc;$("lb").onclick=function(e){if(e.target==this)lbc()};
addEventListener("keydown",function(e){if(e.key=="Escape")lbc()});
$("gg").onclick=function(e){var d=e.target.closest(".del"),f=e.target.closest(".gi");if(!f)return;var g=GR.filter(function(x){return x.id==f.dataset.k})[0];if(!g)return;
if(d){if(!d.dataset.s){d.dataset.s=1;d.textContent="Delete?";d.style.padding="0 12px";setTimeout(function(){d.dataset.s="";d.textContent="\u00d7";d.style.padding=""},3000);return}
DB.collection("gallery").doc(g.id).delete().then(function(){return AS.delete(g.aid)}).catch(function(){});return}
var u="/_blob/"+g.aid;$("lc").innerHTML=g.kind=="video"?'<video src="'+u+'" controls autoplay playsinline></video>':'<img src="'+u+'" alt="">';$("lb").hidden=false};
(async function(){gdraw();try{AS=await claude.use("assets")}catch(e){}try{DB=await claude.use("db")}catch(e){}
applyRole();
if(DB)DB.collection("config").doc("site").onSnapshot(function(s){if(s.exists)SEED=true;draw()},function(){});
if(DB)DB.collection("properties").onSnapshot(function(s){P=s.docs.map(function(d){var v=d.data();v.id=d.id;return v}).filter(function(v){return !v.deleted}).sort(function(a,b){return(b.ts||0)-(a.ts||0)});draw();adraw()},function(){});
if(DB)DB.collection("gallery").onSnapshot(function(s){GR=s.docs.map(function(d){var v=d.data();v.id=d.id;return v}).sort(function(a,b){return(b.ts||0)-(a.ts||0)});gdraw()},function(){});else gdraw()})();
/* manage properties */
var P=[],SEED=false,DX=null,ED=null,M=[],PI=0,PM=0,OK=["image/jpeg","image/png","image/webp","image/gif","video/mp4","video/webm"];
function PL(){return P&&P.length?P:(SEED?[]:D)}
function seed(){if(!SEED&&DB){SEED=true;DB.collection("config").doc("site").set({seeded:true}).catch(function(){})}}
function loc(d){var a=String(d.a||"");return esc(a.indexOf(",")<0?a+", Lahore":a)}
function thumb(m,c){return m?(m.k=="video"?'<video '+(c||"")+' src="/_blob/'+m.a+'#t=0.1" preload="metadata" muted playsinline></video>':'<img '+(c||"")+' src="/_blob/'+m.a+'" alt="" loading="lazy">'):""}
function draw(){var L=PL(),cs=["All"].concat(Array.from(new Set(L.map(function(d){return d.c}))));if(cs.indexOf(cat)<0)cat="All";
$("tabs").innerHTML=cs.map(function(c){return'<button class="tab" data-c="'+esc(c)+'" aria-pressed="'+(c==cat)+'">'+(c=="All"?"All":esc(c)+"s")+'</button>'}).join("");
$("grid").innerHTML=L.map(function(d,i){return[d,i]}).filter(function(x){return cat=="All"||x[0].c==cat}).map(function(x,j){var d=x[0],i=x[1],m=(d.m||[])[0],n=(d.m||[]).length,sp=(!m&&d.img)?'<img class="ph" src="'+d.img+'" alt="'+esc(d.t)+'" loading="lazy" onerror="this.remove()">':'';
return'<article class="card" style="animation:rise .6s '+j*.08+'s both;cursor:pointer" data-i="'+i+'"><div class="pic'+((m||d.img)?' has':'')+'" style="background:linear-gradient(135deg,'+PAL[i%4]+')">'+(sp||thumb(m,'class="ph"'))+'<span class="tag">'+esc(d.f)+'</span>'+(n>1?'<span class="tag n">'+n+' media</span>':'')+'</div><div class="cb"><div class="pr">'+esc(d.p)+'</div><h3>'+esc(d.t)+'</h3><div class="lc">'+loc(d)+'</div>'+(d.d?'<p class="ds">'+esc(d.d)+'</p>':'')+'<div class="mt"><span>'+esc(d.z)+'</span>'+(d.b?'<span>'+d.b+' beds</span>':'<span>'+esc(d.c)+'</span>')+'</div><a class="inq" target="_blank" rel="noopener" href="https://wa.me/923234083930?text='+encodeURIComponent("Salam, I am interested in: "+d.t+", "+d.a)+'">Enquire now</a></div></article>'}).join("")||'<p style="color:var(--muted);grid-column:1/-1">No properties listed yet. Please check back soon.</p>'}
$("tabs").onclick=function(e){var b=e.target.closest(".tab");if(b){cat=b.dataset.c;draw()}};
$("grid").onclick=function(e){if(e.target.closest(".inq"))return;var c=e.target.closest(".card");if(c){PI=+c.dataset.i;PM=0;pdraw();$("pm").hidden=false}};
function pdraw(){var d=PL()[PI];if(!d)return;var m=d.m||[],cur=m[PM],h='<div class="pmm">'+(cur?(cur.k=="video"?'<video src="/_blob/'+cur.a+'" controls playsinline></video>':'<img src="/_blob/'+cur.a+'" alt="">'):(d.img?'<img src="'+d.img+'" alt="">':'<div class="pmg" style="background:linear-gradient(135deg,'+PAL[PI%4]+')"></div>'))+(m.length>1?'<button class="pv" data-s="-1" aria-label="Previous">&#8249;</button><button class="pv nx" data-s="1" aria-label="Next">&#8250;</button>':'')+'</div>';
if(m.length>1)h+='<div class="pth">'+m.map(function(x,k){return'<button data-k="'+k+'" aria-current="'+(k==PM)+'">'+thumb(x)+'</button>'}).join("")+'</div>';
h+='<div class="pmi"><div class="pr">'+esc(d.p)+'</div><h3>'+esc(d.t)+'</h3><div class="lc">'+loc(d)+'</div><div class="mt" style="margin:14px 0"><span>'+esc(d.z)+'</span>'+(d.b?'<span>'+d.b+' beds</span>':'<span>'+esc(d.c)+'</span>')+'<span>'+esc(d.f)+'</span></div>'+(d.d?'<p style="white-space:pre-line;margin:0 0 16px">'+esc(d.d)+'</p>':'')+'<a class="btn" target="_blank" rel="noopener" href="https://wa.me/923234083930?text='+encodeURIComponent("Salam, I am interested in: "+d.t+", "+d.a)+'">Enquire Now</a></div>';
$("pmc").innerHTML=h}
function pclose(){$("pm").hidden=true;$("pmc").innerHTML=""}
$("px").onclick=pclose;$("pm").onclick=function(e){if(e.target==this)pclose()};
addEventListener("keydown",function(e){if(e.key=="Escape")pclose()});
$("pmc").onclick=function(e){var v=e.target.closest(".pv"),t=e.target.closest(".pth button"),n=((PL()[PI]||{}).m||[]).length;if(v){PM=(PM+ +v.dataset.s+n)%n;pdraw()}else if(t){PM=+t.dataset.k;pdraw()}};
/* admin */
function adraw(){if($("ad").hidden)return;
if(!AS||!DB){$("adf").hidden=true;$("adl").hidden=false;$("adl").innerHTML='<p><b>Editing is not available in this view.</b></p><p style="color:var(--muted)">Managing properties works only for the account that owns this page. Open the published link while signed in to claude.ai with that account, allow the permission prompt if it appears, then refresh the page with Ctrl+F5. If you are seeing this inside a small preview pane, open the page in its own browser tab.</p>';return}
if(ED===null){$("adf").hidden=true;$("adl").hidden=false;
$("adl").innerHTML=P.length?P.map(function(d){var m=(d.m||[])[0];return'<div class="arow"><div class="at">'+thumb(m)+'</div><div class="ai"><b>'+esc(d.t)+'</b><span>'+esc(d.p)+' - '+esc(d.f)+' - '+(d.m||[]).length+' media</span></div>'+(d.id==DX?'<span style="font-size:13px;color:#C0392B;font-weight:600">Delete this property?</span><button class="sm dl" data-y="'+d.id+'">Yes, delete</button><button class="sm" data-n="1">Cancel</button>':'<button class="sm" data-e="'+d.id+'">Edit</button><button class="sm dl" data-x="'+d.id+'">Delete</button>')+'</div>'}).join(""):'<p style="color:var(--muted)">No saved properties yet. The cards on the website right now are samples. Import them to edit, or add your own.</p><button class="btn" id="imp" type="button">Import sample properties</button>'}
else{$("adl").hidden=true;$("adf").hidden=false;emdraw()}}
function emdraw(){$("emg").innerHTML='<button type="button" class="mtl" id="emu">+ Upload<br>new</button>'+GR.map(function(g){var s=M.some(function(x){return x.a==g.aid});return'<button type="button" class="mtl'+(s?' on':'')+'" data-a="'+g.aid+'" data-k="'+g.kind+'" aria-pressed="'+s+'">'+thumb({a:g.aid,k:g.kind})+(g.kind=="video"?'<i>Video</i>':'')+'</button>'}).join("");$("emn").textContent="("+M.length+" selected)"}
function aed(id){var d=id?P.filter(function(x){return x.id==id})[0]:null;ED=id||"";
$("pt").value=d?d.t:"";$("pa").value=d?d.a:"";$("pc").value=d?d.c:"House";$("pf").value=d?d.f:"For sale";$("pp").value=d?d.p:"";$("pz").value=d?d.z:"";$("pb").value=d?d.b:0;$("pd").value=d?d.d||"":"";$("aes").textContent="";
M=d?(d.m||[]).slice():[];$("adt").textContent=d?"Edit property":"Add property";adraw()}
function alist(){ED=null;$("adt").textContent="Manage properties";adraw()}
$("adm").onclick=function(e){e.preventDefault();if(!ISA())return;$("ad").hidden=false;alist()};
$("adx").onclick=function(){$("ad").hidden=true;ED=null};
$("adn").onclick=function(){aed("")};$("adc").onclick=alist;
$("adl").onclick=function(e){var b=e.target.closest("button");if(!b)return;
if(b.id=="imp"){if(DB){seed();D.forEach(function(d,i){DB.collection("properties").doc("s"+i).set({t:d.t,a:d.a+", Lahore",c:d.c,f:d.f,p:d.p,z:d.z,b:d.b,d:"",m:[],ts:Date.now()+D.length-i})})}return}
if(b.dataset.e){aed(b.dataset.e);return}
if(b.dataset.x){DX=b.dataset.x;adraw();return}
if(b.dataset.n){DX=null;adraw();return}
if(b.dataset.y)pdel(b.dataset.y)};
async function pdel(id){var ref=DB.collection("properties").doc(id),old=P.slice();
seed();P=P.filter(function(x){return x.id!=id});DX=null;draw();adraw();tst("Deleting...");
try{await ref.set({deleted:true,ts:Date.now()});tst("Property deleted.");try{await ref.delete()}catch(e2){}}
catch(er){P=old;draw();adraw();tst("Could not delete ("+((er&&er.code)||"error")+"). Make sure you are signed in to the owner account and refresh with Ctrl+F5.")}}
$("emg").onclick=function(e){if(e.target.closest("#emu")){$("efi").click();return}var t=e.target.closest(".mtl[data-a]");if(!t)return;var i=M.findIndex(function(x){return x.a==t.dataset.a});if(i<0)M.push({a:t.dataset.a,k:t.dataset.k});else M.splice(i,1);emdraw()};
async function eup(files){var S=$("aes");if(!DB||!AS){S.textContent="Upload is not available. Reload the page.";return}
for(var f of files){if(OK.indexOf(f.type)<0||f.size>20971520){S.textContent=f.name+": skipped. Use JPG, PNG, WebP, MP4 or WebM under 20 MB.";continue}
S.textContent="Uploading "+f.name+"...";
try{var r=await AS.upload(f),k=f.type.indexOf("video")==0?"video":"image";await DB.collection("gallery").doc("g"+Date.now()+Math.floor(Math.random()*999)).set({aid:r.id,kind:k,title:$("pt").value.trim(),cat:$("pc").value,ts:Date.now()});M.push({a:r.id,k:k});emdraw();S.textContent=""}
catch(er){S.textContent=f.name+": failed ("+((er&&er.code)||"error")+")"}}}
$("efi").onchange=function(){var a=Array.from(this.files);this.value="";eup(a)};
$("adf").onsubmit=async function(e){e.preventDefault();if(!DB)return;var old=ED?P.filter(function(x){return x.id==ED})[0]:null,id=ED||"p"+Date.now();
var o={t:$("pt").value.trim(),a:$("pa").value.trim(),c:$("pc").value,f:$("pf").value,p:$("pp").value.trim(),z:$("pz").value.trim(),b:+$("pb").value||0,d:$("pd").value.trim(),m:M,ts:(old&&old.ts)||Date.now()};
try{await DB.collection("properties").doc(id).set(o);seed();alist()}catch(er){$("aes").textContent="Could not save ("+((er&&er.code)||"error")+"). Try again."}};
var _g=gdraw;gdraw=function(){_g();adraw()};
var TH=document.documentElement.getAttribute("data-theme")||"light";
function setTh(t){TH=t;document.documentElement.setAttribute("data-theme",t);$("th").textContent=t=="dark"?"\u2600":"\u263E";try{localStorage.setItem("ae-theme",t)}catch(e){}}
$("th").onclick=function(){setTh(TH=="dark"?"light":"dark")};setTh(TH);
/* login and roles */
var SS=null,AC=null,rmode=false,tt2;try{SS=JSON.parse(localStorage.getItem("ae-sess")||"null")}catch(e){}
function ISA(){return !!SS&&SS.r=="admin"}
function tst(m){var t=$("tst");t.textContent=m;t.classList.add("o");clearTimeout(tt2);tt2=setTimeout(function(){t.classList.remove("o")},5000)}
function applyRole(){$("up").hidden=!(ISA()&&AS);$("adb").textContent=ISA()?"Admin \u25BE":"Admin";if(!ISA()){$("ad").hidden=true;$("adm2").hidden=true}gdraw()}
async function hs(pw,salt){var k=await crypto.subtle.importKey("raw",new TextEncoder().encode(pw),"PBKDF2",false,["deriveBits"]);var b=await crypto.subtle.deriveBits({name:"PBKDF2",hash:"SHA-256",salt:salt,iterations:100000},k,256);return Array.from(new Uint8Array(b)).map(function(x){return x.toString(16).padStart(2,"0")}).join("")}
function rs(){return Array.from(crypto.getRandomValues(new Uint8Array(16))).map(function(x){return x.toString(16).padStart(2,"0")}).join("")}
function sb(h){return new Uint8Array(h.match(/../g).map(function(x){return parseInt(x,16)}))}
function lui(){var f=!AC||rmode;$("lacw").hidden=!f;$("lapc").required=f;$("lapw").autocomplete=f?"new-password":"current-password";
$("lal").textContent=!AC?"Choose admin password":rmode?"New admin password":"Admin password";
$("lab").textContent=!AC?"Create admin password":rmode?"Reset password":"Sign in as admin";
$("las").textContent=!AC?"First-time setup: choose an admin password. Only the page owner can create it.":rmode?"Reset: only the page owner can do this. Choose a new admin password.":"Full access: manage properties, photos and videos.";
$("lfg").hidden=!AC;$("lfg").textContent=rmode?"Back to sign in":"Forgot password?"}
async function acfg(){AC=null;if(DB){try{var s=await DB.collection("config").doc("admin").get();AC=s.exists?s.data():null}catch(e){}}lui()}
function lopen(){rmode=false;$("lam").textContent="";$("lgn").hidden=false;acfg()}
function login(){SS={r:"admin",n:"Admin",id:"admin"};try{localStorage.setItem("ae-sess",JSON.stringify(SS))}catch(e){}$("lgn").hidden=true;$("laf").reset();rmode=false;applyRole();tst(AS?"Welcome, admin. You have full access.":"Logged in as admin. To save changes, open this page from the owner account.")}
$("lg").onclick=function(){if(SS){SS=null;try{localStorage.removeItem("ae-sess")}catch(e){}applyRole();tst("You are logged out.")}else lopen()};
$("lgx").onclick=function(){$("lgn").hidden=true};
addEventListener("keydown",function(e){if(e.key=="Escape"){$("lgn").hidden=true;$("adm2").hidden=true}});
$("lfg").onclick=function(){rmode=!rmode;$("lam").textContent="";lui()};
$("adb").onclick=function(){if(!ISA()){lopen();return}var m=$("adm2");m.hidden=!m.hidden;this.setAttribute("aria-expanded",!m.hidden)};
$("mmg").onclick=function(){$("adm2").hidden=true;$("adm").click()};
$("mlo").onclick=function(){$("adm2").hidden=true;$("lg").click()};
document.addEventListener("click",function(e){if(!e.target.closest(".admw"))$("adm2").hidden=true});
$("laf").onsubmit=async function(e){e.preventDefault();var M=$("lam");M.textContent="";
if(!DB){M.textContent="Login service is not available. Reload the page and try again.";return}
var pw=$("lapw").value;$("lab").disabled=true;
try{await acfg();
if(!AC||rmode){if(!AS){M.textContent=(rmode?"Resetting the password":"Creating the admin password")+" is only possible from the page owner's claude.ai account. Open this page in your own browser tab while signed in to claude.ai.";return}
if(pw!=$("lapc").value){M.textContent="Passwords do not match.";return}
var sl=rs();await DB.collection("config").doc("admin").set({s:sl,h:await hs(pw,sb(sl)),ts:Date.now()});login()}
else{if(await hs(pw,sb(AC.s))!=AC.h){M.textContent="Wrong admin password.";return}login()}}
catch(er){M.textContent="Something went wrong ("+((er&&er.code)||"error")+"). Try again."}finally{$("lab").disabled=false}};
applyRole();
/* hero quick search */
$("qs").onsubmit=function(e){e.preventDefault();cat=$("qc").value;draw();$("properties").scrollIntoView({behavior:RM?"auto":"smooth"})};
