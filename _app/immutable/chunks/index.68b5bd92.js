function j(){}function ut(t,e){for(const n in e)t[n]=e[n];return t}function Y(t){return t()}function J(){return Object.create(null)}function E(t){t.forEach(Y)}function Z(t){return typeof t=="function"}function jt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let M;function Lt(t,e){return M||(M=document.createElement("a")),M.href=e,t===M.href}function ft(t){return Object.keys(t).length===0}function dt(t,...e){if(t==null)return j;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Dt(t,e,n){t.$$.on_destroy.push(dt(e,n))}function Ht(t,e,n,i){if(t){const s=tt(t,e,n,i);return t[0](s)}}function tt(t,e,n,i){return t[1]&&i?ut(n.ctx.slice(),t[1](i(e))):n.ctx}function Pt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)o[l]=e.dirty[l]|s[l];return o}return e.dirty|s}return e.dirty}function Ot(t,e,n,i,s,o){if(s){const r=tt(e,n,i,o);t.p(r,s)}}function zt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let L=!1;function _t(){L=!0}function ht(){L=!1}function mt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function pt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=a?s+1:mt(1,s,d=>e[n[d]].claim_order,a))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,s=Math.max(_,s)}const o=[],r=[];let l=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);l>=c;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);o.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<o.length&&r[c].claim_order>=o[a].claim_order;)a++;const f=a<o.length?o[a]:null;t.insertBefore(r[c],f)}}function yt(t,e){t.appendChild(e)}function gt(t,e){if(L){for(pt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function bt(t,e,n){t.insertBefore(e,n||null)}function wt(t,e,n){L&&!n?gt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function T(t){t.parentNode&&t.parentNode.removeChild(t)}function Bt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function G(t){return document.createElement(t)}function et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function R(t){return document.createTextNode(t)}function Wt(){return R(" ")}function qt(){return R("")}function K(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Gt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function nt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Rt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:nt(t,i,e[i])}function Ft(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:nt(t,e,n)}function It(t,e,n){const i=new Set;for(let s=0;s<t.length;s+=1)t[s].checked&&i.add(t[s].__value);return n||i.delete(e),Array.from(i)}function Ut(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function Jt(t){return t===""?null:+t}function xt(t){return Array.from(t.childNodes)}function it(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function st(t,e,n,i,s=!1){it(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function rt(t,e,n,i){return st(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||o.push(l.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Kt(t,e,n){return rt(t,e,n,G)}function Qt(t,e,n){return rt(t,e,n,et)}function $t(t,e){return st(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>R(e),!0)}function Vt(t){return $t(t," ")}function Q(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Xt(t,e){const n=Q(t,"HTML_TAG_START",0),i=Q(t,"HTML_TAG_END",n);if(n===i)return new V(void 0,e);it(t);const s=t.splice(n,i-n+1);T(s[0]),T(s[s.length-1]);const o=s.slice(1,s.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new V(o,e)}function Yt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Zt(t,e){t.value=e??""}function te(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let S;function Et(){if(S===void 0){S=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{S=!0}}return S}function ee(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=G("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=Et();let o;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=K(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{o=K(i.contentWindow,"resize",e),e()}),yt(t,i),()=>{(s||o&&i.contentWindow)&&o(),T(i)}}function ne(t,e,n){t.classList[n?"add":"remove"](e)}function vt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ie(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Tt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=et(n.nodeName):this.e=G(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)bt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(T)}}class V extends Tt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)wt(this.t,this.n[n],e)}}function se(t,e){return new t(e)}let A;function v(t){A=t}function b(){if(!A)throw new Error("Function called outside component initialization");return A}function re(t){b().$$.before_update.push(t)}function ce(t){b().$$.on_mount.push(t)}function oe(t){b().$$.after_update.push(t)}function le(t){b().$$.on_destroy.push(t)}function ae(){const t=b();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=vt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function ue(t,e){return b().$$.context.set(t,e),e}function fe(t){return b().$$.context.get(t)}function de(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const x=[],X=[];let $=[];const B=[],ct=Promise.resolve();let W=!1;function ot(){W||(W=!0,ct.then(lt))}function _e(){return ot(),ct}function q(t){$.push(t)}function he(t){B.push(t)}const z=new Set;let w=0;function lt(){if(w!==0)return;const t=A;do{try{for(;w<x.length;){const e=x[w];w++,v(e),At(e.$$)}}catch(e){throw x.length=0,w=0,e}for(v(null),x.length=0,w=0;X.length;)X.pop()();for(let e=0;e<$.length;e+=1){const n=$[e];z.has(n)||(z.add(n),n())}$.length=0}while(x.length);for(;B.length;)B.pop()();W=!1,z.clear(),v(t)}function At(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}function kt(t){const e=[],n=[];$.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),$=e}const C=new Set;let g;function me(){g={r:0,c:[],p:g}}function pe(){g.r||E(g.c),g=g.p}function at(t,e){t&&t.i&&(C.delete(t),t.i(e))}function Nt(t,e,n,i){if(t&&t.o){if(C.has(t))return;C.add(t),g.c.push(()=>{C.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ye=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ge(t,e){Nt(t,1,1,()=>{e.delete(t.key)})}function be(t,e,n,i,s,o,r,l,c,a,f,_){let d=t.length,m=o.length,h=d;const D={};for(;h--;)D[t[h].key]=h;const k=[],H=new Map,P=new Map,F=[];for(h=m;h--;){const u=_(s,o,h),p=n(u);let y=r.get(p);y?i&&F.push(()=>y.p(u,e)):(y=a(p,u),y.c()),H.set(p,k[h]=y),p in D&&P.set(p,Math.abs(h-D[p]))}const I=new Set,U=new Set;function O(u){at(u,1),u.m(l,f),r.set(u.key,u),f=u.first,m--}for(;d&&m;){const u=k[m-1],p=t[d-1],y=u.key,N=p.key;u===p?(f=u.first,d--,m--):H.has(N)?!r.has(y)||I.has(y)?O(u):U.has(N)?d--:P.get(y)>P.get(N)?(U.add(y),O(u)):(I.add(N),d--):(c(p,r),d--)}for(;d--;){const u=t[d];H.has(u.key)||c(u,r)}for(;m;)O(k[m-1]);return E(F),k}function we(t,e){const n={},i={},s={$$scope:1};let o=t.length;for(;o--;){const r=t[o],l=e[o];if(l){for(const c in r)c in l||(i[c]=1);for(const c in l)s[c]||(n[c]=l[c],s[c]=1);t[o]=l}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function xe(t){return typeof t=="object"&&t!==null?t:{}}function $e(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ee(t){t&&t.c()}function ve(t,e){t&&t.l(e)}function Mt(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||q(()=>{const r=t.$$.on_mount.map(Y).filter(Z);t.$$.on_destroy?t.$$.on_destroy.push(...r):E(r),t.$$.on_mount=[]}),o.forEach(q)}function St(t,e){const n=t.$$;n.fragment!==null&&(kt(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ct(t,e){t.$$.dirty[0]===-1&&(x.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Te(t,e,n,i,s,o,r,l=[-1]){const c=A;v(t);const a=t.$$={fragment:null,ctx:[],props:o,update:j,not_equal:s,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:J(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};r&&r(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return a.ctx&&s(a.ctx[_],a.ctx[_]=h)&&(!a.skip_bound&&a.bound[_]&&a.bound[_](h),f&&Ct(t,_)),d}):[],a.update(),f=!0,E(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){_t();const _=xt(e.target);a.fragment&&a.fragment.l(_),_.forEach(T)}else a.fragment&&a.fragment.c();e.intro&&at(t.$$.fragment),Mt(t,e.target,e.anchor,e.customElement),ht(),lt()}v(c)}class Ae{$destroy(){St(this,1),this.$destroy=j}$on(e,n){if(!Z(n))return j;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Bt as $,Mt as A,St as B,ie as C,gt as D,j as E,fe as F,Dt as G,Lt as H,K as I,E as J,ne as K,Ht as L,Ot as M,zt as N,Pt as O,ue as P,et as Q,Qt as R,Ae as S,V as T,Xt as U,ae as V,le as W,ye as X,dt as Y,$e as Z,he as _,Wt as a,It as a0,Jt as a1,Zt as a2,Ut as a3,re as a4,Ft as a5,q as a6,ee as a7,be as a8,ge as a9,ut as aa,Rt as ab,we as ac,xe as ad,Gt as ae,de as af,wt as b,Vt as c,Nt as d,qt as e,pe as f,at as g,T as h,Te as i,oe as j,G as k,Kt as l,xt as m,nt as n,ce as o,te as p,R as q,$t as r,jt as s,_e as t,Yt as u,me as v,X as w,se as x,Ee as y,ve as z};
