import{r as y}from"./index.1de1fe79.js";import{b as F}from"./paths.19c3a1c1.js";import{r as Z}from"./config.bb7566b5.js";var I={},R={},U=34,m=10,D=13;function S(r){return new Function("d","return {"+r.map(function(t,n){return JSON.stringify(t)+": d["+n+'] || ""'}).join(",")+"}")}function v(r,t){var n=S(r);return function(o,i){return t(n(o),i,r)}}function M(r){var t=Object.create(null),n=[];return r.forEach(function(o){for(var i in o)i in t||n.push(t[i]=i)}),n}function u(r,t){var n=r+"",o=n.length;return o<t?new Array(t-o+1).join(0)+n:n}function B(r){return r<0?"-"+u(-r,6):r>9999?"+"+u(r,6):u(r,4)}function H(r){var t=r.getUTCHours(),n=r.getUTCMinutes(),o=r.getUTCSeconds(),i=r.getUTCMilliseconds();return isNaN(r)?"Invalid Date":B(r.getUTCFullYear())+"-"+u(r.getUTCMonth()+1,2)+"-"+u(r.getUTCDate(),2)+(i?"T"+u(t,2)+":"+u(n,2)+":"+u(o,2)+"."+u(i,3)+"Z":o?"T"+u(t,2)+":"+u(n,2)+":"+u(o,2)+"Z":n||t?"T"+u(t,2)+":"+u(n,2)+"Z":"")}function L(r){var t=new RegExp('["'+r+`
\r]`),n=r.charCodeAt(0);function o(e,f){var c,s,a=i(e,function(p,l){if(c)return c(p,l-1);s=p,c=f?v(p,f):S(p)});return a.columns=s||[],a}function i(e,f){var c=[],s=e.length,a=0,p=0,l,E=s<=0,d=!1;e.charCodeAt(s-1)===m&&--s,e.charCodeAt(s-1)===D&&--s;function O(){if(E)return R;if(d)return d=!1,I;var w,j=a,g;if(e.charCodeAt(j)===U){for(;a++<s&&e.charCodeAt(a)!==U||e.charCodeAt(++a)===U;);return(w=a)>=s?E=!0:(g=e.charCodeAt(a++))===m?d=!0:g===D&&(d=!0,e.charCodeAt(a)===m&&++a),e.slice(j+1,w-1).replace(/""/g,'"')}for(;a<s;){if((g=e.charCodeAt(w=a++))===m)d=!0;else if(g===D)d=!0,e.charCodeAt(a)===m&&++a;else if(g!==n)continue;return e.slice(j,w)}return E=!0,e.slice(j,s)}for(;(l=O())!==R;){for(var N=[];l!==I&&l!==R;)N.push(l),l=O();f&&(N=f(N,p++))==null||c.push(N)}return c}function h(e,f){return e.map(function(c){return f.map(function(s){return T(c[s])}).join(r)})}function C(e,f){return f==null&&(f=M(e)),[f.map(T).join(r)].concat(h(e,f)).join(`
`)}function A(e,f){return f==null&&(f=M(e)),h(e,f).join(`
`)}function b(e){return e.map(_).join(`
`)}function _(e){return e.map(T).join(r)}function T(e){return e==null?"":e instanceof Date?H(e):t.test(e+="")?'"'+e.replace(/"/g,'""')+'"':e}return{parse:o,parseRows:i,format:C,formatBody:A,formatRows:b,formatRow:_,formatValue:T}}var $=L(","),z=$.parse;function P(r){for(var t in r){var n=r[t].trim(),o,i;if(!n)n=null;else if(n==="true")n=!0;else if(n==="false")n=!1;else if(n==="NaN")n=NaN;else if(!isNaN(o=+n))n=o;else if(i=n.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/))V&&i[4]&&!i[7]&&(n=n.replace(/-/g,"/").replace(/T/," ")),n=new Date(n);else continue;r[t]=n}return r}const V=new Date("2019-01-01T00:00").getHours()||new Date("2019-07-01T00:00").getHours();async function Y({fetch:r,params:t}){let o=await(await r(Z)).text(),i=z(o,P),h=null,C=i.find(A=>+A.id_old==+t.slug);throw C&&(h=C.slug),y(301,`${F}/en/maps/${h}/`)}const k=Object.freeze(Object.defineProperty({__proto__:null,load:Y},Symbol.toStringTag,{value:"Module"}));export{k as _,Y as l};
