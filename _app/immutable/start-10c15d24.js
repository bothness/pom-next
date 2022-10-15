import{S as We,i as Ye,s as Xe,a as Ze,e as U,c as Qe,b as J,g as X,t as D,d as Z,f as V,h as B,j as xe,o as ve,k as et,l as tt,m as nt,n as ye,p as M,q as rt,r as at,u as ot,v as G,w as re,x as K,y as z,z as Ce}from"./chunks/index-bf619a6a.js";import{g as Be,f as Fe,s as Y,a as Ee,i as st}from"./chunks/singletons-4d828cdd.js";import{R as Je,H as ke}from"./chunks/control-03134885.js";import{s as it}from"./chunks/paths-6cd3a76e.js";function lt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ct(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ft=["href","pathname","search","searchParams","toString","toJSON"];function ut(r,e){const n=new URL(r);for(const o of ft){let a=n[o];Object.defineProperty(n,o,{get(){return e(),a},enumerable:!0,configurable:!0})}return n[Symbol.for("nodejs.util.inspect.custom")]=(o,a,l)=>l(r,a),pt(n),n}function pt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function dt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let o=n.length;for(;o;)e=e*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ue=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;fe.delete(o)}return ue(r,e)};const fe=new Map;function ht(r,e,n){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(n==null?void 0:n.body)&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&(a+=`[data-hash="${dt(n.body)}"]`);const l=document.querySelector(a);if(l!=null&&l.textContent){const{body:t,...i}=JSON.parse(l.textContent),f=l.getAttribute("data-ttl");return f&&fe.set(e,{body:t,init:i,ttl:1e3*Number(f)}),Promise.resolve(new Response(t,i))}return ue(r,n)}function mt(r,e){const n=fe.get(r);if(n){if(performance.now()<n.ttl)return new Response(n.body,n.init);fe.delete(r)}return ue(r,e)}const _t=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function gt(r){const e=[],n=[];let o=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(wt).map((l,t,i)=>{const f=decodeURIComponent(l),d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(f);if(d)return e.push(d[1]),n.push(d[2]),"(?:/(.*))?";const g=t===i.length-1;return f&&"/"+f.split(/\[(.+?)\]/).map((y,T)=>{if(T%2){const E=_t.exec(y);if(!E)throw new Error(`Invalid param: ${y}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,C,H,q]=E;return e.push(H),n.push(q),C?"(.*?)":"([^/]+?)"}return g&&y.includes(".")&&(o=!1),y.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${o?"/?":""}$`),names:e,types:n}}function wt(r){return!/^\([^)]+\)$/.test(r)}function yt(r,e,n,o){const a={};for(let l=0;l<e.length;l+=1){const t=e[l],i=n[l],f=r[l+1]||"";if(i){const d=o[i];if(!d)throw new Error(`Missing "${i}" param matcher`);if(!d(f))return}a[t]=f}return a}function bt(r,e,n,o){const a=new Set(e);return Object.entries(n).map(([i,[f,d,g]])=>{const{pattern:y,names:T,types:E}=gt(i),C={id:i,exec:H=>{const q=y.exec(H);if(q)return yt(q,T,E,o)},errors:[1,...g||[]].map(H=>r[H]),layouts:[0,...d||[]].map(t),leaf:l(f)};return C.errors.length=C.layouts.length=Math.max(C.errors.length,C.layouts.length),C});function l(i){const f=i<0;return f&&(i=~i),[f,r[i]]}function t(i){return i===void 0?i:[a.has(i),r[i]]}}function vt(r){let e,n,o;var a=r[0][0];function l(t){return{props:{data:t[2],form:t[1]}}}return a&&(e=new a(l(r))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&re(e.$$.fragment,t),n=U()},m(t,i){e&&K(e,t,i),J(t,n,i),o=!0},p(t,i){const f={};if(i&4&&(f.data=t[2]),i&2&&(f.form=t[1]),a!==(a=t[0][0])){if(e){X();const d=e;D(d.$$.fragment,1,0,()=>{z(d,1)}),Z()}a?(e=new a(l(t)),G(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&z(e,t)}}}function Et(r){let e,n,o;var a=r[0][0];function l(t){return{props:{data:t[2],$$slots:{default:[Ot]},$$scope:{ctx:t}}}}return a&&(e=new a(l(r))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&re(e.$$.fragment,t),n=U()},m(t,i){e&&K(e,t,i),J(t,n,i),o=!0},p(t,i){const f={};if(i&4&&(f.data=t[2]),i&1051&&(f.$$scope={dirty:i,ctx:t}),a!==(a=t[0][0])){if(e){X();const d=e;D(d.$$.fragment,1,0,()=>{z(d,1)}),Z()}a?(e=new a(l(t)),G(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&z(e,t)}}}function kt(r){let e,n,o;var a=r[0][1];function l(t){return{props:{data:t[3],form:t[1]}}}return a&&(e=new a(l(r))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&re(e.$$.fragment,t),n=U()},m(t,i){e&&K(e,t,i),J(t,n,i),o=!0},p(t,i){const f={};if(i&8&&(f.data=t[3]),i&2&&(f.form=t[1]),a!==(a=t[0][1])){if(e){X();const d=e;D(d.$$.fragment,1,0,()=>{z(d,1)}),Z()}a?(e=new a(l(t)),G(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&z(e,t)}}}function $t(r){let e,n,o;var a=r[0][1];function l(t){return{props:{data:t[3],$$slots:{default:[Rt]},$$scope:{ctx:t}}}}return a&&(e=new a(l(r))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&re(e.$$.fragment,t),n=U()},m(t,i){e&&K(e,t,i),J(t,n,i),o=!0},p(t,i){const f={};if(i&8&&(f.data=t[3]),i&1043&&(f.$$scope={dirty:i,ctx:t}),a!==(a=t[0][1])){if(e){X();const d=e;D(d.$$.fragment,1,0,()=>{z(d,1)}),Z()}a?(e=new a(l(t)),G(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&z(e,t)}}}function Rt(r){let e,n,o;var a=r[0][2];function l(t){return{props:{data:t[4],form:t[1]}}}return a&&(e=new a(l(r))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&re(e.$$.fragment,t),n=U()},m(t,i){e&&K(e,t,i),J(t,n,i),o=!0},p(t,i){const f={};if(i&16&&(f.data=t[4]),i&2&&(f.form=t[1]),a!==(a=t[0][2])){if(e){X();const d=e;D(d.$$.fragment,1,0,()=>{z(d,1)}),Z()}a?(e=new a(l(t)),G(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(f)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&z(e,t)}}}function Ot(r){let e,n,o,a;const l=[$t,kt],t=[];function i(f,d){return f[0][2]?0:1}return e=i(r),n=t[e]=l[e](r),{c(){n.c(),o=U()},l(f){n.l(f),o=U()},m(f,d){t[e].m(f,d),J(f,o,d),a=!0},p(f,d){let g=e;e=i(f),e===g?t[e].p(f,d):(X(),D(t[g],1,1,()=>{t[g]=null}),Z(),n=t[e],n?n.p(f,d):(n=t[e]=l[e](f),n.c()),V(n,1),n.m(o.parentNode,o))},i(f){a||(V(n),a=!0)},o(f){D(n),a=!1},d(f){t[e].d(f),f&&B(o)}}}function Ge(r){let e,n=r[6]&&Ke(r);return{c(){e=et("div"),n&&n.c(),this.h()},l(o){e=tt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=nt(e);n&&n.l(a),a.forEach(B),this.h()},h(){ye(e,"id","svelte-announcer"),ye(e,"aria-live","assertive"),ye(e,"aria-atomic","true"),M(e,"position","absolute"),M(e,"left","0"),M(e,"top","0"),M(e,"clip","rect(0 0 0 0)"),M(e,"clip-path","inset(50%)"),M(e,"overflow","hidden"),M(e,"white-space","nowrap"),M(e,"width","1px"),M(e,"height","1px")},m(o,a){J(o,e,a),n&&n.m(e,null)},p(o,a){o[6]?n?n.p(o,a):(n=Ke(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&B(e),n&&n.d()}}}function Ke(r){let e;return{c(){e=rt(r[7])},l(n){e=at(n,r[7])},m(n,o){J(n,e,o)},p(n,o){o&128&&ot(e,n[7])},d(n){n&&B(e)}}}function St(r){let e,n,o,a,l;const t=[Et,vt],i=[];function f(g,y){return g[0][1]?0:1}e=f(r),n=i[e]=t[e](r);let d=r[5]&&Ge(r);return{c(){n.c(),o=Ze(),d&&d.c(),a=U()},l(g){n.l(g),o=Qe(g),d&&d.l(g),a=U()},m(g,y){i[e].m(g,y),J(g,o,y),d&&d.m(g,y),J(g,a,y),l=!0},p(g,[y]){let T=e;e=f(g),e===T?i[e].p(g,y):(X(),D(i[T],1,1,()=>{i[T]=null}),Z(),n=i[e],n?n.p(g,y):(n=i[e]=t[e](g),n.c()),V(n,1),n.m(o.parentNode,o)),g[5]?d?d.p(g,y):(d=Ge(g),d.c(),d.m(a.parentNode,a)):d&&(d.d(1),d=null)},i(g){l||(V(n),l=!0)},o(g){D(n),l=!1},d(g){i[e].d(g),g&&B(o),d&&d.d(g),g&&B(a)}}}function Lt(r,e,n){let{stores:o}=e,{page:a}=e,{components:l}=e,{form:t}=e,{data_0:i=null}=e,{data_1:f=null}=e,{data_2:d=null}=e;xe(o.page.notify);let g=!1,y=!1,T=null;return ve(()=>{const E=o.page.subscribe(()=>{g&&(n(6,y=!0),n(7,T=document.title||"untitled page"))});return n(5,g=!0),E}),r.$$set=E=>{"stores"in E&&n(8,o=E.stores),"page"in E&&n(9,a=E.page),"components"in E&&n(0,l=E.components),"form"in E&&n(1,t=E.form),"data_0"in E&&n(2,i=E.data_0),"data_1"in E&&n(3,f=E.data_1),"data_2"in E&&n(4,d=E.data_2)},r.$$.update=()=>{r.$$.dirty&768&&o.page.set(a)},[l,t,i,f,d,g,y,T,o,a]}class It extends We{constructor(e){super(),Ye(this,e,Lt,St,Xe,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const At=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Pt=function(r,e){return new URL(r,e).href},ze={},F=function(e,n,o){return!n||n.length===0?e():Promise.all(n.map(a=>{if(a=Pt(a,o),a in ze)return;ze[a]=!0;const l=a.endsWith(".css"),t=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${t}`))return;const i=document.createElement("link");if(i.rel=l?"stylesheet":At,l||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),l)return new Promise((f,d)=>{i.addEventListener("load",f),i.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e())},jt={},pe=[()=>F(()=>import("./chunks/0-10dad42a.js"),["chunks/0-10dad42a.js","chunks/_layout-c35419e6.js","chunks/config-7499b82c.js","chunks/utils-b90f6efb.js","chunks/autoType-ca12e421.js","components/pages/_layout.svelte-8e67e485.js","assets/_layout-48e5782a.css","chunks/index-bf619a6a.js","chunks/singletons-4d828cdd.js","chunks/paths-6cd3a76e.js","chunks/stores-5f978162.js"],import.meta.url),()=>F(()=>import("./chunks/1-5654ec9c.js"),["chunks/1-5654ec9c.js","components/error.svelte-2b2663bd.js","chunks/index-bf619a6a.js","chunks/stores-5f978162.js","chunks/singletons-4d828cdd.js","chunks/paths-6cd3a76e.js"],import.meta.url),()=>F(()=>import("./chunks/2-c7a14406.js"),["chunks/2-c7a14406.js","components/pages/_lang_/(page)/_layout.svelte-e0156e3b.js","assets/_layout-3bfa24ec.css","chunks/index-bf619a6a.js","chunks/navigation-dec78bbe.js","chunks/singletons-4d828cdd.js","chunks/paths-6cd3a76e.js","chunks/Header-4b76c1bb.js","assets/Header-ead01993.css","chunks/Icon-5b089085.js","assets/Icon-2bb40ad1.css","chunks/Menu-5387c056.js","assets/Menu-ae2c72bb.css","chunks/stores-5f978162.js","chunks/config-7499b82c.js"],import.meta.url),()=>F(()=>import("./chunks/3-915d7c3b.js"),["chunks/3-915d7c3b.js","chunks/_layout-b653b2b8.js","components/pages/_lang_/maps/_...slug_/_layout.svelte-e6f05e46.js","assets/_layout-a1f3d880.css","chunks/index-bf619a6a.js","chunks/Header-4b76c1bb.js","assets/Header-ead01993.css","chunks/paths-6cd3a76e.js","chunks/Icon-5b089085.js","assets/Icon-2bb40ad1.css"],import.meta.url),()=>F(()=>import("./chunks/4-9820946b.js"),["chunks/4-9820946b.js","chunks/_page-ee630a95.js","chunks/index-de586565.js","chunks/control-03134885.js","chunks/paths-6cd3a76e.js"],import.meta.url),()=>F(()=>import("./chunks/5-fbd478c9.js"),["chunks/5-fbd478c9.js","chunks/_page-1f78425c.js","components/pages/_lang_/(page)/_page.svelte-669d8dd6.js","assets/_page-d54a0959.css","chunks/index-bf619a6a.js","chunks/navigation-dec78bbe.js","chunks/singletons-4d828cdd.js","chunks/paths-6cd3a76e.js","chunks/Select-91c5d9f4.js","assets/Select-d7b20449.css","chunks/Icon-5b089085.js","assets/Icon-2bb40ad1.css"],import.meta.url),()=>F(()=>import("./chunks/6-0c48738e.js"),["chunks/6-0c48738e.js","chunks/_page-d8da1244.js","chunks/config-7499b82c.js","components/pages/_lang_/(page)/_page_/_page.svelte-e859c7d3.js","chunks/index-bf619a6a.js"],import.meta.url),()=>F(()=>import("./chunks/7-b19bc6aa.js"),["chunks/7-b19bc6aa.js","chunks/_page-ade9e6c3.js","components/pages/_lang_/maps/_...slug_/_page.svelte-e0117869.js","assets/_page-fc487034.css","chunks/index-bf619a6a.js","chunks/paths-6cd3a76e.js","chunks/stores-5f978162.js","chunks/singletons-4d828cdd.js","chunks/navigation-dec78bbe.js","chunks/utils-b90f6efb.js","chunks/autoType-ca12e421.js","chunks/config-7499b82c.js","chunks/Menu-5387c056.js","assets/Menu-ae2c72bb.css","chunks/Icon-5b089085.js","assets/Icon-2bb40ad1.css","chunks/Select-91c5d9f4.js","assets/Select-d7b20449.css"],import.meta.url),()=>F(()=>import("./chunks/8-8659c7db.js"),["chunks/8-8659c7db.js","chunks/_page-f7ef8b0d.js","chunks/index-de586565.js","chunks/control-03134885.js","chunks/paths-6cd3a76e.js"],import.meta.url),()=>F(()=>import("./chunks/9-803f907a.js"),["chunks/9-803f907a.js","chunks/_page-d714b56e.js","chunks/index-de586565.js","chunks/control-03134885.js","chunks/paths-6cd3a76e.js","chunks/config-7499b82c.js","chunks/autoType-ca12e421.js"],import.meta.url)],Nt=[],Tt={"":[4],view:[8],"view/[slug]":[9],"[lang]/(page)":[5,[2]],"[lang]/maps/[...slug]":[7,[3]],"[lang]/(page)/[page]":[6,[2]]},Ut={handleError:({error:r})=>{console.error(r)}},Dt="/__data.json";async function Vt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([o,a])=>[o,await a])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const qt=-1,Ct=-2,Bt=-3,Ft=-4,Jt=-5,Gt=-6;function Kt(r){const e=JSON.parse(r);if(typeof e=="number")return a(e);const n=e,o=Array(n.length);function a(l){if(l===qt)return;if(l===Bt)return NaN;if(l===Ft)return 1/0;if(l===Jt)return-1/0;if(l===Gt)return-0;if(l in o)return o[l];const t=n[l];if(!t||typeof t!="object")o[l]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":o[l]=new Date(t[1]);break;case"Set":const f=new Set;o[l]=f;for(let y=1;y<t.length;y+=1)f.add(a(t[y]));break;case"Map":const d=new Map;o[l]=d;for(let y=1;y<t.length;y+=2)d.set(a(t[y]),a(t[y+1]));break;case"RegExp":o[l]=new RegExp(t[1],t[2]);break;case"Object":o[l]=Object(t[1]);break;case"BigInt":o[l]=BigInt(t[1]);break;case"null":const g=Object.create(null);o[l]=g;for(let y=1;y<t.length;y+=2)g[t[y]]=a(t[y+1]);break}else{const i=new Array(t.length);o[l]=i;for(let f=0;f<t.length;f+=1){const d=t[f];d!==Ct&&(i[f]=a(d))}}else{const i={};o[l]=i;for(const f in t){const d=t[f];i[f]=a(d)}}return o[l]}return a(0)}const Me="sveltekit:scroll",W="sveltekit:index",ie=bt(pe,Nt,Tt,jt),$e=pe[0],Re=pe[1];$e();Re();let ne={};try{ne=JSON.parse(sessionStorage[Me])}catch{}function be(r){ne[r]=Ee()}function zt({target:r,base:e,trailing_slash:n}){var De;const o=[];let a=null;const l={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},i=!1,f=!1,d=!0,g=!1,y=!1,T,E=(De=history.state)==null?void 0:De[W];E||(E=Date.now(),history.replaceState({...history.state,[W]:E},"",location.href));const C=ne[E];C&&(history.scrollRestoration="manual",scrollTo(C.x,C.y));let H=!1,q,Oe,ae;async function Se(){ae=ae||Promise.resolve(),await ae,ae=null;const s=new URL(location.href),p=_e(s,!0);a=null,await Ie(p,s,[])}async function de(s,{noscroll:p=!1,replaceState:h=!1,keepfocus:c=!1,state:u={}},m,_){return typeof s=="string"&&(s=new URL(s,Be(document))),ge({url:s,scroll:p?Ee():null,keepfocus:c,redirect_chain:m,details:{state:u,replaceState:h},nav_token:_,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Le(s){const p=_e(s,!1);if(!p)throw new Error("Attempted to prefetch a URL that does not belong to this app");return a={id:p.id,promise:je(p)},a.promise}async function Ie(s,p,h,c,u={},m){var $,k;Oe=u;let _=s&&await je(s);if(_||(_=await Ue(p,null,te(new Error(`Not found: ${p.pathname}`),{url:p,params:{},routeId:null}),404)),p=(s==null?void 0:s.url)||p,Oe!==u)return!1;if(_.type==="redirect")if(h.length>10||h.includes(p.pathname))_=await oe({status:500,error:te(new Error("Redirect loop"),{url:p,params:{},routeId:null}),url:p,routeId:null});else return de(new URL(_.location,p).href,{},[...h,p.pathname],u),!1;else((k=($=_.props)==null?void 0:$.page)==null?void 0:k.status)>=400&&await Y.updated.check()&&await se(p);if(o.length=0,y=!1,g=!0,c&&c.details){const{details:b}=c,v=b.replaceState?0:1;b.state[W]=E+=v,history[b.replaceState?"replaceState":"pushState"](b.state,"",p)}if(a=null,f){t=_.state,_.props.page&&(_.props.page.url=p);const b=ce();T.$set(_.props),b()}else Ae(_);if(c){const{scroll:b,keepfocus:v}=c;if(!v){const O=document.body,L=O.getAttribute("tabindex");O.tabIndex=-1,O.focus({preventScroll:!0}),setTimeout(()=>{var I;(I=getSelection())==null||I.removeAllRanges()}),L!==null?O.setAttribute("tabindex",L):O.removeAttribute("tabindex")}if(await Ce(),d){const O=p.hash&&document.getElementById(p.hash.slice(1));b?scrollTo(b.x,b.y):O?O.scrollIntoView():scrollTo(0,0)}}else await Ce();d=!0,_.props.page&&(q=_.props.page),m&&m(),g=!1}function Ae(s){var u,m;t=s.state;const p=document.querySelector("style[data-sveltekit]");p&&p.remove(),q=s.props.page;const h=ce();T=new It({target:r,props:{...s.props,stores:Y},hydrate:!0}),h();const c={from:null,to:le("to",{params:t.params,routeId:(m=(u=t.route)==null?void 0:u.id)!=null?m:null,url:new URL(location.href)}),type:"load"};l.after_navigate.forEach(_=>_(c)),f=!0}async function x({url:s,params:p,branch:h,status:c,error:u,route:m,form:_}){var L;const $=h.filter(Boolean),k={type:"loaded",state:{url:s,params:p,branch:h,error:u,route:m},props:{components:$.map(I=>I.node.component)}};_!==void 0&&(k.props.form=_);let b={},v=!q;for(let I=0;I<$.length;I+=1){const j=$[I];b={...b,...j.data},(v||!t.branch.some(N=>N===j))&&(k.props[`data_${I}`]=b,v=v||Object.keys((L=j.data)!=null?L:{}).length>0)}if(v||(v=Object.keys(q.data).length!==Object.keys(b).length),!t.url||s.href!==t.url.href||t.error!==u||_!==void 0||v){k.props.page={error:u,params:p,routeId:m&&m.id,status:c,url:s,form:_,data:v?b:q.data};const I=(j,N)=>{Object.defineProperty(k.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${N}`)}})};I("origin","origin"),I("path","pathname"),I("query","searchParams")}return k}async function he({loader:s,parent:p,url:h,params:c,routeId:u,server_data_node:m}){var b,v,O,L,I;let _=null;const $={dependencies:new Set,params:new Set,parent:!1,url:!1},k=await s();if((b=k.shared)!=null&&b.load){let j=function(...S){for(const w of S){const{href:R}=new URL(w,h);$.dependencies.add(R)}};const N={routeId:u,params:new Proxy(c,{get:(S,w)=>($.params.add(w),S[w])}),data:(v=m==null?void 0:m.data)!=null?v:null,url:ut(h,()=>{$.url=!0}),async fetch(S,w){let R;S instanceof Request?(R=S.url,w={body:S.method==="GET"||S.method==="HEAD"?void 0:await S.blob(),cache:S.cache,credentials:S.credentials,headers:S.headers,integrity:S.integrity,keepalive:S.keepalive,method:S.method,mode:S.mode,redirect:S.redirect,referrer:S.referrer,referrerPolicy:S.referrerPolicy,signal:S.signal,...w}):R=S;const P=new URL(R,h).href;return j(P),f?mt(P,w):ht(R,P,w)},setHeaders:()=>{},depends:j,parent(){return $.parent=!0,p()}};Object.defineProperties(N,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),_=(O=await k.shared.load.call(null,N))!=null?O:null,_=_?await Vt(_):null}return{node:k,loader:s,server:m,shared:(L=k.shared)!=null&&L.load?{type:"data",data:_,uses:$}:null,data:(I=_!=null?_:m==null?void 0:m.data)!=null?I:null}}function Pe(s,p,h,c){if(y)return!0;if(!h)return!1;if(h.parent&&p||h.url&&s)return!0;for(const u of h.params)if(c[u]!==t.params[u])return!0;for(const u of h.dependencies)if(o.some(m=>m(new URL(u))))return!0;return!1}function me(s,p){var h,c;return(s==null?void 0:s.type)==="data"?{type:"data",data:s.data,uses:{dependencies:new Set((h=s.uses.dependencies)!=null?h:[]),params:new Set((c=s.uses.params)!=null?c:[]),parent:!!s.uses.parent,url:!!s.uses.url}}:(s==null?void 0:s.type)==="skip"&&p!=null?p:null}async function je({id:s,invalidating:p,url:h,params:c,route:u}){var S;if((a==null?void 0:a.id)===s)return a.promise;const{errors:m,layouts:_,leaf:$}=u,k=[..._,$];m.forEach(w=>w==null?void 0:w().catch(()=>{})),k.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let b=null;const v=t.url?s!==t.url.pathname+t.url.search:!1,O=k.reduce((w,R,P)=>{var ee;const A=t.branch[P],Q=!!(R!=null&&R[0])&&((A==null?void 0:A.loader)!==R[1]||Pe(v,w.some(Boolean),(ee=A.server)==null?void 0:ee.uses,c));return w.push(Q),w},[]);if(O.some(Boolean)){try{b=await He(h,O)}catch(w){return oe({status:500,error:te(w,{url:h,params:c,routeId:u.id}),url:h,routeId:u.id})}if(b.type==="redirect")return b}const L=b==null?void 0:b.nodes;let I=!1;const j=k.map(async(w,R)=>{var ee;if(!w)return;const P=t.branch[R],A=L==null?void 0:L[R];if((!A||A.type==="skip")&&w[1]===(P==null?void 0:P.loader)&&!Pe(v,I,(ee=P.shared)==null?void 0:ee.uses,c))return P;if(I=!0,(A==null?void 0:A.type)==="error")throw A;return he({loader:w[1],url:h,params:c,routeId:u.id,parent:async()=>{var qe;const Ve={};for(let we=0;we<R;we+=1)Object.assign(Ve,(qe=await j[we])==null?void 0:qe.data);return Ve},server_data_node:me(A===void 0&&w[0]?{type:"skip"}:A!=null?A:null,P==null?void 0:P.server)})});for(const w of j)w.catch(()=>{});const N=[];for(let w=0;w<k.length;w+=1)if(k[w])try{N.push(await j[w])}catch(R){if(R instanceof Je)return{type:"redirect",location:R.location};let P=500,A;L!=null&&L.includes(R)?(P=(S=R.status)!=null?S:P,A=R.error):R instanceof ke?(P=R.status,A=R.body):A=te(R,{params:c,url:h,routeId:u.id});const Q=await Ne(w,N,m);return Q?await x({url:h,params:c,branch:N.slice(0,Q.idx).concat(Q.node),status:P,error:A,route:u}):await Ue(h,u.id,A,P)}else N.push(void 0);return await x({url:h,params:c,branch:N,status:200,error:null,route:u,form:p?void 0:null})}async function Ne(s,p,h){for(;s--;)if(h[s]){let c=s;for(;!p[c];)c-=1;try{return{idx:c+1,node:{node:await h[s](),loader:h[s],data:{},server:null,shared:null}}}catch{continue}}}async function oe({status:s,error:p,url:h,routeId:c}){var b;const u={},m=await $e();let _=null;if(m.server)try{const v=await He(h,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;_=(b=v.nodes[0])!=null?b:null}catch{(h.origin!==location.origin||h.pathname!==location.pathname||i)&&await se(h)}const $=await he({loader:$e,url:h,params:u,routeId:c,parent:()=>Promise.resolve({}),server_data_node:me(_)}),k={node:await Re(),loader:Re,shared:null,server:null,data:null};return await x({url:h,params:u,branch:[$,k],status:s,error:p,route:null})}function _e(s,p){if(Te(s))return;const h=decodeURI(s.pathname.slice(e.length)||"/");for(const c of ie){const u=c.exec(h);if(u){const m=new URL(s.origin+lt(s.pathname,n)+s.search+s.hash);return{id:m.pathname+m.search,invalidating:p,route:c,params:ct(u),url:m}}}}function Te(s){return s.origin!==location.origin||!s.pathname.startsWith(e)}async function ge({url:s,scroll:p,keepfocus:h,redirect_chain:c,details:u,type:m,delta:_,nav_token:$,accepted:k,blocked:b}){var j,N,S,w;let v=!1;const O=_e(s,!1),L={from:le("from",{params:t.params,routeId:(N=(j=t.route)==null?void 0:j.id)!=null?N:null,url:t.url}),to:le("to",{params:(S=O==null?void 0:O.params)!=null?S:null,routeId:(w=O==null?void 0:O.route.id)!=null?w:null,url:s}),type:m};_!==void 0&&(L.delta=_);const I={...L,cancel:()=>{v=!0}};if(l.before_navigate.forEach(R=>R(I)),v){b();return}be(E),k(),f&&Y.navigating.set(L),await Ie(O,s,c,{scroll:p,keepfocus:h,details:u},$,()=>{l.after_navigate.forEach(R=>R(L)),Y.navigating.set(null)})}async function Ue(s,p,h,c){return s.origin===location.origin&&s.pathname===location.pathname&&!i?await oe({status:c,error:h,url:s,routeId:p}):await se(s)}function se(s){return location.href=s.href,new Promise(()=>{})}return{after_navigate:s=>{ve(()=>(l.after_navigate.push(s),()=>{const p=l.after_navigate.indexOf(s);l.after_navigate.splice(p,1)}))},before_navigate:s=>{ve(()=>(l.before_navigate.push(s),()=>{const p=l.before_navigate.indexOf(s);l.before_navigate.splice(p,1)}))},disable_scroll_handling:()=>{(g||!f)&&(d=!1)},goto:(s,p={})=>de(s,p,[]),invalidate:s=>{if(s===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof s=="function")o.push(s);else{const{href:p}=new URL(s,location.href);o.push(h=>h.href===p)}return Se()},invalidateAll:()=>(y=!0,Se()),prefetch:async s=>{const p=new URL(s,Be(document));await Le(p)},prefetch_routes:async s=>{const h=(s?ie.filter(c=>s.some(u=>c.exec(u))):ie).map(c=>Promise.all([...c.layouts,c.leaf].map(u=>u==null?void 0:u[1]())));await Promise.all(h)},apply_action:async s=>{if(s.type==="error"){const p=new URL(location.href),{branch:h,route:c}=t;if(!c)return;const u=await Ne(t.branch.length,h,c.errors);if(u){const m=await x({url:p,params:t.params,branch:h.slice(0,u.idx).concat(u.node),status:500,error:s.error,route:c});t=m.state;const _=ce();T.$set(m.props),_()}}else if(s.type==="redirect")de(s.location,{},[]);else{const p={form:s.data,page:{...q,form:s.data,status:s.status}},h=ce();T.$set(p),h()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",c=>{var _,$;let u=!1;const m={from:le("from",{params:t.params,routeId:($=(_=t.route)==null?void 0:_.id)!=null?$:null,url:t.url}),to:null,type:"unload",cancel:()=>u=!0};l.before_navigate.forEach(k=>k(m)),u?(c.preventDefault(),c.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){be(E);try{sessionStorage[Me]=JSON.stringify(ne)}catch{}}});const s=c=>{const{url:u,options:m}=Fe(c);if(u&&m.prefetch){if(Te(u))return;Le(u)}};let p;const h=c=>{clearTimeout(p),p=setTimeout(()=>{var u;(u=c.target)==null||u.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",s),addEventListener("mousemove",h),addEventListener("sveltekit:trigger_prefetch",s),addEventListener("click",c=>{if(c.button||c.which!==1||c.metaKey||c.ctrlKey||c.shiftKey||c.altKey||c.defaultPrevented)return;const{a:u,url:m,options:_}=Fe(c);if(!u||!m)return;const $=u instanceof SVGAElement;if(!$&&m.protocol!==location.protocol&&!(m.protocol==="https:"||m.protocol==="http:"))return;const k=(u.getAttribute("rel")||"").split(/\s+/);if(u.hasAttribute("download")||k.includes("external")||_.reload||($?u.target.baseVal:u.target))return;const[b,v]=m.href.split("#");if(v!==void 0&&b===location.href.split("#")[0]){H=!0,be(E),t.url=m,Y.page.set({...q,url:m}),Y.page.notify();return}ge({url:m,scroll:_.noscroll?Ee():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>c.preventDefault(),blocked:()=>c.preventDefault(),type:"link"})}),addEventListener("popstate",c=>{if(c.state){if(c.state[W]===E)return;const u=c.state[W]-E;ge({url:new URL(location.href),scroll:ne[c.state[W]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{E=c.state[W]},blocked:()=>{history.go(-u)},type:"popstate",delta:u})}}),addEventListener("hashchange",()=>{H&&(H=!1,history.replaceState({...history.state,[W]:++E},"",location.href))});for(const c of document.querySelectorAll("link"))c.rel==="icon"&&(c.href=c.href);addEventListener("pageshow",c=>{c.persisted&&Y.navigating.set(null)})},_hydrate:async({status:s,error:p,node_ids:h,params:c,routeId:u,data:m,form:_})=>{var b;i=!0;const $=new URL(location.href);let k;try{const v=h.map(async(O,L)=>{const I=m[L];return he({loader:pe[O],url:$,params:c,routeId:u,parent:async()=>{const j={};for(let N=0;N<L;N+=1)Object.assign(j,(await v[N]).data);return j},server_data_node:me(I)})});k=await x({url:$,params:c,branch:await Promise.all(v),status:s,error:p,form:_,route:(b=ie.find(O=>O.id===u))!=null?b:null})}catch(v){if(v instanceof Je){await se(new URL(v.location,location.href));return}k=await oe({status:v instanceof ke?v.status:500,error:te(v,{url:$,params:c,routeId:u}),url:$,routeId:u})}Ae(k)}}}async function He(r,e){const n=new URL(r);n.pathname=r.pathname.replace(/\/$/,"")+Dt;const o=await ue(n.href,{headers:{"x-sveltekit-invalidated":e.map(l=>l?"1":"").join(",")}}),a=await o.text();if(!o.ok)throw new Error(JSON.parse(a));return Kt(a)}function te(r,e){var n;return r instanceof ke?r.body:(n=Ut.handleError({error:r,event:e}))!=null?n:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Ht=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function le(r,e){for(const n of Ht)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return e}function ce(){return()=>{}}async function Zt({env:r,hydrate:e,paths:n,target:o,trailing_slash:a}){it(n);const l=zt({target:o,base:n.base,trailing_slash:a});st({client:l}),e?await l._hydrate(e):l.goto(location.href,{replaceState:!0}),l._start_router()}export{Zt as start};
