import{d as O,c3 as E,x as R,f as L,aQ as B,a5 as D,h as _,c as h,e as l,w as n,F as j,Q as q,u as o,s as N,i,t as b,q as u,a as S,v as V,be as $,bf as F,bg as I,aD as M,aE as Q}from"./index-17984968.js";/* empty css                    *//* empty css                  *//* empty css                         *//* empty css                  *//* empty css                     */import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";const P={class:"tab-wrap w-full px-[16px]"},A=O({__name:"tabs",setup(G){const t=E(),r=R(),d=L();B(()=>{t.addTab(r)}),D(r,e=>{t.addTab(e)});const f=e=>{const a=t.tabs[e.props.name];d.push({path:a.path,query:a.query})},k=e=>{if(r.path==e){const a=Object.keys(t.tabs);d.push({path:a[a.indexOf(e)-1]})}t.removeTab(e)},g=e=>{const a=Object.keys(t.tabs);for(let s=a.indexOf(e)-1;s>=0;s--)delete t.tabs[a[s]];d.push({path:e})},v=e=>{const a=Object.keys(t.tabs);for(let s=a.indexOf(e)+1;s<a.length;s++)delete t.tabs[a[s]];d.push({path:e})},w=e=>{Object.keys(t.tabs).forEach(s=>{s!=e&&delete t.tabs[s]}),d.push({path:e})};return(e,a)=>{const s=$,x=F,C=I,y=M,T=Q;return _(),h("div",P,[l(T,{closable:o(t).tabLength>1,"model-value":o(r).path,onTabClick:f,onTabRemove:k},{default:n(()=>[(_(!0),h(j,null,q(o(t).tabs,(c,H,p)=>(_(),N(y,{name:c.path,key:p},{label:n(()=>[l(C,{trigger:"contextmenu",placement:"bottom-start"},{dropdown:n(()=>[l(x,null,{default:n(()=>[l(s,{icon:"Back",disabled:p==0,onClick:m=>g(c.path)},{default:n(()=>[i(b(o(u)("tabs.closeLeft")),1)]),_:2},1032,["disabled","onClick"]),l(s,{icon:"Right",disabled:p==o(t).tabLength-1,onClick:m=>v(c.path)},{default:n(()=>[i(b(o(u)("tabs.closeRight")),1)]),_:2},1032,["disabled","onClick"]),l(s,{icon:"Close",disabled:o(t).tabLength==1,onClick:m=>w(c.path)},{default:n(()=>[i(b(o(u)("tabs.closeOther")),1)]),_:2},1032,["disabled","onClick"])]),_:2},1024)]),default:n(()=>[S("span",{class:V([{"text-primary":o(r).path==c.path},"tab-name"])},b(c.title),3)]),_:2},1024)]),_:2},1032,["name"]))),128))]),_:1},8,["closable","model-value"])])}}});const ee=z(A,[["__scopeId","data-v-c491d485"]]);export{ee as default};