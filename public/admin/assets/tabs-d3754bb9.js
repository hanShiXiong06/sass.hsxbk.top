import{d as O,c5 as E,x as R,f as L,aJ as B,Q as j,h as _,c as h,e as c,w as n,F as D,T as q,u as o,s as N,i,t as d,q as u,a as S,v as V,bg as $,bh as F,bi as I,ax as M,ay as z}from"./index-37fee5a0.js";/* empty css                    *//* empty css                  *//* empty css                    *//* empty css                  *//* empty css                     */import"./el-dropdown-item-4ed993c7.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";const P={class:"tab-wrap w-full px-[16px]"},Q=O({__name:"tabs",setup(A){const t=E(),r=R(),b=L();B(()=>{t.addTab(r)}),j(r,e=>{t.addTab(e)});const f=e=>{const a=t.tabs[e.props.name];b.push({path:a.path,query:a.query})},k=e=>{if(r.path==e){const a=Object.keys(t.tabs);b.push({path:a[a.indexOf(e)-1]})}t.removeTab(e)},g=e=>{const a=Object.keys(t.tabs);for(let s=a.indexOf(e)-1;s>=0;s--)delete t.tabs[a[s]];b.push({path:e})},v=e=>{const a=Object.keys(t.tabs);for(let s=a.indexOf(e)+1;s<a.length;s++)delete t.tabs[a[s]];b.push({path:e})},x=e=>{Object.keys(t.tabs).forEach(s=>{s!=e&&delete t.tabs[s]}),b.push({path:e})};return(e,a)=>{const s=$,w=F,y=I,C=M,T=z;return _(),h("div",P,[c(T,{closable:o(t).tabLength>1,"model-value":o(r).path,onTabClick:f,onTabRemove:k},{default:n(()=>[(_(!0),h(D,null,q(o(t).tabs,(l,G,p)=>(_(),N(C,{name:l.path,key:p},{label:n(()=>[c(y,{trigger:"contextmenu",placement:"bottom-start"},{dropdown:n(()=>[c(w,null,{default:n(()=>[c(s,{icon:"Back",disabled:p==0,onClick:m=>g(l.path)},{default:n(()=>[i(d(o(u)("tabs.closeLeft")),1)]),_:2},1032,["disabled","onClick"]),c(s,{icon:"Right",disabled:p==o(t).tabLength-1,onClick:m=>v(l.path)},{default:n(()=>[i(d(o(u)("tabs.closeRight")),1)]),_:2},1032,["disabled","onClick"]),c(s,{icon:"Close",disabled:o(t).tabLength==1,onClick:m=>x(l.path)},{default:n(()=>[i(d(o(u)("tabs.closeOther")),1)]),_:2},1032,["disabled","onClick"])]),_:2},1024)]),default:n(()=>[S("span",{class:V([{"text-primary":o(r).path==l.path},"tab-name"])},d(l.title),3)]),_:2},1024)]),_:2},1032,["name"]))),128))]),_:1},8,["closable","model-value"])])}}});const te=J(Q,[["__scopeId","data-v-876623b3"]]);export{te as default};
