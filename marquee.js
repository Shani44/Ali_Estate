/* marquee for the property cards (display only; does not touch the site logic) */
(function(){var g=document.getElementById("grid"),RMQ=matchMedia("(prefers-reduced-motion:reduce)"),tm,mo;
function build(){if(mo)mo.disconnect();
[].slice.call(g.querySelectorAll("[data-cl]")).forEach(function(e){e.remove()});
g.classList.remove("mqt");g.style.removeProperty("--mqw");g.style.removeProperty("--mqd");
var o=[].slice.call(g.querySelectorAll(".card"));
if(o.length&&!RMQ.matches){g.classList.add("mqt");
var gap=24,cw=o[0].getBoundingClientRect().width||340,sw=o.length*(cw+gap),reps=Math.max(1,Math.ceil(innerWidth/sw)),i,r;
function cp(){o.forEach(function(c){var k=c.cloneNode(true);k.dataset.cl="1";k.setAttribute("aria-hidden","true");[].slice.call(k.querySelectorAll("a")).forEach(function(a){a.tabIndex=-1});g.appendChild(k)})}
for(r=1;r<reps;r++)cp();for(r=0;r<reps;r++)cp();
g.style.setProperty("--mqw",(reps*sw)+"px");g.style.setProperty("--mqd",Math.max(20,reps*sw/60)+"s")}
if(mo)mo.observe(g,{childList:true})}
function sched(){clearTimeout(tm);tm=setTimeout(build,60)}
mo=new MutationObserver(sched);mo.observe(g,{childList:true});
addEventListener("resize",sched);sched()})();