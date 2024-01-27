import{N as P,u as h,O as $,P as b,Q as C,J as E}from"./entry.TJ6R79jw.js";import{h as l}from"./index.QHQq_OEs.js";import{u as w}from"./preview.3400JKZr.js";const d=(t,r)=>r.split(".").reduce((n,i)=>n&&n[i],t),f=(t,r)=>Object.keys(t).filter(r).reduce((n,i)=>Object.assign(n,{[i]:t[i]}),{}),B=t=>r=>t&&t.length?f(r,n=>!t.includes(n)):r,j=t=>r=>Array.isArray(r)?r.map(n=>t(n)):t(r),m=t=>{const r=[],n=[];for(const i of t)["$","_"].includes(i)?r.push(i):n.push(i);return{prefixes:r,properties:n}},q=(t=[])=>r=>{if(t.length===0||!r)return r;const{prefixes:n,properties:i}=m(t);return f(r,o=>!i.includes(o)&&!n.includes(o[0]))},Q=(t=[])=>r=>{if(t.length===0||!r)return r;const{prefixes:n,properties:i}=m(t);return f(r,o=>i.includes(o)||n.includes(o[0]))},I=(t,r)=>{const n=new Intl.Collator(r.$locale,{numeric:r.$numeric,caseFirst:r.$caseFirst,sensitivity:r.$sensitivity}),i=Object.keys(r).filter(o=>!o.startsWith("$"));for(const o of i)t=t.sort((a,e)=>{const s=[d(a,o),d(e,o)].map(c=>{if(c!==null)return c instanceof Date?c.toISOString():c});return r[o]===-1&&s.reverse(),n.compare(s[0],s[1])});return t},F=(t,r="Expected an array")=>{if(!Array.isArray(t))throw new TypeError(r)},u=t=>Array.isArray(t)?t:[void 0,null].includes(t)?[]:[t],S=["sort","where","only","without"];function x(t,r={}){const n={};for(const e of Object.keys(r.initialParams||{}))n[e]=S.includes(e)?u(r.initialParams[e]):r.initialParams[e];const i=(e,s=c=>c)=>(...c)=>(n[e]=s(...c),a),o=e=>{var s;return r.legacy?e!=null&&e.surround?e.surround:e&&(e!=null&&e.dirConfig&&(e.result={_path:(s=e.dirConfig)==null?void 0:s._path,...e.result,_dir:e.dirConfig}),e!=null&&e._path||Array.isArray(e)||!Object.prototype.hasOwnProperty.call(e,"result")?e:e==null?void 0:e.result):e},a={params:()=>({...n,...n.where?{where:[...u(n.where)]}:{},...n.sort?{sort:[...u(n.sort)]}:{}}),only:i("only",u),without:i("without",u),where:i("where",e=>[...u(n.where),...u(e)]),sort:i("sort",e=>[...u(n.sort),...u(e)]),limit:i("limit",e=>parseInt(String(e),10)),skip:i("skip",e=>parseInt(String(e),10)),find:()=>t(a).then(o),findOne:()=>t(i("first")(!0)).then(o),count:()=>t(i("count")(!0)).then(o),locale:e=>a.where({_locale:e}),withSurround:i("surround",(e,s)=>({query:e,...s})),withDirConfig:()=>i("dirConfig")(!0)};return r.legacy&&(a.findSurround=(e,s)=>a.withSurround(e,s).find().then(o)),a}function g(t){return JSON.stringify(t,O)}function O(t,r){return r instanceof RegExp?`--REGEX ${r.toString()}`:r}const A=t=>{let r=g(t);return r=typeof Buffer<"u"?Buffer.from(r).toString("base64"):btoa(r),r=r.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(r.match(/.{1,100}/g)||[]).join("/")},y=t=>P(t,h().public.content.api.baseURL),N=()=>{throw console.warn("useContent is only accessible when you are using `documentDriven` mode."),console.warn("Learn more by visiting: https://content.nuxt.com/document-driven"),new Error("useContent is only accessible when you are using `documentDriven` mode.")},D=()=>{const{experimental:t}=h().public.content;return t.clientDB?!0:w().isEnabled()},v=()=>async t=>{const{content:r}=h().public,n=t.params(),i=r.experimental.stripQueryParameters?y(`/query/${`${l(n)}.${r.integrity}`}/${A(n)}.json`):y(`/query/${l(n)}.${r.integrity}.json`);if(D())return(await E(()=>import("./client-db.kcD--f5_.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(e=>e.useContentDatabase())).fetch(t);const o=await $fetch(i,{method:"GET",responseType:"json",params:r.experimental.stripQueryParameters?void 0:{_params:g(n),previewToken:w().getPreviewToken()}});if(typeof o=="string"&&o.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return o};function U(t,...r){const{content:n}=h().public,i=x(v(),{initialParams:typeof t!="string"?t:{},legacy:!0});let o;typeof t=="string"&&(o=$(b(t,...r)));const a=i.params;return i.params=()=>{var s,c,p;const e=a();return o&&(e.where=e.where||[],e.first&&(e.where||[]).length===0?e.where.push({_path:C(o)}):e.where.push({_path:new RegExp(`^${o.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(s=e.sort)!=null&&s.length||(e.sort=[{_file:1,$numeric:!0}]),n.locales.length&&((p=(c=e.where)==null?void 0:c.find(_=>_._locale))!=null&&p._locale||(e.where=e.where||[],e.where.push({_locale:n.defaultLocale}))),e},i}export{F as a,u as b,I as c,j as d,A as e,q as f,d as g,Q as h,x as i,g as j,B as o,U as q,D as s,N as u,y as w};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.kcD--f5_.js","./entry.TJ6R79jw.js","./index.1dSrIji7.js","./preview.3400JKZr.js","./index.QHQq_OEs.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
