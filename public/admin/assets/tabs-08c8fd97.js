import{d as O,c5 as E,x as R,f as L,aJ as B,Q as j,h as _,c as h,e as l,w as n,F as D,T as q,u as o,s as N,i,t as d,q as u,a as S,v as V,bg as $,bh as F,bi as I,ax as M,ay as z}from"./index-2a89d409.js";/* empty css                    *//* empty css                  *//* empty css                    *//* empty css                  *//* empty css                     */import"./el-dropdown-item-4ed993c7.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";const P={class:"tab-wrap w-full px-[16px]"},Q=O({__name:"tabs",setup(A){const t=E(),r=R(),b=L();B(()=>{t.addTab(r)}),j(r,e=>{t.addTab(e)});const f=e=>{const a=t.tabs[e.props.name];b.push({path:a.path,query:a.query})},k=e=>{if(r.path==e){const a=Object.keys(t.tabs);b.push({path:a[a.indexOf(e)-1]})}t.removeTab(e)},g=e=>{const a=Object.keys(t.tabs);for(let s=a.indexOf(e)-1;s>=0;s--)delete t.tabs[a[s]];b.push({path:e})},v=e=>{const a=Object.keys(t.tabs);for(let s=a.indexOf(e)+1;s<a.length;s++)delete t.tabs[a[s]];b.push({path:e})},x=e=>{Object.keys(t.tabs).forEach(s=>{s!=e&&delete t.tabs[s]}),b.push({path:e})};return(e,a)=>{const s=$,w=F,y=I,C=M,T=z;return _(),h("div",P,[l(T,{closable:o(t).tabLength>1,"model-value":o(r).path,onTabClick:f,onTabRemove:k},{default:n(()=>[(_(!0),h(D,null,q(o(t).tabs,(c,G,p)=>(_(),N(C,{name:c.path,key:p},{label:n(()=>[l(y,{trigger:"contextmenu",placement:"bottom-start"},{dropdown:n(()=>[l(w,null,{default:n(()=>[l(s,{icon:"Back",disabled:p==0,onClick:m=>g(c.path)},{default:n(()=>[i(d(o(u)("tabs.closeLeft")),1)]),_:2},1032,["disabled","onClick"]),l(s,{icon:"Right",disabled:p==o(t).tabLength-1,onClick:m=>v(c.path)},{default:n(()=>[i(d(o(u)("tabs.closeRight")),1)]),_:2},1032,["disabled","onClick"]),l(s,{icon:"Close",disabled:o(t).tabLength==1,onClick:m=>x(c.path)},{default:n(()=>[i(d(o(u)("tabs.closeOther")),1)]),_:2},1032,["disabled","onClick"])]),_:2},1024)]),default:n(()=>[S("span",{class:V([{"text-primary":o(r).path==c.path},"tab-name"])},d(c.title),3)]),_:2},1024)]),_:2},1032,["name"]))),128))]),_:1},8,["closable","model-value"])])}}});const te=J(Q,[["__scopeId","data-v-21cf6636"]]);export{te as default};
