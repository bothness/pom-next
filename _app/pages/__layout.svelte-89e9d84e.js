import{S as o,i as _,s as u,F as c,e as f,c as m,a as p,d as i,b as d,g as h,G as y,H as v,I as g,q as $,o as w}from"../chunks/index-b53741bc.js";import{g as b,l as q,a as S,s as I,b as j,c as A}from"../chunks/config-83025504.js";function C(a){let t,n;const l=a[1].default,e=c(l,a,a[0],null);return{c(){t=f("main"),e&&e.c(),this.h()},l(s){t=m(s,"MAIN",{class:!0});var r=p(t);e&&e.l(r),r.forEach(i),this.h()},h(){d(t,"class","svelte-hxn0q3")},m(s,r){h(s,t,r),e&&e.m(t,null),n=!0},p(s,[r]){e&&e.p&&(!n||r&1)&&y(e,l,s,s[0],n?g(l,s[0],r,null):v(s[0]),null)},i(s){n||($(e,s),n=!0)},o(s){w(e,s),n=!1},d(s){s&&i(t),e&&e.d(s)}}}async function H({fetch:a}){let t=await b(j,I,a),l=await(await a(q)).json();l=l.filter(s=>s.is_active&&!s.is_overlay);let e=await S(A,l,a);return{stuff:{places:t,layers:l,sheets:e}}}function E(a,t,n){let{$$slots:l={},$$scope:e}=t;return a.$$set=s=>{"$$scope"in s&&n(0,e=s.$$scope)},[e,l]}class M extends o{constructor(t){super(),_(this,t,E,C,u,{})}}export{M as default,H as load};