import{S as A,i as C,s as H,k as b,a as P,q as g,e as d,C as j,l as y,h as m,c as k,m as q,r as v,n as c,D as M,b as h,u as w,E as O,F as S,G as D,T as F,U as G}from"../chunks/index.43b57038.js";import{b as N}from"../chunks/config.2dcd21c1.js";function T(n){let l,s=n[4](n[1])+"",o;return{c(){l=new F(!1),o=d(),this.h()},l(t){l=G(t,!1),o=d(),this.h()},h(){l.a=o},m(t,r){l.m(s,t,r),h(t,o,r)},p(t,r){r&2&&s!==(s=t[4](t[1])+"")&&l.p(s)},d(t){t&&m(o),t&&l.d()}}}function U(n){let l,s,o,t,r,p,_,u,f;document.title=l=n[0]+" - "+n[2]("Palestine Open Maps");let a=n[1]&&T(n);return{c(){s=b("meta"),t=b("meta"),r=P(),p=b("h1"),_=g(n[0]),u=P(),a&&a.c(),f=d(),this.h()},l(e){const i=j("svelte-5eijh9",document.head);s=y(i,"META",{property:!0,content:!0}),t=y(i,"META",{property:!0,content:!0}),i.forEach(m),r=k(e),p=y(e,"H1",{});var E=q(p);_=v(E,n[0]),E.forEach(m),u=k(e),a&&a.l(e),f=d(),this.h()},h(){c(s,"property","og:title"),c(s,"content",o=n[0]+" - "+n[2]("Palestine Open Maps")),c(t,"property","og:image"),c(t,"content",N+"/img/haifa-crop.jpg")},m(e,i){M(document.head,s),M(document.head,t),h(e,r,i),h(e,p,i),M(p,_),h(e,u,i),a&&a.m(e,i),h(e,f,i)},p(e,[i]){i&5&&l!==(l=e[0]+" - "+e[2]("Palestine Open Maps"))&&(document.title=l),i&5&&o!==(o=e[0]+" - "+e[2]("Palestine Open Maps"))&&c(s,"content",o),i&1&&w(_,e[0]),e[1]?a?a.p(e,i):(a=T(e),a.c(),a.m(f.parentNode,f)):a&&(a.d(1),a=null)},i:O,o:O,d(e){m(s),m(t),e&&m(r),e&&m(p),e&&m(u),a&&a.d(e),e&&m(f)}}}function z(n,l,s){let o,{data:t}=l,{title:r,content:p,description:_}=t;const u=S("t");D(n,u,a=>s(2,o=a));function f(a){return a.replaceAll('src="/','src="https://palopenmaps.org/')}return n.$$set=a=>{"data"in a&&s(5,t=a.data)},n.$$.update=()=>{n.$$.dirty&32&&s(0,{title:r,content:p,description:_}=t,r,(s(1,p),s(5,t)))},[r,p,o,u,f,t]}class J extends A{constructor(l){super(),C(this,l,z,U,H,{data:5})}}export{J as default};
