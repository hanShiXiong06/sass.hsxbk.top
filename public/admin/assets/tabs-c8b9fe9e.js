import{d as R,c5 as E,D as S,aJ as D,Q as L,R as B,a0 as j,u as o,h as _,c as f,e as r,w as n,F as q,T as N,s as V,i as m,t as b,q as p,a as $,v as F,x as I,bg as M,bh as z,bi as J,ax as P,ay as Q,f as A}from"./index-6f32d09b.js";/* empty css                    *//* empty css                  *//* empty css                    *//* empty css                  *//* empty css                     */import"./el-dropdown-item-4ed993c7.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";const H={class:"tab-wrap w-full px-[16px]"},K=R({__name:"tabs",setup(U){const a=E(),h=S(),d=I(),l=A();D(()=>{a.addTab(d)}),L(d,e=>{a.addTab(e)});const k=e=>{const t=a.tabs[e.props.name];l.push({name:t.name,query:t.query})},v=e=>{if(d.name==e){const t=Object.keys(a.tabs);t.indexOf(e)==0?l.push({name:t[1]}):l.push({name:t[t.indexOf(e)-1]})}a.removeTab(e)},y=e=>{const t=Object.keys(a.tabs);for(let s=t.indexOf(e)-1;s>=0;s--)delete a.tabs[t[s]];l.push({name:e})},w=e=>{const t=Object.keys(a.tabs);for(let s=t.indexOf(e)+1;s<t.length;s++)delete a.tabs[t[s]];l.push({name:e})},x=e=>{Object.keys(a.tabs).forEach(s=>{s!=e&&delete a.tabs[s]}),l.push({name:e})};return(e,t)=>{const s=M,g=z,C=J,T=P,O=Q;return B((_(),f("div",H,[r(O,{closable:o(a).tabLength>1,"model-value":o(d).name,onTabClick:k,onTabRemove:v},{default:n(()=>[(_(!0),f(q,null,N(o(a).tabs,(c,W,i)=>(_(),V(T,{name:c.name,key:i},{label:n(()=>[r(C,{trigger:"contextmenu",placement:"bottom-start"},{dropdown:n(()=>[r(g,null,{default:n(()=>[r(s,{icon:"Back",disabled:i==0,onClick:u=>y(c.name)},{default:n(()=>[m(b(o(p)("tabs.closeLeft")),1)]),_:2},1032,["disabled","onClick"]),r(s,{icon:"Right",disabled:i==o(a).tabLength-1,onClick:u=>w(c.name)},{default:n(()=>[m(b(o(p)("tabs.closeRight")),1)]),_:2},1032,["disabled","onClick"]),r(s,{icon:"Close",disabled:o(a).tabLength==1,onClick:u=>x(c.name)},{default:n(()=>[m(b(o(p)("tabs.closeOther")),1)]),_:2},1032,["disabled","onClick"])]),_:2},1024)]),default:n(()=>[$("span",{class:F([{"text-primary":o(d).name==c.name},"tab-name"])},b(c.title),3)]),_:2},1024)]),_:2},1032,["name"]))),128))]),_:1},8,["closable","model-value"])],512)),[[j,o(h).tab]])}}});const ne=G(K,[["__scopeId","data-v-dfadbf73"]]);export{ne as default};
