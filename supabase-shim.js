(function(){
var sb=supabase.createClient("https://glurrlyumcovgtkmwucu.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsdXJybHl1bWNvdmd0a213dWN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIwNTE1OTgsImV4cCI6MjEwNzYyNzU5OH0.2jemnThL5p6FN4YzDb04_ErPRBxTQmcGckMRYH4QZOk");
window.SB=sb;window.ADMIN_UID="594e74fd-d685-4995-b326-c41daf6274b3";
var L={};
function refresh(c){(L[c]||[]).forEach(function(f){f()})}
function ref(c,id){return{
 get:async function(){var r=await sb.from("docs").select("data").eq("collection",c).eq("id",id).maybeSingle();if(r.error)throw r.error;return{exists:!!r.data,data:function(){return r.data.data}}},
 set:async function(o){var r=await sb.from("docs").upsert({collection:c,id:id,data:o});if(r.error)throw r.error;refresh(c)},
 delete:async function(){var r=await sb.from("docs").delete().eq("collection",c).eq("id",id);if(r.error)throw r.error;refresh(c)},
 onSnapshot:function(cb,err){this.get().then(cb,err)}}}
function coll(c){return{
 doc:function(id){return ref(c,id)},
 onSnapshot:function(cb,err){
  async function load(){var r=await sb.from("docs").select("id,data").eq("collection",c);
   if(r.error){if(err)err(r.error);return}
   cb({docs:r.data.map(function(x){return{id:x.id,data:function(){return x.data}}})})}
  (L[c]=L[c]||[]).push(load);load()}}}
window.SBDB={collection:coll};
window.SBAS={
 upload:async function(f){var e=(f.name.split(".").pop()||"bin").toLowerCase().replace(/[^a-z0-9]/g,"");
  var p=Date.now()+"-"+Math.floor(Math.random()*99999)+"."+e;
  var r=await sb.storage.from("media").upload(p,f,{contentType:f.type});if(r.error)throw r.error;return{id:p}},
 delete:async function(id){await sb.storage.from("media").remove([id])}};
})();
