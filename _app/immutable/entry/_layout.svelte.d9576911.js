import{S as E,i as v,s as C,C as S,e as h,a as q,D as w,h as m,c as L,E as b,b as g,F as D,G as F,H as G,g as H,d as I,I as p,J as _,k as J,q as N,l as T,m as Y,r as j}from"../chunks/index.13a7cc8a.js";import{w as u}from"../chunks/singletons.4d375eb1.js";import{p as x}from"../chunks/stores.05dc105f.js";import{t as z}from"../chunks/config.13881397.js";import{i as A}from"../chunks/utils.12dbc5d4.js";function y(l){let a,o;return{c(){a=J("style"),o=N(`html {
			direction: rtl;
		}`)},l(s){a=T(s,"STYLE",{});var t=Y(a);o=j(t,`html {
			direction: rtl;
		}`),t.forEach(m)},m(s,t){g(s,a,t),b(a,o)},d(s){s&&m(a)}}}function B(l){let a,o,s,t=l[0]&&y();const c=l[6].default,n=S(c,l,l[5],null);return{c(){t&&t.c(),a=h(),o=q(),n&&n.c()},l(e){const r=w("svelte-1vsb417",document.head);t&&t.l(r),a=h(),r.forEach(m),o=L(e),n&&n.l(e)},m(e,r){t&&t.m(document.head,null),b(document.head,a),g(e,o,r),n&&n.m(e,r),s=!0},p(e,[r]){e[0]?t||(t=y(),t.c(),t.m(a.parentNode,a)):t&&(t.d(1),t=null),n&&n.p&&(!s||r&32)&&D(n,c,e,e[5],s?G(c,e[5],r,null):F(e[5]),null)},i(e){s||(H(n,e),s=!0)},o(e){I(n,e),s=!1},d(e){t&&t.d(e),m(a),e&&m(o),n&&n.d(e)}}}function K(l,a,o){let s,t,c;p(l,x,i=>o(4,t=i));let{$$slots:n={},$$scope:e}=a,r=u();p(l,r,i=>o(3,s=i)),_("lang",r);let f=u();p(l,f,i=>o(0,c=i)),_("rtl",f);let d=u();_("t",d);let k=u(!1);return _("menu_active",k),l.$$set=i=>{"$$scope"in i&&o(5,e=i.$$scope)},l.$$.update=()=>{l.$$.dirty&16&&r.set(t.params.lang?t.params.lang:"en"),l.$$.dirty&8&&f.set(s=="ar"),l.$$.dirty&8&&d.set(i=>A(i,z,s))},[c,r,f,s,t,e,n]}class U extends E{constructor(a){super(),v(this,a,K,B,C,{})}}export{U as default};
