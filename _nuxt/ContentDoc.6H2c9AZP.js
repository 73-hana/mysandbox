import{m as d,q as w,s as a,x as D,u as g,y as _,z as x,A as H,B as c}from"./entry.20mzl7jM.js";import{u as q}from"./vue.f36acd1f.VyUZayja.js";import S from"./ContentRenderer.LMxbmQDy.js";import b from"./ContentQuery.JOPM2Kb3.js";import"./ContentRendererMarkdown.vue.tGis89jR.js";import"./index.1dSrIji7.js";import"./preview.jhdoTmM0.js";import"./index.QHQq_OEs.js";import"./asyncData.IGueZMI2.js";import"./query.tXhZEEuO.js";const y=(p,s=a())=>{const e=d(p),m=g();w(()=>d(p),(n=e)=>{if(!s.path||!n)return;const t=Object.assign({},(n==null?void 0:n.head)||{});t.meta=[...t.meta||[]],t.link=[...t.link||[]];const r=t.title||(n==null?void 0:n.title);r&&(t.title=r),m.public.content.host;const u=(t==null?void 0:t.description)||(n==null?void 0:n.description);u&&t.meta.filter(l=>l.name==="description").length===0&&t.meta.push({name:"description",content:u}),t!=null&&t.image||(n==null||n.image),D(()=>q(t))},{immediate:!0})},j=_({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(p){const{contentHead:s}=g().public.content,e=x(),{tag:m,excerpt:f,path:n,query:t,head:r}=p,u=r===void 0?s:r,l={...t||{},path:n||(t==null?void 0:t.path)||H(a().path),find:"one"},C=(o,i)=>c("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:o,data:i},null,2));return c(b,l,{default:e!=null&&e.default?({data:o,refresh:i,isPartial:v})=>{var h;return u&&y(o),(h=e.default)==null?void 0:h.call(e,{doc:o,refresh:i,isPartial:v,excerpt:f,...this.$attrs})}:({data:o})=>(u&&y(o),c(S,{value:o,excerpt:f,tag:m,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):C("default",o)})),empty:o=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,o))||c("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":o=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,o))||c("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),k=j,J=k;export{J as default};
